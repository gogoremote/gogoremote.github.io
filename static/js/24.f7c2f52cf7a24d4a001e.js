webpackJsonp([24],{"49xt":function(t,a,r){"use strict";var e=r("IcnI"),s=e.a.getters.palette;a.a={labels:["North America","South America","Australia"],datasets:[{label:"Population (millions)",backgroundColor:[s.danger,s.info,s.success],data:[2478,5267,734]}]}},"ANn+":function(t,a,r){"use strict";var e=r("IcnI"),s=e.a.getters.palette;a.a={labels:["Africa","Asia","Europe"],datasets:[{label:"Population (millions)",backgroundColor:[s.primary,s.warning,s.danger],data:[2478,5267,734]}]}},ITSI:function(t,a,r){"use strict";var e=r("IcnI"),s=e.a.getters.palette;a.a={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"USA",backgroundColor:s.primary,borderColor:s.transparent,data:[50,20,12,39,10,40,39,80,40,20,12,11]},{label:"USSR",backgroundColor:s.info,borderColor:s.transparent,data:[50,10,22,39,15,20,85,32,60,50,20,30]}]}},LODt:function(t,a,r){"use strict";var e=r("IcnI"),s=r("hLWQ"),o=e.a.getters.palette;a.a={datasets:[{label:"USA",backgroundColor:s.a.hex2rgb(o.danger,.9).css,borderColor:o.transparent,data:[{x:23,y:25,r:15},{x:40,y:10,r:10},{x:30,y:22,r:30},{x:7,y:43,r:40},{x:23,y:27,r:120},{x:20,y:15,r:11},{x:7,y:10,r:35},{x:10,y:20,r:40}]},{label:"Russia",backgroundColor:s.a.hex2rgb(o.primary,.9).css,borderColor:o.transparent,data:[{x:0,y:30,r:15},{x:20,y:20,r:20},{x:15,y:15,r:50},{x:31,y:46,r:30},{x:20,y:14,r:25},{x:34,y:17,r:30},{x:44,y:44,r:10},{x:39,y:25,r:35}]},{label:"Canada",backgroundColor:s.a.hex2rgb(o.warning,.9).css,borderColor:o.transparent,data:[{x:10,y:30,r:45},{x:10,y:50,r:20},{x:5,y:5,r:30},{x:40,y:30,r:20},{x:33,y:15,r:18},{x:40,y:20,r:40},{x:33,y:33,r:40}]},{label:"Belarus",backgroundColor:s.a.hex2rgb(o.info,.9).css,borderColor:o.transparent,data:[{x:35,y:30,r:45},{x:25,y:40,r:35},{x:5,y:5,r:30},{x:5,y:20,r:40},{x:10,y:40,r:15},{x:3,y:10,r:10},{x:15,y:40,r:40},{x:7,y:15,r:10}]},{label:"Ukraine",backgroundColor:s.a.hex2rgb(o.success,.9).css,borderColor:o.transparent,data:[{x:25,y:10,r:40},{x:17,y:40,r:40},{x:35,y:10,r:20},{x:3,y:40,r:10},{x:40,y:40,r:40},{x:20,y:10,r:10},{x:10,y:27,r:35},{x:7,y:26,r:40}]}]}},Q9YG:function(t,a,r){"use strict";var e=r("QHHf"),s=r("LODt"),o=r("ANn+"),i=r("49xt"),n=r("ITSI"),l=r("uAA8"),c=r("SZ1I");a.a={name:"charts",components:{SidebarLink:c.default},data:function(){return{bubbleChartData:s.a,lineChartData:e.a,pieChartData:o.a,donutChartData:i.a,verticalBarChartData:n.a,horizontalBarChartData:l.a}}}},QHHf:function(t,a,r){"use strict";var e=r("hLWQ"),s=r("IcnI"),o=s.a.getters.palette;a.a={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Debit",backgroundColor:e.a.hex2rgb(o.primary,.6).css,borderColor:o.transparent,data:[40,39,10,40,39,80,40]},{label:"Credit",backgroundColor:e.a.hex2rgb(o.info,.6).css,borderColor:o.transparent,data:[50,20,70,30,10,5,70]}]}},WDYB:function(t,a,r){var e=r("j20J");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("rjj0")("e607a0b6",e,!0)},dfb7:function(t,a,r){"use strict";function e(t){r("WDYB")}Object.defineProperty(a,"__esModule",{value:!0});var s=r("Q9YG"),o=r("yn8t"),i=r("VU/8"),n=e,l=i(s.a,o.a,!1,n,null,null);a.default=l.exports},j20J:function(t,a,r){a=t.exports=r("FZ+f")(!0),a.push([t.i,".widget.chart-widget .widget-body{height:550px}","",{version:3,sources:["C:/xampp/htdocs/remote-gogo-program/src/components/statistics/charts/Charts.vue"],names:[],mappings:"AAgBA,kCACE,YAAc,CACf",file:"Charts.vue",sourcesContent:["/*$tooltip-font-size: $font-size-base;\r\n$tooltip-box-shadow: $white;\r\n$tooltip-max-width: 200px;\r\n$tooltip-color: $white;\r\n$tooltip-bg: $white;\r\n$tooltip-border-radius: $font-size-base * 0.5;\r\n$tooltip-opacity: .9;\r\n$tooltip-padding-y: .5rem;\r\n$tooltip-padding-x: .75rem;\r\n$tooltip-margin: 0;\r\n$tooltip-line-height: 1.13;\r\n$tooltip-font-weight: 300;\r\n\r\n$tooltip-arrow-width: .8rem;\r\n$tooltip-arrow-height: .4rem;\r\n$tooltip-arrow-color: $white;*/\n.widget.chart-widget .widget-body {\n  height: 550px;\n}\n"],sourceRoot:""}])},uAA8:function(t,a,r){"use strict";var e=r("IcnI"),s=e.a.getters.palette;a.a={labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Vuestic Satisfaction Score",backgroundColor:s.warning,borderColor:s.transparent,data:[80,90,50,70,60,90,50,90,80,40,72,93]},{label:"Bulma Satisfaction Score",backgroundColor:s.danger,borderColor:s.transparent,data:[20,30,20,40,50,40,15,60,30,20,42,53]}]}},yn8t:function(t,a,r){"use strict";var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"charts-page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.verticalBarChart")}},[r("vuestic-chart",{attrs:{data:t.verticalBarChartData,type:"vertical-bar"}})],1)],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.horizontalBarChart")}},[r("vuestic-chart",{attrs:{data:t.horizontalBarChartData,type:"horizontal-bar"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.lineChart")}},[r("vuestic-chart",{attrs:{data:t.lineChartData,type:"line"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.pieChart")}},[r("vuestic-chart",{attrs:{data:t.pieChartData,type:"pie"}})],1)],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.donutChart")}},[r("vuestic-chart",{attrs:{data:t.donutChartData,type:"donut"}})],1)],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("vuestic-widget",{staticClass:"chart-widget",attrs:{headerText:t._f("translate")("charts.bubbleChart")}},[r("vuestic-chart",{attrs:{data:t.bubbleChartData,type:"bubble"}})],1)],1)])])},s=[],o={render:e,staticRenderFns:s};a.a=o}});
//# sourceMappingURL=24.f7c2f52cf7a24d4a001e.js.map