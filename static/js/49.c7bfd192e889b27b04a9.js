webpackJsonp([49],{"0YoK":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile"},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"offset-md-3 col-md-6 justify-content-center align-self-center "},[o("div",{staticClass:"text-center space-top-bottom"},[o("span",{staticClass:" profile-section-avatar-container"},[t.userPhotoUrl?o("img",{attrs:{src:t.userPhotoUrl}}):o("i",{staticClass:"fa fa-user icon-user"})]),t._v(" "),o("p",{staticClass:"space-top-bottom provider-name"},[t._v(t._s(t.currentUser.providerName))]),t._v(" "),o("h5",{staticClass:"name"},[t._v(t._s(t.currentUser?t.currentUser.name:""))]),t._v(" "),o("p",[t._v(t._s(t.currentUser.email))])])])])])},a=[],r={render:i,staticRenderFns:a};e.a=r},"9SzL":function(t,e,o){"use strict";e.a={name:"profile",components:{},data:function(){return{chatMessages:[{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]}},beforeMouted:function(){this.userIsAuthenticated||this.$router.push("/auth/login")},computed:{currentUser:function(){return this.$store.getters.user},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userPhotoUrl:function(){return this.userIsAuthenticated&&this.$store.getters.user.photoUrl?this.$store.getters.user.photoUrl:null}}}},"L4/Z":function(t,e,o){e=t.exports=o("FZ+f")(!0),e.push([t.i,".chat-widget[data-v-deda9278],.profile-card-widget[data-v-deda9278]{width:100%}.chat-widget .widget-body[data-v-deda9278],.profile-card-widget .widget-body[data-v-deda9278]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.chat-widget .widget-body>div[data-v-deda9278],.profile-card-widget .widget-body>div[data-v-deda9278]{width:100%}.chat-widget .widget-body .provider-name[data-v-deda9278],.profile-card-widget .widget-body .provider-name[data-v-deda9278]{color:#acb5be}.bottom-widgets>div[class^=col]>div[data-v-deda9278]{width:100%}.profile[data-v-deda9278]{height:calc(100vh - 120px);margin:0}.profile .row[data-v-deda9278]{position:-webkit-sticky;position:sticky;top:calc(50vh - 100px)}.profile-section-avatar-container[data-v-deda9278]{display:inline-block;width:100px;height:100px;background-color:#fff;border-radius:50%;border:2px solid #ddd;overflow:hidden}.profile-section-avatar-container img[data-v-deda9278]{height:100%;width:100%}.profile-section-avatar-container .icon-user[data-v-deda9278]{color:#ddd;font-size:105px}","",{version:3,sources:["C:/xampp/htdocs/remote-gogo-program/src/components/profile/Profile.vue"],names:[],mappings:"AAgBA,oEACE,UAAY,CACb,AACD,8FACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,sGACM,UAAY,CACjB,AACD,4HACM,aAAe,CACpB,AACD,qDACE,UAAY,CACb,AACD,0BACE,2BAA4B,AAC5B,QAAU,CACX,AACD,+BACI,wBAAyB,AACzB,gBAAiB,AACjB,sBAAwB,CAC3B,AACD,mDACE,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,sBAAwB,AACxB,kBAAmB,AACnB,sBAAuB,AACvB,eAAiB,CAClB,AACD,uDACI,YAAa,AACb,UAAY,CACf,AACD,8DACI,WAAY,AACZ,eAAiB,CACpB",file:"Profile.vue",sourcesContent:["/*$tooltip-font-size: $font-size-base;\r\n$tooltip-box-shadow: $white;\r\n$tooltip-max-width: 200px;\r\n$tooltip-color: $white;\r\n$tooltip-bg: $white;\r\n$tooltip-border-radius: $font-size-base * 0.5;\r\n$tooltip-opacity: .9;\r\n$tooltip-padding-y: .5rem;\r\n$tooltip-padding-x: .75rem;\r\n$tooltip-margin: 0;\r\n$tooltip-line-height: 1.13;\r\n$tooltip-font-weight: 300;\r\n\r\n$tooltip-arrow-width: .8rem;\r\n$tooltip-arrow-height: .4rem;\r\n$tooltip-arrow-color: $white;*/\n.profile-card-widget[data-v-deda9278], .chat-widget[data-v-deda9278] {\n  width: 100%;\n}\n.profile-card-widget .widget-body[data-v-deda9278], .chat-widget .widget-body[data-v-deda9278] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.profile-card-widget .widget-body > div[data-v-deda9278], .chat-widget .widget-body > div[data-v-deda9278] {\n      width: 100%;\n}\n.profile-card-widget .widget-body .provider-name[data-v-deda9278], .chat-widget .widget-body .provider-name[data-v-deda9278] {\n      color: #acb5be;\n}\n.bottom-widgets > div[class^='col'] > div[data-v-deda9278] {\n  width: 100%;\n}\n.profile[data-v-deda9278] {\n  height: calc(100vh - 120px);\n  margin: 0;\n}\n.profile .row[data-v-deda9278] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: calc(50vh - 100px);\n}\n.profile-section-avatar-container[data-v-deda9278] {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background-color: white;\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  overflow: hidden;\n}\n.profile-section-avatar-container img[data-v-deda9278] {\n    height: 100%;\n    width: 100%;\n}\n.profile-section-avatar-container .icon-user[data-v-deda9278] {\n    color: #ddd;\n    font-size: 105px;\n}\n"],sourceRoot:""}])},LZXq:function(t,e,o){"use strict";function i(t){o("kEAw")}Object.defineProperty(e,"__esModule",{value:!0});var a=o("9SzL"),r=o("0YoK"),d=o("VU/8"),n=i,s=d(a.a,r.a,!1,n,"data-v-deda9278",null);e.default=s.exports},kEAw:function(t,e,o){var i=o("L4/Z");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("7493c443",i,!0)}});
//# sourceMappingURL=49.c7bfd192e889b27b04a9.js.map