webpackJsonp([34],{

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

/***/ "pyeZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".motor-cmd-area[data-v-19e5193e]{margin-right:5px}", "", {"version":3,"sources":["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/motor-elements/MotorControlPanel.vue"],"names":[],"mappings":"AACA,iCACE,gBAAkB,CACnB","file":"MotorControlPanel.vue","sourcesContent":["\n.motor-cmd-area[data-v-19e5193e] {\n  margin-right: 5px;\n}\n"],"sourceRoot":""}]);

// exports


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

/***/ })

});
//# sourceMappingURL=34.2459a40c9484064c4e63.js.map