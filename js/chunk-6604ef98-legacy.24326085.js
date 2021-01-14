(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6604ef98"],{"3b73":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:e.accept},on:{input:e.upload},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[e._v(e._s(e.buttonLabel))])],1)]),e.file?a("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()],1)},r=[],i={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Selecciona otra imagen":"Seleccionar una imagen"}},methods:{upload:function(e){this.$emit("input",e)},progressEvent:function(e){this.uploadPercent=Math.round(100*e.loaded/e.total)}}},l=i,n=a("2877"),o=Object(n["a"])(l,s,r,!1,null,null,null);t["a"]=o.exports},"7ab5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal"),a("hero-bar",[e._v(" Perfil "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/solicitudes"},slot:"right"},[e._v(" Solicitudes ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:"Perfil",icon:"account"}},[a("user-avatar",{staticClass:"has-max-width is-aligned-center"}),a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{expanded:"",value:e.user.first_name+" "+e.user.last_name,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Matrícula"}},[a("b-input",{attrs:{value:e.studentForm.enrollment?e.studentForm.enrollment:"Matrícula no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Correo"}},[a("b-input",{attrs:{expanded:"",value:e.user.email,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Carrera"}},[a("b-input",{attrs:{expanded:"",value:e.studentForm.career?e.careers[e.studentForm.career]:"Carrera no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Ingreso"}},[a("b-input",{attrs:{value:e.studentForm.admission?e.studentForm.admission+"° Ingreso":"Ingreso no establecido","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Especialidad"}},[a("b-input",{attrs:{value:e.studentForm.specialty?e.studentForm.specialty:e.studentForm.admission>7?"Especialidad no establecida":"No aplica","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"CURP"}},[a("b-input",{attrs:{value:e.studentForm.CURP?e.studentForm.CURP:"CURP no establecido","custom-class":"is-static",readonly:""}}),e.studentForm.CURP_file?a("button",{staticClass:"button is-small is-primary tag",attrs:{type:"button"},on:{click:function(t){return e.$refs.CURP_Preview.toggleModal()}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo CURP",position:"is-top"}},[a("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):e._e(),a("request-document-preview",{ref:"CURP_Preview",attrs:{url:e.studentForm.CURP_file,label:"CURP"}}),a("hr")],1),a("b-field",{attrs:{label:"NSS"}},[a("b-input",{attrs:{value:e.studentForm.NSS?e.studentForm.NSS:"NSS no establecido","custom-class":"is-static",readonly:""}}),e.studentForm.NSS_file?a("button",{staticClass:"button is-small is-primary tag",attrs:{type:"button"},on:{click:function(t){return e.$refs.NSS_Preview.toggleModal()}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo NSS",position:"is-top"}},[a("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):e._e(),a("request-document-preview",{ref:"NSS_Preview",attrs:{url:e.studentForm.NSS_file,label:"NSS"}}),a("hr")],1)],1),a("div",{staticClass:"tile is-child"},[a("profile-update-form",{attrs:{user:e.user}}),a("student-update-form",{attrs:{student:e.studentForm}})],1)],1),a("password-update-form",{staticClass:"tile is-child"})],1)],1)},r=[],i=(a("d3b7"),a("5530")),l=a("2f62"),n=a("bc7a"),o=a("868e"),u=a("a138"),c=a("2646"),d=a("e892"),f={name:"Profile",data:function(){return{careers:c["a"]}},components:{Modal:function(){return a.e("chunk-8a060de8").then(a.bind(null,"fe93"))},PasswordUpdateForm:u["a"],ProfileUpdateForm:n["a"],StudentUpdateForm:o["a"],RequestDocumentPreview:d["a"]},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({titleStack:function(){return["Admin","Profile"]}},Object(l["b"])(["userName","userEmail"])),Object(l["b"])("users",["user"])),Object(l["b"])("students",["studentForm"]))},p=f,m=a("2877"),b=Object(m["a"])(p,s,r,!1,null,null,null);t["default"]=b.exports},"868e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Editar datos de estudiante",icon:"school"}},[a("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Matrícula"}},[a("BInputWithValidation",{attrs:{rules:"required|matricula",name:"enrollment",type:"text",placeholder:"Matrícula"},model:{value:e.student.enrollment,callback:function(t){e.$set(e.student,"enrollment",t)},expression:"student.enrollment"}})],1),a("b-field",{attrs:{horizontal:"",label:"Carrera"}},[a("BSelectWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu carrera"},model:{value:e.student.career,callback:function(t){e.$set(e.student,"career",t)},expression:"student.career"}},e._l(e.careers,(function(t,s){return a("option",{key:s,domProps:{value:s}},[e._v(e._s(t))])})),0)],1),a("b-field",{attrs:{horizontal:"",label:"Ingreso"}},[a("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:e.student.admission,callback:function(t){e.$set(e.student,"admission",t)},expression:"student.admission"}})],1),e.student.admission>7?a("b-field",{attrs:{horizontal:"",label:"Especialidad"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Especialidad"},model:{value:e.student.specialty,callback:function(t){e.$set(e.student,"specialty",t)},expression:"student.specialty"}})],1):e._e(),a("b-field",{attrs:{horizontal:"",label:"CURP"}},[a("BInputWithValidation",{attrs:{name:"curp",type:"text",placeholder:"CURP"},model:{value:e.student.CURP,callback:function(t){e.$set(e.student,"CURP",t)},expression:"student.CURP"}})],1),a("b-field",{attrs:{horizontal:"",label:"NSS"}},[a("BInputWithValidation",{attrs:{type:"text",name:"nss",placeholder:"NSS"},model:{value:e.student.NSS,callback:function(t){e.$set(e.student,"NSS",t)},expression:"student.NSS"}})],1),a("hr"),a("ValidationProvider",{attrs:{rules:"pdf",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;t.valid;return[a("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.files.CURP_file},attrs:{horizontal:"",label:"Archivo CURP"}},[a("b-upload",{staticClass:"file-label",model:{value:e.files.CURP_file,callback:function(t){e.$set(e.files,"CURP_file",t)},expression:"files.CURP_file"}},[a("span",{staticClass:"file-cta"},[a("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e.student.CURP_file?a("span",{staticClass:"file-label"},[e._v("Cambiar archivo")]):a("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.files.CURP_file?a("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.CURP_file.name)+" ")]):e._e()])],1),e._v(" "+e._s(s[0])+" ")]}}],null,!0)}),a("br"),a("ValidationProvider",{attrs:{rules:"pdf",name:"description"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;t.valid;return[a("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.files.NSS_file},attrs:{horizontal:"",label:"Archivo NSS"}},[a("b-upload",{staticClass:"file-label",model:{value:e.files.NSS_file,callback:function(t){e.$set(e.files,"NSS_file",t)},expression:"files.NSS_file"}},[a("span",{staticClass:"file-cta"},[a("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e.student.NSS_file?a("span",{staticClass:"file-label"},[e._v("Cambiar archivo")]):a("span",{staticClass:"file-label"},[e._v("Seleccionar archivo")])],1),e.files.NSS_file?a("span",{staticClass:"file-name"},[e._v(" "+e._s(e.files.NSS_file.name)+" ")]):e._e()])],1),e._v(" "+e._s(s[0])+" ")]}}],null,!0)}),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])]}}])})],1)},r=[],i=(a("96cf"),a("1da1")),l=a("2646"),n=(a("762d"),{name:"StudentUpdateForm",props:["student","admin"],data:function(){return{isFileUploaded:!1,isLoading:!1,careers:l["a"],files:{CURP_file:null,NSS_file:null}}},mounted:function(){this.$store.commit("students/BASIC",{key:"studentForm",value:this.student||this.defaultForm}),console.log(this.student)},methods:{submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,e.student.specialty&&e.student.admission<8&&(e.student.specialty=null),a=e.student,s=e.files,r=e.admin,t.next=8,e.$store.dispatch("students/update",{studentForm:a,files:s,admin:r});case 8:e.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:return t.prev=14,e.isLoading=!1,e.files.NSS_file=null,e.files.CURP_file=null,t.finish(14);case 19:case"end":return t.stop()}}),t,null,[[1,11,14,19]])})))()}}}),o=n,u=a("2877"),c=Object(u["a"])(o,s,r,!1,null,null,null);t["a"]=c.exports},a138:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Cambiar contraseña",icon:"lock"}},[a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("form",[a("b-field",{attrs:{horizontal:"",label:"Contraseña actual"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña actual","password-reveal":""},model:{value:e.user.old_password,callback:function(t){e.$set(e.user,"old_password",t)},expression:"user.old_password"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Contraseña nueva"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña nueva","password-reveal":"",vid:"new_password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirmar contraseña"}},[a("BInputWithValidation",{attrs:{rules:"required|confirmed:new_password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(t){e.$set(e.user,"password_confirm",t)},expression:"user.password_confirm"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])],1)]}}])})],1)},r=[],i=(a("96cf"),a("1da1")),l=a("2612"),n={name:"PasswordUpdateForm",data:function(){return{isLoading:!1,user:{old_password:"",password:"",password_confirm:""}}},methods:{submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(l["b"])(e.user);case 4:t.sent,e.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}}},o=n,u=a("2877"),c=Object(u["a"])(o,s,r,!1,null,null,null);t["a"]=c.exports},b0c0:function(e,t,a){var s=a("83ab"),r=a("9bf2").f,i=Function.prototype,l=i.toString,n=/^\s*function ([^ (]*)/,o="name";s&&!(o in i)&&r(i,o,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})},bc7a:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Editar datos generales",icon:"account-circle"}},[a("ValidationObserver",{ref:"form1",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Nombre(s)"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),a("b-field",{attrs:{horizontal:"",label:"Apellidos"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellidos"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"is-primary"},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])]}}])})],1)},r=[],i=(a("b0c0"),a("96cf"),a("1da1")),l=a("5530"),n=a("2f62"),o=a("3b73"),u=a("2612"),c={name:"ProfileUpdateForm",components:{FilePicker:o["a"]},props:["user"],data:function(){return{isFileUploaded:!1,isLoading:!1}},computed:Object(l["a"])({},Object(n["b"])(["userName","userLastName","userEmail"])),mounted:function(){},methods:{submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(u["i"])(e.user);case 4:t.sent,e.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}},watch:{userName:function(e){this.form.name=e},userEmail:function(e){this.form.email=e}}},d=c,f=a("2877"),p=Object(f["a"])(d,s,r,!1,null,null,null);t["a"]=p.exports},e892:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"container"},[a("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:e.isCardModalActive,callback:function(t){e.isCardModalActive=t},expression:"isCardModalActive"}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v(e._s(e.label))]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){return e.toggleModal()}}})]),a("section",{staticClass:"modal-card-body"},[a("embed",{attrs:{type:"application/pdf",src:e.url,width:"100%",height:"700"}})]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",on:{click:function(t){return e.toggleModal()}}},[e._v(" Cerrar ")])])])])],1)])},r=[],i={name:"DocumentPreview",props:["url","label"],data:function(){return{isCardModalActive:!1}},methods:{toggleModal:function(){this.isCardModalActive=!this.isCardModalActive}}},l=i,n=a("2877"),o=Object(n["a"])(l,s,r,!1,null,null,null);t["a"]=o.exports}}]);