(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c356f4"],{1017:function(e,s,a){"use strict";const t={data:()=>({redirect:void 0,otherQuery:{}}),watch:{$route:{handler:function(e){const s=e.query;s&&(this.redirect=s.redirect,this.otherQuery=this.getOtherQuery(s))},immediate:!0}},methods:{getOtherQuery(e){return Object.keys(e).reduce((s,a)=>("redirect"!==a&&(s[a]=e[a]),s),{})}}};s["a"]=t},3320:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"hero is-fullheight",style:"background: url("+e.$store.getters.background_image+") no-repeat 50% fixed; background-size: cover;"},[a("div",{staticClass:"hero-body",staticStyle:{"justify-content":"center"}},[a("div",{staticClass:"container is-max-desktop register"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column left has-text-centered is-hidden-mobile"},[a("h1",{staticClass:"title is-2"},[e._v("Ventanilla Digital")]),a("h2",{staticClass:"subtitle colored is-3"},[e._v(" Trámites electrónicos para el ITM. ")]),e._m(0),a("br"),a("router-link",{staticClass:"notification",attrs:{tag:"img",src:"https://www.itmerida.mx/imagenes/tec.png",width:"200px",alt:"Logo",to:"/"}})],1),a("div",{staticClass:"column right"},[a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title is-4"},[e._v("Regístrate ahora!")]),e.rol&&"STUDENT"===e.rol.value?a("p",{staticClass:"description"},[e._v(" El usuario es necesario para acceder a los trámites en línea ")]):e.rol&&"EMPLOYEE"===e.rol.value?a("p",{staticClass:"description"},[e._v(" El usuario es necesario para acceder a los cuestionarios en línea ")]):a("p",{staticClass:"description"},[e._v(" Selecciona tu ocupación en la institución ")])]),e.rol?[a("div",{staticClass:"box",staticStyle:{heigth:"50px"}},[a("article",{staticClass:"media va"},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-5"},[e._v(e._s(e.rol.label))]),a("a",{on:{click:function(s){e.rol=null}}},[a("b-icon",{attrs:{size:"is-small",icon:"chevron-left"}}),e._v("Regresar")],1)]),a("div",{staticClass:"media-content"}),a("figure",{staticClass:"media-right"},[a("p",{staticClass:"image is-64x64"},[a("img",{attrs:{src:e.rol.icon,alt:""}})])])])]),a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(s){var t=s.handleSubmit;return[a("form",{staticClass:"has-text-left",on:{submit:!1}},[a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Nombre(s)",rules:"required",type:"text",name:"fullname",placeholder:"Nombre(s)",margin:"mb-5"},model:{value:e.user.full_name,callback:function(s){e.$set(e.user,"full_name",s)},expression:"user.full_name"}}),a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Primer apellido",rules:"required",type:"text",name:"first_lastname",placeholder:"Primer apellido",margin:"mb-5"},model:{value:e.user.first_lastname,callback:function(s){e.$set(e.user,"first_lastname",s)},expression:"user.first_lastname"}}),a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Segundo apellido",rules:"required",type:"text",name:"second_lastname",placeholder:"Segundo apellido",margin:"mb-5"},model:{value:e.user.second_lastname,callback:function(s){e.$set(e.user,"second_lastname",s)},expression:"user.second_lastname"}}),[e.rol&&"STUDENT"===e.rol.value?a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Correo institucional",rules:"required|email|email-edu",type:"email",name:"email",placeholder:"Correo institucional",margin:"mb-5"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}):e.rol&&"EMPLOYEE"===e.rol.value?a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Correo institucional",rules:"required|email|email-tec",type:"email",name:"email",placeholder:"Correo institucional",margin:"mb-5"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}):e._e()],a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Contraseña",rules:"required|password","data-vv-as":"field",name:"password",type:"password",placeholder:"Contraseña","password-reveal":"",vid:"password",margin:"mb-5"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),a("BInputWithValidation",{attrs:{"label-position":"on-border",label:"Confirmar contraseña",rules:"required|confirmed:password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(s){e.$set(e.user,"password_confirm",s)},expression:"user.password_confirm"}}),a("hr"),a("b-field",[a("button",{staticClass:"button is-block is-primary is-fullwidth",class:{"is-loading":e.isLoading},on:{click:function(s){return s.preventDefault(),t(e.signup)}}},[e._v(" Registrarse ")])]),a("p",{staticClass:"has-text-black legend"},[e._v(" ¿Ya tienes una cuenta? · "),a("router-link",{attrs:{tag:"a",to:"/login"}},[e._v("Iniciar sesión")])],1)],2)]}}])})]:[a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-vertical is-12"},[a("div",{staticClass:"tile"},[a("div",{staticClass:"tile is-parent is-vertical"},e._l(e.roles,(function(s,t){return a("div",{key:t,staticClass:"tile is-child notification box dgw-option"},[a("article",{staticClass:"media mt-3 is-hidden-mobile",on:{click:function(a){e.rol=s}}},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-4"},[e._v(e._s(s.label))]),a("p",{staticClass:"subtitle is-6 mt-1"},[e._v(" "+e._s(s.req)+" ")])]),a("div",{staticClass:"media-content"}),a("figure",{staticClass:"media-right"},[a("p",{staticClass:"image is-128x128"},[a("img",{attrs:{src:s.icon,alt:""}})])])]),a("article",{staticClass:"media mt-3 is-hidden-desktop",on:{click:function(a){e.rol=s}}},[a("div",{staticClass:"content"},[a("p",{staticClass:"title is-5"},[e._v(e._s(s.label))]),a("p",{staticClass:"subtitle is-6 mt-1"},[e._v(" "+e._s(s.req)+" ")])]),a("div",{staticClass:"media-content"})]),a("figure",{staticClass:"media-right is-hidden-desktop"},[a("p",{staticClass:"image is-64x64"},[a("img",{attrs:{src:s.icon,alt:""}})])])])})),0)])])]),a("p",{staticClass:"has-text-black legend"},[e._v(" ¿Ya tienes una cuenta? · "),a("router-link",{attrs:{tag:"a",to:"/login"}},[e._v("Iniciar sesión")])],1)]],2)])])])])},i=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("p",[e._v(" Esta es una plataforma para solicitar a distancia los trámites de control escolar y ayudar contra el "),a("b",[e._v("covid-19")]),e._v(". ")])}],r=(a("ddb0"),a("2612")),l=a("1017"),o={mixins:[l["a"]],data(){return{user:{full_name:"",first_lastname:"",second_lastname:"",occupation:"",email:"",password:"",password_confirm:""},rol:null,isLoading:!1}},computed:{roles(){const e={STUDENT:{label:"Soy Estudiante",value:"STUDENT",req:"Accede a trámites y cuestionarios.",icon:a("c116")},EMPLOYEE:{label:"Soy Docente / Trabajador",value:"EMPLOYEE",req:"Accede a cuestionarios.",icon:a("fb41")}};return e}},methods:{translate(e){"This password is too common."===e?this.$dw.messages.errorSnackbar("La contraseña ingresada es muy común."):"This password is entirely numeric."===e?this.$dw.messages.errorSnackbar("Esta contraseña es totalmente numérica."):this.$dw.messages.errorSnackbar(e)},async signup(){this.isLoading=!0;try{this.user.occupation=this.rol.value,this.user.email=this.user.email.toLowerCase();const e=await Object(r["g"])(this.user);console.log(e),this.$buefy.dialog.alert({title:"¡Ya casi!",message:"Por favor checa tu correo para confirmar tu cuenta",type:"is-success",hasIcon:!0,icon:"check-circle",ariaRole:"alertdialog",ariaModal:!0}),this.$router.push("/")}catch(e){if(console.log(e),e.password)for(const s of e.password)this.translate(s);else e.email?this.$dw.messages.errorSnackbar("Ya existe una cuenta activa con el correo ingresado"):this.$dw.messages.errorSnackbar("Algo salió mal")}finally{this.isLoading=!1}}}},n=o,c=(a("cf9f"),a("2877")),u=Object(c["a"])(n,t,i,!1,null,"7e8ccb72",null);s["default"]=u.exports},c116:function(e,s,a){e.exports=a.p+"img/undraw_exams_g4ow.d16dc784.svg"},cf9f:function(e,s,a){"use strict";var t=a("fcca"),i=a.n(t);i.a},fb41:function(e,s,a){e.exports=a.p+"img/undraw_teaching_f1cm.affbab1f.svg"},fcca:function(e,s,a){}}]);