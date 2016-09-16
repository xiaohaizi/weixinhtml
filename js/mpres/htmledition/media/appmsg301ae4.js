define("common/wx/media/appmsg.js",["widget/media.css","common/wx/time.js","media/appmsg_temp_url.js","tpl/media/appmsg.html.js","common/qq/Class.js"],function(e){
"use strict";
e("widget/media.css");
var t=(wx.T,e("common/wx/time.js")),i=e("media/appmsg_temp_url.js"),a=e("tpl/media/appmsg.html.js"),m=e("common/qq/Class.js"),o=m.declare({
init:function(e){
if(e&&e.container){
e.data=e.data||$.extend({},e);
var m=e.data,o=m.multi_item||[],s=o.length,r=null,c=!0,d=[];
if(!(0>=s)){
r=o[0],r.completed=!0,r.title&&r.cover||(c=!1,r.completed=!1),r.cover&&(r.cover=r.cover.nogif());
for(var n=1;s>n;++n){
var l=o[n];
l.completed=!0,d.push(l),l.title&&l.cover||(c=!1,l.completed=!1),l.cover&&(l.cover=l.cover.nogif());
}
var p={
id:m.app_id,
type:e.type,
file_id:m.file_id,
time:m.create_time?t.timeFormat(m.create_time):"",
isMul:s>1,
first:r,
list:d,
completed:c,
token:wx.data.t,
showEdit:e.showEdit||!1,
showMask:e.showMask||!1
};
$(e.container).html(wx.T(a,p)).data("opt",e),this.renderData=p,i(e.container,".js_title a,.js_preview");
}
}
},
getData:function(){
return this.renderData;
}
});
return o;
});