(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1dba"],{2248:function(e,a,i){"use strict";i.r(a);var t=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("p",[e._v("Si ves esto ha ocurrido un error")])},s=[],o=i("2612"),r={data(){return{isFullPage:!0}},async created(){if(this.$store.state.user.isLogued)this.$router.push("/home");else{const a=this.$buefy.loading.open({container:this.isFullPage?null:this.$refs.element.$el}),i=this.$route.query;try{await Object(o["a"])(i);this.$buefy.dialog.confirm({title:"Su cuenta ha sido activada",message:"¡Enhorabuena, ahora puede iniciar sesión!",type:"is-success",hasIcon:!0,icon:"check-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0,onConfirm:()=>this.$router.push("/login")})}catch(e){this.$buefy.dialog.alert({title:"Error",message:"Algo ha salido mal",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0})}finally{a.close()}}}},l=r,n=i("2877"),c=Object(n["a"])(l,t,s,!1,null,null,null);a["default"]=c.exports}}]);