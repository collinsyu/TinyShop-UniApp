(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-notice-detail"],{"03d4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("rf-image",{staticClass:"banner-img",attrs:{src:t.announceDetail.cover}}),n("v-uni-view",{staticClass:"banner-title in2line"},[t._v(t._s(t.announceDetail.title))])],1),n("v-uni-view",{staticClass:"article-meta"},[n("v-uni-text",{staticClass:"article-author"},[t._v(t._s(t.announceDetail.author_name))]),n("v-uni-text",{staticClass:"article-text"},[t._v("发布于")]),n("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t._f("time")(t.announceDetail.created_at)))])],1),n("v-uni-view",{staticClass:"article-content"},[n("v-uni-rich-text",{attrs:{nodes:t.announceDetail.content}})],1),t.announceDetail||t.loading?t._e():n("rf-empty",{attrs:{info:"暂无公告信息"}}),t.loading?n("rf-loading"):t._e()],1)},a=[];n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}))},"0415":function(t,e,n){"use strict";var i=n("edf7"),a=n.n(i);a.a},"2b74":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notifyAnnounceView=e.notifyAnnounceIndex=e.wechatConfig=e.configList=e.payCreate=e.advList=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var i="/tiny-shop/v1/common/provinces/index";e.provinceList=i;var a="/tiny-shop/v1/common/collect/create";e.collectCreate=a;var o="/tiny-shop/v1/common/collect/delete";e.collectDel=o;var c="/tiny-shop/v1/common/transmit/create";e.transmitCreate=c;var r="/tiny-shop/v1/common/adv/index";e.advList=r;var s="/tiny-shop/v1/common/config/index";e.configList=s;var l="/tiny-shop/v1/common/pay/create";e.payCreate=l;var d="/tiny-shop/v1/third-party/wechat-js-sdk";e.wechatConfig=d;var u="/tiny-shop/v1/common/notify-announce/index";e.notifyAnnounceIndex=u;var f="/tiny-shop/v1/common/notify-announce/view";e.notifyAnnounceView=f},"3d05":function(t,e,n){"use strict";n.r(e);var i=n("d684"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a82a:function(t,e,n){"use strict";n.r(e);var i=n("03d4"),a=n("3d05");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0415");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"8653bacc",null);e["default"]=r.exports},d684:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("3b8d")),o=n("2b74"),c=i(n("8f09")),r={data:function(){return{announceDetail:{},id:void 0,loading:!0}},filters:{time:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD HH:mm")}},onLoad:function(t){this.id=t.id,this.getNotifyAnnounceView(t.id)},onShareAppMessage:function(){return{title:this.banner.title,path:"/pages/index/notice/detail?id=".concat(this.id)}},methods:{getNotifyAnnounceView:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(o.notifyAnnounceView),{id:e}).then((function(t){n.loading=!1,n.announceDetail=t.data,uni.setNavigationBarTitle({title:t.data.title})})).catch((function(){n.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=r},e227:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".banner[data-v-8653bacc]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-8653bacc]{width:100%}.banner-title[data-v-8653bacc]{max-height:%?84?%;overflow:hidden;position:absolute;bottom:0;width:100%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11;background-color:rgba(0,0,0,.25);padding:%?4?% %?20?%}.article-meta[data-v-8653bacc]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;color:grey}.article-text[data-v-8653bacc]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-8653bacc],.article-time[data-v-8653bacc]{font-size:%?30?%}.article-content[data-v-8653bacc]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""]),t.exports=e},edf7:function(t,e,n){var i=n("e227");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("285595da",i,!0,{sourceMap:!1,shadowMode:!1})}}]);