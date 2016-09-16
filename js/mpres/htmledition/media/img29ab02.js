define("common/wx/media/img.js",["widget/media.css","tpl/media/img.html.js","common/qq/Class.js"],function(t){
"use strict";
var i=(wx.T,t("widget/media.css"),t("tpl/media/img.html.js")),a=t("common/qq/Class.js"),e=a.declare({
init:function(t){
if(t&&t.container){
var a=t;
$(t.container).html(i.format({
token:wx.data.t,
id:t.file_id,
msgid:t.msgid||"",
source:t.source||"",
ow:~t.fakeid
})).data("opt",t),this.data=a;
}
},
getData:function(){
return this.data;
}
});
return e;
});