webpackJsonp([4,0,9,12,19,28,29,33,34,35,56,57,58],{

/***/ "+dNs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"motor-panel"},[_c('motor-display-panel'),_vm._v(" "),_c('vue-tabs',[_c('v-tab',{attrs:{"title":_vm.$t('gogoboard.tabs.dc_motor'),"icon":"ti-user"}},[_c('motor-control-panel')],1),_vm._v(" "),_c('v-tab',{attrs:{"title":_vm.$t('gogoboard.tabs.servo_motor')}},[_c('servo-control-panel')],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "+o6u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DisplayPanel_vue__ = __webpack_require__("krsD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b531a2f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DisplayPanel_vue__ = __webpack_require__("YX7/");
function injectStyle (ssrContext) {
  __webpack_require__("e6BR")
  __webpack_require__("Poxp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b531a2f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DisplayPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b531a2f2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DisplayPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/Lho":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".motor-area[data-v-7dd2c19c]{margin-left:2px;text-align:center;margin-right:2px}.gogo-monitor-motor[data-v-7dd2c19c]{z-index:auto}.motor-port-name[data-v-7dd2c19c]{font-family:arial;font-size:20px}.motor-inactive[data-v-7dd2c19c]{color:#6f8898}.motor-on[data-v-7dd2c19c]{color:#e8e517}.motor-on .motor-port-name[data-v-7dd2c19c]{color:#a58b00}.motor-off[data-v-7dd2c19c]{color:#89a9bb}.motor-off .motor-port-name[data-v-7dd2c19c]{color:#fff}.motor-cw[data-v-7dd2c19c]{color:#8fd200}.motor-ccw[data-v-7dd2c19c]{color:#ef5350}.motor-control[data-v-7dd2c19c]{text-align:center;margin:0}.motor-control>.md-button[data-v-7dd2c19c]{margin-left:2px;margin-right:2px}.normal-font[data-v-7dd2c19c]{font-size:12pt}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/motor-elements/MotorDisplayPanel.vue"],"names":[],"mappings":"AACA,6BACE,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,qCACE,YAAc,CACf,AACD,kCACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,iCACE,aAAe,CAChB,AACD,2BACE,aAAe,CAChB,AACD,4CACI,aAAe,CAClB,AACD,4BACE,aAAe,CAChB,AACD,6CACI,UAAY,CACf,AACD,2BACE,aAAe,CAChB,AACD,4BACE,aAAe,CAChB,AACD,gCACE,kBAAmB,AACnB,QAAY,CACb,AACD,2CACE,gBAAiB,AACjB,gBAAkB,CACnB,AAOD,8BACE,cAAgB,CACjB","file":"MotorDisplayPanel.vue","sourcesContent":["\n.motor-area[data-v-7dd2c19c] {\n  margin-left: 2px;\n  text-align: center;\n  margin-right: 2px;\n}\n.gogo-monitor-motor[data-v-7dd2c19c] {\n  z-index: auto;\n}\n.motor-port-name[data-v-7dd2c19c] {\n  font-family: arial;\n  font-size: 20px;\n}\n.motor-inactive[data-v-7dd2c19c] {\n  color: #6f8898;\n}\n.motor-on[data-v-7dd2c19c] {\n  color: #e8e517;\n}\n.motor-on .motor-port-name[data-v-7dd2c19c] {\n    color: #a58b00;\n}\n.motor-off[data-v-7dd2c19c] {\n  color: #89a9bb;\n}\n.motor-off .motor-port-name[data-v-7dd2c19c] {\n    color: #fff;\n}\n.motor-cw[data-v-7dd2c19c] {\n  color: #8fd200;\n}\n.motor-ccw[data-v-7dd2c19c] {\n  color: #ef5350;\n}\n.motor-control[data-v-7dd2c19c] {\n  text-align: center;\n  margin: 0px;\n}\n.motor-control > .md-button[data-v-7dd2c19c] {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n/*\r\n.motor-control > span {\r\n  font-size: 12px;\r\n}\r\n*/\n.normal-font[data-v-7dd2c19c] {\n  font-size: 12pt;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "1yc6":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-slide-bar v1.2.0
 * (c) 2018-present biig_pongsatorn <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vueSlideBar=e()}(this,function(){"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function e(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(i){t(e,i,n[i])})}return e}var i={name:"vue-slide-bar",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0,isComponentExists:!0,interval:1,lazy:!1,realTime:!1,dataLabelStyles:e({color:"#4a4a4a","font-family":"Arial, sans-serif","font-size":"12px"},this.$props.labelStyles)}},props:{data:{type:Array,default:null},id:{type:String,default:"wrap"},range:{type:Array,default:null},speed:{type:Number,default:.5},lineHeight:{type:Number,default:5},iconWidth:{type:Number,default:20},value:{type:[String,Number],default:0},min:{type:Number,default:0},max:{type:Number,default:100},showTooltip:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},paddingless:{type:Boolean,default:!1},tooltipStyles:Object,labelStyles:Object,processStyle:Object},computed:{slider:function(){return this.$refs.tooltip},val:{get:function(){return this.data?this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data){var e=this.data.indexOf(t);e>-1&&(this.currentValue=e)}else this.currentValue=t}},currentIndex:function(){return(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return[0,this.currentIndex]},minimum:function(){return this.data?0:this.min},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t="".concat(this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return[0,this.size]},valueLimit:function(){return[this.minimum,this.maximum]},calculateHeight:function(){return this.paddingless?{}:{"padding-top":"40px","min-height":this.range?"100px":null}}},watch:{value:function(t){this.flag?this.setValue(t):this.setValue(t,this.speed)},max:function(t){if(t<this.min)return this.printError("[VueSlideBar error]: The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("[VueSlideBar error]: The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),window.addEventListener("resize",this.refresh)},unbindEvents:function(){window.removeEventListener("resize",this.refresh),document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd)},getPos:function(t){return this.realTime&&this.getStaticData(),t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled||!this.draggable&&t.target.id===this.id)return!1;var e=this.getPos(t);this.setValueOnPos(e)},moveStart:function(t,e){if(!this.draggable)return!1;this.flag=!0,this.$emit("dragStart",this)},moving:function(t){if(!this.flag||!this.draggable)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.setValueOnPos(this.getPos(t),!0)},moveEnd:function(t){if(!this.flag||!this.draggable)return!1;this.$emit("dragEnd",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,this.setPosition()},setValueOnPos:function(t,e){var i=this.limit,n=this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var s=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(s,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(n[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(n[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){if(t<this.minimum||t>this.maximum)return!1;this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},setIndex:function(t){t=this.spacing*t+this.minimum,this.setCurrentValue(t)},setValue:function(t,e){var i=this;if(this.isDiff(this.val,t)){var n=this.limitValue(t);this.val=n,this.syncValue()}this.$nextTick(function(){return i.setPosition(e)})},setPosition:function(t){this.flag?this.setTransitionTime(0):this.setTransitionTime(void 0===t?this.speed:t),this.setTransform(this.position)},setTransform:function(t){var e=t-(this.$refs.tooltip.scrollWidth-2)/2,i="translateX(".concat(e,"px)");this.slider.style.transform=i,this.slider.style.WebkitTransform=i,this.slider.style.msTransform=i,this.$refs.process.style.width="".concat(t,"px"),this.$refs.process.style.left=0},setTransitionTime:function(t){this.slider.style.transitionDuration="".concat(t,"s"),this.slider.style.WebkitTransitionDuration="".concat(t,"s"),this.$refs.process.style.transitionDuration="".concat(t,"s"),this.$refs.process.style.WebkitTransitionDuration="".concat(t,"s")},limitValue:function(t){var e=this;if(this.data)return t;var i;return(i=t)<e.min?(e.printError("[VueSlideBar warn]: The value of the slider is ".concat(t,", the minimum value is ").concat(e.min,", the value of this slider can not be less than the minimum value")),e.min):i>e.max?(e.printError("[VueSlideBar warn]: The value of the slider is ".concat(t,", the maximum value is ").concat(e.max,", the value of this slider can not be greater than the maximum value")),e.max):i},syncValue:function(){var t=this.val;this.range&&this.$emit("callbackRange",this.range[this.currentIndex]),this.$emit("input",t)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size=this.$refs.elem.offsetWidth,this.offset=this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())},printError:function(t){console.error(t)}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("[VueSlideBar error]: window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),0),t.bindEvents())})},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}};const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());const s=document.head||document.getElementsByTagName("head")[0],r={};const a=i;i.__file="index.vue";return function(t,e,i,n,s,r,a,o,l,u){"function"==typeof a&&(l=o,o=a,a=!1);const d="function"==typeof i?i.options:i;let h;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),n&&(d._scopeId=n),r?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=h):e&&(h=a?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),h)if(d.functional){const t=d.render;d.render=function(e,i){return h.call(i),t(e,i)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,h):[h]}return i}({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap",staticClass:"vue-slide-bar-component vue-slide-bar-horizontal",style:t.calculateHeight,attrs:{id:t.id},on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slide-bar",style:{height:t.lineHeight+"px"}},[[i("div",{ref:"tooltip",staticClass:"vue-slide-bar-always vue-slide-bar-tooltip-container",style:{width:t.iconWidth+"px"},on:{mousedown:t.moveStart,touchstart:t.moveStart}},[t.showTooltip?i("span",{staticClass:"vue-slide-bar-tooltip-top vue-slide-bar-tooltip-wrap"},[t._t("tooltip",[i("span",{staticClass:"vue-slide-bar-tooltip",style:t.tooltipStyles},[t._v("\n              "+t._s(t.val)+"\n            ")])])],2):t._e()])],t._v(" "),i("div",{ref:"process",staticClass:"vue-slide-bar-process",style:t.processStyle})],2),t._v(" "),t.range?i("div",{staticClass:"vue-slide-bar-range"},t._l(t.range,function(e,n){return i("div",{key:n,staticClass:"vue-slide-bar-separate",style:t.dataLabelStyles},[e.isHide?t._e():i("span",{staticClass:"vue-slide-bar-separate-text"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}),0):t._e()])},staticRenderFns:[]},function(t){t&&t("data-v-d3e7b39a_0",{source:".vue-slide-bar-component[data-v-d3e7b39a]{position:relative;box-sizing:border-box;user-select:none}.vue-slide-bar[data-v-d3e7b39a]{position:relative;display:block;border-radius:15px;background-color:#d8d8d8;cursor:pointer}.vue-slide-bar[data-v-d3e7b39a]::after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slide-bar-process[data-v-d3e7b39a]{position:absolute;border-radius:15px;background-color:#1066fd;transition:all 0s;z-index:1;width:0;height:100%;top:0;left:0;will-change:width}.vue-slide-bar-tooltip-container[data-v-d3e7b39a]{position:absolute;transition:all 0s;will-change:transform;cursor:pointer;z-index:3;left:0;top:-16px}.vue-slide-bar-tooltip-wrap[data-v-d3e7b39a]{position:absolute;z-index:9;width:100%;height:100%;display:block!important}.vue-slide-bar-tooltip-top[data-v-d3e7b39a]{top:-12px;left:40%;transform:translate(-50%,-100%)}.vue-slide-bar-tooltip[data-v-d3e7b39a]{position:relative;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #1066fd;background-color:#1066fd}.vue-slide-bar-tooltip[data-v-d3e7b39a]::before{content:'';position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border-top-color:inherit;transform:translate(-50%,0)}.vue-slide-bar-range[data-v-d3e7b39a]{display:flex;padding:5px 0;justify-content:space-between}.vue-slide-bar-separate[data-v-d3e7b39a]{position:relative;width:2px;background-color:#9e9e9e;height:5px;cursor:pointer}.vue-slide-bar-separate-text[data-v-d3e7b39a]{text-align:center;position:absolute;white-space:nowrap;transform:translate(-50%,0);top:6px}",map:void 0,media:void 0})},a,"data-v-d3e7b39a",!1,void 0,function(t){return(t,e)=>(function(t,e){const i=n?e.media||"default":t,a=r[i]||(r[i]={ids:new Set,styles:[]});if(!a.ids.has(t)){a.ids.add(t);let i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",e.media&&a.element.setAttribute("media",e.media),s.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(i),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const t=a.ids.size-1,e=document.createTextNode(i),n=a.element.childNodes;n[t]&&a.element.removeChild(n[t]),n.length?a.element.insertBefore(e,n[t]):a.element.appendChild(e)}}})(t,e)},void 0)});
//# sourceMappingURL=vue-slide-bar.min.js.map


/***/ }),

/***/ "2GkO":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"ProgramLeftSlide.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "2bON":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".spacehead[data-v-02cd8d88]{margin-top:20px;margin-bottom:60px}.space[data-v-02cd8d88]{padding-top:20px;padding-bottom:20px}.block[data-v-02cd8d88]{padding-left:30px;padding-right:30px;color:#4ab2e3}.mac a[data-v-02cd8d88]{color:#db3f8d}.windows a[data-v-02cd8d88]{color:#4ab2e3}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/dashboard-elements/HeaderDetail.vue"],"names":[],"mappings":"AACA,4BACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,wBACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,wBACE,kBAAmB,AACnB,mBAAoB,AACpB,aAAe,CAChB,AACD,wBACE,aAAe,CAChB,AACD,4BACE,aAAe,CAChB","file":"HeaderDetail.vue","sourcesContent":["\n.spacehead[data-v-02cd8d88] {\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\n.space[data-v-02cd8d88] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.block[data-v-02cd8d88] {\n  padding-left: 30px;\n  padding-right: 30px;\n  color: #4ab2e3;\n}\n.mac a[data-v-02cd8d88] {\n  color: #db3f8d;\n}\n.windows a[data-v-02cd8d88] {\n  color: #4ab2e3;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "2pZ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sensor-panel"},[_c('canvas',{ref:"chart",style:(("height: " + ((_vm.miniMode ? '140' : '100')) + "px;width:300px")),attrs:{"id":"sensor-canvas"}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "3864":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ping-panel"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-sm-4 text-center mb-3"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.ping_panel.beep')),expression:"$t('gogoboard.ping_panel.beep')",modifiers:{"bottom":true}}],staticClass:"btn btn-info btn-with-icon rounded-icon",attrs:{"id":"gogo-beep-icon"},on:{"click":function($event){_vm.doGogoCmd('beep')}}},[_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('fieldset',[_c('div',{staticClass:"form-group form-group-w-btn"},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.text7segment),expression:"text7segment"}],attrs:{"id":"input-w-btn","maxlength":"4","required":""},domProps:{"value":(_vm.text7segment)},on:{"input":function($event){if($event.target.composing){ return; }_vm.text7segment=$event.target.value}}}),_vm._v(" "),_c('label',{staticClass:"control-label",attrs:{"for":"input-w-btn"}},[_vm._v(_vm._s(_vm._f("translate")('gogoboard.ping_panel.show_placeholder')))]),_c('i',{staticClass:"bar"})]),_vm._v(" "),_c('div',{staticClass:"btn btn-micro btn-primary",on:{"click":function($event){_vm.showText()}}},[_vm._v("\n            "+_vm._s(_vm._f("translate")('gogoboard.ping_panel.show_button'))+"\n          ")])])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-center"},[_c('img',{attrs:{"src":"/static/gogo-img/remote.png","width":"70","height":"22"}}),_vm._v("  \n      "+_vm._s(_vm._f("translate")('gogoboard.ping_panel.ir_received_code'))+" "+_vm._s(_vm.irValue || 0)+"\n    ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-bell",attrs:{"id":"beep-icon"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "3aOZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorControlPanel_vue__ = __webpack_require__("yc6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19e5193e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorControlPanel_vue__ = __webpack_require__("3fYR");
function injectStyle (ssrContext) {
  __webpack_require__("sKAR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19e5193e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorControlPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19e5193e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorControlPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "3fYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"motor-control-panel"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:({ content: _vm.$t('gogoboard.motor.on') }),expression:"{ content: $t('gogoboard.motor.on') }",modifiers:{"bottom":true}}],staticClass:"btn btn-info btn-with-icon rounded-icon",attrs:{"id":"gogo-on-icon"},on:{"click":function($event){_vm.doGogoCmd('motorOn')}}},[_vm._m(0)])]),_vm._v(" "),_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.off')),expression:"$t('gogoboard.motor.off')",modifiers:{"bottom":true}}],staticClass:"btn btn-info btn-with-icon rounded-icon",on:{"click":function($event){_vm.doGogoCmd('motorOff')}}},[_vm._m(1)])]),_vm._v(" "),_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.ccw')),expression:"$t('gogoboard.motor.ccw')",modifiers:{"bottom":true}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{"click":function($event){_vm.doGogoCmd('motorCCW')}}},[_vm._m(2)])]),_vm._v(" "),_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.rd')),expression:"$t('gogoboard.motor.rd')",modifiers:{"bottom":true}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{"click":function($event){_vm.doGogoCmd('motorRD')}}},[_vm._m(3)])]),_vm._v(" "),_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.cw')),expression:"$t('gogoboard.motor.cw')",modifiers:{"bottom":true}}],staticClass:"btn btn-warning btn-with-icon rounded-icon",on:{"click":function($event){_vm.doGogoCmd('motorCW')}}},[_vm._m(4)])])]),_vm._v(" "),_vm._m(5),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-4 text-right"},[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.motor.motor_power')))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-5 justify-content-center"},[_c('vue-slider',{ref:"motorSlider",model:{value:(_vm.motorPower),callback:function ($$v) {_vm.motorPower=$$v},expression:"motorPower"}}),_vm._v(" "),_c('fieldset',[_c('div',{staticClass:"form-group with-icon-left"},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.motorPower),expression:"motorPower"}],attrs:{"type":"number","maxlength":"4","min":"0","max":"100","step":"1"},domProps:{"value":(_vm.motorPower)},on:{"input":function($event){if($event.target.composing){ return; }_vm.motorPower=$event.target.value}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-flash icon-left input-icon"}),_vm._v(" "),_c('i',{staticClass:"bar"})])])])],1),_vm._v(" "),_c('div',{staticClass:"col-sm-3 text-center"},[_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.set_power')),expression:"$t('gogoboard.motor.set_power')",modifiers:{"bottom":true}}],staticClass:"btn btn-info btn-with-icon rounded-icon",on:{"click":function($event){_vm.setMotorPower()}}},[_vm._m(6)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-minus fa-rotate-90 little-adjust"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-circle-o"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-undo"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-refresh"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-repeat"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('br')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-flash shift-right"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "4Mnj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_deviceControl__ = __webpack_require__("Ilkg");




var labNumber = 0;
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {},
  data: function data() {
    return {
      isActive: 0
    };
  },

  methods: {
    switchLab: function switchLab(number) {
      var mQtt_ch;
      if (number === 1) {
        mQtt_ch = 'Lab1';
        window.open("https://youtu.be/AXkZo3yLHNg?t=1236", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
      } else if (number === 2) {
        mQtt_ch = 'Lab2';
        window.open("https://youtu.be/IV1mC9yDY4o?t=23", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
      } else if (number === 3) {
        mQtt_ch = 'Lab3';
      }
      localStorage.setItem("mQtt_ch", mQtt_ch);
      console.log(number, ":", mQtt_ch);
    }
  }
});

/***/ }),

