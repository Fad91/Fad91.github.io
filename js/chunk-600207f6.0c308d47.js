(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-600207f6"],{"07ac":function(t,e,r){var a=r("23e7"),n=r("6f53").values;a({target:"Object",stat:!0},{values:function(t){return n(t)}})},2262:function(t,e,r){},3368:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppPopupWrapper",{attrs:{hidden:t.hidePopupStatus}},[r("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[r("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":function(e){return t.$emit("delete-element")}}}),r("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("close-popup")}}})]},proxy:!0}])}),r("div",{staticClass:"popup-delete-wrapper"},[r("p",[t._t("popup-delete-content")],2)])],1)},n=[],s=r("a26a"),i=r("34b0"),o=r("373c"),c={name:"PopupDeleteWrapper",components:{AppPopupWrapper:s["a"],AppTopPanel:i["a"],AppButtonIcon:o["a"]},props:{hidePopupStatus:Boolean,header:String}},l=c,u=(r("93f4"),r("2877")),p=Object(u["a"])(l,a,n,!1,null,"18d3d347",null);e["a"]=p.exports},"34b0":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app-top-panel"}},[r("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),r("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},n=[],s={name:"AppTopPanel",props:{header:String}},i=s,o=(r("bdaf"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"11bb2a0a",null);e["a"]=c.exports},4078:function(t,e,r){},"4b15":function(t,e,r){"use strict";r("4ce5")},"4ce5":function(t,e,r){},5614:function(t,e,r){"use strict";e["a"]={data:function(){return{popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1}}}},"633e":function(t,e,r){},"6e81":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"app-table-row",on:{dblclick:function(e){return t.$emit("db-click")},click:function(e){return t.$emit("on-click")}}},[t._t("row-content")],2)},n=[],s={name:"AppTableWrapperRow"},i=s,o=(r("db6e"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"425b5332",null);e["a"]=c.exports},"6f53":function(t,e,r){var a=r("83ab"),n=r("df75"),s=r("fc6a"),i=r("d1e7").f,o=function(t){return function(e){var r,o=s(e),c=n(o),l=c.length,u=0,p=[];while(l>u)r=c[u++],a&&!i.call(o,r)||p.push(t?[r,o[r]]:o[r]);return p}};t.exports={entries:o(!0),values:o(!1)}},"72dd":function(t,e,r){},"8f0d":function(t,e,r){"use strict";r("2262")},"93f4":function(t,e,r){"use strict";r("e420")},a26a:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[r("div",{staticClass:"popup-wrapper-overlay"},[r("div",{staticClass:"popup-wrapper-content"},[t._t("default")],2)])])},n=[],s={name:"PopupWrapper",props:{hidden:Boolean}},i=s,o=(r("4b15"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"fa5ad10c",null);e["a"]=c.exports},ad7e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"search"}},[r("AppTopPanel",{attrs:{header:"Поиск рабочих"},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[r("AppButtonIcon",{attrs:{icon:"search",size:"1.8rem"},on:{"button-click":t.searchAll}})]},proxy:!0}])}),r("section",[r("div",{staticClass:"row"},[r("div",{staticClass:"col s12"},[r("div",[r("form",[r("div",[t._m(0),r("div",{staticClass:"tabs-content",attrs:{id:"search-swipe-1"}},[r("div",{staticClass:"flex-column-center"},[r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label active",attrs:{for:"name"}},[t._v("Имя")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.name,expression:"searchInput.name",modifiers:{trim:!0}}],attrs:{id:"name",type:"text"},domProps:{value:t.searchInput.name},on:{input:function(e){e.target.composing||t.$set(t.searchInput,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label",attrs:{for:"surname"}},[t._v("Фамилия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.surname,expression:"searchInput.surname",modifiers:{trim:!0}}],attrs:{id:"surname",type:"text"},domProps:{value:t.searchInput.surname},on:{input:function(e){e.target.composing||t.$set(t.searchInput,"surname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label",attrs:{for:"patronymic"}},[t._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.patronymic,expression:"searchInput.patronymic",modifiers:{trim:!0}}],attrs:{id:"patronymic",type:"text"},domProps:{value:t.searchInput.patronymic},on:{input:function(e){e.target.composing||t.$set(t.searchInput,"patronymic",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),r("div",{staticClass:"tabs-content",attrs:{id:"search-swipe-2"}},[r("div",{staticClass:"flex-column-center"},[r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label",attrs:{for:"age"}},[t._v("Возраст")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.age,expression:"searchInput.age",modifiers:{trim:!0}}],attrs:{id:"age",type:"number"},domProps:{value:t.searchInput.age},on:{input:function(e){e.target.composing||t.$set(t.searchInput,"age",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label"},[t._v("Пол")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.sex,expression:"searchInput.sex",modifiers:{trim:!0}}],staticClass:"browser-default editor-select",attrs:{id:"sex"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchInput,"sex",e.target.multiple?r:r[0])}}},[r("option",{staticClass:"editor-option",attrs:{selected:"",value:""}},[t._v("Не отмечено")]),r("option",{staticClass:"editor-option",attrs:{value:"Мужской"}},[t._v("Мужской")]),r("option",{staticClass:"editor-option",attrs:{value:"Женский"}},[t._v("Женский")])])])])]),r("div",{staticClass:"tabs-content",attrs:{id:"search-swipe-3"}},[r("div",{staticClass:"flex-column-center"},[r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label"},[t._v("Город")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.searchInput.city,expression:"searchInput.city"}],staticClass:"browser-default editor-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchInput,"city",e.target.multiple?r:r[0])}}},[r("option",{staticClass:"editor-option",attrs:{selected:"",value:""}},[t._v("Не отмечено")]),t._l(this.sites,(function(e){return r("option",{key:e.value,staticClass:"editor-option"},[t._v(" "+t._s(e.name)+" ")])}))],2)]),r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label",attrs:{for:"mobilePhone"}},[t._v("Тел. Моб.")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput.mobilePhone,expression:"searchInput.mobilePhone",modifiers:{trim:!0}}],attrs:{id:"mobilePhone",type:"tel"},domProps:{value:t.searchInput.mobilePhone},on:{input:function(e){e.target.composing||t.$set(t.searchInput,"mobilePhone",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),r("div",{staticClass:"tabs-content",attrs:{id:"search-swipe-4"}},[r("div",{staticClass:"flex-column-center"},[r("div",{staticClass:"input-field editor-input flex-center"},[r("label",{staticClass:"editor-label"},[t._v("Профессия")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.searchInput.professions,expression:"searchInput.professions"}],staticClass:"browser-default editor-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.searchInput,"professions",e.target.multiple?r:r[0])}}},[r("option",{staticClass:"editor-option",attrs:{selected:"",value:""}},[t._v("Не отмечено")]),t._l(t.searchingProfessions(),(function(e){return r("option",{key:e,staticClass:"editor-option"},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),r("div",{staticClass:"col s12 black-text"},[r("h4",[t._v("Найдено")]),r("WorkersTable",{attrs:{workers:t.searchWorkers},on:{"remove-worker":t.removeWorker}})],1)])])])])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"tabs flex-center",attrs:{id:"tabs-swipe"}},[r("li",{staticClass:"tab"},[r("a",{staticClass:"active flex-center",attrs:{href:"#search-swipe-1"}},[r("i",{staticClass:"material-icons"},[t._v("account_box")]),t._v("ФИО")])]),r("li",{staticClass:"tab"},[r("a",{staticClass:"flex-center",attrs:{href:"#search-swipe-2"}},[r("i",{staticClass:"material-icons"},[t._v("assignment")]),t._v("Личные данные")])]),r("li",{staticClass:"tab"},[r("a",{staticClass:"flex-center",attrs:{href:"#search-swipe-3"}},[r("i",{staticClass:"material-icons"},[t._v("local_phone")]),t._v("Контактные данные")])]),r("li",{staticClass:"tab"},[r("a",{staticClass:"flex-center",attrs:{href:"#search-swipe-4"}},[r("i",{staticClass:"material-icons"},[t._v("rate_review")]),t._v("Рабочие данные")])])])}],s=r("5530"),i=(r("4de4"),r("07ac"),r("159b"),r("4d5c")),o=r.n(i),c=r("5614"),l=r("2f62"),u=r("260b"),p=r("e59a"),d=r("34b0"),m=r("373c"),f={name:"SearchWorkers",components:{WorkersTable:p["a"],AppTopPanel:d["a"],AppButtonIcon:m["a"]},mixins:[c["a"]],data:function(){return{updateTimeout:6e4,searchInput:{name:"",surname:"",patronymic:"",age:"",city:"",mobilePhone:"",professions:"",sex:"",medicalBook:""},searchWorkers:[]}},computed:Object(s["a"])({},Object(l["c"])(["sites","workers"])),methods:Object(s["a"])(Object(s["a"])({},Object(l["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE"])),{},{searching:function(t){return function(e,r){if(""!==r)return t.filter((function(t){return t[e].toLowerCase()===r.toLowerCase()}))}},searchAll:function(){var t=Object.values(this.workers);for(var e in this.searchInput){var r=this.searching(t),a=r(e,this.searchInput[e]);void 0!==a&&(t=a)}this.searchWorkers=t,this.searchingProfessions()},searchingProfessions:function(){var t=[];return Object.values(this.workers).forEach((function(e){-1===t.indexOf(e.professions)&&t.push(e.professions)})),t},removeWorker:function(t){u["a"].database().ref("/workers/"+t).remove().then((function(){console.log("Рабочий удалён 🗑️")}))}}),mounted:function(){this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.searchWorkers=Object.values(this.workers);var t=document.querySelectorAll(".tabs");t.forEach((function(t){o.a.Tabs.init(t)}))}},v=f,h=(r("f119"),r("2877")),b=Object(h["a"])(v,a,n,!1,null,"3cdd81a6",null);e["default"]=b.exports},bdaf:function(t,e,r){"use strict";r("633e")},db6e:function(t,e,r){"use strict";r("4078")},e420:function(t,e,r){},e59a:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppTableWrapper",{scopedSlots:t._u([{key:"table-content",fn:function(){return[r("PopupDeleteWrapper",{attrs:{hidePopupStatus:t.popupRemoveHidden,header:"Удаление рабочего "+t.worker.surname+" "+t.worker.name},on:{"close-popup":function(e){return t.popupRemoveToggle({})},"delete-element":function(e){t.$emit("remove-worker",t.worker.id),t.popupRemoveToggle({})}},scopedSlots:t._u([{key:"popup-delete-content",fn:function(){return[t._v(" После нажатия на иконку корзины будет удалён рабочий "),r("b",[t._v(t._s(t.worker.name))])]},proxy:!0}])}),r("AppTableWrapperRow",{scopedSlots:t._u([{key:"row-content",fn:function(){return[r("th",[t._v("Фамилия")]),r("th",[t._v("Имя")]),r("th",[t._v("Отчество")]),r("th",[t._v("Мед.книжка")]),r("th",[t._v("Город")]),r("th",[t._v("Телефон")]),r("th",[t._v("Профессия")]),r("th",[t._v("Заметка")]),r("th")]},proxy:!0}])}),t._l(t.workers,(function(e){return[r("AppTableWrapperRow",{key:e.id,on:{"db-click":function(r){return t.$router.push({name:"workerEdit",params:{id:e.id}})}},scopedSlots:t._u([{key:"row-content",fn:function(){return[r("td",{attrs:{title:e.surname}},[t._v(t._s(e.surname))]),r("td",{attrs:{title:e.name}},[t._v(t._s(e.name))]),r("td",{attrs:{title:e.patronymic}},[t._v(t._s(e.patronymic))]),r("td",{attrs:{title:e.medicalBookStatus}},[t._v("Около "+t._s(e.medicalBookStatus?e.medicalBookStatus:"0 лет"))]),r("td",{attrs:{title:e.city}},[t._v(t._s(e.city))]),r("td",[r("a",{attrs:{href:"tel:"+e.mobilePhone,title:"Позвонить"}},[t._v(" "+t._s(e.mobilePhone)+" ")])]),r("td",{attrs:{title:e.professions}},[t._v(t._s(e.professions))]),e.notes?r("td",{attrs:{title:e.notes[e.notes.length-1]}},[t._v(" "+t._s(e.notes[e.notes.length-1])+" ")]):r("td",[t._v("Заметок нет")]),r("td",{staticClass:"row-action"},[r("AppButtonIcon",{attrs:{icon:"timeline",title:"Статистика",size:"1.5rem"},on:{"button-click":function(r){return t.$router.push({name:"workerStatistics",params:{id:e.id}})}}}),r("AppButtonIcon",{attrs:{icon:"remove_red_eye",title:"Просмотреть",size:"1.5rem"},on:{"button-click":function(r){return t.$router.push({name:"workerAbout",params:{id:e.id}})}}}),r("AppButtonIcon",{attrs:{icon:"date_range",title:"Календарь",size:"1.5rem"},on:{"button-click":function(r){return t.$router.push({name:"workerCalendar",params:{id:e.id}})}}}),r("AppButtonIcon",{attrs:{icon:"create",title:"Редактировать",size:"1.5rem"},on:{"button-click":function(r){return t.$router.push({name:"workerEdit",params:{id:e.id}})}}}),r("AppButtonIcon",{attrs:{icon:"delete",title:"Удалить",size:"1.5rem"},on:{"button-click":function(r){t.popupRemoveToggle(e),t.worker=e}}})],1)]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})},n=[],s=r("3368"),i=r("eda4"),o=r("6e81"),c=r("373c"),l={name:"TableWorkers",components:{PopupDeleteWrapper:s["a"],AppButtonIcon:c["a"],AppTableWrapper:i["a"],AppTableWrapperRow:o["a"]},props:{workers:Object},data:function(){return{worker:"",popupRemoveHidden:!0}},methods:{popupRemoveToggle:function(){this.popupRemoveHidden=!this.popupRemoveHidden},removeWorker:function(t){this.$emit("remove-worker",t.id),this.popupHidden()}}},u=l,p=r("2877"),d=Object(p["a"])(u,a,n,!1,null,null,null);e["a"]=d.exports},eda4:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"app-table"},[r("table",[t._t("table-content")],2)])},n=[],s={name:"AppTable"},i=s,o=(r("8f0d"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"ceecb32a",null);e["a"]=c.exports},f119:function(t,e,r){"use strict";r("72dd")}}]);
//# sourceMappingURL=chunk-600207f6.0c308d47.js.map