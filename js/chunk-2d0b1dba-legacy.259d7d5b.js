(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1dba"],{2248:function(e,a,r){"use strict";r.r(a);var n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("p",[e._v("Si ves esto ha ocurrido un error")])},t=[],i=(r("96cf"),r("1da1")),o=r("2612"),c={data:function(){return{isFullPage:!0}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.$store.state.user.isLogued){a.next=4;break}e.$router.push("/home"),a.next=19;break;case 4:return r=e.$buefy.loading.open({container:e.isFullPage?null:e.$refs.element.$el}),n=e.$route.query,a.prev=6,a.next=9,Object(o["a"])(n);case 9:a.sent,e.$buefy.dialog.confirm({title:"Su cuenta ha sido activada",message:"¡Enhorabuena, ahora puede iniciar sesión!",type:"is-success",hasIcon:!0,icon:"check-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0,onConfirm:function(){return e.$router.push("/login")}}),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](6),e.$buefy.dialog.alert({title:"Error",message:"Algo ha salido mal",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0});case 16:return a.prev=16,r.close(),a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[6,13,16,19]])})))()}},s=c,u=r("2877"),l=Object(u["a"])(s,n,t,!1,null,null,null);a["default"]=l.exports}}]);