define("statistics/webpage-stat/common.js",["biz_common/moment.js","common/wx/Cgi.js"],function(o,t){
"use strict";
function n(){
console.log.apply(console,arguments);
}
function e(o,t,n,e){
if(e)for(var r=t,m=+a(t).format("X"),s=+a(o).format("X");m>=s;)n(r),r=a(r).subtract(1,"days").format(i),
m=+a(r).format("X");else for(var r=o,m=+a(o).format("X"),s=+a(t).format("X");s>=m;)n(r),
r=a(r).add(1,"days").format(i),m=+a(r).format("X");
}
function r(o,t){
var n=$(t),e=null,r=[o,t].join(", ");
s(r).mouseover(function(){
n.show(),clearTimeout(e);
}),s(r).mouseout(function(){
clearTimeout(e),e=setTimeout(function(){
n.hide();
},300);
});
}
function m(o,t,n){
for(var e=1-o.length,r=[],m=!1,a=0,i=o.length;i>a;a++)!function(a,i){
f.get({
url:o[i],
success:function(o){
if(!m){
if(n&&n(a,i,o),0!==o.base_resp.ret)return void(m=!0);
e++,r[i]=o,1===e&&t&&t.apply(t,r);
}
}
});
}(+new Date,a);
}
var a=o("biz_common/moment.js"),t={},i="YYYY-MM-DD",s=jQuery,f=o("common/wx/Cgi.js");
return t.help=r,t.log=n,t.loopDay=e,t.mGet=m,t;
});