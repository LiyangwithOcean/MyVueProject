webpackJsonp([7],{197:function(t,e,i){"use strict";function s(t){l||i(231)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(233),a=i.n(n),c=i(234),l=!1,o=i(5),u=s,r=o(a.a,c.a,!1,u,"data-v-b3c7bbcc",null);r.options.__file="src\\components\\news\\newslist.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=r.exports},205:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={apihost:"http://vue.studyit.io/"}},231:function(t,e,i){var s=i(232);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(6)("af7c08c0",s,!1)},232:function(t,e,i){e=t.exports=i(3)(void 0),e.push([t.i,"\n.mui-table-view-cell[data-v-b3c7bbcc]{\n    height: 80px;\n}\n.mui-table-view .mui-media-object[data-v-b3c7bbcc]{\n    height:65px;\n    max-width: 65px;\n}\nimg[data-v-b3c7bbcc]{\n    width: 100%;\n    height: 100%;\n}\n.titleStyle[data-v-b3c7bbcc]{\n    font-size: 14px;\n    color: gray;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.mui-ellipsis[data-v-b3c7bbcc]{\n    color: #0094ff;\n    font-size: 12px;\n    margin-top: 25px;\n    display: flex;\n    justify-content: space-between;\n}\n",""])},233:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(205),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{newsList:[],firstInTime:0}},created:function(){this.getNewsListData(),this.firstInTime=new Date-0},methods:{getNewsListData:function(){var t=this,e=n.default.apihost+"api/getnewslist";this.$axios.get(e).then(function(e){t.newsList=e.data.message})}}}},234:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"mui-table-view"},t._l(t.newsList,function(e){return i("li",{key:e.id,staticClass:"mui-table-view-cell mui-media"},[i("router-link",{attrs:{to:"/news/newsinfo/"+e.id}},[i("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:e.img_url}}),t._v(" "),i("div",{staticClass:"mui-media-body"},[i("p",{staticClass:"titleStyle"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"mui-ellipsis"},[i("span",[t._v(t._s(t._f("fmtDate")(e.add_time,"YYYY-MM-DD HH:mm")))]),t._v(" "),i("span",[t._v("点击数"+t._s(e.click)+"次")])])])])],1)}))])},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};e.a=a}});