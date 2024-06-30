var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-los-colores",
      "name": "Entrada Los Colores",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.3536910151499022,
          "pitch": 0.21055793809774137,
          "rotation": 5.497787143782138,
          "target": "1-puerta-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-puerta-entrada",
      "name": "Puerta Entrada",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7762346524360222,
          "pitch": 0.7395401853680621,
          "rotation": 0.7853981633974483,
          "target": "2-habitacion-1-bao"
        },
        {
          "yaw": 1.7327108987072437,
          "pitch": 0.30809812629895816,
          "rotation": 7.853981633974483,
          "target": "3-habitacion-1"
        },
        {
          "yaw": -2.9580666354932887,
          "pitch": 0.3162923920627083,
          "rotation": 0,
          "target": "0-entrada-los-colores"
        },
        {
          "yaw": 0.4322965501291822,
          "pitch": 0.5446167444077581,
          "rotation": 1.5707963267948966,
          "target": "4-bao-social"
        },
        {
          "yaw": 0.19083168525183147,
          "pitch": 0.3118424520536749,
          "rotation": 0,
          "target": "5-pasillo-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-habitacion-1-bao",
      "name": "Habitacion 1 Baño",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6870541062081905,
          "pitch": 0.6500131491504746,
          "rotation": 1.5707963267948966,
          "target": "3-habitacion-1"
        },
        {
          "yaw": 1.544165784569258,
          "pitch": 0.6847992437685573,
          "rotation": 0,
          "target": "1-puerta-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacion-1",
      "name": "Habitacion 1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9442929378148177,
          "pitch": 0.540698488613133,
          "rotation": 0,
          "target": "2-habitacion-1-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao-social",
      "name": "Baño Social",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.603734001906709,
          "pitch": 0.6624115112134508,
          "rotation": 0,
          "target": "5-pasillo-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo-entrada",
      "name": "Pasillo Entrada",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6157081221665806,
          "pitch": 0.6319209152778757,
          "rotation": 11.780972450961727,
          "target": "6-cocina-interior"
        },
        {
          "yaw": -0.0993854390198603,
          "pitch": 0.21615563960469153,
          "rotation": 1.5707963267948966,
          "target": "7-sala-interior"
        },
        {
          "yaw": 1.7699756485969491,
          "pitch": 0.6488663074040648,
          "rotation": 0,
          "target": "4-bao-social"
        },
        {
          "yaw": 3.0130696089988813,
          "pitch": 0.3556315832380683,
          "rotation": 0,
          "target": "1-puerta-entrada"
        },
        {
          "yaw": -1.1097263165223872,
          "pitch": 0.6955984962452924,
          "rotation": 4.71238898038469,
          "target": "13-pasillo-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina-interior",
      "name": "Cocina Interior",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3011332034670815,
          "pitch": 0.2645538580675204,
          "rotation": 5.497787143782138,
          "target": "22-exterior-cocina"
        },
        {
          "yaw": -1.4922882261643053,
          "pitch": 0.10940043153402534,
          "rotation": 1.5707963267948966,
          "target": "7-sala-interior"
        },
        {
          "yaw": 2.707371456271413,
          "pitch": 0.5017056527270238,
          "rotation": 0,
          "target": "13-pasillo-habitacion-2"
        },
        {
          "yaw": 1.9134169161059482,
          "pitch": 0.3587755207001724,
          "rotation": 4.71238898038469,
          "target": "5-pasillo-entrada"
        },
        {
          "yaw": -2.289819042291338,
          "pitch": 0.1309600958072039,
          "rotation": 3.9269908169872414,
          "target": "11-piscina"
        },
        {
          "yaw": -1.7408166312905333,
          "pitch": 0.23386502297596934,
          "rotation": 0,
          "target": "9-hamacas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sala-interior",
      "name": "Sala Interior",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4632952513436575,
          "pitch": 0.1298304945796147,
          "rotation": 0.7853981633974483,
          "target": "12-pasillo-habitaciones"
        },
        {
          "yaw": 1.904925065382188,
          "pitch": 0.1651916666788722,
          "rotation": 0,
          "target": "13-pasillo-habitacion-2"
        },
        {
          "yaw": -2.465735937027164,
          "pitch": 0.5200733419000123,
          "rotation": 0.7853981633974483,
          "target": "9-hamacas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-habitacion-2-int",
      "name": "Baño Habitacion 2 Int",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-hamacas",
      "name": "Hamacas",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0869560667622995,
          "pitch": 0.30580302806717263,
          "rotation": 4.71238898038469,
          "target": "7-sala-interior"
        },
        {
          "yaw": 0.9528737185269485,
          "pitch": 0.20639969704231298,
          "rotation": 5.497787143782138,
          "target": "10-zona-barb-q"
        },
        {
          "yaw": -1.7276551077535593,
          "pitch": 0.3888910296459951,
          "rotation": 5.497787143782138,
          "target": "11-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-zona-barb-q",
      "name": "Zona Barb-Q",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-piscina",
      "name": "Piscina",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-pasillo-habitaciones",
      "name": "Pasillo Habitaciones",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.104135269823173,
          "pitch": 0.3700821596019548,
          "rotation": 5.497787143782138,
          "target": "20-pasillo-habitacion-4"
        },
        {
          "yaw": 0.7724535771288181,
          "pitch": 0.6400080002308304,
          "rotation": 0.7853981633974483,
          "target": "15-habitacion-3"
        },
        {
          "yaw": 0.0669739601787942,
          "pitch": 0.3802218778394071,
          "rotation": 1.5707963267948966,
          "target": "13-pasillo-habitacion-2"
        },
        {
          "yaw": -1.7251420922404108,
          "pitch": 0.14347612152682565,
          "rotation": 1.5707963267948966,
          "target": "11-piscina"
        },
        {
          "yaw": -0.8806175571630597,
          "pitch": 0.26049569729794086,
          "rotation": 12.566370614359176,
          "target": "7-sala-interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pasillo-habitacion-2",
      "name": "Pasillo Habitacion 2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1059813243032295,
          "pitch": 0.47261195843370274,
          "rotation": 5.497787143782138,
          "target": "4-bao-social"
        },
        {
          "yaw": -1.8854850018503342,
          "pitch": 0.46347987907917876,
          "rotation": 0,
          "target": "6-cocina-interior"
        },
        {
          "yaw": 0.11243607337047479,
          "pitch": 0.28174634166690815,
          "rotation": 0.7853981633974483,
          "target": "14-bao-habitacion-2"
        },
        {
          "yaw": 1.6917173890289128,
          "pitch": 0.42356891371593797,
          "rotation": 0,
          "target": "12-pasillo-habitaciones"
        },
        {
          "yaw": -1.592160744869302,
          "pitch": 0.21723728675361542,
          "rotation": 0.7853981633974483,
          "target": "22-exterior-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bao-habitacion-2",
      "name": "Baño Habitacion 2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.105645635172781,
          "pitch": 0.2832300282480791,
          "rotation": 0,
          "target": "13-pasillo-habitacion-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-habitacion-3",
      "name": "Habitacion 3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.357340781120886,
          "pitch": 0.5775366812570546,
          "rotation": 0,
          "target": "16-bao-habitacion-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bao-habitacion-3",
      "name": "Baño Habitacion 3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7240575470711956,
          "pitch": 0.29489363703550886,
          "rotation": 4.71238898038469,
          "target": "12-pasillo-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-habitacion-3",
      "name": "Habitacion 3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-habitacion-4",
      "name": "Habitacion 4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6981697135705485,
          "pitch": 0.5194319372439757,
          "rotation": 0.7853981633974483,
          "target": "20-pasillo-habitacion-4"
        },
        {
          "yaw": -1.594838349222492,
          "pitch": 0.5847873438831677,
          "rotation": 0,
          "target": "19-bao-y-vestier-habitacion-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bao-y-vestier-habitacion-4",
      "name": "Baño y Vestier Habitacion 4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9132514942219636,
          "pitch": 0.6624301368834722,
          "rotation": 10.995574287564278,
          "target": "18-habitacion-4"
        },
        {
          "yaw": 1.7163122906144874,
          "pitch": 0.2515361705138659,
          "rotation": 1.5707963267948966,
          "target": "20-pasillo-habitacion-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pasillo-habitacion-4",
      "name": "Pasillo Habitacion 4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1912161605614635,
          "pitch": 0.7804262930881087,
          "rotation": 0,
          "target": "18-habitacion-4"
        },
        {
          "yaw": -1.6649609600612756,
          "pitch": 0.6941254839288096,
          "rotation": 0,
          "target": "12-pasillo-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-habitacion-5",
      "name": "Habitacion 5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0378671722298485,
          "pitch": 1.0610870223447915,
          "rotation": 0,
          "target": "22-exterior-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-exterior-cocina",
      "name": "Exterior Cocina",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9519582169365215,
          "pitch": 0.6883582966526838,
          "rotation": 5.497787143782138,
          "target": "6-cocina-interior"
        },
        {
          "yaw": -3.0519699761223755,
          "pitch": 0.8717102545729176,
          "rotation": 4.71238898038469,
          "target": "21-habitacion-5"
        },
        {
          "yaw": 1.8208289778190805,
          "pitch": 0.43638777697087505,
          "rotation": 1.5707963267948966,
          "target": "21-habitacion-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-zona-ropas",
      "name": "Zona Ropas",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "colores",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
