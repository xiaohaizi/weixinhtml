define("statistics/menu_stat/top.js",["common/wx/top.js","biz_common/moment.js"],function(m){
"use strict";
var t=m("common/wx/top.js"),n=m("biz_common/moment.js"),o=(n().add("d",-1).format("YYYY-MM-DD"),
[{
id:"menu_stat",
name:"菜单分析",
url:"/misc/menuanalysis?"
}]);
return new t("#js_topTab",o);
});