(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ab799ea"],{"0a6e":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.student}}),e("section",{staticClass:"section is-main-section"},[e("tiles",[e("card-widget",{staticClass:"tile is-child",attrs:{type:"is-warning",icon:"file-alert",number:t.stats.pending,"previous-number":2,"previous-period":"Septiembre, 2020",label:"Pendientes"}}),e("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"file-check",number:t.stats.ready,"previous-number":1,"previous-period":"Septiembre, 2020",label:"Listas"}}),e("card-widget",{staticClass:"tile is-child",attrs:{type:"is-danger",icon:"folder-open",number:t.stats.archived,"previous-number":5,"previous-period":"Septiembre, 2020",label:"Archivadas"}}),e("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"school",number:t.stats.students,"previous-number":2,label:"Estudiantes","previous-period":"Septiembre, 2020"}})],1),e("requests-table",{attrs:{requestsCount:0,"data-url":"https://digital-window.herokuapp.com/"}}),e("students-table",{attrs:{"data-url":"https://digital-window.herokuapp.com/"}}),e("departments-table",{attrs:{"data-url":"https://digital-window.herokuapp.com/"}})],1)],1)},i=[],o=e("2f62"),n=e("f755"),r=e("6636"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Solicitudes",icon:"file-document-outline","has-button-slot":!0}},[e("refresh-button",{attrs:{slot:"button",label:"Actualizar"},on:{"button-click":t.actionSample},slot:"button"}),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{attrs:{slot:"left"},slot:"left"},[e("div",{staticClass:"buttons has-addons"},[e("button",{staticClass:"button",class:{"is-active":"PENDING"===t.listQuery.status},on:{click:function(s){t.listQuery.status="PENDING",t.getData()}}},[e("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),e("span",[t._v("Pendientes")])],1),e("button",{staticClass:"button",class:{"is-active":"READY"===t.listQuery.status},on:{click:function(s){t.listQuery.status="READY",t.getData()}}},[e("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),e("span",[t._v("Listas")])],1),e("button",{staticClass:"button",class:{"is-active":"ARCHIVED"===t.listQuery.status},on:{click:function(s){t.listQuery.status="ARCHIVED",t.getData()}}},[e("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),e("span",[t._v("Archivadas")])],1)])]),e("div",{attrs:{slot:"right"},slot:"right"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}}},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.search,expression:"listQuery.search"}],staticClass:"input is-clearable",attrs:{type:"text",placeholder:"Filtrar trámites..."},domProps:{value:t.listQuery.search},on:{change:function(s){return t.getData()},input:function(s){s.target.composing||t.$set(t.listQuery,"search",s.target.value)}}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])])])]),e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),e("b-table",{attrs:{data:t.requests,striped:!1,hoverable:!0,checkable:!0,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"current-page":t.current_page,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.onPageChange,sort:t.onSort,check:t.onChecked}},[e("b-table-column",{attrs:{label:"Fecha",field:"date",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(new Date(s.row.date).toLocaleDateString())+" ")]}}])}),e("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(s.row.type))])])])])])]}}])}),e("b-table-column",{attrs:{label:"Descripción",field:"description"},scopedSlots:t._u([{key:"default",fn:function(s){return[s.row.description?e("small",{staticClass:"tag is-primary"},[t._v(" "+t._s(s.row.description))]):t._e()]}}])}),e("b-table-column",{attrs:{label:"Alumno",field:"enrollment"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.student.enrollment)+" ")]}}])}),e("b-table-column",{attrs:{label:"Estado",field:"status"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"tag",class:t.requests_types[s.row.status]},[t._v(" "+t._s(t.status[s.row.status])+" ")])]}}])}),e("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"buttons"},["PENDING"==s.row.status?e("button",{staticClass:"button is-small is-primary",attrs:{type:"button"}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Subir archivo",position:"is-top"}},[e("b-icon",{attrs:{icon:"upload",size:"is-small"}})],1)],1):t._e(),"READY"==s.row.status||"ARCHIVED"==s.row.status?e("button",{staticClass:"button is-small is-warning",attrs:{type:"button"},on:{click:function(e){return t.changeOneStatus(s.row.uuid,"PENDING")}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Cambiar solicitud a pendiente",position:"is-top"}},[e("b-icon",{attrs:{icon:"file-alert",size:"is-small"}})],1)],1):t._e(),"PENDING"==s.row.status||"ARCHIVED"==s.row.status?e("button",{staticClass:"button is-small is-success",attrs:{type:"button"},on:{click:function(e){return t.changeOneStatus(s.row.uuid,"READY")}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Cambiar solicitud a listo",position:"is-top"}},[e("b-icon",{attrs:{icon:"checkbox-marked-circle-outline",size:"is-small"}})],1)],1):t._e(),"READY"==s.row.status||"PENDING"==s.row.status?e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return t.changeOneStatus(s.row.uuid,"ARCHIVED")}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Archivar solicitud",position:"is-top"}},[e("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1):t._e(),e("button",{staticClass:"button is-small is-primary",attrs:{type:"button"}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Eliminar solicitud",position:"is-top"}},[e("b-icon",{attrs:{icon:"delete",size:"is-small"}})],1)],1)])]}}])}),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e("p",[t._v("Cargando...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e("p",[t._v("Aún no hay nada por aquí…")])]],2)]),e("div",{staticClass:"is-flex is-justify-content-space-between",attrs:{slot:"footer"},slot:"footer"},[e("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(s){var a=s.active;return e("button",{staticClass:"button is-primary"},[e("span",[t._v("Acciones")]),e("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},["READY"!==t.listQuery.status?e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){return t.onAction("ready")}}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"has-text-success media-left",attrs:{icon:"file-check"}}),e("div",{staticClass:"media-content"},[e("h3",[t._v("Marcar como terminadas")])])],1)]):t._e(),"ARCHIVED"!==t.listQuery.status?e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){return t.onAction("archived")}}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"has-text-danger media-left",attrs:{icon:"folder-open"}}),e("div",{staticClass:"media-content"},[e("h3",[t._v("Marcar como archivados")])])],1)]):t._e(),"PENDING"!==t.listQuery.status?e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){return t.onAction("pending")}}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"has-text-warning media-left",attrs:{icon:"file-alert"}}),e("div",{staticClass:"media-content"},[e("h3",[t._v("Marcar como pendientes")])])],1)]):t._e(),e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){return t.onAction("excel")}}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"file-excel-box"}}),e("div",{staticClass:"media-content"},[e("h3",[t._v("Exportar como excel")])])],1)])],1),e("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(s){var a=s.active;return e("button",{staticClass:"button is-secondary"},[e("span",[t._v("Por página: "+t._s(t.listQuery.limit))]),e("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){t.listQuery.limit=5,t.getData()}}},[t._v("5")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){t.listQuery.limit=10,t.getData()}}},[t._v("10")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){t.listQuery.limit=25,t.getData()}}},[t._v("25")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(s){t.listQuery.limit=50,t.getData()}}},[t._v("50")])],1)],1)],1)],1)},c=[],u=(e("ddb0"),e("7698")),d=e("72d0"),h=e("6ffa");const b={methods:{formatJson(t,s){return s.map(s=>t.map(t=>"date"===t?new Date(s[t]).toLocaleDateString():"student"===t?s[t].enrollment:s[t]))},handleDownload(t,s,a,i){console.log(t,s,a,i),e.e("chunk-444ac47d").then(e.bind(null,"8530")).then(e=>{const o=this.formatJson(a,t);e.export_json_to_excel({header:s,data:o,filename:i,autoWidth:!0,bookType:"xlsx"})})}}};var p=b,m={name:"RequestsTable",mixins:[p],components:{ModalBox:d["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1},requestsCount:{}},data(){return{isModalActive:!1,trashObject:null,requests:[],action:"",total:0,isLoading:!1,paginated:!1,listQuery:{status:"PENDING",limit:10,offset:0},current_page:1,checkedRows:[],selectedRowsUuid:[],requests_types:h["a"],status:h["b"]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{async onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async dashboardRefresh(){this.$store.dispatch("requests/getStats")},async getData(){if(this.dataUrl){this.checkedRows=[],this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.current_page-1);const t=await Object(u["b"])(this.listQuery);console.log(t),this.isLoading=!1,this.requests=t.results,this.total=t.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},onChecked(t){const s=t.map(t=>t.uuid);this.selectedRowsUuid=s},onAction(t){if(this.checkedRows.length>0)switch(t){case"ready":this.$dw.messages.warningDialog({title:"Cambiar solicitudes a listo",message:"Estás a punto de cambiar el estado de las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=[];await this.selectedRowsUuid.forEach(s=>{t.push(this.changeStatus(s,"READY"))}),await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;case"excel":const t=["Fecha","Matrícula","Tipo","Descripción"],s=["date","student","type","description"],e=this.getTodayString();this.handleDownload(this.checkedRows,t,s,"Solicitudes_"+e);break;case"archived":this.$dw.messages.warningDialog({title:"Archivar solicitudes",message:"Estás a punto de archivar las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=[];await this.selectedRowsUuid.forEach(s=>{t.push(this.changeStatus(s,"ARCHIVED"))}),await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;case"pending":this.$dw.messages.warningDialog({title:"Marcar solicitudes como pendientes",message:"Estás a punto de cambiar a pendiente el estado de las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=[];await this.selectedRowsUuid.forEach(s=>{t.push(this.changeStatus(s,"PENDING"))}),await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;default:break}else this.$dw.messages.errorToast("Seleccione al menos una solicitud para ejecutar una acción")},async actionSample(){await this.getData(this.current_page),this.$buefy.toast.open({message:"Actualizado",type:"is-info",queue:!1})},onPageChange(t){this.current_page=t,this.getData()},changeOneStatus(t,s){let e="Cambiar solicitud a listo";"ARCHIVED"==s?e="Archivar solicitud":"PENDING"==s&&(e="Cambiar solicitud a pendiente"),this.$dw.messages.warningDialog({title:e,message:"Estás a punto de cambiar el estado de la solicitud seleccionada ¿Estás seguro?"}).then(async()=>{await this.changeStatus(t,s),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")})},async changeStatus(t,s){const e={status:s};try{const s=await Object(u["d"])(t,e);Promise.resolve(s)}catch(a){Promise.reject(a)}}}},f=m,g=(e("4bba"),e("2877")),y=Object(g["a"])(f,l,c,!1,null,null,null),v=y.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Estudiantes",icon:"school","has-button-slot":!0}},[e("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[e("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(s){var a=s.active;return e("button",{staticClass:"button is-primary"},[e("span",[t._v("Acciones")]),e("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Action")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Another action")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Something else")])],1)],1),e("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),e("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!0,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[e("b-table-column",{attrs:{label:"Nombre",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.user.first_name)+" ")]}}])}),e("b-table-column",{attrs:{label:"Apellidos",field:"last_name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.user.last_name)+" ")]}}])}),e("b-table-column",{attrs:{label:"Matrícula",field:"enrollment",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.enrollment)+" ")]}}])}),e("b-table-column",{attrs:{label:"Carrera",field:"career",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-tooltip",{attrs:{label:t.careers[s.row.career],position:"is-bottom"}},[e("span",[t._v(t._s(s.row.career))])])]}}])}),e("b-table-column",{attrs:{label:"Ingreso",field:"admission",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.admission)+" ")]}}])}),e("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-small is-info",attrs:{to:{name:"client.edit",params:{uuid:s.row.uuid}}}},[e("b-tooltip",{attrs:{type:"is-dark",label:"Información del estudiante",position:"is-top"}},[e("b-icon",{attrs:{icon:"information-outline",size:"is-small"}})],1)],1),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(s.row)}}},[e("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e("p",[t._v("Cargando...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e("p",[t._v("Aún no hay nada por aquí…")])]],2)])],1)],1)},C=[],k=e("762d"),_=e("2646"),D={name:"RequestsTable",components:{ModalBox:d["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[],careers:_["a"]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const s=await Object(k["c"])(this.listQuery);this.isLoading=!1,this.clients=s.results,this.total=s.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},S=D,A=(e("cd0c"),Object(g["a"])(S,w,C,!1,null,null,null)),R=A.exports,Q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Departamentos",icon:"office-building","has-button-slot":!0}},[e("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),e("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[e("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[e("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(s){var a=s.active;return e("button",{staticClass:"button is-primary"},[e("span",[t._v("Acciones")]),e("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Action")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Another action")]),e("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Something else")])],1)],1),e("form",{attrs:{slot:"right"},on:{submit:function(s){return s.preventDefault(),t.actionSample(s)}},slot:"right"},[e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(s){s.target.composing||t.$set(t.listQuery,"q",s.target.value)},function(s){return t.getData()}]}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),e("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),e("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!0,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(s){t.checkedRows=s},"update:checked-rows":function(s){t.checkedRows=s},"page-change":t.getData,sort:t.onSort}},[e("b-table-column",{attrs:{label:"Departamentos",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.name)+" ")]}}])}),e("b-table-column",{attrs:{label:"Responsable",field:"head",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.head)+" ")]}}])}),e("b-table-column",{attrs:{label:"Contacto",field:"contact",sortable:""},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row.contact)+" ")]}}])}),e("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:s.row.id}}}},[e("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),e("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.trashModal(s.row)}}},[e("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),e("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[e("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[e("p",[e("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e("p",[t._v("Cargando...")])]:[e("p",[e("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e("p",[t._v("Aún no hay nada por aquí…")])]],2)])],1)],1)},E=[],x=e("a27e");function O(t){return Object(x["a"])({url:"/departments/",method:"GET",params:t})}var j={name:"DepartmentsTable",components:{ModalBox:d["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,s){console.log(t,s),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===s],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const s=await O(this.listQuery);console.log(s),this.isLoading=!1,this.clients=s.results,this.total=s.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},M=j,q=(e("5be4"),Object(g["a"])(M,Q,E,!1,null,null,null)),N=q.exports,$={name:"dashboard",components:{HeroBarMain:()=>e.e("chunk-4271b03e").then(e.bind(null,"3121")),RequestsTable:v,StudentsTable:R,DepartmentsTable:N,LineChart:r["a"]},data(){return{defaultChart:{chartData:null,extraOptions:n["b"]}}},computed:{titleStack(){return["Administrador","Panel de control"]},...Object(o["b"])("requests",["stats"])},mounted(){this.fillChartData(),this.$store.dispatch("requests/getStats"),this.$buefy.snackbar.open({message:"Bienvenido",queue:!1})},methods:{async getData(){const t=await Object(k["c"])();console.log(t),this.students=t.count},randomChartData(t){const s=[];for(let e=0;e<t;e++)s.push(Math.round(200*Math.random()));return s},fillChartData(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:n["a"].default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n["a"].default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n["a"].default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:n["a"].default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n["a"].default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n["a"].default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:n["a"].default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n["a"].default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n["a"].default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},z=$,B=Object(g["a"])(z,a,i,!1,null,null,null);s["default"]=B.exports},3186:function(t,s,e){},"4bba":function(t,s,e){"use strict";var a=e("a1b7"),i=e.n(a);i.a},"5be4":function(t,s,e){"use strict";var a=e("8191"),i=e.n(a);i.a},"762d":function(t,s,e){"use strict";e.d(s,"a",(function(){return i})),e.d(s,"c",(function(){return o})),e.d(s,"b",(function(){return n}));var a=e("a27e");function i(t){return Object(a["a"])({url:"/students/",method:"POST",data:t})}function o(t){return Object(a["a"])({url:"/students/",method:"GET",params:t})}function n(t){return Object(a["a"])({url:`/students/${t}/`,method:"GET"})}},8191:function(t,s,e){},a1b7:function(t,s,e){},cd0c:function(t,s,e){"use strict";var a=e("3186"),i=e.n(a);i.a}}]);