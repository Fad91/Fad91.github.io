(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f523cd0"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"0ab3":function(t,e,n){},3254:function(t,e,n){},"34b0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-top-panel"}},[n("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),n("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},a=[],o={name:"AppTopPanel",props:{header:String}},i=o,c=(n("bdaf"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"11bb2a0a",null);e["a"]=s.exports},"3a7b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPopupWrapper",{attrs:{hidden:t.hidden}},[n("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(e){return t.$emit("popup-add")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("popup-close")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-add-wrapper"},[t._t("popup-add-content")],2)],1)},a=[],o=n("a26a"),i=n("34b0"),c=n("373c"),s={name:"PopupAddWrapper",components:{AppPopupWrapper:o["a"],AppTopPanel:i["a"],AppButtonIcon:c["a"]},props:{hidden:Boolean,header:String,objectAdded:Object},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(t){this.$emit("add-city",t),this.renewAddedData()}}},u=s,p=n("2877"),l=Object(p["a"])(u,r,a,!1,null,null,null);e["a"]=l.exports},"3f26":function(t,e,n){"use strict";n("fc88")},"4b15":function(t,e,n){"use strict";n("4ce5")},"4ce5":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,p,l,d,f,m=a(t),v="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,A=void 0!==h,y=u(m),_=0;if(A&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=c(m.length),n=new v(e);e>_;_++)f=A?h(m[_],_):m[_],s(n,_,f);else for(l=y.call(m),d=l.next,n=new v;!(p=d.call(l)).done;_++)f=A?o(l,h,[p.value,_],!0):p.value,s(n,_,f);return n.length=_,n}},"619a":function(t,e,n){"use strict";n("dda0")},"633e":function(t,e,n){},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6e81":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"app-table-row",on:{dblclick:function(e){return t.$emit("db-click")},click:function(e){return t.$emit("on-click")}}},[t._t("row-content")],2)},a=[],o={name:"AppTableWrapperRow"},i=o,c=(n("84ad"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"f4bc0862",null);e["a"]=s.exports},"70d0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PopupAddWrapper",{attrs:{hidden:t.popupHidden,header:"Фильтрация"},on:{"popup-add":function(e){return t.filterDate(t.start,t.end)},"popup-close":t.popupToggle},scopedSlots:t._u([{key:"popup-add-content",fn:function(){return[n("AppLineDate",{attrs:{dateID:"input-deal-date-start",label:"Начало: "},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("AppLineDate",{attrs:{dateID:"input-deal-date-end",label:"Конец: "},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})]},proxy:!0}])}),n("AppTopPanel",{attrs:{header:"Статистика сделок клиента "+t.customer.name},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[n("CustomerNavigation",{attrs:{customer:t.customer},on:{"show-period-popup":t.popupToggle}})]},proxy:!0}])}),n("section",[n("AppTableWrapper",{scopedSlots:t._u([{key:"table-content",fn:function(){return[n("AppTableWrapperRow",{scopedSlots:t._u([{key:"row-content",fn:function(){return[n("th",[t._v("Сделка")]),n("th",[t._v("Начало")]),n("th",[t._v("Конец")])]},proxy:!0}])}),t._l(t.customer.dealStatistics,(function(e,r){return[n("AppTableWrapperRow",{key:r,scopedSlots:t._u([{key:"row-content",fn:function(){return[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.dateStart.slice(0,10)+", "+e.dateStart.slice(11)))]),n("td",[t._v(t._s(e.dateEnd.slice(0,10)+", "+e.dateStart.slice(11)))])]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})],1)],1)},a=[],o=n("b85c"),i=n("5530"),c=n("2f62"),s=n("34b0"),u=n("3a7b"),p=n("7c82"),l=n("8ef0"),d=n("eda4"),f=n("6e81"),m={name:"CustomerStatisticsTable",components:{AppTopPanel:s["a"],PopupAddWrapper:u["a"],CustomerNavigation:l["a"],AppTableWrapper:d["a"],AppTableWrapperRow:f["a"],AppLineDate:p["a"]},data:function(){return{customer:"",start:"",end:"",popupHidden:!0}},computed:Object(i["a"])({},Object(c["c"])(["customers"])),created:function(){this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.customer=this.customers[this.$route.params.id]},methods:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{popupToggle:function(){this.popupHidden=!this.popupHidden},filterDate:function(t,e){this.popupToggle(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE();var n,r=this.customers[this.$route.params.id].dealStatistics,a=[],i=Object(o["a"])(r);try{for(i.s();!(n=i.n()).done;){var c=n.value;c.dateStart>t&&c.dateStart<e&&a.push(c)}}catch(s){i.e(s)}finally{i.f()}this.customer.dealStatistics=a}})},v=m,b=n("2877"),h=Object(b["a"])(v,r,a,!1,null,null,null);e["default"]=h.exports},"7c82":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container-line-date"}},[n("input",{staticClass:"line-date",attrs:{type:"datetime-local",id:t.dateID,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),n("label",{staticClass:"line-date-label",attrs:{for:t.dateID}},[t._v(t._s(t.label))])])},a=[],o={name:"AppLineDate",props:{dateID:String,placeholder:String,label:String,value:String}},i=o,c=(n("ef11"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"32745002",null);e["a"]=s.exports},"84ad":function(t,e,n){"use strict";n("0ab3")},"8ef0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer-navigation"},[n("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerStatistics"===t.$route.name,expression:"$route.name === 'customerStatistics'"}],attrs:{icon:"av_timer",size:"1.8rem",title:"Настроить период"},on:{"button-click":function(e){return t.$emit("show-period-popup")}}}),n("div",{staticClass:"save",on:{click:function(e){return t.$emit("save-customer")}}},[n("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerEdit"===t.$route.name,expression:"$route.name === 'customerEdit'"}],attrs:{title:"Сохранить и выйти"}}),n("span",{staticClass:"save-span"},[t._v("Сохранить")])],1),n("AppButtonIcon",{attrs:{size:"0.5rem"}}),n("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerStatistics"!==t.$route.name,expression:"$route.name !== 'customerStatistics'"}],attrs:{icon:"timeline",size:"1.8rem",title:"Статистика"},on:{"button-click":function(e){return t.$router.push({name:"customerStatistics",params:{id:t.customer.id}})}}}),n("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerAbout"!==t.$route.name,expression:"$route.name !== 'customerAbout'"}],attrs:{icon:"remove_red_eye",size:"1.8rem",title:"Просмотреть"},on:{"button-click":function(e){return t.$router.push({name:"customerAbout",params:{id:t.customer.id}})}}}),n("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerEdit"!==t.$route.name,expression:"$route.name !== 'customerEdit'"}],attrs:{icon:"create",size:"1.8rem",title:"Редактировать"},on:{"button-click":function(e){return t.$router.push({name:"customerEdit",params:{id:t.customer.id}})}}}),n("AppButtonIcon",{attrs:{icon:"business_center",size:"1.8rem",title:"Вернуться к клиентам"},on:{"button-click":function(e){return t.$router.push("/customers")}}})],1)},a=[],o=n("373c"),i={name:"CustomerNavigation",components:{AppButtonIcon:o["a"]},props:{customer:Object}},c=i,s=(n("3f26"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=u.exports},a26a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[n("div",{staticClass:"popup-wrapper-overlay"},[n("div",{staticClass:"popup-wrapper-content"},[t._t("default")],2)])])},a=[],o={name:"PopupWrapper",props:{hidden:Boolean}},i=o,c=(n("4b15"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"fa5ad10c",null);e["a"]=s.exports},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:a})},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var r=n("06c5");function a(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw i}}}}},bdaf:function(t,e,n){"use strict";n("633e")},d28b:function(t,e,n){var r=n("746f");r("iterator")},dda0:function(t,e,n){},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),p=o.Symbol;if(a&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new p(t):void 0===t?p():p(t);return""===t&&(l[e]=!0),e};u(d,p);var f=d.prototype=p.prototype;f.constructor=d;var m=f.toString,v="Symbol(test)"==String(p("test")),b=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(i(l,t))return"";var n=v?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},eda4:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-table"},[n("table",[t._t("table-content")],2)])},a=[],o={name:"AppTable"},i=o,c=(n("619a"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"73c47ab8",null);e["a"]=s.exports},ef11:function(t,e,n){"use strict";n("3254")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),p=n("b622"),l=n("1dde"),d=n("ae40"),f=l("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),v=p("species"),b=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!f||!m},{slice:function(t,e){var n,r,p,l=s(this),d=c(l.length),f=i(t,d),m=i(void 0===e?d:e,d);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,f,m);for(r=new(void 0===n?Array:n)(h(m-f,0)),p=0;f<m;f++,p++)f in l&&u(r,p,l[f]);return r.length=p,r}})},fc88:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6f523cd0.0670049f.js.map