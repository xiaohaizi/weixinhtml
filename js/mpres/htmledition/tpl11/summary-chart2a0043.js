define("statistics/menu_stat/summary/summary-chart.js",["statistics/chart/jquery-chart.js","statistics/menu_stat/summary/summary-state.js","statistics/common.js","biz_common/moment.js","statistics/menu_stat/summary/data-helper.js","statistics/menu_stat/summary/version-tree.js"],function(e,a){
"use strict";
function t(){
y.isCustom?r():n(),m();
}
function n(){
{
var e=[],a=[],t=y.timeSliceData,n=i();
B[y.index];
}
n.each(function(a){
e.push({
name:u(a.value),
yAxis:0,
dataFormat:1,
data:[]
});
}),b(y.beginDate,y.endDate,function(i){
a.push(i),n.each(function(a,n){
var r=e[n],u=s(t,i,a.value);
r.data.push({
name:i,
y:u
});
});
}),A.series=e,A.categories=a,k=j.createChart(A),k&&(k.legend.group.hide(),_(k.series,n));
}
function s(e,a,t){
var n=e[a].find(t.version,t.parent_id,t.id);
return n?n[y.index]:0;
}
function i(){
var e=y.totalData.versions[y.version],a=x.flattenVersionMenus(e);
return a.sort(function(e,a){
var t=e.value[y.index]*(D(e.value)?100:1),n=a.value[y.index]*(D(a.value)?100:1);
return n-t;
}),a.slice(0,5);
}
function r(){
h();
var e=[],a=[],t=y.timeSliceData,n=y.menu;
b(y.beginDate,y.endDate,function(s){
a.push(s);
var i=t[s].find(n.version,n.parent_id,n.id);
e.push({
name:s,
y:d(i)
});
}),A.series=[{
name:u(n),
yAxis:0,
dataFormat:1,
data:e
}],A.categories=a,j.createChart(A);
}
function u(e){
var a=e.secondary_menu_name?"-"+e.secondary_menu_name:"";
return(y.needCompare?e.version+"-":"")+e.primary_menu_name+a;
}
function m(){
y.noData&&(h(),p("div.nodata h4").html("暂无数据"));
}
function o(){
h();
{
var e=[],a=[],t=y.timeSliceData,n=c();
B[y.index];
}
n.each(function(a){
e.push({
name:u(a.value),
yAxis:0,
dataFormat:1,
data:[]
});
}),b(y.beginDate,y.endDate,function(i){
a.push(i),n.each(function(a,n){
var r=e[n],u=s(t,i,a.value);
r.data.push({
name:i,
y:u
});
});
}),A.title="",A.series=e,A.categories=a,j.createChart(A),m();
}
function c(){
return[{
name:l(y.menuOne),
value:y.menuOne
},{
name:l(y.menuTwo),
value:y.menuTwo
}];
}
function l(e){
return e.secondary_menu_name||e.primary_menu_name;
}
function d(e){
var a;
return a=e?"clk_av"===y.index?0===e.clk_uv?0:e.clk_pv/e.clk_uv:e[y.index]:0;
}
function _(e,a){
if(0!==a.length){
var t=p("#js_menus_table");
t.find(".js_version").text(y.version);
var n=t.find(".js_menus_data");
n.html("");
var s=[],i={};
a.each(function(e,a){
if(e=e.value,D(e)){
var t={
item:e,
sub:[],
color:w[a],
index:a
};
s.push(t),i[e.id]=t;
}else{
var n=jQuery.extend({},e);
n.color=w[a],n.index=a,i[e.parent_id].sub.push(n);
}
}),s.each(function(e){
n.append(S({
menu:e
}));
}),s.length===a.length?t.find(".js_second_menu").hide():t.find(".js_second_menu").show(),
f();
}
}
function v(e){
k.legend.allItems[e].setVisible();
}
function h(){
p("#js_menus_table").hide();
}
function f(){
p("#js_menus_table").show();
}
e("statistics/chart/jquery-chart.js");
var p=jQuery,y=e("statistics/menu_stat/summary/summary-state.js"),a={},j=p("#js_msg_chart"),g=e("statistics/common.js"),C=g,b=(C.log,
C.loopDay),x=(e("biz_common/moment.js"),e("statistics/menu_stat/summary/data-helper.js")),D=e("statistics/menu_stat/summary/version-tree.js").isParent,k=null,A={
autoStep:!0,
chartType:"area",
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
};
a.draw=function(){
y.needCompare?(A.isCompareSeries=1,o()):(A.isCompareSeries=0,t());
};
var B={
clk_uv:"菜单点击人数",
clk_pv:"菜单点击次数",
clk_av:"人均点击次数"
},S=template.compile(p("#js_menus_data_tpl").html()),w=["#44B549","#4A90E2","#EBCB6B","#BB7FB2","#DA7D2A"],F="#CCCCCC";
return p("body").on("click","li.js_menu_table_item",null,function(){
var e=p(this),a=+e.attr("data-index"),t=e.attr("data-color");
e.toggleClass("disable");
var n=e.hasClass("disable");
e.css({
color:n?F:"#000000"
}).find(".svg_color").css({
backgroundColor:n?F:t
}),v(a,n);
}),a;
});