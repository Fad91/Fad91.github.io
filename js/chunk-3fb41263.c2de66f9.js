(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fb41263"],{"07ed":function(t,e,a){"use strict";a("e19e")},"0ab3":function(t,e,a){},"1b06":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container-line-text"}},[a("input",{staticClass:"line-text",attrs:{type:"text",maxlength:t.maxLength,id:t.inputID,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),a("label",{staticClass:"line-text-label",attrs:{for:t.inputID}},[t._v(t._s(t.label))])])},r=[],o=(a("a9e3"),{name:"AppLinetext",props:{inputID:String,placeholder:String,maxLength:String,label:String,value:[Number,String],subdivision:String}}),s=o,i=(a("3b23"),a("2877")),d=Object(i["a"])(s,n,r,!1,null,"68000642",null);e["a"]=d.exports},2532:function(t,e,a){"use strict";var n=a("23e7"),r=a("5a34"),o=a("1d80"),s=a("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(o(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},3368:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AppPopupWrapper",{attrs:{hidden:t.hidePopupStatus}},[a("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[a("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":function(e){return t.$emit("delete-element")}}}),a("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("close-popup")}}})]},proxy:!0}])}),a("div",{staticClass:"popup-delete-wrapper"},[a("p",[t._t("popup-delete-content")],2)])],1)},r=[],o=a("a26a"),s=a("34b0"),i=a("373c"),d={name:"PopupDeleteWrapper",components:{AppPopupWrapper:o["a"],AppTopPanel:s["a"],AppButtonIcon:i["a"]},props:{hidePopupStatus:Boolean,header:String}},c=d,l=(a("93f4"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"18d3d347",null);e["a"]=u.exports},"34b0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-top-panel"}},[a("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),a("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},r=[],o={name:"AppTopPanel",props:{header:String}},s=o,i=(a("bdaf"),a("2877")),d=Object(i["a"])(s,n,r,!1,null,"11bb2a0a",null);e["a"]=d.exports},"3a7b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AppPopupWrapper",{attrs:{hidden:t.hidden}},[a("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[a("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(e){return t.$emit("popup-add")}}}),a("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("popup-close")}}})]},proxy:!0}])}),a("div",{staticClass:"popup-add-wrapper"},[t._t("popup-add-content")],2)],1)},r=[],o=a("a26a"),s=a("34b0"),i=a("373c"),d={name:"PopupAddWrapper",components:{AppPopupWrapper:o["a"],AppTopPanel:s["a"],AppButtonIcon:i["a"]},props:{hidden:Boolean,header:String,objectAdded:Object},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(t){this.$emit("add-city",t),this.renewAddedData()}}},c=d,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null);e["a"]=u.exports},"3b23":function(t,e,a){"use strict";a("cf75")},"44e7":function(t,e,a){var n=a("861d"),r=a("c6b6"),o=a("b622"),s=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"4b15":function(t,e,a){"use strict";a("4ce5")},"4ce5":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),d=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(t,e,a){var n=a("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},6062:function(t,e,a){"use strict";var n=a("6d61"),r=a("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"619a":function(t,e,a){"use strict";a("dda0")},"633e":function(t,e,a){},6566:function(t,e,a){"use strict";var n=a("9bf2").f,r=a("7c73"),o=a("e2cc"),s=a("0366"),i=a("19aa"),d=a("2266"),c=a("7dd0"),l=a("2626"),u=a("83ab"),p=a("f183").fastKey,f=a("69f3"),h=f.set,v=f.getterFor;t.exports={getConstructor:function(t,e,a,c){var l=t((function(t,n){i(t,l,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=n&&d(n,t[c],t,a)})),f=v(e),m=function(t,e,a){var n,r,o=f(t),s=b(t,e);return s?s.value=a:(o.last=s={index:r=p(e,!0),key:e,value:a,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=s),n&&(n.next=s),u?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},b=function(t,e){var a,n=f(t),r=p(e);if("F"!==r)return n.index[r];for(a=n.first;a;a=a.next)if(a.key==e)return a};return o(l.prototype,{clear:function(){var t=this,e=f(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,a=f(e),n=b(e,t);if(n){var r=n.next,o=n.previous;delete a.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),a.first==n&&(a.first=r),a.last==n&&(a.last=o),u?a.size--:e.size--}return!!n},forEach:function(t){var e,a=f(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(l.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),u&&n(l.prototype,"size",{get:function(){return f(this).size}}),l},setStrong:function(t,e,a){var n=e+" Iterator",r=v(e),o=v(n);c(t,e,(function(t,e){h(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),l(e)}}},"66da":function(t,e,a){"use strict";a("9dfd")},"6d61":function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),o=a("94ca"),s=a("6eeb"),i=a("f183"),d=a("2266"),c=a("19aa"),l=a("861d"),u=a("d039"),p=a("1c7e"),f=a("d44e"),h=a("7156");t.exports=function(t,e,a){var v=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),b=v?"set":"add",_=r[t],S=_&&_.prototype,E=_,D={},g=function(t){var e=S[t];s(S,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(o(t,"function"!=typeof _||!(m||S.forEach&&!u((function(){(new _).entries().next()})))))E=a.getConstructor(e,t,v,b),i.REQUIRED=!0;else if(o(t,!0)){var k=new E,A=k[b](m?{}:-0,1)!=k,y=u((function(){k.has(1)})),C=p((function(t){new _(t)})),O=!m&&u((function(){var t=new _,e=5;while(e--)t[b](e,e);return!t.has(-0)}));C||(E=e((function(e,a){c(e,E,t);var n=h(new _,e,E);return void 0!=a&&d(a,n[b],n,v),n})),E.prototype=S,S.constructor=E),(y||O)&&(g("delete"),g("has"),v&&g("get")),(O||A)&&g(b),m&&S.clear&&delete S.clear}return D[t]=E,n({global:!0,forced:E!=_},D),f(E,t),m||a.setStrong(E,t,v),E}},"6e81":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"app-table-row",on:{dblclick:function(e){return t.$emit("db-click")},click:function(e){return t.$emit("on-click")}}},[t._t("row-content")],2)},r=[],o={name:"AppTableWrapperRow"},s=o,i=(a("84ad"),a("2877")),d=Object(i["a"])(s,n,r,!1,null,"f4bc0862",null);e["a"]=d.exports},7156:function(t,e,a){var n=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var o,s;return r&&"function"==typeof(o=e.constructor)&&o!==a&&n(s=o.prototype)&&s!==a.prototype&&r(t,s),t}},"84ad":function(t,e,a){"use strict";a("0ab3")},"8c56":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-deal"}},[a("DealPopupAdd",{attrs:{popupHidden:t.popupAddDeal},on:{"popup-toggle":t.popupAddToggle,"add-deal":t.addDeal}}),a("AppTopPanel",{attrs:{header:"Список заявок"},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[a("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(e){return t.popupAddToggle()}}})]},proxy:!0}])}),a("div",{staticClass:"app-deal-content"},[a("DealsTable",{attrs:{deals:t.deals},on:{"remove-deal":t.removeDeal,"set-current-deal":t.setCurrentDeal}})],1)],1)},r=[],o=a("b85c"),s=a("5530"),i=(a("b0c0"),a("260b")),d=a("2f62"),c=a("34b0"),l=a("373c"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PopupAddWrapper",{attrs:{hidden:t.popupHidden,header:"Добавление заявки"},on:{"popup-add":function(e){return t.validateDeal(t.addedDeal)},"popup-close":function(e){return t.$emit("popup-toggle")}},scopedSlots:t._u([{key:"popup-add-content",fn:function(){return[a("AppLineText",{attrs:{inputID:"input-deal-name",label:"Название: ",maxLength:"40"},model:{value:t.addedDeal.name,callback:function(e){t.$set(t.addedDeal,"name",e)},expression:"addedDeal.name"}}),a("AppLineDate",{attrs:{dateID:"input-deal-date-start",label:"Начало: "},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}}),a("AppLineDate",{attrs:{dateID:"input-deal-date-end",label:"Конец: "},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}}),a("div",{staticClass:"select"},[a("p",{staticClass:"select-label"},[t._v("Заказчик")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.addedDeal.customer,expression:"addedDeal.customer"}],staticClass:"app-select browser-default",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.addedDeal,"customer",e.target.multiple?a:a[0])}}},t._l(t.customers,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name))])})),0)]),""!==t.addedDeal.customer?a("AppSelect",{attrs:{selectID:"select-subdivision",label:"Подразделение: "},model:{value:t.addedDeal.subdivision,callback:function(e){t.$set(t.addedDeal,"subdivision",e)},expression:"addedDeal.subdivision"}},t._l(t.addedDeal.customer.subdivisions,(function(e){return a("option",{key:e.id,domProps:{value:e.name}},[t._v(t._s(e.name))])})),0):t._e(),a("AppLineText",{attrs:{inputID:"input-deal-count",label:"Кол-во рабочих: ",maxLength:"20"},model:{value:t.addedDeal.neededWorkersCount,callback:function(e){t.$set(t.addedDeal,"neededWorkersCount",e)},expression:"addedDeal.neededWorkersCount"}})]},proxy:!0}])})},p=[],f=a("2909"),h=(a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("99af"),a("3a7b")),v=a("1b06"),m=a("7c82"),b=a("fac1"),_={name:"DealPopupAdd",data:function(){return{addedDeal:{},localWorkers:"",workersCount:1,addedWorkers:new Set,dateStart:"",dateEnd:"",neededWorkersCount:"",validate:!1}},computed:Object(s["a"])({},Object(d["c"])(["workers","customers"])),components:{PopupAddWrapper:h["a"],AppLineText:v["a"],AppLineDate:m["a"],AppSelect:b["a"]},props:{popupHidden:Boolean},watch:{dateStart:function(){this.addedDeal.dateStart=this.dateStart},dateEnd:function(){this.addedDeal.dateEnd=this.dateEnd}},created:function(){this.renewAddedData(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.checkWorkers()},methods:Object(s["a"])(Object(s["a"])({},Object(d["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{elementCountNumber:function(t){var e,a=0,n=Object(o["a"])(this.addedWorkers);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(a++,a===t)return r}}catch(s){n.e(s)}finally{n.f()}},checkWorkers:function(){for(var t in this.localWorkers=Object(s["a"])({},this.workers),this.localWorkers)"Да"===this.localWorkers[t].fired&&delete this.localWorkers[t];if(""!==this.dateStart)try{for(var e in this.localWorkers){var a,n=Object(o["a"])(this.localWorkers[e].events);try{for(n.s();!(a=n.n()).done;){var r=a.value;void 0!==this.localWorkers[e]&&r.start<this.dateStart&&delete this.localWorkers[e]}}catch(u){n.e(u)}finally{n.f()}}}catch(p){}if(""!==this.dateEnd)try{for(var i in this.localWorkers){var d,c=Object(o["a"])(this.localWorkers[i].events);try{for(c.s();!(d=c.n()).done;){var l=d.value;void 0!==this.localWorkers[i]&&l.end<this.dateEnd&&delete this.localWorkers[i]}}catch(u){c.e(u)}finally{c.f()}}}catch(p){}},renewAddedData:function(){this.addedDeal={id:Date.now(),name:"Новая заявка",customer:"",workers:"",dateStart:"",dateEnd:"",workersCount:"",workersLength:0,notes:["".concat((new Date).toLocaleDateString()," Заявка создана")],notesCount:"",subdivision:"",history:[{date:"[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"]"),info:"Заявка создана",employee:{name:"",id:""}}]}},validateDeal:function(t){this.dateStart?this.dateEnd?this.addedDeal.customer?this.addedDeal.neededWorkersCount?(M.toast({html:"Все поля заполнены, ты молодец-удалец!"}),this.validate=!0,this.workers[0]=Object(f["a"])(this.addedWorkers),this.$emit("add-deal",t),this.renewAddedData()):M.toast({html:"Внимание! Укажите количество рабочих!"}):M.toast({html:"Внимание! Выберите заказчика!"}):M.toast({html:"Внимание! Дата окончания заявки не заполнена!"}):M.toast({html:"Внимание! Дата начала заявки не заполнена!"})}})},S=_,E=(a("66da"),a("2877")),D=Object(E["a"])(S,u,p,!1,null,null,null),g=D.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"date-label",attrs:{for:"customer-filter"}},[t._v("Поиск заявок по клиенту "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchByCustomer,expression:"searchByCustomer"}],staticClass:"date-input",attrs:{type:"search-customer",name:"customer-filter",id:"customer-filter",placeholder:"Введите имя клиента"},domProps:{value:t.searchByCustomer},on:{input:[function(e){e.target.composing||(t.searchByCustomer=e.target.value)},t.searchDealsByCustomer]}})]),a("label",{staticClass:"date-label",attrs:{for:"date-filter"}},[t._v("Поиск заявок по дате "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchByDate,expression:"searchByDate"}],staticClass:"date-input",attrs:{type:"search-date",name:"date-filter",id:"date-filter",placeholder:"Введите дату в формате ГГГГ-ММ-ДД"},domProps:{value:t.searchByDate},on:{input:[function(e){e.target.composing||(t.searchByDate=e.target.value)},t.searchDealsByDate]}})]),a("div",{staticClass:"buttons"},[a("button",{staticClass:"filter-button",attrs:{type:"button"},on:{click:t.showClosedDeals}},[t._v("Показать закрытые заявки")]),a("button",{staticClass:"filter-button filter-button--red",attrs:{type:"button"},on:{click:t.showOpenedDeals}},[t._v("Показать открытые заявки")]),a("button",{staticClass:"filter-button filter-button--grey",attrs:{type:"button"},on:{click:t.showAllDeals}},[t._v("Показать все заявки")])]),a("AppTableWrapper",{scopedSlots:t._u([{key:"table-content",fn:function(){return[a("PopupDeleteWrapper",{attrs:{hidePopupStatus:t.popupRemoveHidden,header:"Удаление заявки "+t.currentDeal.name},on:{"close-popup":function(e){return t.popupRemoveToggle({})},"delete-element":function(e){t.$emit("remove-deal",t.currentDeal.id),t.popupRemoveToggle({})}},scopedSlots:t._u([{key:"popup-delete-content",fn:function(){return[t._v(" После нажатия на иконку корзины будет удалёна заявка "),a("b",[t._v(t._s(t.currentDeal.name))])]},proxy:!0}])}),a("AppTableWrapperRow",{scopedSlots:t._u([{key:"row-content",fn:function(){return[a("th",[t._v("Название")]),a("th",[t._v("Клиент")]),a("th",[t._v("Подразделение")]),a("th",[t._v("Количество"),a("br"),t._v("рабочих")]),a("th",[t._v("Начало заявки")]),a("th",[t._v("Конец заявки")]),a("th",[t._v("Заметка")])]},proxy:!0}])}),t._l(t.data,(function(e){return[a("AppTableWrapperRow",{key:e.id,on:{"on-click":function(a){return t.$router.push({name:"dealEdit",params:{id:e.id}})}},scopedSlots:t._u([{key:"row-content",fn:function(){return[a("td",{attrs:{title:e.name}},[t._v(t._s(e.name))]),a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red"},[a("router-link",{attrs:{title:"Перейти к клиенту",to:{name:"customerAbout",params:{id:e.customer.id}}}},[t._v(" "+t._s(e.customer.name)+" ")])],1),a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red",attrs:{title:e.subdivision}},[t._v(" "+t._s(e.subdivision)+" ")]),a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red",attrs:{title:e.workers}},[a("span",[t._v(t._s(e.workers.length))]),a("span",[t._v(" / ")]),e.neededWorkersCount?a("span",[t._v(" "+t._s(e.neededWorkersCount)+" ")]):a("span",[t._v("0")])]),a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red",attrs:{title:e.date}},[t._v(t._s(e.dateStart.slice(0,10)))]),a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red",attrs:{title:e.date}},[t._v(t._s(e.dateEnd.slice(0,10)))]),e.notes?a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red",attrs:{title:e.notes[e.notes.length-1]}},[t._v(" "+t._s(e.notes[e.notes.length-1].slice(10))+" ")]):a("td",{staticClass:"column-td",class:e.neededWorkersCount==e.workers.length?"column-td--green":"column-td--red"},[t._v("Заметок нет")]),a("td",{staticClass:"row-action"},[a("AppButtonIcon",{attrs:{icon:"create",title:"Редактировать",size:"1.5rem"},on:{"button-click":function(a){return t.$router.push({name:"dealEdit",params:{id:e.id}})}}}),a("AppButtonIcon",{attrs:{icon:"delete",title:"Удалить",size:"1.5rem"},on:{"button-click":function(a){return t.popupRemoveToggle(e)}}})],1)]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})],1)},A=[],y=(a("4de4"),a("caad"),a("2532"),a("3368")),C=a("eda4"),O=a("6e81"),w=a("2ef0"),R=a.n(w),x={name:"DealsTable",components:{PopupDeleteWrapper:y["a"],AppButtonIcon:l["a"],AppTableWrapper:C["a"],AppTableWrapperRow:O["a"]},data:function(){return{searchByCustomer:"",searchByDate:"",popupRemoveHidden:!0,currentDeal:{},show:!1,showed:!1,workersCount:"",workersLength:null,data:[],clicked:null,searchDateDeals:[],closedDeals:[],openedDeals:[]}},props:{deals:Object},methods:{popupRemoveToggle:function(t){this.popupRemoveHidden=!this.popupRemoveHidden,this.currentDeal=t},searchDealsByCustomer:function(){var t=this;if(""===this.searchByCustomer)return this.data=R.a.toArray(this.deals),this.data;this.data=this.data.filter((function(e){return e.customer.name.includes(t.searchByCustomer)}))},searchDealsByDate:function(){var t=this;if(""===this.searchByDate)return this.data=R.a.toArray(this.deals),this.data;this.data=this.data.filter((function(e){return e.dateStart.includes(t.searchByDate)}))},showClosedDeals:function(){var t=this;this.data=R.a.toArray(this.deals),this.data=this.data.filter((function(e){return t.clicked=!0,e.neededWorkersCount==="".concat(e.workers.length)}))},showOpenedDeals:function(){var t=this;this.data=R.a.toArray(this.deals),this.data=this.data.filter((function(e){return t.clicked=!0,e.neededWorkersCount!=="".concat(e.workers.length)}))},showAllDeals:function(){this.data=R.a.toArray(this.deals)}},watch:{deals:function(){this.data=R.a.toArray(this.deals)}},created:function(){this.data=R.a.toArray(this.deals),this.searchDateDeals=this.data,this.closedDeals=this.data,this.openedDeals=this.data}},T=x,W=(a("07ed"),Object(E["a"])(T,k,A,!1,null,null,null)),I=W.exports,L={name:"TheDeals",components:{AppTopPanel:c["a"],AppButtonIcon:l["a"],DealPopupAdd:g,DealsTable:I},data:function(){return{popupAddDeal:!0,currentDeal:null}},computed:Object(s["a"])({},Object(d["c"])(["deals","workers","customers"])),created:function(){this.SET_DEALS_FROM_LOCAL_STORAGE(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE()},methods:Object(s["a"])(Object(s["a"])({},Object(d["d"])(["SET_DEALS_FROM_LOCAL_STORAGE","SET_DEALS_FROM_SERVER","SET_WORKERS_FROM_SERVER","SET_WORKERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_SERVER","SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{popupAddToggle:function(){this.popupAddDeal=!this.popupAddDeal},setCurrentDeal:function(t){this.currentDeal=t},removeDeal:function(t){var e=this;i["a"].database().ref("/deals/"+t).remove().then((function(){console.log("Заявка удалёна 🗑️"),e.SET_DEALS_FROM_SERVER()}))},addDeal:function(t){var e=this;this.popupAddToggle(),t.name=t.name[0].toUpperCase()+t.name.substring(1);var a,n=t.workers,r=t.customer,s=Object(o["a"])(n);try{for(s.s();!(a=s.n()).done;){var d,c=a.value,l=null!==(d=this.workers[c])&&void 0!==d?d:null;if(void 0!==l&&null!==l){l.events.push({id:Date.now(),title:t.name,start:t.dateStart,end:t.dateEnd,dealID:t.id});try{l.dealStatistics.push({name:t.name,customer:t.customer,dateStart:t.dateStart,dateEnd:t.dateEnd,dealID:t.id})}catch(u){l.dealStatistics=[{name:t.name,customer:t.customer,dateStart:t.dateStart,dateEnd:t.dateEnd,dealID:t.id}]}i["a"].database().ref("/workers/"+l.id).set(l).then((function(){e.SET_WORKERS_FROM_SERVER()}))}}}catch(p){s.e(p)}finally{s.f()}if(void 0!==r&&null!==r){try{r.dealStatistics.push({name:t.name,dateStart:t.dateStart,dateEnd:t.dateEnd,dealID:t.id})}catch(u){r.dealStatistics=[{name:t.name,dateStart:t.dateStart,dateEnd:t.dateEnd,dealID:t.id}]}if(i["a"].database().ref("/customers/"+r.id).set(r).then((function(){e.SET_CUSTOMERS_FROM_SERVER()})),""===t.dateStart)throw M.toast({html:"Начало заявки не задано!"}),"Начало заявки не задано";if(""===t.dateEnd)throw M.toast({html:"Конец заявки не задан!"}),"Конец заявки не задан!";t.addedWorkers&&console.log("ТЕст"),i["a"].database().ref("/deals/"+t.id).set(t).then((function(){console.log("Заявки добавлена ➕"),e.popupAddHidden=!0,e.SET_DEALS_FROM_SERVER()}))}else M.toast({html:"Клиент не задан!"});M.toast({html:"Заявка добавлена!"}),this.SET_DEALS_FROM_SERVER()}})},j=L,B=Object(E["a"])(j,n,r,!1,null,null,null);e["default"]=B.exports},"93f4":function(t,e,a){"use strict";a("e420")},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),s=a("861d"),i=a("7b0b"),d=a("50c4"),c=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=f>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=u("concat"),S=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},E=!b||!_;n({target:"Array",proto:!0,forced:E},{concat:function(t){var e,a,n,r,o,s=i(this),u=l(s,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],S(o)){if(r=d(o.length),p+r>v)throw TypeError(m);for(a=0;a<r;a++,p++)a in o&&c(u,p,o[a])}else{if(p>=v)throw TypeError(m);c(u,p++,o)}return u.length=p,u}})},"9dfd":function(t,e,a){},a26a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[a("div",{staticClass:"popup-wrapper-overlay"},[a("div",{staticClass:"popup-wrapper-content"},[t._t("default")],2)])])},r=[],o={name:"PopupWrapper",props:{hidden:Boolean}},s=o,i=(a("4b15"),a("2877")),d=Object(i["a"])(s,n,r,!1,null,"fa5ad10c",null);e["a"]=d.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),o=a("94ca"),s=a("6eeb"),i=a("5135"),d=a("c6b6"),c=a("7156"),l=a("c04e"),u=a("d039"),p=a("7c73"),f=a("241c").f,h=a("06cf").f,v=a("9bf2").f,m=a("58a8").trim,b="Number",_=r[b],S=_.prototype,E=d(p(S))==b,D=function(t){var e,a,n,r,o,s,i,d,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=m(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+c}for(o=c.slice(2),s=o.length,i=0;i<s;i++)if(d=o.charCodeAt(i),d<48||d>r)return NaN;return parseInt(o,n)}return+c};if(o(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var g,k=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof k&&(E?u((function(){S.valueOf.call(a)})):d(a)!=b)?c(new _(D(e)),a,k):D(e)},A=n?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;A.length>y;y++)i(_,g=A[y])&&!i(k,g)&&v(k,g,h(_,g));k.prototype=S,S.constructor=k,s(r,b,k)}},ab13:function(t,e,a){var n=a("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},bb2f:function(t,e,a){var n=a("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bdaf:function(t,e,a){"use strict";a("633e")},caad:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").includes,o=a("44d2"),s=a("ae40"),i=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!i},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cf75:function(t,e,a){},dda0:function(t,e,a){},e19e:function(t,e,a){},e420:function(t,e,a){},eda4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-table"},[a("table",[t._t("table-content")],2)])},r=[],o={name:"AppTable"},s=o,i=(a("619a"),a("2877")),d=Object(i["a"])(s,n,r,!1,null,"73c47ab8",null);e["a"]=d.exports},f183:function(t,e,a){var n=a("d012"),r=a("861d"),o=a("5135"),s=a("9bf2").f,i=a("90e3"),d=a("bb2f"),c=i("meta"),l=0,u=Object.isExtensible||function(){return!0},p=function(t){s(t,c,{value:{objectID:"O"+ ++l,weakData:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,c)){if(!u(t))return"F";if(!e)return"E";p(t)}return t[c].objectID},h=function(t,e){if(!o(t,c)){if(!u(t))return!0;if(!e)return!1;p(t)}return t[c].weakData},v=function(t){return d&&m.REQUIRED&&u(t)&&!o(t,c)&&p(t),t},m=t.exports={REQUIRED:!1,fastKey:f,getWeakData:h,onFreeze:v};n[c]=!0}}]);
//# sourceMappingURL=chunk-3fb41263.c2de66f9.js.map