(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215b2a22"],{"0db2":function(t,s,e){"use strict";var a=e("9bd1"),i=e.n(a);i.a},1671:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.user.student||{}}}),e("Modal"),e("section",{staticClass:"section"},[e("div",{staticClass:"tabs is-boxed is-centered main-menu",attrs:{id:"nav"}},[e("ul",[e("li",{class:{"is-active":"PENDING"===t.listQuery.status},attrs:{"data-target":"pane-2",id:"2"},on:{click:function(s){t.listQuery.status="PENDING",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),e("span",[t._v("Pendientes")])],1)]),e("li",{class:{"is-active":"READY"===t.listQuery.status},attrs:{"data-target":"pane-1",id:"1"},on:{click:function(s){t.listQuery.status="READY",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),e("span",[t._v("Listas")])],1)]),e("li",{class:{"is-active":"ARCHIVED"===t.listQuery.status},attrs:{"data-target":"pane-3",id:"3"},on:{click:function(s){t.listQuery.status="ARCHIVED",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),e("span",[t._v("Archivadas")])],1)])])]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-12"},[e("div",{staticClass:"box content"},[t.requests&&t.requests.length>0?e("notification",{staticClass:"is-primary"},[e("div",[e("b-icon",{attrs:{icon:"checkbox-marked-circle","custom-size":"default"}}),t._v(" "),e("b",[t._v("¡Hola!")]),t._v(" Aquí podrás ver tus solicitudes "+t._s(t.status[t.listQuery.status]+"S")+" ")],1)]):e("notification",{staticClass:"is-primary"},[e("div",[e("b-icon",{attrs:{icon:"alert","custom-size":"default"}}),t._v(" "),e("b",[t._v("Aún no tienes solicitudes "+t._s(t.status[t.listQuery.status]+"S"))]),t._v(" Cuando tengas alguna aparecerá aquí. ")],1)]),t.isLoading?e("Skeleton"):t._l(t.requests,(function(s,a){return e("article",{key:s.uuid,staticClass:"post"},["IMSS"==s.type?e("h4",[t._v(t._s(s.description)+" "+t._s(s.type))]):e("h4",[t._v(t._s(s.type)+" "+t._s(s.description))]),e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[t._v(" Solicitado hace "+t._s(t._f("timeSince")(s.date))+" "),e("span",{staticClass:"tag",class:t.requests_types[s.status]},[t._v(t._s(t.status[s.status]))])])])]),e("div",{staticClass:"media-right"},[s.photo?e("span",{staticClass:"tag"},[t._v("FOTO")]):t._e()]),e("div",{staticClass:"media-right"},[s.INE?e("span",{staticClass:"tag"},[t._v("INE")]):t._e()]),s.document?e("button",{staticClass:"button is-small is-primary tag media-right",attrs:{type:"button"},on:{click:function(s){return t.$refs.RequestPreview[a].toggleModal()}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[e("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):t._e(),e("request-document-preview",{ref:"RequestPreview",refInFor:!0,attrs:{url:s.document,label:"Archivo de solicitud"}})],1)])}))],2)])])])],1)},i=[],n=(e("d3b7"),e("96cf"),e("1da1")),o=e("5530"),r=e("2f62"),c=e("f755"),l=e("6636"),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Solicitudes",icon:"file-check","has-button-slot":!0}},[e("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[e("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" Pendientes ")]),e("button",{staticClass:"button"},[t._v("Archivadas")])]),e("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),e("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!1,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[e("b-table-column",{attrs:{label:"Fecha",field:"date",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(new Date(s.row.date).toLocaleDateString())+" ")]}}])}),e("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(s.row.type))]),t._v(" "),e("br"),e("small",[t._v(" "+t._s(s.row.description))])])])])])]}}])}),e("b-table-column",{attrs:{label:"Estado",field:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"tag is-warning"},[t._v(" "+t._s(s.row.status)+" ")])]}}])}),e("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:s.row.id}}}},[e("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(s.row)}}},[e("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e("p",[t._v("Fetching data...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e("p",[t._v("Nothing's here…")])]],2)])],1)],1)},d=[],b=(e("b0c0"),e("7698")),f=e("72d0"),p={name:"ClientsTableSample",components:{ModalBox:f["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){this.getData()},methods:{onSort:function(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},getData:function(){var t=arguments,s=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:1,!s.dataUrl){e.next=11;break}return s.isLoading=!0,s.listQuery.offset=s.listQuery.limit*(a-1),e.next=6,Object(b["b"])(s.listQuery);case 6:i=e.sent,console.log(i),s.isLoading=!1,s.clients=i.results,s.total=i.count;case 11:case"end":return e.stop()}}),e)})))()},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1},actionSample:function(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},m=p,h=(e("0db2"),e("2877")),v=Object(h["a"])(m,u,d,!1,null,null,null),g=v.exports,y=e("6ffa"),C=e("e892"),_={name:"Profile",components:{Modal:function(){return e.e("chunk-8a060de8").then(e.bind(null,"fe93"))},Skeleton:function(){return e.e("chunk-2d20922e").then(e.bind(null,"a889"))},ClientsTableSample:g,LineChart:l["a"],RequestDocumentPreview:C["a"]},data:function(){return{currentTab:"PENDING",isLoading:!0,defaultChart:{chartData:null,extraOptions:c["b"]},requests:[],status:y["b"],requests_types:y["a"],listQuery:{status:"PENDING",limit:10,offset:0}}},computed:Object(o["a"])({titleStack:function(){return["Admin","Dashboard"]}},Object(r["b"])("users",["user"])),mounted:function(){this.getData(),console.log(this.$refs),this.$buefy.snackbar.open({message:"Bienvenido de nuevo",position:"is-bottom",queue:!1})},methods:{getData:function(){var t=arguments,s=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,s.isLoading=!0,e.prev=2,s.listQuery.offset=s.listQuery.limit*(a-1),e.next=6,Object(b["b"])(s.listQuery);case 6:i=e.sent,console.log(i),s.requests=i.results,console.log(s.requests),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](2);case 14:return e.prev=14,s.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,12,14,17]])})))()},randomChartData:function(t){}}},k=_,w=(e("1a6b"),Object(h["a"])(k,a,i,!1,null,null,null));s["default"]=w.exports},"1a6b":function(t,s,e){"use strict";var a=e("8d87"),i=e.n(a);i.a},"8d87":function(t,s,e){},"9bd1":function(t,s,e){}}]);