/***/ "5GHQ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".center[data-v-7eb0d9b5]{text-align:center}.left[data-v-7eb0d9b5]{text-align:left}.right[data-v-7eb0d9b5]{text-align:right}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/DashboardPanel.vue"],"names":[],"mappings":"AACA,yBACE,iBAAmB,CACpB,AACD,uBACE,eAAiB,CAClB,AACD,wBACE,gBAAkB,CACnB","file":"DashboardPanel.vue","sourcesContent":["\n.center[data-v-7eb0d9b5] {\n  text-align: center;\n}\n.left[data-v-7eb0d9b5] {\n  text-align: left;\n}\n.right[data-v-7eb0d9b5] {\n  text-align: right;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "5PlU":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "5Sos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabDisplayPanel_vue__ = __webpack_require__("AhJm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_192d5c96_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabDisplayPanel_vue__ = __webpack_require__("9sUA");
function injectStyle (ssrContext) {
  __webpack_require__("aU46")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-192d5c96"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabDisplayPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_192d5c96_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabDisplayPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9sUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-display-panel"},[_c('div',{staticClass:"row justify-content-around"},[_c('div',{staticClass:"lab-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'),expression:"$t('gogoboard.motor.'+(motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'",modifiers:{"top":true}}],staticClass:"gogo-monitor-lab fa-stack fa-2x",class:[true ? 'lab-active' : 'lab-inactive'],attrs:{"id":"gogo-lab-icon-a","href":"javascript:;"},on:{"click":[function($event){_vm.selectLab(1)},function($event){_vm.isSelect = 1}]}},[_c('i',{staticClass:"lab-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"lab-icon lab-icon-1 icon-lab-1 fa-stack-1x "}),_vm._v(" "),_c('i',{staticClass:"lab-select fa fa-stack-2x",class:[ _vm.isSelect == 1 ? 'fa-circle-o-notch fa-spin' : '' ]}),_vm._v(" "),_c('i',{staticClass:"lab-ban fa fa-stack-2x",class:[
          false ? 'fa-ban' : '',// ban and unban
          false ? 'lab-ban-active' : 'lab-ban-inactive' ]})]),_vm._v(" "),_c('div',{staticClass:"row justify-content-center"},[_c('span',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdisplay_panel.lab1')))])])]),_vm._v(" "),_c('div',{staticClass:"lab-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'),expression:"$t('gogoboard.motor.'+(motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'",modifiers:{"top":true}}],staticClass:"gogo-monitor-lab fa-stack fa-2x",class:[false ? 'lab-active' : 'lab-inactive'],attrs:{"id":"gogo-lab-icon-a","href":"javascript:;"},on:{"click":[function($event){_vm.selectLab(2)},function($event){_vm.isSelect = 2}]}},[_c('i',{staticClass:"lab-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"lab-icon lab-icon-1 icon-lab-2 fa-stack-1x "}),_vm._v(" "),_c('i',{staticClass:"lab-select fa fa-stack-2x",class:[ _vm.isSelect == 2 ? 'fa-circle-o-notch fa-spin' : '' ]}),_vm._v(" "),_c('i',{staticClass:"lab-ban fa fa-stack-2x",class:[
          false ? 'fa-ban' : '',// ban and unban
          false ? 'lab-ban-active' : 'lab-ban-inactive' ]})]),_vm._v(" "),_c('div',{staticClass:"row justify-content-center"},[_c('span',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdisplay_panel.lab2')))])])]),_vm._v(" "),_c('div',{staticClass:"lab-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'),expression:"$t('gogoboard.motor.'+(motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'",modifiers:{"top":true}}],staticClass:"gogo-monitor-lab fa-stack fa-2x",class:[false ? 'lab-active' : 'lab-inactive'],attrs:{"id":"gogo-lab-icon-a","href":"javascript:;"},on:{"click":function($event){_vm.selectLab(3)}}},[_c('i',{staticClass:"lab-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"lab-icon lab-icon-1 icon-lab-3 fa-stack-1x "}),_vm._v(" "),_c('i',{staticClass:"lab-ban fa fa-stack-2x",class:[
          true ? 'fa-ban' : '',// ban and unban
          true ? 'lab-ban-active' : 'lab-ban-inactive' ]})]),_vm._v(" "),_c('div',{staticClass:"row justify-content-center"},[_c('span',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdisplay_panel.lab3')))])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AE1u":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".center[data-v-3e224774]{text-align:center}.left[data-v-3e224774]{text-align:left}.right[data-v-3e224774]{text-align:right}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/MotorPanel.vue"],"names":[],"mappings":"AACA,yBACE,iBAAmB,CACpB,AACD,uBACE,eAAiB,CAClB,AACD,wBACE,gBAAkB,CACnB","file":"MotorPanel.vue","sourcesContent":["\n.center[data-v-3e224774] {\n  text-align: center;\n}\n.left[data-v-3e224774] {\n  text-align: left;\n}\n.right[data-v-3e224774] {\n  text-align: right;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "AJ00":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".sensor-widget .widget-body{padding:0!important;padding-top:1rem!important;padding-bottom:1rem!important}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/SensorPanel.vue"],"names":[],"mappings":"AACA,4BACE,oBAAwB,AACxB,2BAA6B,AAC7B,6BAAgC,CACjC","file":"SensorPanel.vue","sourcesContent":["\n.sensor-widget .widget-body {\r\n  padding: 0px !important;\r\n  padding-top: 1rem !important;\r\n  padding-bottom: 1rem !important;\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "AhJm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LabDetailPanel_vue__ = __webpack_require__("dpXX");






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'lab-display-panel',
  components: {
    LabDetailPanel: __WEBPACK_IMPORTED_MODULE_2__LabDetailPanel_vue__["default"]
  },
  data: function data() {
    return {
      childMessage: '',
      labIndex: '',
      isSelect: ''
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    selectLab: function selectLab(event) {
      this.$emit('childToParent', event);
      var mQtt_ch;
      var number = event;
      if (number == 1) {
        mQtt_ch = 'Lab1';
      } else if (number == 2) {
        mQtt_ch = 'Lab2';
      } else if (number == 3) {
        mQtt_ch = 'Lab3';
      }
      localStorage.setItem("mQtt_ch", mQtt_ch);
      console.log(number, ":", mQtt_ch);
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['doGogoCmdObj'])),
  mounted: function mounted() {},
  updated: function updated() {},

  computed: {
    motors: function motors() {
      return this.$store.getters.gogo.motors;
    }
  }
});

/***/ }),

