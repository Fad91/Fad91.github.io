(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bb5ad28"],{"059f":function(t,e,n){"use strict";n("bdb2")},"18f7":function(t,e,n){},"1b06":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container-line-text"}},[n("input",{staticClass:"line-text",attrs:{type:"text",maxlength:t.maxLength,id:t.inputID,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),n("label",{staticClass:"line-text-label",attrs:{for:t.inputID}},[t._v(t._s(t.label))])])},p=[],a={name:"AppLinetext",props:{inputID:String,placeholder:String,maxLength:String,label:String,value:String}},i=a,r=(n("059f"),n("2877")),c=Object(r["a"])(i,o,p,!1,null,"6bb380f1",null);e["a"]=c.exports},2262:function(t,e,n){},3368:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPopupWrapper",{attrs:{hidden:t.hidePopupStatus}},[n("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":function(e){return t.$emit("delete-element")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("close-popup")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-delete-wrapper"},[n("p",[t._t("popup-delete-content")],2)])],1)},p=[],a=n("a26a"),i=n("34b0"),r=n("373c"),c={name:"PopupDeleteWrapper",components:{AppPopupWrapper:a["a"],AppTopPanel:i["a"],AppButtonIcon:r["a"]},props:{hidePopupStatus:Boolean,header:String}},u=c,s=(n("93f4"),n("2877")),d=Object(s["a"])(u,o,p,!1,null,"18d3d347",null);e["a"]=d.exports},"34b0":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-top-panel"}},[n("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),n("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},p=[],a={name:"AppTopPanel",props:{header:String}},i=a,r=(n("bdaf"),n("2877")),c=Object(r["a"])(i,o,p,!1,null,"11bb2a0a",null);e["a"]=c.exports},"3a7b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppPopupWrapper",{attrs:{hidden:t.hidden}},[n("AppTopPanel",{attrs:{header:t.header},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить"},on:{"button-click":function(e){return t.$emit("popup-add")}}}),n("AppButtonIcon",{attrs:{icon:"close",size:"1.8rem",title:"Закрыть"},on:{"button-click":function(e){return t.$emit("popup-close")}}})]},proxy:!0}])}),n("div",{staticClass:"popup-add-wrapper"},[t._t("popup-add-content")],2)],1)},p=[],a=n("a26a"),i=n("34b0"),r=n("373c"),c={name:"PopupAddWrapper",components:{AppPopupWrapper:a["a"],AppTopPanel:i["a"],AppButtonIcon:r["a"]},props:{hidden:Boolean,header:String,objectAdded:Object},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(t){this.$emit("add-city",t),this.renewAddedData()}}},u=c,s=n("2877"),d=Object(s["a"])(u,o,p,!1,null,null,null);e["a"]=d.exports},"4b15":function(t,e,n){"use strict";n("4ce5")},"4ce5":function(t,e,n){},"633e":function(t,e,n){},"6e81":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"app-table-row",on:{dblclick:function(e){return t.$emit("db-click")},click:function(e){return t.$emit("on-click")}}},[t._t("row-content")],2)},p=[],a={name:"AppTableWrapperRow"},i=a,r=(n("aecd"),n("2877")),c=Object(r["a"])(i,o,p,!1,null,"267b6e8d",null);e["a"]=c.exports},"8f0d":function(t,e,n){"use strict";n("2262")},"93f4":function(t,e,n){"use strict";n("e420")},a26a:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.hidden?"hidden":"",attrs:{id:"app-popup-wrapper"}},[n("div",{staticClass:"popup-wrapper-overlay"},[n("div",{staticClass:"popup-wrapper-content"},[t._t("default")],2)])])},p=[],a={name:"PopupWrapper",props:{hidden:Boolean}},i=a,r=(n("4b15"),n("2877")),c=Object(r["a"])(i,o,p,!1,null,"fa5ad10c",null);e["a"]=c.exports},ad64:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-sites"}},[n("CityPopupAdd",{attrs:{hidden:t.popupAddHidden},on:{"add-city":t.addCity,"popup-toggle":t.popupAddToggle}}),n("AppTopPanel",{attrs:{header:"Список городов"},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"add",size:"1.8rem",title:"Добавить города"},on:{"button-click":t.popupAddToggle}})]},proxy:!0}])}),n("div",{staticClass:"app-sites-content"},[n("SitesTable",{attrs:{sites:t.sites},on:{"remove-city":t.removeCity}})],1)],1)},p=[],a=n("5530"),i=(n("b0c0"),n("2f62")),r=n("260b"),c=n("34b0"),u=n("373c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppTableWrapper",{scopedSlots:t._u([{key:"table-content",fn:function(){return[n("PopupDeleteWrapper",{attrs:{hidePopupStatus:t.popupRemoveHidden,header:"Удаление города "+t.city.name},on:{"close-popup":function(e){return t.popupRemoveToggle({})},"delete-element":function(e){t.$emit("remove-city",t.city.id),t.popupRemoveToggle({})}},scopedSlots:t._u([{key:"popup-delete-content",fn:function(){return[t._v(" После нажатия на иконку корзины будет удалён город "),n("b",[t._v(t._s(t.city.name))])]},proxy:!0}])}),n("AppTableWrapperRow",{scopedSlots:t._u([{key:"row-content",fn:function(){return[n("th",[t._v("Название")]),n("th",[t._v("Заметка")]),n("th")]},proxy:!0}])}),t._l(t.sites,(function(e){return[n("AppTableWrapperRow",{key:e.id,on:{"db-click":function(n){return t.$router.push({name:"cityEdit",params:{id:e.id}})}},scopedSlots:t._u([{key:"row-content",fn:function(){return[n("td",{attrs:{title:e.name}},[t._v(t._s(e.name))]),e.notes?n("td",{attrs:{title:e.notes[e.notes.length-1]}},[t._v(" "+t._s(e.notes[e.notes.length-1])+" ")]):n("td",[t._v("Заметок нет")]),n("td",{staticClass:"row-action"},[n("AppButtonIcon",{attrs:{icon:"create",title:"Редактировать",size:"1.2rem"},on:{"button-click":function(n){return t.$router.push({name:"cityEdit",params:{id:e.id}})}}}),n("AppButtonIcon",{attrs:{icon:"delete",title:"Удалить",size:"1.2rem"},on:{"button-click":function(n){t.popupRemoveToggle(e),t.city=e}}})],1)]},proxy:!0}],null,!0)})]}))]},proxy:!0}])})},d=[],l=n("3368"),f=n("eda4"),b=n("6e81"),m={name:"SitesTable",components:{PopupDeleteWrapper:l["a"],AppButtonIcon:u["a"],AppTableWrapper:f["a"],AppTableWrapperRow:b["a"]},data:function(){return{popupRemoveHidden:!0,city:{}}},props:{sites:Object},methods:{popupRemoveToggle:function(){this.popupRemoveHidden=!this.popupRemoveHidden}}},h=m,_=n("2877"),v=Object(_["a"])(h,s,d,!1,null,null,null),A=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PopupAddWrapper",{attrs:{hidden:t.hidden,header:"Добавление города"},on:{"popup-close":function(e){return t.$emit("popup-toggle")},"popup-add":function(e){return t.addCity(t.addedCity)}},scopedSlots:t._u([{key:"popup-add-content",fn:function(){return[n("AppLineText",{attrs:{inputID:"input-city",label:"Название: ",maxLength:"20"},model:{value:t.addedCity.name,callback:function(e){t.$set(t.addedCity,"name",e)},expression:"addedCity.name"}})]},proxy:!0}])})},S=[],T=n("3a7b"),g=n("1b06"),C={name:"CityPopupAdd",components:{PopupAddWrapper:T["a"],AppLineText:g["a"]},props:{hidden:Boolean},data:function(){return{addedCity:{},firstNote:"Город был создан"}},created:function(){this.renewAddedData()},watch:{firstNote:function(t){this.addedCity.notes[0]=t}},methods:{renewAddedData:function(){this.addedCity={id:Date.now(),name:"",notes:["Город был создан"],notesCount:"5"},this.firstNote="Город был создан"},addCity:function(t){this.$emit("add-city",t),this.renewAddedData()}}},E=C,x=Object(_["a"])(E,y,S,!1,null,null,null),w=x.exports,R={name:"Sites",components:{AppTopPanel:c["a"],AppButtonIcon:u["a"],SitesTable:A,CityPopupAdd:w},data:function(){return{popupAddHidden:!0}},computed:Object(a["a"])({},Object(i["c"])(["sites"])),created:function(){this.SET_SITES_FROM_LOCAL_STORAGE()},methods:Object(a["a"])(Object(a["a"])({},Object(i["d"])(["SET_SITES_FROM_LOCAL_STORAGE","SET_SITES_FROM_SERVER"])),{},{popupAddToggle:function(){this.popupAddHidden=!this.popupAddHidden},removeCity:function(t){var e=this;r["a"].database().ref("/sites/"+t).remove().then((function(){console.log("Город удалён 🗑️"),e.SET_SITES_FROM_SERVER()}))},addCity:function(t){var e=this;t.name=t.name[0].toUpperCase()+t.name.substring(1),r["a"].database().ref("/sites/"+t.id).set(t).then((function(){console.log("Город добавлен ➕"),e.popupAddHidden=!0,e.SET_SITES_FROM_SERVER()}))},updateCity:function(){this.SET_SITES_FROM_SERVER(),M.toast({html:"Города обновлены"})}})},O=R,k=Object(_["a"])(O,o,p,!1,null,null,null);e["default"]=k.exports},aecd:function(t,e,n){"use strict";n("18f7")},b0c0:function(t,e,n){var o=n("83ab"),p=n("9bf2").f,a=Function.prototype,i=a.toString,r=/^\s*function ([^ (]*)/,c="name";o&&!(c in a)&&p(a,c,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},bdaf:function(t,e,n){"use strict";n("633e")},bdb2:function(t,e,n){},e420:function(t,e,n){},eda4:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-table"},[n("table",[t._t("table-content")],2)])},p=[],a={name:"AppTable"},i=a,r=(n("8f0d"),n("2877")),c=Object(r["a"])(i,o,p,!1,null,"ceecb32a",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4bb5ad28.690a7199.js.map