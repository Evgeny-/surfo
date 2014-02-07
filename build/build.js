!function(a, b, c) {
    "use strict";
    function d(a) {
        return function() {
            var b, c = arguments[0], c = "[" + (a ? a + ":" : "") + c + "] http://errors.angularjs.org/1.2.10/" + (a ? a + "/" : "") + c;
            for (b = 1; b < arguments.length; b++) c = c + (1 == b ? "?" : "&") + "p" + (b - 1) + "=" + encodeURIComponent("function" == typeof arguments[b] ? arguments[b].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[b] ? "undefined" : "string" != typeof arguments[b] ? JSON.stringify(arguments[b]) : arguments[b]);
            return Error(c);
        };
    }
    function e(a) {
        if (null == a || A(a)) return !1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function f(a, b, c) {
        var d;
        if (a) if (y(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d); else if (a.forEach && a.forEach !== f) a.forEach(b, c); else if (e(a)) for (d = 0; d < a.length; d++) b.call(c, a[d], d); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a;
    }
    function g(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c.sort();
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function i(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function j() {
        for (var a, b = _c.length; b; ) {
            if (b--, a = _c[b].charCodeAt(0), 57 == a) return _c[b] = "A", _c.join("");
            if (90 != a) return _c[b] = String.fromCharCode(a + 1), _c.join("");
            _c[b] = "0";
        }
        return _c.unshift("0"), _c.join("");
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function l(a) {
        var b = a.$$hashKey;
        return f(arguments, function(b) {
            b !== a && f(b, function(b, c) {
                a[c] = b;
            });
        }), k(a, b), a;
    }
    function m(a) {
        return parseInt(a, 10);
    }
    function n(a, b) {
        return l(new (l(function() {}, {
            prototype: a
        }))(), b);
    }
    function o() {}
    function p(a) {
        return a;
    }
    function q(a) {
        return function() {
            return a;
        };
    }
    function r(a) {
        return "undefined" == typeof a;
    }
    function s(a) {
        return "undefined" != typeof a;
    }
    function t(a) {
        return null != a && "object" == typeof a;
    }
    function u(a) {
        return "string" == typeof a;
    }
    function v(a) {
        return "number" == typeof a;
    }
    function w(a) {
        return "[object Date]" === Yc.call(a);
    }
    function x(a) {
        return "[object Array]" === Yc.call(a);
    }
    function y(a) {
        return "function" == typeof a;
    }
    function z(a) {
        return "[object RegExp]" === Yc.call(a);
    }
    function A(a) {
        return a && a.document && a.location && a.alert && a.setInterval;
    }
    function B(a) {
        return !(!a || !(a.nodeName || a.on && a.find));
    }
    function C(a, b, c) {
        var d = [];
        return f(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d;
    }
    function D(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return -1;
    }
    function E(a, b) {
        var c = D(a, b);
        return c >= 0 && a.splice(c, 1), b;
    }
    function F(a, b) {
        if (A(a) || a && a.$evalAsync && a.$watch) throw Zc("cpws");
        if (b) {
            if (a === b) throw Zc("cpi");
            if (x(a)) for (var c = b.length = 0; c < a.length; c++) b.push(F(a[c])); else {
                c = b.$$hashKey, f(b, function(a, c) {
                    delete b[c];
                });
                for (var d in a) b[d] = F(a[d]);
                k(b, c);
            }
        } else (b = a) && (x(a) ? b = F(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = RegExp(a.source) : t(a) && (b = F(a, {})));
        return b;
    }
    function G(a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && "$" !== c.charAt(1) && (b[c] = a[c]);
        return b;
    }
    function H(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e = typeof a;
        if (e == typeof b && "object" == e) {
            if (!x(a)) {
                if (w(a)) return w(b) && a.getTime() == b.getTime();
                if (z(a) && z(b)) return a.toString() == b.toString();
                if (a && a.$evalAsync && a.$watch || b && b.$evalAsync && b.$watch || A(a) || A(b) || x(b)) return !1;
                e = {};
                for (d in a) if ("$" !== d.charAt(0) && !y(a[d])) {
                    if (!H(a[d], b[d])) return !1;
                    e[d] = !0;
                }
                for (d in b) if (!e.hasOwnProperty(d) && "$" !== d.charAt(0) && b[d] !== c && !y(b[d])) return !1;
                return !0;
            }
            if (!x(b)) return !1;
            if ((e = a.length) == b.length) {
                for (d = 0; e > d; d++) if (!H(a[d], b[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function I() {
        return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
    }
    function J(a, b) {
        var c = 2 < arguments.length ? Wc.call(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, c.concat(Wc.call(arguments, 0))) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function K(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : d && d.$evalAsync && d.$watch && (e = "$SCOPE"), 
        e;
    }
    function L(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, K, b ? "  " : null);
    }
    function M(a) {
        return u(a) ? JSON.parse(a) : a;
    }
    function N(a) {
        return "function" == typeof a ? a = !0 : a && 0 !== a.length ? (a = Uc("" + a), 
        a = !("f" == a || "0" == a || "false" == a || "no" == a || "n" == a || "[]" == a)) : a = !1, 
        a;
    }
    function O(a) {
        a = Qc(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = Qc("<div>").append(a).html();
        try {
            return 3 === a[0].nodeType ? Uc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Uc(b);
            });
        } catch (d) {
            return Uc(c);
        }
    }
    function P(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function Q(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            a && (b = a.split("="), c = P(b[0]), s(c) && (a = s(b[1]) ? P(b[1]) : !0, d[c] ? x(d[c]) ? d[c].push(a) : d[c] = [ d[c], a ] : d[c] = a));
        }), d;
    }
    function R(a) {
        var b = [];
        return f(a, function(a, c) {
            x(a) ? f(a, function(a) {
                b.push(T(c, !0) + (!0 === a ? "" : "=" + T(a, !0)));
            }) : b.push(T(c, !0) + (!0 === a ? "" : "=" + T(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function S(a) {
        return T(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function T(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
    }
    function U(a, c) {
        function d(a) {
            a && h.push(a);
        }
        var e, g, h = [ a ], i = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function(c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), 
            f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d));
        }), f(h, function(a) {
            if (!e) {
                var b = j.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
                    !e && i[b.name] && (e = a, g = b.value);
                });
            }
        }), e && c(e, g ? [ g ] : []);
    }
    function V(c, d) {
        var e = function() {
            if (c = Qc(c), c.injector()) {
                var a = c[0] === b ? "document" : O(c);
                throw Zc("btstrpd", a);
            }
            return d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), d.unshift("ng"), a = wb(d), a.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), a;
        }, g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void ($c.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a);
            }), e();
        }));
    }
    function W(a, b) {
        return b = b || "_", a.replace(bd, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function X(a, b, c) {
        if (!a) throw Zc("areq", b || "?", c || "required");
        return a;
    }
    function Y(a, b, c) {
        return c && x(a) && (a = a[a.length - 1]), X(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function Z(a, b) {
        if ("hasOwnProperty" === a) throw Zc("badname", b);
    }
    function $(a, b, c) {
        if (!b) return a;
        b = b.split(".");
        for (var d, e = a, f = b.length, g = 0; f > g; g++) d = b[g], a && (a = (e = a)[d]);
        return !c && y(a) ? J(e, a) : a;
    }
    function _(a) {
        var b = a[0];
        if (a = a[a.length - 1], b === a) return Qc(b);
        var c = [ b ];
        do {
            if (b = b.nextSibling, !b) break;
            c.push(b);
        } while (b !== a);
        return Qc(c);
    }
    function ab(a) {
        var b = d("$injector"), c = d("ng");
        return a = a.angular || (a.angular = {}), a.$$minErr = a.$$minErr || d, a.module || (a.module = function() {
            var a = {};
            return function(d, e, f) {
                if ("hasOwnProperty" === d) throw c("badname", "module");
                return e && a.hasOwnProperty(d) && (a[d] = null), a[d] || (a[d] = function() {
                    function a(a, b, d) {
                        return function() {
                            return c[d || "push"]([ a, b, arguments ]), i;
                        };
                    }
                    if (!e) throw b("nomod", d);
                    var c = [], g = [], h = a("$injector", "invoke"), i = {
                        _invokeQueue: c,
                        _runBlocks: g,
                        requires: e,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: h,
                        run: function(a) {
                            return g.push(a), this;
                        }
                    };
                    return f && h(f), i;
                }());
            };
        }());
    }
    function bb(a) {
        return a.replace(id, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(jd, "Moz$1");
    }
    function cb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l = c && a ? [ this.filter(a) ] : [ this ], m = b;
            if (!d || null != a) for (;l.length; ) for (e = l.shift(), g = 0, h = e.length; h > g; g++) for (i = Qc(e[g]), 
            m ? i.triggerHandler("$destroy") : m = !m, j = 0, i = (k = i.children()).length; i > j; j++) l.push(Rc(k[j]));
            return f.apply(this, arguments);
        }
        var f = Rc.fn[a], f = f.$original || f;
        e.$original = f, Rc.fn[a] = e;
    }
    function db(a) {
        if (a instanceof db) return a;
        if (!(this instanceof db)) {
            if (u(a) && "<" != a.charAt(0)) throw kd("nosel");
            return new db(a);
        }
        if (u(a)) {
            var c = b.createElement("div");
            c.innerHTML = "<div>&#160;</div>" + a, c.removeChild(c.firstChild), nb(this, c.childNodes), 
            Qc(b.createDocumentFragment()).append(this);
        } else nb(this, a);
    }
    function eb(a) {
        return a.cloneNode(!0);
    }
    function fb(a) {
        hb(a);
        var b = 0;
        for (a = a.childNodes || []; b < a.length; b++) fb(a[b]);
    }
    function gb(a, b, c, d) {
        if (s(d)) throw kd("offargs");
        var e = ib(a, "events");
        ib(a, "handle") && (r(b) ? f(e, function(b, c) {
            hd(a, c, b), delete e[c];
        }) : f(b.split(" "), function(b) {
            r(c) ? (hd(a, b, e[b]), delete e[b]) : E(e[b] || [], c);
        }));
    }
    function hb(a, b) {
        var d = a[ed], e = dd[d];
        e && (b ? delete dd[d].data[b] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), 
        gb(a)), delete dd[d], a[ed] = c));
    }
    function ib(a, b, c) {
        var d = a[ed], d = dd[d || -1];
        return s(c) ? (d || (a[ed] = d = ++fd, d = dd[d] = {}), void (d[b] = c)) : d && d[b];
    }
    function jb(a, b, c) {
        var d = ib(a, "data"), e = s(c), f = !e && s(b), g = f && !t(b);
        if (d || g || ib(a, "data", d = {}), e) d[b] = c; else {
            if (!f) return d;
            if (g) return d && d[b];
            l(d, b);
        }
    }
    function kb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
    }
    function lb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", ad((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ad(b) + " ", " ")));
        });
    }
    function mb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = ad(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", ad(c));
        }
    }
    function nb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || A(b) ? [ b ] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c]);
        }
    }
    function ob(a, b) {
        return pb(a, "$" + (b || "ngController") + "Controller");
    }
    function pb(a, b, d) {
        for (a = Qc(a), 9 == a[0].nodeType && (a = a.find("html")), b = x(b) ? b : [ b ]; a.length; ) {
            for (var e = 0, f = b.length; f > e; e++) if ((d = a.data(b[e])) !== c) return d;
            a = a.parent();
        }
    }
    function qb(a) {
        for (var b = 0, c = a.childNodes; b < c.length; b++) fb(c[b]);
        for (;a.firstChild; ) a.removeChild(a.firstChild);
    }
    function rb(a, b) {
        var c = md[b.toLowerCase()];
        return c && nd[a.nodeName] && c;
    }
    function sb(a, c) {
        var d = function(d, e) {
            if (d.preventDefault || (d.preventDefault = function() {
                d.returnValue = !1;
            }), d.stopPropagation || (d.stopPropagation = function() {
                d.cancelBubble = !0;
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = !0, g.call(d);
                }, d.defaultPrevented = !1;
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || !1 === d.returnValue;
            };
            var h = G(c[e || d.type] || []);
            f(h, function(b) {
                b.call(a, d);
            }), 8 >= Pc ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, 
            delete d.stopPropagation, delete d.isDefaultPrevented);
        };
        return d.elem = a, d;
    }
    function tb(a) {
        var b, d = typeof a;
        return "object" == d && null !== a ? "function" == typeof (b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, 
        d + ":" + b;
    }
    function ub(a) {
        f(a, this.put, this);
    }
    function vb(a) {
        var b, c;
        return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(rd, ""), 
        c = c.match(od), f(c[1].split(pd), function(a) {
            a.replace(qd, function(a, c, d) {
                b.push(d);
            });
        })), a.$inject = b) : x(a) ? (c = a.length - 1, Y(a[c], "fn"), b = a.slice(0, c)) : Y(a, "fn", !0), 
        b;
    }
    function wb(a) {
        function b(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c);
            };
        }
        function c(a, b) {
            if (Z(a, "service"), (y(b) || x(b)) && (b = n.instantiate(b)), !b.$get) throw sd("pget", a);
            return m[a + j] = b;
        }
        function d(a, b) {
            return c(a, {
                $get: b
            });
        }
        function e(a) {
            var b, c, d, g, h = [];
            return f(a, function(a) {
                if (!l.get(a)) {
                    l.put(a, !0);
                    try {
                        if (u(a)) for (b = Sc(a), h = h.concat(e(b.requires)).concat(b._runBlocks), c = b._invokeQueue, 
                        d = 0, g = c.length; g > d; d++) {
                            var f = c[d], i = n.get(f[0]);
                            i[f[1]].apply(i, f[2]);
                        } else y(a) ? h.push(n.invoke(a)) : x(a) ? h.push(n.invoke(a)) : Y(a, "module");
                    } catch (j) {
                        throw x(a) && (a = a[a.length - 1]), j.message && j.stack && -1 == j.stack.indexOf(j.message) && (j = j.message + "\n" + j.stack), 
                        sd("modulerr", a, j.stack || j.message || j);
                    }
                }
            }), h;
        }
        function g(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === h) throw sd("cdep", k.join(" <- "));
                    return a[c];
                }
                try {
                    return k.unshift(c), a[c] = h, a[c] = b(c);
                } catch (d) {
                    throw a[c] === h && delete a[c], d;
                } finally {
                    k.shift();
                }
            }
            function d(a, b, d) {
                var e, f, g, h = [], i = vb(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g) throw sd("itkn", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
                }
                return a.$inject || (a = a[e]), a.apply(b, h);
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c, e = function() {};
                    return e.prototype = (x(a) ? a[a.length - 1] : a).prototype, e = new e(), c = d(a, e, b), 
                    t(c) || y(c) ? c : e;
                },
                get: c,
                annotate: vb,
                has: function(b) {
                    return m.hasOwnProperty(b + j) || a.hasOwnProperty(b);
                }
            };
        }
        var h = {}, j = "Provider", k = [], l = new ub(), m = {
            $provide: {
                provider: b(c),
                factory: b(d),
                service: b(function(a, b) {
                    return d(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: b(function(a, b) {
                    return d(a, q(b));
                }),
                constant: b(function(a, b) {
                    Z(a, "constant"), m[a] = b, p[a] = b;
                }),
                decorator: function(a, b) {
                    var c = n.get(a + j), d = c.$get;
                    c.$get = function() {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, n = m.$injector = g(m, function() {
            throw sd("unpr", k.join(" <- "));
        }), p = {}, r = p.$injector = g(p, function(a) {
            return a = n.get(a + j), r.invoke(a.$get, a);
        });
        return f(e(a), function(a) {
            r.invoke(a || o);
        }), r;
    }
    function xb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return f(a, function(a) {
                    b || "a" !== Uc(a.nodeName) || (b = a);
                }), b;
            }
            function g() {
                var a, d = c.hash();
                d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0);
            }
            var h = b.document;
            return a && d.$watch(function() {
                return c.hash();
            }, function() {
                d.$evalAsync(g);
            }), g;
        } ];
    }
    function yb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, Wc.call(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;t.length; ) try {
                    t.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function h(a, b) {
            !function c() {
                f(w, function(a) {
                    a();
                }), v = b(c, a);
            }();
        }
        function i() {
            z = null, x != j.url() && (x = j.url(), f(A, function(a) {
                a(j.url());
            }));
        }
        var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
        j.isMock = !1;
        var s = 0, t = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
            s++;
        }, j.notifyWhenNoOutstandingRequests = function(a) {
            f(w, function(a) {
                a();
            }), 0 === s ? a() : t.push(a);
        };
        var v, w = [];
        j.addPollFn = function(a) {
            return r(v) && h(100, n), w.push(a), a;
        };
        var x = l.href, y = b.find("base"), z = null;
        j.url = function(b, c) {
            return l !== a.location && (l = a.location), m !== a.history && (m = a.history), 
            b ? x != b ? (x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), 
            y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j) : void 0 : z || l.href.replace(/%27/g, "'");
        };
        var A = [], B = !1;
        j.onUrlChange = function(b) {
            return B || (e.history && Qc(a).on("popstate", i), e.hashchange ? Qc(a).on("hashchange", i) : j.addPollFn(i), 
            B = !0), A.push(b), b;
        }, j.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var C = {}, D = "", E = j.baseHref();
        j.cookies = function(a, b) {
            var e, f, g, h;
            if (!a) {
                if (k.cookie !== D) for (D = k.cookie, e = D.split("; "), C = {}, g = 0; g < e.length; g++) f = e[g], 
                h = f.indexOf("="), h > 0 && (a = unescape(f.substring(0, h)), C[a] === c && (C[a] = unescape(f.substring(h + 1))));
                return C;
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, 
            e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"));
        }, j.defer = function(a, b) {
            var c;
            return s++, c = n(function() {
                delete q[c], g(a);
            }, b || 0), q[c] = !0, c;
        }, j.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1;
        };
    }
    function zb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new yb(a, d, b, c);
        } ];
    }
    function Ab() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        var c = k[a] || (k[a] = {
                            key: a
                        });
                        return e(c), r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), 
                        b);
                    },
                    get: function(a) {
                        var b = k[a];
                        return b ? (e(b), i[a]) : void 0;
                    },
                    remove: function(a) {
                        var b = k[a];
                        b && (b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a], delete i[a], 
                        g--);
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null;
                    },
                    destroy: function() {
                        k = h = i = null, delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function Bb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Cb(a, d) {
        var e = {}, g = "Directive", h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            return Z(b, "directive"), u(b) ? (X(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], 
            a.factory(b + g, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(e[b], function(e, f) {
                    try {
                        var g = a.invoke(e);
                        y(g) ? g = {
                            compile: q(g)
                        } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, 
                        g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, 
                        g.restrict = g.restrict || "A", d.push(g);
                    } catch (h) {
                        c(h);
                    }
                }), d;
            } ])), e[b].push(c)) : f(b, i(m)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, i, m, o, r, s, v, w, z, A, B) {
            function C(a, b, c, d, e) {
                a instanceof Qc || (a = Qc(a)), f(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Qc(b).wrap("<span></span>").parent()[0]);
                });
                var g = E(a, b, a, c, d, e);
                return D(a, "ng-scope"), function(b, c, d) {
                    X(b, "scope");
                    var e = c ? ld.clone.call(a) : a;
                    f(d, function(a, b) {
                        e.data("$" + b + "Controller", a);
                    }), d = 0;
                    for (var h = e.length; h > d; d++) {
                        var i = e[d].nodeType;
                        1 !== i && 9 !== i || e.eq(d).data("$scope", b);
                    }
                    return c && c(e, b), g && g(b, e, e), e;
                };
            }
            function D(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function E(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, n;
                    g = d.length;
                    var o = Array(g);
                    for (k = 0; g > k; k++) o[k] = d[k];
                    for (n = k = 0, l = m.length; l > k; n++) h = o[n], d = m[k++], g = m[k++], i = Qc(h), 
                    d ? (d.scope ? (j = a.$new(), i.data("$scope", j)) : j = a, (i = d.transclude) || !f && b ? d(g, j, h, e, F(a, i || b)) : d(g, j, h, e, f)) : g && g(a, h.childNodes, c, f);
                }
                for (var i, j, k, l, m = [], n = 0; n < a.length; n++) i = new _(), j = I(a[n], [], i, 0 === n ? e : c, f), 
                (g = j.length ? M(j, a[n], i, b, d, null, [], [], g) : null) && g.scope && D(Qc(a[n]), "ng-scope"), 
                i = g && g.terminal || !(k = a[n].childNodes) || !k.length ? null : E(k, g ? g.transclude : b), 
                m.push(g, i), l = l || g || i, g = null;
                return l ? h : null;
            }
            function F(a, b) {
                return function(c, d, e) {
                    var f = !1;
                    return c || (c = a.$new(), f = c.$$transcluded = !0), d = b(c, d, e), f && d.on("$destroy", J(c, c.$destroy)), 
                    d;
                };
            }
            function I(a, b, c, d, e) {
                var f, g = c.$attr;
                switch (a.nodeType) {
                  case 1:
                    P(b, Db(Tc(a).toLowerCase()), "E", d, e);
                    var i, k, l;
                    f = a.attributes;
                    for (var m = 0, n = f && f.length; n > m; m++) {
                        var o = !1, p = !1;
                        if (i = f[m], !Pc || Pc >= 8 || i.specified) {
                            k = i.name, l = Db(k), db.test(l) && (k = W(l.substr(6), "-"));
                            var q = l.replace(/(Start|End)$/, "");
                            l === q + "Start" && (o = k, p = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), 
                            l = Db(k.toLowerCase()), g[l] = k, c[l] = i = ad(i.value), rb(a, l) && (c[l] = !0), 
                            Y(a, b, i, l), P(b, l, "A", d, e, o, p);
                        }
                    }
                    if (a = a.className, u(a) && "" !== a) for (;f = j.exec(a); ) l = Db(f[2]), P(b, l, "C", d, e) && (c[l] = ad(f[3])), 
                    a = a.substr(f.index + f[0].length);
                    break;

                  case 3:
                    U(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        (f = h.exec(a.nodeValue)) && (l = Db(f[1]), P(b, l, "M", d, e) && (c[l] = ad(f[2])));
                    } catch (r) {}
                }
                return b.sort(S), b;
            }
            function K(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw vd("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return Qc(d);
            }
            function L(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = K(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function M(a, e, g, h, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = L(a, c, d)), a.require = E.require, (A === E || E.$$isolateScope) && (a = $(a, {
                        isolateScope: !0
                    })), l.push(a)), b && (c && (b = L(b, c, d)), b.require = E.require, (A === E || E.$$isolateScope) && (b = $(b, {
                        isolateScope: !0
                    })), m.push(b));
                }
                function p(a, b, c) {
                    var d, e = "data", g = !1;
                    if (u(a)) {
                        for (;"^" == (d = a.charAt(0)) || "?" == d; ) a = a.substr(1), "^" == d && (e = "inheritedData"), 
                        g = g || "?" == d;
                        if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), 
                        !d && !g) throw vd("ctreq", a, F);
                    } else x(a) && (d = [], f(a, function(a) {
                        d.push(p(a, b, c));
                    }));
                    return d;
                }
                function q(a, b, h, j, k) {
                    function n(a, b) {
                        var d;
                        return 2 > arguments.length && (b = a, a = c), S && (d = y), k(a, b, d);
                    }
                    var o, q, t, u, v, w, x, y = {};
                    if (o = e === h ? g : G(g, new _(Qc(h), g.$attr)), q = o.$$element, A) {
                        var C = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        j = Qc(h), w = b.$new(!0), B && B === A.$$originalDirective ? j.data("$isolateScope", w) : j.data("$isolateScopeNoTemplate", w), 
                        D(j, "ng-isolate-scope"), f(A.scope, function(a, c) {
                            var e, f, g, h, i = a.match(C) || [], j = i[3] || c, k = "?" == i[2], i = i[1];
                            switch (w.$$isolateBindings[c] = i + j, i) {
                              case "@":
                                o.$observe(j, function(a) {
                                    w[c] = a;
                                }), o.$$observers[j].$$scope = b, o[j] && (w[c] = d(o[j])(b));
                                break;

                              case "=":
                                if (k && !o[j]) break;
                                f = r(o[j]), h = f.literal ? H : function(a, b) {
                                    return a === b;
                                }, g = f.assign || function() {
                                    throw e = w[c] = f(b), vd("nonassign", o[j], A.name);
                                }, e = w[c] = f(b), w.$watch(function() {
                                    var a = f(b);
                                    return h(a, w[c]) || (h(a, e) ? g(b, a = w[c]) : w[c] = a), e = a;
                                }, null, f.literal);
                                break;

                              case "&":
                                f = r(o[j]), w[c] = function(a) {
                                    return f(b, a);
                                };
                                break;

                              default:
                                throw vd("iscp", A.name, c, a);
                            }
                        });
                    }
                    for (x = k && n, z && f(z, function(a) {
                        var c, d = {
                            $scope: a === A || a.$$isolateScope ? w : b,
                            $element: q,
                            $attrs: o,
                            $transclude: x
                        };
                        v = a.controller, "@" == v && (v = o[a.name]), c = s(v, d), y[a.name] = c, S || q.data("$" + a.name + "Controller", c), 
                        a.controllerAs && (d.$scope[a.controllerAs] = c);
                    }), j = 0, t = l.length; t > j; j++) try {
                        (u = l[j])(u.isolateScope ? w : b, q, o, u.require && p(u.require, q, y), x);
                    } catch (E) {
                        i(E, O(q));
                    }
                    for (j = b, A && (A.template || null === A.templateUrl) && (j = w), a && a(j, h.childNodes, c, k), 
                    j = m.length - 1; j >= 0; j--) try {
                        (u = m[j])(u.isolateScope ? w : b, q, o, u.require && p(u.require, q, y), x);
                    } catch (F) {
                        i(F, O(q));
                    }
                }
                n = n || {};
                var v, w = -Number.MAX_VALUE, z = n.controllerDirectives, A = n.newIsolateScopeDirective, B = n.templateDirective;
                n = n.nonTlbTranscludeDirective;
                for (var E, F, J, M, P = !1, S = !1, U = g.$$element = Qc(e), V = h, W = 0, X = a.length; X > W; W++) {
                    E = a[W];
                    var Y = E.$$start, ab = E.$$end;
                    if (Y && (U = K(e, Y, ab)), J = c, w > E.priority) break;
                    if ((J = E.scope) && (v = v || E, E.templateUrl || (T("new/isolated scope", A, E, U), 
                    t(J) && (A = E))), F = E.name, !E.templateUrl && E.controller && (J = E.controller, 
                    z = z || {}, T("'" + F + "' controller", z[F], E, U), z[F] = E), (J = E.transclude) && (P = !0, 
                    E.$$tlb || (T("transclusion", n, E, U), n = E), "element" == J ? (S = !0, w = E.priority, 
                    J = K(e, Y, ab), U = g.$$element = Qc(b.createComment(" " + F + ": " + g[F] + " ")), 
                    e = U[0], Z(j, Qc(Wc.call(J, 0)), e), V = C(J, h, w, k && k.name, {
                        nonTlbTranscludeDirective: n
                    })) : (J = Qc(eb(e)).contents(), U.empty(), V = C(J, h))), E.template) if (T("template", B, E, U), 
                    B = E, J = y(E.template) ? E.template(U, g) : E.template, J = cb(J), E.replace) {
                        if (k = E, J = Qc("<div>" + ad(J) + "</div>").contents(), e = J[0], 1 != J.length || 1 !== e.nodeType) throw vd("tplrt", F, "");
                        Z(j, U, e), X = {
                            $attr: {}
                        }, J = I(e, [], X);
                        var bb = a.splice(W + 1, a.length - (W + 1));
                        A && N(J), a = a.concat(J).concat(bb), Q(g, X), X = a.length;
                    } else U.html(J);
                    if (E.templateUrl) T("template", B, E, U), B = E, E.replace && (k = E), q = R(a.splice(W, a.length - W), U, g, j, V, l, m, {
                        controllerDirectives: z,
                        newIsolateScopeDirective: A,
                        templateDirective: B,
                        nonTlbTranscludeDirective: n
                    }), X = a.length; else if (E.compile) try {
                        M = E.compile(U, g, V), y(M) ? o(null, M, Y, ab) : M && o(M.pre, M.post, Y, ab);
                    } catch (db) {
                        i(db, O(U));
                    }
                    E.terminal && (q.terminal = !0, w = Math.max(w, E.priority));
                }
                return q.scope = v && !0 === v.scope, q.transclude = P && V, q;
            }
            function N(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                    $$isolateScope: !0
                });
            }
            function P(b, d, f, h, j, k, l) {
                if (d === j) return null;
                if (j = null, e.hasOwnProperty(d)) {
                    var m;
                    d = a.get(d + g);
                    for (var o = 0, p = d.length; p > o; o++) try {
                        m = d[o], (h === c || h > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = n(m, {
                            $$start: k,
                            $$end: l
                        })), b.push(m), j = m);
                    } catch (q) {
                        i(q);
                    }
                }
                return j;
            }
            function Q(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function R(a, b, c, d, e, g, h, i) {
                var j, k, n = [], p = b[0], q = a.shift(), r = l({}, q, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: q
                }), s = y(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                return b.empty(), m.get(z.getTrustedResourceUrl(s), {
                    cache: o
                }).success(function(l) {
                    var m, o;
                    if (l = cb(l), q.replace) {
                        if (l = Qc("<div>" + ad(l) + "</div>").contents(), m = l[0], 1 != l.length || 1 !== m.nodeType) throw vd("tplrt", q.name, s);
                        l = {
                            $attr: {}
                        }, Z(d, b, m);
                        var u = I(m, [], l);
                        t(q.scope) && N(u), a = u.concat(a), Q(c, l);
                    } else m = p, b.html(l);
                    for (a.unshift(r), j = M(a, m, c, e, b, q, g, h, i), f(d, function(a, c) {
                        a == m && (d[c] = b[0]);
                    }), k = E(b[0].childNodes, e); n.length; ) {
                        l = n.shift(), o = n.shift();
                        var v = n.shift(), w = n.shift(), u = b[0];
                        o !== p && (u = eb(m), Z(v, Qc(o), u)), o = j.transclude ? F(l, j.transclude) : w, 
                        j(k, l, u, d, o);
                    }
                    n = null;
                }).error(function(a, b, c, d) {
                    throw vd("tpload", d.url);
                }), function(a, b, c, d, e) {
                    n ? (n.push(b), n.push(c), n.push(d), n.push(e)) : j(k, b, c, d, e);
                };
            }
            function S(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function T(a, b, c, d) {
                if (b) throw vd("multidir", b.name, c.name, a, O(d));
            }
            function U(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: q(function(a, b) {
                        var d = b.parent(), e = d.data("$binding") || [];
                        e.push(c), D(d.data("$binding", e), "ng-binding"), a.$watch(c, function(a) {
                            b[0].nodeValue = a;
                        });
                    })
                });
            }
            function V(a, b) {
                if ("srcdoc" == b) return z.HTML;
                var c = Tc(a);
                return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0;
            }
            function Y(a, b, c, e) {
                var f = d(c, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === Tc(a)) throw vd("selmulti", O(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(b, c, g) {
                                    if (c = g.$$observers || (g.$$observers = {}), k.test(e)) throw vd("nodomevents");
                                    (f = d(g[e], !0, V(a, e))) && (g[e] = f(b), (c[e] || (c[e] = [])).$$inter = !0, 
                                    (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function Z(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d, f = e + h - 1;
                    for (var j = a.length; j > e; e++, f++) j > f ? a[e] = a[f] : delete a[e];
                    a.length -= h - 1;
                    break;
                }
                for (i && i.replaceChild(d, g), a = b.createDocumentFragment(), a.appendChild(g), 
                d[Qc.expando] = g[Qc.expando], g = 1, h = c.length; h > g; g++) i = c[g], Qc(i).remove(), 
                a.appendChild(i), delete c[g];
                c[0] = d, c.length = 1;
            }
            function $(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            var _ = function(a, b) {
                this.$$element = a, this.$attr = b || {};
            };
            _.prototype = {
                $normalize: Db,
                $addClass: function(a) {
                    a && 0 < a.length && A.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && A.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    this.$removeClass(Eb(b, a)), this.$addClass(Eb(a, b));
                },
                $set: function(a, b, d, e) {
                    var g = rb(this.$$element[0], a);
                    g && (this.$$element.prop(a, b), e = g), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = W(a, "-")), 
                    g = Tc(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = B(b, "src" === a)), 
                    !1 !== d && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), 
                    (d = this.$$observers) && f(d[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            i(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    return e.push(b), v.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    }), b;
                }
            };
            var ab = d.startSymbol(), bb = d.endSymbol(), cb = "{{" == ab || "}}" == bb ? p : function(a) {
                return a.replace(/\{\{/g, ab).replace(/}}/g, bb);
            }, db = /^ngAttr[A-Z]/;
            return C;
        } ];
    }
    function Db(a) {
        return bb(a.replace(wd, ""));
    }
    function Eb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function Fb() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            Z(b, "controller"), t(b) ? l(a, b) : a[b] = c;
        }, this.$get = [ "$injector", "$window", function(c, e) {
            return function(f, g) {
                var h, i, j;
                if (u(f) && (h = f.match(b), i = h[1], j = h[3], f = a.hasOwnProperty(i) ? a[i] : $(g.$scope, i, !0) || $(e, i, !0), 
                Y(f, i, !0)), h = c.instantiate(f, g), j) {
                    if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", i || f.name, j);
                    g.$scope[j] = h;
                }
                return h;
            };
        } ];
    }
    function Gb() {
        this.$get = [ "$window", function(a) {
            return Qc(a.document);
        } ];
    }
    function Hb() {
        this.$get = [ "$log", function(a) {
            return function() {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function Ib(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = Uc(ad(a.substr(0, d))), c = ad(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + (", " + c) : c);
        }), e) : e;
    }
    function Jb(a) {
        var b = t(a) ? a : c;
        return function(c) {
            return b || (b = Ib(a)), c ? b[Uc(c)] || null : b;
        };
    }
    function Kb(a, b, c) {
        return y(c) ? c(a, b) : (f(c, function(c) {
            a = c(a, b);
        }), a);
    }
    function Lb() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = {
            "Content-Type": "application/json;charset=utf-8"
        }, g = this.defaults = {
            transformResponse: [ function(c) {
                return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = M(c))), c;
            } ],
            transformRequest: [ function(a) {
                return t(a) && "[object File]" !== Yc.call(a) ? L(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: F(e),
                put: F(e),
                patch: F(e)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, i = this.interceptors = [], j = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
            function n(a) {
                function d(a) {
                    var b = l({}, a, {
                        data: Kb(a.data, a.headers, e.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? b : k.reject(b);
                }
                var e = {
                    transformRequest: g.transformRequest,
                    transformResponse: g.transformResponse
                }, h = function(a) {
                    function b(a) {
                        var b;
                        f(a, function(c, d) {
                            y(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    }
                    var c, d, e = g.headers, h = l({}, a.headers), e = l({}, e.common, e[Uc(a.method)]);
                    b(e), b(h);
                    a: for (c in e) {
                        a = Uc(c);
                        for (d in h) if (Uc(d) === a) continue a;
                        h[c] = e[c];
                    }
                    return h;
                }(a);
                l(e, a), e.headers = h, e.method = Vc(e.method), (a = wc(e.url) ? b.cookies()[e.xsrfCookieName || g.xsrfCookieName] : c) && (h[e.xsrfHeaderName || g.xsrfHeaderName] = a);
                var i = [ function(a) {
                    h = a.headers;
                    var b = Kb(a.data, Jb(h), a.transformRequest);
                    return r(a.data) && f(h, function(a, b) {
                        "content-type" === Uc(b) && delete h[b];
                    }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), 
                    o(a, b, h).then(d, d);
                }, c ], j = k.when(e);
                for (f(v, function(a) {
                    (a.request || a.requestError) && i.unshift(a.request, a.requestError), (a.response || a.responseError) && i.push(a.response, a.responseError);
                }); i.length; ) {
                    a = i.shift();
                    var m = i.shift(), j = j.then(a, m);
                }
                return j.success = function(a) {
                    return j.then(function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), j;
                }, j.error = function(a) {
                    return j.then(null, function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), j;
                }, j;
            }
            function o(b, c, d) {
                function f(a, b, c) {
                    j && (a >= 200 && 300 > a ? j.put(u, [ a, b, Ib(c) ]) : j.remove(u)), h(b, a, c), 
                    e.$$phase || e.$apply();
                }
                function h(a, c, d) {
                    c = Math.max(c, 0), (c >= 200 && 300 > c ? m.resolve : m.reject)({
                        data: a,
                        status: c,
                        headers: Jb(d),
                        config: b
                    });
                }
                function i() {
                    var a = D(n.pendingRequests, b);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }
                var j, l, m = k.defer(), o = m.promise, u = p(b.url, b.params);
                if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && !1 !== b.cache && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : q), 
                j) if (l = j.get(u), s(l)) {
                    if (l.then) return l.then(i, i), l;
                    x(l) ? h(l[1], l[0], F(l[2])) : h(l, 200, {});
                } else j.put(u, o);
                return r(l) && a(b.method, u, c, f, d, b.timeout, b.withCredentials, b.responseType), 
                o;
            }
            function p(a, b) {
                if (!b) return a;
                var c = [];
                return h(b, function(a, b) {
                    null === a || r(a) || (x(a) || (a = [ a ]), f(a, function(a) {
                        t(a) && (a = L(a)), c.push(T(b) + "=" + T(a));
                    }));
                }), a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&");
            }
            var q = d("$http"), v = [];
            return f(i, function(a) {
                v.unshift(u(a) ? m.get(a) : m.invoke(a));
            }), f(j, function(a, b) {
                var c = u(a) ? m.get(a) : m.invoke(a);
                v.splice(b, 0, {
                    response: function(a) {
                        return c(k.when(a));
                    },
                    responseError: function(a) {
                        return c(k.reject(a));
                    }
                });
            }), n.pendingRequests = [], function() {
                f(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(l(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function() {
                f(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(l(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }("post", "put"), n.defaults = g, n;
        } ];
    }
    function Mb(b) {
        return 8 >= Pc && "patch" === Uc(b) ? new ActiveXObject("Microsoft.XMLHTTP") : new a.XMLHttpRequest();
    }
    function Nb() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return Ob(a, Mb, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function Ob(a, b, c, d, e) {
        function g(a, b) {
            var c = e.createElement("script"), d = function() {
                c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b();
            };
            return c.type = "text/javascript", c.src = a, Pc && 8 >= Pc ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d();
            } : c.onload = c.onerror = function() {
                d();
            }, e.body.appendChild(c), d;
        }
        var h = -1;
        return function(e, i, j, k, l, m, n, p) {
            function q() {
                t = h, v && v(), w && w.abort();
            }
            function r(b, d, e, f) {
                x && c.cancel(x), v = w = null, d = 0 === d ? e ? 200 : 404 : d, b(1223 == d ? 204 : d, e, f), 
                a.$$completeOutstandingRequest(o);
            }
            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Uc(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a;
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
                    d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), d[u] = $c.noop;
                });
            } else {
                var w = b(e);
                w.open(e, i, !0), f(l, function(a, b) {
                    s(a) && w.setRequestHeader(b, a);
                }), w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var a = null, b = null;
                        t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), 
                        r(k, t || w.status, b, a);
                    }
                }, n && (w.withCredentials = !0), p && (w.responseType = p), w.send(j || null);
            }
            if (m > 0) var x = c(q, m); else m && m.then && m.then(q);
        };
    }
    function Pb() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(f, i, j) {
                for (var k, l, m = 0, n = [], o = f.length, p = !1, q = []; o > m; ) -1 != (k = f.indexOf(a, m)) && -1 != (l = f.indexOf(b, k + g)) ? (m != k && n.push(f.substring(m, k)), 
                n.push(m = c(p = f.substring(k + g, l))), m.exp = p, m = l + h, p = !0) : (m != o && n.push(f.substring(m)), 
                m = o);
                if ((o = n.length) || (n.push(""), o = 1), j && 1 < n.length) throw xd("noconcat", f);
                return !i || p ? (q.length = o, m = function(a) {
                    try {
                        for (var b, c = 0, g = o; g > c; c++) "function" == typeof (b = n[c]) && (b = b(a), 
                        b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = L(b))), 
                        q[c] = b;
                        return q.join("");
                    } catch (h) {
                        a = xd("interr", f, h.toString()), d(a);
                    }
                }, m.exp = f, m.parts = n, m) : void 0;
            }
            var g = a.length, h = b.length;
            return f.startSymbol = function() {
                return a;
            }, f.endSymbol = function() {
                return b;
            }, f;
        } ];
    }
    function Qb() {
        this.$get = [ "$rootScope", "$window", "$q", function(a, b, c) {
            function d(d, f, g, h) {
                var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise, m = 0, n = s(h) && !h;
                return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
                    k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), 
                    n || a.$apply();
                }, f), e[l.$$intervalId] = k, l;
            }
            var e = {};
            return d.cancel = function(a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), 
                delete e[a.$$intervalId], !0) : !1;
            }, d;
        } ];
    }
    function Rb() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other";
                }
            };
        };
    }
    function Sb(a) {
        a = a.split("/");
        for (var b = a.length; b--; ) a[b] = S(a[b]);
        return a.join("/");
    }
    function Tb(a, b, c) {
        a = vc(a, c), b.$$protocol = a.protocol, b.$$host = a.hostname, b.$$port = m(a.port) || zd[a.protocol] || null;
    }
    function Ub(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a), a = vc(a, c), b.$$path = decodeURIComponent(d && "/" === a.pathname.charAt(0) ? a.pathname.substring(1) : a.pathname), 
        b.$$search = Q(a.search), b.$$hash = decodeURIComponent(a.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Vb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Wb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function Xb(a) {
        return a.substr(0, Wb(a).lastIndexOf("/") + 1);
    }
    function Yb(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = Xb(a);
        Tb(a, this, a), this.$$parse = function(b) {
            var c = Vb(d, b);
            if (!u(c)) throw Ad("ipthprfx", b, d);
            Ub(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = R(this.$$search), b = this.$$hash ? "#" + S(this.$$hash) : "";
            this.$$url = Sb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1);
        }, this.$$rewrite = function(e) {
            var f;
            return (f = Vb(a, e)) !== c ? (e = f, (f = Vb(b, f)) !== c ? d + (Vb("/", f) || f) : a + e) : (f = Vb(d, e)) !== c ? d + f : d == e + "/" ? d : void 0;
        };
    }
    function Zb(a, b) {
        var c = Xb(a);
        Tb(a, this, a), this.$$parse = function(d) {
            var e = Vb(a, d) || Vb(c, d), e = "#" == e.charAt(0) ? Vb(b, e) : this.$$html5 ? e : "";
            if (!u(e)) throw Ad("ihshprfx", d, b);
            Ub(e, this, a), d = this.$$path;
            var f = /^\/?.*?:(\/.*)/;
            0 === e.indexOf(a) && (e = e.replace(a, "")), f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d), 
            this.$$path = d, this.$$compose();
        }, this.$$compose = function() {
            var c = R(this.$$search), d = this.$$hash ? "#" + S(this.$$hash) : "";
            this.$$url = Sb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        }, this.$$rewrite = function(b) {
            return Wb(a) == Wb(b) ? b : void 0;
        };
    }
    function $b(a, b) {
        this.$$html5 = !0, Zb.apply(this, arguments);
        var c = Xb(a);
        this.$$rewrite = function(d) {
            var e;
            return a == Wb(d) ? d : (e = Vb(c, d)) ? a + b + e : c === d + "/" ? c : void 0;
        };
    }
    function _b(a) {
        return function() {
            return this[a];
        };
    }
    function ac(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function bc() {
        var b = "", c = !1;
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.html5Mode = function(a) {
            return s(a) ? (c = a, this) : c;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a);
            }
            var i, j = e.baseHref(), k = e.url();
            c ? (j = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (j || "/"), f = f.history ? Yb : $b) : (j = Wb(k), 
            f = Zb), i = new f(j, "#" + b), i.$$parse(i.$$rewrite(k)), g.on("click", function(b) {
                if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
                    for (var c = Qc(b.target); "a" !== Uc(c[0].nodeName); ) if (c[0] === g[0] || !(c = c.parent())[0]) return;
                    var f = c.prop("href");
                    t(f) && "[object SVGAnimatedString]" === f.toString() && (f = vc(f.animVal).href);
                    var h = i.$$rewrite(f);
                    f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), 
                    d.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                }
            }), i.absUrl() != k && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
                i.absUrl() != a && (d.$evalAsync(function() {
                    var b = i.absUrl();
                    i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), 
                    e.url(b)) : h(b);
                }), d.$$phase || d.$digest());
            });
            var l = 0;
            return d.$watch(function() {
                var a = e.url(), b = i.$$replace;
                return l && a == i.absUrl() || (l++, d.$evalAsync(function() {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), 
                    h(a));
                })), i.$$replace = !1, l;
            }), i;
        } ];
    }
    function cc() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (g) {}
                return a ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function dc(a, b) {
        if ("constructor" === a) throw Cd("isecfld", b);
        return a;
    }
    function ec(a, b) {
        if (a) {
            if (a.constructor === a) throw Cd("isecfn", b);
            if (a.document && a.location && a.alert && a.setInterval) throw Cd("isecwindow", b);
            if (a.children && (a.nodeName || a.on && a.find)) throw Cd("isecdom", b);
        }
        return a;
    }
    function fc(a, b, d, e, f) {
        f = f || {}, b = b.split(".");
        for (var g, h = 0; 1 < b.length; h++) {
            g = dc(b.shift(), e);
            var i = a[g];
            i || (i = {}, a[g] = i), a = i, a.then && f.unwrapPromises && (Bd(e), "$$v" in a || function(a) {
                a.then(function(b) {
                    a.$$v = b;
                });
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v);
        }
        return g = dc(b.shift(), e), a[g] = d;
    }
    function gc(a, b, d, e, f, g, h) {
        return dc(a, g), dc(b, g), dc(d, g), dc(e, g), dc(f, g), h.unwrapPromises ? function(h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i : h;
            return null == k ? k : ((k = k[a]) && k.then && (Bd(g), "$$v" in k || (j = k, j.$$v = c, 
            j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), b ? null == k ? c : ((k = k[b]) && k.then && (Bd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), d ? null == k ? c : ((k = k[d]) && k.then && (Bd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), e ? null == k ? c : ((k = k[e]) && k.then && (Bd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), f ? null == k ? c : ((k = k[f]) && k.then && (Bd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), k) : k) : k) : k) : k);
        } : function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], 
            e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i);
        };
    }
    function hc(a, b) {
        return dc(a, b), function(b, d) {
            return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a];
        };
    }
    function ic(a, b, d) {
        return dc(a, d), dc(b, d), function(d, e) {
            return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b]);
        };
    }
    function jc(a, b, d) {
        if (Id.hasOwnProperty(a)) return Id[a];
        var e, g = a.split("."), h = g.length;
        if (b.unwrapPromises || 1 !== h) if (b.unwrapPromises || 2 !== h) if (b.csp) e = 6 > h ? gc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
            var f, i = 0;
            do f = gc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
            return f;
        }; else {
            var i = "var p;\n";
            f(g, function(a, c) {
                dc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var i = i + "return s;", j = new Function("s", "k", "pw", i);
            j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
                return j(a, b, Bd);
            } : j;
        } else e = ic(g[0], g[1], d); else e = hc(g[0], d);
        return "hasOwnProperty" !== a && (Id[a] = e), e;
    }
    function kc() {
        var a = {}, b = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises;
        }, this.logPromiseWarnings = function(a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings;
        }, this.$get = [ "$filter", "$sniffer", "$log", function(c, d, e) {
            return b.csp = d.csp, Bd = function(a) {
                b.logPromiseWarnings && !Dd.hasOwnProperty(a) && (Dd[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            }, function(d) {
                var e;
                switch (typeof d) {
                  case "string":
                    return a.hasOwnProperty(d) ? a[d] : (e = new Gd(b), e = new Hd(e, c, b).parse(d, !1), 
                    "hasOwnProperty" !== d && (a[d] = e), e);

                  case "function":
                    return d;

                  default:
                    return o;
                }
            };
        } ];
    }
    function lc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return mc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function mc(a, b) {
        function d(a) {
            return a;
        }
        function e(a) {
            return i(a);
        }
        var g = function() {
            var f, j, k = [];
            return j = {
                resolve: function(b) {
                    if (k) {
                        var d = k;
                        k = c, f = h(b), d.length && a(function() {
                            for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2]);
                        });
                    }
                },
                reject: function(a) {
                    j.resolve(i(a));
                },
                notify: function(b) {
                    if (k) {
                        var c = k;
                        k.length && a(function() {
                            for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b);
                        });
                    }
                },
                promise: {
                    then: function(a, c, h) {
                        var i = g(), j = function(c) {
                            try {
                                i.resolve((y(a) ? a : d)(c));
                            } catch (e) {
                                i.reject(e), b(e);
                            }
                        }, l = function(a) {
                            try {
                                i.resolve((y(c) ? c : e)(a));
                            } catch (d) {
                                i.reject(d), b(d);
                            }
                        }, m = function(a) {
                            try {
                                i.notify((y(h) ? h : d)(a));
                            } catch (c) {
                                b(c);
                            }
                        };
                        return k ? k.push([ j, l, m ]) : f.then(j, l, m), i.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = g();
                            return b ? c.resolve(a) : c.reject(a), c.promise;
                        }
                        function c(c, e) {
                            var f = null;
                            try {
                                f = (a || d)();
                            } catch (g) {
                                return b(g, !1);
                            }
                            return f && y(f.then) ? f.then(function() {
                                return b(c, e);
                            }, function(a) {
                                return b(a, !1);
                            }) : b(c, e);
                        }
                        return this.then(function(a) {
                            return c(a, !0);
                        }, function(a) {
                            return c(a, !1);
                        });
                    }
                }
            };
        }, h = function(b) {
            return b && y(b.then) ? b : {
                then: function(c) {
                    var d = g();
                    return a(function() {
                        d.resolve(c(b));
                    }), d.promise;
                }
            };
        }, i = function(c) {
            return {
                then: function(d, f) {
                    var h = g();
                    return a(function() {
                        try {
                            h.resolve((y(f) ? f : e)(c));
                        } catch (a) {
                            h.reject(a), b(a);
                        }
                    }), h.promise;
                }
            };
        };
        return {
            defer: g,
            reject: i,
            when: function(c, f, j, k) {
                var l, m = g(), n = function(a) {
                    try {
                        return (y(f) ? f : d)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, o = function(a) {
                    try {
                        return (y(j) ? j : e)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, p = function(a) {
                    try {
                        return (y(k) ? k : d)(a);
                    } catch (c) {
                        b(c);
                    }
                };
                return a(function() {
                    h(c).then(function(a) {
                        l || (l = !0, m.resolve(h(a).then(n, o, p)));
                    }, function(a) {
                        l || (l = !0, m.resolve(o(a)));
                    }, function(a) {
                        l || m.notify(p(a));
                    });
                }), m.promise;
            },
            all: function(a) {
                var b = g(), c = 0, d = x(a) ? [] : {};
                return f(a, function(a, e) {
                    c++, h(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                }), 0 === c && b.resolve(d), b.promise;
            }
        };
    }
    function nc() {
        var a = 10, b = d("$rootScope"), c = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, g, h, i) {
            function k() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], 
                this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {};
            }
            function l(a) {
                if (q.$$phase) throw b("inprog", q.$$phase);
                q.$$phase = a;
            }
            function m(a, b) {
                var c = h(a);
                return Y(c, b), c;
            }
            function n(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function p() {}
            k.prototype = {
                constructor: k,
                $new: function(a) {
                    return a ? (a = new k(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, 
                    a.$$postDigestQueue = this.$$postDigestQueue) : (a = function() {}, a.prototype = this, 
                    a = new a(), a.$id = j()), a["this"] = a, a.$$listeners = {}, a.$$listenerCount = {}, 
                    a.$parent = this, a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null, 
                    a.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a, 
                    a;
                },
                $watch: function(a, b, d) {
                    var e = m(a, "watch"), f = this.$$watchers, g = {
                        fn: b,
                        last: p,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    if (c = null, !y(b)) {
                        var h = m(b || o, "listener");
                        g.fn = function(a, b, c) {
                            h(c);
                        };
                    }
                    if ("string" == typeof a && e.constant) {
                        var i = g.fn;
                        g.fn = function(a, b, c) {
                            i.call(this, a, b, c), E(f, g);
                        };
                    }
                    return f || (f = this.$$watchers = []), f.unshift(g), function() {
                        E(f, g), c = null;
                    };
                },
                $watchCollection: function(a, b) {
                    var c, d, f = this, g = 0, i = h(a), j = [], k = {}, l = 0;
                    return this.$watch(function() {
                        d = i(f);
                        var a, b;
                        if (t(d)) if (e(d)) for (c !== j && (c = j, l = c.length = 0, g++), a = d.length, 
                        l !== a && (g++, c.length = l = a), b = 0; a > b; b++) c[b] !== d[b] && (g++, c[b] = d[b]); else {
                            c !== k && (c = k = {}, l = 0, g++), a = 0;
                            for (b in d) d.hasOwnProperty(b) && (a++, c.hasOwnProperty(b) ? c[b] !== d[b] && (g++, 
                            c[b] = d[b]) : (l++, c[b] = d[b], g++));
                            if (l > a) for (b in g++, c) c.hasOwnProperty(b) && !d.hasOwnProperty(b) && (l--, 
                            delete c[b]);
                        } else c !== d && (c = d, g++);
                        return g;
                    }, function() {
                        b(d, c, f);
                    });
                },
                $digest: function() {
                    var d, e, f, h, i, j, k, m, n, o, r = this.$$asyncQueue, s = this.$$postDigestQueue, t = a, u = [];
                    l("$digest"), c = null;
                    do {
                        for (j = !1, k = this; r.length; ) {
                            try {
                                o = r.shift(), o.scope.$eval(o.expression);
                            } catch (v) {
                                q.$$phase = null, g(v);
                            }
                            c = null;
                        }
                        a: do {
                            if (h = k.$$watchers) for (i = h.length; i--; ) try {
                                if (d = h[i]) if ((e = d.get(k)) === (f = d.last) || (d.eq ? H(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                    if (d === c) {
                                        j = !1;
                                        break a;
                                    }
                                } else j = !0, c = d, d.last = d.eq ? F(e) : e, d.fn(e, f === p ? e : f, k), 5 > t && (m = 4 - t, 
                                u[m] || (u[m] = []), n = y(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, 
                                n += "; newVal: " + L(e) + "; oldVal: " + L(f), u[m].push(n));
                            } catch (w) {
                                q.$$phase = null, g(w);
                            }
                            if (!(h = k.$$childHead || k !== this && k.$$nextSibling)) for (;k !== this && !(h = k.$$nextSibling); ) k = k.$parent;
                        } while (k = h);
                        if ((j || r.length) && !t--) throw q.$$phase = null, b("infdig", a, L(u));
                    } while (j || r.length);
                    for (q.$$phase = null; s.length; ) try {
                        s.shift()();
                    } catch (x) {
                        g(x);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== q && (f(this.$$listenerCount, J(null, n, this)), 
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null);
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b);
                },
                $evalAsync: function(a) {
                    q.$$phase || q.$$asyncQueue.length || i.defer(function() {
                        q.$$asyncQueue.length && q.$digest();
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a);
                },
                $apply: function(a) {
                    try {
                        return l("$apply"), this.$eval(a);
                    } catch (b) {
                        g(b);
                    } finally {
                        q.$$phase = null;
                        try {
                            q.$digest();
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        c[D(c, b)] = null, n(e, 1, a);
                    };
                },
                $emit: function(a) {
                    var b, c, d, e = [], f = this, h = !1, i = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            h = !0;
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, j = [ i ].concat(Wc.call(arguments, 1));
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j);
                        } catch (k) {
                            g(k);
                        } else b.splice(c, 1), c--, d--;
                        if (h) break;
                        f = f.$parent;
                    } while (f);
                    return i;
                },
                $broadcast: function(a) {
                    for (var b, c, d = this, e = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, h = [ f ].concat(Wc.call(arguments, 1)); d = e; ) {
                        for (f.currentScope = d, e = d.$$listeners[a] || [], b = 0, c = e.length; c > b; b++) if (e[b]) try {
                            e[b].apply(null, h);
                        } catch (i) {
                            g(i);
                        } else e.splice(b, 1), b--, c--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== this && d.$$nextSibling)) for (;d !== this && !(e = d.$$nextSibling); ) d = d.$parent;
                    }
                    return f;
                }
            };
            var q = new k();
            return q;
        } ];
    }
    function oc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return Pc && !(Pc >= 8) || (e = vc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e;
            };
        };
    }
    function pc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (-1 < a.indexOf("***")) throw Jd("iwcard", a);
            return a = a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), 
            RegExp("^" + a + "$");
        }
        if (z(a)) return RegExp("^" + a.source + "$");
        throw Jd("imatcher");
    }
    function qc(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(pc(a));
        }), b;
    }
    function rc() {
        this.SCE_CONTEXTS = Kd;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = qc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = qc(a)), b;
        }, this.$get = [ "$injector", function(d) {
            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            var f = function() {
                throw Jd("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), h = {};
            return h[Kd.HTML] = e(g), h[Kd.CSS] = e(g), h[Kd.URL] = e(g), h[Kd.JS] = e(g), h[Kd.RESOURCE_URL] = e(h[Kd.URL]), 
            {
                trustAs: function(a, b) {
                    var d = h.hasOwnProperty(a) ? h[a] : null;
                    if (!d) throw Jd("icontext", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw Jd("itype", a);
                    return new d(b);
                },
                getTrusted: function(d, e) {
                    if (null === e || e === c || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === Kd.RESOURCE_URL) {
                        var i, j, g = vc(e.toString()), k = !1;
                        for (i = 0, j = a.length; j > i; i++) if ("self" === a[i] ? wc(g) : a[i].exec(g.href)) {
                            k = !0;
                            break;
                        }
                        if (k) for (i = 0, j = b.length; j > i; i++) if ("self" === b[i] ? wc(g) : b[i].exec(g.href)) {
                            k = !1;
                            break;
                        }
                        if (k) return e;
                        throw Jd("insecurl", e.toString());
                    }
                    if (d === Kd.HTML) return f(e);
                    throw Jd("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function sc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sniffer", "$sceDelegate", function(b, c, d) {
            if (a && c.msie && 8 > c.msieDocumentMode) throw Jd("iequirks");
            var e = F(Kd);
            e.isEnabled = function() {
                return a;
            }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
                return b;
            }, e.valueOf = p), e.parseAs = function(a, c) {
                var d = b(c);
                return d.literal && d.constant ? d : function(b, c) {
                    return e.getTrusted(a, d(b, c));
                };
            };
            var g = e.parseAs, h = e.getTrusted, i = e.trustAs;
            return f(Kd, function(a, b) {
                var c = Uc(b);
                e[bb("parse_as_" + c)] = function(b) {
                    return g(a, b);
                }, e[bb("get_trusted_" + c)] = function(b) {
                    return h(a, b);
                }, e[bb("trust_as_" + c)] = function(b) {
                    return i(a, b);
                };
            }), e;
        } ];
    }
    function tc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d = {}, e = m((/android (\d+)/.exec(Uc((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h = g.documentMode, i = /^(Moz|webkit|O|ms)(?=[A-Z])/, j = g.body && g.body.style, k = !1, l = !1;
            if (j) {
                for (var n in j) if (k = i.exec(n)) {
                    c = k[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break;
                }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), 
                l = !!("animation" in j || c + "Animation" in j), !e || k && l || (k = u(g.body.style.webkitTransition), 
                l = u(g.body.style.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > e || f),
                hashchange: "onhashchange" in a && (!h || h > 7),
                hasEvent: function(a) {
                    if ("input" == a && 9 == Pc) return !1;
                    if (r(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b;
                    }
                    return d[a];
                },
                csp: I(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: e,
                msie: Pc,
                msieDocumentMode: h
            };
        } ];
    }
    function uc() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
            function e(e, g, h) {
                var i = c.defer(), j = i.promise, k = s(h) && !h;
                return g = b.defer(function() {
                    try {
                        i.resolve(e());
                    } catch (b) {
                        i.reject(b), d(b);
                    } finally {
                        delete f[j.$$timeoutId];
                    }
                    k || a.$apply();
                }, g), j.$$timeoutId = g, f[g] = i, j;
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            }, e;
        } ];
    }
    function vc(a) {
        var b = a;
        return Pc && (Ld.setAttribute("href", b), b = Ld.href), Ld.setAttribute("href", b), 
        {
            href: Ld.href,
            protocol: Ld.protocol ? Ld.protocol.replace(/:$/, "") : "",
            host: Ld.host,
            search: Ld.search ? Ld.search.replace(/^\?/, "") : "",
            hash: Ld.hash ? Ld.hash.replace(/^#/, "") : "",
            hostname: Ld.hostname,
            port: Ld.port,
            pathname: "/" === Ld.pathname.charAt(0) ? Ld.pathname : "/" + Ld.pathname
        };
    }
    function wc(a) {
        return a = u(a) ? vc(a) : a, a.protocol === Md.protocol && a.host === Md.host;
    }
    function xc() {
        this.$get = q(a);
    }
    function yc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a);
                }), g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ], b("currency", Ac), b("date", Gc), b("filter", zc), b("json", Hc), b("limitTo", Ic), 
        b("lowercase", Rd), b("number", Bc), b("orderBy", Jc), b("uppercase", Sd);
    }
    function zc() {
        return function(a, b, c) {
            if (!x(a)) return a;
            var d = typeof c, e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++) if (!e[b](a)) return !1;
                return !0;
            }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return $c.equals(a, b);
            } : function(a, b) {
                return b = ("" + b).toLowerCase(), -1 < ("" + a).toLowerCase().indexOf(b);
            });
            var f = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);

                      default:
                        for (var d in a) if ("$" !== d.charAt(0) && f(a[d], b)) return !0;
                    }
                    return !1;

                  case "array":
                    for (d = 0; d < a.length; d++) if (f(a[d], b)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof b) {
              case "boolean":
              case "number":
              case "string":
                b = {
                    $: b
                };

              case "object":
                for (var g in b) (function(a) {
                    "undefined" != typeof b[a] && e.push(function(c) {
                        return f("$" == a ? c : $(c, a), b[a]);
                    });
                })(g);
                break;

              case "function":
                e.push(b);
                break;

              default:
                return a;
            }
            for (d = [], g = 0; g < a.length; g++) {
                var h = a[g];
                e.check(h) && d.push(h);
            }
            return d;
        };
    }
    function Ac(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return r(c) && (c = b.CURRENCY_SYM), Cc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
        };
    }
    function Bc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return Cc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Cc(a, b, c, d, e) {
        if (isNaN(a) || !isFinite(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0);
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
            g = (g.split(Nd)[1] || "").length, r(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac)), 
            g = Math.pow(10, e), a = Math.round(a * g) / g, a = ("" + a).split(Nd), g = a[0], 
            a = a[1] || "";
            var k = 0, l = b.lgSize, m = b.gSize;
            if (g.length >= l + m) for (k = g.length - l, j = 0; k > j; j++) 0 === (k - j) % m && 0 !== j && (h += c), 
            h += g.charAt(j);
            for (j = k; j < g.length; j++) 0 === (g.length - j) % l && 0 !== j && (h += c), 
            h += g.charAt(j);
            for (;a.length < e; ) a += "0";
            e && "0" !== e && (h += d + a.substr(0, e));
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), 
        i.join("");
    }
    function Dc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function Ec(a, b, c, d) {
        return c = c || 0, function(e) {
            return e = e["get" + a](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), 
            Dc(e, b, d);
        };
    }
    function Fc(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Vc(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function Gc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var d = 0, e = 0, f = b[8] ? a.setUTCFullYear : a.setFullYear, g = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (d = m(b[9] + b[10]), e = m(b[9] + b[11])), f.call(a, m(b[1]), m(b[2]) - 1, m(b[3])), 
                d = m(b[4] || 0) - d, e = m(b[5] || 0) - e, f = m(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                g.call(a, d, e, f, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d) {
            var e, g, h = "", i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = Qd.test(c) ? m(c) : b(c)), 
            v(c) && (c = new Date(c)), !w(c)) return c;
            for (;d; ) (g = Pd.exec(d)) ? (i = i.concat(Wc.call(g, 1)), d = i.pop()) : (i.push(d), 
            d = null);
            return f(i, function(b) {
                e = Od[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), h;
        };
    }
    function Hc() {
        return function(a) {
            return L(a, !0);
        };
    }
    function Ic() {
        return function(a, b) {
            if (!x(a) && !u(a)) return a;
            if (b = m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, 
            d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e;
        };
    }
    function Jc(a) {
        return function(b, c, d) {
            function e(a, b) {
                return N(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            if (!x(b) || !c) return b;
            c = x(c) ? c : [ c ], c = C(c, function(b) {
                var c = !1, d = b || p;
                return u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), 
                b = b.substring(1)), d = a(b)), e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    return f == g ? ("string" == f && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : e > c ? -1 : 1) : c = g > f ? -1 : 1, 
                    c;
                }, c);
            });
            for (var f = [], g = 0; g < b.length; g++) f.push(b[g]);
            return f.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d));
        };
    }
    function Kc(a) {
        return y(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a);
    }
    function Lc(a, b) {
        function c(b, c) {
            c = c ? "-" + W(c, "-") : "", a.removeClass((b ? de : ce) + c).addClass((b ? ce : de) + c);
        }
        var d = this, e = a.parent().controller("form") || Vd, g = 0, h = d.$error = {}, i = [];
        d.$name = b.name || b.ngForm, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, 
        e.$addControl(d), a.addClass(ee), c(!0), d.$addControl = function(a) {
            Z(a.$name, "input"), i.push(a), a.$name && (d[a.$name] = a);
        }, d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name], f(h, function(b, c) {
                d.$setValidity(c, !0, a);
            }), E(i, a);
        }, d.$setValidity = function(a, b, f) {
            var i = h[a];
            if (b) i && (E(i, f), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), 
            h[a] = !1, c(!0, a), e.$setValidity(a, !0, d))); else {
                if (g || c(b), i) {
                    if (-1 != D(i, f)) return;
                } else h[a] = i = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                i.push(f), d.$valid = !1, d.$invalid = !0;
            }
        }, d.$setDirty = function() {
            a.removeClass(ee).addClass(fe), d.$dirty = !0, d.$pristine = !1, e.$setDirty();
        }, d.$setPristine = function() {
            a.removeClass(fe).addClass(ee), d.$dirty = !1, d.$pristine = !0, f(i, function(a) {
                a.$setPristine();
            });
        };
    }
    function Mc(a, b, d, e) {
        return a.$setValidity(b, d), d ? e : c;
    }
    function Nc(a, b, c, e, f, g) {
        if (!f.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0;
            }), b.on("compositionend", function() {
                h = !1;
            });
        }
        var i = function() {
            if (!h) {
                var d = b.val();
                N(c.ngTrim || "T") && (d = ad(d)), e.$viewValue !== d && (a.$$phase ? e.$setViewValue(d) : a.$apply(function() {
                    e.$setViewValue(d);
                }));
            }
        };
        if (f.hasEvent("input")) b.on("input", i); else {
            var j, k = function() {
                j || (j = g.defer(function() {
                    i(), j = null;
                }));
            };
            b.on("keydown", function(a) {
                a = a.keyCode, 91 === a || a > 15 && 19 > a || a >= 37 && 40 >= a || k();
            }), f.hasEvent("paste") && b.on("paste cut", k);
        }
        b.on("change", i), e.$render = function() {
            b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue);
        };
        var l = c.ngPattern;
        if (l && ((f = l.match(/^\/(.*)\/([gim]*)$/)) ? (l = RegExp(f[1], f[2]), f = function(a) {
            return Mc(e, "pattern", e.$isEmpty(a) || l.test(a), a);
        }) : f = function(c) {
            var f = a.$eval(l);
            if (!f || !f.test) throw d("ngPattern")("noregexp", l, f, O(b));
            return Mc(e, "pattern", e.$isEmpty(c) || f.test(c), c);
        }, e.$formatters.push(f), e.$parsers.push(f)), c.ngMinlength) {
            var n = m(c.ngMinlength);
            f = function(a) {
                return Mc(e, "minlength", e.$isEmpty(a) || a.length >= n, a);
            }, e.$parsers.push(f), e.$formatters.push(f);
        }
        if (c.ngMaxlength) {
            var o = m(c.ngMaxlength);
            f = function(a) {
                return Mc(e, "maxlength", e.$isEmpty(a) || a.length <= o, a);
            }, e.$parsers.push(f), e.$formatters.push(f);
        }
    }
    function Oc(a, b) {
        return a = "ngClass" + a, function() {
            return {
                restrict: "AC",
                link: function(c, d, e) {
                    function g(a) {
                        if (!0 === b || c.$index % 2 === b) {
                            var d = h(a || "");
                            i ? H(a, i) || e.$updateClass(d, h(i)) : e.$addClass(d);
                        }
                        i = F(a);
                    }
                    function h(a) {
                        if (x(a)) return a.join(" ");
                        if (t(a)) {
                            var b = [];
                            return f(a, function(a, c) {
                                a && b.push(c);
                            }), b.join(" ");
                        }
                        return a;
                    }
                    var i;
                    c.$watch(e[a], g, !0), e.$observe("class", function() {
                        g(c.$eval(e[a]));
                    }), "ngClass" !== a && c.$watch("$index", function(d, f) {
                        var g = 1 & d;
                        if (g !== f & 1) {
                            var i = h(c.$eval(e[a]));
                            g === b ? e.$addClass(i) : e.$removeClass(i);
                        }
                    });
                }
            };
        };
    }
    var Pc, Qc, Rc, Sc, Tc, Uc = function(a) {
        return u(a) ? a.toLowerCase() : a;
    }, Vc = function(a) {
        return u(a) ? a.toUpperCase() : a;
    }, Wc = [].slice, Xc = [].push, Yc = Object.prototype.toString, Zc = d("ng"), $c = a.angular || (a.angular = {}), _c = [ "0", "0", "0" ];
    Pc = m((/msie (\d+)/.exec(Uc(navigator.userAgent)) || [])[1]), isNaN(Pc) && (Pc = m((/trident\/.*; rv:(\d+)/.exec(Uc(navigator.userAgent)) || [])[1])), 
    o.$inject = [], p.$inject = [];
    var ad = function() {
        return String.prototype.trim ? function(a) {
            return u(a) ? a.trim() : a;
        } : function(a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a;
        };
    }();
    Tc = 9 > Pc ? function(a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? Vc(a.scopeName + ":" + a.nodeName) : a.nodeName;
    } : function(a) {
        return a.nodeName ? a.nodeName : a[0].nodeName;
    };
    var bd = /[A-Z]/g, cd = {
        full: "1.2.10",
        major: 1,
        minor: 2,
        dot: 10,
        codeName: "augmented-serendipity"
    }, dd = db.cache = {}, ed = db.expando = "ng-" + new Date().getTime(), fd = 1, gd = a.document.addEventListener ? function(a, b, c) {
        a.addEventListener(b, c, !1);
    } : function(a, b, c) {
        a.attachEvent("on" + b, c);
    }, hd = a.document.removeEventListener ? function(a, b, c) {
        a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        a.detachEvent("on" + b, c);
    }, id = /([\:\-\_]+(.))/g, jd = /^moz([A-Z])/, kd = d("jqLite"), ld = db.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), db(a).on("load", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return Qc(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Xc,
        sort: [].sort,
        splice: [].splice
    }, md = {};
    f("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        md[Uc(a)] = a;
    });
    var nd = {};
    f("input select option textarea button form details".split(" "), function(a) {
        nd[Vc(a)] = !0;
    }), f({
        data: jb,
        inheritedData: pb,
        scope: function(a) {
            return Qc(a).data("$scope") || pb(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return Qc(a).data("$isolateScope") || Qc(a).data("$isolateScopeNoTemplate");
        },
        controller: ob,
        injector: function(a) {
            return pb(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: kb,
        css: function(a, b, d) {
            if (b = bb(b), !s(d)) {
                var e;
                return 8 >= Pc && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), 
                e = e || a.style[b], 8 >= Pc && (e = "" === e ? c : e), e;
            }
            a.style[b] = d;
        },
        attr: function(a, b, d) {
            var e = Uc(b);
            if (md[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
            } else if (s(d)) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), 
            null === a ? c : a;
        },
        prop: function(a, b, c) {
            return s(c) ? void (a[b] = c) : a[b];
        },
        text: function() {
            function a(a, c) {
                var d = b[a.nodeType];
                return r(c) ? d ? a[d] : "" : void (a[d] = c);
            }
            var b = [];
            return 9 > Pc ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", 
            a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (r(b)) {
                if ("SELECT" === Tc(a) && a.multiple) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) fb(d[c]);
            a.innerHTML = b;
        },
        empty: qb
    }, function(a, b) {
        db.prototype[b] = function(b, d) {
            var e, f;
            if (a !== qb && (2 == a.length && a !== kb && a !== ob ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; e < this.length; e++) if (a === jb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                e = a.$dv, f = e === c ? Math.min(this.length, 1) : this.length;
                for (var g = 0; f > g; g++) {
                    var h = a(this[g], b, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; e < this.length; e++) a(this[e], b, d);
            return this;
        };
    }), f({
        removeData: hb,
        dealoc: fb,
        on: function Qe(a, c, d, e) {
            if (s(e)) throw kd("onargs");
            var g = ib(a, "events"), h = ib(a, "handle");
            g || ib(a, "events", g = {}), h || ib(a, "handle", h = sb(a, g)), f(c.split(" "), function(c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        g[c] = [], Qe(a, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[c], function(a) {
                            var b = a.relatedTarget;
                            b && (b === this || f(this, b)) || h(a, c);
                        });
                    } else gd(a, c, h), g[c] = [];
                    e = g[c];
                }
                e.push(d);
            });
        },
        off: gb,
        one: function(a, b, c) {
            a = Qc(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            fb(a), f(new db(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.childNodes || [];
        },
        append: function(a, b) {
            f(new db(b), function(b) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(b);
            });
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new db(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = Qc(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a);
        },
        remove: function(a) {
            fb(a);
            var b = a.parentNode;
            b && b.removeChild(a);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            f(new db(b), function(a) {
                d.insertBefore(a, c.nextSibling), c = a;
            });
        },
        addClass: mb,
        removeClass: lb,
        toggleClass: function(a, b, c) {
            r(c) && (c = !kb(a, b)), (c ? mb : lb)(a, b);
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; ) a = a.nextSibling;
            return a;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: eb,
        triggerHandler: function(a, b, c) {
            b = (ib(a, "events") || {})[b], c = c || [];
            var d = [ {
                preventDefault: o,
                stopPropagation: o
            } ];
            f(b, function(b) {
                b.apply(a, d.concat(c));
            });
        }
    }, function(a, b) {
        db.prototype[b] = function(b, c, d) {
            for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = Qc(e))) : nb(e, a(this[f], b, c, d));
            return s(e) ? e : this;
        }, db.prototype.bind = db.prototype.on, db.prototype.unbind = db.prototype.off;
    }), ub.prototype = {
        put: function(a, b) {
            this[tb(a)] = b;
        },
        get: function(a) {
            return this[tb(a)];
        },
        remove: function(a) {
            var b = this[a = tb(a)];
            return delete this[a], b;
        }
    };
    var od = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, pd = /,/, qd = /^\s*(_?)(\S+?)\1\s*$/, rd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, sd = d("$injector"), td = d("$animate"), ud = [ "$provide", function(a) {
        this.$$selectors = {}, this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw td("notcsel", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c);
        }, this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$timeout", function(a) {
            return {
                enter: function(b, c, d, e) {
                    d ? d.after(b) : (c && c[0] || (c = d.parent()), c.append(b)), e && a(e, 0, !1);
                },
                leave: function(b, c) {
                    b.remove(), c && a(c, 0, !1);
                },
                move: function(a, b, c, d) {
                    this.enter(a, b, c, d);
                },
                addClass: function(b, c, d) {
                    c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function(a) {
                        mb(a, c);
                    }), d && a(d, 0, !1);
                },
                removeClass: function(b, c, d) {
                    c = u(c) ? c : x(c) ? c.join(" ") : "", f(b, function(a) {
                        lb(a, c);
                    }), d && a(d, 0, !1);
                },
                enabled: o
            };
        } ];
    } ], vd = d("$compile");
    Cb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var wd = /^(x[\:\-_]|data[\:\-_])/i, xd = d("$interpolate"), yd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, zd = {
        http: 80,
        https: 443,
        ftp: 21
    }, Ad = d("$location");
    $b.prototype = Zb.prototype = Yb.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: _b("$$absUrl"),
        url: function(a, b) {
            if (r(a)) return this.$$url;
            var c = yd.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), 
            this.hash(c[5] || "", b), this;
        },
        protocol: _b("$$protocol"),
        host: _b("$$host"),
        port: _b("$$port"),
        path: ac("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (u(a)) this.$$search = Q(a); else {
                    if (!t(a)) throw Ad("isrcharg");
                    this.$$search = a;
                }
                break;

              default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: ac("$$hash", p),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    var Bd, Cd = d("$parse"), Dd = {}, Ed = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: o,
        "+": function(a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0);
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b);
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b);
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b);
        },
        "^": function(a, b, c, d) {
            return c(a, b) ^ d(a, b);
        },
        "=": o,
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b);
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b);
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b);
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b);
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b);
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b);
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b);
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b);
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b);
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b);
        },
        "&": function(a, b, c, d) {
            return c(a, b) & d(a, b);
        },
        "|": function(a, b, c, d) {
            return d(a, b)(a, b, c(a, b));
        },
        "!": function(a, b, c) {
            return !c(a, b);
        }
    }, Fd = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Gd = function(a) {
        this.options = a;
    };
    Gd.prototype = {
        constructor: Gd,
        lex: function(a) {
            this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
            var b;
            for (a = []; this.index < this.text.length; ) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(), 
                this.was("{,") && "{" === a[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf(".")); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && a.unshift(this.ch), this.is("}]") && a.shift(), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue;
                    }
                    var d = this.ch + this.peek(), e = d + this.peek(2), f = Ed[this.ch], g = Ed[d], h = Ed[e];
                    h ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: h
                    }), this.index += 3) : g ? (this.tokens.push({
                        index: this.index,
                        text: d,
                        fn: g
                    }), this.index += 2) : f ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: f,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch);
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh);
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            throw c = c || this.index, b = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c, 
            Cd("lexerr", a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Uc(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            a *= 1, this.tokens.push({
                index: b,
                text: a,
                json: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), 
            "." === d || this.isIdent(d) || this.isNumber(d)); ) "." === d && (a = this.index), 
            f += d, this.index++;
            if (a) for (b = this.index; b < this.text.length; ) {
                if (d = this.text.charAt(b), "(" === d) {
                    c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                    break;
                }
                if (!this.isWhitespace(d)) break;
                b++;
            }
            if (g = {
                index: g,
                text: f
            }, Ed.hasOwnProperty(f)) g.fn = Ed[f], g.json = Ed[f]; else {
                var h = jc(f, this.options, this.text);
                g.fn = l(function(a, b) {
                    return h(a, b);
                }, {
                    assign: function(a, b) {
                        return fc(a, f, b, e.text, e.options);
                    }
                });
            }
            this.tokens.push(g), c && (this.tokens.push({
                index: a,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: a + 1,
                text: c,
                json: !1
            }));
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index), d = d + f;
                if (e) "u" === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, c += String.fromCharCode(parseInt(f, 16))) : c = (e = Fd[f]) ? c + e : c + f, 
                e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        json: !0,
                        fn: function() {
                            return c;
                        }
                    });
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var Hd = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c;
    };
    Hd.ZERO = function() {
        return 0;
    }, Hd.prototype = {
        constructor: Hd,
        parse: function(a, b) {
            this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, 
            this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                this.throwError("is not valid json", {
                    text: a,
                    index: 0
                });
            });
            var c = b ? this.primary() : this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            c.literal = !!c.literal, c.constant = !!c.constant, c;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var b = this.expect();
                (a = b.fn) || this.throwError("not a primary expression", b), b.json && (a.constant = !0, 
                a.literal = !0);
            }
            for (var c; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = this.functionCall(a, c), 
            c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, b) {
            throw Cd("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Cd("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            if (0 < this.tokens.length) {
                var e = this.tokens[0], f = e.text;
                if (f === a || f === b || f === c || f === d || !(a || b || c || d)) return e;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            return (a = this.peek(a, b, c, d)) ? (this.json && !a.json && this.throwError("is not valid json", a), 
            this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b);
            }, {
                constant: b.constant
            });
        },
        ternaryFn: function(a, b, c) {
            return l(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e);
            }, {
                constant: a.constant && b.constant && c.constant
            });
        },
        binaryFn: function(a, b, c) {
            return l(function(d, e) {
                return b(d, e, a, c);
            }, {
                constant: a.constant && c.constant
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c));
                }
                return d;
            };
        },
        filterChain: function() {
            for (var a, b = this.expression(); ;) {
                if (!(a = this.expect("|"))) return b;
                b = this.binaryFn(b, a.fn, this.filter());
            }
        },
        filter: function() {
            for (var a = this.expect(), b = this.$filter(a.text), c = []; ;) {
                if (!(a = this.expect(":"))) {
                    var d = function(a, d, e) {
                        e = [ e ];
                        for (var f = 0; f < c.length; f++) e.push(c[f](a, d));
                        return b.apply(a, e);
                    };
                    return function() {
                        return d;
                    };
                }
                c.push(this.expression());
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), 
            a = this.ternary(), function(b, d) {
                return c.assign(b, a(b, d), d);
            }) : c;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c;
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND(); ;) {
                if (!(a = this.expect("||"))) return b;
                b = this.binaryFn(b, a.fn, this.logicalAND());
            }
        },
        logicalAND: function() {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), 
            b;
        },
        equality: function() {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), 
            b;
        },
        relational: function() {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), 
            b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = this.binaryFn(b, a.fn, this.unary());
            return b;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Hd.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var b = this, c = this.expect().text, d = jc(c, this.options, this.text);
            return l(function(b, c, e) {
                return d(e || a(b, c));
            }, {
                assign: function(d, e, f) {
                    return fc(a(d, f), c, e, b.text, b.options);
                }
            });
        },
        objectIndex: function(a) {
            var b = this, d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h = a(e, f), i = d(e, f);
                return h ? ((h = ec(h[i], b.text)) && h.then && b.options.unwrapPromises && (g = h, 
                "$$v" in h || (g.$$v = c, g.then(function(a) {
                    g.$$v = a;
                })), h = h.$$v), h) : c;
            }, {
                assign: function(c, e, f) {
                    var g = d(c, f);
                    return ec(a(c, f), b.text)[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text) do c.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var d = this;
            return function(e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                return i = a(e, f, h) || o, ec(h, d.text), ec(i, d.text), g = i.apply ? i.apply(h, g) : i(g[0], g[1], g[2], g[3], g[4]), 
                ec(g, d.text);
            };
        },
        arrayDeclaration: function() {
            var a = [], b = !0;
            if ("]" !== this.peekToken().text) do {
                var c = this.expression();
                a.push(c), c.constant || (b = !1);
            } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d;
            }, {
                literal: !0,
                constant: b
            });
        },
        object: function() {
            var a = [], b = !0;
            if ("}" !== this.peekToken().text) do {
                var c = this.expect(), c = c.string || c.text;
                this.consume(":");
                var d = this.expression();
                a.push({
                    key: c,
                    value: d
                }), d.constant || (b = !1);
            } while (this.expect(","));
            return this.consume("}"), l(function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c);
                }
                return d;
            }, {
                literal: !0,
                constant: b
            });
        }
    };
    var Id = {}, Jd = d("$sce"), Kd = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Ld = b.createElement("a"), Md = vc(a.location.href, !0);
    yc.$inject = [ "$provide" ], Ac.$inject = [ "$locale" ], Bc.$inject = [ "$locale" ];
    var Nd = ".", Od = {
        yyyy: Ec("FullYear", 4),
        yy: Ec("FullYear", 2, 0, !0),
        y: Ec("FullYear", 1),
        MMMM: Fc("Month"),
        MMM: Fc("Month", !0),
        MM: Ec("Month", 2, 1),
        M: Ec("Month", 1, 1),
        dd: Ec("Date", 2),
        d: Ec("Date", 1),
        HH: Ec("Hours", 2),
        H: Ec("Hours", 1),
        hh: Ec("Hours", 2, -12),
        h: Ec("Hours", 1, -12),
        mm: Ec("Minutes", 2),
        m: Ec("Minutes", 1),
        ss: Ec("Seconds", 2),
        s: Ec("Seconds", 1),
        sss: Ec("Milliseconds", 3),
        EEEE: Fc("Day"),
        EEE: Fc("Day", !0),
        a: function(a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function(a) {
            return a = -1 * a.getTimezoneOffset(), a = (a >= 0 ? "+" : "") + (Dc(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + Dc(Math.abs(a % 60), 2));
        }
    }, Pd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Qd = /^\-?\d+$/;
    Gc.$inject = [ "$locale" ];
    var Rd = q(Uc), Sd = q(Vc);
    Jc.$inject = [ "$parse" ];
    var Td = q({
        restrict: "E",
        compile: function(a, c) {
            return 8 >= Pc && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), 
            c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === Yc.call(b.prop("href")) ? "xlink:href" : "href";
                b.on("click", function(a) {
                    b.attr(c) || a.preventDefault();
                });
            };
        }
    }), Ud = {};
    f(md, function(a, b) {
        if ("multiple" != a) {
            var c = Db("ng-" + b);
            Ud[c] = function() {
                return {
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a);
                        });
                    }
                };
            };
        }
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = Db("ng-" + a);
        Ud[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    e.$observe(b, function(b) {
                        b && (e.$set(a, b), Pc && d.prop(a, e[a]));
                    });
                }
            };
        };
    });
    var Vd = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    Lc.$inject = [ "$element", "$attrs", "$scope" ];
    var Wd = function(a) {
        return [ "$timeout", function(b) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Lc,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                };
                                gd(d[0], "submit", g), d.on("$destroy", function() {
                                    b(function() {
                                        hd(d[0], "submit", g);
                                    }, 0, !1);
                                });
                            }
                            var h = d.parent().controller("form"), i = e.name || e.ngForm;
                            i && fc(a, i, f, i), h && d.on("$destroy", function() {
                                h.$removeControl(f), i && fc(a, i, c, i), l(f, Vd);
                            });
                        }
                    };
                }
            };
        } ];
    }, Xd = Wd(), Yd = Wd(!0), Zd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, $d = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, _d = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, ae = {
        text: Nc,
        number: function(a, b, d, e, f, g) {
            Nc(a, b, d, e, f, g), e.$parsers.push(function(a) {
                var b = e.$isEmpty(a);
                return b || _d.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), 
                c);
            }), e.$formatters.push(function(a) {
                return e.$isEmpty(a) ? "" : "" + a;
            }), d.min && (a = function(a) {
                var b = parseFloat(d.min);
                return Mc(e, "min", e.$isEmpty(a) || a >= b, a);
            }, e.$parsers.push(a), e.$formatters.push(a)), d.max && (a = function(a) {
                var b = parseFloat(d.max);
                return Mc(e, "max", e.$isEmpty(a) || b >= a, a);
            }, e.$parsers.push(a), e.$formatters.push(a)), e.$formatters.push(function(a) {
                return Mc(e, "number", e.$isEmpty(a) || v(a), a);
            });
        },
        url: function(a, b, c, d, e, f) {
            Nc(a, b, c, d, e, f), a = function(a) {
                return Mc(d, "url", d.$isEmpty(a) || Zd.test(a), a);
            }, d.$formatters.push(a), d.$parsers.push(a);
        },
        email: function(a, b, c, d, e, f) {
            Nc(a, b, c, d, e, f), a = function(a) {
                return Mc(d, "email", d.$isEmpty(a) || $d.test(a), a);
            }, d.$formatters.push(a), d.$parsers.push(a);
        },
        radio: function(a, b, c, d) {
            r(c.name) && b.attr("name", j()), b.on("click", function() {
                b[0].checked && a.$apply(function() {
                    d.$setViewValue(c.value);
                });
            }), d.$render = function() {
                b[0].checked = c.value == d.$viewValue;
            }, c.$observe("value", d.$render);
        },
        checkbox: function(a, b, c, d) {
            var e = c.ngTrueValue, f = c.ngFalseValue;
            u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
                a.$apply(function() {
                    d.$setViewValue(b[0].checked);
                });
            }), d.$render = function() {
                b[0].checked = d.$viewValue;
            }, d.$isEmpty = function(a) {
                return a !== e;
            }, d.$formatters.push(function(a) {
                return a === e;
            }), d.$parsers.push(function(a) {
                return a ? e : f;
            });
        },
        hidden: o,
        button: o,
        submit: o,
        reset: o
    }, be = [ "$browser", "$sniffer", function(a, b) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(c, d, e, f) {
                f && (ae[Uc(e.type)] || ae.text)(c, d, e, f, b, a);
            }
        };
    } ], ce = "ng-valid", de = "ng-invalid", ee = "ng-pristine", fe = "ng-dirty", ge = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, b, c, e, g) {
        function h(a, b) {
            b = b ? "-" + W(b, "-") : "", e.removeClass((a ? de : ce) + b).addClass((a ? ce : de) + b);
        }
        this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, 
        this.$invalid = !1, this.$name = c.name;
        var i = g(c.ngModel), j = i.assign;
        if (!j) throw d("ngModel")("nonassign", c.ngModel, O(e));
        this.$render = o, this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a;
        };
        var k = e.inheritedData("$formController") || Vd, l = 0, m = this.$error = {};
        e.addClass(ee), h(!0), this.$setValidity = function(a, b) {
            m[a] !== !b && (b ? (m[a] && l--, l || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), 
            this.$invalid = !0, this.$valid = !1, l++), m[a] = !b, h(b, a), k.$setValidity(a, b, this));
        }, this.$setPristine = function() {
            this.$dirty = !1, this.$pristine = !0, e.removeClass(fe).addClass(ee);
        }, this.$setViewValue = function(c) {
            this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(ee).addClass(fe), 
            k.$setDirty()), f(this.$parsers, function(a) {
                c = a(c);
            }), this.$modelValue !== c && (this.$modelValue = c, j(a, c), f(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            }));
        };
        var n = this;
        a.$watch(function() {
            var b = i(a);
            if (n.$modelValue !== b) {
                var c = n.$formatters, d = c.length;
                for (n.$modelValue = b; d--; ) b = c[d](b);
                n.$viewValue !== b && (n.$viewValue = b, n.$render());
            }
            return b;
        });
    } ], he = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: ge,
            link: function(a, b, c, d) {
                var e = d[0], f = d[1] || Vd;
                f.$addControl(e), a.$on("$destroy", function() {
                    f.$removeControl(e);
                });
            }
        };
    }, ie = q({
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), je = function() {
        return {
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    c.required = !0;
                    var e = function(a) {
                        return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), 
                        a);
                    };
                    d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
                        e(d.$viewValue);
                    });
                }
            }
        };
    }, ke = function() {
        return {
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(g), function(a) {
                            a && b.push(ad(a));
                        }), b;
                    }
                }), e.$formatters.push(function(a) {
                    return x(a) ? a.join(", ") : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, le = /^(true|false|\d+)$/, me = function() {
        return {
            priority: 100,
            compile: function(a, b) {
                return le.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, ne = Kc(function(a, b, d) {
        b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
            b.text(a == c ? "" : a);
        });
    }), oe = [ "$interpolate", function(a) {
        return function(b, c, d) {
            b = a(c.attr(d.$attr.ngBindTemplate)), c.addClass("ng-binding").data("$binding", b), 
            d.$observe("ngBindTemplate", function(a) {
                c.text(a);
            });
        };
    } ], pe = [ "$sce", "$parse", function(a, b) {
        return function(c, d, e) {
            d.addClass("ng-binding").data("$binding", e.ngBindHtml);
            var f = b(e.ngBindHtml);
            c.$watch(function() {
                return (f(c) || "").toString();
            }, function() {
                d.html(a.getTrustedHtml(f(c)) || "");
            });
        };
    } ], qe = Oc("", !0), re = Oc("Odd", 0), se = Oc("Even", 1), te = Kc({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), ue = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], ve = {};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Db("ng-" + a);
        ve[b] = [ "$parse", function(c) {
            return {
                compile: function(d, e) {
                    var f = c(e[b]);
                    return function(b, c) {
                        c.on(Uc(a), function(a) {
                            b.$apply(function() {
                                f(b, {
                                    $event: a
                                });
                            });
                        });
                    };
                }
            };
        } ];
    });
    var we = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i;
                c.$watch(e.ngIf, function(f) {
                    N(f) ? i || (i = c.$new(), g(i, function(c) {
                        c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    })) : (i && (i.$destroy(), i = null), h && (a.leave(_(h.clone)), h = null));
                });
            }
        };
    } ], xe = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, b, c, d, e) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: $c.noop,
            compile: function(f, g) {
                var h = g.ngInclude || g.src, i = g.onload || "", j = g.autoscroll;
                return function(f, g, k, l, m) {
                    var n, o, p = 0, q = function() {
                        n && (n.$destroy(), n = null), o && (d.leave(o), o = null);
                    };
                    f.$watch(e.parseAsResourceUrl(h), function(e) {
                        var h = function() {
                            !s(j) || j && !f.$eval(j) || c();
                        }, k = ++p;
                        e ? (a.get(e, {
                            cache: b
                        }).success(function(a) {
                            if (k === p) {
                                var b = f.$new();
                                l.template = a, a = m(b, function(a) {
                                    q(), d.enter(a, null, g, h);
                                }), n = b, o = a, n.$emit("$includeContentLoaded"), f.$eval(i);
                            }
                        }).error(function() {
                            k === p && q();
                        }), f.$emit("$includeContentRequested")) : (q(), l.template = null);
                    });
                };
            }
        };
    } ], ye = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(b, c, d, e) {
                c.html(e.template), a(c.contents())(b);
            }
        };
    } ], ze = Kc({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), Ae = Kc({
        terminal: !0,
        priority: 1e3
    }), Be = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, e, g) {
                var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
                f(g, function(a, b) {
                    o.test(b) && (k[Uc(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]));
                }), f(k, function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n));
                }), d.$watch(function() {
                    var b = parseFloat(d.$eval(h));
                    return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0));
                }, function(a) {
                    e.text(a);
                });
            }
        };
    } ], Ce = [ "$parse", "$animate", function(a, c) {
        var g = d("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(d, h, i, j, k) {
                var l, m, n, o, p, q, r = i.ngRepeat, s = r.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), t = {
                    $id: tb
                };
                if (!s) throw g("iexp", r);
                if (i = s[1], j = s[2], (s = s[3]) ? (l = a(s), m = function(a, b, c) {
                    return q && (t[q] = a), t[p] = b, t.$index = c, l(d, t);
                }) : (n = function(a, b) {
                    return tb(b);
                }, o = function(a) {
                    return a;
                }), s = i.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !s) throw g("iidexp", i);
                p = s[3] || s[1], q = s[2];
                var u = {};
                d.$watchCollection(j, function(a) {
                    var i, j, l, s, t, v, w, x, y, z = h[0], A = {}, B = [];
                    if (e(a)) x = a, l = m || n; else {
                        l = m || o, x = [];
                        for (v in a) a.hasOwnProperty(v) && "$" != v.charAt(0) && x.push(v);
                        x.sort();
                    }
                    for (s = x.length, j = B.length = x.length, i = 0; j > i; i++) if (v = a === x ? i : x[i], 
                    w = a[v], w = l(v, w, i), Z(w, "`track by` id"), u.hasOwnProperty(w)) y = u[w], 
                    delete u[w], A[w] = y, B[i] = y; else {
                        if (A.hasOwnProperty(w)) throw f(B, function(a) {
                            a && a.scope && (u[a.id] = a);
                        }), g("dupes", r, w);
                        B[i] = {
                            id: w
                        }, A[w] = !1;
                    }
                    for (v in u) u.hasOwnProperty(v) && (y = u[v], i = _(y.clone), c.leave(i), f(i, function(a) {
                        a.$$NG_REMOVED = !0;
                    }), y.scope.$destroy());
                    for (i = 0, j = x.length; j > i; i++) {
                        if (v = a === x ? i : x[i], w = a[v], y = B[i], B[i - 1] && (z = B[i - 1].clone[B[i - 1].clone.length - 1]), 
                        y.scope) {
                            t = y.scope, l = z;
                            do l = l.nextSibling; while (l && l.$$NG_REMOVED);
                            y.clone[0] != l && c.move(_(y.clone), null, Qc(z)), z = y.clone[y.clone.length - 1];
                        } else t = d.$new();
                        t[p] = w, q && (t[q] = v), t.$index = i, t.$first = 0 === i, t.$last = i === s - 1, 
                        t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & i)), y.scope || k(t, function(a) {
                            a[a.length++] = b.createComment(" end ngRepeat: " + r + " "), c.enter(a, null, Qc(z)), 
                            z = a, y.scope = t, y.clone = a, A[y.id] = y;
                        });
                    }
                    u = A;
                });
            }
        };
    } ], De = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngShow, function(b) {
                a[N(b) ? "removeClass" : "addClass"](c, "ng-hide");
            });
        };
    } ], Ee = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngHide, function(b) {
                a[N(b) ? "addClass" : "removeClass"](c, "ng-hide");
            });
        };
    } ], Fe = Kc(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), Ge = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(b, c, d, e) {
                var g, h, i = [];
                b.$watch(d.ngSwitch || d.on, function(c) {
                    for (var j = 0, k = i.length; k > j; j++) i[j].$destroy(), a.leave(h[j]);
                    h = [], i = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function(c) {
                        var d = b.$new();
                        i.push(d), c.transclude(d, function(b) {
                            var d = c.element;
                            h.push(b), a.enter(b, d.parent(), d);
                        });
                    }));
                });
            }
        };
    } ], He = Kc({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), Ie = Kc({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), Je = Kc({
        controller: [ "$element", "$transclude", function(a, b) {
            if (!b) throw d("ngTransclude")("orphan", O(a));
            this.$transclude = b;
        } ],
        link: function(a, b, c, d) {
            d.$transclude(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), Ke = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                "text/ng-template" == c.type && a.put(c.id, b[0].text);
            }
        };
    } ], Le = d("ngOptions"), Me = q({
        terminal: !0
    }), Ne = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d, e = this, f = {}, g = h;
                e.databound = c.ngModel, e.init = function(a, b, c) {
                    g = a, d = c;
                }, e.addOption = function(b) {
                    Z(b, '"option value"'), f[b] = !0, g.$viewValue == b && (a.val(b), d.parent() && d.remove());
                }, e.removeOption = function(a) {
                    this.hasOption(a) && (delete f[a], g.$viewValue == a && this.renderUnknownOption(a));
                }, e.renderUnknownOption = function(b) {
                    b = "? " + tb(b) + " ?", d.val(b), a.prepend(d), a.val(b), d.prop("selected", !0);
                }, e.hasOption = function(a) {
                    return f.hasOwnProperty(a);
                }, b.$on("$destroy", function() {
                    e.renderUnknownOption = o;
                });
            } ],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && p.prop("selected", !0)) : r(a) && p ? b.val("") : d.renderUnknownOption(a);
                    }, b.on("change", function() {
                        a.$apply(function() {
                            y.parent() && y.remove(), c.$setViewValue(b.val());
                        });
                    });
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new ub(c.$viewValue);
                        f(b.find("option"), function(b) {
                            b.selected = s(a.get(b.value));
                        });
                    }, a.$watch(function() {
                        H(d, c.$viewValue) || (d = F(c.$viewValue), c.$render());
                    }), b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"), function(b) {
                                b.selected && a.push(b.value);
                            }), c.$setViewValue(a);
                        });
                    });
                }
                function n(b, f, h) {
                    function i() {
                        var a, c, d, e, i, j = {
                            "": []
                        }, t = [ "" ];
                        e = h.$modelValue, i = p(b) || [];
                        var z, A, B, C = m ? g(i) : i;
                        A = {}, d = !1;
                        var D, E;
                        if (q) if (r && x(e)) for (d = new ub([]), B = 0; B < e.length; B++) A[l] = e[B], 
                        d.put(r(b, A), e[B]); else d = new ub(e);
                        for (B = 0; z = C.length, z > B; B++) {
                            if (c = B, m) {
                                if (c = C[B], "$" === c.charAt(0)) continue;
                                A[m] = c;
                            }
                            A[l] = i[c], a = n(b, A) || "", (c = j[a]) || (c = j[a] = [], t.push(a)), q ? a = s(d.remove(r ? r(b, A) : o(b, A))) : (r ? (a = {}, 
                            a[l] = e, a = r(b, a) === r(b, A)) : a = e === o(b, A), d = d || a), D = k(b, A), 
                            D = s(D) ? D : "", c.push({
                                id: r ? r(b, A) : m ? C[B] : B,
                                label: D,
                                selected: a
                            });
                        }
                        for (q || (u || null === e ? j[""].unshift({
                            id: "",
                            label: "",
                            selected: !d
                        }) : d || j[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), A = 0, C = t.length; C > A; A++) {
                            for (a = t[A], c = j[a], y.length <= A ? (e = {
                                element: w.clone().attr("label", a),
                                label: c.label
                            }, i = [ e ], y.push(i), f.append(e.element)) : (i = y[A], e = i[0], e.label != a && e.element.attr("label", e.label = a)), 
                            D = null, B = 0, z = c.length; z > B; B++) d = c[B], (a = i[B + 1]) ? (D = a.element, 
                            a.label !== d.label && D.text(a.label = d.label), a.id !== d.id && D.val(a.id = d.id), 
                            D[0].selected !== d.selected && D.prop("selected", a.selected = d.selected)) : ("" === d.id && u ? E = u : (E = v.clone()).val(d.id).attr("selected", d.selected).text(d.label), 
                            i.push({
                                element: E,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), D ? D.after(E) : e.element.append(E), D = E);
                            for (B++; i.length > B; ) i.pop().element.remove();
                        }
                        for (;y.length > A; ) y.pop()[0].element.remove();
                    }
                    var j;
                    if (!(j = t.match(e))) throw Le("iexp", t, O(f));
                    var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ""), o = d(j[2] ? j[1] : l), p = d(j[7]), r = j[8] ? d(j[8]) : null, y = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    u && (a(u)(b), u.removeClass("ng-scope"), u.remove()), f.empty(), f.on("change", function() {
                        b.$apply(function() {
                            var a, d, e, g, i, j, k, n, s = p(b) || [], t = {};
                            if (q) {
                                for (e = [], i = 0, k = y.length; k > i; i++) for (a = y[i], g = 1, j = a.length; j > g; g++) if ((d = a[g].element)[0].selected) {
                                    if (d = d.val(), m && (t[m] = d), r) for (n = 0; n < s.length && (t[l] = s[n], r(b, t) != d); n++) ; else t[l] = s[d];
                                    e.push(o(b, t));
                                }
                            } else if (d = f.val(), "?" == d) e = c; else if ("" === d) e = null; else if (r) {
                                for (n = 0; n < s.length; n++) if (t[l] = s[n], r(b, t) == d) {
                                    e = o(b, t);
                                    break;
                                }
                            } else t[l] = s[d], m && (t[m] = d), e = o(b, t);
                            h.$setViewValue(e);
                        });
                    }), h.$render = i, b.$watch(i);
                }
                if (k[1]) {
                    var o = k[0];
                    k = k[1];
                    var p, q = j.multiple, t = j.ngOptions, u = !1, v = Qc(b.createElement("option")), w = Qc(b.createElement("optgroup")), y = v.clone();
                    j = 0;
                    for (var z = i.children(), A = z.length; A > j; j++) if ("" === z[j].value) {
                        p = u = z.eq(j);
                        break;
                    }
                    o.init(k, u, y), q && (k.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), t ? n(h, i, k) : q ? m(h, i, k) : l(h, i, k, o);
                }
            }
        };
    } ], Oe = [ "$interpolate", function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text());
                }
                return function(a, c, d) {
                    var f = c.parent(), g = f.data("$selectController") || f.parent().data("$selectController");
                    g && g.databound ? c.prop("selected", !1) : g = b, e ? a.$watch(e, function(a, b) {
                        d.$set("value", a), a !== b && g.removeOption(b), g.addOption(a);
                    }) : g.addOption(d.value), c.on("$destroy", function() {
                        g.removeOption(d.value);
                    });
                };
            }
        };
    } ], Pe = q({
        restrict: "E",
        terminal: !0
    });
    (Rc = a.jQuery) ? (Qc = Rc, l(Rc.fn, {
        scope: ld.scope,
        isolateScope: ld.isolateScope,
        controller: ld.controller,
        injector: ld.injector,
        inheritedData: ld.inheritedData
    }), cb("remove", !0, !0, !1), cb("empty", !1, !1, !1), cb("html", !1, !1, !0)) : Qc = db, 
    $c.element = Qc, function(b) {
        l(b, {
            bootstrap: V,
            copy: F,
            extend: l,
            equals: H,
            element: Qc,
            forEach: f,
            injector: wb,
            noop: o,
            bind: J,
            toJson: L,
            fromJson: M,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: y,
            isObject: t,
            isNumber: v,
            isElement: B,
            isArray: x,
            version: cd,
            isDate: w,
            lowercase: Uc,
            uppercase: Vc,
            callbacks: {
                counter: 0
            },
            $$minErr: d,
            $$csp: I
        }), Sc = ab(a);
        try {
            Sc("ngLocale");
        } catch (c) {
            Sc("ngLocale", []).provider("$locale", Rb);
        }
        Sc("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: oc
            }), a.provider("$compile", Cb).directive({
                a: Td,
                input: be,
                textarea: be,
                form: Xd,
                script: Ke,
                select: Ne,
                style: Pe,
                option: Oe,
                ngBind: ne,
                ngBindHtml: pe,
                ngBindTemplate: oe,
                ngClass: qe,
                ngClassEven: se,
                ngClassOdd: re,
                ngCloak: te,
                ngController: ue,
                ngForm: Yd,
                ngHide: Ee,
                ngIf: we,
                ngInclude: xe,
                ngInit: ze,
                ngNonBindable: Ae,
                ngPluralize: Be,
                ngRepeat: Ce,
                ngShow: De,
                ngStyle: Fe,
                ngSwitch: Ge,
                ngSwitchWhen: He,
                ngSwitchDefault: Ie,
                ngOptions: Me,
                ngTransclude: Je,
                ngModel: he,
                ngList: ke,
                ngChange: ie,
                required: je,
                ngRequired: je,
                ngValue: me
            }).directive({
                ngInclude: ye
            }).directive(Ud).directive(ve), a.provider({
                $anchorScroll: xb,
                $animate: ud,
                $browser: zb,
                $cacheFactory: Ab,
                $controller: Fb,
                $document: Gb,
                $exceptionHandler: Hb,
                $filter: yc,
                $interpolate: Pb,
                $interval: Qb,
                $http: Lb,
                $httpBackend: Nb,
                $location: bc,
                $log: cc,
                $parse: kc,
                $rootScope: nc,
                $q: lc,
                $sce: sc,
                $sceDelegate: rc,
                $sniffer: tc,
                $templateCache: Bb,
                $timeout: uc,
                $window: xc
            });
        } ]);
    }($c), Qc(b).ready(function() {
        U(b, V);
    });
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>'), 
function() {
    var a = angular.module("hmTouchevents", []), b = [ "hmHold:hold", "hmTap:tap", "hmDoubletap:doubletap", "hmDrag:drag", "hmDragup:dragup", "hmDragdown:dragdown", "hmDragleft:dragleft", "hmDragright:dragright", "hmSwipe:swipe", "hmSwipeup:swipeup", "hmSwipedown:swipedown", "hmSwipeleft:swipeleft", "hmSwiperight:swiperight", "hmTransform:transform", "hmRotate:rotate", "hmPinch:pinch", "hmPinchin:pinchin", "hmPinchout:pinchout", "hmTouch:touch", "hmRelease:release" ];
    angular.forEach(b, function(b) {
        var c = b.split(":"), d = c[0], e = c[1];
        a.directive(d, [ "$parse", function(a) {
            return {
                scope: !0,
                link: function(b, c, f) {
                    var g = a(f[d]), h = a(f.hmOptions)(b, {});
                    return b.hammer = h && h.group ? b.hammer || Hammer(c[0], h) : Hammer(c[0], h), 
                    b.hammer.on(e, function(a) {
                        return b.$apply(function() {
                            return g(b, {
                                $event: a
                            });
                        });
                    });
                }
            };
        } ]);
    });
}(), function(a, b, c) {
    "use strict";
    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a);
    }
    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c;
        }
        return a;
    }
    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b];
        });
        for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && "$" !== d.charAt(1) && (c[d] = a[d]);
        return c;
    }
    var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", [ "ng" ]).factory("$resource", [ "$http", "$q", function(a, d) {
        function h(a) {
            return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function i(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
        }
        function j(a, b) {
            this.template = a, this.defaults = b || {}, this.urlParams = {};
        }
        function k(h, i, r) {
            function s(a, b) {
                var c = {};
                return b = o({}, i, b), n(b, function(b, d) {
                    q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b;
                }), c;
            }
            function t(a) {
                return a.resource;
            }
            function u(a) {
                f(a || {}, this);
            }
            var v = new j(h);
            return r = o({}, l, r), n(r, function(e, h) {
                var i = /^(POST|PUT|PATCH)$/i.test(e.method);
                u[h] = function(h, j, k, l) {
                    var r, w, x, y = {};
                    switch (arguments.length) {
                      case 4:
                        x = l, w = k;

                      case 3:
                      case 2:
                        if (!q(j)) {
                            y = h, r = j, w = k;
                            break;
                        }
                        if (q(h)) {
                            w = h, x = j;
                            break;
                        }
                        w = j, x = k;

                      case 1:
                        q(h) ? w = h : i ? r = h : y = h;
                        break;

                      case 0:
                        break;

                      default:
                        throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length);
                    }
                    var z = this instanceof u, A = z ? r : e.isArray ? [] : new u(r), B = {}, C = e.interceptor && e.interceptor.response || t, D = e.interceptor && e.interceptor.responseError || c;
                    n(e, function(a, b) {
                        "params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a));
                    }), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
                    var E = a(B).then(function(a) {
                        var c = a.data, d = A.$promise;
                        if (c) {
                            if (b.isArray(c) !== !!e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                            e.isArray ? (A.length = 0, n(c, function(a) {
                                A.push(new u(a));
                            })) : (f(c, A), A.$promise = d);
                        }
                        return A.$resolved = !0, a.resource = A, a;
                    }, function(a) {
                        return A.$resolved = !0, (x || m)(a), d.reject(a);
                    });
                    return E = E.then(function(a) {
                        var b = C(a);
                        return (w || m)(b, a.headers), b;
                    }, D), z ? E : (A.$promise = E, A.$resolved = !1, A);
                }, u.prototype["$" + h] = function(a, b, c) {
                    q(a) && (c = b, b = a, a = {});
                    var d = u[h].call(this, a, this, b, c);
                    return d.$promise || d;
                };
            }), u.bind = function(a) {
                return k(h, o({}, i, a), r);
            }, u;
        }
        var l = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }, m = b.noop, n = b.forEach, o = b.extend, p = b.copy, q = b.isFunction;
        return j.prototype = {
            setUrlParams: function(a, c, d) {
                var e, f, i = this, j = d || i.template, k = i.urlParams = {};
                n(j.split(/\W/), function(a) {
                    if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                    !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0);
                }), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function(a, d) {
                    e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), 
                    j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), f + "$1")) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                        return "/" == c.charAt(0) ? c : b + c;
                    });
                }), j = j.replace(/\/+$/, "") || "/", j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), 
                n(c, function(b, c) {
                    i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b);
                });
            }
        }, k;
    } ]);
}(window, window.angular), function(a, b, c) {
    "use strict";
    b.module("ngAnimate", [ "ng" ]).factory("$$animateReflow", [ "$window", "$timeout", function(a, b) {
        var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || function(a) {
            return b(a, 10, !1);
        }, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || function(a) {
            return b.cancel(a);
        };
        return function(a) {
            var b = c(a);
            return function() {
                d(b);
            };
        };
    } ]).config([ "$provide", "$animateProvider", function(d, e) {
        function f(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == k) return c;
            }
        }
        function g(a, b) {
            return f(a) == f(b);
        }
        var h = b.noop, i = b.forEach, j = e.$$selectors, k = 1, l = "$$ngAnimateState", m = "ng-animate", n = {
            running: !0
        };
        d.decorator("$animate", [ "$delegate", "$injector", "$sniffer", "$rootElement", "$timeout", "$rootScope", "$document", function(a, c, d, k, o, p) {
            function q(a) {
                return o(a, 0, !1);
            }
            function r(a) {
                if (a) {
                    var b = [], e = {}, f = a.substr(1).split(".");
                    (d.transitions || d.animations) && f.push("");
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g], i = j[h];
                        i && !e[h] && (b.push(c.get(i)), e[h] = !0);
                    }
                    return b;
                }
            }
            function s(a, b, c, d, e, g, j) {
                function k(a) {
                    if (z(), a === !0) return void A();
                    var b = c.data(l);
                    b && (b.done = A, c.data(l, b)), n(I, "after", A);
                }
                function n(d, e, f) {
                    function g(a, b) {
                        var c = b + "Complete", e = d[a];
                        e[c] = !0, (e[j] || h)();
                        for (var g = 0; g < d.length; g++) if (!d[g][c]) return;
                        f();
                    }
                    "after" == e ? t() : s();
                    var j = e + "End";
                    i(d, function(d, f) {
                        var h = function() {
                            g(f, e);
                        };
                        return "before" != e || "enter" != a && "move" != a ? void (d[e] ? d[j] = G ? d[e](c, b, h) : d[e](c, h) : h()) : void h();
                    });
                }
                function p(d) {
                    c.triggerHandler("$animate:" + d, {
                        event: a,
                        className: b
                    });
                }
                function s() {
                    q(function() {
                        p("before");
                    });
                }
                function t() {
                    q(function() {
                        p("after");
                    });
                }
                function x() {
                    q(function() {
                        p("close"), j && j();
                    });
                }
                function z() {
                    z.hasBeenRun || (z.hasBeenRun = !0, g());
                }
                function A() {
                    if (!A.hasBeenRun) {
                        A.hasBeenRun = !0;
                        var a = c.data(l);
                        a && (G ? v(c) : (a.closeAnimationTimeout = q(function() {
                            v(c);
                        }), c.data(l, a))), x();
                    }
                }
                var B, C, D = f(c);
                if (D && (B = D.className, C = B + " " + b), !D || !y(C)) return z(), s(), t(), 
                void A();
                var E = (" " + C).replace(/\s+/g, ".");
                d || (d = e ? e.parent() : c.parent());
                var F = r(E), G = "addClass" == a || "removeClass" == a, H = c.data(l) || {};
                if (w(c, d) || 0 === F.length) return z(), s(), t(), void A();
                var I = [], J = G ? !(H.disabled || H.running && H.structural) : !0;
                if (J && i(F, function(d) {
                    if (!d.allowCancel || d.allowCancel(c, a, b)) {
                        var e, f = d[a];
                        "leave" == a ? (e = f, f = null) : e = d["before" + a.charAt(0).toUpperCase() + a.substr(1)], 
                        I.push({
                            before: e,
                            after: f
                        });
                    }
                }), 0 === I.length) return z(), s(), t(), void x();
                var K = " ", L = K + B + K;
                if (H.running) {
                    o.cancel(H.closeAnimationTimeout), v(c), u(H.animations);
                    var M = G && !H.structural, N = M && H.className == b && a != H.event;
                    H.beforeComplete || N ? (H.done || h)(!0) : M && (L = "removeClass" == H.event ? L.replace(K + H.className + K, K) : L + H.className + K);
                }
                var O = K + b + K;
                return "addClass" == a && L.indexOf(O) >= 0 || "removeClass" == a && -1 == L.indexOf(O) ? (z(), 
                s(), t(), void x()) : (c.addClass(m), c.data(l, {
                    running: !0,
                    event: a,
                    className: b,
                    structural: !G,
                    animations: I,
                    done: k
                }), void n(I, "before", k));
            }
            function t(a) {
                var c = f(a);
                i(c.querySelectorAll("." + m), function(a) {
                    a = b.element(a);
                    var c = a.data(l);
                    c && (u(c.animations), v(a));
                });
            }
            function u(a) {
                var b = !0;
                i(a, function(a) {
                    a.beforeComplete || (a.beforeEnd || h)(b), a.afterComplete || (a.afterEnd || h)(b);
                });
            }
            function v(a) {
                g(a, k) ? n.disabled || (n.running = !1, n.structural = !1) : (a.removeClass(m), 
                a.removeData(l));
            }
            function w(a, b) {
                if (n.disabled) return !0;
                if (g(a, k)) return n.disabled || n.running;
                do {
                    if (0 === b.length) break;
                    var c = g(b, k), d = c ? n : b.data(l), e = d && (!!d.disabled || !!d.running);
                    if (c || e) return e;
                    if (c) return !0;
                } while (b = b.parent());
                return !0;
            }
            k.data(l, n), p.$$postDigest(function() {
                p.$$postDigest(function() {
                    n.running = !1;
                });
            });
            var x = e.classNameFilter(), y = x ? function(a) {
                return x.test(a);
            } : function() {
                return !0;
            };
            return {
                enter: function(b, c, d, e) {
                    this.enabled(!1, b), a.enter(b, c, d), p.$$postDigest(function() {
                        s("enter", "ng-enter", b, c, d, h, e);
                    });
                },
                leave: function(b, c) {
                    t(b), this.enabled(!1, b), p.$$postDigest(function() {
                        s("leave", "ng-leave", b, null, null, function() {
                            a.leave(b);
                        }, c);
                    });
                },
                move: function(b, c, d, e) {
                    t(b), this.enabled(!1, b), a.move(b, c, d), p.$$postDigest(function() {
                        s("move", "ng-move", b, c, d, h, e);
                    });
                },
                addClass: function(b, c, d) {
                    s("addClass", c, b, null, null, function() {
                        a.addClass(b, c);
                    }, d);
                },
                removeClass: function(b, c, d) {
                    s("removeClass", c, b, null, null, function() {
                        a.removeClass(b, c);
                    }, d);
                },
                enabled: function(a, b) {
                    switch (arguments.length) {
                      case 2:
                        if (a) v(b); else {
                            var c = b.data(l) || {};
                            c.disabled = !0, b.data(l, c);
                        }
                        break;

                      case 1:
                        n.disabled = !a;
                        break;

                      default:
                        a = !n.disabled;
                    }
                    return !!a;
                }
            };
        } ]), e.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, j) {
            function l(a, c) {
                H && H(), U.push(c);
                var d = f(a);
                a = b.element(d), V.push(a);
                var e = a.data(N), h = e.stagger, k = e.itemIndex * (Math.max(h.animationDelay, h.transitionDelay) || 0), l = (e.maxDelay + e.maxDuration) * P;
                W = Math.max(W, (k + l) * Q), e.animationCount = R, H = j(function() {
                    i(U, function(a) {
                        a();
                    });
                    var a = [], b = R;
                    i(V, function(b) {
                        a.push(b);
                    }), g(function() {
                        m(a, b), a = null;
                    }, W, !1), U = [], V = [], H = null, S = {}, W = 0, R++;
                });
            }
            function m(a, b) {
                i(a, function(a) {
                    var c = a.data(N);
                    c && c.animationCount == b && (c.closeAnimationFn || h)();
                });
            }
            function n(a, b) {
                var c = b ? S[b] : null;
                if (!c) {
                    var e, f, g, h, j = 0, l = 0, m = 0, n = 0;
                    i(a, function(a) {
                        if (a.nodeType == k) {
                            var b = d.getComputedStyle(a) || {};
                            g = b[C + I], j = Math.max(o(g), j), h = b[C + J], e = b[C + K], l = Math.max(o(e), l), 
                            f = b[E + K], n = Math.max(o(f), n);
                            var c = o(b[E + I]);
                            c > 0 && (c *= parseInt(b[E + L], 10) || 1), m = Math.max(c, m);
                        }
                    }), c = {
                        total: 0,
                        transitionPropertyStyle: h,
                        transitionDurationStyle: g,
                        transitionDelayStyle: e,
                        transitionDelay: l,
                        transitionDuration: j,
                        animationDelayStyle: f,
                        animationDelay: n,
                        animationDuration: m
                    }, b && (S[b] = c);
                }
                return c;
            }
            function o(a) {
                var c = 0, d = b.isString(a) ? a.split(/\s*,\s*/) : [];
                return i(d, function(a) {
                    c = Math.max(parseFloat(a) || 0, c);
                }), c;
            }
            function p(a) {
                var b = a.parent(), c = b.data(M);
                return c || (b.data(M, ++T), c = T), c + "-" + f(a).className;
            }
            function q(a, b, c) {
                var d = p(a), e = d + " " + b, f = {}, g = S[e] ? ++S[e].total : 0;
                if (g > 0) {
                    var h = b + "-stagger", j = d + " " + h, k = !S[j];
                    k && a.addClass(h), f = n(a, j), k && a.removeClass(h);
                }
                c = c || function(a) {
                    return a();
                }, a.addClass(b);
                var l = c(function() {
                    return n(a, e);
                }), m = Math.max(l.transitionDelay, l.animationDelay), o = Math.max(l.transitionDuration, l.animationDuration);
                if (0 === o) return a.removeClass(b), !1;
                var q = "";
                return l.transitionDuration > 0 ? r(a) : s(a), i(b.split(" "), function(a, b) {
                    q += (b > 0 ? " " : "") + a + "-active";
                }), a.data(N, {
                    className: b,
                    activeClassName: q,
                    maxDuration: o,
                    maxDelay: m,
                    classes: b + " " + q,
                    timings: l,
                    stagger: f,
                    itemIndex: g
                }), !0;
            }
            function r(a) {
                f(a).style[C + J] = "none";
            }
            function s(a) {
                f(a).style[E] = "none 0s";
            }
            function t(a) {
                var b = C + J, c = f(a);
                c.style[b] && c.style[b].length > 0 && (c.style[b] = "");
            }
            function u(a) {
                var b = E, c = f(a);
                c.style[b] && c.style[b].length > 0 && (c.style[b] = "");
            }
            function v(a, b, c) {
                function d() {
                    a.off(o, e), a.removeClass(l), A(a, b);
                    var c = f(a);
                    for (var d in r) c.style.removeProperty(r[d]);
                }
                function e(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a, d = b.$manualTimeStamp || b.timeStamp || Date.now(), e = parseFloat(b.elapsedTime.toFixed(O));
                    Math.max(d - n, 0) >= m && e >= k && c();
                }
                var g = a.data(N), h = f(a);
                if (-1 == h.className.indexOf(b) || !g) return void c();
                var i = g.timings, j = g.stagger, k = g.maxDuration, l = g.activeClassName, m = Math.max(i.transitionDelay, i.animationDelay) * Q, n = Date.now(), o = F + " " + D, p = g.itemIndex, q = "", r = [];
                if (i.transitionDuration > 0) {
                    var s = i.transitionPropertyStyle;
                    -1 == s.indexOf("all") && (q += G + "transition-property: " + s + ";", q += G + "transition-duration: " + i.transitionDurationStyle + ";", 
                    r.push(G + "transition-property"), r.push(G + "transition-duration"));
                }
                if (p > 0) {
                    if (j.transitionDelay > 0 && 0 === j.transitionDuration) {
                        var t = i.transitionDelayStyle;
                        q += G + "transition-delay: " + w(t, j.transitionDelay, p) + "; ", r.push(G + "transition-delay");
                    }
                    j.animationDelay > 0 && 0 === j.animationDuration && (q += G + "animation-delay: " + w(i.animationDelayStyle, j.animationDelay, p) + "; ", 
                    r.push(G + "animation-delay"));
                }
                if (r.length > 0) {
                    var u = h.getAttribute("style") || "";
                    h.setAttribute("style", u + " " + q);
                }
                return a.on(o, e), a.addClass(l), g.closeAnimationFn = function() {
                    d(), c();
                }, d;
            }
            function w(a, b, c) {
                var d = "";
                return i(a.split(","), function(a, e) {
                    d += (e > 0 ? "," : "") + (c * b + parseInt(a, 10)) + "s";
                }), d;
            }
            function x(a, b, c) {
                return q(a, b, c) ? function(c) {
                    c && A(a, b);
                } : void 0;
            }
            function y(a, b, c) {
                return a.data(N) ? v(a, b, c) : (A(a, b), void c());
            }
            function z(a, b, c) {
                var d = x(a, b);
                if (!d) return void c();
                var e = d;
                return l(a, function() {
                    t(a), u(a), e = y(a, b, c);
                }), function(a) {
                    (e || h)(a);
                };
            }
            function A(a, b) {
                a.removeClass(b), a.removeData(N);
            }
            function B(a, c) {
                var d = "";
                return a = b.isArray(a) ? a : a.split(/\s+/), i(a, function(a, b) {
                    a && a.length > 0 && (d += (b > 0 ? " " : "") + a + c);
                }), d;
            }
            var C, D, E, F, G = "";
            a.ontransitionend === c && a.onwebkittransitionend !== c ? (G = "-webkit-", C = "WebkitTransition", 
            D = "webkitTransitionEnd transitionend") : (C = "transition", D = "transitionend"), 
            a.onanimationend === c && a.onwebkitanimationend !== c ? (G = "-webkit-", E = "WebkitAnimation", 
            F = "webkitAnimationEnd animationend") : (E = "animation", F = "animationend");
            var H, I = "Duration", J = "Property", K = "Delay", L = "IterationCount", M = "$$ngAnimateKey", N = "$$ngAnimateCSS3Data", O = 3, P = 1.5, Q = 1e3, R = 0, S = {}, T = 0, U = [], V = [], W = 0;
            return {
                allowCancel: function(a, c, d) {
                    var e = (a.data(N) || {}).classes;
                    if (!e || [ "enter", "leave", "move" ].indexOf(c) >= 0) return !0;
                    var g = a.parent(), h = b.element(f(a).cloneNode());
                    h.attr("style", "position:absolute; top:-9999px; left:-9999px"), h.removeAttr("id"), 
                    h.empty(), i(e.split(" "), function(a) {
                        h.removeClass(a);
                    });
                    var j = "addClass" == c ? "-add" : "-remove";
                    h.addClass(B(d, j)), g.append(h);
                    var k = n(h);
                    return h.remove(), Math.max(k.transitionDuration, k.animationDuration) > 0;
                },
                enter: function(a, b) {
                    return z(a, "ng-enter", b);
                },
                leave: function(a, b) {
                    return z(a, "ng-leave", b);
                },
                move: function(a, b) {
                    return z(a, "ng-move", b);
                },
                beforeAddClass: function(a, b, c) {
                    var d = x(a, B(b, "-add"), function(c) {
                        a.addClass(b);
                        var d = c();
                        return a.removeClass(b), d;
                    });
                    return d ? (l(a, function() {
                        t(a), u(a), c();
                    }), d) : void c();
                },
                addClass: function(a, b, c) {
                    return y(a, B(b, "-add"), c);
                },
                beforeRemoveClass: function(a, b, c) {
                    var d = x(a, B(b, "-remove"), function(c) {
                        var d = a.attr("class");
                        a.removeClass(b);
                        var e = c();
                        return a.attr("class", d), e;
                    });
                    return d ? (l(a, function() {
                        t(a), u(a), c();
                    }), d) : void c();
                },
                removeClass: function(a, b, c) {
                    return y(a, B(b, "-remove"), c);
                }
            };
        } ]);
    } ]);
}(window, window.angular), function(a, b) {
    "use strict";
    function c() {
        function a(a, c) {
            return b.extend(new (b.extend(function() {}, {
                prototype: a
            }))(), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null, g = "*" === d ? d : null;
                return e.push({
                    name: c,
                    optional: !!f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "");
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), 
            d;
        }
        var d = {};
        this.when = function(a, e) {
            if (d[a] = b.extend({
                reloadOnSearch: !0
            }, e, a && c(a, e)), a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[f] = b.extend({
                    redirectTo: a
                }, c(f, e));
            }
            return this;
        }, this.otherwise = function(a) {
            return this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(c, e, f, g, h, i, j, k) {
            function l(a, b) {
                var c = b.keys, d = {};
                if (!b.regexp) return null;
                var e = b.regexp.exec(a);
                if (!e) return null;
                for (var f = 1, g = e.length; g > f; ++f) {
                    var h = c[f - 1], i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
                    h && i && (d[h.name] = i);
                }
                return d;
            }
            function m() {
                var a = n(), d = q.current;
                a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, 
                b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), 
                q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), 
                g.when(a).then(function() {
                    if (a) {
                        var c, d, e = b.extend({}, a.resolve);
                        return b.forEach(e, function(a, c) {
                            e[c] = b.isString(a) ? h.get(a) : h.invoke(a);
                        }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), 
                        d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
                            cache: j
                        }).then(function(a) {
                            return a.data;
                        }))), b.isDefined(c) && (e.$template = c), g.all(e);
                    }
                }).then(function(e) {
                    a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d));
                }, function(b) {
                    a == q.current && c.$broadcast("$routeChangeError", a, d, b);
                }));
            }
            function n() {
                var c, f;
                return b.forEach(d, function(d) {
                    !f && (c = l(e.path(), d)) && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d);
                }), f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function o(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f];
                    }
                }), d.join("");
            }
            var p = !1, q = {
                routes: d,
                reload: function() {
                    p = !0, c.$evalAsync(m);
                }
            };
            return c.$on("$locationChangeSuccess", m), q;
        } ];
    }
    function d() {
        this.$get = function() {
            return {};
        };
    }
    function e(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    l && (l.$destroy(), l = null), m && (d.leave(m), m = null);
                }
                function k() {
                    var g = a.current && a.current.locals, h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(), p = a.current, q = i(k, function(a) {
                            d.enter(a, null, m || f, function() {
                                !b.isDefined(n) || n && !e.$eval(n) || c();
                            }), j();
                        });
                        m = q, l = p.scope = k, l.$emit("$viewContentLoaded"), l.$eval(o);
                    } else j();
                }
                var l, m, n = g.autoscroll, o = g.onload || "";
                e.$on("$routeChangeSuccess", k), k();
            }
        };
    }
    function f(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), 
                    e.children().data("$ngControllerController", i);
                }
                h(d);
            }
        };
    }
    var g = b.module("ngRoute", [ "ng" ]).provider("$route", c);
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), 
    e.$inject = [ "$route", "$anchorScroll", "$animate" ], f.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), function() {
    "use strict";
    var a = angular.module("pasvaz.bindonce", []);
    a.directive("bindonce", function() {
        var a = function(a) {
            if (a && 0 !== a.length) {
                var b = angular.lowercase("" + a);
                a = !("f" === b || "0" === b || "false" === b || "no" === b || "n" === b || "[]" === b);
            } else a = !1;
            return a;
        }, b = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
        isNaN(b) && (b = parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10));
        var c = {
            restrict: "AM",
            controller: [ "$scope", "$element", "$attrs", "$interpolate", function(c, d, e, f) {
                var g = function(b, c, d) {
                    var e = "show" === c ? "" : "none", f = "hide" === c ? "" : "none";
                    b.css("display", a(d) ? e : f);
                }, h = function(a, b) {
                    if (angular.isObject(b) && !angular.isArray(b)) {
                        var c = [];
                        angular.forEach(b, function(a, b) {
                            a && c.push(b);
                        }), b = c;
                    }
                    b && a.addClass(angular.isArray(b) ? b.join(" ") : b);
                }, i = {
                    watcherRemover: void 0,
                    binders: [],
                    group: e.boName,
                    element: d,
                    ran: !1,
                    addBinder: function(a) {
                        this.binders.push(a), this.ran && this.runBinders();
                    },
                    setupWatcher: function(a) {
                        var b = this;
                        this.watcherRemover = c.$watch(a, function(a) {
                            void 0 !== a && (b.removeWatcher(), b.runBinders());
                        }, !0);
                    },
                    removeWatcher: function() {
                        void 0 !== this.watcherRemover && (this.watcherRemover(), this.watcherRemover = void 0);
                    },
                    runBinders: function() {
                        for (;this.binders.length > 0; ) {
                            var c = this.binders.shift();
                            if (!this.group || this.group == c.group) {
                                var d = c.scope.$eval(c.interpolate ? f(c.value) : c.value);
                                switch (c.attr) {
                                  case "boIf":
                                    a(d) && c.transclude(c.scope.$new(), function(a) {
                                        var b = c.element.parent(), d = c.element && c.element[c.element.length - 1], e = b && b[0] || d && d.parentNode, f = d && d.nextSibling || null;
                                        angular.forEach(a, function(a) {
                                            e.insertBefore(a, f);
                                        });
                                    });
                                    break;

                                  case "boSwitch":
                                    var e, i = c.controller[0];
                                    (e = i.cases["!" + d] || i.cases["?"]) && (c.scope.$eval(c.attrs.change), angular.forEach(e, function(a) {
                                        a.transclude(c.scope.$new(), function(b) {
                                            var c = a.element.parent(), d = a.element && a.element[a.element.length - 1], e = c && c[0] || d && d.parentNode, f = d && d.nextSibling || null;
                                            angular.forEach(b, function(a) {
                                                e.insertBefore(a, f);
                                            });
                                        });
                                    }));
                                    break;

                                  case "boSwitchWhen":
                                    var j = c.controller[0];
                                    j.cases["!" + c.attrs.boSwitchWhen] = j.cases["!" + c.attrs.boSwitchWhen] || [], 
                                    j.cases["!" + c.attrs.boSwitchWhen].push({
                                        transclude: c.transclude,
                                        element: c.element
                                    });
                                    break;

                                  case "boSwitchDefault":
                                    var j = c.controller[0];
                                    j.cases["?"] = j.cases["?"] || [], j.cases["?"].push({
                                        transclude: c.transclude,
                                        element: c.element
                                    });
                                    break;

                                  case "hide":
                                  case "show":
                                    g(c.element, c.attr, d);
                                    break;

                                  case "class":
                                    h(c.element, d);
                                    break;

                                  case "text":
                                    c.element.text(d);
                                    break;

                                  case "html":
                                    c.element.html(d);
                                    break;

                                  case "style":
                                    c.element.css(d);
                                    break;

                                  case "src":
                                    c.element.attr(c.attr, d), b && c.element.prop("src", d);
                                    break;

                                  case "attr":
                                    angular.forEach(c.attrs, function(a, b) {
                                        var d, e;
                                        b.match(/^boAttr./) && c.attrs[b] && (d = b.replace(/^boAttr/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), 
                                        e = c.scope.$eval(c.attrs[b]), c.element.attr(d, e));
                                    });
                                    break;

                                  case "href":
                                  case "alt":
                                  case "title":
                                  case "id":
                                  case "value":
                                    c.element.attr(c.attr, d);
                                }
                            }
                        }
                        this.ran = !0;
                    }
                };
                return i;
            } ],
            link: function(a, b, c, d) {
                var e = c.bindonce ? a.$eval(c.bindonce) : !0;
                void 0 !== e ? d.runBinders() : (d.setupWatcher(c.bindonce), b.bind("$destroy", d.removeWatcher));
            }
        };
        return c;
    }), angular.forEach([ {
        directiveName: "boShow",
        attribute: "show"
    }, {
        directiveName: "boHide",
        attribute: "hide"
    }, {
        directiveName: "boClass",
        attribute: "class"
    }, {
        directiveName: "boText",
        attribute: "text"
    }, {
        directiveName: "boHtml",
        attribute: "html"
    }, {
        directiveName: "boSrcI",
        attribute: "src",
        interpolate: !0
    }, {
        directiveName: "boSrc",
        attribute: "src"
    }, {
        directiveName: "boHrefI",
        attribute: "href",
        interpolate: !0
    }, {
        directiveName: "boHref",
        attribute: "href"
    }, {
        directiveName: "boAlt",
        attribute: "alt"
    }, {
        directiveName: "boTitle",
        attribute: "title"
    }, {
        directiveName: "boId",
        attribute: "id"
    }, {
        directiveName: "boStyle",
        attribute: "style"
    }, {
        directiveName: "boValue",
        attribute: "value"
    }, {
        directiveName: "boAttr",
        attribute: "attr"
    }, {
        directiveName: "boIf",
        transclude: "element",
        terminal: !0,
        priority: 1e3
    }, {
        directiveName: "boSwitch",
        require: "boSwitch",
        controller: function() {
            this.cases = {};
        }
    }, {
        directiveName: "boSwitchWhen",
        transclude: "element",
        priority: 800,
        require: "^boSwitch"
    }, {
        directiveName: "boSwitchDefault",
        transclude: "element",
        priority: 800,
        require: "^boSwitch"
    } ], function(b) {
        var c = 200;
        return a.directive(b.directiveName, function() {
            var a = {
                priority: b.priority || c,
                transclude: b.transclude || !1,
                terminal: b.terminal || !1,
                require: [ "^bindonce" ].concat(b.require || []),
                controller: b.controller,
                compile: function(a, c, d) {
                    return function(a, c, e, f) {
                        var g = f[0], h = e.boParent;
                        if (h && g.group !== h) {
                            var i = g.element.parent();
                            g = void 0;
                            for (var j; 9 !== i[0].nodeType && i.length; ) {
                                if ((j = i.data("$bindonceController")) && j.group === h) {
                                    g = j;
                                    break;
                                }
                                i = i.parent();
                            }
                            if (!g) throw new Error("No bindonce controller: " + h);
                        }
                        g.addBinder({
                            element: c,
                            attr: b.attribute || b.directiveName,
                            attrs: e,
                            value: e[b.directiveName],
                            interpolate: b.interpolate,
                            group: h,
                            transclude: d,
                            controller: f.slice(1),
                            scope: a
                        });
                    };
                }
            };
            return a;
        });
    });
}(), function(a, b) {
    "use strict";
    function c() {
        if (!d.READY) {
            d.event.determineEventTypes();
            for (var a in d.gestures) d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
            d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), 
            d.READY = !0;
        }
    }
    var d = function(a, b) {
        return new d.Instance(a, b || {});
    };
    d.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, 
    d.HAS_TOUCHEVENTS = "ontouchstart" in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, 
    d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), 
    d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", 
    d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", 
    d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", 
    d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function(a, b) {
        var e = this;
        return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), 
        this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), 
        d.event.onTouch(a, d.EVENT_START, function(a) {
            e.enabled && d.detection.startDetect(e, a);
        }), this;
    }, d.Instance.prototype = {
        on: function(a, b) {
            for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.addEventListener(c[d], b, !1);
            return this;
        },
        off: function(a, b) {
            for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.removeEventListener(c[d], b, !1);
            return this;
        },
        trigger: function(a, b) {
            var c = d.DOCUMENT.createEvent("Event");
            c.initEvent(a, !0, !0), c.gesture = b;
            var e = this.element;
            return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this;
        },
        enable: function(a) {
            return this.enabled = a, this;
        }
    };
    var e = null, f = !1, g = !1;
    d.event = {
        bindDom: function(a, b, c) {
            for (var d = b.split(" "), e = 0; d.length > e; e++) a.addEventListener(d[e], c, !1);
        },
        onTouch: function(a, b, c) {
            var h = this;
            this.bindDom(a, d.EVENT_TYPES[b], function(i) {
                var j = i.type.toLowerCase();
                if (!j.match(/mouse/) || !g) {
                    (j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), 
                    j.match(/touch|pointer/) && (g = !0);
                    var k = 0;
                    f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), 
                    k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, 
                    c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), 
                    k || (e = null, f = !1, g = !1, d.PointerEvent.reset());
                }
            });
        },
        determineEventTypes: function() {
            var a;
            a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? [ "touchstart", "touchmove", "touchend touchcancel" ] : [ "touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup" ], 
            d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2];
        },
        getTouchList: function(a) {
            return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [ {
                identifier: 1,
                pageX: a.pageX,
                pageY: a.pageY,
                target: a.target
            } ];
        },
        collectEventData: function(a, b, c) {
            var e = this.getTouchList(c, b), f = d.POINTER_TOUCH;
            return (c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), 
            {
                center: d.utils.getCenter(e),
                timeStamp: new Date().getTime(),
                target: c.target,
                touches: e,
                eventType: b,
                pointerType: f,
                srcEvent: c,
                preventDefault: function() {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault();
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation();
                },
                stopDetect: function() {
                    return d.detection.stopDetect();
                }
            };
        }
    }, d.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var a = this, b = [];
            return Object.keys(a.pointers).sort().forEach(function(c) {
                b.push(a.pointers[c]);
            }), b;
        },
        updatePointer: function(a, b) {
            return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), 
            Object.keys(this.pointers).length;
        },
        matchType: function(a, b) {
            if (!b.pointerType) return !1;
            var c = {};
            return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, 
            c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, 
            c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, 
            c[a];
        },
        getEvents: function() {
            return [ "pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel" ];
        },
        reset: function() {
            this.pointers = {};
        }
    }, d.utils = {
        extend: function(a, c, d) {
            for (var e in c) a[e] !== b && d || (a[e] = c[e]);
            return a;
        },
        hasParent: function(a, b) {
            for (;a; ) {
                if (a == b) return !0;
                a = a.parentNode;
            }
            return !1;
        },
        getCenter: function(a) {
            for (var b = [], c = [], d = 0, e = a.length; e > d; d++) b.push(a[d].pageX), c.push(a[d].pageY);
            return {
                pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2,
                pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2
            };
        },
        getVelocity: function(a, b, c) {
            return {
                x: Math.abs(b / a) || 0,
                y: Math.abs(c / a) || 0
            };
        },
        getAngle: function(a, b) {
            var c = b.pageY - a.pageY, d = b.pageX - a.pageX;
            return 180 * Math.atan2(c, d) / Math.PI;
        },
        getDirection: function(a, b) {
            var c = Math.abs(a.pageX - b.pageX), e = Math.abs(a.pageY - b.pageY);
            return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN;
        },
        getDistance: function(a, b) {
            var c = b.pageX - a.pageX, d = b.pageY - a.pageY;
            return Math.sqrt(c * c + d * d);
        },
        getScale: function(a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1;
        },
        getRotation: function(a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0;
        },
        isVertical: function(a) {
            return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN;
        },
        stopDefaultBrowserBehavior: function(a, b) {
            var c, d = [ "webkit", "khtml", "moz", "ms", "o", "" ];
            if (b && a.style) {
                for (var e = 0; d.length > e; e++) for (var f in b) b.hasOwnProperty(f) && (c = f, 
                d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
                "none" == b.userSelect && (a.onselectstart = function() {
                    return !1;
                });
            }
        }
    }, d.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function(a, b) {
            this.current || (this.stopped = !1, this.current = {
                inst: a,
                startEvent: d.utils.extend({}, b),
                lastEvent: !1,
                name: ""
            }, this.detect(b));
        },
        detect: function(a) {
            if (this.current && !this.stopped) {
                a = this.extendEventData(a);
                for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
                    var f = this.gestures[c];
                    if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
                        this.stopDetect();
                        break;
                    }
                }
                return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), 
                a;
            }
        },
        stopDetect: function() {
            this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0;
        },
        extendEventData: function(a) {
            var b = this.current.startEvent;
            if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
                b.touches = [];
                for (var c = 0, e = a.touches.length; e > c; c++) b.touches.push(d.utils.extend({}, a.touches[c]));
            }
            var f = a.timeStamp - b.timeStamp, g = a.center.pageX - b.center.pageX, h = a.center.pageY - b.center.pageY, i = d.utils.getVelocity(f, g, h);
            return d.utils.extend(a, {
                deltaTime: f,
                deltaX: g,
                deltaY: h,
                velocityX: i.x,
                velocityY: i.y,
                distance: d.utils.getDistance(b.center, a.center),
                angle: d.utils.getAngle(b.center, a.center),
                direction: d.utils.getDirection(b.center, a.center),
                scale: d.utils.getScale(b.touches, a.touches),
                rotation: d.utils.getRotation(b.touches, a.touches),
                startEvent: b
            }), a;
        },
        register: function(a) {
            var c = a.defaults || {};
            return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, 
            this.gestures.push(a), this.gestures.sort(function(a, b) {
                return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
            }), this.gestures;
        }
    }, d.gestures = d.gestures || {}, d.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function(a, b) {
            switch (a.eventType) {
              case d.EVENT_START:
                clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function() {
                    "hold" == d.detection.current.name && b.trigger("hold", a);
                }, b.options.hold_timeout);
                break;

              case d.EVENT_MOVE:
                a.distance > b.options.hold_threshold && clearTimeout(this.timer);
                break;

              case d.EVENT_END:
                clearTimeout(this.timer);
            }
        }
    }, d.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 600,
            tap_max_distance: 8,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function(a, b) {
            if (a.eventType == d.EVENT_END) {
                var c = d.detection.previous, e = !1;
                if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance) return;
                c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), 
                e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a));
            }
        }
    }, d.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .2
        },
        handler: function(a, b) {
            if (a.eventType == d.EVENT_END) {
                if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches) return;
                (a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), 
                b.trigger(this.name + a.direction, a));
            }
        }
    }, d.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 3,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 15
        },
        triggered: !1,
        handler: function(a, c) {
            if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), 
            this.triggered = !1, b;
            if (!(c.options.drag_max_touches > 0 && a.touches.length > c.options.drag_max_touches)) switch (a.eventType) {
              case d.EVENT_START:
                this.triggered = !1;
                break;

              case d.EVENT_MOVE:
                if (a.distance < c.options.drag_min_distance && d.detection.current.name != this.name) return;
                d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || c.options.drag_lock_to_axis && c.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
                var e = d.detection.current.lastEvent.direction;
                a.drag_locked_to_axis && e !== a.direction && (a.direction = d.utils.isVertical(e) ? 0 > a.deltaY ? d.DIRECTION_UP : d.DIRECTION_DOWN : 0 > a.deltaX ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), 
                this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), 
                c.trigger(this.name + a.direction, a), (c.options.drag_block_vertical && d.utils.isVertical(a.direction) || c.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
                break;

              case d.EVENT_END:
                this.triggered && c.trigger(this.name + "end", a), this.triggered = !1;
            }
        }
    }, d.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function(a, c) {
            if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), 
            this.triggered = !1, b;
            if (!(2 > a.touches.length)) switch (c.options.transform_always_block && a.preventDefault(), 
            a.eventType) {
              case d.EVENT_START:
                this.triggered = !1;
                break;

              case d.EVENT_MOVE:
                var e = Math.abs(1 - a.scale), f = Math.abs(a.rotation);
                if (c.options.transform_min_scale > e && c.options.transform_min_rotation > f) return;
                d.detection.current.name = this.name, this.triggered || (c.trigger(this.name + "start", a), 
                this.triggered = !0), c.trigger(this.name, a), f > c.options.transform_min_rotation && c.trigger("rotate", a), 
                e > c.options.transform_min_scale && (c.trigger("pinch", a), c.trigger("pinch" + (1 > a.scale ? "in" : "out"), a));
                break;

              case d.EVENT_END:
                this.triggered && c.trigger(this.name + "end", a), this.triggered = !1;
            }
        }
    }, d.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function(a, c) {
            return c.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), 
            b) : (c.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && c.trigger(this.name, a), 
            b);
        }
    }, d.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function(a, b) {
            a.eventType == d.EVENT_END && b.trigger(this.name, a);
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : (a.Hammer = d, 
    "function" == typeof a.define && a.define.amd && a.define("hammer", [], function() {
        return d;
    }));
}(this), function() {
    var a, b, c, d, e, f, g, h, i, j, k, l;
    b = angular.module("App", [ "ngRoute", "ngResource", "ngAnimate", "hmTouchevents", "pasvaz.bindonce" ]), 
    b.config(function(a) {
        return a.enabled(!1);
    }), b.constant("Config", {
        api_url: "http://api.surfo.ru/index.php"
    }), b.config([ "$routeProvider", function(a) {
        return a.when("/", {
            templateUrl: "views/menu.html",
            depth: 1
        }).when("/category/:cat", {
            templateUrl: "views/category.html",
            depth: 2
        }).otherwise({
            redirectTo: "/"
        });
    } ]), b.controller("CategoryController", [ "$scope", function(a) {
        return a;
    } ]), b.controller("HeaderController", [ "$scope", "$rootScope", "Menu", "$routeParams", "$location", function(a, b, c, d, e) {
        var f;
        return f = !1, a.menu = {}, a.top = function() {
            return f ? void 0 : top.window.scroll(0, 0);
        }, a.back = function() {
            return e.path("/");
        }, c.getHeaderMenu(d.cat, function(b) {
            return a.menu = b;
        }), b.$on("zoom:close", function() {
            return f = !0, setTimeout(function() {
                return f = !1;
            }, 2e3);
        });
    } ]), b.controller("MenuController", [ "$scope", "Menu", "$location", function(a, b, c) {
        return "/" === c.path() && j ? c.path("/category/favorite") : (a.menu = [], a.showed = null, 
        a.show = function(b) {
            return a.showed = a.showed === b ? null : b;
        }, a.openCategory = function(a) {
            return c.path("/category/" + a);
        }, b.get(function(b) {
            return a.menu = b;
        }));
    } ]), b.controller("PostsController", [ "$scope", "Posts", "$routeParams", "ReadMore", "Zoom", "Share", function(a, b, c, d, e, f) {
        var g, h, i;
        return g = c.cat, i = "favorite" === g, i || (h = b.getIterator(g)), i && (h = b.getFavoriteIterator()), 
        a.posts = [], a.loading = !1, a.finished = !1, a.isFav = i, a.openImage = function(a) {
            return e.open(a);
        }, a.readMore = function(a) {
            return d.parse(a);
        }, a.share = function(a) {
            return f.open(a);
        }, a.loadMore = function() {
            return a.loading || a.finished ? void 0 : (a.loading = !0, h(function(b) {
                return a.finished = 0 === b.length, a.posts = a.posts.concat(b), a.loading = !1;
            }));
        }, a.loadMore(), angular.element(window).bind("scroll", function() {
            var b, c;
            if (!a.loading && !a.finished) return c = pageYOffset || document.documentElement.scrollTop, 
            b = 2.5 * window.innerHeight, c + b >= document.body.scrollHeight && (a.loadMore(), 
            !a.$$phase) ? a.$digest() : void 0;
        });
    } ]), b.controller("ShareController", [ "$scope", "$rootScope", "Zoom", function(a, b, c) {
        return a.opened = !1, a.post = null, a.close = function() {
            return a.opened = !1, c.close();
        }, a.share = function(b) {
            return window.open("http://surfo.ru/share/" + a.post + "?site=" + b, "_system"), 
            a.close();
        }, b.$on("share:open", function(b, c) {
            return a.opened = !0, a.post = c;
        }), b.$on("share:close", function() {
            return a.opened = !1, a.post = null;
        });
    } ]), b.controller("ZoomController", [ "$scope", "$rootScope", "Zoom", function(a, b, c) {
        return a.opened = !1, a.image = null, a.close = function() {
            return a.opened = !1, c.close();
        }, a.download = function() {
            var b, c, d;
            try {
                return c = new FileTransfer(), d = a.image.split("/")[a.image.split("/").length - 1], 
                c.download(a.image, "file:///sdcard/surfo/" + d, function() {
                    return alert("Изображение сохранено в /surfo/" + d);
                }, function() {
                    return alert("Ошибка сохранения изображения :(");
                });
            } catch (e) {
                return b = e, alert("Ошибка: " + b.toString());
            }
        }, b.$on("zoom:open", function(b, c) {
            return a.opened = !0, a.image = c, setTimeout(function() {
                return l("image-wrap");
            }, 100);
        }), b.$on("zoom:close", function() {
            return document.querySelector("#image-wrap img").setAttribute("style", ""), a.opened = !1, 
            a.image = null;
        });
    } ]), l = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n;
        return n = document.getElementById(a), l = n.querySelector("img"), c = Hammer(n, {
            transform_always_block: !0,
            transform_min_scale: 1,
            drag_block_horizontal: !0,
            drag_block_vertical: !0,
            drag_min_distance: 0
        }), j = 0, k = 0, m = 1, g = void 0, e = 0, f = 0, h = 0, i = 0, d = +new Date(), 
        b = 400, c.on("touch drag transform dragend", function(a) {
            var c;
            switch (a.type) {
              case "touch":
                g = m;
                break;

              case "drag":
                if (+new Date() - d < b) break;
                j = e + a.gesture.deltaX, k = f + a.gesture.deltaY, j > h && (j = h), -h > j && (j = -h), 
                k > i && (k = i), -i > k && (k = -i);
                break;

              case "transform":
                d = +new Date(), m = Math.max(1, Math.min(g * a.gesture.scale, 5)), i = Math.ceil((m - 1) * l.clientHeight / 2), 
                h = Math.ceil((m - 1) * l.clientWidth / 2), j > h && (j = h), -h > j && (j = -h), 
                k > i && (k = i), -i > k && (k = -i);
                break;

              case "dragend":
                if (+new Date() - d < b) break;
                e = j, f = k;
            }
            return c = "translate3d(" + j + "px," + k + "px, 0) scale3d(1, 1, 1)", 1 !== m && (c = "translate3d(" + j + "px," + k + "px, 0) scale3d(" + m + "," + m + ", 1)"), 
            l.style.transform = c, l.style.mozTransform = c, l.style.webkitTransform = c;
        });
    }, b.directive("emuleFixed", function() {
        return function(a, b) {
            var c, d, e;
            return d = b[0].getElementsByClassName("header")[0], c = b[0].getElementsByClassName("content")[0], 
            e = function() {
                var a, b;
                return a = window.innerHeight, b = d.clientHeight, c.style.height = a - b + "px";
            }, e(), window.addEventListener("resize", e), setInterval(e, 500);
        };
    }), b.directive("gif", [ "$parse", function(a) {
        return function(b, c, d) {
            var e, f;
            return e = a(d.gif)(b), c = c[0], c.setAttribute("src", e.preview), f = !0, Hammer(c).on("tap", function() {
                return c.setAttribute("src", f ? e.url : e.preview), f = !f;
            });
        };
    } ]), b.directive("like", [ "$parse", "Like", function(a, b) {
        var c, d, e;
        return e = function(a, d) {
            return b.add(a), c(d, "icon-heart", "icon-heart-empty");
        }, d = function(a, d) {
            return b.remove(a), c(d, "icon-heart-empty", "icon-heart");
        }, c = function(a, b, c) {
            return a.addClass(b), a.removeClass(c);
        }, {
            restrict: "E",
            template: "<span></span>",
            replace: !0,
            link: function(f, g, h) {
                var i;
                return i = a(h.post)(f), b.is(i.id) ? c(g, "icon-heart", "icon-heart-empty") : c(g, "icon-heart-empty", "icon-heart"), 
                Hammer(g.parent()[0]).on("tap", function() {
                    return b.is(i.id) ? d(i.id, g) : e(i, g);
                });
            }
        };
    } ]), b.directive("bindlinks", function() {
        return function(a, b) {
            return b = b[0], setTimeout(function() {
                var a, c, d, e, f;
                for (e = b.querySelectorAll(".link, .main-link"), f = [], c = 0, d = e.length; d > c; c++) a = e[c], 
                f.push(a.addEventListener("click", function(b) {
                    return b.preventDefault(), window.open(a.getAttribute("href"), "_system"), !1;
                }));
                return f;
            }, 300);
        };
    }), b.directive("menuTabletSize", [ "$rootScope", function(a) {
        return function(b, c) {
            var d;
            return d = null, a.$watch("TABLET", function(a) {
                return a ? (clearInterval(d), setTimeout(function() {
                    var a, b, e;
                    return a = c[0].getElementsByClassName("header")[0], b = c[0].getElementsByClassName("tablet-menu")[0], 
                    e = function() {
                        return a && b ? b.style.height = window.innerHeight - a.clientHeight + "px" : void 0;
                    }, window.addEventListener("resize", e), d = setInterval(e, 400), e();
                }, 200)) : void 0;
            });
        };
    } ]), b.directive("setBackground", [ "$rootScope", "Menu", "$routeParams", "Color", function(a, b, c, d) {
        return function(e, f) {
            return a.$on("$routeChangeSuccess", function() {
                return f[0].style.backgroundColor = null, b.getHeaderMenu(c.cat, function(a) {
                    var b;
                    return b = d.lighten(a.colors, .9), f[0].style.backgroundColor = b;
                });
            });
        };
    } ]), b.directive("whenScrolled", function() {
        return function(a, b, c) {
            var d;
            return d = b[0], b.bind("scroll", function() {
                var b;
                return b = 2.8 * document.body.clientHeight, d.scrollTop + d.offsetHeight >= d.scrollHeight - b ? a.$apply(c.whenScrolled) : void 0;
            });
        };
    }), b.filter("dateago", function() {
        return function(a) {
            var b, c, d;
            return b = new Date(1e3 * a), d = new Date(), c = (d - b) / 1e3, 60 > c ? c + " сек назад" : 3600 > c ? ~~(c / 60) + " мин назад" : 86400 > c ? ~~(c / 3600) + " ч назад" : 2592e3 > c ? ~~(c / 3600 / 24) + " д назад" : ~~(c / 30 / 24 / 3600) + " мес назад";
        };
    }), b.run(function(a, b) {
        return a.direction = "ltr", a.$on("$routeChangeStart", function(b, c, d) {
            return a.direction = "rtl", d && c && d.depth > c.depth ? a.direction = "ltr" : void 0;
        }), a.back = function() {
            return b.history.back();
        };
    }), b.run([ "Zoom", "Share", function(a, b) {
        return document.addEventListener("backbutton", function(c) {
            return a.opened() || b.opened() ? (a.close(), b.close(), "function" == typeof c.preventDefault && c.preventDefault(), 
            !1) : !0;
        }, !1);
    } ]), j = !1, function() {
        var a;
        return a = document.querySelector(".check-tablet"), j = 0 !== a.clientWidth, window.addEventListener("resize", function() {
            return j = 0 !== a.clientWidth;
        });
    }(), b.run([ "$rootScope", function(a) {
        var b;
        return b = document.querySelector(".check-tablet"), a.TABLET = 0 !== b.clientWidth, 
        window.addEventListener("resize", function() {
            var c;
            return c = 0 !== b.clientWidth, c !== a.TABLET ? (a.TABLET = c, a.$digest()) : void 0;
        });
    } ]), b.service("Api", [ "$http", "Config", a = function() {
        function a(a, b) {
            this.$http = a, this.Config = b;
        }
        return a.prototype._serilize = function(a, b) {
            var c, d;
            null == b && (b = "?");
            for (c in a) d = a[c], b += "" + encodeURIComponent(c) + "=" + encodeURIComponent(d) + "&";
            return b.slice(0, b.length - 1);
        }, a.prototype.get = function(a, b, c) {
            return b.method = a, b.callback = "JSON_CALLBACK", this.$http.jsonp(this.Config.api_url + this._serilize(b)).success(c).error(function() {
                return c({
                    error: "Ошибка при загрузке"
                });
            });
        }, a;
    }() ]), b.service("Color", c = function() {
        function a() {}
        return a.prototype.lighten = function(a, b) {
            var c, d, e, f, g, h;
            return f = parseInt(a.slice(1), 16), h = 0 > b ? 0 : 255, g = 0 > b ? -1 * b : b, 
            e = f >> 16, d = f >> 8 & 255, c = 255 & f, "#" + (16777216 + 65536 * (Math.round((h - e) * g) + e) + 256 * (Math.round((h - d) * g) + d) + (Math.round((h - c) * g) + c)).toString(16).slice(1);
        }, a;
    }()), b.service("Like", [ "Store", d = function() {
        function a(a) {
            this.Store = a, this.store = this.Store.get("liked2") || [], angular.isArray(this.store) || (this.store = []);
        }
        return a.prototype.store = [], a.prototype.save = function() {
            return this.Store.set("liked2", this.store.filter(function(a) {
                return null != (null != a ? a.id : void 0);
            }));
        }, a.prototype.is = function(a) {
            var b, c, d, e;
            for (e = this.store, c = 0, d = e.length; d > c; c++) if (b = e[c], +b.id === +a) return !0;
            return !1;
        }, a.prototype.add = function(a) {
            return this.store.push(a), this.save();
        }, a.prototype.get = function() {
            return this.store;
        }, a.prototype.remove = function(a) {
            return this.store = this.store.filter(function(b) {
                return +b.id !== +a;
            }), this.save();
        }, a;
    }() ]), b.service("Menu", [ "Api", "Store", e = function() {
        function a(a, b) {
            this.Api = a, this.Store = b, this.localStore = this.Store.get("menu2") || null;
        }
        return a.prototype.localStore = null, a.prototype.serverStore = null, a.prototype.callbacks = [], 
        a.prototype.loading = !1, a.prototype.favorite = {
            colors: "#8E3D8D",
            name: "Избранное"
        }, a.prototype.get = function(a) {
            var b = this;
            return this.serverStore ? a(this.serverStore) : (this.localStore && a(this.localStore), 
            this.callbacks.push(a), this.loading ? void 0 : (this.loading = !0, this.Api.get("menu", {}, function(a) {
                var c, d, e, f, g;
                for (b.set(a.result), f = b.callbacks, g = [], d = 0, e = f.length; e > d; d++) c = f[d], 
                g.push(c(a.result));
                return g;
            })));
        }, a.prototype.getHeaderMenu = function(a, b) {
            return "favorite" === a ? b(this.favorite) : this.get(function(c) {
                var d, e, f, g, h;
                for (h = [], f = 0, g = c.length; g > f; f++) d = c[f], h.push(function() {
                    var c, f, g, h;
                    for (g = d.submenu, h = [], c = 0, f = g.length; f > c; c++) e = g[c], h.push(e.id === a ? b({
                        colors: d.colors,
                        name: e.name
                    }) : void 0);
                    return h;
                }());
                return h;
            });
        }, a.prototype.set = function(a) {
            return this.serverStore = a, this.Store.set("menu2", a);
        }, a;
    }() ]), b.service("Posts", [ "Api", "Like", f = function() {
        function a(a, b) {
            this.Api = a, this.Like = b;
        }
        return a.prototype.LIMIT_LOAD = 30, a.prototype.LIMIT_SHOW = 8, a.prototype.MIN_CACHE = 20, 
        a.prototype.getIterator = function(a) {
            var b, c, d = this;
            return b = {
                iter: 0,
                cache: [],
                loading: !1
            }, c = {
                category: a,
                limit: this.LIMIT_LOAD,
                offset_id: 0
            }, function(a) {
                var e, f;
                return e = function() {
                    var c;
                    return c = b.cache.slice(0, d.LIMIT_SHOW), b.cache = b.cache.slice(d.LIMIT_SHOW), 
                    a(c);
                }, f = function(a) {
                    return null == a && (a = function() {}), b.loading = !0, d.Api.get("posts", c, function(d) {
                        return d = d.result, b.iter = b.iter + 1, b.loading = !1, c.offset_id = d[d.length - 1].id, 
                        b.cache = b.cache.concat(d), a();
                    });
                }, b.cache.length ? (b.cache.length < d.MIN_CACHE && setTimeout(f, 20), e()) : f(e);
            };
        }, a.prototype.getFavoriteIterator = function() {
            var a, b = this;
            return a = {
                cache: this.Like.get().reverse()
            }, function(c) {
                var d;
                return d = a.cache.slice(0, b.LIMIT_SHOW), a.cache = a.cache.slice(b.LIMIT_SHOW), 
                c(d);
            };
        }, a;
    }() ]), b.service("ReadMore", [ g = function() {
        function a() {}
        return a.prototype.LENGTH = 200, a.prototype.SECOND_MIN = 100, a.prototype.DELIM = "\n", 
        a.prototype.DELIM2 = ".", a.prototype.parse = function(a) {
            var b, c, d, e, f, g;
            if (a.length < this.LENGTH) return {
                first: a,
                all: a
            };
            for (e = "", c = this.DELIM, b = a.split(c), 1 === b.length && (c = this.DELIM2, 
            b = b[0].split(c)), f = 0, g = b.length; g > f && (d = b[f], e += d + c, !(e.length > this.LENGTH)); f++) ;
            return a.length - e.length < this.SECOND_MIN ? {
                first: a,
                all: a
            } : {
                first: e,
                all: a
            };
        }, a;
    }() ]), b.service("Share", [ "$rootScope", h = function() {
        function a(a) {
            this.$rootScope = a;
        }
        return a.prototype.opened = function() {
            return this.$rootScope.shareOpened;
        }, a.prototype.open = function(a) {
            return this.$rootScope.$emit("share:open", a), this.$rootScope.shareOpened = !0;
        }, a.prototype.close = function() {
            return this.$rootScope.$emit("share:close"), this.$rootScope.shareOpened = !1;
        }, a;
    }() ]), b.service("Store", i = function() {
        function a() {}
        return a.prototype.get = function(a, b) {
            var c;
            null == b && (b = !0);
            try {
                return b ? JSON.parse(localStorage.getItem(a)) : localStorage.getItem(a);
            } catch (d) {
                return c = d, null;
            }
        }, a.prototype.set = function(a, b) {
            return localStorage.setItem(a, JSON.stringify(b));
        }, a;
    }()), b.service("Zoom", [ "$rootScope", k = function() {
        function a(a) {
            this.$rootScope = a;
        }
        return a.prototype.opened = function() {
            return this.$rootScope.zoomOpened;
        }, a.prototype.open = function(a) {
            return this.$rootScope.$emit("zoom:open", a), this.$rootScope.zoomOpened = !0;
        }, a.prototype.close = function() {
            return this.$rootScope.$emit("zoom:close"), this.$rootScope.zoomOpened = !1;
        }, a;
    }() ]);
}.call(this), angular.module("App").run([ "$templateCache", function(a) {
    "use strict";
    a.put("views/category.html", '<div id="category" ng-controller="CategoryController" menu-tablet-size>\n   <div class="header" ng-style="{background:menu.colors}" ng-controller="HeaderController">\n      <div class="icon back" hm-tap="back()">\n         <span class="icon-angle-left"></span>\n      </div>\n      <div class="name" ng-bind="menu.name"></div>\n      <div class="icon top" hm-tap="top()">\n         <span class="icon-angle-up"></span>\n      </div>\n   </div>\n\n   <div class="header-push"></div>\n\n   <div class="content" ng-controller="PostsController">\n      <div class="tablet-menu" ng-if="TABLET" ng-include="\'views/menu.html\'"></div>\n      <div class="posts">\n         <div class="empty-res" ng-if="isFav && !posts.length">\n            Вы еще не добавили ни одного поста в Избранное!\n         </div>\n         <div class="post" bindonce bindlinks ng-repeat="post in posts">\n            <div class="text-container" bo-if="post.text" ng-init="text=readMore(post.text)">\n               <span ng-bind-html="text.first"></span>\n               <div class="read-more" ng-click="text.first=text.all" ng-if="text.all!=text.first">Читать далее</div>\n            </div>\n            <div class="photos-container" bo-if="post.photos.length" ng-init="showedAll=(post.photos.length<2)">\n               <img ng-repeat="(k, photo) in post.photos"\n                    ng-if="k == 0 || showedAll"\n                    hm-tap="openImage(photo.big)"\n                    bo-src="photo.small">\n\n               <div ng-click="showedAll=1"\n                    class="show-more"\n                    ng-show="!showedAll">Показать все изображения</div>\n            </div>\n            <div class="animation-container" bo-if="post.gifs.length" bo-class="{few:post.gifs.length>1}">\n               <img ng-repeat="(k, gif) in post.gifs" gif="gif">\n            </div>\n            <a bo-if="post.links.length"\n                 class="main-link"\n                 bo-href="post.links[0].url"\n                 bo-text="post.links[0].title"></a>\n            <div class="group-container">\n               <div class="avatar">\n                  <img bo-src="post.group.avatar">\n               </div>\n               <div class="name">\n                  <div class="title" bo-text="post.group.name"></div>\n                  <div class="date" bo-text="post.date | dateago"></div>\n               </div>\n               <div class="icon share" hm-tap="share(post.id)">\n                  <span class="icon-share-1"></span>\n               </div>\n               <div class="icon like">\n                  <like post="post"></like>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n\n   <div id="zoom" ng-controller="ZoomController" ng-show="opened" emule-fixed>\n      <div class="header">\n         <div class="icon download" hm-tap="download()">\n            <span class="icon-download-1"></span>\n         </div>\n         <div class="name">Изображение</div>\n         <div class="icon close" hm-tap="close()">\n            <span class="icon-cancel-1"></span>\n         </div>\n      </div>\n      <div class="content">\n         <div id="image-wrap">\n            <img ng-src="{{ image }}">\n         </div>\n      </div>\n   </div>\n\n   <div id="share" ng-controller="ShareController" ng-show="opened">\n      <div class="background" hm-tap="close()"></div>\n      <ul class="menu">\n         <li hm-tap="share(\'vk\')">\n            <span class="icon-vkontakte"></span> Вконтакте\n         </li>\n         <li hm-tap="share(\'fb\')">\n            <span class="icon-facebook"></span> Фейсбук\n         </li>\n         <li hm-tap="share(\'tw\')">\n            <span class="icon-twitter"></span> Твиттер\n         </li>\n      </ul>\n   </div>\n</div>'), 
    a.put("views/menu.html", '<div ng-controller="MenuController" id="menu">\n   <div class="button-container" bindonce ng-repeat="el in menu" bo-style="{background:el.colors}">\n      <div class="button" hm-tap="show(el.id)">\n         <span class="icon" bo-class="\'menu-icon-\'+el.icon"></span>\n         <span bo-text="el.name"></span>\n      </div>\n\n      <div class="submenu" ng-class="{showed: el.id === showed}">\n         <div bindonce ng-repeat="sel in el.submenu" bo-text="sel.name" hm-tap="openCategory(sel.id)"></div>\n      </div>\n   </div>\n\n   <div class="button-container favorite">\n      <div class="button favorite" hm-tap="openCategory(\'favorite\')">\n         <span class="icon menu-icon-fav"></span>\n         <span>Избранное</span>\n      </div>\n   </div>\n</div>\n\n\n');
} ]);