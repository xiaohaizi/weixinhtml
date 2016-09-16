define("mass/list.js",["common/qq/emoji.js","common/wx/popup.js","common/qq/mask.js","common/wx/pagebar.js","common/wx/Tips.js","common/wx/time.js","common/wx/media/img.js","common/wx/media/audio.js","common/wx/media/video.js","tpl/media/card_ticket.html.js","tpl/media/word.html.js","cardticket/parse_data.js","common/wx/media/idCard.js","common/wx/media/simpleAppmsg.js","common/wx/media/multipleAppmsg.js","message/message_cgi.js","common/wx/tooltips.js","common/wx/Cgi.js","biz_common/moment.js","tpl/media/simple_videomsg_new.html.js","common/wx/top.js","biz_web/ui/checkbox.js","common/wx/popover.js"],function(e){
"use strict";
function t(e){
var t=e.multi_item&&e.multi_item.length>1;
e.multi_item.each(function(s){
s.appmsg_cover=s.cover?s.cover.nogif():wx.url("/cgi-bin/getimgdata")+"&mode=small&source=%s&msgid=%s&fileId=%s".sprintf(e.source,e.id,s.file_id),
1!=t&&(s.seq=null);
}),$(e.container).html(template.render("appMsgTpl",e)).data(e);
}
e("common/qq/emoji.js"),e("common/wx/popup.js");
var s=wx.cgiData,i=(e("common/qq/mask.js"),e("common/wx/pagebar.js")),a=e("common/wx/Tips.js"),n=e("common/wx/time.js"),o=n.timeFormat,m=e("common/wx/media/img.js"),c=e("common/wx/media/audio.js"),r=e("common/wx/media/video.js"),d=e("tpl/media/card_ticket.html.js"),l=e("tpl/media/word.html.js"),p=e("cardticket/parse_data.js"),_=e("common/wx/media/idCard.js"),u=(e("common/wx/media/simpleAppmsg.js"),
e("common/wx/media/multipleAppmsg.js"),e("message/message_cgi.js")),g=e("common/wx/tooltips.js"),f=e("common/wx/Cgi.js"),h=(e("biz_common/moment.js"),
e("tpl/media/simple_videomsg_new.html.js")),v=e("common/wx/top.js");
e("biz_web/ui/checkbox.js"),new v("#topTab",v.DATA.mass).selected("list"),function(){
function i(e){
var t=e.msg_status,s=e.send_stat.progress,i="发送失败";
switch(t){
case 1:
case 101:
case 102:
case 103:
case 104:
i="等候发送";
break;

case 105:
case 106:
i="发送中"+" (%s%) ".sprintf(s);
break;

case 2:
i="发送完毕";
break;

case 5:
i=s>0?"发送完毕":"发送失败";
break;

case 6:
i="审核失败";
break;

case 7:
i="已删除";
break;

case 8:
i="无法查看";
}
return i;
}
function n(){
var e=$(this),t=e.data("id"),s=b[t];
if(s){
s.multi_item&&s.multi_item.each(function(e){
e.is_deleted&&(s.is_deleted=!0);
});
var a=template.render("js_massResult",s);
$(".js_"+t).remove(),new g({
container:this,
content:a,
parentClass:"js_"+t,
position:{
left:-142+e.width()/2,
top:2
},
reposition:!0,
type:"hover"
}),(1==s.msg_status||s.msg_status>=100&&s.msg_status<=106)&&setTimeout(function(){
f.get({
url:"/cgi-bin/masssendpage?action=status",
data:{
msgid:s.id
}
},function(t){
0==t.base_resp.ret&&(s.msg_status=t.msg_status,s.send_stat=t.send_stat||s.send_stat,
$("#massItem"+s.id).find(".js_status").html(i(s)+'<i class="icon_arrow_down"></i>'),
n.call(e),2==s.msg_status&&1==s.multi_item.length&&$("#massItem"+s.id).find(".mass_opr").html(wx.T('<a class="js_del" data-id="{id}" data-type="{type}" href="javascript:void(0);">删除</a>',s)));
});
},1e4);
}
}
var v=s.list,w=v.length,j={
1:function(e,t){
e.html(template.compile(l)({
content:t.content.emoji()
}));
},
2:function(e,t){
return new m({
container:$("#"+e.attr("id")),
file_id:0,
msgid:t.id,
source:"mass",
fakeid:t.fakeid
});
},
3:function(e,t){
var s=t;
return s.selector="#"+e.attr("id"),s.title="[语音]"+s.title,new c(s);
},
4:function(e,t){
var s=t;
return s.selector="#"+e.attr("id"),new r(s);
},
42:function(e,t){
var s=t;
return s.container="#"+e.attr("id"),new _(s);
},
10:function(e,s){
var i=s;
i.container="#"+e.attr("id"),i.param=wx.data.param,t(i);
},
15:function(e,t){
if(0==t.multi_item[0].is_new_video){
var s=$.extend({},t);
return s.sent=!0,s.selector=e,s.tpl="videomsg",s.id=1e5*Math.random()|0,new r(s);
}
var s=$.extend({},t.multi_item[0]);
s.id=1e5*Math.random()|0,e.append(wx.T(h,s));
},
17:function(e,t){
var s=p.parse_cardticket(t.card);
s&&(s.token=wx.data.t,e.html(template.compile(d)(s)));
}
};
j[16]=j[15],j[62]=j[4],j[9]=j[10],j[11]=j[10];
for(var x,b={},k=0;w>k;k++){
x=v[k];
var y=x.multi_item,q=[];
if(y.length)for(var I=0;I<y.length;I++)q=q.concat(y[I].vote_id);
if(x.voteIds=q,x.original_success=0,x.original_fail=0,x.original_apply=0,y.length)for(var I=0;I<y.length;I++)1==y[I].copyright_type&&x.original_apply++,
11==y[I].copyright_status&&x.original_success++,(12==y[I].copyright_status||13==y[I].copyright_status)&&x.original_fail++;
b[x.id]=x,q.length>0&&(x.hasVote=!0);
}
template.helper("timeFormat",function(e){
return o(e);
}),template.helper("massStatus",i),template.helper("massDesc",function(e){
var t=e.msg_status,s="";
if(6==t){
var i=e.refuse_reason;
switch(i){
case"10001":
s="垃圾广告或骚扰";
break;

case"20001":
s="违反相关法规";
break;

case"20002":
s="色情或性暗示";
break;

case"20004":
s="违反相关规定";
break;

case"20006":
s="涉嫌违法";
break;

case"20008":
s="涉嫌欺诈";
break;

case"20013":
s="涉嫌侵权";
break;

case"21000":
s="违反相关规定";
}
}
return s;
}),v.each(function(e){
var t=e,s=0;
t.multi_item&&t.multi_item.each(function(e){
e.is_deleted&&(t.is_deleted=!0,s++);
}),s>0&&s==t.multi_item.length&&(t.msg_status=7);
});
var T=$("#masslist").html(template.render("t_massList",{
token:wx.data.t,
list:v
}).trim());
$(".js_result",T).each(n),$(".mass_wrp",T).each(function(){
var e=$(this),t=e.data("id"),s=b[t];
if(s){
var i=s.type;
i&&j[i]&&j[i](e,s);
}
}),$(".js_del").each(function(){
var e=$(this).data("idx");
if(e>1){
var t=$(this).parents(".mass_item").find(".title:eq("+(e-1)+")");
t.length>0&&$(this).parent().offset({
top:t.offset().top
});
}
});
var S=e("common/wx/popover.js");
T.on("click",".js_del",function(){
var e=$(this),t=e.data("id"),i=e.data("type");
k=e.data("index");
var n=e.data("idx"),o="确定删除？",m=!1;
if("9"!=i&&"17"!=i)o="确定删除？该操作只能删除历史消息中的记录，不能删除已经成功发送的消息。";else{
var c=s.list[k];
m=c&&c.multi_item&&c.multi_item.length>1;
}
var r=new S({
dom:this,
content:o,
place:"bottom",
className:"mass_del_popover",
margin:"right",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
var s="";
void 0!=n&&(s=n),a.suc("正在删除"),u.massdel(t,function(){
if(m)e.hide().siblings(".js_d").show(),e.parents(".mass_opr").siblings("td:eq(0)").find(".appmsgSendedItem:eq("+(n-1)+")").prepend('<div class="icon_has_del"><span class="icon_has_del_bg"></span><em>已删除</em></div>'),
0==e.parents(".mass_opr").find(".js_del:visible").length&&window.location.reload();else{
$("#massItem"+t).find(".js_status").html('已删除<i class="icon_arrow_down"></i>');
var s="<p>该消息已被你删除，你的粉丝在“查看历史消息”中将无法查看该消息</p>";
"17"==i&&(s="<p>该消息已被你删除</p>"),$(".js_"+t).find(".popover_content").html(s),10==i||(3==i?e.parents(".mass_opr").siblings("td:eq(0)").find(".audio_msg").prepend('<div class="icon_has_del"><span class="icon_has_del_bg"></span><em>已删除</em></div>'):e.parents(".mass_opr").siblings("td:eq(0)").find(".appmsgSendedItem").prepend('<div class="icon_has_del"><span class="icon_has_del_bg"></span><em>已删除</em></div>')),
e.closest("td").empty(),$("#massItem"+t).find(".js_desc").html("");
}
},null,s),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
r.$pop.css("left",r.$pop.position().left+21+"px"),$(".delCheck").checkbox();
}),T.on("click",".js_resend",function(){
var e=$(this),t=e.data("id");
new S({
dom:this,
content:"补发时对已成功接收消息的用户自动过滤，不会再次发送，是否补发？",
place:"bottom",
margin:"center",
buttons:[{
text:"补发",
click:function(){
a.suc("正在补发"),u.masssend({
msgid:t
},function(){
location.href=wx.url("/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10");
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
});
for(var A=$(".mass_opr"),k=0;w>k;++k)1==v[k].can_retry_masssend&&5==v[k].msg_status&&(A.eq(k).find(".js_desc").after('<a class="js_resend" href="javascript:void(0);">补发</a>'),
A.eq(k).find(".js_resend").attr("data-id",v[k].id));
$(".mass_opr[data-status=7]").each(function(e,t){
10==$(t).data("type")||(3==$(t).data("type")?$(t).siblings("td:eq(0)").find(".audio_msg").prepend('<div class="icon_has_del"><span class="icon_has_del_bg"></span><em>已删除</em></div>'):$(t).siblings("td:eq(0)").find(".appmsgSendedItem").prepend('<div class="icon_has_del"><span class="icon_has_del_bg"></span><em>已删除</em></div>'));
}),function(){
var e=1;
$(".js_video").click(function(){
var t=$(this).parent(),s=$(this),i=s.parents(".mass_wrp").data("id"),a=$.extend({},b[i]);
a.multi_item[0].is_new_video?$("<iframe width=600 height=400 src='"+location.protocol+"//v.qq.com/iframe/preview.html?vid="+a.multi_item[0].content+"&auto=0'></iframe>").popup({
title:"视频播放",
className:"play_dialog",
onShow:function(){
var e=this;
setTimeout(function(){
e.resetPosition();
},100);
},
onHide:function(){
this.remove();
}
}):(e++,$("<div id='js_popup_video"+e+"'></div>").popup({
title:t.find("span").html(),
className:"dialog_video",
onShow:function(){
var t=this,s=$.extend({},b[i]);
s.selector=$("#js_popup_video"+e),s.sent=!1,s.tpl="videomsg",s.title="",s.time="",
s.from="",s.digest="",s.id=e,new r(s),setTimeout(function(){
t.resetPosition();
},100);
},
onHide:function(){
this.remove();
}
})),$(".wxVideoScreenshot").click();
});
}();
}();
var w=s.total_count;
!function(e){
{
var t=s.count,a=s.begin,n=a/t+1;
new i({
container:".pageNavigator",
perPage:t,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:e,
callback:function(e){
var s=e.currentPage;
if(s!=n)return s--,location.href=wx.url("/cgi-bin/masssendpage?t=mass/list&action=history&begin=%s&count=%s".sprintf(t*s,t)),
!1;
}
});
}
}(w),function(){
wx.cgiData.new_user_tag&&$(".js_group_label").text("标签");
}();
});