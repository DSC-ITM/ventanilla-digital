(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3120cbfe"],{"054d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body has-text-centered",staticStyle:{"justify-content":"center"}},[s("div",{staticClass:"login"},[s("div",{staticClass:"box"},[s("h1",[t._v("Ventanilla Digital")]),s("figure",{staticClass:"avatar"},[s("router-link",{staticClass:"notification",attrs:{tag:"img",src:"https://www.itmerida.mx/imagenes/tec.png",width:"125px",alt:"Logo",to:"/home"}})],1),s("form",[s("b-field",[s("b-input",{attrs:{placeholder:"Correo",type:"email",icon:"account",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),s("b-field",[s("b-input",{attrs:{required:"",type:"password",placeholder:"Contraseña","password-reveal":"",icon:"lock"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._m(0),s("button",{staticClass:"button is-block is-info is-large is-fullwidth",class:{"is-loading":t.isLoading},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v(" Iniciar sesión "),s("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}})])],1)]),s("p",{staticClass:"has-text-black"},[t._v(" ¿No tienes una cuenta? · "),s("router-link",{attrs:{tag:"a",to:"/register"}},[t._v("Regístrate")])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v(" Recuérdame ")])])}],r=s("1017"),n={mixins:[r["a"]],data(){return{user:{email:"",password:""},message:"",isLoading:!1}},methods:{async submit(){this.isLoading=!0;try{await this.$store.dispatch("users/login",this.user),this.$router.push({path:this.redirect||"/",query:this.otherQuery})}catch(t){t.detail}finally{this.isLoading=!1}}}},c=n,o=(s("24a1"),s("2877")),u=Object(o["a"])(c,i,a,!1,null,"ac179dee",null);e["default"]=u.exports},1017:function(t,e,s){"use strict";const i={data:()=>({redirect:void 0,otherQuery:{}}),watch:{$route:{handler:function(t){const e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},methods:{getOtherQuery(t){return Object.keys(t).reduce((e,s)=>("redirect"!==s&&(e[s]=t[s]),e),{})}}};e["a"]=i},"24a1":function(t,e,s){"use strict";var i=s("4bdc"),a=s.n(i);a.a},"4bdc":function(t,e,s){}}]);