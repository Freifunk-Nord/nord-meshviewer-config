define({
  "dataPath": "https://map.hamburg.freifunk.net/",
  "siteName": "Freifunk Hamburg",
  "mapSigmaScale": 0.525,
  "showContact": false,
  "maxAge": 14,
  "mapLayers": [
    { "name": "MapQuest",
      "url": "https://otile{s}-s.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg",
      "config": {
        "subdomains": "1234",
        "type": "osm",
        "attribution": "Tiles &copy; <a href=\"https://www.mapquest.com/\" target=\"_blank\">MapQuest</a>, Data CC-BY-SA OpenStreetMap",
        "maxZoom": 18
      }
    },
    {
      "name": "Stamen.TonerLite"
    }
  ]
})
