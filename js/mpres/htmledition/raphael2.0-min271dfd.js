!function(t){
var e,r,i="0.3.2",n="hasOwnProperty",s=/[\.\/]/,a="*",o=function(){},l=function(t,e){
return t-e;
},h={
n:{}
},c=function(t,i){
var n,s=r,a=Array.prototype.slice.call(arguments,2),o=c.listeners(t),h=0,f=[],u={},p=[];
e=t,r=0;
for(var d=0,g=o.length;g>d;d++)"zIndex"in o[d]&&(f.push(o[d].zIndex),o[d].zIndex<0&&(u[o[d].zIndex]=o[d]));
for(f.sort(l);f[h]<0;)if(n=u[f[h++]],p.push(n.apply(i,a)),r)return r=s,p;
for(d=0;g>d;d++)if(n=o[d],"zIndex"in n)if(n.zIndex==f[h]){
if(p.push(n.apply(i,a)),r)return r=s,p;
do if(h++,n=u[f[h]],n&&p.push(n.apply(i,a)),r)return r=s,p;while(n);
}else u[n.zIndex]=n;else if(p.push(n.apply(i,a)),r)return r=s,p;
return r=s,p.length?p:null;
};
c.listeners=function(t){
var e,r,i,n,o,l,c,f,u=t.split(s),p=h,d=[p],g=[];
for(n=0,o=u.length;o>n;n++){
for(f=[],l=0,c=d.length;c>l;l++)for(p=d[l].n,r=[p[u[n]],p[a]],i=2;i--;)e=r[i],e&&(f.push(e),
g=g.concat(e.f||[]));
d=f;
}
return g;
},c.on=function(t,e){
for(var r=t.split(s),i=h,n=0,a=r.length;a>n;n++)i=i.n,!i[r[n]]&&(i[r[n]]={
n:{}
}),i=i[r[n]];
for(i.f=i.f||[],n=0,a=i.f.length;a>n;n++)if(i.f[n]==e)return o;
return i.f.push(e),function(t){
+t==+t&&(e.zIndex=+t);
};
},c.stop=function(){
r=1;
},c.nt=function(t){
return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e;
},c.unbind=function(t,e){
for(var r,i,o,l=t.split(s),c=[h],f=0,u=l.length;u>f;f++)for(var p=0;p<c.length;p+=o.length-2){
if(o=[p,1],r=c[p].n,l[f]!=a)r[l[f]]&&o.push(r[l[f]]);else for(i in r)r[n](i)&&o.push(r[i]);
c.splice.apply(c,o);
}
for(f=0,u=c.length;u>f;f++)for(r=c[f];r.n;){
if(e){
if(r.f){
for(p=0,jj=r.f.length;jj>p;p++)if(r.f[p]==e){
r.f.splice(p,1);
break;
}
!r.f.length&&delete r.f;
}
for(i in r.n)if(r.n[n](i)&&r.n[i].f){
var d=r.n[i].f;
for(p=0,jj=d.length;jj>p;p++)if(d[p]==e){
d.splice(p,1);
break;
}
!d.length&&delete r.n[i].f;
}
}else{
delete r.f;
for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f;
}
r=r.n;
}
},c.version=i,c.toString=function(){
return"You are running Eve "+i;
},"undefined"!=typeof module&&module.exports?module.exports=c:t.eve=c;
}(this),function(){
function t(t,e,i,s,a,o){
i=G(i);
var l,c,f,p,d,v,m=t.ms,y={},x={},_={};
if(s)for(k=0,B=$e.length;B>k;k++){
var w=$e[k];
if(w.el.id==e.id&&w.anim==t){
w.percent!=i?($e.splice(k,1),f=1):c=w,e.attr(w.totalOrigin);
break;
}
}else s=+x;
for(var k=0,B=t.percents.length;B>k;k++){
if(t.percents[k]==i||t.percents[k]>s*t.top){
i=t.percents[k],d=t.percents[k-1]||0,m=m/t.top*(i-d),p=t.percents[k+1],l=t.anim[i];
break;
}
s&&e.attr(t.anim[t.percents[k]]);
}
if(l){
if(c)c.initstatus=s,c.start=new Date-c.ms*s;else{
for(attr in l)if(l[g](attr)&&(H[g](attr)||e.paper.customAttributes[g](attr)))switch(y[attr]=e.attr(attr),
null==y[attr]&&(y[attr]=X[attr]),x[attr]=l[attr],H[attr]){
case j:
_[attr]=(x[attr]-y[attr])/m;
break;

case"colour":
y[attr]=h.getRGB(y[attr]);
var A=h.getRGB(x[attr]);
_[attr]={
r:(A.r-y[attr].r)/m,
g:(A.g-y[attr].g)/m,
b:(A.b-y[attr].b)/m
};
break;

case"path":
var T=Se(y[attr],x[attr]),E=T[1];
for(y[attr]=T[0],_[attr]=[],k=0,B=y[attr].length;B>k;k++){
_[attr][k]=[0];
for(var L=1,N=y[attr][k].length;N>L;L++)_[attr][k][L]=(E[k][L]-y[attr][k][L])/m;
}
break;

case"transform":
var M=e._,z=Ee(M[attr],x[attr]);
if(z)for(y[attr]=z.from,x[attr]=z.to,_[attr]=[],_[attr].real=!0,k=0,B=y[attr].length;B>k;k++)for(_[attr][k]=[y[attr][k][0]],
L=1,N=y[attr][k].length;N>L;L++)_[attr][k][L]=(x[attr][k][L]-y[attr][k][L])/m;else{
var R=e.matrix||new n,F={
_:{
transform:M.transform
},
getBBox:function(){
return e.getBBox(1);
}
};
y[attr]=[R.a,R.b,R.c,R.d,R.e,R.f],Ae(F,x[attr]),x[attr]=F._.transform,_[attr]=[(F.matrix.a-R.a)/m,(F.matrix.b-R.b)/m,(F.matrix.c-R.c)/m,(F.matrix.d-R.d)/m,(F.matrix.e-R.e)/m,(F.matrix.e-R.f)/m];
}
break;

case"csv":
var P=C(l[attr])[S](u),q=C(y[attr])[S](u);
if("clip-rect"==attr)for(y[attr]=q,_[attr]=[],k=q.length;k--;)_[attr][k]=(P[k]-y[attr][k])/m;
x[attr]=P;
break;

default:
for(P=[][b](l[attr]),q=[][b](y[attr]),_[attr]=[],k=e.paper.customAttributes[attr].length;k--;)_[attr][k]=((P[k]||0)-(q[k]||0))/m;
}
var I=l.easing,D=h.easing_formulas[I];
if(!D)if(D=C(I).match(V),D&&5==D.length){
var O=D;
D=function(t){
return r(t,+O[1],+O[2],+O[3],+O[4],m);
};
}else D=ie;
if(v=l.start||t.start||+new Date,w={
anim:t,
percent:i,
timestamp:v,
start:v+(t.del||0),
status:0,
initstatus:s||0,
stop:!1,
ms:m,
easing:D,
from:y,
diff:_,
to:x,
el:e,
callback:l.callback,
prev:d,
next:p,
repeat:o||t.times,
origin:e.attr(),
totalOrigin:a
},$e.push(w),s&&!c&&!f&&(w.stop=!0,w.start=new Date-m*s,1==$e.length))return Qe();
f&&(w.start=new Date-w.ms*s),1==$e.length&&Ze(Qe);
}
eve("anim.start."+e.id,e,t);
}
}
function e(t,e){
var r=[],i={};
if(this.ms=e,this.times=1,t){
for(var n in t)t[g](n)&&(i[G(n)]=t[n],r.push(G(n)));
r.sort(ee);
}
this.anim=i,this.top=r[r.length-1],this.percents=r;
}
function r(t,e,r,i,n,s){
function a(t,e){
var r,i,n,s,a,o;
for(n=t,o=0;8>o;o++){
if(s=l(n)-t,M(s)<e)return n;
if(a=(3*f*n+2*c)*n+h,M(a)<1e-6)break;
n-=s/a;
}
if(r=0,i=1,n=t,r>n)return r;
if(n>i)return i;
for(;i>r;){
if(s=l(n),M(s-t)<e)return n;
t>s?r=n:i=n,n=(i-r)/2+r;
}
return n;
}
function o(t,e){
var r=a(t,e);
return((d*r+p)*r+u)*r;
}
function l(t){
return((f*t+c)*t+h)*t;
}
var h=3*e,c=3*(i-e)-h,f=1-h-c,u=3*r,p=3*(n-r)-u,d=1-u-p;
return o(t,1/(200*s));
}
function i(){
return this.x+k+this.y+k+this.width+" × "+this.height;
}
function n(t,e,r,i,n,s){
null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+s):(this.a=1,
this.b=0,this.c=0,this.d=1,this.e=0,this.f=0);
}
function s(t){
for(var e=[],r=0,i=t.length;i-2>r;r+=2){
var n=[{
x:+t[r],
y:+t[r+1]
},{
x:+t[r],
y:+t[r+1]
},{
x:+t[r+2],
y:+t[r+3]
},{
x:+t[r+4],
y:+t[r+5]
}];
i-4==r?(n[0]={
x:+t[r-2],
y:+t[r-1]
},n[3]=n[2]):r&&(n[0]={
x:+t[r-2],
y:+t[r-1]
}),e.push(["C",(-n[0].x+6*n[1].x+n[2].x)/6,(-n[0].y+6*n[1].y+n[2].y)/6,(n[1].x+6*n[2].x-n[3].x)/6,(n[1].y+6*n[2].y-n[3].y)/6,n[2].x,n[2].y]);
}
return e;
}
function a(){
return this.hex;
}
function o(t,e,r){
function i(){
var n=Array.prototype.slice.call(arguments,0),s=n.join("␀"),a=i.cache=i.cache||{},o=i.count=i.count||[];
return a[g](s)?(l(o,s),r?r(a[s]):a[s]):(o.length>=1e3&&delete a[o.shift()],o.push(s),
a[s]=t[x](e,n),r?r(a[s]):a[s]);
}
return i;
}
function l(t,e){
for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0]);
}
function h(t){
if(h.is(t,"function"))return c?t():eve.on("DOMload",t);
if(h.is(t,P)){
for(var e,r=t,i=h._engine.create[x](h,r.splice(0,3+h.is(r[0],j))),n=i.set(),s=0,a=r.length;a>s;s++)e=r[s]||{},
p[g](e.type)&&n.push(i[e.type]().attr(e));
return n;
}
var o=Array.prototype.slice.call(arguments,0);
if(h.is(o[o.length-1],"function")){
var l=o.pop();
return c?l.call(h._engine.create[x](h,o)):eve.on("DOMload",function(){
l.call(h._engine.create[x](h,o));
});
}
return h._engine.create[x](h,arguments);
}
h.version="2.0.0",h.eve=eve;
var c,f,u=/[, ]+/,p={
circle:1,
rect:1,
path:1,
ellipse:1,
text:1,
image:1
},d=/\{(\d+)\}/g,g="hasOwnProperty",v={
doc:document,
win:window
},m={
was:Object.prototype[g].call(v.win,"Raphael"),
is:v.win.Raphael
},y=function(){
this.ca=this.customAttributes={};
},x="apply",b="concat",_="createTouch"in v.doc,w="",k=" ",C=String,S="split",B="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[S](k),A={
mousedown:"touchstart",
mousemove:"touchmove",
mouseup:"touchend"
},T=C.prototype.toLowerCase,E=Math,L=E.max,N=E.min,M=E.abs,z=E.pow,R=E.PI,j="number",F="string",P="array",q=Object.prototype.toString,I=(h._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,
/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),D={
NaN:1,
Infinity:1,
"-Infinity":1
},V=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=E.round,G=parseFloat,Y=parseInt,W=C.prototype.toUpperCase,X=h._availableAttrs={
"arrow-end":"none",
"arrow-start":"none",
blur:0,
"clip-rect":"0 0 1e9 1e9",
cursor:"default",
cx:0,
cy:0,
fill:"#fff",
"fill-opacity":1,
font:'10px "Arial"',
"font-family":'"Arial"',
"font-size":"10",
"font-style":"normal",
"font-weight":400,
gradient:0,
height:0,
href:"http://raphaeljs.com/",
opacity:1,
path:"M0,0",
r:0,
rx:0,
ry:0,
src:"",
stroke:"#000",
"stroke-dasharray":"",
"stroke-linecap":"butt",
"stroke-linejoin":"butt",
"stroke-miterlimit":0,
"stroke-opacity":1,
"stroke-width":1,
target:"_blank",
"text-anchor":"middle",
title:"Raphael",
transform:"",
width:0,
x:0,
y:0
},H=h._availableAnimAttrs={
blur:j,
"clip-rect":"csv",
cx:j,
cy:j,
fill:"colour",
"fill-opacity":j,
"font-size":j,
height:j,
opacity:j,
path:"path",
r:j,
rx:j,
ry:j,
stroke:"colour",
"stroke-opacity":j,
"stroke-width":j,
transform:"transform",
width:j,
x:j,
y:j
},U=/\s*,\s*/,$={
hs:1,
rg:1
},Z=/,?([achlmqrstvxz]),?/gi,Q=/([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/gi,J=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/gi,K=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi,te=(h._radial_gradient=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
{}),ee=function(t,e){
return G(t)-G(e);
},re=function(){},ie=function(t){
return t;
},ne=h._rectPath=function(t,e,r,i,n){
return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]];
},se=function(t,e,r,i){
return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]];
},ae=h._getPath={
path:function(t){
return t.attr("path");
},
circle:function(t){
var e=t.attrs;
return se(e.cx,e.cy,e.r);
},
ellipse:function(t){
var e=t.attrs;
return se(e.cx,e.cy,e.rx,e.ry);
},
rect:function(t){
var e=t.attrs;
return ne(e.x,e.y,e.width,e.height,e.r);
},
image:function(t){
var e=t.attrs;
return ne(e.x,e.y,e.width,e.height);
},
text:function(t){
var e=t._getBBox();
return ne(e.x,e.y,e.width,e.height);
}
},oe=h.mapPath=function(t,e){
if(!e)return t;
var r,i,n,s,a;
for(t=Se(t),n=0,ii=t.length;ii>n;n++)for(a=t[n],s=1,jj=a.length;jj>s;s+=2)r=e.x(a[s],a[s+1]),
i=e.y(a[s],a[s+1]),a[s]=r,a[s+1]=i;
return t;
};
if(h._g=v,h.type=v.win.SVGAngle||v.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML",
"VML"==h.type){
var le,he=v.doc.createElement("div");
if(he.innerHTML='<v:shape adj="1"/>',le=he.firstChild,le.style.behavior="url(#default#VML)",
!le||"object"!=typeof le.adj)return h.type=w;
he=null;
}
h.svg=!(h.vml="VML"==h.type),h._Paper=y,h.fn=f=y.prototype=h.prototype,h._id=0,h._oid=0,
h.is=function(t,e){
return e=T.call(e),"finite"==e?!D[g](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||q.call(t).slice(8,-1).toLowerCase()==e;
},h.angle=function(t,e,r,i,n,s){
if(null==n){
var a=t-r,o=e-i;
return a||o?(180+180*E.atan2(-o,-a)/R+360)%360:0;
}
return h.angle(t,e,n,s)-h.angle(r,i,n,s);
},h.rad=function(t){
return t%360*R/180;
},h.deg=function(t){
return 180*t/R%360;
},h.snapTo=function(t,e,r){
if(r=h.is(r,"finite")?r:10,h.is(t,P)){
for(var i=t.length;i--;)if(M(t[i]-e)<=r)return t[i];
}else{
t=+t;
var n=e%t;
if(r>n)return e-n;
if(n>t-r)return e-n+t;
}
return e;
};
h.createUUID=function(t,e){
return function(){
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase();
};
}(/[xy]/g,function(t){
var e=16*E.random()|0,r="x"==t?e:3&e|8;
return r.toString(16);
});
h.setWindow=function(t){
eve("setWindow",h,v.win,t),v.win=t,v.doc=v.win.document,initWin&&initWin(v.win);
};
var ce=function(t){
if(h.vml){
var e,r=/^\s+|\s+$/g;
try{
var i=new ActiveXObject("htmlfile");
i.write("<body>"),i.close(),e=i.body;
}catch(n){
e=createPopup().document.body;
}
var s=e.createTextRange();
ce=o(function(t){
try{
e.style.color=C(t).replace(r,w);
var i=s.queryCommandValue("ForeColor");
return i=(255&i)<<16|65280&i|(16711680&i)>>>16,"#"+("000000"+i.toString(16)).slice(-6);
}catch(n){
return"none";
}
});
}else{
var a=v.doc.createElement("i");
a.title="Raphaël Colour Picker",a.style.display="none",v.doc.body.appendChild(a),
ce=o(function(t){
return a.style.color=t,v.doc.defaultView.getComputedStyle(a,w).getPropertyValue("color");
});
}
return ce(t);
},fe=function(){
return"hsb("+[this.h,this.s,this.b]+")";
},ue=function(){
return"hsl("+[this.h,this.s,this.l]+")";
},pe=function(){
return this.hex;
},de=function(t,e,r){
if(null==e&&h.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(r=t.b,e=t.g,t=t.r),null==e&&h.is(t,F)){
var i=h.getRGB(t);
t=i.r,e=i.g,r=i.b;
}
return(t>1||e>1||r>1)&&(t/=255,e/=255,r/=255),[t,e,r];
},ge=function(t,e,r,i){
t*=255,e*=255,r*=255;
var n={
r:t,
g:e,
b:r,
hex:h.rgb(t,e,r),
toString:pe
};
return h.is(i,"finite")&&(n.opacity=i),n;
};
h.color=function(t){
var e;
return h.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=h.hsb2rgb(t),t.r=e.r,t.g=e.g,
t.b=e.b,t.hex=e.hex):h.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=h.hsl2rgb(t),
t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(h.is(t,"string")&&(t=h.getRGB(t)),h.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=h.rgb2hsl(t),
t.h=e.h,t.s=e.s,t.l=e.l,e=h.rgb2hsb(t),t.v=e.b):(t={
hex:"none"
},crl.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=pe,t;
},h.hsb2rgb=function(t,e,r,i){
this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,i=t.o),t*=360;
var n,s,a,o,l;
return t=t%360/60,l=r*e,o=l*(1-M(t%2-1)),n=s=a=r-l,t=~~t,n+=[l,o,0,0,o,l][t],s+=[o,l,l,o,0,0][t],
a+=[0,0,o,l,l,o][t],ge(n,s,a,i);
},h.hsl2rgb=function(t,e,r,i){
this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,
e/=100,r/=100),t*=360;
var n,s,a,o,l;
return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-M(t%2-1)),n=s=a=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],
s+=[o,l,l,o,0,0][t],a+=[0,0,o,l,l,o][t],ge(n,s,a,i);
},h.rgb2hsb=function(t,e,r){
r=de(t,e,r),t=r[0],e=r[1],r=r[2];
var i,n,s,a;
return s=L(t,e,r),a=s-N(t,e,r),i=0==a?null:s==t?(e-r)/a:s==e?(r-t)/a+2:(t-e)/a+4,
i=(i+360)%6*60/360,n=0==a?0:a/s,{
h:i,
s:n,
b:s,
toString:fe
};
},h.rgb2hsl=function(t,e,r){
r=de(t,e,r),t=r[0],e=r[1],r=r[2];
var i,n,s,a,o,l;
return a=L(t,e,r),o=N(t,e,r),l=a-o,i=0==l?null:a==t?(e-r)/l:a==e?(r-t)/l+2:(t-e)/l+4,
i=(i+360)%6*60/360,s=(a+o)/2,n=0==l?0:.5>s?l/(2*s):l/(2-2*s),{
h:i,
s:n,
l:s,
toString:ue
};
},h._path2string=function(){
return this.join(",").replace(Z,"$1");
};
h._preload=function(t,e){
var r=v.doc.createElement("img");
r.style.cssText="position:absolute;left:-9999em;top-9999em",r.onload=function(){
e.call(this),this.onload=null,v.doc.body.removeChild(this);
},r.onerror=function(){
v.doc.body.removeChild(this);
},v.doc.body.appendChild(r),r.src=t;
};
h.getRGB=o(function(t){
if(!t||(t=C(t)).indexOf("-")+1)return{
r:-1,
g:-1,
b:-1,
hex:"none",
error:1,
toString:a
};
if("none"==t)return{
r:-1,
g:-1,
b:-1,
hex:"none",
toString:a
};
!$[g](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=ce(t));
var e,r,i,n,s,o,l=t.match(I);
return l?(l[2]&&(i=Y(l[2].substring(5),16),r=Y(l[2].substring(3,5),16),e=Y(l[2].substring(1,3),16)),
l[3]&&(i=Y((s=l[3].charAt(3))+s,16),r=Y((s=l[3].charAt(2))+s,16),e=Y((s=l[3].charAt(1))+s,16)),
l[4]&&(o=l[4][S](U),e=G(o[0]),"%"==o[0].slice(-1)&&(e*=2.55),r=G(o[1]),"%"==o[1].slice(-1)&&(r*=2.55),
i=G(o[2]),"%"==o[2].slice(-1)&&(i*=2.55),"rgba"==l[1].toLowerCase().slice(0,4)&&(n=G(o[3])),
o[3]&&"%"==o[3].slice(-1)&&(n/=100)),l[5]?(o=l[5][S](U),e=G(o[0]),"%"==o[0].slice(-1)&&(e*=2.55),
r=G(o[1]),"%"==o[1].slice(-1)&&(r*=2.55),i=G(o[2]),"%"==o[2].slice(-1)&&(i*=2.55),
("deg"==o[0].slice(-3)||"°"==o[0].slice(-1))&&(e/=360),"hsba"==l[1].toLowerCase().slice(0,4)&&(n=G(o[3])),
o[3]&&"%"==o[3].slice(-1)&&(n/=100),h.hsb2rgb(e,r,i,n)):l[6]?(o=l[6][S](U),e=G(o[0]),
"%"==o[0].slice(-1)&&(e*=2.55),r=G(o[1]),"%"==o[1].slice(-1)&&(r*=2.55),i=G(o[2]),
"%"==o[2].slice(-1)&&(i*=2.55),("deg"==o[0].slice(-3)||"°"==o[0].slice(-1))&&(e/=360),
"hsla"==l[1].toLowerCase().slice(0,4)&&(n=G(o[3])),o[3]&&"%"==o[3].slice(-1)&&(n/=100),
h.hsl2rgb(e,r,i,n)):(l={
r:e,
g:r,
b:i,
toString:a
},l.hex="#"+(16777216|i|r<<8|e<<16).toString(16).slice(1),h.is(n,"finite")&&(l.opacity=n),
l)):{
r:-1,
g:-1,
b:-1,
hex:"none",
error:1,
toString:a
};
},h),h.hsb=o(function(t,e,r){
return h.hsb2rgb(t,e,r).hex;
}),h.hsl=o(function(t,e,r){
return h.hsl2rgb(t,e,r).hex;
}),h.rgb=o(function(t,e,r){
return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1);
}),h.getColor=function(t){
var e=this.getColor.start=this.getColor.start||{
h:0,
s:1,
b:t||.75
},r=this.hsb2rgb(e.h,e.s,e.b);
return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={
h:0,
s:1,
b:e.b
})),r.hex;
},h.getColor.reset=function(){
delete this.start;
},h.parsePathString=o(function(t){
if(!t)return null;
var e={
a:7,
c:6,
h:1,
l:2,
m:2,
r:4,
q:4,
s:4,
t:2,
v:1,
z:0
},r=[];
return h.is(t,P)&&h.is(t[0],P)&&(r=me(t)),r.length||C(t).replace(Q,function(t,i,n){
var s=[],a=i.toLowerCase();
if(n.replace(K,function(t,e){
e&&s.push(+e);
}),"m"==a&&s.length>2&&(r.push([i][b](s.splice(0,2))),a="l",i="m"==i?"l":"L"),"r"==a)r.push([i][b](s));else for(;s.length>=e[a]&&(r.push([i][b](s.splice(0,e[a]))),
e[a]););
}),r.toString=h._path2string,r;
}),h.parseTransformString=o(function(t){
if(!t)return null;
var e=[];
return h.is(t,P)&&h.is(t[0],P)&&(e=me(t)),e.length||C(t).replace(J,function(t,r,i){
{
var n=[];
T.call(r);
}
i.replace(K,function(t,e){
e&&n.push(+e);
}),e.push([r][b](n));
}),e.toString=h._path2string,e;
}),h.findDotsAtSegment=function(t,e,r,i,n,s,a,o,l){
var h=1-l,c=z(h,3),f=z(h,2),u=l*l,p=u*l,d=c*t+3*f*l*r+3*h*l*l*n+p*a,g=c*e+3*f*l*i+3*h*l*l*s+p*o,v=t+2*l*(r-t)+u*(n-2*r+t),m=e+2*l*(i-e)+u*(s-2*i+e),y=r+2*l*(n-r)+u*(a-2*n+r),x=i+2*l*(s-i)+u*(o-2*s+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*a,k=h*s+l*o,C=90-180*E.atan2(v-y,m-x)/R;
return(v>y||x>m)&&(C+=180),{
x:d,
y:g,
m:{
x:v,
y:m
},
n:{
x:y,
y:x
},
start:{
x:b,
y:_
},
end:{
x:w,
y:k
},
alpha:C
};
};
var ve=o(function(t){
if(!t)return{
x:0,
y:0,
width:0,
height:0
};
t=Se(t);
for(var e,r=0,i=0,n=[],s=[],a=0,o=t.length;o>a;a++)if(e=t[a],"M"==e[0])r=e[1],i=e[2],
n.push(r),s.push(i);else{
var l=Ce(r,i,e[1],e[2],e[3],e[4],e[5],e[6]);
n=n[b](l.min.x,l.max.x),s=s[b](l.min.y,l.max.y),r=e[5],i=e[6];
}
var h=N[x](0,n),c=N[x](0,s);
return{
x:h,
y:c,
width:L[x](0,n)-h,
height:L[x](0,s)-c
};
},null,function(t){
return{
x:t.x,
y:t.y,
width:t.width,
height:t.height
};
}),me=function(t){
var e=[];
h.is(t,P)&&h.is(t&&t[0],P)||(t=h.parsePathString(t));
for(var r=0,i=t.length;i>r;r++){
e[r]=[];
for(var n=0,s=t[r].length;s>n;n++)e[r][n]=t[r][n];
}
return e.toString=h._path2string,e;
},ye=h._pathToRelative=o(function(t){
h.is(t,P)&&h.is(t&&t[0],P)||(t=h.parsePathString(t));
var e=[],r=0,i=0,n=0,s=0,a=0;
"M"==t[0][0]&&(r=t[0][1],i=t[0][2],n=r,s=i,a++,e.push(["M",r,i]));
for(var o=a,l=t.length;l>o;o++){
var c=e[o]=[],f=t[o];
if(f[0]!=T.call(f[0]))switch(c[0]=T.call(f[0]),c[0]){
case"a":
c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-r).toFixed(3),c[7]=+(f[7]-i).toFixed(3);
break;

case"v":
c[1]=+(f[1]-i).toFixed(3);
break;

case"m":
n=f[1],s=f[2];

default:
for(var u=1,p=f.length;p>u;u++)c[u]=+(f[u]-(u%2?r:i)).toFixed(3);
}else{
c=e[o]=[],"m"==f[0]&&(n=f[1]+r,s=f[2]+i);
for(var d=0,g=f.length;g>d;d++)e[o][d]=f[d];
}
var v=e[o].length;
switch(e[o][0]){
case"z":
r=n,i=s;
break;

case"h":
r+=+e[o][v-1];
break;

case"v":
i+=+e[o][v-1];
break;

default:
r+=+e[o][v-2],i+=+e[o][v-1];
}
}
return e.toString=h._path2string,e;
},0,me),xe=h._pathToAbsolute=o(function(t){
if(h.is(t,P)&&h.is(t&&t[0],P)||(t=h.parsePathString(t)),!t||!t.length)return[["M",0,0]];
var e=[],r=0,i=0,n=0,a=0,o=0;
"M"==t[0][0]&&(r=+t[0][1],i=+t[0][2],n=r,a=i,o++,e[0]=["M",r,i]);
for(var l,c,f=o,u=t.length;u>f;f++){
if(e.push(l=[]),c=t[f],c[0]!=W.call(c[0]))switch(l[0]=W.call(c[0]),l[0]){
case"A":
l[1]=c[1],l[2]=c[2],l[3]=c[3],l[4]=c[4],l[5]=c[5],l[6]=+(c[6]+r),l[7]=+(c[7]+i);
break;

case"V":
l[1]=+c[1]+i;
break;

case"H":
l[1]=+c[1]+r;
break;

case"R":
for(var p=[r,i][b](c.slice(1)),d=2,g=p.length;g>d;d++)p[d]=+p[d]+r,p[++d]=+p[d]+i;
e.pop(),e=e[b](s(p));
break;

case"M":
n=+c[1]+r,a=+c[2]+i;

default:
for(d=1,g=c.length;g>d;d++)l[d]=+c[d]+(d%2?r:i);
}else if("R"==c[0])p=[r,i][b](c.slice(1)),e.pop(),e=e[b](s(p)),l=["R"][b](c.slice(-2));else for(var v=0,m=c.length;m>v;v++)l[v]=c[v];
switch(l[0]){
case"Z":
r=n,i=a;
break;

case"H":
r=l[1];
break;

case"V":
i=l[1];
break;

case"M":
n=l[l.length-2],a=l[l.length-1];

default:
r=l[l.length-2],i=l[l.length-1];
}
}
return e.toString=h._path2string,e;
},null,me),be=function(t,e,r,i){
return[t,e,r,i,r,i];
},_e=function(t,e,r,i,n,s){
var a=1/3,o=2/3;
return[a*t+o*r,a*e+o*i,a*n+o*r,a*s+o*i,n,s];
},we=function(t,e,r,i,n,s,a,l,h,c){
var f,u=120*R/180,p=R/180*(+n||0),d=[],g=o(function(t,e,r){
var i=t*E.cos(r)-e*E.sin(r),n=t*E.sin(r)+e*E.cos(r);
return{
x:i,
y:n
};
});
if(c)B=c[0],A=c[1],k=c[2],C=c[3];else{
f=g(t,e,-p),t=f.x,e=f.y,f=g(l,h,-p),l=f.x,h=f.y;
var v=(E.cos(R/180*n),E.sin(R/180*n),(t-l)/2),m=(e-h)/2,y=v*v/(r*r)+m*m/(i*i);
y>1&&(y=E.sqrt(y),r=y*r,i=y*i);
var x=r*r,_=i*i,w=(s==a?-1:1)*E.sqrt(M((x*_-x*m*m-_*v*v)/(x*m*m+_*v*v))),k=w*r*m/i+(t+l)/2,C=w*-i*v/r+(e+h)/2,B=E.asin(((e-C)/i).toFixed(9)),A=E.asin(((h-C)/i).toFixed(9));
B=k>t?R-B:B,A=k>l?R-A:A,0>B&&(B=2*R+B),0>A&&(A=2*R+A),a&&B>A&&(B-=2*R),!a&&A>B&&(A-=2*R);
}
var T=A-B;
if(M(T)>u){
var L=A,N=l,z=h;
A=B+u*(a&&A>B?1:-1),l=k+r*E.cos(A),h=C+i*E.sin(A),d=we(l,h,r,i,n,0,a,N,z,[A,L,k,C]);
}
T=A-B;
var j=E.cos(B),F=E.sin(B),P=E.cos(A),q=E.sin(A),I=E.tan(T/4),D=4/3*r*I,V=4/3*i*I,O=[t,e],G=[t+D*F,e-V*j],Y=[l+D*q,h-V*P],W=[l,h];
if(G[0]=2*O[0]-G[0],G[1]=2*O[1]-G[1],c)return[G,Y,W][b](d);
d=[G,Y,W][b](d).join()[S](",");
for(var X=[],H=0,U=d.length;U>H;H++)X[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;
return X;
},ke=function(t,e,r,i,n,s,a,o,l){
var h=1-l;
return{
x:z(h,3)*t+3*z(h,2)*l*r+3*h*l*l*n+z(l,3)*a,
y:z(h,3)*e+3*z(h,2)*l*i+3*h*l*l*s+z(l,3)*o
};
},Ce=o(function(t,e,r,i,n,s,a,o){
var l,h=n-2*r+t-(a-2*n+r),c=2*(r-t)-2*(n-r),f=t-r,u=(-c+E.sqrt(c*c-4*h*f))/2/h,p=(-c-E.sqrt(c*c-4*h*f))/2/h,d=[e,o],g=[t,a];
return M(u)>"1e12"&&(u=.5),M(p)>"1e12"&&(p=.5),u>0&&1>u&&(l=ke(t,e,r,i,n,s,a,o,u),
g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=ke(t,e,r,i,n,s,a,o,p),g.push(l.x),d.push(l.y)),
h=s-2*i+e-(o-2*s+i),c=2*(i-e)-2*(s-i),f=e-i,u=(-c+E.sqrt(c*c-4*h*f))/2/h,p=(-c-E.sqrt(c*c-4*h*f))/2/h,
M(u)>"1e12"&&(u=.5),M(p)>"1e12"&&(p=.5),u>0&&1>u&&(l=ke(t,e,r,i,n,s,a,o,u),g.push(l.x),
d.push(l.y)),p>0&&1>p&&(l=ke(t,e,r,i,n,s,a,o,p),g.push(l.x),d.push(l.y)),{
min:{
x:N[x](0,g),
y:N[x](0,d)
},
max:{
x:L[x](0,g),
y:L[x](0,d)
}
};
}),Se=h._path2curve=o(function(t,e){
for(var r=xe(t),i=e&&xe(e),n={
x:0,
y:0,
bx:0,
by:0,
X:0,
Y:0,
qx:null,
qy:null
},s={
x:0,
y:0,
bx:0,
by:0,
X:0,
Y:0,
qx:null,
qy:null
},a=(function(t,e){
var r,i;
if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];
switch(!(t[0]in{
T:1,
Q:1
})&&(e.qx=e.qy=null),t[0]){
case"M":
e.X=t[1],e.Y=t[2];
break;

case"A":
t=["C"][b](we[x](0,[e.x,e.y][b](t.slice(1))));
break;

case"S":
r=e.x+(e.x-(e.bx||e.x)),i=e.y+(e.y-(e.by||e.y)),t=["C",r,i][b](t.slice(1));
break;

case"T":
e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][b](_e(e.x,e.y,e.qx,e.qy,t[1],t[2]));
break;

case"Q":
e.qx=t[1],e.qy=t[2],t=["C"][b](_e(e.x,e.y,t[1],t[2],t[3],t[4]));
break;

case"L":
t=["C"][b](be(e.x,e.y,t[1],t[2]));
break;

case"H":
t=["C"][b](be(e.x,e.y,t[1],e.y));
break;

case"V":
t=["C"][b](be(e.x,e.y,e.x,t[1]));
break;

case"Z":
t=["C"][b](be(e.x,e.y,e.X,e.Y));
}
return t;
}),o=function(t,e){
if(t[e].length>7){
t[e].shift();
for(var n=t[e];n.length;)t.splice(e++,0,["C"][b](n.splice(0,6)));
t.splice(e,1),c=L(r.length,i&&i.length||0);
}
},l=function(t,e,n,s,a){
t&&e&&"M"==t[a][0]&&"M"!=e[a][0]&&(e.splice(a,0,["M",s.x,s.y]),n.bx=0,n.by=0,n.x=t[a][1],
n.y=t[a][2],c=L(r.length,i&&i.length||0));
},h=0,c=L(r.length,i&&i.length||0);c>h;h++){
r[h]=a(r[h],n),o(r,h),i&&(i[h]=a(i[h],s)),i&&o(i,h),l(r,i,n,s,h),l(i,r,s,n,h);
var f=r[h],u=i&&i[h],p=f.length,d=i&&u.length;
n.x=f[p-2],n.y=f[p-1],n.bx=G(f[p-4])||n.x,n.by=G(f[p-3])||n.y,s.bx=i&&(G(u[d-4])||s.x),
s.by=i&&(G(u[d-3])||s.y),s.x=i&&u[d-2],s.y=i&&u[d-1];
}
return i?[r,i]:r;
},null,me),Be=(h._parseDots=o(function(t){
for(var e=[],r=0,i=t.length;i>r;r++){
var n={},s=t[r].match(/^([^:]*):?([\d\.]*)/);
if(n.color=h.getRGB(s[1]),n.color.error)return null;
n.color=n.color.hex,s[2]&&(n.offset=s[2]+"%"),e.push(n);
}
for(r=1,i=e.length-1;i>r;r++)if(!e[r].offset){
for(var a=G(e[r-1].offset||0),o=0,l=r+1;i>l;l++)if(e[l].offset){
o=e[l].offset;
break;
}
o||(o=100,l=i),o=G(o);
for(var c=(o-a)/(l-r+1);l>r;r++)a+=c,e[r].offset=a+"%";
}
return e;
}),h._tear=function(t,e){
t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),
t.prev&&(t.prev.next=t.next);
}),Ae=(h._tofront=function(t,e){
e.top!==t&&(Be(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t);
},h._toback=function(t,e){
e.bottom!==t&&(Be(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t);
},h._insertafter=function(t,e,r){
Be(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t;
},h._insertbefore=function(t,e,r){
Be(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,
t.next=e;
},h._extractTransform=function(t,e){
if(null==e)return t._.transform;
e=C(e).replace(/\.{3}|\u2026/g,t._.transform||w);
var r=h.parseTransformString(e),i=0,s=0,a=0,o=1,l=1,c=t._,f=new n;
if(c.transform=r||[],r)for(var u=0,p=r.length;p>u;u++){
var d,g,v,m,y,x=r[u],b=x.length,_=C(x[0]).toLowerCase(),k=x[0]!=_,S=k?f.invert():0;
"t"==_&&3==b?k?(d=S.x(0,0),g=S.y(0,0),v=S.x(x[1],x[2]),m=S.y(x[1],x[2]),f.translate(v-d,m-g)):f.translate(x[1],x[2]):"r"==_?2==b?(y=y||t.getBBox(1),
f.rotate(x[1],y.x+y.width/2,y.y+y.height/2),i+=x[1]):4==b&&(k?(v=S.x(x[2],x[3]),
m=S.y(x[2],x[3]),f.rotate(x[1],v,m)):f.rotate(x[1],x[2],x[3]),i+=x[1]):"s"==_?2==b||3==b?(y=y||t.getBBox(1),
f.scale(x[1],x[b-1],y.x+y.width/2,y.y+y.height/2),o*=x[1],l*=x[b-1]):5==b&&(k?(v=S.x(x[3],x[4]),
m=S.y(x[3],x[4]),f.scale(x[1],x[2],v,m)):f.scale(x[1],x[2],x[3],x[4]),o*=x[1],l*=x[2]):"m"==_&&7==b&&f.add(x[1],x[2],x[3],x[4],x[5],x[6]),
c.dirtyT=1,t.matrix=f;
}
t.matrix=f,c.sx=o,c.sy=l,c.deg=i,c.dx=s=f.e,c.dy=a=f.f,1==o&&1==l&&!i&&c.bbox?(c.bbox.x+=+s,
c.bbox.y+=+a):c.dirtyT=1;
}),Te=function(t){
var e=t[0];
switch(e.toLowerCase()){
case"t":
return[e,0,0];

case"m":
return[e,1,0,0,1,0,0];

case"r":
return 4==t.length?[e,0,t[2],t[3]]:[e,0];

case"s":
return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1];
}
},Ee=h._equaliseTransform=function(t,e){
e=C(e).replace(/\.{3}|\u2026/g,t),t=h.parseTransformString(t)||[],e=h.parseTransformString(e)||[];
for(var r,i,n,s,a=L(t.length,e.length),o=[],l=[],c=0;a>c;c++){
if(n=t[c]||Te(e[c]),s=e[c]||Te(n),n[0]!=s[0]||"r"==n[0].toLowerCase()&&(n[2]!=s[2]||n[3]!=s[3])||"s"==n[0].toLowerCase()&&(n[3]!=s[3]||n[4]!=s[4]))return;
for(o[c]=[],l[c]=[],r=0,i=L(n.length,s.length);i>r;r++)r in n&&(o[c][r]=n[r]),r in s&&(l[c][r]=s[r]);
}
return{
from:o,
to:l
};
};
h._getContainer=function(t,e,r,i){
var n;
return n=null!=i||h.is(t,"object")?t:v.doc.getElementById(t),null!=n?n.tagName?null==e?{
container:n,
width:n.style.pixelWidth||n.offsetWidth,
height:n.style.pixelHeight||n.offsetHeight
}:{
container:n,
width:e,
height:r
}:{
container:1,
x:t,
y:e,
width:r,
height:i
}:void 0;
},h.pathToRelative=ye,h._engine={},h.path2curve=Se,h.matrix=function(t,e,r,i,s,a){
return new n(t,e,r,i,s,a);
},function(t){
function e(t){
var e=E.sqrt(r(t));
t[0]&&(t[0]/=e),t[1]&&(t[1]/=e);
}
function r(t){
return t[0]*t[0]+t[1]*t[1];
}
t.add=function(t,e,r,i,s,a){
var o,l,h,c,f=[[],[],[]],u=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],p=[[t,r,s],[e,i,a],[0,0,1]];
for(t&&t instanceof n&&(p=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),o=0;3>o;o++)for(l=0;3>l;l++){
for(c=0,h=0;3>h;h++)c+=u[o][h]*p[h][l];
f[o][l]=c;
}
this.a=f[0][0],this.b=f[1][0],this.c=f[0][1],this.d=f[1][1],this.e=f[0][2],this.f=f[1][2];
},t.invert=function(){
var t=this,e=t.a*t.d-t.b*t.c;
return new n(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e);
},t.clone=function(){
return new n(this.a,this.b,this.c,this.d,this.e,this.f);
},t.translate=function(t,e){
this.add(1,0,0,1,t,e);
},t.scale=function(t,e,r,i){
null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i);
},t.rotate=function(t,e,r){
t=h.rad(t),e=e||0,r=r||0;
var i=+E.cos(t).toFixed(9),n=+E.sin(t).toFixed(9);
this.add(i,n,-n,i,e,r),this.add(1,0,0,1,-e,-r);
},t.x=function(t,e){
return t*this.a+e*this.c+this.e;
},t.y=function(t,e){
return t*this.b+e*this.d+this.f;
},t.get=function(t){
return+this[C.fromCharCode(97+t)].toFixed(4);
},t.toString=function(){
return h.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join();
},t.toFilter=function(){
return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')";
},t.offset=function(){
return[this.e.toFixed(4),this.f.toFixed(4)];
},t.split=function(){
var t={};
t.dx=this.e,t.dy=this.f;
var i=[[this.a,this.c],[this.b,this.d]];
t.scalex=E.sqrt(r(i[0])),e(i[0]),t.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*t.shear,i[1][1]-i[0][1]*t.shear],
t.scaley=E.sqrt(r(i[1])),e(i[1]),t.shear/=t.scaley;
var n=-i[0][1],s=i[1][1];
return 0>s?(t.rotate=h.deg(E.acos(s)),0>n&&(t.rotate=360-t.rotate)):t.rotate=h.deg(E.asin(n)),
t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),
t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,
t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t;
},t.toTransformString=function(t){
var e=t||this[S]();
return e.isSimple?"t"+[e.dx,e.dy]+"s"+[e.scalex,e.scaley,0,0]+"r"+[e.rotate,0,0]:"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)];
};
}(n.prototype);
var Le=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);
f.safari="Apple Computer, Inc."==navigator.vendor&&(Le&&Le[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Le&&Le[1]<8?function(){
var t=this.rect(-99,-99,this.width+99,this.height+99).attr({
stroke:"none"
});
setTimeout(function(){
t.remove();
});
}:re;
for(var Ne=function(){
this.returnValue=!1;
},Me=function(){
return this.originalEvent.preventDefault();
},ze=function(){
this.cancelBubble=!0;
},Re=function(){
return this.originalEvent.stopPropagation();
},je=function(){
return v.doc.addEventListener?function(t,e,r,i){
var n=_&&A[e]?A[e]:e,s=function(n){
var s=v.doc.documentElement.scrollTop||v.doc.body.scrollTop,a=v.doc.documentElement.scrollLeft||v.doc.body.scrollLeft,o=n.clientX+a,l=n.clientY+s;
if(_&&A[g](e))for(var h=0,c=n.targetTouches&&n.targetTouches.length;c>h;h++)if(n.targetTouches[h].target==t){
var f=n;
n=n.targetTouches[h],n.originalEvent=f,n.preventDefault=Me,n.stopPropagation=Re;
break;
}
return r.call(i,n,o,l);
};
return t.addEventListener(n,s,!1),function(){
return t.removeEventListener(n,s,!1),!0;
};
}:v.doc.attachEvent?function(t,e,r,i){
var n=function(t){
t=t||v.win.event;
var e=v.doc.documentElement.scrollTop||v.doc.body.scrollTop,n=v.doc.documentElement.scrollLeft||v.doc.body.scrollLeft,s=t.clientX+n,a=t.clientY+e;
return t.preventDefault=t.preventDefault||Ne,t.stopPropagation=t.stopPropagation||ze,
r.call(i,t,s,a);
};
t.attachEvent("on"+e,n);
var s=function(){
return t.detachEvent("on"+e,n),!0;
};
return s;
}:void 0;
}(),Fe=[],Pe=function(t){
for(var e,r=t.clientX,i=t.clientY,n=v.doc.documentElement.scrollTop||v.doc.body.scrollTop,s=v.doc.documentElement.scrollLeft||v.doc.body.scrollLeft,a=Fe.length;a--;){
if(e=Fe[a],_){
for(var o,l=t.touches.length;l--;)if(o=t.touches[l],o.identifier==e.el._drag.id){
r=o.clientX,i=o.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();
break;
}
}else t.preventDefault();
var h,c=e.el.node,f=c.nextSibling,u=c.parentNode,p=c.style.display;
v.win.opera&&u.removeChild(c),c.style.display="none",h=e.el.paper.getElementByPoint(r,i),
c.style.display=p,v.win.opera&&(f?u.insertBefore(c,f):u.appendChild(c)),h&&eve("drag.over."+e.el.id,e.el,h),
r+=s,i+=n,eve("drag.move."+e.el.id,e.move_scope||e.el,r-e.el._drag.x,i-e.el._drag.y,r,i,t);
}
},qe=function(t){
h.unmousemove(Pe).unmouseup(qe);
for(var e,r=Fe.length;r--;)e=Fe[r],e.el._drag={},eve("drag.end."+e.el.id,e.end_scope||e.start_scope||e.move_scope||e.el,t);
Fe=[];
},Ie=h.el={},De=B.length;De--;)(function(t){
h[t]=Ie[t]=function(e,r){
return h.is(e,"function")&&(this.events=this.events||[],this.events.push({
name:t,
f:e,
unbind:je(this.shape||this.node||v.doc,t,e,r||this)
})),this;
},h["un"+t]=Ie["un"+t]=function(e){
for(var r=this.events,i=r.length;i--;)if(r[i].name==t&&r[i].f==e)return r[i].unbind(),
r.splice(i,1),!r.length&&delete this.events,this;
return this;
};
})(B[De]);
Ie.data=function(t,e){
var r=te[this.id]=te[this.id]||{};
if(1==arguments.length){
if(h.is(t,"object")){
for(var i in t)t[g](i)&&this.data(i,t[i]);
return this;
}
return eve("data.get."+this.id,this,r[t],t),r[t];
}
return r[t]=e,eve("data.set."+this.id,this,e,t),this;
},Ie.removeData=function(t){
return null==t?te[this.id]={}:te[this.id]&&delete te[this.id][t],this;
},Ie.hover=function(t,e,r,i){
return this.mouseover(t,r).mouseout(e,i||r);
},Ie.unhover=function(t,e){
return this.unmouseover(t).unmouseout(e);
},Ie.drag=function(t,e,r,i,n,s){
function a(a){
(a.originalEvent||a).preventDefault();
var o=v.doc.documentElement.scrollTop||v.doc.body.scrollTop,l=v.doc.documentElement.scrollLeft||v.doc.body.scrollLeft;
this._drag.x=a.clientX+l,this._drag.y=a.clientY+o,this._drag.id=a.identifier,!Fe.length&&h.mousemove(Pe).mouseup(qe),
Fe.push({
el:this,
move_scope:i,
start_scope:n,
end_scope:s
}),e&&eve.on("drag.start."+this.id,e),t&&eve.on("drag.move."+this.id,t),r&&eve.on("drag.end."+this.id,r),
eve("drag.start."+this.id,n||i||this,a.clientX+l,a.clientY+o,a);
}
return this._drag={},this.mousedown(a),this;
},Ie.onDragOver=function(t){
t?eve.on("drag.over."+this.id,t):eve.unbind("drag.over."+this.id);
},Ie.undrag=function(){
for(var t=Fe.length;t--;)Fe[t].el==this&&(h.unmousedown(Fe[t].start),Fe.splice(t++,1),
eve.unbind("drag.*."+this.id));
!Fe.length&&h.unmousemove(Pe).unmouseup(qe);
},f.circle=function(t,e,r){
var i=h._engine.circle(this,t||0,e||0,r||0);
return this.__set__&&this.__set__.push(i),i;
},f.rect=function(t,e,r,i,n){
var s=h._engine.rect(this,t||0,e||0,r||0,i||0,n||0);
return this.__set__&&this.__set__.push(s),s;
},f.ellipse=function(t,e,r,i){
var n=h._engine.ellipse(this,t||0,e||0,r||0,i||0);
return this.__set__&&this.__set__.push(n),n;
},f.path=function(t){
t&&!h.is(t,F)&&!h.is(t[0],P)&&(t+=w);
var e=h._engine.path(h.format[x](h,arguments),this);
return this.__set__&&this.__set__.push(e),e;
},f.image=function(t,e,r,i,n){
var s=h._engine.image(this,t||"about:blank",e||0,r||0,i||0,n||0);
return this.__set__&&this.__set__.push(s),s;
},f.text=function(t,e,r){
var i=h._engine.text(this,t||0,e||0,C(r));
return this.__set__&&this.__set__.push(i),i;
},f.set=function(t){
!h.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));
var e=new Ke(t);
return this.__set__&&this.__set__.push(e),e;
},f.setStart=function(t){
this.__set__=t||this.set();
},f.setFinish=function(){
var t=this.__set__;
return delete this.__set__,t;
},f.setSize=function(t,e){
return h._engine.setSize.call(this,t,e);
},f.setViewBox=function(t,e,r,i,n){
return h._engine.setViewBox.call(this,t,e,r,i,n);
},f.top=f.bottom=null,f.raphael=h;
var Ve=function(t){
var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,s=n.clientTop||i.clientTop||0,a=n.clientLeft||i.clientLeft||0,o=e.top+(v.win.pageYOffset||n.scrollTop||i.scrollTop)-s,l=e.left+(v.win.pageXOffset||n.scrollLeft||i.scrollLeft)-a;
return{
y:o,
x:l
};
};
f.getElementByPoint=function(t,e){
var r=this,i=r.canvas,n=v.doc.elementFromPoint(t,e);
if(v.win.opera&&"svg"==n.tagName){
var s=Ve(i),a=i.createSVGRect();
a.x=t-s.x,a.y=e-s.y,a.width=a.height=1;
var o=i.getIntersectionList(a,null);
o.length&&(n=o[o.length-1]);
}
if(!n)return null;
for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;
return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null;
},f.getById=function(t){
for(var e=this.bottom;e;){
if(e.id==t)return e;
e=e.next;
}
return null;
},f.forEach=function(t,e){
for(var r=this.bottom;r;){
if(t.call(e,r)===!1)return this;
r=r.next;
}
return this;
},Ie.getBBox=function(t){
if(this.removed)return{};
var e=this._;
return t?((e.dirty||!e.bboxwt)&&(this.realPath=ae[this.type](this),e.bboxwt=ve(this.realPath),
e.bboxwt.toString=i,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,
this.realPath=ae[this.type](this)),e.bbox=ve(oe(this.realPath,this.matrix)),e.bbox.toString=i,
e.dirty=e.dirtyT=0),e.bbox);
},Ie.clone=function(){
if(this.removed)return null;
var t=this.paper[this.type]().attr(this.attr());
return this.__set__&&this.__set__.push(t),t;
},Ie.glow=function(t){
if("text"==this.type)return null;
t=t||{};
var e={
width:(t.width||10)+(+this.attr("stroke-width")||1),
fill:t.fill||!1,
opacity:t.opacity||.5,
offsetx:t.offsetx||0,
offsety:t.offsety||0,
color:t.color||"#000"
},r=e.width/2,i=this.paper,n=i.set(),s=this.realPath||ae[this.type](this);
s=this.matrix?oe(s,this.matrix):s;
for(var a=1;r+1>a;a++)n.push(i.path(s).attr({
stroke:e.color,
fill:e.fill?e.color:"none",
"stroke-linejoin":"round",
"stroke-linecap":"round",
"stroke-width":+(e.width/r*a).toFixed(3),
opacity:+(e.opacity/r).toFixed(3)
}));
return n.insertBefore(this).translate(e.offsetx,e.offsety);
};
var Oe={},Ge=function(t,e,r,i,n,s,a,o,l){
var c,f,u=0,p=100,d=[t,e,r,i,n,s,a,o].join(),g=Oe[d];
if(!g&&(Oe[d]=g={
data:[]
}),g.timer&&clearTimeout(g.timer),g.timer=setTimeout(function(){
delete Oe[d];
},2e3),null!=l&&!g.precision){
var v=Ge(t,e,r,i,n,s,a,o);
g.precision=10*~~v,g.data=[];
}
p=g.precision||p;
for(var m=0;p+1>m;m++){
if(g.data[m*p]?f=g.data[m*p]:(f=h.findDotsAtSegment(t,e,r,i,n,s,a,o,m/p),g.data[m*p]=f),
m&&(u+=z(z(c.x-f.x,2)+z(c.y-f.y,2),.5)),null!=l&&u>=l)return f;
c=f;
}
return null==l?u:void 0;
},Ye=function(t,e){
return function(r,i,n){
r=Se(r);
for(var s,a,o,l,c,f="",u={},p=0,d=0,g=r.length;g>d;d++){
if(o=r[d],"M"==o[0])s=+o[1],a=+o[2];else{
if(l=Ge(s,a,o[1],o[2],o[3],o[4],o[5],o[6]),p+l>i){
if(e&&!u.start){
if(c=Ge(s,a,o[1],o[2],o[3],o[4],o[5],o[6],i-p),f+=["C"+c.start.x,c.start.y,c.m.x,c.m.y,c.x,c.y],
n)return f;
u.start=f,f=["M"+c.x,c.y+"C"+c.n.x,c.n.y,c.end.x,c.end.y,o[5],o[6]].join(),p+=l,
s=+o[5],a=+o[6];
continue;
}
if(!t&&!e)return c=Ge(s,a,o[1],o[2],o[3],o[4],o[5],o[6],i-p),{
x:c.x,
y:c.y,
alpha:c.alpha
};
}
p+=l,s=+o[5],a=+o[6];
}
f+=o.shift()+o;
}
return u.end=f,c=t?p:e?u:h.findDotsAtSegment(s,a,o[0],o[1],o[2],o[3],o[4],o[5],1),
c.alpha&&(c={
x:c.x,
y:c.y,
alpha:c.alpha
}),c;
};
},We=Ye(1),Xe=Ye(),He=Ye(0,1);
h.getTotalLength=We,h.getPointAtLength=Xe,h.getSubpath=function(t,e,r){
if(this.getTotalLength(t)-r<1e-6)return He(t,e).end;
var i=He(t,r,1);
return e?He(i,e).end:i;
},Ie.getTotalLength=function(){
return"path"==this.type?this.node.getTotalLength?this.node.getTotalLength():We(this.attrs.path):void 0;
},Ie.getPointAtLength=function(t){
return"path"==this.type?Xe(this.attrs.path,t):void 0;
},Ie.getSubpath=function(t,e){
return"path"==this.type?h.getSubpath(this.attrs.path,t,e):void 0;
};
var Ue=h.easing_formulas={
linear:function(t){
return t;
},
"<":function(t){
return z(t,1.7);
},
">":function(t){
return z(t,.48);
},
"<>":function(t){
var e=.48-t/1.04,r=E.sqrt(.1734+e*e),i=r-e,n=z(M(i),1/3)*(0>i?-1:1),s=-r-e,a=z(M(s),1/3)*(0>s?-1:1),o=n+a+.5;
return 3*(1-o)*o*o+o*o*o;
},
backIn:function(t){
var e=1.70158;
return t*t*((e+1)*t-e);
},
backOut:function(t){
t-=1;
var e=1.70158;
return t*t*((e+1)*t+e)+1;
},
elastic:function(t){
return t==!!t?t:z(2,-10*t)*E.sin(2*(t-.075)*R/.3)+1;
},
bounce:function(t){
var e,r=7.5625,i=2.75;
return 1/i>t?e=r*t*t:2/i>t?(t-=1.5/i,e=r*t*t+.75):2.5/i>t?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,
e=r*t*t+.984375),e;
}
};
Ue.easeIn=Ue["ease-in"]=Ue["<"],Ue.easeOut=Ue["ease-out"]=Ue[">"],Ue.easeInOut=Ue["ease-in-out"]=Ue["<>"],
Ue["back-in"]=Ue.backIn,Ue["back-out"]=Ue.backOut;
var $e=[],Ze=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){
setTimeout(t,16);
},Qe=function(){
for(var e=+new Date,r=0;r<$e.length;r++){
var i=$e[r];
if(!i.el.removed&&!i.paused){
var n,s,a=e-i.start,o=i.ms,l=i.easing,c=i.from,f=i.diff,u=i.to,p=(i.t,i.el),d={},v={};
if(i.initstatus?(a=(i.initstatus*i.anim.top-i.prev)/(i.percent-i.prev)*o,i.status=i.initstatus,
delete i.initstatus,i.stop&&$e.splice(r--,1)):i.status=(i.prev+(i.percent-i.prev)*(a/o))/i.anim.top,
!(0>a))if(o>a){
var m=l(a/o);
for(var y in c)if(c[g](y)){
switch(H[y]){
case j:
n=+c[y]+m*o*f[y];
break;

case"colour":
n="rgb("+[Je(O(c[y].r+m*o*f[y].r)),Je(O(c[y].g+m*o*f[y].g)),Je(O(c[y].b+m*o*f[y].b))].join(",")+")";
break;

case"path":
n=[];
for(var x=0,_=c[y].length;_>x;x++){
n[x]=[c[y][x][0]];
for(var w=1,C=c[y][x].length;C>w;w++)n[x][w]=+c[y][x][w]+m*o*f[y][x][w];
n[x]=n[x].join(k);
}
n=n.join(k);
break;

case"transform":
if(f[y].real)for(n=[],x=0,_=c[y].length;_>x;x++)for(n[x]=[c[y][x][0]],w=1,C=c[y][x].length;C>w;w++)n[x][w]=c[y][x][w]+m*o*f[y][x][w];else{
var S=function(t){
return+c[y][t]+m*o*f[y][t];
};
n=[["m",S(0),S(1),S(2),S(3),S(4),S(5)]];
}
break;

case"csv":
if("clip-rect"==y)for(n=[],x=4;x--;)n[x]=+c[y][x]+m*o*f[y][x];
break;

default:
var B=[][b](c[y]);
for(n=[],x=p.paper.customAttributes[y].length;x--;)n[x]=+B[x]+m*o*f[y][x];
}
d[y]=n;
}
p.attr(d),function(t,e,r){
setTimeout(function(){
eve("anim.frame."+t,e,r);
});
}(p.id,p,i.anim);
}else{
if(function(t,e,r){
setTimeout(function(){
eve("anim.frame."+e.id,e,r),eve("anim.finish."+e.id,e,r),h.is(t,"function")&&t.call(e);
});
}(i.callback,p,i.anim),p.attr(u),$e.splice(r--,1),i.repeat>1&&!i.next){
for(s in u)u[g](s)&&(v[s]=i.totalOrigin[s]);
i.el.attr(v),t(i.anim,i.el,i.anim.percents[0],null,i.totalOrigin,i.repeat-1);
}
i.next&&!i.stop&&t(i.anim,i.el,i.next,null,i.totalOrigin,i.repeat);
}
}
}
h.svg&&p&&p.paper&&p.paper.safari(),$e.length&&Ze(Qe);
},Je=function(t){
return t>255?255:0>t?0:t;
};
Ie.animateWith=function(t,e,r,i,n,s){
var a=r?h.animation(r,i,n,s):e;
return status=t.status(e),this.animate(a).status(a,status*e.ms/a.ms);
},Ie.onAnimation=function(t){
return t?eve.on("anim.frame."+this.id,t):eve.unbind("anim.frame."+this.id),this;
},e.prototype.delay=function(t){
var r=new e(this.anim,this.ms);
return r.times=this.times,r.del=+t||0,r;
},e.prototype.repeat=function(t){
var r=new e(this.anim,this.ms);
return r.del=this.del,r.times=E.floor(L(t,0))||1,r;
},h.animation=function(t,r,i,n){
if(t instanceof e)return t;
(h.is(i,"function")||!i)&&(n=n||i||null,i=null),t=Object(t),r=+r||0;
var s,a,o={};
for(a in t)t[g](a)&&G(a)!=a&&G(a)+"%"!=a&&(s=!0,o[a]=t[a]);
return s?(i&&(o.easing=i),n&&(o.callback=n),new e({
100:o
},r)):new e(t,r);
},Ie.animate=function(r,i,n,s){
var a=this;
if(a.removed)return s&&s.call(a),a;
var o=r instanceof e?r:h.animation(r,i,n,s);
return t(o,a,o.percents[0],null,a.attr()),a;
},Ie.setTime=function(t,e){
return t&&null!=e&&this.status(t,N(e,t.ms)/t.ms),this;
},Ie.status=function(e,r){
var i,n,s=[],a=0;
if(null!=r)return t(e,this,-1,N(r,1)),this;
for(i=$e.length;i>a;a++)if(n=$e[a],n.el.id==this.id&&(!e||n.anim==e)){
if(e)return n.status;
s.push({
anim:n.anim,
status:n.status
});
}
return e?0:s;
},Ie.pause=function(t){
for(var e=0;e<$e.length;e++)$e[e].el.id==this.id&&(!t||$e[e].anim==t)&&eve("anim.pause."+this.id,this,$e[e].anim)!==!1&&($e[e].paused=!0);
return this;
},Ie.resume=function(t){
for(var e=0;e<$e.length;e++)if($e[e].el.id==this.id&&(!t||$e[e].anim==t)){
var r=$e[e];
eve("anim.resume."+this.id,this,r.anim)!==!1&&(delete r.paused,this.status(r.anim,r.status));
}
return this;
},Ie.stop=function(t){
for(var e=0;e<$e.length;e++)$e[e].el.id==this.id&&(!t||$e[e].anim==t)&&eve("anim.stop."+this.id,this,$e[e].anim)!==!1&&$e.splice(e--,1);
return this;
},Ie.toString=function(){
return"Raphaël’s object";
};
var Ke=function(t){
if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)t[e]&&(t[e].constructor==Ie.constructor||t[e].constructor==Ke)&&(this[this.items.length]=this.items[this.items.length]=t[e],
this.length++);
},tr=Ke.prototype;
tr.push=function(){
for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],t&&(t.constructor==Ie.constructor||t.constructor==Ke)&&(e=this.items.length,
this[e]=this.items[e]=t,this.length++);
return this;
},tr.pop=function(){
return this.length&&delete this[this.length--],this.items.pop();
},tr.forEach=function(t,e){
for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;
return this;
};
for(var er in Ie)Ie[g](er)&&(tr[er]=function(t){
return function(){
var e=arguments;
return this.forEach(function(r){
r[t][x](r,e);
});
};
}(er));
tr.attr=function(t,e){
if(t&&h.is(t,P)&&h.is(t[0],"object"))for(var r=0,i=t.length;i>r;r++)this.items[r].attr(t[r]);else for(var n=0,s=this.items.length;s>n;n++)this.items[n].attr(t,e);
return this;
},tr.clear=function(){
for(;this.length;)this.pop();
},tr.splice=function(t,e){
t=0>t?L(this.length+t,0):t,e=L(0,N(this.length-t,e));
var r,i=[],n=[],s=[];
for(r=2;r<arguments.length;r++)s.push(arguments[r]);
for(r=0;e>r;r++)n.push(this[t+r]);
for(;r<this.length-t;r++)i.push(this[t+r]);
var a=s.length;
for(r=0;r<a+i.length;r++)this.items[t+r]=this[t+r]=a>r?s[r]:i[r-a];
for(r=this.items.length=this.length-=e-a;this[r];)delete this[r++];
return new Ke(n);
},tr.exclude=function(t){
for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0;
},tr.animate=function(t,e,r,i){
(h.is(r,"function")||!r)&&(i=r||null);
var n,s,a=this.items.length,o=a,l=this;
if(!a)return this;
i&&(s=function(){
!--a&&i.call(l);
}),r=h.is(r,F)?r:s;
var c=h.animation(t,e,r,s);
for(n=this.items[--o].animate(c);o--;)this.items[o]&&!this.items[o].removed&&this.items[o].animateWith(n,c);
return this;
},tr.insertAfter=function(t){
for(var e=this.items.length;e--;)this.items[e].insertAfter(t);
return this;
},tr.getBBox=function(){
for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){
var s=this.items[n].getBBox();
t.push(s.x),e.push(s.y),r.push(s.x+s.width),i.push(s.y+s.height);
}
return t=N[x](0,t),e=N[x](0,e),{
x:t,
y:e,
width:L[x](0,r)-t,
height:L[x](0,i)-e
};
},tr.clone=function(t){
t=new Ke;
for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());
return t;
},tr.toString=function(){
return"Raphaël‘s set";
},h.registerFont=function(t){
if(!t.face)return t;
this.fonts=this.fonts||{};
var e={
w:t.w,
face:{},
glyphs:{}
},r=t.face["font-family"];
for(var i in t.face)t.face[g](i)&&(e.face[i]=t.face[i]);
if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){
e.face["units-per-em"]=Y(t.face["units-per-em"],10);
for(var n in t.glyphs)if(t.glyphs[g](n)){
var s=t.glyphs[n];
if(e.glyphs[n]={
w:s.w,
k:{},
d:s.d&&"M"+s.d.replace(/[mlcxtrv]/g,function(t){
return{
l:"L",
c:"C",
x:"z",
t:"m",
r:"l",
v:"c"
}[t]||"M";
})+"z"
},s.k)for(var a in s.k)s[g](a)&&(e.glyphs[n].k[a]=s.k[a]);
}
}
return t;
},f.getFont=function(t,e,r,i){
if(i=i||"normal",r=r||"normal",e=+e||{
normal:400,
bold:700,
lighter:300,
bolder:800
}[e]||400,h.fonts){
var n=h.fonts[t];
if(!n){
var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,w)+"(\\s|$)","i");
for(var a in h.fonts)if(h.fonts[g](a)&&s.test(a)){
n=h.fonts[a];
break;
}
}
var o;
if(n)for(var l=0,c=n.length;c>l&&(o=n[l],o.face["font-weight"]!=e||o.face["font-style"]!=r&&o.face["font-style"]||o.face["font-stretch"]!=i);l++);
return o;
}
},f.print=function(t,e,r,i,n,s,a){
s=s||"middle",a=L(N(a||0,1),-1);
var o,l=this.set(),c=C(r)[S](w),f=0;
if(h.is(i,r)&&(i=this.getFont(i)),i){
o=(n||16)/i.face["units-per-em"];
for(var p=i.face.bbox[S](u),d=+p[0],g=+p[1]+("baseline"==s?p[3]-p[1]+ +i.face.descent:(p[3]-p[1])/2),v=0,m=c.length;m>v;v++){
var y=v&&i.glyphs[c[v-1]]||{},x=i.glyphs[c[v]];
f+=v?(y.w||i.w)+(y.k&&y.k[c[v]]||0)+i.w*a:0,x&&x.d&&l.push(this.path(x.d).attr({
fill:"#000",
stroke:"none",
transform:[["t",f*o,0]]
}));
}
l.transform(["...s",o,o,d,g,"t",(t-d)/o,(e-g)/o]);
}
return l;
},h.format=function(t,e){
var r=h.is(e,P)?[0][b](e):arguments;
return t&&h.is(t,F)&&r.length-1&&(t=t.replace(d,function(t,e){
return null==r[++e]?w:r[e];
})),t||w;
},h.fullfill=function(){
var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){
var n=i;
return r.replace(e,function(t,e,r,i,s){
e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&s&&(n=n()));
}),n=(null==n||n==i?t:n)+"";
};
return function(e,i){
return String(e).replace(t,function(t,e){
return r(t,e,i);
});
};
}(),h.ninja=function(){
return m.was?v.win.Raphael=m.is:delete Raphael,h;
},h.st=tr,function(t,e,r){
function i(){
/in/.test(t.readyState)?setTimeout(i,9):h.eve("DOMload");
}
null==t.readyState&&t.addEventListener&&(t.addEventListener(e,r=function(){
t.removeEventListener(e,r,!1),t.readyState="complete";
},!1),t.readyState="loading"),i();
}(document,"DOMContentLoaded"),m.was?v.win.Raphael=h:Raphael=h,eve.on("DOMload",function(){
c=!0;
});
}(),window.Raphael.svg&&function(t){
var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,s=Math,a=s.max,o=s.abs,l=s.pow,h=/[, ]+/,c=t.eve,f="",u=" ",p="http://www.w3.org/1999/xlink",d={
block:"M5,0 0,2.5 5,5z",
classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",
diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",
open:"M6,1 1,3.5 6,6",
oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
},g={};
t.toString=function(){
return"Your browser supports SVG.\nYou are running Raphaël "+this.version;
};
var v=function(i,n){
if(n){
"string"==typeof i&&(i=v(i));
for(var s in n)n[e](s)&&("xlink:"==s.substring(0,6)?i.setAttributeNS(p,s.substring(6),r(n[s])):i.setAttribute(s,r(n[s])));
}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");
return i;
},m={},y=/^url\(#(.*)\)$/,x=function(e,n){
var h="linear",c=e.id+n,u=.5,p=.5,d=e.node,g=e.paper,m=d.style,y=t._g.doc.getElementById(c);
if(!y){
if(n=r(n).replace(t._radial_gradient,function(t,e,r){
if(h="radial",e&&r){
u=i(e),p=i(r);
var n=2*(p>.5)-1;
l(u-.5,2)+l(p-.5,2)>.25&&(p=s.sqrt(.25-l(u-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n);
}
return f;
}),n=n.split(/\s*\-\s*/),"linear"==h){
var x=n.shift();
if(x=-i(x),isNaN(x))return null;
var b=[0,0,s.cos(t.rad(x)),s.sin(t.rad(x))],_=1/(a(o(b[2]),o(b[3]))||1);
b[2]*=_,b[3]*=_,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0);
}
var w=t._parseDots(n);
if(!w)return null;
e.gradient&&(g.defs.removeChild(e.gradient),delete e.gradient),c=c.replace(/[\(\)\s,\xb0#]/g,"-"),
y=v(h+"Gradient",{
id:c
}),e.gradient=y,v(y,"radial"==h?{
fx:u,
fy:p
}:{
x1:b[0],
y1:b[1],
x2:b[2],
y2:b[3],
gradientTransform:e.matrix.invert()
}),g.defs.appendChild(y);
for(var k=0,C=w.length;C>k;k++)y.appendChild(v("stop",{
offset:w[k].offset?w[k].offset:k?"100%":"0%",
"stop-color":w[k].color||"#fff"
}));
}
return v(d,{
fill:"url(#"+c+")",
opacity:1,
"fill-opacity":1
}),m.fill=f,m.opacity=1,m.fillOpacity=1,1;
},b=function(t){
var e=t.getBBox(1);
v(t.pattern,{
patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"
});
},_=function(i,n,s){
if("path"==i.type){
for(var a,o,l,h,c,f=r(n).toLowerCase().split("-"),p=i.paper,m=s?"end":"start",y=i.node,x=i.attrs,b=x["stroke-width"],_=f.length,w="classic",k=3,C=3,S=5;_--;)switch(f[_]){
case"block":
case"classic":
case"oval":
case"diamond":
case"open":
case"none":
w=f[_];
break;

case"wide":
C=5;
break;

case"narrow":
C=2;
break;

case"long":
k=5;
break;

case"short":
k=2;
}
if("open"==w?(k+=2,C+=2,S+=2,l=1,h=s?4:1,c={
fill:"none",
stroke:x.stroke
}):(h=l=k/2,c={
fill:x.stroke,
stroke:"none"
}),i._.arrows?s?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,
i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){
var B="raphael-marker-"+w,A="raphael-marker-"+m+w+k+C;
t._g.doc.getElementById(B)?g[B]++:(p.defs.appendChild(v(v("path"),{
"stroke-linecap":"round",
d:d[w],
id:B
})),g[B]=1);
var T,E=t._g.doc.getElementById(A);
E?(g[A]++,T=E.getElementsByTagName("use")[0]):(E=v(v("marker"),{
id:A,
markerHeight:C,
markerWidth:k,
orient:"auto",
refX:h,
refY:C/2
}),T=v(v("use"),{
"xlink:href":"#"+B,
transform:(s?" rotate(180 "+k/2+" "+C/2+") ":u)+"scale("+k/S+","+C/S+")",
"stroke-width":1/((k/S+C/S)/2)
}),E.appendChild(T),p.defs.appendChild(E),g[A]=1),v(T,c);
var L=l*("diamond"!=w&&"oval"!=w);
s?(a=i._.arrows.startdx*b||0,o=t.getTotalLength(x.path)-L*b):(a=L*b,o=t.getTotalLength(x.path)-(i._.arrows.enddx*b||0)),
c={},c["marker-"+m]="url(#"+A+")",(o||a)&&(c.d=Raphael.getSubpath(x.path,a,o)),v(y,c),
i._.arrows[m+"Path"]=B,i._.arrows[m+"Marker"]=A,i._.arrows[m+"dx"]=L,i._.arrows[m+"Type"]=w,
i._.arrows[m+"String"]=n;
}else s?(a=i._.arrows.startdx*b||0,o=t.getTotalLength(x.path)-a):(a=0,o=t.getTotalLength(x.path)-(i._.arrows.enddx*b||0)),
i._.arrows[m+"Path"]&&v(y,{
d:Raphael.getSubpath(x.path,a,o)
}),delete i._.arrows[m+"Path"],delete i._.arrows[m+"Marker"],delete i._.arrows[m+"dx"],
delete i._.arrows[m+"Type"],delete i._.arrows[m+"String"];
for(c in g)if(g[e](c)&&!g[c]){
var N=t._g.doc.getElementById(c);
N&&N.parentNode.removeChild(N);
}
}
},w={
"":[0],
none:[0],
"-":[3,1],
".":[1,1],
"-.":[3,1,1,1],
"-..":[3,1,1,1,1,1],
". ":[1,3],
"- ":[4,3],
"--":[8,3],
"- .":[4,3,1,3],
"--.":[8,3,1,3],
"--..":[8,3,1,3,1,3]
},k=function(t,e,i){
if(e=w[r(e).toLowerCase()]){
for(var n=t.attrs["stroke-width"]||"1",s={
round:n,
square:n,
butt:0
}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,a=[],o=e.length;o--;)a[o]=e[o]*n+(o%2?1:-1)*s;
v(t.node,{
"stroke-dasharray":a.join(",")
});
}
},C=function(i,s){
var l=i.node,c=i.attrs,u=l.style.visibility;
l.style.visibility="hidden";
for(var d in s)if(s[e](d)){
if(!t._availableAttrs[e](d))continue;
var g=s[d];
switch(c[d]=g,d){
case"blur":
i.blur(g);
break;

case"href":
case"title":
case"target":
var m=l.parentNode;
if("a"!=m.tagName.toLowerCase()){
var y=v("a");
m.insertBefore(y,l),y.appendChild(l),m=y;
}
"target"==d&&"blank"==g?m.setAttributeNS(p,"show","new"):m.setAttributeNS(p,d,g);
break;

case"cursor":
l.style.cursor=g;
break;

case"transform":
i.transform(g);
break;

case"arrow-start":
_(i,g);
break;

case"arrow-end":
_(i,g,1);
break;

case"clip-rect":
var w=r(g).split(h);
if(4==w.length){
i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
var C=v("clipPath"),S=v("rect");
C.id=t.createUUID(),v(S,{
x:w[0],
y:w[1],
width:w[2],
height:w[3]
}),C.appendChild(S),i.paper.defs.appendChild(C),v(l,{
"clip-path":"url(#"+C.id+")"
}),i.clip=S;
}
if(!g){
var A=t._g.doc.getElementById(l.getAttribute("clip-path").replace(/(^url\(#|\)$)/g,f));
A&&A.parentNode.removeChild(A),v(l,{
"clip-path":f
}),delete i.clip;
}
break;

case"path":
"path"==i.type&&(v(l,{
d:g?c.path=t._pathToAbsolute(g):"M0,0"
}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),
"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));
break;

case"width":
if(l.setAttribute(d,g),i._.dirty=1,!c.fx)break;
d="x",g=c.x;

case"x":
c.fx&&(g=-c.x-(c.width||0));

case"rx":
if("rx"==d&&"rect"==i.type)break;

case"cx":
l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;
break;

case"height":
if(l.setAttribute(d,g),i._.dirty=1,!c.fy)break;
d="y",g=c.y;

case"y":
c.fy&&(g=-c.y-(c.height||0));

case"ry":
if("ry"==d&&"rect"==i.type)break;

case"cy":
l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;
break;

case"r":
"rect"==i.type?v(l,{
rx:g,
ry:g
}):l.setAttribute(d,g),i._.dirty=1;
break;

case"src":
"image"==i.type&&l.setAttributeNS(p,"href",g);
break;

case"stroke-width":
(1!=i._.sx||1!=i._.sy)&&(g/=a(o(i._.sx),o(i._.sy))||1),i.paper._vbSize&&(g*=i.paper._vbSize),
l.setAttribute(d,g),c["stroke-dasharray"]&&k(i,c["stroke-dasharray"],s),i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),
"endString"in i._.arrows&&_(i,i._.arrows.endString,1));
break;

case"stroke-dasharray":
k(i,g,s);
break;

case"fill":
var T=r(g).match(t._ISURL);
if(T){
C=v("pattern");
var E=v("image");
C.id=t.createUUID(),v(C,{
x:0,
y:0,
patternUnits:"userSpaceOnUse",
height:1,
width:1
}),v(E,{
x:0,
y:0,
"xlink:href":T[1]
}),C.appendChild(E),function(e){
t._preload(T[1],function(){
var t=this.offsetWidth,r=this.offsetHeight;
v(e,{
width:t,
height:r
}),v(E,{
width:t,
height:r
}),i.paper.safari();
});
}(C),i.paper.defs.appendChild(C),l.style.fill="url(#"+C.id+")",v(l,{
fill:"url(#"+C.id+")"
}),i.pattern=C,i.pattern&&b(i);
break;
}
var L=t.getRGB(g);
if(L.error){
if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){
if("opacity"in c||"fill-opacity"in c){
var N=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,f));
if(N){
var M=N.getElementsByTagName("stop");
v(M[M.length-1],{
"stop-opacity":("opacity"in c?c.opacity:1)*("fill-opacity"in c?c["fill-opacity"]:1)
});
}
}
c.gradient=g,c.fill="none";
break;
}
}else delete s.gradient,delete c.gradient,!t.is(c.opacity,"undefined")&&t.is(s.opacity,"undefined")&&v(l,{
opacity:c.opacity
}),!t.is(c["fill-opacity"],"undefined")&&t.is(s["fill-opacity"],"undefined")&&v(l,{
"fill-opacity":c["fill-opacity"]
});
L[e]("opacity")&&v(l,{
"fill-opacity":L.opacity>1?L.opacity/100:L.opacity
});

case"stroke":
L=t.getRGB(g),l.setAttribute(d,L.hex),"stroke"==d&&L[e]("opacity")&&v(l,{
"stroke-opacity":L.opacity>1?L.opacity/100:L.opacity
}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),
"endString"in i._.arrows&&_(i,i._.arrows.endString,1));
break;

case"gradient":
("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);
break;

case"opacity":
c.gradient&&!c[e]("stroke-opacity")&&v(l,{
"stroke-opacity":g>1?g/100:g
});

case"fill-opacity":
if(c.gradient){
N=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,f)),N&&(M=N.getElementsByTagName("stop"),
v(M[M.length-1],{
"stop-opacity":g
}));
break;
}

default:
"font-size"==d&&(g=n(g,10)+"px");
var z=d.replace(/(\-.)/g,function(t){
return t.substring(1).toUpperCase();
});
l.style[z]=g,i._.dirty=1,l.setAttribute(d,g);
}
}
B(i,s),l.style.visibility=u;
},S=1.2,B=function(i,s){
if("text"==i.type&&(s[e]("text")||s[e]("font")||s[e]("font-size")||s[e]("x")||s[e]("y"))){
var a=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,f).getPropertyValue("font-size"),10):10;
if(s[e]("text")){
for(a.text=s.text;o.firstChild;)o.removeChild(o.firstChild);
for(var h,c=r(s.text).split("\n"),u=[],p=0,d=c.length;d>p;p++)h=v("tspan"),p&&v(h,{
dy:l*S,
x:a.x
}),h.appendChild(t._g.doc.createTextNode(c[p])),o.appendChild(h),u[p]=h;
}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;d>p;p++)p?v(u[p],{
dy:l*S,
x:a.x
}):v(u[0],{
dy:0
});
v(o,{
x:a.x,
y:a.y
}),i._.dirty=1;
var g=i._getBBox(),m=a.y-(g.y+g.height/2);
m&&t.is(m,"finite")&&v(u[0],{
dy:m
});
}
},A=function(e,r){
this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.matrix=t.matrix(),
this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={
transform:[],
sx:1,
sy:1,
deg:0,
dx:0,
dy:0,
dirty:1
},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,
this.next=null;
},T=t.el;
A.prototype=T,T.constructor=A,t._engine.path=function(t,e){
var r=v("path");
e.canvas&&e.canvas.appendChild(r);
var i=new A(r,e);
return i.type="path",C(i,{
fill:"none",
stroke:"#000",
path:t
}),i;
},T.rotate=function(t,e,n){
if(this.removed)return this;
if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){
var s=this.getBBox(1);
e=s.x+s.width/2,n=s.y+s.height/2;
}
return this.transform(this._.transform.concat([["r",t,e,n]])),this;
},T.scale=function(t,e,n,s){
if(this.removed)return this;
if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),s=i(t[3])),t=i(t[0]),null==e&&(e=t),
null==s&&(n=s),null==n||null==s)var a=this.getBBox(1);
return n=null==n?a.x+a.width/2:n,s=null==s?a.y+a.height/2:s,this.transform(this._.transform.concat([["s",t,e,n,s]])),
this;
},T.translate=function(t,e){
return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,
this.transform(this._.transform.concat([["t",t,e]])),this);
},T.transform=function(r){
var i=this._;
if(null==r)return i.transform;
if(t._extractTransform(this,r),this.clip&&v(this.clip,{
transform:this.matrix.invert()
}),this.pattern&&b(this),this.node&&v(this.node,{
transform:this.matrix
}),1!=i.sx||1!=i.sy){
var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;
this.attr({
"stroke-width":n
});
}
return this;
},T.hide=function(){
return!this.removed&&this.paper.safari(this.node.style.display="none"),this;
},T.show=function(){
return!this.removed&&this.paper.safari(this.node.style.display=""),this;
},T.remove=function(){
if(!this.removed){
this.paper.__set__&&this.paper.__set__.exclude(this),c.unbind("*.*."+this.id),t._tear(this,this.paper),
this.node.parentNode.removeChild(this.node);
for(var e in this)delete this[e];
this.removed=!0;
}
},T._getBBox=function(){
if("none"==this.node.style.display){
this.show();
var t=!0;
}
var e={};
try{
e=this.node.getBBox();
}catch(r){}finally{
e=e||{};
}
return t&&this.hide(),e;
},T.attr=function(r,i){
if(this.removed)return this;
if(null==r){
var n={};
for(var s in this.attrs)this.attrs[e](s)&&(n[s]=this.attrs[s]);
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,
n;
}
if(null==i&&t.is(r,"string")){
if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;
if("transform"==r)return this._.transform;
for(var a=r.split(h),o={},l=0,f=a.length;f>l;l++)r=a[l],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];
return f-1?o:o[a[0]];
}
if(null==i&&t.is(r,"array")){
for(o={},l=0,f=r.length;f>l;l++)o[r[l]]=this.attr(r[l]);
return o;
}
if(null!=i){
var u={};
u[r]=i;
}else null!=r&&t.is(r,"object")&&(u=r);
for(var p in u)c("attr."+p+"."+this.id,this,u[p]);
for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&u[e](p)&&t.is(this.paper.customAttributes[p],"function")){
var d=this.paper.customAttributes[p].apply(this,[].concat(u[p]));
this.attrs[p]=u[p];
for(var g in d)d[e](g)&&(u[g]=d[g]);
}
return C(this,u),this;
},T.toFront=function(){
if(this.removed)return this;
this.node.parentNode.appendChild(this.node);
var e=this.paper;
return e.top!=this&&t._tofront(this,e),this;
},T.toBack=function(){
if(this.removed)return this;
if(this.node.parentNode.firstChild!=this.node){
this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper);
{
this.paper;
}
}
return this;
},T.insertAfter=function(e){
if(this.removed)return this;
var r=e.node||e[e.length-1].node;
return r.nextSibling?r.parentNode.insertBefore(this.node,r.nextSibling):r.parentNode.appendChild(this.node),
t._insertafter(this,e,this.paper),this;
},T.insertBefore=function(e){
if(this.removed)return this;
var r=e.node||e[0].node;
return r.parentNode.insertBefore(this.node,r),t._insertbefore(this,e,this.paper),
this;
},T.blur=function(e){
var r=this;
if(0!==+e){
var i=v("filter"),n=v("feGaussianBlur");
r.attrs.blur=e,i.id=t.createUUID(),v(n,{
stdDeviation:+e||1.5
}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{
filter:"url(#"+i.id+")"
});
}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),
r.node.removeAttribute("filter");
},t._engine.circle=function(t,e,r,i){
var n=v("circle");
t.canvas&&t.canvas.appendChild(n);
var s=new A(n,t);
return s.attrs={
cx:e,
cy:r,
r:i,
fill:"none",
stroke:"#000"
},s.type="circle",v(n,s.attrs),s;
},t._engine.rect=function(t,e,r,i,n,s){
var a=v("rect");
t.canvas&&t.canvas.appendChild(a);
var o=new A(a,t);
return o.attrs={
x:e,
y:r,
width:i,
height:n,
r:s||0,
rx:s||0,
ry:s||0,
fill:"none",
stroke:"#000"
},o.type="rect",v(a,o.attrs),o;
},t._engine.ellipse=function(t,e,r,i,n){
var s=v("ellipse");
t.canvas&&t.canvas.appendChild(s);
var a=new A(s,t);
return a.attrs={
cx:e,
cy:r,
rx:i,
ry:n,
fill:"none",
stroke:"#000"
},a.type="ellipse",v(s,a.attrs),a;
},t._engine.image=function(t,e,r,i,n,s){
var a=v("image");
v(a,{
x:r,
y:i,
width:n,
height:s,
preserveAspectRatio:"none"
}),a.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(a);
var o=new A(a,t);
return o.attrs={
x:r,
y:i,
width:n,
height:s,
src:e
},o.type="image",o;
},t._engine.text=function(e,r,i,n){
var s=v("text");
e.canvas&&e.canvas.appendChild(s);
var a=new A(s,e);
return a.attrs={
x:r,
y:i,
"text-anchor":"middle",
text:n,
font:t._availableAttrs.font,
stroke:"none",
fill:"#000"
},a.type="text",C(a,a.attrs),a;
},t._engine.setSize=function(t,e){
return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),
this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),
this;
},t._engine.create=function(){
var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,s=e.width,a=e.height;
if(!r)throw new Error("SVG container not found.");
var o,l=v("svg"),h="overflow:hidden;";
return i=i||0,n=n||0,s=s||512,a=a||342,v(l,{
height:a,
version:1.1,
width:s,
xmlns:"http://www.w3.org/2000/svg"
}),1==r?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(l),
o=1):(l.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l)),
r=new t._Paper,r.width=s,r.height=a,r.canvas=l,r.clear(),r._left=r._top=0,o&&(r.renderfix=function(){}),
r.renderfix(),r;
},t._engine.setViewBox=function(t,e,r,i,n){
c("setViewBox",this,this._viewBox,[t,e,r,i,n]);
var s,o,l=a(r/this.width,i/this.height),h=this.top,f=n?"meet":"xMinYMin";
for(null==t?(this._vbSize&&(l=1),delete this._vbSize,s="0 0 "+this.width+u+this.height):(this._vbSize=l,
s=t+u+e+u+r+u+i),v(this.canvas,{
viewBox:s,
preserveAspectRatio:f
});l&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({
"stroke-width":o
}),h._.dirty=1,h._.dirtyT=1,h=h.prev;
return this._viewBox=[t,e,r,i,!!n],this;
},t.prototype.renderfix=function(){
var t=this.canvas,e=t.style,r=t.getScreenCTM()||t.createSVGMatrix(),i=-r.e%1,n=-r.f%1;
(i||n)&&(i&&(this._left=(this._left+i)%1,e.left=this._left+"px"),n&&(this._top=(this._top+n)%1,
e.top=this._top+"px"));
},t.prototype.clear=function(){
t.eve("clear",this);
for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);
this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),
e.appendChild(this.desc),e.appendChild(this.defs=v("defs"));
},t.prototype.remove=function(){
c("remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
for(var t in this)this[t]=removed(t);
};
var E=t.st;
for(var L in T)T[e](L)&&!E[e](L)&&(E[L]=function(t){
return function(){
var e=arguments;
return this.forEach(function(r){
r[t].apply(r,e);
});
};
}(L));
}(window.Raphael),window.Raphael.vml&&function(t){
var e="hasOwnProperty",r=String,i=parseFloat,n=Math,s=n.round,a=n.max,o=n.min,l=n.abs,h="fill",c=/[, ]+/,f=t.eve,u=" progid:DXImageTransform.Microsoft",p=" ",d="",g={
M:"m",
L:"l",
C:"c",
Z:"x",
m:"t",
l:"r",
c:"v",
z:"x"
},v=/([clmz]),?([^clmz]*)/gi,m=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,x="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={
path:1,
rect:1,
image:1
},w={
circle:1,
ellipse:1
},k=function(e){
var i=/[ahqstv]/gi,n=t._pathToAbsolute;
if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){
var a=r(e).replace(v,function(t,e,r){
var i=[],n="m"==e.toLowerCase(),a=g[e];
return r.replace(y,function(t){
n&&2==i.length&&(a+=i+g["m"==e?"l":"L"],i=[]),i.push(s(t*b));
}),a+i;
});
return a;
}
var o,l,h=n(e);
a=[];
for(var c=0,f=h.length;f>c;c++){
o=h[c],l=h[c][0].toLowerCase(),"z"==l&&(l="x");
for(var u=1,m=o.length;m>u;u++)l+=s(o[u]*b)+(u!=m-1?",":d);
a.push(l);
}
return a.join(p);
},C=function(e,r,i){
var n=t.matrix();
return n.rotate(-e,.5,.5),{
dx:n.x(r,i),
dy:n.y(r,i)
};
},S=function(t,e,r,i,n,s){
var a=t._,o=t.matrix,c=a.fillpos,f=t.node,u=f.style,d=1,g="",v=b/e,m=b/r;
if(u.visibility="hidden",e&&r){
if(f.coordsize=l(v)+p+l(m),u.rotation=s*(0>e*r?-1:1),s){
var y=C(s,i,n);
i=y.dx,n=y.dy;
}
if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),u.flip=g,f.coordorigin=i*-v+p+n*-m,c||a.fillsize){
var x=f.getElementsByTagName(h);
x=x&&x[0],f.removeChild(x),c&&(y=C(s,o.x(c[0],c[1]),o.y(c[0],c[1])),x.position=y.dx*d+p+y.dy*d),
a.fillsize&&(x.size=a.fillsize[0]*l(e)+p+a.fillsize[1]*l(r)),f.appendChild(x);
}
u.visibility="visible";
}
};
t.toString=function(){
return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version;
},addArrow=function(t,e,i){
for(var n=r(e).toLowerCase().split("-"),s=i?"end":"start",a=n.length,o="classic",l="medium",h="medium";a--;)switch(n[a]){
case"block":
case"classic":
case"oval":
case"diamond":
case"open":
case"none":
o=n[a];
break;

case"wide":
case"narrow":
h=n[a];
break;

case"long":
case"short":
l=n[a];
}
var c=t.node.getElementsByTagName("stroke")[0];
c[s+"arrow"]=o,c[s+"arrowlength"]=l,c[s+"arrowwidth"]=h;
},setFillAndStroke=function(n,l){
n.attrs=n.attrs||{};
var f=n.node,u=n.attrs,g=f.style,v=_[n.type]&&(l.x!=u.x||l.y!=u.y||l.width!=u.width||l.height!=u.height||l.cx!=u.cx||l.cy!=u.cy||l.rx!=u.rx||l.ry!=u.ry||l.r!=u.r),m=w[n.type]&&(u.cx!=l.cx||u.cy!=l.cy||u.r!=l.r||u.rx!=l.rx||u.ry!=l.ry),y=n;
for(var x in l)l[e](x)&&(u[x]=l[x]);
if(v&&(u.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(f.href=l.href),l.title&&(f.title=l.title),
l.target&&(f.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),
(l.path&&"path"==n.type||v)&&(f.path=k(~r(u.path).toLowerCase().indexOf("r")?t._pathToAbsolute(u.path):u.path),
"image"==n.type&&(n._.fillpos=[u.x,u.y],n._.fillsize=[u.width,u.height],S(n,1,1,0,0,0))),
"transform"in l&&n.transform(l.transform),m){
var C=+u.cx,B=+u.cy,T=+u.rx||+u.r||0,E=+u.ry||+u.r||0;
f.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",s((C-T)*b),s((B-E)*b),s((C+T)*b),s((B+E)*b),s(C*b));
}
if("clip-rect"in l){
var L=r(l["clip-rect"]).split(c);
if(4==L.length){
L[2]=+L[2]+ +L[0],L[3]=+L[3]+ +L[1];
var N=f.clipRect||t._g.doc.createElement("div"),M=N.style;
M.clip=t.format("rect({1}px {2}px {3}px {0}px)",L),f.clipRect||(M.position="absolute",
M.top=0,M.left=0,M.width=n.paper.width+"px",M.height=n.paper.height+"px",f.parentNode.insertBefore(N,f),
N.appendChild(f),f.clipRect=N);
}
l["clip-rect"]||f.clipRect&&(f.clipRect.style.clip=d);
}
if(n.textpath){
var z=n.textpath.style;
l.font&&(z.font=l.font),l["font-family"]&&(z.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),
l["font-size"]&&(z.fontSize=l["font-size"]),l["font-weight"]&&(z.fontWeight=l["font-weight"]),
l["font-style"]&&(z.fontStyle=l["font-style"]);
}
if("arrow-start"in l&&addArrow(y,l["arrow-start"]),"arrow-end"in l&&addArrow(y,l["arrow-end"],1),
null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){
var R=f.getElementsByTagName(h),j=!1;
if(R=R&&R[0],!R&&(j=R=A(h)),"image"==n.type&&l.src&&(R.src=l.src),l.fill&&(R.on=!0),
(null==R.on||"none"==l.fill||null===l.fill)&&(R.on=!1),R.on&&l.fill){
var F=r(l.fill).match(t._ISURL);
if(F){
R.parentNode==f&&f.removeChild(R),R.rotate=!0,R.src=F[1],R.type="tile";
var P=n.getBBox(1);
R.position=P.x+p+P.y,n._.fillpos=[P.x,P.y],t._preload(F[1],function(){
n._.fillsize=[this.offsetWidth,this.offsetHeight];
});
}else R.color=t.getRGB(l.fill).hex,R.src=d,R.type="solid",t.getRGB(l.fill).error&&(y.type in{
circle:1,
ellipse:1
}||"r"!=r(l.fill).charAt())&&addGradientFill(y,l.fill,R)&&(u.fill="none",u.gradient=l.fill,
R.rotate=!1);
}
if("fill-opacity"in l||"opacity"in l){
var q=((+u["fill-opacity"]+1||2)-1)*((+u.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);
q=o(a(q,0),1),R.opacity=q,R.src&&(R.color="none");
}
f.appendChild(R);
var I=f.getElementsByTagName("stroke")&&f.getElementsByTagName("stroke")[0],D=!1;
!I&&(D=I=A("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(I.on=!0),
("none"==l.stroke||null===l.stroke||null==I.on||0==l.stroke||0==l["stroke-width"])&&(I.on=!1);
var V=t.getRGB(l.stroke);
I.on&&l.stroke&&(I.color=V.hex),q=((+u["stroke-opacity"]+1||2)-1)*((+u.opacity+1||2)-1)*((+V.o+1||2)-1);
var O=.75*(i(l["stroke-width"])||1);
if(q=o(a(q,0),1),null==l["stroke-width"]&&(O=u["stroke-width"]),l["stroke-width"]&&(I.weight=O),
O&&1>O&&(q*=O)&&(I.weight=1),I.opacity=q,l["stroke-linejoin"]&&(I.joinstyle=l["stroke-linejoin"]||"miter"),
I.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(I.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),
l["stroke-dasharray"]){
var G={
"-":"shortdash",
".":"shortdot",
"-.":"shortdashdot",
"-..":"shortdashdotdot",
". ":"dot",
"- ":"dash",
"--":"longdash",
"- .":"dashdot",
"--.":"longdashdot",
"--..":"longdashdotdot"
};
I.dashstyle=G[e](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:d;
}
D&&f.appendChild(I);
}
if("text"==y.type){
y.paper.canvas.style.display=d;
var Y=y.paper.span,W=100,X=u.font&&u.font.match(/\d+(?:\.\d*)?(?=px)/);
g=Y.style,u.font&&(g.font=u.font),u["font-family"]&&(g.fontFamily=u["font-family"]),
u["font-weight"]&&(g.fontWeight=u["font-weight"]),u["font-style"]&&(g.fontStyle=u["font-style"]),
X=i(X?X[0]:u["font-size"]),g.fontSize=X*W+"px",y.textpath.string&&(Y.innerHTML=r(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));
var H=Y.getBoundingClientRect();
y.W=u.w=(H.right-H.left)/W,y.H=u.h=(H.bottom-H.top)/W,y.X=u.x,y.Y=u.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=t.format("m{0},{1}l{2},{1}",s(u.x*b),s(u.y*b),s(u.x*b)+1));
for(var U=["x","y","text","font","font-family","font-weight","font-style","font-size"],$=0,Z=U.length;Z>$;$++)if(U[$]in l){
y._.dirty=1;
break;
}
switch(u["text-anchor"]){
case"start":
y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;
break;

case"end":
y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;
break;

default:
y.textpath.style["v-text-align"]="center",y.bbx=0;
}
y.textpath.style["v-text-kern"]=!0;
}
},addGradientFill=function(e,s,a){
e.attrs=e.attrs||{};
var o=(e.attrs,Math.pow),l="linear",h=".5 .5";
if(e.attrs.gradient=s,s=r(s).replace(t._radial_gradient,function(t,e,r){
return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),
h=e+p+r),d;
}),s=s.split(/\s*\-\s*/),"linear"==l){
var c=s.shift();
if(c=-i(c),isNaN(c))return null;
}
var f=t._parseDots(s);
if(!f)return null;
if(e=e.shape||e.node,f.length){
e.removeChild(a),a.on=!0,a.method="none",a.color=f[0].color,a.color2=f[f.length-1].color;
for(var u=[],g=0,v=f.length;v>g;g++)f[g].offset&&u.push(f[g].offset+p+f[g].color);
a.colors=u.length?u.join():"0% "+a.color,"radial"==l?(a.type="gradientTitle",a.focus="100%",
a.focussize="0 0",a.focusposition=h,a.angle=0):(a.type="gradient",a.angle=(270-c)%360),
e.appendChild(a);
}
return 1;
},Element=function(e,r){
this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,
this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={
transform:[],
sx:1,
sy:1,
dx:0,
dy:0,
deg:0,
dirty:1,
dirtyT:1
},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,
this.next=null;
};
var B=t.el;
Element.prototype=B,B.constructor=Element,B.transform=function(e){
if(null==e)return this._.transform;
var i,n=this.paper._viewBoxShift,s=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;
n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,s+e);
var a,o=this.matrix.clone(),l=this.skew,h=this.node,c=~r(this.attrs.fill).indexOf("-"),f=!r(this.attrs.fill).indexOf("url(");
if(o.translate(-.5,-.5),f||c||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",
a=o.split(),c&&a.noRotation||!a.isSimple){
h.style.filter=o.toFilter();
var u=this.getBBox(),g=this.getBBox(1),v=u.x-g.x,m=u.y-g.y;
h.coordorigin=v*-b+p+m*-b,S(this,1,1,v,m,0);
}else h.style.filter=d,S(this,a.scalex,a.scaley,a.dx,a.dy,a.rotate);else h.style.filter=d,
l.matrix=r(o),l.offset=o.offset();
return i&&(this._.transform=i),this;
},B.rotate=function(t,e,n){
if(this.removed)return this;
if(null!=t){
if(t=r(t).split(c),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){
var s=this.getBBox(1);
e=s.x+s.width/2,n=s.y+s.height/2;
}
return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this;
}
},B.translate=function(t,e){
return this.removed?this:(t=r(t).split(c),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,
this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),
this);
},B.scale=function(t,e,n,s){
if(this.removed)return this;
if(t=r(t).split(c),t.length-1&&(e=i(t[1]),n=i(t[2]),s=i(t[3]),isNaN(n)&&(n=null),
isNaN(s)&&(s=null)),t=i(t[0]),null==e&&(e=t),null==s&&(n=s),null==n||null==s)var a=this.getBBox(1);
return n=null==n?a.x+a.width/2:n,s=null==s?a.y+a.height/2:s,this.transform(this._.transform.concat([["s",t,e,n,s]])),
this._.dirtyT=1,this;
},B.hide=function(){
return!this.removed&&(this.node.style.display="none"),this;
},B.show=function(){
return!this.removed&&(this.node.style.display=d),this;
},B._getBBox=function(){
return this.removed?{}:"text"==this.type?{
x:this.X+(this.bbx||0)-this.W/2,
y:this.Y-this.H,
width:this.W,
height:this.H
}:pathDimensions(this.attrs.path);
},B.remove=function(){
if(!this.removed){
this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("*.*."+this.id),
t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);
for(var e in this)delete this[e];
this.removed=!0;
}
},B.attr=function(r,i){
if(this.removed)return this;
if(null==r){
var n={};
for(var s in this.attrs)this.attrs[e](s)&&(n[s]=this.attrs[s]);
return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,
n;
}
if(null==i&&t.is(r,"string")){
if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;
for(var a=r.split(c),o={},l=0,u=a.length;u>l;l++)r=a[l],o[r]=r in this.attrs?this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?this.paper.customAttributes[r].def:t._availableAttrs[r];
return u-1?o:o[a[0]];
}
if(this.attrs&&null==i&&t.is(r,"array")){
for(o={},l=0,u=r.length;u>l;l++)o[r[l]]=this.attr(r[l]);
return o;
}
var p;
null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);
for(var d in p)f("attr."+d+"."+this.id,this,p[d]);
if(p){
for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){
var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));
this.attrs[d]=p[d];
for(var v in g)g[e](v)&&(p[v]=g[v]);
}
p.text&&"text"==this.type&&(this.textpath.string=p.text),setFillAndStroke(this,p);
}
return this;
},B.toFront=function(){
return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),
this;
},B.toBack=function(){
return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),
t._toback(this,this.paper)),this);
},B.insertAfter=function(e){
return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),
t._insertafter(this,e,this.paper),this);
},B.insertBefore=function(e){
return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),
t._insertbefore(this,e,this.paper),this);
},B.blur=function(e){
var r=this.node.runtimeStyle,i=r.filter;
i=i.replace(m,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+u+".Blur(pixelradius="+(+e||1.5)+")",
r.margin=t.format("-{0}px 0 0 -{0}px",s(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur);
},t._engine.path=function(t,e){
var r=A("shape");
r.style.cssText=x,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;
var i=new Element(r,e),n={
fill:"none",
stroke:"#000"
};
t&&(n.path=t),i.type="path",i.path=[],i.Path=d,setFillAndStroke(i,n),e.canvas.appendChild(r);
var s=A("skew");
return s.on=!0,r.appendChild(s),i.skew=s,i.transform(d),i;
},t._engine.rect=function(e,r,i,n,s,a){
var o=t._rectPath(r,i,n,s,a),l=e.path(o),h=l.attrs;
return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=s,h.r=a,h.path=o,l.type="rect",
l;
},t._engine.ellipse=function(t,e,r,i,n){
{
var s=t.path();
s.attrs;
}
return s.X=e-i,s.Y=r-n,s.W=2*i,s.H=2*n,s.type="ellipse",setFillAndStroke(s,{
cx:e,
cy:r,
rx:i,
ry:n
}),s;
},t._engine.circle=function(t,e,r,i){
{
var n=t.path();
n.attrs;
}
return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",setFillAndStroke(n,{
cx:e,
cy:r,
r:i
}),n;
},t._engine.image=function(e,r,i,n,s,a){
var o=t._rectPath(i,n,s,a),l=e.path(o).attr({
stroke:"none"
}),c=l.attrs,f=l.node,u=f.getElementsByTagName(h)[0];
return c.src=r,l.X=c.x=i,l.Y=c.y=n,l.W=c.width=s,l.H=c.height=a,c.path=o,l.type="image",
u.parentNode==f&&f.removeChild(u),u.rotate=!0,u.src=r,u.type="tile",l._.fillpos=[i,n],
l._.fillsize=[s,a],f.appendChild(u),S(l,1,1,0,0,0),l;
},t._engine.text=function(e,i,n,a){
var o=A("shape"),l=A("path"),h=A("textpath");
i=i||0,n=n||0,a=a||"",l.v=t.format("m{0},{1}l{2},{1}",s(i*b),s(n*b),s(i*b)+1),l.textpathok=!0,
h.string=r(a),h.on=!0,o.style.cssText=x,o.coordsize=b+p+b,o.coordorigin="0 0";
var c=new Element(o,e),f={
fill:"#000",
stroke:"none",
font:t._availableAttrs.font,
text:a
};
c.shape=o,c.path=l,c.textpath=h,c.type="text",c.attrs.text=r(a),c.attrs.x=i,c.attrs.y=n,
c.attrs.w=1,c.attrs.h=1,setFillAndStroke(c,f),o.appendChild(h),o.appendChild(l),
e.canvas.appendChild(o);
var u=A("skew");
return u.on=!0,o.appendChild(u),c.skew=u,c.transform(d),c;
},t._engine.setSize=function(t,e){
var r=this.canvas.style;
return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),r.width=t,r.height=e,
r.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&setViewBox.apply(this,this._viewBox),
this;
},t._engine.setViewBox=function(e,r,i,n,s){
t.eve("setViewBox",this,this._viewBox,[e,r,i,n,s]);
var o,l,h=this.width,c=this.height,f=1/a(i/h,n/c);
return s&&(o=c/n,l=h/i,h>i*o&&(e-=(h-i*o)/2/o),c>n*l&&(r-=(c-n*l)/2/l)),this._viewBox=[e,r,i,n,!!s],
this._viewBoxShift={
dx:-e,
dy:-r,
scale:f
},this.forEach(function(t){
t.transform("...");
}),this;
};
var A,T=function(t){
var e=t.document;
e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");
try{
!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),A=function(t){
return e.createElement("<rvml:"+t+' class="rvml">');
};
}catch(r){
A=function(t){
return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
};
}
};
T(t._g.win),t._engine.create=function(){
var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,s=e.x,a=e.y;
if(!r)throw new Error("VML container not found.");
var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style;
return s=s||0,a=a||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),
o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),
o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",
l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),
1==r?(t._g.doc.body.appendChild(l),h.left=s+"px",h.top=a+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),
o.renderfix=function(){},o;
},t.prototype.clear=function(){
t.eve("clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),
this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",
this.canvas.appendChild(this.span),this.bottom=this.top=null;
},t.prototype.remove=function(){
t.eve("remove",this),this.canvas.parentNode.removeChild(this.canvas);
for(var e in this)this[e]=removed(e);
return!0;
};
var E=t.st;
for(var L in B)B[e](L)&&!E[e](L)&&(E[L]=function(t){
return function(){
var e=arguments;
return this.forEach(function(r){
r[t].apply(r,e);
});
};
}(L));
}(window.Raphael);