/***/ "BH3+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".board-link{cursor:pointer}.board-buttom-pad{padding-bottom:12px}.board-large{width:100%;height:auto}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/DisplayPanel.vue"],"names":[],"mappings":"AACA,YACE,cAAgB,CACjB,AACD,kBACE,mBAAqB,CACtB,AACD,aACE,WAAY,AACZ,WAAa,CACd","file":"DisplayPanel.vue","sourcesContent":["\n.board-link {\n  cursor: pointer;\n}\n.board-buttom-pad {\n  padding-bottom: 12px;\n}\n.board-large {\n  width: 100%;\n  height: auto;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "CQ+f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("P36O");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("696c1910", content, true);

/***/ }),

/***/ "Emq7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabPanel_vue__ = __webpack_require__("4Mnj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061a89c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabPanel_vue__ = __webpack_require__("V4G2");
function injectStyle (ssrContext) {
  __webpack_require__("kJU6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5061a89c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5061a89c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FAyG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SensorPanel_vue__ = __webpack_require__("yeuj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8445c056_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SensorPanel_vue__ = __webpack_require__("2pZ5");
function injectStyle (ssrContext) {
  __webpack_require__("Xc89")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SensorPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8445c056_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SensorPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "FgVb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-detail"},[_c('vuestic-modal',{ref:"labDetailAlert",attrs:{"show":_vm.show,"large":true,"okClass":'none',"okText":_vm._f("translate")('modal.confirm'),"cancelClass":'none',"cancelText":_vm._f("translate")('modal.cancel'),"headerBgColor":'#3298a8'},on:{"update:show":function($event){_vm.show=$event}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('i',{staticClass:"fa fa-car"}),_vm._v(" "+_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab' + _vm.isLab)))]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-3 text-right",staticStyle:{"background-color":"lightcyan"}},[_c('h5',[_c('img',{attrs:{"src":"/static/gogo-img/demo-carControl.png","width":"150","height":"160"}})])]),_vm._v(" "),_c('div',{staticClass:"col-sm-3 text-right space",staticStyle:{"background-color":"lightcyan"}},[_c('h5',[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab1_detail.head'))+" :")])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6 space",staticStyle:{"background-color":"lavender"}},[_c('h6',[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab1_detail.head1')))])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6 text-right space",staticStyle:{"background-color":"lightcyan"}},[_c('h5',[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab1_detail.tool'))+" :")])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6 space",staticStyle:{"background-color":"lavender"}},[_c('h6',[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab1_detail.tool1'))),_c('br'),_vm._v("\n          "+_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.lab1_detail.tool2')))])])])]),_vm._v(" "),_c('hr',{attrs:{"width":"50%"}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "I1UB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component__ = __webpack_require__("GDE4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar__ = __webpack_require__("1yc6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slide_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__("162o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'lab-detail-panel',
  props: {
    parentData: Number,
    parentData2: String
  },
  components: {
    vueSlider: __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default.a,
    VueSlideBar: __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar___default.a
  },
  data: function data() {
    return {
      message: 'You loaded this page on ',
      lab: 1,
      lab_selected: 0,
      form: {
        name: ''
      }
    };
  },

  methods: {
    etr: function etr() {
      if (this.parentDat == 1) {
        this.$swalDetail1({});
      } else if (this.parentDat == 2) {
        this.$swalDetail2({});
      } else if (this.parentDat == 3) {
        this.$swalDetail3({});
      } else {
        this.$swalDetail1({});
      }
      this.lab = 0;
      console.log(this.lab);
    }
  },
  mounted: function mounted() {},
  updated: function updated() {},

  computed: {
    labselected: function labselected() {
      return 99;
    }
  }
});

/***/ }),

/***/ "IqIK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorDisplayPanel_vue__ = __webpack_require__("giri");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dd2c19c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorDisplayPanel_vue__ = __webpack_require__("K6vv");
function injectStyle (ssrContext) {
  __webpack_require__("oVRz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dd2c19c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorDisplayPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dd2c19c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorDisplayPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JiId":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("un9w");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1c6ebe1a", content, true);

/***/ }),

