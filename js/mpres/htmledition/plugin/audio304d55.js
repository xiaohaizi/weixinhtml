define("media/plugin/audio.js",["common/wx/popup.js","tpl/media/plugin/audio.html.js","tpl/media/plugin/audioItem.html.js","common/wx/Cgi.js","biz_web/ui/checkbox.js","common/wx/media/audio.js","common/wx/pagebar.js","biz_common/moment.js","common/wx/Tips.js"],function(i){
"use strict";
function e(){
for(var i=0,e=r.length;e>i;i++){
var o=r[i];
o&&"function"==typeof o.stop&&o.stop();
}
}
function o(i,e,n){
a.get({
url:"/cgi-bin/filepage",
dataType:"json",
data:{
type:3,
begin:i,
count:e
},
mask:!1
},function(i){
if(0==i.base_resp.ret){
l=i.page_info.file_item;
var e=[];
l.each(function(i){
1==i.trans_state&&e.push({
name:i.name,
title:i.title||i.name,
update_time:s.unix(i.update_time).format("YYYY-MM-DD"),
play_length:i.play_length,
file_id:i.file_id,
voice_encode_fileid:i.voice_encode_fileid,
disabled:n&&i.play_length>6e4,
format_play_length:s.unix(i.play_length/1e3).format("mm:ss")
});
}),l=e;
var p=wx.T(t,{
list:l
});
u.find(".jsPluginAudioList").html(p),u.find(".jsPluginAudioRadio").checkbox(),n&&$(".jsAudioTips").show(),
u.find(".jsPluginAudioPlay").each(function(i,e){
var o=l[i];
o.selector="#"+$(e).attr("id"),o.source="file",r.push(new m($.extend({},o,{
qqmusictpl:!0
})));
}),c||(c=new d({
container:".jsPluginAudioPage",
totalItemsNum:i.page_info.file_cnt.voice_cnt,
callback:function(i){
o(10*(i.currentPage-1),10,n);
}
}));
}else a.show(i);
});
}
i("common/wx/popup.js");
var n=i("tpl/media/plugin/audio.html.js"),t=i("tpl/media/plugin/audioItem.html.js"),a=i("common/wx/Cgi.js");
i("biz_web/ui/checkbox.js");
var u,c,l,m=i("common/wx/media/audio.js"),d=i("common/wx/pagebar.js"),s=i("biz_common/moment.js"),p=i("common/wx/Tips.js"),r=[],f=function(){};
return window.openAudioPopup=function(i){
c=null,l=[],u=null,u=$(n).popup({
className:"align_edge audio_dialog",
width:"960",
title:"请选择语音",
buttons:[{
text:"确定",
click:function(){
var i=u.find(".jsPluginAudioRadio[checked=checked]").data("index");
return""===i||null===i||void 0===i?void p.err("请选择语音"):(e(),f(l&&l[i]),void this.remove());
},
type:"primary"
},{
text:"取消",
click:function(){
e(),this.remove();
}
}],
onHide:function(){
e(),this.remove();
}
}),o(0,10,i),$(".jsPluginAudioNew").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
});
},{
registerCb:function(i){
f=i;
}
};
});