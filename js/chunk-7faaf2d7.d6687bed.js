(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7faaf2d7"],{"2c3b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.popupShow?i("Popup",{on:{yes:t.editorExit,no:t.popupHidden},scopedSlots:t._u([{key:"title-popup",fn:function(){return[t._v(" Покинуть редактор клиента? ")]},proxy:!0},{key:"text-info-popup",fn:function(){return[t._v(" Введённые данные не будут сохранены! ")]},proxy:!0}],null,!1,3586864385)}):t._e(),i("div",{staticClass:"page-title flex-between-center"},[i("h3",{staticClass:"title-clip"},[t._v("Редактор клиента "),i("br"),t._v(' "'+t._s(t.editedCustomer.name)+'"')]),i("div",{staticClass:"editor-btns"},[i("button",{staticClass:"btn editor-btn btn-hover auth-submit blue darken-1",on:{click:function(e){return t.saveEditedCustomer(t.editedCustomer)}}},[i("i",{staticClass:"material-icons"},[t._v("exit_to_app")]),t._v("Сохранить и выйти ")]),i("button",{staticClass:"btn editor-btn btn-hover auth-submit blue darken-1",on:{click:function(e){return e.preventDefault(),t.popupVisibility.apply(null,arguments)}}},[i("i",{staticClass:"material-icons"},[t._v("business_center")]),t._v(" К Клиентам ")])])]),i("section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col s12"},[i("div",[i("form",[i("div",{staticClass:"form-content"},[i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(0),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.name,expression:"editedCustomer.name",modifiers:{trim:!0}}],attrs:{id:"name",type:"text"},domProps:{value:t.editedCustomer.name},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"name"}},[t._v(" Наименование")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(1),i("div",{staticClass:"input-field editor-input"},[i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.note,expression:"note",modifiers:{trim:!0}}],staticClass:"materialize-textarea",attrs:{id:"note",maxlength:"500","data-length":"500"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"note"}},[t._v("Примечание")])]),i("div",{staticClass:"input-field editor-input flex-column-center"},[i("button",{staticClass:"cloudinary-button",attrs:{id:"upload_widget"},on:{click:function(e){return e.preventDefault(),t.upload.apply(null,arguments)}}},[t._v("Загрузить фото примечания")]),null!=t.editedCustomer.uploadImage?i("div",{staticClass:"photo-container flex-center"},[i("img",{attrs:{src:t.editedCustomer.uploadImage,width:"200rem"}})]):t._e()])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(2),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.contractNumber,expression:"editedCustomer.contractNumber",modifiers:{trim:!0}}],attrs:{id:"contractNumber",type:"number"},domProps:{value:t.editedCustomer.contractNumber},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"contractNumber",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"contractNumber"}},[t._v("Номер договора")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.contractDate,expression:"editedCustomer.contractDate",modifiers:{trim:!0}}],attrs:{id:"contractDate",type:"date"},domProps:{value:t.editedCustomer.contractDate},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"contractDate",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"contractDate"}},[t._v("Дата договора")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(3),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.number,expression:"editedCustomer.number",modifiers:{trim:!0}}],attrs:{id:"number",type:"tel",maxlength:"20"},domProps:{value:t.editedCustomer.number},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"number",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"number"}},[t._v("Номер телефона")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.fax,expression:"editedCustomer.fax",modifiers:{trim:!0}}],attrs:{id:"fax",type:"number"},domProps:{value:t.editedCustomer.fax},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"fax",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"fax"}},[t._v("Факс")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.site,expression:"editedCustomer.site",modifiers:{trim:!0}}],attrs:{id:"site",type:"text"},domProps:{value:t.editedCustomer.site},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"site",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"site"}},[t._v("Сайт")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.email,expression:"editedCustomer.email",modifiers:{trim:!0}}],attrs:{id:"email",type:"email"},domProps:{value:t.editedCustomer.email},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"email"}},[t._v("Почта")])]),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.address,expression:"editedCustomer.address",modifiers:{trim:!0}}],attrs:{id:"address",type:"text"},domProps:{value:t.editedCustomer.address},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"address",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"address"}},[t._v("Адрес")])])])]),i("div",{staticClass:"card editor-card white darken-1 black-text"},[i("div",{staticClass:"card-content flex-column-center"},[t._m(4),i("div",{staticClass:"input-field editor-input"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.manager,expression:"editedCustomer.manager",modifiers:{trim:!0}}],attrs:{id:"manager",type:"text"},domProps:{value:t.editedCustomer.manager},on:{input:function(e){e.target.composing||t.$set(t.editedCustomer,"manager",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("label",{staticClass:"active",attrs:{for:"manager"}},[t._v("Менеджер")])]),i("div",{staticClass:"input-field radio-field editor-input flex-start-center"},[i("p",{staticClass:"right-margin-big"},[t._v("Статус: ")]),i("p",{staticClass:"right-margin-little"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.status,expression:"editedCustomer.status",modifiers:{trim:!0}}],attrs:{name:"status",type:"radio",value:"Действующий"},domProps:{checked:t._q(t.editedCustomer.status,"Действующий")},on:{change:function(e){return t.$set(t.editedCustomer,"status","Действующий")}}}),i("span",[t._v("Действующий")])])]),i("p",[i("label",[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editedCustomer.status,expression:"editedCustomer.status",modifiers:{trim:!0}}],attrs:{name:"status",type:"radio",value:"Сотрудничество прервано"},domProps:{checked:t._q(t.editedCustomer.status,"Сотрудничество прервано")},on:{change:function(e){return t.$set(t.editedCustomer,"status","Сотрудничество прервано")}}}),i("span",[t._v("Сотрудничество прервано")])])])])])])])])])])])])],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("account_box")]),t._v(" Общее")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("comment")]),t._v("Примечание")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("business_center")]),t._v(" Договоры")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("local_phone")]),t._v(" Контакты")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h4",{staticClass:"card-title"},[i("i",{staticClass:"material-icons"},[t._v("assessment")]),t._v(" Системная информация")])}],s=i("5530"),n=(i("159b"),i("99af"),i("4d5c")),o=i.n(n),d=i("3a60"),u=i("5614"),c=i("2f62"),l=i("260b"),m={name:"CustomerSubdivisionEdit",mixins:[u["a"]],directives:{mask:d["mask"]},data:function(){return{editedCustomer:"",note:""}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["customers"])),{},{subId:function(){return this.$route.params.subId},customerId:function(){return this.$route.params.id}}),created:function(){var t=document.querySelectorAll(".select");t.forEach((function(t){o.a.FormSelect.init(t)}));var e=document.querySelectorAll(".materialize-textarea");e.forEach((function(t){o.a.CharacterCounter.init(t)})),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.editedCustomer=this.customers[this.customerId].subdivisions[this.subId]},methods:Object(s["a"])(Object(s["a"])({},Object(c["d"])(["SET_CUSTOMERS_FROM_SERVER","SET_CUSTOMERS_FROM_LOCAL_STORAGE"])),{},{upload:function(){var t=this,e=cloudinary.createUploadWidget({cloudName:"db6qzfvbw",uploadPreset:"ml_default",language:"ru"},(function(e,i){!e&&i&&"success"===i.event&&(t.editedCustomer.uploadImage=i.info.secure_url)}));e.open()},editorExit:function(){this.$router.push("/customers/subdivisions/customer"+this.customerId)},saveEditedCustomer:function(t){var e=this;this.note.length&&this.editedCustomer.notes.push("".concat((new Date).toLocaleDateString(),": ").concat(this.note)),l["a"].database().ref("/customers/"+this.customerId+"/subdivisions/"+t.id).set(t).then((function(){e.SET_CUSTOMERS_FROM_SERVER(),e.editorExit()}))}})},p=m,v=i("2877"),f=Object(v["a"])(p,a,r,!1,null,null,null);e["default"]=f.exports},5614:function(t,e,i){"use strict";e["a"]={data:function(){return{popupShow:!1}},methods:{popupVisibility:function(){this.popupShow=!0},popupHidden:function(){this.popupShow=!1}}}},"99af":function(t,e,i){"use strict";var a=i("23e7"),r=i("d039"),s=i("e8b5"),n=i("861d"),o=i("7b0b"),d=i("50c4"),u=i("8418"),c=i("65f0"),l=i("1dde"),m=i("b622"),p=i("2d00"),v=m("isConcatSpreadable"),f=9007199254740991,C="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=l("concat"),h=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},g=!b||!_;a({target:"Array",proto:!0,forced:g},{concat:function(t){var e,i,a,r,s,n=o(this),l=c(n,0),m=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?n:arguments[e],h(s)){if(r=d(s.length),m+r>f)throw TypeError(C);for(i=0;i<r;i++,m++)i in s&&u(l,m,s[i])}else{if(m>=f)throw TypeError(C);u(l,m++,s)}return l.length=m,l}})}}]);
//# sourceMappingURL=chunk-7faaf2d7.d6687bed.js.map