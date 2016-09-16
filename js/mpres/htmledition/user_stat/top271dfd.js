define("statistics/user_stat/top.js",["common/wx/top.js","biz_common/moment.js"],function(s){
"use strict";
var t=s("common/wx/top.js"),e=s("biz_common/moment.js"),n=e().add("d",-1).format("YYYY-MM-DD"),a=[{
id:"user_stat",
name:"用户增长",
url: "/misc/useranalysis-"
},{
id:"user_attr",
name:"用户属性",
url: "/misc/useranalysis-action=attr&begin_date=2016-09-14&end_date=2016-09-14"
}];
return new t("#js_topTab",a);
});