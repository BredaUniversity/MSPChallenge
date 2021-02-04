<?php
	class User extends Base {

		protected $allowed = array(
			["RequestSession", Security::ACCESS_LEVEL_FLAG_NONE]
		); 

		/**
		 * @apiGroup User
		 * @apiDescription Creates a new session for the desired country id.
		 * @api {POST} /user/RequestSession Set State
		 * @apiSuccess {json} Returns a json object describing the 'success' state, the 'session_id' generated for the user. And in case of a failure a 'message' that describes what went wrong.  
		 */
		public function RequestSession(string $build_timestamp, int $country_id, string $country_password)
		{
			$response = array();

			$game = new Game();
			$config = $game->GetGameConfigValues();

			if (array_key_exists("application_versions", $config))
			{
				$clientBuildDate = DateTime::createFromFormat(DateTime::ATOM, $build_timestamp);

				$versionConfig = $config["application_versions"];
				$minDate = new DateTime("@0");
				$minBuildDate = $minDate;
				if(array_key_exists("client_build_date_min", $versionConfig))
				{
					$minBuildDate = DateTime::createFromFormat(DateTime::ATOM, $versionConfig["client_build_date_min"]);
				}
				$maxBuildDate = $minDate;
				if(array_key_exists("client_build_date_max", $versionConfig))
				{
					$maxBuildDate = DateTime::createFromFormat(DateTime::ATOM, $versionConfig["client_build_date_max"]);
				}
				$maxBuildDate = (array_key_exists("client_build_date_max", $versionConfig))? $versionConfig["client_build_date_max"] : -1;

				if ($minBuildDate > $clientBuildDate || ($maxBuildDate > $minDate && $maxBuildDate < $clientBuildDate))
				{
					if ($maxBuildDate > $minDate)
					{
						$clientVersionsMessage = "Accepted client versions are between ".$minBuildDate->format(DateTime::ATOM)." and ".$maxBuildDate->format(DateTime::ATOM).".";
					}
					else 
					{
						$clientVersionsMessage = "Accepted client versions are from ".$minBuildDate->format(DateTime::ATOM)." onwards.";
					}

					throw new Exception("Incompatible client version.\n".$clientVersionsMessage."\nYour client version is ".$clientBuildDate->format(DateTime::ATOM).".");
				}
			}

			$passwords = Database::GetInstance()->query("SELECT game_session_password_admin, game_session_password_player FROM game_session");
			$hasCorrectPassword = true;
			if (count($passwords) > 0)
			{
				$password =  ($country_id < 3)? $passwords[0]["game_session_password_admin"] : $passwords[0]["game_session_password_player"];
				$hasCorrectPassword = $password == $country_password;
			}

			if ($hasCorrectPassword)
			{
				$response["session_id"] = Database::GetInstance()->query("INSERT INTO user(user_lastupdate, user_country_id) VALUES (0, ?)", array($country_id), true);
				$security = new Security();
				$response["api_access_token"] = $security->GenerateToken()["token"];
				$response["api_access_recovery_token"] = $security->GetRecoveryToken()["token"];
			}
			else 
			{
				throw new Exception("Incorrect password.");
			}

			return $response;
		}
	}
?>
