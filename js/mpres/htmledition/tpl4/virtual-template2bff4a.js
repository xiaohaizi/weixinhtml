define("biz_common/virtual-template.js",[],function(){
return function e(t,n,r){
function i(a,s){
if(!n[a]){
if(!t[a]){
var u="function"==typeof require_2&&require_2;
if(!s&&u)return u(a,!0);
if(o)return o(a,!0);
var c=new Error("Cannot find module '"+a+"'");
throw c.code="MODULE_NOT_FOUND",c;
}
var l=n[a]={
exports:{}
};
t[a][0].call(l.exports,function(e){
var n=t[a][1][e];
return i(n?n:e);
},l,l.exports,e,t,n,r);
}
return n[a].exports;
}
for(var o="function"==typeof require_2&&require_2,a=0;a<r.length;a++)i(r[a]);
return i;
}({
1:[function(e,t){
function n(){
c=!1,a.length?u=a.concat(u):l=-1,u.length&&r();
}
function r(){
if(!c){
var e=setTimeout(n);
c=!0;
for(var t=u.length;t;){
for(a=u,u=[];++l<t;)a&&a[l].run();
l=-1,t=u.length;
}
a=null,c=!1,clearTimeout(e);
}
}
function i(e,t){
this.fun=e,this.array=t;
}
function o(){}
var a,s=t.exports={},u=[],c=!1,l=-1;
s.nextTick=function(e){
var t=new Array(arguments.length-1);
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];
u.push(new i(e,t)),1!==u.length||c||setTimeout(r,0);
},i.prototype.run=function(){
this.fun.apply(null,this.array);
},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,
s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,
s.binding=function(){
throw new Error("process.binding is not supported");
},s.cwd=function(){
return"/";
},s.chdir=function(){
throw new Error("process.chdir is not supported");
},s.umask=function(){
return 0;
};
},{}],
2:[function(e){
window.vTemplate=e("./lib/virtual-template");
},{
"./lib/virtual-template":5
}],
3:[function(e,t){
(function(n){
function r(e){
var t=document.createElement("div");
return t.innerHTML=e,t=1===t.childNodes.length?t.childNodes[0]:t,{
vdom:i(t),
dom:t
};
}
function i(e){
for(var t=e.tagName.toLowerCase(),n=o(e),r=[],a=0,u=e.childNodes.length;u>a;a++){
var c=e.childNodes[a];
r.push(3===c.nodeType?c.nodeValue?c.nodeValue:c.textContent:i(c));
}
return s(t,n,r);
}
function o(e){
for(var t=e.attributes,n={},r=0,i=t.length;i>r;r++){
var o=t[r].name,a=t[r].value;
a&&"null"!==a&&(n[o]=a);
}
return e.style.cssText&&(n.style=e.style.cssText),n;
}
var a=e("simple-virtual-dom"),s=a.el;
n.env.NODE_ENV&&(r.toVirtualDOM=i),t.exports=r;
}).call(this,e("_process"));
},{
_process:1,
"simple-virtual-dom":6
}],
4:[function(e,t){
(function(e){
var n={};
if(n.extend=function(e,t){
for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);
return e;
},e.env.NODE_ENV)n.nextTick=e.nextTick;else{
var r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
n.nextTick=r?function(){
r.apply(window,arguments);
}:function(e){
setTimeout(e);
};
}
t.exports=n;
}).call(this,e("_process"));
},{
_process:1
}],
5:[function(e,t){
function n(e){
function t(e){
this.data=e;
var t=this.makeVirtualDOM();
this.vdom=t.vdom,this.dom=t.dom,this.isDirty=!1,this.flushCallbacks=[];
}
return a.extend(t.prototype,{
compileFn:e,
setData:r,
makeVirtualDOM:o,
flush:i
}),t;
}
function r(e,t){
if(a.extend(this.data,e),"boolean"==typeof t&&t)this.flush();else if(!this.isDirty){
this.isDirty=!0;
var n=this;
a.nextTick(function(){
n.flush();
});
}
if("function"==typeof t){
var r=t;
this.flushCallbacks.push(r);
}
}
function i(){
var e=this.makeVirtualDOM().vdom,t=c(this.vdom,e);
l(this.dom,t),this.vdom=e,this.isDirty=!1;
for(var n=this.flushCallbacks,r=0,i=n.length;i>r;r++)n[r]&&n[r]();
this.flushCallbacks=[];
}
function o(){
var e=this.compileFn(this.data);
return s(e);
}
var a=e("./utils"),s=e("./h2v"),u=e("simple-virtual-dom"),c=u.diff,l=u.patch;
t.exports=function(e,t){
var r=n(e);
return t?new r(t):r;
};
},{
"./h2v":3,
"./utils":4,
"simple-virtual-dom":6
}],
6:[function(e,t,n){
n.el=e("./lib/element"),n.diff=e("./lib/diff"),n.patch=e("./lib/patch");
},{
"./lib/diff":7,
"./lib/element":8,
"./lib/patch":9
}],
7:[function(e,t){
function n(e,t){
var n=0,i={};
return r(e,t,n,i),i;
}
function r(e,t,n,r){
var u=[];
if(null===t);else if(a.isString(e)&&a.isString(t))t!==e&&u.push({
type:s.TEXT,
content:t
});else if(e.tagName===t.tagName&&e.key===t.key){
var c=o(e,t);
c&&u.push({
type:s.PROPS,
props:c
}),i(e.children,t.children,n,r,u);
}else u.push({
type:s.REPLACE,
node:t
});
u.length&&(r[n]=u);
}
function i(e,t,n,i,o){
var c=u(e,t,"key");
if(t=c.children,c.moves.length){
var l={
type:s.REORDER,
moves:c.moves
};
o.push(l);
}
var f=null,h=n;
a.each(e,function(e,n){
var o=t[n];
h=f&&f.count?h+f.count+1:h+1,r(e,o,h,i),f=e;
});
}
function o(e,t){
var n,r,i=0,o=e.props,a=t.props,s={};
for(n in o)r=o[n],a[n]!==r&&(i++,s[n]=a[n]);
for(n in a)r=a[n],o.hasOwnProperty(n)||(i++,s[n]=a[n]);
return 0===i?null:s;
}
var a=e("./util"),s=e("./patch"),u=e("list-diff2");
t.exports=n;
},{
"./patch":9,
"./util":10,
"list-diff2":11
}],
8:[function(e,t){
function n(e,t,i){
if(!(this instanceof n))return new n(e,t,i);
r.isArray(t)&&(i=t,t={}),this.tagName=e,this.props=t||{},this.children=i||[],this.key=t?t.key:void 0;
var o=0;
r.each(this.children,function(e,t){
e instanceof n?o+=e.count:i[t]=""+e,o++;
}),this.count=o;
}
var r=e("./util");
n.prototype.render=function(){
var e=document.createElement(this.tagName),t=this.props;
for(var i in t){
var o=t[i];
r.setAttr(e,i,o);
}
var a=this.children||[];
return r.each(a,function(t){
var r=t instanceof n?t.render():document.createTextNode(t);
e.appendChild(r);
}),e;
},t.exports=n;
},{
"./util":10
}],
9:[function(e,t){
function n(e,t){
var n={
index:0
};
r(e,n,t);
}
function r(e,t,n){
for(var o=n[t.index],a=e.childNodes?e.childNodes.length:0,s=0;a>s;s++){
var u=e.childNodes[s];
t.index++,r(u,t,n);
}
o&&i(e,o);
}
function i(e,t){
s.each(t,function(t){
switch(t.type){
case u:
var n="string"==typeof t.node?document.createTextNode(t.node):t.node.render();
e.parentNode.replaceChild(n,e);
break;

case c:
a(e,t.moves);
break;

case l:
o(e,t.props);
break;

case f:
e.textContent?e.textContent=t.content:e.nodeValue=t.content;
break;

default:
throw new Error("Unknown patch type "+t.type);
}
});
}
function o(e,t){
for(var n in t)if(void 0===t[n])e.removeAttribute(n);else{
var r=t[n];
s.setAttr(e,n,r);
}
}
function a(e,t){
var n=s.toArray(e.childNodes),r={};
s.each(n,function(e){
if(1===e.nodeType){
var t=e.getAttribute("key");
t&&(r[t]=e);
}
}),s.each(t,function(t){
var i=t.index;
if(0===t.type)n[i]===e.childNodes[i]&&e.removeChild(e.childNodes[i]),n.splice(i,1);else if(1===t.type){
var o=r[t.item.key]?r[t.item.key]:"object"==typeof t.item?t.item.render():document.createTextNode(t.item);
n.splice(i,0,o),e.insertBefore(o,e.childNodes[i]||null);
}
});
}
var s=e("./util"),u=0,c=1,l=2,f=3;
n.REPLACE=u,n.REORDER=c,n.PROPS=l,n.TEXT=f,t.exports=n;
},{
"./util":10
}],
10:[function(e,t,n){
var r=n;
r.type=function(e){
return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"");
},r.isArray=function(e){
return"Array"===r.type(e);
},r.isString=function(e){
return"String"===r.type(e);
},r.each=function(e,t){
for(var n=0,r=e.length;r>n;n++)t(e[n],n);
},r.toArray=function(e){
if(!e)return[];
for(var t=[],n=0,r=e.length;r>n;n++)t.push(e[n]);
return t;
},r.setAttr=function(e,t,n){
switch(t){
case"style":
e.style.cssText=n;
break;

case"value":
var r=e.tagName||"";
r=r.toLowerCase(),"input"===r||"textarea"===r?e.value=n:e.setAttribute(t,n);
break;

default:
e.setAttribute(t,n);
}
};
},{}],
11:[function(e,t){
t.exports=e("./lib/diff").diff;
},{
"./lib/diff":12
}],
12:[function(e,t,n){
function r(e,t,n){
function r(e){
var t={
index:e,
type:0
};
v.push(t);
}
function a(e,t){
var n={
index:e,
item:t,
type:1
};
v.push(n);
}
function s(e){
b.splice(e,1);
}
for(var u,c,l=i(e,n),f=i(t,n),h=f.free,d=l.keyIndex,p=f.keyIndex,v=[],m=[],y=0,g=0;y<e.length;){
if(u=e[y],c=o(u,n))if(p.hasOwnProperty(c)){
var x=p[c];
m.push(t[x]);
}else m.push(null);else{
var w=h[g++];
m.push(w||null);
}
y++;
}
var b=m.slice(0);
for(y=0;y<b.length;)null===b[y]?(r(y),s(y)):y++;
for(var k=y=0;y<t.length;){
u=t[y],c=o(u,n);
var N=b[k],T=o(N,n);
if(N)if(c===T)k++;else if(d.hasOwnProperty(c)){
var A=o(b[k+1],n);
A===c?(r(y),s(k),k++):a(y,u);
}else a(y,u);else a(y,u);
y++;
}
return{
moves:v,
children:m
};
}
function i(e,t){
for(var n={},r=[],i=0,a=e.length;a>i;i++){
var s=e[i],u=o(s,t);
u?n[u]=i:r.push(s);
}
return{
keyIndex:n,
free:r
};
}
function o(e,t){
return e&&t?"string"==typeof t?e[t]:t(e):void 0;
}
n.makeKeyIndexAndFree=i,n.diff=r;
},{}]
},{},[2]),vTemplate;
});