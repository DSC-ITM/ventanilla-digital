(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbe596ea"],{"0d96":function(e,n,t){"use strict";var a=t("4c85"),i=t.n(a);i.a},"4c85":function(e,n,t){e.exports={font_family:'"Nunito",sans-serif',primary:"maroon",link_color:"#d9ad26",background_color:"#fff"}},"7b3d":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav-bar",{attrs:{username:e.studentForm.enrollment?e.studentForm.enrollment:e.user.first_name,profileLink:"/profile",admin:!1}}),t("aside-menu",{class:{"has-secondary":!!e.menuSecondary},attrs:{menu:e.menu,"menu-bottom":e.menuBottom},on:{"menu-click":e.menuClick}}),e.menuSecondary?t("aside-menu",{attrs:{menu:e.menuSecondary,"is-secondary":!0,label:e.menuSecondaryLabel,icon:e.menuSecondaryIcon},on:{"menu-click":e.menuClick,close:e.menuSecondaryCloseClick}}):e._e(),t("router-view"),t("aside-right"),t("footer-bar"),t("overlay")],1)},i=[],o=t("2f62"),c=["Ventanilla digital",[{to:"/",label:"Inicio",icon:"home"},{to:"/profile",icon:"account",label:"Perfil"},{to:"/medical",icon:"medical-bag",label:"Enfermería"}],"Enlaces útiles",[{href:"https://www.itmerida.mx",label:"ITMerida",icon:"web"},{href:"https://itmerida.net/ss/Home.aspx",label:"Portal Académico",icon:"earth"},{href:"https://itmerida.brightspace.com/",label:"Brightspace",icon:"cast-education"}],"Información",[{to:"/info",label:"FAQ",icon:"help-circle-outline"}]],r=["Ventanilla digital",[{to:"/",label:"Inicio",icon:"home"}],"Enlaces útiles",[{href:"https://www.itmerida.mx",label:"ITMerida",icon:"web"},{href:"https://itmerida.net/ss/Home.aspx",label:"Portal Académico",icon:"school"},{href:"https://itmerida.brightspace.com/",label:"Brightspace",icon:"cast-education"}],"Información",[{to:"/info",label:"FAQ",icon:"help-circle-outline"}]],l=t("29bb"),s={name:"App",mixins:[l["a"]],data(){return{menuList:c,menuListPublic:r}},computed:{...Object(o["b"])("users",["user"]),...Object(o["b"])("students",["studentForm"])}},m=s,u=(t("f70f"),t("0d96"),t("2877")),d=Object(u["a"])(m,a,i,!1,null,null,null);n["default"]=d.exports},f70f:function(e,n,t){"use strict";var a=t("fb80"),i=t.n(a);i.a},fb80:function(e,n,t){}}]);