/***/ "K6vv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"motor-display-panel"},[_c('div',{staticClass:"row justify-content-center"},[_c('span',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.motor.slect_motor_port')))]),_vm._v(" "),_c('br'),_c('br')]),_vm._v(" "),_c('div',{staticClass:"row justify-content-around"},[_c('div',{staticClass:"motor-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'),expression:"$t('gogoboard.motor.'+(motors[0].isActive ? 'click_to_unselect' : 'click_to_select')) + ' A'",modifiers:{"top":true}}],staticClass:"gogo-monitor-motor fa-stack fa-2x",class:[_vm.motors[0].isOn ? 'motor-on' : 'motor-off'],attrs:{"id":"gogo-motor-icon-a","href":"javascript:;"},on:{"click":function($event){_vm.toggleMotor(0)}}},[_c('i',{staticClass:"motor-port-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"motor-port-name fa fa-stack-1x "},[_vm._v("A")]),_vm._v(" "),_c('i',{staticClass:"motor-direction fa fa-stack-2x",class:[
          _vm.motors[0].direction == 'cw' ? 'fa-repeat' : 'fa-undo',
          _vm.motors[0].isActive ? 'motor-'+_vm.motors[0].direction : 'motor-inactive' ]})]),_vm._v(" "),_c('p',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.motor_power')),expression:"$t('gogoboard.motor.motor_power')",modifiers:{"bottom":true}}]},[_vm._v(_vm._s(_vm.motors[0].power))])]),_vm._v(" "),_c('div',{staticClass:"motor-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[1].isActive ? 'click_to_unselect' : 'click_to_select')) + ' B'),expression:"$t('gogoboard.motor.'+(motors[1].isActive ? 'click_to_unselect' : 'click_to_select')) + ' B'",modifiers:{"top":true}}],staticClass:"gogo-monitor-motor fa-stack fa-2x",class:[_vm.motors[1].isOn ? 'motor-on' : 'motor-off'],attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toggleMotor(1)}}},[_c('i',{staticClass:"motor-port-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"motor-port-name fa fa-stack-1x "},[_vm._v("B")]),_vm._v(" "),_c('i',{staticClass:"motor-direction fa fa-stack-2x",class:[
          _vm.motors[1].direction == 'cw' ? 'fa-repeat' : 'fa-undo',
          _vm.motors[1].isActive ? 'motor-'+_vm.motors[1].direction : 'motor-inactive' ]})]),_vm._v(" "),_c('p',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.motor_power')),expression:"$t('gogoboard.motor.motor_power')",modifiers:{"bottom":true}}]},[_vm._v(_vm._s(_vm.motors[1].power))])]),_vm._v(" "),_c('div',{staticClass:"motor-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[2].isActive ? 'click_to_unselect' : 'click_to_select')) + ' C'),expression:"$t('gogoboard.motor.'+(motors[2].isActive ? 'click_to_unselect' : 'click_to_select')) + ' C'",modifiers:{"top":true}}],staticClass:"gogo-monitor-motor fa-stack fa-2x",class:[_vm.motors[2].isOn ? 'motor-on' : 'motor-off'],attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toggleMotor(2)}}},[_c('i',{staticClass:"motor-port-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"motor-port-name fa fa-stack-1x "},[_vm._v("C")]),_vm._v(" "),_c('i',{staticClass:"motor-direction fa fa-stack-2x",class:[
          _vm.motors[2].direction == 'cw' ? 'fa-repeat' : 'fa-undo',
          _vm.motors[2].isActive ? 'motor-'+_vm.motors[2].direction : 'motor-inactive' ]})]),_vm._v(" "),_c('p',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.motor_power')),expression:"$t('gogoboard.motor.motor_power')",modifiers:{"bottom":true}}]},[_vm._v(_vm._s(_vm.motors[2].power))])]),_vm._v(" "),_c('div',{staticClass:"motor-area"},[_c('a',{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:(_vm.$t('gogoboard.motor.'+(_vm.motors[3].isActive ? 'click_to_unselect' : 'click_to_select')) + ' D'),expression:"$t('gogoboard.motor.'+(motors[3].isActive ? 'click_to_unselect' : 'click_to_select')) + ' D'",modifiers:{"top":true}}],staticClass:"gogo-monitor-motor fa-stack fa-2x",class:[_vm.motors[3].isOn ? 'motor-on' : 'motor-off'],attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.toggleMotor(3)}}},[_c('i',{staticClass:"motor-port-bg fa fa-circle fa-stack-2x"}),_vm._v(" "),_c('i',{staticClass:"motor-port-name fa fa-stack-1x "},[_vm._v("D")]),_vm._v(" "),_c('i',{staticClass:"motor-direction fa fa-stack-2x",class:[
          _vm.motors[3].direction == 'cw' ? 'fa-repeat' : 'fa-undo',
          _vm.motors[3].isActive ? 'motor-'+_vm.motors[3].direction : 'motor-inactive' ]})]),_vm._v(" "),_c('p',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.motor.motor_power')),expression:"$t('gogoboard.motor.motor_power')",modifiers:{"bottom":true}}]},[_vm._v(_vm._s(_vm.motors[3].power))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "K9VK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"servo-control-panel"},[_c('p',{staticClass:"space-top-bottom"}),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-4 text-right"},[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.servo.servo_head')))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-5 justify-content-center"},[_c('vue-slider',{ref:"servoSlider",attrs:{"min":10,"max":40},model:{value:(_vm.servoHead),callback:function ($$v) {_vm.servoHead=$$v},expression:"servoHead"}}),_vm._v(" "),_c('fieldset',[_c('div',{staticClass:"form-group with-icon-left"},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.servoHead),expression:"servoHead"}],attrs:{"type":"number","maxlength":"4","min":"10","max":"40","step":"1"},domProps:{"value":(_vm.servoHead)},on:{"input":function($event){if($event.target.composing){ return; }_vm.servoHead=$event.target.value}}}),_vm._v(" "),_c('i',{staticClass:"fa fa-long-arrow-up icon-left input-icon"}),_vm._v(" "),_c('i',{staticClass:"bar"})])])])],1),_vm._v(" "),_c('div',{staticClass:"col-sm-3 text-center"},[_c('div',{staticClass:"motor-cmd-area"},[_c('button',{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:(_vm.$t('gogoboard.servo.set_head')),expression:"$t('gogoboard.servo.set_head')",modifiers:{"bottom":true}}],staticClass:"btn btn-info btn-with-icon rounded-icon",on:{"click":function($event){_vm.setServoHead()}}},[_vm._m(0)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-motor-control"},[_c('i',{staticClass:"fa fa-inverse fa-2x fa-long-arrow-up shift-right"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KqvR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".motor-area[data-v-192d5c96]{margin-left:2px;text-align:center;margin-right:2px}.gogo-monitor-motor[data-v-192d5c96]{z-index:auto}.motor-port-name[data-v-192d5c96]{font-family:arial;font-size:20px}.lab-select[data-v-192d5c96]{color:#ffec98}.lab-active[data-v-192d5c96]{color:#98ff98}.lab-inactive[data-v-192d5c96]{color:#c7c9ca}.lab-ban-active[data-v-192d5c96]{color:#f10000}.lab-ban-inactive[data-v-192d5c96]{color:#6f8898}.lab-icon-1[data-v-192d5c96]{color:#000}.icon-lab-1[data-v-192d5c96]{background-image:url(\"/static/gogo-img/demo-carControl-black.png\");background-size:cover}.icon-lab-2[data-v-192d5c96]{background-image:url(\"/static/gogo-img/demo-lightControl-black.png\");background-size:cover}.icon-lab-3[data-v-192d5c96]{background-image:url(\"/static/gogo-img/demo-balancing-black.png\");background-size:cover}.motor-inactive[data-v-192d5c96]{color:#6f8898}.motor-on[data-v-192d5c96]{color:#e8e517}.motor-on .motor-port-name[data-v-192d5c96]{color:#a58b00}.motor-off[data-v-192d5c96]{color:#89a9bb}.motor-off .motor-port-name[data-v-192d5c96]{color:#fff}.motor-cw[data-v-192d5c96]{color:#8fd200}.motor-ccw[data-v-192d5c96]{color:#ef5350}.motor-control[data-v-192d5c96]{text-align:center;margin:0}.motor-control>.md-button[data-v-192d5c96]{margin-left:2px;margin-right:2px}.normal-font[data-v-192d5c96]{font-size:12pt}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/dashboard-elements/LabDisplayPanel.vue"],"names":[],"mappings":"AACA,6BACE,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,qCACE,YAAc,CACf,AACD,kCACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,6BACE,aAAe,CAChB,AACD,6BACE,aAAe,CAChB,AACD,+BACE,aAAe,CAChB,AACD,iCACE,aAAe,CAChB,AACD,mCACE,aAAe,CAChB,AACD,6BACE,UAAe,CAChB,AACD,6BACE,mEAAoE,AACpE,qBAAuB,CACxB,AACD,6BACE,qEAAsE,AACtE,qBAAuB,CACxB,AACD,6BACE,kEAAmE,AACnE,qBAAuB,CACxB,AACD,iCACE,aAAe,CAChB,AACD,2BACE,aAAe,CAChB,AACD,4CACI,aAAe,CAClB,AACD,4BACE,aAAe,CAChB,AACD,6CACI,UAAY,CACf,AACD,2BACE,aAAe,CAChB,AACD,4BACE,aAAe,CAChB,AACD,gCACE,kBAAmB,AACnB,QAAY,CACb,AACD,2CACE,gBAAiB,AACjB,gBAAkB,CACnB,AAOD,8BACE,cAAgB,CACjB","file":"LabDisplayPanel.vue","sourcesContent":["\n.motor-area[data-v-192d5c96] {\n  margin-left: 2px;\n  text-align: center;\n  margin-right: 2px;\n}\n.gogo-monitor-motor[data-v-192d5c96] {\n  z-index: auto;\n}\n.motor-port-name[data-v-192d5c96] {\n  font-family: arial;\n  font-size: 20px;\n}\n.lab-select[data-v-192d5c96] {\n  color: #ffec98;\n}\n.lab-active[data-v-192d5c96] {\n  color: #98FF98;\n}\n.lab-inactive[data-v-192d5c96] {\n  color: #c7c9ca;\n}\n.lab-ban-active[data-v-192d5c96] {\n  color: #f10000;\n}\n.lab-ban-inactive[data-v-192d5c96] {\n  color: #6f8898;\n}\n.lab-icon-1[data-v-192d5c96] {\n  color: #000000;\n}\n.icon-lab-1[data-v-192d5c96] {\n  background-image: url(\"/static/gogo-img/demo-carControl-black.png\");\n  background-size: cover;\n}\n.icon-lab-2[data-v-192d5c96] {\n  background-image: url(\"/static/gogo-img/demo-lightControl-black.png\");\n  background-size: cover;\n}\n.icon-lab-3[data-v-192d5c96] {\n  background-image: url(\"/static/gogo-img/demo-balancing-black.png\");\n  background-size: cover;\n}\n.motor-inactive[data-v-192d5c96] {\n  color: #6f8898;\n}\n.motor-on[data-v-192d5c96] {\n  color: #e8e517;\n}\n.motor-on .motor-port-name[data-v-192d5c96] {\n    color: #a58b00;\n}\n.motor-off[data-v-192d5c96] {\n  color: #89a9bb;\n}\n.motor-off .motor-port-name[data-v-192d5c96] {\n    color: #fff;\n}\n.motor-cw[data-v-192d5c96] {\n  color: #8fd200;\n}\n.motor-ccw[data-v-192d5c96] {\n  color: #ef5350;\n}\n.motor-control[data-v-192d5c96] {\n  text-align: center;\n  margin: 0px;\n}\n.motor-control > .md-button[data-v-192d5c96] {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n\n/*\r\n.motor-control > span {\r\n  font-size: 12px;\r\n}\r\n*/\n.normal-font[data-v-192d5c96] {\n  font-size: 12pt;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "KxAR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorPanel_vue__ = __webpack_require__("ONnE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e224774_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorPanel_vue__ = __webpack_require__("+dNs");
function injectStyle (ssrContext) {
  __webpack_require__("qQ9l")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e224774"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MotorPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e224774_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MotorPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "L/5s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PingPanel_vue__ = __webpack_require__("mDDX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5532b9dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PingPanel_vue__ = __webpack_require__("3864");
function injectStyle (ssrContext) {
  __webpack_require__("qRXi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5532b9dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PingPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5532b9dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PingPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LOE1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2bON");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("20f6183a", content, true);

/***/ }),

/***/ "NV3S":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5GHQ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("12ae50d5", content, true);

/***/ }),

/***/ "NoAk":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oZOb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("736db774", content, true);

/***/ }),

/***/ "ONnE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__ = __webpack_require__("lEct");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__motor_elements_MotorDisplayPanel_vue__ = __webpack_require__("IqIK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__motor_elements_MotorControlPanel_vue__ = __webpack_require__("3aOZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__motor_elements_ServoControlPanel_vue__ = __webpack_require__("sLjW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_nav_tabs_themes_paper_css__ = __webpack_require__("CQ+f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_nav_tabs_themes_paper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_nav_tabs_themes_paper_css__);











/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'motor-panel',

  components: {
    MotorDisplayPanel: __WEBPACK_IMPORTED_MODULE_2__motor_elements_MotorDisplayPanel_vue__["default"],
    MotorControlPanel: __WEBPACK_IMPORTED_MODULE_3__motor_elements_MotorControlPanel_vue__["default"],
    ServoControlPanel: __WEBPACK_IMPORTED_MODULE_4__motor_elements_ServoControlPanel_vue__["default"],
    VueTabs: __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__["VueTabs"],
    VTab: __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__["VTab"]
  },
  data: function data() {
    return {};
  },

  methods: {},
  computed: {}
});

/***/ }),

/***/ "OfVT":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2GkO");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b22405a2", content, true);

/***/ }),

