(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e6f8d3b"],{"07ac":function(e,t,r){var a=r("23e7"),n=r("6f53").values;a({target:"Object",stat:!0},{values:function(e){return n(e)}})},1017:function(e,t,r){"use strict";r("13d5"),r("b64b");var a={data:function(){return{redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},methods:{getOtherQuery:function(e){return Object.keys(e).reduce((function(t,r){return"redirect"!==r&&(t[r]=e[r]),t}),{})}}};t["a"]=a},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),s="String Iterator",o=n.set,l=n.getterFor(s);i(String,"String",(function(e){o(this,{type:s,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),s=r("e95a"),o=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,f,d,v,p=n(e),m="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,g=void 0!==b,y=c(p),w=0;if(g&&(b=a(b,h>2?arguments[2]:void 0,2)),void 0==y||m==Array&&s(y))for(t=o(p.length),r=new m(t);t>w;w++)v=g?b(p[w],w):p[w],l(r,w,v);else for(f=y.call(p),d=f.next,r=new m;!(u=d.call(f)).done;w++)v=g?i(f,b,[u.value,w],!0):u.value,l(r,w,v);return r.length=w,r}},5632:function(e,t,r){},"5df2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},[r("div",{staticClass:"column is-8 is-offset-2 register"},[r("div",{staticClass:"columns"},[e._m(0),r("div",{staticClass:"column right"},[e._m(1),r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:!1}},[r("b-field",[r("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),r("b-field",[r("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellido(s)"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),r("b-field",{attrs:{type:"text",isValid:!1}},[r("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matricula"},model:{value:e.user.enrollment,callback:function(t){e.$set(e.user,"enrollment",t)},expression:"user.enrollment"}})],1),r("b-field",[r("BInputWithValidation",{attrs:{rules:"required|email|email-edu",type:"email",placeholder:"Correo institucional"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("b-field",[r("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña","password-reveal":"",vid:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("b-field",[r("BInputWithValidation",{attrs:{rules:"required|confirmed:password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(t){e.$set(e.user,"password_confirm",t)},expression:"user.password_confirm"}})],1),r("button",{staticClass:"button is-block is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:function(t){t.preventDefault(),e.signup,a(e.signup)}}},[e._v(" Registrarse ")]),r("br"),r("small",[r("em",[e._v("¿Ya tienes una cuenta?")]),r("router-link",{attrs:{tag:"a",to:"/login"}},[e._v(" Iniciar sesión")])],1)],1)]}}])})],1)])]),e._m(2)])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"column left is-hidden-touch"},[r("h1",{staticClass:"title is-1"},[e._v("Ventanilla Digital")]),r("h2",{staticClass:"subtitle colored is-4"},[e._v(" Trámites electrónicos para el ITM. ")]),r("p",[e._v(" Esta es una plataforma para solicitar a distancia los trámites de control escolar y ayudar contra el "),r("b",[e._v("covid-19")]),e._v(". ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"has-text-centered"},[r("h1",{staticClass:"title is-4"},[e._v("Registrate ahora!")]),r("p",{staticClass:"description"},[e._v(" El usuario es necesario para acceder a los trámites en línea ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"column is-8 is-offset-2"},[r("br"),r("nav",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[r("span",{staticClass:"icon"},[r("i",{staticClass:"fab fa-twitter"})]),e._v(" "),r("span",{staticClass:"icon"},[r("i",{staticClass:"fab fa-facebook"})]),e._v(" "),r("span",{staticClass:"icon"},[r("i",{staticClass:"fab fa-instagram"})]),e._v(" "),r("span",{staticClass:"icon"},[r("i",{staticClass:"fab fa-github"})]),e._v(" "),r("span",{staticClass:"icon"},[r("i",{staticClass:"fas fa-envelope"})])])])])])}];r("07ac"),r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("b0c0"),r("25f0");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(l)throw i}}}}r("96cf");var l=r("1da1"),c=r("2612"),u=r("1017"),f={mixins:[u["a"]],data:function(){return{user:{first_name:"",last_name:"",enrollment:"",email:"",password:"",password_confirm:""},isLoading:!1}},methods:{alertCustomError:function(e){this.$buefy.snackbar.open({message:e,type:"is-danger",position:"is-bottom-left",actionText:"OK",queue:!1})},signup:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i,s,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(c["f"])(e.user);case 4:return r=t.sent,console.log(r),e.$buefy.dialog.alert({title:"¡Ya casi!",message:"Por favor checa tu correo para confirmar tu cuenta",type:"is-success",hasIcon:!0,icon:"check-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0}),t.next=9,e.$router.push("/home");case 9:t.next=15;break;case 11:if(t.prev=11,t.t0=t["catch"](1),console.log(t.t0),t.t0.password){a=o(t.t0.password);try{for(a.s();!(n=a.n()).done;)i=n.value,e.alertCustomError(i)}catch(f){a.e(f)}finally{a.f()}}else for(s=0,l=Object.values(t.t0);s<l.length;s++)u=l[s],e.alertCustomError(u[0]);case 15:return t.prev=15,e.isLoading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,11,15,18]])})))()}}},d=f,v=(r("6a58"),r("2877")),p=Object(v["a"])(d,a,n,!1,null,null,null);t["default"]=p.exports},"6a58":function(e,t,r){"use strict";var a=r("5632"),n=r.n(a);n.a},"6f53":function(e,t,r){var a=r("83ab"),n=r("df75"),i=r("fc6a"),s=r("d1e7").f,o=function(e){return function(t){var r,o=i(t),l=n(o),c=l.length,u=0,f=[];while(c>u)r=l[u++],a&&!s.call(o,r)||f.push(e?[r,o[r]]:o[r]);return f}};e.exports={entries:o(!0),values:o(!1)}},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),s=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:n})},d28b:function(e,t,r){var a=r("746f");a("iterator")},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),s=r("5135"),o=r("861d"),l=r("9bf2").f,c=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};c(d,u);var v=d.prototype=u.prototype;v.constructor=d;var p=v.toString,m="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;l(v,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=p.call(e);if(s(f,e))return"";var r=m?t.slice(7,-1):t.replace(h,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:d})}},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),s=r("23cb"),o=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),f=r("1dde"),d=r("ae40"),v=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),h=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!v||!p},{slice:function(e,t){var r,a,u,f=l(this),d=o(f.length),v=s(e,d),p=s(void 0===t?d:t,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(f,v,p);for(a=new(void 0===r?Array:r)(b(p-v,0)),u=0;v<p;v++,u++)v in f&&c(a,u,f[v]);return a.length=u,a}})}}]);