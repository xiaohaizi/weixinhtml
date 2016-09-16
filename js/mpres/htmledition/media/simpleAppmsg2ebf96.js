define("common/wx/media/simpleAppmsg.js",["tpl/media/simple_appmsg.html.js","widget/media.css","common/qq/Class.js","media/appmsg_temp_url.js"],function(e){
"use strict";
var s=(wx.T,e("tpl/media/simple_appmsg.html.js")),i=(e("widget/media.css"),e("common/qq/Class.js")),t=e("media/appmsg_temp_url.js"),m=wx.url("/cgi-bin/getimgdata"),a={
9:{
1:"图文消息",
2:"图文消息",
3:"图文消息",
4:"图文消息"
},
10:{
1:"图文消息",
2:"图文消息",
3:"图文消息",
4:"图文消息"
},
11:{
1:"活动消息",
2:"第三方应用消息",
3:"商品消息",
4:"单条商品消息"
}
},n=function(e,s){
var i=a[e];
return(i?i[s]:"")||"未知类型";
},p=i.declare({
init:function(e){
e&&e.container&&(e.appmsg_cover=e.cover?e.cover:m+"&mode=small&source=%s&msgid=%s&fileId=%s".sprintf(e.source,e.id,e.file_id),
e.type_msg=n(e.type,e.app_sub_type),e.isSingleMsg=location.href.indexOf("singlesendpage")>-1?!0:!1,
$(e.container).html(wx.T(s,e)).data(e),this.opt=e,t(e.container,".title_wrp,.desc"));
},
getData:function(){
return this.opt;
}
});
return p;
});