(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e33b2ca"],{8716:function(a,t,s){"use strict";var i=s("bf78"),e=s.n(i);e.a},bf78:function(a,t,s){},f6e5:function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("b-modal",{attrs:{"has-modal-card":"","full-screen":""},model:{value:a.isComponentModalActive,callback:function(t){a.isComponentModalActive=t},expression:"isComponentModalActive"}},[s("section",{staticClass:"modal-card"},[s("div",{staticClass:"modal-card-body box"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"},[s("b-button",{attrs:{type:"is-danger","icon-left":"arrow-left"},on:{click:function(t){a.isComponentModalActive=!1}}},[a._v(" Cancelar ")])],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column has-text-centered"},[s("b-icon",{attrs:{icon:"circle-edit-outline",size:"is-large",type:"is-dark"}}),s("h1",{staticClass:"title"},[a._v(" Editar avatar ")]),s("p",{staticClass:"subtitle"},[a._v(" Selecciona un avatar para tu perfil ")])],1)]),s("b-steps",{attrs:{"has-navigation":!1},model:{value:a.step,callback:function(t){a.step=t},expression:"step"}},[s("b-step-item",{attrs:{label:"Tipo de avatar",icon:"account"}},[s("div",{staticClass:"notification is-dark"},[s("h1",{staticClass:"title columns"},[a._v(" Elige un tipo de avatar ")])]),s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-3"},[s("div",{on:{click:function(t){return a.first("persona")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/avataaars/exampsd.svg",alt:"A random image",ratio:"1by1"}})],1)]),s("div",{staticClass:"column is-3"},[s("div",{on:{click:function(t){return a.first("robot")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/bottts/3434fr.svg",alt:"A random image",ratio:"1by1"}})],1)]),s("div",{staticClass:"column is-3"},[s("div",{on:{click:function(t){return a.first("gridy")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/gridy/gregdf.svg",alt:"A random image",ratio:"1by1"}})],1)]),s("div",{staticClass:"column is-3"},[s("div",{on:{click:function(t){return a.first("pixel")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/human/fdfrge.svg",alt:"A random image",ratio:"1by1"}})],1)])])]),s("b-step-item",{attrs:{label:"Elige un avatar",icon:"account-search"}},["persona"==a.avatarType?[s("div",{staticClass:"notification is-dark"},[s("h1",{staticClass:"title columns"},[a._v(" Personas ")])]),s("div",{staticClass:"columns is-multiline"},a._l(120,(function(t){return s("div",{key:t,staticClass:"column is-2"},[s("div",{on:{click:function(s){return a.second("https://avatars.dicebear.com/api/avataaars/"+(t+2343)+".svg?style=circle")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/avataaars/"+(t+2343)+".svg?style=circle",alt:"A random image",ratio:"1by1"}})],1)])})),0)]:a._e(),"robot"==a.avatarType?[s("div",{staticClass:"notification is-dark mt-5"},[s("h1",{staticClass:"title columns"},[a._v(" Robots ")])]),s("div",{staticClass:"columns is-multiline"},a._l(120,(function(t){return s("div",{key:t,staticClass:"column is-2"},[s("div",{on:{click:function(s){return a.second("https://avatars.dicebear.com/api/bottts/"+(t+2343)+".svg")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/bottts/"+(t+2343)+".svg",alt:"A random image",ratio:"1by1"}})],1)])})),0)]:a._e(),"gridy"==a.avatarType?[s("div",{staticClass:"notification is-dark mt-5"},[s("h1",{staticClass:"title columns"},[a._v(" Formas ")])]),s("div",{staticClass:"columns is-multiline"},a._l(120,(function(t){return s("div",{key:t,staticClass:"column is-2"},[s("div",{on:{click:function(s){return a.second("https://avatars.dicebear.com/api/gridy/"+(t+2343)+".svg")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/gridy/"+(t+2343)+".svg",alt:"A random image",ratio:"1by1"}})],1)])})),0)]:a._e(),"pixel"==a.avatarType?[s("div",{staticClass:"notification is-dark mt-5"},[s("h1",{staticClass:"title columns"},[a._v(" Pixeleados ")])]),s("div",{staticClass:"columns is-multiline"},a._l(120,(function(t){return s("div",{key:t,staticClass:"column is-2"},[s("div",{on:{click:function(s){return a.second("https://avatars.dicebear.com/api/human/"+(t+2343)+".svg")}}},[s("b-image",{staticClass:"avatar",attrs:{src:"https://avatars.dicebear.com/api/human/"+(t+2343)+".svg",alt:"A random image",ratio:"1by1"}})],1)])})),0)]:a._e()],2),s("b-step-item",{attrs:{label:"¡Listo!",icon:"account-check"}},[s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h1",{staticClass:"title has-text-centered mt-5"},[a._v(" Avatar seleccionado ")]),s("p",{staticClass:"subtitle has-text-centered"},[a._v(" Da click en el avatar para confirmarlo ")]),s("div",{on:{click:function(t){return a.submit()}}},[s("b-image",{staticClass:"avatar",attrs:{src:a.selected,alt:"A random image",ratio:"1by1"}})],1)])])])],1)],1)])])])])},e=[],c={props:{user:Object,form:{type:Object,default:{}}},data(){return{isComponentModalActive:!1,avatarType:"",step:0,selected:""}},methods:{toggleModal(){this.step=0,this.avatarType="",this.isComponentModalActive=!this.isComponentModalActive},first(a){this.avatarType=a,this.step+=1},second(a){this.selected=a,this.step+=1},async submit(){this.user.avatar=this.selected;var a=this.user;try{await this.$store.dispatch("users/update",{user:a}),this.toggleModal(),this.form.avatar=this.user.avatar,this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(t){this.$buefy.snackbar.open({message:"Algo salió mal",queue:!1})}}}},r=c,o=(s("8716"),s("2877")),n=Object(o["a"])(r,i,e,!1,null,"423e22f4",null);t["default"]=n.exports}}]);