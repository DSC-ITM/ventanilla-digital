(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3e69"],{"03c3":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"has-text-centered"},[t.isInCard?o("card-component",{attrs:{title:"Sample Error",icon:"alert","has-button-slot":!0,"has-card-header-background":!0}},[o("router-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[o("b-icon",{attrs:{icon:"desktop-mac","custom-size":"default"}})],1),o("error-content",{attrs:{title:"Sample Error"},on:{"go-back":t.goBack}})],1):o("error-content",{attrs:{title:"Sample Error"},on:{"go-back":t.goBack}})],1)},a=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"error-page-icon"},[o("b-icon",{attrs:{icon:"power-plug","custom-size":"default"}})],1),t._m(0),o("div",{staticClass:"error-page-action"},[o("div",{staticClass:"buttons is-centered"},[o("button",{staticClass:"button is-black",attrs:{type:"button"},on:{click:t.emitGoBack}},[t._v(" Go Back ")]),t._t("buttons")],2)])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"error-page-caption"},[o("h1",[t._v("Sample error")])])}],c={name:"ErrorContent",props:{icon:{type:String,default:"power-plug"},title:{type:String,default:"Error"}},methods:{emitGoBack:function(){this.$emit("go-back")}}},i=c,l=o("2877"),u=Object(l["a"])(i,n,s,!1,null,null,null),p=u.exports,d={name:"Error",components:{ErrorContent:p},props:{isInCard:{type:Boolean,default:!0}},methods:{goBack:function(){this.$router.go(-1)}}},m=d,b=Object(l["a"])(m,r,a,!1,null,null,null);e["default"]=b.exports}}]);