/***/ "P36O":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".vue-tabs .tabs__link{text-decoration:none;color:gray}.vue-tabs .nav{margin-bottom:0;margin-top:0;padding-left:0;list-style:none}.vue-tabs .nav:after,.vue-tabs .nav:before{content:\" \";display:table}.vue-tabs .nav:after{clear:both}.vue-tabs .nav>li,.vue-tabs .nav>li>a{position:relative;display:block}.vue-tabs .nav>li>a{padding:10px 15px}.vue-tabs .nav>li>a:focus,.vue-tabs .nav>li>a:hover{text-decoration:none;background-color:#eee}.vue-tabs .nav>li span.title{display:flex;justify-content:center}.vue-tabs .nav>li.disabled>a{color:#777}.vue-tabs .nav>li.disabled>a:focus,.vue-tabs .nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent;border-color:transparent}.vue-tabs .nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.vue-tabs .nav>li>a>img{max-width:none}.vue-tabs .nav-tabs{border-bottom:1px solid #ddd}.vue-tabs .nav-tabs>li{float:left;margin-bottom:-1px}.vue-tabs .nav-tabs>li>a{margin-right:2px;line-height:1.42857;border:1px solid transparent;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.vue-tabs .nav-tabs>li.active>a,.vue-tabs .nav-tabs>li.active>a:focus,.vue-tabs .nav-tabs>li.active>a:hover{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.vue-tabs .nav-pills>li{float:left}.vue-tabs .nav-pills>li>a{border-radius:4px}.vue-tabs .nav-pills>li+li{margin-left:2px}.vue-tabs .nav-pills>li.active>a,.vue-tabs .nav-pills>li.active>a:focus,.vue-tabs .nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.vue-tabs .nav-stacked>li{float:none}.vue-tabs .nav-stacked>li+li{margin-top:2px;margin-left:0}.vue-tabs .nav-justified,.vue-tabs .nav-tabs.nav-justified{width:100%}.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{float:none}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.vue-tabs .nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.vue-tabs .nav-justified>li,.vue-tabs .nav-tabs.nav-justified>li{display:table-cell;width:1%}.vue-tabs .nav-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-bottom:0}}.vue-tabs .nav-tabs-justified,.vue-tabs .nav-tabs.nav-justified{border-bottom:0}.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.vue-tabs .nav-tabs-justified>li>a,.vue-tabs .nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.vue-tabs .nav-tabs-justified>.active>a,.vue-tabs .nav-tabs-justified>.active>a:focus,.vue-tabs .nav-tabs-justified>.active>a:hover,.vue-tabs .nav-tabs.nav-justified>.active>a,.vue-tabs .nav-tabs.nav-justified>.active>a:focus,.vue-tabs .nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.vue-tabs .tab-content>.tab-pane{display:none}.vue-tabs .tab-content>.active{display:block}.vue-tabs section[aria-hidden=true]{display:none}.vue-tabs.stacked{display:flex;flex-direction:row}.vue-tabs .nav-tabs-navigation{text-align:center;border-bottom:1px solid #f1eae0;margin-bottom:30px}.vue-tabs .nav-tabs-navigation .nav>li>a{padding-bottom:20px}.vue-tabs .nav-tabs-wrapper{display:inline-block;margin-bottom:-6px;position:relative;width:100%}.vue-tabs .nav-tabs{border-bottom:0 none;font-size:14px;font-weight:600}.vue-tabs .nav-tabs>li>a{border:0 none!important;color:#a49e93}.vue-tabs .nav-tabs>li>a:hover{color:#66615b;background-color:transparent}.vue-tabs .nav-tabs>li.active{color:#66615b;position:relative}.vue-tabs .nav-tabs>li.active>a,.vue-tabs .nav-tabs>li.active>a:focus,.vue-tabs .nav-tabs>li.active>a:hover{background-color:transparent;border:0 none}.vue-tabs .nav-tabs>li.active a:after{border-bottom:11px solid #fff;bottom:0}.vue-tabs .nav-tabs>li.active a:after,.vue-tabs .nav-tabs>li.active a:before{border-left:11px solid transparent;border-right:11px solid transparent;content:\"\";display:inline-block;position:absolute;right:calc(50% - 11px)}.vue-tabs .nav-tabs>li.active a:before{border-bottom:11px solid #f1eae0;bottom:1px}.vue-tabs .nav-stacked{border-right:1px solid #f1eae0;font-size:14px;font-weight:600;padding:20px 0}.vue-tabs .nav-stacked>li>a{color:#a49e93;padding:7px 25px;text-align:right}.vue-tabs .nav-stacked>li.active>a,.vue-tabs .nav-stacked>li>a:hover{color:#66615b}.vue-tabs .nav-stacked>li.active a:after{border-right:11px solid #fff;right:-1px}.vue-tabs .nav-stacked>li.active a:after,.vue-tabs .nav-stacked>li.active a:before{border-top:11px solid transparent;border-bottom:11px solid transparent;content:\"\";display:inline-block;position:absolute;bottom:7px}.vue-tabs .nav-stacked>li.active a:before{border-right:11px solid #f1eae0;right:0}.vue-tabs .left-vertical-tabs{width:170px;min-width:170px}.vue-tabs .right-text-tabs{width:calc(100% - 170px);float:left;padding:6px 15px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/node_modules/vue-nav-tabs/themes/paper.css"],"names":[],"mappings":"AAGA,sBACE,qBAAsB,AACtB,UAAY,CAAE,AAEhB,eACE,gBAAiB,AACjB,aAAc,AACd,eAAgB,AAChB,eAAiB,CAAE,AACnB,2CACE,YAAa,AACb,aAAe,CAAE,AACnB,qBACE,UAAY,CAAE,AAId,sCAFA,kBAAmB,AACnB,aAAe,CAIQ,AAHvB,oBAGE,iBAAmB,CAAE,AACrB,oDACE,qBAAsB,AACtB,qBAA0B,CAAE,AAChC,6BACE,aAAc,AACd,sBAAwB,CAAE,AAC5B,6BACE,UAAe,CAAE,AACjB,sEACE,WAAe,AACf,qBAAsB,AACtB,mBAAoB,AACpB,6BAA8B,AAC9B,wBAA0B,CAAE,AAClC,4BACE,WAAY,AACZ,aAAc,AACd,gBAAiB,AACjB,wBAA0B,CAAE,AAC9B,wBACE,cAAgB,CAAE,AAEtB,oBACE,4BAA8B,CAAE,AAChC,uBACE,WAAY,AACZ,kBAAoB,CAAE,AACtB,yBACE,iBAAkB,AAClB,oBAAqB,AACrB,6BAA8B,AAC9B,yBAA2B,CAAE,AAC7B,+BACE,2BAAmC,CAAE,AACzC,4GACE,WAAe,AACf,sBAAuB,AACvB,sBAAuB,AACvB,gCAAiC,AACjC,cAAgB,CAAE,AAExB,wBACE,UAAY,CAAE,AACd,0BACE,iBAAmB,CAAE,AACvB,2BACE,eAAiB,CAAE,AACrB,+GACE,WAAY,AACZ,wBAA0B,CAAE,AAEhC,0BACE,UAAY,CAAE,AACd,6BACE,eAAgB,AAChB,aAAe,CAAE,AAErB,2DACE,UAAY,CAAE,AACd,iEACE,UAAY,CAAE,AACd,qEACE,kBAAmB,AACnB,iBAAmB,CAAE,AACzB,kDACE,SAAU,AACV,SAAW,CAAE,AACf,yBACE,iEACE,mBAAoB,AACpB,QAAU,CAAE,AACZ,qEACE,eAAiB,CAAE,CAAE,AAE7B,gEACE,eAAiB,CAAE,AACnB,0EACE,eAAgB,AAChB,iBAAmB,CAAE,AACvB,oRAGE,qBAAuB,CAAE,AAC3B,yBACE,0EACE,6BAA8B,AAC9B,yBAA2B,CAAE,AAC/B,oRAGE,wBAA0B,CAAE,CAAE,AAEpC,iCACE,YAAc,CAAE,AAElB,+BACE,aAAe,CAAE,AAEnB,oCACE,YAAc,CAAE,AAElB,kBACE,aAAc,AACd,kBAAoB,CAAE,AAExB,+BACE,kBAAmB,AACnB,gCAAiC,AACjC,kBAAoB,CAAE,AACtB,yCACE,mBAAqB,CAAE,AAE3B,4BACE,qBAAsB,AACtB,mBAAoB,AACpB,kBAAmB,AACnB,UAAY,CAAE,AAEhB,oBACE,qBAAsB,AACtB,eAAgB,AAChB,eAAiB,CAAE,AACnB,yBACE,wBAA0B,AAC1B,aAAe,CAAE,AACnB,+BACE,cAAe,AACf,4BAA8B,CAAE,AAClC,8BACE,cAAe,AACf,iBAAmB,CAAE,AACrB,4GAGE,6BAA8B,AAC9B,aAAe,CAAE,AACnB,sCACE,8BAAkC,AAOlC,QAAU,CAAE,AACd,6EAPE,mCAAoC,AACpC,oCAAqC,AACrC,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,sBAAwB,CAUV,AARhB,uCACE,iCAAkC,AAOlC,UAAY,CAAE,AAEpB,uBACE,+BAAgC,AAChC,eAAgB,AAChB,gBAAiB,AACjB,cAAgB,CAAE,AAClB,4BACE,cAAe,AACf,iBAAkB,AAClB,gBAAkB,CAAE,AAGtB,qEACE,aAAe,CAAE,AACnB,yCACE,6BAAiC,AAMjC,UAAY,CACE,AAChB,mFAPE,kCAAmC,AACnC,qCAAsC,AACtC,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AAEnB,UAAY,CASE,AARhB,0CACE,gCAAiC,AAMjC,OAAS,CACK,AAElB,8BACE,YAAa,AACb,eAAiB,CAAE,AAErB,2BACE,yBAA0B,AAC1B,WAAY,AACZ,gBAAkB,CAAE","file":"paper.css","sourcesContent":[".vue-tabs.stacked {\n  display: flex; }\n\n.vue-tabs .tabs__link {\n  text-decoration: none;\n  color: gray; }\n\n.vue-tabs .nav {\n  margin-bottom: 0;\n  margin-top: 0;\n  padding-left: 0;\n  list-style: none; }\n  .vue-tabs .nav:before, .vue-tabs .nav:after {\n    content: \" \";\n    display: table; }\n  .vue-tabs .nav:after {\n    clear: both; }\n  .vue-tabs .nav > li {\n    position: relative;\n    display: block; }\n    .vue-tabs .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .vue-tabs .nav > li > a:hover, .vue-tabs .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .vue-tabs .nav > li span.title {\n      display: flex;\n      justify-content: center; }\n    .vue-tabs .nav > li.disabled > a {\n      color: #777777; }\n      .vue-tabs .nav > li.disabled > a:hover, .vue-tabs .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        cursor: not-allowed;\n        background-color: transparent;\n        border-color: transparent; }\n  .vue-tabs .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .vue-tabs .nav > li > a > img {\n    max-width: none; }\n\n.vue-tabs .nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .vue-tabs .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .vue-tabs .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .vue-tabs .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .vue-tabs .nav-tabs > li.active > a, .vue-tabs .nav-tabs > li.active > a:hover, .vue-tabs .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.vue-tabs .nav-pills > li {\n  float: left; }\n  .vue-tabs .nav-pills > li > a {\n    border-radius: 4px; }\n  .vue-tabs .nav-pills > li + li {\n    margin-left: 2px; }\n  .vue-tabs .nav-pills > li.active > a, .vue-tabs .nav-pills > li.active > a:hover, .vue-tabs .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.vue-tabs .nav-stacked > li {\n  float: none; }\n  .vue-tabs .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.vue-tabs .nav-justified, .vue-tabs .nav-tabs.nav-justified {\n  width: 100%; }\n  .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n    float: none; }\n    .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .vue-tabs .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-justified > li, .vue-tabs .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .vue-tabs .nav-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.vue-tabs .nav-tabs-justified, .vue-tabs .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n  .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n  .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .vue-tabs .nav-tabs-justified > li > a, .vue-tabs .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .vue-tabs .nav-tabs-justified > .active > a, .vue-tabs .nav-tabs.nav-justified > .active > a,\n    .vue-tabs .nav-tabs-justified > .active > a:hover, .vue-tabs .nav-tabs.nav-justified > .active > a:hover,\n    .vue-tabs .nav-tabs-justified > .active > a:focus, .vue-tabs .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.vue-tabs .tab-content > .tab-pane {\n  display: none; }\n\n.vue-tabs .tab-content > .active {\n  display: block; }\n\n.vue-tabs section[aria-hidden=\"true\"] {\n  display: none; }\n\n.vue-tabs.stacked {\n  display: flex;\n  flex-direction: row; }\n\n.vue-tabs .nav-tabs-navigation {\n  text-align: center;\n  border-bottom: 1px solid #F1EAE0;\n  margin-bottom: 30px; }\n  .vue-tabs .nav-tabs-navigation .nav > li > a {\n    padding-bottom: 20px; }\n\n.vue-tabs .nav-tabs-wrapper {\n  display: inline-block;\n  margin-bottom: -6px;\n  position: relative;\n  width: 100%; }\n\n.vue-tabs .nav-tabs {\n  border-bottom: 0 none;\n  font-size: 14px;\n  font-weight: 600; }\n  .vue-tabs .nav-tabs > li > a {\n    border: 0 none !important;\n    color: #A49E93; }\n  .vue-tabs .nav-tabs > li > a:hover {\n    color: #66615b;\n    background-color: transparent; }\n  .vue-tabs .nav-tabs > li.active {\n    color: #66615b;\n    position: relative; }\n    .vue-tabs .nav-tabs > li.active > a,\n    .vue-tabs .nav-tabs > li.active > a:hover,\n    .vue-tabs .nav-tabs > li.active > a:focus {\n      background-color: transparent;\n      border: 0 none; }\n    .vue-tabs .nav-tabs > li.active a:after {\n      border-bottom: 11px solid #FFFFFF;\n      border-left: 11px solid transparent;\n      border-right: 11px solid transparent;\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      right: calc(50% - 11px);\n      bottom: 0; }\n    .vue-tabs .nav-tabs > li.active a:before {\n      border-bottom: 11px solid #F1EAE0;\n      border-left: 11px solid transparent;\n      border-right: 11px solid transparent;\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      right: calc(50% - 11px);\n      bottom: 1px; }\n\n.vue-tabs .nav-stacked {\n  border-right: 1px solid #F1EAE0;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 20px 0; }\n  .vue-tabs .nav-stacked > li > a {\n    color: #A49E93;\n    padding: 7px 25px;\n    text-align: right; }\n  .vue-tabs .nav-stacked > li > a:hover {\n    color: #66615b; }\n  .vue-tabs .nav-stacked > li.active > a {\n    color: #66615b; }\n  .vue-tabs .nav-stacked > li.active a:after {\n    border-right: 11px solid #FFFFFF;\n    border-top: 11px solid transparent;\n    border-bottom: 11px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: -1px;\n    bottom: 7px; }\n  .vue-tabs .nav-stacked > li.active a:before {\n    border-right: 11px solid #F1EAE0;\n    border-top: 11px solid transparent;\n    border-bottom: 11px solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    bottom: 7px; }\n\n.vue-tabs .left-vertical-tabs {\n  width: 170px;\n  min-width: 170px; }\n\n.vue-tabs .right-text-tabs {\n  width: calc(100% - 170px);\n  float: left;\n  padding: 6px 15px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Poxp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("BH3+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3a0e3a57", content, true);

/***/ }),

