(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14160ea8"],{"52dd":function(t,e,s){"use strict";var i=s("b205"),o=s.n(i);o.a},b205:function(t,e,s){},fe93:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("a",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.users.isLogued&&!t.$store.state.users.isStaff,expression:"$store.state.users.isLogued && !$store.state.users.isStaff"}],staticClass:"button is-floating is-primary",on:{click:function(e){return t.show_form(!0)}}},[s("b-icon",{attrs:{size:"is-small",icon:"border-all"}})],1),s("div",{staticClass:"modal",class:{"is-active":t.$store.state.users.isComponentModalActive}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[t._m(0),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.close_form()}}})]),s("section",{staticClass:"modal-card-body"},[s("section",{staticClass:"container"},[s("b-steps",{scopedSlots:t._u([{key:"navigation",fn:function(e){e.previous;var i=e.next;return[s("div",{staticClass:"buttons"},[3===t.activeStep?s("b-button",{attrs:{type:"is-primary",size:"is-medium",loading:t.isLoading,expanded:""},on:{click:t.submit}},[t._v("¡Terminar y enviar!")]):0!==t.activeStep?s("b-button",{attrs:{type:"is-primary",disabled:i.disabled,size:"is-medium",expanded:""},on:{click:function(e){return e.preventDefault(),t.nextStep()}}},[t._v("Siguiente")]):t._e()],1)]}}]),model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("b-step-item",{attrs:{clickable:!1,label:"Trámite",icon:"file-document"}},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-12"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"CONSTANCIA")}}},[s("p",{staticClass:"title is-5"},[t._v("Constancia de estudios")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Requiere fotografía e INE ")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"HORARIO")}}},[s("p",{staticClass:"title is-5"},[t._v("Horario escolar")]),s("p",{staticClass:"subtitle is-6"},[t._v("Requiere INE")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"IMSS")}}},[s("p",{staticClass:"title is-5"},[t._v("Alta/Baja IMSS")]),s("p",{staticClass:"subtitle is-6"},[t._v("Requiere NSS, CURP e INE")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"SEGUIMIENTO")}}},[s("p",{staticClass:"title is-5"},[t._v("Seguimiento académico (Kardex)")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Requiere INE ")])])])])])])]),s("b-step-item",{attrs:{clickable:!1,label:"Requisitos",icon:"file-document-edit"}},[s("OptionsDescription",{attrs:{option:t.option}}),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",[s("RequestForm",{ref:"step1",attrs:{option:t.option,student:t.studentForm,schoolRequest:t.schoolRequest,request:t.request}})],1)])])],1),s("b-step-item",{attrs:{clickable:!1,label:"Datos",icon:"account"}},[s("StudentDataForm",{ref:"step2",attrs:{user:t.user,student:t.studentForm,careers:t.careers}})],1),s("b-step-item",{attrs:{clickable:!1,label:"Archivos",icon:"cloud-upload"}},[s("b-message",{staticClass:"message",attrs:{title:"Carga de documentos",type:"is-primary","has-icon":"",size:"is-small",icon:"paperclip",closable:!1}},[s("strong",[t._v("¡IMPORTANTE!")]),t._v(" "),s("br"),t._v(" Solo se aceptan documentos en formato (.jpg, .jpeg, .png, .pdf) con un peso máximo de "),s("b",[t._v("4Mb")]),t._v(". "),s("br"),t._v(" Si cuenta con un documento anterior puede usar ese mismo, no es necesario hacer nada en ese caso. "),s("br"),t._v(" Los únicos documentos que no se guardan son el INE y la foto infantil. ")]),s("IdImagesForm",{ref:"step3",attrs:{option:t.option,schoolRequest:t.schoolRequest,student:t.studentForm,files:t.files}})],1)],1)],1)])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-card-title title-size"},[s("b",[t._v("Solicitud de documentos")])])}],a=s("2f62"),n=(s("762d"),s("7698")),c=s("2646"),r={async mounted(){this.$store.commit("students/BASIC",{key:"studentForm",value:this.user.student||{}}),this.activeStep=0},data(){return{file:null,activeStep:0,isLoading:!1,option:"",careers:c["a"],request:{otherDescription:"",vacation:!1},files:{CURP_file:null,NSS_file:null}}},components:{OptionsDescription:()=>s.e("chunk-2d22578a").then(s.bind(null,"e515")),RequestForm:()=>s.e("chunk-2d0af431").then(s.bind(null,"0e28")),StudentDataForm:()=>s.e("chunk-2d0b1d96").then(s.bind(null,"2233")),IdImagesForm:()=>s.e("chunk-23c2e46c").then(s.bind(null,"d0ba"))},computed:{...Object(a["b"])("users",["user","schoolRequest"]),...Object(a["b"])("students",["studentForm"])},methods:{show_form(t){this.$store.commit("users/SHOW_FORM",t)},optionSelected(t,e){this.activeStep=t,this.option=e,this.$store.commit("users/SET_TYPE",e)},async nextStep(){let t;switch(this.activeStep){case 1:if(t=await this.$refs.step1.$refs.form1.validate(),!t)return;this.$refs.step1.$refs.form1.$nextTick(()=>this.activeStep+=1);break;case 2:if(t=await this.$refs.step2.$refs.form2.validate(),!t)return;this.$refs.step1.$refs.form1.$nextTick(()=>this.activeStep+=1);break;default:break}},close_form(){0!=this.activeStep?this.$buefy.dialog.confirm({title:"¡Hey!",message:"Estás en proceso de realizar una solicitud. ¿Deseas cancelarla?",cancelText:"Continuar",confirmText:"Salir",type:"is-danger",hasIcon:!0,onConfirm:async()=>{this.$buefy.toast.open({message:"Solicitud cancelada",type:"is-danger"}),this.request.otherDescription="",this.request.vacation=!1,this.$store.commit("users/CLEAR_REQ"),this.show_form(!1),this.activeStep=0}}):this.close_form_direc()},close_form_direc(){this.request.otherDescription="",this.request.vacation=!1,this.$store.commit("users/CLEAR_REQ"),this.show_form(!1),this.activeStep=0},async submit(){let t=await this.$refs.step3.$refs.form3.validate();if(!t)return;let e="";this.schoolRequest.description?("OTRO"===this.schoolRequest.description&&(this.schoolRequest.description=this.request.otherDescription.toUpperCase(),this.request.otherDescription=""),this.request.vacation&&(this.schoolRequest.description+=" CON PERÍODO VACACIONAL",this.request.vacation=!1),e="Revisa que tus datos sean correctos.\n        Has seleccionado el trámite: "+this.option+" de tipo: "+this.schoolRequest.description):e="Revisa que tus datos sean correctos.\n        Has seleccionado el trámite: "+this.option,this.$buefy.dialog.confirm({title:"¡Por último!",message:e,cancelText:"Cancelar",confirmText:"Enviar",type:"is-info",hasIcon:!0,onConfirm:async()=>{this.isLoading=!0;try{var t=this.studentForm,e=this.files;await this.$store.dispatch("students/update",{studentForm:t,files:e}),this.$store.commit("users/SET_STUDENT",this.studentForm);const i=new FormData;for(var s in this.schoolRequest)i.append(s,this.schoolRequest[s]);const o=await Object(n["a"])(i);console.log(o),this.$buefy.toast.open({message:"¡Solicitud enviada correctamente!",type:"is-success"}),this.$store.commit("users/CLEAR_REQ"),this.show_form(!1),this.activeStep=0}catch(i){console.log(i),this.$dw.messages.alertErrorDialog({title:"Trámite pendiente: "+this.schoolRequest.type,message:"No es posible tramitar dicho documento mientras tengas una solicitud del mismo pendiente"}).then(()=>{this.close_form_direc()})}finally{this.isLoading=!1}}})}}},l=r,u=(s("52dd"),s("2877")),d=Object(u["a"])(l,i,o,!1,null,null,null);e["default"]=d.exports}}]);