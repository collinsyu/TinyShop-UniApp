(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"0469":function(t,e,i){"use strict";var a=i("1ada"),n=i.n(a);n.a},"0aee":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-116f8b7f]{background:#fff}.product-list .navbar[data-v-116f8b7f]{position:fixed;left:0;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.product-list .navbar .nav-item[data-v-116f8b7f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.product-list .navbar .nav-item.current[data-v-116f8b7f]{color:#fa436a}.product-list .navbar .nav-item.current[data-v-116f8b7f]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.product-list .navbar .p-box[data-v-116f8b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.product-list .navbar .p-box .iconfont[data-v-116f8b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.product-list .navbar .p-box .iconfont.active[data-v-116f8b7f]{color:#fa436a}.product-list .navbar .p-box .xia[data-v-116f8b7f]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.product-list .navbar .cate-item[data-v-116f8b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.product-list .navbar .cate-item[data-v-116f8b7f]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}.product-list .cate-mask[data-v-116f8b7f]{position:fixed;left:0;top:40px;bottom:0;width:100%;background:transparent;z-index:95;-webkit-transition:.3s;transition:.3s}.product-list .cate-mask .cate-content[data-v-116f8b7f]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;transition:.3s}.product-list .cate-mask.none[data-v-116f8b7f]{display:none}.product-list .cate-mask.show[data-v-116f8b7f]{background:rgba(0,0,0,.4)}.product-list .cate-mask.show .cate-content[data-v-116f8b7f]{-webkit-transform:translateX(0);transform:translateX(0)}.product-list .cate-mask .cate-list[data-v-116f8b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.product-list .cate-mask .cate-list .cate-item[data-v-116f8b7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;padding-left:%?30?%;font-size:%?30?%;position:relative;color:#303133}.product-list .cate-mask .cate-list .one[data-v-116f8b7f]{background:#eee}.product-list .cate-mask .cate-list .two[data-v-116f8b7f]{background:#f8f8f8;color:#606266;height:%?60?%;font-size:%?28?%;padding-left:%?50?%}.product-list .cate-mask .cate-list .three[data-v-116f8b7f]{font-size:%?26?%;color:#606266}.product-list .cate-mask .cate-list .active[data-v-116f8b7f]{color:#fa436a}body.?%PAGE?%[data-v-116f8b7f]{background:#fff}',""]),t.exports=e},"1ada":function(t,e,i){var a=i("8720");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0791e977",a,!0,{sourceMap:!1,shadowMode:!1})},"1af6":function(t,e,i){var a=i("63b6");a(a.S,"Array",{isArray:i("9003")})},"20fd":function(t,e,i){"use strict";var a=i("d9f6"),n=i("aebd");t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},2284:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),o={props:{headerShow:{type:Boolean,default:!0},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,searchValue:this.placeholder}},methods:{handleSearchValueChange:function(t){this.searchValue=t.detail.value},discard:function(){},link:function(){this.$emit("link")},toSearch:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$emit("search",{searchValue:this.searchValue});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=o},"29d7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".rf-search-bar[data-v-17d37029]{background-color:#fff}.rf-search-bar .status[data-v-17d37029]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.rf-search-bar .header[data-v-17d37029]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.rf-search-bar .header .addr[data-v-17d37029]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.rf-search-bar .header .addr .iconfont[data-v-17d37029]{height:%?60?%;margin-right:%?6?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?35?%;color:#fa436a}.rf-search-bar .header .input-box[data-v-17d37029]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?20?% 0 %?10?%}.rf-search-bar .header .input-box .icon[data-v-17d37029]{z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.rf-search-bar .header .input-box uni-input[data-v-17d37029]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .place[data-v-17d37029]{background-color:#fff;height:%?100?%}",""]),t.exports=e},"35bd":function(t,e,i){"use strict";i.r(e);var a=i("7208"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3731:function(t,e,i){var a=i("29d7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("781faa4f",a,!0,{sourceMap:!1,shadowMode:!1})},"3eed":function(t,e,i){"use strict";var a=i("3731"),n=i.n(a);n.a},"549b":function(t,e,i){"use strict";var a=i("d864"),n=i("63b6"),o=i("241e"),r=i("b0dc"),s=i("3702"),c=i("b447"),l=i("20fd"),d=i("7cd6");n(n.S+n.F*!i("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,n,u,f=o(t),h="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,b=void 0!==p,g=0,w=d(f);if(b&&(p=a(p,v>2?arguments[2]:void 0,2)),void 0==w||h==Array&&s(w))for(e=c(f.length),i=new h(e);e>g;g++)l(i,g,b?p(f[g],g):f[g]);else for(u=w.call(f),i=new h;!(n=u.next()).done;g++)l(i,g,b?r(u,p,[n.value,g],!0):n.value);return i.length=g,i}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"67f1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-search-bar"},[t.headerShow?i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.headerShow?i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.link(e)}}},[i("i",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.title))]),t.inputDisabled?i("v-uni-view",{staticClass:"input-box",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.discard(e)}}},[i("v-uni-input",{staticStyle:{color:"#888"},attrs:{value:t.placeholder,placeholder:t.placeholder?"":"请输入关键字","placeholder-style":"color:#ccc;"},on:{confirm:function(e){e=t.$handleEvent(e),t.toSearch(e)},input:function(e){e=t.$handleEvent(e),t.handleSearchValueChange(e)}}}),i("v-uni-view",{staticClass:"icon search",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.toSearch(e)}}})],1):i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{disabled:"",value:t.placeholder,"placeholder-style":"color:#ccc;"},on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}}),i("v-uni-view",{staticClass:"icon search"})],1)],1):t._e(),t.headerShow?i("v-uni-view",{staticClass:"place"}):t._e()],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},6872:function(t,e,i){"use strict";i.r(e);var a=i("b9cb"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},7208:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d");var n=a(i("75fc")),o=a(i("bd86"));i("96cf");var r=a(i("3b8d")),s=i("c4c8"),c=a(i("f97d")),l=a(i("8fe3")),d=a(i("9f3a"));function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,o.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h={components:{rfLoadMore:c.default,rfSearchBar:d.default,rfRecommend:l.default},data:function(){return{loading:!0,headerShow:!0,navBarTop:"0px",cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,salesOrder:0,cateList:[],goodsList:[],keyword:null,cateParams:null,page:1,filterParams:{},isShowNavBar:!0,hotSearchDefault:"请输入关键字",contentTop:"88upx",errorInfo:void 0}},onLoad:function(t){this.initData(t)},onShow:function(){navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px")},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.filterParams={},this.page=1,this.goodsList=[],this.getProductList("refresh")},onReachBottom:function(){this.page++,this.getProductList()},methods:{initData:function(t){if(navigator&&(this.headerTop=document.getElementsByTagName("uni-page-head")[0]&&document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px"),this.navBarTop="88upx",this.cateId=t.cate_id,t.params&&(this.cateParams=JSON.parse(t.params),1===this.cateParams.guessYouLike))return this.isShowNavBar=!1,this.contentTop="18upx",void this.getGuessYouLikeList();this.keyword=t.keyword,this.hotSearchDefault=t.keyword,this.keyword||(this.hotSearchDefault=uni.getStorageSync("hotSearchDefault")),this.getProductList()},handleSearchProductList:function(t){this.keyword=t.searchValue,this.page=1,this.goodsList=[],this.filterParams={},this.getProductList()},navToIndex:function(){uni.reLaunch({url:"/pages/index/index"})},getProductList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={},this.keyword?i.keyword=this.keyword:this.cateId?i.cate_id=this.cateId:this.cateParams&&(i=f({},this.cateParams)),i.page=this.page,t.next=5,this.$get("".concat(s.productList),f({},i,{},this.filterParams)).then((function(t){a.loading=!1,a.getProductCate(),"refresh"===e&&uni.stopPullDownRefresh(),a.loadingType=10===t.data.length?"more":"nomore",a.goodsList=[].concat((0,n.default)(a.goodsList),(0,n.default)(t.data))})).catch((function(t){a.errorInfo=t,a.goodsList=[],a.loading=!1,"refresh"===e&&uni.stopPullDownRefresh()}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getGuessYouLikeList:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(s.guessYouLikeList),{}).then((function(t){e.loadingType=10===t.data.length?"more":"nomore",e.goodsList=[].concat((0,n.default)(e.goodsList),(0,n.default)(t.data))})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getProductCate:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(s.productCate)).then((function(t){e.cateList=t.data,e.cateList.unshift({title:"全部商品",id:""})}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),tabClick:function(t){this.filterParams={},this.filterIndex===t&&4!==t&&1!==t||(this.filterIndex=t,0===t?this.filterParams={}:1===t?1===this.salesOrder?(this.filterParams.sales="desc",this.salesOrder=2):(this.filterParams.sales="asc",this.salesOrder=1):2===t?this.filterParams.view="desc":3===t?this.filterParams.collect="desc":4===t&&(1===this.priceOrder?(this.filterParams.price="desc",this.priceOrder=2):(this.filterParams.price="asc",this.priceOrder=1)),uni.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList.length=0,this.loading=!0,this.getProductList())},toggleCateMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){e.cateMaskState=a}),i)},changeCate:function(t){t||(this.cateParams=null,this.cateId=null,this.keyword=null),this.cateId=t,this.keyword=void 0,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.page=1,this.goodsList.length=0,this.filterParams={},this.loading=!0,this.getProductList("refresh")},navTo:function(t){uni.navigateTo({url:t})},stopPrevent:function(){}}};e.default=h},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),s=i.n(r),c=i("c8bb"),l=i.n(c);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||d(t)||u()}i.d(e,"default",(function(){return f}))},"774e":function(t,e,i){t.exports=i("d2d5")},8720:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".rf-load-more[data-v-e1666968]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t/*position: fixed;*/\n\t/*bottom: 5upx;*/\n\t/*text-align: center;*/}.rf-load-more__text[data-v-e1666968]{font-size:%?28?%;color:#999}.rf-load-more__img[data-v-e1666968]{height:24px;width:24px;margin-right:10px}.rf-load-more__img>uni-view[data-v-e1666968]{position:absolute}.rf-load-more__img>uni-view uni-view[data-v-e1666968]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-e1666968 1.56s ease infinite;animation:load-data-v-e1666968 1.56s ease infinite}.rf-load-more__img>uni-view uni-view[data-v-e1666968]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-e1666968]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.rf-load-more__img>uni-view uni-view[data-v-e1666968]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-e1666968]:nth-child(4){top:11px;left:0}.load1[data-v-e1666968],.load2[data-v-e1666968],.load3[data-v-e1666968]{height:24px;width:24px}.load2[data-v-e1666968]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-e1666968]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-e1666968]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-e1666968]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-e1666968]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-e1666968]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-e1666968]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-e1666968]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-e1666968]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-e1666968]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-e1666968]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-e1666968]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-e1666968]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-e1666968]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-e1666968{0%{opacity:1}to{opacity:.2}}",""]),t.exports=e},8999:function(t,e,i){"use strict";i.r(e);var a=i("2284"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"95d5":function(t,e,i){var a=i("40c3"),n=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||o.hasOwnProperty(a(e))}},"9ae3":function(t,e,i){"use strict";i.r(e);var a=i("be02"),n=i("35bd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e7b8");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"116f8b7f",null);e["default"]=s.exports},"9f3a":function(t,e,i){"use strict";i.r(e);var a=i("67f1"),n=i("8999");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3eed");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"17d37029",null);e["default"]=s.exports},a745:function(t,e,i){t.exports=i("f410")},b9cb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"rf-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=a},be02:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"product-list"},[i("rf-search-bar",{attrs:{icon:"iconxiatubiao--copy",title:"主页",inputDisabled:!0,headerShow:t.headerShow,placeholder:t.hotSearchDefault},on:{link:function(e){e=t.$handleEvent(e),t.navToIndex(e)},search:function(e){e=t.$handleEvent(e),t.handleSearchProductList(e)}}}),t.isShowNavBar?i("v-uni-view",{staticClass:"navbar",style:{top:t.navBarTop}},[i("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),i("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(1)}}},[i("v-uni-text",[t._v("销量")]),i("v-uni-view",{staticClass:"p-box"},[i("i",{staticClass:"iconfont iconshang",class:{active:1===t.salesOrder&&1===t.filterIndex}}),i("i",{staticClass:"iconfont iconshang xia",class:{active:2===t.salesOrder&&1===t.filterIndex}})])],1),i("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[t._v("浏览量")]),i("v-uni-view",{staticClass:"nav-item",class:{current:3===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(3)}}},[t._v("收藏")]),i("v-uni-view",{staticClass:"nav-item",class:{current:4===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(4)}}},[i("v-uni-text",[t._v("价格")]),i("v-uni-view",{staticClass:"p-box"},[i("i",{staticClass:"iconfont iconshang",class:{active:1===t.priceOrder&&4===t.filterIndex}}),i("i",{staticClass:"iconfont iconshang xia",class:{active:2===t.priceOrder&&4===t.filterIndex}})])],1),i("i",{staticClass:"cate-item iconfont iconfenlei1",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask("show")}}})],1):t._e(),t.goodsList.length>0?i("v-uni-view",{staticClass:"rf-product-list",style:{marginTop:t.contentTop}},t._l(t.goodsList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"product-item",on:{click:function(i){i=t.$handleEvent(i),t.navTo("/pages/product/product?id="+e.id)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.picture,mode:"aspectFill"}})],1),e.name?i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.name))]):t._e(),e.name?i("v-uni-view",{staticClass:"last-line"},[i("v-uni-text",{staticClass:"price in1line"},[t._v(t._s(e.price)),e.market_price>e.price?i("v-uni-text",{staticClass:"m-price"},[t._v("¥ "+t._s(e.market_price))]):t._e()],1),i("v-uni-text",{staticClass:"sales in1line"},[i("v-uni-text",{staticClass:"red"},[t._v(t._s(e.sales))]),t._v("付款")],1)],1):t._e()],1)})),1):t._e(),t.goodsList.length>0?i("rf-load-more",{attrs:{status:t.loadingType}}):t._e(),0!==t.goodsList.length||t.loading?t._e():i("rf-empty",{attrs:{info:t.errorInfo||"该分类暂无商品"}}),i("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[i("v-uni-view",{staticClass:"cate-content",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},t._l(t.cateList,(function(e){return i("v-uni-view",{key:e.id},[i("v-uni-view",{staticClass:"cate-item one",on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title))]),t._l(e.child,(function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item two",class:{active:e.id==t.cateId},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title)),t._l(e.child,(function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item three",class:{active:e.id==t.cateId},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.changeCate(e.id)}}},[t._v(t._s(e.title))])}))],2)}))],2)})),1)],1)],1),t.loading?i("rf-loading"):t._e()],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},db64:function(t,e,i){var a=i("0aee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5309d452",a,!0,{sourceMap:!1,shadowMode:!1})},e7b8:function(t,e,i){"use strict";var a=i("db64"),n=i.n(a);n.a},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray},f97d:function(t,e,i){"use strict";i.r(e);var a=i("fe5e"),n=i("6872");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0469");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"e1666968",null);e["default"]=s.exports},fe5e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-load-more"},["loading"===t.status&&t.showIcon?i("v-uni-view",{staticClass:"rf-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1):t._e(),i("v-uni-view",{staticClass:"cu-load",class:"more"===t.status?"loading":"over"})],1)},n=[];i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}))}}]);