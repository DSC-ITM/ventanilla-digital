(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f47617c"],{"3b73":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?a("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},l=[],i={name:"FilePicker",props:{accept:{type:String,default:null}},data(){return{file:null,uploadPercent:0}},computed:{buttonLabel(){return this.file?"Selecciona otra imagen":"Seleccionar una imagen"}},methods:{upload(t){this.$emit("input",t)},progressEvent(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},r=i,n=a("2877"),o=Object(n["a"])(r,s,l,!1,null,null,null);e["a"]=o.exports},"7ab5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal"),a("hero-bar",[t._v(" Perfil "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/solicitudes"},slot:"right"},[t._v(" Solicitudes ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:"Perfil",icon:"account"}},[a("user-avatar",{staticClass:"has-max-width is-aligned-center"}),a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{expanded:"",value:t.user.first_name+" "+t.user.last_name,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Matrícula"}},[a("b-input",{attrs:{value:t.studentForm.enrollment?t.studentForm.enrollment:"Matrícula no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Correo"}},[a("b-input",{attrs:{expanded:"",value:t.user.email,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Carrera"}},[a("b-input",{attrs:{expanded:"",value:t.studentForm.career?t.careers[t.studentForm.career]:"Carrera no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Ingreso"}},[a("b-input",{attrs:{value:t.studentForm.admission?t.studentForm.admission+"° Ingreso":"Ingreso no establecido","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Especialidad"}},[a("b-input",{attrs:{value:t.studentForm.specialty?t.studentForm.specialty:t.studentForm.admission>7?"Especialidad no establecida":"No aplica","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"CURP"}},[a("b-input",{attrs:{value:t.studentForm.CURP?t.studentForm.CURP:"CURP no establecido","custom-class":"is-static",readonly:""}}),t.studentForm.CURP_file?a("button",{staticClass:"button is-small is-primary tag",attrs:{type:"button"},on:{click:function(e){return t.$refs.CURP_Preview.toggleModal()}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo CURP",position:"is-top"}},[a("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):t._e(),a("request-document-preview",{ref:"CURP_Preview",attrs:{url:t.studentForm.CURP_file,label:"CURP"}}),a("hr")],1),a("b-field",{attrs:{label:"NSS"}},[a("b-input",{attrs:{value:t.studentForm.NSS?t.studentForm.NSS:"NSS no establecido","custom-class":"is-static",readonly:""}}),t.studentForm.NSS_file?a("button",{staticClass:"button is-small is-primary tag",attrs:{type:"button"},on:{click:function(e){return t.$refs.NSS_Preview.toggleModal()}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo NSS",position:"is-top"}},[a("b-icon",{attrs:{icon:"eye-outline",size:"is-small"}})],1)],1):t._e(),a("request-document-preview",{ref:"NSS_Preview",attrs:{url:t.studentForm.NSS_file,label:"NSS"}}),a("hr")],1)],1),a("div",{staticClass:"tile is-child"},[a("profile-update-form",{attrs:{user:t.user}}),a("student-update-form",{attrs:{student:t.studentForm}})],1)],1),a("password-update-form",{staticClass:"tile is-child"})],1)],1)},l=[],i=a("2f62"),r=a("bc7a"),n=a("868e"),o=a("a138"),u=a("2646"),c=a("e892"),d={name:"Profile",data(){return{careers:u["a"]}},components:{Modal:()=>a.e("chunk-14160ea8").then(a.bind(null,"fe93")),PasswordUpdateForm:o["a"],ProfileUpdateForm:r["a"],StudentUpdateForm:n["a"],RequestDocumentPreview:c["a"]},computed:{titleStack(){return["Admin","Profile"]},...Object(i["b"])(["userName","userEmail"]),...Object(i["b"])("users",["user"]),...Object(i["b"])("students",["studentForm"])}},m=d,p=a("2877"),f=Object(p["a"])(m,s,l,!1,null,null,null);e["default"]=f.exports},"868e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Editar datos de estudiante",icon:"school"}},[a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Matrícula"}},[a("BInputWithValidation",{attrs:{rules:"required|matricula",name:"enrollment",type:"text",placeholder:"Matrícula"},model:{value:t.student.enrollment,callback:function(e){t.$set(t.student,"enrollment",e)},expression:"student.enrollment"}})],1),a("b-field",{attrs:{horizontal:"",label:"Carrera"}},[a("BSelectWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu carrera"},model:{value:t.student.career,callback:function(e){t.$set(t.student,"career",e)},expression:"student.career"}},t._l(t.careers,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(e))])})),0)],1),a("b-field",{attrs:{horizontal:"",label:"Ingreso"}},[a("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:t.student.admission,callback:function(e){t.$set(t.student,"admission",e)},expression:"student.admission"}})],1),t.student.admission>7?a("b-field",{attrs:{horizontal:"",label:"Especialidad"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Especialidad"},model:{value:t.student.specialty,callback:function(e){t.$set(t.student,"specialty",e)},expression:"student.specialty"}})],1):t._e(),a("b-field",{attrs:{horizontal:"",label:"CURP"}},[a("BInputWithValidation",{attrs:{name:"curp",type:"text",placeholder:"CURP"},model:{value:t.student.CURP,callback:function(e){t.$set(t.student,"CURP",e)},expression:"student.CURP"}})],1),a("b-field",{attrs:{horizontal:"",label:"NSS"}},[a("BInputWithValidation",{attrs:{type:"text",name:"nss",placeholder:"NSS"},model:{value:t.student.NSS,callback:function(e){t.$set(t.student,"NSS",e)},expression:"student.NSS"}})],1),a("hr"),a("ValidationProvider",{attrs:{rules:"pdf",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;e.valid;return[a("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.files.CURP_file},attrs:{horizontal:"",label:"Archivo CURP"}},[a("b-upload",{staticClass:"file-label",model:{value:t.files.CURP_file,callback:function(e){t.$set(t.files,"CURP_file",e)},expression:"files.CURP_file"}},[a("span",{staticClass:"file-cta"},[a("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),t.student.CURP_file?a("span",{staticClass:"file-label"},[t._v("Cambiar archivo")]):a("span",{staticClass:"file-label"},[t._v("Seleccionar archivo")])],1),t.files.CURP_file?a("span",{staticClass:"file-name"},[t._v(" "+t._s(t.files.CURP_file.name)+" ")]):t._e()])],1),t._v(" "+t._s(s[0])+" ")]}}],null,!0)}),a("br"),a("ValidationProvider",{attrs:{rules:"pdf",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;e.valid;return[a("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.files.NSS_file},attrs:{horizontal:"",label:"Archivo NSS"}},[a("b-upload",{staticClass:"file-label",model:{value:t.files.NSS_file,callback:function(e){t.$set(t.files,"NSS_file",e)},expression:"files.NSS_file"}},[a("span",{staticClass:"file-cta"},[a("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),t.student.NSS_file?a("span",{staticClass:"file-label"},[t._v("Cambiar archivo")]):a("span",{staticClass:"file-label"},[t._v("Seleccionar archivo")])],1),t.files.NSS_file?a("span",{staticClass:"file-name"},[t._v(" "+t._s(t.files.NSS_file.name)+" ")]):t._e()])],1),t._v(" "+t._s(s[0])+" ")]}}],null,!0)}),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},on:{click:function(e){e.preventDefault(),t.submit,s(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},l=[],i=a("2646");a("762d");var r={name:"StudentUpdateForm",props:["student","admin"],data(){return{isFileUploaded:!1,isLoading:!1,careers:i["a"],files:{CURP_file:null,NSS_file:null}}},mounted(){this.$store.commit("students/BASIC",{key:"studentForm",value:this.student||this.defaultForm}),console.log(this.student)},methods:{async submit(){this.isLoading=!0;try{this.student.specialty&&this.student.admission<8&&(this.student.specialty=null);var t=this.student,e=this.files,a=this.admin;await this.$store.dispatch("students/update",{studentForm:t,files:e,admin:a}),this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(s){console.log(s)}finally{this.isLoading=!1,this.files.NSS_file=null,this.files.CURP_file=null}}}},n=r,o=a("2877"),u=Object(o["a"])(n,s,l,!1,null,null,null);e["a"]=u.exports},a138:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Cambiar contraseña",icon:"lock"}},[a("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("form",[a("b-field",{attrs:{horizontal:"",label:"Contraseña actual"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña actual","password-reveal":""},model:{value:t.user.old_password,callback:function(e){t.$set(t.user,"old_password",e)},expression:"user.old_password"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Contraseña nueva"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña nueva","password-reveal":"",vid:"new_password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirmar contraseña"}},[a("BInputWithValidation",{attrs:{rules:"required|confirmed:new_password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:t.user.password_confirm,callback:function(e){t.$set(t.user,"password_confirm",e)},expression:"user.password_confirm"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.submit,s(t.submit)}}},[t._v(" Guardar ")])])])],1)]}}])})],1)},l=[],i=a("2612"),r={name:"PasswordUpdateForm",data(){return{isLoading:!1,user:{old_password:"",password:"",password_confirm:""}}},methods:{async submit(){this.isLoading=!0;try{await Object(i["b"])(this.user);this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(t){console.log(t)}finally{this.isLoading=!1}}}},n=r,o=a("2877"),u=Object(o["a"])(n,s,l,!1,null,null,null);e["a"]=u.exports},bc7a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Editar datos generales",icon:"account-circle"}},[a("ValidationObserver",{ref:"form1",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Nombre(s)"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),a("b-field",{attrs:{horizontal:"",label:"Apellidos"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellidos"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"is-primary"},on:{click:function(e){e.preventDefault(),t.submit,s(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},l=[],i=a("2f62"),r=a("3b73"),n=a("2612"),o={name:"ProfileUpdateForm",components:{FilePicker:r["a"]},props:["user"],data(){return{isFileUploaded:!1,isLoading:!1}},computed:{...Object(i["b"])(["userName","userLastName","userEmail"])},mounted(){},methods:{async submit(){this.isLoading=!0;try{await Object(n["i"])(this.user);this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(t){console.log(t)}finally{this.isLoading=!1}}},watch:{userName(t){this.form.name=t},userEmail(t){this.form.email=t}}},u=o,c=a("2877"),d=Object(c["a"])(u,s,l,!1,null,null,null);e["a"]=d.exports},e892:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("b-modal",{attrs:{width:640,scroll:"keep"},model:{value:t.isCardModalActive,callback:function(e){t.isCardModalActive=e},expression:"isCardModalActive"}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.label))]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.toggleModal()}}})]),a("section",{staticClass:"modal-card-body"},[a("embed",{attrs:{type:"application/pdf",src:t.url,width:"100%",height:"700"}})]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",on:{click:function(e){return t.toggleModal()}}},[t._v(" Cerrar ")])])])])],1)])},l=[],i={name:"DocumentPreview",props:["url","label"],data(){return{isCardModalActive:!1}},methods:{toggleModal(){this.isCardModalActive=!this.isCardModalActive}}},r=i,n=a("2877"),o=Object(n["a"])(r,s,l,!1,null,null,null);e["a"]=o.exports}}]);