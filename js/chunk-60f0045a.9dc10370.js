(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60f0045a"],{"0525":function(e,t,n){},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function a(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"077e":function(e,t,n){},"1b06":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container-line-text"}},[n("input",{staticClass:"line-text",attrs:{type:"text",maxlength:e.maxLength,id:e.inputID,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),n("label",{staticClass:"line-text-label",attrs:{for:e.inputID}},[e._v(e._s(e.label))])])},a=[],o={name:"AppLinetext",props:{inputID:String,placeholder:String,maxLength:String,label:String,value:String,subdivision:String}},i=o,s=(n("bc64"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"8174f3ee",null);t["a"]=c.exports},2262:function(e,t,n){},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6b75");function a(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return a(e)||o(e)||Object(i["a"])(e)||s()}},3254:function(e,t,n){},3368:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppPopupWrapper",{attrs:{hidden:e.hidePopupStatus}},[n("AppTopPanel",{attrs:{header:e.header},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":function(t){return e.$emit("delete-element")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(t){return e.$emit("close-popup")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-delete-wrapper"},[n("p",[e._t("popup-delete-content")],2)])],1)},a=[],o=n("a26a"),i=n("34b0"),s=n("373c"),c={name:"PopupDeleteWrapper",components:{AppPopupWrapper:o["a"],AppTopPanel:i["a"],AppButtonIcon:s["a"]},props:{hidePopupStatus:Boolean,header:String}},u=c,d=(n("93f4"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"18d3d347",null);t["a"]=l.exports},"34b0":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-top-panel"}},[n("h3",{staticClass:"top-panel-header"},[e._v(e._s(e.header))]),n("div",{staticClass:"top-panel-nav-buttons"},[e._t("nav-buttons")],2)])},a=[],o={name:"AppTopPanel",props:{header:String}},i=o,s=(n("bdaf"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"11bb2a0a",null);t["a"]=c.exports},"3a7b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppPopupWrapper",{attrs:{hidden:e.hidden}},[n("AppTopPanel",{attrs:{header:e.header},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(t){return e.$emit("popup-add")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(t){return e.$emit("popup-close")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-add-wrapper"},[e._t("popup-add-content")],2)],1)},a=[],o=n("a26a"),i=n("34b0"),s=n("373c"),c={name:"PopupAddWrapper",components:{AppPopupWrapper:o["a"],AppTopPanel:i["a"],AppButtonIcon:s["a"]},props:{hidden:Boolean,header:String,objectAdded:Object},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(e){this.$emit("add-city",e),this.renewAddedData()}}},u=c,d=n("2877"),l=Object(d["a"])(u,r,a,!1,null,null,null);t["a"]=l.exports},"4b15":function(e,t,n){"use strict";n("4ce5")},"4ce5":function(e,t,n){},"4df4":function(e,t,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");e.exports=function(e){var t,n,d,l,p,f,v=a(e),h="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,_=void 0!==m,S=u(v),E=0;if(_&&(m=r(m,b>2?arguments[2]:void 0,2)),void 0==S||h==Array&&i(S))for(t=s(v.length),n=new h(t);t>E;E++)f=_?m(v[E],E):v[E],c(n,E,f);else for(l=S.call(v),p=l.next,n=new h;!(d=p.call(l)).done;E++)f=_?o(l,m,[d.value,E],!0):d.value,c(n,E,f);return n.length=E,n}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},6062:function(e,t,n){"use strict";var r=n("6d61"),a=n("6566");e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},"633e":function(e,t,n){},6566:function(e,t,n){"use strict";var r=n("9bf2").f,a=n("7c73"),o=n("e2cc"),i=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),d=n("2626"),l=n("83ab"),p=n("f183").fastKey,f=n("69f3"),v=f.set,h=f.getterFor;e.exports={getConstructor:function(e,t,n,u){var d=e((function(e,r){s(e,d,t),v(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),l||(e.size=0),void 0!=r&&c(r,e[u],e,n)})),f=h(t),b=function(e,t,n){var r,a,o=f(e),i=m(e,t);return i?i.value=n:(o.last=i={index:a=p(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=i),r&&(r.next=i),l?o.size++:e.size++,"F"!==a&&(o.index[a]=i)),e},m=function(e,t){var n,r=f(e),a=p(t);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(d.prototype,{clear:function(){var e=this,t=f(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,l?t.size=0:e.size=0},delete:function(e){var t=this,n=f(t),r=m(t,e);if(r){var a=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==r&&(n.first=a),n.last==r&&(n.last=o),l?n.size--:t.size--}return!!r},forEach:function(e){var t,n=f(this),r=i(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!m(this,e)}}),o(d.prototype,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return b(this,0===e?0:e,t)}}:{add:function(e){return b(this,e=0===e?0:e,e)}}),l&&r(d.prototype,"size",{get:function(){return f(this).size}}),d},setStrong:function(e,t,n){var r=t+" Iterator",a=h(t),o=h(r);u(e,t,(function(e,t){v(this,{type:r,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(t)}}},"66da":function(e,t,n){"use strict";n("9dfd")},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6d61":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),d=n("861d"),l=n("d039"),p=n("1c7e"),f=n("d44e"),v=n("7156");e.exports=function(e,t,n){var h=-1!==e.indexOf("Map"),b=-1!==e.indexOf("Weak"),m=h?"set":"add",_=a[e],S=_&&_.prototype,E=_,A={},g=function(e){var t=S[e];i(S,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(b&&!d(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return b&&!d(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(b&&!d(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(o(e,"function"!=typeof _||!(b||S.forEach&&!l((function(){(new _).entries().next()})))))E=n.getConstructor(t,e,h,m),s.REQUIRED=!0;else if(o(e,!0)){var y=new E,k=y[m](b?{}:-0,1)!=y,D=l((function(){y.has(1)})),O=p((function(e){new _(e)})),w=!b&&l((function(){var e=new _,t=5;while(t--)e[m](t,t);return!e.has(-0)}));O||(E=t((function(t,n){u(t,E,e);var r=v(new _,t,E);return void 0!=n&&c(n,r[m],r,h),r})),E.prototype=S,S.constructor=E),(D||w)&&(g("delete"),g("has"),h&&g("get")),(w||k)&&g(m),b&&S.clear&&delete S.clear}return A[e]=E,r({global:!0,forced:E!=_},A),f(E,e),b||n.setStrong(E,e,h),E}},"6e81":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"app-table-row",on:{dblclick:function(t){return e.$emit("db-click")},click:function(t){return e.$emit("on-click")}}},[e._t("row-content")],2)},a=[],o={name:"AppTableWrapperRow"},i=o,s=(n("8dac"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"41c9ba50",null);t["a"]=c.exports},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(e,i),e}},"787e":function(e,t,n){"use strict";n("0525")},"7c82":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container-line-date"}},[n("input",{staticClass:"line-date",attrs:{type:"datetime-local",id:e.dateID,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),n("label",{staticClass:"line-date-label",attrs:{for:e.dateID}},[e._v(e._s(e.label))])])},a=[],o={name:"AppLineDate",props:{dateID:String,placeholder:String,label:String,value:String}},i=o,s=(n("ef11"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"32745002",null);t["a"]=c.exports},"8c56":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-deal"}},[n("DealPopupAdd",{attrs:{popupHidden:e.popupAddDeal},on:{"popup-toggle":e.popupAddToggle,"add-deal":e.addDeal}}),n("AppTopPanel",{attrs:{header:"Список заявок"},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(t){return e.popupAddToggle()}}})]},proxy:!0}])}),n("div",{staticClass:"app-deal-content"},[n("DealsTable",{attrs:{deals:e.deals},on:{"remove-deal":e.removeDeal,"set-current-deal":e.setCurrentDeal}})],1)],1)},a=[],o=n("b85c"),i=n("5530"),s=(n("b0c0"),n("260b")),c=n("2f62"),u=n("34b0"),d=n("373c"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PopupAddWrapper",{attrs:{hidden:e.popupHidden,header:"Добавление заявки"},on:{"popup-add":function(t){return e.addDeal(e.addedDeal)},"popup-close":function(t){return e.$emit("popup-toggle")}},scopedSlots:e._u([{key:"popup-add-content",fn:function(){return[n("AppLineText",{attrs:{inputID:"input-deal-name",label:"Название: ",maxLength:"20"},model:{value:e.addedDeal.name,callback:function(t){e.$set(e.addedDeal,"name",t)},expression:"addedDeal.name"}}),n("AppLineDate",{attrs:{dateID:"input-deal-date-start",label:"Начало: "},model:{value:e.dateStart,callback:function(t){e.dateStart=t},expression:"dateStart"}}),n("AppLineDate",{attrs:{dateID:"input-deal-date-end",label:"Конец: "},model:{value:e.dateEnd,callback:function(t){e.dateEnd=t},expression:"dateEnd"}}),n("div",{staticClass:"select"},[n("p",[e._v("Заказчик")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.addedDeal.customer,expression:"addedDeal.customer"}],staticClass:"app-select browser-default",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.addedDeal,"customer",t.target.multiple?n:n[0])}}},e._l(e.customers,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})),0)]),""!==e.addedDeal.customer?n("AppSelect",{attrs:{selectID:"select-subdivision",label:"Подразделение: "},model:{value:e.addedDeal.customer.subdivision,callback:function(t){e.$set(e.addedDeal.customer,"subdivision",t)},expression:"addedDeal.customer.subdivision"}},e._l(e.addedDeal.customer.subdivisions,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v(e._s(t.name))])})),0):e._e(),n("AppLineText",{attrs:{inputID:"input-deal-count",label:"Кол-во рабочих: ",maxLength:"20"},model:{value:e.addedDeal.neededWorkersCount,callback:function(t){e.$set(e.addedDeal,"neededWorkersCount",t)},expression:"addedDeal.neededWorkersCount"}}),e._l(e.workersCount,(function(t){return n("div",{key:t},[n("AppSelect",{attrs:{selectID:"select",label:"Рабочий "+t+": ",value:e.elementCountNumber(t)},on:{"select-change":e.pushMoreWorkers}},[n("option",{attrs:{value:""}},[e._v("Никого")]),e._l(e.localWorkers,(function(t){return n("option",{key:t.id},[e._v(e._s(t.surname)+" "+e._s(t.name))])}))],2)],1)})),n("p",{staticClass:"button-add",on:{click:function(t){return e.addMoreWorkers()}}},[e._v("Добавить ещё одного рабочего")])]},proxy:!0}])})},p=[],f=n("2909"),v=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("99af"),n("3a7b")),h=n("1b06"),b=n("7c82"),m=n("fac1"),_={name:"DealPopupAdd",data:function(){return{addedDeal:{},localWorkers:"",workersCount:1,addedWorkers:new Set,dateStart:"",dateEnd:"",neededWorkersCount:""}},computed:Object(i["a"])({},Object(c["c"])(["workers","customers"])),components:{PopupAddWrapper:v["a"],AppLineText:h["a"],AppLineDate:b["a"],AppSelect:m["a"]},props:{popupHidden:Boolean},watch:{dateStart:function(){this.addedDeal.dateStart=this.dateStart},dateEnd:function(){this.addedDeal.dateEnd=this.dateEnd}},created:function(){this.renewAddedData(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.checkWorkers()},methods:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{elementCountNumber:function(e){var t,n=0,r=Object(o["a"])(this.addedWorkers);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(n++,n===e)return a}}catch(i){r.e(i)}finally{r.f()}},addMoreWorkers:function(){this.workersCount++,this.checkWorkers()},pushMoreWorkers:function(e){this.addedWorkers.add(e)},checkWorkers:function(){for(var e in this.localWorkers=Object(i["a"])({},this.workers),this.localWorkers)"Да"===this.localWorkers[e].fired&&delete this.localWorkers[e];if(""!==this.dateStart)try{for(var t in this.localWorkers){var n,r=Object(o["a"])(this.localWorkers[t].events);try{for(r.s();!(n=r.n()).done;){var a=n.value;void 0!==this.localWorkers[t]&&a.start<this.dateStart&&delete this.localWorkers[t]}}catch(l){r.e(l)}finally{r.f()}}}catch(p){}if(""!==this.dateEnd)try{for(var s in this.localWorkers){var c,u=Object(o["a"])(this.localWorkers[s].events);try{for(u.s();!(c=u.n()).done;){var d=c.value;void 0!==this.localWorkers[s]&&d.end<this.dateEnd&&delete this.localWorkers[s]}}catch(l){u.e(l)}finally{u.f()}}}catch(p){}},renewAddedData:function(){this.addedDeal={id:Date.now(),name:"Новая заявка",customer:"",workers:"",dateStart:"",dateEnd:"",notes:["".concat((new Date).toLocaleDateString()," Заявка была создана")],notesCount:"5",subdivision:"",history:[{date:"[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"]"),info:"Заявка создана",employee:{name:"",id:""}}]}},addDeal:function(e){e.workers=Object(f["a"])(this.addedWorkers),this.$emit("add-deal",e),this.renewAddedData()}})},S=_,E=(n("66da"),n("2877")),A=Object(E["a"])(S,l,p,!1,null,null,null),g=A.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppTableWrapper",{scopedSlots:e._u([{key:"table-content",fn:function(){return[n("PopupDeleteWrapper",{attrs:{hidePopupStatus:e.popupRemoveHidden,header:"Удаление заявки "+e.currentDeal.name},on:{"close-popup":function(t){return e.popupRemoveToggle({})},"delete-element":function(t){e.$emit("remove-deal",e.currentDeal.id),e.popupRemoveToggle({})}},scopedSlots:e._u([{key:"popup-delete-content",fn:function(){return[e._v(" После нажатия на иконку корзины будет удалёна заявка "),n("b",[e._v(e._s(e.currentDeal.name))])]},proxy:!0}])}),n("AppTableWrapperRow",{scopedSlots:e._u([{key:"row-content",fn:function(){return[n("th",[e._v("Название")]),n("th",[e._v("Клиент")]),n("th",[e._v("Подразделение")]),n("th",[e._v("Открыто рабочих")]),n("th",[e._v("Кол-во рабочих")]),n("th",[e._v("Начало")]),n("th",[e._v("Конец")]),n("th",[e._v("Заметка")])]},proxy:!0}])}),e._l(e.deals,(function(t){return[n("AppTableWrapperRow",{key:t.id,on:{"db-click":function(n){return e.$router.push({name:"dealEdit",params:{id:t.id}})},"on-click":function(n){return e.$emit("set-current-deal",t)}},scopedSlots:e._u([{key:"row-content",fn:function(){return[n("td",{attrs:{title:t.name}},[e._v(e._s(t.name))]),n("td",[n("router-link",{attrs:{title:"Перейти к клиенту",to:{name:"customerAbout",params:{id:t.customer.id}}}},[e._v(" "+e._s(t.customer.name)+" ")])],1),n("td",{attrs:{title:t.customer.subdivision}},[e._v(" "+e._s(t.customer.subdivision)+" ")]),n("td",{attrs:{title:t.workers}},[e._v(e._s(t.neededWorkersCount))]),n("td",{attrs:{title:t.workers}},[e._v(e._s(t.workers.length))]),n("td",{attrs:{title:t.dateStart}},[e._v(e._s(t.dateStart.slice(0,10)+","+t.dateStart.slice(11)))]),n("td",{attrs:{title:t.dateEnd}},[e._v(e._s(t.dateEnd.slice(0,10)+","+t.dateEnd.slice(11)))]),t.notes?n("td",{attrs:{title:t.notes[t.notes.length-1]}},[e._v(" "+e._s(t.notes[t.notes.length-1].slice(10))+" ")]):n("td",[e._v("Заметок нет")]),n("td",{staticClass:"row-action"},[n("AppButtonIcon",{attrs:{icon:"create",title:"Редактировать",size:"1.5rem"},on:{"button-click":function(n){return e.$router.push({name:"dealEdit",params:{id:t.id}})}}}),n("AppButtonIcon",{attrs:{icon:"delete",title:"Удалить",size:"1.5rem"},on:{"button-click":function(n){return e.popupRemoveToggle(t)}}})],1)]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})},k=[],D=n("3368"),O=n("eda4"),w=n("6e81"),R={name:"DealsTable",components:{PopupDeleteWrapper:D["a"],AppButtonIcon:d["a"],AppTableWrapper:O["a"],AppTableWrapperRow:w["a"]},data:function(){return{popupRemoveHidden:!0,currentDeal:{},show:!1,showed:!1,workersCount:""}},props:{deals:Object},methods:{popupRemoveToggle:function(e){this.popupRemoveHidden=!this.popupRemoveHidden,this.currentDeal=e},test:function(){console.log(this.element.workers.length)}}},x=R,T=Object(E["a"])(x,y,k,!1,null,null,null),C=T.exports,I={name:"TheDeals",components:{AppTopPanel:u["a"],AppButtonIcon:d["a"],DealPopupAdd:g,DealsTable:C},data:function(){return{popupAddDeal:!0,currentDeal:null}},computed:Object(i["a"])({},Object(c["c"])(["deals","workers","customers"])),created:function(){this.SET_DEALS_FROM_LOCAL_STORAGE(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE()},methods:Object(i["a"])(Object(i["a"])({},Object(c["d"])(["SET_DEALS_FROM_LOCAL_STORAGE","SET_DEALS_FROM_SERVER","SET_WORKERS_FROM_SERVER","SET_WORKERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_SERVER","SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{popupAddToggle:function(){this.popupAddDeal=!this.popupAddDeal},setCurrentDeal:function(e){this.currentDeal=e},removeDeal:function(e){var t=this;s["a"].database().ref("/deals/"+e).remove().then((function(){console.log("Заявка удалёна 🗑️"),t.SET_DEALS_FROM_SERVER()}))},addDeal:function(e){var t=this;this.popupAddToggle(),e.name=e.name[0].toUpperCase()+e.name.substring(1);var n,r=e.workers,a=e.customer,i=Object(o["a"])(r);try{for(i.s();!(n=i.n()).done;){var c,u=n.value,d=null!==(c=this.workers[u])&&void 0!==c?c:null;if(void 0!==d&&null!==d){d.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id});try{d.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id})}catch(l){d.dealStatistics=[{name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}]}s["a"].database().ref("/workers/"+d.id).set(d).then((function(){t.SET_WORKERS_FROM_SERVER()}))}}}catch(p){i.e(p)}finally{i.f()}if(void 0!==a&&null!==a){try{a.dealStatistics.push({name:e.name,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id})}catch(l){a.dealStatistics=[{name:e.name,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}]}if(s["a"].database().ref("/customers/"+a.id).set(a).then((function(){t.SET_CUSTOMERS_FROM_SERVER()})),""===e.dateStart)throw M.toast({html:"Начало заявки не задано!"}),"Начало заявки не задано";if(""===e.dateEnd)throw M.toast({html:"Конец заявки не задан!"}),"Конец заявки не задан!";s["a"].database().ref("/deals/"+e.id).set(e).then((function(){console.log("Заявки добавлена ➕"),t.popupAddHidden=!0,t.SET_DEALS_FROM_SERVER()}))}else M.toast({html:"Клиент не задан!"})}})},W=I,j=Object(E["a"])(W,r,a,!1,null,null,null);t["default"]=j.exports},"8dac":function(e,t,n){"use strict";n("077e")},"8f0d":function(e,t,n){"use strict";n("2262")},"93f4":function(e,t,n){"use strict";n("e420")},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),p=n("b622"),f=n("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=f>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),_=l("concat"),S=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},E=!m||!_;r({target:"Array",proto:!0,forced:E},{concat:function(e){var t,n,r,a,o,i=s(this),l=d(i,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],S(o)){if(a=c(o.length),p+a>h)throw TypeError(b);for(n=0;n<a;n++,p++)n in o&&u(l,p,o[n])}else{if(p>=h)throw TypeError(b);u(l,p++,o)}return l.length=p,l}})},"9dfd":function(e,t,n){},a26a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[n("div",{staticClass:"popup-wrapper-overlay"},[n("div",{staticClass:"popup-wrapper-content"},[e._t("default")],2)])])},a=[],o={name:"PopupWrapper",props:{hidden:Boolean}},i=o,s=(n("4b15"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"fa5ad10c",null);t["a"]=c.exports},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),d=n("c04e"),l=n("d039"),p=n("7c73"),f=n("241c").f,v=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,m="Number",_=a[m],S=_.prototype,E=c(p(S))==m,A=function(e){var t,n,r,a,o,i,s,c,u=d(e,!1);if("string"==typeof u&&u.length>2)if(u=b(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(c=o.charCodeAt(s),c<48||c>a)return NaN;return parseInt(o,r)}return+u};if(o(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var g,y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(E?l((function(){S.valueOf.call(n)})):c(n)!=m)?u(new _(A(t)),n,y):A(t)},k=r?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;k.length>D;D++)s(_,g=k[D])&&!s(y,g)&&h(y,g,v(_,g));y.prototype=S,S.constructor=y,i(a,m,y)}},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&a(o,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},b5d6:function(e,t,n){},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var r=n("06c5");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw i}}}}},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc64:function(e,t,n){"use strict";n("b5d6")},bdaf:function(e,t,n){"use strict";n("633e")},d28b:function(e,t,n){var r=n("746f");r("iterator")},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),d=o.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new d(e):void 0===e?d():d(e);return""===e&&(l[t]=!0),t};u(p,d);var f=p.prototype=d.prototype;f.constructor=p;var v=f.toString,h="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=v.call(e);if(i(l,e))return"";var n=h?t.slice(7,-1):t.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},e420:function(e,t,n){},eda4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-table"},[n("table",[e._t("table-content")],2)])},a=[],o={name:"AppTable"},i=o,s=(n("8f0d"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"ceecb32a",null);t["a"]=c.exports},ef11:function(e,t,n){"use strict";n("3254")},f183:function(e,t,n){var r=n("d012"),a=n("861d"),o=n("5135"),i=n("9bf2").f,s=n("90e3"),c=n("bb2f"),u=s("meta"),d=0,l=Object.isExtensible||function(){return!0},p=function(e){i(e,u,{value:{objectID:"O"+ ++d,weakData:{}}})},f=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,u)){if(!l(e))return"F";if(!t)return"E";p(e)}return e[u].objectID},v=function(e,t){if(!o(e,u)){if(!l(e))return!0;if(!t)return!1;p(e)}return e[u].weakData},h=function(e){return c&&b.REQUIRED&&l(e)&&!o(e,u)&&p(e),e},b=e.exports={REQUIRED:!1,fastKey:f,getWeakData:v,onFreeze:h};r[u]=!0},fac1:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container-select"}},[n("select",{staticClass:"app-select browser-default",attrs:{id:e.selectID},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("select-change",t.target.value,e.count)}}},[e._t("default")],2),n("label",{staticClass:"select-label",attrs:{for:e.selectID}},[e._v(e._s(e.label))])])},a=[],o=(n("a9e3"),{name:"AppSelect",props:{selectID:String,label:String,value:String|Number,count:Number}}),i=o,s=(n("787e"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"bbf6f81a",null);t["a"]=c.exports},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),d=n("b622"),l=n("1dde"),p=n("ae40"),f=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),b=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!f||!v},{slice:function(e,t){var n,r,d,l=c(this),p=s(l.length),f=i(e,p),v=i(void 0===t?p:t,p);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,f,v);for(r=new(void 0===n?Array:n)(m(v-f,0)),d=0;f<v;f++,d++)f in l&&u(r,d,l[f]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-60f0045a.9dc10370.js.map