(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d5ab398"],{"52c0":function(t,e,a){},"6bd0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero-bar",[t._v(" Proceso de Titulación "),a("router-link",{staticClass:"button is-light",attrs:{slot:"right",to:"/profile"},slot:"right"},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[t._v("Perfil")])],1)],1),a("notification",{staticClass:"has-text-centered is-primary"},[a("div",{staticClass:"has-text-centered"},[a("b-icon",{attrs:{"custom-size":"default"}}),a("b",[t._v(" Lee bien el plan seleccionado para saber especificamente todos los documentos que necesitas, el 'Estatus' del documento cambiará en cuanto sea revisado. ")]),a("a",{attrs:{tag:"a",type:"is-link",size:"is-small","icon-right":"file-pdf-outline",href:t.titulation.pdf_description,target:"_blank"}},[t._v(" Visualizar requisitos ")])],1)]),t.isLoading?a("section",{staticClass:"section"},[a("skeletonProceso")],1):a("section",{staticClass:"section is-main-section"},[a("b-steps",{attrs:{"has-navigation":t.showSteps},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("b-step-item",{attrs:{label:"Documentación",icon:"file-multiple"}},[a("b-table",{attrs:{"show-detail-icon":"",detailed:"",narrowed:"",striped:"","detail-key":"id",loading:t.loadingTable,data:t.tramite,"opened-detailed":t.defaultOpenedDetails},scopedSlots:t._u([{key:"detail",fn:function(e){return[t.showFile(e.row.uploads)&&"RECHAZADO"===t.showStatus(e.row.uploads)?a("div",[a("div",[a("b",[t._v(" Comentarios ")]),a("br"),a("div",[t._v(" "+t._s(e.row.uploads[0].comment)+" ")])])]):a("div")]}}])},[a("b-table-column",{attrs:{field:"name",label:"Documento"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("strong",[t._v(t._s(e.row.name||t.documents)+" ")]),a("b-tag",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{field:"status",label:"Estatus"},scopedSlots:t._u([{key:"default",fn:function(e){return["ENVIADO"===t.showStatus(e.row.uploads)&&t.showFile(e.row.uploads)?a("div",[a("b-icon",{attrs:{title:"Pendiente",size:"is-small",type:"is-warning",icon:"alert"}}),t._v(" Pendiente ")],1):"ACEPTADO"===t.showStatus(e.row.uploads)?a("div",[a("b-icon",{attrs:{title:"Aceptado",size:"is-small",type:"is-success",icon:"check-circle"}}),t._v(" Aceptado ")],1):"RECHAZADO"===t.showStatus(e.row.uploads)?a("div",[a("b-icon",{staticClass:"parpadea",attrs:{title:"Rechazado",size:"is-small",type:"is-danger",icon:"close-circle"}}),t._v(" Rechazado ")],1):a("div",[a("b-icon",{attrs:{title:"Sin enviar",size:"is-small",type:"is-info",icon:"alert-circle"}}),t._v(" Sin enviar ")],1)]}}])}),a("b-table-column",{attrs:{field:"name",label:"Fecha de envío"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showFile(e.row.uploads)?a("div",[t._v(" "+t._s(new Date(e.row.uploads[0].updated_at).toLocaleString("es-MX",{}))+" ")]):a("div")]}}])}),a("b-table-column",{attrs:{field:"name",label:"Acciones"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[t.showFile(e.row.uploads)&&"RECHAZADO"===t.showStatus(e.row.uploads)?a("button",{staticClass:"button is-primary",attrs:{type:"button"},on:{click:function(a){t.updateActive=!0,t.document=e.row}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Editar archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"file-document-edit-outline",size:"is-small"}})],1)],1):t.showFile(e.row.uploads)?a("a",{staticClass:"button is-link",attrs:{type:"button",href:e.row.uploads[0].file,target:"_blank"}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Visualizar archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"file-document-outline",size:"is-small"}})],1)],1):a("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:function(a){t.updateActive=!0,t.document=e.row}}},[a("b-tooltip",{attrs:{type:"is-dark",label:"Subir archivo",position:"is-top"}},[a("b-icon",{attrs:{icon:"upload",size:"is-small"}})],1)],1)])]}}])})],1)],1),a("actions",{attrs:{isActive:t.updateActive,document:t.document},on:{cancel:function(e){t.updateActive=!1},send:t.sendFile}}),a("b-step-item",{attrs:{label:"Titulación",icon:"school-outline"}},[a("br"),a("div",{staticClass:"columns  is-flex is-justify-content-center mb-6"},[a("h2",{staticClass:"title is-4",attrs:{align:"center"}},[t._v(" En este apartado podras visualizar los documentos de respuesta con respecto a tu tramite de titulación. ")])]),a("div",{staticClass:"columns is-flex is-justify-content-center"},t._l(t.response,(function(e){return a("div",{key:e,staticClass:"column is-one-fifth"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" "+t._s(e.document.name)+" "),a("b-tag",[t._v(t._s(e.document.type))])],1)]),a("div",{staticClass:"content",attrs:{align:"center"}},[a("strong",[t._v(t._s(e.comment))]),a("br"),a("br"),a("time",{attrs:{datetime:"2016-1-1"}},[t._v("Recibido el "+t._s(new Date(e.updated_at).toLocaleString("es-MX",{})))])]),a("div",{attrs:{align:"center"}},[a("b-button",{staticClass:"is-primary",attrs:{tag:"a",href:e.file,target:"_blank"}},[t._v(" Descargar ")])],1),a("br")])])})),0)])],1)],1)],1)},s=[],n=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("b-modal",{attrs:{active:t.isCardModalActive,width:640,scroll:"keep"},on:{"update:active":function(e){t.isCardModalActive=e}}},[a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Subir "),a("b",[t._v(t._s(t.document&&t.document.name?t.document.name:""))])]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.cancel}})]),a("section",{staticClass:"modal-card-body"},[a("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("form",{attrs:{action:""}},[a("b-message",{staticClass:"message",attrs:{title:"IMPORTANTE",type:"is-primary","has-icon":"",size:"is-small",closable:!1}},[a("div",[t._v(" En esta sección podrás subir los documentos correspondientes a tu solicitud de titulación, simplemente arrastra el archivo que deseas subir o da click para seleccionarlo, luego simplemente da clic en subir, espera la confirmación y ¡Listo! ")])]),a("BUploadWithValidation",{attrs:{rules:t.validateFile(),accept:t.validateFileAccept(),type:"file",message:t.file&&t.file.name?"Selecciona el archivo que deseas subir":"Arrastra y suelta, o selecciona el archivo que deseas subir",dragDrop:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),a("div",{staticClass:"tags"},t._l(t.dropFiles,(function(e,i){return a("span",{key:i,staticClass:"tag is-primary"},[t._v(" "+t._s(e&&e.name?e.name:"")+" "),a("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(e){return t.deleteDropFile(i)}}})])})),0)],1),t._v(" "+t._s(i[0])+" ")]}}],null,!0)})],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary ",on:{click:function(e){return i(t.submit)}}},[t._v(" Subir ")]),a("button",{staticClass:"button",on:{click:t.cancel}},[t._v("Cancelar")])])])]}}])})],1)],1)])},r=[],l={props:{isActive:{type:Boolean,default:!1},document:{type:Object}},data(){return{isCardModalActive:!1,file:{},dropFiles:[]}},methods:{cancel(){this.$emit("cancel"),this.file={}},deleteDropFile(t){this.dropFiles.splice(t,1)},validateFile(){return"IMAGE"==this.document.type?"required|img|size:4000":"required|pdf|size:4000"},validateFileAccept(){return"IMAGE"==this.document.type?".jpg, .png, .jpeg":".pdf"},submit(){let t={tag:this.document.name,file:this.file};this.document.uploads[0]&&this.document.uploads[0].uuid&&(t.uuid=this.document.uploads[0].uuid),this.$emit("send",t)}},watch:{isActive(t){this.isCardModalActive=t},isCardModalActive(t){t||this.cancel()}}},c=l,u=a("2877"),d=Object(u["a"])(c,o,r,!1,null,null,null),h=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"content"},[a("p",[a("b-skeleton",{attrs:{height:"150px"}})],1)]),t._l(t.media,(function(t){return a("article",{key:t,staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("b-skeleton",{attrs:{height:"30px"}})],1)])])])}))],2)},p=[],m={data(){return{media:10}}},b=m,v=Object(u["a"])(b,f,p,!1,null,null,null),g=v.exports,w={};(function t(e,a,i,s){var n=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function o(){}function r(t){var i=a.exports.Promise,s=void 0!==i?i:e.Promise;return"function"===typeof s?new s(t):(t(o,o),null)}var l=function(){var t,e,a=Math.floor(1e3/60),i={},s=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(t=function(t){var e=Math.random();return i[e]=requestAnimationFrame((function n(o){s===o||s+a-1<o?(s=o,delete i[e],t()):i[e]=requestAnimationFrame(n)})),e},e=function(t){i[t]&&cancelAnimationFrame(i[t])}):(t=function(t){return setTimeout(t,a)},e=function(t){return clearTimeout(t)}),{frame:t,cancel:e}}(),c=function(){var e,a,s={};function o(t){function e(e,a){t.postMessage({options:e||{},callback:a})}t.init=function(e){var a=e.transferControlToOffscreen();t.postMessage({canvas:a},[a])},t.fire=function(i,n,o){if(a)return e(i,null),a;var l=Math.random().toString(36).slice(2);return a=r((function(n){function r(e){e.data.callback===l&&(delete s[l],t.removeEventListener("message",r),a=null,o(),n())}t.addEventListener("message",r),e(i,l),s[l]=r.bind(null,{data:{callback:l}})})),a},t.reset=function(){for(var e in t.postMessage({reset:!0}),s)s[e](),delete s[e]}}return function(){if(e)return e;if(!i&&n){var a=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([a])))}catch(s){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("🎊 Could not load worker",s),null}o(e)}return e}}(),u={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function d(t,e){return e?e(t):t}function h(t){return!(null===t||void 0===t)}function f(t,e,a){return d(t&&h(t[e])?t[e]:u[e],a)}function p(t){return t<0?0:Math.floor(t)}function m(t,e){return Math.floor(Math.random()*(e-t))+t}function b(t){return parseInt(t,16)}function v(t){return t.map(g)}function g(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:b(e.substring(0,2)),g:b(e.substring(2,4)),b:b(e.substring(4,6))}}function w(t){var e=f(t,"origin",Object);return e.x=f(e,"x",Number),e.y=f(e,"y",Number),e}function y(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function C(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function _(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function k(t,e,a,i,s,n,o,r,l){t.save(),t.translate(e,a),t.rotate(n),t.scale(i,s),t.arc(0,0,1,o,r,l),t.restore()}function M(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:Math.random()*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar}}function A(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var a=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,n=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(n-i)*e.ovalScalar,Math.abs(o-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):k(t,e.x,e.y,Math.abs(n-i)*e.ovalScalar,Math.abs(o-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(s)),t.lineTo(Math.floor(n),Math.floor(o)),t.lineTo(Math.floor(i),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}function S(t,e,a,n,o){var c,u,d=e.slice(),h=t.getContext("2d"),f=r((function(e){function r(){c=u=null,h.clearRect(0,0,n.width,n.height),o(),e()}function f(){!i||n.width===s.width&&n.height===s.height||(n.width=t.width=s.width,n.height=t.height=s.height),n.width||n.height||(a(t),n.width=t.width,n.height=t.height),h.clearRect(0,0,n.width,n.height),d=d.filter((function(t){return A(h,t)})),d.length?c=l.frame(f):r()}c=l.frame(f),u=r}));return{addFettis:function(t){return d=d.concat(t),f},canvas:t,promise:f,reset:function(){c&&l.cancel(c),u&&u()}}}function x(t,a){var i,s=!t,o=!!f(a||{},"resize"),l=f(a,"disableForReducedMotion",Boolean),u=n&&!!f(a||{},"useWorker"),d=u?c():null,h=s?y:C,b=!(!t||!d)&&!!t.__confetti_initialized,g="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function k(e,a,s){var n=f(e,"particleCount",p),o=f(e,"angle",Number),r=f(e,"spread",Number),l=f(e,"startVelocity",Number),c=f(e,"decay",Number),u=f(e,"gravity",Number),d=f(e,"drift",Number),b=f(e,"colors",v),g=f(e,"ticks",Number),y=f(e,"shapes"),C=f(e,"scalar"),_=w(e),k=n,A=[],x=t.width*_.x,E=t.height*_.y;while(k--)A.push(M({x:x,y:E,angle:o,spread:r,startVelocity:l,color:b[k%b.length],shape:y[m(0,y.length)],ticks:g,decay:c,gravity:u,drift:d,scalar:C}));return i?i.addFettis(A):(i=S(t,A,h,a,s),i.promise)}function A(a){var n=l||f(a,"disableForReducedMotion",Boolean),c=f(a,"zIndex",Number);if(n&&g)return r((function(t){t()}));s&&i?t=i.canvas:s&&!t&&(t=_(c),document.body.appendChild(t)),o&&!b&&h(t);var u={width:t.width,height:t.height};function p(){if(d){var e={getBoundingClientRect:function(){if(!s)return t.getBoundingClientRect()}};return h(e),void d.postMessage({resize:{width:e.width,height:e.height}})}u.width=u.height=null}function m(){i=null,o&&e.removeEventListener("resize",p),s&&t&&(document.body.removeChild(t),t=null,b=!1)}return d&&!b&&d.init(t),b=!0,d&&(t.__confetti_initialized=!0),o&&e.addEventListener("resize",p,!1),d?d.fire(a,u,m):k(a,u,m)}return A.reset=function(){d&&d.reset(),i&&i.reset()},A}a.exports=x(null,{useWorker:!0,resize:!0}),a.exports.create=x})(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),w,!1);var y=w.exports,C=(w.exports.create,{name:"Titulation",props:{uuid:{default:null}},components:{Actions:h,skeletonProceso:g},data(){return{tramite:{},response:{},titulation:{},updateActive:!1,isLoading:!1,document:null,showDetailIcon:!1,step:0,loadingTable:!1,defaultOpenedDetails:[],showSteps:!1,isOpen:null,plans:[],actualCard:null,option:null,planSelected:{}}},methods:{showConfetti(){var t=3e3,e=Date.now()+t,a={startVelocity:30,spread:360,ticks:60,zIndex:0};function i(t,e){return Math.random()*(e-t)+t}var s=setInterval((function(){var n=e-Date.now();if(n<=0)return clearInterval(s);var o=n/t*50;y(Object.assign({},a,{particleCount:o,origin:{x:i(.1,.3),y:Math.random()-.2}})),y(Object.assign({},a,{particleCount:o,origin:{x:i(.7,.9),y:Math.random()-.2}}))}),250)},showFile(t){const e=t.filter(t=>t.file);return e.length},showComment(t){const e=t.filter(t=>t.comment);return e.length},showStatus(t){const e=t.filter(t=>t.status);return e.length?1===t[0].status?"RECHAZADO":2===t[0].status?"ACEPTADO":void 0:"ENVIADO"},async getData(){try{this.isLoading=!0,this.tramite=[],this.response=[];const t=await this.$store.dispatch("titulation/getTramiteinfo",this.uuid);this.tramite=t.plan.documents,this.response=t.tramite.responses,this.titulation=t.plan,this.defaultOpenedDetails=[],t.plan.documents.forEach(t=>{t.uploads.length&&t.uploads[0].comment&&this.defaultOpenedDetails.push(t.id)}),this.isLoading=!1;for(let e in t.plan.documents){if(2!==t.plan.documents[e].uploads[0].status){this.step=0,this.showSteps=!1;break}this.step=1,this.showSteps=!0}1===this.step&&this.showConfetti()}catch(t){console.log(t),this.isLoading=!1}},async refreshData(){try{this.loadingTable=!0;const t=await this.$store.dispatch("titulation/getTramiteinfo",this.uuid);this.tramite=[],this.response=[],this.tramite=t.plan.documents,this.response=t.tramite.responses,this.defaultOpenedDetails=[],t.plan.documents.forEach(t=>{t.uploads.length&&t.uploads[0].comment&&this.defaultOpenedDetails.push(t.id)}),this.loadingTable=!1;for(let e in t.plan.documents){if(2!==t.plan.documents[e].uploads[0].status){this.step=0;break}this.step=1}1===this.step&&this.showConfetti()}catch(t){console.log(t),this.loadingTable=!1}},async validateAceptedData(){try{this.isLoading=!0,this.tramite=[];const t=await this.$store.dispatch("titulation/getTramiteinfo",this.uuid);this.tramite=t.plan.documents,this.isLoading=!1}catch(t){console.log(t),this.isLoading=!1}},async sendFile(t){try{let a=!1;t.uuid&&(a=!0);const i=new FormData,s=t;for(var e in s)await i.append(e,s[e]);this.updateActive=!1,this.loadingTable=!0;await this.$store.dispatch("uploads/upload",{form_data:i,uuid:a});this.refreshData(),this.$buefy.snackbar.open({message:"Subida exitosa",queue:!1})}catch(a){console.log(a),this.$buefy.toast.open({message:"Algo salió mal",type:"is-warning"})}}},computed:{...Object(n["b"])(["userName","userEmail"]),...Object(n["b"])("users",["user"]),...Object(n["b"])("students",["studentForm"])},created(){this.getData()}}),_=C,k=(a("8394"),a("bf9d"),Object(u["a"])(_,i,s,!1,null,null,null));e["default"]=k.exports},8394:function(t,e,a){"use strict";var i=a("f1d2"),s=a.n(i);s.a},bf9d:function(t,e,a){"use strict";var i=a("52c0"),s=a.n(i);s.a},f1d2:function(t,e,a){}}]);