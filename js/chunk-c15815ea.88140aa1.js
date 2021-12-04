(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c15815ea"],{"0d2c":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"worker-navigation"},[r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerStatistics"===e.$route.name,expression:"$route.name === 'workerStatistics'"}],attrs:{icon:"av_timer",size:"1.8rem",title:"Настроить период"},on:{"button-click":function(t){return e.$emit("show-period-popup")}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"===e.$route.name,expression:"$route.name === 'workerEdit'"}],attrs:{icon:"save",size:"1.8rem",title:"Сохранить и выйти"},on:{"button-click":function(t){return e.$emit("save-worker")}}}),r("AppButtonIcon",{attrs:{size:"0.5rem"}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerStatistics"!==e.$route.name,expression:"$route.name !== 'workerStatistics'"}],attrs:{icon:"timeline",size:"1.8rem",title:"Статистика"},on:{"button-click":function(t){return e.$router.push({name:"workerStatistics",params:{id:e.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerAbout"!==e.$route.name,expression:"$route.name !== 'workerAbout'"}],attrs:{icon:"remove_red_eye",size:"1.8rem",title:"Просмотреть"},on:{"button-click":function(t){return e.$router.push({name:"workerAbout",params:{id:e.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerCalendar"!==e.$route.name,expression:"$route.name !== 'workerCalendar'"}],attrs:{icon:"date_range",size:"1.8rem",title:"Календарь"},on:{"button-click":function(t){return e.$router.push({name:"workerCalendar",params:{id:e.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerHistory"!==e.$route.name,expression:"$route.name !== 'workerHistory'"}],attrs:{icon:"description",size:"1.8rem",title:"История"},on:{"button-click":function(t){return e.$router.push({name:"workerHistory",params:{id:e.worker.id}})}}}),r("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"workerEdit"!==e.$route.name,expression:"$route.name !== 'workerEdit'"}],attrs:{icon:"create",size:"1.8rem",title:"Редактировать"},on:{"button-click":function(t){return e.$router.push({name:"workerEdit",params:{id:e.worker.id}})}}}),r("AppButtonIcon",{attrs:{icon:"transfer_within_a_station",size:"1.8rem",title:"Вернуться к рабочим"},on:{"button-click":function(t){return e.$router.push("/workers")}}})],1)},n=[],a=r("5530"),s=r("260b"),i=r("2f62"),c=r("373c"),u={name:"WorkerNavigation",components:{AppButtonIcon:c["a"]},props:{worker:Object},methods:Object(a["a"])(Object(a["a"])({},Object(i["d"])(["SET_WORKERS_FROM_SERVER"])),{},{removeWorker:function(e){var t=this;s["a"].database().ref("/workers/"+e).remove().then((function(){t.SET_WORKERS_FROM_SERVER(),console.log("Рабочий удалён 🗑️")})),this.$router.push("/workers")}})},p=u,l=(r("b0b0"),r("2877")),m=Object(l["a"])(p,o,n,!1,null,null,null);t["a"]=m.exports},1425:function(e,t,r){"use strict";r("ad6c")},"34b0":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-top-panel"}},[r("h3",{staticClass:"top-panel-header"},[e._v(e._s(e.header))]),r("div",{staticClass:"top-panel-nav-buttons"},[e._t("nav-buttons")],2)])},n=[],a={name:"AppTopPanel",props:{header:String}},s=a,i=(r("bdaf"),r("2877")),c=Object(i["a"])(s,o,n,!1,null,"11bb2a0a",null);t["a"]=c.exports},"3e8e":function(e,t,r){},"633e":function(e,t,r){},"678a":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AppHistoryWrapper",{attrs:{header:'История изменения рабочего "'+e.worker.surname+" "+e.worker.name+'"',element:e.worker},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[r("WorkerNavigation",{attrs:{worker:e.worker}})]},proxy:!0}])})},n=[],a=r("5530"),s=r("2f62"),i=r("c95c"),c=r("0d2c"),u={name:"HistoryWorkers",components:{AppHistoryWrapper:i["a"],WorkerNavigation:c["a"]},data:function(){return{worker:""}},computed:Object(a["a"])({},Object(s["c"])(["workers"])),created:function(){this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.worker=this.workers[this.$route.params.id]},methods:Object(a["a"])({},Object(s["d"])(["SET_WORKERS_FROM_LOCAL_STORAGE"]))},p=u,l=r("2877"),m=Object(l["a"])(p,o,n,!1,null,null,null);t["default"]=m.exports},ad6c:function(e,t,r){},b0b0:function(e,t,r){"use strict";r("3e8e")},bdaf:function(e,t,r){"use strict";r("633e")},c95c:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app-history-wrapper"}},[r("AppTopPanel",{attrs:{header:e.header},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[e._t("nav-buttons")]},proxy:!0}],null,!0)}),e.element.history&&0!==e.element.history.length?r("section",e._l(e.element.history,(function(t,o){return r("div",{key:o},[r("div",{staticClass:"history-line"},[r("p",{staticClass:"history-index"},[e._v(e._s(o)+":")]),r("div",{staticClass:"history-moment"},[r("span",{staticClass:"history-moment-date"},[e._v(e._s(t.date))]),r("p",{staticClass:"history-moment-text"},[e._v(e._s(t.info))]),r("router-link",{attrs:{title:"Перейти к сотруднику",to:{name:"employeeEdit",params:{id:t.employee.id}}}},[e._v(" "+e._s(t.employee.name)+" ")])],1)])])})),0):r("section",[e._v("Истории пока нет")])],1)},n=[],a=r("34b0"),s={name:"AppHistoryWrapper",components:{AppTopPanel:a["a"]},props:{header:String,element:Object}},i=s,c=(r("1425"),r("2877")),u=Object(c["a"])(i,o,n,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-c15815ea.88140aa1.js.map