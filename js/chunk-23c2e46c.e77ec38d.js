(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23c2e46c"],{d0ba:function(e,s,l){"use strict";l.r(s);var a=function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("ValidationObserver",{ref:"form3"},[[l("ValidationProvider",{attrs:{rules:"required|img",name:"description"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;s.valid;return[l("label",{staticClass:"label"},[e._v("INE")]),l("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.schoolRequest.INE}},[l("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.schoolRequest.INE,callback:function(s){e.$set(e.schoolRequest,"INE",s)},expression:"schoolRequest.INE"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.schoolRequest.INE?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.schoolRequest.INE.name)+" ")]):e._e()])],1),e._v(" "+e._s(a[0])+" ")]}}])}),l("br"),"CONSTANCIA"==e.option?[l("ValidationProvider",{attrs:{rules:"required|img",name:"description"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;s.valid;return[l("label",{staticClass:"label"},[e._v("Foto infantil")]),l("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.schoolRequest.photo}},[l("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.schoolRequest.photo,callback:function(s){e.$set(e.schoolRequest,"photo",s)},expression:"schoolRequest.photo"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.schoolRequest.photo?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.schoolRequest.photo.name)+" ")]):e._e()])],1),e._v(" "+e._s(a[0])+" ")]}}],null,!1,2472167676)})]:e._e(),"IMSS"==e.option?[l("ValidationProvider",{attrs:{rules:e.student.NSS_file?"pdf|size:4000":"required|pdf|size:4000",name:"'Vigencia de Seguro Social'"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;s.valid;return[l("label",{staticClass:"label"},[e._v("Vigencia de Seguro Social")]),l("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.files.NSS_file},attrs:{grouped:""}},[e.files.NSS_file?l("b-upload",{staticClass:"file-label",model:{value:e.files.NSS_file,callback:function(s){e.$set(e.files,"NSS_file",s)},expression:"files.NSS_file"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Cambiar archivo")])],1),e.files.NSS_file?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.NSS_file.name)+" ")]):e._e()]):l("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.files.NSS_file,callback:function(s){e.$set(e.files,"NSS_file",s)},expression:"files.NSS_file"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.files.NSS_file?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.NSS_file.name)+" ")]):e._e()]),e.student.NSS_file&&null==e.files.NSS_file?l("button",{staticClass:"button is-primary",attrs:{type:"button"},on:{click:function(s){return e.$refs.NSS_Preview.toggleModal()}}},[l("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar última Vigencia de Seguro Social subida",position:"is-top"}},[l("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):e._e(),l("request-document-preview",{ref:"NSS_Preview",attrs:{url:e.student.NSS_file,label:"Vigencia de Seguro Social"}})],1),e._v(" "+e._s(a[0])+" ")]}}],null,!1,3372438254)})]:e._e(),l("br"),"IMSS"==e.option&&"ALTA"==e.schoolRequest.description?[l("ValidationProvider",{attrs:{rules:e.student.CURP_file?"pdf|size:4000":"required|pdf|size:4000",name:"'CURP'"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;s.valid;return[l("label",{staticClass:"label"},[e._v("CURP")]),l("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.files.CURP_file},attrs:{grouped:""}},[e.files.CURP_file?l("b-upload",{staticClass:"file-label",model:{value:e.files.CURP_file,callback:function(s){e.$set(e.files,"CURP_file",s)},expression:"files.CURP_file"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Cambiar archivo")])],1),e.files.CURP_file?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.CURP_file.name)+" ")]):e._e()]):l("b-upload",{staticClass:"file-label",attrs:{required:""},model:{value:e.files.CURP_file,callback:function(s){e.$set(e.files,"CURP_file",s)},expression:"files.CURP_file"}},[l("span",{staticClass:"file-cta"},[l("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),l("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.files.CURP_file?l("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.CURP_file.name)+" ")]):e._e()]),e.student.CURP_file&&null==e.files.CURP_file?l("button",{staticClass:"button is-primary",attrs:{type:"button"},on:{click:function(s){return e.$refs.CURP_Preview.toggleModal()}}},[l("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar último CURP subido",position:"is-top"}},[l("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):e._e(),l("request-document-preview",{ref:"CURP_Preview",attrs:{url:e.student.CURP_file,label:"CURP"}})],1),l("br"),e._v(" "+e._s(a[0])+" ")]}}],null,!1,407835194)})]:e._e()]],2)},i=[],t=l("e892"),o={components:{RequestDocumentPreview:t["a"]},props:["option","schoolRequest","student","files"]},c=o,r=l("2877"),n=Object(r["a"])(c,a,i,!1,null,null,null);s["default"]=n.exports},e892:function(e,s,l){"use strict";var a=function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("section",[l("div",{staticClass:"container"},[l("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:e.isCardModalActive,callback:function(s){e.isCardModalActive=s},expression:"isCardModalActive"}},[l("div",{staticClass:"modal-card"},[l("header",{staticClass:"modal-card-head"},[l("p",{staticClass:"modal-card-title"},[e._v(e._s(e.label))]),l("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){return e.toggleModal()}}})]),l("section",{staticClass:"modal-card-body"},[l("embed",{attrs:{type:"application/pdf",src:e.url,width:"100%",height:"700"}})]),l("footer",{staticClass:"modal-card-foot"},[l("button",{staticClass:"button is-primary",on:{click:function(s){return e.toggleModal()}}},[e._v(" Cerrar ")])])])])],1)])},i=[],t={name:"DocumentPreview",props:["url","label"],data(){return{isCardModalActive:!1}},methods:{toggleModal(){this.isCardModalActive=!this.isCardModalActive}}},o=t,c=l("2877"),r=Object(c["a"])(o,a,i,!1,null,null,null);s["a"]=r.exports}}]);