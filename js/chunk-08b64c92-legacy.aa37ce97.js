(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08b64c92"],{"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var a=r("6b75");function n(e,t){if(e){if("string"===typeof e)return Object(a["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a["a"])(e,t):void 0}}},1017:function(e,t,r){"use strict";r("13d5"),r("b64b");var a={data:function(){return{redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},methods:{getOtherQuery:function(e){return Object.keys(e).reduce((function(t,r){return"redirect"!==r&&(t[r]=e[r]),t}),{})}}};t["a"]=a},2591:function(e,t,r){},3320:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero is-fullheight",style:"background: url("+e.$store.getters.background_image+") no-repeat 50% fixed; background-size: cover;"},[r("div",{staticClass:"hero-body",staticStyle:{"justify-content":"center"}},[r("div",{staticClass:"container is-max-desktop register"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column left has-text-centered is-hidden-mobile"},[r("h1",{staticClass:"title is-2"},[e._v("Ventanilla Digital")]),r("h2",{staticClass:"subtitle colored is-3"},[e._v(" Trámites electrónicos para el ITM. ")]),e._m(0),r("br"),r("router-link",{staticClass:"notification",attrs:{tag:"img",src:"https://www.itmerida.mx/imagenes/tec.png",width:"200px",alt:"Logo",to:"/"}})],1),r("div",{staticClass:"column right"},[e._m(1),r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{staticClass:"has-text-left",on:{submit:!1}},[r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Nombre(s)",rules:"required",type:"text",name:"fullname",placeholder:"Nombre(s)",margin:"mb-5"},model:{value:e.user.full_name,callback:function(t){e.$set(e.user,"full_name",t)},expression:"user.full_name"}}),r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Primer apellido",rules:"required",type:"text",name:"first_lastname",placeholder:"Primer apellido",margin:"mb-5"},model:{value:e.user.first_lastname,callback:function(t){e.$set(e.user,"first_lastname",t)},expression:"user.first_lastname"}}),r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Segundo apellido",rules:"required",type:"text",name:"second_lastname",placeholder:"Segundo apellido",margin:"mb-5"},model:{value:e.user.second_lastname,callback:function(t){e.$set(e.user,"second_lastname",t)},expression:"user.second_lastname"}}),r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Correo institucional",rules:"required|email|email-edu",type:"email",name:"email",placeholder:"Correo institucional",margin:"mb-5"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Contraseña",rules:"required|password","data-vv-as":"field",name:"password",type:"password",placeholder:"Contraseña","password-reveal":"",vid:"password",margin:"mb-5"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Confirmar contraseña",rules:"required|confirmed:password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(t){e.$set(e.user,"password_confirm",t)},expression:"user.password_confirm"}}),r("hr"),r("b-field",[r("button",{staticClass:"button is-block is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:function(t){return t.preventDefault(),a(e.signup)}}},[e._v(" Registrarse ")])]),r("p",{staticClass:"has-text-black legend"},[e._v(" ¿Ya tienes una cuenta? · "),r("router-link",{attrs:{tag:"a",to:"/login"}},[e._v("Iniciar sesión")])],1)],1)]}}])})],1)])])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Esta es una plataforma para solicitar a distancia los trámites de control escolar y ayudar contra el "),r("b",[e._v("covid-19")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"has-text-centered"},[r("h1",{staticClass:"title is-4"},[e._v("Regístrate ahora!")]),r("p",{staticClass:"description"},[e._v(" El usuario es necesario para acceder a los trámites en línea ")])])}],i=(r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("06c5"));function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(i["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(l)throw s}}}}r("96cf");var o=r("1da1"),l=r("2612"),c=r("1017"),u={mixins:[c["a"]],data:function(){return{user:{first_name:"",last_name:"",email:"",password:"",password_confirm:""},isLoading:!1}},methods:{translate:function(e){"This password is too common."==e?this.$dw.messages.errorSnackbar("La contraseña ingresada es muy común."):"This password is entirely numeric."==e?this.$dw.messages.errorSnackbar("Esta contraseña es totalmente numérica."):this.$dw.messages.errorSnackbar(e)},signup:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,e.user.email=e.user.email.toLowerCase(),t.next=5,Object(l["g"])(e.user);case 5:r=t.sent,console.log(r),e.$buefy.dialog.alert({title:"¡Ya casi!",message:"Por favor checa tu correo para confirmar tu cuenta",type:"is-success",hasIcon:!0,icon:"check-circle",ariaRole:"alertdialog",ariaModal:!0}),e.$router.push("/"),t.next=15;break;case 11:if(t.prev=11,t.t0=t["catch"](1),console.log(t.t0),t.t0.password){a=s(t.t0.password);try{for(a.s();!(n=a.n()).done;)i=n.value,e.translate(i)}catch(o){a.e(o)}finally{a.f()}}else t.t0.email?e.$dw.messages.errorSnackbar("Ya existe una cuenta activa con el correo ingresado"):e.$dw.messages.errorSnackbar("Algo salió mal");case 15:return t.prev=15,e.isLoading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,11,15,18]])})))()}}},d=u,f=(r("475e"),r("2877")),m=Object(f["a"])(d,a,n,!1,null,"38a5e1e5",null);t["default"]=m.exports},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),s="String Iterator",o=n.set,l=n.getterFor(s);i(String,"String",(function(e){o(this,{type:s,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"475e":function(e,t,r){"use strict";var a=r("2591"),n=r.n(a);n.a},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),s=r("e95a"),o=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,f,m,p=n(e),b="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,y=c(p),w=0;if(g&&(h=a(h,v>2?arguments[2]:void 0,2)),void 0==y||b==Array&&s(y))for(t=o(p.length),r=new b(t);t>w;w++)m=g?h(p[w],w):p[w],l(r,w,m);else for(d=y.call(p),f=d.next,r=new b;!(u=f.call(d)).done;w++)m=g?i(d,h,[u.value,w],!0):u.value,l(r,w,m);return r.length=w,r}},"6b75":function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),s=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:n})},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,i=Function.prototype,s=i.toString,o=/^\s*function ([^ (]*)/,l="name";a&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(e){return""}}})},d28b:function(e,t,r){var a=r("746f");a("iterator")},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),s=r("5135"),o=r("861d"),l=r("9bf2").f,c=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,b="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=p.call(e);if(s(d,e))return"";var r=b?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),s=r("23cb"),o=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),v=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!p},{slice:function(e,t){var r,a,u,d=l(this),f=o(d.length),m=s(e,f),p=s(void 0===t?f:t,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,m,p);for(a=new(void 0===r?Array:r)(h(p-m,0)),u=0;m<p;m++,u++)m in d&&c(a,u,d[m]);return a.length=u,a}})}}]);