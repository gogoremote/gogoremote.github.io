webpackJsonp([40],{"/qnk":function(t,i,s){"use strict";var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ui-grid row"},[s("div",{staticClass:"col-md-12"},[s("vuestic-widget",{attrs:{headerText:"Fixed Grid"}},[s("div",{staticClass:"row"},t._l(3,function(i){return s("div",{staticClass:"col"},[s("div",[t._v(".col")])])})),t._v(" "),s("div",{staticClass:"row"},t._l(6,function(i){return s("div",{staticClass:"col"},[s("div",[t._v(".col")])])})),t._v(" "),s("div",{staticClass:"row"},t._l(12,function(i){return s("div",{staticClass:"col"},[s("div",[t._v(".col")])])}))])],1),t._v(" "),s("div",{staticClass:"col-md-12"},[s("vuestic-widget",{attrs:{headerText:"Desktop Grid"}},[s("div",{staticClass:"row"},t._l(3,function(i){return s("div",{staticClass:"col-md-4"},[s("div",[t._v(".col-md-4")])])})),t._v(" "),s("div",{staticClass:"row"},t._l(6,function(i){return s("div",{staticClass:"col-md-2"},[s("div",[t._v(".col-md-2")])])})),t._v(" "),s("div",{staticClass:"row"},t._l(12,function(i){return s("div",{staticClass:"col-md-1"},[s("div",[t._v(".col-md-1")])])}))])],1),t._v(" "),s("div",{staticClass:"col-md-12"},[s("vuestic-widget",{attrs:{headerText:"Mobile and Desktop Grid"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",[t._v(".col-md-3 .col-sm-8")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-sm-8"},[s("div",[t._v(".col-md-3 .col-sm-8")])]),t._v(" "),s("div",{staticClass:"col-md-9 col-sm-4"},[s("div",[t._v(".col-md-9 .col-sm-4")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-sm-2"},[s("div",[t._v(".col-md-4 .col-sm-2")])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-8"},[s("div",[t._v(".col-md-4 .col-sm-8")])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-2"},[s("div",[t._v(".col-md-4 .col-sm-2")])])])])],1),t._v(" "),s("div",{staticClass:"col-md-12"},[s("vuestic-widget",{attrs:{headerText:"Offsets"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-6 col-sm-6"},[s("div",[t._v(".col-md-6 .offset-md-6 .col-sm-6")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-3"},[s("div",[t._v(".col-md-6 .offset-md-3")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",[t._v(".col-4")])]),t._v(" "),s("div",{staticClass:"col-4 offset-4"},[s("div",[t._v(".col-4 .offset-8")])])])])],1)])},l=[],c={render:o,staticRenderFns:l};i.a=c},"8Awl":function(t,i,s){var o=s("Hont");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("0d323833",o,!0)},B8IG:function(t,i,s){"use strict";function o(t){s("8Awl")}Object.defineProperty(i,"__esModule",{value:!0});var l=s("u19d"),c=s("/qnk"),e=s("VU/8"),r=o,d=e(l.a,c.a,!1,r,null,null);i.default=d.exports},Hont:function(t,i,s){i=t.exports=s("FZ+f")(!0),i.push([t.i,".ui-grid .row div[class^=col]{padding:0}.ui-grid .row div[class^=col] div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:.5rem .25rem;min-height:3rem;color:#fff;background-color:#a5d442;border-radius:.5rem}","",{version:3,sources:["C:/xampp/htdocs/remote-gogo-program/src/components/ui/grid/Grid.vue"],names:[],mappings:"AAgBA,8BACE,SAAW,CACZ,AACD,kCACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,kBAAmB,AACnB,oBAAqB,AACrB,gBAAiB,AACjB,WAAY,AACZ,yBAA0B,AAC1B,mBAAsB,CACzB",file:"Grid.vue",sourcesContent:["/*$tooltip-font-size: $font-size-base;\r\n$tooltip-box-shadow: $white;\r\n$tooltip-max-width: 200px;\r\n$tooltip-color: $white;\r\n$tooltip-bg: $white;\r\n$tooltip-border-radius: $font-size-base * 0.5;\r\n$tooltip-opacity: .9;\r\n$tooltip-padding-y: .5rem;\r\n$tooltip-padding-x: .75rem;\r\n$tooltip-margin: 0;\r\n$tooltip-line-height: 1.13;\r\n$tooltip-font-weight: 300;\r\n\r\n$tooltip-arrow-width: .8rem;\r\n$tooltip-arrow-height: .4rem;\r\n$tooltip-arrow-color: $white;*/\n.ui-grid .row div[class^=col] {\n  padding: 0;\n}\n.ui-grid .row div[class^=col] div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    margin: .5rem .25rem;\n    min-height: 3rem;\n    color: #fff;\n    background-color: #a5d442;\n    border-radius: 0.5rem;\n}\n"],sourceRoot:""}])},u19d:function(t,i,s){"use strict";i.a={name:"grid"}}});
//# sourceMappingURL=40.25091e3aea29e46a57b9.js.map