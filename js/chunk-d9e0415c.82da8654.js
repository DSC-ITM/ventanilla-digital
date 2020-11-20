(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9e0415c"],{1017:function(s,e,t){"use strict";const a={data:()=>({redirect:void 0,otherQuery:{}}),watch:{$route:{handler:function(s){const e=s.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},methods:{getOtherQuery(s){return Object.keys(s).reduce((e,t)=>("redirect"!==t&&(e[t]=s[t]),e),{})}}};e["a"]=a},3320:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",{staticClass:"container"},[t("div",{staticClass:"columns is-multiline"},[t("div",{staticClass:"column is-8 is-offset-2 register"},[t("div",{staticClass:"columns"},[s._m(0),t("div",{staticClass:"column right"},[s._m(1),t("ValidationObserver",{ref:"observer",scopedSlots:s._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[t("form",{on:{submit:!1}},[t("b-field",[t("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:s.user.first_name,callback:function(e){s.$set(s.user,"first_name",e)},expression:"user.first_name"}})],1),t("b-field",[t("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellido(s)"},model:{value:s.user.last_name,callback:function(e){s.$set(s.user,"last_name",e)},expression:"user.last_name"}})],1),t("b-field",[t("BInputWithValidation",{attrs:{rules:"required|email|email-edu",type:"email",placeholder:"Correo institucional"},model:{value:s.user.email,callback:function(e){s.$set(s.user,"email",e)},expression:"user.email"}})],1),t("b-field",[t("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña","password-reveal":"",vid:"password"},model:{value:s.user.password,callback:function(e){s.$set(s.user,"password",e)},expression:"user.password"}})],1),t("b-field",[t("BInputWithValidation",{attrs:{rules:"required|confirmed:password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:s.user.password_confirm,callback:function(e){s.$set(s.user,"password_confirm",e)},expression:"user.password_confirm"}})],1),t("button",{staticClass:"button is-block is-primary is-fullwidth",class:{"is-loading":s.isLoading},on:{click:function(e){e.preventDefault(),s.signup,a(s.signup)}}},[s._v(" Registrarse ")]),t("br"),t("small",[t("em",[s._v("¿Ya tienes una cuenta?")]),t("router-link",{attrs:{tag:"a",to:"/login"}},[s._v(" Iniciar sesión")])],1)],1)]}}])})],1)])]),s._m(2)])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column left is-hidden-touch"},[t("h1",{staticClass:"title is-1"},[s._v("Ventanilla Digital")]),t("h2",{staticClass:"subtitle colored is-4"},[s._v(" Trámites electrónicos para el ITM. ")]),t("p",[s._v(" Esta es una plataforma para solicitar a distancia los trámites de control escolar y ayudar contra el "),t("b",[s._v("covid-19")]),s._v(". ")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"has-text-centered"},[t("h1",{staticClass:"title is-4"},[s._v("Registrate ahora!")]),t("p",{staticClass:"description"},[s._v(" El usuario es necesario para acceder a los trámites en línea ")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-8 is-offset-2"},[t("br"),t("nav",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-twitter"})]),s._v(" "),t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-facebook"})]),s._v(" "),t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-instagram"})]),s._v(" "),t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-github"})]),s._v(" "),t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-envelope"})])])])])])}],r=(t("ddb0"),t("2612")),l=t("1017"),o={mixins:[l["a"]],data(){return{user:{first_name:"",last_name:"",email:"",password:"",password_confirm:""},isLoading:!1}},methods:{alertCustomError(s){this.$buefy.snackbar.open({message:s,type:"is-danger",position:"is-bottom-left",actionText:"OK",queue:!1})},async signup(){this.isLoading=!0;try{const s=await Object(r["g"])(this.user);console.log(s),this.$buefy.dialog.alert({title:"¡Ya casi!",message:"Por favor checa tu correo para confirmar tu cuenta",type:"is-success",hasIcon:!0,icon:"check-circle",ariaRole:"alertdialog",ariaModal:!0}),await this.$router.push("/home")}catch(s){if(console.log(s),s.password)for(const e of s.password)this.alertCustomError(e);else for(const e of Object.values(s))this.alertCustomError(e[0])}finally{this.isLoading=!1}}}},n=o,c=(t("b62c"),t("2877")),u=Object(c["a"])(n,a,i,!1,null,null,null);e["default"]=u.exports},"42f0":function(s,e,t){},b62c:function(s,e,t){"use strict";var a=t("42f0"),i=t.n(a);i.a}}]);