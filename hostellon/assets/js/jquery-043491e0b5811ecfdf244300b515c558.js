/*!
 * jQuery JavaScript Library v1.10.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-24T18:39Z
 */
!function(e, t) {
function n(e) {
var t = e.length, n = ut.type(e);
return ut.isWindow(e) ? !1 :1 === e.nodeType && t ? !0 :"array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
}
function o(e) {
var t = Tt[e] = {};
return ut.each(e.match(pt) || [], function(e, n) {
t[n] = !0;
}), t;
}
function r(e, n, o, r) {
if (ut.acceptData(e)) {
var i, a, s = ut.expando, l = e.nodeType, c = l ? ut.cache :e, u = l ? e[s] :e[s] && s;
if (u && c[u] && (r || c[u].data) || o !== t || "string" != typeof n) return u || (u = l ? e[s] = tt.pop() || ut.guid++ :s), 
c[u] || (c[u] = l ? {} :{
toJSON:ut.noop
}), ("object" == typeof n || "function" == typeof n) && (r ? c[u] = ut.extend(c[u], n) :c[u].data = ut.extend(c[u].data, n)), 
a = c[u], r || (a.data || (a.data = {}), a = a.data), o !== t && (a[ut.camelCase(n)] = o), 
"string" == typeof n ? (i = a[n], null == i && (i = a[ut.camelCase(n)])) :i = a, 
i;
}
}
function i(e, t, n) {
if (ut.acceptData(e)) {
var o, r, i = e.nodeType, a = i ? ut.cache :e, l = i ? e[ut.expando] :ut.expando;
if (a[l]) {
if (t && (o = n ? a[l] :a[l].data)) {
ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) :t in o ? t = [ t ] :(t = ut.camelCase(t), 
t = t in o ? [ t ] :t.split(" ")), r = t.length;
for (;r--; ) delete o[t[r]];
if (n ? !s(o) :!ut.isEmptyObject(o)) return;
}
(n || (delete a[l].data, s(a[l]))) && (i ? ut.cleanData([ e ], !0) :ut.support.deleteExpando || a != a.window ? delete a[l] :a[l] = null);
}
}
}
function a(e, n, o) {
if (o === t && 1 === e.nodeType) {
var r = "data-" + n.replace(Lt, "-$1").toLowerCase();
if (o = e.getAttribute(r), "string" == typeof o) {
try {
o = "true" === o ? !0 :"false" === o ? !1 :"null" === o ? null :+o + "" === o ? +o :Mt.test(o) ? ut.parseJSON(o) :o;
} catch (i) {}
ut.data(e, n, o);
} else o = t;
}
return o;
}
function s(e) {
var t;
for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
return !0;
}
function l() {
return !0;
}
function c() {
return !1;
}
function u() {
try {
return X.activeElement;
} catch (e) {}
}
function d(e, t) {
do e = e[t]; while (e && 1 !== e.nodeType);
return e;
}
function p(e, t, n) {
if (ut.isFunction(t)) return ut.grep(e, function(e, o) {
return !!t.call(e, o, e) !== n;
});
if (t.nodeType) return ut.grep(e, function(e) {
return e === t !== n;
});
if ("string" == typeof t) {
if (Ht.test(t)) return ut.filter(t, e, n);
t = ut.filter(t, e);
}
return ut.grep(e, function(e) {
return ut.inArray(e, t) >= 0 !== n;
});
}
function h(e) {
var t = Wt.split("|"), n = e.createDocumentFragment();
if (n.createElement) for (;t.length; ) n.createElement(t.pop());
return n;
}
function m(e, t) {
return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
}
function g(e) {
return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e;
}
function f(e) {
var t = rn.exec(e.type);
return t ? e.type = t[1] :e.removeAttribute("type"), e;
}
function y(e, t) {
for (var n, o = 0; null != (n = e[o]); o++) ut._data(n, "globalEval", !t || ut._data(t[o], "globalEval"));
}
function v(e, t) {
if (1 === t.nodeType && ut.hasData(e)) {
var n, o, r, i = ut._data(e), a = ut._data(t, i), s = i.events;
if (s) {
delete a.handle, a.events = {};
for (n in s) for (o = 0, r = s[n].length; r > o; o++) ut.event.add(t, n, s[n][o]);
}
a.data && (a.data = ut.extend({}, a.data));
}
}
function _(e, t) {
var n, o, r;
if (1 === t.nodeType) {
if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
r = ut._data(t);
for (o in r.events) ut.removeEvent(t, o, r.handle);
t.removeAttribute(ut.expando);
}
"script" === n && t.text !== e.text ? (g(t).text = e.text, f(t)) :"object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
t.value !== e.value && (t.value = e.value)) :"option" === n ? t.defaultSelected = t.selected = e.defaultSelected :("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
}
}
function w(e, n) {
var o, r, i = 0, a = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") :typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") :t;
if (!a) for (a = [], o = e.childNodes || e; null != (r = o[i]); i++) !n || ut.nodeName(r, n) ? a.push(r) :ut.merge(a, w(r, n));
return n === t || n && ut.nodeName(e, n) ? ut.merge([ e ], a) :a;
}
function b(e) {
tn.test(e.type) && (e.defaultChecked = e.checked);
}
function x(e, t) {
if (t in e) return t;
for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, r = Tn.length; r--; ) if (t = Tn[r] + n, 
t in e) return t;
return o;
}
function k(e, t) {
return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e);
}
function S(e, t) {
for (var n, o, r, i = [], a = 0, s = e.length; s > a; a++) o = e[a], o.style && (i[a] = ut._data(o, "olddisplay"), 
n = o.style.display, t ? (i[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && k(o) && (i[a] = ut._data(o, "olddisplay", C(o.nodeName)))) :i[a] || (r = k(o), 
(n && "none" !== n || !r) && ut._data(o, "olddisplay", r ? n :ut.css(o, "display"))));
for (a = 0; s > a; a++) o = e[a], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? i[a] || "" :"none"));
return e;
}
function T(e, t, n) {
var o = vn.exec(t);
return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") :t;
}
function M(e, t, n, o, r) {
for (var i = n === (o ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; 4 > i; i += 2) "margin" === n && (a += ut.css(e, n + Sn[i], !0, r)), 
o ? ("content" === n && (a -= ut.css(e, "padding" + Sn[i], !0, r)), "margin" !== n && (a -= ut.css(e, "border" + Sn[i] + "Width", !0, r))) :(a += ut.css(e, "padding" + Sn[i], !0, r), 
"padding" !== n && (a += ut.css(e, "border" + Sn[i] + "Width", !0, r)));
return a;
}
function L(e, t, n) {
var o = !0, r = "width" === t ? e.offsetWidth :e.offsetHeight, i = dn(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i);
if (0 >= r || null == r) {
if (r = pn(e, t, i), (0 > r || null == r) && (r = e.style[t]), _n.test(r)) return r;
o = a && (ut.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
}
return r + M(e, t, n || (a ? "border" :"content"), o, i) + "px";
}
function C(e) {
var t = X, n = bn[e];
return n || (n = D(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
t.close(), n = D(e, t), un.detach()), bn[e] = n), n;
}
function D(e, t) {
var n = ut(t.createElement(e)).appendTo(t.body), o = ut.css(n[0], "display");
return n.remove(), o;
}
function E(e, t, n, o) {
var r;
if (ut.isArray(t)) ut.each(t, function(t, r) {
n || Ln.test(e) ? o(e, r) :E(e + "[" + ("object" == typeof r ? t :"") + "]", r, n, o);
}); else if (n || "object" !== ut.type(t)) o(e, t); else for (r in t) E(e + "[" + r + "]", t[r], n, o);
}
function $(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var o, r = 0, i = t.toLowerCase().match(pt) || [];
if (ut.isFunction(n)) for (;o = i[r++]; ) "+" === o[0] ? (o = o.slice(1) || "*", 
(e[o] = e[o] || []).unshift(n)) :(e[o] = e[o] || []).push(n);
};
}
function I(e, t, n, o) {
function r(s) {
var l;
return i[s] = !0, ut.each(e[s] || [], function(e, s) {
var c = s(t, n, o);
return "string" != typeof c || a || i[c] ? a ? !(l = c) :void 0 :(t.dataTypes.unshift(c), 
r(c), !1);
}), l;
}
var i = {}, a = e === zn;
return r(t.dataTypes[0]) || !i["*"] && r("*");
}
function A(e, n) {
var o, r, i = ut.ajaxSettings.flatOptions || {};
for (r in n) n[r] !== t && ((i[r] ? e :o || (o = {}))[r] = n[r]);
return o && ut.extend(!0, e, o), e;
}
function P(e, n, o) {
for (var r, i, a, s, l = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
if (i) for (s in l) if (l[s] && l[s].test(i)) {
c.unshift(s);
break;
}
if (c[0] in o) a = c[0]; else {
for (s in o) {
if (!c[0] || e.converters[s + " " + c[0]]) {
a = s;
break;
}
r || (r = s);
}
a = a || r;
}
return a ? (a !== c[0] && c.unshift(a), o[a]) :void 0;
}
function Y(e, t, n, o) {
var r, i, a, s, l, c = {}, u = e.dataTypes.slice();
if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
for (i = u.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
!l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
if (a = c[l + " " + i] || c["* " + i], !a) for (r in c) if (s = r.split(" "), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
a === !0 ? a = c[r] :c[r] !== !0 && (i = s[0], u.unshift(s[1]));
break;
}
if (a !== !0) if (a && e["throws"]) t = a(t); else try {
t = a(t);
} catch (d) {
return {
state:"parsererror",
error:a ? d :"No conversion from " + l + " to " + i
};
}
}
return {
state:"success",
data:t
};
}
function N() {
try {
return new e.XMLHttpRequest();
} catch (t) {}
}
function O() {
try {
return new e.ActiveXObject("Microsoft.XMLHTTP");
} catch (t) {}
}
function q() {
return setTimeout(function() {
Zn = t;
}), Zn = ut.now();
}
function B(e, t, n) {
for (var o, r = (io[t] || []).concat(io["*"]), i = 0, a = r.length; a > i; i++) if (o = r[i].call(n, t, e)) return o;
}
function R(e, t, n) {
var o, r, i = 0, a = ro.length, s = ut.Deferred().always(function() {
delete l.elem;
}), l = function() {
if (r) return !1;
for (var t = Zn || q(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, i = 1 - o, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(i);
return s.notifyWith(e, [ c, i, n ]), 1 > i && l ? n :(s.resolveWith(e, [ c ]), !1);
}, c = s.promise({
elem:e,
props:ut.extend({}, t),
opts:ut.extend(!0, {
specialEasing:{}
}, n),
originalProperties:t,
originalOptions:n,
startTime:Zn || q(),
duration:n.duration,
tweens:[],
createTween:function(t, n) {
var o = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
return c.tweens.push(o), o;
},
stop:function(t) {
var n = 0, o = t ? c.tweens.length :0;
if (r) return this;
for (r = !0; o > n; n++) c.tweens[n].run(1);
return t ? s.resolveWith(e, [ c, t ]) :s.rejectWith(e, [ c, t ]), this;
}
}), u = c.props;
for (F(u, c.opts.specialEasing); a > i; i++) if (o = ro[i].call(c, e, u, c.opts)) return o;
return ut.map(u, B, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), 
ut.fx.timer(ut.extend(l, {
elem:e,
anim:c,
queue:c.opts.queue
})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
}
function F(e, t) {
var n, o, r, i, a;
for (n in e) if (o = ut.camelCase(n), r = t[o], i = e[n], ut.isArray(i) && (r = i[1], 
i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), a = ut.cssHooks[o], a && "expand" in a) {
i = a.expand(i), delete e[o];
for (n in i) n in e || (e[n] = i[n], t[n] = r);
} else t[o] = r;
}
function H(e, t, n) {
var o, r, i, a, s, l, c = this, u = {}, d = e.style, p = e.nodeType && k(e), h = ut._data(e, "fxshow");
n.queue || (s = ut._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, 
l = s.empty.fire, s.empty.fire = function() {
s.unqueued || l();
}), s.unqueued++, c.always(function() {
c.always(function() {
s.unqueued--, ut.queue(e, "fx").length || s.empty.fire();
});
})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
"inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? d.zoom = 1 :d.display = "inline-block")), 
n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
}));
for (o in t) if (r = t[o], to.exec(r)) {
if (delete t[o], i = i || "toggle" === r, r === (p ? "hide" :"show")) continue;
u[o] = h && h[o] || ut.style(e, o);
}
if (!ut.isEmptyObject(u)) {
h ? "hidden" in h && (p = h.hidden) :h = ut._data(e, "fxshow", {}), i && (h.hidden = !p), 
p ? ut(e).show() :c.done(function() {
ut(e).hide();
}), c.done(function() {
var t;
ut._removeData(e, "fxshow");
for (t in u) ut.style(e, t, u[t]);
});
for (o in u) a = B(p ? h[o] :0, o, c), o in h || (h[o] = a.start, p && (a.end = a.start, 
a.start = "width" === o || "height" === o ? 1 :0));
}
}
function j(e, t, n, o, r) {
return new j.prototype.init(e, t, n, o, r);
}
function z(e, t) {
var n, o = {
height:e
}, r = 0;
for (t = t ? 1 :0; 4 > r; r += 2 - t) n = Sn[r], o["margin" + n] = o["padding" + n] = e;
return t && (o.opacity = o.width = e), o;
}
function U(e) {
return ut.isWindow(e) ? e :9 === e.nodeType ? e.defaultView || e.parentWindow :!1;
}
var W, V, G = typeof t, J = e.location, X = e.document, K = X.documentElement, Q = e.jQuery, Z = e.$, et = {}, tt = [], nt = "1.10.0", ot = tt.concat, rt = tt.push, it = tt.slice, at = tt.indexOf, st = et.toString, lt = et.hasOwnProperty, ct = nt.trim, ut = function(e, t) {
return new ut.fn.init(e, t, V);
}, dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pt = /\S+/g, ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^[\],:{}\s]*$/, yt = /(?:^|:|,)(?:\s*\[)+/g, vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, _t = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, wt = /^-ms-/, bt = /-([\da-z])/gi, xt = function(e, t) {
return t.toUpperCase();
}, kt = function(e) {
(X.addEventListener || "load" === e.type || "complete" === X.readyState) && (St(), 
ut.ready());
}, St = function() {
X.addEventListener ? (X.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) :(X.detachEvent("onreadystatechange", kt), 
e.detachEvent("onload", kt));
};
ut.fn = ut.prototype = {
jquery:nt,
constructor:ut,
init:function(e, n, o) {
var r, i;
if (!e) return this;
if ("string" == typeof e) {
if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :mt.exec(e), 
!r || !r[1] && n) return !n || n.jquery ? (n || o).find(e) :this.constructor(n).find(e);
if (r[1]) {
if (n = n instanceof ut ? n[0] :n, ut.merge(this, ut.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n :X, !0)), 
gt.test(r[1]) && ut.isPlainObject(n)) for (r in n) ut.isFunction(this[r]) ? this[r](n[r]) :this.attr(r, n[r]);
return this;
}
if (i = X.getElementById(r[2]), i && i.parentNode) {
if (i.id !== r[2]) return o.find(e);
this.length = 1, this[0] = i;
}
return this.context = X, this.selector = e, this;
}
return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :ut.isFunction(e) ? o.ready(e) :(e.selector !== t && (this.selector = e.selector, 
this.context = e.context), ut.makeArray(e, this));
},
selector:"",
length:0,
toArray:function() {
return it.call(this);
},
get:function(e) {
return null == e ? this.toArray() :0 > e ? this[this.length + e] :this[e];
},
pushStack:function(e) {
var t = ut.merge(this.constructor(), e);
return t.prevObject = this, t.context = this.context, t;
},
each:function(e, t) {
return ut.each(this, e, t);
},
ready:function(e) {
return ut.ready.promise().done(e), this;
},
slice:function() {
return this.pushStack(it.apply(this, arguments));
},
first:function() {
return this.eq(0);
},
last:function() {
return this.eq(-1);
},
eq:function(e) {
var t = this.length, n = +e + (0 > e ? t :0);
return this.pushStack(n >= 0 && t > n ? [ this[n] ] :[]);
},
map:function(e) {
return this.pushStack(ut.map(this, function(t, n) {
return e.call(t, n, t);
}));
},
end:function() {
return this.prevObject || this.constructor(null);
},
push:rt,
sort:[].sort,
splice:[].splice
}, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
var e, n, o, r, i, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), 
c === l && (s = this, --l); c > l; l++) if (null != (i = arguments[l])) for (r in i) e = s[r], 
o = i[r], s !== o && (u && o && (ut.isPlainObject(o) || (n = ut.isArray(o))) ? (n ? (n = !1, 
a = e && ut.isArray(e) ? e :[]) :a = e && ut.isPlainObject(e) ? e :{}, s[r] = ut.extend(u, a, o)) :o !== t && (s[r] = o));
return s;
}, ut.extend({
expando:"jQuery" + (nt + Math.random()).replace(/\D/g, ""),
noConflict:function(t) {
return e.$ === ut && (e.$ = Z), t && e.jQuery === ut && (e.jQuery = Q), ut;
},
isReady:!1,
readyWait:1,
holdReady:function(e) {
e ? ut.readyWait++ :ut.ready(!0);
},
ready:function(e) {
if (e === !0 ? !--ut.readyWait :!ut.isReady) {
if (!X.body) return setTimeout(ut.ready);
ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (W.resolveWith(X, [ ut ]), ut.fn.trigger && ut(X).trigger("ready").off("ready"));
}
},
isFunction:function(e) {
return "function" === ut.type(e);
},
isArray:Array.isArray || function(e) {
return "array" === ut.type(e);
},
isWindow:function(e) {
return null != e && e == e.window;
},
isNumeric:function(e) {
return !isNaN(parseFloat(e)) && isFinite(e);
},
type:function(e) {
return null == e ? String(e) :"object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" :typeof e;
},
isPlainObject:function(e) {
var n;
if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
try {
if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
} catch (o) {
return !1;
}
if (ut.support.ownLast) for (n in e) return lt.call(e, n);
for (n in e) ;
return n === t || lt.call(e, n);
},
isEmptyObject:function(e) {
var t;
for (t in e) return !1;
return !0;
},
error:function(e) {
throw new Error(e);
},
parseHTML:function(e, t, n) {
if (!e || "string" != typeof e) return null;
"boolean" == typeof t && (n = t, t = !1), t = t || X;
var o = gt.exec(e), r = !n && [];
return o ? [ t.createElement(o[1]) ] :(o = ut.buildFragment([ e ], t, r), r && ut(r).remove(), 
ut.merge([], o.childNodes));
},
parseJSON:function(t) {
return e.JSON && e.JSON.parse ? e.JSON.parse(t) :null === t ? t :"string" == typeof t && (t = ut.trim(t), 
t && ft.test(t.replace(vt, "@").replace(_t, "]").replace(yt, ""))) ? new Function("return " + t)() :void ut.error("Invalid JSON: " + t);
},
parseXML:function(n) {
var o, r;
if (!n || "string" != typeof n) return null;
try {
e.DOMParser ? (r = new DOMParser(), o = r.parseFromString(n, "text/xml")) :(o = new ActiveXObject("Microsoft.XMLDOM"), 
o.async = "false", o.loadXML(n));
} catch (i) {
o = t;
}
return o && o.documentElement && !o.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), 
o;
},
noop:function() {},
globalEval:function(t) {
t && ut.trim(t) && (e.execScript || function(t) {
e.eval.call(e, t);
})(t);
},
camelCase:function(e) {
return e.replace(wt, "ms-").replace(bt, xt);
},
nodeName:function(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
},
each:function(e, t, o) {
var r, i = 0, a = e.length, s = n(e);
if (o) {
if (s) for (;a > i && (r = t.apply(e[i], o), r !== !1); i++) ; else for (i in e) if (r = t.apply(e[i], o), 
r === !1) break;
} else if (s) for (;a > i && (r = t.call(e[i], i, e[i]), r !== !1); i++) ; else for (i in e) if (r = t.call(e[i], i, e[i]), 
r === !1) break;
return e;
},
trim:ct && !ct.call("\ufeff\xa0") ? function(e) {
return null == e ? "" :ct.call(e);
} :function(e) {
return null == e ? "" :(e + "").replace(ht, "");
},
makeArray:function(e, t) {
var o = t || [];
return null != e && (n(Object(e)) ? ut.merge(o, "string" == typeof e ? [ e ] :e) :rt.call(o, e)), 
o;
},
inArray:function(e, t, n) {
var o;
if (t) {
if (at) return at.call(t, e, n);
for (o = t.length, n = n ? 0 > n ? Math.max(0, o + n) :n :0; o > n; n++) if (n in t && t[n] === e) return n;
}
return -1;
},
merge:function(e, n) {
var o = n.length, r = e.length, i = 0;
if ("number" == typeof o) for (;o > i; i++) e[r++] = n[i]; else for (;n[i] !== t; ) e[r++] = n[i++];
return e.length = r, e;
},
grep:function(e, t, n) {
var o, r = [], i = 0, a = e.length;
for (n = !!n; a > i; i++) o = !!t(e[i], i), n !== o && r.push(e[i]);
return r;
},
map:function(e, t, o) {
var r, i = 0, a = e.length, s = n(e), l = [];
if (s) for (;a > i; i++) r = t(e[i], i, o), null != r && (l[l.length] = r); else for (i in e) r = t(e[i], i, o), 
null != r && (l[l.length] = r);
return ot.apply([], l);
},
guid:1,
proxy:function(e, n) {
var o, r, i;
return "string" == typeof n && (i = e[n], n = e, e = i), ut.isFunction(e) ? (o = it.call(arguments, 2), 
r = function() {
return e.apply(n || this, o.concat(it.call(arguments)));
}, r.guid = e.guid = e.guid || ut.guid++, r) :t;
},
access:function(e, n, o, r, i, a, s) {
var l = 0, c = e.length, u = null == o;
if ("object" === ut.type(o)) {
i = !0;
for (l in o) ut.access(e, n, l, o[l], !0, a, s);
} else if (r !== t && (i = !0, ut.isFunction(r) || (s = !0), u && (s ? (n.call(e, r), 
n = null) :(u = n, n = function(e, t, n) {
return u.call(ut(e), n);
})), n)) for (;c > l; l++) n(e[l], o, s ? r :r.call(e[l], l, n(e[l], o)));
return i ? e :u ? n.call(e) :c ? n(e[0], o) :a;
},
now:function() {
return new Date().getTime();
},
swap:function(e, t, n, o) {
var r, i, a = {};
for (i in t) a[i] = e.style[i], e.style[i] = t[i];
r = n.apply(e, o || []);
for (i in t) e.style[i] = a[i];
return r;
}
}), ut.ready.promise = function(t) {
if (!W) if (W = ut.Deferred(), "complete" === X.readyState) setTimeout(ut.ready); else if (X.addEventListener) X.addEventListener("DOMContentLoaded", kt, !1), 
e.addEventListener("load", kt, !1); else {
X.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
var n = !1;
try {
n = null == e.frameElement && X.documentElement;
} catch (o) {}
n && n.doScroll && !function r() {
if (!ut.isReady) {
try {
n.doScroll("left");
} catch (e) {
return setTimeout(r, 50);
}
St(), ut.ready();
}
}();
}
return W.promise(t);
}, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
et["[object " + t + "]"] = t.toLowerCase();
}), V = ut(X), /*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-15
 */
