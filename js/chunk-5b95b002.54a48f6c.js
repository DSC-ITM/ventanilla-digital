(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b95b002"],{"0db2":function(t,s,a){"use strict";var e=a("9bd1"),i=a.n(e);i.a},1671:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.student}}),a("Modal"),a("section",{staticClass:"section"},[a("div",{staticClass:"tabs is-boxed is-centered main-menu",attrs:{id:"nav"}},[a("ul",[a("li",{class:{"is-active":"PENDING"===t.currentTab},attrs:{"data-target":"pane-2",id:"2"},on:{click:function(s){t.currentTab="PENDING"}}},[a("a",[a("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),a("span",[t._v("Pendientes")])],1)]),a("li",{class:{"is-active":"READY"===t.currentTab},attrs:{"data-target":"pane-1",id:"1"},on:{click:function(s){t.currentTab="READY"}}},[a("a",[a("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),a("span",[t._v("Listas")])],1)]),a("li",{class:{"is-active":"ARCHIVED"===t.currentTab},attrs:{"data-target":"pane-3",id:"3"},on:{click:function(s){t.currentTab="ARCHIVED"}}},[a("a",[a("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),a("span",[t._v("Archivadas")])],1)])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("div",{staticClass:"box content"},[t.requests.filter((function(s){return s.status===t.currentTab}))<=0?a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"alert","custom-size":"default"}}),t._v(" "),a("b",[t._v("Aún no tienes solicitudes "+t._s(t.status[t.currentTab]+"S"))]),t._v(" Cuando tengas alguna aparecerá aquí. ")],1)]):a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"checkbox-marked-circle","custom-size":"default"}}),t._v(" "),a("b",[t._v("¡Hola!")]),t._v(" Aquí podrás ver tus solicitudes "+t._s(t.status[t.currentTab]+"S")+" ")],1)]),t._l(t.requests.filter((function(s){return s.status===t.currentTab})),(function(s){return a("article",{key:s.uuid,staticClass:"post"},["IMSS"==s.type?a("h4",[t._v(t._s(s.description)+" "+t._s(s.type))]):a("h4",[t._v(t._s(s.type)+" "+t._s(s.description))]),a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[t._v(" Solicitado hace "+t._s(t._f("timeSince")(s.date))+" "),a("span",{staticClass:"tag",class:t.requests_types[s.status]},[t._v(t._s(t.status[s.status]))])])])]),a("div",{staticClass:"media-right"},[s.photo?a("span",{staticClass:"tag"},[t._v("FOTO")]):t._e()]),a("div",{staticClass:"media-right"},[s.INE?a("span",{staticClass:"tag"},[t._v("INE")]):t._e()])])])}))],2)])])])],1)},i=[],n=a("2f62"),o=a("f755"),c=a("6636"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Solicitudes",icon:"file-check","has-button-slot":!0}},[a("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[a("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" Pendientes ")]),a("button",{staticClass:"button"},[t._v("Archivadas")])]),a("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[a("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!1,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[a("b-table-column",{attrs:{label:"Fecha",field:"date",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(new Date(s.row.date).toLocaleDateString())+" ")]}}])}),a("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("article",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(s.row.type))]),t._v(" "),a("br"),a("small",[t._v(" "+t._s(s.row.description))])])])])])]}}])}),a("b-table-column",{attrs:{label:"Estado",field:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[a("span",{staticClass:"tag is-warning"},[t._v(" "+t._s(s.row.status)+" ")])]}}])}),a("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:s.row.id}}}},[a("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.trashModal(s.row)}}},[a("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[t._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[t._v("Nothing's here…")])]],2)])],1)],1)},l=[],u=a("7698"),d=a("72d0"),b={name:"ClientsTableSample",components:{ModalBox:d["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const s=await Object(u["b"])(this.listQuery);console.log(s),this.isLoading=!1,this.clients=s.results,this.total=s.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},h=b,p=(a("0db2"),a("2877")),m=Object(p["a"])(h,r,l,!1,null,null,null),f=m.exports,v=a("762d"),g=a("6ffa"),C={name:"Profile",components:{Modal:()=>a.e("chunk-14160ea8").then(a.bind(null,"fe93")),ClientsTableSample:f,LineChart:c["a"]},data(){return{currentTab:"PENDING",defaultChart:{chartData:null,extraOptions:o["b"]},requests:[],status:g["b"],requests_types:g["a"]}},computed:{titleStack(){return["Admin","Dashboard"]},...Object(n["b"])("users",["user","student"])},mounted(){this.getData(),this.$buefy.snackbar.open({message:"Bienvenido de nuevo",position:"is-bottom",queue:!1})},methods:{async getData(){try{const t=await Object(v["c"])();t.results&&(this.requests=t.results)}catch(t){}},randomChartData(t){}}},_=C,y=(a("1a6b"),Object(p["a"])(_,e,i,!1,null,null,null));s["default"]=y.exports},"1a6b":function(t,s,a){"use strict";var e=a("8d87"),i=a.n(e);i.a},"8d87":function(t,s,a){},"9bd1":function(t,s,a){}}]);