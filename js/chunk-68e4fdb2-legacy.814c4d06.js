(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68e4fdb2"],{"02fe":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"container"},[s("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:t.isCardModalActive,callback:function(e){t.isCardModalActive=e},expression:"isCardModalActive"}},[s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head has-text-centered"},[s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.label))]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.toggleModal()}}})]),s("section",{staticClass:"modal-card-body"},["PDF"==t.ext?s("embed",{attrs:{type:"application/pdf",src:t.url,width:"100%",height:"700"}}):s("b-image",{attrs:{src:t.url,alt:"A random image"}})],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-primary",on:{click:function(e){return t.toggleModal()}}},[t._v(" Cerrar ")])])])])],1)])},n=[],a=(s("ac1f"),s("1276"),{name:"DocumentPreview",props:{url:{type:String,default:""},label:{type:String,default:"Visualización de archivo"}},data:function(){return{isCardModalActive:!1,ext:""}},methods:{toggleModal:function(){this.getExt(this.url),this.isCardModalActive=!this.isCardModalActive},toggleModalRefresh:function(t){this.getExt(t),this.isCardModalActive=!this.isCardModalActive},getExt:function(t){var e=t.split(".").pop(),s=e.split("?")[0];this.ext=s}}}),r=a,o=s("2877"),c=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},"06c5":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("a630"),s("fb6a"),s("b0c0"),s("d3b7"),s("25f0"),s("3ca3");var i=s("6b75");function n(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(i["a"])(t,e):void 0}}},1276:function(t,e,s){"use strict";var i=s("d784"),n=s("44e7"),a=s("825a"),r=s("1d80"),o=s("4840"),c=s("8aa5"),l=s("50c4"),u=s("14c3"),d=s("9263"),f=s("d039"),p=[].push,v=Math.min,h=4294967295,b=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(r(this)),a=void 0===s?h:s>>>0;if(0===a)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,a);var o,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,f+"g");while(o=d.call(b,i)){if(c=b.lastIndex,c>v&&(u.push(i.slice(v,o.index)),o.length>1&&o.index<i.length&&p.apply(u,o.slice(1)),l=o[0].length,v=c,u.length>=a))break;b.lastIndex===o.index&&b.lastIndex++}return v===i.length?!l&&b.test("")||u.push(""):u.push(i.slice(v)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var n=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n,s):i.call(String(n),e,s)},function(t,n){var r=s(i,t,this,n,i!==e);if(r.done)return r.value;var d=a(t),f=String(this),p=o(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),y=new p(b?d:"^(?:"+d.source+")",m),C=void 0===n?h:n>>>0;if(0===C)return[];if(0===f.length)return null===u(y,f)?[f]:[];var _=0,A=0,x=[];while(A<f.length){y.lastIndex=b?A:0;var E,I=u(y,b?f:f.slice(A));if(null===I||(E=v(l(y.lastIndex+(b?0:A)),f.length))===_)A=c(f,A,g);else{if(x.push(f.slice(_,A)),x.length===C)return x;for(var S=1;S<=I.length-1;S++)if(x.push(I[S]),x.length===C)return x;A=_=E}}return x.push(f.slice(_)),x}]}),!b)},"44e7":function(t,e,s){var i=s("861d"),n=s("c6b6"),a=s("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"4df4":function(t,e,s){"use strict";var i=s("0366"),n=s("7b0b"),a=s("9bdd"),r=s("e95a"),o=s("50c4"),c=s("8418"),l=s("35a1");t.exports=function(t){var e,s,u,d,f,p,v=n(t),h="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,m=void 0!==g,y=l(v),C=0;if(m&&(g=i(g,b>2?arguments[2]:void 0,2)),void 0==y||h==Array&&r(y))for(e=o(v.length),s=new h(e);e>C;C++)p=m?g(v[C],C):v[C],c(s,C,p);else for(d=y.call(v),f=d.next,s=new h;!(u=f.call(d)).done;C++)p=m?a(d,g,[u.value,C],!0):u.value,c(s,C,p);return s.length=C,s}},"6b75":function(t,e,s){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}s.d(e,"a",(function(){return i}))},"75f6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"tabs is-boxed is-centered main-menu",attrs:{id:"nav"}},[s("ul",t._l(t.headers,(function(e,i){return s("li",{key:i,class:{"is-active":t.listQuery.status===e.value},attrs:{"data-target":"pane-"+i,id:i},on:{click:function(s){t.listQuery.status=e.value}}},[s("a",[s("b-icon",{class:e.type,attrs:{icon:e.icon,"custom-size":"default"}}),s("span",{staticClass:"is-hidden-mobile"},[t._v(t._s(e.header))])],1)])})),0)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",{staticClass:"box content"},[t.requests&&(t.requests&&t.requests.length>0)?s("notification",{staticClass:"is-primary"},[s("div",[s("b-icon",{attrs:{icon:"checkbox-marked-circle","custom-size":"default"}}),t._v(" "),s("b",[t._v("¡Hola!")]),t._v(" Aquí podrás ver tus solicitudes "+t._s(t.status[t.listQuery.status]+"S")+". ")],1)]):s("notification",{staticClass:"is-primary"},[s("div",[s("b-icon",{attrs:{icon:"alert","custom-size":"default"}}),t._v(" "),s("b",[t._v("Aún no tienes solicitudes "+t._s(t.status[t.listQuery.status]+"S"))]),t._v(" Cuando tengas alguna aparecerá aquí. ")],1)]),s("notification",[s("div",[s("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(){return[s("b-button",{staticClass:"subtitle is-6 has-text-light",attrs:{label:""==t.listQuery.type?"Tipo de trámite":t.listQuery.type,type:"is-primary","icon-right":"menu-down"}})]},proxy:!0}]),model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.types,(function(e){return s("b-dropdown-item",{key:e,attrs:{disabled:t.listQuery.type==e,"aria-role":"listitem"},on:{click:function(s){t.listQuery.type=e}}},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"subtitle is-6"},[t._v(t._s(""==e?"TODOS":e))])])])])})),1)],1)]),t.requests&&!(t.requests.length<1)||t.isLoading?t._e():s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),s("p",[t._v("Aún no hay nada por aquí…")])]],2)]),t.isLoading?s("Skeleton"):t._l(t.requests,(function(e,i){return s("b-collapse",{key:e.uuid,staticClass:"collapse",attrs:{animation:"slide",open:t.isOpen==i},on:{open:function(e){t.isOpen=i}},scopedSlots:t._u([{key:"trigger",fn:function(i){return[s("article",{staticClass:"post",attrs:{role:"button"}},[s("span",["IMSS"==e.type?s("h4",{staticClass:"title"},[s("b-icon",{attrs:{size:"is-small",icon:"medical-bag"}}),t._v(" "+t._s(e.description)+" "+t._s(e.type)+" ")],1):"SEGUIMIENTO"==e.type?s("h4",{staticClass:"title"},[s("b-icon",{attrs:{size:"is-small",icon:"chair-school"}}),t._v(" "+t._s(e.type)+" ")],1):"HORARIO"===e.type?s("h4",[s("b-icon",{attrs:{size:"is-small",icon:"calendar"}}),t._v(t._s(e.description)+" "+t._s(e.type)+" ")],1):"TITULACIÓN"==e.type?[s("h4",{staticClass:"title"},[s("b-icon",{attrs:{size:"is-small",icon:"school"}}),t._v(" "+t._s(e.type)+" ")],1),s("p",{staticClass:"subtitle is-5"},[t._v(" "+t._s(e.titulation.plan.name)+" por "+t._s(e.titulation.option.name)+" "),s("router-link",{attrs:{title:"Ver documentos",to:"/titulation/"+e.titulation.id}},[s("b-icon",{attrs:{size:"is-small",icon:"open-in-new"}})],1)],1)]:s("h4",[t._v(t._s(e.type)+" "+t._s(e.description))])],2),s("div",{staticClass:"media level"},[s("div",{staticClass:"media-content level-left"},[s("div",{staticClass:"content"},[s("p",[t._v(" Solicitado hace "+t._s(t._f("timeSince")(e.created_at))+" "),s("span",{staticClass:"tag",class:t.requests_types[e.status]},[t._v(t._s(t.status[e.status]))])])])]),s("a",{staticClass:"level-right"},[s("b-icon",{attrs:{size:"is-medium",icon:i.open?"menu-up":"menu-down"}})],1)])]),s("span")]}}],null,!0)},[s("div",{staticClass:"card-content"},[e.responses.length<=0||"PENDING"===e.status?s("p",[t._v(" Aún no se han anexado respuestas a tu solicitud. ")]):t._l(e.responses,(function(i,n){return s("a",{key:n,staticClass:"level box dgw-option",attrs:{href:i.file,target:"_blank"}},[s("div",{staticClass:"level-left"},[s("span",{staticClass:"subtitle is-6"},[t._v(t._s(n+1)+".- "+t._s(e.type)+" "+t._s(e.description)+" ")])]),s("div",{staticClass:"level-right"},[t._v(" Recibido hace "+t._s(t._f("timeSince")(i.created_at))+" ")])])}))],2)])})),t.requests&&(t.requests.length<t.total&&t.listQuery.offset<t.total)?s("b-button",{staticClass:"button is-light",attrs:{expanded:""},on:{click:function(e){return t.loadMore()}}},[s("strong",[t._v("Cargar más")])]):t._e()],2)])])])},n=[],a=(s("99af"),s("d3b7"),s("6b75"));function r(t){if(Array.isArray(t))return Object(a["a"])(t)}s("a4d3"),s("e01a"),s("d28b"),s("a630"),s("3ca3"),s("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=s("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return r(t)||o(t)||Object(c["a"])(t)||l()}s("96cf");var d=s("1da1"),f=s("5530"),p=s("2f62"),v=s("7698"),h={PENDING:"PENDIENTE",VIEWED:"REVISADA",READY:"LISTA",ARCHIVED:"ARCHIVADA"},b={PENDING:"is-warning",VIEWED:"is-info",READY:"is-success",ARCHIVED:"is-danger"},g={ALL:"",CONSTANCIA:"CONSTANCIA",SEGUIMIENTO:"SEGUIMIENTO",IMSS:"IMSS",HORARIO:"HORARIO"},m={PENDING:{header:"Pendientes",icon:"file-alert",type:"has-text-warning",value:"PENDING"},READY:{header:"Listas",icon:"file-check",type:"has-text-success",value:"READY"},ARCHIVED:{header:"Archivadas",icon:"folder-open",type:"has-text-danger",value:"ARCHIVED"}},y=s("02fe"),C={name:"Requests",components:{Skeleton:function(){return s.e("chunk-2d0c206f").then(s.bind(null,"490d"))},RequestDocumentPreview:y["a"]},data:function(){return{isOpen:null,currentTab:"PENDING",isLoading:!0,requests:[],status:h,requests_types:b,types:g,headers:m,listQuery:{status:"PENDING",type:"",limit:10,offset:0},total:0,isINEModalActive:!1,isPhotoModalActive:!1}},computed:Object(f["a"])({titleStack:function(){return["Admin","Dashboard"]}},Object(p["b"])("users",["user"])),mounted:function(){this.getData()},watch:{listQuery:{handler:function(){this.isOpen=null,this.getData()},deep:!0}},methods:{getData:function(){var t=arguments,e=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){var i,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:1,e.isLoading=!0,s.prev=2,e.listQuery.offset=e.listQuery.limit*(i-1),s.next=6,Object(v["b"])(e.listQuery);case 6:n=s.sent,e.total=n.count,e.requests=n.results,console.log(e.requests),s.next=14;break;case 12:s.prev=12,s.t0=s["catch"](2);case 14:return s.prev=14,e.isLoading=!1,s.finish(14);case 17:case"end":return s.stop()}}),s,null,[[2,12,14,17]])})))()},loadMore:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,t.listQuery.offset+=t.listQuery.limit,e.next=5,Object(v["b"])(t.listQuery);case 5:s=e.sent,t.setRequests([].concat(u(t.requests),u(s.results))),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})))()},setRequests:function(t){this.requests=t},randomChartData:function(t){}}},_=C,A=(s("7695"),s("2877")),x=Object(A["a"])(_,i,n,!1,null,"406d4d7a",null);e["default"]=x.exports},7695:function(t,e,s){"use strict";var i=s("f279"),n=s.n(i);n.a},7698:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return a}));var i=s("a27e");function n(t){return Object(i["a"])({url:"/users/me/tramites/",method:"GET",params:t})}function a(t){return Object(i["a"])({url:"/users/me/tramites/",method:"POST",data:t})}},a630:function(t,e,s){var i=s("23e7"),n=s("4df4"),a=s("1c7e"),r=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:n})},b0c0:function(t,e,s){var i=s("83ab"),n=s("9bf2").f,a=Function.prototype,r=a.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in a)&&n(a,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},f279:function(t,e,s){},fb6a:function(t,e,s){"use strict";var i=s("23e7"),n=s("861d"),a=s("e8b5"),r=s("23cb"),o=s("50c4"),c=s("fc6a"),l=s("8418"),u=s("b622"),d=s("1dde"),f=s("ae40"),p=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),b=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var s,i,u,d=c(this),f=o(d.length),p=r(t,f),v=r(void 0===e?f:e,f);if(a(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?n(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return b.call(d,p,v);for(i=new(void 0===s?Array:s)(g(v-p,0)),u=0;p<v;p++,u++)p in d&&l(i,u,d[p]);return i.length=u,i}})}}]);