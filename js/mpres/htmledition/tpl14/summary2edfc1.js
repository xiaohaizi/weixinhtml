define("statistics/webpage-stat/summary/summary.js",["biz_common/moment.js","statistics/components/date-range2.js","biz_web/ui/dropdown.js","common/wx/Cgi.js","common/wx/report_util.js","common/wx/popover.js","statistics/webpage-stat/summary/summary-state.js","statistics/webpage-stat/summary/summary-chart.js","statistics/webpage-stat/common.js","statistics/common.js","statistics/webpage-stat/summary/summary-type-options.js"],function(t){
"use strict";
function e(){
a(),n(),s(),m(),o(),i();
}
function a(){
r(),d(),E.draw();
}
function n(){
x=new b({
container:"#js_filterType",
label:"页面访问量",
data:U,
callback:function(t,e){
M.filterType!==t&&(M.filterText=e,M.filterType=t,p());
}
});
}
function s(){
k=new j({
singleContainer:"#js_single",
needCompare:!1,
startDate:C,
endDate:L,
minValidDate:"1461949200"
}),k.on("date-change",function(t){
M.beginDate=t.startDate,M.endDate=t.endDate,o(),p();
});
}
function o(){
var t={
begin_date:M.beginDate,
end_date:M.endDate,
action:"download"
},e="/misc/webpageanalysis?";
for(var a in t)e+="&"+a+"="+t[a];
e=wx.url(e),D("#js_download_detail").attr("href",e);
}
function i(){
D("#js_download_detail").on("click",function(){
v.clickReport(v.reportKeys.USER_SUM_EXCEL);
});
}
function r(){
S.initPager({
total_count:M.pageTotalCount,
container:"#js_pagebar",
count:P,
currentPage:M.currentPage,
callback:function(t){
t!=M.currentPage&&(M.currentPage=t,p());
}
}),c();
}
function c(){
D("#js_pagebar a.page_prev").click(function(){
v.clickReport(v.reportKeys.USER_SUM_NAV_LEFT);
}),D("#js_pagebar a.page_next").click(function(){
v.clickReport(v.reportKeys.USER_SUM_NAV_RIGHT);
}),D("#js_pagebar a.page_go").click(function(){
v.clickReport(v.reportKeys.USER_SUM_NAV_JUMP);
});
}
function d(){
var t=template("js_detail_item",{
data:M.allList
}),e=D("#js_detail");
e.html(t);
}
function m(){
D(document).on("click","th.rank_area",null,function(){
var t=D(this),e=t.data("type");
e!==M.sortKey?(l(t),M.sortKey=e,M.desc=!1):M.desc=!M.desc,u(t,M.desc),p();
});
}
function l(t){
t.siblings("th").find("i").show();
}
function u(t,e){
e?(t.find("i.arrow_down").show(),t.find("i.arrow_up").hide()):(t.find("i.arrow_down").hide(),
t.find("i.arrow_up").show());
}
function _(){
var t="0";
"date"===M.sortKey?t="0":"pv"===M.sortKey?t="2":"uv"===M.sortKey&&(t="3");
var e=M.desc?"2":"1",a=(M.currentPage-1)*P,n=y(M.beginDate).format(Y),s=y(M.endDate).format(Y),o="/misc/webpageanalysis?action=listintfstat&begin_date=%s&end_date=%s&func_name=%s&order_key=%s&order_direction=%s&begin=%s&count=%s",i=o.sprintf(n,s,M.filterType,t,e,a,P);
return i;
}
function p(){
var t=_();
g(),K([t],function(t){
M.oneList=t.one_intf_stat_list,M.allList=t.all_intf_stat_list,M.pageTotalCount=t.total,
a(),w();
},f);
}
function f(t,e,a){
if(0!==a.base_resp.ret)return R.show(a),void w();
var n=+new Date-t,s=v.reportKeys.LOAD_USER_SUMMARY_DATA_AJAX_KEY,o=v.ajaxReport;
o(s,n,wx.data.uin);
}
function g(){
z.show();
}
function w(){
z.hide();
}
var y=t("biz_common/moment.js"),j=t("statistics/components/date-range2.js"),b=t("biz_web/ui/dropdown.js"),D=jQuery,R=t("common/wx/Cgi.js"),S=t("common/wx/report_util.js"),h=t("common/wx/popover.js"),M=t("statistics/webpage-stat/summary/summary-state.js"),E=t("statistics/webpage-stat/summary/summary-chart.js"),T=t("statistics/webpage-stat/common.js"),v=t("statistics/common.js"),K=(T.log,
T.mGet),U=t("statistics/webpage-stat/summary/summary-type-options.js"),k=null,x=null,A="YYYY-MM-DD",Y="YYYYMMDD",L=y().add("d",-1).format(A),C=y().add("d",-30).format(A),P=(y().add("d",-31).format(A),
y(L).add("d",-1).format(A),y(L).add("d",-7).format(A),y(L).subtract(1,"months").format(A),
14),V=window.cgiData;
D.extend(M,{
oneList:V.oneList,
allList:V.allList,
beginDate:C,
endDate:L,
needCompare:!1,
filterText:"页面访问量",
filterType:"config",
pageTotalCount:V.total,
pageSize:P,
currentPage:1,
sortKey:"date",
desc:!0
}),e(),new h({
dom:"#js_ask_trend",
content:"仅统计所有做了JSSDK config的页面",
place:"bottom",
margin:"center",
isToggle:!0
}).hide(),new h({
dom:"#js_table_ask",
content:"因部分用户客户端版本较旧，导致调用量统计有少量遗漏。",
place:"bottom",
margin:"center",
isToggle:!0
}).hide();
var z=$("div.stat_loading");
seajs.use("statistics/report.js",function(t){
t(v.logKeys.USER_SUMMARY_NETWORK_OVERTIME,v.logKeys.USER_SUMMARY_JS_OVERTIME,v.reportKeys.USER_SUMMARY_PAGE);
});
});