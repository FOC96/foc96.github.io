(function(e){function t(t){for(var s,r,o=t[0],d=t[1],l=t[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var d=a[o];0!==i[d]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=d;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"11aa":function(e,t,a){e.exports=a.p+"img/back.436ebbd3.jpg"},"2fea":function(e,t,a){},4223:function(e,t,a){e.exports=a.p+"img/squared.7a70a7e7.jpeg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{staticClass:"d-flex flex-row justify-center align-middle",attrs:{dense:"",app:"",color:"rgba(0,0,0,0)",flat:""}},[a("v-tabs",{attrs:{color:"action"}},e._l(e.tabOptions,(function(t){return a("v-tab",{key:t.value,attrs:{ripple:!1},on:{change:function(a){return e.switchPage(t.value)}}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("Top"),"about"===e.page?[a("v-sheet",{attrs:{height:"300px"}}),a("About")]:"experience"===e.page?[a("v-sheet",{attrs:{height:"300px"}}),a("Experience"),a("v-footer",[a("v-main",[a("v-container",[a("v-row",[a("v-col",{staticClass:"d-flex flex-row flex-wrap align-center justify-space-between",attrs:{cols:"12"}},[a("p",{staticClass:"text-left body-2 text--secondary ma-0"},[e._v(" Fernando Ortiz, 2020 ")]),a("div",[a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",small:"",href:"https://www.linkedin.com/in/fernandoorc"}},[a("feather",{attrs:{size:"15",type:"linkedin"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",small:"",href:"https://twitter.com/messages/compose?recipient_id=231578065"}},[a("feather",{attrs:{size:"15",type:"twitter"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",small:"",href:"https://www.github.com/FOC96"}},[a("feather",{attrs:{size:"15",type:"github"}})],1)],1)])],1)],1)],1)],1)]:e._e()],2)},n=[],r=a("5530"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{tile:"",flat:""}},[a("v-img",{attrs:{src:e.background,height:e.screenHeight,gradient:e.$vuetify.theme.dark?"to bottom, rgba(30,30,30,.8), rgba(30,30,30,1)":"to bottom, rgba(255,255,255,.6), rgba(255,255,255,1)"}},[a("v-main",[a("v-container",[a("v-sheet",{staticClass:"d-flex flex-column align-center justify-center",attrs:{color:"rgba(30,30,30,0)",height:e.screenHeight}},[a("v-card",{staticClass:"mb-8",attrs:{height:"150px",width:"150px",rounded:"lg",elevation:"17"}},[a("v-img",{attrs:{src:e.profile,height:"150px",width:"150px"}})],1),a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a("h1",{staticClass:"display-3 font-weight-black"},[e._v("Fernando")]),a("p",{staticClass:"ma-0 text-h6"},[e._v("UX Designer + Front-end Dev")]),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",href:"https://music.apple.com/profile/FOC96"}},[a("feather",{attrs:{type:"music"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",href:"https://www.linkedin.com/in/fernandoorc"}},[a("feather",{attrs:{type:"linkedin"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",href:"https://twitter.com/messages/compose?recipient_id=231578065"}},[a("feather",{attrs:{type:"twitter"}})],1),a("v-btn",{staticClass:"mr-4",attrs:{color:"action",ripple:!1,icon:"",href:"https://www.github.com/FOC96"}},[a("feather",{attrs:{type:"github"}})],1)],1)]),a("div",{staticClass:"scrollForMore d-flex flex-column align-center justify-center pa-0"},[a("feather",{staticClass:"scrollDownAnimation",attrs:{type:"chevron-down"}})],1)],1)],1)],1)],1)],1)},d=[],l={name:"Top",data:function(){return{background:a("11aa"),profile:a("4223"),screenHeight:"1000px"}},created:function(){window.addEventListener("resize",this.myEventHandler),this.screenHeight=window.innerHeight+"px"},destroyed:function(){window.removeEventListener("resize",this.myEventHandler)},methods:{myEventHandler:function(){this.screenHeight=window.innerHeight+"px"},toggleTheme:function(){console.log("toggled"),this.$vuetify.theme.dark=!this.$vuetify.theme.dark,console.log(this.$vuetify.theme.dark)}}},c=l,p=(a("599a"),a("2877")),u=a("6544"),h=a.n(u),f=a("8336"),m=a("b0af"),g=a("a523"),b=a("adda"),v=a("f6c4"),w=a("8dd9"),_=Object(p["a"])(c,o,d,!1,null,null,null),T=_.exports;h()(_,{VBtn:f["a"],VCard:m["a"],VContainer:g["a"],VImg:b["a"],VMain:v["a"],VSheet:w["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"overflowedY",attrs:{tile:"",flat:"",id:"msgWrapper"}},[a("v-main",[a("v-container",{staticClass:"d-flex flex-column justify-end align-end",style:"height: "+(e.windowHeight-230)+"px;",attrs:{id:"scrollableArea"}},[a("v-card",{staticClass:"d-flex flex-column align-end",attrs:{color:"transparent",flat:"",tile:"",id:"convoWrapper"}},[e._l(e.aboutJSON,(function(t,s){return[t.group<=e.displayedGroup?a("MessageBubble",{key:s,attrs:{text:t.message,image:t.image,sent:!t.sent,file:t.file}}):e._e()]})),a("div",{staticClass:"wholeWidth d-flex flex-row justify-between"},[e.typing?a("span",{staticClass:"caption flex-grow-0 flex-shrink-0"},[e._v(" Typing... ")]):e._e(),a("v-spacer")],1)],2)],1)],1)],1),a("v-card",{attrs:{tile:"",flat:""}},[a("v-main",[a("v-container",[a("v-row",[a("v-spacer"),a("v-col",{class:e.nextQuestion?"d-flex flex-row justify-center align-middle":"d-flex flex-row justify-end align-middle",attrs:{cols:"12"}},[e.nextQuestion?a("v-btn",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{ripple:!1,dark:"",color:"action",rounded:""},on:{click:e.nextMessage}},[e._v(" "+e._s(e.nextQuestion)+" ")]):a("v-btn",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{ripple:!1,color:"action",text:""},on:{click:function(t){return e.switchPage("experience")}}},[e._v(" Check experience and projects 👉 ")])],1),a("v-spacer")],1)],1)],1)],1)],1)},x=[],Z=(a("4de4"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-lazy",{staticClass:"wholeWidth",attrs:{options:{threshold:.9},transition:"scroll-y-reverse-transition"},model:{value:e.isActive,callback:function(t){e.isActive=t},expression:"isActive"}},[s("div",{staticClass:"d-flex flex-row justify-start align-start wholeWidth pt-1 pb-1"},[e.sent?e._e():s("div",{staticClass:"blankSpace"}),s("v-card",{staticClass:"pa-2 flex-grow-0",attrs:{flat:"",color:e.sent?"bubbleReceived":"bubbleSent",rounded:"lg"}},[e.text?s("span",{class:e.text.length>2?"body-1":"display-3"},[e._v(" "+e._s(e.text)+" ")]):e.image?s("v-img",{attrs:{"max-height":"250px","max-width":"300px",src:e.image,contain:""}}):e.file?s("v-card",{staticClass:"px-3 py-2 d-flex flex-row justify-start align-center",attrs:{flat:"",color:"rgba(100,100,100,0.25)",href:e.file.link}},[s("v-img",{attrs:{src:a("9705")}}),s("div",{staticClass:"ml-5 d-flex flex-column justify-start align-start"},[s("span",{staticClass:"title font-weight-bold"},[e._v(e._s(e.file.name))]),s("span",{staticClass:"caption",attrs:{color:"action"}},[e._v("Download")])])],1):e._e()],1),e.sent?s("div",{staticClass:"blankSpace"}):e._e()],1)])}),k=[],C={name:"MessageBubble",props:["text","image","file","sent"],methods:{downloadFile:function(e){this.$emit("downloadFile",e)}},data:function(){return{isActive:!1}}},S=C,O=(a("99fd"),a("b687")),j=Object(p["a"])(S,Z,k,!1,null,null,null),V=j.exports;h()(j,{VCard:m["a"],VImg:b["a"],VLazy:O["a"]});var H=a("fa9e"),M=a("2f62"),A={name:"About",components:{MessageBubble:V},data:function(){return{windowHeight:window.innerHeight,aboutJSON:H,displayedGroup:0,typing:!1,questionNum:0}},computed:Object(r["a"])(Object(r["a"])({},Object(M["c"])(["page"])),{},{age:function(){var e=new Date,t=Math.floor((e-new Date("November 24, 1996"))/315576e5);return t},nextQuestion:function(){var e=this.aboutJSON.filter((function(e){return e.sent&&e.message}));return this.questionNum<e.length?e[this.questionNum].message:null}}),watch:{typing:function(){var e=document.getElementById("convoWrapper").clientHeight,t=document.getElementById("scrollableArea");t.scrollTop=e}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowHeight=window.innerHeight}))},methods:Object(r["a"])(Object(r["a"])({},Object(M["b"])({switchPage:"setPage"})),{},{nextMessage:function(){var e=this;this.displayedGroup+=1,this.questionNum+=1,setTimeout((function(){e.typing=!0}),800),setTimeout((function(){e.displayedGroup+=1,e.typing=!1}),1500)}})},D=A,P=(a("b8ab"),a("62ad2")),E=a("0fd9"),F=a("2fa4"),I=Object(p["a"])(D,y,x,!1,null,null,null),G=I.exports;h()(I,{VBtn:f["a"],VCard:m["a"],VCol:P["a"],VContainer:g["a"],VMain:v["a"],VRow:E["a"],VSpacer:F["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{tile:"",flat:""}},[a("v-main",e._l(e.expJSON,(function(t){return a("v-parallax",{key:t.id,staticClass:"blurredImg py-3",style:"min-height: "+e.windowHeight+"px;",attrs:{src:t.heroImage}},[a("v-sheet",{staticClass:"d-flex flex-column align-center justify-center",style:"min-height: "+e.windowHeight+"px;",attrs:{color:e.$vuetify.theme.dark?"rgba(30,30,30,0.85)":"rgba(255,255,255,0.85)"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"0",md:"1"}}),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"7"}},[a("v-card",{staticClass:"d-flex flex-column",attrs:{color:"rgba(0,0,0,0)",flat:"",rounded:"lg"}},[a("v-card-title",[a("h2",[e._v(e._s(t.title))])]),a("v-card-subtitle",[a("span",{class:"Completed"===t.status.status?"status-completed":"status-in-progress"},[a("feather",{staticClass:"mr-2",attrs:{type:"Completed"===t.status.status?"check-circle":"clock",size:"11"}}),e._v(" "+e._s(t.status.status)+" ")],1),a("div",{staticClass:"d-flex flex-column mt-2"},[a("div",e._l(t.roles,(function(t){return a("v-chip",{key:t.id,staticClass:"mr-1",attrs:{small:""}},[e._v(" "+e._s(t.role)+" ")])})),1),a("div",{staticClass:"d-flex flex-row justify-start align-center mt-2"},[e._l(t.target_platforms,(function(t){return a("span",{key:t.id},[e._v(" "+e._s(t.TargetPlatform)+" ")])})),a("span",{staticClass:"mx-1"},[e._v(" · ")]),a("span",[e._v(e._s(t.year))])],2)])]),a("v-card-text",[a("div",{domProps:{innerHTML:e._s(t.description)}}),t.tasks.length>0?a("span",[e._v("Tasks:")]):e._e(),a("br"),e._l(t.tasks,(function(t){return a("v-chip",{key:t.id,staticClass:"ma-1",attrs:{small:""}},[e._v(" "+e._s(t.task)+" ")])})),a("div",{staticClass:"d-flex flex-row pl-2 mt-4"},[t.Github?a("v-btn",{staticClass:"mr-2",attrs:{color:"action",ripple:!1,icon:"",href:t.Github}},[a("feather",{attrs:{type:"code"}})],1):e._e(),t.Medium?a("v-btn",{staticClass:"mr-2",attrs:{color:"action",ripple:!1,icon:"",href:t.Medium}},[a("feather",{attrs:{type:"type"}})],1):e._e(),t.Sketch?a("v-btn",{staticClass:"mr-2",attrs:{color:"action",ripple:!1,icon:"",href:t.Sketch}},[a("feather",{attrs:{type:"pen-tool"}})],1):e._e(),t.link?a("v-btn",{attrs:{color:"action",ripple:!1,icon:"",href:t.link}},[a("feather",{attrs:{type:"link"}})],1):e._e()],1)],2)],1)],1),a("v-col",{attrs:{cols:"0",md:"4"}}),a("v-spacer")],1)],1)],1)],1)})),1)],1)},B=[],N=a("d00d"),L={name:"Experience",data:function(){return{windowHeight:window.innerHeight,expJSON:N}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowHeight=window.innerHeight}))}},W=L,X=(a("d40e"),a("99d9")),z=a("cc20"),q=a("8b9c"),$=Object(p["a"])(W,U,B,!1,null,null,null),Q=$.exports;h()($,{VBtn:f["a"],VCard:m["a"],VCardSubtitle:X["a"],VCardText:X["b"],VCardTitle:X["c"],VChip:z["a"],VCol:P["a"],VContainer:g["a"],VMain:v["a"],VParallax:q["a"],VRow:E["a"],VSheet:w["a"],VSpacer:F["a"]});var R={name:"App",title:"Fernando ORC",components:{Top:T,About:G,Experience:Q},data:function(){return{darkOn:!1,tabOptions:[{label:"About",value:"about"},{label:"Experience",value:"experience"}]}},created:function(){var e=this;document.title="Fernando ORC",this.darkOn=window.matchMedia("(prefers-color-scheme: dark)").matches,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){t.matches?e.darkOn=!0:e.darkOn=!1}))},watch:{darkOn:function(){this.darkOn?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1}},computed:Object(r["a"])({},Object(M["c"])(["page"])),methods:{switchPage:function(e){this.$store.commit("setPage",e)}}},J=R,Y=a("7496"),K=a("40dc"),ee=a("553a"),te=a("71a3"),ae=a("fe57"),se=Object(p["a"])(J,i,n,!1,null,null,null),ie=se.exports;h()(se,{VApp:Y["a"],VAppBar:K["a"],VBtn:f["a"],VCol:P["a"],VContainer:g["a"],VFooter:ee["a"],VMain:v["a"],VRow:E["a"],VSheet:w["a"],VTab:te["a"],VTabs:ae["a"]}),s["a"].use(M["a"]);var ne=new M["a"].Store({state:{page:"about"},mutations:{setPage:function(e,t){e.page=t}},actions:{},modules:{}}),re=a("f309");s["a"].use(re["a"]);var oe=new re["a"]({icons:{iconfont:"md"},theme:{themes:{light:{action:"#B39500",background:"rgba(255,255,255,1)",bubbleReceived:"#E6E6E6",bubbleSent:"#F4EFD9"},dark:{action:"#B39500",background:"rgba(10,10,10,1)",bubbleReceived:"#333333",bubbleSent:"#564700"}},dark:!1}}),de=a("62ad"),le=a.n(de);s["a"].config.productionTip=!1,new s["a"]({store:ne,vuetify:oe,render:function(e){return e(ie)}}).$mount("#app"),s["a"].use(le.a)},"599a":function(e,t,a){"use strict";var s=a("2fea"),i=a.n(s);i.a},9705:function(e,t,a){e.exports=a.p+"img/pdfFile.591decbd.svg"},"98e0":function(e,t,a){},"99fd":function(e,t,a){"use strict";var s=a("ba48"),i=a.n(s);i.a},b8ab:function(e,t,a){"use strict";var s=a("98e0"),i=a.n(s);i.a},ba48:function(e,t,a){},d00d:function(e){e.exports=JSON.parse('[{"id":1,"title":"Sunny UI","year":"2020","description":"<p class=\\"text--primary\\">Planned and designed a set of components as well as some guides that make up the Design System used for new and upcoming digital products in NEXTnet. This project has not only sped up the front-end development of said products, additionally it has built up a visual structure and consistency that has helped the brand of the ecosystem of services/apps.</p>\\n\\n<p class=\\"text--primary\\">Said branding was set to be unique for NEXTnet and its products, regardless of the two companies involved at the time (GE & Avionica). Additionally, visual accessibility guidelines were put front and center, achieving a AA level.</p>\\n\\n<p class=\\"text--primary\\">Once the look & feel of the components and guides were approved, the Sketch file was exported as HTML markup to allow the development team to start customizing an open-source library to match the plan. Working both roles of designer and front-end developer, Sunny UI started evolving as we found more components, layouts and requirements to be needed. A document which was used as our version-control was constantly updated with notes of the changes and additions of the last release.</p>","Github":null,"Medium":null,"Sketch":null,"type":{"id":1,"type":"Professional","published_at":"2021-01-17T00:07:22.180Z","created_at":"2021-01-17T00:07:16.421Z","updated_at":"2021-01-17T00:07:22.200Z"},"icon":null,"heroImage":"https://images.unsplash.com/photo-1583202075405-8d68e5ba459b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80","link":null,"status":{"id":2,"status":"Completed","published_at":"2021-01-17T03:54:21.887Z","created_at":"2021-01-17T03:54:20.202Z","updated_at":"2021-01-17T03:54:21.910Z"},"published_at":"2021-01-17T01:10:41.452Z","created_at":"2021-01-17T01:10:28.137Z","updated_at":"2021-01-17T07:02:22.420Z","roles":[{"id":1,"role":"Lead UX Designer","published_at":"2021-01-17T00:07:59.802Z","created_at":"2021-01-17T00:07:56.542Z","updated_at":"2021-01-17T00:09:32.729Z"},{"id":2,"role":"Front-end Developer","published_at":"2021-01-17T00:08:16.070Z","created_at":"2021-01-17T00:08:14.483Z","updated_at":"2021-01-17T00:08:16.094Z"}],"target_platforms":[{"id":1,"TargetPlatform":"Web","published_at":"2021-01-17T00:24:26.812Z","created_at":"2021-01-17T00:16:54.324Z","updated_at":"2021-01-17T00:24:26.834Z"}],"tasks":[{"id":7,"task":"Branding","published_at":"2021-01-17T00:25:53.027Z","created_at":"2021-01-17T00:25:51.639Z","updated_at":"2021-01-17T00:25:53.055Z"},{"id":1,"task":"Front-end development","published_at":"2021-01-17T00:09:55.884Z","created_at":"2021-01-17T00:09:54.650Z","updated_at":"2021-01-17T00:09:55.909Z"},{"id":6,"task":"Visual design","published_at":"2021-01-17T00:24:56.066Z","created_at":"2021-01-17T00:24:53.573Z","updated_at":"2021-01-17T00:24:56.096Z"},{"id":2,"task":"Wireframing","published_at":"2021-01-17T00:10:16.648Z","created_at":"2021-01-17T00:10:15.317Z","updated_at":"2021-01-17T00:10:16.675Z"}],"tech_tools":[{"id":4,"TechnologyOrTool":"Sketch","published_at":"2021-01-17T00:18:08.702Z","created_at":"2021-01-17T00:18:07.714Z","updated_at":"2021-01-17T00:18:08.729Z"}]},{"id":2,"title":"NEXTnet services","year":"2020","description":"<p class=\\"text--primary\\">Lead UX designer and part of the development team that delivered a number of products for the NEXTnet ecosystem. The process we followed for most of these projects consisted on me working with the Product Owner and other stakeholders to define who was going to use the proposed new feature or enhancement and any constrains of requests from the business. Then, if we needed to integrate a third-party API, checking the documentation and defining which data and endpoints would be used.</p>\\n\\n<p class=\\"text--primary\\">Later on, we usually went to design high-fidelity wireframes since we already had the Sunny UI library (NEXTnet\'s design system). Once we already define the high-level requirements and the main mockups were approved, the reviews iterated using a prototype in InVision. It\'s important to highlight that these UX-related steps in the software development cycle were new to most stakeholders.</p>\\n\\n<p class=\\"text--primary\\">Once the prototype has been reviewed and approved by all stakeholders–including the developer team\'s lead person at all times to check feasibility and effort–then I would write the User Stories. Once I write the first draft, I would send them to the dev team\'s lead and our Technical Product Manager to check for any missing requirements.</p>\\n\\n<p class=\\"text--primary\\">Most of these products are restricted to customers and are protected under an NDA. One of them is public and can be accessed by clocking on the link button.</p>","Github":null,"Medium":null,"Sketch":null,"type":null,"icon":null,"heroImage":"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80","link":"https://appcatalog.nextnet.aero/","status":{"id":2,"status":"Completed","published_at":"2021-01-17T03:54:21.887Z","created_at":"2021-01-17T03:54:20.202Z","updated_at":"2021-01-17T03:54:21.910Z"},"published_at":"2021-01-17T02:44:56.789Z","created_at":"2021-01-17T02:44:48.577Z","updated_at":"2021-01-17T07:01:53.084Z","roles":[{"id":1,"role":"Lead UX Designer","published_at":"2021-01-17T00:07:59.802Z","created_at":"2021-01-17T00:07:56.542Z","updated_at":"2021-01-17T00:09:32.729Z"},{"id":2,"role":"Front-end Developer","published_at":"2021-01-17T00:08:16.070Z","created_at":"2021-01-17T00:08:14.483Z","updated_at":"2021-01-17T00:08:16.094Z"}],"target_platforms":[{"id":1,"TargetPlatform":"Web","published_at":"2021-01-17T00:24:26.812Z","created_at":"2021-01-17T00:16:54.324Z","updated_at":"2021-01-17T00:24:26.834Z"}],"tasks":[{"id":2,"task":"Wireframing","published_at":"2021-01-17T00:10:16.648Z","created_at":"2021-01-17T00:10:15.317Z","updated_at":"2021-01-17T00:10:16.675Z"},{"id":3,"task":"Prototyping","published_at":"2021-01-17T00:11:45.416Z","created_at":"2021-01-17T00:11:43.520Z","updated_at":"2021-01-17T00:11:45.466Z"},{"id":1,"task":"Front-end development","published_at":"2021-01-17T00:09:55.884Z","created_at":"2021-01-17T00:09:54.650Z","updated_at":"2021-01-17T00:09:55.909Z"},{"id":5,"task":"Database design","published_at":"2021-01-17T00:14:34.247Z","created_at":"2021-01-17T00:14:32.695Z","updated_at":"2021-01-17T00:14:34.273Z"},{"id":9,"task":"User flows","published_at":"2021-01-17T01:24:38.245Z","created_at":"2021-01-17T01:24:37.072Z","updated_at":"2021-01-17T01:24:38.273Z"},{"id":8,"task":"Site map","published_at":"2021-01-17T01:24:30.327Z","created_at":"2021-01-17T01:24:28.749Z","updated_at":"2021-01-17T01:24:30.352Z"},{"id":4,"task":"User Story redaction","published_at":"2021-01-17T00:13:43.200Z","created_at":"2021-01-17T00:13:41.943Z","updated_at":"2021-01-17T00:13:43.224Z"}],"tech_tools":[]},{"id":3,"title":"Introduction to Accessibility","year":"2020, 2021","description":"<p class=\\"text--primary\\">Organized and led an online session for the GE site at Querétaro about Accessibility. The main goal was to introduce Accessibility, why is it important and which actions everybody can take to improve their deliverables.</p>\\n\\n<p class=\\"text--primary\\">The lecture was focused on web development and it was part of a series led by Paulina Guerra and me. This series included 3 different sessions which topics were related to User Experience Design. It helped us explain our tasks, responsibilities and impact on a software development project as UX Designers.</p>","Github":null,"Medium":null,"Sketch":null,"type":{"id":1,"type":"Professional","published_at":"2021-01-17T00:07:22.180Z","created_at":"2021-01-17T00:07:16.421Z","updated_at":"2021-01-17T00:07:22.200Z"},"icon":null,"heroImage":"https://images.unsplash.com/photo-1600202751116-3e0226e1e7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80","link":null,"status":{"id":2,"status":"Completed","published_at":"2021-01-17T03:54:21.887Z","created_at":"2021-01-17T03:54:20.202Z","updated_at":"2021-01-17T03:54:21.910Z"},"published_at":"2021-01-17T03:04:37.992Z","created_at":"2021-01-17T03:03:26.677Z","updated_at":"2021-01-17T07:01:37.726Z","roles":[{"id":4,"role":"Speaker","published_at":"2021-01-17T03:04:17.822Z","created_at":"2021-01-17T03:04:16.472Z","updated_at":"2021-01-17T03:04:17.846Z"}],"target_platforms":[{"id":3,"TargetPlatform":"Lecture","published_at":"2021-01-17T02:46:15.343Z","created_at":"2021-01-17T02:46:11.978Z","updated_at":"2021-01-17T02:46:15.368Z"}],"tasks":[],"tech_tools":[]},{"id":4,"title":"SAC18","year":"2018","description":"<p class=\\"text--primary\\">Led a pretty simple UX strategy to bring our final product to life as part of the team focused on developing the 2018\'s Semana Académica y Cultural\'s website. The article that details the process we followed can be found in Facebook and the website can still be found in the link below.</p>\\n\\n<p class=\\"text--primary\\">Every year, there\'s an event at UAQ\'s School of Computer Science, in which lectures, workshops and other activities related to technology topics are scheduled and the whole . I was part of the team focused on that event\'s website, which would display the different activities happening over the week as well as for registered users (students) to keep track of their earned points.</p>\\n\\n<p class=\\"text--primary\\">One of the highlights from this project is that we had the idea to divide people into groups (houses). It turned out to be a great solution to engage people into getting more points. That same dynamic has been used ever since.</p>","Github":null,"Medium":"https://medium.com/@FOC96/sac18-489cb55d7e77","Sketch":"https://sketch.cloud/s/a68b2f40-f4e7-4d92-899c-1bc57ca55b2e","type":{"id":1,"type":"Professional","published_at":"2021-01-17T00:07:22.180Z","created_at":"2021-01-17T00:07:16.421Z","updated_at":"2021-01-17T00:07:22.200Z"},"icon":null,"heroImage":"https://images.unsplash.com/photo-1518727713078-80d11060492e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1546&q=80","link":"https://portalinformatica.uaq.mx/sac/","status":{"id":2,"status":"Completed","published_at":"2021-01-17T03:54:21.887Z","created_at":"2021-01-17T03:54:20.202Z","updated_at":"2021-01-17T03:54:21.910Z"},"published_at":"2021-01-17T03:30:12.683Z","created_at":"2021-01-17T03:29:34.033Z","updated_at":"2021-01-17T07:10:12.128Z","roles":[{"id":1,"role":"Lead UX Designer","published_at":"2021-01-17T00:07:59.802Z","created_at":"2021-01-17T00:07:56.542Z","updated_at":"2021-01-17T00:09:32.729Z"},{"id":2,"role":"Front-end Developer","published_at":"2021-01-17T00:08:16.070Z","created_at":"2021-01-17T00:08:14.483Z","updated_at":"2021-01-17T00:08:16.094Z"}],"target_platforms":[{"id":1,"TargetPlatform":"Web","published_at":"2021-01-17T00:24:26.812Z","created_at":"2021-01-17T00:16:54.324Z","updated_at":"2021-01-17T00:24:26.834Z"}],"tasks":[{"id":1,"task":"Front-end development","published_at":"2021-01-17T00:09:55.884Z","created_at":"2021-01-17T00:09:54.650Z","updated_at":"2021-01-17T00:09:55.909Z"},{"id":2,"task":"Wireframing","published_at":"2021-01-17T00:10:16.648Z","created_at":"2021-01-17T00:10:15.317Z","updated_at":"2021-01-17T00:10:16.675Z"},{"id":3,"task":"Prototyping","published_at":"2021-01-17T00:11:45.416Z","created_at":"2021-01-17T00:11:43.520Z","updated_at":"2021-01-17T00:11:45.466Z"},{"id":10,"task":"Persona design","published_at":"2021-01-17T01:24:48.191Z","created_at":"2021-01-17T01:24:46.674Z","updated_at":"2021-01-17T01:24:48.214Z"}],"tech_tools":[{"id":4,"TechnologyOrTool":"Sketch","published_at":"2021-01-17T00:18:08.702Z","created_at":"2021-01-17T00:18:07.714Z","updated_at":"2021-01-17T00:18:08.729Z"},{"id":6,"TechnologyOrTool":"HTML5","published_at":"2021-01-17T03:29:47.282Z","created_at":"2021-01-17T03:29:45.888Z","updated_at":"2021-01-17T03:29:47.306Z"},{"id":7,"TechnologyOrTool":"CSS3","published_at":"2021-01-17T03:29:54.096Z","created_at":"2021-01-17T03:29:52.978Z","updated_at":"2021-01-17T03:29:54.122Z"}]},{"id":5,"title":"Salud UAQ","year":"2017","description":"<p class=\\"text--primary\\">Designed a new UI that could improve the user\'s experience to the university\'s health record system initiative. For this, constant interactions with students from Nutrition and Food Science were needed to understand how they take measurements and store them. The goal of the first phase was to create a way for them to go paperless and improve both the doctor\'s and patient\'s access to the information.</p>","Github":null,"Medium":null,"Sketch":"https://sketch.cloud/s/72baa741-8e62-463f-aef4-948d0ce38296","type":{"id":1,"type":"Professional","published_at":"2021-01-17T00:07:22.180Z","created_at":"2021-01-17T00:07:16.421Z","updated_at":"2021-01-17T00:07:22.200Z"},"icon":null,"heroImage":"https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","link":null,"status":{"id":2,"status":"Completed","published_at":"2021-01-17T03:54:21.887Z","created_at":"2021-01-17T03:54:20.202Z","updated_at":"2021-01-17T03:54:21.910Z"},"published_at":"2021-01-17T03:37:14.187Z","created_at":"2021-01-17T03:37:12.045Z","updated_at":"2021-01-17T07:02:14.216Z","roles":[{"id":1,"role":"Lead UX Designer","published_at":"2021-01-17T00:07:59.802Z","created_at":"2021-01-17T00:07:56.542Z","updated_at":"2021-01-17T00:09:32.729Z"},{"id":2,"role":"Front-end Developer","published_at":"2021-01-17T00:08:16.070Z","created_at":"2021-01-17T00:08:14.483Z","updated_at":"2021-01-17T00:08:16.094Z"}],"target_platforms":[{"id":1,"TargetPlatform":"Web","published_at":"2021-01-17T00:24:26.812Z","created_at":"2021-01-17T00:16:54.324Z","updated_at":"2021-01-17T00:24:26.834Z"}],"tasks":[{"id":2,"task":"Wireframing","published_at":"2021-01-17T00:10:16.648Z","created_at":"2021-01-17T00:10:15.317Z","updated_at":"2021-01-17T00:10:16.675Z"},{"id":1,"task":"Front-end development","published_at":"2021-01-17T00:09:55.884Z","created_at":"2021-01-17T00:09:54.650Z","updated_at":"2021-01-17T00:09:55.909Z"}],"tech_tools":[{"id":6,"TechnologyOrTool":"HTML5","published_at":"2021-01-17T03:29:47.282Z","created_at":"2021-01-17T03:29:45.888Z","updated_at":"2021-01-17T03:29:47.306Z"},{"id":7,"TechnologyOrTool":"CSS3","published_at":"2021-01-17T03:29:54.096Z","created_at":"2021-01-17T03:29:52.978Z","updated_at":"2021-01-17T03:29:54.122Z"}]}]')},d40e:function(e,t,a){"use strict";var s=a("eb61"),i=a.n(s);i.a},eb61:function(e,t,a){},fa9e:function(e){e.exports=JSON.parse('[{"group":"1","sent":true,"message":"who?"},{"group":"1","sent":true,"image":"https://media3.giphy.com/media/wIRvHEm7vf8w8/giphy.gif?cid=ecf05e473xgj78y3c0wz4l7a07mw3zzmgmdpv7tn17ginezp&rid=giphy.gif"},{"group":"2","sent":false,"message":"User experience designer with a sofware engineering background currently working on the aviation industry."},{"group":"2","sent":false,"message":"Feels passionate about the common ground in which Product and Engineering meet. His current activities at work allow him to be part of the product design planning – crafting flow diagrams, wireframes and prototypes to drive ideas and concepts while discussing with stakeholders. Then, he participates in the front-end development of these projects."},{"group":"2","sent":false,"message":"His love for tv shows goes from supernatural masterpieces like The Haunting of Hill House to super cheesy dramas like Grey\'s Anatomy. Enjoys listening to music 24/7, even more when it\'s sad depressing songs from which he feeds constantly, as well as up-tempo songs. He prays to Queen B 🍋 and Shakira."},{"group":"3","sent":true,"message":"education?"},{"group":"4","sent":false,"message":"Universidad Autónoma de Querétaro (UAQ)\\n015–2019 BS, Software Engineering [GPA: 9.6/10]\\nSantiago de Querétaro, Querétaro, MX"},{"group":"4","sent":false,"message":"University of Northern Colorado (UNCO)\\nFall 2017, Semester Abroad [GPA: 4.0/4.0]\\nGreeley, CO, USA"},{"group":"5","sent":true,"message":"what about his skills?"},{"group":"6","sent":false,"message":"Interaction Design:  wireframing, prototyping, accessibility, usability"},{"group":"6","sent":false,"message":"Software: Sketch, InVision, Photoshop"},{"group":"6","sent":false,"message":"Software Dev: HTML5 & CSS3, JavaScript, Vue, Swift UI, Git"},{"group":"6","sent":false,"message":"Tools & others: SCRUM, Rally, Azure, Azure DevOps"},{"group":"6","sent":false,"message":"Languages: Spanish (native) & English (C1)"},{"group":"7","sent":true,"message":"cool, anything else?"},{"group":"8","sent":false,"message":"🤔"},{"group":"8","sent":false,"message":"you can also download my resume"},{"group":"8","sent":false,"file":{"link":"https://www.icloud.com/iclouddrive/0Kn9yu0I-wVjY4AYBevhf2Ugw#cvF-1","name":"cvF-1"}}]')}});
//# sourceMappingURL=app.24113ad1.js.map