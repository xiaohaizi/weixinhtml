define("safe/safe_check.js",["common/wx/Tips.js","common/wx/popup.js","common/wx/Cgi.js","safe/Scan.js","safe/Mobile.js","biz_web/ui/checkbox.js","common/wx/Step.js","safe/tpl/safe_check.html.js"],function(e,s,t){
"use strict";
var i=e("common/wx/Tips.js"),n=(e("common/wx/popup.js"),e("common/wx/Cgi.js")),o=e("safe/Scan.js"),a=e("safe/Mobile.js"),c=(e("biz_web/ui/checkbox.js"),
e("common/wx/Step.js")),r=e("safe/tpl/safe_check.html.js");
t.exports={
_types:{
send:'_"(群发)"'
},
check:function(e,s,t){
t=t||{},t.onClose&&t.onClose(),"undefined"==typeof t.autoClose&&(t.autoClose=!0);
var i=!0;
switch(e.source){
case"msgs":
i=2==(2&e.protect_status);
break;

case"cburl":
i=4==(4&e.protect_status);
break;

case"appkey":
i=!0;
break;

case"showas":
i=!0;
break;

case"unbindopen":
i=!0;
break;

default:
i=!1;
}
if(i){
var n,a,c={
scaner:null,
destroy:function(){
c.scaner&&c.scaner.destroy();
}
},d=$(r).find(t&&t.checkdom?t.checkdom:".js_wxcheck");
return t.dialog&&t.dialogdom?(n=t.dialog,a=t.dialogdom,a.html(d)):a=d.popup({
title:"微信验证",
width:860,
onShow:function(){
n=this,$(this.$dialogWrp.get(0)).css({
"margin-top":-227
});
},
close:function(){
c&&c.destroy(),t&&t.onClose&&t.onClose(),this.remove();
}
}),c.scaner=new o({
container:a,
type:"check",
source:e.source,
msgid:e.msgid,
distinguish:e.distinguish,
default_initdom:e.default_initdom,
mustAdmin:e.mustAdmin,
wx_name:"wx.pass"==e.wx_alias?"":e.wx_alias,
onconfirm:function(){
var i={
code:this.code
},o=function(){
t.autoClose&&n.remove(),e.unadmin_url?location.href=e.unadmin_url:location.reload();
};
this.isadmin&&!this.issubadmin||!this.distinguish?(i.type=1,t.autoClose&&n.remove()):(i.type=this.issubadmin?2:-1,
"msgs"==e.source&&2==i.type?t.autoClose&&n.remove():(this.container.find(".js_wxchecks").html((t&&t.unadmin_html?t.unadmin_html:'<div class="page_msg large simple default"><div class="inner group"><span class="msg_icon_wrp"><i class="icon_msg_primary waiting"></i></span><div class="msg_content"><h4>已发送操作申请</h4><p>请等待管理员(%s)验证操作申请，验证通过后操作将立即进行。此申请在30分钟后过期，请尽快联系管理员验证。</p></div></div><div class="tool_bar border"><a href="javascript:;" class="btn btn_primary js_unadminsend">我知道了</a></div></div>').sprintf(this.opt.wx_name)),
this.container.find(".js_wxchecks").find(".js_unadminsend").on("click",o),this.container.find(".pop_closed").on("click",o),
n.resetPosition()),t&&t.notadminCallback&&t.notadminCallback()),"function"==typeof s&&s(i);
}
}),n.resetPosition(),c;
}
return"function"==typeof s&&s("wx.pass"),null;
},
off_protect_tip:function(e,s){
s&&s.onClose&&s.onClose();
$(r).find(s.dom?s.dom:".js_off_protect").popup({
title:"开启微信保护",
width:860,
close:function(){
this.remove();
},
buttons:[{
text:"开始",
click:function(){
this.remove(),"function"==typeof e&&e();
},
type:"primary"
},{
text:"取消",
click:function(){
s&&s.onClose&&s.onClose(),this.remove();
},
type:"default"
}]
});
},
no_helper_tip:function(e,s){
s&&s.onClose&&s.onClose();
$(r).find(s.dom?s.dom:".js_no_helper").popup({
title:"开启微信保护",
width:860,
close:function(){
this.remove();
},
buttons:[{
text:"开始",
click:function(){
this.remove(),"function"==typeof e&&e();
},
type:"primary"
},{
text:"取消",
click:function(){
s&&s.onClose&&s.onClose(),this.remove();
},
type:"default"
}]
});
},
bind:function(e,s,t,d){
function l(){
var i=w.find(".js_step3");
i.show(),m=new o({
container:i,
type:e,
source:s.source,
code:s.code,
auth:s.auth,
dom_init:'<div class="status tips"><p>请使用微信扫描二维码进行验证</p></div>',
onconfirm:function(){
h.remove(),"function"==typeof t&&t({
data:this,
wx_name:"wx.pass"
});
}
});
}
function f(){
var e=w.find(".js_step3"),i=e.find(".js_forget"),n="/misc/rebindverify?action=mail_get&safeaction=wx_mail_get&t=setting/safe-rebind";
i.find("a").attr("href",wx.url(n+("ticket"==s.auth?"&auth=ticket":""))),i.show(),
e.show(),m=new o({
container:e,
type:_,
source:s.source,
code:s.code,
auth:s.auth,
wx_name:"wx.pass"==s.wx_alias?"":s.wx_alias,
onconfirm:function(){
h.remove(),"function"==typeof t&&t({
data:this,
wx_name:"wx.pass"
});
}
});
}
!s&&(s={}),!d&&(d={});
var _;
switch(e){
case"bind_showas":
_="change_protect_showas";
break;

case"bind_masssend":
_="change_protect_masssend";
break;

case"bind_login":
_="change_protect_login";
break;

default:
_="bind";
}
d&&d.onClose&&d.onClose();
var m,u,h,p=s&&s.wx_alias?!0:!1,b="click",w=$(r).find(".js_bind").popup({
className:"dialog_process",
title:"bind"==e?"绑定公众号安全管理员":"开启微信保护",
width:960,
onShow:function(){
h=this,$(this.$dialogWrp.get(0)).css({
"margin-top":-227
});
},
close:function(){
d&&d.onClose&&d.onClose(),m&&m.destroy(),this.remove();
}
});
n.post({
url:wx.url("/misc/safeassistant?action=checkwx_report")+(s.auth?"&auth=ticket":""),
mask:!1
},$.noop),u=new c({
container:w.find(".js_process"),
selected:1,
names:["1 选择验证方式","2 账号验证",p?"3 开启微信保护":"3 绑定微信号"]
}),w.find(".js_step1_num").text(s&&s.mobile?s.mobile:""),w.find(".js_step1_email").text(s&&s.bind_mail?s.bind_mail:""),
s&&"1"==s.third_status&&w.find(".js_option").show(),w.find(".frm_radio").checkbox({
multi:!1,
onChanged:function(e){
w.find(".js_step1_next").data("type",e.val());
}
}),w.find(".js_step1_next").data("type","1").on(b,function(){
var e=$(this).data("type");
if(!("1"!=e||s&&s.mobile))return void i.err("手机号为空，请选择其他验证方式");
if(!("2"!=e||s&&s.bind_mail))return void i.err("邮箱为空，请选择其他验证方式");
if(u.setStep(2),w.find(".js_step1").hide(),"1"==e){
var t=w.find(".js_setp2_mobile");
t.find(".js_mobile_forget").attr("href",wx.url("/misc/rebindverify?action=mail_get&safeaction=mobile_mail_get&t=setting/safe-rebind"+("ticket"==s.auth?"&auth=ticket":""))),
t.show(),t.find(".js_oldsend").click();
}else if("2"==e){
var t=w.find(".js_step2_mail");
t.show(),t.find(".js_resend_mail").click();
}else w.find(".js_step2_name").show();
}),w.find(".js_step1_cancel").on(b,function(){
h.remove();
}),w.find(".js_step2_prev").on(b,function(){
$(this).parent().parent().hide(),u.setStep(1),w.find(".js_step1").show();
}),s&&s.mobile&&new a({
container:w.find(".js_setp2_mobile"),
mobile_num:s.mobile,
old_submit:".js_step2_mobilecheck",
auth:s.auth,
old_callback:function(e){
w.find(".js_step2_mobilecheck").html("下一步").removeClass("btn_loading").attr("disabled",!1);
var t=e.err_code;
0==t?(w.find(".js_setp2_mobile").hide(),u.setStep(3),s.wx_alias?f():l()):i.err("验证失败");
},
old_checkparam:function(e){
s.code=e,s.source="mobile";
var t={
code_num:e
};
return s.auth&&(t.auth=s.auth),t;
},
before_check:function(){
return $(this).attr("disabled")?!1:($(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled",!0),
!0);
}
}),w.find(".js_resend_mail").on(b,function(){
n.post({
url:wx.url("/misc/rebindverify?action=send_safe_code"),
mask:!1
},function(e){
if(!e&&!e.base_resp)return void i.err("邮件发送失败");
switch(+e.base_resp.ret){
case 0:
i.suc("邮件发送成功");
break;

default:
i.err("邮件发送失败");
}
});
}),w.find(".js_step2_namecheck").on(b,function(){
var e=w.find(".js_cardname"),t=w.find(".js_cardid"),o=e.val().trim(),a=t.val().trim();
if(!o)return i.err("请输入身份证姓名"),!1;
if(!a)return i.err("请输入身份证号码"),!1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled",!0);
var c={
card_name:o,
card_id:a
};
s.auth&&(c.auth=s.auth),n.post({
url:wx.url("/misc/safeassistant?action=check_id"),
data:c,
mask:!1
},function(e){
if(w.find(".js_step2_namecheck").html("下一步").removeClass("btn_loading").attr("disabled",!1),
!e&&!e.check_flag&&!e.code)return void i.err("验证失败");
switch(+e.check_flag){
case 1:
s.code=e.code,s.source="id",w.find(".js_step2_name").hide(),u.setStep(3),s.wx_alias?f():l();
break;

case-5:
case 200005:
i.err("请1分钟后重新尝试");
break;

default:
i.err("验证失败");
}
});
}),w.find(".js_step2_mailcheck").on(b,function(){
var e=w.find(".js_email_code").val().trim();
if(!e)return i.err("请输入邮件验证码"),!1;
$(this).html("验证中<i></i>").addClass("btn_loading").attr("disabled",!0);
var t={
safecode:e
};
s.auth&&(t.auth=s.auth),n.post({
url:wx.url("/misc/safeassistant?action=check_safecode"),
data:t,
mask:!1
},function(e){
if(w.find(".js_step2_mailcheck").html("下一步").removeClass("btn_loading").attr("disabled",!1),
!e&&!e.check_flag&&!e.code)return void i.err("验证失败");
switch(+e.check_flag){
case 1:
s.code=e.code,s.source="safecode",w.find(".js_step2_mail").hide(),u.setStep(3),s.wx_alias?f():l();
break;

default:
i.err("验证失败");
}
});
});
}
};
});