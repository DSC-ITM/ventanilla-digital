(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-form"],{2769:function(t,e,i){var r=i("5ca0"),s=i("51f5"),n=r(s);t.exports=n},"2b03":function(t,e){function i(t,e,i,r){var s=t.length,n=i+(r?1:-1);while(r?n--:++n<s)if(e(t[n],n,t))return n;return-1}t.exports=i},"2b9d":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isDismissed?t._e():i("div",{staticClass:"notification"},[i("div",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[t._t("default")],2)]),i("div",{staticClass:"level-right"},[i("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},s=[],n={name:"Notification",data(){return{isDismissed:!1}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},a=n,o=i("2877"),u=Object(o["a"])(a,r,s,!1,null,null,null);e["a"]=u.exports},"51f5":function(t,e,i){var r=i("2b03"),s=i("badf"),n=i("4b17"),a=Math.max;function o(t,e,i){var o=null==t?0:t.length;if(!o)return-1;var u=null==i?0:n(i);return u<0&&(u=a(o+u,0)),r(t,s(e,3),u)}t.exports=o},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t="millisecond",e="second",i="minute",r="hour",s="day",n="week",a="month",o="quarter",u="year",l="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},m={s:h,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(r,a),n=i-s<0,o=e.clone().add(r+(n?-1:1),a);return+(-(r+(i-s)/(n?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:u,w:n,d:s,D:l,h:r,m:i,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",b={};b[p]=d;var $=function(t){return t instanceof D},v=function(t,e,i){var r;if(!t)return p;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var s=t.name;b[s]=t,r=s}return!i&&r&&(p=r),r||!i&&p},y=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new D(i)},g=m;g.l=v,g.i=$,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function d(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var s=r[2]-1||0,n=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var i=y(t);return this.startOf(e)<=i&&i<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,i){return g.u(t)?this[e]:this.set(i,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var c=this,f=!!g.u(o)||o,d=g.p(t),h=function(t,e){var i=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?i:i.endOf(s)},m=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,b=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return f?h(1,0):h(31,11);case a:return f?h(1,b):h(0,b+1);case n:var y=this.$locale().weekStart||0,D=(p<y?p+7:p)-y;return h(f?$-D:$+(6-D),b);case s:case l:return m(v+"Hours",0);case r:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(n,o){var c,f=g.p(n),d="set"+(this.$u?"UTC":""),h=(c={},c[s]=d+"Date",c[l]=d+"Date",c[a]=d+"Month",c[u]=d+"FullYear",c[r]=d+"Hours",c[i]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[f],m=f===s?this.$D+(o-this.$W):o;if(f===a||f===u){var p=this.clone().set(l,1);p.$d[h](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[g.p(t)]()},h.add=function(t,o){var l,c=this;t=Number(t);var f=g.p(o),d=function(e){var i=y(c);return g.w(i.date(i.date()+Math.round(e*t)),c)};if(f===a)return this.set(a,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===s)return d(1);if(f===n)return d(7);var h=(l={},l[i]=6e4,l[r]=36e5,l[e]=1e3,l)[f]||1,m=this.$d.getTime()+t*h;return g.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),s=this.$locale(),n=this.$H,a=this.$m,o=this.$M,u=s.weekdays,l=s.months,c=function(t,r,s,n){return t&&(t[r]||t(e,i))||s[r].substr(0,n)},d=function(t){return g.s(n%12||12,t,"0")},h=s.meridiem||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:c(s.monthsShort,o,l,3),MMMM:c(l,o),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:c(s.weekdaysMin,this.$W,u,2),ddd:c(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(n),HH:g.s(n,2,"0"),h:d(1),hh:d(2),a:h(n,a,!0),A:h(n,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return i.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,l,c){var f,d=g.p(l),h=y(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,b=g.m(this,h);return b=(f={},f[u]=b/12,f[a]=b,f[o]=b/3,f[n]=(p-m)/6048e5,f[s]=(p-m)/864e5,f[r]=p/36e5,f[i]=p/6e4,f[e]=p/1e3,f)[d]||p,c?b:g.a(b)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return b[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=v(t,e,!0);return r&&(i.$L=r),i},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),M=D.prototype;return y.prototype=M,[["$ms",t],["$s",e],["$m",i],["$H",r],["$W",s],["$M",a],["$y",u],["$D",l]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t(e,D,y),y},y.locale=v,y.isDayjs=$,y.unix=function(t){return y(1e3*t)},y.en=b[p],y.Ls=b,y}))},"5ca0":function(t,e,i){var r=i("badf"),s=i("30c9"),n=i("ec69");function a(t){return function(e,i,a){var o=Object(e);if(!s(e)){var u=r(i,3);e=n(e),i=function(t){return u(o[t],t,o)}}var l=t(e,i,a);return l>-1?o[u?e[l]:l]:void 0}}t.exports=a},e96b:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("hero-bar",[t._v(" "+t._s(t.heroTitle)+" "),i("router-link",{staticClass:"button",attrs:{slot:"right",to:t.heroRouterLinkTo},slot:"right"},[t._v(" "+t._s(t.heroRouterLinkLabel)+" ")])],1),i("section",{staticClass:"section is-main-section"},[i("notification",{staticClass:"is-info"},[i("div",[i("span",[i("b",[t._v("Demo only.")]),t._v(" No data will be saved/updated")])])]),i("tiles",[i("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"account-edit"}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("b-field",{attrs:{label:"ID",horizontal:""}},[i("b-input",{attrs:{"custom-class":"is-static",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),i("hr"),i("b-field",{attrs:{label:"Avatar",horizontal:""}},[i("file-picker")],1),i("hr"),i("b-field",{attrs:{label:"Name",message:"Client name",horizontal:""}},[i("b-input",{attrs:{placeholder:"e.g. John Doe",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("b-field",{attrs:{label:"Company",message:"Client's company name",horizontal:""}},[i("b-input",{attrs:{placeholder:"e.g. Berton & Steinway",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),i("b-field",{attrs:{label:"City",message:"Client's city",horizontal:""}},[i("b-input",{attrs:{placeholder:"e.g. Geoffreyton",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),i("b-field",{attrs:{label:"Created",horizontal:""}},[i("b-datepicker",{attrs:{placeholder:"Click to select...",icon:"calendar-today"},on:{input:t.input},model:{value:t.form.created_date,callback:function(e){t.$set(t.form,"created_date",e)},expression:"form.created_date"}})],1),i("hr"),i("b-field",{attrs:{label:"Progress",horizontal:""}},[i("b-slider",{model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),i("hr"),i("b-field",{attrs:{horizontal:""}},[i("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Submit")])],1)],1)]),t.isProfileExists?i("card-component",{staticClass:"tile is-child",attrs:{title:"Client Profile",icon:"account"}},[i("user-avatar",{staticClass:"image has-max-width is-aligned-center",attrs:{avatar:t.form.avatar}}),i("hr"),i("b-field",{attrs:{label:"Name"}},[i("b-input",{attrs:{value:t.form.name,"custom-class":"is-static",readonly:""}})],1),i("b-field",{attrs:{label:"Company"}},[i("b-input",{attrs:{value:t.form.company,"custom-class":"is-static",readonly:""}})],1),i("b-field",{attrs:{label:"City"}},[i("b-input",{attrs:{value:t.form.city,"custom-class":"is-static",readonly:""}})],1),i("b-field",{attrs:{label:"Created"}},[i("b-input",{attrs:{value:t.createdReadable,"custom-class":"is-static",readonly:""}})],1),i("hr"),i("b-field",{attrs:{label:"Progress"}},[i("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.form.progress}},[t._v(t._s(t.form.progress))])])],1):t._e()],1)],1)],1)},s=[],n=i("bc3a"),a=i.n(n),o=i("5a0c"),u=i.n(o),l=i("2769"),c=i.n(l),f=i("3b73"),d=i("2b9d"),h={name:"ClientForm",components:{FilePicker:f["a"],Notification:d["a"]},props:{id:{default:null}},data(){return{isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1}},computed:{titleStack(){let t;return t=this.isProfileExists?this.form.name:"New client",["Admin","Clients",t]},heroTitle(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle(){return this.isProfileExists?"Edit Client":"New Client"}},created(){this.getData()},methods:{getClearFormObject(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData(){this.id&&a.a.get("/data-sources/clients.json").then(t=>{const e=c()(t.data.data,t=>t.id===parseInt(this.id));e?(this.isProfileExists=!0,this.form=e,this.form.created_date=new Date(e.created_mm_dd_yyyy),this.createdReadable=u()(new Date(e.created_mm_dd_yyyy)).format("MMM D, YYYY")):this.$router.push({name:"client.new"})}).catch(t=>{this.$buefy.toast.open({message:"Error: "+t.message,type:"is-danger",queue:!1})})},input(t){this.createdReadable=u()(t).format("MMM D, YYYY")},submit(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})},500)}},watch:{id(t){this.isProfileExists=!1,t?this.getData():this.form=this.getClearFormObject()}}},m=h,p=i("2877"),b=Object(p["a"])(m,r,s,!1,null,null,null);e["default"]=b.exports}}]);