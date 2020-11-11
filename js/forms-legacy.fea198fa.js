(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms"],{"0894":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("hero-bar",[e._v(" Forms "),o("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[e._v(" Dashboard ")])],1),o("section",{staticClass:"section is-main-section"},[o("card-component",{attrs:{title:"Forms",icon:"ballot"}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[o("b-field",{attrs:{label:"From",horizontal:""}},[o("b-field",[o("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("b-field",[o("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),o("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[o("b-field",[o("p",{staticClass:"control"},[o("a",{staticClass:"button is-static"},[e._v(" +44 ")])]),o("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),o("b-field",{attrs:{label:"Department",horizontal:""}},[o("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}},e._l(e.departments,(function(t,n){return o("option",{key:n,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1),o("hr"),o("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[o("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}})],1),o("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[o("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:e.form.question,callback:function(t){e.$set(e.form,"question",t)},expression:"form.question"}})],1),o("hr"),o("b-field",{attrs:{horizontal:""}},[o("b-field",{attrs:{grouped:""}},[o("div",{staticClass:"control"},[o("b-button",{attrs:{"native-type":"submit",type:"is-primary"}},[e._v("Submit")])],1),o("div",{staticClass:"control"},[o("b-button",{attrs:{type:"is-primary is-outlined"},on:{click:e.reset}},[e._v("Reset")])],1)])],1)],1)]),o("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[o("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[o("checkbox-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-primary"},model:{value:e.customElementsForm.checkbox,callback:function(t){e.$set(e.customElementsForm,"checkbox",t)},expression:"customElementsForm.checkbox"}})],1),o("hr"),o("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[o("radio-picker",{attrs:{options:{one:"One",two:"Two"}},model:{value:e.customElementsForm.radio,callback:function(t){e.$set(e.customElementsForm,"radio",t)},expression:"customElementsForm.radio"}})],1),o("hr"),o("b-field",{attrs:{label:"Switch",horizontal:""}},[o("b-switch",{model:{value:e.customElementsForm.switch,callback:function(t){e.$set(e.customElementsForm,"switch",t)},expression:"customElementsForm.switch"}},[e._v(" Default ")])],1),o("hr"),o("b-field",{attrs:{label:"File",horizontal:""}},[o("file-picker",{model:{value:e.customElementsForm.file,callback:function(t){e.$set(e.customElementsForm,"file",t)},expression:"customElementsForm.file"}})],1)],1),o("card-component",{attrs:{title:"Drag & drop file upload",icon:"cloud-upload"}},[o("file-picker-drag-and-drop")],1)],1)],1)},l=[];o("a4d3"),o("e01a"),o("d28b"),o("d3b7"),o("3ca3"),o("ddb0");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var r=o("9e86"),a=o.n(r),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,n){return o("div",{key:n,staticClass:"control"},[o("b-checkbox",{attrs:{"native-value":n,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},c=[],u={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:[]}},data:function(){return{newValue:[]}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(e){this.newValue=e}}},d=u,m=o("2877"),p=Object(m["a"])(d,s,c,!1,null,null,null),f=p.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-field",{attrs:{grouped:"","group-multiline":""}},e._l(e.options,(function(t,n){return o("div",{key:n,staticClass:"control"},[o("b-radio",{attrs:{"native-value":n,type:e.type},on:{input:e.input},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}},[e._v(" "+e._s(t)+" ")])],1)})),0)},h=[],v={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:null}},data:function(){return{newValue:null}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(e){this.newValue=e}}},y=v,g=Object(m["a"])(y,b,h,!1,null,null,null),k=g.exports,x=o("3b73"),w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-field",[o("b-upload",{attrs:{multiple:"","drag-drop":""},model:{value:e.dropFiles,callback:function(t){e.dropFiles=t},expression:"dropFiles"}},[o("section",{staticClass:"section"},[o("div",{staticClass:"content has-text-centered"},[o("p",[o("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),o("p",[e._v("Drop your files here or click to upload")])])])])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.dropFiles.length,expression:"dropFiles.length"}],staticClass:"upload-file-list"},e._l(e.dropFiles,(function(t,n){return o("div",{key:n,staticClass:"notification"},[o("div",{staticClass:"level"},[o("div",{staticClass:"level-left"},[o("div",{staticClass:"level-item"},[o("div",[o("b-icon",{attrs:{icon:"cloud-upload","custom-size":"default"}}),o("span",[e._v(e._s(t.name))])],1)])]),o("div",{staticClass:"level-right"},[o("div",{staticClass:"level-item"},[o("a",{staticClass:"tag is-delete",on:{click:function(t){return t.preventDefault(),e.deleteDropFile(n)}}})])])])])})),0)],1)},F=[],_=(o("a434"),{name:"FilePickerDragAndDrop",data:function(){return{dropFiles:[]}},methods:{deleteDropFile:function(e){this.dropFiles.splice(e,1)}}}),S=_,C=Object(m["a"])(S,w,F,!1,null,null,null),E=C.exports,$={name:"Forms",components:{FilePickerDragAndDrop:E,FilePicker:x["a"],RadioPicker:k,CheckboxPicker:f},data:function(){return{isLoading:!1,form:{name:null,email:null,phone:null,department:null,subject:null,question:null},customElementsForm:{checkbox:[],radio:null,switch:!0,file:null},departments:["Business Development","Marketing","Sales"]}},computed:{titleStack:function(){return["Admin","Forms"]}},methods:{submit:function(){},reset:function(){this.form=a()(this.form,(function(e){return e&&"object"===i(e)?[]:null})),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}}},D=$,j=Object(m["a"])(D,n,l,!1,null,null,null);t["default"]=j.exports},"3b4a":function(e,t,o){var n=o("0b07"),l=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=l},"3ca3":function(e,t,o){"use strict";var n=o("6547").charAt,l=o("69f3"),i=o("7dd0"),r="String Iterator",a=l.set,s=l.getterFor(r);i(String,"String",(function(e){a(this,{type:r,string:String(e),index:0})}),(function(){var e,t=s(this),o=t.string,l=t.index;return l>=o.length?{value:void 0,done:!0}:(e=n(o,l),t.index+=e.length,{value:e,done:!1})}))},"872a":function(e,t,o){var n=o("3b4a");function l(e,t,o){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}e.exports=l},"9e86":function(e,t,o){var n=o("872a"),l=o("242e"),i=o("badf");function r(e,t){var o={};return t=i(t,3),l(e,(function(e,l,i){n(o,l,t(e,l,i))})),o}e.exports=r},a434:function(e,t,o){"use strict";var n=o("23e7"),l=o("23cb"),i=o("a691"),r=o("50c4"),a=o("7b0b"),s=o("65f0"),c=o("8418"),u=o("1dde"),d=o("ae40"),m=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,b=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m||!p},{splice:function(e,t){var o,n,u,d,m,p,y=a(this),g=r(y.length),k=l(e,g),x=arguments.length;if(0===x?o=n=0:1===x?(o=0,n=g-k):(o=x-2,n=b(f(i(t),0),g-k)),g+o-n>h)throw TypeError(v);for(u=s(y,n),d=0;d<n;d++)m=k+d,m in y&&c(u,d,y[m]);if(u.length=n,o<n){for(d=k;d<g-n;d++)m=d+n,p=d+o,m in y?y[p]=y[m]:delete y[p];for(d=g;d>g-n+o;d--)delete y[d-1]}else if(o>n)for(d=g-n;d>k;d--)m=d+n-1,p=d+o-1,m in y?y[p]=y[m]:delete y[p];for(d=0;d<o;d++)y[d+k]=arguments[d+2];return y.length=g-n+o,u}})},d28b:function(e,t,o){var n=o("746f");n("iterator")},e01a:function(e,t,o){"use strict";var n=o("23e7"),l=o("83ab"),i=o("da84"),r=o("5135"),a=o("861d"),s=o("9bf2").f,c=o("e893"),u=i.Symbol;if(l&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(m,u);var p=m.prototype=u.prototype;p.constructor=m;var f=p.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=f.call(e);if(r(d,e))return"";var o=b?t.slice(7,-1):t.replace(h,"$1");return""===o?void 0:o}}),n({global:!0,forced:!0},{Symbol:m})}}}]);