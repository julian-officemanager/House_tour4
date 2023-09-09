var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23470171103786797,
          "pitch": 0.35316921934019163,
          "rotation": 4.71238898038469,
          "target": "1-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.648362354727473,
        "pitch": 0.2700666089720105,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9288232716387226,
          "pitch": 1.1183873936533182,
          "rotation": 1.5707963267948966,
          "target": "0-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4554883157113903,
          "pitch": 0.05650157139744216,
          "title": "Corner cupboard<br>",
          "text": "is a great use of space<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
