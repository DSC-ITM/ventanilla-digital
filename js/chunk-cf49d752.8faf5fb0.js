(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf49d752"],{"007b":function(t,s,e){},"5d30":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"card"},[e("img",{attrs:{src:t.request.img}}),e("div",{staticClass:"info"},[e("h1",{staticClass:"tt has-text-light"},[t._v(t._s(t.request.label))]),e("p",{staticClass:"st"},[t._v(" "+t._s(t.request.description)+" ")]),t.$store.state.users.isLogued?e("a",{staticClass:"button mt-2",on:{click:function(s){return t.show_form(!0,t.request.value)}}},[e("strong",[t._v("Solicitar")])]):e("router-link",{staticClass:"button mt-2",attrs:{tag:"a",to:"/info"}},[e("strong",[t._v("Más info.")])])],1)])])},a=[],i={name:"RequestInfoCard",props:{request:Object},methods:{show_form(t,s){this.$store.commit("users/SET_TYPE",s),this.$store.commit("users/SET_STEP",1),this.$store.commit("users/SHOW_FORM",t)}}},o=i,c=(e("c5ba"),e("2877")),n=Object(c["a"])(o,r,a,!1,null,"68513544",null);s["default"]=n.exports},c5ba:function(t,s,e){"use strict";var r=e("007b"),a=e.n(r);a.a}}]);