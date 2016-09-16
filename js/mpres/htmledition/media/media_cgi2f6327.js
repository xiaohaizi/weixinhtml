define("media/media_cgi.js",["common/wx/Tips.js","common/wx/Cgi.js","resp_types/base_resp.rt.js","resp_types/file_cnt.rt.js"],function(e){
"use strict";
var r=e("common/wx/Tips.js"),s=e("common/wx/Cgi.js"),a=e("resp_types/base_resp.rt.js"),t=e("resp_types/file_cnt.rt.js"),i={
del:function(e,t){
s.post({
mask:!1,
url:wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data:{
AppMsgId:e
},
rtDesc:a,
error:function(){
r.err("删除失败");
}
},function(e){
"0"==e.ret?(r.suc("删除成功"),t&&t(e)):r.err("删除失败");
});
},
del_sv:function(e,t){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
rtDesc:a,
error:function(){
r.err("删除失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(r.suc("删除成功"),t.suc&&t.suc(e)):(r.err("删除失败"),
t.fail&&t.fail(e));
});
},
edit_sv:function(e,t){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e.id,
filename:e.name
},
rtDesc:a,
error:function(){
r.err("编辑失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(r.suc("编辑成功"),t.suc&&t.suc(e)):(r.err("编辑失败"),
t.fail&&t.fail(e));
});
},
save:function(e,a,t,i,n,c){
var o=wx.url(t.AppMsgId?"/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(a):"/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(a));
t.ajax=1,s.post({
url:o,
data:t,
dataType:"json",
rtDesc:{
ret_R:"string",
appMsgId_R:"number"
},
error:function(e,s){
"timeout"!=s&&r.err("保存失败"),n&&n(!1,-1);
},
complete:c
},function(e){
if("0"==e.ret)r.suc("保存成功"),i&&i(e);else{
var s=!1;
switch(e.ret){
case"64506":
r.err("保存失败,链接不合法");
break;

case"64507":
r.err("内容不能包含链接，请调整");
break;

case"64510":
r.err("内容不能包含语音，请调整");
break;

case"64511":
r.err("内容不能包多个语音，请调整");
break;

case"64512":
r.err("文章中语音错误,请使用语音添加按钮重新添加。");
break;

case"64508":
r.err("查看原文链接可能具备安全风险，请检查");
break;

case"64550":
r.err("请勿插入不合法的已群发的图文消息链接");
break;

case"-99":
r.err("内容超出字数，请调整");
break;

case"-1":
r.err("系统错误，请注意备份内容后重试");
break;

case"-2":
case"200002":
r.err("参数错误，请注意备份内容后重试");
break;

case"64509":
r.err("正文中不能包含超过3个视频，请重新编辑正文后再保存。");
break;

case"-5":
r.err("服务错误，请注意备份内容后重试。");
break;

case"64513":
r.err("请从正文中选择封面，再尝试保存。");
break;

case"-206":
r.err("目前，服务负荷过大，请稍后重试。");
break;

case"10801":
r.err("标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),s=e.msg;
break;

case"10802":
r.err("作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),s=e.msg;
break;

case"10803":
r.err("敏感链接，请重新添加。"),s=e.msg;
break;

case"10804":
r.err("摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),s=e.msg;
break;

case"10806":
r.err("正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。"),s=e.msg;
break;

case"-20000":
r.err("登录态超时，请重新登录。");
break;

case"64513":
r.err("封面必须存在正文中，请检查封面");
break;

case"64514":
r.err("你没有权限使用话题卡片功能");
break;

case"15801":
case"15802":
case"15803":
case"15804":
case"15805":
case"15806":
case"1530503":
case"1530504":
break;

default:
r.err("保存失败");
}
n&&n(s,e.ret);
}
});
},
preview:function(e,a,t,i,n){
s.post({
url:wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(a)),
data:t,
dataType:"json",
rtDesc:{
ret_R:"string"
},
error:function(){
r.err("发送失败，请稍后重试"),n&&n();
}
},function(e){
if("0"==e.ret)r.suc("发送预览成功，请留意你的手机微信"),i&&i(e);else{
switch(e.ret){
case"64501":
e.word="你输入的帐号不存在，请重新输入";
break;

case"64502":
e.word="你输入的微信号不存在，请重新输入";
break;

case"10700":
case"64503":
e.word="1.你尚未关注公众号，请先关注 2.如果已经关注公众号，请确认该微信的隐私设置，可以通过QQ号、手机号或者微信号搜索到该微信。";
break;

case"64510":
e.word="内容不能包含语音,请调整";
break;

case"64511":
e.word="内容不能包含多个语音,请调整";
break;

case"64512":
e.word="文章中语音错误,请使用语音添加按钮重新添加。";
break;

case"64550":
e.word="请勿插入不合法的已群发的图文消息链接";
break;

case"10703":
e.word="对方关闭了接收消息";
break;

case"10701":
e.word="用户已被加入黑名单，无法向其发送消息";
break;

case"10704":
case"10705":
e.word="该素材已被删除";
break;

case"64504":
e.word="保存图文消息发送错误，请稍后再试";
break;

case"64505":
e.word="发送预览失败，请稍后再试";
break;

case"64507":
e.word="内容不能包含链接，请调整";
break;

case"-99":
e.word="内容超出字数，请调整";
break;

case"62752":
e.word="可能含有具备安全风险的链接，请检查";
break;

case"10801":
e.word="标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",e.antispam=!0;
break;

case"10802":
e.word="作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",e.antispam=!0;
break;

case"10803":
e.word="敏感链接，请重新添加。",e.antispam=!0;
break;

case"10804":
e.word="摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",e.antispam=!0;
break;

case"10806":
e.word="正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",e.antispam=!0;
break;

case"10807":
e.word="内容不能违反公众平台协议、相关法律法规和政策，请重新编辑。",e.antispam=!0;
break;

case"-8":
case"-6":
e.ret="-6",e.word="请输入验证码";
break;

case"15801":
case"15802":
case"15803":
case"15804":
case"15805":
case"15806":
break;

default:
e.word="系统繁忙，请稍后重试";
}
15==a&&r.err(e.word),n&&n(e);
}
});
},
getList:function(e,i,n,c,o,p){
var b="";
b=wx.url(o?"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&query=%s&f=json".sprintf(e,i,n,o):"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,i,n)),
0==p?b=wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,i,n)):1==p&&(b=wx.url("/cgi-bin/video_mgr?type=%s&action=get_video_list&begin=%s&offset=%s&f=json".sprintf(e,i,n))),
s.get({
mask:!1,
url:b,
rtDesc:$.extend({},a,{
app_msg_info:$.extend({},t,{
item_R:[],
search_cnt:"number"
})
}),
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?c&&c(e.app_msg_info):r.err("获取列表失败");
});
},
getSingleList:function(e,a,t,i){
s.get({
mask:!1,
url:wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e,a,t)),
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?i&&i(e.app_msg_info):r.err("获取列表失败");
});
}
},n={
save:function(e,a,t){
var i=wx.url("/cgi-bin/operate_vote");
e.ajax=1,s.post({
url:i,
data:e,
error:function(){
r.err("保存失败"),t&&t();
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?(r.suc("保存成功"),a&&a(e)):(r.err("保存失败"),t&&t(e));
});
}
};
return{
rename:function(e,a,t){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e,
fileName:a
},
error:function(){
r.err("重命名失败");
}
},function(e){
if(!e||!e.base_resp)return void r.err("重命名失败");
var s=e.base_resp.ret;
if("0"==s)r.suc("重命名成功"),t&&t(e);else switch(s){
case"200002":
r.err("素材名不能包含空格");
break;

default:
r.err("重命名失败");
}
});
},
del:function(e,a){
s.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
error:function(){
r.err("删除失败");
}
},function(e){
return e&&e.base_resp?void("0"==e.base_resp.ret?(r.suc("删除成功"),a&&a(e)):r.err("删除失败")):void r.err("删除失败");
});
},
getList:function(e,i,n,c){
s.get({
mask:!1,
url:wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e,i,n)),
rtDesc:$.extend({},a,{
page_info_R:$.extend({},t,{
file_item_R:[{
file_id_R:"number",
name_R:"string",
size_R:"string",
update_time_R:"number",
type_R:"number"
}]
})
}),
error:function(){
r.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?c&&c(e.page_info):r.err("获取列表失败");
});
},
appmsg:i,
vote:n
};
});