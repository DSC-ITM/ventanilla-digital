(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1862092c"],{"32a9":function(t,e,a){t.exports=a.p+"img/undraw_back_home_nl5c.7aef980a.svg"},"69fc":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-text-centered"},[t.isInCard?a("card-component",{attrs:{title:"Sample Error",icon:"alert","has-button-slot":!0,"has-card-header-background":!0}},[a("router-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[a("b-icon",{attrs:{icon:"desktop-mac","custom-size":"default"}})],1),a("error-content",{attrs:{title:"Sample Error"},on:{"go-back":t.goBack}})],1):a("error-content",{attrs:{title:"Sample Error"},on:{"go-back":t.goBack}})],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("span",{staticClass:"title big-title"},[t._v("404")]),t._m(1),a("div",{staticClass:"error-page-action"},[a("div",{staticClass:"buttons is-centered"},[a("router-link",{staticClass:"button is-primary",attrs:{type:"button",to:"/"}},[t._v(" Inicio ")]),t._t("buttons")],2)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-page-icon"},[r("img",{attrs:{src:a("32a9"),alt:"Description"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error-page-caption"},[a("p",{staticClass:"title"},[t._v("¿Mirando hacia el futuro?")]),a("p",{staticClass:"subtitle"},[a("br"),t._v(" La página que estás buscando aún "),a("br"),t._v(" no existe pero puedes volver al inicio ")])])}],i={name:"ErrorContent",props:{icon:{type:String,default:"power-plug"},title:{type:String,default:"Error"}},methods:{emitGoBack(){this.$emit("go-back")}}},c=i,l=(a("9ba0"),a("2877")),u=Object(l["a"])(c,o,n,!1,null,"5f188e96",null),p=u.exports,d={name:"Error",components:{ErrorContent:p},props:{isInCard:{type:Boolean,default:!0}},methods:{goBack(){this.$router.go(-1)}}},b=d,m=Object(l["a"])(b,r,s,!1,null,null,null);e["default"]=m.exports},"8a40":function(t,e,a){},"9ba0":function(t,e,a){"use strict";var r=a("8a40"),s=a.n(r);s.a}}]);