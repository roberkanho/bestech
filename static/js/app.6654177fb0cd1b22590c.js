webpackJsonp([8],{"9aKU":function(t,e){},A14c:function(t,e,i){var n={"./index.vue":["2NXm",4],"./index_en.vue":["D85C",0,2],"./index_v2.vue":["88Cg",0,3],"./solution.vue":["tV1m",0,5],"./tutorial.vue":["rOPP",6]};function o(t){var e=n[t];return e?Promise.all(e.slice(1).map(i.e)).then(function(){return i(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(n)},o.id="A14c",t.exports=o},DcPZ:function(t,e){},IpFP:function(t,e,i){var n={"./index.vue":["wv9R",0,1]};function o(t){var e=n[t];return e?Promise.all(e.slice(1).map(i.e)).then(function(){return i(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(n)},o.id="IpFP",t.exports=o},L28S:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("L28S"),i("psK2");var n=i("2X9z"),o=i.n(n),s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")({name:"App"},a,!1,function(t){i("DcPZ")},null,null).exports,r=i("/ocq");s.default.use(r.a);var l,u=new r.a({scrollBehavior:function(){return{y:0}},mode:"history",routes:[{path:"/",name:"Home",component:(l="index_en",function(){return i("A14c")("./"+l+".vue")})}]}),v=i("mtWM"),d=i.n(v),h={data:function(){return{naviList:[],showNavi:"left: -100%",showMobileNavi:!1,showOriLineColor:!0,showMask:!1}},props:["barStyle"],components:{MaskReservation:i("WJIg").a},methods:{switchNavi:function(){var t=this;this.showMobileNavi?(this.showNavi="left: -100%",this.showMobileNavi=!1,setTimeout(function(){t.showMobileNavi||(t.showOriLineColor=!0)},400)):(this.showNavi="left: 0px",this.showMobileNavi=!0,this.showOriLineColor=!1)},reserve:function(){this.showMask=!0}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("div",{staticClass:"flex flex-middle header mobile-hidden"},[i("div",{staticClass:"full-width container-t1"},[i("div",{staticClass:"flex flex-middle flex-between"},[i("router-link",{staticClass:"flex flex-middle logo-wrapper",attrs:{to:"/"}},[i("img",{attrs:{src:t.$root.cdnUrl+"aiverse-logo.png"}})]),t._v(" "),i("div",{staticClass:"flex flex-middle"},[i("div",{staticClass:"flex flex-middle navi-list"},t._l(t.naviList,function(e,n){return i("div",{key:t._uid+n,staticClass:"navi-item"},[i("router-link",{staticClass:"cursor-pointer bold fs-26",attrs:{to:e.href}},[t._v(t._s(e.title))])],1)})),t._v(" "),i("button",{staticClass:"white border-button bold fs-26",on:{click:t.reserve}},[t._v("预约演示")])])],1)])]),t._v(" "),i("div",{staticClass:"mobile-show",staticStyle:{height:"60px"},attrs:{id:"top-bar__mobile"}},[i("div",{staticClass:"bar-logo__mobile position-center"},[i("router-link",{staticClass:"position-center-middle",staticStyle:{height:"40px"},attrs:{to:"/"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.showMobileNavi,expression:"showMobileNavi"}],staticStyle:{height:"100%","text-align":"center"},attrs:{src:t.$root.cdnUrl+"aiverse-logo_black.png"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.showMobileNavi,expression:"!showMobileNavi"}],staticStyle:{height:"100%","text-align":"center"},attrs:{src:t.$root.cdnUrl+"aiverse-logo.png"}})])],1)]),t._v(" "),i("div",{staticClass:"navigates__mobile",style:t.showNavi},[i("div",{staticStyle:{padding:"28px 44px 0","overflow-y":"auto",height:"100%"}},t._l(t.naviList,function(e,n){return i("router-link",{key:t._uid+n,staticClass:"navi-item",attrs:{to:e.href}},[t._v(t._s(e.title))])}))]),t._v(" "),t.showMask?i("mask-reservation"):t._e()],1)},staticRenderFns:[]};var p=i("VU/8")(h,m,!1,function(t){i("rby1")},null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-content-container"},[e("div",{staticClass:"foot-content white"},[e("div",{staticClass:"center wrapper"},[e("p",{staticClass:"fs-34 copyright"},[this._v("Copyright @ 2018 博斯腾")]),this._v(" "),e("p",{staticClass:"fs-24 terms-privacy"},[this._v("Terms of service and privacy policy")])])])])])}]};var b=i("VU/8")({data:function(){return{}},components:{}},f,!1,function(t){i("9aKU")},null,null).exports,g=i("jJhY").Promise;window.Promise=g,s.default.prototype.$message=o.a,s.default.component("m-header",p),s.default.component("m-footer",b),d.a.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json;charset=UTF-8",t},function(t){console.log(t),g.reject(t)}),s.default.prototype.$http=d.a,s.default.config.productionTip=!1,u.beforeEach(function(t,e,i){document.title=t.name,document.getElementById("app").scrollTop=0,i()}),new s.default({el:"#app",router:u,data:function(){return{cdnUrl:"https://niannian-cdn.oss-cn-hangzhou.aliyuncs.com/insurAI/"}},components:{App:c},template:"<App/>"})},WJIg:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mask"},[i("div",{staticClass:"reservation position-center-middle"},[i("h3",{staticClass:"center title fs-40",staticStyle:{color:"#1e1e1e"}},[t._v("预约演示")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"form"},[i("div",{staticClass:"form-item"},[i("p",[t._v("姓名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactObj.name,expression:"contactObj.name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.contactObj.name},on:{input:function(e){e.target.composing||t.$set(t.contactObj,"name",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-item"},[i("p",[t._v("工作邮箱")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactObj.contactMail,expression:"contactObj.contactMail"}],attrs:{type:"text",placeholder:"工作邮箱地址"},domProps:{value:t.contactObj.contactMail},on:{input:function(e){e.target.composing||t.$set(t.contactObj,"contactMail",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-item"},[i("p",[t._v("联系电话")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.contactObj.contactPhone,expression:"contactObj.contactPhone"}],attrs:{type:"text",placeholder:"联系电话"},domProps:{value:t.contactObj.contactPhone},on:{input:function(e){e.target.composing||t.$set(t.contactObj,"contactPhone",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-item"},[i("p",[t._v("额外信息")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactObj.suggestion,expression:"contactObj.suggestion"}],attrs:{rows:"4",placeholder:"如果您有其他信息或者需求，可以告诉我们。"},domProps:{value:t.contactObj.suggestion},on:{input:function(e){e.target.composing||t.$set(t.contactObj,"suggestion",e.target.value)}}})]),t._v(" "),i("button",{staticClass:"bold white",style:t.allowSubmit?"background-color:#195bdd;":"background-color:#B2B2B2;",on:{click:t.submit}},[t._v("提交")])]),t._v(" "),i("div",{staticClass:"icon-wrapper cursor-pointer",on:{click:t.close}},[i("div",{staticClass:"icon-close"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-middle"},[e("div",{staticClass:"line_h"}),this._v(" "),e("div",{staticClass:"flex-auto"},[e("p",{staticClass:"center"},[this._v("收到消息后，我们会第一时间联系您。")])]),this._v(" "),e("div",{staticClass:"line_h"})])}]};var o=i("VU/8")({data:function(){return{contactObj:{name:"",organization:"INSURAI",contactMail:"",contactPhone:"",suggestion:""},allowSubmit:!1}},props:[],watch:{"contactObj.name":function(){this.validate()?this.allowSubmit=!0:this.allowSubmit=!1},"contactObj.organization":function(){this.validate()?this.allowSubmit=!0:this.allowSubmit=!1},"contactObj.contactPhone":function(){this.validate()?this.allowSubmit=!0:this.allowSubmit=!1}},computed:{},components:{},methods:{validate:function(){return!!(this.contactObj.name&&this.contactObj.name.trim().length>0&&this.contactObj.organization&&this.contactObj.organization.trim().length>0&&this.contactObj.contactPhone&&11==this.contactObj.contactPhone.trim().length)},submit:function(){var t=this;this.allowSubmit&&this.$http.post("https://api.365niannian.com/product/contact",this.contactObj).then(function(e){t.$message({showClose:!0,message:"您的预约信息我们已经收到,我们会尽快联系您",type:"success"}),t.close()}).catch(function(e){t.$message({showClose:!0,message:"提交失败，请重新尝试",type:"error"})})},close:function(){this.$parent.showMask=!1}},created:function(){},mounted:function(){},destroyed:function(){}},n,!1,function(t){i("gCh7")},null,null);e.a=o.exports},gCh7:function(t,e){},psK2:function(t,e){},rby1:function(t,e){}},["NHnr"]);