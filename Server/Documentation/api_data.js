define({ "api": [
  {
    "group": "Cel",
    "type": "GET",
    "url": "/cel/GetCELConfig",
    "title": "Get Config",
    "description": "<p>Returns the Json encoded config string</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "GetCelGetcelconfig"
  },
  {
    "group": "Cel",
    "type": "GET",
    "url": "/cel/ShouldUpdate",
    "title": "Should Update",
    "description": "<p>Should Cel update this month?</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "GetCelShouldupdate"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/get",
    "title": "Get",
    "description": "<p>Get all active energy connections</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Cel",
    "name": "PostCelGet"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/GetConnections",
    "title": "GetConnections",
    "description": "<p>Get all active energy connections</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelGetconnections"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/GetGrids",
    "title": "Get Grids",
    "description": "<p>Get all grids and their associated sockets, sorted per country</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelGetgrids"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/GetNodes",
    "title": "Get Nodes",
    "description": "<p>Get all nodes that have an output associated with them</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelGetnodes"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/GetSources",
    "title": "Get Sources",
    "description": "<p>Returns a list of all active sources</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelGetsources"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/SetGeomCapacity",
    "title": "Set Geometry Capacity",
    "description": "<p>Set the energy capacity of a specific geometry object</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geomCapacityValues",
            "description": "<p>Json Encoded string in the format [ { &quot;id&quot; : GRID_ID, &quot;capacity&quot;: CAPACITY_VALUE }]</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "capacity",
            "description": "<p>capacity of node</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelSetgeomcapacity"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/SetGridCapacity",
    "title": "Set Grid Capacity",
    "description": "<p>Set the energy capacity of a grid per country, uses the server month time</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kpiValues",
            "description": "<p>Json encoded string in the format [ { &quot;grid&quot;: GRID_ID, &quot;actual&quot;: ACTUAL_ENERGY_VALUE, &quot;country&quot;: COUNTRY_ID } ]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelSetgridcapacity"
  },
  {
    "group": "Cel",
    "type": "POST",
    "url": "/cel/UpdateFinished",
    "title": "Update Finished",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "month",
            "description": "<p>The month Cel just finished an update for.</p>"
          }
        ]
      }
    },
    "description": "<p>Notify that Cel has finished updating a month</p>",
    "version": "0.0.0",
    "filename": "../class/class.cel.php",
    "groupTitle": "Cel",
    "name": "PostCelUpdatefinished"
  },
  {
    "group": "Energy",
    "type": "GET",
    "url": "/energy/GetDependentEnergyPlans",
    "title": "Get Dependent Energy Plans.",
    "description": "<p>Get all the plan ids that are dependent on this plan</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Id of the plan that you want to find the dependent energy plans of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "GetEnergyGetdependentenergyplans"
  },
  {
    "group": "Energy",
    "type": "GET",
    "url": "/energy/GetOverlappingEnergyPlans",
    "title": "Get Overlapping Energy Plans.",
    "description": "<p>Get all the plan ids that are overlapping with this plan. Meaning they are referencing deleted grids in the current plan.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Id of the plan that you want to find the overlapping energy plans of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "GetEnergyGetoverlappingenergyplans"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/AddGrid",
    "title": "Add Grid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>grid name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "persistent",
            "description": "<p>(optional) persistent id, defaults to the newly created id</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new grid</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "success",
            "description": "<p>grid id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyAddgrid"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/AddOutput",
    "title": "Add Output",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "maxcapacity",
            "description": "<p>maximum capacity</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new energy_output entry for a geometry object</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyAddoutput"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/AddSocket",
    "title": "Add Socket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "grid",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "geometry",
            "description": "<p>geometry id</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new socket for a single country for a certain grid</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyAddsocket"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/AddSource",
    "title": "Add Source",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "grid",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "geometry",
            "description": "<p>geometry id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>country id</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new socket for a single country for a certain grid</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyAddsource"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/BatchCreateConnection",
    "title": "Batch Create Connection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>Json encoded array containing start ID, end ID, cable ID and coords. Ex: [{&quot;start&quot;: startID(int), &quot;end&quot;: endID(int), &quot;cable&quot;: cableID(int), &quot;coords&quot;: coordinates(string)}]</p>"
          }
        ]
      }
    },
    "description": "<p>Batch process of creating new connections</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyBatchcreateconnection"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/CreateConnection",
    "title": "Create Connection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>ID of the start geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>ID of the end geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cable",
            "description": "<p>ID of the cable geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coords",
            "description": "<p>coordinates of the starting point, saved as: [123.456, 999.123]</p>"
          }
        ]
      }
    },
    "description": "<p>Create a new connection between 2 points</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyCreateconnection"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteConnection",
    "title": "Delete Connection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "cable",
            "description": "<p>ID of the cable geometry</p>"
          }
        ]
      }
    },
    "description": "<p>Deletes a connection</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeleteconnection"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteGrid",
    "title": "Delete Grid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>grid id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete a grid and its sockets, sources and energy by the grid id</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeletegrid"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteName",
    "title": "Delete Name",
    "description": "<p>Delete the name of a grid</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the geometry that the name is linked to (as used when inserting or updating the name)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeletename"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteOutput",
    "title": "Delete Output",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete the energy_output of a geometry object</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeleteoutput"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteSocket",
    "title": "Delete Socket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "geometry",
            "description": "<p>geometry id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete the sockets of a geometry object</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeletesocket"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/DeleteSource",
    "title": "Delete Source",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "geometry",
            "description": "<p>geometry id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete the sources of a geometry object</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyDeletesource"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/GetGridOutput",
    "title": "Get Grid Output",
    "description": "<p>gets all energy actual from the energy grid</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "success",
            "description": "<p>List of objects (grid_id, country)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyGetgridoutput"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/GetUsedCapacity",
    "title": "Get Used Capacity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id</p>"
          }
        ]
      }
    },
    "description": "<p>Get the used capacity of a geometry object in energy_output</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyGetusedcapacity"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/GridActual",
    "title": "Grid Actual",
    "description": "<p>Add or update the grid actual</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "energyid",
            "description": "<p>grid_energy_id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>country id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyGridactual"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/name",
    "title": "Name",
    "description": "<p>add or change the name of an energy grid</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of any geometry inside the grid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the grid</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyName"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/SetDeleted",
    "title": "Set Deleted",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delete",
            "description": "<p>list of comma separated persistent ids of grids to be removed (id,id,...)</p>"
          }
        ]
      }
    },
    "description": "<p>Set the grids to be deleted in this plan. Will first remove the previously deleted grids for the plan and then add the new ones. Note that there is no verification if the added values are actually correct.</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergySetdeleted"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/SetOutput",
    "title": "Set Output",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "capacity",
            "description": "<p>current node capacity</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "maxcapacity",
            "description": "<p>maximum capacity of node</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>id of the country</p>"
          }
        ]
      }
    },
    "description": "<p>Creates or updates the output of an element</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergySetoutput"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/UpdateGridEnergy",
    "title": "Update Grid Energy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expected",
            "description": "<p>list of values (country:expected,country:expected,...)</p>"
          }
        ]
      }
    },
    "description": "<p>Adds new entries to grid_energy and deleted all old grid_energy entries for the given grid</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyUpdategridenergy"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/UpdateGridName",
    "title": "Update Grid Name",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>grid name</p>"
          }
        ]
      }
    },
    "description": "<p>Change the name of a grid</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyUpdategridname"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/UpdateGridSockets",
    "title": "Update Grid Sockets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sockets",
            "description": "<p>a string in the format (geomID,geomID,etc.). Example: 1,2,3,4</p>"
          }
        ]
      }
    },
    "description": "<p>When called, does the following:\t\t <br/>1. Removes all grid_socket entries with the given grid_socket_grid_id. <br/>2. Adds new entries for all geomID combinations in &quot;grid_socket&quot;, with grid_socket_grid_id set to the given value.</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyUpdategridsockets"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/UpdateGridSources",
    "title": "Update Grid Sources",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>grid id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sources",
            "description": "<p>a string in the format (geomID,geomID,etc.). Example: 1,2,3,4</p>"
          }
        ]
      }
    },
    "description": "<p>When called, does the following:\t\t <br/>1. Removes all grid_source entries with the given grid_source_grid_id. <br/>2. Adds new entries for all country:geomID combinations in &quot;grid_source&quot;, with grid_source_grid_id set to the given value.</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyUpdategridsources"
  },
  {
    "group": "Energy",
    "type": "POST",
    "url": "/energy/UpdateMaxCapacity",
    "title": "Update Max Capacity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "maxcapacity",
            "description": "<p>maximum capacity</p>"
          }
        ]
      }
    },
    "description": "<p>Update the maximum capacity of a geometry object in energy_output</p>",
    "version": "0.0.0",
    "filename": "../class/class.energy.php",
    "groupTitle": "Energy",
    "name": "PostEnergyUpdatemaxcapacity"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/Config",
    "title": "Config",
    "description": "<p>returns a json string with the &quot;Global Data&quot; of the config file</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "json",
            "description": "<p>string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameConfig"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/GetConfiguredSimulations",
    "title": "Get Configured Simulation Launch Parameters",
    "description": "<p>Returns the start configuration of the various simulations that are configured in the current configuration file.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameGetconfiguredsimulations"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/GetCurrentMonth",
    "title": "GetCurrentMonth",
    "description": "<p>Gets the current month of the active game.</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameGetcurrentmonth"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/IsOnline",
    "title": "Is Online",
    "description": "<p>Check if the server is online</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "online",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameIsonline"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/meta",
    "title": "Meta",
    "description": "<p>Get all layer meta data required for a game</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameMeta"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/StartConfiguredSimulations",
    "title": "Start Configured Simulations",
    "description": "<p>Starts all the configured simulation applications.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameStartconfiguredsimulations"
  },
  {
    "group": "Game",
    "type": "GET",
    "url": "/game/tick",
    "title": "Tick",
    "description": "<p>Tick the game server, updating the plans if required</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "GetGameTick"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/latest/:debug/:debug_update_time/:debug_perf_timings",
    "title": "Latest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "teamID",
            "description": "<p>The team_id (country_id) that we want to get the latest data for.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "last_update_time",
            "description": "<p>The last time the client has received an update tick.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "setupdate",
            "description": "<p>(optional) set this parameter if you do not want to update the user_lastupdate</p>"
          }
        ]
      }
    },
    "description": "<p>Gets the latest plans &amp; messages from the server</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameLatestDebugDebug_update_timeDebug_perf_timings"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/planning",
    "title": "Planning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "months",
            "description": "<p>the amount of months the planning phase takes</p>"
          }
        ]
      }
    },
    "description": "<p>set the amount of months the planning phase takes, should not be done during the simulation phase</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGamePlanning"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/realtime",
    "title": "Realtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "realtime",
            "description": "<p>length of planning phase (in seconds)</p>"
          }
        ]
      }
    },
    "description": "<p>Set the duration of the planning phase in seconds</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameRealtime"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/realtime",
    "title": "FutureRealtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "realtime",
            "description": "<p>comma separated string of all the era times</p>"
          }
        ]
      }
    },
    "description": "<p>Set the duration of future eras</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameRealtime"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/SetStartEndDate",
    "title": "Set Start & End",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>year in which to start</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "end",
            "description": "<p>year in which the game ends</p>"
          }
        ]
      }
    },
    "description": "<p>Set the current game state</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameSetstartenddate"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/state",
    "title": "State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>new state of the game</p>"
          }
        ]
      }
    },
    "description": "<p>Set the current game state</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameState"
  },
  {
    "group": "Game",
    "type": "POST",
    "url": "/game/timeleft",
    "title": "Timeleft",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "time",
            "description": "<p>the amount of seconds left in the current planning phase</p>"
          }
        ]
      }
    },
    "description": "<p>set the amount of seconds left in the current planning phase. You can use this to extend the current planning phase if the players need more time</p>",
    "version": "0.0.0",
    "filename": "../class/class.game.php",
    "groupTitle": "Game",
    "name": "PostGameTimeleft"
  },
  {
    "group": "Geometry",
    "description": "<p>Create a new subtractive polygon on an existing polygon</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subtractive",
            "description": "<p>id of the polygon the newly created polygon is subtractive to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the newly created geometry</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": ""
  },
  {
    "group": "Geometry",
    "type": "GET",
    "url": "/geometry/get/:id",
    "title": "Get",
    "description": "<p>Get a single piece of geometry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the geometry to return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object of the geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "GetGeometryGetId"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/AdminDelete",
    "title": "Admin Delete",
    "description": "<p>Delete geometry without using a plan</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id to delete, marks a row as inactive</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryAdmindelete"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/AdminSubtractive",
    "title": "Admin Subtractive",
    "description": "<p>Create a new subtractive polygon on an existing polygon</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subtractive",
            "description": "<p>id of the polygon the newly created polygon is subtractive to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryAdminsubtractive"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/AdminUpdate",
    "title": "Admin Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>(optional) The owning country id. NULL or -1 if no country is set.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the newly created geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryAdminupdate"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/data",
    "title": "Data",
    "description": "<p>Update the data &amp; type fields of a geometry entry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of geometry to update</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>JSON object of data</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>JSON object of type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryData"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/MarkForDelete",
    "title": "MarkForDelete",
    "description": "<p>Delete geometry using a plan, this will be triggered at the execution time of a plan</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry persistent id to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id where the geometry will be deleted</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>the layer id where the geometry will be deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryMarkfordelete"
  },
  {
    "group": "Geometry",
    "type": "post",
    "url": "/geometry/post",
    "title": "Post",
    "description": "<p>Create a new geometry entry in a plan</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>id of the plan</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "persistent",
            "description": "<p>(optional) persistent ID of geometry</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>(optional) meta data string of geometry object</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>(optional) The owning country id. NULL or -1 if no country is set.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the newly created geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryPost"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/subtractive",
    "title": "Subtractive",
    "description": "<p>Create a new subtractive polygon on an existing polygon</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "subtractive",
            "description": "<p>id of the polygon the newly created polygon is subtractive to</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the newly created geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometrySubtractive"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/UnmarkForDelete",
    "title": "UnmarkForDelete",
    "description": "<p>Remove the deletion of a geometry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry persistent id to undelete</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id where the geometry is located in</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryUnmarkfordelete"
  },
  {
    "group": "Geometry",
    "type": "POST",
    "url": "/geometry/update",
    "title": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>geometry id to update</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer",
            "description": "<p>id of layer to post in</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geometry",
            "description": "<p>string of geometry to post</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FID",
            "description": "<p>(optional) FID of geometry</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the newly created geometry</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.geometry.php",
    "groupTitle": "Geometry",
    "name": "PostGeometryUpdate"
  },
  {
    "group": "KPI",
    "type": "GET",
    "url": "/kpi/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the KPI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "value",
            "description": "<p>the value of this months kpi</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>the type of KPI (ECOLOGY, ENERGY, SHIPPING)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unit",
            "description": "<p>the measurement unit of this KPI</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>(OPTIONAL) id of the country that this belongs to. Not filling this in will default it to all countries</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new kpi value to the database</p>",
    "version": "0.0.0",
    "filename": "../class/class.kpi.php",
    "groupTitle": "KPI",
    "name": "GetKpiPost"
  },
  {
    "group": "KPI",
    "type": "GET",
    "url": "/kpi/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "kpiValues",
            "description": "<p>Json encoded string of the kpi values that we need to insert on the database. Input format should be [{&quot;name&quot;:(string kpiName),&quot;value&quot;:(int kpiValue),&quot;type&quot;:(string kpiType),&quot;unit&quot;:(string kpiUnit),&quot;country&quot;:(int countryId or null)}]</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new kpi value to the database</p>",
    "version": "0.0.0",
    "filename": "../class/class.kpi.php",
    "groupTitle": "KPI",
    "name": "GetKpiPost"
  },
  {
    "group": "Layer",
    "description": "<p>Get all geometry in a single layer</p>",
    "type": "GET",
    "url": "/layer/get/:id",
    "title": "Get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the layer to return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>JSON object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "GetLayerGetId"
  },
  {
    "group": "Layer",
    "type": "GET",
    "url": "/layer/GetEntityPropertiesForLayer/:layerName",
    "title": "GetEntityPropertiesForLayer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "layerName",
            "description": "<p>The name of the layer you want to list all the properties for.</p>"
          }
        ]
      }
    },
    "description": "<p>Returns a list of all distinct properties defined by the entities on the requested layer.</p>",
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "GetLayerGetentitypropertiesforlayerLayername"
  },
  {
    "group": "Layer",
    "description": "<p>Updates shapefile on the geoserver with new MSP ids base on the current database</p>",
    "type": "GET",
    "url": "/layer/GetShapefile/:layer_id/:layer_geotype/:layer_name/:force_reexport/:reexport_clear_mspcount",
    "title": "GetShapefile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer_id",
            "description": "<p>layer id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "layer_geotype",
            "description": "<p>geotype of the layer</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layer_name",
            "description": "<p>Filename of the layer</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "force_reexport",
            "description": "<p>Blap all existing MSP IDs and re-set them.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the new layer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "GetLayerGetshapefileLayer_idLayer_geotypeLayer_nameForce_reexportReexport_clear_mspcount"
  },
  {
    "group": "Layer",
    "description": "<p>Get all the meta data of a single layer</p>",
    "type": "POST",
    "url": "/layer/meta/:id",
    "title": "Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>layer id to return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>JSON Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "PostLayerMetaId"
  },
  {
    "group": "Layer",
    "description": "<p>Gets a single layer meta data by name.</p>",
    "type": "POST",
    "url": "/layer/MetaByName",
    "title": "Meta By Name",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the layer that we want the meta for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>JSON Object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "PostLayerMetabyname"
  },
  {
    "group": "Layer",
    "description": "<p>Create a new empty layer</p>",
    "type": "POST",
    "url": "/layer/post/:id",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the layer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "geotype",
            "description": "<p>geotype of the layer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the new layer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "PostLayerPostId"
  },
  {
    "group": "Layer",
    "description": "<p>Update the meta data of a layer</p>",
    "type": "POST",
    "url": "/layer/UpdateMeta",
    "title": "Update Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "short",
            "description": "<p>Update the display name of a layer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>Update the category of a layer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subcategory",
            "description": "<p>Update the subcategory of a layer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Update the type field of a layer</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "depth",
            "description": "<p>Update the depth of a layer</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the layer to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the new layer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.layer.php",
    "groupTitle": "Layer",
    "name": "PostLayerUpdatemeta"
  },
  {
    "group": "Log",
    "description": "<p>Update the meta data of a layer</p>",
    "type": "POST",
    "url": "/layer/UpdateMeta",
    "title": "Update Meta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logstring",
            "description": "<p>of the error</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "stacktrace",
            "description": "<p>stacktrace of the errror</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>error type (normal, warning, error)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.log.php",
    "groupTitle": "Log",
    "name": "PostLayerUpdatemeta"
  },
  {
    "group": "MEL",
    "description": "<p>Gets all the geometry data of a layer</p>",
    "type": "POST",
    "url": "/mel/GeometryExportName",
    "title": "Geometry Export Name",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "layer",
            "description": "<p>name to return the geometry data for</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>JSON Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.mel.php",
    "groupTitle": "MEL",
    "name": "PostMelGeometryexportname"
  },
  {
    "group": "Message",
    "description": "<p>Create a new message inside a group</p>",
    "type": "POST",
    "url": "/message/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "group",
            "description": "<p>group id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>message contents</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.message.php",
    "groupTitle": "Message",
    "name": "PostMessagePost"
  },
  {
    "group": "Message",
    "description": "<p>Create a new message group</p>",
    "type": "POST",
    "url": "/message/PostGroup",
    "title": "Post Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "users",
            "description": "<p>comma separated list of user ids to add to the group</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>message contents</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the message group</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.message.php",
    "groupTitle": "Message",
    "name": "PostMessagePostgroup"
  },
  {
    "group": "Objective",
    "type": "POST",
    "url": "/objective/delete",
    "title": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the objective to delete</p>"
          }
        ]
      }
    },
    "description": "<p>Set an objective to be inactive</p>",
    "version": "0.0.0",
    "filename": "../class/class.objective.php",
    "groupTitle": "Objective",
    "name": "PostObjectiveDelete"
  },
  {
    "group": "Objective",
    "type": "POST",
    "url": "/objective/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>country id, set -1 if you want to add an objective to all countries</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>objective title</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>objective description</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "deadline",
            "description": "<p>game month when this task needs to be completed by</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tasks",
            "description": "<p>JSON array with task objects. Example: [{&quot;sectorname&quot;:&quot;&quot;,&quot;category&quot;:&quot;&quot;,&quot;subcategory&quot;:&quot;&quot;,&quot;function&quot;:&quot;&quot;,&quot;value&quot;:0,&quot;description&quot;:&quot;&quot;}]</p>"
          }
        ]
      }
    },
    "description": "<p>Add a new objective with tasks to a country (or all countries at once)</p>",
    "version": "0.0.0",
    "filename": "../class/class.objective.php",
    "groupTitle": "Objective",
    "name": "PostObjectivePost"
  },
  {
    "group": "Objective",
    "type": "POST",
    "url": "/objective/SetCompleted",
    "title": "SetCompleted",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "objective_id",
            "description": "<p>id of the objective to set the completed state for</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "completed",
            "description": "<p>State (0 or 1) of the completed flag to set</p>"
          }
        ]
      }
    },
    "description": "<p>Changes the completed state of an objective.</p>",
    "version": "0.0.0",
    "filename": "../class/class.objective.php",
    "groupTitle": "Objective",
    "name": "PostObjectiveSetcompleted"
  },
  {
    "group": "OceanView",
    "type": "GET",
    "url": "/OceanView/GetConfiguration",
    "title": "GetConfiguration",
    "description": "<p>Returns the current configuration for oceanview.</p>",
    "version": "0.0.0",
    "filename": "../class/class.oceanview.php",
    "groupTitle": "OceanView",
    "name": "GetOceanviewGetconfiguration"
  },
  {
    "group": "Plan",
    "description": "<p>Get all plans</p>",
    "type": "GET",
    "url": "/plan/all",
    "title": "All",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object of all plan metadata + comments</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "GetPlanAll"
  },
  {
    "group": "Plan",
    "type": "GET",
    "url": "/plan/GetInitialFishingValues",
    "title": "GetInitialFishingValues",
    "description": "<p>Returns the initial fishing values submitted by MEL. The values are in a 0..1 range for each fishing fleet and country. Fishing fleet values summed together should be in the range of 0..1</p>",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "GetPlanGetinitialfishingvalues"
  },
  {
    "group": "Plan",
    "description": "<p>Get a specific plan</p>",
    "type": "GET",
    "url": "/post/get/:id",
    "title": "Get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of plan to return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "JSON",
            "description": "<p>object containing all plan metadata + comments</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "GetPostGetId"
  },
  {
    "group": "Plan",
    "description": "<p>Add a new list of countries that require approval for a plan</p>",
    "type": "POST",
    "url": "/plan/AddApproval",
    "title": "Add Approval",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the plan</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countries",
            "description": "<p>comma separated list of country ids</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanAddapproval"
  },
  {
    "group": "Plan",
    "description": "<p>Change plan date</p>",
    "type": "POST",
    "url": "/plan/date",
    "title": "Date",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "date",
            "description": "<p>new plan date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDate"
  },
  {
    "group": "Plan",
    "description": "<p>Delete a plan</p>",
    "type": "POST",
    "url": "/plan/delete",
    "title": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the plan to delete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDelete"
  },
  {
    "group": "Plan",
    "description": "<p>Delete all required approvals for a plan, either when it's not necessary anymore or when you need to submit a new list</p>",
    "type": "POST",
    "url": "/plan/DeleteApproval",
    "title": "Delete Approval",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the plan</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDeleteapproval"
  },
  {
    "group": "Plan",
    "type": "POST",
    "url": "/plan/DeleteEnergy",
    "title": "Delete Energy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          }
        ]
      }
    },
    "description": "<p>delete all grids &amp; associated grid data based on a plan id</p>",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDeleteenergy"
  },
  {
    "group": "Plan",
    "type": "POST",
    "url": "/plan/DeleteFishing",
    "title": "Delete Fishing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          }
        ]
      }
    },
    "description": "<p>delete all the fishing settings associated with a plan</p>",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDeletefishing"
  },
  {
    "group": "Plan",
    "description": "<p>Delete a layer from a plan</p>",
    "type": "POST",
    "url": "/plan/DeleteLayer",
    "title": "Delete Layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the layer to remove</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDeletelayer"
  },
  {
    "group": "Plan",
    "description": "<p>Update the description</p>",
    "type": "POST",
    "url": "/plan/description",
    "title": "Description",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>new plan description</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanDescription"
  },
  {
    "group": "Plan",
    "type": "POST",
    "url": "/plan/fishing",
    "title": "Fishing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fishing_values",
            "description": "<p>JSON encoded key value pair array of fishing values</p>"
          }
        ]
      }
    },
    "description": "<p>Sets the fishing values for a plan to the fishing_values included in the call. Will delete all fishing values that existed before this plan.</p>",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanFishing"
  },
  {
    "group": "Plan",
    "description": "<p>Add a new layer to a plan</p>",
    "type": "POST",
    "url": "/plan/layer",
    "title": "Layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the plan</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "layerid",
            "description": "<p>id of the original layer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanLayer"
  },
  {
    "group": "Plan",
    "description": "<p>Lock a plan</p>",
    "type": "POST",
    "url": "/plan/lock",
    "title": "Lock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "success",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "failure",
            "description": "<p>-1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanLock"
  },
  {
    "group": "Plan",
    "description": "<p>Add a message to a plan</p>",
    "type": "POST",
    "url": "/plan/message",
    "title": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>Plan id that this message applies to.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "team_id",
            "description": "<p>Team (Country) ID that this message originated from.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_name",
            "description": "<p>Display name of the user that sent this message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Message sent by the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanMessage"
  },
  {
    "group": "Plan",
    "description": "<p>Rename a plan</p>",
    "type": "POST",
    "url": "/plan/name",
    "title": "Name",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>new plan name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanName"
  },
  {
    "group": "Plan",
    "description": "<p>Create a new plan</p>",
    "type": "POST",
    "url": "/plan/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>country id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "time",
            "description": "<p>when the plan has to be implemented (months since start of project)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "layers",
            "description": "<p>comma separated string of layer ids (e.g. &quot;1,4,82&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>comma separated string of the plan types, values can be &quot;ecology&quot;, &quot;shipping&quot; or &quot;energy&quot; (e.g. &quot;ecology,energy&quot;). Empty if none apply</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanPost"
  },
  {
    "group": "Plan",
    "description": "<p>Get all layer restrictions</p>",
    "type": "POST",
    "url": "/plan/restrictions",
    "title": "Restrictions",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanRestrictions"
  },
  {
    "group": "Plan",
    "type": "POST",
    "url": "/plan/SetEnergyError",
    "title": "Set Energy Error",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "error",
            "description": "<p>error boolean [0|1]</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "check_dependent_plans",
            "description": "<p>boolean [0|1] Check dependent plans and set them to error as well? Only works when setting plans to error 1</p>"
          }
        ]
      }
    },
    "description": "<p>set the energy error flag of a single plan</p>",
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanSetenergyerror"
  },
  {
    "group": "Plan",
    "description": "<p>Updates or sets the restrction area sizes for this plan.</p>",
    "type": "POST",
    "url": "/plan/SetRestrictionAreas",
    "title": "Set Restriction Areas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan_id",
            "description": "<p>Plan Id</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "settings",
            "description": "<p>Restriction area settings</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanSetrestrictionareas"
  },
  {
    "group": "Plan",
    "description": "<p>Set the state of a plan</p>",
    "type": "POST",
    "url": "/plan/SetState",
    "title": "Set State",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of the plan</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "state",
            "description": "<p>state to set the plan to (DESIGN, CONSULTATION, APPROVAL, APPROVED, DELETED)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanSetstate"
  },
  {
    "group": "Plan",
    "description": "<p>Update the plan type</p>",
    "type": "POST",
    "url": "/plan/type",
    "title": "Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>comma separated string of the plan types, values can be &quot;ecology&quot;, &quot;shipping&quot; or &quot;energy&quot; (e.g. &quot;ecology,energy&quot;). Empty if none apply</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanType"
  },
  {
    "group": "Plan",
    "description": "<p>Unlock a plan</p>",
    "type": "POST",
    "url": "/plan/unlock",
    "title": "Unlock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanUnlock"
  },
  {
    "group": "Plan",
    "description": "<p>Add a new list of countries that require approval for a plan</p>",
    "type": "POST",
    "url": "/plan/Vote",
    "title": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "country",
            "description": "<p>country id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "plan",
            "description": "<p>plan id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vote",
            "description": "<p>(-1 = undecided/abstain, 0 = no, 1 = yes)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.plan.php",
    "groupTitle": "Plan",
    "name": "PostPlanVote"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetConfiguredRouteIntensities",
    "title": "GetConfiguredRouteIntensities",
    "description": "<p>Returns the configured routes setup in the config file as an JSON encoded array.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetconfiguredrouteintensities"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetCountryBorderGeometry",
    "title": "GetCountryBorderGeometry",
    "description": "<p>Returns all geometry which defines the areas of each country. For instance in the NorthSea this will be the EEZ layer</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetcountrybordergeometry"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetHeatmapOutputSettings",
    "title": "GetHeatmapOutputSettings",
    "description": "<p>Gets heatmap settings as defined in the config file. These settings include the output size, internal layer name, raster output location, raster bounds and intensity mappings.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetheatmapoutputsettings"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetHeatmapSettings",
    "title": "GetHeatmapSettings",
    "description": "<p>Gets the persistent riskmap settings.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetheatmapsettings"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetPlayableAreaGeometry",
    "title": "GetPlayableAreaGeometry",
    "description": "<p>Gets the geometry associated with the playable area layer</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetplayableareageometry"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetPortIntensities",
    "title": "GetPortIntensities",
    "description": "<p>Returns all the configured intensities for the shipping ports indexed by port geometry id.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetportintensities"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetSELConfig",
    "title": "GetSELConfig",
    "description": "<p>Returns a collection of region-specific SEL config values.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetselconfig"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetShipRestrictionGroupExceptions",
    "title": "GetShipRestrictionGroupExceptions",
    "description": "<p>Returns all restriction group exceptions configured in the configuration file. Returns the data in the format of { &quot;layer_id&quot;: [int layerId], &quot;layer_type&quot;: [string layerType], &quot;allowed_restriction_groups&quot;: [int[] shipRestrictionGroups] }</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetshiprestrictiongroupexceptions"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetShipTypes",
    "title": "GetShipTypes",
    "description": "<p>Returns all configured ship types for the current session</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetshiptypes"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/GetUpdatePackage",
    "title": "Get update package",
    "description": "<p>Get an update package which describes whan needs to be updated in the SEL program.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelGetupdatepackage"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/NotifyUpdateFinished",
    "title": "Notify Update Finished",
    "description": "<p>Notifies the server that SEL has finished the update for this month.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelNotifyupdatefinished"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/ReimportShippingLayers",
    "title": "ReimportShippingLayers",
    "description": "<p>Creates the raster layers required for shipping.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelReimportshippinglayers"
  },
  {
    "group": "SEL",
    "type": "GET",
    "url": "/sel/StartExe",
    "title": "StartExe",
    "description": "<p>This is a horrible idea...</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "GetSelStartexe"
  },
  {
    "group": "SEL",
    "type": "POST",
    "url": "/sel/GetRestrictionGeometry",
    "title": "GetRestrictionGeometry",
    "description": "<p>Gets all of the restriction geometry that the ships aren't allowed to cross</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "PostSelGetrestrictiongeometry"
  },
  {
    "group": "SEL",
    "type": "POST",
    "url": "/sel/GetShippingLaneGeometry",
    "title": "GetShippingLaneGeometry",
    "description": "<p>Returns all the geometry associated with shipping lanes.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "PostSelGetshippinglanegeometry"
  },
  {
    "group": "SEL",
    "type": "POST",
    "url": "/sel/GetShippingPortGeometry",
    "title": "GetShippingPortGeometry",
    "description": "<p>Returns all geometry associated with shipping ports for the current game. Returns the values in a comma separated list</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "PostSelGetshippingportgeometry"
  },
  {
    "group": "SEL",
    "type": "POST",
    "url": "/sel/SetRastersUpdated/:layer_names",
    "title": "SetRastersUpdated",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "layer_names",
            "description": "<p>json-encoded array of layer names that have been updated (e.g. [&quot;Layer1&quot;, &quot;Layer2&quot;, &quot;Layer3&quot;]</p>"
          }
        ]
      }
    },
    "description": "<p>Notifies the running game that all the configured rasters have been updated to a more recent version so the game will reload them.</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "PostSelSetrastersupdatedLayer_names"
  },
  {
    "group": "SEL",
    "type": "POST",
    "url": "/sel/SetShippingIntensityValues",
    "title": "SetShippingIntensityValues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "values",
            "description": "<p>Json encoded string of an &lt;int, int&gt; key value pair where keys define the geometry ID and the values define the shipping intensity.</p>"
          }
        ]
      }
    },
    "description": "<p>Sets the &quot;Shipping_Intensity&quot; data field to the supplied value for all submitted IDs</p>",
    "version": "0.0.0",
    "filename": "../class/class.sel.php",
    "groupTitle": "SEL",
    "name": "PostSelSetshippingintensityvalues"
  },
  {
    "group": "Update",
    "type": "GET",
    "url": "/update/Reimport",
    "title": "Reimport",
    "description": "<p>Performs a full reimport of the database with the set filename in $_COOKIE['filename'].</p>",
    "version": "0.0.0",
    "filename": "../class/class.update.php",
    "groupTitle": "Update",
    "name": "GetUpdateReimport"
  },
  {
    "group": "Update",
    "type": "GET",
    "url": "/update/ReimportAndStartServices/:config_name",
    "title": "Reimport and Start Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "config_name",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>Rebuilds the database and sets up the config file specified by config_name. After the rebuild is done all simulations and required services are started.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Json",
            "description": "<p>object containing a 'success' field denoting whether or not the reimport was successful, and 'error_messages' which contain all the error messages if there's errors reported</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.update.php",
    "groupTitle": "Update",
    "name": "GetUpdateReimportandstartservicesConfig_name"
  },
  {
    "group": "User",
    "description": "<p>Creates a new session for the desired country id.</p>",
    "type": "POST",
    "url": "/user/RequestSession",
    "title": "Set State",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "SessionID/UserId",
            "description": "<p>of the newly created session. -1 for failure.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../class/class.user.php",
    "groupTitle": "User",
    "name": "PostUserRequestsession"
  },
  {
    "group": "Warning",
    "type": "POST",
    "url": "/warning/post",
    "title": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "added",
            "optional": false,
            "field": "Serialized",
            "description": "<p>Json string of IssueObjects that are added.</p>"
          }
        ]
      }
    },
    "description": "<p>Add or update a warning message on the server</p>",
    "version": "0.0.0",
    "filename": "../class/class.warning.php",
    "groupTitle": "Warning",
    "name": "PostWarningPost"
  },
  {
    "group": "Warning",
    "type": "POST",
    "url": "/warning/SetShippingIssues",
    "title": "Set shipping issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issues",
            "description": "<p>The JSON encoded issues of SEL.APIShippingIssue type.</p>"
          }
        ]
      }
    },
    "description": "<p>Clears out the old shipping issues and creates new shipping issues defined by issues</p>",
    "version": "0.0.0",
    "filename": "../class/class.warning.php",
    "groupTitle": "Warning",
    "name": "PostWarningSetshippingissues"
  }
] });
