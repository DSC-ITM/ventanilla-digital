(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf47"],{"841f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section",attrs:{id:"about"}},[s("div",{staticClass:"container has-text-centered"},[s("h2",{staticClass:"title"},[e._v("Cuestionarios")]),e.$store.state.users.isLogued?s("p",[e._v(" Selecciona el cuestionario que deseas contestar ")]):s("p",[e._v("Se requiere una cuenta para contestar los cuestionarios")])]),s("br"),s("div",{staticClass:"columns is-centered"},e._l(e.list,(function(e,t){return s("div",{key:t,staticClass:"column"},[s("PollCard",{attrs:{item:e}})],1)})),0)])},r=[],a=(s("d3b7"),s("96cf"),s("1da1")),i={name:"RequestsInfoQuestionnaires",components:{PollCard:function(){return s.e("chunk-60b7d45d").then(s.bind(null,"5f52"))}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("questionaries/getList",e.listQuery);case 2:s=t.sent,e.list=s.results;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{list:[],listQuery:{}}}},c=i,u=s("2877"),o=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=o.exports}}]);