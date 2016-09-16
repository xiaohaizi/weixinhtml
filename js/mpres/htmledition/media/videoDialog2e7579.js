define("common/wx/media/videoDialog.js",["common/wx/popup.js","page/smallvideo/dialog_select_video.css","widget/media/media_dialog.css","common/wx/top.js","common/wx/Tips.js","common/wx/media/video.js","common/wx/pagebar.js","common/wx/time.js","media/media_cgi.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/videocard.html.js"],function(e){
"use strict";
function i(e){
return e&&e.substr&&"04"==e.substr(1,2)?!0:!1;
}
function t(e,i,t,o){
e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/^http:/,"https:"),e=e.replace(/^v\.qq\.com/,"https://v.qq.com"),
(-1!=e.indexOf("http://v.qq.com")||-1!=e.indexOf("https://v.qq.com"))&&d(e,i,t,o);
}
function o(e,i){
var i=i||document.location.toString(),t=e+"=",o=i.indexOf(t);
if(-1!=o){
var n=i.indexOf("&",o),d=i.indexOf("?",o);
return-1!=d&&(-1==n||n>d)&&(n=d),d=i.indexOf("#",o),-1!=d&&(-1==n||n>d)&&(n=d),-1==n?i.substring(o+t.length):i.substring(o+t.length,n);
}
return"";
}
function n(e){
e=e||window.location.toString();
var i,t=o("vid",e);
return t||(i=e.match(/\/\w{15}\/(\w+)\.html/))&&(t=i[1]),t||((i=e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/))?t=i[1]:(i=e.match(/\/(page|play)\/+(\w{11})\.html/))&&(t=i[2])),
t||(i=e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/))&&(t=i[1]),encodeURIComponent(t);
}
function d(e,i,t,o){
var d,s,a="",r=t.width,m=t.height;
if(d=e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)")))a=encodeURIComponent(d[2]),
-1!=a.indexOf("_")&&(a=a.split("_")[0]),/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),
t.vid=a,s="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+r+"&height="+m+"&auto=0",
i(s,t);else if((d=e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html")))||(d=e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))){
var l=encodeURIComponent(d[2]),c="https://data.video.qq.com/fcgi-bin/data?tid=554&appid=20001184&appkey=85a707e3a07cc44d&otype=json&idlist="+l,_=document.getElementsByTagName("head")[0],p=document.createElement("script");
p.type="text/javascript",p.src=c,p.async=!0,void 0!==p.onreadystatechange?p.onreadystatechange=function(){
if("loaded"==p.readyState)try{
a=QZOutputJson.results[0].fields.video_ids[0],-1!=a.indexOf("_")&&(a=a.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),t.vid=a,s="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+r+"&height="+m+"&auto=0",
i(s,t);
}catch(o){}
}:p.onload=function(){
try{
a=QZOutputJson.results[0].fields.video_ids[0],-1!=a.indexOf("_")&&(a=a.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),t.vid=a,s="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+r+"&height="+m+"&auto=0",
i(s,t);
}catch(o){}
},_.appendChild(p);
}else a=n(e),""!=a?(-1!=a.indexOf("_")&&(a=a.split("_")[0]),/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),
t.vid=a,s="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+r+"&height="+m+"&auto=0",
i(s,t)):!!o&&o(-1);
}
e("common/wx/popup.js"),e("page/smallvideo/dialog_select_video.css"),e("widget/media/media_dialog.css");
var s=e("common/wx/top.js"),a=e("common/wx/Tips.js"),r=e("common/wx/media/video.js"),m=e("common/wx/pagebar.js"),l=e("common/wx/time.js"),c=e("media/media_cgi.js"),_=e("tpl/media/dialog/videomsg_layout.html.js"),p=e("tpl/media/videocard.html.js"),v=15,f=21,u=0,h={};
h[v]="video_msg_cnt",h[f]="short_video_cnt";
var g=function(e,i){
var t=$.extend({},i.multi_item?i.multi_item[0]:i);
t.selector=e,t.id=i.app_id,t.app_id=i.app_id,t.tpl="videomsg",t.for_selection=1!=t.is_new_video?!0:3==t.status,
t.for_transfer=!!t.content,t.hide_transfer=!!t.content,t.video_id=t.content,t.source="file",
1==t.is_new_video?(t.time=i.create_time?l.timeFormat(i.create_time):"",t.before_original_video=i.create_time<1453914e3?1:0,
e.html(wx.T(p,t))):(t.create_time=i.create_time,t.img_url=i.img_url,new r(t)),$("#wxVideoBox"+t.id).data("opt",t);
},w=548,j=280,x=function(e){
console.log(e),this.scene=e.scene||"default",this.onOK=e.onOK,this.can_use_shortvideo=e.can_use_shortvideo,
this.can_use_txvideo=e.can_use_txvideo,this.create();
},b={
create:function(){
var e=this,o=$.parseHTML(wx.T(_,{
scene:e.scene,
token:wx.data.t
}));
e.dialog&&e.dialog.popup("remove"),e.dialog=$(o[0]).popup({
title:"选择视频",
className:"dialog_select_video",
width:960,
onOK:function(){
var o=this,n=e.$dom.find(".js_top.selected").data("id"),d=e.$dom.find(".Js_videomsg.selected").data("opt")||e.$dom.find(".Js_videomsg.selected").parent().data("opt"),s=e.$dom.find(".js_video_txurl").val();
if(n&&d&&1==d.is_new_video&&3!=d.status)return a.err("该视频目前无法被选择，请选择其它视频"),!0;
if(n&&d&&0==d.is_new_video&&(0!=d.is_new_video||!d.content_url))return a.err("该视频转码未完成，请选择其它视频"),
!0;
if(n){
if(!d)return a.err("请选择视频"),!0;
if(e.onOK&&!e.onOK(n,d))return!0;
o.remove(),e.dialog=null;
}else{
if(!s)return a.err("请输入视频网址"),!0;
if(-1==s.indexOf("v.qq.com/"))return a.err("请输入腾讯视频网址"),!0;
var r=!1;
if(t(s,function(t,d){
if(0==t.indexOf("http://v.qq.com/")||0==t.indexOf("https://v.qq.com/")){
var s=t.match(/[\?&]vid\=([^&]*)/);
if(null!=s&&s[1]){
var m=s[1];
if(i(m))return a.err("该网址为腾讯微博视频网址，此处引用视频只支持腾讯视频"),r=!0,!0;
var l=e.$dom.find(".js_btn");
m?(l.attr("disabled",!0),$.ajax({
url:wx.url("/cgi-bin/registertopic?id="+m+"&type=2"),
type:"post",
dataType:"json",
success:function(i){
i&&i.base_resp&&0==i.base_resp.ret?(d=$.extend({
url:t
},d),e.onOK&&e.onOK(n,d),o.remove(),e.dialog=null):a.err("系统繁忙，请稍后再试");
},
error:function(){
a.err("系统繁忙，请稍后再试");
},
complete:function(){
l.attr("disabled",!1);
}
})):a.err("无效视频地址");
}else a.err("无效视频地址");
r=!0;
}
return r?!0:(d=$.extend({
url:t
},d),e.onOK&&e.onOK(n,d),o.remove(),void(e.dialog=null));
},{
width:500,
height:375,
align:"none"
},function(){
r=!0,a.err("该网址存在错误，请填写正确的腾讯视频网址");
}),r)return!0;
}
},
onCancel:function(){
this.remove(),e.dialog=null;
},
onHide:function(){
this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init(),e.dialog.popup("resetPosition");
},
init:function(){
var e=this,i=e.can_use_shortvideo?[{
name:"小视频",
id:f
}]:[];
"ueditor"==e.scene?(u=1,i.unshift({
name:"视频网址"
}),e.initTencentVideo()):(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10)),"ueditor"==e.scene&&1==e.can_use_txvideo?(i.unshift({
name:"视频",
id:v
}),e.getList(v,0,10),e.$dom.find(".js_video_tencent").hide()):$(".js_video_status").find(".frm_tips").html("支持腾讯视频"),
e.tab=new s(e.$dom.find(".js_videotab"),i),e.tab.selected(0),e.tab.dom.find("a").on("click",function(e){
e.preventDefault();
}),e.$dom.on("click",".js_top",function(){
var i=$(this).data("id");
e.$dom.find(".js_video_status").hide(),e.$dom.find(".js_video_create").hide(),e.$dom.find(".js_pagebar").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),i?(i==v&&e.$dom.find(".js_video_create").show(),
e.getList(i,0,10)):e.$dom.find(".js_video_tencent").show(),e.tab.selected($(this).data("index"));
}),e.$dom.on("click",".Js_videomsg",function(){
e.$dom.find(".Js_videomsg.selected").removeClass("selected"),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
$(this).addClass("selected");
}),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),e.$dom.on("mousewheel","#js_videomsg_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll","#js_videomsg_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initTencentVideo:function(){
var e=this;
e.$dom.find(".js_video_loading").hide(),e.$dom.find(".js_video_tencent").show(),
e.$dom.find(".js_video_txurl").on("input propertychange",function(){
var o=$(this).val();
o?(e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),t(o,function(t){
var o=t.match(/[\?&]vid\=([^&]*)/);
if(null!=o&&o[1]){
var n=o[1];
if(i(n))return a.err("该网址为腾讯微博视频网址，此处引用视频只支持腾讯视频"),!0;
}
var d="<iframe height="+j+" width="+w+' frameborder=0 src="'+t+'" allowfullscreen></iframe>';
e.$dom.find(".js_video_preview").html(d),e.dialog.popup("resetPosition");
},{
width:w,
height:j
})):e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled");
});
},
initPagebar:function(e,i,t){
var o=this,n=e/i+1;
return i>=t?void o.$dom.find(".js_pagebar").hide():void new m({
container:o.$dom.find(".js_pagebar").show(),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:t,
callback:function(t){
var d=t.currentPage,s=o.$dom.find(".js_top.selected").data("id");
d!=n&&s&&(e=i*--d,o.getList(s,e,i));
}
});
},
getList:function(e,i,t){
var o=this,n=e==v?c.appmsg:c;
o.$dom.find(".js_video_content").hide(),o.$dom.find(".js_video_loading").show(),
n.getList(e,i,t,function(n){
if(o.dialog&&e==o.$dom.find(".js_top.selected").data("id")){
var d=n.file_item||n.item,s=o.$dom.find("#js_videomsg_list").find(".inner").empty();
d.length?(d.each(function(e,i){
var t=s.eq(i%2),o=$('<div id="appmsg%s"></div>'.sprintf(e.app_id||e.file_id),t).appendTo(t);
g(o,e);
}),o.$dom.find(".js_video_content").show(),o.dialog.popup("resetPosition")):o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e==f?"暂无素材<br />（素材来源：通过微信用户上传给公众帐号）":"暂无素材"),
o.$dom.find(".js_video_loading").hide(),o.initPagebar(i,t,n.file_cnt[h[e]]||n.file_cnt.video_cnt);
}
},"",u);
}
};
return $.extend(x.prototype,b),x;
});