(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a47fe"],{"0767":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{attrs:{title:"Password Recovery",icon:"lock-open","has-card-header-background":!0,"has-button-slot":!0}},[e("router-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[t._v(" Dashboard ")]),e("form",{attrs:{method:"POST"},on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("b-field",{attrs:{label:"E-mail Address",message:"E-mail used for registration"}},[e("b-input",{attrs:{type:"email",name:"email",required:"",autofocus:""},model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)},expression:"form.email"}})],1),e("hr"),e("b-field",{attrs:{grouped:""}},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Send Reset Link ")])]),e("div",{staticClass:"control"},[e("router-link",{staticClass:"button is-primary is-outlined",attrs:{to:"/login"}},[t._v(" Back ")])],1)])],1)],1)},i=[],n={name:"Login",data:function(){return{isLoading:!1,isSuccess:!1,form:{email:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.form.email=null,t.isLoading=!1,t.isSuccess=!0,t.$buefy.snackbar.open({message:"Link sent",duration:1e3,queue:!1})}),750)}}},o=n,r=e("2877"),l=Object(r["a"])(o,a,i,!1,null,null,null);s["default"]=l.exports}}]);