/***/ "QVtJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard-panel"},[_c('lab-display-panel',{on:{"childToParent":_vm.onChildClick}}),_vm._v(" "),_c('vue-tabs',[_c('v-tab',{attrs:{"title":_vm.$t('gogoboard.tabs.lab_detail')}},[_c('lab-detail-panel',{attrs:{"parentData":_vm.fromChild},on:{"detailToStatus":_vm.onUserEnter,"detailToStatuss":_vm.onCallDetail}})],1),_vm._v(" "),_c('v-tab',{attrs:{"title":_vm.$t('gogoboard.tabs.lab_status')}},[_c('lab-status-panel',{attrs:{"parentData":_vm.fromChild,"parentData2":_vm.fromDetail}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "SpD2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__ = __webpack_require__("lEct");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_elements_LabDisplayPanel_vue__ = __webpack_require__("5Sos");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_elements_LabDetailPanel_vue__ = __webpack_require__("dpXX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_elements_LabStatusPanel_vue__ = __webpack_require__("YyAU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__motor_elements_ServoControlPanel_vue__ = __webpack_require__("sLjW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_elements_HeaderDetail__ = __webpack_require__("l1Sf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_nav_tabs_themes_paper_css__ = __webpack_require__("CQ+f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_nav_tabs_themes_paper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_nav_tabs_themes_paper_css__);













/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'dashboard-panel',

  components: {
    LabDisplayPanel: __WEBPACK_IMPORTED_MODULE_2__dashboard_elements_LabDisplayPanel_vue__["default"],
    LabDetailPanel: __WEBPACK_IMPORTED_MODULE_3__dashboard_elements_LabDetailPanel_vue__["default"],
    LabStatusPanel: __WEBPACK_IMPORTED_MODULE_4__dashboard_elements_LabStatusPanel_vue__["default"],
    HeaderDetail: __WEBPACK_IMPORTED_MODULE_6__dashboard_elements_HeaderDetail__["default"],
    ServoControlPanel: __WEBPACK_IMPORTED_MODULE_5__motor_elements_ServoControlPanel_vue__["default"],
    VueTabs: __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__["VueTabs"],
    VTab: __WEBPACK_IMPORTED_MODULE_1_vue_nav_tabs__["VTab"]
  },
  data: function data() {
    return {
      A: 10,
      counter: 0,
      fromChild: '1',
      fromDetail: '',
      toSeeDetail: ''
    };
  },

  methods: {
    onChildClick: function onChildClick(value) {
      this.fromChild = value;
      console.log("Hichd" + value);
    },
    onUserEnter: function onUserEnter(value) {
      this.fromDetail = value;
      console.log(value);
    },
    onCallDetail: function onCallDetail(value) {
      this.toSeeDetail = value;
      console.log(value);
    }
  },
  computed: {}
});

/***/ }),

/***/ "V4G2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-panel"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-center"},[_c('div',{staticClass:"btn btn-micro btn-primary col-sm-12",class:{ 'focus': _vm.isActive == 1},on:{"click":[function($event){_vm.switchLab(1)},function($event){_vm.isActive = 1}]}},[_vm._v("\r\n          "+_vm._s(_vm._f("translate")('gogoboard.lab_panel.lab1'))+"\r\n        ")]),_vm._v(" "),_c('div',{staticClass:"btn btn-micro btn-primary col-sm-12 top-buffer",class:{ 'focus': _vm.isActive == 2},on:{"click":[function($event){_vm.switchLab(2)},function($event){_vm.isActive = 2}]}},[_vm._v("\r\n          "+_vm._s(_vm._f("translate")('gogoboard.lab_panel.lab2'))+"\r\n        ")]),_vm._v(" "),_c('div',{staticClass:"btn btn-micro btn-primary col-sm-12 top-buffer",class:{ 'focus': _vm.isActive == 3},on:{"click":[function($event){_vm.switchLab(3)},function($event){_vm.isActive = 3}]}},[_vm._v("\r\n          "+_vm._s(_vm._f("translate")('gogoboard.lab_panel.lab3'))+"\r\n        ")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "VWLs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-detail-panel"},[_c('div',{staticClass:"row justify-content-center"},[_c('span',[_c('h3',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.' + 'lab' + _vm.parentData)))])]),_c('br'),_c('br'),_vm._v(" "),_c('div',{attrs:{"form":_vm.form}}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('fieldset',[_c('div',{staticClass:"form-group form-group-w-btn"},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userName),expression:"userName"}],attrs:{"id":"input-w-btn","required":""},domProps:{"value":(_vm.userName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userName=$event.target.value}}}),_vm._v(" "),_c('label',{staticClass:"control-label",attrs:{"for":"input-w-btn"}},[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.name')))]),_c('i',{staticClass:"bar"})]),_vm._v(" "),_c('div',{staticClass:"btn btn-micro btn-primary",on:{"click":function($event){_vm.enterUsername()}}},[_vm._v("\n                  "+_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.enter'))+"\n                  ")])])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-center"},[_vm._v("\n              "+_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.see_detail'))+" :\n              "),_c('div',{staticClass:"btn btn-micro btn-warning",on:{"click":[function($event){_vm.etr()},function($event){_vm.callDetail()}]}},[_vm._v("\n                  "+_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.detail'))+"\n              ")])])])]),_vm._v(" "),_c('header-detail',{attrs:{"isOpen":_vm.openDetail,"isLab":_vm.lab}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "W3Iv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("wEtr"), __esModule: true };

/***/ }),

/***/ "WoBI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".top-buffer[data-v-5061a89c]{margin-top:8px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/LabPanel.vue"],"names":[],"mappings":"AACA,6BACE,cAAgB,CACjB","file":"LabPanel.vue","sourcesContent":["\n.top-buffer[data-v-5061a89c] {\n  margin-top: 8px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Xc89":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("AJ00");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("71e27cd2", content, true);

/***/ }),

/***/ "Xd32":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("5PlU");


/***/ }),

/***/ "Xvcw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"program-left-slide"},[_c('vuestic-widget',{staticClass:"chat-widget dashboard-widget",attrs:{"icon":'a fa-check-circle-o',"headerBgColor":'#4287f5',"headerTextColor":'#fff0dc',"headerText":_vm.$t('gogoboard.headers.dashboards')}},[_c('dashboard-panel',{attrs:{"irValue":_vm.gogo.irValue}})],1),_vm._v(" "),_c('vuestic-widget',{staticClass:"chat-widget lab-widget",attrs:{"icon":'fa fa-youtube-play',"headerBgColor":'#4287f5',"headerTextColor":'#fff0dc',"headerText":_vm.$t('gogoboard.headers.videos')}},[_c('lab-panel',{attrs:{"irValue":_vm.gogo.irValue}})],1),_vm._v(" "),_c('vuestic-widget',{staticClass:"chat-widget",attrs:{"icon":'fa-question',"headerBgColor":'#607d8d',"headerTextColor":'#fbfff3',"headerText":_vm.$t('gogoboard.headers.ping')}},[_c('ping-panel',{attrs:{"irValue":_vm.gogo.irValue}})],1),_vm._v(" "),_c('vuestic-widget',{staticClass:"chat-widget sensor-widget",attrs:{"icon":'fa-thermometer-three-quarters',"headerBgColor":'#db3f8d',"headerTextColor":'#f3dde8',"headerText":_vm.$t('gogoboard.headers.sensors')}},[_c('sensor-panel',{attrs:{"miniMode":true}})],1),_vm._v(" "),_c('vuestic-widget',{staticClass:"chat-widget motor-widget",attrs:{"icon":'fa-toggle-on',"headerBgColor":'#f3a73c',"headerTextColor":'#fff0dc',"headerText":_vm.$t('gogoboard.headers.motors')}},[_c('motor-panel',{attrs:{"motors":_vm.gogo.motors}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YX7/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"display-panel text-center"},[_c('div',{staticClass:"gogo-image-display"},[(_vm.info.boardType==1)?_c('img',{staticClass:"board board-link",attrs:{"src":"static/gogo-img/gogoboard46.png"},on:{"click":function($event){_vm.showGogo46Popup()}}}):(_vm.info.boardType==2)?_c('img',{staticClass:"board board-link",attrs:{"src":"static/gogo-img/pitopping32.png"},on:{"click":function($event){_vm.showGogoPitopPopup()}}}):_c('img',{staticClass:"board",attrs:{"src":"static/gogo-img/noboard_found.png"}})]),_vm._v(" "),(_vm.info.firmwareVersion>0)?_c('p',{staticClass:"btn-label"},[_vm._v("\n    "+_vm._s(_vm._f("translate")('gogoboard.firmware_version_is'))+" "+_vm._s(_vm.info.firmwareVersion)+"\n  ")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YyAU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabStatusPanel_vue__ = __webpack_require__("I1UB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f41a1af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabStatusPanel_vue__ = __webpack_require__("cwa3");
function injectStyle (ssrContext) {
  __webpack_require__("NoAk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f41a1af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabStatusPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f41a1af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabStatusPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "aDRZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component__ = __webpack_require__("GDE4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar__ = __webpack_require__("1yc6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slide_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__("162o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LabDisplayPanel_vue__ = __webpack_require__("5Sos");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderDetail__ = __webpack_require__("l1Sf");









/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'lab-detail-panel',
  props: ['parentData'],
  components: {
    vueSlider: __WEBPACK_IMPORTED_MODULE_1_vue_slider_component___default.a,
    VueSlideBar: __WEBPACK_IMPORTED_MODULE_2_vue_slide_bar___default.a,
    LabDisplayPanel: __WEBPACK_IMPORTED_MODULE_4__LabDisplayPanel_vue__["default"],
    HeaderDetail: __WEBPACK_IMPORTED_MODULE_5__HeaderDetail__["default"]
  },
  data: function data() {
    return {
      message: 'You loaded this page on ',
      lab: 1,
      userName: '',
      form: {
        name: ''
      },
      openDetail: false
    };
  },

  methods: {
    etr: function etr() {
      this.openDetail = !this.openDetail;
    },
    enterUsername: function enterUsername(event) {
      this.$emit('detailToStatus', this.userName);
    },
    callDetail: function callDetail(event) {
      this.lab = this.parentData;
      this.$emit('detailToStatuss', this.parentData);
      console.log(this.parentData);
    }
  },
  mounted: function mounted() {},
  updated: function updated() {},

  computed: {
    labselected: function labselected() {
      return 99;
    }
  }
});

/***/ }),

/***/ "aU46":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("KqvR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("810e4624", content, true);

/***/ }),

