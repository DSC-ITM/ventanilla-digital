(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-020c6808"],{"0db2":function(t,s,a){"use strict";var e=a("9bd1"),i=a.n(e);i.a},7080:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Solicitudes",icon:"file-check","has-button-slot":!0}},[a("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" Pendientes ")]),a("button",{staticClass:"button"},[t._v("Archivadas")])]),a("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!1,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[a("b-table-column",{attrs:{label:"Fecha",field:"date",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(new Date(s.row.date).toLocaleDateString())+" ")]}}])}),a("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("article",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(s.row.type))]),t._v(" "),a("br"),a("small",[t._v(" "+t._s(s.row.description))])])])])])]}}])}),a("b-table-column",{attrs:{label:"Estado",field:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("span",{staticClass:"tag is-warning"},[t._v(" "+t._s(s.row.status)+" ")])]}}])}),a("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:s.row.id}}}},[a("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(s.row)}}},[a("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[t._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])]],2)])],1)],1)},i=[],o=a("7698"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(s){t.isModalActive=s}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},l=[],c={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isModalActive:!1}},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}},watch:{isActive(t){this.isModalActive=t},isModalActive(t){t||this.cancel()}}},r=c,u=a("2877"),d=Object(u["a"])(r,n,l,!1,null,null,null),b=d.exports,h={name:"ClientsTableSample",components:{ModalBox:b},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const s=await Object(o["b"])(this.listQuery);console.log(s),this.isLoading=!1,this.clients=s.results,this.total=s.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},m=h,p=(a("0db2"),Object(u["a"])(m,e,i,!1,null,null,null));s["a"]=p.exports},7698:function(t,s,a){"use strict";a.d(s,"b",(function(){return i})),a.d(s,"a",(function(){return o}));var e=a("a27e");function i(t){return Object(e["a"])({url:"/requests/",method:"GET",params:t})}function o(t){return Object(e["a"])({url:"/requests/",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:t})}},8840:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("hero-bar",[t._v(" Tables "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table. ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients",icon:"account-multiple"}},[a("refresh-button",{attrs:{slot:"button"},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v("Active")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("Recent")]),a("button",{staticClass:"button",attrs:{disabled:""}},[t._v("Archived")])]),a("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Sample field..."}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"dots-horizontal","custom-size":"default"}})],1)])])])]),a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes card header ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-info"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Empty table.")]),t._v(" When there's nothing to show ")],1)]),a("card-component",{staticClass:"has-table has-thead-hidden"},[a("clients-table-sample")],1)],1)],1)},i=[],o=a("7080"),n={name:"Tables",components:{ClientsTableSample:o["a"]},computed:{titleStack(){return["Admin","Tables"]}},methods:{actionSample(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},l=n,c=a("2877"),r=Object(c["a"])(l,e,i,!1,null,null,null);s["default"]=r.exports},"9bd1":function(t,s,a){}}]);