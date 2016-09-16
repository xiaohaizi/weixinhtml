define("mass/send.js",["common/qq/mask.js","common/wx/Tips.js","common/wx/top.js","common/wx/region.js","biz_web/ui/dropdown.js","safe/safe_check.js","message/message_cgi.js","mass/reprint_status.js","biz_web/lib/json.js","common/wx/richEditor/msgSender.js","common/wx/media/factory.js","cardticket/parse_data.js","biz_common/moment.js","common/wx/popover.js","common/wx/popup.js","common/wx/dialog.js","common/wx/Cgi.js","biz_web/ui/checkbox.js","tpl/mass/sendqueue_popup.html.js","common/wx/verifycode.js"],function(t){
"use strict";
var e=wx.cgiData,i=(e.need_verify_code,t("common/qq/mask.js"),t("common/wx/Tips.js")),s=t("common/wx/top.js"),n=t("common/wx/region.js"),a=t("biz_web/ui/dropdown.js"),o=t("safe/safe_check.js"),c=t("message/message_cgi.js"),r=t("mass/reprint_status.js"),u=t("biz_web/lib/json.js"),m=t("common/wx/richEditor/msgSender.js"),p=t("common/wx/media/factory.js"),d=t("cardticket/parse_data.js"),l=t("biz_common/moment.js"),_=t("common/wx/popover.js"),f=(t("common/wx/popup.js"),
t("common/wx/dialog.js")),g=t("common/wx/Cgi.js"),h=(t("biz_web/ui/checkbox.js"),
function(){
function h(){
var t="https://mp.weixin.qq.com/misc/setsyncweibo?type=bind&from=masssendpage&token="+wx.data.t;
$("#bindTencentMicroblog").attr("href","https://open.t.qq.com/cgi-bin/oauth2/authorize?client_id=801271399&response_type=code&redirect_uri="+encodeURIComponent(t));
var e=wx.cgiData.errcode;
""!=e&&i.err("10000"==e?"选定的腾讯微博帐号已经被其他公众号绑定，绑定失败":"绑定失败，请稍后再试");
}
function b(){
function i(t){
var e=t.detail_info;
if(!e)return null;
var i={
9:"10",
11:"10",
16:"15",
17:"16",
62:"4"
};
e.type=i[e.type]||e.type;
var s;
switch(+e.type){
case 10:
s={
data:e,
type:e.type
};
break;

case 15:
if(s=e,e.multi_item&&e.multi_item.length>0){
var n=e.multi_item[0];
for(var a in n)n.hasOwnProperty(a)&&!s[a]&&(s[a]=n[a]);
}
!s.time&&s.create_time&&(s.time=l.unix(s.create_time).format("YYYY年MM月DD日")||"");
break;

case 16:
s=d.parse_cardticket(e.card),s.type=e.type;
break;

default:
s=e;
}
return s.acl=wx.acl.msg_acl,s;
}
function s(t,e){
var s=i(t),n=p.itemRender[s.type];
if(s&&n){
var a=u.find(".js_media"+e);
(1==+s.type||2==+s.type||3==+s.type)&&a.addClass("simple_media"),n(a,s);
}
}
var n={
count:+e.auditing_msg_num||0,
wx_alias:e.strategy_status.wx_alias||"",
list:e.auditing_msg&&e.auditing_msg.list?e.auditing_msg.list:[]
};
if(0!=n.count&&0!=n.list.length){
for(var a=0,o=n.list.length;o>a;a++)n.list[a].apply_time_desc=l.unix(n.list[a].apply_time).format("YYYY.MM.DD HH:mm")||"",
n.list[a].expired_time_desc=l.unix(n.list[a].expired_time).format("YYYY.MM.DD HH:mm")||"",
n.list[a].applyer_headimg=n.list[a].applyer_headimg||"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0";
for(var c=t("tpl/mass/sendqueue_popup.html.js"),r=$(wx.T(c,n)).eq(0).popup({
title:"待发送群发消息详情",
close:function(){
this.remove();
},
className:"sendqueue_dialog",
width:960,
buttons:[{
text:"知道了",
click:function(){
this.remove();
},
type:"primary"
}]
}),u=r.find(".js_masscontent"),a=0,m=n.list.length;m>a;a++)s(n.list[a],a);
r.popup("resetPosition"),r.find(".js_massitem").on("click",function(){
var t=$(this),e="selected";
if(t.hasClass(e))return!1;
t.siblings(".js_massitem").removeClass(e),t.addClass(e);
var i=$(this).data("index");
u.find(".js_mediaitem").hide(),u.find(".js_media"+i).show(),r.popup("resetPosition");
});
}
}
function y(t){
$("#js_submit").click(function(){
var e=$(this);
if(!e.hasClass("btn_disabled")){
var i=Y.getData();
if(!(i.error||t.count>=4))if(t.count>0){
var s=new _({
dom:e,
content:'当前有%s条群发消息正在等待管理员审批。<a href="javascript:;" class="js_viewqueue">查看详情</a><br>是否确认要再次群发消息？'.sprintf(t.count),
buttons:[{
text:"群发",
type:"primary",
click:function(){
this.hide(),W.submit.call($("#js_submit"));
}
},{
text:"取消",
click:function(){
this.hide();
}
}]
});
s.$pop.find(".js_viewqueue").on("click",b);
}else W.submit.call(e);
}
});
}
function w(){
new s("#topTab",s.DATA.mass).selected(0),O.selected(0),N.selected(0),F.selected(0),
"true"==e.has_member_card&&J.selected(0),$("#leftNum").html(e.mass_send_left),e.mass_send_left<=0&&$("#js_submit").disable("btn_disabled"),
$(window).on("keyup",function(){
$(".js_warn").hide();
});
}
function v(t){
var e={
acl:wx.acl.msg_acl,
onClick:function(t,e,i,s){
10==s?$("#ifDiscuss").show():$("#ifDiscuss").hide();
},
onSelect:function(){}
};
Y=t?new m($("#js_msgSender"),$.extend({
data:t
},e)):"10"==wx.cgiData.type?new m($("#js_msgSender"),$.extend({
data:{
type:10,
data:wx.cgiData.info
}
},e)):new m($("#js_msgSender"),$.extend({
data:{
type:10
}
},e)),$("#appmsgPopBt").click(function(){
Y.op[10].pop();
});
}
function j(){
var i=t("cardticket/parse_data.js");
g.get({
url:"/merchant/electroniccardmgr?action=get&card_id="+e.cardid,
error:function(){
v();
}
},function(t){
if(0==t.base_resp.ret){
var s=$.parseJSON(t.card_detail);
s=i.parse_cardticket(s),s.card_type=s.type,s.cardnum=e.cardnum,s.type=16,v(s);
}else v();
});
}
function k(){
var t=wx.url("/cgi-bin/copyrightlib?action=lib_reprint&ori_biz=%s&ori_mid=%s&ori_idx=%s&type=1".sprintf(e.ori_ref.ori_biz,e.ori_ref.ori_mid,e.ori_ref.ori_idx));
g.get({
url:t,
error:function(){
v();
}
},function(t){
if(t.base_resp&&0==t.base_resp.ret&&t.app_msg_info&&t.app_msg_info.item&&t.app_msg_info.item.length>0){
var e={
type:10,
data:t.app_msg_info.item[0]
};
e.data.isreprint=!0,e.data.multi_item&&e.data.multi_item.length>0&&(e.data.multi_item[0].isreprint=!0),
v(e);
}else v();
});
}
function x(){
var t=e.ori_ref;
t.ori_biz&&t.ori_mid&&t.ori_idx?(e.ori_ref.isRePrint=!0,k()):e.cardid?j():v();
}
function C(e){
for(var i="",s="",n=0,a=e.length;a>n;n++){
var o=e[n].func_id,c=e[n].unlock_time,r=e[n].ban_time,u=t("biz_common/moment.js");
"2"==o?i=c?c==r?"永久屏蔽原创功能":"屏蔽原创功能至"+u.unix(c).format("YYYY年MM月DD日 HH:mm"):"":"3"==o&&(s=c?c==r?"永久屏蔽赞赏功能":"屏蔽赞赏功能至"+u.unix(c).format("YYYY年MM月DD日 HH:mm"):"");
}
i&&s?B="经用户举报，你的帐号已%s，已%s，屏蔽期间发出的文章将没有原创及赞赏标识。<br>".sprintf(i,s):i?B="经用户举报，你的帐号已%s，因为赞赏仅向原创文章开放，因而屏蔽期间赞赏功能也不可使用。本文发出后将没有原创及赞赏标识。<br>".sprintf(i):s&&(B="经用户举报，你的帐号已%s，屏蔽期间发出的文章将没有赞赏标识。<br>".sprintf(s));
}
function D(){
var t={
count:+e.auditing_msg_num||0
};
if(t.count>0){
var i='，其中%s条正在等待管理员审批。<a href="javascript:;" class="js_viewqueue">查看详情</a>'.sprintf(t.count),s=$("#js_masssend_tips");
s.append(i),s.find(".js_viewqueue").on("click",b),t.count>=4&&$("#js_submit").disable("btn_disabled");
}
y(t);
}
function q(){
w(),x(),D(),h(),C(wx.cgiData.forbit);
}
var Y,T=$("#toTencentMicroblog").checkbox(),S=$("#toTencentNews").checkbox(),z=$("#js_toQQBrowser").checkbox(),R=new n({
container:"#js_region",
data:{},
list:{
country:[{
id:-1,
name:"全部"
}],
province:[],
city:[]
}
}),M=[];
if(1==e.new_user_tag){
for(var H=0;H<e.group.length;H++){
var P,A=e.group[H];
A.group_id>=2&&("星标组"==A.group_name?P={
name:"星标用户",
value:A.group_id
}:M.push({
name:A.group_name,
value:A.group_id
}));
}
M=[P].concat(M.sort(function(t,e){
return t.name.localeCompare(e.name);
}));
}else for(var H=0;H<e.group.length;++H){
var A=e.group[H];
M.push({
name:A.name,
value:A.id
});
}
var B="",N=new a({
container:"#js_group",
data:M,
callback:function(){}
}),F=new a({
container:"#js_sex",
data:[{
name:"全部",
value:"0"
},{
name:"男",
value:"1"
},{
name:"女",
value:"2"
}],
callback:function(){}
}),Q=[{
name:"全部用户",
value:"-1"
}];
if("true"==e.has_member_card){
Q=Q.concat([{
name:"按用户标签选择",
value:"group"
},{
name:"按卡券会员选择",
value:"card"
}]);
var U=[{
name:"全部",
value:"-1"
}];
$.each(e.card_group_list.datas,function(t,e){
0!=e.type||U.push({
name:e.name,
value:e.id
});
});
var J=new a({
container:"#js_card_group",
data:U,
callback:function(){}
});
}else Q.push({
name:"按标签选择",
value:"group"
});
var O=new a({
container:"#js_sendObj",
data:Q,
callback:function(t){
$("#js_group, #js_card_group").hide(),"group"==t?$("#js_group").show():"card"==t&&$("#js_card_group").show();
}
}),E=(t("common/wx/verifycode.js"),null),I=$("#verifycode"),V=$("#js_submit"),W={
postData:null,
ConvertStringToJson:function(t){
if(!t||"string"!=typeof t)return{
list:[]
};
try{
return u.parse(t);
}catch(e){
return{
list:[]
};
}
},
requestUse:function(t){
g.post({
url:wx.url("/cgi-bin/appmsgcopyright?action=apply_auth"),
data:{
list:t,
msgid:W.postData.appmsgid
}
},function(t){
return t&&t.base_resp&&0==t.base_resp.ret?(i.suc("申请成功"),void setTimeout(function(){
location.href=wx.url("/cgi-bin/copyrightlib?action=reprint_article&begin=0&count=10&auth_status=0");
},200)):void i.err("系统错误，请稍后重试。");
});
},
showCopyRightDetail:function(t){
new r({
data:W.ConvertStringToJson(t.list),
done:function(){
var e=W.postData;
e.reprint_confirm=1,e.list=t.list||"",W.checkAccountStatus();
},
cancel:function(){
V.btn(!0);
}
});
},
showSafeSend:function(t){
var e="";
"card"==O.value&&(e="将对%s中已关注公众号的会员群发消息。<br>".sprintf(-1==J.value?"全部卡券用户":"卡券分组“%s”".sprintf(J.name))),
f.show({
type:"info",
msg:"操作确认|"+B+e+"消息开始群发后无法撤销，是否确认群发？",
mask:!0,
buttons:[{
text:"确定",
click:function(){
V.btn(!1),o.check(t,function(t){
t&&t.code&&"wx.pass"!=t.code?(W.postData.code=t.code,W.send(-1==t.type?!0:!1)):W.send(!1);
},{
onClose:function(){
V.btn(!0);
},
checkdom:".js_wxcheck0"
}),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
V.btn(!0),this.remove();
}
}],
close:function(){
return V.btn(!0),!0;
}
});
},
checkCopyrightDone:function(t){
switch(clearTimeout(W.checkCopyrightTimeout),clearTimeout(W.checkCopyrightComet),
W.checkCopyrightRequest.abort("mass_send_check_copyright_timeout"),W.isFirstCheck=!0,
W.checkCopyrightRet){
case 154011:
case 154009:
W.postData.direct_send=1,W.checkAccountStatus();
break;

case 154008:
W.showCopyRightDetail(t);
break;

default:
i.err("系统错误，请稍后重试。"),V.btn(!0);
}
},
checkCopyright:function(){
var t=W.postData,e={
first_check:+W.isFirstCheck,
type:t.type,
appmsgid:t.appmsgid
};
W.isFirstCheck=W.isFirstCheck&&!1,W.checkCopyrightRequest=c.checkCopyright(e,function(t){
switch(t&&t.base_resp&&"undefined"!=typeof t.base_resp.ret||(W.checkCopyrightRet=-1),
W.checkCopyrightRet=+t.base_resp.ret,+t.base_resp.ret){
case 154008:
case 154009:
W.checkCopyrightDone(t);
break;

case 154011:
W.checkCopyrightComet=setTimeout(function(){
W.checkCopyright();
},500);
break;

default:
W.checkCopyrightDone(t);
}
},function(t){
"mass_send_check_copyright_timeout"!=t&&(W.checkCopyrightComet=setTimeout(function(){
W.checkCopyright();
},500));
});
},
checkAccountStatus:function(){
var t=e.strategy_status;
return t?(t.third_status=e.third_status,t.bind_mail=e.bind_mail,void(t.wx_protect&&t.wx_alias?(t.source="msgs",
t.msgid=e.operation_seq,t.distinguish=!0,W.showSafeSend(t)):t.wx_alias&&"1"==e.gray_status?o.off_protect_tip(function(){
o.bind("bind_masssend",t,function(t){
i.suc("帐号已开启安全保护，可进行群发操作。"),e.strategy_status.wx_alias=t.wx_name,e.strategy_status.wx_protect=1,
e.strategy_status.protect_status=2,V.btn(!0);
},{
onClose:function(){
V.btn(!0);
}
});
},{
onClose:function(){
V.btn(!0);
}
}):"1"==e.gray_status?o.no_helper_tip(function(){
o.bind("bind_masssend",t,function(t){
i.suc("帐号已开启安全保护，可进行群发操作。"),e.strategy_status.wx_alias=t.wx_name,e.strategy_status.wx_protect=1,
e.strategy_status.protect_status=2,V.btn(!0);
},{
onClose:function(){
V.btn(!0);
}
});
},{
onClose:function(){
V.btn(!0);
}
}):W.sendwarn())):void W.sendwarn();
},
send:function(t){
$(".js_warn").hide(),c.masssend(W.postData,function(){
I.html("").hide(),E=null,t||(location.href=wx.url("/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"));
},function(t){
if(V.btn(!0),t&&t.base_resp){
var e=t.base_resp.ret;
if("200008"==e)E=I.html("").show().verifycode().data("verifycode"),E.focus();else if("67010"==e){
var i="该图文消息部分文章正文为空，无法群发|请选择其他文章或编辑完整后再尝试";
f.show({
type:"warn",
msg:i,
buttons:[{
text:"重新选择",
click:function(){
this.remove(),Y.selectPopDialogByType(10);
}
},{
type:"normal",
text:"编辑此图文",
click:function(){
var t=W.postData.appmsgid;
location.href="/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit&lang=zh_CN&token="+wx.data.t+"&type=10&appmsgid="+t;
}
}]
});
}else"1530505"==e&&$(".js_warn").show();
}
});
},
sendwarn:function(){
var t="";
"card"==O.value&&(t="将对%s中已关注公众号的会员群发消息。<br>".sprintf(-1==J.value?"全部卡券用户":"卡券分组“%s”".sprintf(J.name))),
f.show({
type:"info",
msg:"操作确认|"+B+t+"消息开始群发后无法撤销，是否确认群发？",
mask:!0,
buttons:[{
text:"确定",
click:function(){
V.btn(!1),W.send(!1),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
V.btn(!0),this.remove();
}
}]
});
},
getPostData:function(){
var t=Y.getData(),i={};
if(t.error)return null;
t=t.data,i.type=t.type,i.appmsgid=t.app_id,i.fileid=t.file_id,i.content=t.content,
i.vid=t.vid,i.cardid=t.cardid,i.cardquantity=t.cardnum,i.cardlimit=0==t.cardnum?0:1,
i.sex=F.value,"group"==O.value?i.groupid=N.value:-1==O.value?i.groupid=-1:"card"==O.value&&(i.groupid=0,
i.card_tag_id=J.value),i.synctxweibo=T.value()?1:0,$("#toTencentNews").length&&(i.synctxnews=S.value()?1:0),
$("#js_toQQBrowser").length&&(i.syncqqbrowser=z.value()?1:0),2==i.type&&(i.img_copyright_status=t.copyright_status||0);
var s=R.getAll();
return i.country="-1"==s.country||"全部"==s.country?"":s.country,i.province="-1"==s.province?"":s.province,
i.city="-1"==s.city?"":s.city,i.imgcode=E&&E.getCode().trim(),i.operation_seq=e.operation_seq,
console.log(i),i;
},
submit:function(){
var t=$(this);
if(!t.hasClass("btn_disabled")){
var e=W.getPostData();
if(null!=e){
if(null!=E&&E.getCode().trim().length<=0)return i.err("请输入验证码"),E.focus(),void t.btn(!0);
t.btn(!1),W.postData=e,10==e.type?(W.isFirstCheck=!0,W.checkCopyright(),W.checkCopyrightTimeout=setTimeout(function(){
W.checkCopyrightRet=154011,W.checkCopyrightDone();
},3e4)):W.checkAccountStatus();
}
}
}
};
return{
init:q
};
}());
h.init();
});