(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bfc864a"],{"02fe":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:t.isCardModalActive,callback:function(e){t.isCardModalActive=e},expression:"isCardModalActive"}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.label))]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.toggleModal()}}})]),a("section",{staticClass:"modal-card-body"},[a("embed",{attrs:{type:"application/pdf",src:t.url,width:"100%",height:"700"}})]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",on:{click:function(e){return t.toggleModal()}}},[t._v(" Cerrar ")])])])])],1)])},i=[],r={name:"DocumentPreview",props:["url","label"],data:function(){return{isCardModalActive:!1}},methods:{toggleModal:function(){this.isCardModalActive=!this.isCardModalActive}}},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var s=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(s["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(s["a"])(t,e):void 0}}},"3ca3":function(t,e,a){"use strict";var s=a("6547").charAt,i=a("69f3"),r=a("7dd0"),n="String Iterator",o=i.set,c=i.getterFor(n);r(String,"String",(function(t){o(this,{type:n,string:String(t),index:0})}),(function(){var t,e=c(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=s(a,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,a){"use strict";var s=a("0366"),i=a("7b0b"),r=a("9bdd"),n=a("e95a"),o=a("50c4"),c=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,d,f,v,b=i(t),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,y=u(b),A=0;if(g&&(m=s(m,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&n(y))for(e=o(b.length),a=new p(e);e>A;A++)v=g?m(b[A],A):b[A],c(a,A,v);else for(d=y.call(b),f=d.next,a=new p;!(l=f.call(d)).done;A++)v=g?r(d,m,[l.value,A],!0):l.value,c(a,A,v);return a.length=A,a}},"6b75":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}a.d(e,"a",(function(){return s}))},"9b0c":function(t,e,a){},a630:function(t,e,a){var s=a("23e7"),i=a("4df4"),r=a("1c7e"),n=!r((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:n},{from:i})},a7ba:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.user.student||{}}}),a("Modal"),a("section",{staticClass:"section"},[a("div",{staticClass:"tabs is-boxed is-centered main-menu",attrs:{id:"nav"}},[a("ul",[a("li",{class:{"is-active":"PENDING"===t.listQuery.status},attrs:{"data-target":"pane-2",id:"2"},on:{click:function(e){t.listQuery.status="PENDING",t.getData()}}},[a("a",[a("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),a("span",[t._v("Pendientes")])],1)]),a("li",{class:{"is-active":"READY"===t.listQuery.status},attrs:{"data-target":"pane-1",id:"1"},on:{click:function(e){t.listQuery.status="READY",t.getData()}}},[a("a",[a("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),a("span",[t._v("Listas")])],1)]),a("li",{class:{"is-active":"ARCHIVED"===t.listQuery.status},attrs:{"data-target":"pane-3",id:"3"},on:{click:function(e){t.listQuery.status="ARCHIVED",t.getData()}}},[a("a",[a("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),a("span",[t._v("Archivadas")])],1)])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("div",{staticClass:"box content"},[t.requests&&(t.requests&&t.requests.length>0)?a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"checkbox-marked-circle","custom-size":"default"}}),t._v(" "),a("b",[t._v("¡Hola!")]),t._v(" Aquí podrás ver tus solicitudes "+t._s(t.status[t.listQuery.status]+"S")+" ")],1)]):a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"alert","custom-size":"default"}}),t._v(" "),a("b",[t._v("Aún no tienes solicitudes "+t._s(t.status[t.listQuery.status]+"S"))]),t._v(" Cuando tengas alguna aparecerá aquí. ")],1)]),t.isLoading?a("Skeleton"):t._l(t.requests,(function(e,s){return a("article",{key:e.uuid,staticClass:"post"},["IMSS"==e.type?a("h4",[t._v(t._s(e.description)+" "+t._s(e.type))]):a("h4",[t._v(t._s(e.type)+" "+t._s(e.description))]),a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[t._v(" Solicitado hace "+t._s(t._f("timeSince")(e.date))+" "),a("span",{staticClass:"tag",class:t.requests_types[e.status]},[t._v(t._s(t.status[e.status]))])])])]),a("div",[a("div",{staticClass:"buttons is-centered"},[e.photo?a("b-button",{staticClass:"tag",on:{click:function(e){t.isPhotoModalActive=!0}}},[t._v("FOTO")]):t._e(),e.INE?a("b-button",{staticClass:"tag",on:{click:function(e){t.isINEModalActive=!0}}},[t._v("INE")]):t._e(),e.document&&"PENDING"!=t.listQuery.status?a("button",{staticClass:"button is-primary tag",on:{click:function(e){return t.$refs.RequestPreview[s].toggleModal()}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):t._e()],1)]),a("request-document-preview",{ref:"RequestPreview",refInFor:!0,attrs:{url:e.document,label:"Archivo de solicitud"}}),a("b-modal",{model:{value:t.isINEModalActive,callback:function(e){t.isINEModalActive=e},expression:"isINEModalActive"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",[a("img",{attrs:{width:"100%",alt:"Placeholder image",src:e.INE}})])])])]),a("b-modal",{model:{value:t.isPhotoModalActive,callback:function(e){t.isPhotoModalActive=e},expression:"isPhotoModalActive"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",[a("img",{attrs:{width:"100%",alt:"Placeholder image",src:e.photo}})])])])])],1)])})),t.requests&&(t.requests.length<t.total&&t.listQuery.offset<t.total)?a("b-button",{staticClass:"button is-light",attrs:{expanded:""},on:{click:function(e){return t.loadMore()}}},[a("strong",[t._v("Cargar más")])]):t._e()],2)])])])],1)},i=[],r=(a("99af"),a("d3b7"),a("6b75"));function n(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("3ca3"),a("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=a("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||o(t)||Object(c["a"])(t)||u()}a("96cf");var d=a("1da1"),f=a("5530"),v=a("2f62"),b=a("7698"),p={PENDING:"PENDIENTE",READY:"LISTA",ARCHIVED:"ARCHIVADA"},h={PENDING:"is-warning",READY:"is-success",ARCHIVED:"is-danger"},m=a("02fe"),g={name:"Profile",components:{Modal:function(){return a.e("chunk-2c0194da").then(a.bind(null,"ccde"))},Skeleton:function(){return a.e("chunk-2d0c206f").then(a.bind(null,"490d"))},RequestDocumentPreview:m["a"]},data:function(){return{currentTab:"PENDING",isLoading:!0,requests:[],status:p,requests_types:h,listQuery:{status:"PENDING",limit:10,offset:0},total:0,isINEModalActive:!1,isPhotoModalActive:!1}},computed:Object(f["a"])({titleStack:function(){return["Admin","Dashboard"]}},Object(v["b"])("users",["user"])),mounted:function(){this.getData()},methods:{getData:function(){var t=arguments,e=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,e.isLoading=!0,a.prev=2,e.listQuery.offset=e.listQuery.limit*(s-1),a.next=6,Object(b["b"])(e.listQuery);case 6:i=a.sent,e.total=i.count,e.requests=i.results,a.next=13;break;case 11:a.prev=11,a.t0=a["catch"](2);case 13:return a.prev=13,e.isLoading=!1,a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[2,11,13,16]])})))()},loadMore:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,t.listQuery.offset+=t.listQuery.limit,e.next=5,Object(b["b"])(t.listQuery);case 5:a=e.sent,t.setRequests([].concat(l(t.requests),l(a.results))),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})))()},setRequests:function(t){this.requests=t},randomChartData:function(t){}}},y=g,A=(a("e6a6"),a("2877")),C=Object(A["a"])(y,s,i,!1,null,null,null);e["default"]=C.exports},b0c0:function(t,e,a){var s=a("83ab"),i=a("9bf2").f,r=Function.prototype,n=r.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},d28b:function(t,e,a){var s=a("746f");s("iterator")},e01a:function(t,e,a){"use strict";var s=a("23e7"),i=a("83ab"),r=a("da84"),n=a("5135"),o=a("861d"),c=a("9bf2").f,u=a("e893"),l=r.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var v=f.prototype=l.prototype;v.constructor=f;var b=v.toString,p="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=b.call(t);if(n(d,t))return"";var a=p?e.slice(7,-1):e.replace(h,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:f})}},e6a6:function(t,e,a){"use strict";var s=a("9b0c"),i=a.n(s);i.a},fb6a:function(t,e,a){"use strict";var s=a("23e7"),i=a("861d"),r=a("e8b5"),n=a("23cb"),o=a("50c4"),c=a("fc6a"),u=a("8418"),l=a("b622"),d=a("1dde"),f=a("ae40"),v=d("slice"),b=f("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),h=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!v||!b},{slice:function(t,e){var a,s,l,d=c(this),f=o(d.length),v=n(t,f),b=n(void 0===e?f:e,f);if(r(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?i(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(d,v,b);for(s=new(void 0===a?Array:a)(m(b-v,0)),l=0;v<b;v++,l++)v in d&&u(s,l,d[v]);return s.length=l,s}})}}]);