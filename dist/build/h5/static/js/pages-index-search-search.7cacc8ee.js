(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search-search"],{"219a":function(A,t,e){"use strict";e.r(t);var i=e("9af1"),n=e("b5d0");for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);e("be80");var o=e("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"0340256a",null);t["default"]=s.exports},"2eac":function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,"uni-view[data-v-50fb087d]{display:block}.search-box[data-v-50fb087d]{width:100%;background-color:#f2f2f2;padding:%?15?% 2.5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.search-box .mSearch-input-box[data-v-50fb087d]{width:100%}.search-box .input-box>uni-input[data-v-50fb087d]{width:100%;height:%?60?%;font-size:%?32?%;border:0;border-radius:%?60?%;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 3%;margin:0;background-color:#fff}.search-keyword[data-v-50fb087d]{width:100%;background-color:#f2f2f2}.keyword-list-box[data-v-50fb087d]{height:calc(100vh - %?110?%);padding-top:%?10?%;border-radius:%?20?% %?20?% 0 0;background-color:#fff}.keyword-entry[data-v-50fb087d]{width:94%;height:%?80?%;margin:0 3%;font-size:%?30?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:solid %?1?% #e7e7e7}.keyword-entry uni-image[data-v-50fb087d]{width:%?60?%;height:%?60?%}.keyword-entry .keyword-img[data-v-50fb087d],.keyword-entry .keyword-text[data-v-50fb087d]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.keyword-entry .keyword-text[data-v-50fb087d]{width:90%}.keyword-entry .keyword-img[data-v-50fb087d]{width:10%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.keyword-box[data-v-50fb087d]{border-radius:%?20?% %?20?% 0 0;background-color:#fff}.keyword-box .keyword-block[data-v-50fb087d]{padding:%?10?% 0}.keyword-box .keyword-block .keyword-list-header[data-v-50fb087d]{width:100vw;padding:%?10?% 3%;font-size:%?27?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.keyword-box .keyword-block .keyword-list-header uni-image[data-v-50fb087d]{width:%?40?%;height:%?40?%}.keyword-box .keyword-block .keyword[data-v-50fb087d]{width:100vw;padding:3px 3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:wrap;flex-flow:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.keyword-box .keyword-block .hide-hot-tis[data-v-50fb087d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#6b6b6b}.keyword-box .keyword-block .keyword>uni-view[data-v-50fb087d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?60?%;padding:0 %?20?%;margin:%?10?% %?20?% %?10?% 0;height:%?60?%;font-size:%?28?%;background-color:#f2f2f2;color:#6b6b6b}.iconfont[data-v-50fb087d]{font-size:%?44?%}",""]),A.exports=t},"33e6":function(A,t,e){"use strict";e.r(t);var i=e("c958"),n=e.n(i);for(var a in i)"default"!==a&&function(A){e.d(t,A,(function(){return i[A]}))}(a);t["default"]=n.a},"3d0f":function(A,t,e){var i=e("2eac");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("1ddb50f0",i,!0,{sourceMap:!1,shadowMode:!1})},"475b":function(A,t,e){"use strict";var i=e("3d0f"),n=e.n(i);n.a},6032:function(A,t,e){"use strict";e.r(t);var i=e("dbb5"),n=e("33e6");for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);e("475b");var o=e("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"50fb087d",null);t["default"]=s.exports},"60c8":function(A,t,e){var i=e("d3fc");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("c0098f36",i,!0,{sourceMap:!1,shadowMode:!1})},"76d9":function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c5f6");var i={props:{mode:{value:Number,default:1},placeholder:{value:String,default:"请输入搜索内容"},value:{type:String,default:!1},button:{value:String,default:"outside"},show:{value:Boolean,default:!0},radius:{value:String,default:60}},data:function(){return{active:!1,inputVal:"",searchName:"取消",isDelShow:!1,isFocus:!1}},methods:{triggerConfirm:function(){this.$emit("confirm",!1)},inputChange:function(A){var t=A.detail.value;this.$emit("input",t),this.inputVal&&(this.isDelShow=!0)},focus:function(){this.active=!0,this.inputVal&&(this.isDelShow=!0)},blur:function(){this.isFocus=!1,this.inputVal||(this.active=!1)},clear:function(){uni.hideKeyboard(),this.isFocus=!1,this.inputVal="",this.active=!1,this.$emit("input","")},getFocus:function(){this.isFocus=!0},search:function(){if(!this.inputVal&&!this.show&&"取消"==this.searchName)return uni.hideKeyboard(),this.isFocus=!1,void(this.active=!1);console.log(this.inputVal),this.$emit("search",this.inputVal?this.inputVal:this.placeholder)}},watch:{inputVal:function(A){A?this.searchName="搜索":(this.searchName="取消",this.isDelShow=!1)},value:function(A){this.inputVal=A}}};t.default=i},"9af1":function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"serach"},[e("v-uni-view",{staticClass:"content",style:{"border-radius":A.radius+"px"}},[e("v-uni-view",{staticClass:"content-box",class:{center:2===A.mode},on:{click:function(t){t=A.$handleEvent(t),A.getFocus(t)}}},[e("v-uni-view",{staticClass:"iconfont iconsousuo"}),e("v-uni-input",{staticClass:"input",class:{center:!A.active&&2===A.mode},attrs:{placeholder:A.placeholder,"confirm-type":"search",focus:A.isFocus},on:{input:function(t){t=A.$handleEvent(t),A.inputChange(t)},confirm:function(t){t=A.$handleEvent(t),A.triggerConfirm(t)},focus:function(t){t=A.$handleEvent(t),A.focus(t)},blur:function(t){t=A.$handleEvent(t),A.blur(t)}},model:{value:A.inputVal,callback:function(t){A.inputVal=t},expression:"inputVal"}}),A.isDelShow?e("v-uni-text",{staticClass:"icon icon-del",on:{click:function(t){t.stopPropagation(),t=A.$handleEvent(t),A.clear(t)}}}):A._e()],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:A.active&&A.show&&"inside"===A.button||A.isDelShow&&"inside"===A.button,expression:"(active&&show&&button === 'inside')||(isDelShow && button === 'inside')"}],staticClass:"serachBtn",on:{click:function(t){t=A.$handleEvent(t),A.search(t)}}},[A._v("搜索")])],1),"outside"===A.button?e("v-uni-view",{staticClass:"button",class:{active:A.show||A.active},on:{click:function(t){t=A.$handleEvent(t),A.search(t)}}},[e("v-uni-view",{staticClass:"button-item"},[A._v(A._s(A.show?"搜索":A.searchName))])],1):A._e()],1)},n=[];e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return n}))},b5d0:function(A,t,e){"use strict";e.r(t);var i=e("76d9"),n=e.n(i);for(var a in i)"default"!==a&&function(A){e.d(t,A,(function(){return i[A]}))}(a);t["default"]=n.a},be80:function(A,t,e){"use strict";var i=e("60c8"),n=e.n(i);n.a},c958:function(A,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("386d");var n=i(e("219a")),a={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"iconai47",isShowKeywordList:!1}},onLoad:function(A){this.init(A)},components:{mSearch:n.default},methods:{init:function(A){var t=JSON.parse(A.search);this.defaultKeyword=t.hot_search_default,this.hotKeywordList=t.hot_search_list,this.loadOldKeyword()},blur:function(){uni.hideKeyboard()},loadOldKeyword:function(){var A=this;uni.getStorage({key:"OldKeys",success:function(t){var e=JSON.parse(t.data);A.oldKeywordList=e}})},setkeyword:function(A){this.keyword=A.keyword},oldDelete:function(){var A=this;uni.showModal({content:"确定清除历史搜索记录？",success:function(t){t.confirm?(A.oldKeywordList=[],uni.removeStorage({key:"OldKeys"})):t.cancel}})},hotToggle:function(){this.forbid="iconai47"==this.forbid?"iconyanjing":"iconai47"},doSearch:function(A){A=A||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=A,this.saveKeyword(A),this.$api.msg(A),uni.navigateTo({url:"/pages/product/list?keyword=".concat(A)})},saveKeyword:function(A){var t=this;uni.getStorage({key:"OldKeys",success:function(e){var i=JSON.parse(e.data),n=i.indexOf(A);-1==n?i.unshift(A):(i.splice(n,1),i.unshift(A)),i.length>10&&i.pop(),uni.setStorage({key:"OldKeys",data:JSON.stringify(i)}),t.oldKeywordList=i},fail:function(e){var i=[A];uni.setStorage({key:"OldKeys",data:JSON.stringify(i)}),t.oldKeywordList=i}})}}};t.default=a},d3fc:function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,'.serach[data-v-0340256a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;font-size:%?28?%}.serach .content[data-v-0340256a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?60?%;background:#fff;overflow:hidden;-webkit-transition:all .2s linear;transition:all .2s linear;border-radius:30px}.serach .content .content-box[data-v-0340256a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.serach .content .content-box .iconfont[data-v-0340256a]{color:grey;margin:0 %?6?% 0 %?12?%}.serach .content .content-box.center[data-v-0340256a]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.serach .content .content-box .input[data-v-0340256a]{width:100%;max-width:100%;line-height:%?60?%;height:%?60?%;-webkit-transition:all .2s linear;transition:all .2s linear}.serach .content .content-box .input.center[data-v-0340256a]{width:%?200?%}.serach .content .content-box .input.sub[data-v-0340256a]{width:auto;color:grey}.serach .content .serachBtn[data-v-0340256a]{height:100%;-webkit-flex-shrink:0;flex-shrink:0;padding:0 %?30?%;background:-webkit-linear-gradient(left,rgba(250,67,106,.7),rgba(250,67,106,.9));background:linear-gradient(90deg,rgba(250,67,106,.7),rgba(250,67,106,.9));line-height:%?60?%;color:#fff;-webkit-transition:all .3s;transition:all .3s}.serach .button[data-v-0340256a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:0;-webkit-transition:all .2s linear;transition:all .2s linear;white-space:nowrap;overflow:hidden}.serach .button.active[data-v-0340256a]{padding-left:%?15?%;width:%?100?%}@font-face{font-family:iconfont;src:url("data:application/x-font-woff;charset=utf-8;base64,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")}.icon[data-v-0340256a]{font-family:iconfont;font-size:%?32?%;font-style:normal;color:#999}',""]),A.exports=t},dbb5:function(A,t,e){"use strict";var i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"search-box"},[e("mSearch",{staticClass:"mSearch-input-box",attrs:{mode:2,button:"inside",placeholder:A.defaultKeyword||"请输入关键字"},on:{search:function(t){t=A.$handleEvent(t),A.doSearch(!1)},confirm:function(t){t=A.$handleEvent(t),A.doSearch(!1)}},model:{value:A.keyword,callback:function(t){A.keyword=t},expression:"keyword"}})],1),e("v-uni-view",{staticClass:"search-keyword",on:{touchstart:function(t){t=A.$handleEvent(t),A.blur(t)}}},[e("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:A.isShowKeywordList,expression:"isShowKeywordList"}],staticClass:"keyword-list-box",attrs:{"scroll-y":""}},A._l(A.keywordList,(function(t){return e("v-uni-view",{key:t.keyword,staticClass:"keyword-entry",attrs:{"hover-class":"keyword-entry-tap"}},[e("v-uni-view",{staticClass:"keyword-text",on:{click:function(e){e=A.$handleEvent(e),A.doSearch(t.keyword)}}},[e("v-uni-rich-text",{attrs:{nodes:t.htmlStr}})],1),e("v-uni-view",{staticClass:"keyword-img",on:{click:function(e){e=A.$handleEvent(e),A.setkeyword(t)}}},[e("v-uni-image",{attrs:{src:"/static/HM-search/back.png"}})],1)],1)})),1),e("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:!A.isShowKeywordList,expression:"!isShowKeywordList"}],staticClass:"keyword-box",attrs:{"scroll-y":""}},[A.oldKeywordList.length>0?e("v-uni-view",{staticClass:"keyword-block"},[e("v-uni-view",{staticClass:"keyword-list-header"},[e("v-uni-view",[A._v("历史搜索")]),e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont iconiconfontshanchu1",on:{click:function(t){t=A.$handleEvent(t),A.oldDelete(t)}}})],1)],1),e("v-uni-view",{staticClass:"keyword"},A._l(A.oldKeywordList,(function(t,i){return e("v-uni-view",{key:i,on:{click:function(e){e=A.$handleEvent(e),A.doSearch(t)}}},[A._v(A._s(t))])})),1)],1):A._e(),e("v-uni-view",{staticClass:"keyword-block"},[e("v-uni-view",{staticClass:"keyword-list-header"},[e("v-uni-view",[A._v("热门搜索")]),e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont",class:A.forbid,on:{click:function(t){t=A.$handleEvent(t),A.hotToggle(t)}}})],1)],1),"iconai47"==A.forbid?e("v-uni-view",{staticClass:"keyword"},A._l(A.hotKeywordList,(function(t,i){return e("v-uni-view",{key:i,on:{click:function(e){e=A.$handleEvent(e),A.doSearch(t)}}},[A._v(A._s(t))])})),1):e("v-uni-view",{staticClass:"hide-hot-tis"},[e("v-uni-view",[A._v("当前搜热门搜索已隐藏")])],1)],1)],1)],1)],1)},n=[];e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return n}))}}]);