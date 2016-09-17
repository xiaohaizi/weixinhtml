define("statistics/article/top.js",["common/wx/top.js","biz_common/moment.js"],function(a){
"use strict";
var t=a("common/wx/top.js"),s=a("biz_common/moment.js"),i=(s().add("d",-1).format("YYYY-MM-DD"),
[{
id:"article_detail",
name:"单篇图文",
url:"/misc/appmsganalysis-action=all"
},{
id:"article_analyse",
name:"全部图文",
url:"/misc/appmsganalysis-action=report"
}]);
return new t("#js_topTab",i);
});