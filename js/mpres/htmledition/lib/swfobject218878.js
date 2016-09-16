define("biz_web/lib/swfobject.js", [], function(e, t, n) {
try {
var r = +(new Date), i = function() {
function e() {
if (U) return;
try {
var e = M.getElementsByTagName("body")[0].appendChild(g("span"));
e.parentNode.removeChild(e);
} catch (t) {
return;
}
U = !0;
var n = P.length;
for (var r = 0; r < n; r++) P[r]();
}
function t(e) {
U ? e() : P[P.length] = e;
}
function n(e) {
if (typeof O.addEventListener != x) O.addEventListener("load", e, !1); else if (typeof M.addEventListener != x) M.addEventListener("load", e, !1); else if (typeof O.attachEvent != x) y(O, "onload", e); else if (typeof O.onload == "function") {
var t = O.onload;
O.onload = function() {
t(), e();
};
} else O.onload = e;
}
function r() {
D ? s() : o();
}
function s() {
var e = M.getElementsByTagName("body")[0], t = g(T);
t.setAttribute("type", k);
var n = e.appendChild(t);
if (n) {
var r = 0;
(function() {
if (typeof n.GetVariable != x) {
var i = n.GetVariable("$version");
i && (i = i.split(" ")[1].split(","), $.pv = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]);
} else if (r < 10) {
r++, setTimeout(arguments.callee, 10);
return;
}
e.removeChild(t), n = null, o();
})();
} else o();
}
function o() {
var e = H.length;
if (e > 0) for (var t = 0; t < e; t++) {
var n = H[t].id, r = H[t].callbackFn, i = {
success: !1,
id: n
};
if ($.pv[0] > 0) {
var s = m(n);
if (s) if (b(H[t].swfVersion) && !($.wk && $.wk < 312)) E(n, !0), r && (i.success = !0, i.ref = u(n), r(i)); else if (H[t].expressInstall && a()) {
var o = {};
o.data = H[t].expressInstall, o.width = s.getAttribute("width") || "0", o.height = s.getAttribute("height") || "0", s.getAttribute("class") && (o.styleclass = s.getAttribute("class")), s.getAttribute("align") && (o.align = s.getAttribute("align"));
var c = {}, h = s.getElementsByTagName("param"), p = h.length;
for (var d = 0; d < p; d++) h[d].getAttribute("name").toLowerCase() != "movie" && (c[h[d].getAttribute("name")] = h[d].getAttribute("value"));
f(o, c, n, r);
} else l(s), r && r(i);
} else {
E(n, !0);
if (r) {
var v = u(n);
v && typeof v.SetVariable != x && (i.success = !0, i.ref = v), r(i);
}
}
}
}
function u(e) {
var t = null, n = m(e);
if (n && n.nodeName == "OBJECT") if (typeof n.SetVariable != x) t = n; else {
var r = n.getElementsByTagName(T)[0];
r && (t = r);
}
return t;
}
function a() {
return !z && b("6.0.65") && ($.win || $.mac) && !($.wk && $.wk < 312);
}
function f(e, t, n, r) {
z = !0, q = r || null, R = {
success: !1,
id: n
};
var i = m(n);
if (i) {
i.nodeName == "OBJECT" ? (F = c(i), I = null) : (F = i, I = n), e.id = L;
if (typeof e.width == x || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) e.width = "310";
if (typeof e.height == x || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) e.height = "137";
M.title = M.title.slice(0, 47) + " - Flash Player Installation";
var s = $.ie && $.win ? "ActiveX" : "PlugIn", o = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + M.title;
typeof t.flashvars != x ? t.flashvars += "&" + o : t.flashvars = o;
if ($.ie && $.win && i.readyState != 4) {
var u = g("div");
n += "SWFObjectNew", u.setAttribute("id", n), i.parentNode.insertBefore(u, i), i.style.display = "none", function() {
i.readyState == 4 ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10);
}();
}
h(e, t, n);
}
}
function l(e) {
if ($.ie && $.win && e.readyState != 4) {
var t = g("div");
e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none", function() {
e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
}();
} else e.parentNode.replaceChild(c(e), e);
}
function c(e) {
var t = g("div");
if ($.win && $.ie) t.innerHTML = e.innerHTML; else {
var n = e.getElementsByTagName(T)[0];
if (n) {
var r = n.childNodes;
if (r) {
var i = r.length;
for (var s = 0; s < i; s++) (r[s].nodeType != 1 || r[s].nodeName != "PARAM") && r[s].nodeType != 8 && t.appendChild(r[s].cloneNode(!0));
}
}
}
return t;
}
function h(e, t, n) {
var r, i = m(n);
if ($.wk && $.wk < 312) return r;
if (i) {
typeof e.id == x && (e.id = n);
if ($.ie && $.win) {
var s = "";
for (var o in e) e[o] != Object.prototype[o] && (o.toLowerCase() == "data" ? t.movie = e[o] : o.toLowerCase() == "styleclass" ? s += ' class="' + e[o] + '"' : o.toLowerCase() != "classid" && (s += " " + o + '="' + e[o] + '"'));
var u = "";
for (var a in t) t[a] != Object.prototype[a] && (u += '<param name="' + a + '" value="' + t[a] + '" />');
i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + u + "</object>", B[B.length] = e.id, r = m(e.id);
} else {
var f = g(T);
f.setAttribute("type", k);
for (var l in e) e[l] != Object.prototype[l] && (l.toLowerCase() == "styleclass" ? f.setAttribute("class", e[l]) : l.toLowerCase() != "classid" && f.setAttribute(l, e[l]));
for (var c in t) t[c] != Object.prototype[c] && c.toLowerCase() != "movie" && p(f, c, t[c]);
i.parentNode.replaceChild(f, i), r = f;
}
}
return r;
}
function p(e, t, n) {
var r = g("param");
r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
}
function d(e) {
var t = m(e);
t && t.nodeName == "OBJECT" && ($.ie && $.win ? (t.style.display = "none", function() {
t.readyState == 4 ? v(e) : setTimeout(arguments.callee, 10);
}()) : t.parentNode.removeChild(t));
}
function v(e) {
var t = m(e);
if (t) {
for (var n in t) typeof t[n] == "function" && (t[n] = null);
t.parentNode.removeChild(t);
}
}
function m(e) {
var t = null;
try {
t = M.getElementById(e);
} catch (n) {}
return t;
}
function g(e) {
return M.createElement(e);
}
function y(e, t, n) {
e.attachEvent(t, n), j[j.length] = [ e, t, n ];
}
function b(e) {
var t = $.pv, n = e.split(".");
return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1;
}
function w(e, t, n, r) {
if ($.ie && $.mac) return;
var i = M.getElementsByTagName("head")[0];
if (!i) return;
var s = n && typeof n == "string" ? n : "screen";
r && (W = null, X = null);
if (!W || X != s) {
var o = g("style");
o.setAttribute("type", "text/css"), o.setAttribute("media", s), W = i.appendChild(o), $.ie && $.win && typeof M.styleSheets != x && M.styleSheets.length > 0 && (W = M.styleSheets[M.styleSheets.length - 1]), X = s;
}
$.ie && $.win ? W && typeof W.addRule == T && W.addRule(e, t) : W && typeof M.createTextNode != x && W.appendChild(M.createTextNode(e + " {" + t + "}"));
}
function E(e, t) {
if (!V) return;
var n = t ? "visible" : "hidden";
U && m(e) ? m(e).style.visibility = n : w("#" + e, "visibility:" + n);
}
function S(e) {
var t = /[\\\"<>\.;]/, n = t.exec(e) != null;
return n && typeof encodeURIComponent != x ? encodeURIComponent(e) : e;
}
var x = "undefined", T = "object", N = "Shockwave Flash", C = "ShockwaveFlash.ShockwaveFlash", k = "application/x-shockwave-flash", L = "SWFObjectExprInst", A = "onreadystatechange", O = window, M = document, _ = navigator, D = !1, P = [ r ], H = [], B = [], j = [], F, I, q, R, U = !1, z = !1, W, X, V = !0, $ = function() {
var e = typeof M.getElementById != x && typeof M.getElementsByTagName != x && typeof M.createElement != x, t = _.userAgent.toLowerCase(), n = _.platform.toLowerCase(), r = n ? /win/.test(n) : /win/.test(t), i = n ? /mac/.test(n) : /mac/.test(t), s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, o = !1, u = [ 0, 0, 0 ], a = null;
if (typeof _.plugins != x && typeof _.plugins[N] == T) a = _.plugins[N].description, a && (typeof _.mimeTypes == x || !_.mimeTypes[k] || !!_.mimeTypes[k].enabledPlugin) && (D = !0, o = !1, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof O.ActiveXObject != x) try {
var f = new ActiveXObject(C);
f && (a = f.GetVariable("$version"), a && (o = !0, a = a.split(" ")[1].split(","), u = [ parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10) ]));
} catch (l) {}
return {
w3: e,
pv: u,
wk: s,
ie: o,
win: r,
mac: i
};
}(), J = function() {
if (!$.w3) return;
(typeof M.readyState != x && M.readyState == "complete" || typeof M.readyState == x && (M.getElementsByTagName("body")[0] || M.body)) && e(), U || (typeof M.addEventListener != x && M.addEventListener("DOMContentLoaded", e, !1), $.ie && $.win && (M.attachEvent(A, function() {
M.readyState == "complete" && (M.detachEvent(A, arguments.callee), e());
}), O == top && function() {
if (U) return;
try {
M.documentElement.doScroll("left");
} catch (t) {
setTimeout(arguments.callee, 0);
return;
}
e();
}()), $.wk && function() {
if (U) return;
if (!/loaded|complete/.test(M.readyState)) {
setTimeout(arguments.callee, 0);
return;
}
e();
}(), n(e));
}(), K = function() {
$.ie && $.win && window.attachEvent("onunload", function() {
var e = j.length;
for (var t = 0; t < e; t++) j[t][0].detachEvent(j[t][1], j[t][2]);
var n = B.length;
for (var r = 0; r < n; r++) d(B[r]);
for (var s in $) $[s] = null;
$ = null;
for (var o in i) i[o] = null;
i = null;
});
}();
return {
registerObject: function(e, t, n, r) {
if ($.w3 && e && t) {
var i = {};
i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, H[H.length] = i, E(e, !1);
} else r && r({
success: !1,
id: e
});
},
getObjectById: function(e) {
if ($.w3) return u(e);
},
embedSWF: function(e, n, r, i, s, o, u, l, c, p) {
var d = {
success: !1,
id: n
};
$.w3 && !($.wk && $.wk < 312) && e && n && r && i && s ? (E(n, !1), t(function() {
r += "", i += "";
var t = {};
if (c && typeof c === T) for (var v in c) t[v] = c[v];
t.data = e, t.width = r, t.height = i;
var m = {};
if (l && typeof l === T) for (var g in l) m[g] = l[g];
if (u && typeof u === T) for (var y in u) typeof m.flashvars != x ? m.flashvars += "&" + y + "=" + u[y] : m.flashvars = y + "=" + u[y];
if (b(s)) {
var w = h(t, m, n);
t.id == n && E(n, !0), d.success = !0, d.ref = w;
} else {
if (o && a()) {
t.data = o, f(t, m, n, p);
return;
}
E(n, !0);
}
p && p(d);
})) : p && p(d);
},
switchOffAutoHideShow: function() {
V = !1;
},
ua: $,
getFlashPlayerVersion: function() {
return {
major: $.pv[0],
minor: $.pv[1],
release: $.pv[2]
};
},
hasFlashPlayerVersion: b,
createSWF: function(e, t, n) {
return $.w3 ? h(e, t, n) : undefined;
},
showExpressInstall: function(e, t, n, r) {
$.w3 && a() && f(e, t, n, r);
},
removeSWF: function(e) {
$.w3 && d(e);
},
createCSS: function(e, t, n, r) {
$.w3 && w(e, t, n, r);
},
addDomLoadEvent: t,
addLoadEvent: n,
getQueryParamValue: function(e) {
var t = M.location.search || M.location.hash;
if (t) {
/\?/.test(t) && (t = t.split("?")[1]);
if (e == null) return S(t);
var n = t.split("&");
for (var r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return S(n[r].substring(n[r].indexOf("=") + 1));
}
return "";
},
expressInstallCallback: function() {
if (z) {
var e = m(L);
e && F && (e.parentNode.replaceChild(F, e), I && (E(I, !0), $.ie && $.win && (F.style.display = "block")), q && q(R)), z = !1;
}
}
};
}();
return i;
} catch (s) {
wx.jslog({
src: "biz_web/lib/swfobject.js"
}, s);
}
});