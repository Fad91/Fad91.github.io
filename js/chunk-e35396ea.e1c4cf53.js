(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e35396ea"],{"2d16":function(e,t,a){},7980:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app-edit"}},[a("PopupDeleteWrapper",{attrs:{hidePopupStatus:e.popupRemoveHidden,header:"Удаление заявки "+e.editedDeal.name},on:{"close-popup":e.popupRemoveToggle,"delete-element":function(t){return e.removeDeal(e.editedDeal)}},scopedSlots:e._u([{key:"popup-delete-content",fn:function(){return[e._v(" После нажатия на иконку корзины будет удалёна заявка "),a("b",[e._v(e._s(e.editedDeal.name))])]},proxy:!0}])}),a("AppEditWrapper",{attrs:{header:"Редактор заявки: "+e.editedDeal.name},scopedSlots:e._u([{key:"nav-buttons",fn:function(){return[a("div",{staticClass:"save",on:{click:function(t){return e.saveEditedDeal(e.editedDeal)}}},[a("AppButtonIcon",{attrs:{title:"Сохранить и выйти"},on:{"button-click":function(t){return e.saveEditedDeal(e.editedDeal)}}}),a("span",{staticClass:"save-span"},[e._v("СОХРАНИТЬ")])],1),a("AppButtonIcon",{attrs:{icon:"",size:"1.8rem"}}),a("AppButtonIcon",{attrs:{icon:"delete",size:"1.8rem",title:"Удалить"},on:{"button-click":e.popupRemoveToggle}}),a("AppButtonIcon",{attrs:{icon:"description",title:"История",size:"1.8rem"},on:{"button-click":function(t){return e.$router.push({name:"dealHistory",params:{id:e.editedDeal.id}})}}}),a("AppButtonIcon",{attrs:{icon:"attach_money",size:"1.8rem",title:"Вернуться"},on:{"button-click":e.editorExit}})]},proxy:!0},{key:"edit-section",fn:function(){return[a("div",{staticClass:"edit-block"},[a("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"import_contacts","header-text":"Основные данные"}}),a("div",{staticClass:"edit-block-content"},[a("AppLineText",{attrs:{inputID:"input-city",label:"Название: ",maxLength:"20"},model:{value:e.editedDeal.name,callback:function(t){e.$set(e.editedDeal,"name",t)},expression:"editedDeal.name"}}),a("AppLineText",{attrs:{selectID:"select",label:"Заказчик: "},model:{value:e.editedDeal.customer.name,callback:function(t){e.$set(e.editedDeal.customer,"name",t)},expression:"editedDeal.customer.name"}}),a("AppLineText",{attrs:{selectID:"select",label:"Подразделение: "},model:{value:e.editedDeal.customer.subdivision,callback:function(t){e.$set(e.editedDeal.customer,"subdivision",t)},expression:"editedDeal.customer.subdivision"}}),a("AppLineText",{attrs:{inputID:"input-needed-count",label:"Кол-во рабочих: ",maxLength:"20"},model:{value:e.editedDeal.neededWorkersCount,callback:function(t){e.$set(e.editedDeal,"neededWorkersCount",t)},expression:"editedDeal.neededWorkersCount"}})],1)],1),a("div",{staticClass:"edit-block"},[a("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"date_range","header-text":"Даты"}}),a("div",{staticClass:"edit-block-content"},[a("AppLineDate",{attrs:{dateID:"input-deal-date-start",label:"Начало: "},model:{value:e.dateStart,callback:function(t){e.dateStart=t},expression:"dateStart"}}),a("AppLineDate",{attrs:{dateID:"input-deal-date-end",label:"Конец: "},model:{value:e.dateEnd,callback:function(t){e.dateEnd=t},expression:"dateEnd"}})],1)],1),a("div",{staticClass:"edit-block"},[a("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"transfer_within_a_station","header-text":"Рабочие"}}),a("div",{staticClass:"edit-block-content"},[e.editedDeal.workers?a("ul",{staticClass:"workers-list"},e._l(e.editedDeal.workers,(function(t,i){return a("li",{key:t.id,staticClass:"workers-list__item",attrs:{value:t.id}},[e._v("Рабочий "+e._s(i+1)+": "),a("span",[e._v(e._s(t))])])})),0):a("ul",{staticClass:"workers-list"},[a("li",{staticClass:"workers-list__item"},[e._v("Список пуст, добавьте рабочих")])])]),e.editedDeal.workers?e._e():a("div",e._l(Number(e.editedDeal.neededWorkersCount),(function(t,i){return a("AppSelect",{key:i,attrs:{selectID:"appSelect",label:"Рабочий "+(i+1),value:e.value},on:{"select-change":e.pushMoreWorkers}},e._l(e.localWorkers,(function(t){return a("option",{key:t.id},[e._v(e._s(t.surname)+" "+e._s(t.name))])})),0)})),1)],1),a("div",{staticClass:"edit-block"},[a("AppHeaderIcon",{staticClass:"edit-block-header",attrs:{"header-level":"4","material-icon":"chrome_reader_mode","header-text":"Заметки"}}),a("div",{staticClass:"edit-block-content"},[a("AppLineText",{attrs:{inputID:"input-note-count",label:"Заметок в списке:  ",minValue:"0",maxValue:"35",maxLength:"5",value:e.editedDeal.notes.length}}),a("AppLineText",{attrs:{placeholder:"Введите новую заметку",inputID:"input-note",label:"Новая Заметка: ",maxLength:"35"},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}}),a("AppNotesList",{attrs:{"notes-list":e.editedDeal.notes,notesCount:e.editedDeal.notesCount},on:{"remove-note":e.removeNote}}),a("div",{staticClass:"save",on:{click:e.saveNewNote}},[a("AppButtonIcon",{attrs:{title:"Сохранить заметку"},on:{click:e.saveNewNote}}),a("span",{staticClass:"save-span"},[e._v("СОХРАНИТЬ ЗАМЕТКУ")])],1)],1)],1)]},proxy:!0}])})],1)},s=[],r=a("2909"),d=a("b85c"),o=a("5530"),n=(a("99af"),a("a434"),a("4de4"),a("b0c0"),a("260b")),l=a("2f62"),c=a("2721"),h=a("38a1"),u=a("c0a7"),p=a("1b06"),D=a("373c"),k=a("3368"),E=a("fac1"),f=a("7c82"),S=a("2ef0"),m=a.n(S),v={name:"DealEdit",props:{value:Object},components:{AppEditWrapper:c["a"],AppHeaderIcon:h["a"],AppButtonIcon:D["a"],AppLineText:p["a"],AppSelect:E["a"],AppLineDate:f["a"],AppNotesList:u["a"],PopupDeleteWrapper:k["a"]},data:function(){return{data:[],search:"",popupRemoveHidden:!0,editedDeal:"",note:"",notesCount:"",customerID:"",subdivision:{},worker1ID:"",worker2ID:"",worker3ID:"",worker4ID:"",worker5ID:"",dateStart:"",dateEnd:"",localWorkers:"",newWorker:"",workersCount:0,addedWorkers:[],newWorkers:[],historyElement:{date:"[Дата: ".concat((new Date).toLocaleDateString()," Время: ").concat((new Date).toLocaleTimeString(),"]"),info:"Заявка просматривалась ",employee:{name:"Неизвестный пользователь",id:0}}}},computed:Object(o["a"])({},Object(l["c"])(["deals","employees","authEmployee","workers","customers"])),watch:{dateStart:function(){this.editedDeal.dateStart=this.dateStart,this.checkWorkers()},dateEnd:function(){this.editedDeal.dateEnd=this.dateEnd,this.checkWorkers()},subdivision:function(){this.editedDeal.subdivision=this.subdivision,this.checkWorkers()}},created:function(){this.SET_EMPLOYEES_FROM_LOCAL_STORAGE(),this.SET_DEALS_FROM_LOCAL_STORAGE(),this.SET_WORKERS_FROM_LOCAL_STORAGE(),this.SET_CUSTOMERS_FROM_LOCAL_STORAGE(),this.editedDeal=this.deals[this.$route.params.id],this.customerID=this.editedDeal.customer.id,this.subdivision=this.editedDeal.customer.subdivision,this.dateStart=this.editedDeal.dateStart,this.dateEnd=this.editedDeal.dateEnd,this.workers=this.editedDeal.addedWorkers,this.workersCount=this.addedWorkers.length,this.notesCount=this.editedDeal.notes.length,console.log(this.subdivision);try{this.worker1ID=this.editedDeal.worker.id}catch(e){}try{this.worker2ID=this.editedDeal.worker2.id}catch(e){}try{this.worker3ID=this.editedDeal.worker3.id}catch(e){}try{this.worker4ID=this.editedDeal.worker4.id}catch(e){}try{this.worker5ID=this.editedDeal.worker5.id}catch(e){}this.checkWorkers(),this.data=m.a.toArray(this.localWorkers)},methods:Object(o["a"])(Object(o["a"])({},Object(l["d"])(["SET_DEALS_FROM_SERVER","SET_DEALS_FROM_LOCAL_STORAGE","SET_EMPLOYEES_FROM_LOCAL_STORAGE","SET_WORKERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_LOCAL_STORAGE","SET_CUSTOMERS_FROM_SERVER","SET_WORKERS_FROM_SERVER"])),{},{removeNote:function(e){this.data=this.editedDeal.notes,this.data.splice(e,1),n["a"].database().ref("deals/".concat(this.editedDeal.id,"/notes/").concat(e)).remove()},elementCountNumber:function(e){var t,a=0,i=Object(d["a"])(this.addedWorkers);try{for(i.s();!(t=i.n()).done;){var s=t.value;if(a++,a===e)return s}}catch(r){i.e(r)}finally{i.f()}},addMoreWorkers:function(){if(this.checkWorkers(),""!==this.newWorker)return this.addedWorkers;M.toast({html:"Внимание! Выберите рабочего!"})},pushMoreWorkers:function(e){this.newWorker=e,this.addedWorkers.push(this.newWorker),this.editedDeal.workers=Object(r["a"])(this.addedWorkers)},checkWorkers:function(){for(var e in this.localWorkers=Object(o["a"])({},this.workers),this.localWorkers)"Да"===this.localWorkers[e].fired&&delete this.localWorkers[e];if(""!==this.dateStart)try{for(var t in this.localWorkers){var a,i=Object(d["a"])(this.localWorkers[t].events);try{for(i.s();!(a=i.n()).done;){var s=a.value;void 0!==this.localWorkers[t]&&s.start<this.dateStart&&s.dealID!==this.editedDeal.id&&delete this.localWorkers[t]}}catch(h){i.e(h)}finally{i.f()}}}catch(u){}if(""!==this.dateEnd)try{for(var r in this.localWorkers){var n,l=Object(d["a"])(this.localWorkers[r].events);try{for(l.s();!(n=l.n()).done;){var c=n.value;void 0!==this.localWorkers[r]&&c.end<this.dateEnd&&c.dealID!==this.editedDeal.id&&delete this.localWorkers[r]}}catch(h){l.e(h)}finally{l.f()}}}catch(u){}},popupRemoveToggle:function(){this.popupRemoveHidden=!this.popupRemoveHidden},removeDeal:function(e){var t=this;this.popupRemoveToggle(),this.editorExit(),n["a"].database().ref("/deals/"+e.id).remove().then((function(){console.log("Заявка удалёна 🗑️"),t.SET_DEALS_FROM_SERVER()}))},editorExit:function(){this.$router.push("/deals")},saveNewNote:function(){this.note.length&&(this.editedDeal.notes.push("".concat((new Date).toLocaleDateString(),": ").concat(this.note)),this.notesCount++)},getNewHistoryElement:function(e){var t=this.historyElement;return t.info=e,t},saveEditedDeal:function(e){var t=this;if(""!==this.customerID){var a=this.customers;a[this.editedDeal.customer.id].dealStatistics=a[this.editedDeal.customer.id].dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),a[this.customerID].dealStatistics.push({name:this.editedDeal.name,dateStart:this.editedDeal.dateStart,dateEnd:this.editedDeal.dateEnd,dealID:this.editedDeal.id}),n["a"].database().ref("/customers/").set(a).then((function(){t.SET_CUSTOMERS_FROM_SERVER()})),this.editedDeal.customer=this.customers[this.customerID]}if(n["a"].database().ref("/subdivision").set(this.subdivision).then((function(){t.SET_CUSTOMERS_FROM_SERVER()})),""!==this.worker1ID){try{var i=this.deals[this.editedDeal.id].worker.id,s=this.workers[i];s.dealStatistics=s.dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),s.events=s.events.filter((function(e){return e.dealID!==t.editedDeal.id})),n["a"].database().ref("/workers/"+s.id).set(s).then((function(){t.SET_WORKERS_FROM_SERVER()}))}catch(m){}var r=this.workers[this.worker1ID];r.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}),r.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id}),n["a"].database().ref("/workers/"+r.id).set(r).then((function(){t.SET_WORKERS_FROM_SERVER()})),this.editedDeal.worker=this.workers[this.worker1ID]}if(""!==this.worker2ID){try{var d=this.deals[[this.editedDeal.id]].worker2.id,o=this.workers[d];o.dealStatistics=o.dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),o.events=o.events.filter((function(e){return e.dealID!==t.editedDeal.id})),n["a"].database().ref("/workers/"+o.id).set(o).then((function(){t.SET_WORKERS_FROM_SERVER()}))}catch(m){}var l=this.workers[this.worker2ID];l.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}),l.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id}),n["a"].database().ref("/workers/"+l.id).set(l).then((function(){t.SET_WORKERS_FROM_SERVER()})),this.editedDeal.worker2=this.workers[this.worker2ID]}if(""!==this.worker3ID){try{var c=this.deals[[this.editedDeal.id]].worker3.id,h=this.workers[c];h.dealStatistics=h.dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),h.events=h.events.filter((function(e){return e.dealID!==t.editedDeal.id})),n["a"].database().ref("/workers/"+h.id).set(h).then((function(){t.SET_WORKERS_FROM_SERVER()}))}catch(m){}var u=this.workers[this.worker3ID];u.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}),u.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id}),n["a"].database().ref("/workers/"+u.id).set(u).then((function(){t.SET_WORKERS_FROM_SERVER()})),this.editedDeal.worker3=this.workers[this.worker3ID]}if(""!==this.worker4ID){try{var p=this.deals[[this.editedDeal.id]].worker4.id,D=this.workers[p];D.dealStatistics=D.dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),D.events=D.events.filter((function(e){return e.dealID!==t.editedDeal.id})),n["a"].database().ref("/workers/"+D.id).set(D).then((function(){t.SET_WORKERS_FROM_SERVER()}))}catch(m){}var k=this.workers[this.worker4ID];k.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}),k.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id}),n["a"].database().ref("/workers/"+k.id).set(k).then((function(){t.SET_WORKERS_FROM_SERVER()})),this.editedDeal.worker4=this.workers[this.worker4ID]}if(""!==this.worker5ID){try{var E=this.deals[[this.editedDeal.id]].worker5.id,f=this.workers[E];f.dealStatistics=f.dealStatistics.filter((function(e){return e.dealID!==t.editedDeal.id})),f.events=f.events.filter((function(e){return e.dealID!==t.editedDeal.id})),n["a"].database().ref("/workers/"+f.id).set(f).then((function(){t.SET_WORKERS_FROM_SERVER()}))}catch(m){}var S=this.workers[this.worker5ID];S.dealStatistics.push({name:e.name,customer:e.customer,dateStart:e.dateStart,dateEnd:e.dateEnd,dealID:e.id}),S.events.push({id:Date.now(),title:e.name,start:e.dateStart,end:e.dateEnd,dealID:e.id}),n["a"].database().ref("/workers/"+S.id).set(S).then((function(){t.SET_WORKERS_FROM_SERVER()})),this.editedDeal.worker5=this.workers[this.worker5ID]}e.history.push(this.getNewHistoryElement("Заявка была изменена")),n["a"].database().ref("/deals/"+e.id).set(e).then((function(){t.SET_DEALS_FROM_SERVER(),t.editorExit(),M.toast({html:"Данные сохранены!"})}))}})},_=v,R=(a("f2fb"),a("2877")),w=Object(R["a"])(_,i,s,!1,null,"4ede36c9",null);t["default"]=w.exports},a434:function(e,t,a){"use strict";var i=a("23e7"),s=a("23cb"),r=a("a691"),d=a("50c4"),o=a("7b0b"),n=a("65f0"),l=a("8418"),c=a("1dde"),h=a("ae40"),u=c("splice"),p=h("splice",{ACCESSORS:!0,0:0,1:2}),D=Math.max,k=Math.min,E=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!p},{splice:function(e,t){var a,i,c,h,u,p,S=o(this),m=d(S.length),v=s(e,m),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=m-v):(a=_-2,i=k(D(r(t),0),m-v)),m+a-i>E)throw TypeError(f);for(c=n(S,i),h=0;h<i;h++)u=v+h,u in S&&l(c,h,S[u]);if(c.length=i,a<i){for(h=v;h<m-i;h++)u=h+i,p=h+a,u in S?S[p]=S[u]:delete S[p];for(h=m;h>m-i+a;h--)delete S[h-1]}else if(a>i)for(h=m-i;h>v;h--)u=h+i-1,p=h+a-1,u in S?S[p]=S[u]:delete S[p];for(h=0;h<a;h++)S[h+v]=arguments[h+2];return S.length=m-i+a,c}})},f2fb:function(e,t,a){"use strict";a("2d16")}}]);
//# sourceMappingURL=chunk-e35396ea.e1c4cf53.js.map