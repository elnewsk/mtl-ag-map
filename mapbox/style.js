
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "BackgroundOSM_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "under30k_1": {
            "type": "geojson",
            "data": json_under30k_1
        }
                    ,
        "under40k_2": {
            "type": "geojson",
            "data": json_under40k_2
        }
                    ,
        "under50k_3": {
            "type": "geojson",
            "data": json_under50k_3
        }
                    ,
        "under60k_4": {
            "type": "geojson",
            "data": json_under60k_4
        }
                    ,
        "under70k_5": {
            "type": "geojson",
            "data": json_under70k_5
        }
                    ,
        "under80k_6": {
            "type": "geojson",
            "data": json_under80k_6
        }
                    ,
        "under90k_7": {
            "type": "geojson",
            "data": json_under90k_7
        }
                    ,
        "Colderthanaveragetemperature_8": {
            "type": "geojson",
            "data": json_Colderthanaveragetemperature_8
        }
                    ,
        "CoolIsland_9": {
            "type": "geojson",
            "data": json_CoolIsland_9
        }
                    ,
        "Closetoaveragetemperature_10": {
            "type": "geojson",
            "data": json_Closetoaveragetemperature_10
        }
                    ,
        "Warmerthanaveragetemperatureatrisk_11": {
            "type": "geojson",
            "data": json_Warmerthanaveragetemperatureatrisk_11
        }
                    ,
        "HeatIsland_12": {
            "type": "geojson",
            "data": json_HeatIsland_12
        }
                    ,
        "UrbanAgSites_13": {
            "type": "geojson",
            "data": json_UrbanAgSites_13
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_BackgroundOSM_0_0",
            "type": "raster",
            "source": "BackgroundOSM_0"
        },
        {
            "id": "lyr_under30k_1_0",
            "type": "fill",
            "source": "under30k_1",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#e8d828'}
        }
,
        {
            "id": "lyr_under40k_2_0",
            "type": "fill",
            "source": "under40k_2",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#65fc00'}
        }
,
        {
            "id": "lyr_under50k_3_0",
            "type": "fill",
            "source": "under50k_3",
            "layout": {},
            "paint": {'fill-opacity': 0.58, 'fill-color': '#2bff99'}
        }
,
        {
            "id": "lyr_under60k_4_0",
            "type": "fill",
            "source": "under60k_4",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#41ffff'}
        }
,
        {
            "id": "lyr_under70k_5_0",
            "type": "fill",
            "source": "under70k_5",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#29bccf'}
        }
,
        {
            "id": "lyr_under80k_6_0",
            "type": "fill",
            "source": "under80k_6",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#3785b3'}
        }
,
        {
            "id": "lyr_under90k_7_0",
            "type": "fill",
            "source": "under90k_7",
            "layout": {},
            "paint": {'fill-opacity': 0.6, 'fill-color': '#2f3e79'}
        }
,
        {
            "id": "lyr_Colderthanaveragetemperature_8_0",
            "type": "fill",
            "source": "Colderthanaveragetemperature_8",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#85d63e'}
        }
,
        {
            "id": "lyr_CoolIsland_9_0",
            "type": "fill",
            "source": "CoolIsland_9",
            "layout": {},
            "paint": {'fill-opacity': 0.9, 'fill-color': '#4a8f46'}
        }
,
        {
            "id": "lyr_Closetoaveragetemperature_10_0",
            "type": "fill",
            "source": "Closetoaveragetemperature_10",
            "layout": {},
            "paint": {'fill-opacity': 0.0, 'fill-color': '#fae899'}
        }
,
        {
            "id": "lyr_Warmerthanaveragetemperatureatrisk_11_0",
            "type": "fill",
            "source": "Warmerthanaveragetemperatureatrisk_11",
            "layout": {},
            "paint": {'fill-opacity': 0.65, 'fill-color': '#ff8800'}
        }
,
        {
            "id": "lyr_HeatIsland_12_0",
            "type": "fill",
            "source": "HeatIsland_12",
            "layout": {},
            "paint": {'fill-opacity': 0.65, 'fill-color': '#d9291f'}
        }
,
        {
            "id": "lyr_UrbanAgSites_13_0",
            "type": "circle",
            "source": "UrbanAgSites_13",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#a25fe9', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}