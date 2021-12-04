(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-075f1dcf"],{"0eb8":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppTopPanel",{attrs:{header:'Информация о клиенте "'+t.customer.name},scopedSlots:t._u([{key:"nav-buttons",fn:function(){return[s("CustomerNavigation",{attrs:{customer:t.customer}})]},proxy:!0}])}),s("section",{staticClass:"info-content"},[s("div",{staticClass:"margin-fix w20rem"},[t._m(0),""!==t.customer.notes?s("h6",t._l(t.customer.notes,(function(e,n){return s("p",{key:n},[t._v(" "+t._s(e)+" ")])})),0):t._e(),s("h6",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.customer.uploadImageNote||"",expression:"customer.uploadImageNote !== undefined || ''"}]},[t._v("Изображение: "),s("wbr"),t._v(" "),s("span",[s("a",{attrs:{href:t.customer.uploadImageNote,target:"_blank"}},[t._v("Открыть")])])])]),s("div",{staticClass:"margin-fix w20rem"},[t._m(1),""!==t.customer.name?s("h6",[t._v("Наименование: "),s("wbr"),t._v(" "),s("span",[t._v(t._s(t.customer.name))])]):t._e(),""!==t.customer.id?s("h6",[t._v("Идентификационный номер: "),s("wbr"),t._v(" "),s("span",[t._v(t._s(t.customer.id))])]):t._e()])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"flex-start-center"},[s("i",{staticClass:"material-icons"},[t._v("comment")]),t._v(" Примечание")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"flex-start-center"},[s("i",{staticClass:"material-icons"},[t._v("assessment")]),t._v(" Системная информация")])}],r=s("5530"),a=s("2f62"),i=s("34b0"),c=s("8ef0"),u={name:"AboutCustomer",components:{AppTopPanel:i["a"],CustomerNavigation:c["a"]},filters:{booleanToWord:function(t){return!0===t?"Да":"Нет"}},data:function(){return{customer:""}},computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])(["customers"])),{},{customerId:function(){return this.$route.params.id}}),created:function(){this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.customer=this.customers[this.customerId]},methods:Object(r["a"])({},Object(a["d"])(["SET_CUSTOMERS_FROM_LOCAL_STORAGE"]))},m=u,p=s("2877"),l=Object(p["a"])(m,n,o,!1,null,null,null);e["default"]=l.exports},"34b0":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-top-panel"}},[s("h3",{staticClass:"top-panel-header"},[t._v(t._s(t.header))]),s("div",{staticClass:"top-panel-nav-buttons"},[t._t("nav-buttons")],2)])},o=[],r={name:"AppTopPanel",props:{header:String}},a=r,i=(s("bdaf"),s("2877")),c=Object(i["a"])(a,n,o,!1,null,"11bb2a0a",null);e["a"]=c.exports},"3f26":function(t,e,s){"use strict";s("fc88")},"633e":function(t,e,s){},"8ef0":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customer-navigation"},[s("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerStatistics"===t.$route.name,expression:"$route.name === 'customerStatistics'"}],attrs:{icon:"av_timer",size:"1.8rem",title:"Настроить период"},on:{"button-click":function(e){return t.$emit("show-period-popup")}}}),s("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerEdit"===t.$route.name,expression:"$route.name === 'customerEdit'"}],attrs:{icon:"save",size:"1.8rem",title:"Сохранить и выйти"},on:{"button-click":function(e){return t.$emit("save-customer")}}}),s("AppButtonIcon",{attrs:{size:"0.5rem"}}),s("AppButtonIcon",{attrs:{icon:"domain",size:"1.8rem",title:"Подразделения"},on:{"button-click":function(e){return t.$router.push({name:"customerSubdivisions",params:{id:t.customer.id}})}}}),s("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerStatistics"!==t.$route.name,expression:"$route.name !== 'customerStatistics'"}],attrs:{icon:"timeline",size:"1.8rem",title:"Статистика"},on:{"button-click":function(e){return t.$router.push({name:"customerStatistics",params:{id:t.customer.id}})}}}),s("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerAbout"!==t.$route.name,expression:"$route.name !== 'customerAbout'"}],attrs:{icon:"remove_red_eye",size:"1.8rem",title:"Просмотреть"},on:{"button-click":function(e){return t.$router.push({name:"customerAbout",params:{id:t.customer.id}})}}}),s("AppButtonIcon",{directives:[{name:"show",rawName:"v-show",value:"customerEdit"!==t.$route.name,expression:"$route.name !== 'customerEdit'"}],attrs:{icon:"create",size:"1.8rem",title:"Редактировать"},on:{"button-click":function(e){return t.$router.push({name:"customerEdit",params:{id:t.customer.id}})}}}),s("AppButtonIcon",{attrs:{icon:"business_center",size:"1.8rem",title:"Вернуться к клиентам"},on:{"button-click":function(e){return t.$router.push("/customers")}}})],1)},o=[],r=s("373c"),a={name:"CustomerNavigation",components:{AppButtonIcon:r["a"]},props:{customer:Object}},i=a,c=(s("3f26"),s("2877")),u=Object(c["a"])(i,n,o,!1,null,null,null);e["a"]=u.exports},bdaf:function(t,e,s){"use strict";s("633e")},fc88:function(t,e,s){}}]);
//# sourceMappingURL=chunk-075f1dcf.e2940a4f.js.map