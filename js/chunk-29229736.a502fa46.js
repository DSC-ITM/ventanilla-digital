(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29229736"],{1017:function(t,e,s){"use strict";const r={data:()=>({redirect:void 0,otherQuery:{}}),watch:{$route:{handler:function(t){const e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},methods:{getOtherQuery(t){return Object.keys(t).reduce((e,s)=>("redirect"!==s&&(e[s]=t[s]),e),{})}}};e["a"]=r},"3b8a":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{attrs:{title:"Iniciar sesión",icon:"lock","has-card-header-background":!0,"has-button-slot":!0}},[s("figure",{staticClass:"avatar",attrs:{slot:"button"},slot:"button"},[s("router-link",{staticClass:"notification",attrs:{tag:"img",src:"https://www.itmerida.mx/imagenes/tec.png",width:"90px",alt:"Logo",to:"/home"}})],1),s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("b-field",{attrs:{label:"Correo"}},[s("b-input",{attrs:{name:"email",type:"email",required:"",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-field",{attrs:{label:"Contraseña"}},[s("b-input",{attrs:{type:"password",name:"password","password-reveal":"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("b-field",[s("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"}},[t._v(" Recuérdame ")])],1),s("hr"),s("b-field",[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Iniciar sesión ")])])])],1)])},a=[],i=s("1017"),o={name:"Login",mixins:[i["a"]],data(){return{isLoading:!1,form:{username:"",password:"",remember:!1}}},methods:{async submit(){this.isLoading=!0;await this.$store.dispatch("users/login",this.form);this.$router.push({path:this.redirect||"/dashboard",query:this.otherQuery}),this.isLoading=!1}}},n=o,u=s("2877"),c=Object(u["a"])(n,r,a,!1,null,null,null);e["default"]=c.exports}}]);