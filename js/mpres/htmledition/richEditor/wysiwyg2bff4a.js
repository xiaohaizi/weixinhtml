define("common/wx/richEditor/wysiwyg.js",["common/wx/richEditor/editorRange.js","common/qq/Class.js"],function(e,t,n){
"use strict";
var i=/msie/.test(navigator.userAgent.toLowerCase()),a="Wysiwyg",o=e("common/wx/richEditor/editorRange.js"),s=e("common/qq/Class.js"),r=s.declare({
init:function(e,t){
var n=e,i=$('<div class="edit_area"></div>');
this._dom$=n,this._val="",this._lastRange=null,this._editArea$=i,$.extend(this,t),
this._initEditArea(),this._initEvent();
},
_initEvent:function(){
var e=this,t=function(){
e.__tid&&clearTimeout(e.__tid),e.__tid=setTimeout(function(){
e._filterNode();
},10);
};
e._editArea$.bind({
keydown:function(t){
e._keydown(t);
},
keyup:function(t){
e._keyup(t);
},
compositionend:function(t){
e._compositionend(t);
},
mouseup:function(t){
e._mouseup(t);
},
drop:t,
paste:t
});
},
_keydown:function(e){
var t=this,n=wx.isHotkey;
if(n(e,"backspace")){
var i=o.getSelection();
i.type&&"control"===i.type.toLowerCase()&&(e.preventDefault(),i.clear());
}
(n(e,"ctrlenter")||n(e,"altenter")||n(e,"enter"))&&(e.preventDefault(),t.insertHTML("<br/>")._saveRang()),
t.keydown&&t.keydown(e);
},
_keyup:function(e){
var t=this;
t._saveRang(),t.keyup&&t.keyup(e),t.save();
},
_compositionend:function(e){
var t=this;
t._saveRang(),t.keyup&&t.keyup(e),t.save();
},
_mouseup:function(e){
var t=this;
t._saveRang(),t.mouseup&&t.mouseup(e);
},
focus:function(){
this._editArea$.focus(),this._resotreRange();
},
_setCursorToEnd:function(e){
if(i&&e){
var t=o.getSelection();
t.extend&&(t.extend(e,e.length),t.collapseToEnd&&t.collapseToEnd());
}
},
insertHTML:function(e){
var t=this;
t.focus();
var n=o.getRange();
if(!n)return t;
if(n.createContextualFragment){
e+='<img style="width:1px;height:1px;">';
var a=n.createContextualFragment(e),s=a.lastChild;
n.deleteContents(),n.insertNode(a),n.setEndAfter(s),n.setStartAfter(s);
var r=o.getSelection();
r.removeAllRanges(),r.addRange(n),document.execCommand("Delete",!1,null);
}else i&&/>$/.test(e),!!e&&n.pasteHTML&&n.pasteHTML(e),n.collapse&&n.collapse(!1),
n.select();
return t._saveRang().save(),t;
},
save:function(e){
var t=this,e=e||this.textFilter,n=t._editArea$.html();
return t.val="function"==typeof e?e(n):n,t.change&&t.change(),t;
},
_filterNode:function(e){
for(var t,n=this,e=e||this.nodeFilter,i=n._editArea$.get(0),a=i.childNodes,o=a.length-1;o>=0;o--){
var s=a[o];
switch(s.nodeType){
case 1:
if("BR"!==s.nodeName.toUpperCase()){
var r,c=!1;
if((r=e&&e(s))||(r=s.textContent||s.innerText||"",c=!0),r){
var d=c?document.createTextNode(r):r;
!t&&(t=d),i.replaceChild(d,s);
}else i.removeChild(s);
}
break;

case 3:
break;

default:
i.removeChild(s);
}
}
return n._setCursorToEnd(t),n._saveRang().save();
},
getHTML:function(){
return this._editArea$.html();
},
getText:function(){
return this.getHTML().text();
},
getContent:function(){
return this.val;
},
setContent:function(e,t){
this.clear(),this._editArea$.html(e),this.val=t||e,this.change&&this.change();
},
clear:function(){
this.val="",this._editArea$.html("");
},
_initEditArea:function(){
var e=this;
e._editArea$.attr("class",e._dom$.attr("class")).attr("contentEditable",!0).css({
"overflow-y":"auto",
"overflow-x":"hidden"
}),e._dom$.after(e._editArea$).hide().data(a,e),e.init&&e.init();
},
_saveRang:function(){
return this._lastRange=o.getRange(),this;
},
_resotreRange:function(){
var e=this._lastRange;
if(e){
var t=o.getSelection();
if(t.addRange)t.removeAllRanges(),t.addRange(e);else{
var n=o.getRange();
n.setEndPoint&&(n.setEndPoint("EndToEnd",e),n.setEndPoint("StartToStart",e)),n.select();
}
}
return this;
}
}),c=function(e,t){
return e.data(a)||new r(e,t);
};
n.exports=c;
});