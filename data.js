var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "Dry Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.306323093207169,
        "pitch": 0.07361673483696585,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.0421320280115314,
          "pitch": 0.23720164814362832,
          "rotation": 0,
          "target": "1-wet-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "Wet Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.17583481816138402,
        "pitch": 0.05232296883808729,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.694146655233741,
          "pitch": 0.13071430577496912,
          "rotation": 0,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Toilet 360 Demo 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
