(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29cb449a"],{8819:function(e,t,s){},ad71:function(e,t,s){"use strict";var a=s("8819"),i=s.n(a);i.a},f0a1:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("a",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.user.isLogued,expression:"$store.state.user.isLogued"}],staticClass:"button is-floating is-primary",on:{click:function(t){return e.show_form(!0)}}},[s("b-icon",{attrs:{size:"is-small",icon:"border-all"}})],1),s("div",{staticClass:"modal",class:{"is-active":e.$store.state.user.isComponentModalActive}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[e._m(0),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){return e.close_form()}}})]),s("section",{staticClass:"modal-card-body"},[s("section",{staticClass:"container"},[s("b-steps",{scopedSlots:e._u([{key:"navigation",fn:function(t){t.previous;var a=t.next;return[s("div",{staticClass:"buttons"},[3==e.activeStep?s("b-button",{attrs:{type:"is-primary",size:"is-medium",loading:e.isLoading,expanded:""},on:{click:e.submit}},[e._v("¡Terminar y enviar!")]):0!==e.activeStep?s("b-button",{attrs:{type:"is-primary",disabled:a.disabled,size:"is-medium",expanded:""},on:{click:function(t){return t.preventDefault(),e.nextStep()}}},[e._v("Siguiente")]):e._e()],1)]}}]),model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},[s("b-step-item",{attrs:{clickable:!1,label:"Trámite",icon:"file-document"}},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-12"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(t){return e.optionSelected(1,"CONSTANCIA")}}},[s("p",{staticClass:"title is-5"},[e._v("Constancia de estudios")]),s("p",{staticClass:"subtitle is-6"},[e._v(" Requiere fotografía e INE ")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(t){return e.optionSelected(1,"HORARIO")}}},[s("p",{staticClass:"title is-5"},[e._v("Horario escolar")]),s("p",{staticClass:"subtitle is-6"},[e._v("Requiere INE")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(t){return e.optionSelected(1,"IMSS")}}},[s("p",{staticClass:"title is-5"},[e._v("Alta/Baja IMSS")]),s("p",{staticClass:"subtitle is-6"},[e._v("Requiere NSS, CURP e INE")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(t){return e.optionSelected(1,"SEGUIMIENTO")}}},[s("p",{staticClass:"title is-5"},[e._v("Seguimiento académico")]),s("p",{staticClass:"subtitle is-6"},[e._v(" Requiere INE ")])])])])])])]),s("b-step-item",{attrs:{clickable:!1,label:"Requisitos",icon:"file-document-edit"}},[s("b-message",{staticClass:"message",attrs:{title:e.option,type:"is-primary","has-icon":"",size:"is-small",closable:!1}},["CONSTANCIA"==e.option?s("div",[e._v(" ¡Bien!, has seleccionado "),s("strong",[e._v("Constancia de estudios")]),e._v(" un documento muy útil para validar tu actividad estudiantil, ahora solo falta seleccionar el tipo, llenar unos cuantos datos estudiantiles, subir tu INE, foto infantil y "),s("b",[e._v("¡Listo!")]),e._v(" trámite realizado. ")]):e._e(),"IMSS"==e.option?s("div",[e._v(" ¡Hola!, esta es la sección para darte de "),s("strong",[e._v("Alta o Baja del IMSS")]),e._v(", ahora solo falta llenar unos cuantos datos para el trámite, presentar una fotografía de tu INE y "),s("b",[e._v("¡Listo!")]),e._v(" trámite realizado. ")]):e._e(),"HORARIO"==e.option?s("div",[e._v(" ¡Hey!, aquí podrás solicitar tu "),s("strong",[e._v("Horario")]),e._v(", una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite, solo necesitas darle al botón de "),s("b",[e._v("siguiente")]),e._v(", enviarnos tus datos, una fotografía de tu INE y "),s("b",[e._v("¡Listo!")]),e._v(" trámite realizado. ")]):e._e(),"SEGUIMIENTO"==e.option?s("div",[e._v(" ¡Sí!, así de fácil es solicitar un "),s("strong",[e._v("Seguimiento académico")]),e._v(", un documento muy útil para ver tu progreso escolar, solo dale a "),s("b",[e._v("siguiente")]),e._v(", completa tus datos faltantes, una foto de tu INE y "),s("b",[e._v("¡Listo!")]),e._v(" trámite realizado. ")]):e._e()]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",[s("ValidationObserver",{ref:"form1"},["CONSTANCIA"==e.option?s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,i=t.valid;return[s("b-field",{attrs:{message:a,type:{"is-danger":a[0],"is-success":i},label:"Tipo de constancia"}},[s("b-select",{attrs:{size:"is-medium-small",expanded:"",placeholder:"Selecciona un tipo de constancia"},model:{value:e.schoolRequest.description,callback:function(t){e.$set(e.schoolRequest,"description",t)},expression:"schoolRequest.description"}},[s("option",{attrs:{value:"NORMAL"}},[e._v("Normal")]),s("option",{attrs:{value:"SITUR"}},[e._v("SITUR")]),s("option",{attrs:{value:"PROMEDIO"}},[e._v("Promedio")])])],1)]}}],null,!1,617343301)}):e._e(),"IMSS"==e.option?s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,i=t.valid;return[s("b-field",{attrs:{message:a,type:{"is-danger":a[0],"is-success":i},label:"Tipo de solicitud"}},[s("b-select",{attrs:{size:"is-medium-small",expanded:"",placeholder:"Seleccione una opcion"},model:{value:e.schoolRequest.description,callback:function(t){e.$set(e.schoolRequest,"description",t)},expression:"schoolRequest.description"}},[s("option",{attrs:{value:"ALTA_IMSS"}},[e._v("Alta")]),s("option",{attrs:{value:"BAJA_IMSS"}},[e._v("Baja")])])],1)]}}],null,!1,210101046)}):e._e(),"IMSS"==e.option?[s("b-field",{attrs:{label:"NSS"}},[s("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"NSS"},model:{value:e.student.NSS,callback:function(t){e.$set(e.student,"NSS",t)},expression:"student.NSS"}})],1),"ALTA_IMSS"==e.schoolRequest.description?s("b-field",{attrs:{label:"CURP"}},[s("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"CURP"},model:{value:e.student.CURP,callback:function(t){e.$set(e.student,"CURP",t)},expression:"student.CURP"}})],1):e._e(),"ALTA_IMSS"==e.schoolRequest.description?s("a",{staticClass:"is-12",attrs:{href:"https://www.gob.mx/curp/",target:"_blank"}},[e._v("Consultar CURP")]):e._e()]:e._e()],2)],1)])])],1),s("b-step-item",{attrs:{clickable:!1,label:"Datos",icon:"account"}},[s("ValidationObserver",{ref:"form2"},[s("b-field",{attrs:{label:"Nombre(s)"}},[s("BInputWithValidation",{attrs:{rules:"required",name:"name",type:"text",placeholder:"Nombre(s)"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),s("b-field",{attrs:{label:"Apellidos"}},[s("BInputWithValidation",{attrs:{rules:"required",name:"lastname",type:"text",placeholder:"Apellidos"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),s("b-field",{attrs:{label:"Matrícula"}},[s("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matrícula"},model:{value:e.student.enrollment,callback:function(t){e.$set(e.student,"enrollment",t)},expression:"student.enrollment"}})],1),s("b-field",{attrs:{label:"Carrera"}},[s("BSelectWithValidation",{attrs:{rules:"required",size:"is-small-medium",placeholder:"Selecciona tu carrera"},model:{value:e.student.career,callback:function(t){e.$set(e.student,"career",t)},expression:"student.career"}},[s("option",{attrs:{value:"IGE"}},[e._v("Ingeniería en Gestión Empresarial")]),s("option",{attrs:{value:"IA"}},[e._v("Ingeniería Ambiental")]),s("option",{attrs:{value:"IBQ"}},[e._v("Ingeniería Bioquímica")]),s("option",{attrs:{value:"IBM"}},[e._v("Ingeniería Biomédica")]),s("option",{attrs:{value:"IQ"}},[e._v("Ingeniería Química")]),s("option",{attrs:{value:"IELE"}},[e._v("Ingeniería Eléctrica")]),s("option",{attrs:{value:"IELC"}},[e._v("Ingeniería Electrónica")]),s("option",{attrs:{value:"IM"}},[e._v("Ingeniería Mecánica")]),s("option",{attrs:{value:"IC"}},[e._v("Ingeniería Civil")]),s("option",{attrs:{value:"II"}},[e._v("Ingeniería Industrial")]),s("option",{attrs:{value:"ISC"}},[e._v("Ingeniería en Sistemas Computacionales")]),s("option",{attrs:{value:"LA"}},[e._v("Licenciatura en Administración")])])],1),s("b-field",{attrs:{label:"Ingreso"}},[s("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:e.student.admission,callback:function(t){e.$set(e.student,"admission",t)},expression:"student.admission"}})],1)],1)],1),s("b-step-item",{attrs:{clickable:!1,label:"Archivos",icon:"cloud-upload"}},[s("b-message",{staticClass:"message",attrs:{title:"Carga de documentos",type:"is-primary","has-icon":"",size:"is-small",icon:"paperclip",closable:!1}},[s("strong",[e._v("¡IMPORTANTE!")]),e._v(" "),s("br"),e._v(" Solo se aceptan documentos en formato (.jpg, .jpeg, .png, .pdf) con un peso máximo de "),s("b",[e._v("4Mb")])]),s("ValidationObserver",{ref:"form3"},[[s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;t.valid;return[s("label",{staticClass:"label"},[e._v("INE")]),s("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.schoolRequest.INE}},[s("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.schoolRequest.INE,callback:function(t){e.$set(e.schoolRequest,"INE",t)},expression:"schoolRequest.INE"}},[s("span",{staticClass:"file-cta"},[s("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),s("span",{staticClass:"file-label"},[e._v("Click to upload")])],1),e.schoolRequest.INE?s("span",{staticClass:"file-name"},[e._v(" "+e._s(e.schoolRequest.INE.name)+" ")]):e._e()])],1),e._v(" "+e._s(a[0])+" ")]}}])}),s("br"),"CONSTANCIA"==e.option?[s("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;t.valid;return[s("label",{staticClass:"label"},[e._v("Foto infantil")]),s("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.schoolRequest.photo}},[s("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.schoolRequest.photo,callback:function(t){e.$set(e.schoolRequest,"photo",t)},expression:"schoolRequest.photo"}},[s("span",{staticClass:"file-cta"},[s("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),s("span",{staticClass:"file-label"},[e._v("Click to upload")])],1),e.schoolRequest.photo?s("span",{staticClass:"file-name"},[e._v(" "+e._s(e.schoolRequest.photo.name)+" ")]):e._e()])],1),e._v(" "+e._s(a[0])+" ")]}}],null,!1,4056502150)})]:e._e()]],2)],1)],1)],1)])])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"modal-card-title title-size"},[s("b",[e._v("Solicitud de documentos")])])}],o=s("2f62"),l=s("2612"),n={async mounted(){this.activeStep=0;await this.$store.dispatch("user/getStudent")},data(){return{file:null,activeStep:0,isLoading:!1,option:""}},computed:{...Object(o["b"])("user",["user","student","schoolRequest"])},methods:{show_form(e){this.$store.commit("user/SHOW_FORM",e)},optionSelected(e,t){this.activeStep=e,this.option=t,this.$store.commit("user/SET_TYPE",t)},async nextStep(){let e;switch(this.activeStep){case 1:if(e=await this.$refs.form1.validate(),!e)return;this.$refs.form1.$nextTick(()=>this.activeStep+=1);break;case 2:if(e=await this.$refs.form2.validate(),!e)return;this.$refs.form1.$nextTick(()=>this.activeStep+=1);break;default:break}},close_form(){this.$buefy.dialog.confirm({title:"¡Hey!",message:"Estás en proceso de realizar una solicitud. ¿Deseas cancelarla?",cancelText:"Continuar",confirmText:"Salir",type:"is-danger",hasIcon:!0,onConfirm:async()=>{this.$buefy.toast.open({message:"Solicitud cancelada",type:"is-danger"}),this.$store.commit("user/CLEAR_REQ"),this.show_form(!1),this.activeStep=0}})},async submit(){let e=await this.$refs.form3.validate();e&&this.$buefy.dialog.confirm({title:"¡Por último!",message:"Revisa que tus datos sean correctos.\n        Has seleccionado el trámite: "+this.option+" de tipo: "+this.$store.state.user.schoolRequest.description,cancelText:"Cancelar",confirmText:"Enviar",type:"is-info",hasIcon:!0,onConfirm:async()=>{this.isLoading=!0;const e=await Object(l["h"])(this.user.id,this.student),t=new FormData;for(var s in this.$store.commit("user/SET_STUDENT",e),console.log(e),this.schoolRequest)t.append(s,this.schoolRequest[s]);await Object(l["g"])(this.user.id,t);this.$buefy.toast.open({message:"¡Solicitud enviada correctamente!",type:"is-success"}),this.$store.commit("user/CLEAR_REQ"),this.show_form(!1),this.activeStep=0,this.isLoading=!1}})}}},r=n,c=(s("ad71"),s("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);t["default"]=u.exports}}]);