define("mass/reprint_status.js",["tpl/mass/original_popup2.html.js","common/wx/popup.js"],function(t){
"use strict";
function e(t){
var e=this;
e.opt=$.extend(!0,{},n,t);
for(var l=e.opt.data,i=[],s=[],r=[],p=[],u=0,a=l.list.length;a>u;u++){
var c=l.list[u],h=+c.source_type,_=+c.source_auth_type,m=+c.white_list_status;
c.url=c.source_url.replace(/^http/,"https"),c.source_url=encodeURIComponent(c.source_url),
c.article_url=encodeURIComponent(c.article_url),c.article_title_encode=encodeURIComponent(c.article_title),
[1,2,3].indexOf(m)>-1?s.push(c):3==_?110==m?i.push(c):100==m&&s.push(c):3!=_&&-1==[1,2,3].indexOf(m)&&(1==h?r.push(c):h>1&&p.push(c));
}
var f={
isinfo:!0,
token:wx.data.t,
lang:wx.data.lang,
forbit_list:i,
forbit_butallow_list:s,
original_list:r,
other_list:p
},d={};
if(i.length>0)f.isinfo=!1,f.forbit_shownum=!!(i.length>1),d.title="禁止转载",d.buttons=[];else{
var g=0;
s.length>0&&(g+=100),r.length>0&&(g+=10),p.length>0&&(g+=1),f.forbit_butallow_num=g>100?"一、":"",
f.butallow_shownum=!!(s.length>1),f.original_num=[111,110].indexOf(g)>-1?"二、":11==g?"一、":"",
f.original_shownum=!!(r.length>1),f.other_num=[101,11].indexOf(g)>-1?"二、":111==g?"三、":"",
f.other_shownum=!!(p.length>1),d.title="须知",d.className="original_popup_wrp",d.buttons=[{
text:"取消群发",
click:function(){
this.remove(),e.opt.cancel();
},
type:"primary"
},{
text:"继续群发",
click:function(){
this.remove(),e.opt.done();
},
type:"default"
}];
}
d.close=function(){
e.opt.cancel(),this.remove();
},$(wx.T(o,f)).eq(0).popup(d);
}
var o=t("tpl/mass/original_popup2.html.js"),n=(t("common/wx/popup.js"),{
data:[],
done:$.noop,
cancel:$.noop
});
return e;
});