function(e, t) {
function n(e, t, n, o) {
var r, i, a, s, l, c, u, d, p, h;
if ((t ? t.ownerDocument || t :z) !== N && Y(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
if (1 !== (s = t.nodeType) && 9 !== s) return [];
if (q && !o) {
if (r = kt.exec(e)) if (a = r[1]) {
if (9 === s) {
if (i = t.getElementById(a), !i || !i.parentNode) return n;
if (i.id === a) return n.push(i), n;
} else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && H(t, i) && i.id === a) return n.push(i), 
n;
} else {
if (r[2]) return rt.apply(n, t.getElementsByTagName(e)), n;
if ((a = r[3]) && L.getElementsByClassName && t.getElementsByClassName) return rt.apply(n, t.getElementsByClassName(a)), 
n;
}
if (L.qsa && (!B || !B.test(e))) {
if (d = u = j, p = t, h = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
for (c = g(e), (u = t.getAttribute("id")) ? d = u.replace(Mt, "\\$&") :t.setAttribute("id", d), 
d = "[id='" + d + "'] ", l = c.length; l--; ) c[l] = d + f(c[l]);
p = yt.test(e) && t.parentNode || t, h = c.join(",");
}
if (h) try {
return rt.apply(n, p.querySelectorAll(h)), n;
} catch (m) {} finally {
u || t.removeAttribute("id");
}
}
}
return S(e.replace(mt, "$1"), t, n, o);
}
function o(e) {
return xt.test(e + "");
}
function r() {
function e(n, o) {
return t.push(n += " ") > D.cacheLength && delete e[t.shift()], e[n] = o;
}
var t = [];
return e;
}
function i(e) {
return e[j] = !0, e;
}
function a(e) {
var t = N.createElement("div");
try {
return !!e(t);
} catch (n) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function s(e, t, n) {
e = e.split("|");
for (var o, r = e.length, i = n ? null :t; r--; ) (o = D.attrHandle[e[r]]) && o !== t || (D.attrHandle[e[r]] = i);
}
function l(e, t) {
var n = e.getAttributeNode(t);
return n && n.specified ? n.value :e[t] === !0 ? t.toLowerCase() :null;
}
function c(e, t) {
return e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
}
function u(e) {
return "input" === e.nodeName.toLowerCase() ? e.defaultValue :void 0;
}
function d(e, t) {
var n = t && e, o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
if (o) return o;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 :-1;
}
function p(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return "input" === n && t.type === e;
};
}
function h(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function m(e) {
return i(function(t) {
return t = +t, i(function(n, o) {
for (var r, i = e([], n.length, t), a = i.length; a--; ) n[r = i[a]] && (n[r] = !(o[r] = n[r]));
});
});
}
function g(e, t) {
var o, r, i, a, s, l, c, u = G[e + " "];
if (u) return t ? 0 :u.slice(0);
for (s = e, l = [], c = D.preFilter; s; ) {
(!o || (r = gt.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), 
o = !1, (r = ft.exec(s)) && (o = r.shift(), i.push({
value:o,
type:r[0].replace(mt, " ")
}), s = s.slice(o.length));
for (a in D.filter) !(r = bt[a].exec(s)) || c[a] && !(r = c[a](r)) || (o = r.shift(), 
i.push({
value:o,
type:a,
matches:r
}), s = s.slice(o.length));
if (!o) break;
}
return t ? s.length :s ? n.error(e) :G(e, l).slice(0);
}
function f(e) {
for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
return o;
}
function y(e, t, n) {
var o = t.dir, r = n && "parentNode" === o, i = W++;
return t.first ? function(t, n, i) {
for (;t = t[o]; ) if (1 === t.nodeType || r) return e(t, n, i);
} :function(t, n, a) {
var s, l, c, u = U + " " + i;
if (a) {
for (;t = t[o]; ) if ((1 === t.nodeType || r) && e(t, n, a)) return !0;
} else for (;t = t[o]; ) if (1 === t.nodeType || r) if (c = t[j] || (t[j] = {}), 
(l = c[o]) && l[0] === u) {
if ((s = l[1]) === !0 || s === C) return s === !0;
} else if (l = c[o] = [ u ], l[1] = e(t, n, a) || C, l[1] === !0) return !0;
};
}
function v(e) {
return e.length > 1 ? function(t, n, o) {
for (var r = e.length; r--; ) if (!e[r](t, n, o)) return !1;
return !0;
} :e[0];
}
function _(e, t, n, o, r) {
for (var i, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (i = e[s]) && (!n || n(i, o, r)) && (a.push(i), 
c && t.push(s));
return a;
}
function w(e, t, n, o, r, a) {
return o && !o[j] && (o = w(o)), r && !r[j] && (r = w(r, a)), i(function(i, a, s, l) {
var c, u, d, p = [], h = [], m = a.length, g = i || k(t || "*", s.nodeType ? [ s ] :s, []), f = !e || !i && t ? g :_(g, p, e, s, l), y = n ? r || (i ? e :m || o) ? [] :a :f;
if (n && n(f, y, s, l), o) for (c = _(y, h), o(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (y[h[u]] = !(f[h[u]] = d));
if (i) {
if (r || e) {
if (r) {
for (c = [], u = y.length; u--; ) (d = y[u]) && c.push(f[u] = d);
r(null, y = [], c, l);
}
for (u = y.length; u--; ) (d = y[u]) && (c = r ? at.call(i, d) :p[u]) > -1 && (i[c] = !(a[c] = d));
}
} else y = _(y === a ? y.splice(m, y.length) :y), r ? r(null, a, y, l) :rt.apply(a, y);
});
}
function b(e) {
for (var t, n, o, r = e.length, i = D.relative[e[0].type], a = i || D.relative[" "], s = i ? 1 :0, l = y(function(e) {
return e === t;
}, a, !0), c = y(function(e) {
return at.call(t, e) > -1;
}, a, !0), u = [ function(e, n, o) {
return !i && (o || n !== A) || ((t = n).nodeType ? l(e, n, o) :c(e, n, o));
} ]; r > s; s++) if (n = D.relative[e[s].type]) u = [ y(v(u), n) ]; else {
if (n = D.filter[e[s].type].apply(null, e[s].matches), n[j]) {
for (o = ++s; r > o && !D.relative[e[o].type]; o++) ;
return w(s > 1 && v(u), s > 1 && f(e.slice(0, s - 1).concat({
value:" " === e[s - 2].type ? "*" :""
})).replace(mt, "$1"), n, o > s && b(e.slice(s, o)), r > o && b(e = e.slice(o)), r > o && f(e));
}
u.push(n);
}
return v(u);
}
function x(e, t) {
var o = 0, r = t.length > 0, a = e.length > 0, s = function(i, s, l, c, u) {
var d, p, h, m = [], g = 0, f = "0", y = i && [], v = null != u, w = A, b = i || a && D.find.TAG("*", u && s.parentNode || s), x = U += null == w ? 1 :Math.random() || .1;
for (v && (A = s !== N && s, C = o); null != (d = b[f]); f++) {
if (a && d) {
for (p = 0; h = e[p++]; ) if (h(d, s, l)) {
c.push(d);
break;
}
v && (U = x, C = ++o);
}
r && ((d = !h && d) && g--, i && y.push(d));
}
if (g += f, r && f !== g) {
for (p = 0; h = t[p++]; ) h(y, m, s, l);
if (i) {
if (g > 0) for (;f--; ) y[f] || m[f] || (m[f] = nt.call(c));
m = _(m);
}
rt.apply(c, m), v && !i && m.length > 0 && g + t.length > 1 && n.uniqueSort(c);
}
return v && (U = x, A = w), y;
};
return r ? i(s) :s;
}
function k(e, t, o) {
for (var r = 0, i = t.length; i > r; r++) n(e, t[r], o);
return o;
}
function S(e, t, n, o) {
var r, i, a, s, l, c = g(e);
if (!o && 1 === c.length) {
if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && L.getById && 9 === t.nodeType && q && D.relative[i[1].type]) {
if (t = (D.find.ID(a.matches[0].replace(Lt, Ct), t) || [])[0], !t) return n;
e = e.slice(i.shift().value.length);
}
for (r = bt.needsContext.test(e) ? 0 :i.length; r-- && (a = i[r], !D.relative[s = a.type]); ) if ((l = D.find[s]) && (o = l(a.matches[0].replace(Lt, Ct), yt.test(i[0].type) && t.parentNode || t))) {
if (i.splice(r, 1), e = o.length && f(i), !e) return rt.apply(n, o), n;
break;
}
}
return I(e, c)(o, t, !q, n, yt.test(e)), n;
}
function T() {}
var M, L, C, D, E, $, I, A, P, Y, N, O, q, B, R, F, H, j = "sizzle" + -new Date(), z = e.document, U = 0, W = 0, V = r(), G = r(), J = r(), X = !1, K = function() {
return 0;
}, Q = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], nt = tt.pop, ot = tt.push, rt = tt.push, it = tt.slice, at = tt.indexOf || function(e) {
for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
return -1;
}, st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", lt = "[\\x20\\t\\r\\n\\f]", ct = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", dt = ct.replace("w", "w#"), pt = "\\[" + lt + "*(" + ct + ")" + lt + "*(?:([*^$|!~]?=)" + lt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + dt + ")|)|)" + lt + "*\\]", ht = ":(" + ct + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pt.replace(3, 8) + ")*)|.*)\\)|)", mt = new RegExp("^" + lt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + lt + "+$", "g"), gt = new RegExp("^" + lt + "*," + lt + "*"), ft = new RegExp("^" + lt + "*([>+~]|" + lt + ")" + lt + "*"), yt = new RegExp(lt + "*[+~]"), vt = new RegExp("=" + lt + "*([^\\]'\"]*)" + lt + "*\\]", "g"), _t = new RegExp(ht), wt = new RegExp("^" + dt + "$"), bt = {
ID:new RegExp("^#(" + ct + ")"),
CLASS:new RegExp("^\\.(" + ct + ")"),
TAG:new RegExp("^(" + ct.replace("w", "w*") + ")"),
ATTR:new RegExp("^" + pt),
PSEUDO:new RegExp("^" + ht),
CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + lt + "*(even|odd|(([+-]|)(\\d*)n|)" + lt + "*(?:([+-]|)" + lt + "*(\\d+)|))" + lt + "*\\)|)", "i"),
bool:new RegExp("^(?:" + st + ")$", "i"),
needsContext:new RegExp("^" + lt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + lt + "*((?:-\\d)?\\d*)" + lt + "*\\)|)(?=[^-]|$)", "i")
}, xt = /^[^{]+\{\s*\[native \w/, kt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, St = /^(?:input|select|textarea|button)$/i, Tt = /^h\d$/i, Mt = /'|\\/g, Lt = new RegExp("\\\\([\\da-f]{1,6}" + lt + "?|(" + lt + ")|.)", "ig"), Ct = function(e, t, n) {
var o = "0x" + t - 65536;
return o !== o || n ? t :0 > o ? String.fromCharCode(o + 65536) :String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320);
};
try {
rt.apply(tt = it.call(z.childNodes), z.childNodes), tt[z.childNodes.length].nodeType;
} catch (Dt) {
rt = {
apply:tt.length ? function(e, t) {
ot.apply(e, it.call(t));
} :function(e, t) {
for (var n = e.length, o = 0; e[n++] = t[o++]; ) ;
e.length = n - 1;
}
};
}
$ = n.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return t ? "HTML" !== t.nodeName :!1;
}, L = n.support = {}, Y = n.setDocument = function(e) {
var t = e ? e.ownerDocument || e :z;
return t !== N && 9 === t.nodeType && t.documentElement ? (N = t, O = t.documentElement, 
q = !$(t), L.attributes = a(function(e) {
return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), 
s(st, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
}), L.input = a(function(e) {
return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}), s("value", u, L.attributes && L.input), L.getElementsByTagName = a(function(e) {
return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
}), L.getElementsByClassName = a(function(e) {
return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
2 === e.getElementsByClassName("i").length;
}), L.getById = a(function(e) {
return O.appendChild(e).id = j, !t.getElementsByName || !t.getElementsByName(j).length;
}), L.getById ? (D.find.ID = function(e, t) {
if (typeof t.getElementById !== Q && q) {
var n = t.getElementById(e);
return n && n.parentNode ? [ n ] :[];
}
}, D.filter.ID = function(e) {
var t = e.replace(Lt, Ct);
return function(e) {
return e.getAttribute("id") === t;
};
}) :(delete D.find.ID, D.filter.ID = function(e) {
var t = e.replace(Lt, Ct);
return function(e) {
var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
return n && n.value === t;
};
}), D.find.TAG = L.getElementsByTagName ? function(e, t) {
return typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(e) :void 0;
} :function(e, t) {
var n, o = [], r = 0, i = t.getElementsByTagName(e);
if ("*" === e) {
for (;n = i[r++]; ) 1 === n.nodeType && o.push(n);
return o;
}
return i;
}, D.find.CLASS = L.getElementsByClassName && function(e, t) {
return typeof t.getElementsByClassName !== Q && q ? t.getElementsByClassName(e) :void 0;
}, R = [], B = [], (L.qsa = o(t.querySelectorAll)) && (a(function(e) {
e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || B.push("\\[" + lt + "*(?:value|" + st + ")"), 
e.querySelectorAll(":checked").length || B.push(":checked");
}), a(function(e) {
var n = t.createElement("input");
n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && B.push("[*^$]=" + lt + "*(?:''|\"\")"), 
e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
B.push(",.*:");
})), (L.matchesSelector = o(F = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && a(function(e) {
L.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), R.push("!=", ht);
}), B = B.length && new RegExp(B.join("|")), R = R.length && new RegExp(R.join("|")), 
H = o(O.contains) || O.compareDocumentPosition ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement :e, o = t && t.parentNode;
return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)));
} :function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, L.sortDetached = a(function(e) {
return 1 & e.compareDocumentPosition(t.createElement("div"));
}), K = O.compareDocumentPosition ? function(e, n) {
if (e === n) return X = !0, 0;
var o = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
return o ? 1 & o || !L.sortDetached && n.compareDocumentPosition(e) === o ? e === t || H(z, e) ? -1 :n === t || H(z, n) ? 1 :P ? at.call(P, e) - at.call(P, n) :0 :4 & o ? -1 :1 :e.compareDocumentPosition ? -1 :1;
} :function(e, n) {
var o, r = 0, i = e.parentNode, a = n.parentNode, s = [ e ], l = [ n ];
if (e === n) return X = !0, 0;
if (!i || !a) return e === t ? -1 :n === t ? 1 :i ? -1 :a ? 1 :P ? at.call(P, e) - at.call(P, n) :0;
if (i === a) return d(e, n);
for (o = e; o = o.parentNode; ) s.unshift(o);
for (o = n; o = o.parentNode; ) l.unshift(o);
for (;s[r] === l[r]; ) r++;
return r ? d(s[r], l[r]) :s[r] === z ? -1 :l[r] === z ? 1 :0;
}, t) :N;
}, n.matches = function(e, t) {
return n(e, null, null, t);
}, n.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== N && Y(e), t = t.replace(vt, "='$1']"), !(!L.matchesSelector || !q || R && R.test(t) || B && B.test(t))) try {
var o = F.call(e, t);
if (o || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o;
} catch (r) {}
return n(t, N, null, [ e ]).length > 0;
}, n.contains = function(e, t) {
return (e.ownerDocument || e) !== N && Y(e), H(e, t);
}, n.attr = function(e, n) {
(e.ownerDocument || e) !== N && Y(e);
var o = D.attrHandle[n.toLowerCase()], r = o && et.call(D.attrHandle, n.toLowerCase()) ? o(e, n, !q) :t;
return r === t ? L.attributes || !q ? e.getAttribute(n) :(r = e.getAttributeNode(n)) && r.specified ? r.value :null :r;
}, n.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, n.uniqueSort = function(e) {
var t, n = [], o = 0, r = 0;
if (X = !L.detectDuplicates, P = !L.sortStable && e.slice(0), e.sort(K), X) {
for (;t = e[r++]; ) t === e[r] && (o = n.push(r));
for (;o--; ) e.splice(n[o], 1);
}
return e;
}, E = n.getText = function(e) {
var t, n = "", o = 0, r = e.nodeType;
if (r) {
if (1 === r || 9 === r || 11 === r) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
} else if (3 === r || 4 === r) return e.nodeValue;
} else for (;t = e[o]; o++) n += E(t);
return n;
}, D = n.selectors = {
cacheLength:50,
createPseudo:i,
match:bt,
attrHandle:{},
find:{},
relative:{
">":{
dir:"parentNode",
first:!0
},
" ":{
dir:"parentNode"
},
"+":{
dir:"previousSibling",
first:!0
},
"~":{
dir:"previousSibling"
}
},
preFilter:{
ATTR:function(e) {
return e[1] = e[1].replace(Lt, Ct), e[3] = (e[4] || e[5] || "").replace(Lt, Ct), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD:function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && n.error(e[0]), 
e;
},
PSEUDO:function(e) {
var n, o = !e[5] && e[2];
return bt.CHILD.test(e[0]) ? null :(e[3] && e[4] !== t ? e[2] = e[4] :o && _t.test(o) && (n = g(o, !0)) && (n = o.indexOf(")", o.length - n) - o.length) && (e[0] = e[0].slice(0, n), 
e[2] = o.slice(0, n)), e.slice(0, 3));
}
},
filter:{
TAG:function(e) {
var t = e.replace(Lt, Ct).toLowerCase();
return "*" === e ? function() {
return !0;
} :function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS:function(e) {
var t = V[e + " "];
return t || (t = new RegExp("(^|" + lt + ")" + e + "(" + lt + "|$)")) && V(e, function(e) {
return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "");
});
},
ATTR:function(e, t, o) {
return function(r) {
var i = n.attr(r, e);
return null == i ? "!=" === t :t ? (i += "", "=" === t ? i === o :"!=" === t ? i !== o :"^=" === t ? o && 0 === i.indexOf(o) :"*=" === t ? o && i.indexOf(o) > -1 :"$=" === t ? o && i.slice(-o.length) === o :"~=" === t ? (" " + i + " ").indexOf(o) > -1 :"|=" === t ? i === o || i.slice(0, o.length + 1) === o + "-" :!1) :!0;
};
},
CHILD:function(e, t, n, o, r) {
var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === o && 0 === r ? function(e) {
return !!e.parentNode;
} :function(t, n, l) {
var c, u, d, p, h, m, g = i !== a ? "nextSibling" :"previousSibling", f = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
if (f) {
if (i) {
for (;g; ) {
for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === y :1 === d.nodeType) return !1;
m = g = "only" === e && !m && "nextSibling";
}
return !0;
}
if (m = [ a ? f.firstChild :f.lastChild ], a && v) {
for (u = f[j] || (f[j] = {}), c = u[e] || [], h = c[0] === U && c[1], p = c[0] === U && c[2], 
d = h && f.childNodes[h]; d = ++h && d && d[g] || (p = h = 0) || m.pop(); ) if (1 === d.nodeType && ++p && d === t) {
u[e] = [ U, h, p ];
break;
}
} else if (v && (c = (t[j] || (t[j] = {}))[e]) && c[0] === U) p = c[1]; else for (;(d = ++h && d && d[g] || (p = h = 0) || m.pop()) && ((s ? d.nodeName.toLowerCase() !== y :1 !== d.nodeType) || !++p || (v && ((d[j] || (d[j] = {}))[e] = [ U, p ]), 
d !== t)); ) ;
return p -= r, p === o || p % o === 0 && p / o >= 0;
}
};
},
PSEUDO:function(e, t) {
var o, r = D.pseudos[e] || D.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
return r[j] ? r(t) :r.length > 1 ? (o = [ e, e, "", t ], D.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
for (var o, i = r(e, t), a = i.length; a--; ) o = at.call(e, i[a]), e[o] = !(n[o] = i[a]);
}) :function(e) {
return r(e, 0, o);
}) :r;
}
},
pseudos:{
not:i(function(e) {
var t = [], n = [], o = I(e.replace(mt, "$1"));
return o[j] ? i(function(e, t, n, r) {
for (var i, a = o(e, null, r, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
}) :function(e, r, i) {
return t[0] = e, o(t, null, i, n), !n.pop();
};
}),
has:i(function(e) {
return function(t) {
return n(e, t).length > 0;
};
}),
contains:i(function(e) {
return function(t) {
return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
};
}),
lang:i(function(e) {
return wt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Lt, Ct).toLowerCase(), 
function(t) {
var n;
do if (n = q ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
return !1;
};
}),
target:function(t) {
var n = e.location && e.location.hash;
return n && n.slice(1) === t.id;
},
root:function(e) {
return e === O;
},
focus:function(e) {
return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled:function(e) {
return e.disabled === !1;
},
disabled:function(e) {
return e.disabled === !0;
},
checked:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && !!e.checked || "option" === t && !!e.selected;
},
selected:function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
},
empty:function(e) {
for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
return !0;
},
parent:function(e) {
return !D.pseudos.empty(e);
},
header:function(e) {
return Tt.test(e.nodeName);
},
input:function(e) {
return St.test(e.nodeName);
},
button:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text:function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
},
first:m(function() {
return [ 0 ];
}),
last:m(function(e, t) {
return [ t - 1 ];
}),
eq:m(function(e, t, n) {
return [ 0 > n ? n + t :n ];
}),
even:m(function(e, t) {
for (var n = 0; t > n; n += 2) e.push(n);
return e;
}),
odd:m(function(e, t) {
for (var n = 1; t > n; n += 2) e.push(n);
return e;
}),
lt:m(function(e, t, n) {
for (var o = 0 > n ? n + t :n; --o >= 0; ) e.push(o);
return e;
}),
gt:m(function(e, t, n) {
for (var o = 0 > n ? n + t :n; ++o < t; ) e.push(o);
return e;
})
}
};
for (M in {
radio:!0,
checkbox:!0,
file:!0,
password:!0,
image:!0
}) D.pseudos[M] = p(M);
for (M in {
submit:!0,
reset:!0
}) D.pseudos[M] = h(M);
I = n.compile = function(e, t) {
var n, o = [], r = [], i = J[e + " "];
if (!i) {
for (t || (t = g(e)), n = t.length; n--; ) i = b(t[n]), i[j] ? o.push(i) :r.push(i);
i = J(e, x(r, o));
}
return i;
}, D.pseudos.nth = D.pseudos.eq, T.prototype = D.filters = D.pseudos, D.setFilters = new T(), 
L.sortStable = j.split("").sort(K).join("") === j, Y(), [ 0, 0 ].sort(K), L.detectDuplicates = X, 
ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, 
ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains;
}(e);
var Tt = {};
ut.Callbacks = function(e) {
e = "string" == typeof e ? Tt[e] || o(e) :ut.extend({}, e);
var n, r, i, a, s, l, c = [], u = !e.once && [], d = function(t) {
for (r = e.memory && t, i = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
r = !1;
break;
}
n = !1, c && (u ? u.length && d(u.shift()) :r ? c = [] :p.disable());
}, p = {
add:function() {
if (c) {
var t = c.length;
!function o(t) {
ut.each(t, function(t, n) {
var r = ut.type(n);
"function" === r ? e.unique && p.has(n) || c.push(n) :n && n.length && "string" !== r && o(n);
});
}(arguments), n ? a = c.length :r && (l = t, d(r));
}
return this;
},
remove:function() {
return c && ut.each(arguments, function(e, t) {
for (var o; (o = ut.inArray(t, c, o)) > -1; ) c.splice(o, 1), n && (a >= o && a--, 
s >= o && s--);
}), this;
},
has:function(e) {
return e ? ut.inArray(e, c) > -1 :!(!c || !c.length);
},
empty:function() {
return c = [], a = 0, this;
},
disable:function() {
return c = u = r = t, this;
},
disabled:function() {
return !c;
},
lock:function() {
return u = t, r || p.disable(), this;
},
locked:function() {
return !u;
},
fireWith:function(e, t) {
return t = t || [], t = [ e, t.slice ? t.slice() :t ], !c || i && !u || (n ? u.push(t) :d(t)), 
this;
},
fire:function() {
return p.fireWith(this, arguments), this;
},
fired:function() {
return !!i;
}
};
return p;
}, ut.extend({
Deferred:function(e) {
var t = [ [ "resolve", "done", ut.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ut.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ut.Callbacks("memory") ] ], n = "pending", o = {
state:function() {
return n;
},
always:function() {
return r.done(arguments).fail(arguments), this;
},
then:function() {
var e = arguments;
return ut.Deferred(function(n) {
ut.each(t, function(t, i) {
var a = i[0], s = ut.isFunction(e[t]) && e[t];
r[i[1]](function() {
var e = s && s.apply(this, arguments);
e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) :n[a + "With"](this === o ? n.promise() :this, s ? [ e ] :arguments);
});
}), e = null;
}).promise();
},
promise:function(e) {
return null != e ? ut.extend(e, o) :o;
}
}, r = {};
return o.pipe = o.then, ut.each(t, function(e, i) {
var a = i[2], s = i[3];
o[i[1]] = a.add, s && a.add(function() {
n = s;
}, t[1 ^ e][2].disable, t[2][2].lock), r[i[0]] = function() {
return r[i[0] + "With"](this === r ? o :this, arguments), this;
}, r[i[0] + "With"] = a.fireWith;
}), o.promise(r), e && e.call(r, r), r;
},
when:function(e) {
var t, n, o, r = 0, i = it.call(arguments), a = i.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a :0, l = 1 === s ? e :ut.Deferred(), c = function(e, n, o) {
return function(r) {
n[e] = this, o[e] = arguments.length > 1 ? it.call(arguments) :r, o === t ? l.notifyWith(n, o) :--s || l.resolveWith(n, o);
};
};
if (a > 1) for (t = new Array(a), n = new Array(a), o = new Array(a); a > r; r++) i[r] && ut.isFunction(i[r].promise) ? i[r].promise().done(c(r, o, i)).fail(l.reject).progress(c(r, n, t)) :--s;
return s || l.resolveWith(o, i), l.promise();
}
}), ut.support = function(t) {
var n, o, r, i, a, s, l, c, u, d = X.createElement("div");
if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
n = d.getElementsByTagName("*") || [], o = d.getElementsByTagName("a")[0], !o || !o.style || !n.length) return t;
i = X.createElement("select"), s = i.appendChild(X.createElement("option")), r = d.getElementsByTagName("input")[0], 
o.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, 
t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, 
t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(o.getAttribute("style")), 
t.hrefNormalized = "/a" === o.getAttribute("href"), t.opacity = /^0.5/.test(o.style.opacity), 
t.cssFloat = !!o.style.cssFloat, t.checkOn = !!r.value, t.optSelected = s.selected, 
t.enctype = !!X.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, 
t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, 
t.noCloneChecked = r.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
try {
delete d.test;
} catch (p) {
t.deleteExpando = !1;
}
r = X.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), 
r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, 
r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = X.createDocumentFragment(), 
a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
d.attachEvent && (d.attachEvent("onclick", function() {
t.noCloneEvent = !1;
}), d.cloneNode(!0).click());
for (u in {
submit:!0,
change:!0,
focusin:!0
}) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
t.clearCloneStyle = "content-box" === d.style.backgroundClip;
for (u in ut(t)) break;
return t.ownLast = "0" !== u, ut(function() {
var n, o, r, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = X.getElementsByTagName("body")[0];
a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", 
t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
ut.swap(a, null != a.style.zoom ? {
zoom:1
} :{}, function() {
t.boxSizing = 4 === d.offsetWidth;
}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, 
t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
width:"4px"
}).width, o = d.appendChild(X.createElement("div")), o.style.cssText = d.style.cssText = i, 
o.style.marginRight = o.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), 
typeof d.style.zoom !== G && (d.innerHTML = "", d.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", 
t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", 
d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
a.removeChild(n), n = d = r = o = null);
}), n = i = a = s = o = r = null, t;
}({});
var Mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Lt = /([A-Z])/g;
ut.extend({
cache:{},
noData:{
applet:!0,
embed:!0,
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(e) {
return e = e.nodeType ? ut.cache[e[ut.expando]] :e[ut.expando], !!e && !s(e);
},
data:function(e, t, n) {
return r(e, t, n);
},
removeData:function(e, t) {
return i(e, t);
},
_data:function(e, t, n) {
return r(e, t, n, !0);
},
_removeData:function(e, t) {
return i(e, t, !0);
},
acceptData:function(e) {
if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
return !t || t !== !0 && e.getAttribute("classid") === t;
}
}), ut.fn.extend({
data:function(e, n) {
var o, r, i = null, s = 0, l = this[0];
if (e === t) {
if (this.length && (i = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
for (o = l.attributes; s < o.length; s++) r = o[s].name, 0 === r.indexOf("data-") && (r = ut.camelCase(r.slice(5)), 
a(l, r, i[r]));
ut._data(l, "parsedAttrs", !0);
}
return i;
}
return "object" == typeof e ? this.each(function() {
ut.data(this, e);
}) :arguments.length > 1 ? this.each(function() {
ut.data(this, e, n);
}) :l ? a(l, e, ut.data(l, e)) :null;
},
removeData:function(e) {
return this.each(function() {
ut.removeData(this, e);
});
}
}), ut.extend({
queue:function(e, t, n) {
var o;
return e ? (t = (t || "fx") + "queue", o = ut._data(e, t), n && (!o || ut.isArray(n) ? o = ut._data(e, t, ut.makeArray(n)) :o.push(n)), 
o || []) :void 0;
},
dequeue:function(e, t) {
t = t || "fx";
var n = ut.queue(e, t), o = n.length, r = n.shift(), i = ut._queueHooks(e, t), a = function() {
ut.dequeue(e, t);
};
"inprogress" === r && (r = n.shift(), o--), i.cur = r, r && ("fx" === t && n.unshift("inprogress"), 
delete i.stop, r.call(e, a, i)), !o && i && i.empty.fire();
},
_queueHooks:function(e, t) {
var n = t + "queueHooks";
return ut._data(e, n) || ut._data(e, n, {
empty:ut.Callbacks("once memory").add(function() {
ut._removeData(e, t + "queue"), ut._removeData(e, n);
})
});
}
}), ut.fn.extend({
queue:function(e, n) {
var o = 2;
return "string" != typeof e && (n = e, e = "fx", o--), arguments.length < o ? ut.queue(this[0], e) :n === t ? this :this.each(function() {
var t = ut.queue(this, e, n);
ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e);
});
},
dequeue:function(e) {
return this.each(function() {
ut.dequeue(this, e);
});
},
delay:function(e, t) {
return e = ut.fx ? ut.fx.speeds[e] || e :e, t = t || "fx", this.queue(t, function(t, n) {
var o = setTimeout(t, e);
n.stop = function() {
clearTimeout(o);
};
});
},
clearQueue:function(e) {
return this.queue(e || "fx", []);
},
promise:function(e, n) {
var o, r = 1, i = ut.Deferred(), a = this, s = this.length, l = function() {
--r || i.resolveWith(a, [ a ]);
};
for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) o = ut._data(a[s], e + "queueHooks"), 
o && o.empty && (r++, o.empty.add(l));
return l(), i.promise(n);
}
});
var Ct, Dt, Et = /[\t\r\n\f]/g, $t = /\r/g, It = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i, Pt = /^(?:checked|selected)$/i, Yt = ut.support.getSetAttribute, Nt = ut.support.input;
ut.fn.extend({
attr:function(e, t) {
return ut.access(this, ut.attr, e, t, arguments.length > 1);
},
removeAttr:function(e) {
return this.each(function() {
ut.removeAttr(this, e);
});
},
prop:function(e, t) {
return ut.access(this, ut.prop, e, t, arguments.length > 1);
},
removeProp:function(e) {
return e = ut.propFix[e] || e, this.each(function() {
try {
this[e] = t, delete this[e];
} catch (n) {}
});
},
addClass:function(e) {
var t, n, o, r, i, a = 0, s = this.length, l = "string" == typeof e && e;
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).addClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") :" ")) {
for (i = 0; r = t[i++]; ) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
n.className = ut.trim(o);
}
return this;
},
removeClass:function(e) {
var t, n, o, r, i, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).removeClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") :"")) {
for (i = 0; r = t[i++]; ) for (;o.indexOf(" " + r + " ") >= 0; ) o = o.replace(" " + r + " ", " ");
n.className = e ? ut.trim(o) :"";
}
return this;
},
toggleClass:function(e, t) {
var n = typeof e, o = "boolean" == typeof t;
return this.each(ut.isFunction(e) ? function(n) {
ut(this).toggleClass(e.call(this, n, this.className, t), t);
} :function() {
if ("string" === n) for (var r, i = 0, a = ut(this), s = t, l = e.match(pt) || []; r = l[i++]; ) s = o ? s :!a.hasClass(r), 
a[s ? "addClass" :"removeClass"](r); else (n === G || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), 
this.className = this.className || e === !1 ? "" :ut._data(this, "__className__") || "");
});
},
hasClass:function(e) {
for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
return !1;
},
val:function(e) {
var n, o, r, i = this[0];
{
if (arguments.length) return r = ut.isFunction(e), this.each(function(n) {
var i;
1 === this.nodeType && (i = r ? e.call(this, n, ut(this).val()) :e, null == i ? i = "" :"number" == typeof i ? i += "" :ut.isArray(i) && (i = ut.map(i, function(e) {
return null == e ? "" :e + "";
})), o = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], o && "set" in o && o.set(this, i, "value") !== t || (this.value = i));
});
if (i) return o = ut.valHooks[i.type] || ut.valHooks[i.nodeName.toLowerCase()], 
o && "get" in o && (n = o.get(i, "value")) !== t ? n :(n = i.value, "string" == typeof n ? n.replace($t, "") :null == n ? "" :n);
}
}
}), ut.extend({
valHooks:{
option:{
get:function(e) {
var t = ut.find.attr(e, "value");
return null != t ? t :e.text;
}
},
select:{
get:function(e) {
for (var t, n, o = e.options, r = e.selectedIndex, i = "select-one" === e.type || 0 > r, a = i ? null :[], s = i ? r + 1 :o.length, l = 0 > r ? s :i ? r :0; s > l; l++) if (n = o[l], 
!(!n.selected && l !== r || (ut.support.optDisabled ? n.disabled :null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
if (t = ut(n).val(), i) return t;
a.push(t);
}
return a;
},
set:function(e, t) {
for (var n, o, r = e.options, i = ut.makeArray(t), a = r.length; a--; ) o = r[a], 
(o.selected = ut.inArray(ut(o).val(), i) >= 0) && (n = !0);
return n || (e.selectedIndex = -1), i;
}
}
},
attr:function(e, n, o) {
var r, i, a = e.nodeType;
if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === G ? ut.prop(e, n, o) :(1 === a && ut.isXMLDoc(e) || (n = n.toLowerCase(), 
r = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? Dt :Ct)), o === t ? r && "get" in r && null !== (i = r.get(e, n)) ? i :(i = ut.find.attr(e, n), 
null == i ? t :i) :null !== o ? r && "set" in r && (i = r.set(e, o, n)) !== t ? i :(e.setAttribute(n, o + ""), 
o) :void ut.removeAttr(e, n));
},
removeAttr:function(e, t) {
var n, o, r = 0, i = t && t.match(pt);
if (i && 1 === e.nodeType) for (;n = i[r++]; ) o = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? Nt && Yt || !Pt.test(n) ? e[o] = !1 :e[ut.camelCase("default-" + n)] = e[o] = !1 :ut.attr(e, n, ""), 
e.removeAttribute(Yt ? n :o);
},
attrHooks:{
type:{
set:function(e, t) {
if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
},
prop:function(e, n, o) {
var r, i, a, s = e.nodeType;
if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, 
i = ut.propHooks[n]), o !== t ? i && "set" in i && (r = i.set(e, o, n)) !== t ? r :e[n] = o :i && "get" in i && null !== (r = i.get(e, n)) ? r :e[n];
},
propHooks:{
tabIndex:{
get:function(e) {
var t = ut.find.attr(e, "tabindex");
return t ? parseInt(t, 10) :It.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 :-1;
}
}
}
}), Dt = {
set:function(e, t, n) {
return t === !1 ? ut.removeAttr(e, n) :Nt && Yt || !Pt.test(n) ? e.setAttribute(!Yt && ut.propFix[n] || n, n) :e[ut.camelCase("default-" + n)] = e[n] = !0, 
n;
}
}, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, n) {
var o = ut.expr.attrHandle[n] || ut.find.attr;
ut.expr.attrHandle[n] = Nt && Yt || !Pt.test(n) ? function(e, n, r) {
var i = ut.expr.attrHandle[n], a = r ? t :(ut.expr.attrHandle[n] = t) != o(e, n, r) ? n.toLowerCase() :null;
return ut.expr.attrHandle[n] = i, a;
} :function(e, n, o) {
return o ? t :e[ut.camelCase("default-" + n)] ? n.toLowerCase() :null;
};
}), Nt && Yt || (ut.attrHooks.value = {
set:function(e, t, n) {
return ut.nodeName(e, "input") ? void (e.defaultValue = t) :Ct && Ct.set(e, t, n);
}
}), Yt || (Ct = {
set:function(e, n, o) {
var r = e.getAttributeNode(o);
return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(o)), r.value = n += "", 
"value" === o || n === e.getAttribute(o) ? n :t;
}
}, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, o) {
var r;
return o ? t :(r = e.getAttributeNode(n)) && "" !== r.value ? r.value :null;
}, ut.valHooks.button = {
get:function(e, n) {
var o = e.getAttributeNode(n);
return o && o.specified ? o.value :t;
},
set:Ct.set
}, ut.attrHooks.contenteditable = {
set:function(e, t, n) {
Ct.set(e, "" === t ? !1 :t, n);
}
}, ut.each([ "width", "height" ], function(e, t) {
ut.attrHooks[t] = {
set:function(e, n) {
return "" === n ? (e.setAttribute(t, "auto"), n) :void 0;
}
};
})), ut.support.hrefNormalized || ut.each([ "href", "src" ], function(e, t) {
ut.propHooks[t] = {
get:function(e) {
return e.getAttribute(t, 4);
}
};
}), ut.support.style || (ut.attrHooks.style = {
get:function(e) {
return e.style.cssText || t;
},
set:function(e, t) {
return e.style.cssText = t + "";
}
}), ut.support.optSelected || (ut.propHooks.selected = {
get:function(e) {
var t = e.parentNode;
return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
}
}), ut.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
ut.propFix[this.toLowerCase()] = this;
}), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each([ "radio", "checkbox" ], function() {
ut.valHooks[this] = {
set:function(e, t) {
return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 :void 0;
}
}, ut.support.checkOn || (ut.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" :e.value;
});
});
var Ot = /^(?:input|select|textarea)$/i, qt = /^key/, Bt = /^(?:mouse|contextmenu)|click/, Rt = /^(?:focusinfocus|focusoutblur)$/, Ft = /^([^.]*)(?:\.(.+)|)$/;
ut.event = {
global:{},
add:function(e, n, o, r, i) {
var a, s, l, c, u, d, p, h, m, g, f, y = ut._data(e);
if (y) {
for (o.handler && (c = o, o = c.handler, i = c.selector), o.guid || (o.guid = ut.guid++), 
(s = y.events) || (s = y.events = {}), (d = y.handle) || (d = y.handle = function(e) {
return typeof ut === G || e && ut.event.triggered === e.type ? t :ut.event.dispatch.apply(d.elem, arguments);
}, d.elem = e), n = (n || "").match(pt) || [ "" ], l = n.length; l--; ) a = Ft.exec(n[l]) || [], 
m = f = a[1], g = (a[2] || "").split(".").sort(), m && (u = ut.event.special[m] || {}, 
m = (i ? u.delegateType :u.bindType) || m, u = ut.event.special[m] || {}, p = ut.extend({
type:m,
origType:f,
data:r,
handler:o,
guid:o.guid,
selector:i,
needsContext:i && ut.expr.match.needsContext.test(i),
namespace:g.join(".")
}, c), (h = s[m]) || (h = s[m] = [], h.delegateCount = 0, u.setup && u.setup.call(e, r, g, d) !== !1 || (e.addEventListener ? e.addEventListener(m, d, !1) :e.attachEvent && e.attachEvent("on" + m, d))), 
u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = o.guid)), i ? h.splice(h.delegateCount++, 0, p) :h.push(p), 
ut.event.global[m] = !0);
e = null;
}
},
remove:function(e, t, n, o, r) {
var i, a, s, l, c, u, d, p, h, m, g, f = ut.hasData(e) && ut._data(e);
if (f && (u = f.events)) {
for (t = (t || "").match(pt) || [ "" ], c = t.length; c--; ) if (s = Ft.exec(t[c]) || [], 
h = g = s[1], m = (s[2] || "").split(".").sort(), h) {
for (d = ut.event.special[h] || {}, h = (o ? d.delegateType :d.bindType) || h, p = u[h] || [], 
s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = p.length; i--; ) a = p[i], 
!r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (p.splice(i, 1), 
a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
l && !p.length && (d.teardown && d.teardown.call(e, m, f.handle) !== !1 || ut.removeEvent(e, h, f.handle), 
delete u[h]);
} else for (h in u) ut.event.remove(e, h + t[c], n, o, !0);
ut.isEmptyObject(u) && (delete f.handle, ut._removeData(e, "events"));
}
},
trigger:function(n, o, r, i) {
var a, s, l, c, u, d, p, h = [ r || X ], m = lt.call(n, "type") ? n.type :n, g = lt.call(n, "namespace") ? n.namespace.split(".") :[];
if (l = d = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !Rt.test(m + ut.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), 
m = g.shift(), g.sort()), s = m.indexOf(":") < 0 && "on" + m, n = n[ut.expando] ? n :new ut.Event(m, "object" == typeof n && n), 
n.isTrigger = i ? 2 :3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
n.result = t, n.target || (n.target = r), o = null == o ? [ n ] :ut.makeArray(o, [ n ]), 
u = ut.event.special[m] || {}, i || !u.trigger || u.trigger.apply(r, o) !== !1)) {
if (!i && !u.noBubble && !ut.isWindow(r)) {
for (c = u.delegateType || m, Rt.test(c + m) || (l = l.parentNode); l; l = l.parentNode) h.push(l), 
d = l;
d === (r.ownerDocument || X) && h.push(d.defaultView || d.parentWindow || e);
}
for (p = 0; (l = h[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? c :u.bindType || m, 
a = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), a && a.apply(l, o), 
a = s && l[s], a && ut.acceptData(l) && a.apply && a.apply(l, o) === !1 && n.preventDefault();
if (n.type = m, !i && !n.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), o) === !1) && ut.acceptData(r) && s && r[m] && !ut.isWindow(r)) {
d = r[s], d && (r[s] = null), ut.event.triggered = m;
try {
r[m]();
} catch (f) {}
ut.event.triggered = t, d && (r[s] = d);
}
return n.result;
}
},
dispatch:function(e) {
e = ut.event.fix(e);
var n, o, r, i, a, s = [], l = it.call(arguments), c = (ut._data(this, "events") || {})[e.type] || [], u = ut.event.special[e.type] || {};
if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
for (s = ut.event.handlers.call(this, e, c), n = 0; (i = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
a = 0; (r = i.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, 
e.data = r.data, o = ((ut.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l), 
o !== t && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
return u.postDispatch && u.postDispatch.call(this, e), e.result;
}
},
handlers:function(e, n) {
var o, r, i, a, s = [], l = n.delegateCount, c = e.target;
if (l && c.nodeType && (!e.button || "click" !== e.type)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
for (i = [], a = 0; l > a; a++) r = n[a], o = r.selector + " ", i[o] === t && (i[o] = r.needsContext ? ut(o, this).index(c) >= 0 :ut.find(o, this, null, [ c ]).length), 
i[o] && i.push(r);
i.length && s.push({
elem:c,
handlers:i
});
}
return l < n.length && s.push({
elem:this,
handlers:n.slice(l)
}), s;
},
fix:function(e) {
if (e[ut.expando]) return e;
var t, n, o, r = e.type, i = e, a = this.fixHooks[r];
for (a || (this.fixHooks[r] = a = Bt.test(r) ? this.mouseHooks :qt.test(r) ? this.keyHooks :{}), 
o = a.props ? this.props.concat(a.props) :this.props, e = new ut.Event(i), t = o.length; t--; ) n = o[t], 
e[n] = i[n];
return e.target || (e.target = i.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) :e;
},
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(e, t) {
return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
e;
}
},
mouseHooks:{
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(e, n) {
var o, r, i, a = n.button, s = n.fromElement;
return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || X, 
i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), 
e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), 
!e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement :s), e.which || a === t || (e.which = 1 & a ? 1 :2 & a ? 3 :4 & a ? 2 :0), 
e;
}
},
special:{
load:{
noBubble:!0
},
focus:{
trigger:function() {
if (this !== u() && this.focus) try {
return this.focus(), !1;
} catch (e) {}
},
delegateType:"focusin"
},
blur:{
trigger:function() {
return this === u() && this.blur ? (this.blur(), !1) :void 0;
},
delegateType:"focusout"
},
click:{
trigger:function() {
return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
!1) :void 0;
},
_default:function(e) {
return ut.nodeName(e.target, "a");
}
},
beforeunload:{
postDispatch:function(e) {
e.result !== t && (e.originalEvent.returnValue = e.result);
}
}
},
simulate:function(e, t, n, o) {
var r = ut.extend(new ut.Event(), n, {
type:e,
isSimulated:!0,
originalEvent:{}
});
o ? ut.event.trigger(r, null, t) :ut.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault();
}
}, ut.removeEvent = X.removeEventListener ? function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n, !1);
} :function(e, t, n) {
var o = "on" + t;
e.detachEvent && (typeof e[o] === G && (e[o] = null), e.detachEvent(o, n));
}, ut.Event = function(e, t) {
return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l :c) :this.type = e, 
t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), void (this[ut.expando] = !0)) :new ut.Event(e, t);
}, ut.Event.prototype = {
isDefaultPrevented:c,
isPropagationStopped:c,
isImmediatePropagationStopped:c,
preventDefault:function() {
var e = this.originalEvent;
this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() :e.returnValue = !1);
},
stopPropagation:function() {
var e = this.originalEvent;
this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
},
stopImmediatePropagation:function() {
this.isImmediatePropagationStopped = l, this.stopPropagation();
}
}, ut.each({
mouseenter:"mouseover",
mouseleave:"mouseout"
}, function(e, t) {
ut.event.special[e] = {
delegateType:t,
bindType:t,
handle:function(e) {
var n, o = this, r = e.relatedTarget, i = e.handleObj;
return (!r || r !== o && !ut.contains(o, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), ut.support.submitBubbles || (ut.event.special.submit = {
setup:function() {
return ut.nodeName(this, "form") ? !1 :void ut.event.add(this, "click._submit keypress._submit", function(e) {
var n = e.target, o = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form :t;
o && !ut._data(o, "submitBubbles") && (ut.event.add(o, "submit._submit", function(e) {
e._submit_bubble = !0;
}), ut._data(o, "submitBubbles", !0));
});
},
postDispatch:function(e) {
e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0));
},
teardown:function() {
return ut.nodeName(this, "form") ? !1 :void ut.event.remove(this, "._submit");
}
}), ut.support.changeBubbles || (ut.event.special.change = {
setup:function() {
return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
"checked" === e.originalEvent.propertyName && (this._just_changed = !0);
}), ut.event.add(this, "click._change", function(e) {
this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0);
})), !1) :void ut.event.add(this, "beforeactivate._change", function(e) {
var t = e.target;
Ot.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
!this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0);
}), ut._data(t, "changeBubbles", !0));
});
},
handle:function(e) {
var t = e.target;
return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) :void 0;
},
teardown:function() {
return ut.event.remove(this, "._change"), !Ot.test(this.nodeName);
}
}), ut.support.focusinBubbles || ut.each({
focus:"focusin",
blur:"focusout"
}, function(e, t) {
var n = 0, o = function(e) {
ut.event.simulate(t, e.target, ut.event.fix(e), !0);
};
ut.event.special[t] = {
setup:function() {
0 === n++ && X.addEventListener(e, o, !0);
},
teardown:function() {
0 === --n && X.removeEventListener(e, o, !0);
}
};
}), ut.fn.extend({
on:function(e, n, o, r, i) {
var a, s;
if ("object" == typeof e) {
"string" != typeof n && (o = o || n, n = t);
for (a in e) this.on(a, n, o, e[a], i);
return this;
}
if (null == o && null == r ? (r = n, o = n = t) :null == r && ("string" == typeof n ? (r = o, 
o = t) :(r = o, o = n, n = t)), r === !1) r = c; else if (!r) return this;
return 1 === i && (s = r, r = function(e) {
return ut().off(e), s.apply(this, arguments);
}, r.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
ut.event.add(this, e, r, o, n);
});
},
one:function(e, t, n, o) {
return this.on(e, t, n, o, 1);
},
off:function(e, n, o) {
var r, i;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ut(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace :r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (i in e) this.off(i, n, e[i]);
return this;
}
return (n === !1 || "function" == typeof n) && (o = n, n = t), o === !1 && (o = c), 
this.each(function() {
ut.event.remove(this, e, o, n);
});
},
trigger:function(e, t) {
return this.each(function() {
ut.event.trigger(e, t, this);
});
},
triggerHandler:function(e, t) {
var n = this[0];
return n ? ut.event.trigger(e, t, n, !0) :void 0;
}
});
var Ht = /^.[^:#\[\.,]*$/, jt = /^(?:parents|prev(?:Until|All))/, zt = ut.expr.match.needsContext, Ut = {
children:!0,
contents:!0,
next:!0,
prev:!0
};
ut.fn.extend({
find:function(e) {
var t, n = [], o = this, r = o.length;
if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
for (t = 0; r > t; t++) if (ut.contains(o[t], this)) return !0;
}));
for (t = 0; r > t; t++) ut.find(e, o[t], n);
return n = this.pushStack(r > 1 ? ut.unique(n) :n), n.selector = this.selector ? this.selector + " " + e :e, 
n;
},
has:function(e) {
var t, n = ut(e, this), o = n.length;
return this.filter(function() {
for (t = 0; o > t; t++) if (ut.contains(this, n[t])) return !0;
});
},
not:function(e) {
return this.pushStack(p(this, e || [], !0));
},
filter:function(e) {
return this.pushStack(p(this, e || [], !1));
},
is:function(e) {
return !!p(this, "string" == typeof e && zt.test(e) ? ut(e) :e || [], !1).length;
},
closest:function(e, t) {
for (var n, o = 0, r = this.length, i = [], a = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) :0; r > o; o++) for (n = this[o]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 :1 === n.nodeType && ut.find.matchesSelector(n, e))) {
n = i.push(n);
break;
}
return this.pushStack(i.length > 1 ? ut.unique(i) :i);
},
index:function(e) {
return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) :ut.inArray(e.jquery ? e[0] :e, this) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
},
add:function(e, t) {
var n = "string" == typeof e ? ut(e, t) :ut.makeArray(e && e.nodeType ? [ e ] :e), o = ut.merge(this.get(), n);
return this.pushStack(ut.unique(o));
},
addBack:function(e) {
return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
}
}), ut.each({
parent:function(e) {
var t = e.parentNode;
return t && 11 !== t.nodeType ? t :null;
},
parents:function(e) {
return ut.dir(e, "parentNode");
},
parentsUntil:function(e, t, n) {
return ut.dir(e, "parentNode", n);
},
next:function(e) {
return d(e, "nextSibling");
},
prev:function(e) {
return d(e, "previousSibling");
},
nextAll:function(e) {
return ut.dir(e, "nextSibling");
},
prevAll:function(e) {
return ut.dir(e, "previousSibling");
},
nextUntil:function(e, t, n) {
return ut.dir(e, "nextSibling", n);
},
prevUntil:function(e, t, n) {
return ut.dir(e, "previousSibling", n);
},
siblings:function(e) {
return ut.sibling((e.parentNode || {}).firstChild, e);
},
children:function(e) {
return ut.sibling(e.firstChild);
},
contents:function(e) {
return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :ut.merge([], e.childNodes);
}
}, function(e, t) {
ut.fn[e] = function(n, o) {
var r = ut.map(this, t, n);
return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = ut.filter(o, r)), 
this.length > 1 && (Ut[e] || (r = ut.unique(r)), jt.test(e) && (r = r.reverse())), 
this.pushStack(r);
};
}), ut.extend({
filter:function(e, t, n) {
var o = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? ut.find.matchesSelector(o, e) ? [ o ] :[] :ut.find.matches(e, ut.grep(t, function(e) {
return 1 === e.nodeType;
}));
},
dir:function(e, n, o) {
for (var r = [], i = e[n]; i && 9 !== i.nodeType && (o === t || 1 !== i.nodeType || !ut(i).is(o)); ) 1 === i.nodeType && r.push(i), 
i = i[n];
return r;
},
sibling:function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}
});
var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vt = / jQuery\d+="(?:null|\d+)"/g, Gt = new RegExp("<(?:" + Wt + ")[\\s/>]", "i"), Jt = /^\s+/, Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kt = /<([\w:]+)/, Qt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, on = /^$|\/(?:java|ecma)script/i, rn = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
option:[ 1, "<select multiple='multiple'>", "</select>" ],
legend:[ 1, "<fieldset>", "</fieldset>" ],
area:[ 1, "<map>", "</map>" ],
param:[ 1, "<object>", "</object>" ],
thead:[ 1, "<table>", "</table>" ],
tr:[ 2, "<table><tbody>", "</tbody></table>" ],
col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default:ut.support.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
}, ln = h(X), cn = ln.appendChild(X.createElement("div"));
sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, 
sn.th = sn.td, ut.fn.extend({
text:function(e) {
return ut.access(this, function(e) {
return e === t ? ut.text(this) :this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e));
}, null, e, arguments.length);
},
append:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = m(this, e);
t.appendChild(e);
}
});
},
prepend:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = m(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
remove:function(e, t) {
for (var n, o = e ? ut.filter(e, this) :this, r = 0; null != (n = o[r]); r++) t || 1 !== n.nodeType || ut.cleanData(w(n)), 
n.parentNode && (t && ut.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
return this;
},
empty:function() {
for (var e, t = 0; null != (e = this[t]); t++) {
for (1 === e.nodeType && ut.cleanData(w(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
e.options && ut.nodeName(e, "select") && (e.options.length = 0);
}
return this;
},
clone:function(e, t) {
return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
return ut.clone(this, e, t);
});
},
html:function(e) {
return ut.access(this, function(e) {
var n = this[0] || {}, o = 0, r = this.length;
if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") :t;
if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Gt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || sn[(Kt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
e = e.replace(Xt, "<$1></$2>");
try {
for (;r > o; o++) n = this[o] || {}, 1 === n.nodeType && (ut.cleanData(w(n, !1)), 
n.innerHTML = e);
n = 0;
} catch (i) {}
}
n && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith:function() {
var e = ut.map(this, function(e) {
return [ e.nextSibling, e.parentNode ];
}), t = 0;
return this.domManip(arguments, function(n) {
var o = e[t++], r = e[t++];
r && (o && o.parentNode !== r && (o = this.nextSibling), ut(this).remove(), r.insertBefore(n, o));
}, !0), t ? this :this.remove();
},
detach:function(e) {
return this.remove(e, !0);
},
domManip:function(e, t, n) {
e = ot.apply([], e);
var o, r, i, a, s, l, c = 0, u = this.length, d = this, p = u - 1, h = e[0], m = ut.isFunction(h);
if (m || !(1 >= u || "string" != typeof h || ut.support.checkClone) && nn.test(h)) return this.each(function(o) {
var r = d.eq(o);
m && (e[0] = h.call(this, o, r.html())), r.domManip(e, t, n);
});
if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), o = l.firstChild, 
1 === l.childNodes.length && (l = o), o)) {
for (a = ut.map(w(l, "script"), g), i = a.length; u > c; c++) r = l, c !== p && (r = ut.clone(r, !0, !0), 
i && ut.merge(a, w(r, "script"))), t.call(this[c], r, c);
if (i) for (s = a[a.length - 1].ownerDocument, ut.map(a, f), c = 0; i > c; c++) r = a[c], 
on.test(r.type || "") && !ut._data(r, "globalEval") && ut.contains(s, r) && (r.src ? ut._evalUrl(r.src) :ut.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
l = o = null;
}
return this;
}
}), ut.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
}, function(e, t) {
ut.fn[e] = function(e) {
for (var n, o = 0, r = [], i = ut(e), a = i.length - 1; a >= o; o++) n = o === a ? this :this.clone(!0), 
ut(i[o])[t](n), rt.apply(r, n.get());
return this.pushStack(r);
};
}), ut.extend({
clone:function(e, t, n) {
var o, r, i, a, s, l = ut.contains(e.ownerDocument, e);
if (ut.support.html5Clone || ut.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) :(cn.innerHTML = e.outerHTML, 
cn.removeChild(i = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (o = w(i), 
s = w(e), a = 0; null != (r = s[a]); ++a) o[a] && _(r, o[a]);
if (t) if (n) for (s = s || w(e), o = o || w(i), a = 0; null != (r = s[a]); a++) v(r, o[a]); else v(e, i);
return o = w(i, "script"), o.length > 0 && y(o, !l && w(e, "script")), o = s = r = null, 
i;
},
buildFragment:function(e, t, n, o) {
for (var r, i, a, s, l, c, u, d = e.length, p = h(t), m = [], g = 0; d > g; g++) if (i = e[g], 
i || 0 === i) if ("object" === ut.type(i)) ut.merge(m, i.nodeType ? [ i ] :i); else if (Zt.test(i)) {
for (s = s || p.appendChild(t.createElement("div")), l = (Kt.exec(i) || [ "", "" ])[1].toLowerCase(), 
u = sn[l] || sn._default, s.innerHTML = u[1] + i.replace(Xt, "<$1></$2>") + u[2], 
r = u[0]; r--; ) s = s.lastChild;
if (!ut.support.leadingWhitespace && Jt.test(i) && m.push(t.createTextNode(Jt.exec(i)[0])), 
!ut.support.tbody) for (i = "table" !== l || Qt.test(i) ? "<table>" !== u[1] || Qt.test(i) ? 0 :s :s.firstChild, 
r = i && i.childNodes.length; r--; ) ut.nodeName(c = i.childNodes[r], "tbody") && !c.childNodes.length && i.removeChild(c);
for (ut.merge(m, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
s = p.lastChild;
} else m.push(t.createTextNode(i));
for (s && p.removeChild(s), ut.support.appendChecked || ut.grep(w(m, "input"), b), 
g = 0; i = m[g++]; ) if ((!o || -1 === ut.inArray(i, o)) && (a = ut.contains(i.ownerDocument, i), 
s = w(p.appendChild(i), "script"), a && y(s), n)) for (r = 0; i = s[r++]; ) on.test(i.type || "") && n.push(i);
return s = null, p;
},
cleanData:function(e, t) {
for (var n, o, r, i, a = 0, s = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = e[a]); a++) if ((t || ut.acceptData(n)) && (r = n[s], 
i = r && l[r])) {
if (i.events) for (o in i.events) u[o] ? ut.event.remove(n, o) :ut.removeEvent(n, o, i.handle);
l[r] && (delete l[r], c ? delete n[s] :typeof n.removeAttribute !== G ? n.removeAttribute(s) :n[s] = null, 
tt.push(r));
}
},
_evalUrl:function(e) {
return ut.ajax({
url:e,
type:"GET",
dataType:"script",
async:!1,
global:!1,
"throws":!0
});
}
}), ut.fn.extend({
wrapAll:function(e) {
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).wrapAll(e.call(this, t));
});
if (this[0]) {
var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
return e;
}).append(this);
}
return this;
},
wrapInner:function(e) {
return this.each(ut.isFunction(e) ? function(t) {
ut(this).wrapInner(e.call(this, t));
} :function() {
var t = ut(this), n = t.contents();
n.length ? n.wrapAll(e) :t.append(e);
});
},
wrap:function(e) {
var t = ut.isFunction(e);
return this.each(function(n) {
ut(this).wrapAll(t ? e.call(this, n) :e);
});
},
unwrap:function() {
return this.parent().each(function() {
ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes);
}).end();
}
});
var un, dn, pn, hn = /alpha\([^)]*\)/i, mn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, fn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = new RegExp("^(" + dt + ")(.*)$", "i"), _n = new RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"), wn = new RegExp("^([+-])=(" + dt + ")", "i"), bn = {
BODY:"block"
}, xn = {
position:"absolute",
visibility:"hidden",
display:"block"
}, kn = {
letterSpacing:0,
fontWeight:400
}, Sn = [ "Top", "Right", "Bottom", "Left" ], Tn = [ "Webkit", "O", "Moz", "ms" ];
ut.fn.extend({
css:function(e, n) {
return ut.access(this, function(e, n, o) {
var r, i, a = {}, s = 0;
if (ut.isArray(n)) {
for (i = dn(e), r = n.length; r > s; s++) a[n[s]] = ut.css(e, n[s], !1, i);
return a;
}
return o !== t ? ut.style(e, n, o) :ut.css(e, n);
}, e, n, arguments.length > 1);
},
show:function() {
return S(this, !0);
},
hide:function() {
return S(this);
},
toggle:function(e) {
var t = "boolean" == typeof e;
return this.each(function() {
(t ? e :k(this)) ? ut(this).show() :ut(this).hide();
});
}
}), ut.extend({
cssHooks:{
opacity:{
get:function(e, t) {
if (t) {
var n = pn(e, "opacity");
return "" === n ? "1" :n;
}
}
}
},
cssNumber:{
columnCount:!0,
fillOpacity:!0,
fontWeight:!0,
lineHeight:!0,
opacity:!0,
orphans:!0,
widows:!0,
zIndex:!0,
zoom:!0
},
cssProps:{
"float":ut.support.cssFloat ? "cssFloat" :"styleFloat"
},
style:function(e, n, o, r) {
if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
var i, a, s, l = ut.camelCase(n), c = e.style;
if (n = ut.cssProps[l] || (ut.cssProps[l] = x(c, l)), s = ut.cssHooks[n] || ut.cssHooks[l], 
o === t) return s && "get" in s && (i = s.get(e, !1, r)) !== t ? i :c[n];
if (a = typeof o, "string" === a && (i = wn.exec(o)) && (o = (i[1] + 1) * i[2] + parseFloat(ut.css(e, n)), 
a = "number"), !(null == o || "number" === a && isNaN(o) || ("number" !== a || ut.cssNumber[l] || (o += "px"), 
ut.support.clearCloneStyle || "" !== o || 0 !== n.indexOf("background") || (c[n] = "inherit"), 
s && "set" in s && (o = s.set(e, o, r)) === t))) try {
c[n] = o;
} catch (u) {}
}
},
css:function(e, n, o, r) {
var i, a, s, l = ut.camelCase(n);
return n = ut.cssProps[l] || (ut.cssProps[l] = x(e.style, l)), s = ut.cssHooks[n] || ut.cssHooks[l], 
s && "get" in s && (a = s.get(e, !0, o)), a === t && (a = pn(e, n, r)), "normal" === a && n in kn && (a = kn[n]), 
"" === o || o ? (i = parseFloat(a), o === !0 || ut.isNumeric(i) ? i || 0 :a) :a;
}
}), e.getComputedStyle ? (dn = function(t) {
return e.getComputedStyle(t, null);
}, pn = function(e, n, o) {
var r, i, a, s = o || dn(e), l = s ? s.getPropertyValue(n) || s[n] :t, c = e.style;
return s && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), 
_n.test(l) && yn.test(n) && (r = c.width, i = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, 
l = s.width, c.width = r, c.minWidth = i, c.maxWidth = a)), l;
}) :X.documentElement.currentStyle && (dn = function(e) {
return e.currentStyle;
}, pn = function(e, n, o) {
var r, i, a, s = o || dn(e), l = s ? s[n] :t, c = e.style;
return null == l && c && c[n] && (l = c[n]), _n.test(l) && !gn.test(n) && (r = c.left, 
i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" :l, 
l = c.pixelLeft + "px", c.left = r, a && (i.left = a)), "" === l ? "auto" :l;
}), ut.each([ "height", "width" ], function(e, t) {
ut.cssHooks[t] = {
get:function(e, n, o) {
return n ? 0 === e.offsetWidth && fn.test(ut.css(e, "display")) ? ut.swap(e, xn, function() {
return L(e, t, o);
}) :L(e, t, o) :void 0;
},
set:function(e, n, o) {
var r = o && dn(e);
return T(e, n, o ? M(e, t, o, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r), r) :0);
}
};
}), ut.support.opacity || (ut.cssHooks.opacity = {
get:function(e, t) {
return mn.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
},
set:function(e, t) {
var n = e.style, o = e.currentStyle, r = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", i = o && o.filter || n.filter || "";
n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(i.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
"" === t || o && !o.filter) || (n.filter = hn.test(i) ? i.replace(hn, r) :i + " " + r);
}
}), ut(function() {
ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
get:function(e, t) {
return t ? ut.swap(e, {
display:"inline-block"
}, pn, [ e, "marginRight" ]) :void 0;
}
}), !ut.support.pixelPosition && ut.fn.position && ut.each([ "top", "left" ], function(e, t) {
ut.cssHooks[t] = {
get:function(e, n) {
return n ? (n = pn(e, t), _n.test(n) ? ut(e).position()[t] + "px" :n) :void 0;
}
};
});
}), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"));
}, ut.expr.filters.visible = function(e) {
return !ut.expr.filters.hidden(e);
}), ut.each({
margin:"",
padding:"",
border:"Width"
}, function(e, t) {
ut.cssHooks[e + t] = {
expand:function(n) {
for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") :[ n ]; 4 > o; o++) r[e + Sn[o] + t] = i[o] || i[o - 2] || i[0];
return r;
}
}, yn.test(e) || (ut.cssHooks[e + t].set = T);
});
var Mn = /%20/g, Ln = /\[\]$/, Cn = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, En = /^(?:input|select|textarea|keygen)/i;
ut.fn.extend({
serialize:function() {
return ut.param(this.serializeArray());
},
serializeArray:function() {
return this.map(function() {
var e = ut.prop(this, "elements");
return e ? ut.makeArray(e) :this;
}).filter(function() {
var e = this.type;
return this.name && !ut(this).is(":disabled") && En.test(this.nodeName) && !Dn.test(e) && (this.checked || !tn.test(e));
}).map(function(e, t) {
var n = ut(this).val();
return null == n ? null :ut.isArray(n) ? ut.map(n, function(e) {
return {
name:t.name,
value:e.replace(Cn, "\r\n")
};
}) :{
name:t.name,
value:n.replace(Cn, "\r\n")
};
}).get();
}
}), ut.param = function(e, n) {
var o, r = [], i = function(e, t) {
t = ut.isFunction(t) ? t() :null == t ? "" :t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
};
if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
i(this.name, this.value);
}); else for (o in e) E(o, e[o], n, i);
return r.join("&").replace(Mn, "+");
}, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
ut.fn[t] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
};
}), ut.fn.extend({
hover:function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
},
bind:function(e, t, n) {
return this.on(e, null, t, n);
},
unbind:function(e, t) {
return this.off(e, null, t);
},
delegate:function(e, t, n, o) {
return this.on(t, e, n, o);
},
undelegate:function(e, t, n) {
return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
}
});
var $n, In, An = ut.now(), Pn = /\?/, Yn = /#.*$/, Nn = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bn = /^(?:GET|HEAD)$/, Rn = /^\/\//, Fn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Hn = ut.fn.load, jn = {}, zn = {}, Un = "*/".concat("*");
try {
In = J.href;
} catch (Wn) {
In = X.createElement("a"), In.href = "", In = In.href;
}
$n = Fn.exec(In.toLowerCase()) || [], ut.fn.load = function(e, n, o) {
if ("string" != typeof e && Hn) return Hn.apply(this, arguments);
var r, i, a, s = this, l = e.indexOf(" ");
return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(n) ? (o = n, 
n = t) :n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
url:e,
type:a,
dataType:"html",
data:n
}).done(function(e) {
i = arguments, s.html(r ? ut("<div>").append(ut.parseHTML(e)).find(r) :e);
}).complete(o && function(e, t) {
s.each(o, i || [ e.responseText, t, e ]);
}), this;
}, ut.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
ut.fn[t] = function(e) {
return this.on(t, e);
};
}), ut.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:In,
type:"GET",
isLocal:qn.test($n[1]),
global:!0,
processData:!0,
async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":Un,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/xml/,
html:/html/,
json:/json/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":!0,
"text json":ut.parseJSON,
"text xml":ut.parseXML
},
flatOptions:{
url:!0,
context:!0
}
},
ajaxSetup:function(e, t) {
return t ? A(A(e, ut.ajaxSettings), t) :A(ut.ajaxSettings, e);
},
ajaxPrefilter:$(jn),
ajaxTransport:$(zn),
ajax:function(e, n) {
function o(e, n, o, r) {
var i, d, v, _, b, k = n;
2 !== w && (w = 2, l && clearTimeout(l), u = t, s = r || "", x.readyState = e > 0 ? 4 :0, 
i = e >= 200 && 300 > e || 304 === e, o && (_ = P(p, x, o)), _ = Y(p, _, x, i), 
i ? (p.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (ut.lastModified[a] = b), 
b = x.getResponseHeader("etag"), b && (ut.etag[a] = b)), 204 === e || "HEAD" === p.type ? k = "nocontent" :304 === e ? k = "notmodified" :(k = _.state, 
d = _.data, v = _.error, i = !v)) :(v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), 
x.status = e, x.statusText = (n || k) + "", i ? g.resolveWith(h, [ d, k, x ]) :g.rejectWith(h, [ x, k, v ]), 
x.statusCode(y), y = t, c && m.trigger(i ? "ajaxSuccess" :"ajaxError", [ x, p, i ? d :v ]), 
f.fireWith(h, [ x, k ]), c && (m.trigger("ajaxComplete", [ x, p ]), --ut.active || ut.event.trigger("ajaxStop")));
}
"object" == typeof e && (n = e, e = t), n = n || {};
var r, i, a, s, l, c, u, d, p = ut.ajaxSetup({}, n), h = p.context || p, m = p.context && (h.nodeType || h.jquery) ? ut(h) :ut.event, g = ut.Deferred(), f = ut.Callbacks("once memory"), y = p.statusCode || {}, v = {}, _ = {}, w = 0, b = "canceled", x = {
readyState:0,
getResponseHeader:function(e) {
var t;
if (2 === w) {
if (!d) for (d = {}; t = On.exec(s); ) d[t[1].toLowerCase()] = t[2];
t = d[e.toLowerCase()];
}
return null == t ? null :t;
},
getAllResponseHeaders:function() {
return 2 === w ? s :null;
},
setRequestHeader:function(e, t) {
var n = e.toLowerCase();
return w || (e = _[n] = _[n] || e, v[e] = t), this;
},
overrideMimeType:function(e) {
return w || (p.mimeType = e), this;
},
statusCode:function(e) {
var t;
if (e) if (2 > w) for (t in e) y[t] = [ y[t], e[t] ]; else x.always(e[x.status]);
return this;
},
abort:function(e) {
var t = e || b;
return u && u.abort(t), o(0, t), this;
}
};
if (g.promise(x).complete = f.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || In) + "").replace(Yn, "").replace(Rn, $n[1] + "//"), 
p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(pt) || [ "" ], 
null == p.crossDomain && (r = Fn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === $n[1] && r[2] === $n[2] && (r[3] || ("http:" === r[1] ? "80" :"443")) === ($n[3] || ("http:" === $n[1] ? "80" :"443")))), 
p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), 
I(jn, p, n, x), 2 === w) return x;
c = p.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
p.hasContent = !Bn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Pn.test(a) ? "&" :"?") + p.data, 
delete p.data), p.cache === !1 && (p.url = Nn.test(a) ? a.replace(Nn, "$1_=" + An++) :a + (Pn.test(a) ? "&" :"?") + "_=" + An++)), 
p.ifModified && (ut.lastModified[a] && x.setRequestHeader("If-Modified-Since", ut.lastModified[a]), 
ut.etag[a] && x.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), 
x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Un + "; q=0.01" :"") :p.accepts["*"]);
for (i in p.headers) x.setRequestHeader(i, p.headers[i]);
if (p.beforeSend && (p.beforeSend.call(h, x, p) === !1 || 2 === w)) return x.abort();
b = "abort";
for (i in {
success:1,
error:1,
complete:1
}) x[i](p[i]);
if (u = I(zn, p, n, x)) {
x.readyState = 1, c && m.trigger("ajaxSend", [ x, p ]), p.async && p.timeout > 0 && (l = setTimeout(function() {
x.abort("timeout");
}, p.timeout));
try {
w = 1, u.send(v, o);
} catch (k) {
if (!(2 > w)) throw k;
o(-1, k);
}
} else o(-1, "No Transport");
return x;
},
getJSON:function(e, t, n) {
return ut.get(e, t, n, "json");
},
getScript:function(e, n) {
return ut.get(e, t, n, "script");
}
}), ut.each([ "get", "post" ], function(e, n) {
ut[n] = function(e, o, r, i) {
return ut.isFunction(o) && (i = i || r, r = o, o = t), ut.ajax({
url:e,
type:n,
dataType:i,
data:o,
success:r
});
};
}), ut.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents:{
script:/(?:java|ecma)script/
},
converters:{
"text script":function(e) {
return ut.globalEval(e), e;
}
}
}), ut.ajaxPrefilter("script", function(e) {
e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
}), ut.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var n, o = X.head || ut("head")[0] || X.documentElement;
return {
send:function(t, r) {
n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"));
}, o.insertBefore(n, o.firstChild);
},
abort:function() {
n && n.onload(t, !0);
}
};
}
});
var Vn = [], Gn = /(=)\?(?=&|$)|\?\?/;
ut.ajaxSetup({
jsonp:"callback",
jsonpCallback:function() {
var e = Vn.pop() || ut.expando + "_" + An++;
return this[e] = !0, e;
}
}), ut.ajaxPrefilter("json jsonp", function(n, o, r) {
var i, a, s, l = n.jsonp !== !1 && (Gn.test(n.url) ? "url" :"string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() :n.jsonpCallback, 
l ? n[l] = n[l].replace(Gn, "$1" + i) :n.jsonp !== !1 && (n.url += (Pn.test(n.url) ? "&" :"?") + n.jsonp + "=" + i), 
n.converters["script json"] = function() {
return s || ut.error(i + " was not called"), s[0];
}, n.dataTypes[0] = "json", a = e[i], e[i] = function() {
s = arguments;
}, r.always(function() {
e[i] = a, n[i] && (n.jsonpCallback = o.jsonpCallback, Vn.push(i)), s && ut.isFunction(a) && a(s[0]), 
s = a = t;
}), "script") :void 0;
});
var Jn, Xn, Kn = 0, Qn = e.ActiveXObject && function() {
var e;
for (e in Jn) Jn[e](t, !0);
};
ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
return !this.isLocal && N() || O();
} :N, Xn = ut.ajaxSettings.xhr(), ut.support.cors = !!Xn && "withCredentials" in Xn, 
Xn = ut.support.ajax = !!Xn, Xn && ut.ajaxTransport(function(n) {
if (!n.crossDomain || ut.support.cors) {
var o;
return {
send:function(r, i) {
var a, s, l = n.xhr();
if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) :l.open(n.type, n.url, n.async), 
n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
try {
for (s in r) l.setRequestHeader(s, r[s]);
} catch (c) {}
l.send(n.hasContent && n.data || null), o = function(e, r) {
var s, c, u, d;
try {
if (o && (r || 4 === l.readyState)) if (o = t, a && (l.onreadystatechange = ut.noop, 
Qn && delete Jn[a]), r) 4 !== l.readyState && l.abort(); else {
d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
try {
u = l.statusText;
} catch (p) {
u = "";
}
s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) :s = d.text ? 200 :404;
}
} catch (h) {
r || i(-1, h);
}
d && i(s, u, d, c);
}, n.async ? 4 === l.readyState ? setTimeout(o) :(a = ++Kn, Qn && (Jn || (Jn = {}, 
ut(e).unload(Qn)), Jn[a] = o), l.onreadystatechange = o) :o();
},
abort:function() {
o && o(t, !0);
}
};
}
});
var Zn, eo, to = /^(?:toggle|show|hide)$/, no = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"), oo = /queueHooks$/, ro = [ H ], io = {
"*":[ function(e, t) {
var n = this.createTween(e, t), o = n.cur(), r = no.exec(t), i = r && r[3] || (ut.cssNumber[e] ? "" :"px"), a = (ut.cssNumber[e] || "px" !== i && +o) && no.exec(ut.css(n.elem, e)), s = 1, l = 20;
if (a && a[3] !== i) {
i = i || a[3], r = r || [], a = +o || 1;
do s = s || ".5", a /= s, ut.style(n.elem, e, a + i); while (s !== (s = n.cur() / o) && 1 !== s && --l);
}
return r && (n.unit = i, n.start = +a || +o || 0, n.end = r[1] ? a + (r[1] + 1) * r[2] :+r[2]), 
n;
} ]
};
ut.Animation = ut.extend(R, {
tweener:function(e, t) {
ut.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.split(" ");
for (var n, o = 0, r = e.length; r > o; o++) n = e[o], io[n] = io[n] || [], io[n].unshift(t);
},
prefilter:function(e, t) {
t ? ro.unshift(e) :ro.push(e);
}
}), ut.Tween = j, j.prototype = {
constructor:j,
init:function(e, t, n, o, r, i) {
this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), 
this.end = o, this.unit = i || (ut.cssNumber[n] ? "" :"px");
},
cur:function() {
var e = j.propHooks[this.prop];
return e && e.get ? e.get(this) :j.propHooks._default.get(this);
},
run:function(e) {
var t, n = j.propHooks[this.prop];
return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) :j.propHooks._default.set(this), this;
}
}, j.prototype.init.prototype = j.prototype, j.propHooks = {
_default:{
get:function(e) {
var t;
return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), 
t && "auto" !== t ? t :0) :e.elem[e.prop];
},
set:function(e) {
ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) :e.elem[e.prop] = e.now;
}
}
}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
set:function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, ut.each([ "toggle", "show", "hide" ], function(e, t) {
var n = ut.fn[t];
ut.fn[t] = function(e, o, r) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(z(t, !0), e, o, r);
};
}), ut.fn.extend({
fadeTo:function(e, t, n, o) {
return this.filter(k).css("opacity", 0).show().end().animate({
opacity:t
}, e, n, o);
},
animate:function(e, t, n, o) {
var r = ut.isEmptyObject(e), i = ut.speed(t, n, o), a = function() {
var t = R(this, ut.extend({}, e), i);
a.finish = function() {
t.stop(!0);
}, (r || ut._data(this, "finish")) && t.stop(!0);
};
return a.finish = a, r || i.queue === !1 ? this.each(a) :this.queue(i.queue, a);
},
stop:function(e, n, o) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(o);
};
return "string" != typeof e && (o = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, n = null != e && e + "queueHooks", i = ut.timers, a = ut._data(this);
if (n) a[n] && a[n].stop && r(a[n]); else for (n in a) a[n] && a[n].stop && oo.test(n) && r(a[n]);
for (n = i.length; n--; ) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(o), 
t = !1, i.splice(n, 1));
(t || !o) && ut.dequeue(this, e);
});
},
finish:function(e) {
return e !== !1 && (e = e || "fx"), this.each(function() {
var t, n = ut._data(this), o = n[e + "queue"], r = n[e + "queueHooks"], i = ut.timers, a = o ? o.length :0;
for (n.finish = !0, ut.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), 
t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
i.splice(t, 1));
for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
delete n.finish;
});
}
}), ut.each({
slideDown:z("show"),
slideUp:z("hide"),
slideToggle:z("toggle"),
fadeIn:{
opacity:"show"
},
fadeOut:{
opacity:"hide"
},
fadeToggle:{
opacity:"toggle"
}
}, function(e, t) {
ut.fn[e] = function(e, n, o) {
return this.animate(t, e, n, o);
};
}), ut.speed = function(e, t, n) {
var o = e && "object" == typeof e ? ut.extend({}, e) :{
complete:n || !n && t || ut.isFunction(e) && e,
duration:e,
easing:n && t || t && !ut.isFunction(t) && t
};
return o.duration = ut.fx.off ? 0 :"number" == typeof o.duration ? o.duration :o.duration in ut.fx.speeds ? ut.fx.speeds[o.duration] :ut.fx.speeds._default, 
(null == o.queue || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
ut.isFunction(o.old) && o.old.call(this), o.queue && ut.dequeue(this, o.queue);
}, o;
}, ut.easing = {
linear:function(e) {
return e;
},
swing:function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
}
}, ut.timers = [], ut.fx = j.prototype.init, ut.fx.tick = function() {
var e, n = ut.timers, o = 0;
for (Zn = ut.now(); o < n.length; o++) e = n[o], e() || n[o] !== e || n.splice(o--, 1);
n.length || ut.fx.stop(), Zn = t;
}, ut.fx.timer = function(e) {
e() && ut.timers.push(e) && ut.fx.start();
}, ut.fx.interval = 13, ut.fx.start = function() {
eo || (eo = setInterval(ut.fx.tick, ut.fx.interval));
}, ut.fx.stop = function() {
clearInterval(eo), eo = null;
}, ut.fx.speeds = {
slow:600,
fast:200,
_default:400
}, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
return ut.grep(ut.timers, function(t) {
return e === t.elem;
}).length;
}), ut.fn.offset = function(e) {
if (arguments.length) return e === t ? this :this.each(function(t) {
ut.offset.setOffset(this, e, t);
});
var n, o, r = {
top:0,
left:0
}, i = this[0], a = i && i.ownerDocument;
if (a) return n = a.documentElement, ut.contains(n, i) ? (typeof i.getBoundingClientRect !== G && (r = i.getBoundingClientRect()), 
o = U(a), {
top:r.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
left:r.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
}) :r;
}, ut.offset = {
setOffset:function(e, t, n) {
var o = ut.css(e, "position");
"static" === o && (e.style.position = "relative");
var r, i, a = ut(e), s = a.offset(), l = ut.css(e, "top"), c = ut.css(e, "left"), u = ("absolute" === o || "fixed" === o) && ut.inArray("auto", [ l, c ]) > -1, d = {}, p = {};
u ? (p = a.position(), r = p.top, i = p.left) :(r = parseFloat(l) || 0, i = parseFloat(c) || 0), 
ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), 
null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) :a.css(d);
}
}, ut.fn.extend({
position:function() {
if (this[0]) {
var e, t, n = {
top:0,
left:0
}, o = this[0];
return "fixed" === ut.css(o, "position") ? t = o.getBoundingClientRect() :(e = this.offsetParent(), 
t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), 
n.left += ut.css(e[0], "borderLeftWidth", !0)), {
top:t.top - n.top - ut.css(o, "marginTop", !0),
left:t.left - n.left - ut.css(o, "marginLeft", !0)
};
}
},
offsetParent:function() {
return this.map(function() {
for (var e = this.offsetParent || K; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position"); ) e = e.offsetParent;
return e || K;
});
}
}), ut.each({
scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"
}, function(e, n) {
var o = /Y/.test(n);
ut.fn[e] = function(r) {
return ut.access(this, function(e, r, i) {
var a = U(e);
return i === t ? a ? n in a ? a[n] :a.document.documentElement[r] :e[r] :void (a ? a.scrollTo(o ? ut(a).scrollLeft() :i, o ? i :ut(a).scrollTop()) :e[r] = i);
}, e, r, arguments.length, null);
};
}), ut.each({
Height:"height",
Width:"width"
}, function(e, n) {
ut.each({
padding:"inner" + e,
content:n,
"":"outer" + e
}, function(o, r) {
ut.fn[r] = function(r, i) {
var a = arguments.length && (o || "boolean" != typeof r), s = o || (r === !0 || i === !0 ? "margin" :"border");
return ut.access(this, function(n, o, r) {
var i;
return ut.isWindow(n) ? n.document.documentElement["client" + e] :9 === n.nodeType ? (i = n.documentElement, 
Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) :r === t ? ut.css(n, o, s) :ut.style(n, o, r, s);
}, n, a ? r :t, a, null);
};
});
}), ut.fn.size = function() {
return this.length;
}, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = ut :(e.jQuery = e.$ = ut, 
"function" == typeof define && define.amd && define("jquery", [], function() {
return ut;
}));
}(window);