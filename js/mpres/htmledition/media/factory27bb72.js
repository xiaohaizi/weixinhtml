define("common/wx/media/factory.js",["common/wx/media/img.js","common/wx/media/audio.js","common/wx/media/video.js","common/wx/media/appmsg.js","tpl/media/videocard.html.js","biz_common/utils/norefererimg.js","common/qq/emoji.js","tpl/media/cardmsg.html.js"],function(e,i,m){
"use strict";
var o=e("common/wx/media/img.js"),t=e("common/wx/media/audio.js"),n=e("common/wx/media/video.js"),r=e("common/wx/media/appmsg.js"),s=e("tpl/media/videocard.html.js"),c=e("biz_common/utils/norefererimg.js");
e("common/qq/emoji.js");
var d=e("tpl/media/cardmsg.html.js"),l={
1:function(e,i){
return $(e).html(i.content.emoji());
},
2:function(e,i){
return i.container=$(e),new o(i);
},
3:function(e,i){
return i.selector=$(e),i.source="file",new t(i);
},
4:function(e,i){
return i.selector=$(e),i.id=i.file_id,i.source="file",new n(i);
},
10:function(e,i){
return i.container=$(e),i.showMask=!1,new r(i);
},
11:function(e,i){
return i.container=$(e),i.showMask=!1,new r(i);
},
15:function(e,i){
return i.multi_item&&i.multi_item[0]&&(i.title=i.multi_item[0].title,i.digest=i.multi_item[0].digest),
i.selector=$(e),i.id=1e6*Math.random()|0,i.tpl="videomsg",i.for_selection=!1,i.for_operation=!1,
{
dom:$(e).html(wx.T(s,i)),
file_id:i.file_id,
id:i.id,
source:"file",
tpl:"videomsg",
type:"",
video_url:""
};
},
16:function(e,i){
$(e).html(template.compile(d)(i));
var m=$(e).find(".js_logourl");
m.length&&c({
img:m[0]
});
}
};
l[21]=l[15];
var a={
render:function(e,i){
l[i.type]&&$(e).length>0&&l[i.type]($(e).html(""),i);
},
itemRender:l
};
m.exports=a;
});