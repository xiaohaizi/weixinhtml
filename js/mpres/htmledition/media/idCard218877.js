define("common/wx/media/idCard.js", [ "tpl/media/id_card.html.js", "widget/media.css", "common/qq/Class.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("tpl/media/id_card.html.js"), o = e("widget/media.css"), u = e("common/qq/Class.js"), a = wx.url("/misc/getheadimg?1=1"), f = u.declare({
init: function(e) {
if (!e || !e.container) return;
e.avatar = a + "&fakeid=" + e.fakeid, $(e.container).html(wx.T(s, e)).data(e), this.opt = e;
},
getData: function() {
return this.opt;
}
});
n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/media/idCard.js"
}, l);
}
});