webpackJsonp([33],{"+FI5":function(a,e,i){e=a.exports=i("FZ+f")(!0),e.push([a.i,".form-group[data-v-f5a7c73e]{min-width:200px;max-width:360px;width:80%}@media (min-width:768px){.wizard-completed-tab[data-v-f5a7c73e]{margin-top:-3.125rem}}","",{version:3,sources:["C:/xampp/htdocs/remote-gogo-program/src/components/dashboard/setup-profile-tab/SetupProfileTab.vue"],names:[],mappings:"AAgBA,6BACE,gBAAiB,AACjB,gBAAiB,AACjB,SAAW,CACZ,AACD,yBACA,uCACI,oBAAsB,CACzB,CACA",file:"SetupProfileTab.vue",sourcesContent:["/*$tooltip-font-size: $font-size-base;\r\n$tooltip-box-shadow: $white;\r\n$tooltip-max-width: 200px;\r\n$tooltip-color: $white;\r\n$tooltip-bg: $white;\r\n$tooltip-border-radius: $font-size-base * 0.5;\r\n$tooltip-opacity: .9;\r\n$tooltip-padding-y: .5rem;\r\n$tooltip-padding-x: .75rem;\r\n$tooltip-margin: 0;\r\n$tooltip-line-height: 1.13;\r\n$tooltip-font-weight: 300;\r\n\r\n$tooltip-arrow-width: .8rem;\r\n$tooltip-arrow-height: .4rem;\r\n$tooltip-arrow-color: $white;*/\n.form-group[data-v-f5a7c73e] {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n.wizard-completed-tab[data-v-f5a7c73e] {\n    margin-top: -3.125rem;\n}\n}\n"],sourceRoot:""}])},LmFp:function(a,e,i){"use strict";e.a=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},b2ML:function(a,e,i){var n=i("+FI5");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);i("rjj0")("627742ea",n,!0)},b32I:function(a,e,i){"use strict";var n=i("LmFp");e.a={name:"setup-profile-tab",props:{wizardType:{default:"rich"}},data:function(){var a=this;return{steps:[{label:"Step 1. Name",slot:"page1",onNext:function(){a.validateFormField("name")},isValid:function(){return a.isFormFieldValid("name")}},{label:"Step 2. Country",slot:"page2",onNext:function(){a.$refs.selectedCountrySelect.validate()},isValid:function(){return a.$refs.selectedCountrySelect.isValid()}},{label:"Step 3. Confirm",slot:"page3"}],selectedCountry:"",name:"",countriesList:n.a}},methods:{isFormFieldValid:function(a){var e=!1;return this.formFields[a]&&(e=this.formFields[a].validated&&this.formFields[a].valid),e},validateFormField:function(a){this.$validator.validate(a,this[a])}}}},hnAi:function(a,e,i){"use strict";function n(a){i("b2ML")}Object.defineProperty(e,"__esModule",{value:!0});var t=i("b32I"),o=i("oCn3"),r=i("VU/8"),s=n,l=r(t.a,o.a,!1,s,"data-v-f5a7c73e",null);e.default=l.exports},oCn3:function(a,e,i){"use strict";var n=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"setup-profile-tab dashboard-tab"},[i("vuestic-wizard",{attrs:{steps:a.steps,"wizard-layout":"vertical","wizard-type":a.wizardType}},[i("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page1"},slot:"page1"},[i("h4",[a._v("Type your name")]),a._v(" "),i("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),a._v(" "),i("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("name"),valid:a.isFormFieldValid("name")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"name",required:"required"},domProps:{value:a.name},on:{input:function(e){e.target.composing||(a.name=e.target.value)}}}),a._v(" "),i("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),a._v(" "),i("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),a._v(" "),i("label",{staticClass:"control-label"},[a._v("Name")]),i("i",{staticClass:"bar"}),a._v(" "),i("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[a._v(a._s(a.errors.first("name"))+"\n          ")])])])]),a._v(" "),i("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page2"},slot:"page2"},[i("h4",[a._v("Select your country")]),a._v(" "),i("p",[a._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),a._v(" "),i("vuestic-simple-select",{ref:"selectedCountrySelect",attrs:{label:"Select country",name:"country",required:!0,options:a.countriesList},model:{value:a.selectedCountry,callback:function(e){a.selectedCountry=e},expression:"selectedCountry"}})],1),a._v(" "),i("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page3"},slot:"page3"},[i("h4",[a._v("Confirm selection")]),a._v(" "),i("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])]),a._v(" "),i("div",{staticClass:"form-wizard-tab-content wizard-completed-tab",attrs:{slot:"wizardCompleted"},slot:"wizardCompleted"},[i("h4",[a._v("Wizard completed!")]),a._v(" "),i("p",[a._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])])])],1)},t=[],o={render:n,staticRenderFns:t};e.a=o}});
//# sourceMappingURL=33.f5657ace4da0f8e641e5.js.map