! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    function n(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null == n) return;
            var r, o, l = [],
                a = !0,
                i = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); a = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (i) throw o
                }
            }
            return l
        }(e, t) || r(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t, n) {
        if (n) {
            var r = e.getElementsByClassName(t)[0];
            r && (r.textContent = n)
        }
    }

    function a(e, t) {
        for (var r = 0, o = Object.entries(t); r < o.length; r++) {
            var a = n(o[r], 2);
            l(e, a[0], a[1])
        }
    }! function() {
        var e, t = function(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0,
                        l = function() {};
                    return {
                        s: l,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: l
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
                u = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    u = !0, a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (u) throw a
                    }
                }
            }
        }(document.getElementsByClassName("cm-contact-form"));
        try {
            for (t.s(); !(e = t.n()).done;) {
                e.value.onsubmit = function(e) {
                    var t, n, r, o, l, i, u, s;
                    e.preventDefault();
                    var f = e.target,
                        c = null === (t = f.getElementsByClassName("firstName")[0]) || void 0 === t ? void 0 : t.value,
                        m = null === (n = f.getElementsByClassName("lastName")[0]) || void 0 === n ? void 0 : n.value,
                        d = null === (r = f.getElementsByClassName("email")[0]) || void 0 === r ? void 0 : r.value,
                        y = null === (o = f.getElementsByClassName("telephone")[0]) || void 0 === o ? void 0 : o.value,
                        v = null === (l = f.getElementsByClassName("consent_check")[0]) || void 0 === l ? void 0 : l.checked,
                        p = (null === (i = f.getElementsByClassName("list_id")[0]) || void 0 === i ? void 0 : i.value) || null;
                    jQuery.post(null === (u = ce4wp_form_submit_data) || void 0 === u ? void 0 : u.url, {
                        action: "ce4wp_form_submission",
                        nonce: null === (s = ce4wp_form_submit_data) || void 0 === s ? void 0 : s.nonce,
                        first_name: c,
                        last_name: m,
                        email: d,
                        telephone: y,
                        consent: v,
                        list_id: p
                    }).done((function() {
                        var e, t = f.parentElement,
                            n = null === (e = t.getElementsByClassName("onSubmissionSetting")[0]) || void 0 === e ? void 0 : e.value;
                        if ("redirect" === n) {
                            var r, o = new RegExp("^(https?)://"),
                                l = null === (r = t.getElementsByClassName("redirect")[0]) || void 0 === r ? void 0 : r.value;
                            o.test(l) || (l = "https://" + l), window.location.href = l
                        } else {
                            f.style.visibility = "hidden", "summary" === n && a(t, {
                                firstNameSummary: c ? c + " " : null,
                                lastNameSummary: m,
                                telephoneSummary: y,
                                emailSummary: d
                            }), t.getElementsByClassName("onSubmission")[0].style.display = "block"
                        }
                    }))
                }
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
    }()
}]);