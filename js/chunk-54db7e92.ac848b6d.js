(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54db7e92"],{1425:function(e,t,n){"use strict";n("ad6c")},"34b0":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-top-panel"}},[n("h3",{staticClass:"top-panel-header"},[e._v(e._s(e.header))]),n("div",{staticClass:"top-panel-nav-buttons"},[e._t("nav-buttons")],2)])},o=[],a={name:"AppTopPanel",props:{header:String}},r=a,i=(n("bdaf"),n("2877")),p=Object(i["a"])(r,s,o,!1,null,"11bb2a0a",null);t["a"]=p.exports},"633e":function(e,t,n){},"776b":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AppHistoryWrapper",{attrs:{header:'История изменения сотрудника "'+e.employee.surname+" "+e.employee.name+'"',element:e.employee},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[n("AppButtonIcon",{attrs:{icon:"create",size:"1.8rem",title:"Редактировать"},on:{"button-click":function(t){return e.$router.push({name:"employeeEdit",params:{id:e.employee.id}})}}}),n("AppButtonIcon",{attrs:{icon:"group",size:"1.8rem",title:"Вернуться"},on:{"button-click":function(t){return e.$router.push("/employees")}}})]},proxy:!0}])})},o=[],a=n("5530"),r=n("2f62"),i=n("c95c"),p=n("373c"),c={name:"HistoryEmployees",components:{AppHistoryWrapper:i["a"],AppButtonIcon:p["a"]},data:function(){return{employee:""}},computed:Object(a["a"])({},Object(r["c"])(["employees"])),created:function(){this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.employee=this.employees[this.$route.params.id]},methods:Object(a["a"])({},Object(r["d"])(["SET_EMPLOYEES_FROM_LOCAL_STORAGE"]))},l=c,u=n("2877"),m=Object(u["a"])(l,s,o,!1,null,null,null);t["default"]=m.exports},ad6c:function(e,t,n){},bdaf:function(e,t,n){"use strict";n("633e")},c95c:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-history-wrapper"}},[n("AppTopPanel",{attrs:{header:e.header},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[e._t("nav-buttons")]},proxy:!0}],null,!0)}),e.element.history&&0!==e.element.history.length?n("section",e._l(e.element.history,(function(t,s){return n("div",{key:s},[n("div",{staticClass:"history-line"},[n("p",{staticClass:"history-index"},[e._v(e._s(s)+":")]),n("div",{staticClass:"history-moment"},[n("span",{staticClass:"history-moment-date"},[e._v(e._s(t.date))]),n("p",{staticClass:"history-moment-text"},[e._v(e._s(t.info))]),n("router-link",{attrs:{title:"Перейти к сотруднику",to:{name:"employeeEdit",params:{id:t.employee.id}}}},[e._v(" "+e._s(t.employee.name)+" ")])],1)])])})),0):n("section",[e._v("Истории пока нет")])],1)},o=[],a=n("34b0"),r={name:"AppHistoryWrapper",components:{AppTopPanel:a["a"]},props:{header:String,element:Object}},i=r,p=(n("1425"),n("2877")),c=Object(p["a"])(i,s,o,!1,null,null,null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-54db7e92.ac848b6d.js.map