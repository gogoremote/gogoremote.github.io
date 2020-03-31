webpackJsonp([53],{"3aOZ":function(t,o,e){"use strict";function r(t){e("FXZb")}Object.defineProperty(o,"__esModule",{value:!0});var n=e("yc6C"),i=e("PhNL"),a=e("VU/8"),s=r,c=a(n.a,i.a,!1,s,"data-v-75e2bd02",null);o.default=c.exports},FXZb:function(t,o,e){var r=e("s+e5");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("5819ee79",r,!0)},PhNL:function(t,o,e){"use strict";var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"motor-control-panel"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:{content:t.$t("gogoboard.motor.on")},expression:"{ content: $t('gogoboard.motor.on') }",modifiers:{bottom:!0}}],staticClass:"btn btn-info btn-with-icon rounded-icon",attrs:{id:"gogo-on-icon"},on:{click:function(o){t.doGogoCmd("motorOn")}}},[t._m(0)])]),t._v(" "),e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("gogoboard.motor.off"),expression:"$t('gogoboard.motor.off')",modifiers:{bottom:!0}}],staticClass:"btn btn-info btn-with-icon rounded-icon",on:{click:function(o){t.doGogoCmd("motorOff")}}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("gogoboard.motor.ccw"),expression:"$t('gogoboard.motor.ccw')",modifiers:{bottom:!0}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{click:function(o){t.doGogoCmd("motorCCW")}}},[t._m(2)])]),t._v(" "),e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("gogoboard.motor.rd"),expression:"$t('gogoboard.motor.rd')",modifiers:{bottom:!0}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{click:function(o){t.doGogoCmd("motorRD")}}},[t._m(3)])]),t._v(" "),e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("gogoboard.motor.cw"),expression:"$t('gogoboard.motor.cw')",modifiers:{bottom:!0}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{click:function(o){t.doGogoCmd("motorCW")}}},[t._m(4)])])]),t._v(" "),t._m(5),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4 text-right"},[e("p",[t._v(t._s(t._f("translate")("gogoboard.motor.motor_power")))])]),t._v(" "),e("div",{staticClass:"col-sm-5 justify-content-center"},[e("vue-slider",{ref:"motorSlider",model:{value:t.motorPower,callback:function(o){t.motorPower=o},expression:"motorPower"}}),t._v(" "),e("fieldset",[e("div",{staticClass:"form-group with-icon-left"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.motorPower,expression:"motorPower"}],attrs:{type:"number",maxlength:"4",min:"0",max:"100",step:"1"},domProps:{value:t.motorPower},on:{input:function(o){o.target.composing||(t.motorPower=o.target.value)}}}),t._v(" "),e("i",{staticClass:"fa fa-flash icon-left input-icon"}),t._v(" "),e("i",{staticClass:"bar"})])])])],1),t._v(" "),e("div",{staticClass:"col-sm-3 text-center"},[e("div",{staticClass:"motor-cmd-area"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("gogoboard.motor.set_power"),expression:"$t('gogoboard.motor.set_power')",modifiers:{bottom:!0}}],staticClass:"btn btn-info btn-with-icon rounded-icon",on:{click:function(o){t.setMotorPower()}}},[t._m(6)])])])])])},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-minus fa-rotate-90 little-adjust"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-circle-o"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-undo"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-refresh"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-repeat"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[e("br")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"button-motor-control"},[e("i",{staticClass:"fa fa-inverse fa-2x fa-flash shift-right"})])}],i={render:r,staticRenderFns:n};o.a=i},"s+e5":function(t,o,e){o=t.exports=e("FZ+f")(!0),o.push([t.i,".motor-cmd-area[data-v-75e2bd02]{margin-right:5px}","",{version:3,sources:["C:/xampp/htdocs/remote-gogo-program/src/components/gogoboard/gogo-elements/motor-elements/MotorControlPanel.vue"],names:[],mappings:"AACA,iCACE,gBAAkB,CACnB",file:"MotorControlPanel.vue",sourcesContent:["\n.motor-cmd-area[data-v-75e2bd02] {\n  margin-right: 5px;\n}\n"],sourceRoot:""}])},yc6C:function(t,o,e){"use strict";var r=e("Dd8w"),n=e.n(r),i=e("NYxO"),a=e("GDE4"),s=e.n(a),c=e("1yc6"),m=e.n(c);o.a={name:"motor-control-panel",components:{vueSlider:s.a,VueSlideBar:m.a},data:function(){return{motorPower:100,text:{ok:this.$t("gogoboard.motor.set_power")}}},methods:n()({setMotorPower:function(){this.doGogoCmdObj({cmd:"setPower",params:this.motorPower})}},Object(i.c)(["doGogoCmd","doGogoCmdObj"])),mounted:function(){var t=this;setTimeout(function(){void 0!==t.$refs.motorSlider&&t.$nextTick(function(){return t.$refs.motorSlider.refresh()})},300)},updated:function(){var t=this;this.$nextTick(function(){return t.$refs.motorSlider.refresh()})},computed:{}}}});
//# sourceMappingURL=53.64732badae392e83ba3c.js.map