(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-215b2a22"],{"0db2":function(t,s,e){"use strict";var a=e("9bd1"),i=e.n(a);i.a},1671:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.user.student||{}}}),e("Modal"),e("section",{staticClass:"section"},[e("div",{staticClass:"tabs is-boxed is-centered main-menu",attrs:{id:"nav"}},[e("ul",[e("li",{class:{"is-active":"PENDING"===t.listQuery.status},attrs:{"data-target":"pane-2",id:"2"},on:{click:function(s){t.listQuery.status="PENDING",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),e("span",[t._v("Pendientes")])],1)]),e("li",{class:{"is-active":"READY"===t.listQuery.status},attrs:{"data-target":"pane-1",id:"1"},on:{click:function(s){t.listQuery.status="READY",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),e("span",[t._v("Listas")])],1)]),e("li",{class:{"is-active":"ARCHIVED"===t.listQuery.status},attrs:{"data-target":"pane-3",id:"3"},on:{click:function(s){t.listQuery.status="ARCHIVED",t.getData()}}},[e("a",[e("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),e("span",[t._v("Archivadas")])],1)])])]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-12"},[e("div",{staticClass:"box content"},[t.requests&&t.requests.length>0?e("notification",{staticClass:"is-primary"},[e("div",[e("b-icon",{attrs:{icon:"checkbox-marked-circle","custom-size":"default"}}),t._v(" "),e("b",[t._v("¡Hola!")]),t._v(" Aquí podrás ver tus solicitudes "+t._s(t.status[t.listQuery.status]+"S")+" ")],1)]):e("notification",{staticClass:"is-primary"},[e("div",[e("b-icon",{attrs:{icon:"alert","custom-size":"default"}}),t._v(" "),e("b",[t._v("Aún no tienes solicitudes "+t._s(t.status[t.listQuery.status]+"S"))]),t._v(" Cuando tengas alguna aparecerá aquí. ")],1)]),t.isLoading?e("Skeleton"):t._l(t.requests,(function(s,a){return e("article",{key:s.uuid,staticClass:"post"},["IMSS"==s.type?e("h4",[t._v(t._s(s.description)+" "+t._s(s.type))]):e("h4",[t._v(t._s(s.type)+" "+t._s(s.description))]),e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[t._v(" Solicitado hace "+t._s(t._f("timeSince")(s.date))+" "),e("span",{staticClass:"tag",class:t.requests_types[s.status]},[t._v(t._s(t.status[s.status]))])])])]),e("div",{staticClass:"media-right"},[s.photo?e("span",{staticClass:"tag"},[t._v("FOTO")]):t._e()]),e("div",{staticClass:"media-right"},[s.INE?e("span",{staticClass:"tag"},[t._v("INE")]):t._e()]),s.document?e("button",{staticClass:"button is-small is-primary tag media-right",attrs:{type:"button"},on:{click:function(s){return t.$refs.RequestPreview[a].toggleModal()}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[e("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):t._e(),e("request-document-preview",{ref:"RequestPreview",refInFor:!0,attrs:{url:s.document,label:"Archivo de solicitud"}})],1)])})),t.requests.length<t.total&&t.listQuery.offset<t.total?e("b-button",{staticClass:"button is-light",attrs:{expanded:""},on:{click:function(s){return t.loadMore()}}},[e("strong",[t._v("Cargar más")])]):t._e()],2)])])])],1)},i=[],o=(e("ddb0"),e("2f62")),n=e("f755"),l=e("6636"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Solicitudes",icon:"file-check","has-button-slot":!0}},[e("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[e("button",{staticClass:"button is-active",on:{click:t.actionSample}},[t._v(" Pendientes ")]),e("button",{staticClass:"button"},[t._v("Archivadas")])]),e("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),e("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!1,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[e("b-table-column",{attrs:{label:"Fecha",field:"date",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(new Date(s.row.date).toLocaleDateString())+" ")]}}])}),e("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(s.row.type))]),t._v(" "),e("br"),e("small",[t._v(" "+t._s(s.row.description))])])])])])]}}])}),e("b-table-column",{attrs:{label:"Estado",field:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"tag is-warning"},[t._v(" "+t._s(s.row.status)+" ")])]}}])}),e("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:s.row.id}}}},[e("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(s.row)}}},[e("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e("p",[t._v("Fetching data...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e("p",[t._v("Nothing's here…")])]],2)])],1)],1)},r=[],u=e("7698"),d=e("72d0"),h={name:"ClientsTableSample",components:{ModalBox:d["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const s=await Object(u["c"])(this.listQuery);console.log(s),this.isLoading=!1,this.clients=s.results,this.total=s.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},b=h,m=(e("0db2"),e("2877")),p=Object(m["a"])(b,c,r,!1,null,null,null),f=p.exports,v=e("6ffa"),g=e("e892"),y={name:"Profile",components:{Modal:()=>e.e("chunk-14160ea8").then(e.bind(null,"fe93")),Skeleton:()=>e.e("chunk-2d20922e").then(e.bind(null,"a889")),ClientsTableSample:f,LineChart:l["a"],RequestDocumentPreview:g["a"]},data(){return{currentTab:"PENDING",isLoading:!0,defaultChart:{chartData:null,extraOptions:n["a"]},requests:[],status:v["b"],requests_types:v["a"],listQuery:{status:"PENDING",limit:10,offset:0},total:0}},computed:{titleStack(){return["Admin","Dashboard"]},...Object(o["b"])("users",["user"])},mounted(){this.getData(),this.$buefy.snackbar.open({message:"Bienvenido de nuevo",position:"is-bottom",queue:!1})},methods:{async getData(t=1){this.isLoading=!0;try{this.listQuery.offset=this.listQuery.limit*(t-1);const s=await Object(u["c"])(this.listQuery);this.total=s.count,this.requests=s.results}catch(s){}finally{this.isLoading=!1}},async loadMore(){this.isLoading=!0;try{this.listQuery.offset+=this.listQuery.limit;const t=await Object(u["c"])(this.listQuery);this.setRequests([...this.requests,...t.results])}catch(t){}finally{this.isLoading=!1}},setRequests(t){this.requests=t},randomChartData(t){}}},C=y,_=(e("1a6b"),Object(m["a"])(C,a,i,!1,null,null,null));s["default"]=_.exports},"1a6b":function(t,s,e){"use strict";var a=e("8d87"),i=e.n(a);i.a},"8d87":function(t,s,e){},"9bd1":function(t,s,e){}}]);