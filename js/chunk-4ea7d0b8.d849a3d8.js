(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea7d0b8"],{3965:function(e,n,a){"use strict";var o=a("75eb"),r=a.n(o);r.a},"75eb":function(e,n,a){e.exports={font_family:'"Nunito",sans-serif',primary:"maroon",link_color:"#d9ad26",background_color:"#fff"}},"8cb2":function(e,n,a){"use strict";a.r(n);var o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("nav-bar",{attrs:{username:e.user.first_name,profileLink:"/aprofile"}}),a("aside-menu",{class:{"has-secondary":!!e.menuSecondary},attrs:{menu:e.menu,"menu-bottom":e.menuBottom},on:{"menu-click":e.menuClick}}),e.menuSecondary?a("aside-menu",{attrs:{menu:e.menuSecondary,"is-secondary":!0,label:e.menuSecondaryLabel,icon:e.menuSecondaryIcon},on:{"menu-click":e.menuClick,close:e.menuSecondaryCloseClick}}):e._e(),a("router-view"),a("aside-right"),a("footer-bar"),a("overlay")],1)},r=[],i=a("2f62"),t=["Ventanilla digital",[{to:"/",label:"Inicio",icon:"home"},{to:"/dashboard",icon:"view-dashboard",label:"Panel de control"},{to:"/aprofile",label:"Perfil",icon:"account"}],"Enlaces útiles",[{href:"https://www.itmerida.mx",label:"ITMerida",icon:"web"}]],c=a("29bb"),l={name:"App",mixins:[c["a"]],data(){return{menuList:t}},computed:{...Object(i["b"])("users",["user"])}},s=l,u=(a("3965"),a("2877")),m=Object(u["a"])(s,o,r,!1,null,null,null);n["default"]=m.exports}}]);