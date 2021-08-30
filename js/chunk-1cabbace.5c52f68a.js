(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cabbace"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var n=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"0d2c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"worker-navigation"},[r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerStatistics"===t.$route.name,expression:"$route.name === 'workerStatistics'"}],attrs:{icon:"av_timer",size:"1.8rem",title:"Настроить период"},on:{"button-click":function(e){return t.$emit("show-period-popup")}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"===t.$route.name,expression:"$route.name === 'workerEdit'"}],attrs:{icon:"save",size:"1.8rem",title:"Сохранить и выйти"},on:{"button-click":function(e){return t.$emit("save-worker")}}}),r("AppButtonIcon",{attrs:{size:"0.5rem"}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerStatistics"!==t.$route.name,expression:"$route.name !== 'workerStatistics'"}],attrs:{icon:"timeline",size:"1.8rem",title:"Статистика"},on:{"button-click":function(e){return t.$router.push({name:"workerStatistics",params:{id:t.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerAbout"!==t.$route.name,expression:"$route.name !== 'workerAbout'"}],attrs:{icon:"remove_red_eye",size:"1.8rem",title:"Просмотреть"},on:{"button-click":function(e){return t.$router.push({name:"workerAbout",params:{id:t.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerCalendar"!==t.$route.name,expression:"$route.name !== 'workerCalendar'"}],attrs:{icon:"date_range",size:"1.8rem",title:"Календарь"},on:{"button-click":function(e){return t.$router.push({name:"workerCalendar",params:{id:t.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerHistory"!==t.$route.name,expression:"$route.name !== 'workerHistory'"}],attrs:{icon:"description",size:"1.8rem",title:"История"},on:{"button-click":function(e){return t.$router.push({name:"workerHistory",params:{id:t.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"!==t.$route.name,expression:"$route.name !== 'workerEdit'"}],attrs:{icon:"create",size:"1.8rem",title:"Редактировать"},on:{"button-click":function(e){return t.$router.push({name:"workerEdit",params:{id:t.worker.id}})}}}),r("AppButtonIcon",{attrs:{icon:"transfer_within_a_station",size:"1.8rem",title:"Вернуться к рабочим"},on:{"button-click":function(e){return t.$router.push("/workers")}}})],1)},o=[],a=r("5530"),i=r("260b"),c=r("2f62"),s=r("373c"),u={name:"WorkerNavigation",components:{AppButtonIcon:s["a"]},props:{worker:Object},methods:Object(a["a"])(Object(a["a"])({},Object(c["d"])(["SET_WORKERS_FROM_SERVER"])),{},{removeWorker:function(t){var e=this;i["a"].database().ref("/workers/"+t).remove().then((function(){e.SET_WORKERS_FROM_SERVER(),console.log("Рабочий удалён 🗑️")})),this.$router.push("/workers")}})},p=u,l=(r("b0b0"),r("2877")),d=Object(l["a"])(p,n,o,!1,null,null,null);e["a"]=d.exports},"18f7":function(t,e,r){},2262:function(t,e,r){},3254:function(t,e,r){},"34b0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app-top-panel"}},[r("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),r("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},o=[],a={name:"AppTopPanel",props:{header:String}},i=a,c=(r("bdaf"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"11bb2a0a",null);e["a"]=s.exports},"3a7b":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppPopupWrapper",{attrs:{hidden:t.hidden}},[r("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[r("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(e){return t.$emit("popup-add")}}}),r("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("popup-close")}}})]},proxy:!0}])}),r("div",{staticClass:"popup-add-wrapper"},[t._t("popup-add-content")],2)],1)},o=[],a=r("a26a"),i=r("34b0"),c=r("373c"),s={name:"PopupAddWrapper",components:{AppPopupWrapper:a["a"],AppTopPanel:i["a"],AppButtonIcon:c["a"]},props:{hidden:Boolean,header:String,objectAdded:Object},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(t){this.$emit("add-city",t),this.renewAddedData()}}},u=s,p=r("2877"),l=Object(p["a"])(u,n,o,!1,null,null,null);e["a"]=l.exports},"3e8e":function(t,e,r){},4706:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PopupAddWrapper",{attrs:{hidden:t.popupHidden,header:"Фильтрация"},on:{"popup-add":function(e){return t.filterDate(t.start,t.end)},"popup-close":t.popupToggle},scopedSlots:t._u([{key:"popup-add-content",fn:function(){return[r("AppLineDate",{attrs:{dateID:"input-deal-date-start",label:"Начало: "},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),r("AppLineDate",{attrs:{dateID:"input-deal-date-end",label:"Конец: "},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})]},proxy:!0}])}),r("AppTopPanel",{attrs:{header:"Статистика сделок рабочего "+t.worker.surname+" "+t.worker.name},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[r("WorkerNavigation",{attrs:{worker:t.worker},on:{"show-period-popup":t.popupToggle}})]},proxy:!0}])}),r("section",[r("AppTableWrapper",{scopedSlots:t._u([{key:"table-content",fn:function(){return[r("AppTableWrapperRow",{scopedSlots:t._u([{key:"row-content",fn:function(){return[r("th",[t._v("Сделка")]),r("th",[t._v("Клиент")]),r("th",[t._v("Начало")]),r("th",[t._v("Конец")])]},proxy:!0}])}),t._l(t.worker.dealStatistics,(function(e,n){return[r("AppTableWrapperRow",{key:n,scopedSlots:t._u([{key:"row-content",fn:function(){return[r("td",[t._v(t._s(e.name))]),r("td",[r("router-link",{attrs:{title:"Перейти к клиенту",to:{name:"customerAbout",params:{id:e.customer.id}}}},[t._v(" "+t._s(e.customer.name)+" ")])],1),r("td",[t._v(t._s(e.dateStart.slice(0,10)+", "+e.dateStart.slice(11)))]),r("td",[t._v(t._s(e.dateEnd.slice(0,10)+", "+e.dateStart.slice(11)))])]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})],1)],1)},o=[],a=r("b85c"),i=r("5530"),c=r("2f62"),s=r("34b0"),u=r("3a7b"),p=r("7c82"),l=r("0d2c"),d=r("eda4"),f=r("6e81"),b={name:"WorkerStatisticsTable",components:{PopupAddWrapper:u["a"],AppTopPanel:s["a"],WorkerNavigation:l["a"],AppTableWrapper:d["a"],AppTableWrapperRow:f["a"],AppLineDate:p["a"]},data:function(){return{worker:"",start:"",end:"",popupHidden:!0}},computed:Object(i["a"])({},Object(c["c"])(["workers"])),created:function(){this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.worker=this.workers[this.$route.params.id]},methods:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE"])),{},{popupToggle:function(){this.popupHidden=!this.popupHidden},filterDate:function(t,e){this.popupToggle(),this.SET_WORKERS_FROM_LOCAL_STORAGE();var r,n=this.workers[this.$route.params.id].dealStatistics,o=[],i=Object(a["a"])(n);try{for(i.s();!(r=i.n()).done;){var c=r.value;c.dateStart>t&&c.dateStart<e&&o.push(c)}}catch(s){i.e(s)}finally{i.f()}this.worker.dealStatistics=o}})},v=b,m=r("2877"),h=Object(m["a"])(v,n,o,!1,null,null,null);e["default"]=h.exports},"4b15":function(t,e,r){"use strict";r("4ce5")},"4ce5":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,p,l,d,f,b=o(t),v="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,w=void 0!==h,k=u(b),_=0;if(w&&(h=n(h,m>2?arguments[2]:void 0,2)),void 0==k||v==Array&&i(k))for(e=c(b.length),r=new v(e);e>_;_++)f=w?h(b[_],_):b[_],s(r,_,f);else for(l=k.call(b),d=l.next,r=new v;!(p=d.call(l)).done;_++)f=w?a(l,h,[p.value,_],!0):p.value,s(r,_,f);return r.length=_,r}},"633e":function(t,e,r){},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"6e81":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"app-table-row",on:{dblclick:function(e){return t.$emit("db-click")},click:function(e){return t.$emit("on-click")}}},[t._t("row-content")],2)},o=[],a={name:"AppTableWrapperRow"},i=a,c=(r("aecd"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"267b6e8d",null);e["a"]=s.exports},"7c82":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"container-line-date"}},[r("input",{staticClass:"line-date",attrs:{type:"datetime-local",id:t.dateID,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),r("label",{staticClass:"line-date-label",attrs:{for:t.dateID}},[t._v(t._s(t.label))])])},o=[],a={name:"AppLineDate",props:{dateID:String,placeholder:String,label:String,value:String}},i=a,c=(r("ef11"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"32745002",null);e["a"]=s.exports},"8f0d":function(t,e,r){"use strict";r("2262")},a26a:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[r("div",{staticClass:"popup-wrapper-overlay"},[r("div",{staticClass:"popup-wrapper-content"},[t._t("default")],2)])])},o=[],a={name:"PopupWrapper",props:{hidden:Boolean}},i=a,c=(r("4b15"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"fa5ad10c",null);e["a"]=s.exports},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:o})},aecd:function(t,e,r){"use strict";r("18f7")},b0b0:function(t,e,r){"use strict";r("3e8e")},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");var n=r("06c5");function o(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==r["return"]||r["return"]()}finally{if(s)throw i}}}}},bdaf:function(t,e,r){"use strict";r("633e")},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),p=a.Symbol;if(o&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new p(t):void 0===t?p():p(t);return""===t&&(l[e]=!0),e};u(d,p);var f=d.prototype=p.prototype;f.constructor=d;var b=f.toString,v="Symbol(test)"==String(p("test")),m=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(i(l,t))return"";var r=v?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},eda4:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"app-table"},[r("table",[t._t("table-content")],2)])},o=[],a={name:"AppTable"},i=a,c=(r("8f0d"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,"ceecb32a",null);e["a"]=s.exports},ef11:function(t,e,r){"use strict";r("3254")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),p=r("b622"),l=r("1dde"),d=r("ae40"),f=l("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),v=p("species"),m=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!f||!b},{slice:function(t,e){var r,n,p,l=s(this),d=c(l.length),f=i(t,d),b=i(void 0===e?d:e,d);if(a(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(l,f,b);for(n=new(void 0===r?Array:r)(h(b-f,0)),p=0;f<b;f++,p++)f in l&&u(n,p,l[f]);return n.length=p,n}})}}]);
//# sourceMappingURL=chunk-1cabbace.5c52f68a.js.map