(function(e){function t(t){for(var a,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-075f1dcf":"18b06cd0","chunk-0f15ae3e":"f3adf8de","chunk-1b1aac8e":"0f0c2621","chunk-1ce3e30e":"93217e8b","chunk-23a34b29":"efe8984e","chunk-2b0e8715":"c67d2fd8","chunk-2bf84e58":"4dcf75e0","chunk-2c5dac52":"603979cc","chunk-2cd721e6":"9ef5517a","chunk-470c1fef":"9093da7a","chunk-8c5ff7aa":"18b7abcf","chunk-c0b2c204":"2183174a","chunk-2d0be175":"4ae4d1c6","chunk-2d0cc274":"315b7597","chunk-2c00b48f":"39d4d64a","chunk-db401e78":"4f1b340d","chunk-7faaf2d7":"673696d2","chunk-fb22a3ce":"f54b43c9","chunk-2d0cf781":"fd6ded65","chunk-54db7e92":"ac848b6d","chunk-56596c6e":"6192ec8d","chunk-5aaadf52":"8bd6c061","chunk-5d0e1a34":"13a7e7f5","chunk-6563a99b":"acac5aa2","chunk-6d681107":"596c872e","chunk-6fc9330e":"74ae1380","chunk-7a4f4f02":"274de773","chunk-a193c6ac":"7f696e4b","chunk-c15815ea":"9cb1b0f2"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-075f1dcf":1,"chunk-0f15ae3e":1,"chunk-1b1aac8e":1,"chunk-1ce3e30e":1,"chunk-23a34b29":1,"chunk-2bf84e58":1,"chunk-2c5dac52":1,"chunk-2cd721e6":1,"chunk-470c1fef":1,"chunk-8c5ff7aa":1,"chunk-c0b2c204":1,"chunk-2c00b48f":1,"chunk-db401e78":1,"chunk-54db7e92":1,"chunk-56596c6e":1,"chunk-5aaadf52":1,"chunk-5d0e1a34":1,"chunk-6563a99b":1,"chunk-6d681107":1,"chunk-7a4f4f02":1,"chunk-a193c6ac":1,"chunk-c15815ea":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-075f1dcf":"74978f4d","chunk-0f15ae3e":"22a822f7","chunk-1b1aac8e":"07fc0e2a","chunk-1ce3e30e":"eea111b3","chunk-23a34b29":"30e6301a","chunk-2b0e8715":"31d6cfe0","chunk-2bf84e58":"f40e659c","chunk-2c5dac52":"d2ba6b6d","chunk-2cd721e6":"022a5953","chunk-470c1fef":"82813683","chunk-8c5ff7aa":"a4c170bc","chunk-c0b2c204":"c4281735","chunk-2d0be175":"31d6cfe0","chunk-2d0cc274":"31d6cfe0","chunk-2c00b48f":"73f0255d","chunk-db401e78":"2017bed2","chunk-7faaf2d7":"31d6cfe0","chunk-fb22a3ce":"31d6cfe0","chunk-2d0cf781":"31d6cfe0","chunk-54db7e92":"f40e659c","chunk-56596c6e":"1d1e6cf3","chunk-5aaadf52":"d76a4824","chunk-5d0e1a34":"eea111b3","chunk-6563a99b":"149cd005","chunk-6d681107":"fb42d641","chunk-6fc9330e":"31d6cfe0","chunk-7a4f4f02":"dbb38626","chunk-a193c6ac":"eea111b3","chunk-c15815ea":"0ceabc5b"}[e]+".css",c=s.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}c[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01de":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},"373c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-button-container"},[e.pressed?n("div",{staticClass:"app-button pressed",style:"width: "+e.size+" !important;height: "+e.size+" !important",attrs:{title:e.title}},[n("i",{staticClass:"material-icons app-button-icon",style:"font-size: "+e.size+" !important"},[e._v(e._s(e.icon))])]):n("button",{staticClass:"app-button",style:"width: "+e.size+" !important;height: "+e.size+" !important",attrs:{title:e.title},on:{click:function(t){return e.$emit("button-click")}}},[n("i",{staticClass:"material-icons app-button-icon",style:"font-size: "+e.size+" !important"},[e._v(e._s(e.icon))])])])},o=[],c={name:"AppButtonIcon",props:{icon:String,size:String,title:String,pressed:Boolean}},r=c,i=(n("50fa"),n("2877")),s=Object(i["a"])(r,a,o,!1,null,"1efa6c99",null);t["a"]=s.exports},"40bb":function(e,t,n){},"46a2":function(e,t,n){"use strict";n("f5ac")},"50fa":function(e,t,n){"use strict";n("7aa8")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},c=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{staticClass:"empty-layout",attrs:{id:"blue-layout"}},[n("router-view")],1)])},i=[],s={name:"EmptyLayout"},u=s,l=(n("46a2"),n("2877")),d=Object(l["a"])(u,r,i,!1,null,"318dfdcc",null),m=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",[n("div",{staticClass:"app-main-layout"},[n("div",{staticClass:"sidenav-menu"},[n("AppButtonIcon",{attrs:{icon:"menu",size:"1.8rem"},on:{"button-click":function(t){e.isOpen=!e.isOpen}}})],1),n("MainSidenav",{attrs:{open:e.isOpen}}),n("main",{staticClass:"app-content"},[n("div",{staticClass:"app-page",class:{full:!e.isOpen}},[n("router-view")],1)])],1)])},f=[],h=n("1da1"),b=n("5530"),k=(n("96cf"),n("260b")),v=n("2f62"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-sidenav-container"}},[e.open?n("aside",{staticClass:"main-sidenav"},[n("div",{staticClass:"main-sidenav-top"},[n("AppLinkIcon",{attrs:{"link-content":"Рабочие","link-icon":"transfer_within_a_station","link-path":"/workers",pressed:"workers"===e.$route.name}}),n("AppLinkIcon",{attrs:{"link-content":"Клиенты","link-icon":"business_center","link-path":"/customers",pressed:"customers"===e.$route.name}}),n("AppLinkIcon",{attrs:{"link-content":"Заявки","link-icon":"attach_money","link-path":"/deals",pressed:"deals"===e.$route.name}}),n("AppLinkIcon",{attrs:{"link-content":"Настройки","link-icon":"settings","link-path":"/settings",pressed:"settings"===e.$route.name}})],1),n("div",{staticClass:"main-sidenav-bottom"},[n("AppLinkIcon",{attrs:{"link-content":"Выйти","link-icon":"exit_to_app","link-path":"/"}})],1)]):e.open?e._e():n("aside",{staticClass:"main-sidenav"},[n("div",{staticClass:"main-sidenav-top main-sidenav-button"},[n("AppButtonIcon",{attrs:{icon:"transfer_within_a_station",size:"1.8rem",pressed:"workers"===e.$route.name},on:{"button-click":function(t){return e.$router.push("/workers")}}}),n("AppButtonIcon",{attrs:{icon:"business_center",size:"1.8rem",pressed:"customers"===e.$route.name},on:{"button-click":function(t){return e.$router.push("/customers")}}}),n("AppButtonIcon",{attrs:{icon:"attach_money",size:"1.8rem",pressed:"deals"===e.$route.name},on:{"button-click":function(t){return e.$router.push("/deals")}}}),n("AppButtonIcon",{attrs:{icon:"settings",size:"1.8rem",pressed:"settings"===e.$route.name},on:{"button-click":function(t){return e.$router.push("/settings")}}})],1),n("div",{staticClass:"main-sidenav-bottom"},[n("AppButtonIcon",{attrs:{icon:"exit_to_app",size:"1.8rem"},on:{"button-click":function(t){return e.$router.push("/")}}})],1)])])},g=[],S=n("bb70"),E=n("373c"),_={name:"MainSidenav",props:{open:Boolean},components:{AppLinkIcon:S["a"],AppButtonIcon:E["a"]}},w=_,O=(n("a328"),Object(l["a"])(w,y,g,!1,null,"ce5d3162",null)),R=O.exports,I={name:"MainLayout.vue",components:{MainSidenav:R,AppButtonIcon:E["a"]},data:function(){return{isOpen:!1}},computed:Object(b["a"])({},Object(v["c"])(["authEmployee"])),created:function(){null===k["a"].auth().currentUser&&(this.$router.push("/"),M.toast({html:"Войдите в систему для продолжения!"}))},methods:{exit:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:return t.next=4,e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()}}},A=I,C=(n("7eb7"),Object(l["a"])(A,p,f,!1,null,"ae94da72",null)),L=C.exports,T={components:{EmptyLayout:m,MainLayout:L},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},j=T,x=(n("034f"),Object(l["a"])(j,o,c,!1,null,null,null)),$=x.exports,N=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(N["a"]);var P=new N["a"]({mode:"hash",base:"",routes:[{path:"/",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-6d681107").then(n.bind(null,"1874"))}},{path:"/sites",name:"sites",meta:{layout:"main"},component:function(){return n.e("chunk-1ce3e30e").then(n.bind(null,"ad64"))}},{path:"/sites/edit/city:id",name:"cityEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2cd721e6"),n.e("chunk-c0b2c204")]).then(n.bind(null,"62b0"))}},{path:"/employees",name:"employees",meta:{layout:"main"},component:function(){return n.e("chunk-5d0e1a34").then(n.bind(null,"b445"))}},{path:"/employees/edit/employee:id",name:"employeeEdit",meta:{layout:"main"},component:function(){return n.e("chunk-2c5dac52").then(n.bind(null,"26c2"))}},{path:"/employees/history/employee:id",name:"employeeHistory",meta:{layout:"main"},component:function(){return n.e("chunk-54db7e92").then(n.bind(null,"776b"))}},{path:"/workers",name:"workers",meta:{layout:"main"},component:function(){return n.e("chunk-a193c6ac").then(n.bind(null,"45c3"))}},{path:"/workers/edit/worker:id",name:"workerEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2cd721e6"),n.e("chunk-db401e78")]).then(n.bind(null,"1d9b"))}},{path:"/workers/search",name:"workersSearch",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-2c00b48f")]).then(n.bind(null,"ad7e"))}},{path:"/workers/statistics/customer:id",name:"workerStatistics",meta:{layout:"main"},component:function(){return n.e("chunk-7a4f4f02").then(n.bind(null,"4706"))}},{path:"/workers/about/worker:id",name:"workerAbout",meta:{layout:"main"},component:function(){return n.e("chunk-5aaadf52").then(n.bind(null,"af47"))}},{path:"/workers/history/worker:id",name:"workerHistory",meta:{layout:"main"},component:function(){return n.e("chunk-c15815ea").then(n.bind(null,"678a"))}},{path:"/workers/calendar/worker:id",name:"workerCalendar",meta:{layout:"main"},component:function(){return n.e("chunk-0f15ae3e").then(n.bind(null,"7ff8"))}},{path:"/settings",name:"settings",meta:{layout:"main"},component:function(){return n.e("chunk-1b1aac8e").then(n.bind(null,"cb88"))}},{path:"/customers",name:"customers",meta:{layout:"main"},component:function(){return n.e("chunk-6563a99b").then(n.bind(null,"48a5"))}},{path:"/customers/about/customer:id",name:"customerAbout",meta:{layout:"main"},component:function(){return n.e("chunk-075f1dcf").then(n.bind(null,"0eb8"))}},{path:"/customers/edit/customer:id",name:"customerEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2cd721e6"),n.e("chunk-470c1fef")]).then(n.bind(null,"2a1f"))}},{path:"/customers/statistics/customer:id",name:"customerStatistics",meta:{layout:"main"},component:function(){return n.e("chunk-56596c6e").then(n.bind(null,"70d0"))}},{path:"/customers/subdivisions/customer:id",name:"customerSubdivisions",meta:{layout:"main"},component:function(){return n.e("chunk-6fc9330e").then(n.bind(null,"4aa2"))}},{path:"/customers/subdivisions/customer:id/about/subdivision:subId",name:"customerAboutSubdivision",meta:{layout:"main"},component:function(){return n.e("chunk-2d0cf781").then(n.bind(null,"649f"))}},{path:"/customers/subdivisions/customer:id/edit/subdivision:subId",name:"customerEditSubdivision",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-7faaf2d7")]).then(n.bind(null,"2c3b"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees",name:"subdivisionEmployees",meta:{layout:"main"},component:function(){return n.e("chunk-2b0e8715").then(n.bind(null,"2912"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees/about/employee:empId",name:"subdivisionAboutEmployee",meta:{layout:"main"},component:function(){return n.e("chunk-2d0be175").then(n.bind(null,"2f7b"))}},{path:"/customers/subdivisions/customer:id/subdivision:subId/employees/edit/employee:empId",name:"subdivisionEditEmployee",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2d0cc274"),n.e("chunk-fb22a3ce")]).then(n.bind(null,"e61b"))}},{path:"/deals",name:"deals",meta:{layout:"main"},component:function(){return n.e("chunk-23a34b29").then(n.bind(null,"8c56"))}},{path:"/deals/edit/deal:id",name:"dealEdit",meta:{layout:"main"},component:function(){return Promise.all([n.e("chunk-2cd721e6"),n.e("chunk-8c5ff7aa")]).then(n.bind(null,"7980"))}},{path:"/deals/history/deal:id",name:"dealHistory",meta:{layout:"main"},component:function(){return n.e("chunk-2bf84e58").then(n.bind(null,"767e"))}}]}),z=P,F={state:{sites:{}},getters:{sites:function(e){return e.sites}},mutations:{SET_SITES_FROM_LOCAL_STORAGE:function(e){e.sites=JSON.parse(localStorage.getItem("sites"))},SET_SITES_FROM_SERVER:function(e){var t=k["a"].database().ref("/sites/");t.on("value",(function(t){localStorage.setItem("sites",JSON.stringify(t.val())),e.sites=JSON.parse(localStorage.getItem("sites"))}))}}},J={state:{employees:{}},getters:{employees:function(e){return e.employees},authEmployee:function(e){return e.employees[k["a"].auth().currentUser.uid]}},mutations:{SET_EMPLOYEES_FROM_LOCAL_STORAGE:function(e){e.employees=JSON.parse(localStorage.getItem("employees")),console.log(this.getters.authEmployee)},SET_EMPLOYEES_FROM_SERVER:function(e){var t=k["a"].database().ref("/employees/");t.on("value",(function(t){localStorage.setItem("employees",JSON.stringify(t.val())),e.employees=JSON.parse(localStorage.getItem("employees"))}))}},actions:{registerEmployees:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,k["a"].auth().createUserWithEmailAndPassword(a,o);case 5:return c=n.sent,n.abrupt("return",c.user.uid);case 9:n.prev=9,n.t0=n["catch"](2),M.toast({html:"Сотрудник уже существует!"});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}},B={state:{workers:{}},getters:{workers:function(e){return e.workers}},mutations:{SET_WORKERS_FROM_LOCAL_STORAGE:function(e){e.workers=JSON.parse(localStorage.getItem("workers"))},SET_WORKERS_FROM_SERVER:function(e){var t=k["a"].database().ref("/workers/");t.on("value",(function(t){localStorage.setItem("workers",JSON.stringify(t.val())),e.workers=JSON.parse(localStorage.getItem("workers"))}))}}},V={state:{customers:{}},getters:{customers:function(e){return e.customers}},mutations:{SET_CUSTOMERS_FROM_LOCAL_STORAGE:function(e){e.customers=JSON.parse(localStorage.getItem("customers"))},SET_CUSTOMERS_FROM_SERVER:function(e){var t=k["a"].database().ref("/customers/");t.on("value",(function(t){localStorage.setItem("customers",JSON.stringify(t.val())),e.customers=JSON.parse(localStorage.getItem("customers"))}))}}},D={state:{deals:{}},getters:{deals:function(e){return e.deals}},mutations:{SET_DEALS_FROM_LOCAL_STORAGE:function(e){e.deals=JSON.parse(localStorage.getItem("deals"))},SET_DEALS_FROM_SERVER:function(e){var t=k["a"].database().ref("/deals/");t.on("value",(function(t){localStorage.setItem("deals",JSON.stringify(t.val())),e.deals=JSON.parse(localStorage.getItem("deals"))}))}}};a["a"].use(v["a"]);var U=new v["a"].Store({state:{},getters:{},mutations:{},actions:{login:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,a=e.commit,o=t.email,c=t.password,n.prev=2,n.next=5,k["a"].auth().signInWithEmailAndPassword(o,c);case 5:a("SET_WORKERS_FROM_SERVER"),a("SET_CUSTOMERS_FROM_SERVER"),a("SET_SITES_FROM_SERVER"),a("SET_EMPLOYEES_FROM_SERVER"),a("SET_DEALS_FROM_SERVER"),n.next=14;break;case 12:n.prev=12,n.t0=n["catch"](2);case 14:case"end":return n.stop()}}),n,null,[[2,12]])})))()},logout:function(){return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k["a"].auth().signOut();case 2:case"end":return e.stop()}}),e)})))()}},modules:[F,J,B,V,D]}),G=n("9483");Object(G["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("6885"),n("8266");var K,W=n("1dce"),H=n.n(W),q=n("3a60"),Y=n.n(q);n("ea7b"),n("66ce");a["a"].config.productionTip=!1,a["a"].use(H.a,Y.a),k["a"].initializeApp({apiKey:"AIzaSyD04k3rn1SlJ9imzL1rfiwEk8KMS-hmE-E",authDomain:"erp-base-6b192.firebaseapp.com",databaseURL:"https://erp-base-6b192-default-rtdb.europe-west1.firebasedatabase.app",projectId:"erp-base-6b192",storageBucket:"erp-base-6b192.appspot.com",messagingSenderId:"200038138332",appId:"1:200038138332:web:26dbaf165f017c5e9f4f19",measurementId:"G-1R8VNV8D9G"}),k["a"].auth().onAuthStateChanged((function(){K||(K=new a["a"]({router:z,store:U,render:function(e){return e($)}}).$mount("#app"))}))},"7aa8":function(e,t,n){},"7eb7":function(e,t,n){"use strict";n("8185")},8185:function(e,t,n){},"85ec":function(e,t,n){},a328:function(e,t,n){"use strict";n("01de")},b8d5:function(e,t,n){"use strict";n("40bb")},bb70:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-link-icon-container"},[e.pressed?n("div",{staticClass:"app-link-icon pressed"},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.linkIcon))]),e._v(" "+e._s(e.linkContent)+" ")]):n("router-link",{staticClass:"app-link-icon",attrs:{to:e.linkPath}},[n("i",{staticClass:"material-icons"},[e._v(e._s(e.linkIcon))]),e._v(" "+e._s(e.linkContent)+" ")])],1)},o=[],c={name:"AppLinkIcon",props:{linkPath:String,linkIcon:String,linkContent:String,pressed:Boolean}},r=c,i=(n("b8d5"),n("2877")),s=Object(i["a"])(r,a,o,!1,null,"bd668b3a",null);t["a"]=s.exports},f5ac:function(e,t,n){}});
//# sourceMappingURL=app.0f69a700.js.map