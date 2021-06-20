(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbf7a846"],{"6bd0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero-bar",[t._v(" Proceso de Titulación "),a("router-link",{staticClass:"button is-light",attrs:{slot:"right",to:"/profile"},slot:"right"},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("Perfil")])],1)],1),a("notification",{staticClass:"has-text-centered is-primary"},[a("div",{staticClass:"has-text-centered"},[a("b-icon",{attrs:{"custom-size":"default"}}),a("b",[t._v(" Lee bien cada plan para saber todos los documentos que necesitas para iniciar tu tramite de titulación. ")])],1)]),a("section",{staticClass:"section is-main-section"},[t._m(0),a("b-steps",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("b-step-item",{attrs:{clickable:"",label:"Documentación",icon:"file-multiple"}},[a("b-table",{attrs:{"show-detail-icon":"",detailed:"",narrowed:"",striped:"",data:t.tramite.plan.documents,checkable:""},scopedSlots:t._u([{key:"detail",fn:function(e){return[t.showStatus(e.row.uploads)?a("div",[t._v(" "+t._s(e.row.uploads[0].updated_at)+" "+t._s(e.row.uploads[0].file)+" "+t._s(e.row.uploads[0].is_valid)+" "+t._s(e.row.uploads[0].has_error)+" "+t._s(e.row.uploads[0].comment)+" ")]):a("div",[t._v(" no hay data ")])]}}])},[a("b-table-column",{attrs:{field:"name",label:"Documento"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",[t._v(t._s(e.row.name))]),a("b-tag",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{field:"status",label:"Estatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showStatus(e.row.uploads)?a("div",[a("b-icon",{attrs:{title:"No enviado",size:"is-small",type:"is-warning",icon:"alert"}}),a("b-icon",{attrs:{title:"Enviado",size:"is-small",type:"is-info",icon:"alert-circle"}}),a("b-icon",{attrs:{title:"Aceptado",size:"is-small",type:"is-success",icon:"check-circle"}})],1):a("div",[a("b-icon",{attrs:{title:"No aceptado",size:"is-small",type:"is-danger",icon:"close-circle"}}),a("small",[t._v("No Aceptado ")])],1)]}}])}),a("b-table-column",{attrs:{field:"name",label:"Fecha de envío"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(new Date(e.row.created_at).toLocaleString("es-MX",{hour12:!0}))+" ")]}}])}),a("b-table-column",{attrs:{field:"name",label:"Acciones"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[t.showStatus(e.row.uploads)?a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"file-document-outline",size:"is-small"}})],1)],1):a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"},on:{click:function(a){t.updateActive=!0,t.document=e.row}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Subir archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"upload",size:"is-small"}})],1)],1)])]}}])})],1)],1),a("actions",{attrs:{isActive:t.updateActive,document:t.document},on:{cancel:function(e){t.updateActive=!1},send:t.sendFile}}),a("b-step-item",{attrs:{clickable:"",label:"Titulación",icon:"school-outline"}})],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns  is-flex is-justify-content-center mb-6"},[a("h2",{staticClass:"title is-4",attrs:{align:"center"}},[t._v(" Para saber los requisitos a llenar, selecciona el plan de titulación que te corresponde ")])])}],n=(a("4de4"),a("d3b7"),a("ddb0"),a("5530")),o=(a("96cf"),a("1da1")),c=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("b-modal",{attrs:{active:t.isCardModalActive,width:640,scroll:"keep"},on:{"update:active":function(e){t.isCardModalActive=e}}},[a("ValidationObserver",{ref:"form"},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Subir "),a("b",[t._v(t._s(t.document.name))])]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.cancel}})]),a("section",{staticClass:"modal-card-body"},[a("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;e.valid;return[a("form",{attrs:{action:""}},[a("b-message",{staticClass:"message",attrs:{title:"IMPORTANTE",type:"is-primary","has-icon":"",size:"is-small",closable:!1}},[a("div",[t._v(" En esta sección podrás subir los documentos correspondientes a cada una de las solicitudes, simplemente arrastra el archivo que deseas subir o da click para seleccionarlo, luego simplemente da clic en subir, espera la confirmación y ¡Listo! el documento llegará al estudiantes correspondiente. ")])]),a("b-field",[a("b-upload",{attrs:{"drag-drop":"",expanded:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("b-icon",{attrs:{type:t.file.name?"is-success":"",icon:"upload",size:"is-large"}})],1),a("span",[t._v(t._s(t.file.name||"Arrastra o selecciona tu archivo"))])])])])],1),a("div",{staticClass:"tags"},t._l(t.dropFiles,(function(e,s){return a("span",{key:s,staticClass:"tag is-primary"},[t._v(" "+t._s(e.name)+" "),a("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(e){return t.deleteDropFile(s)}}})])})),0)],1),t._v(" "+t._s(s[0])+" ")]}}])})],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary ",on:{click:function(e){return t.submit()}}},[t._v(" Subir ")]),a("button",{staticClass:"button",on:{click:t.cancel}},[t._v("Cancelar")])])])])],1)],1)])},r=[],u=(a("a434"),a("b0c0"),{props:{isActive:{type:Boolean,default:!1},document:{type:Object}},data:function(){return{isCardModalActive:!1,file:{},dropFiles:[]}},methods:{cancel:function(){this.$emit("cancel"),this.file={}},deleteDropFile:function(t){this.dropFiles.splice(t,1)},PrintFile:function(t){console.log(this.file)},submit:function(){console.log(this.document);var t={tag:this.document.name,file:this.file};this.$emit("send",t)}},watch:{isActive:function(t){this.isCardModalActive=t},isCardModalActive:function(t){t||this.cancel()}}}),d=u,p=a("2877"),f=Object(p["a"])(d,l,r,!1,null,null,null),m=f.exports,b={name:"Titulation",props:{uuid:{default:null}},components:{Actions:m},data:function(){return{tramite:{},updateActive:!1,isLoading:!1,document:null,showSteps:!1,step:0,isOpen:null,plans:[],actualCard:null,option:null,planSelected:{}}},methods:{showStatus:function(t){var e=t.filter((function(t){return t.file}));return e.length},getData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("titulation/getTramiteinfo",t.uuid);case 2:a=e.sent,t.tramite=a;case 4:case"end":return e.stop()}}),e)})))()},sendFile:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(t),e.isLoading=!0,a.prev=2,s=!1,i=new FormData,n=t,a.t0=regeneratorRuntime.keys(n);case 7:if((a.t1=a.t0()).done){a.next=13;break}return o=a.t1.value,a.next=11,i.append(o,n[o]);case 11:a.next=7;break;case 13:return a.next=15,e.$store.dispatch("uploads/upload",{form_data:i,uuid:s});case 15:e.updateActive=!1,e.getData(),e.$buefy.snackbar.open({message:"Subida exitosa",queue:!1}),a.next=24;break;case 20:a.prev=20,a.t2=a["catch"](2),console.log(a.t2),e.$buefy.toast.open({message:"Algo salió mal",type:"is-warning"});case 24:return a.prev=24,e.isLoading=!1,a.finish(24);case 27:case"end":return a.stop()}}),a,null,[[2,20,24,27]])})))()}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["b"])(["userName","userEmail"])),Object(c["b"])("users",["user"])),Object(c["b"])("students",["studentForm"])),created:function(){this.getData()}},v=b,h=(a("8394"),Object(p["a"])(v,s,i,!1,null,null,null));e["default"]=h.exports},8394:function(t,e,a){"use strict";var s=a("f1d2"),i=a.n(s);i.a},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("23cb"),n=a("a691"),o=a("50c4"),c=a("7b0b"),l=a("65f0"),r=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,b=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,s,u,d,p,f,_=c(this),g=o(_.length),w=i(t,g),y=arguments.length;if(0===y?a=s=0:1===y?(a=0,s=g-w):(a=y-2,s=b(m(n(e),0),g-w)),g+a-s>v)throw TypeError(h);for(u=l(_,s),d=0;d<s;d++)p=w+d,p in _&&r(u,d,_[p]);if(u.length=s,a<s){for(d=w;d<g-s;d++)p=d+s,f=d+a,p in _?_[f]=_[p]:delete _[f];for(d=g;d>g-s+a;d--)delete _[d-1]}else if(a>s)for(d=g-s;d>w;d--)p=d+s-1,f=d+a-1,p in _?_[f]=_[p]:delete _[f];for(d=0;d<a;d++)_[d+w]=arguments[d+2];return _.length=g-s+a,u}})},b0c0:function(t,e,a){var s=a("83ab"),i=a("9bf2").f,n=Function.prototype,o=n.toString,c=/^\s*function ([^ (]*)/,l="name";s&&!(l in n)&&i(n,l,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},f1d2:function(t,e,a){}}]);