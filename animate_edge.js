/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'sky',
            type:'image',
            rect:['0','0','100%','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/velvet_strip.png','0px','0px']
         },
         {
            id:'cities2',
            type:'image',
            rect:['-1px','auto','100%','14.2%','auto','-9px'],
            fill:["rgba(0,0,0,0)",'img/cities.png','48%','50%','847.3468741724px','60px'],
            transform:[]
         },
         {
            id:'star_shine_animation',
            type:'rect',
            rect:['619','282','auto','auto','auto','auto']
         },
         {
            id:'starfield',
            type:'rect',
            rect:['0%','0.2%','100%','auto','auto','auto'],
            transform:[]
         },
         {
            id:'birdfly_sym',
            type:'rect',
            rect:['-12px','-270','auto','auto','auto','auto']
         },
         {
            id:'satellite_anim',
            type:'rect',
            rect:['-113px','6px','139.1%','auto','auto','auto'],
            opacity:1
         },
         {
            id:'logo',
            type:'rect',
            rect:['auto','-12.4%','89.3%','101.8%','6.2%','auto'],
            transform:[[],[],[],['0.79499','0.79495']]
         },
         {
            id:'left_cloud2',
            type:'rect',
            rect:['26%','56.8%','13.2%','14%','auto','auto'],
            cursor:['default']
         },
         {
            id:'middle_cloud2',
            type:'rect',
            rect:['42.5%','71.8%','13.2%','14%','auto','auto'],
            cursor:['default']
         },
         {
            id:'right_cloud2',
            type:'rect',
            rect:['58.4%','58%','14.9%','12.8%','auto','auto'],
            cursor:['default']
         },
         {
            id:'balloon_animation',
            type:'rect',
            rect:['-5%','396px','112.6%','auto','auto','auto'],
            transform:[[],[],[],['1.15454','1.15434']]
         }],
         symbolInstances: [
         {
            id:'middle_cloud2',
            symbolName:'middle_cloud'
         },
         {
            id:'birdfly_sym',
            symbolName:'birdfly_sym'
         },
         {
            id:'starfield',
            symbolName:'starfield'
         },
         {
            id:'balloon_animation',
            symbolName:'balloon_animation'
         },
         {
            id:'logo',
            symbolName:'logo'
         },
         {
            id:'right_cloud2',
            symbolName:'right_cloud'
         },
         {
            id:'left_cloud2',
            symbolName:'left_cloud'
         },
         {
            id:'star_shine_animation',
            symbolName:'star_shine_animation'
         },
         {
            id:'satellite_anim',
            symbolName:'satellite_anim'
         }
         ]
      },
   states: {
      "Base State": {
         "${_cities2}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-9px'],
            ["style", "background-position", [48,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-size", [847.3468741724,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '-1px'],
            ["style", "width", '100%']
         ],
         "${_left_cloud2}": [
            ["style", "left", '-16%'],
            ["style", "height", '14%'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'default'],
            ["style", "width", '13.18%']
         ],
         "${_star_shine_animation}": [
            ["style", "left", '630px'],
            ["style", "top", '336px']
         ],
         "${_birdfly_sym}": [
            ["style", "left", '-12px'],
            ["style", "top", '0px']
         ],
         "${_balloon_animation}": [
            ["style", "top", '396px'],
            ["transform", "scaleY", '1.15434'],
            ["transform", "scaleX", '1.15454'],
            ["style", "left", '-5%'],
            ["style", "width", '112.6%']
         ],
         "${_starfield}": [
            ["style", "top", '0.17%'],
            ["transform", "scaleX", '1'],
            ["style", "left", '-0.01%'],
            ["style", "width", '100%']
         ],
         "${_satellite_anim}": [
            ["style", "top", '6px'],
            ["style", "opacity", '1'],
            ["style", "left", '-113px'],
            ["style", "width", '139.06%']
         ],
         "${_Text}": [
            ["style", "text-decoration", '']
         ],
         "${_logo}": [
            ["style", "top", '88.2%'],
            ["transform", "scaleY", '0.79495'],
            ["transform", "scaleX", '0.79499'],
            ["style", "height", '101.8%'],
            ["style", "right", '6.23%'],
            ["style", "left", 'auto'],
            ["style", "width", '89.31%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_right_cloud2}": [
            ["style", "top", '58%'],
            ["style", "cursor", 'default'],
            ["style", "overflow", 'visible'],
            ["style", "height", '12.8%'],
            ["style", "opacity", '0'],
            ["style", "left", '107.77%'],
            ["style", "width", '14.86%']
         ],
         "${_sky}": [
            ["style", "width", '100%']
         ],
         "${_middle_cloud2}": [
            ["style", "top", '109.6%'],
            ["style", "left", '42.52%'],
            ["style", "height", '14%'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'default'],
            ["style", "width", '13.18%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2827,
         autoPlay: true,
         timeline: [
            { id: "eid50", tween: [ "style", "${_middle_cloud2}", "opacity", '1', { fromValue: '0'}], position: 1852, duration: 975, easing: "easeOutBack" },
            { id: "eid51", tween: [ "style", "${_left_cloud2}", "left", '26%', { fromValue: '-16%'}], position: 1686, duration: 975, easing: "easeOutBack" },
            { id: "eid49", tween: [ "style", "${_middle_cloud2}", "top", '70.83%', { fromValue: '109.6%'}], position: 1852, duration: 975, easing: "easeOutBack" },
            { id: "eid48", tween: [ "style", "${_right_cloud2}", "opacity", '1', { fromValue: '0'}], position: 1602, duration: 975, easing: "easeOutBack" },
            { id: "eid47", tween: [ "style", "${_right_cloud2}", "left", '58.4%', { fromValue: '107.77%'}], position: 1602, duration: 975, easing: "easeOutBack" },
            { id: "eid53", tween: [ "style", "${_logo}", "top", '3.31%', { fromValue: '88.2%'}], position: 928, duration: 392, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "style", "${_logo}", "top", '-13.54%', { fromValue: '3.31%'}], position: 1320, duration: 995, easing: "easeOutBack" },
            { id: "eid52", tween: [ "style", "${_left_cloud2}", "opacity", '1', { fromValue: '0'}], position: 1686, duration: 975, easing: "easeOutBack" }         ]
      }
   }
},
"star_shine_animation": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'star_shine_1',
      type: 'image',
      rect: ['0px','0px','23px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/star_shine_1.png','0px','0px']
   },
   {
      id: 'star_shine_2',
      type: 'image',
      rect: ['5px','5px','13px','13px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/star_shine_2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_star_shine_2}": [
            ["style", "top", '5px'],
            ["style", "opacity", '0'],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '45deg']
         ],
         "${_star_shine_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         timeline: [
            { id: "eid1", tween: [ "style", "${_star_shine_2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_star_shine_2}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 500 },
            { id: "eid10", tween: [ "style", "${_star_shine_2}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500 },
            { id: "eid20", tween: [ "transform", "${_star_shine_2}", "rotateZ", '-45deg', { fromValue: '45deg'}], position: 6500, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_star_shine_1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_star_shine_1}", "opacity", '0.4', { fromValue: '0'}], position: 5000, duration: 1500 },
            { id: "eid13", tween: [ "style", "${_star_shine_1}", "opacity", '1', { fromValue: '0.4'}], position: 6500, duration: 500 },
            { id: "eid12", tween: [ "style", "${_star_shine_1}", "opacity", '0.4', { fromValue: '1'}], position: 7000, duration: 500 },
            { id: "eid14", tween: [ "style", "${_star_shine_1}", "opacity", '0', { fromValue: '0.4'}], position: 7500, duration: 1500 },
            { id: "eid16", tween: [ "transform", "${_star_shine_1}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 5000, duration: 4000 }         ]
      }
   }
},
"star_particle": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','2px','2px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "height", '2px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid23", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Ellipse}", "opacity", '0.4', { fromValue: '0'}], position: 3000, duration: 1250 },
            { id: "eid29", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0.4'}], position: 4250, duration: 250 },
            { id: "eid28", tween: [ "style", "${_Ellipse}", "opacity", '0.4', { fromValue: '1'}], position: 4500, duration: 250 },
            { id: "eid30", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.4'}], position: 4750, duration: 1250 }         ]
      }
   }
},
"starfield": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'star_particle',
      type: 'rect',
      rect: ['119','56','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'star_particle',
      symbolName: 'star_particle'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"birdfly_sym": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'birdsprite2',
      type: 'rect',
      rect: ['28.2%','384px','auto','auto','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0]
   }],
   symbolInstances: [
   {
      id: 'birdsprite2',
      symbolName: 'birdsprite_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_birdsprite2}": [
            ["style", "top", '-32px'],
            ["transform", "scaleY", '-0.3'],
            ["transform", "scaleX", '-0.3'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '-20.92%']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "transform", "${_birdsprite2}", "scaleY", '-0.4', { fromValue: '-0.3'}], position: 24500, duration: 5500 },
            { id: "eid66", tween: [ "style", "${_birdsprite2}", "top", '292px', { fromValue: '-32px'}], position: 24500, duration: 5500 },
            { id: "eid67", tween: [ "transform", "${_birdsprite2}", "scaleX", '-0.4', { fromValue: '-0.3'}], position: 24500, duration: 5500 },
            { id: "eid65", tween: [ "style", "${_birdsprite2}", "left", '98.04%', { fromValue: '-20.92%'}], position: 24500, duration: 5500 }         ]
      }
   }
},
"birdsprite_sym": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'birdsprite',
      rect: ['0px','0px','600px','785px','auto','auto'],
      clip: ['rect(0px 123.93212890625px 172.838623046875px 0px)'],
      fill: ['rgba(0,0,0,0)','images/birdsprite.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '193px'],
            ["style", "width", '212px']
         ],
         "${_birdsprite}": [
            ["style", "top", '0px'],
            ["style", "left", '46px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,123.93212890625,154.9427490234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 236,
         autoPlay: true,
         timeline: [
            { id: "eid56", tween: [ "style", "${_birdsprite}", "clip", [0,123.93212890625,154.9427490234375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,123.93212890625,154.9427490234375,0]}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_birdsprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_birdsprite}", "background-position", [-120,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 13, duration: 0 },
            { id: "eid19", tween: [ "style", "${_birdsprite}", "background-position", [-240,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,0]}], position: 26, duration: 0 },
            { id: "eid20", tween: [ "style", "${_birdsprite}", "background-position", [-360,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,0]}], position: 39, duration: 0 },
            { id: "eid21", tween: [ "style", "${_birdsprite}", "background-position", [-480,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,0]}], position: 54, duration: 0 },
            { id: "eid23", tween: [ "style", "${_birdsprite}", "background-position", [0,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,0]}], position: 66, duration: 0 },
            { id: "eid24", tween: [ "style", "${_birdsprite}", "background-position", [-120,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-157]}], position: 80, duration: 0 },
            { id: "eid25", tween: [ "style", "${_birdsprite}", "background-position", [-240,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-157]}], position: 93, duration: 0 },
            { id: "eid26", tween: [ "style", "${_birdsprite}", "background-position", [-360,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-157]}], position: 105, duration: 0 },
            { id: "eid27", tween: [ "style", "${_birdsprite}", "background-position", [-480,-157], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-157]}], position: 119, duration: 0 },
            { id: "eid29", tween: [ "style", "${_birdsprite}", "background-position", [0,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-157]}], position: 132, duration: 0 },
            { id: "eid30", tween: [ "style", "${_birdsprite}", "background-position", [-120,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-314]}], position: 145, duration: 0 },
            { id: "eid31", tween: [ "style", "${_birdsprite}", "background-position", [-240,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-314]}], position: 160, duration: 0 },
            { id: "eid32", tween: [ "style", "${_birdsprite}", "background-position", [-360,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-314]}], position: 172, duration: 0 },
            { id: "eid35", tween: [ "style", "${_birdsprite}", "background-position", [-480,-314], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-360,-314]}], position: 183, duration: 0 },
            { id: "eid36", tween: [ "style", "${_birdsprite}", "background-position", [0,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-480,-314]}], position: 197, duration: 0 },
            { id: "eid37", tween: [ "style", "${_birdsprite}", "background-position", [-120,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-471]}], position: 210, duration: 0 },
            { id: "eid38", tween: [ "style", "${_birdsprite}", "background-position", [-240,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-120,-471]}], position: 223, duration: 0 },
            { id: "eid39", tween: [ "style", "${_birdsprite}", "background-position", [-360,-471], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-240,-471]}], position: 236, duration: 0 }         ]
      }
   }
},
"right_cloud": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'right_cloud',
      type: 'image',
      rect: ['auto','0px','100%','100%','0%','auto'],
      fill: ['rgba(0,0,0,0)','img/splash/right_cloud.png','0%','0%','100%','100%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_right_cloud}": [
            ["style", "top", '0px'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", 'auto'],
            ["style", "right", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '168px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         labels: {
            "loop": 1000
         },
         timeline: [
            { id: "eid36", tween: [ "style", "${_right_cloud}", "right", '14%', { fromValue: '0%'}], position: 1000, duration: 2000, easing: "easeInOutSine" },
            { id: "eid39", tween: [ "style", "${_right_cloud}", "right", '0%', { fromValue: '14%'}], position: 3000, duration: 2000, easing: "easeInOutSine" }         ]
      }
   }
},
"middle_cloud": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'middle_cloud',
      type: 'image',
      rect: ['auto','0px','100%','100%','0%','auto'],
      fill: ['rgba(0,0,0,0)','img/splash/middle_cloud.png','0%','0%','100%','100%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '149px']
         ],
         "${_middle_cloud}": [
            ["style", "top", '0px'],
            ["style", "right", '0.01%'],
            ["style", "left", 'auto'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "loop": 1000
         },
         timeline: [
            { id: "eid47", tween: [ "style", "${_middle_cloud}", "top", '14px', { fromValue: '0px'}], position: 1000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid48", tween: [ "style", "${_middle_cloud}", "top", '0px', { fromValue: '14px'}], position: 4000, duration: 3000, easing: "easeInOutSine" }         ]
      }
   }
},
"left_cloud": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'left_cloud',
      type: 'image',
      rect: ['auto','0px','100%','100%','0%','auto'],
      fill: ['rgba(0,0,0,0)','img/splash/left_cloud.png','0%','0%','100%','100%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '149px']
         ],
         "${_left_cloud}": [
            ["style", "top", '0px'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "loop": 1000
         },
         timeline: [
            { id: "eid42", tween: [ "style", "${_left_cloud}", "right", '14%', { fromValue: '0%'}], position: 1000, duration: 3000, easing: "easeInOutSine" },
            { id: "eid43", tween: [ "style", "${_left_cloud}", "right", '0%', { fromValue: '14%'}], position: 4000, duration: 3000, easing: "easeInOutSine" }         ]
      }
   }
},
"logo": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'glow3',
      type: 'image',
      rect: ['auto','-4px','100%','100%','2.5%','auto'],
      fill: ['rgba(0,0,0,0)','img/splash/glow.png','0%','0%','100%','100%']
   },
   {
      id: 'innovo_logo',
      type: 'image',
      rect: ['auto','120px','31.6%','56.4%','35%','auto'],
      fill: ['rgba(0,0,0,0)','img/splash/innovo_logo.png','50%','50%','100%','100.02%']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_innovo_logo}": [
            ["style", "top", '120px'],
            ["style", "overflow", 'visible'],
            ["style", "background-size", [100,100.02], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "right", '35.05%'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '509px'],
            ["style", "width", '1010px']
         ],
         "${_glow3}": [
            ["style", "top", '-4px'],
            ["style", "right", '2.48%'],
            ["style", "left", 'auto'],
            ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9941,
         autoPlay: true,
         labels: {
            "start": 250,
            "loop": 1500
         },
         timeline: [
            { id: "eid59", tween: [ "style", "${_glow3}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3000, duration: 0, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_glow3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 2750, easing: "easeOutQuad" }         ]
      }
   }
},
"satellite_animation": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'satellite_animation',
      type: 'image',
      rect: ['auto','0%','55px','55px','0%','auto'],
      fill: ['rgba(0,0,0,0)','images/satellite_animation.gif','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_satellite_animation}": [
            ["style", "top", '0%'],
            ["style", "height", '55px'],
            ["style", "right", '0%'],
            ["style", "left", 'auto'],
            ["style", "width", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '55px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         timeline: [
            { id: "eid44", tween: [ "style", "${_satellite_animation}", "right", '2732.1%', { fromValue: '0%'}], position: 0, duration: 15000 },
            { id: "eid40", tween: [ "style", "${_satellite_animation}", "top", '0%', { fromValue: '0%'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid45", tween: [ "style", "${_satellite_animation}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 }         ]
      }
   }
},
"satellite_anim": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'satellite_animation3',
      type: 'image',
      rect: ['91.2%','0px','40px','40px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/satellite_animation.gif','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_satellite_animation3}": [
            ["style", "top", '0px'],
            ["style", "height", '40px'],
            ["style", "left", '91.17%'],
            ["style", "width", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '194px'],
            ["style", "width", '997px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 120000,
         autoPlay: true,
         timeline: [
            { id: "eid55", tween: [ "style", "${_satellite_animation3}", "left", '2.1%', { fromValue: '91.17%'}], position: 60000, duration: 60000 }         ]
      }
   }
},
"balloon_animation": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'balloon_swing',
      type: 'rect',
      rect: ['92.8%','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'balloon_swing',
      symbolName: 'balloon_swing'
   }   ]
   },
   states: {
      "Base State": {
         "${_balloon_swing}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.75'],
            ["style", "left", '102.49%'],
            ["transform", "scaleX", '0.75']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '1332px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 60000,
         autoPlay: true,
         timeline: [
            { id: "eid63", tween: [ "style", "${_balloon_swing}", "top", '-13px', { fromValue: '-13px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "transform", "${_balloon_swing}", "scaleX", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_balloon_swing}", "left", '-10.71%', { fromValue: '102.49%'}], position: 0, duration: 60000, easing: "easeInOutSine" },
            { id: "eid70", tween: [ "transform", "${_balloon_swing}", "scaleY", '0.75', { fromValue: '0.75'}], position: 0, duration: 0 }         ]
      }
   }
},
"balloon_swing": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Hot_air_balloon2',
      type: 'image',
      rect: ['0px','0px','76px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Hot_air_balloon_png.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Hot_air_balloon2}": [
            ["style", "top", '0px'],
            ["style", "height", '103px'],
            ["style", "left", '0px'],
            ["style", "width", '76px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid72", tween: [ "style", "${_Hot_air_balloon2}", "top", '25px', { fromValue: '0px'}], position: 0, duration: 2000, easing: "easeInOutSine" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3100054");
