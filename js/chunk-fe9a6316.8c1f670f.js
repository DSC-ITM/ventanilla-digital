(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe9a6316"],{"0a6e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("hero-bar-main",{attrs:{user:t.$store.state.users.user,student:t.$store.state.users.student}}),s("section",{staticClass:"section is-main-section"},[s("tiles",[s("card-widget",{staticClass:"tile is-child",attrs:{type:"is-warning",icon:"file-alert",number:t.stats.pending,"previous-number":2,"previous-period":"Septiembre, 2020",label:"Pendientes"}}),s("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"file-check",number:t.stats.ready,"previous-number":1,"previous-period":"Septiembre, 2020",label:"Listas"}}),s("card-widget",{staticClass:"tile is-child",attrs:{type:"is-danger",icon:"folder-open",number:t.stats.archived,"previous-number":5,"previous-period":"Septiembre, 2020",label:"Archivadas"}}),s("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"school",number:t.stats.students,"previous-number":2,label:"Estudiantes","previous-period":"Septiembre, 2020"}})],1),s("requests-table",{attrs:{requestsCount:0,"data-url":"https://digital-window.herokuapp.com/"}}),s("students-table",{attrs:{"data-url":"https://digital-window.herokuapp.com/"}})],1)],1)},i=[],o=s("2f62"),n=s("f755"),l=s("6636"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-mobile-sort-spaced",attrs:{title:"Solicitudes: "+this.total,icon:"file-document-outline","has-button-slot":!0}},[s("refresh-button",{attrs:{slot:"button",label:"Actualizar"},on:{"button-click":t.refresh},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("div",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"buttons has-addons"},[s("button",{staticClass:"button",class:{"is-active":"PENDING"===t.listQuery.status},on:{click:function(e){t.listQuery.status="PENDING"}}},[s("b-icon",{staticClass:"has-text-warning",attrs:{icon:"file-alert","custom-size":"default"}}),s("span",[t._v("Pendientes")])],1),s("button",{staticClass:"button",class:{"is-active":"READY"===t.listQuery.status},on:{click:function(e){t.listQuery.status="READY"}}},[s("b-icon",{staticClass:"has-text-success",attrs:{icon:"file-check","custom-size":"default"}}),s("span",[t._v("Listas")])],1),s("button",{staticClass:"button",class:{"is-active":"ARCHIVED"===t.listQuery.status},on:{click:function(e){t.listQuery.status="ARCHIVED"}}},[s("b-icon",{staticClass:"has-text-danger",attrs:{icon:"folder-open","custom-size":"default"}}),s("span",[t._v("Archivadas")])],1)])]),s("div",{attrs:{slot:"right"},slot:"right"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.refresh(e)}}},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.search,expression:"listQuery.search"}],staticClass:"input is-clearable",attrs:{type:"text",placeholder:"Filtrar trámites..."},domProps:{value:t.listQuery.search},on:{input:function(e){e.target.composing||t.$set(t.listQuery,"search",e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[s("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])])])]),s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("modal-requests",{attrs:{"is-active":t.isDocModalActive,schoolRequest:t.request},on:{cancel:t.modalClose}}),s("b-table",{ref:"table",attrs:{data:t.list,striped:!1,hoverable:!0,checkable:!0,detailed:!0,"detail-key":t.key,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!1,"current-page":t.current_page,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":"","opened-detailed":t.defaultOpenedDetails,"show-detail-icon":!1},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"page-change":t.onPageChange,"details-open":t.onCollapse,sort:t.onSort,check:t.onChecked},scopedSlots:t._u([{key:"detail",fn:function(e){return[s("a",{staticClass:"link",on:{click:function(s){return t.modalOpen(e.row)}}},[s("p",{staticClass:"title is-5"},[t._v(" "+t._s(e.row.type)+": "+t._s(e.row.description||"...")+" ")])]),s("p",{staticClass:"subtitle is-5"},[t._v("Información del solicitante:")]),s("StudentPreview",{attrs:{student:e.row.student}}),s("p",{staticClass:"subtitle is-5"},[t._v("Archivos adjuntos:")]),s("div",{staticClass:"is-flex is-flex-direction-row"},[s("div",{staticClass:"media-left"},[e.row.INE?s("div",[s("strong",[t._v("INE: ")]),s("a",{staticClass:"card-image"},[s("figure",{staticClass:"is-4by3 ",on:{click:function(e){t.isINEModalActive=!0}}},[s("img",{attrs:{width:200,alt:"Placeholder image",src:e.row.INE}})])])]):t._e(),s("b-modal",{model:{value:t.isINEModalActive,callback:function(e){t.isINEModalActive=e},expression:"isINEModalActive"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",[s("img",{attrs:{width:"100%",alt:"Placeholder image",src:e.row.INE}})])])])]),s("br"),e.row.photo?s("div",[s("strong",[t._v("Foto: ")]),s("a",{staticClass:"card-image"},[s("figure",{staticClass:"is-4by3 ",on:{click:function(e){t.isPhotoModalActive=!0}}},[s("img",{attrs:{width:200,alt:"Placeholder image",src:e.row.photo}})])])]):t._e(),s("b-modal",{model:{value:t.isPhotoModalActive,callback:function(e){t.isPhotoModalActive=e},expression:"isPhotoModalActive"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",[s("img",{attrs:{width:"100%",alt:"Placeholder image",src:e.row.photo}})])])])])],1)])]}}])},[s("b-table-column",{attrs:{label:"Fecha",field:"date"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(e.row.date).toLocaleDateString())+" ")]}}])}),s("b-table-column",{attrs:{label:"Trámite",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("b-tooltip",{attrs:{label:t.labelDetail,type:"is-dark",position:"is-top",delay:500}},[s("a",{staticClass:"link",on:{click:function(s){return s.preventDefault(),t.toggleDetail(e.row)}}},[s("strong",[t._v(t._s(e.row.type))])])])],1)])])]}}])}),s("b-table-column",{attrs:{label:"Descripción",field:"description",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"tag is-primary"},[t._v(" "+t._s(e.row.description?e.row.description:"N / A"))])]}}])}),s("b-table-column",{attrs:{label:"Alumno",field:"enrollment"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.student.enrollment)+" ")]}}])}),s("b-table-column",{attrs:{label:"Estado",field:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"tag",class:t.requests_types[e.row.status]},[t._v(" "+t._s(t.status[e.row.status])+" ")])]}}])}),s("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(s){return t.modalOpen(e.row)}}},[e.row.document?s("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[s("b-icon",{attrs:{icon:"file-document-outline",size:"is-small"}})],1):s("b-tooltip",{attrs:{type:"is-dark",label:"Subir archivo",position:"is-top"}},[s("b-icon",{attrs:{icon:"upload",size:"is-small"}})],1)],1),"READY"==e.row.status||"ARCHIVED"==e.row.status?s("button",{staticClass:"button is-small is-warning",attrs:{type:"button"},on:{click:function(s){return t.changeOneStatus(e.row,"PENDING")}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Cambiar solicitud a pendiente",position:"is-top"}},[s("b-icon",{attrs:{icon:"file-alert",size:"is-small"}})],1)],1):t._e(),"PENDING"==e.row.status||"ARCHIVED"==e.row.status?s("button",{staticClass:"button is-small is-success",attrs:{type:"button"},on:{click:function(s){return t.changeOneStatus(e.row,"READY")}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Cambiar solicitud a listo",position:"is-top"}},[s("b-icon",{attrs:{icon:"checkbox-marked-circle-outline",size:"is-small"}})],1)],1):t._e(),"READY"==e.row.status||"PENDING"==e.row.status?s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return t.changeOneStatus(e.row,"ARCHIVED")}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Archivar solicitud",position:"is-top"}},[s("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1):t._e(),"ARCHIVED"==e.row.status?s("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(s){return t.deleteOneReq(e.row)}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Eliminar solicitud",position:"is-top"}},[s("b-icon",{attrs:{icon:"delete",size:"is-small"}})],1)],1):t._e()])]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[s("p",[s("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),s("p",[t._v("Cargando...")])]:[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),s("p",[t._v("Aún no hay nada por aquí…")])]],2)]),s("div",{staticClass:"is-flex is-justify-content-space-between",attrs:{slot:"footer"},slot:"footer"},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary"},[s("span",[t._v("Acciones")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},["READY"!==t.listQuery.status?s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.onAction("ready")}}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-success media-left",attrs:{icon:"file-check"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Marcar como terminadas")])])],1)]):t._e(),"ARCHIVED"!==t.listQuery.status?s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.onAction("archived")}}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-danger media-left",attrs:{icon:"folder-open"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Marcar como archivados")])])],1)]):t._e(),"PENDING"!==t.listQuery.status?s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.onAction("pending")}}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-warning media-left",attrs:{icon:"file-alert"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Marcar como pendientes")])])],1)]):t._e(),s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:t.exportData}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"file-excel-box"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Exportar como excel")])])],1)]),"ARCHIVED"==t.listQuery.status?s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.onAction("delete")}}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"delete"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Eliminar seleccionadas")])])],1)]):t._e()],1),s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)],1)],1)},c=[],d=(s("ddb0"),s("7698")),u=s("72d0"),h=s("6ffa"),m=s("bb5e"),p=s.n(m),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"container"},[s("b-modal",{attrs:{active:t.isCardModalActive,width:640,scroll:"keep"},on:{"update:active":function(e){t.isCardModalActive=e}}},[t.schoolRequest.document?s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Archivo de solicitud")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.cancel}})]),s("section",{staticClass:"modal-card-body"},[s("embed",{attrs:{type:"application/pdf",src:t.schoolRequest.document,width:"100%",height:"700"}})]),s("footer",{staticClass:"modal-card-foot"},[s("b-field",{staticClass:"file button"},[s("b-upload",{attrs:{expanded:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[s("span",[t._v(t._s(t.file.name||"Cambiar archivo"))])])],1),t.file.name?s("button",{staticClass:"button is-primary",on:{click:function(e){return t.submit()}}},[t._v(" Subir ")]):t._e()],1)]):s("ValidationObserver",{ref:"form"},[s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Subir archivo de solicitud")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.cancel}})]),s("section",{staticClass:"modal-card-body"},[s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;e.valid;return[s("form",{attrs:{action:""}},[s("b-message",{staticClass:"message",attrs:{title:"¿Qué es esto?",type:"is-primary","has-icon":"",size:"is-small",closable:!1}},[s("div",[t._v(" ¡Hola!, en esta sección podrás subir los documentos correspondientes a cada una de las soliciudes, simplemente arrastra el archivo que deseas subir o da click para seleccionarlo, luego simplemene da click en subir, espera la confirmación y ¡Listo! el documento llegará al esudiane correspondiente. ")])]),s("b-field",[s("b-upload",{attrs:{"drag-drop":"",expanded:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),s("span",[t._v(t._s(t.file.name||"Arrastra o selecciona tu archivo"))])])])])],1),s("div",{staticClass:"tags"},t._l(t.dropFiles,(function(e,a){return s("span",{key:a,staticClass:"tag is-primary"},[t._v(" "+t._s(e.name)+" "),s("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(e){return t.deleteDropFile(a)}}})])})),0)],1),t._v(" "+t._s(a[0])+" ")]}}])})],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-primary ",on:{click:function(e){return t.submit()}}},[t._v(" Subir ")]),s("button",{staticClass:"button",on:{click:t.cancel}},[t._v("Cancelar")])])])])],1)],1)])},f=[],g={props:{isActive:{type:Boolean,default:!1},schoolRequest:{type:Object}},data(){return{isCardModalActive:!1,file:{},dropFiles:[]}},methods:{cancel(){this.$emit("cancel")},deleteDropFile(t){this.dropFiles.splice(t,1)},PrintFile(t){console.log(this.file)},async submit(){this.schoolRequest.document=this.file;const t=new FormData;for(var e in this.schoolRequest)t.append(e,this.schoolRequest[e]),console.log(t[e]);t.delete("INE"),t.delete("photo");try{this.isLoading=!0;const e=await Object(d["e"])(this.schoolRequest.uuid,t);console.log(e),this.schoolRequest.document=e.document,this.file={},this.$dw.messages.successToast("¡Excelente! Se ha subido el archivo correctamene")}catch(s){}}},watch:{isActive(t){this.isCardModalActive=t},isCardModalActive(t){t||this.cancel()}}},v=g,w=s("2877"),y=Object(w["a"])(v,b,f,!1,null,null,null),C=y.exports,_=s("fab6"),k=s.n(_),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"media"},[s("div",{staticClass:"media-left is-hidden-mobile"},[s("div",[s("div",{staticClass:"card-image is-user-avatar"},[s("figure",{staticClass:"is-4by3 "},[s("img",{staticClass:"cert-img",attrs:{width:"64px",alt:"Placeholder image",src:"https://avatars.dicebear.com/api/initials/"+t.student.user.first_name+".svg?b=%23800000"}})])])])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("router-link",{staticClass:"link",attrs:{to:{name:"client.edit",params:{uuid:t.student.uuid?t.student.uuid:t.student.id,withStudent:!0}}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Click para editar estudiante",position:"is-top",delay:500}},[s("strong",[t._v(t._s(t.student.user.first_name)+" "+t._s(t.student.user.last_name))])])],1),t._v(" "),s("b-tooltip",{attrs:{type:"is-dark",label:"Click para enviar correo",position:"is-top"}},[s("a",{staticClass:"link",attrs:{href:"mailto:"+t.student.user.email}},[t._v(t._s(t.student.user.email))])]),s("div",[t._v(" "+t._s(t.careers[t.student.career])+" ("+t._s(t.student.admission)+"º Ingreso) "),t.student.admission>7?s("b-tag",{attrs:{type:"is-dark"}},[t._v(t._s(t.student.specialty?t.student.specialty:"Aún no establecido"))]):t._e()],1),s("div",[s("strong",[t._v("CURP: ")]),t.student.CURP_file?s("a",{staticClass:"link",on:{click:function(e){return t.$refs.CURP_Preview.toggleModal()}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo CURP",position:"is-top"}},[t._v(" "+t._s(t.student.CURP?t.student.CURP:"Aún no establecido")+" ")])],1):s("span",[t._v(t._s(t.student.CURP?t.student.CURP:"Aún no establecido"))])]),s("div",[s("strong",[t._v("NSS: ")]),t.student.NSS_file?s("a",{staticClass:"link",on:{click:function(e){return t.$refs.NSS_Preview.toggleModal()}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo NSS",position:"is-top"}},[t._v(" "+t._s(t.student.NSS?t.student.NSS:"Aún no establecido")+" ")])],1):s("span",[t._v(t._s(t.student.NSS?t.student.NSS:"Aún no establecido"))]),s("RequestDocumentPreview",{ref:"CURP_Preview",attrs:{url:t.student.CURP_file,label:"CURP de "+t.student.user.first_name+" "+t.student.user.last_name}}),s("RequestDocumentPreview",{ref:"NSS_Preview",attrs:{url:t.student.NSS_file,label:"NSS de "+t.student.user.first_name+" "+t.student.user.last_name}})],1)],1)]),s("div",{staticClass:"media-right"},[t._v(" "),s("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.student.enrollment))])],1)])},D=[],A=s("2646"),R=s("e892"),E={props:["student"],data(){return{careers:A["a"]}},components:{RequestDocumentPreview:R["a"]}},x=E,P=Object(w["a"])(x,S,D,!1,null,null,null),N=P.exports,M={name:"RequestsTable",mixins:[p.a,k.a],components:{Pagination:()=>s.e("chunk-2d209b1b").then(s.bind(null,"a9c0")),ModalBox:u["a"],ModalRequests:C,StudentPreview:N},props:{requestsCount:{}},data(){return{action:"",listQuery:{status:"PENDING",limit:10,offset:0},key:"uuid",current_page:1,selectedRowsUuid:[],requests_types:h["a"],status:h["b"],isINEModalActive:!1,isPhotoModalActive:!1,isDocModalActive:!1,request:{}}},methods:{async dashboardRefresh(){this.$store.dispatch("requests/getStats")},async getData(){this.checkedRows=[],this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.current_page-1);const t=await Object(d["c"])(this.listQuery);console.log(t),this.isLoading=!1,this.list=t.results,this.total=t.count},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},modalOpen(t){this.request=t,this.isDocModalActive=!0},modalClose(){this.isDocModalActive=!1},onChecked(t){const e=t.map(t=>t.uuid);this.selectedRowsUuid=e},async deleteReq(t){await Object(d["b"])(t)},deleteOneReq(t){this.$dw.messages.errorDialog({title:"¡Cuidado!",message:"Estás a punto de eliminar esta solicitud ¿Estás seguro?"}).then(async()=>{this.deleteReq(t.uuid),this.dashboardRefresh(),await this.getData(),this.$dw.messages.errorToast("Se ha eliminado la solicitud seleccionada")})},onAction(t){if(this.checkedRows.length>0)switch(t){case"ready":this.$dw.messages.warningDialog({title:"Cambiar solicitudes a listo",message:"Estás a punto de cambiar el estado de las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=this.checkedRows.map(t=>this.changeStatus(t,"READY"));await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;case"archived":this.$dw.messages.warningDialog({title:"Archivar solicitudes",message:"Estás a punto de archivar las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=this.checkedRows.map(t=>this.changeStatus(t,"ARCHIVED"));await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;case"pending":this.$dw.messages.warningDialog({title:"Marcar solicitudes como pendientes",message:"Estás a punto de cambiar a pendiente el estado de las solicitudes seleccionadas ¿Estás seguro?"}).then(async()=>{const t=this.checkedRows.map(t=>this.changeStatus(t,"PENDING"));await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes")});break;case"delete":this.$dw.messages.errorDialog({title:"¡Cuidado!",message:"Estás a punto de eliminar múltiples solicitudes ¿Estás seguro?"}).then(async()=>{const t=this.checkedRows.map(t=>this.deleteReq(t.uuid));await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.errorToast("Se han eliminado las solicitudes seleccionadas")});break;default:break}else this.$dw.messages.errorToast("Seleccione al menos una solicitud para ejecutar una acción")},exportData(){const t=["Fecha","Tipo","Descripción","Matrícula","Nombre","Appellidos","Carrera","Ingreso","Especialidad"],e=["date","type","description","enrollment","first_name","last_name","career","admission","especialty"],s=this.getTodayString(),a=this.checkedRows.map(t=>{const{student:e}=t,{user:s}=e;return{...e,...s,...t}});this.handleDownload(a,t,e,"Solicitudes_"+s)},changeOneStatus(t,e){let s="Cambiar solicitud a listo";"ARCHIVED"==e?s="Archivar solicitud":"PENDING"==e&&(s="Cambiar solicitud a pendiente"),this.$dw.messages.warningDialog({title:s,message:"Estás a punto de cambiar el estado de la solicitud seleccionada ¿Estás seguro?"}).then(async()=>{await this.changeStatus(t,e)&&(this.dashboardRefresh(),await this.getData(),this.$dw.messages.successToast("¡Logrado! Se notificará a los estudiantes correspondientes"))})},async changeStatus(t,e){const s={status:e};if("READY"==e&&!t.document)return this.$dw.messages.errorToast("No es posible cambiar el estado a listo sin un documento"),!1;try{const e=await Object(d["e"])(t.uuid,s);return Promise.resolve(e),!0}catch(a){Promise.reject(a)}}}},O=M,q=(s("4bba"),Object(w["a"])(O,r,c,!1,null,null,null)),Q=q.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-mobile-sort-spaced",attrs:{title:(t.withStudent?"Estudiantes: ":"Usuarios: ")+this.total,icon:t.withStudent?"school":"account","has-button-slot":!0}},[s("refresh-button",{attrs:{slot:"button",label:"Actualizar"},on:{"button-click":function(e){return t.refresh()}},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("div",{attrs:{slot:"left"},slot:"left"},[s("div",{staticClass:"buttons has-addons"},[s("button",{staticClass:"button",class:{"is-active":!0===t.withStudent},on:{click:function(e){t.withStudent=!0,t.getData()}}},[s("b-icon",{staticClass:"has-text-primary",attrs:{icon:"school","custom-size":"default"}}),s("span",[t._v("Estudiantes")])],1),s("button",{staticClass:"button",class:{"is-active":!1===t.withStudent},on:{click:function(e){t.withStudent=!1,t.getData()}}},[s("b-icon",{staticClass:"has-text-primary",attrs:{icon:"account","custom-size":"default"}}),s("span",[t._v("Usuarios")])],1)])]),s("form",{attrs:{slot:"right"},on:{submit:function(e){return e.preventDefault(),t.refresh()}},slot:"right"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.search,expression:"listQuery.search"}],staticClass:"input",attrs:{type:"text",placeholder:"Filtrar estudiantes..."},domProps:{value:t.listQuery.search},on:{change:function(e){return t.getData()},input:function(e){e.target.composing||t.$set(t.listQuery,"search",e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[s("b-icon",{attrs:{icon:"magnify","custom-size":"default"}})],1)])])])]),s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{ref:"table",attrs:{data:t.list,striped:!1,hoverable:!0,checkable:!0,narrowed:!0,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!1,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":"",detailed:t.withStudent,"opened-detailed":t.defaultOpenedDetails,"detail-key":t.key,"show-detail-icon":!1},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"page-change":t.onPageChange,sort:t.onSort,"details-open":t.onCollapse},scopedSlots:t._u([{key:"detail",fn:function(t){return[s("StudentPreview",{attrs:{student:t.row}})]}}])},[s("b-table-column",{attrs:{label:"Nombre",field:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.withStudent?s("b-tooltip",{attrs:{label:t.labelDetail,type:"is-dark",position:"is-top",delay:500}},[s("a",{staticClass:"link",on:{click:function(s){return s.preventDefault(),t.toggleDetail(e.row)}}},[s("strong",[t._v(t._s(e.row.user?e.row.user.first_name:""))])])]):s("router-link",{staticClass:"link",attrs:{to:{name:"client.edit",params:{uuid:e.row.uuid?e.row.uuid:e.row.id,withStudent:t.withStudent}}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Editar estudiante",position:"is-top",delay:500}},[s("strong",[t._v(t._s(e.row.first_name))])])],1)]}}])}),s("b-table-column",{attrs:{label:"Apellidos",field:"last_name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.user?e.row.user.last_name:e.row.last_name)+" ")]}}])}),s("b-table-column",{attrs:{visible:!t.withStudent,label:"Correo",field:"email"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.email)+" ")]}}])}),s("b-table-column",{attrs:{visible:t.withStudent,label:"Matrícula",field:"enrollment"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.enrollment)+" ")]}}])}),s("b-table-column",{attrs:{visible:t.withStudent,label:"Carrera",field:"career"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-tooltip",{attrs:{label:t.careers[e.row.career],position:"is-bottom"}},[s("span",[t._v(t._s(e.row.career))])])]}}])}),s("b-table-column",{attrs:{visible:t.withStudent,label:"Ingreso",field:"admission"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.admission)+" ")]}}])}),s("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-small is-info",attrs:{to:{name:"client.edit",params:{uuid:e.row.uuid?e.row.uuid:e.row.id,withStudent:t.withStudent}}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Editar estudiante",position:"is-top"}},[s("b-icon",{attrs:{icon:"circle-edit-outline",size:"is-small"}})],1)],1),t.withStudent?s("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(s){return t.deleteOneStu(e.row)}}},[s("b-tooltip",{attrs:{type:"is-dark",label:"Eliminar estudiante",position:"is-top"}},[s("b-icon",{attrs:{icon:"delete",size:"is-small"}})],1)],1):t._e()],1)]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[s("p",[s("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),s("p",[t._v("Cargando...")])]:[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),s("p",[t._v("Aún no hay nada por aquí…")])]],2)]),s("div",{staticClass:"is-flex is-justify-content-space-between",attrs:{slot:"footer"},slot:"footer"},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary"},[s("span",[t._v("Acciones")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.deleteMultiStu()}}},[s("div",{staticClass:"media"},[s("b-icon",{staticClass:"has-text-primary media-left",attrs:{icon:"delete"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Eliminar seleccionados")])])],1)])],1),s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)],1)],1)},j=[],z=s("762d"),I=s("2612"),L={name:"RequestsTable",components:{Pagination:()=>s.e("chunk-2d209b1b").then(s.bind(null,"a9c0")),ModalBox:u["a"],StudentPreview:N},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},mixins:[k.a],data(){return{paginated:!1,listQuery:{limit:10,offset:0},careers:A["a"],withStudent:!0,key:"uuid"}},methods:{async dashboardRefresh(){this.$store.dispatch("requests/getStats")},async getData(t=1){if(this.dataUrl){let e;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1),this.withStudent?(e=await Object(z["e"])(this.listQuery),this.list=e.results,this.total=e.count):(e=await Object(I["e"])(this.listQuery),this.list=e.results.filter(t=>null===t.student),this.total=this.list.length),this.isLoading=!1}},async deleteStu(t){await Object(z["c"])(t)},deleteOneStu(t){this.$dw.messages.errorDialog({title:"¡Cuidado!",message:"Estás a punto de eliminar un estudiante, se borraran también todas las solicitudes ligadas a dicho estudiante ¿Estás seguro?"}).then(async()=>{await this.deleteStu(t.uuid),this.dashboardRefresh(),await this.getData(),this.$dw.messages.errorToast("Se ha eliminado el estudiante seleccionado")})},deleteMultiStu(){this.$dw.messages.errorDialog({title:"¡Cuidado!",message:"Estás a punto de eliminar múltiples estudiantes, se borraran todas las solicitudes ligadas a dichos estudiantes ¿Estás seguro?"}).then(async()=>{const t=this.checkedRows.map(t=>this.deleteStu(t.uuid));await Promise.all(t),this.dashboardRefresh(),await this.getData(),this.$dw.messages.errorToast("Se han eliminado los estudiantes seleccionados")})},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})}}},T=L,U=(s("cd0c"),Object(w["a"])(T,$,j,!1,null,null,null)),V=U.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Departamentos",icon:"office-building","has-button-slot":!0}},[s("refresh-button",{attrs:{slot:"button"},on:{"button-click":t.actionSample},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[s("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary"},[s("span",[t._v("Acciones")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Action")]),s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Another action")]),s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[t._v("Something else")])],1)],1),s("form",{attrs:{slot:"right"},on:{submit:function(e){return e.preventDefault(),t.actionSample(e)}},slot:"right"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.listQuery.q,expression:"listQuery.q"}],staticClass:"input",attrs:{type:"text",placeholder:"Search by name..."},domProps:{value:t.listQuery.q},on:{input:[function(e){e.target.composing||t.$set(t.listQuery,"q",e.target.value)},function(e){return t.getData()}]}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[s("b-icon",{attrs:{icon:"account-search","custom-size":"default"}})],1)])])])]),s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.clients,striped:!1,hoverable:!0,checkable:!0,"checked-rows":t.checkedRows,loading:t.isLoading,paginated:!0,"per-page":t.listQuery.limit,total:t.total,"backend-pagination":"","backend-sorting":""},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"page-change":t.getData,sort:t.onSort}},[s("b-table-column",{attrs:{label:"Departamentos",field:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),s("b-table-column",{attrs:{label:"Responsable",field:"head",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.head)+" ")]}}])}),s("b-table-column",{attrs:{label:"Contacto",field:"contact",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.contact)+" ")]}}])}),s("b-table-column",{attrs:{label:"Acciones","custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"client.edit",params:{id:e.row.id}}}},[s("b-icon",{attrs:{icon:"download",size:"is-small"}})],1),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-icon",{attrs:{icon:"folder-move",size:"is-small"}})],1)],1)]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[s("p",[s("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),s("p",[t._v("Cargando...")])]:[s("p",[s("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),s("p",[t._v("Aún no hay nada por aquí…")])]],2)])],1)],1)},H=[],G=s("a27e");function B(t){return Object(G["a"])({url:"/departments/",method:"GET",params:t})}var Y={name:"DepartmentsTable",components:{ModalBox:u["a"]},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data(){return{isModalActive:!1,trashObject:null,clients:[],total:0,isLoading:!1,paginated:!1,listQuery:{limit:5,offset:0},checkedRows:[]}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},mounted(){this.getData()},methods:{onSort(t,e){console.log(t,e),this.listQuery.sortBy=[t],this.listQuery.sortDesc=["desc"===e],this.getData()},async getData(t=1){if(this.dataUrl){this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(t-1);const e=await B(this.listQuery);console.log(e),this.isLoading=!1,this.clients=e.results,this.total=e.count}},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashConfirm(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel(){this.isModalActive=!1},actionSample(){this.listQuery={limit:5,offset:0},this.getData(),this.$buefy.toast.open({message:"Members refreshed",type:"is-info",queue:!1})}}},J=Y,W=(s("5be4"),Object(w["a"])(J,F,H,!1,null,null,null)),K=W.exports,X={name:"dashboard",components:{HeroBarMain:()=>s.e("chunk-667e511e").then(s.bind(null,"3121")),RequestsTable:Q,StudentsTable:V,DepartmentsTable:K,LineChart:l["a"]},data(){return{defaultChart:{chartData:null,extraOptions:n["a"]}}},computed:{titleStack(){return["Administrador","Panel de control"]},...Object(o["b"])("requests",["stats"])},mounted(){this.$store.dispatch("requests/getStats")},methods:{async getData(){const t=await Object(z["e"])();console.log(t),this.students=t.count}}},Z=X,tt=Object(w["a"])(Z,a,i,!1,null,null,null);e["default"]=tt.exports},3186:function(t,e,s){},"4bba":function(t,e,s){"use strict";var a=s("a1b7"),i=s.n(a);i.a},"5be4":function(t,e,s){"use strict";var a=s("8191"),i=s.n(a);i.a},8191:function(t,e,s){},a1b7:function(t,e,s){},bb5e:function(t,e,s){t.exports={methods:{formatJson(t,e){return e.map(e=>t.map(t=>"date"===t?new Date(e[t]).toLocaleDateString():"student"===t?e[t].enrollment:e[t]))},handleDownload(t,e,a,i){console.log(t,e,a,i),s.e("chunk-444ac47d").then(s.bind(null,"8530")).then(s=>{const o=this.formatJson(a,t);s.export_json_to_excel({header:e,data:o,filename:i,autoWidth:!0,bookType:"xlsx"})})}}}},cd0c:function(t,e,s){"use strict";var a=s("3186"),i=s.n(a);i.a},fab6:function(t,e){t.exports={data(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc",active:!0,labelDetail:"Abrir detalles"}},mounted(){this.getData()},watch:{listQuery:{handler(){this.getData()},deep:!0}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},methods:{onSort(t,e){console.log(t+" "+e);let s=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(s="-"+t),this.listQuery.ordering=s,this.getData()},toggleDetail(t){this.active=!this.active,this.active?this.labelDetail="Abrir detalles":this.labelDetail="Cerrar detalles",this.$refs.table.toggleDetails(t)},onCollapse(t){this.defaultOpenedDetails=[t[this.key]]},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashCancel(){this.isModalActive=!1},async refresh(){await this.getData(),this.$buefy.toast.open({message:"Actualizado",type:"is-info",queue:!1})},onPageChange(t){this.current_page=t,this.getData()}}}}}]);