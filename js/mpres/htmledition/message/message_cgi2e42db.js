define("message/message_cgi.js",["common/wx/Tips.js","common/wx/Cgi.js","common/wx/dialog.js","resp_types/base_resp.rt.js"],function(e,r,s){
"use strict";
var t={
masssend:"/cgi-bin/masssend?t=ajax-response",
massdel:"/cgi-bin/masssendpage?action=delete",
star:"/cgi-bin/setstarmessage?t=ajax-setstarmessage&only_cdn=0",
save:"/cgi-bin/savemsgtofile?t=ajax-response&only_cdn=0",
sendMsg:"/cgi-bin/singlesend?t=ajax-response&f=json",
getNewMsg:"/cgi-bin/singlesendpage?tofakeid=%s&f=json&action=sync&lastmsgfromfakeid=%s&lastmsgid=%s&createtime=%s",
getNewMsgCount:"/cgi-bin/getnewmsgnum?f=json&t=ajax-getmsgnum&lastmsgid=",
pageNav:"/cgi-bin/message?f=json&offset=%s&day=%s&keyword=%s&action=%s&frommsgid=%s&count=%s",
searchMsgByKeyword:"/cgi-bin/getmessage?t=ajax-message&count=10&keyword=",
checkcopyright:"/cgi-bin/masssend?action=get_appmsg_copyright_stat"
},n=e("common/wx/Tips.js"),o=e("common/wx/Cgi.js"),i=e("common/wx/dialog.js"),a=e("resp_types/base_resp.rt.js");
s.exports={
masssend:function(e,r,s){
o.post({
url:wx.url(t.masssend),
data:e,
rtDesc:$.extend({},a,{
month_max_count:"number",
month_cur_count:"number",
pub_product_count:"number"
}),
error:function(){
n.err("发送失败"),s&&s();
}
},function(e){
if(!e||!e.base_resp)return n.err("发送失败"),void(s&&s(e));
var t=e.base_resp.ret;
if("0"==t)return n.suc("发送成功"),void(r&&r(e));
if("64004"==t)n.err("今天的群发数量已到，无法群发");else if("67008"==t)n.err("消息中可能含有具备安全风险的链接，请检查");else if("200008"==t)n.err("请输入验证码");else if("14002"==t)n.err("没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行卡券投放。");else if("200001"==t)n.err("文章包含的语音已被删除，请重新添加。");else if("14003"==t)n.err("投放用户缺少测试权限，请先设置白名单");else if("67010"==t);else if("155001"==t){
var o=e.month_cur_count>=e.month_max_count?"本月发表付费文章已达10篇|每个月发送的付费文章最多10篇，本月你已超过限制数量，不能再发送付费文章":"本月发表付费文章已达10篇|每个月发送的付费文章最多10篇，本月你还可以发送"+(e.month_max_count-e.month_cur_count)+"篇付费文章，请重新设置。";
i.show({
type:"warn",
msg:o,
buttons:[{
text:"关闭",
click:function(){
this.remove();
}
}]
});
}else"1530505"!=t&&n.err("发送失败");
s&&s(e);
});
},
checkCopyright:function(e,r,s){
return o.post({
url:wx.url(t.checkcopyright),
data:e,
rtDesc:$.extend({},a,{
list:"string"
}),
error:function(e,r){
s&&s(r);
}
},function(e){
return e&&e.base_resp?void(r&&r(e)):void(s&&s(e));
});
},
massdel:function(e,r,s,i){
o.post({
url:wx.url(t.massdel),
data:{
id:e,
idx:i
},
error:function(){
n.err("删除失败");
}
},function(e){
return e&&e.base_resp&&0==e.base_resp.ret?(n.suc("删除成功"),void(r&&r(e))):(n.err("删除失败"),
void(s&&s(e)));
});
},
getNewMsg:function(e,r,s,n,i,a){
o.get({
url:wx.url(t.getNewMsg.sprintf(e,r,s,n)),
mask:!1,
handlerTimeout:!0,
error:a
},function(e){
e&&e.base_resp&&0==e.base_resp.ret&&i&&i(e.page_info.msg_items.msg_item);
});
},
saveVoice:function(e,r,s,i){
o.post({
mask:!1,
url:wx.url(t.save),
data:{
msgid:e,
title:r,
filename:r,
voice_cagtegory:s
},
error:function(){
n.err("保存语音失败");
}
},function(e){
if(!e||!e.base_resp)return void n.err("保存语音失败");
var r=e.base_resp.ret;
"0"==r?(n.suc("保存语音成功"),"function"==typeof i&&i(e)):n.err("保存语音失败");
});
},
save:function(e,r,s,i,a){
"function"==typeof s&&(i=s,s=""),o.post({
mask:!1,
url:wx.url(t.save),
data:{
msgid:e,
filename:r,
digest:s,
scene:a
},
error:function(){
n.err("保存素材失败");
}
},function(e){
if(!e||!e.base_resp)return void n.err("保存素材失败");
var r=e.base_resp.ret;
"0"==r?(n.suc("保存素材成功"),"function"==typeof i&&i(e)):n.err("保存素材失败");
});
},
star:function(e,r,s){
o.post({
mask:!1,
url:wx.url(t.star),
data:{
msgid:e,
value:1==r?0:1
},
error:function(){
n.err(1==r?"取消收藏失败":"收藏消息失败");
}
},function(e){
if(!e||!e.base_resp)return void n.err(1==r?"取消收藏失败":"收藏消息失败");
var t=e.base_resp.ret;
0!=t?n.err(1==r?"取消收藏失败":"收藏消息失败"):(n.suc(1==r?"已取消收藏":"已收藏"),"function"==typeof s&&s(e));
});
},
sendMsg:function(e,r,s){
o.post({
url:wx.url(t.sendMsg),
data:e,
error:function(){
n.err("发送失败"),s&&s();
}
},function(e){
if(!e||!e.base_resp)return n.err("发送失败"),void(s&&s(e));
var t=e.base_resp.ret;
return 0==t?(n.suc("回复成功"),void("function"==typeof r&&r(e))):(10703==t?n.err("对方关闭了接收消息"):10700==t?n.err("该用户已经取消关注，你无法再给他发送消息。"):10701==t?n.err("该用户已被加入黑名单，无法向其发送消息"):62752==t?n.err("消息中可能含有具备安全风险的链接，请检查"):10704==t?n.err("该素材已被删除"):10705==t?n.err("该素材已被删除"):10706==t?n.err("由于该用户48小时未与你互动，你不能再主动发消息给他。直到用户下次主动发消息给你才可以对其进行回复。"):200008==t?n.err("请输入验证码"):1530500!=t&&n.err("发送失败"),
void(s&&s(e)));
});
},
getNewMsgCount:function(e,r,s){
o.post({
mask:!1,
handlerTimeout:!0,
url:wx.url(t.getNewMsgCount+e),
error:s
},function(e){
"function"==typeof r&&r(e);
});
},
quickReply:function(e,r,s){
this.sendMsg({
mask:!1,
tofakeid:e.toFakeId,
imgcode:e.imgcode,
type:1,
content:e.content,
out_trade_no:e.out_trade_no,
appmsg:e.appmsg||"",
quickreplyid:e.quickReplyId
},r,s);
},
pageNav:function(e,r,s){
var n=t.pageNav.sprintf((e.page-1)*e.count,e.day||"",e.keyword||"",e.action||"",e.frommsgid||"",e.count||"");
o.post({
dataType:"json",
url:wx.url(n),
mask:!1,
data:{},
error:s
},function(e){
e&&e.base_resp&&0==e.base_resp.ret&&"function"==typeof r&&r(e.msg_items.msg_item);
});
},
searchMsgByKeyword:function(e,r,s){
o.post({
dataType:"html",
mask:!1,
url:wx.url(url.searchMsgByKeyword+e),
error:function(){
n.err("系统发生异常，请刷新页面重试"),s&&s({});
}
},function(e){
"function"==typeof r&&r($.parseJSON(e));
});
}
};
});