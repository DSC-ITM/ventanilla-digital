(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables"],{"2b9d":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},e=[],o={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},l=o,n=a("2877"),c=Object(n["a"])(l,i,e,!1,null,null,null);s["a"]=c.exports},8840:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("hero-bar",[t._v(" Tables "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table. ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients",icon:"account-multiple"}},[a("refresh-button",{attrs:{slot:"button"},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v("Active")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("Recent")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("Archived")])]),a("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Sample field..."}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"dots-horizontal","custom-size":"default"}})],1)])])])]),a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes card header ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Empty table.")]),t._v(" When there's nothing to show ")],1)]),a("card-component",{staticClass:"has-table has-thead-hidden"},[a("clients-table-sample")],1)],1)],1)},e=[],o=a("2b9d"),l=a("7080"),n={name:"Tables",components:{ClientsTableSample:l["a"],Notification:o["a"]},computed:{titleStack:function(){return["Admin","Tables"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},c=n,r=a("2877"),u=Object(r["a"])(c,i,e,!1,null,null,null);s["default"]=u.exports}}]);