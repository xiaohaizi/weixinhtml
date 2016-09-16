define("statistics/webpage-stat/summary/summary-chart.js",["statistics/chart/jquery-chart.js","statistics/webpage-stat/summary/summary-state.js","statistics/webpage-stat/common.js","biz_common/moment.js"],function(t,a){
"use strict";
function s(){
for(var t=[],a=[],s={},i=(r.oneList,0),n=r.oneList.length;n>i;i++){
var u=r.oneList[i];
s[u.date]=u;
}
o(r.beginDate,r.endDate,function(e){
a.push(e);
var i=s[e]?s[e].pv:0;
t.push({
name:e,
y:i
});
}),c.series=[{
name:"JSSDK: "+r.filterText+("config"===r.filterType?"":"调用量"),
yAxis:0,
dataFormat:1,
data:t
}],c.categories=a,m.createChart(c),e();
}
function e(){
i("div.nodata h4").html("暂无数据");
}
t("statistics/chart/jquery-chart.js");
var i=jQuery,r=t("statistics/webpage-stat/summary/summary-state.js"),a={},m=i("#js_msg_chart"),n=t("statistics/webpage-stat/common.js"),o=(n.log,
n.loopDay),c=(t("biz_common/moment.js"),{
autoStep:!0,
chartType:"area",
title:"",
height:300,
isCompareSeries:0,
dataFormat:"1",
labelFormat:0,
enableLegend:!0,
theme:"wechat",
chartOptions:{
yAxis:{
min:null
}
}
});
return a.draw=function(){
c.isCompareSeries=0,s();
},a;
});