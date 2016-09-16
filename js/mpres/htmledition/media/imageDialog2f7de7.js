define("common/wx/media/imageDialog.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/pagebar.js","biz_web/utils/upload.js","common/wx/tooltips.js","tpl/media/dialog/image_layout.html.js","tpl/media/dialog/image_list.html.js","tpl/media/dialog/image_group.html.js","tpl/media/dialog/image_water.html.js","page/media/dialog_img_pick.css"],function(e){
"use strict";
var i=e("common/wx/Cgi.js"),t=e("common/wx/Tips.js"),n=(e("common/wx/popup.js"),
e("common/wx/pagebar.js")),o=e("biz_web/utils/upload.js"),a=e("common/wx/tooltips.js"),r=e("tpl/media/dialog/image_layout.html.js"),s=e("tpl/media/dialog/image_list.html.js"),l=e("tpl/media/dialog/image_group.html.js"),d=e("tpl/media/dialog/image_water.html.js"),c=(template.render,
template.compile(l)),g=template.compile(s);
e("page/media/dialog_img_pick.css");
var p=function(e){
return new u(e);
},u=function(e){
this.options=e,this.events=[],this.imgArr=[],this.converting=0,this.fromUpload=[],
m.init.call(this);
},m={
init:function(){
var e=this,i=e.options=$.extend(!0,{
tpl:r,
title:"选择图片",
scene:"cdn",
maxSelect:1,
perPage:10,
group:1,
onOK:null,
onCancel:null
},e.options);
i.tpl=template.compile(i.tpl)(i),e.on("ok",i.onOK),e.on("cancel",i.onCancel),e.on("hide",i.onHide),
e.dialog=$(i.tpl.trim()).popup({
title:i.title,
className:"img_dialog_wrp",
width:846,
buttons:[{
text:"确定",
type:"disabled",
click:function(){
var n=this.get().find(".js_btn").eq(0).parent();
return n.hasClass("btn_disabled")?void t.err("请选择图片"):(e.popup=this,$.each(e.imgArr,function(i,t){
t.source=-1!=e.fromUpload.indexOf(t.file_id+"")?"upload":"lib";
}),void("cdn"==i.scene&&e.converting>0?(n.btn(!1),e.on("converted",function(){
0==e.converting&&(e.trigger("ok",e.imgArr||[]),n.btn(!0));
})):e.trigger("ok",e.imgArr||[])));
}
},{
text:"取消",
click:function(){
e.trigger("cancel"),this.hide();
}
}],
onHide:function(){
e.trigger("hide");
}
}),e.dialog.popup("get").find(".js_loading").show(),f.getImagesByGroupId({
group_id:i.group,
count:i.perPage
},function(t){
if(e.dialog){
var n=t.page_info;
n.scene=i.scene,n.group=i.group;
var o=e.dialog.popup("get"),a=c(n);
o.find(".js_loading").hide(),o.find(".js_group").append(a).find(".js_total").text("(%s)".sprintf(n.file_cnt.img_cnt)),
m.renderImageList(o.find(".js_list"),n,e.imgArr),m.initEvent.call(e,t),m.initWater.call(e,n),
m.initPageBar.call(e,n,i.group),e.dialog.popup("resetPosition");
}
}),m.initUpload.call(e,i.group);
},
initEvent:function(){
var e=this,i=e.dialog.popup("get"),n=e.options;
i.on("click",".js_imageitem",function(){
var o,a=$(this),r=a.find("label"),s=i.find(".js_btn_p").eq(0),l=a.data("url"),d=a.data("id"),c=a.data("oristatus"),g=a.data("format");
r.hasClass("selected")?(l||e.converting--,r.removeClass("selected"),o=_.indexOf(e.imgArr,d),
o>=0&&e.imgArr.splice(o,1),i.find(".js_selected").text(e.imgArr.length)):1==n.maxSelect?(l||(e.converting=1),
r.addClass("selected"),a.siblings().find("label").removeClass("selected"),e.imgArr=[{
url:l,
file_id:d,
format:g,
copyright_status:c
}],i.find(".js_selected").text(e.imgArr.length)):n.maxSelect>e.imgArr.length?(l||e.converting++,
r.addClass("selected"),e.imgArr.push({
url:l,
file_id:d,
format:g,
copyright_status:c
}),i.find(".js_selected").text(e.imgArr.length)):t.err("最多可选%s张".sprintf(n.maxSelect)),
e.imgArr.length>0?s.enable().addClass("btn_primary"):s.disable(),"cdn"==n.scene&&r.hasClass("selected")&&!l&&f.getCdnUrlByFileId({
file_id:d,
group_id:i.find(".js_groupitem.selected").data("groupid")
},function(i){
0==i.errcode?(e.converting--,a.data("url",i.url),o=_.indexOf(e.imgArr,d),o>=0&&(e.imgArr[o].url=i.url),
e.trigger("converted")):(t.err("转存失败"),a.click());
});
}),i.on("click",".js_groupitem",function(t,o){
var a=$(this),r=i.find(".js_list"),s=i.find(".js_loading"),l=i.find(".js_pagebar"),d=a.data("groupid");
a.hasClass("selected")||(a.addClass("selected").siblings(".selected").removeClass("selected"),
$("#js_imageupload").data("groupid",d),r.hide(),l.hide(),s.show(),f.getImagesByGroupId({
group_id:d,
count:n.perPage
},function(t){
if(e.dialog&&d==i.find(".js_groupitem.selected").data("groupid")){
t=t.page_info,t.scene=n.scene,s.hide(),l.show(),m.renderImageList(r,t,e.imgArr),
m.initPageBar.call(e,t,d),m.initUpload.call(e);
for(var a=0;o&&"upload"==o.source&&a<o.count;++a)r.children().eq(a).click();
}
}));
});
},
initPageBar:function(e,i){
var t=this,o=t.dialog.popup("get"),a=t.options;
m.pagebar&&m.pagebar.destroy();
var r=0;
return 0==i?r=e.file_cnt.img_cnt:e.file_group_list.file_group.each(function(e){
e.id==i&&(r=e.count);
}),a.perPage>=r?void o.find(".js_pagebar").empty():void(m.pagebar=new n({
container:o.find(".js_pagebar"),
perPage:a.perPage,
initShowPage:1,
totalItemsNum:r,
first:!1,
last:!1,
isSimple:!0,
callback:function(e){
var i=o.find(".js_groupitem.selected").data("groupid"),n=o.find(".js_list"),r=o.find(".js_loading"),s=o.find(".js_pagebar");
n.hide(),s.hide(),r.show(),f.getImagesByGroupId({
group_id:i,
begin:e.perPage*(e.currentPage-1),
count:a.perPage
},function(e){
e=e.page_info,e.scene=a.scene,r.hide(),s.show(),m.renderImageList(n,e,t.imgArr);
});
}
}));
},
initUpload:function(e){
var i=this,n=i.dialog.popup("get"),a=n.find(".js_imageupload"),r="js_imageupload"+Math.random().toString().substr(2),s=n.find(".js_groupitem.selected").data("groupid")||e||1,l=i.options;
a.attr("id",r).off().children().remove(),o.uploadImageLibFile({
container:"#"+r,
only_cdn:l.only_cdn,
multi:!0,
type:2,
scene:l.uploadScene,
doublewrite:!0,
groupid:s,
onComplete:function(e,n,o,a){
0==a.base_resp.ret&&t.suc("上传成功"),i.fromUpload.push(a.content);
},
onAllComplete:function(e,i){
var t,o=n.find(".js_groupitem.selected");
i.filesUploaded>0&&(t=+o.find("span").text(),!l.doselected||l.doselected&&i.filesUploaded<=1*l.completeUploadMinSelectNum?o.removeClass("selected").trigger("click",{
source:"upload",
count:i.filesUploaded
}):o.removeClass("selected").trigger("click",{
source:"upload",
count:0
}),o.find("span").text(t+i.filesUploaded));
},
showError:!0
});
},
initWater:function(e){
var i=this,t=i.options,n=i.dialog.popup("get"),o=e.watermark_status,r=template.compile(d)({
status:o,
set_water_url:wx.url("/cgi-bin/settingpage?t=setting/function&action=function&set_water=1")
});
n.find(".js_water").text((t.desc?"，":"")+(3==o?"已关闭":"已开启")+"图片水印"),new a({
container:n.find(".js_water_tips"),
content:r,
parentClass:"js_water img_water",
position:{
left:-138,
top:2
},
reposition:!0,
type:"hover"
});
},
renderImageList:function(e,i,t){
i.file_item.each(function(e){
e.img_url=e.cdn_url?e.cdn_url:wx.url("/cgi-bin/getimgdata?mode=small&source=file&fileId=%s".sprintf(e.file_id)),
-1!=_.indexOf(t,e.file_id)&&(e.selected=1);
}),e.html(g(i)).show();
var n=0,o=0,a=28308,r=28308,s=9,l=10,d=0,c=117,p=$(".js_pic"),u=p.length;
p.each(function(){
var e=$(this);
e.on("error",function(){
++n,++d,d===u&&((new Image).src="/mp/jsmonitor?idkey="+a+"_"+s+"_"+n+";"+r+"_"+l+"_"+o);
}),e.on("load",function(){
++o,++d;
var i=parseInt(e.css("width")),t=parseInt(e.css("height"));
t>i?e.css("width",c):e.css("height",c),d===u&&((new Image).src="/mp/jsmonitor?idkey="+a+"_"+s+"_"+n+";"+r+"_"+l+"_"+o);
}),e.attr("src",e.attr("data-src"));
});
}
},f={
getImagesByGroupId:function(e,t){
e=$.extend({
group_id:1,
begin:0,
count:8,
type:2
},e),i.get({
url:wx.url("/cgi-bin/filepage"),
data:e,
mask:!1
},function(e){
0!=e.base_resp.ret?i.show(e):t(e);
});
},
getCdnUrlByFileId:function(e,t){
e.group_id=e.group_id||1,i.post({
url:wx.url("/cgi-bin/uploadimg2cdn?action=duplicate"),
data:e,
mask:!1
},function(e){
t(e);
});
}
},_={
indexOf:function(e,i){
for(var t=0,n=e.length;n>t;++t)if(e[t].file_id==i)return t;
return-1;
}
},h={
on:function(e,i){
if(i){
var t=this.events;
return t[e]=t[e]||[],t[e].push(i),this;
}
},
trigger:function(e){
var i=this,t=arguments,n=i.events[e];
return n?($.each(n,function(e,n){
n.apply(i,Array.prototype.slice.call(t,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
this.dialog.popup("remove"),this.dialog=null;
}
};
return $.extend(u.prototype,h),p;
});