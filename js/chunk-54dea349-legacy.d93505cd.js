(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54dea349"],{"083a":function(t,e,a){"use strict";var s=a("2bd9"),r=a.n(s);r.a},"2bd9":function(t,e,a){},"304c":function(t,e,a){"use strict";var s=a("dbee"),r=a.n(s);r.a},"4e51":function(t,e,a){"use strict";var s=a("e471"),r=a.n(s);r.a},5035:function(t,e){t.exports={mounted:function(){this.$store.commit("fullPage",!0),this.$store.commit("asideRightToggle",!1)},beforeDestroy:function(){this.$store.commit("fullPage",!1)}}},a657:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppNav"),a("router-view"),a("Modal"),a("AppFooter")],1)},r=[],n=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-white topNav"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"topNav"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item is-flex-touch nav"},[t.$store.state.users.isLogued?[a("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},on:{click:function(e){return t.show_form(!0)}},slot:"trigger"},[a("b-icon",{attrs:{icon:"border-all"}})],1),a("b-dropdown",{staticClass:"navbar-item",attrs:{position:"is-bottom-left","append-to-body":"","aria-role":"menu"},model:{value:t.navigation,callback:function(e){t.navigation=e},expression:"navigation"}},[a("a",{attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("b-icon",{attrs:{icon:"account"}})],1),a("b-dropdown-item",{attrs:{custom:"","aria-role":"menuitem"}},[t._v(" Registrado como "),a("b",[t._v(t._s(t.student.enrollment?t.student.enrollment:t.user.first_name))])]),a("hr",{staticClass:"dropdown-divider"}),a("b-dropdown-item",{attrs:{"has-link":"",value:"blog","aria-role":"menuitem"}},[a("router-link",{attrs:{tag:"a",to:"/solicitudes"}},[a("b-icon",{attrs:{size:"is-small",icon:"book-open"}}),t._v(" "),a("span",[t._v("Mis solicitudes")])],1)],1),a("b-dropdown-item",{attrs:{"has-link":"",value:"settings"}},[a("router-link",{attrs:{tag:"a",to:"/info"}},[a("b-icon",{attrs:{size:"is-small",icon:"help-circle-outline"}}),t._v(" "),a("span",[t._v("Preguntas Frecuentes")])],1)],1),a("hr",{staticClass:"dropdown-divider",attrs:{"aria-role":"menuitem"}}),a("b-dropdown-item",{staticClass:"has-text-danger",attrs:{value:"logout","aria-role":"menuitem"},on:{click:t.logout}},[a("b-icon",{attrs:{size:"is-small",icon:"logout"}}),t._v(" "),a("span",[t._v("Cerrar sesión ")])],1)],1),a("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("router-link",{attrs:{tag:"a",to:"/info"}},[a("b-icon",{attrs:{icon:"information"}})],1)],1)]:a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-primary",attrs:{tag:"a",to:"/register"}},[a("strong",[t._v("Registrarse")])]),a("router-link",{staticClass:"button is-light",attrs:{tag:"a",to:"/login"}},[t._v("Iniciar sesión ")])],1)],2)])])])])}),i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:""}},[a("img",{attrs:{src:"logo_self_service2.png",alt:"ITM"}})]),a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"topNav"}},[a("span"),a("span"),a("span")])])}],o=(a("96cf"),a("1da1")),c=a("5530"),l=a("2f62"),u={data:function(){return{navigation:"home"}},computed:Object(c["a"])({},Object(l["b"])("users",["user","student"])),mounted:function(){var t=document.querySelector(".burger"),e=document.querySelector("#"+t.dataset.target);t.addEventListener("click",(function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")}))},methods:{logout:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("users/logout");case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})))()},show_form:function(t){this.$store.commit("users/SHOW_FORM",t)}}},d=u,m=(a("304c"),a("4e51"),a("2877")),v=Object(m["a"])(d,n,i,!1,null,"c6e71f24",null),g=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("br"),a("a",{attrs:{href:"https://www.itmerida.mx/"}},[a("img",{attrs:{src:"https://www.itmerida.mx/imagenes/tec.png",alt:"Made with Bulma",width:"100"}})]),a("br"),a("strong",[t._v("Servicios Escolares")]),t._v(" del "),a("a",{attrs:{href:"https://www.itmerida.mx/",target:"_blank"}},[t._v(" ITM")]),a("br"),t._v("Av. Tecnológico km. 4.5 S/N C.P. 97118 "),a("br"),t._v("Contacto: "),a("a",{attrs:{href:"mailto:contacto@merida.tecnm.mx"}},[t._v("contacto@merida.tecnm.mx")]),a("br"),t._v("Quejas y Sugerencias: "),a("a",{attrs:{href:"mailto:quejasysugerencias@merida.tecnm.mx"}},[t._v("quejasysugerencias@merida.tecnm.mx ")]),a("br"),t._v("Tel:(999) 964-5000TEST "),a("br"),a("br"),t._v("© 2020 Derechos Reservados ")])])])])])}],p={},h=Object(m["a"])(p,b,f,!1,null,null,null),_=h.exports,w=a("5035"),C=a.n(w),k={components:{AppNav:g,AppFooter:_,Modal:function(){return a.e("chunk-55f62ebe").then(a.bind(null,"fe93"))}},mixins:[C.a]},x=k,$=(a("083a"),Object(m["a"])(x,s,r,!1,null,"56a1f4a9",null));e["default"]=$.exports},dbee:function(t,e,a){},e471:function(t,e,a){}}]);