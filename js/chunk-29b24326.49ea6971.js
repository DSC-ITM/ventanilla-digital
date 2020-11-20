(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29b24326"],{"3b73":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:e.accept},on:{input:e.upload},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[e._v(e._s(e.buttonLabel))])],1)]),e.file?a("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()],1)},r=[],l={name:"FilePicker",props:{accept:{type:String,default:null}},data(){return{file:null,uploadPercent:0}},computed:{buttonLabel(){return this.file?"Selecciona otra imagen":"Seleccionar una imagen"}},methods:{upload(e){this.$emit("input",e)},progressEvent(e){this.uploadPercent=Math.round(100*e.loaded/e.total)}}},n=l,i=a("2877"),o=Object(i["a"])(n,s,r,!1,null,null,null);t["a"]=o.exports},"762d":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var s=a("a27e");function r(e){return Object(s["a"])({url:"/students/",method:"POST",data:e})}function l(){return Object(s["a"])({url:"/requests/",method:"GET"})}},"7ab5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal"),a("hero-bar",[e._v(" Perfil "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/dashboard"},slot:"right"},[e._v(" Solicitudes ")])],1),a("section",{staticClass:"section is-main-section"},[a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:"Perfil",icon:"account"}},[a("user-avatar",{staticClass:"has-max-width is-aligned-center"}),a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{expanded:"",value:e.user.first_name+" "+e.user.last_name,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Matrícula"}},[a("b-input",{attrs:{value:e.student.enrollment?e.student.enrollment:"Matrícula no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Correo"}},[a("b-input",{attrs:{expanded:"",value:e.user.email,"custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Carrera"}},[a("b-input",{attrs:{expanded:"",value:e.student.career?e.careers[e.student.career]:"Carrera no establecida","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"Ingreso"}},[a("b-input",{attrs:{value:e.student.admission?e.student.admission+"° Ingreso":"Ingreso no establecido","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"CURP"}},[a("b-input",{attrs:{expanded:"",value:e.student.CURP?e.student.CURP:"CURP no establecido","custom-class":"is-static",readonly:""}}),a("hr")],1),a("b-field",{attrs:{label:"NSS"}},[a("b-input",{attrs:{expanded:"",value:e.student.NSS?e.student.NSS:"NSS no establecido","custom-class":"is-static",readonly:""}}),a("hr")],1)],1),a("div",{staticClass:"tile is-child"},[a("profile-update-form"),a("student-update-form")],1)],1),a("password-update-form",{staticClass:"tile is-child"})],1)],1)},r=[],l=a("2f62"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Editar datos generales",icon:"account-circle"}},[a("ValidationObserver",{ref:"form1",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Nombre(s)"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),a("b-field",{attrs:{horizontal:"",label:"Apellidos"}},[a("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellidos"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"is-primary"},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])]}}])})],1)},i=[],o=a("3b73"),u=a("2612"),d={name:"ProfileUpdateForm",components:{FilePicker:o["a"]},data(){return{isFileUploaded:!1,isLoading:!1}},computed:{...Object(l["b"])(["userName","userLastName","userEmail"]),...Object(l["b"])("users",["user"])},mounted(){},methods:{async submit(){this.isLoading=!0;try{await Object(u["h"])(this.user);this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(e){console.log(e)}finally{this.isLoading=!1}}},watch:{userName(e){this.form.name=e},userEmail(e){this.form.email=e}}},c=d,m=a("2877"),p=Object(m["a"])(c,n,i,!1,null,null,null),b=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Editar datos de estudiante",icon:"school"}},[a("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("b-field",{attrs:{horizontal:"",label:"Matrícula"}},[a("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matrícula"},model:{value:e.student.enrollment,callback:function(t){e.$set(e.student,"enrollment",t)},expression:"student.enrollment"}})],1),a("b-field",{attrs:{horizontal:"",label:"Carrera"}},[a("BSelectWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu carrera"},model:{value:e.student.career,callback:function(t){e.$set(e.student,"career",t)},expression:"student.career"}},e._l(e.careers,(function(t,s){return a("option",{key:s,domProps:{value:s}},[e._v(e._s(t))])})),0)],1),a("b-field",{attrs:{horizontal:"",label:"Ingreso"}},[a("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:e.student.admission,callback:function(t){e.$set(e.student,"admission",t)},expression:"student.admission"}})],1),a("b-field",{attrs:{horizontal:"",label:"CURP"}},[a("BInputWithValidation",{attrs:{type:"text",placeholder:"CURP"},model:{value:e.student.CURP,callback:function(t){e.$set(e.student,"CURP",t)},expression:"student.CURP"}})],1),a("b-field",{attrs:{horizontal:"",label:"NSS"}},[a("BInputWithValidation",{attrs:{type:"text",placeholder:"NSS"},model:{value:e.student.NSS,callback:function(t){e.$set(e.student,"NSS",t)},expression:"student.NSS"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])]}}])})],1)},h=[],v=a("2646"),_=a("762d"),y={name:"StudentUpdateForm",data(){return{isFileUploaded:!1,isLoading:!1,careers:v["a"]}},computed:{...Object(l["b"])(["userName","userLastName","userEmail"]),...Object(l["b"])("users",["user","student"])},mounted(){},methods:{async submit(){this.isLoading=!0;try{await Object(_["a"])(this.student);this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(e){console.log(e)}finally{this.isLoading=!1}}},watch:{userName(e){this.form.name=e},userEmail(e){this.form.email=e}}},g=y,w=Object(m["a"])(g,f,h,!1,null,null,null),C=w.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Cambiar contraseña",icon:"lock"}},[a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.handleSubmit;return[a("form",[a("b-field",{attrs:{horizontal:"",label:"Contraseña actual"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña actual","password-reveal":""},model:{value:e.user.old_password,callback:function(t){e.$set(e.user,"old_password",t)},expression:"user.old_password"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Contraseña nueva"}},[a("BInputWithValidation",{attrs:{rules:"required|len",type:"password",placeholder:"Contraseña nueva","password-reveal":"",vid:"new_password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirmar contraseña"}},[a("BInputWithValidation",{attrs:{rules:"required|confirmed:new_password",name:"Password",type:"password",placeholder:"Confirmar contraseña","password-reveal":""},model:{value:e.user.password_confirm,callback:function(t){e.$set(e.user,"password_confirm",t)},expression:"user.password_confirm"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.submit,s(e.submit)}}},[e._v(" Guardar ")])])])],1)]}}])})],1)},k=[],x={name:"PasswordUpdateForm",data(){return{isLoading:!1,user:{old_password:"",password:"",password_confirm:""}}},methods:{async submit(){this.isLoading=!0;try{await Object(u["b"])(this.user);this.$buefy.snackbar.open({message:"Cambios guardados",queue:!1})}catch(e){console.log(e)}finally{this.isLoading=!1}}}},P=x,O=Object(m["a"])(P,S,k,!1,null,null,null),N=O.exports,$={name:"Profile",data(){return{careers:v["a"]}},components:{Modal:()=>a.e("chunk-196752e9").then(a.bind(null,"fe93")),PasswordUpdateForm:N,ProfileUpdateForm:b,StudentUpdateForm:C},computed:{titleStack(){return["Admin","Profile"]},...Object(l["b"])(["userName","userEmail"]),...Object(l["b"])("users",["user","student"])}},U=$,j=Object(m["a"])(U,s,r,!1,null,null,null);t["default"]=j.exports}}]);