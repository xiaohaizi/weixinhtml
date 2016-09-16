define("statistics/user_stat/attr/attr.js",["statistics/user_stat/top.js","statistics/user_stat/attr/attr-state.js","statistics/user_stat/attr/attr-bars.js","statistics/user_stat/attr/attr-provinces.js","statistics/user_stat/attr/attr-cities.js","statistics/user_stat/attr/attr-types.js","statistics/user_stat/attr/attr-table.js","statistics/user_stat/common.js","statistics/common.js"],function(t){
"use strict";
function s(){
a(),_.draw(),l.draw(),v.draw(),d.draw(),g.draw();
}
function a(){
u.rawData=window.cgiData.list[E]||{
devices:[],
genders:[],
langs:[],
platforms:[],
regions:[]
},i(),l.initState(),v.initState(),d.initState(),g.initState();
}
function i(){
var t=window.cgiData.list[E];
if(!t)return void r();
for(var s=t.regions,a=0,i=s.length;i>a;a++){
var n=s[a].region,c=s[a].count;
R+=c,n.region_id.startsWith("gw")||("-1"===n.parent_region_id?e(n,c):o(n,c));
}
h.all.cities=w,h.all.count=R,m.sort(function(t,s){
if("all"===t.value)var a=0;else var a=+t.value;
if("all"===s.value)var i=0;else var i=+s.value;
return a-i;
}),u.province.data=m,u.provincesData=m,u.citiesData=w,u.totalCount=R;
}
function r(){
f("#no_data_prompt").show();
}
function e(t,s){
var a=h[t.region_id]||{
count:0,
cities:[]
};
return a.count+=s,a.name=t.region_name,a.value=t.region_id,h[t.region_id]=a,+a.value<=15&&n(a,s),
"null"===t.region_id?(w.push(a),u.unknownRegion=a):void m.push(a);
}
function n(t,s){
0!==s&&(t.cities.push({
name:t.name,
count:s
}),w.push(t));
}
function o(t,s){
if(t.region_id){
var a=t.parent_region_id,i=null;
i=h[a]?h[a]:h[a]={
count:0,
cities:[]
},i.count+=s;
var r={
name:t.region_name,
count:s
};
i.cities.push(r),w.push(r);
}
}
var c=t("statistics/user_stat/top.js"),u=t("statistics/user_stat/attr/attr-state.js"),_=t("statistics/user_stat/attr/attr-bars.js"),l=t("statistics/user_stat/attr/attr-provinces.js"),v=t("statistics/user_stat/attr/attr-cities.js"),d=t("statistics/user_stat/attr/attr-types.js"),g=t("statistics/user_stat/attr/attr-table.js"),p=t("statistics/user_stat/common.js"),j=t("statistics/common.js"),f=jQuery,m=[],w=[],h=u.provincesMap={},R=0,E=cgiData.list?window.cgiData.list.length-1:0;
c.selected("user_attr"),s(),p.help("#js_ask i.ask","#js_ask div.help_content"),seajs.use("statistics/report.js",function(t){
t(j.logKeys.USER_ATTR_NETWORK_OVERTIME,j.logKeys.USER_ATTR_JS_OVERTIME,j.reportKeys.USER_ATTR_PAGE);
});
});