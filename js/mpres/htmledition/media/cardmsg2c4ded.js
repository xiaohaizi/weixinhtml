define("common/wx/media/cardmsg.js",["widget/media.css","common/wx/time.js","tpl/media/cardmsg.html.js","biz_common/utils/norefererimg.js","common/qq/Class.js","cardticket/send_card.js","common/wx/Tips.js"],function(t){
"use strict";
t("widget/media.css");
var e=wx.T,i=(t("common/wx/time.js"),t("tpl/media/cardmsg.html.js")),s=t("biz_common/utils/norefererimg.js"),n=t("common/qq/Class.js"),a=t("cardticket/send_card.js"),r=t("common/wx/Tips.js"),d=n.declare({
type:16,
init:function(t){
this.opt=t.opt,this.info=t.infos[this.type],this.index=this.info&&this.info.index,
this.data=this.opt.data,this.msgSender=t;
},
getData:function(){
var t=$.extend(!0,{
cardid:this.data.id,
cardnum:this.data.cardnum
},this.data);
return t.cardtype=t.type,t.type=this.type,t;
},
click:function(){
var t=this;
return this.send_card=new a({
multi:!1,
param:{
need_member_card:1
},
selectComplete:function(e,i){
return e?(e.cardnum=i,t.fillData(e),void t.msgSender.select(t.index)):void r.err("请选择卡券");
},
source:"直接群发卡券"
}),this.send_card.show(),!1;
},
fillData:function(t){
this.data=t,this.msgSender.type=this.type;
var n=e(i,t),a=$("."+this.info.selector).html(n),r=a.find(".js_logourl");
r.length&&s({
img:r[0]
}),this.msgSender.select(this.index),a.wrapInner("<div/>").children().append('<a href="javascript:;" class="link_dele" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">删除</a>');
},
isValidate:function(){
return this.data.id?!0:(r.err("请选择卡券"),!1);
},
clear:function(){
16==this.type&&($(".msg_card").parent("div").remove(),$(".tab_text").children("a").trigger("click"));
}
});
return d;
});