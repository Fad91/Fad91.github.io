(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf781"],{"649f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-title flex-between-center"},[e("h3",{staticClass:"title-clip"},[t._v("Информация о подразделении "),e("br"),t._v(' "'+t._s(t.customer.name)+'"')]),e("div",{staticClass:"editor-btns"},[e("router-link",{staticClass:"btn btn-hover pointer blue darken-1",attrs:{to:{name:"customerSubdivisions",params:{id:t.customerId}}}},[e("i",{staticClass:"material-icons"},[t._v("domain")]),t._v(" К подразделениям ")]),e("router-link",{staticClass:"btn btn-hover pointer blue darken-1",attrs:{to:"/customers"}},[e("i",{staticClass:"material-icons"},[t._v("business_center")]),t._v(" К Клиентам ")])],1)]),e("section",{staticClass:"info-content"},[e("div",{staticClass:"margin-fix w20rem"},[t._m(0),""!==t.customer.contractNumber?e("h6",[t._v("Номер договора: "),e("span",[t._v(t._s(t.customer.contractNumber))])]):t._e(),""!==t.customer.contractDate?e("h6",[t._v("Дата договора: "),e("span",[t._v(t._s(t.customer.contractDate))])]):t._e()]),e("div",{staticClass:"margin-fix w20rem"},[t._m(1),""!==t.customer.notes?e("h6",t._l(t.customer.notes,(function(s,a){return e("p",{key:a},[t._v(" "+t._s(s)+" ")])})),0):t._e(),e("h6",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.customer.uploadImageNote||"",expression:"customer.uploadImageNote !== undefined || ''"}]},[t._v("Изображение: "),e("span",[e("a",{attrs:{href:t.customer.uploadImageNote,target:"_blank"}},[t._v("Открыть")])])])]),e("div",{staticClass:"margin-fix w20rem"},[t._m(2),""!==t.customer.number?e("h6",[t._v("Номер: "),e("span",[e("a",{attrs:{href:"tel:"+t.customer.number}},[t._v(t._s(t.customer.number))])])]):t._e(),""!==t.customer.fax?e("h6",[t._v("Факс: "),e("span",[t._v(t._s(t.customer.fax))])]):t._e(),""!==t.customer.email?e("h6",[t._v("Почта: "),e("span",[e("a",{attrs:{href:"mailto:"+t.customer.email}},[t._v(t._s(t.customer.email))])])]):t._e(),""!==t.customer.site?e("h6",[t._v("Сайт: "),e("span",[e("a",{attrs:{target:"_blank",href:t.customer.site}},[t._v(t._s(t.customer.site))])])]):t._e(),""!==t.customer.address?e("h6",[t._v("Адрес: "),e("span",[t._v(t._s(t.customer.address))])]):t._e()]),e("div",{staticClass:"margin-fix w20rem"},[t._m(3),""!==t.customer.name?e("h6",[t._v("Наименование: "),e("span",[t._v(t._s(t.customer.name))])]):t._e(),""!==t.customer.manager?e("h6",[t._v("Менеджер: "),e("span",[t._v(t._s(t.customer.manager))])]):t._e(),""!==t.customer.status?e("h6",[t._v("Состояние: "),"Действующий"===t.customer.status?e("span",{staticClass:"green-text"},[t._v(t._s(t.customer.status))]):e("span",{staticClass:"red-text"},[t._v(t._s(t.customer.status))])]):t._e(),""!==t.customer.id?e("h6",[t._v("Идентификационный номер: "),e("span",[t._v(t._s(t.customer.id))])]):t._e()])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"flex-start-center"},[e("i",{staticClass:"material-icons"},[t._v("business_center")]),t._v(" Договоры")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"flex-start-center"},[e("i",{staticClass:"material-icons"},[t._v("comment")]),t._v(" Примечание")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"flex-start-center"},[e("i",{staticClass:"material-icons"},[t._v("local_phone")]),t._v(" Контакты")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"flex-start-center"},[e("i",{staticClass:"material-icons"},[t._v("assessment")]),t._v(" Системная информация")])}],c=e("5530"),n=e("2f62"),i={name:"CustomerSubdivisionAbout",filters:{booleanToWord:function(t){return!0===t?"Да":"Нет"}},data:function(){return{customer:""}},computed:Object(c["a"])(Object(c["a"])({},Object(n["c"])(["customers"])),{},{subId:function(){return this.$route.params.subId},customerId:function(){return this.$route.params.id}}),created:function(){this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.customer=this.customers[this.customerId].subdivisions[this.subId]},methods:Object(c["a"])({},Object(n["d"])(["SET_CUSTOMERS_FROM_LOCAL_STORAGE"]))},o=i,u=e("2877"),m=Object(u["a"])(o,a,r,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0cf781.fd6ded65.js.map