(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ca08d17"],{"3b73":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("a",{staticClass:"button is-primary"},[n("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),n("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?n("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},i=[],s={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Selecciona otra imagen":"Seleccionar una imagen"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},a=s,u=n("2877"),o=Object(u["a"])(a,r,i,!1,null,null,null);e["a"]=o.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:u}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",b={};b[p]=f;var $=function(t){return t instanceof S},v=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var i=t.name;b[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},g=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},y=m;y.l=v,y.i=$,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function f(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var l=this,d=!!y.u(u)||u,f=y.p(t),h=function(t,e){var n=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(i)},m=function(t,e){return y.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,b=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case o:return d?h(1,0):h(31,11);case a:return d?h(1,b):h(0,b+1);case s:var g=this.$locale().weekStart||0,S=(p<g?p+7:p)-g;return h(d?$-S:$+(6-S),b);case i:case c:return m(v+"Hours",0);case r:return m(v+"Minutes",1);case n:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,u){var l,d=y.p(s),f="set"+(this.$u?"UTC":""),h=(l={},l[i]=f+"Date",l[c]=f+"Date",l[a]=f+"Month",l[o]=f+"FullYear",l[r]=f+"Hours",l[n]=f+"Minutes",l[e]=f+"Seconds",l[t]=f+"Milliseconds",l)[d],m=d===i?this.$D+(u-this.$W):u;if(d===a||d===o){var p=this.clone().set(c,1);p.$d[h](m),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,u){var c,l=this;t=Number(t);var d=y.p(u),f=function(e){var n=g(l);return y.w(n.date(n.date()+Math.round(e*t)),l)};if(d===a)return this.set(a,this.$M+t);if(d===o)return this.set(o,this.$y+t);if(d===i)return f(1);if(d===s)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return y.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,c=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return y.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:l(i.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,o,2),ddd:l(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,l){var d,f=y.p(c),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,b=y.m(this,h);return b=(d={},d[o]=b/12,d[a]=b,d[u]=b/3,d[s]=(p-m)/6048e5,d[i]=(p-m)/864e5,d[r]=p/36e5,d[n]=p/6e4,d[e]=p/1e3,d)[f]||p,l?b:y.a(b)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return b[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),_=S.prototype;return g.prototype=_,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",c]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t(e,S,g),g},g.locale=v,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=b[p],g.Ls=b,g}))},"762d":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n("a27e");function i(t){return Object(r["a"])({url:"/students/",method:"POST",data:t})}function s(t){return Object(r["a"])({url:"/students/",method:"GET",params:t})}function a(t){return Object(r["a"])({url:"/students/".concat(t,"/"),method:"GET"})}},"868e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",{attrs:{title:"Editar datos de estudiante",icon:"school"}},[n("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[n("b-field",{attrs:{horizontal:"",label:"Matrícula"}},[n("BInputWithValidation",{attrs:{rules:"required|matricula",type:"text",placeholder:"Matrícula"},model:{value:t.student.enrollment,callback:function(e){t.$set(t.student,"enrollment",e)},expression:"student.enrollment"}})],1),n("b-field",{attrs:{horizontal:"",label:"Carrera"}},[n("BSelectWithValidation",{attrs:{rules:"required",placeholder:"Selecciona tu carrera"},model:{value:t.student.career,callback:function(e){t.$set(t.student,"career",e)},expression:"student.career"}},t._l(t.careers,(function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v(t._s(e))])})),0)],1),n("b-field",{attrs:{horizontal:"",label:"Ingreso"}},[n("BInputWithValidation",{attrs:{rules:"required|ingreso",placeholder:"Selecciona tu ingreso",size:"is-small-medium",type:"number",min:"1",max:"12",expanded:""},model:{value:t.student.admission,callback:function(e){t.$set(t.student,"admission",e)},expression:"student.admission"}})],1),n("b-field",{attrs:{horizontal:"",label:"CURP"}},[n("BInputWithValidation",{attrs:{type:"text",placeholder:"CURP"},model:{value:t.student.CURP,callback:function(e){t.$set(t.student,"CURP",e)},expression:"student.CURP"}})],1),n("b-field",{attrs:{horizontal:"",label:"NSS"}},[n("BInputWithValidation",{attrs:{type:"text",placeholder:"NSS"},model:{value:t.student.NSS,callback:function(e){t.$set(t.student,"NSS",e)},expression:"student.NSS"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},on:{click:function(e){e.preventDefault(),t.submit,r(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},i=[],s=(n("b0c0"),n("96cf"),n("1da1")),a=n("5530"),u=n("2f62"),o=n("2646"),c=n("762d"),l={name:"StudentUpdateForm",props:["student"],data:function(){return{isFileUploaded:!1,isLoading:!1,careers:o["a"]}},computed:Object(a["a"])({},Object(u["b"])(["userName","userLastName","userEmail"])),mounted:function(){},methods:{submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,Object(c["a"])(t.student);case 4:e.sent,t.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},d=l,f=n("2877"),h=Object(f["a"])(d,r,i,!1,null,null,null);e["a"]=h.exports},a17f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero-bar",[t._v(" "+t._s(t.student.user?t.student.user.first_name+" "+t.student.user.last_name+" ("+t.student.enrollment+")":"")+" "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:"/dashboard"},slot:"right"},[t._v(" Panel de control ")])],1),n("section",{staticClass:"section is-main-section"},[n("notification",{staticClass:"is-primary"},[n("div",[n("span",[n("b",[t._v("Editar estudiante.")]),t._v(" Aquí podrás modificar directamente los datos del alumno seleccionado")])])]),n("tiles",[n("profile-update-form",{staticClass:"tile is-child",attrs:{user:t.student.user?t.student.user:""}}),n("student-update-form",{staticClass:"tile is-child",attrs:{student:t.student?t.student:""}})],1)],1)],1)},i=[],s=(n("b0c0"),n("96cf"),n("1da1")),a=n("5a0c"),u=n.n(a),o=n("3b73"),c=n("762d"),l=n("bc7a"),d=n("868e"),f={name:"StudentProfile",components:{FilePicker:o["a"],ProfileUpdateForm:l["a"],StudentUpdateForm:d["a"]},props:["uuid"],data:function(){return{isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1,student:{}}},computed:{titleStack:function(){var t;return t=this.isProfileExists?this.form.name:"New client",["Admin","Clients",t]},heroTitle:function(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo:function(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel:function(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle:function(){return this.isProfileExists?"Edit Client":"New Client"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.uuid){e.next=13;break}return e.prev=1,e.next=4,Object(c["b"])(t.uuid);case 4:n=e.sent,console.log(n),t.student=n,t.isProfileExists=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},input:function(t){this.createdReadable=u()(t).format("MMM D, YYYY")},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}},watch:{id:function(t){this.isProfileExists=!1,t?this.getData():this.form=this.getClearFormObject()}}},h=f,m=n("2877"),p=Object(m["a"])(h,r,i,!1,null,null,null);e["default"]=p.exports},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,s=Function.prototype,a=s.toString,u=/^\s*function ([^ (]*)/,o="name";r&&!(o in s)&&i(s,o,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},bc7a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",{attrs:{title:"Editar datos generales",icon:"account-circle"}},[n("ValidationObserver",{ref:"form1",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[n("b-field",{attrs:{horizontal:"",label:"Nombre(s)"}},[n("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Nombre(s)"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),n("b-field",{attrs:{horizontal:"",label:"Apellidos"}},[n("BInputWithValidation",{attrs:{rules:"required",type:"text",placeholder:"Apellidos"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"is-primary"},on:{click:function(e){e.preventDefault(),t.submit,r(t.submit)}}},[t._v(" Guardar ")])])])]}}])})],1)},i=[],s=(n("b0c0"),n("96cf"),n("1da1")),a=n("5530"),u=n("2f62"),o=n("3b73"),c=n("2612"),l={name:"ProfileUpdateForm",components:{FilePicker:o["a"]},props:["user"],data:function(){return{isFileUploaded:!1,isLoading:!1}},computed:Object(a["a"])({},Object(u["b"])(["userName","userLastName","userEmail"])),mounted:function(){},methods:{submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,Object(c["h"])(t.user);case 4:e.sent,t.$buefy.snackbar.open({message:"Cambios guardados",queue:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},d=l,f=n("2877"),h=Object(f["a"])(d,r,i,!1,null,null,null);e["a"]=h.exports}}]);