(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f62ebe","chunk-8a060de8"],{"52dd":function(t,e,s){"use strict";var i=s("b205"),n=s.n(i);n.a},"762d":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return a})),s.d(e,"b",(function(){return o}));var i=s("a27e");function n(t){return Object(i["a"])({url:"/students/",method:"POST",data:t})}function r(){return Object(i["a"])({url:"/requests/",method:"GET"})}function a(t){return Object(i["a"])({url:"/students/",method:"GET",params:t})}function o(t){return Object(i["a"])({url:"/students/".concat(t,"/"),method:"GET"})}},b205:function(t,e,s){},e01a:function(t,e,s){"use strict";var i=s("23e7"),n=s("83ab"),r=s("da84"),a=s("5135"),o=s("861d"),c=s("9bf2").f,u=s("e893"),l=r.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(p,l);var f=p.prototype=l.prototype;f.constructor=p;var m=f.toString,v="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=m.call(t);if(a(d,t))return"";var s=v?e.slice(7,-1):e.replace(b,"$1");return""===s?void 0:s}}),i({global:!0,forced:!0},{Symbol:p})}},fe93:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("a",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.users.isLogued,expression:"$store.state.users.isLogued"}],staticClass:"button is-floating is-primary",on:{click:function(e){return t.show_form(!0)}}},[s("b-icon",{attrs:{size:"is-small",icon:"border-all"}})],1),s("div",{staticClass:"modal",class:{"is-active":t.$store.state.users.isComponentModalActive}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[t._m(0),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.close_form()}}})]),s("section",{staticClass:"modal-card-body"},[s("section",{staticClass:"container"},[s("b-steps",{scopedSlots:t._u([{key:"navigation",fn:function(e){e.previous;var i=e.next;return[s("div",{staticClass:"buttons"},[3==t.activeStep?s("b-button",{attrs:{type:"is-primary",size:"is-medium",loading:t.isLoading,expanded:""},on:{click:t.submit}},[t._v("¡Terminar y enviar!")]):0!==t.activeStep?s("b-button",{attrs:{type:"is-primary",disabled:i.disabled,size:"is-medium",expanded:""},on:{click:function(e){return e.preventDefault(),t.nextStep()}}},[t._v("Siguiente")]):t._e()],1)]}}]),model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("b-step-item",{attrs:{clickable:!1,label:"Trámite",icon:"file-document"}},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-12"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"CONSTANCIA")}}},[s("p",{staticClass:"title is-5"},[t._v("Constancia de estudios")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Requiere fotografía e INE ")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"HORARIO")}}},[s("p",{staticClass:"title is-5"},[t._v("Horario escolar")]),s("p",{staticClass:"subtitle is-6"},[t._v("Requiere INE")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"IMSS")}}},[s("p",{staticClass:"title is-5"},[t._v("Alta/Baja IMSS")]),s("p",{staticClass:"subtitle is-6"},[t._v("Requiere NSS, CURP e INE")])]),s("article",{staticClass:"tile is-child notification is-primary dgw-option",on:{click:function(e){return t.optionSelected(1,"SEGUIMIENTO")}}},[s("p",{staticClass:"title is-5"},[t._v("Seguimiento académico")]),s("p",{staticClass:"subtitle is-6"},[t._v(" Requiere INE ")])])])])])])]),s("b-step-item",{attrs:{clickable:!1,label:"Requisitos",icon:"file-document-edit"}},[s("OptionsDescription",{attrs:{option:t.option}}),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",[s("RequestForm",{ref:"step1",attrs:{option:t.option,student:t.student,schoolRequest:t.schoolRequest,request:t.request}})],1)])])],1),s("b-step-item",{attrs:{clickable:!1,label:"Datos",icon:"account"}},[s("StudentDataForm",{ref:"step2",attrs:{user:t.user,student:t.student,careers:t.careers}})],1),s("b-step-item",{attrs:{clickable:!1,label:"Archivos",icon:"cloud-upload"}},[s("b-message",{staticClass:"message",attrs:{title:"Carga de documentos",type:"is-primary","has-icon":"",size:"is-small",icon:"paperclip",closable:!1}},[s("strong",[t._v("¡IMPORTANTE!")]),t._v(" "),s("br"),t._v(" Solo se aceptan documentos en formato (.jpg, .jpeg, .png, .pdf) con un peso máximo de "),s("b",[t._v("4Mb")])]),s("IdImagesForm",{ref:"step3",attrs:{option:t.option,schoolRequest:t.schoolRequest}})],1)],1)],1)])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-card-title title-size"},[s("b",[t._v("Solicitud de documentos")])])}],r=(s("a4d3"),s("e01a"),s("d3b7"),s("5530")),a=(s("96cf"),s("1da1")),o=s("2f62"),c=s("762d"),u=s("7698"),l=s("2646"),d={mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.activeStep=0;case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{file:null,activeStep:0,isLoading:!1,option:"",careers:l["a"],request:{otherDescription:"",vacation:!1}}},components:{OptionsDescription:function(){return s.e("chunk-2d22578a").then(s.bind(null,"e515"))},RequestForm:function(){return s.e("chunk-2d0af431").then(s.bind(null,"0e28"))},StudentDataForm:function(){return s.e("chunk-2d0b1d96").then(s.bind(null,"2233"))},IdImagesForm:function(){return s.e("chunk-2d21d681").then(s.bind(null,"d0ba"))}},computed:Object(r["a"])({},Object(o["b"])("users",["user","student","schoolRequest"])),methods:{show_form:function(t){this.$store.commit("users/SHOW_FORM",t)},optionSelected:function(t,e){this.activeStep=t,this.option=e,this.$store.commit("users/SET_TYPE",e)},nextStep:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=t.activeStep,e.next=1===e.t0?3:2===e.t0?10:17;break;case 3:return e.next=5,t.$refs.step1.$refs.form1.validate();case 5:if(s=e.sent,s){e.next=8;break}return e.abrupt("return");case 8:return t.$refs.step1.$refs.form1.$nextTick((function(){return t.activeStep+=1})),e.abrupt("break",18);case 10:return e.next=12,t.$refs.step2.$refs.form2.validate();case 12:if(s=e.sent,s){e.next=15;break}return e.abrupt("return");case 15:return t.$refs.step1.$refs.form1.$nextTick((function(){return t.activeStep+=1})),e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})))()},close_form:function(){var t=this;this.$buefy.dialog.confirm({title:"¡Hey!",message:"Estás en proceso de realizar una solicitud. ¿Deseas cancelarla?",cancelText:"Continuar",confirmText:"Salir",type:"is-danger",hasIcon:!0,onConfirm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$buefy.toast.open({message:"Solicitud cancelada",type:"is-danger"}),t.request.otherDescription="",t.request.vacation=!1,t.$store.commit("users/CLEAR_REQ"),t.show_form(!1),t.activeStep=0;case 6:case"end":return e.stop()}}),e)})));function s(){return e.apply(this,arguments)}return s}()})},submit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.step3.$refs.form3.validate();case 2:if(s=e.sent,s){e.next=5;break}return e.abrupt("return");case 5:i="",t.schoolRequest.description?("OTRO"==t.schoolRequest.description&&(t.schoolRequest.description=t.request.otherDescription.toUpperCase(),t.request.otherDescription=""),t.request.vacation&&(t.schoolRequest.description+=" CON PERÍODO VACACIONAL",t.request.vacation=!1),i="Revisa que tus datos sean correctos.\n        Has seleccionado el trámite: "+t.option+" de tipo: "+t.schoolRequest.description):i="Revisa que tus datos sean correctos.\n        Has seleccionado el trámite: "+t.option,t.$buefy.dialog.confirm({title:"¡Por último!",message:i,cancelText:"Cancelar",confirmText:"Enviar",type:"is-info",hasIcon:!0,onConfirm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var s,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,Object(c["a"])(t.student);case 4:for(n in s=e.sent,i=new FormData,t.$store.commit("users/SET_STUDENT",s),t.schoolRequest)i.append(n,t.schoolRequest[n]);return e.next=10,Object(u["a"])(i);case 10:e.sent,t.$buefy.toast.open({message:"¡Solicitud enviada correctamente!",type:"is-success"}),t.$store.commit("users/CLEAR_REQ"),t.show_form(!1),t.activeStep=0,e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),console.log(e.t0);case 20:return e.prev=20,t.isLoading=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));function s(){return e.apply(this,arguments)}return s}()});case 8:case"end":return e.stop()}}),e)})))()}}},p=d,f=(s("52dd"),s("2877")),m=Object(f["a"])(p,i,n,!1,null,null,null);e["default"]=m.exports}}]);