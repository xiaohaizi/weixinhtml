define("media/appmsg_temp_url.js",["common/wx/Cgi.js","common/wx/Tips.js"],function(t){
"use strict";
var i=t("common/wx/Cgi.js"),e=t("common/wx/Tips.js");
return function(t,n){
$(t).on("click",n,function(t){
if(!$(this).attr("href")&&!$(this).find("a").attr("href")){
t.preventDefault();
var n=window.open();
i.get({
url:"/cgi-bin/appmsg?action=get_temp_url",
data:{
appmsgid:$(this).data("msgid"),
itemidx:$(this).data("idx")+1
}
},function(t){
t.base_resp&&0==t.base_resp.ret?n.location.href=t.temp_url:(e.err("生成临时链接失败，请重试"),
n.close());
});
}
});
};
});