define("statistics/menu_stat/summary/summary.js",["common/wx/report_util.js","statistics/menu_stat/summary/data-helper.js","statistics/menu_stat/summary/version-tab.js","biz_common/moment.js","statistics/components/tab-bar2.js","statistics/components/date-range.js","common/wx/Cgi.js","statistics/menu_stat/summary/summary-state.js","statistics/menu_stat/summary/summary-chart.js","statistics/common.js","statistics/menu_stat/top.js","biz_web/ui/dropdown.js","statistics/menu_stat/summary/version-tree.js"],function(t){
"use strict";
function e(t){
var e=[],a=[];
for(var n in t.versions)a.push(t.versions[n]);
return a.sort(function(t,e){
return+e.rawVersion-+t.rawVersion;
}),a.each(function(t){
for(var a in t.menus){
var n=t.menus[a],s=!1;
for(var i in n.menus){
var o=n.menus[i];
s=!0,e.push(o);
}
s||e.push(n);
}
}),e;
}
function a(){
f(),p(),c(),v(),s(),k(),n(),setTimeout(D),T();
}
function n(){
i(),z.draw(),m(W,L);
}
function s(t,e){
t=t||K.beginDate,e=e||K.endDate;
var a={
download:1,
begin_date:t,
end_date:e
};
K.needCompare&&(a.compare=1,a.button_id=K.menuOne.button_id,a.button_key=K.menuOne.button_key,
a.compare_button_id=K.menuTwo.button_id,a.compare_button_key=K.menuTwo.button_key);
var n="/misc/menuanalysis?";
for(var s in a)n+="&"+s+"="+a[s];
n=wx.url(n),A("#js_download_detail").attr("href",n);
}
function i(){
var t=o();
u(t);
}
function o(){
for(var t=K.timeSliceData,e=t[L],a=["clk_pv","clk_uv","clk_av"],n={},s=0,i=a.length;i>s;s++){
var o=a[s],u=e[o],c=t[q][o],m=t[H][o],l=t[X][o];
n[o]={
count:u,
day:r(u,c),
week:r(u,m),
month:r(u,l)
};
}
return n;
}
function r(t,e){
if(0==e)return"--";
var a=(t-e)/e*100;
return a%1==0?a:a.toFixed(1);
}
function u(t){
$("#js_keydata").html(template("js_key_data_tpl",t));
}
function c(){
if(K.needCompare||K.noData)return A("#js_menu_selection").hide();
A("#js_menu_selection").show(),K.isCustom=!1;
var t=K.totalData.versions[K.version];
new G({
container:"#js_menu_selection",
label:"Top5菜单",
data:E.flattenVersionMenus(t),
callback:function(t){
K.isCustom=!0,K.menu=t,z.draw();
}
});
}
function m(){
K.currentPage=1,Z=14,K.pageTotalCount=K.needCompare?2:K.detailData.length,l(),d(1);
}
function l(){
V.initPager({
total_count:K.pageTotalCount,
container:"#js_pagebar",
count:Z,
currentPage:K.currentPage,
callback:function(t){
t!=K.currentPage&&(K.currentPage=t,d(t));
}
});
}
function d(t){
function e(t){
t.versionRowspan=0,t.parentRowspan=0;
}
function a(t){
i[t.version]?i[t.version].row.versionRowspan++:(i[t.version]={
row:t,
parents:{}
},t.versionRowspan=1);
var e=i[t.version].parents;
if(e[t.parent_id])e[t.parent_id].row.parentRowspan++;else{
var a=I.isParent(t)?t.id:t.parent_id;
e[a]={
row:t
},t.parentRowspan=1;
}
}
if(K.needCompare)e(K.menuOne),e(K.menuTwo),K.currentDetail=[K.menuOne,K.menuTwo];else{
var n=(t-1)*Z,s=n+Z;
K.currentDetail=K.detailData.slice(n,s);
}
var i={};
K.currentDetail.each(function(t){
e(t),a(t);
}),_();
}
function _(){
var t=template("js_detail_item",{
data:K.currentDetail,
lastestVersion:se
}),e=A("#js_detail");
e.html(t),w(e);
}
function p(){
R.reset(K.totalData),A.extend(K,R.state);
}
function f(){
Q=new M({
name:"关键指标详解",
tabs:[{
text:"菜单点击次数",
index:"clk_pv"
},{
text:"菜单点击人数",
index:"clk_uv"
},{
text:"人均点击次数",
index:"clk_av"
}]
}),A("#js_tab_bar").prepend(Q.$el);
}
function v(){
C.initDateRange({
begintime:W,
endtime:L,
dropDom:"#js_date_filter_drop",
dateDom:"#js_date_range_drop",
callback:function(t,e){
te=!0,K.beginDate=K.drawBeginDate=t,K.endDate=K.drawEndDate=e,delete K.startDate,
delete K.startCompareDate,J.setDate({
startDate:t,
endDate:e
}),g();
}
});
}
function D(){
Q.on("tab-selected",function(t,e){
K.index=e.index,z.draw(),w();
}),R.on("version-change",function(){
A.extend(K,R.state),j(),c(),s(),z.draw(),m();
});
}
function j(){
K.needCompare?J.$el.hide():J.$el.show();
}
function w(){}
function b(t,e){
var a="/misc/menuanalysis?begin_date=%s&end_date=%s&f=json",n=a.sprintf(t,e);
return n;
}
function g(t){
var a=t?K.tableBeginDate:K.beginDate,n=t?K.tableEndDate:K.endDate,i=b(a,n);
y(),U([i],function(i){
var o=i.menu_summary.list||[];
K.noData=!o.length;
var i=E.construct(o,a,n);
t?K.detailData=e(i.totalData):(A.extend(K,i),K.detailData=e(i.totalData),p(),c(),
z.draw()),m(a,n),s(a,n),x();
},h);
}
function h(t,e,a){
if(0!==a.base_resp.ret)return O.show(a),void x();
var n=+new Date-t,s=N.reportKeys.LOAD_MENU_STAT_AJAX_KEY,i=N.ajaxReport;
i(s,n,wx.data.uin);
}
function y(){
ie.show();
}
function x(){
ie.hide();
}
function k(){
J=new S({
needCompare:!1,
startDate:W,
endDate:L
}),J.$el.find(".btn_default, .time_lable, .setup").remove(),jQuery("#js_table_date").html(J.$el),
J.on("date-change",function(t){
K.tableBeginDate=t.startDate,K.tableEndDate=t.endDate,g(!0);
});
}
function T(){
"0"===window.cgiData.load_done?$(".js_delay_info").show():$(".js_delay_info").hide();
}
var C=t("common/wx/report_util.js"),E=t("statistics/menu_stat/summary/data-helper.js"),R=t("statistics/menu_stat/summary/version-tab.js"),P=t("biz_common/moment.js"),M=t("statistics/components/tab-bar2.js"),S=t("statistics/components/date-range.js"),A=jQuery,O=t("common/wx/Cgi.js"),V=t("common/wx/report_util.js"),K=t("statistics/menu_stat/summary/summary-state.js"),z=t("statistics/menu_stat/summary/summary-chart.js"),N=t("statistics/common.js"),Y=N,U=(Y.log,
Y.mGet),B=(Y.loopDay,t("statistics/menu_stat/top.js")),G=t("biz_web/ui/dropdown.js"),I=t("statistics/menu_stat/summary/version-tree.js"),J=null;
B.selected("menu_stat");
var Q=(A("#js_actions"),null),F="YYYY-MM-DD",L=P().add("d",-1).format(F),W=P().add("d",-30).format(F),X=P().add("d",-31).format(F),q=P(L).add("d",-1).format(F),H=P(L).add("d",-7).format(F),Z=(P(L).subtract(1,"months").format(F),
100),te=!1,ee=E.construct(cgiData.list,X,L,X),ae=ee.timeSliceData,ne=ee.totalData;
A.extend(K,{
noData:!cgiData.list.length,
timeSliceData:ae,
totalData:ne,
beginDate:W,
endDate:L,
needCompare:!1,
pageSize:0,
currentPage:0,
detailData:e(ne),
currentDetail:null,
compareDetailData:null,
currentCompareDetail:null,
index:"clk_pv"
});
var se=K.detailData[0]?K.detailData[0].version:void 0;
R.lastestVersion=se,template.helper("keyPercent",function(t){
return"--"===t?"&nbsp;&nbsp;&nbsp;"+t:t>=0?'<i class="icon_up" title="上升"></i>%s%'.sprintf(t):'<i class="icon_down" title="下降"></i>%s%'.sprintf(-t);
}),a();
var ie=$("div.wrp_overview div.wrp_loading"),oe=$("div.help_content"),re=null;
A("div.ext_info.help i, div.help_content").mouseover(function(){
oe.show(),clearTimeout(re);
}),A("div.ext_info.help i, div.help_content").mouseout(function(){
clearTimeout(re),re=setTimeout(function(){
oe.hide();
},300);
}),N.help("#js_table_ask","#js_table_ask_content"),N.help("#js_versions_ask","#js_versions_ask_content"),
seajs.use("statistics/report.js",function(t){
t(N.logKeys.MENU_STAT_NETWORK_OVERTIME,N.logKeys.MENU_STAT_JS_OVERTIME,N.reportKeys.MENU_STAT_PAGE);
});
});