/***/ "cgwN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "#run-icon[data-v-5532b9dd]{left:18px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/PingPanel.vue"],"names":[],"mappings":"AACA,2BACE,SAAW,CACZ","file":"PingPanel.vue","sourcesContent":["\n#run-icon[data-v-5532b9dd] {\n  left: 18px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "cwa3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lab-status-panel"},[_c('div',{staticClass:"row justify-content-center"},[_c('span',[_c('h2',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labdetail_panel.' + 'lab' + _vm.parentData)))])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6 text-right",staticStyle:{"background-color":"white"}},[_c('h5',[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labstatus_panel.name'))+" :")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-right",staticStyle:{"background-color":"white"}},[_c('p',[_vm._v(_vm._s(_vm._f("translate")('gogoboard.labstatus_panel.internet'))+" :")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-12 text-right",staticStyle:{"background-color":"white"}},[_c('p',[_vm._v(_vm._s('Battery')+" :")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6 text-left",staticStyle:{"background-color":"white"}},[_c('p',[_vm._v(_vm._s(_vm.parentData2 || 'unknown'))]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-left"},[_c('p',[_vm._v(_vm._s('READY'))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-12 text-left"},[_c('p',[_vm._v(_vm._s('READY'))])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "d7EF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("us/S");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "dQjH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sii2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("74882ec1", content, true);

/***/ }),

/***/ "dpXX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabDetailPanel_vue__ = __webpack_require__("aDRZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18375430_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabDetailPanel_vue__ = __webpack_require__("VWLs");
function injectStyle (ssrContext) {
  __webpack_require__("JiId")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18375430"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabDetailPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18375430_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabDetailPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "e6BR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vNDy");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("33409f59", content, true);

/***/ }),

/***/ "f+kX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"ServoControlPanel.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "gSvA":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("kM2E");
var $entries = __webpack_require__("mbce")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "giri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'motor-display-panel',

  components: {},
  data: function data() {
    return {};
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    toggleMotor: function toggleMotor(motorIndex) {
      this.doGogoCmdObj({
        cmd: 'toggleMotor',
        params: motorIndex
      });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['doGogoCmdObj'])),
  mounted: function mounted() {},
  updated: function updated() {},

  computed: {
    motors: function motors() {
      return this.$store.getters.gogo.motors;
    }
  }
});

/***/ }),

/***/ "gmLl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_notification__ = __webpack_require__("JYMF");





var releaseUrl = 'https://api.github.com/repos/gogoremote/remotelab-plugin/releases/latest';
var macUrl = 'https://github.com/LILCMU/gogo-plugin/releases/download/v0.9.4/gogo-plugin-0.9.4.dmg';
var winUrl = 'https://github.com/gogoremote/remotelab-plugin/releases/download/1.0.0/GoGo.Plugin-Remote.Lab.msi';

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'header-detail',
  props: {
    isOpen: {
      type: Boolean,
      required: false
    },
    isLab: {
      required: false
    }
  },
  data: function data() {
    return {
      show: false,
      macUrl: macUrl,
      winUrl: winUrl
    };
  },

  watch: {
    isOpen: function isOpen(val) {
      console.log(val + ":" + this.isLab);
      this.showLargeModal();
    }
  },
  mounted: function mounted() {},

  methods: {
    showLargeModal: function showLargeModal() {
      this.$refs.labDetailAlert.open();
    },
    hideLargeModal: function hideLargeModal() {
      if (this.$refs.labDetailAlert) {
        this.$refs.labDetailAlert.clickMask();
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "kJU6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("WoBI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("24162a1b", content, true);

/***/ }),

/***/ "krsD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'display-panel',
  props: ['info'],
  data: function data() {
    return {
      var: 1
    };
  },

  methods: {
    showGogoPitopPopup: function showGogoPitopPopup() {
      this.$swal({
        html: '<img class="board-buttom-pad board-large" src="static/gogo-img/gogoboard5.jpg">',
        showConfirmButton: false
      });
    },
    showGogo46Popup: function showGogo46Popup() {
      this.$swal({
        html: '<img class="board-buttom-pad board-large" src="static/gogo-img/gogoboard46.png">',
        showConfirmButton: false
      });
    }
  }
});

/***/ }),

/***/ "l1Sf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderDetail_vue__ = __webpack_require__("gmLl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02cd8d88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderDetail_vue__ = __webpack_require__("FgVb");
function injectStyle (ssrContext) {
  __webpack_require__("LOE1")
  __webpack_require__("dQjH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02cd8d88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02cd8d88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "lEct":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-nav-tabs v0.5.7
 * (c) 2018-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _mergeJSXProps = _interopDefault(__webpack_require__("nvbp"));

var VueTabs = {
    name: 'vue-tabs',
    props: {
        activeTabColor: String,
        activeTextColor: String,
        disabledColor: String,
        disabledTextColor: String,
        /**
         * Tab title position: center | bottom | top
         */
        textPosition: {
            type: String,
            default: 'center'
        },
        /**
         * Tab type: tabs | pills
         */
        type: {
            type: String,
            default: 'tabs'
        },
        direction: {
            type: String,
            default: 'horizontal'
        },
        /**
         * Centers the tabs and makes the container div full width
         */
        centered: Boolean,
        value: [String, Number, Object]
    },
    data: function data() {
        return {
            activeTabIndex: 0,
            tabs: []
        };
    },

    computed: {
        isTabShape: function isTabShape() {
            return this.type === 'tabs';
        },
        isStacked: function isStacked() {
            return this.direction === 'vertical';
        },
        classList: function classList() {
            var navType = this.isTabShape ? 'nav-tabs' : 'nav-pills';
            var centerClass = this.centered ? 'nav-justified' : '';
            var isStacked = this.isStacked ? 'nav-stacked' : '';
            return 'nav ' + navType + ' ' + centerClass + ' ' + isStacked;
        },
        stackedClass: function stackedClass() {
            return this.isStacked ? 'stacked' : '';
        },
        activeTabStyle: function activeTabStyle() {
            return {
                backgroundColor: this.activeTabColor,
                color: this.activeTextColor
            };
        }
    },
    methods: {
        navigateToTab: function navigateToTab(index, route) {
            this.changeTab(this.activeTabIndex, index, route);
        },
        activateTab: function activateTab(index) {
            this.activeTabIndex = index;
            var tab = this.tabs[index];
            tab.active = true;
            this.$emit('input', tab.title);
        },
        changeTab: function changeTab(oldIndex, newIndex, route) {
            var oldTab = this.tabs[oldIndex] || {};
            var newTab = this.tabs[newIndex];
            if (newTab.disabled) return;
            this.activeTabIndex = newIndex;
            oldTab.active = false;
            newTab.active = true;
            this.$emit('input', this.tabs[newIndex].title);
            this.$emit('tab-change', newIndex, newTab, oldTab);
            this.tryChangeRoute(route);
        },
        tryChangeRoute: function tryChangeRoute(route) {
            if (this.$router && route) {
                this.$router.push(route);
            }
        },
        addTab: function addTab(item) {
            var index = this.$slots.default.indexOf(item.$vnode);
            this.tabs.splice(index, 0, item);
        },
        removeTab: function removeTab(item) {
            var tabs = this.tabs;
            var index = tabs.indexOf(item);
            if (index > -1) {
                tabs.splice(index, 1);
            }
        },
        getTabs: function getTabs() {
            if (this.$slots.default) {
                return this.$slots.default.filter(function (comp) {
                    return comp.componentOptions;
                });
            }
            return [];
        },
        findTabAndActivate: function findTabAndActivate(tabNameOrIndex) {
            var indexToActivate = this.tabs.findIndex(function (tab, index) {
                return tab.title === tabNameOrIndex || index === tabNameOrIndex;
            });
            if (indexToActivate === this.activeTabIndex) return;
            if (indexToActivate !== -1) {
                this.changeTab(this.activeTabIndex, indexToActivate);
            } else {
                this.changeTab(this.activeTabIndex, 0);
            }
        },
        renderTabTitle: function renderTabTitle(index) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
            var h = this.$createElement;

            if (this.tabs.length === 0) return;
            var tab = this.tabs[index];
            var active = tab.active,
                title = tab.title;

            var titleStyles = { color: this.activeTabColor };
            if (position === 'center') titleStyles.color = this.activeTextColor;
            var simpleTitle = h(
                'span',
                { 'class': 'title title_' + position, style: active ? titleStyles : {} },
                [position === 'center' && this.renderIcon(index), title]
            );

            if (tab.$slots.title) return tab.$slots.title;
            if (tab.$scopedSlots.title) return tab.$scopedSlots.title({
                active: active,
                title: title,
                position: position,
                icon: tab.icon,
                data: tab.tabData
            });
            return simpleTitle;
        },
        renderIcon: function renderIcon(index) {
            var h = this.$createElement;

            if (this.tabs.length === 0) return;
            var tab = this.tabs[index];
            var icon = tab.icon;

            var simpleIcon = h(
                'i',
                { 'class': icon },
                ['\xA0']
            );
            if (!tab.$slots.title && icon) return simpleIcon;
        },
        tabStyles: function tabStyles(tab) {
            if (tab.disabled) {
                return {
                    backgroundColor: this.disabledColor,
                    color: this.disabledTextColor
                };
            }
            return {};
        },
        renderTabs: function renderTabs() {
            var _this = this;

            var h = this.$createElement;

            return this.tabs.map(function (tab, index) {
                if (!tab) return;
                var route = tab.route,
                    id = tab.id,
                    title = tab.title,
                    icon = tab.icon,
                    tabId = tab.tabId;

                var active = _this.activeTabIndex === index;
                return h(
                    'li',
                    _mergeJSXProps([{
                        attrs: { name: 'tab',
                            id: 't-' + tabId,
                            'aria-selected': active,
                            'aria-controls': 'p-' + tabId,
                            role: 'tab' },

                        'class': ['tab', { active: active }, { disabled: tab.disabled }],
                        key: title }, {
                        on: {
                            'click': function click($event) {
                                for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                    attrs[_key - 1] = arguments[_key];
                                }

                                (function () {
                                    return !tab.disabled && _this.navigateToTab(index, route);
                                }).apply(undefined, [$event].concat(attrs));
                            }
                        }
                    }]),
                    [_this.textPosition === 'top' && _this.renderTabTitle(index, _this.textPosition), h(
                        'a',
                        _mergeJSXProps([{
                            attrs: { href: '#',

                                role: 'tab' },

                            style: active ? _this.activeTabStyle : _this.tabStyles(tab),
                            'class': [{ 'active_tab': active }, 'tabs__link'] }, {
                            on: {
                                'click': function click($event) {
                                    for (var _len2 = arguments.length, attrs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                        attrs[_key2 - 1] = arguments[_key2];
                                    }

                                    (function (e) {
                                        e.preventDefault();
                                        return false;
                                    }).apply(undefined, [$event].concat(attrs));
                                }
                            }
                        }]),
                        [_this.textPosition !== 'center' && !tab.$slots.title && _this.renderIcon(index), _this.textPosition === 'center' && _this.renderTabTitle(index, _this.textPosition)]
                    ), _this.textPosition === 'bottom' && _this.renderTabTitle(index, _this.textPosition)]
                );
            });
        }
    },
    render: function render() {
        var h = arguments[0];

        var tabList = this.renderTabs();
        return h(
            'div',
            { 'class': ['vue-tabs', this.stackedClass] },
            [h(
                'div',
                { 'class': [{ 'nav-tabs-navigation': !this.isStacked }, { 'left-vertical-tabs': this.isStacked }] },
                [h(
                    'div',
                    { 'class': ['nav-tabs-wrapper', this.stackedClass] },
                    [h(
                        'ul',
                        { 'class': this.classList, attrs: { role: 'tablist' }
                        },
                        [tabList]
                    )]
                )]
            ), h(
                'div',
                { 'class': ['tab-content', { 'right-text-tabs': this.isStacked }] },
                [this.$slots.default]
            )]
        );
    },

    watch: {
        tabs: function tabs(newList) {
            if (newList.length > 0 && !this.value) {
                if (newList.length <= this.activeTabIndex) {
                    this.activateTab(this.activeTabIndex - 1);
                } else {
                    this.activateTab(this.activeTabIndex);
                }
            }
            if (newList.length > 0 && this.value) {
                this.findTabAndActivate(this.value);
            }
        },
        value: function value(newVal) {
            this.findTabAndActivate(newVal);
        }
    }
};

