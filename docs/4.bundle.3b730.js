(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,e,n){"use strict";var a=n(28),i=n(55),r=n(15),s=Object(r.a)(i.a,a.render,a.staticRenderFns,!1,null,null,null),o=n(24);o.install(n(12)),o.compatible&&(t.hot.accept(),o.isRecorded("34985033")?o.reload("34985033",s.options):o.createRecord("34985033",s.options),t.hot.accept(28,function(t){a=n(28),o.rerender("34985033",{render:a.render,staticRenderFns:a.staticRenderFns})}.bind(this))),s.options.__file="src/components/template/template2.vue";s.exports},129:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return r});n(160);var a=n(90),i=n.n(a);function r(e,n){t.html2canvas=i.a;var a=document.getElementById(e),r=a.offsetWidth,s=a.offsetHeight,o=a.scrollTop,c=a.scrollLeft,l=document.createElement("canvas"),d=0,u=window.offsetWidth,p=window.scrollWidth;p>u&&(d=(p-u)/2),l.width=2*r,l.height=2*s;var m=l.getContext("2d");m.scale(2,2),m.translate(-c-d,-o),console.log(a,"html2canvas"),i()(a).then(function(t){var e=t.width,a=t.height,i=e/592.28*841.89,r=a,s=0,o=592.28/e*a,c=t.toDataURL("image/jpeg",1),l=new jsPDF;if(r<i)l.addImage(c,"JPEG",0,0,595.28,o);else for(;r>0;)l.addImage(c,"JPEG",0,s,595.28,o),s-=841.89,(r-=i)>0&&l.addPage();n||(n="在线编辑PDF"),l.save(n+".pdf")})}}).call(this,n(49))},157:function(t,e,n){"use strict";var a=n(53);n.n(a).a},190:function(t,e,n){"use strict";var a=n(63);n.n(a).a},27:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-wrap"},[n("div",{staticClass:"template-inner"},[n("div",{staticClass:"template",attrs:{id:t.id}},[n("h1",{staticClass:"edit-ele",attrs:{contenteditable:!0}},[t._v(t._s(t.name))]),t._v(" "),n("img",{attrs:{src:t.imgUrl,width:"80",height:"80",alt:"avator"}}),t._v(" "),n("p",[n("strong",{staticClass:"edit-ele",attrs:{contenteditable:!0}},[t._v("求职意向:")]),t._v(" "),n("span",{staticClass:"edit-ele",attrs:{contenteditable:!0}},[t._v("前端开发工程师")])]),t._v(" "),n("ul",[n("li",[n("div",{staticClass:"item-title"},[n("img",{staticClass:"item-icon",attrs:{src:t.imgUrl}}),t._v(" "),n("div",{staticClass:"item-text",attrs:{contenteditable:!0}},[t._v("求职意向")])])]),t._v(" "),n("li",[n("div",{staticClass:"item-title"},[n("img",{staticClass:"item-icon",attrs:{src:t.imgUrl}}),t._v(" "),n("div",{staticClass:"item-text",attrs:{contenteditable:!0}},[t._v("个人技能")])]),t._v(" "),n("div",{staticClass:"item-content"},[n("p",{attrs:{contenteditable:!0}},[t._v("\n                            1. 熟练掌握HTML/CSS布局，熟练运用DIV+CSS制作符合W3C标准的页面并解决浏览器版本兼容问题;\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            2. 熟练ajax、fetch前端交互技术，熟悉jsonp跨域，并且能够运用它们解决跨域问题;\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            3. 熟练使用Flex，Rem,百分比等进行移动端布局。有效解决和改善手机适配问题；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            4. 熟练使用VueJs+Vuex，进行组件化开发,实现模块化管理；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            5. 熟练运用熟练mint-ui，element-ui等组件库与Ant-Design UI与Bootstrap等框架；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            6. 熟练使用React框架，参与过React项目的开发；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            7. 熟练掌握JQuery，能够熟练使用swiper，lazyLoad等插件的使用；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            8. 熟练掌握微信小程序的开发，了解微信公众号的开发；\n                        ")]),t._v(" "),n("p",{attrs:{contenteditable:!0}},[t._v("\n                            9.了解nodeJs+Express+Mongodb，开发后端。\n                        ")])])])])])])])},i=[];a._withStripped=!0,n.d(e,"render",function(){return a}),n.d(e,"staticRenderFns",function(){return i})},28:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("模版2")])},i=[];a._withStripped=!0,n.d(e,"render",function(){return a}),n.d(e,"staticRenderFns",function(){return i})},31:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toolbar"},[n("a-button",{attrs:{type:"default"},on:{click:function(e){return t.backHome()}}},[t._v("回到首页")]),t._v(" "),n("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.exportTemplate("template1","我的模版")}}},[t._v("导出模版")])],1),t._v(" "),n(t.currentTabComponent,{tag:"component"})],1)},i=[];a._withStripped=!0,n.d(e,"render",function(){return a}),n.d(e,"staticRenderFns",function(){return i})},38:function(t,e,n){"use strict";var a=n(27),i=n(54),r=(n(157),n(15)),s=Object(r.a)(i.a,a.render,a.staticRenderFns,!1,null,null,null),o=n(24);o.install(n(12)),o.compatible&&(t.hot.accept(),o.isRecorded("348a38b2")?o.reload("348a38b2",s.options):o.createRecord("348a38b2",s.options),t.hot.accept(27,function(t){a=n(27),o.rerender("348a38b2",{render:a.render,staticRenderFns:a.staticRenderFns})}.bind(this))),s.options.__file="src/components/template/template1.vue",e.a=s.exports},420:function(t,e,n){"use strict";n.r(e);var a=n(31),i=n(66),r=(n(190),n(15)),s=Object(r.a)(i.a,a.render,a.staticRenderFns,!1,null,null,null),o=n(24);o.install(n(12)),o.compatible&&(t.hot.accept(),o.isRecorded("396350a2")?o.reload("396350a2",s.options):o.createRecord("396350a2",s.options),t.hot.accept(31,function(t){a=n(31),o.rerender("396350a2",{render:a.render,staticRenderFns:a.staticRenderFns})}.bind(this))),s.options.__file="src/views/resume/resumeedit.vue",e.default=s.exports},53:function(t,e,n){var a=n(78);"string"==typeof a&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1},r=n(48)(a,i);a.locals&&(t.exports=a.locals),a.locals||t.hot.accept(78,function(){var e=n(78);"string"==typeof e&&(e=[[t.i,e,""]]),r(e)}),t.hot.dispose(function(){r()})},54:function(t,e,n){"use strict";var a=n(79),i=n.n(a);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}console.log("这是template1");var s={name:"tempate1",data:function(){var t;return r(t={id:"template1",name:"Hello world!",message:"400000"},"name","青成"),r(t,"imgUrl",i.a),r(t,"editName","N"),t},methods:{exportPdf:function(){}},computed:{},components:{}};e.a=s},55:function(t,e,n){"use strict";e.a={name:"tempate2",data:function(){return{}},computed:{},methods:{},components:{}}},63:function(t,e,n){var a=n(86);"string"==typeof a&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1},r=n(48)(a,i);a.locals&&(t.exports=a.locals),a.locals||t.hot.accept(86,function(){var e=n(86);"string"==typeof e&&(e=[[t.i,e,""]]),r(e)}),t.hot.dispose(function(){r()})},66:function(t,e,n){"use strict";var a=n(38),i=(n(106),n(129)),r={name:"resumeedit",props:[],data:function(){return{}},methods:{exportTemplate:function(t,e){Object(i.a)(t,e)},backHome:function(){this.$router.push("/")}},computed:{currentTabComponent:function(){return console.log(this.$route.params,"获取路由参数"),"resumeTemplate"+this.$route.params.id}},components:{resumeTemplate1:a.a}};e.a=r},78:function(t,e,n){(t.exports=n(47)(!1)).push([t.i,"\n.template-wrap {\n    background: #fafafa;\n    padding-top: 20px;\n}\n.template-inner {\n    border: 1px solid #e8e8e8;\n}\n.template {\n    padding: 30px;\n    background: #fff;\n}\n[contenteditable]:focus {\n    background: gray;\n    outline: none;\n}\nli {\n    list-style: none;\n}\n.item-title {\n    display: flex;\n}\n.item-icon {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    margin-right: 5px;\n}\n.item-text {\n    font-weight: bold;\n    border-bottom: 1px solid #333;\n    flex: 1;\n}\n",""])},79:function(t,e,n){t.exports=n.p+"assets/images/1.jpeg"},86:function(t,e,n){(t.exports=n(47)(!1)).push([t.i,"\n.toolbar {\n    text-align: right;\n}\n",""])}}]);