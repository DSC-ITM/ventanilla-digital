(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed3a281"],{"3b73":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("a",{staticClass:"button is-primary"},[n("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),n("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?n("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},s=[],a={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Selecciona otra imagen":"Seleccionar una imagen"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},r=a,u=n("2877"),l=Object(u["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",a="week",r="month",u="quarter",l="year",o="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,r),a=n-s<0,u=e.clone().add(i+(a?-1:1),r);return+(-(i+(n-s)/(a?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:r,y:l,w:a,d:s,D:o,h:i,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",b={};b[p]=f;var v=function(t){return t instanceof g},$=function(t,e,n){var i;if(!t)return p;if("string"==typeof t)b[t]&&(i=t),e&&(b[t]=e,i=t);else{var s=t.name;b[s]=t,i=s}return!n&&i&&(p=i),i||!n&&p},_=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},S=m;S.l=$,S.i=v,S.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var g=function(){function f(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(c);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return _(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<_(t)},h.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var c=this,d=!!S.u(u)||u,f=S.p(t),h=function(t,e){var n=S.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(s)},m=function(t,e){return S.w(c.toDate()[t].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,b=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case l:return d?h(1,0):h(31,11);case r:return d?h(1,b):h(0,b+1);case a:var _=this.$locale().weekStart||0,g=(p<_?p+7:p)-_;return h(d?v-g:v+(6-g),b);case s:case o:return m($+"Hours",0);case i:return m($+"Minutes",1);case n:return m($+"Seconds",2);case e:return m($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,u){var c,d=S.p(a),f="set"+(this.$u?"UTC":""),h=(c={},c[s]=f+"Date",c[o]=f+"Date",c[r]=f+"Month",c[l]=f+"FullYear",c[i]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[d],m=d===s?this.$D+(u-this.$W):u;if(d===r||d===l){var p=this.clone().set(o,1);p.$d[h](m),p.init(),this.$d=p.set(o,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[S.p(t)]()},h.add=function(t,u){var o,c=this;t=Number(t);var d=S.p(u),f=function(e){var n=_(c);return S.w(n.date(n.date()+Math.round(e*t)),c)};if(d===r)return this.set(r,this.$M+t);if(d===l)return this.set(l,this.$y+t);if(d===s)return f(1);if(d===a)return f(7);var h=(o={},o[n]=6e4,o[i]=36e5,o[e]=1e3,o)[d]||1,m=this.$d.getTime()+t*h;return S.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$locale(),a=this.$H,r=this.$m,u=this.$M,l=s.weekdays,o=s.months,c=function(t,i,s,a){return t&&(t[i]||t(e,n))||s[i].substr(0,a)},f=function(t){return S.s(a%12||12,t,"0")},h=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:c(s.monthsShort,u,o,3),MMMM:c(o,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(s.weekdaysMin,this.$W,l,2),ddd:c(s.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:S.s(a,2,"0"),h:f(1),hh:f(2),a:h(a,r,!0),A:h(a,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||m[t]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,o,c){var d,f=S.p(o),h=_(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,b=S.m(this,h);return b=(d={},d[l]=b/12,d[r]=b,d[u]=b/3,d[a]=(p-m)/6048e5,d[s]=(p-m)/864e5,d[i]=p/36e5,d[n]=p/6e4,d[e]=p/1e3,d)[f]||p,c?b:S.a(b)},h.daysInMonth=function(){return this.endOf(r).$D},h.$locale=function(){return b[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=$(t,e,!0);return i&&(n.$L=i),n},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),y=g.prototype;return _.prototype=y,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",r],["$y",l],["$D",o]].forEach((function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t(e,g,_),_},_.locale=$,_.isDayjs=v,_.unix=function(t){return _(1e3*t)},_.en=b[p],_.Ls=b,_}))},"868e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",{attrs:{title:"Editar datos de estudiante",icon:"school"}},[n("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("b-field",{attrs:{horizontal:"",label:"Matrícula"}},[n("BInputWithValidation",{attrs:{rules:"required|matricula",name:"enrollment",type:"text",placeholder:"Matrícula"},model:{value:t.student.enrollment,callback:function(e){t.$set(t.student,"enrollment",e)},expression:"student.enrollment"}})],1),n("b-field",{attrs:{horizontal:"",label:"Carrera"}},[n("BSelectWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu carrera"},model:{value:t.student.career,callback:function(e){t.$set(t.student,"career",e)},expression:"student.career"}},t._l(t.careers,(function(e,i){return n("option",{key:i,domProps:{value:i}},[t._v(t._s(e))])})),0)],1),n("b-field",{attrs:{horizontal:"",label:"Ingreso"}},[n("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:t.student.admission,callback:function(e){t.$set(t.student,"admission",e)},expression:"student.admission"}})],1),t.student.admission>7?n("b-field",{attrs:{horizontal:"",label:"Especialidad"}},[n("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Especialidad"},model:{value:t.student.specialty,callback:function(e){t.$set(t.student,"specialty",e)},expression:"student.specialty"}})],1):t._e(),n("b-field",{attrs:{horizontal:"",label:"CURP"}},[n("BInputWithValidation",{attrs:{name:"curp",type:"text",placeholder:"CURP"},model:{value:t.student.CURP,callback:function(e){t.$set(t.student,"CURP",e)},expression:"student.CURP"}})],1),n("b-field",{attrs:{horizontal:"",label:"NSS"}},[n("BInputWithValidation",{attrs:{type:"text",name:"nss",placeholder:"NSS"},model:{value:t.student.NSS,callback:function(e){t.$set(t.student,"NSS",e)},expression:"student.NSS"}})],1),n("hr"),n("ValidationProvider",{attrs:{name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;e.valid;return[n("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.files.CURP_file},attrs:{horizontal:"",label:"Archivo CURP"}},[n("b-upload",{staticClass:"file-label",model:{value:t.files.CURP_file,callback:function(e){t.$set(t.files,"CURP_file",e)},expression:"files.CURP_file"}},[n("span",{staticClass:"file-cta"},[n("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),t.student.CURP_file?n("span",{staticClass:"file-label"},[t._v("Cambiar archivo")]):n("span",{staticClass:"file-label"},[t._v("Seleccionar archivo")])],1),t.files.CURP_file?n("span",{staticClass:"file-name"},[t._v(" "+t._s(t.files.CURP_file.name)+" ")]):t._e()])],1),t._v(" "+t._s(i[0])+" ")]}}],null,!0)}),n("br"),n("ValidationProvider",{attrs:{name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;e.valid;return[n("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.files.NSS_file},attrs:{horizontal:"",label:"Archivo NSS"}},[n("b-upload",{staticClass:"file-label",model:{value:t.files.NSS_file,callback:function(e){t.$set(t.files,"NSS_file",e)},expression:"files.NSS_file"}},[n("span",{staticClass:"file-cta"},[n("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),t.student.NSS_file?n("span",{staticClass:"file-label"},[t._v("Cambiar archivo")]):n("span",{staticClass:"file-label"},[t._v("Seleccionar archivo")])],1),t.files.NSS_file?n("span",{staticClass:"file-name"},[t._v(" "+t._s(t.files.NSS_file.name)+" ")]):t._e()])],1),t._v(" "+t._s(i[0])+" ")]}}],null,!0)}),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},on:{click:function(e){e.preventDefault(),t.submit,i(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},s=[],a=(n("96cf"),n("1da1")),r=n("2646"),u=(n("762d"),{name:"StudentUpdateForm",props:["student","admin"],data:function(){return{isFileUploaded:!1,isLoading:!1,careers:r["a"],files:{CURP_file:null,NSS_file:null}}},mounted:function(){this.$store.commit("students/BASIC",{key:"studentForm",value:this.student||this.defaultForm}),console.log(this.student)},methods:{submit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,n=t.student,i=t.files,s=t.admin,e.next=7,t.$store.dispatch("students/update",{studentForm:n,files:i,admin:s});case 7:t.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:return e.prev=13,t.isLoading=!1,t.files.NSS_file=null,t.files.CURP_file=null,e.finish(13);case 18:case"end":return e.stop()}}),e,null,[[1,10,13,18]])})))()}}}),l=u,o=n("2877"),c=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=c.exports},a17f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero-bar",[t._v(" "+t._s(t.student.user?t.student.user.first_name+" "+t.student.user.last_name+" ("+t.student.enrollment+")":t.student.first_name+" "+t.student.last_name)+" "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:"/dashboard"},slot:"right"},[t._v(" Panel de control ")])],1),n("section",{staticClass:"section is-main-section"},[n("notification",{staticClass:"is-primary"},[n("div",[n("span",[n("b",[t._v("Editar estudiante.")]),t._v(" Aquí podrás modificar directamente los datos del alumno seleccionado")])])]),n("tiles",[n("profile-update-form",{staticClass:"tile is-child",attrs:{user:t.student.user?t.student.user:t.student}}),!0===t.withStudent?n("student-update-form",{staticClass:"tile is-child",attrs:{student:t.student?t.student:t.student.student,admin:!0}}):t._e()],1)],1)],1)},s=[],a=(n("b0c0"),n("96cf"),n("1da1")),r=n("5a0c"),u=n.n(r),l=n("3b73"),o=n("762d"),c=n("2612"),d=n("bc7a"),f=n("868e"),h={name:"StudentProfile",components:{FilePicker:l["a"],ProfileUpdateForm:d["a"],StudentUpdateForm:f["a"]},props:["uuid","withStudent"],data:function(){return{isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1,student:{}}},computed:{titleStack:function(){var t;return t=this.isProfileExists?this.form.name:"New client",["Admin","Clients",t]},heroTitle:function(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo:function(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel:function(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle:function(){return this.isProfileExists?"Edit Client":"New Client"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.uuid){e.next=20;break}if(console.log(t.withStudent),e.prev=2,!0!==t.withStudent){e.next=9;break}return e.next=6,Object(o["c"])(t.uuid);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,Object(c["d"])(t.uuid);case 11:n=e.sent;case 12:console.log("Data"+n),t.student=n,t.isProfileExists=!0,e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))()},input:function(t){this.createdReadable=u()(t).format("MMM D, YYYY")},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}},watch:{id:function(t){this.isProfileExists=!1,t?this.getData():this.form=this.getClearFormObject()}}},m=h,p=n("2877"),b=Object(p["a"])(m,i,s,!1,null,null,null);e["default"]=b.exports},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,a=Function.prototype,r=a.toString,u=/^\s*function ([^ (]*)/,l="name";i&&!(l in a)&&s(a,l,{configurable:!0,get:function(){try{return r.call(this).match(u)[1]}catch(t){return""}}})},bc7a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",{attrs:{title:"Editar datos generales",icon:"account-circle"}},[n("ValidationObserver",{ref:"form1",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.handleSubmit;return[n("b-field",{attrs:{horizontal:"",label:"Nombre(s)"}},[n("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),n("b-field",{attrs:{horizontal:"",label:"Apellidos"}},[n("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellidos"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"is-primary"},on:{click:function(e){e.preventDefault(),t.submit,i(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},s=[],a=(n("b0c0"),n("96cf"),n("1da1")),r=n("5530"),u=n("2f62"),l=n("3b73"),o=n("2612"),c={name:"ProfileUpdateForm",components:{FilePicker:l["a"]},props:["user"],data:function(){return{isFileUploaded:!1,isLoading:!1}},computed:Object(r["a"])({},Object(u["b"])(["userName","userLastName","userEmail"])),mounted:function(){},methods:{submit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,Object(o["i"])(t.user);case 4:e.sent,t.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},d=c,f=n("2877"),h=Object(f["a"])(d,i,s,!1,null,null,null);e["a"]=h.exports}}]);