var VTab = {
    name: 'v-tab',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        tabData: {
            default: null
        },
        /***
         * Function to execute before tab switch. Return value must be boolean
         * If the return result is false, tab switch is restricted
         */
        beforeChange: {
            type: Function
        },
        id: String,
        route: {
            type: [String, Object]
        },
        disabled: Boolean,
        transitionName: String,
        transitionMode: String
    },
    computed: {
        isValidParent: function isValidParent() {
            return this.$parent.$options.name === 'vue-tabs';
        },
        hash: function hash() {
            return '#' + this.id;
        },
        tabId: function tabId() {
            return this.id ? this.id : this.title;
        }
    },
    data: function data() {
        return {
            active: false,
            validationError: null
        };
    },
    mounted: function mounted() {
        this.$parent.addTab(this);
    },
    destroyed: function destroyed() {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$parent.removeTab(this);
    },
    render: function render() {
        var h = arguments[0];

        return h(
            'section',
            { 'class': 'tab-container',
                attrs: { id: 'p-' + this.tabId,
                    'aria-labelledby': 't-' + this.tabId,
                    role: 'tabpanel' },
                directives: [{
                    name: 'show',
                    value: this.active
                }]
            },
            [this.$slots.default]
        );
    }
};

var VueTabsPlugin = {
  install: function install(Vue) {
    Vue.component('vue-tabs', VueTabs);
    Vue.component('v-tab', VTab);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTabsPlugin);
  window.VueTabs = VueTabsPlugin;
}

exports['default'] = VueTabsPlugin;
exports.VueTabs = VueTabs;
exports.VTab = VTab;


/***/ }),

/***/ "mDDX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ping-panel',
  props: ['irValue'],
  data: function data() {
    return {
      var: 1,
      text7segment: ''
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    showText: function showText() {
      this.$ga.event('gogo', 'command', 'showText', null);
      this.doGogoCmd('showShortText' + '::' + this.text7segment + '  ');
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['doGogoCmd']))
});

/***/ }),

/***/ "mdGC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardPanel_vue__ = __webpack_require__("SpD2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eb0d9b5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardPanel_vue__ = __webpack_require__("QVtJ");
function injectStyle (ssrContext) {
  __webpack_require__("NV3S")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eb0d9b5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7eb0d9b5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nvbp":
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "oVRz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/Lho");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("65218978", content, true);

/***/ }),

/***/ "oZOb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LabStatusPanel.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "ojz3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgramLeftSlide_vue__ = __webpack_require__("yPp/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_151d19f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgramLeftSlide_vue__ = __webpack_require__("Xvcw");
function injectStyle (ssrContext) {
  __webpack_require__("OfVT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgramLeftSlide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_151d19f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgramLeftSlide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pyeZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".motor-cmd-area[data-v-19e5193e]{margin-right:5px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/motor-elements/MotorControlPanel.vue"],"names":[],"mappings":"AACA,iCACE,gBAAkB,CACnB","file":"MotorControlPanel.vue","sourcesContent":["\n.motor-cmd-area[data-v-19e5193e] {\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "qQ9l":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("AE1u");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7adfe4f0", content, true);

/***/ }),

/***/ "qRXi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cgwN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("5734c4af", content, true);

/***/ }),

/***/ "qVPG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f+kX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("13aa2528", content, true);

/***/ }),

/***/ "sKAR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("pyeZ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("292a4d18", content, true);

/***/ }),

/***/ "sLjW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ServoControlPanel_vue__ = __webpack_require__("uVw8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04fba605_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ServoControlPanel_vue__ = __webpack_require__("K9VK");
function injectStyle (ssrContext) {
  __webpack_require__("qVPG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04fba605"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ServoControlPanel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04fba605_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ServoControlPanel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sii2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".vuestic-modal .modal-content{border-radius:12px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/dashboard-elements/HeaderDetail.vue"],"names":[],"mappings":"AACA,8BACE,kBAAoB,CACrB","file":"HeaderDetail.vue","sourcesContent":["\n.vuestic-modal .modal-content {\n  border-radius: 12px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "uVw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component__ = __webpack_require__("GDE4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar__ = __webpack_require__("1yc6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_slide_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers__ = __webpack_require__("162o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_timers__);








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'servo-control-panel',
  components: {
    vueSlider: __WEBPACK_IMPORTED_MODULE_2_vue_slider_component___default.a,
    VueSlideBar: __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar___default.a
  },
  data: function data() {
    return {
      servoHead: 20
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    setServoHead: function setServoHead() {
      this.doGogoCmdObj({
        cmd: 'setServoDuty',
        params: this.servoHead
      });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['doGogoCmdObj'])),
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_4_timers__["setInterval"])(function () {
      _this.$nextTick(function () {
        if (_this.$refs.servoSlider !== undefined) {
          _this.$refs.servoSlider.refresh();
        }
      });
    }, 500);
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      return _this2.$refs.servoSlider.refresh();
    });
    this.setServoHead();
  },

  computed: {}
});

/***/ }),

/***/ "un9w":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"LabDetailPanel.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "us/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Xd32"), __esModule: true };

/***/ }),

/***/ "vNDy":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".board[data-v-b531a2f2]{width:95%;max-width:300px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/DisplayPanel.vue"],"names":[],"mappings":"AACA,wBACE,UAAW,AACX,eAAiB,CAClB","file":"DisplayPanel.vue","sourcesContent":["\n.board[data-v-b531a2f2] {\n  width: 95%;\n  max-width: 300px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "wEtr":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("gSvA");
module.exports = __webpack_require__("FeBl").Object.entries;


/***/ }),

/***/ "yPp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_gogoboard_gogo_elements_MotorPanel_vue__ = __webpack_require__("KxAR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_gogoboard_gogo_elements_SensorPanel_vue__ = __webpack_require__("FAyG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_gogoboard_gogo_elements_DisplayPanel_vue__ = __webpack_require__("+o6u");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_gogoboard_gogo_elements_PingPanel_vue__ = __webpack_require__("L/5s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_gogoboard_gogo_elements_LabPanel_vue__ = __webpack_require__("Emq7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_gogoboard_gogo_elements_DashboardPanel_vue__ = __webpack_require__("mdGC");












/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'program-left-slide',
  components: {
    MotorPanel: __WEBPACK_IMPORTED_MODULE_2_components_gogoboard_gogo_elements_MotorPanel_vue__["default"],
    SensorPanel: __WEBPACK_IMPORTED_MODULE_3_components_gogoboard_gogo_elements_SensorPanel_vue__["default"],
    DisplayPanel: __WEBPACK_IMPORTED_MODULE_4_components_gogoboard_gogo_elements_DisplayPanel_vue__["default"],
    PingPanel: __WEBPACK_IMPORTED_MODULE_5_components_gogoboard_gogo_elements_PingPanel_vue__["default"],
    LabPanel: __WEBPACK_IMPORTED_MODULE_6_components_gogoboard_gogo_elements_LabPanel_vue__["default"],
    DashboardPanel: __WEBPACK_IMPORTED_MODULE_7_components_gogoboard_gogo_elements_DashboardPanel_vue__["default"]
  },
  props: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {},

  methods: {},
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['gogo']))
});

/***/ }),

/***/ "yc6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component__ = __webpack_require__("GDE4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slider_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar__ = __webpack_require__("1yc6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_slide_bar__);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'motor-control-panel',
  components: {
    vueSlider: __WEBPACK_IMPORTED_MODULE_2_vue_slider_component___default.a,
    VueSlideBar: __WEBPACK_IMPORTED_MODULE_3_vue_slide_bar___default.a
  },
  data: function data() {
    return {
      motorPower: 100,
      text: {
        ok: this.$t('gogoboard.motor.set_power')
      }
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    setMotorPower: function setMotorPower() {
      this.doGogoCmdObj({
        cmd: 'setPower',
        params: this.motorPower
      });
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])(['doGogoCmd', 'doGogoCmdObj'])),
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.$refs.motorSlider !== undefined) {
        _this.$nextTick(function () {
          return _this.$refs.motorSlider.refresh();
        });
      }
    }, 300);
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      return _this2.$refs.motorSlider.refresh();
    });
  },

  computed: {}
});

/***/ }),

/***/ "yeuj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__ = __webpack_require__("W3Iv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__ = __webpack_require__("BO1k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__("d7EF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__("ikxi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__("162o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("IcnI");













var miniLabels = ["1", "2", "3", "4", "5", "6", "7", "8"];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sensor-panel',
  components: {},
  props: ['miniMode'],
  data: function data() {
    return {
      steps: 1,
      selectedCountry: '',
      name: '',

      fullLabels: ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4", "Sensor 5", "Sensor 6", "Sensor 7", "Sensor 8"],
      sensorValue: [0, 0, 0, 0, 0, 0, 0, 0],
      sensorChart: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var chart = this.$refs.chart;
    var ctx = chart.getContext('2d');
    this.sensorChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(ctx, {
      type: 'bar',
      data: {
        labels: !this.miniMode ? this.fullLabels : miniLabels,
        datasets: [{
          label: 'Sensor Values',
          data: this.sensorValue,

          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(135, 227, 42, 0.2)', 'rgba(176, 121, 48, 0.2)'],
          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(135, 227, 42, 1)', 'rgba(176, 121, 48, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          enabled: false
        },
        hover: {
          animationDuration: 0
        },

        animation: {
          duration: 0,
          onComplete: function onComplete() {
            ctx.textAlign = 'center';


            this.chart.config.data.datasets.forEach(function (dataset) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(dataset._meta)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _ref = _step.value;

                  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2);

                  var key = _ref2[0];
                  var meta = _ref2[1];

                  meta.data.forEach(function (p) {
                    ctx.fillStyle = dataset.borderColor[p._index];
                    ctx.fillText(p._chart.config.data.datasets[p._datasetIndex].data[p._index], p._model.x + 0, p._model.y + -5);
                  });
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
              max: 1130
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    window.setInterval(function () {

      if (_this.sensorChart == null || _this.sensorChart == undefined) return;
      _this.sensorChart.data.datasets[0].data = _this.gogo.sensors;
      _this.sensorChart.update();
    }, 30);

    this.$bus.$on('setLanguage', function (lang) {
      _this.updateLabels(lang);
    });
    this.updateLabels();
  },
  destroyed: function destroyed() {
    this.$bus.$off('setLanguage');
  },

  methods: {
    updateLabels: function updateLabels() {
      if (this.miniMode) {
        return;
      }

      var sensorLabel = this.$t('gogoboard.sensor.label');
      var labels = [];

      for (var index = 0; index < 8; index++) {
        labels.push(sensorLabel + ' ' + (index + 1));
      }
      this.fullLabels = labels;
      this.sensorChart.data.labels = labels;
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapGetters */])(['gogo']))

});

/***/ })

});
//# sourceMappingURL=4.506bce5bc2495a10247a.js.map