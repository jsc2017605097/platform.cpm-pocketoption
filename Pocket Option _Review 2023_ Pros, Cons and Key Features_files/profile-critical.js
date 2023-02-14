!(function (e) {
  var t = {};
  function i(s) {
    if (t[s]) return t[s].exports;
    var n = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            s,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 745));
})({
  188: function (e, t) {
    window.throttle = function (e, t) {
      var i,
        s,
        n = !1;
      return function a() {
        if (n) return (i = arguments), (s = this), null;
        e.apply(this, arguments),
          (n = !0),
          setTimeout(function () {
            (n = !1), i && (a.apply(s, i), (i = s = null));
          }, t);
      };
    };
  },
  189: function (e, t, i) {
    !(function (e, t) {
      var s = 768,
        n = 992,
        a =
          (void 0 !== t.height ? t.height : t.body.offsetHeight,
          function () {
            return Math.max(
              t.documentElement.clientWidth || 0,
              e.innerWidth || 0
            );
          }),
        r = t.querySelector("#broker-profile"),
        o = t.querySelector(".accept-cookie"),
        l = t.querySelector("header.header"),
        d = t.querySelector(".broker__navigation"),
        c = t.querySelector("#big-broker-header"),
        h = t.querySelector("#small-broker-header"),
        u = t.querySelector("#small-broker-header .broker__adv-row-position"),
        p = t.querySelector("#mobile-award"),
        m = t.querySelector("#mobile-rating"),
        f = t.querySelector(".broker__author-info_wrapper"),
        v = t.querySelector(".broker__button_wrapper.for-scrolled-state"),
        g = t.querySelectorAll(".broker__nav-item, .content-menu__item"),
        b =
          (t.querySelectorAll(".broker__container"),
          t.querySelector(".breadcrumbs-wrapper")),
        y = t.querySelector(".broker__author-info_wrapper"),
        w = new (0, i(5).default)(t.querySelector(".swiper-container"), {
          slidesPerView: "auto",
          navigation: {
            nextEl: ".nav-swiper-button-next",
            prevEl: ".nav-swiper-button-prev",
          },
        }),
        E = function (e) {
          return e.forEach(function (e) {
            return e.classList.remove("is-active");
          });
        };
      g.length &&
        g.forEach(function (i) {
          i.addEventListener("click", function (s) {
            s.preventDefault();
            var n = t.querySelector("#".concat(i.dataset.target)),
              a = 200 < t.documentElement.scrollTop ? 120 : 400,
              r = n.offsetTop - a;
            e.scrollTo({ top: r, behavior: "smooth" });
          });
        });
      var S = function () {
          a() < s &&
            (0 == t.documentElement.scrollTop &&
              ((c.hidden = !0),
              (h.style.display = "flex"),
              (b.style.top = 40 + x() + "px"),
              p && (p.hidden = !1),
              (m.hidden = !1),
              (f.hidden = !1),
              (b.hidden = !1),
              (h.hidden = !1),
              (u.hidden = !1)),
            d && d.classList.add("is-fixed"),
            0 < t.documentElement.scrollTop && (f.hidden = !0),
            200 < t.documentElement.scrollTop &&
              (p && (p.hidden = !0),
              (m.hidden = !0),
              (u.hidden = !0),
              (b.hidden = !0)),
            200 < t.documentElement.scrollTop
              ? v && (v.style.display = "block")
              : v && (v.style.display = "none")),
            a() > s &&
              (0 == t.documentElement.scrollTop &&
                ((c.hidden = !1),
                (h.style.display = "none"),
                v && (v.style.display = "none"),
                d && d.classList.remove("is-fixed")),
              0 < t.documentElement.scrollTop && (y.hidden = !0),
              200 < t.documentElement.scrollTop &&
                ((c.hidden = !0),
                (h.style.display = "flex"),
                v && (v.style.display = "none"),
                d && d.classList.add("is-fixed")));
          var i = l.clientHeight;
          if (
            (e.scrollY <= i + b.clientHeight && (i += b.clientHeight),
            (h.style.top = i + x() + "px"),
            d)
          ) {
            var o = i + h.clientHeight + x() - 1;
            (d.style.top = o + "px"), (d.style.display = "block");
          }
          a() > s
            ? 0 !== t.documentElement.scrollTop
              ? (r.style.paddingTop = i + h.clientHeight + "px")
              : (r.style.paddingTop = l.clientHeight + "px")
            : (r.style.paddingTop = i + h.clientHeight - 17 + "px"),
            w.update(),
            d &&
              (function () {
                for (var e = null, i = 0, s = "", r = 0; r < g.length; r += 1) {
                  var o = g[r].getAttribute("href").substring(1);
                  a() < n && "analysis" === o && (o = "analysis-mobile");
                  var c = t.getElementById(o);
                  if (
                    !(
                      (c
                        ? c.getBoundingClientRect().top -
                          l.clientHeight -
                          h.clientHeight -
                          d.clientHeight
                        : 0) <= 0
                    )
                  ) {
                    E(g),
                      e &&
                        (e.classList.add("is-active"),
                        (s = "#" + g[i].dataset.target),
                        w.slideTo(i));
                    break;
                  }
                  (e = g[r]),
                    (i = r),
                    r === g.length - 1 &&
                      (E(g),
                      g[r].classList.add("is-active"),
                      (s = "#" + g[r].dataset.target),
                      w.slideTo(r));
                }
                s && history.replaceState("", "", s);
              })();
        },
        x = function () {
          return o ? o.clientHeight : 0;
        };
      (d || h) &&
        (e.addEventListener("scroll", throttle(S, 60)),
        e.addEventListener("resize", throttle(S, 200)),
        setTimeout(S, 0));
    })(window, document);
  },
  190: function (e, t) {
    !(function () {
      var e = document.querySelectorAll(".tooltip-activator");
      if (e.length < 0) return !1;
      var t = document.querySelector(".tooltip-as-modal-overlay"),
        i = document.querySelectorAll(".tooltip-as-modal-wrap");
      function s() {
        i.forEach(function (e) {
          return e.classList.remove("is--active");
        }),
          t.classList.remove("is--active");
      }
      function n(e) {
        e.preventDefault(),
          e.stopPropagation(),
          e.target
            .closest(".tooltip-as-modal-wrap")
            .classList.remove("is--active"),
          t.classList.remove("is--active"),
          e.target.removeEventListener("click", n);
      }
      function a(e) {
        e.stopPropagation(),
          e.preventDefault(),
          s(),
          t.classList.add("is--active");
        var i = e.target,
          a = document.querySelector(i.dataset.target);
        a.querySelector(".tooltip-info__close").addEventListener("click", n),
          a.classList.add("is--active");
      }
      t.addEventListener("click", s),
        e.forEach(function (e) {
          return e.addEventListener("click", a);
        }),
        (window.onActivatorClick = a);
    })();
  },
  2: function (e, t, i) {
    /*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
    var s;
    window,
      (s = function () {
        return (function (e) {
          var t = {};
          function i(s) {
            if (t[s]) return t[s].exports;
            var n = (t[s] = { i: s, l: !1, exports: {} });
            return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
          }
          return (
            (i.m = e),
            (i.c = t),
            (i.d = function (e, t, s) {
              i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: s });
            }),
            (i.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (e, t) {
              if ((1 & t && (e = i(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var s = Object.create(null);
              if (
                (i.r(s),
                Object.defineProperty(s, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var n in e)
                  i.d(
                    s,
                    n,
                    function (t) {
                      return e[t];
                    }.bind(null, n)
                  );
              return s;
            }),
            (i.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = "/public/assets/scripts/"),
            i((i.s = 4))
          );
        })([
          function (e, t, i) {
            "use strict";
            var s = function (e) {
                return (
                  (function (e) {
                    return !!e && "object" == typeof e;
                  })(e) &&
                  !(function (e) {
                    var t = Object.prototype.toString.call(e);
                    return (
                      "[object RegExp]" === t ||
                      "[object Date]" === t ||
                      (function (e) {
                        return e.$$typeof === n;
                      })(e)
                    );
                  })(e)
                );
              },
              n =
                "function" == typeof Symbol && Symbol.for
                  ? Symbol.for("react.element")
                  : 60103;
            function a(e, t) {
              return !1 !== t.clone && t.isMergeableObject(e)
                ? d(((i = e), Array.isArray(i) ? [] : {}), e, t)
                : e;
              var i;
            }
            function r(e, t, i) {
              return e.concat(t).map(function (e) {
                return a(e, i);
              });
            }
            function o(e) {
              return Object.keys(e).concat(
                (function (e) {
                  return Object.getOwnPropertySymbols
                    ? Object.getOwnPropertySymbols(e).filter(function (t) {
                        return e.propertyIsEnumerable(t);
                      })
                    : [];
                })(e)
              );
            }
            function l(e, t, i) {
              var s = {};
              return (
                i.isMergeableObject(e) &&
                  o(e).forEach(function (t) {
                    s[t] = a(e[t], i);
                  }),
                o(t).forEach(function (n) {
                  (function (e, t) {
                    try {
                      return (
                        t in e &&
                        !(
                          Object.hasOwnProperty.call(e, t) &&
                          Object.propertyIsEnumerable.call(e, t)
                        )
                      );
                    } catch (e) {
                      return !1;
                    }
                  })(e, n) ||
                    (i.isMergeableObject(t[n]) && e[n]
                      ? (s[n] = (function (e, t) {
                          if (!t.customMerge) return d;
                          var i = t.customMerge(e);
                          return "function" == typeof i ? i : d;
                        })(n, i)(e[n], t[n], i))
                      : (s[n] = a(t[n], i)));
                }),
                s
              );
            }
            function d(e, t, i) {
              ((i = i || {}).arrayMerge = i.arrayMerge || r),
                (i.isMergeableObject = i.isMergeableObject || s),
                (i.cloneUnlessOtherwiseSpecified = a);
              var n = Array.isArray(t);
              return n === Array.isArray(e)
                ? n
                  ? i.arrayMerge(e, t, i)
                  : l(e, t, i)
                : a(t, i);
            }
            d.all = function (e, t) {
              if (!Array.isArray(e))
                throw new Error("first argument should be an array");
              return e.reduce(function (e, i) {
                return d(e, i, t);
              }, {});
            };
            var c = d;
            e.exports = c;
          },
          function (e, t, i) {
            "use strict";
            (function (e, s) {
              var n,
                a = i(3);
              n =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : s;
              var r = Object(a.a)(n);
              t.a = r;
            }.call(this, i(5), i(6)(e)));
          },
          function (e, t, i) {
            /*!
             * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
             *
             * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
             * All Rights Reserved. Apache Software License 2.0
             *
             * http://www.apache.org/licenses/LICENSE-2.0
             */
            e.exports = (function (e) {
              var t = {};
              function i(s) {
                if (t[s]) return t[s].exports;
                var n = (t[s] = { i: s, l: !1, exports: {} });
                return (
                  e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
                );
              }
              return (
                (i.m = e),
                (i.c = t),
                (i.d = function (e, t, s) {
                  i.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: s });
                }),
                (i.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (i.t = function (e, t) {
                  if ((1 & t && (e = i(e)), 8 & t)) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                  var s = Object.create(null);
                  if (
                    (i.r(s),
                    Object.defineProperty(s, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var n in e)
                      i.d(
                        s,
                        n,
                        function (t) {
                          return e[t];
                        }.bind(null, n)
                      );
                  return s;
                }),
                (i.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return i.d(t, "a", t), t;
                }),
                (i.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (i.p = ""),
                i((i.s = 1))
              );
            })([
              function (e, t) {
                e.exports = function (e) {
                  return Array.isArray
                    ? Array.isArray(e)
                    : "[object Array]" === Object.prototype.toString.call(e);
                };
              },
              function (e, t, i) {
                function s(e) {
                  return (s =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function n(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                var a = i(2),
                  r = i(8),
                  o = i(0),
                  l = (function () {
                    function e(t, i) {
                      var s = i.location,
                        n = void 0 === s ? 0 : s,
                        a = i.distance,
                        o = void 0 === a ? 100 : a,
                        l = i.threshold,
                        d = void 0 === l ? 0.6 : l,
                        c = i.maxPatternLength,
                        h = void 0 === c ? 32 : c,
                        u = i.caseSensitive,
                        p = void 0 !== u && u,
                        m = i.tokenSeparator,
                        f = void 0 === m ? / +/g : m,
                        v = i.findAllMatches,
                        g = void 0 !== v && v,
                        b = i.minMatchCharLength,
                        y = void 0 === b ? 1 : b,
                        w = i.id,
                        E = void 0 === w ? null : w,
                        S = i.keys,
                        x = void 0 === S ? [] : S,
                        T = i.shouldSort,
                        C = void 0 === T || T,
                        _ = i.getFn,
                        M = void 0 === _ ? r : _,
                        I = i.sortFn,
                        L =
                          void 0 === I
                            ? function (e, t) {
                                return e.score - t.score;
                              }
                            : I,
                        k = i.tokenize,
                        P = void 0 !== k && k,
                        O = i.matchAllTokens,
                        $ = void 0 !== O && O,
                        A = i.includeMatches,
                        D = void 0 !== A && A,
                        z = i.includeScore,
                        N = void 0 !== z && z,
                        H = i.verbose,
                        F = void 0 !== H && H;
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.options = {
                          location: n,
                          distance: o,
                          threshold: d,
                          maxPatternLength: h,
                          isCaseSensitive: p,
                          tokenSeparator: f,
                          findAllMatches: g,
                          minMatchCharLength: y,
                          id: E,
                          keys: x,
                          includeMatches: D,
                          includeScore: N,
                          shouldSort: C,
                          getFn: M,
                          sortFn: L,
                          verbose: F,
                          tokenize: P,
                          matchAllTokens: $,
                        }),
                        this.setCollection(t);
                    }
                    var t, i;
                    return (
                      (t = e),
                      (i = [
                        {
                          key: "setCollection",
                          value: function (e) {
                            return (this.list = e), e;
                          },
                        },
                        {
                          key: "search",
                          value: function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : { limit: !1 };
                            this._log(
                              '---------\nSearch pattern: "'.concat(e, '"')
                            );
                            var i = this._prepareSearchers(e),
                              s = i.tokenSearchers,
                              n = i.fullSearcher,
                              a = this._search(s, n),
                              r = a.weights,
                              o = a.results;
                            return (
                              this._computeScore(r, o),
                              this.options.shouldSort && this._sort(o),
                              t.limit &&
                                "number" == typeof t.limit &&
                                (o = o.slice(0, t.limit)),
                              this._format(o)
                            );
                          },
                        },
                        {
                          key: "_prepareSearchers",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : "",
                              t = [];
                            if (this.options.tokenize)
                              for (
                                var i = e.split(this.options.tokenSeparator),
                                  s = 0,
                                  n = i.length;
                                s < n;
                                s += 1
                              )
                                t.push(new a(i[s], this.options));
                            return {
                              tokenSearchers: t,
                              fullSearcher: new a(e, this.options),
                            };
                          },
                        },
                        {
                          key: "_search",
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : [],
                              t = arguments.length > 1 ? arguments[1] : void 0,
                              i = this.list,
                              s = {},
                              n = [];
                            if ("string" == typeof i[0]) {
                              for (var a = 0, r = i.length; a < r; a += 1)
                                this._analyze(
                                  { key: "", value: i[a], record: a, index: a },
                                  {
                                    resultMap: s,
                                    results: n,
                                    tokenSearchers: e,
                                    fullSearcher: t,
                                  }
                                );
                              return { weights: null, results: n };
                            }
                            for (var o = {}, l = 0, d = i.length; l < d; l += 1)
                              for (
                                var c = i[l],
                                  h = 0,
                                  u = this.options.keys.length;
                                h < u;
                                h += 1
                              ) {
                                var p = this.options.keys[h];
                                if ("string" != typeof p) {
                                  if (
                                    ((o[p.name] = {
                                      weight: 1 - p.weight || 1,
                                    }),
                                    p.weight <= 0 || p.weight > 1)
                                  )
                                    throw new Error(
                                      "Key weight has to be > 0 and <= 1"
                                    );
                                  p = p.name;
                                } else o[p] = { weight: 1 };
                                this._analyze(
                                  {
                                    key: p,
                                    value: this.options.getFn(c, p),
                                    record: c,
                                    index: l,
                                  },
                                  {
                                    resultMap: s,
                                    results: n,
                                    tokenSearchers: e,
                                    fullSearcher: t,
                                  }
                                );
                              }
                            return { weights: o, results: n };
                          },
                        },
                        {
                          key: "_analyze",
                          value: function (e, t) {
                            var i = e.key,
                              s = e.arrayIndex,
                              n = void 0 === s ? -1 : s,
                              a = e.value,
                              r = e.record,
                              l = e.index,
                              d = t.tokenSearchers,
                              c = void 0 === d ? [] : d,
                              h = t.fullSearcher,
                              u = void 0 === h ? [] : h,
                              p = t.resultMap,
                              m = void 0 === p ? {} : p,
                              f = t.results,
                              v = void 0 === f ? [] : f;
                            if (null != a) {
                              var g = !1,
                                b = -1,
                                y = 0;
                              if ("string" == typeof a) {
                                this._log("\nKey: ".concat("" === i ? "-" : i));
                                var w = u.search(a);
                                if (
                                  (this._log(
                                    'Full text: "'
                                      .concat(a, '", score: ')
                                      .concat(w.score)
                                  ),
                                  this.options.tokenize)
                                ) {
                                  for (
                                    var E = a.split(
                                        this.options.tokenSeparator
                                      ),
                                      S = [],
                                      x = 0;
                                    x < c.length;
                                    x += 1
                                  ) {
                                    var T = c[x];
                                    this._log(
                                      '\nPattern: "'.concat(T.pattern, '"')
                                    );
                                    for (
                                      var C = !1, _ = 0;
                                      _ < E.length;
                                      _ += 1
                                    ) {
                                      var M = E[_],
                                        I = T.search(M),
                                        L = {};
                                      I.isMatch
                                        ? ((L[M] = I.score),
                                          (g = !0),
                                          (C = !0),
                                          S.push(I.score))
                                        : ((L[M] = 1),
                                          this.options.matchAllTokens ||
                                            S.push(1)),
                                        this._log(
                                          'Token: "'
                                            .concat(M, '", score: ')
                                            .concat(L[M])
                                        );
                                    }
                                    C && (y += 1);
                                  }
                                  b = S[0];
                                  for (var k = S.length, P = 1; P < k; P += 1)
                                    b += S[P];
                                  (b /= k),
                                    this._log("Token score average:", b);
                                }
                                var O = w.score;
                                b > -1 && (O = (O + b) / 2),
                                  this._log("Score average:", O);
                                var $ =
                                  !this.options.tokenize ||
                                  !this.options.matchAllTokens ||
                                  y >= c.length;
                                if (
                                  (this._log("\nCheck Matches: ".concat($)),
                                  (g || w.isMatch) && $)
                                ) {
                                  var A = m[l];
                                  A
                                    ? A.output.push({
                                        key: i,
                                        arrayIndex: n,
                                        value: a,
                                        score: O,
                                        matchedIndices: w.matchedIndices,
                                      })
                                    : ((m[l] = {
                                        item: r,
                                        output: [
                                          {
                                            key: i,
                                            arrayIndex: n,
                                            value: a,
                                            score: O,
                                            matchedIndices: w.matchedIndices,
                                          },
                                        ],
                                      }),
                                      v.push(m[l]));
                                }
                              } else if (o(a))
                                for (var D = 0, z = a.length; D < z; D += 1)
                                  this._analyze(
                                    {
                                      key: i,
                                      arrayIndex: D,
                                      value: a[D],
                                      record: r,
                                      index: l,
                                    },
                                    {
                                      resultMap: m,
                                      results: v,
                                      tokenSearchers: c,
                                      fullSearcher: u,
                                    }
                                  );
                            }
                          },
                        },
                        {
                          key: "_computeScore",
                          value: function (e, t) {
                            this._log("\n\nComputing score:\n");
                            for (var i = 0, s = t.length; i < s; i += 1) {
                              for (
                                var n = t[i].output,
                                  a = n.length,
                                  r = 1,
                                  o = 1,
                                  l = 0;
                                l < a;
                                l += 1
                              ) {
                                var d = e ? e[n[l].key].weight : 1,
                                  c =
                                    (1 === d
                                      ? n[l].score
                                      : n[l].score || 0.001) * d;
                                1 !== d
                                  ? (o = Math.min(o, c))
                                  : ((n[l].nScore = c), (r *= c));
                              }
                              (t[i].score = 1 === o ? r : o), this._log(t[i]);
                            }
                          },
                        },
                        {
                          key: "_sort",
                          value: function (e) {
                            this._log("\n\nSorting...."),
                              e.sort(this.options.sortFn);
                          },
                        },
                        {
                          key: "_format",
                          value: function (e) {
                            var t = [];
                            if (this.options.verbose) {
                              var i = [];
                              this._log(
                                "\n\nOutput:\n\n",
                                JSON.stringify(e, function (e, t) {
                                  if ("object" === s(t) && null !== t) {
                                    if (-1 !== i.indexOf(t)) return;
                                    i.push(t);
                                  }
                                  return t;
                                })
                              ),
                                (i = null);
                            }
                            var n = [];
                            this.options.includeMatches &&
                              n.push(function (e, t) {
                                var i = e.output;
                                t.matches = [];
                                for (var s = 0, n = i.length; s < n; s += 1) {
                                  var a = i[s];
                                  if (0 !== a.matchedIndices.length) {
                                    var r = {
                                      indices: a.matchedIndices,
                                      value: a.value,
                                    };
                                    a.key && (r.key = a.key),
                                      a.hasOwnProperty("arrayIndex") &&
                                        a.arrayIndex > -1 &&
                                        (r.arrayIndex = a.arrayIndex),
                                      t.matches.push(r);
                                  }
                                }
                              }),
                              this.options.includeScore &&
                                n.push(function (e, t) {
                                  t.score = e.score;
                                });
                            for (var a = 0, r = e.length; a < r; a += 1) {
                              var o = e[a];
                              if (
                                (this.options.id &&
                                  (o.item = this.options.getFn(
                                    o.item,
                                    this.options.id
                                  )[0]),
                                n.length)
                              ) {
                                for (
                                  var l = { item: o.item }, d = 0, c = n.length;
                                  d < c;
                                  d += 1
                                )
                                  n[d](o, l);
                                t.push(l);
                              } else t.push(o.item);
                            }
                            return t;
                          },
                        },
                        {
                          key: "_log",
                          value: function () {
                            var e;
                            this.options.verbose &&
                              (e = console).log.apply(e, arguments);
                          },
                        },
                      ]) && n(t.prototype, i),
                      e
                    );
                  })();
                e.exports = l;
              },
              function (e, t, i) {
                function s(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                var n = i(3),
                  a = i(4),
                  r = i(7),
                  o = (function () {
                    function e(t, i) {
                      var s = i.location,
                        n = void 0 === s ? 0 : s,
                        a = i.distance,
                        o = void 0 === a ? 100 : a,
                        l = i.threshold,
                        d = void 0 === l ? 0.6 : l,
                        c = i.maxPatternLength,
                        h = void 0 === c ? 32 : c,
                        u = i.isCaseSensitive,
                        p = void 0 !== u && u,
                        m = i.tokenSeparator,
                        f = void 0 === m ? / +/g : m,
                        v = i.findAllMatches,
                        g = void 0 !== v && v,
                        b = i.minMatchCharLength,
                        y = void 0 === b ? 1 : b;
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e),
                        (this.options = {
                          location: n,
                          distance: o,
                          threshold: d,
                          maxPatternLength: h,
                          isCaseSensitive: p,
                          tokenSeparator: f,
                          findAllMatches: g,
                          minMatchCharLength: y,
                        }),
                        (this.pattern = this.options.isCaseSensitive
                          ? t
                          : t.toLowerCase()),
                        this.pattern.length <= h &&
                          (this.patternAlphabet = r(this.pattern));
                    }
                    var t, i;
                    return (
                      (t = e),
                      (i = [
                        {
                          key: "search",
                          value: function (e) {
                            if (
                              (this.options.isCaseSensitive ||
                                (e = e.toLowerCase()),
                              this.pattern === e)
                            )
                              return {
                                isMatch: !0,
                                score: 0,
                                matchedIndices: [[0, e.length - 1]],
                              };
                            var t = this.options,
                              i = t.maxPatternLength,
                              s = t.tokenSeparator;
                            if (this.pattern.length > i)
                              return n(e, this.pattern, s);
                            var r = this.options,
                              o = r.location,
                              l = r.distance,
                              d = r.threshold,
                              c = r.findAllMatches,
                              h = r.minMatchCharLength;
                            return a(e, this.pattern, this.patternAlphabet, {
                              location: o,
                              distance: l,
                              threshold: d,
                              findAllMatches: c,
                              minMatchCharLength: h,
                            });
                          },
                        },
                      ]) && s(t.prototype, i),
                      e
                    );
                  })();
                e.exports = o;
              },
              function (e, t) {
                var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                e.exports = function (e, t) {
                  var s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : / +/g,
                    n = new RegExp(t.replace(i, "\\$&").replace(s, "|")),
                    a = e.match(n),
                    r = !!a,
                    o = [];
                  if (r)
                    for (var l = 0, d = a.length; l < d; l += 1) {
                      var c = a[l];
                      o.push([e.indexOf(c), c.length - 1]);
                    }
                  return { score: r ? 0.5 : 1, isMatch: r, matchedIndices: o };
                };
              },
              function (e, t, i) {
                var s = i(5),
                  n = i(6);
                e.exports = function (e, t, i, a) {
                  for (
                    var r = a.location,
                      o = void 0 === r ? 0 : r,
                      l = a.distance,
                      d = void 0 === l ? 100 : l,
                      c = a.threshold,
                      h = void 0 === c ? 0.6 : c,
                      u = a.findAllMatches,
                      p = void 0 !== u && u,
                      m = a.minMatchCharLength,
                      f = void 0 === m ? 1 : m,
                      v = o,
                      g = e.length,
                      b = h,
                      y = e.indexOf(t, v),
                      w = t.length,
                      E = [],
                      S = 0;
                    S < g;
                    S += 1
                  )
                    E[S] = 0;
                  if (-1 !== y) {
                    var x = s(t, {
                      errors: 0,
                      currentLocation: y,
                      expectedLocation: v,
                      distance: d,
                    });
                    if (
                      ((b = Math.min(x, b)),
                      -1 !== (y = e.lastIndexOf(t, v + w)))
                    ) {
                      var T = s(t, {
                        errors: 0,
                        currentLocation: y,
                        expectedLocation: v,
                        distance: d,
                      });
                      b = Math.min(T, b);
                    }
                  }
                  y = -1;
                  for (
                    var C = [], _ = 1, M = w + g, I = 1 << (w - 1), L = 0;
                    L < w;
                    L += 1
                  ) {
                    for (var k = 0, P = M; k < P; )
                      s(t, {
                        errors: L,
                        currentLocation: v + P,
                        expectedLocation: v,
                        distance: d,
                      }) <= b
                        ? (k = P)
                        : (M = P),
                        (P = Math.floor((M - k) / 2 + k));
                    M = P;
                    var O = Math.max(1, v - P + 1),
                      $ = p ? g : Math.min(v + P, g) + w,
                      A = Array($ + 2);
                    A[$ + 1] = (1 << L) - 1;
                    for (var D = $; D >= O; D -= 1) {
                      var z = D - 1,
                        N = i[e.charAt(z)];
                      if (
                        (N && (E[z] = 1),
                        (A[D] = ((A[D + 1] << 1) | 1) & N),
                        0 !== L &&
                          (A[D] |= ((C[D + 1] | C[D]) << 1) | 1 | C[D + 1]),
                        A[D] & I &&
                          (_ = s(t, {
                            errors: L,
                            currentLocation: z,
                            expectedLocation: v,
                            distance: d,
                          })) <= b)
                      ) {
                        if (((b = _), (y = z) <= v)) break;
                        O = Math.max(1, 2 * v - y);
                      }
                    }
                    if (
                      s(t, {
                        errors: L + 1,
                        currentLocation: v,
                        expectedLocation: v,
                        distance: d,
                      }) > b
                    )
                      break;
                    C = A;
                  }
                  return {
                    isMatch: y >= 0,
                    score: 0 === _ ? 0.001 : _,
                    matchedIndices: n(E, f),
                  };
                };
              },
              function (e, t) {
                e.exports = function (e, t) {
                  var i = t.errors,
                    s = void 0 === i ? 0 : i,
                    n = t.currentLocation,
                    a = void 0 === n ? 0 : n,
                    r = t.expectedLocation,
                    o = void 0 === r ? 0 : r,
                    l = t.distance,
                    d = void 0 === l ? 100 : l,
                    c = s / e.length,
                    h = Math.abs(o - a);
                  return d ? c + h / d : h ? 1 : c;
                };
              },
              function (e, t) {
                e.exports = function () {
                  for (
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      i = [],
                      s = -1,
                      n = -1,
                      a = 0,
                      r = e.length;
                    a < r;
                    a += 1
                  ) {
                    var o = e[a];
                    o && -1 === s
                      ? (s = a)
                      : o ||
                        -1 === s ||
                        ((n = a - 1) - s + 1 >= t && i.push([s, n]), (s = -1));
                  }
                  return e[a - 1] && a - s >= t && i.push([s, a - 1]), i;
                };
              },
              function (e, t) {
                e.exports = function (e) {
                  for (var t = {}, i = e.length, s = 0; s < i; s += 1)
                    t[e.charAt(s)] = 0;
                  for (var n = 0; n < i; n += 1)
                    t[e.charAt(n)] |= 1 << (i - n - 1);
                  return t;
                };
              },
              function (e, t, i) {
                var s = i(0);
                e.exports = function (e, t) {
                  return (function e(t, i, n) {
                    if (i) {
                      var a = i.indexOf("."),
                        r = i,
                        o = null;
                      -1 !== a && ((r = i.slice(0, a)), (o = i.slice(a + 1)));
                      var l = t[r];
                      if (null != l)
                        if (o || ("string" != typeof l && "number" != typeof l))
                          if (s(l))
                            for (var d = 0, c = l.length; d < c; d += 1)
                              e(l[d], o, n);
                          else o && e(l, o, n);
                        else n.push(l.toString());
                    } else n.push(t);
                    return n;
                  })(e, t, []);
                };
              },
            ]);
          },
          function (e, t, i) {
            "use strict";
            function s(e) {
              var t,
                i = e.Symbol;
              return (
                "function" == typeof i
                  ? i.observable
                    ? (t = i.observable)
                    : ((t = i("observable")), (i.observable = t))
                  : (t = "@@observable"),
                t
              );
            }
            i.d(t, "a", function () {
              return s;
            });
          },
          function (e, t, i) {
            e.exports = i(7);
          },
          function (e, t) {
            var i;
            i = (function () {
              return this;
            })();
            try {
              i = i || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (i = window);
            }
            e.exports = i;
          },
          function (e, t) {
            e.exports = function (e) {
              if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                  Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function () {
                      return t.l;
                    },
                  }),
                  Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function () {
                      return t.i;
                    },
                  }),
                  Object.defineProperty(t, "exports", { enumerable: !0 }),
                  (t.webpackPolyfill = 1);
              }
              return t;
            };
          },
          function (e, t, i) {
            "use strict";
            i.r(t);
            var s = i(2),
              n = i.n(s),
              a = i(0),
              r = i.n(a),
              o = i(1),
              l = function () {
                return Math.random()
                  .toString(36)
                  .substring(7)
                  .split("")
                  .join(".");
              },
              d = {
                INIT: "@@redux/INIT" + l(),
                REPLACE: "@@redux/REPLACE" + l(),
                PROBE_UNKNOWN_ACTION: function () {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + l();
                },
              };
            function c(e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            }
            function h(e, t, i) {
              var s;
              if (
                ("function" == typeof t && "function" == typeof i) ||
                ("function" == typeof i && "function" == typeof arguments[3])
              )
                throw new Error(
                  "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                );
              if (
                ("function" == typeof t &&
                  void 0 === i &&
                  ((i = t), (t = void 0)),
                void 0 !== i)
              ) {
                if ("function" != typeof i)
                  throw new Error("Expected the enhancer to be a function.");
                return i(h)(e, t);
              }
              if ("function" != typeof e)
                throw new Error("Expected the reducer to be a function.");
              var n = e,
                a = t,
                r = [],
                l = r,
                u = !1;
              function p() {
                l === r && (l = r.slice());
              }
              function m() {
                if (u)
                  throw new Error(
                    "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                  );
                return a;
              }
              function f(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the listener to be a function.");
                if (u)
                  throw new Error(
                    "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                  );
                var t = !0;
                return (
                  p(),
                  l.push(e),
                  function () {
                    if (t) {
                      if (u)
                        throw new Error(
                          "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                        );
                      (t = !1), p();
                      var i = l.indexOf(e);
                      l.splice(i, 1);
                    }
                  }
                );
              }
              function v(e) {
                if (!c(e))
                  throw new Error(
                    "Actions must be plain objects. Use custom middleware for async actions."
                  );
                if (void 0 === e.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                  );
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                  (u = !0), (a = n(a, e));
                } finally {
                  u = !1;
                }
                for (var t = (r = l), i = 0; i < t.length; i++) (0, t[i])();
                return e;
              }
              function g(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the nextReducer to be a function.");
                (n = e), v({ type: d.REPLACE });
              }
              function b() {
                var e,
                  t = f;
                return (
                  ((e = {
                    subscribe: function (e) {
                      if ("object" != typeof e || null === e)
                        throw new TypeError(
                          "Expected the observer to be an object."
                        );
                      function i() {
                        e.next && e.next(m());
                      }
                      return i(), { unsubscribe: t(i) };
                    },
                  })[o.a] = function () {
                    return this;
                  }),
                  e
                );
              }
              return (
                v({ type: d.INIT }),
                ((s = {
                  dispatch: v,
                  subscribe: f,
                  getState: m,
                  replaceReducer: g,
                })[o.a] = b),
                s
              );
            }
            function u(e, t) {
              var i = t && t.type;
              return (
                "Given " +
                ((i && 'action "' + String(i) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
              );
            }
            var p,
              m = [],
              f = [],
              v = [],
              g = { loading: !1 },
              b = function (e, t) {
                switch ((void 0 === e && (e = g), t.type)) {
                  case "SET_IS_LOADING":
                    return { loading: t.isLoading };
                  default:
                    return e;
                }
              },
              y = function (e) {
                return Array.from({ length: e }, function () {
                  return ((e = 0),
                  (t = 36),
                  Math.floor(Math.random() * (t - e) + e)).toString(36);
                  var e, t;
                }).join("");
              },
              w = function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              E = function (e, t) {
                return null != t && w(t) === e;
              },
              S = function (e) {
                return "string" != typeof e
                  ? e
                  : e
                      .replace(/&/g, "&amp;")
                      .replace(/>/g, "&rt;")
                      .replace(/</g, "&lt;")
                      .replace(/"/g, "&quot;");
              },
              x =
                ((p = document.createElement("div")),
                function (e) {
                  var t = e.trim();
                  p.innerHTML = t;
                  for (var i = p.children[0]; p.firstChild; )
                    p.removeChild(p.firstChild);
                  return i;
                }),
              T = function (e, t) {
                return e.score - t.score;
              },
              C = function (e) {
                return JSON.parse(JSON.stringify(e));
              },
              _ = (function (e) {
                for (var t = Object.keys(e), i = {}, s = 0; s < t.length; s++) {
                  var n = t[s];
                  "function" == typeof e[n] && (i[n] = e[n]);
                }
                var a,
                  r = Object.keys(i);
                try {
                  !(function (e) {
                    Object.keys(e).forEach(function (t) {
                      var i = e[t];
                      if (void 0 === i(void 0, { type: d.INIT }))
                        throw new Error(
                          'Reducer "' +
                            t +
                            "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                        );
                      if (
                        void 0 === i(void 0, { type: d.PROBE_UNKNOWN_ACTION() })
                      )
                        throw new Error(
                          'Reducer "' +
                            t +
                            "\" returned undefined when probed with a random type. Don't try to handle " +
                            d.INIT +
                            ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                        );
                    });
                  })(i);
                } catch (e) {
                  a = e;
                }
                return function (e, t) {
                  if ((void 0 === e && (e = {}), a)) throw a;
                  for (var s = !1, n = {}, o = 0; o < r.length; o++) {
                    var l = r[o],
                      d = i[l],
                      c = e[l],
                      h = d(c, t);
                    if (void 0 === h) {
                      var p = u(l, t);
                      throw new Error(p);
                    }
                    (n[l] = h), (s = s || h !== c);
                  }
                  return s ? n : e;
                };
              })({
                items: function (e, t) {
                  switch ((void 0 === e && (e = m), t.type)) {
                    case "ADD_ITEM":
                      return []
                        .concat(e, [
                          {
                            id: t.id,
                            choiceId: t.choiceId,
                            groupId: t.groupId,
                            value: t.value,
                            label: t.label,
                            active: !0,
                            highlighted: !1,
                            customProperties: t.customProperties,
                            placeholder: t.placeholder || !1,
                            keyCode: null,
                          },
                        ])
                        .map(function (e) {
                          var t = e;
                          return (t.highlighted = !1), t;
                        });
                    case "REMOVE_ITEM":
                      return e.map(function (e) {
                        var i = e;
                        return i.id === t.id && (i.active = !1), i;
                      });
                    case "HIGHLIGHT_ITEM":
                      return e.map(function (e) {
                        var i = e;
                        return (
                          i.id === t.id && (i.highlighted = t.highlighted), i
                        );
                      });
                    default:
                      return e;
                  }
                },
                groups: function (e, t) {
                  switch ((void 0 === e && (e = f), t.type)) {
                    case "ADD_GROUP":
                      return [].concat(e, [
                        {
                          id: t.id,
                          value: t.value,
                          active: t.active,
                          disabled: t.disabled,
                        },
                      ]);
                    case "CLEAR_CHOICES":
                      return [];
                    default:
                      return e;
                  }
                },
                choices: function (e, t) {
                  switch ((void 0 === e && (e = v), t.type)) {
                    case "ADD_CHOICE":
                      return [].concat(e, [
                        {
                          id: t.id,
                          elementId: t.elementId,
                          groupId: t.groupId,
                          value: t.value,
                          label: t.label || t.value,
                          disabled: t.disabled || !1,
                          selected: !1,
                          active: !0,
                          score: 9999,
                          customProperties: t.customProperties,
                          placeholder: t.placeholder || !1,
                          keyCode: null,
                        },
                      ]);
                    case "ADD_ITEM":
                      return t.activateOptions
                        ? e.map(function (e) {
                            var i = e;
                            return (i.active = t.active), i;
                          })
                        : t.choiceId > -1
                        ? e.map(function (e) {
                            var i = e;
                            return (
                              i.id === parseInt(t.choiceId, 10) &&
                                (i.selected = !0),
                              i
                            );
                          })
                        : e;
                    case "REMOVE_ITEM":
                      return t.choiceId > -1
                        ? e.map(function (e) {
                            var i = e;
                            return (
                              i.id === parseInt(t.choiceId, 10) &&
                                (i.selected = !1),
                              i
                            );
                          })
                        : e;
                    case "FILTER_CHOICES":
                      return e.map(function (e) {
                        var i = e;
                        return (
                          (i.active = t.results.some(function (e) {
                            var t = e.item,
                              s = e.score;
                            return t.id === i.id && ((i.score = s), !0);
                          })),
                          i
                        );
                      });
                    case "ACTIVATE_CHOICES":
                      return e.map(function (e) {
                        var i = e;
                        return (i.active = t.active), i;
                      });
                    case "CLEAR_CHOICES":
                      return v;
                    default:
                      return e;
                  }
                },
                general: b,
              }),
              M = function (e, t) {
                var i = e;
                if ("CLEAR_ALL" === t.type) i = void 0;
                else if ("RESET_TO" === t.type) return C(t.state);
                return _(i, t);
              };
            function I(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var L = (function () {
              function e() {
                this._store = h(
                  M,
                  window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
                );
              }
              var t,
                i,
                s,
                n = e.prototype;
              return (
                (n.subscribe = function (e) {
                  this._store.subscribe(e);
                }),
                (n.dispatch = function (e) {
                  this._store.dispatch(e);
                }),
                (n.isLoading = function () {
                  return this.state.general.loading;
                }),
                (n.getChoiceById = function (e) {
                  return this.activeChoices.find(function (t) {
                    return t.id === parseInt(e, 10);
                  });
                }),
                (n.getGroupById = function (e) {
                  return this.groups.find(function (t) {
                    return t.id === e;
                  });
                }),
                (t = e),
                (i = [
                  {
                    key: "state",
                    get: function () {
                      return this._store.getState();
                    },
                  },
                  {
                    key: "items",
                    get: function () {
                      return this.state.items;
                    },
                  },
                  {
                    key: "activeItems",
                    get: function () {
                      return this.items.filter(function (e) {
                        return !0 === e.active;
                      });
                    },
                  },
                  {
                    key: "highlightedActiveItems",
                    get: function () {
                      return this.items.filter(function (e) {
                        return e.active && e.highlighted;
                      });
                    },
                  },
                  {
                    key: "choices",
                    get: function () {
                      return this.state.choices;
                    },
                  },
                  {
                    key: "activeChoices",
                    get: function () {
                      return this.choices.filter(function (e) {
                        return !0 === e.active;
                      });
                    },
                  },
                  {
                    key: "selectableChoices",
                    get: function () {
                      return this.choices.filter(function (e) {
                        return !0 !== e.disabled;
                      });
                    },
                  },
                  {
                    key: "searchableChoices",
                    get: function () {
                      return this.selectableChoices.filter(function (e) {
                        return !0 !== e.placeholder;
                      });
                    },
                  },
                  {
                    key: "placeholderChoice",
                    get: function () {
                      return []
                        .concat(this.choices)
                        .reverse()
                        .find(function (e) {
                          return !0 === e.placeholder;
                        });
                    },
                  },
                  {
                    key: "groups",
                    get: function () {
                      return this.state.groups;
                    },
                  },
                  {
                    key: "activeGroups",
                    get: function () {
                      var e = this.groups,
                        t = this.choices;
                      return e.filter(function (e) {
                        var i = !0 === e.active && !1 === e.disabled,
                          s = t.some(function (e) {
                            return !0 === e.active && !1 === e.disabled;
                          });
                        return i && s;
                      }, []);
                    },
                  },
                ]) && I(t.prototype, i),
                s && I(t, s),
                e
              );
            })();
            function k(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var P = (function () {
                function e(e) {
                  var t = e.element,
                    i = e.type,
                    s = e.classNames;
                  (this.element = t),
                    (this.classNames = s),
                    (this.type = i),
                    (this.isActive = !1);
                }
                var t,
                  i,
                  s,
                  n = e.prototype;
                return (
                  (n.getChild = function (e) {
                    return this.element.querySelector(e);
                  }),
                  (n.show = function () {
                    return (
                      this.element.classList.add(this.classNames.activeState),
                      this.element.setAttribute("aria-expanded", "true"),
                      (this.isActive = !0),
                      this
                    );
                  }),
                  (n.hide = function () {
                    return (
                      this.element.classList.remove(
                        this.classNames.activeState
                      ),
                      this.element.setAttribute("aria-expanded", "false"),
                      (this.isActive = !1),
                      this
                    );
                  }),
                  (t = e),
                  (i = [
                    {
                      key: "distanceFromTopWindow",
                      get: function () {
                        return this.element.getBoundingClientRect().bottom;
                      },
                    },
                  ]) && k(t.prototype, i),
                  s && k(t, s),
                  e
                );
              })(),
              O = {
                items: [],
                choices: [],
                silent: !1,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: !0,
                addItemFilter: null,
                removeItems: !0,
                removeItemButton: !1,
                editItems: !1,
                duplicateItemsAllowed: !0,
                delimiter: ",",
                paste: !0,
                searchEnabled: !0,
                searchChoices: !0,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: !0,
                shouldSort: !0,
                shouldSortItems: !1,
                sorter: function (e, t) {
                  var i = e.value,
                    s = e.label,
                    n = void 0 === s ? i : s,
                    a = t.value,
                    r = t.label,
                    o = void 0 === r ? a : r;
                  return n.localeCompare(o, [], {
                    sensitivity: "base",
                    ignorePunctuation: !0,
                    numeric: !0,
                  });
                },
                placeholder: !0,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText:
                  "Only values matching specific conditions can be added",
                addItemText: function (e) {
                  return 'Press Enter to add <b>"' + S(e) + '"</b>';
                },
                maxItemText: function (e) {
                  return "Only " + e + " values can be added";
                },
                valueComparer: function (e, t) {
                  return e === t;
                },
                fuseOptions: { includeScore: !0 },
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: {
                  containerOuter: "choices",
                  containerInner: "choices__inner",
                  input: "choices__input",
                  inputCloned: "choices__input--cloned",
                  list: "choices__list",
                  listItems: "choices__list--multiple",
                  listSingle: "choices__list--single",
                  listDropdown: "choices__list--dropdown",
                  item: "choices__item",
                  itemSelectable: "choices__item--selectable",
                  itemDisabled: "choices__item--disabled",
                  itemChoice: "choices__item--choice",
                  placeholder: "choices__placeholder",
                  group: "choices__group",
                  groupHeading: "choices__heading",
                  button: "choices__button",
                  activeState: "is-active",
                  focusState: "is-focused",
                  openState: "is-open",
                  disabledState: "is-disabled",
                  highlightedState: "is-highlighted",
                  selectedState: "is-selected",
                  flippedState: "is-flipped",
                  loadingState: "is-loading",
                  noResults: "has-no-results",
                  noChoices: "has-no-choices",
                },
              },
              $ = "showDropdown",
              A = "hideDropdown",
              D = "change",
              z = "choice",
              N = "search",
              H = "addItem",
              F = "removeItem",
              B = "highlightItem",
              G = "highlightChoice",
              j = "ADD_CHOICE",
              V = "FILTER_CHOICES",
              q = "ACTIVATE_CHOICES",
              R = "CLEAR_CHOICES",
              X = "ADD_GROUP",
              Y = "ADD_ITEM",
              W = "REMOVE_ITEM",
              K = "HIGHLIGHT_ITEM",
              U = 46,
              J = 8,
              Z = 13,
              Q = 65,
              ee = 27,
              te = 38,
              ie = 40,
              se = 33,
              ne = 34,
              ae = (function () {
                function e(e) {
                  var t = e.element,
                    i = e.type,
                    s = e.classNames,
                    n = e.position;
                  (this.element = t),
                    (this.classNames = s),
                    (this.type = i),
                    (this.position = n),
                    (this.isOpen = !1),
                    (this.isFlipped = !1),
                    (this.isFocussed = !1),
                    (this.isDisabled = !1),
                    (this.isLoading = !1),
                    (this._onFocus = this._onFocus.bind(this)),
                    (this._onBlur = this._onBlur.bind(this));
                }
                var t = e.prototype;
                return (
                  (t.addEventListeners = function () {
                    this.element.addEventListener("focus", this._onFocus),
                      this.element.addEventListener("blur", this._onBlur);
                  }),
                  (t.removeEventListeners = function () {
                    this.element.removeEventListener("focus", this._onFocus),
                      this.element.removeEventListener("blur", this._onBlur);
                  }),
                  (t.shouldFlip = function (e) {
                    if ("number" != typeof e) return !1;
                    var t = !1;
                    return (
                      "auto" === this.position
                        ? (t = !window.matchMedia(
                            "(min-height: " + (e + 1) + "px)"
                          ).matches)
                        : "top" === this.position && (t = !0),
                      t
                    );
                  }),
                  (t.setActiveDescendant = function (e) {
                    this.element.setAttribute("aria-activedescendant", e);
                  }),
                  (t.removeActiveDescendant = function () {
                    this.element.removeAttribute("aria-activedescendant");
                  }),
                  (t.open = function (e) {
                    this.element.classList.add(this.classNames.openState),
                      this.element.setAttribute("aria-expanded", "true"),
                      (this.isOpen = !0),
                      this.shouldFlip(e) &&
                        (this.element.classList.add(
                          this.classNames.flippedState
                        ),
                        (this.isFlipped = !0));
                  }),
                  (t.close = function () {
                    this.element.classList.remove(this.classNames.openState),
                      this.element.setAttribute("aria-expanded", "false"),
                      this.removeActiveDescendant(),
                      (this.isOpen = !1),
                      this.isFlipped &&
                        (this.element.classList.remove(
                          this.classNames.flippedState
                        ),
                        (this.isFlipped = !1));
                  }),
                  (t.focus = function () {
                    this.isFocussed || this.element.focus();
                  }),
                  (t.addFocusState = function () {
                    this.element.classList.add(this.classNames.focusState);
                  }),
                  (t.removeFocusState = function () {
                    this.element.classList.remove(this.classNames.focusState);
                  }),
                  (t.enable = function () {
                    this.element.classList.remove(
                      this.classNames.disabledState
                    ),
                      this.element.removeAttribute("aria-disabled"),
                      "select-one" === this.type &&
                        this.element.setAttribute("tabindex", "0"),
                      (this.isDisabled = !1);
                  }),
                  (t.disable = function () {
                    this.element.classList.add(this.classNames.disabledState),
                      this.element.setAttribute("aria-disabled", "true"),
                      "select-one" === this.type &&
                        this.element.setAttribute("tabindex", "-1"),
                      (this.isDisabled = !0);
                  }),
                  (t.wrap = function (e) {
                    !(function (e, t) {
                      void 0 === t && (t = document.createElement("div")),
                        e.nextSibling
                          ? e.parentNode.insertBefore(t, e.nextSibling)
                          : e.parentNode.appendChild(t),
                        t.appendChild(e);
                    })(e, this.element);
                  }),
                  (t.unwrap = function (e) {
                    this.element.parentNode.insertBefore(e, this.element),
                      this.element.parentNode.removeChild(this.element);
                  }),
                  (t.addLoadingState = function () {
                    this.element.classList.add(this.classNames.loadingState),
                      this.element.setAttribute("aria-busy", "true"),
                      (this.isLoading = !0);
                  }),
                  (t.removeLoadingState = function () {
                    this.element.classList.remove(this.classNames.loadingState),
                      this.element.removeAttribute("aria-busy"),
                      (this.isLoading = !1);
                  }),
                  (t._onFocus = function () {
                    this.isFocussed = !0;
                  }),
                  (t._onBlur = function () {
                    this.isFocussed = !1;
                  }),
                  e
                );
              })();
            function re(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var oe = (function () {
                function e(e) {
                  var t = e.element,
                    i = e.type,
                    s = e.classNames,
                    n = e.preventPaste;
                  (this.element = t),
                    (this.type = i),
                    (this.classNames = s),
                    (this.preventPaste = n),
                    (this.isFocussed = this.element === document.activeElement),
                    (this.isDisabled = t.disabled),
                    (this._onPaste = this._onPaste.bind(this)),
                    (this._onInput = this._onInput.bind(this)),
                    (this._onFocus = this._onFocus.bind(this)),
                    (this._onBlur = this._onBlur.bind(this));
                }
                var t,
                  i,
                  s,
                  n = e.prototype;
                return (
                  (n.addEventListeners = function () {
                    this.element.addEventListener("paste", this._onPaste),
                      this.element.addEventListener("input", this._onInput, {
                        passive: !0,
                      }),
                      this.element.addEventListener("focus", this._onFocus, {
                        passive: !0,
                      }),
                      this.element.addEventListener("blur", this._onBlur, {
                        passive: !0,
                      });
                  }),
                  (n.removeEventListeners = function () {
                    this.element.removeEventListener("input", this._onInput, {
                      passive: !0,
                    }),
                      this.element.removeEventListener("paste", this._onPaste),
                      this.element.removeEventListener("focus", this._onFocus, {
                        passive: !0,
                      }),
                      this.element.removeEventListener("blur", this._onBlur, {
                        passive: !0,
                      });
                  }),
                  (n.enable = function () {
                    this.element.removeAttribute("disabled"),
                      (this.isDisabled = !1);
                  }),
                  (n.disable = function () {
                    this.element.setAttribute("disabled", ""),
                      (this.isDisabled = !0);
                  }),
                  (n.focus = function () {
                    this.isFocussed || this.element.focus();
                  }),
                  (n.blur = function () {
                    this.isFocussed && this.element.blur();
                  }),
                  (n.clear = function (e) {
                    return (
                      void 0 === e && (e = !0),
                      this.element.value && (this.element.value = ""),
                      e && this.setWidth(),
                      this
                    );
                  }),
                  (n.setWidth = function () {
                    var e = this.element,
                      t = e.style,
                      i = e.value,
                      s = e.placeholder;
                    (t.minWidth = s.length + 1 + "ch"),
                      (t.width = i.length + 1 + "ch");
                  }),
                  (n.setActiveDescendant = function (e) {
                    this.element.setAttribute("aria-activedescendant", e);
                  }),
                  (n.removeActiveDescendant = function () {
                    this.element.removeAttribute("aria-activedescendant");
                  }),
                  (n._onInput = function () {
                    "select-one" !== this.type && this.setWidth();
                  }),
                  (n._onPaste = function (e) {
                    this.preventPaste && e.preventDefault();
                  }),
                  (n._onFocus = function () {
                    this.isFocussed = !0;
                  }),
                  (n._onBlur = function () {
                    this.isFocussed = !1;
                  }),
                  (t = e),
                  (i = [
                    {
                      key: "placeholder",
                      set: function (e) {
                        this.element.placeholder = e;
                      },
                    },
                    {
                      key: "value",
                      get: function () {
                        return S(this.element.value);
                      },
                      set: function (e) {
                        this.element.value = e;
                      },
                    },
                  ]) && re(t.prototype, i),
                  s && re(t, s),
                  e
                );
              })(),
              le = (function () {
                function e(e) {
                  var t = e.element;
                  (this.element = t),
                    (this.scrollPos = this.element.scrollTop),
                    (this.height = this.element.offsetHeight);
                }
                var t = e.prototype;
                return (
                  (t.clear = function () {
                    this.element.innerHTML = "";
                  }),
                  (t.append = function (e) {
                    this.element.appendChild(e);
                  }),
                  (t.getChild = function (e) {
                    return this.element.querySelector(e);
                  }),
                  (t.hasChildren = function () {
                    return this.element.hasChildNodes();
                  }),
                  (t.scrollToTop = function () {
                    this.element.scrollTop = 0;
                  }),
                  (t.scrollToChildElement = function (e, t) {
                    var i = this;
                    if (e) {
                      var s = this.element.offsetHeight,
                        n = this.element.scrollTop + s,
                        a = e.offsetHeight,
                        r = e.offsetTop + a,
                        o =
                          t > 0 ? this.element.scrollTop + r - n : e.offsetTop;
                      requestAnimationFrame(function () {
                        i._animateScroll(o, t);
                      });
                    }
                  }),
                  (t._scrollDown = function (e, t, i) {
                    var s = (i - e) / t,
                      n = s > 1 ? s : 1;
                    this.element.scrollTop = e + n;
                  }),
                  (t._scrollUp = function (e, t, i) {
                    var s = (e - i) / t,
                      n = s > 1 ? s : 1;
                    this.element.scrollTop = e - n;
                  }),
                  (t._animateScroll = function (e, t) {
                    var i = this,
                      s = this.element.scrollTop,
                      n = !1;
                    t > 0
                      ? (this._scrollDown(s, 4, e), s < e && (n = !0))
                      : (this._scrollUp(s, 4, e), s > e && (n = !0)),
                      n &&
                        requestAnimationFrame(function () {
                          i._animateScroll(e, t);
                        });
                  }),
                  e
                );
              })();
            function de(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var ce = (function () {
              function e(e) {
                var t = e.element,
                  i = e.classNames;
                if (
                  ((this.element = t),
                  (this.classNames = i),
                  !(
                    t instanceof HTMLInputElement ||
                    t instanceof HTMLSelectElement
                  ))
                )
                  throw new TypeError("Invalid element passed");
                this.isDisabled = !1;
              }
              var t,
                i,
                s,
                n = e.prototype;
              return (
                (n.conceal = function () {
                  this.element.classList.add(this.classNames.input),
                    (this.element.hidden = !0),
                    (this.element.tabIndex = -1);
                  var e = this.element.getAttribute("style");
                  e && this.element.setAttribute("data-choice-orig-style", e),
                    this.element.setAttribute("data-choice", "active");
                }),
                (n.reveal = function () {
                  this.element.classList.remove(this.classNames.input),
                    (this.element.hidden = !1),
                    this.element.removeAttribute("tabindex");
                  var e = this.element.getAttribute("data-choice-orig-style");
                  e
                    ? (this.element.removeAttribute("data-choice-orig-style"),
                      this.element.setAttribute("style", e))
                    : this.element.removeAttribute("style"),
                    this.element.removeAttribute("data-choice"),
                    (this.element.value = this.element.value);
                }),
                (n.enable = function () {
                  this.element.removeAttribute("disabled"),
                    (this.element.disabled = !1),
                    (this.isDisabled = !1);
                }),
                (n.disable = function () {
                  this.element.setAttribute("disabled", ""),
                    (this.element.disabled = !0),
                    (this.isDisabled = !0);
                }),
                (n.triggerEvent = function (e, t) {
                  !(function (e, t, i) {
                    void 0 === i && (i = null);
                    var s = new CustomEvent(t, {
                      detail: i,
                      bubbles: !0,
                      cancelable: !0,
                    });
                    e.dispatchEvent(s);
                  })(this.element, e, t);
                }),
                (t = e),
                (i = [
                  {
                    key: "isActive",
                    get: function () {
                      return "active" === this.element.dataset.choice;
                    },
                  },
                  {
                    key: "dir",
                    get: function () {
                      return this.element.dir;
                    },
                  },
                  {
                    key: "value",
                    get: function () {
                      return this.element.value;
                    },
                    set: function (e) {
                      this.element.value = e;
                    },
                  },
                ]) && de(t.prototype, i),
                s && de(t, s),
                e
              );
            })();
            function he(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var ue = (function (e) {
              var t, i, s, n, a;
              function r(t) {
                var i,
                  s = t.element,
                  n = t.classNames,
                  a = t.delimiter;
                return (
                  ((i =
                    e.call(this, { element: s, classNames: n }) ||
                    this).delimiter = a),
                  i
                );
              }
              return (
                (i = e),
                ((t = r).prototype = Object.create(i.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = i),
                (s = r),
                (n = [
                  {
                    key: "value",
                    get: function () {
                      return this.element.value;
                    },
                    set: function (e) {
                      var t = e
                        .map(function (e) {
                          return e.value;
                        })
                        .join(this.delimiter);
                      this.element.setAttribute("value", t),
                        (this.element.value = t);
                    },
                  },
                ]) && he(s.prototype, n),
                a && he(s, a),
                r
              );
            })(ce);
            function pe(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var me = (function (e) {
                var t, i, s, n, a;
                function r(t) {
                  var i,
                    s = t.element,
                    n = t.classNames,
                    a = t.template;
                  return (
                    ((i =
                      e.call(this, { element: s, classNames: n }) ||
                      this).template = a),
                    i
                  );
                }
                return (
                  (i = e),
                  ((t = r).prototype = Object.create(i.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = i),
                  (r.prototype.appendDocFragment = function (e) {
                    (this.element.innerHTML = ""), this.element.appendChild(e);
                  }),
                  (s = r),
                  (n = [
                    {
                      key: "placeholderOption",
                      get: function () {
                        return (
                          this.element.querySelector('option[value=""]') ||
                          this.element.querySelector("option[placeholder]")
                        );
                      },
                    },
                    {
                      key: "optionGroups",
                      get: function () {
                        return Array.from(
                          this.element.getElementsByTagName("OPTGROUP")
                        );
                      },
                    },
                    {
                      key: "options",
                      get: function () {
                        return Array.from(this.element.options);
                      },
                      set: function (e) {
                        var t = this,
                          i = document.createDocumentFragment();
                        e.forEach(function (e) {
                          return (
                            (s = e), (n = t.template(s)), void i.appendChild(n)
                          );
                          var s, n;
                        }),
                          this.appendDocFragment(i);
                      },
                    },
                  ]) && pe(s.prototype, n),
                  a && pe(s, a),
                  r
                );
              })(ce),
              fe = {
                containerOuter: function (e, t, i, s, n, a) {
                  var r = e.containerOuter,
                    o = Object.assign(document.createElement("div"), {
                      className: r,
                    });
                  return (
                    (o.dataset.type = a),
                    t && (o.dir = t),
                    s && (o.tabIndex = 0),
                    i &&
                      (o.setAttribute("role", n ? "combobox" : "listbox"),
                      n && o.setAttribute("aria-autocomplete", "list")),
                    o.setAttribute("aria-haspopup", "true"),
                    o.setAttribute("aria-expanded", "false"),
                    o
                  );
                },
                containerInner: function (e) {
                  var t = e.containerInner;
                  return Object.assign(document.createElement("div"), {
                    className: t,
                  });
                },
                itemList: function (e, t) {
                  var i = e.list,
                    s = e.listSingle,
                    n = e.listItems;
                  return Object.assign(document.createElement("div"), {
                    className: i + " " + (t ? s : n),
                  });
                },
                placeholder: function (e, t) {
                  var i = e.placeholder;
                  return Object.assign(document.createElement("div"), {
                    className: i,
                    innerHTML: t,
                  });
                },
                item: function (e, t, i) {
                  var s = e.item,
                    n = e.button,
                    a = e.highlightedState,
                    r = e.itemSelectable,
                    o = e.placeholder,
                    l = t.id,
                    d = t.value,
                    c = t.label,
                    h = t.customProperties,
                    u = t.active,
                    p = t.disabled,
                    m = t.highlighted,
                    f = t.placeholder,
                    v = Object.assign(document.createElement("div"), {
                      className: s,
                      innerHTML: c,
                    });
                  if (
                    (Object.assign(v.dataset, {
                      item: "",
                      id: l,
                      value: d,
                      customProperties: h,
                    }),
                    u && v.setAttribute("aria-selected", "true"),
                    p && v.setAttribute("aria-disabled", "true"),
                    f && v.classList.add(o),
                    v.classList.add(m ? a : r),
                    i)
                  ) {
                    p && v.classList.remove(r), (v.dataset.deletable = "");
                    var g = Object.assign(document.createElement("button"), {
                      type: "button",
                      className: n,
                      innerHTML: "Remove item",
                    });
                    g.setAttribute("aria-label", "Remove item: '" + d + "'"),
                      (g.dataset.button = ""),
                      v.appendChild(g);
                  }
                  return v;
                },
                choiceList: function (e, t) {
                  var i = e.list,
                    s = Object.assign(document.createElement("div"), {
                      className: i,
                    });
                  return (
                    t || s.setAttribute("aria-multiselectable", "true"),
                    s.setAttribute("role", "listbox"),
                    s
                  );
                },
                choiceGroup: function (e, t) {
                  var i = e.group,
                    s = e.groupHeading,
                    n = e.itemDisabled,
                    a = t.id,
                    r = t.value,
                    o = t.disabled,
                    l = Object.assign(document.createElement("div"), {
                      className: i + " " + (o ? n : ""),
                    });
                  return (
                    l.setAttribute("role", "group"),
                    Object.assign(l.dataset, { group: "", id: a, value: r }),
                    o && l.setAttribute("aria-disabled", "true"),
                    l.appendChild(
                      Object.assign(document.createElement("div"), {
                        className: s,
                        innerHTML: r,
                      })
                    ),
                    l
                  );
                },
                choice: function (e, t, i) {
                  var s = e.item,
                    n = e.itemChoice,
                    a = e.itemSelectable,
                    r = e.selectedState,
                    o = e.itemDisabled,
                    l = e.placeholder,
                    d = t.id,
                    c = t.value,
                    h = t.label,
                    u = t.groupId,
                    p = t.elementId,
                    m = t.disabled,
                    f = t.selected,
                    v = t.placeholder,
                    g = Object.assign(document.createElement("div"), {
                      id: p,
                      innerHTML: h,
                      className: s + " " + n,
                    });
                  return (
                    f && g.classList.add(r),
                    v && g.classList.add(l),
                    g.setAttribute("role", u > 0 ? "treeitem" : "option"),
                    Object.assign(g.dataset, {
                      choice: "",
                      id: d,
                      value: c,
                      selectText: i,
                    }),
                    m
                      ? (g.classList.add(o),
                        (g.dataset.choiceDisabled = ""),
                        g.setAttribute("aria-disabled", "true"))
                      : (g.classList.add(a), (g.dataset.choiceSelectable = "")),
                    g
                  );
                },
                input: function (e, t) {
                  var i = e.input,
                    s = e.inputCloned,
                    n = Object.assign(document.createElement("input"), {
                      type: "text",
                      className: i + " " + s,
                      autocomplete: "off",
                      autocapitalize: "off",
                      spellcheck: !1,
                    });
                  return (
                    n.setAttribute("role", "textbox"),
                    n.setAttribute("aria-autocomplete", "list"),
                    n.setAttribute("aria-label", t),
                    n
                  );
                },
                dropdown: function (e) {
                  var t = e.list,
                    i = e.listDropdown,
                    s = document.createElement("div");
                  return (
                    s.classList.add(t, i),
                    s.setAttribute("aria-expanded", "false"),
                    s
                  );
                },
                notice: function (e, t, i) {
                  var s = e.item,
                    n = e.itemChoice,
                    a = e.noResults,
                    r = e.noChoices;
                  void 0 === i && (i = "");
                  var o = [s, n];
                  return (
                    "no-choices" === i
                      ? o.push(r)
                      : "no-results" === i && o.push(a),
                    Object.assign(document.createElement("div"), {
                      innerHTML: t,
                      className: o.join(" "),
                    })
                  );
                },
                option: function (e) {
                  var t = e.label,
                    i = e.value,
                    s = e.customProperties,
                    n = e.active,
                    a = e.disabled,
                    r = new Option(t, i, !1, n);
                  return (
                    s && (r.dataset.customProperties = s), (r.disabled = a), r
                  );
                },
              },
              ve = function (e) {
                return void 0 === e && (e = !0), { type: q, active: e };
              },
              ge = function (e, t) {
                return { type: K, id: e, highlighted: t };
              },
              be = function (e) {
                var t = e.value,
                  i = e.id,
                  s = e.active,
                  n = e.disabled;
                return { type: X, value: t, id: i, active: s, disabled: n };
              },
              ye = function (e) {
                return { type: "SET_IS_LOADING", isLoading: e };
              };
            function we(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            var Ee =
                "-ms-scroll-limit" in document.documentElement.style &&
                "-ms-ime-align" in document.documentElement.style,
              Se = {},
              xe = (function () {
                var e, t, i;
                function s(e, t) {
                  var i = this;
                  void 0 === e && (e = "[data-choice]"),
                    void 0 === t && (t = {}),
                    (this.config = r.a.all([O, s.defaults.options, t], {
                      arrayMerge: function (e, t) {
                        return [].concat(t);
                      },
                    }));
                  var n,
                    a,
                    o,
                    l,
                    d =
                      ((n = this.config),
                      (a = O),
                      (o = Object.keys(n).sort()),
                      (l = Object.keys(a).sort()),
                      o.filter(function (e) {
                        return l.indexOf(e) < 0;
                      }));
                  d.length &&
                    console.warn(
                      "Unknown config option(s) passed",
                      d.join(", ")
                    );
                  var c = "string" == typeof e ? document.querySelector(e) : e;
                  if (
                    !(
                      c instanceof HTMLInputElement ||
                      c instanceof HTMLSelectElement
                    )
                  )
                    throw TypeError(
                      "Expected one of the following types text|select-one|select-multiple"
                    );
                  if (
                    ((this._isTextElement = "text" === c.type),
                    (this._isSelectOneElement = "select-one" === c.type),
                    (this._isSelectMultipleElement =
                      "select-multiple" === c.type),
                    (this._isSelectElement =
                      this._isSelectOneElement ||
                      this._isSelectMultipleElement),
                    (this.config.searchEnabled =
                      this._isSelectMultipleElement ||
                      this.config.searchEnabled),
                    ["auto", "always"].includes(
                      this.config.renderSelectedChoices
                    ) || (this.config.renderSelectedChoices = "auto"),
                    t.addItemFilter && "function" != typeof t.addItemFilter)
                  ) {
                    var h =
                      t.addItemFilter instanceof RegExp
                        ? t.addItemFilter
                        : new RegExp(t.addItemFilter);
                    this.config.addItemFilter = h.test.bind(h);
                  }
                  if (
                    (this._isTextElement
                      ? (this.passedElement = new ue({
                          element: c,
                          classNames: this.config.classNames,
                          delimiter: this.config.delimiter,
                        }))
                      : (this.passedElement = new me({
                          element: c,
                          classNames: this.config.classNames,
                          template: function (e) {
                            return i._templates.option(e);
                          },
                        })),
                    (this.initialised = !1),
                    (this._store = new L()),
                    (this._initialState = {}),
                    (this._currentState = {}),
                    (this._prevState = {}),
                    (this._currentValue = ""),
                    (this._canSearch = this.config.searchEnabled),
                    (this._isScrollingOnIe = !1),
                    (this._highlightPosition = 0),
                    (this._wasTap = !0),
                    (this._placeholderValue = this._generatePlaceholderValue()),
                    (this._baseId = (function (e, t) {
                      var i = e.id || (e.name && e.name + "-" + y(2)) || y(4);
                      return (i =
                        t + "-" + (i = i.replace(/(:|\.|\[|\]|,)/g, "")));
                    })(this.passedElement.element, "choices-")),
                    (this._direction = this.passedElement.dir),
                    !this._direction)
                  ) {
                    var u = window.getComputedStyle(
                      this.passedElement.element
                    ).direction;
                    u !==
                      window.getComputedStyle(document.documentElement)
                        .direction && (this._direction = u);
                  }
                  if (
                    ((this._idNames = { itemChoice: "item-choice" }),
                    (this._presetGroups = this.passedElement.optionGroups),
                    (this._presetOptions = this.passedElement.options),
                    (this._presetChoices = this.config.choices),
                    (this._presetItems = this.config.items),
                    this.passedElement.value &&
                      (this._presetItems = this._presetItems.concat(
                        this.passedElement.value.split(this.config.delimiter)
                      )),
                    this.passedElement.options &&
                      this.passedElement.options.forEach(function (e) {
                        i._presetChoices.push({
                          value: e.value,
                          label: e.innerHTML,
                          selected: e.selected,
                          disabled: e.disabled || e.parentNode.disabled,
                          placeholder:
                            "" === e.value || e.hasAttribute("placeholder"),
                          customProperties: e.getAttribute(
                            "data-custom-properties"
                          ),
                        });
                      }),
                    (this._render = this._render.bind(this)),
                    (this._onFocus = this._onFocus.bind(this)),
                    (this._onBlur = this._onBlur.bind(this)),
                    (this._onKeyUp = this._onKeyUp.bind(this)),
                    (this._onKeyDown = this._onKeyDown.bind(this)),
                    (this._onClick = this._onClick.bind(this)),
                    (this._onTouchMove = this._onTouchMove.bind(this)),
                    (this._onTouchEnd = this._onTouchEnd.bind(this)),
                    (this._onMouseDown = this._onMouseDown.bind(this)),
                    (this._onMouseOver = this._onMouseOver.bind(this)),
                    (this._onFormReset = this._onFormReset.bind(this)),
                    (this._onAKey = this._onAKey.bind(this)),
                    (this._onEnterKey = this._onEnterKey.bind(this)),
                    (this._onEscapeKey = this._onEscapeKey.bind(this)),
                    (this._onDirectionKey = this._onDirectionKey.bind(this)),
                    (this._onDeleteKey = this._onDeleteKey.bind(this)),
                    this.passedElement.isActive)
                  )
                    return (
                      this.config.silent ||
                        console.warn(
                          "Trying to initialise Choices on element already initialised"
                        ),
                      void (this.initialised = !0)
                    );
                  this.init();
                }
                (e = s),
                  (i = [
                    {
                      key: "defaults",
                      get: function () {
                        return Object.preventExtensions({
                          get options() {
                            return Se;
                          },
                          get templates() {
                            return fe;
                          },
                        });
                      },
                    },
                  ]),
                  (t = null) && we(e.prototype, t),
                  i && we(e, i);
                var a = s.prototype;
                return (
                  (a.init = function () {
                    if (!this.initialised) {
                      this._createTemplates(),
                        this._createElements(),
                        this._createStructure(),
                        (this._initialState = C(this._store.state)),
                        this._store.subscribe(this._render),
                        this._render(),
                        this._addEventListeners(),
                        (!this.config.addItems ||
                          this.passedElement.element.hasAttribute(
                            "disabled"
                          )) &&
                          this.disable(),
                        (this.initialised = !0);
                      var e = this.config.callbackOnInit;
                      e && "function" == typeof e && e.call(this);
                    }
                  }),
                  (a.destroy = function () {
                    this.initialised &&
                      (this._removeEventListeners(),
                      this.passedElement.reveal(),
                      this.containerOuter.unwrap(this.passedElement.element),
                      this.clearStore(),
                      this._isSelectElement &&
                        (this.passedElement.options = this._presetOptions),
                      (this._templates = null),
                      (this.initialised = !1));
                  }),
                  (a.enable = function () {
                    return (
                      this.passedElement.isDisabled &&
                        this.passedElement.enable(),
                      this.containerOuter.isDisabled &&
                        (this._addEventListeners(),
                        this.input.enable(),
                        this.containerOuter.enable()),
                      this
                    );
                  }),
                  (a.disable = function () {
                    return (
                      this.passedElement.isDisabled ||
                        this.passedElement.disable(),
                      this.containerOuter.isDisabled ||
                        (this._removeEventListeners(),
                        this.input.disable(),
                        this.containerOuter.disable()),
                      this
                    );
                  }),
                  (a.highlightItem = function (e, t) {
                    if ((void 0 === t && (t = !0), !e)) return this;
                    var i = e.id,
                      s = e.groupId,
                      n = void 0 === s ? -1 : s,
                      a = e.value,
                      r = void 0 === a ? "" : a,
                      o = e.label,
                      l = void 0 === o ? "" : o,
                      d = n >= 0 ? this._store.getGroupById(n) : null;
                    return (
                      this._store.dispatch(ge(i, !0)),
                      t &&
                        this.passedElement.triggerEvent(B, {
                          id: i,
                          value: r,
                          label: l,
                          groupValue: d && d.value ? d.value : null,
                        }),
                      this
                    );
                  }),
                  (a.unhighlightItem = function (e) {
                    if (!e) return this;
                    var t = e.id,
                      i = e.groupId,
                      s = void 0 === i ? -1 : i,
                      n = e.value,
                      a = void 0 === n ? "" : n,
                      r = e.label,
                      o = void 0 === r ? "" : r,
                      l = s >= 0 ? this._store.getGroupById(s) : null;
                    return (
                      this._store.dispatch(ge(t, !1)),
                      this.passedElement.triggerEvent(B, {
                        id: t,
                        value: a,
                        label: o,
                        groupValue: l && l.value ? l.value : null,
                      }),
                      this
                    );
                  }),
                  (a.highlightAll = function () {
                    var e = this;
                    return (
                      this._store.items.forEach(function (t) {
                        return e.highlightItem(t);
                      }),
                      this
                    );
                  }),
                  (a.unhighlightAll = function () {
                    var e = this;
                    return (
                      this._store.items.forEach(function (t) {
                        return e.unhighlightItem(t);
                      }),
                      this
                    );
                  }),
                  (a.removeActiveItemsByValue = function (e) {
                    var t = this;
                    return (
                      this._store.activeItems
                        .filter(function (t) {
                          return t.value === e;
                        })
                        .forEach(function (e) {
                          return t._removeItem(e);
                        }),
                      this
                    );
                  }),
                  (a.removeActiveItems = function (e) {
                    var t = this;
                    return (
                      this._store.activeItems
                        .filter(function (t) {
                          return t.id !== e;
                        })
                        .forEach(function (e) {
                          return t._removeItem(e);
                        }),
                      this
                    );
                  }),
                  (a.removeHighlightedItems = function (e) {
                    var t = this;
                    return (
                      void 0 === e && (e = !1),
                      this._store.highlightedActiveItems.forEach(function (i) {
                        t._removeItem(i), e && t._triggerChange(i.value);
                      }),
                      this
                    );
                  }),
                  (a.showDropdown = function (e) {
                    var t = this;
                    return (
                      this.dropdown.isActive ||
                        requestAnimationFrame(function () {
                          t.dropdown.show(),
                            t.containerOuter.open(
                              t.dropdown.distanceFromTopWindow
                            ),
                            !e && t._canSearch && t.input.focus(),
                            t.passedElement.triggerEvent($, {});
                        }),
                      this
                    );
                  }),
                  (a.hideDropdown = function (e) {
                    var t = this;
                    return this.dropdown.isActive
                      ? (requestAnimationFrame(function () {
                          t.dropdown.hide(),
                            t.containerOuter.close(),
                            !e &&
                              t._canSearch &&
                              (t.input.removeActiveDescendant(),
                              t.input.blur()),
                            t.passedElement.triggerEvent(A, {});
                        }),
                        this)
                      : this;
                  }),
                  (a.getValue = function (e) {
                    void 0 === e && (e = !1);
                    var t = this._store.activeItems.reduce(function (t, i) {
                      var s = e ? i.value : i;
                      return t.push(s), t;
                    }, []);
                    return this._isSelectOneElement ? t[0] : t;
                  }),
                  (a.setValue = function (e) {
                    var t = this;
                    return this.initialised
                      ? (e.forEach(function (e) {
                          return t._setChoiceOrItem(e);
                        }),
                        this)
                      : this;
                  }),
                  (a.setChoiceByValue = function (e) {
                    var t = this;
                    return (
                      !this.initialised ||
                        this._isTextElement ||
                        (Array.isArray(e) ? e : [e]).forEach(function (e) {
                          return t._findAndSelectChoiceByValue(e);
                        }),
                      this
                    );
                  }),
                  (a.setChoices = function (e, t, i, s) {
                    var n = this;
                    if (
                      (void 0 === e && (e = []),
                      void 0 === t && (t = "value"),
                      void 0 === i && (i = "label"),
                      void 0 === s && (s = !1),
                      !this.initialised)
                    )
                      throw new ReferenceError(
                        "setChoices was called on a non-initialized instance of Choices"
                      );
                    if (!this._isSelectElement)
                      throw new TypeError(
                        "setChoices can't be used with INPUT based Choices"
                      );
                    if ("string" != typeof t || !t)
                      throw new TypeError(
                        "value parameter must be a name of 'value' field in passed objects"
                      );
                    if ((s && this.clearChoices(), "function" == typeof e)) {
                      var a = e(this);
                      if ("function" == typeof Promise && a instanceof Promise)
                        return new Promise(function (e) {
                          return requestAnimationFrame(e);
                        })
                          .then(function () {
                            return n._handleLoadingState(!0);
                          })
                          .then(function () {
                            return a;
                          })
                          .then(function (e) {
                            return n.setChoices(e, t, i, s);
                          })
                          .catch(function (e) {
                            n.config.silent || console.error(e);
                          })
                          .then(function () {
                            return n._handleLoadingState(!1);
                          })
                          .then(function () {
                            return n;
                          });
                      if (!Array.isArray(a))
                        throw new TypeError(
                          ".setChoices first argument function must return either array of choices or Promise, got: " +
                            typeof a
                        );
                      return this.setChoices(a, t, i, !1);
                    }
                    if (!Array.isArray(e))
                      throw new TypeError(
                        ".setChoices must be called either with array of choices with a function resulting into Promise of array of choices"
                      );
                    return (
                      this.containerOuter.removeLoadingState(),
                      this._startLoading(),
                      e.forEach(function (e) {
                        e.choices
                          ? n._addGroup({
                              id: parseInt(e.id, 10) || null,
                              group: e,
                              valueKey: t,
                              labelKey: i,
                            })
                          : n._addChoice({
                              value: e[t],
                              label: e[i],
                              isSelected: e.selected,
                              isDisabled: e.disabled,
                              customProperties: e.customProperties,
                              placeholder: e.placeholder,
                            });
                      }),
                      this._stopLoading(),
                      this
                    );
                  }),
                  (a.clearChoices = function () {
                    return this._store.dispatch({ type: R }), this;
                  }),
                  (a.clearStore = function () {
                    return this._store.dispatch({ type: "CLEAR_ALL" }), this;
                  }),
                  (a.clearInput = function () {
                    var e = !this._isSelectOneElement;
                    return (
                      this.input.clear(e),
                      !this._isTextElement &&
                        this._canSearch &&
                        ((this._isSearching = !1),
                        this._store.dispatch(ve(!0))),
                      this
                    );
                  }),
                  (a._render = function () {
                    if (!this._store.isLoading()) {
                      this._currentState = this._store.state;
                      var e =
                          this._currentState.choices !==
                            this._prevState.choices ||
                          this._currentState.groups !==
                            this._prevState.groups ||
                          this._currentState.items !== this._prevState.items,
                        t = this._isSelectElement,
                        i = this._currentState.items !== this._prevState.items;
                      e &&
                        (t && this._renderChoices(),
                        i && this._renderItems(),
                        (this._prevState = this._currentState));
                    }
                  }),
                  (a._renderChoices = function () {
                    var e = this,
                      t = this._store,
                      i = t.activeGroups,
                      s = t.activeChoices,
                      n = document.createDocumentFragment();
                    if (
                      (this.choiceList.clear(),
                      this.config.resetScrollPosition &&
                        requestAnimationFrame(function () {
                          return e.choiceList.scrollToTop();
                        }),
                      i.length >= 1 && !this._isSearching)
                    ) {
                      var a = s.filter(function (e) {
                        return !0 === e.placeholder && -1 === e.groupId;
                      });
                      a.length >= 1 && (n = this._createChoicesFragment(a, n)),
                        (n = this._createGroupsFragment(i, s, n));
                    } else
                      s.length >= 1 && (n = this._createChoicesFragment(s, n));
                    if (n.childNodes && n.childNodes.length > 0) {
                      var r = this._store.activeItems,
                        o = this._canAddItem(r, this.input.value);
                      o.response
                        ? (this.choiceList.append(n), this._highlightChoice())
                        : this.choiceList.append(
                            this._getTemplate("notice", o.notice)
                          );
                    } else {
                      var l, d;
                      this._isSearching
                        ? ((d =
                            "function" == typeof this.config.noResultsText
                              ? this.config.noResultsText()
                              : this.config.noResultsText),
                          (l = this._getTemplate("notice", d, "no-results")))
                        : ((d =
                            "function" == typeof this.config.noChoicesText
                              ? this.config.noChoicesText()
                              : this.config.noChoicesText),
                          (l = this._getTemplate("notice", d, "no-choices"))),
                        this.choiceList.append(l);
                    }
                  }),
                  (a._renderItems = function () {
                    var e = this._store.activeItems || [];
                    this.itemList.clear();
                    var t = this._createItemsFragment(e);
                    t.childNodes && this.itemList.append(t);
                  }),
                  (a._createGroupsFragment = function (e, t, i) {
                    var s = this;
                    return (
                      void 0 === i && (i = document.createDocumentFragment()),
                      this.config.shouldSort && e.sort(this.config.sorter),
                      e.forEach(function (e) {
                        var n = (function (e) {
                          return t.filter(function (t) {
                            return s._isSelectOneElement
                              ? t.groupId === e.id
                              : t.groupId === e.id &&
                                  ("always" ===
                                    s.config.renderSelectedChoices ||
                                    !t.selected);
                          });
                        })(e);
                        if (n.length >= 1) {
                          var a = s._getTemplate("choiceGroup", e);
                          i.appendChild(a), s._createChoicesFragment(n, i, !0);
                        }
                      }),
                      i
                    );
                  }),
                  (a._createChoicesFragment = function (e, t, i) {
                    var s = this;
                    void 0 === t && (t = document.createDocumentFragment()),
                      void 0 === i && (i = !1);
                    var n = this.config,
                      a = n.renderSelectedChoices,
                      r = n.searchResultLimit,
                      o = n.renderChoiceLimit,
                      l = this._isSearching ? T : this.config.sorter,
                      d = function (e) {
                        if (
                          "auto" !== a ||
                          s._isSelectOneElement ||
                          !e.selected
                        ) {
                          var i = s._getTemplate(
                            "choice",
                            e,
                            s.config.itemSelectText
                          );
                          t.appendChild(i);
                        }
                      },
                      c = e;
                    "auto" !== a ||
                      this._isSelectOneElement ||
                      (c = e.filter(function (e) {
                        return !e.selected;
                      }));
                    var h = c.reduce(
                        function (e, t) {
                          return (
                            t.placeholder
                              ? e.placeholderChoices.push(t)
                              : e.normalChoices.push(t),
                            e
                          );
                        },
                        { placeholderChoices: [], normalChoices: [] }
                      ),
                      u = h.placeholderChoices,
                      p = h.normalChoices;
                    (this.config.shouldSort || this._isSearching) && p.sort(l);
                    var m = c.length,
                      f = this._isSelectOneElement ? [].concat(u, p) : p;
                    this._isSearching ? (m = r) : o && o > 0 && !i && (m = o);
                    for (var v = 0; v < m; v += 1) f[v] && d(f[v]);
                    return t;
                  }),
                  (a._createItemsFragment = function (e, t) {
                    var i = this;
                    void 0 === t && (t = document.createDocumentFragment());
                    var s = this.config,
                      n = s.shouldSortItems,
                      a = s.sorter,
                      r = s.removeItemButton;
                    return (
                      n && !this._isSelectOneElement && e.sort(a),
                      this._isTextElement
                        ? (this.passedElement.value = e)
                        : (this.passedElement.options = e),
                      e.forEach(function (e) {
                        var s = i._getTemplate("item", e, r);
                        t.appendChild(s);
                      }),
                      t
                    );
                  }),
                  (a._triggerChange = function (e) {
                    null != e &&
                      this.passedElement.triggerEvent(D, { value: e });
                  }),
                  (a._selectPlaceholderChoice = function () {
                    var e = this._store.placeholderChoice;
                    e &&
                      (this._addItem({
                        value: e.value,
                        label: e.label,
                        choiceId: e.id,
                        groupId: e.groupId,
                        placeholder: e.placeholder,
                      }),
                      this._triggerChange(e.value));
                  }),
                  (a._handleButtonAction = function (e, t) {
                    if (
                      e &&
                      t &&
                      this.config.removeItems &&
                      this.config.removeItemButton
                    ) {
                      var i = t.parentNode.getAttribute("data-id"),
                        s = e.find(function (e) {
                          return e.id === parseInt(i, 10);
                        });
                      this._removeItem(s),
                        this._triggerChange(s.value),
                        this._isSelectOneElement &&
                          this._selectPlaceholderChoice();
                    }
                  }),
                  (a._handleItemAction = function (e, t, i) {
                    var s = this;
                    if (
                      (void 0 === i && (i = !1),
                      e &&
                        t &&
                        this.config.removeItems &&
                        !this._isSelectOneElement)
                    ) {
                      var n = t.getAttribute("data-id");
                      e.forEach(function (e) {
                        e.id !== parseInt(n, 10) || e.highlighted
                          ? !i && e.highlighted && s.unhighlightItem(e)
                          : s.highlightItem(e);
                      }),
                        this.input.focus();
                    }
                  }),
                  (a._handleChoiceAction = function (e, t) {
                    if (e && t) {
                      var i = t.dataset.id,
                        s = this._store.getChoiceById(i);
                      if (s) {
                        var n = e[0] && e[0].keyCode ? e[0].keyCode : null,
                          a = this.dropdown.isActive;
                        (s.keyCode = n),
                          this.passedElement.triggerEvent(z, { choice: s }),
                          s.selected ||
                            s.disabled ||
                            (this._canAddItem(e, s.value).response &&
                              (this._addItem({
                                value: s.value,
                                label: s.label,
                                choiceId: s.id,
                                groupId: s.groupId,
                                customProperties: s.customProperties,
                                placeholder: s.placeholder,
                                keyCode: s.keyCode,
                              }),
                              this._triggerChange(s.value))),
                          this.clearInput(),
                          a &&
                            this._isSelectOneElement &&
                            (this.hideDropdown(!0),
                            this.containerOuter.focus());
                      }
                    }
                  }),
                  (a._handleBackspace = function (e) {
                    if (this.config.removeItems && e) {
                      var t = e[e.length - 1],
                        i = e.some(function (e) {
                          return e.highlighted;
                        });
                      this.config.editItems && !i && t
                        ? ((this.input.value = t.value),
                          this.input.setWidth(),
                          this._removeItem(t),
                          this._triggerChange(t.value))
                        : (i || this.highlightItem(t, !1),
                          this.removeHighlightedItems(!0));
                    }
                  }),
                  (a._startLoading = function () {
                    this._store.dispatch(ye(!0));
                  }),
                  (a._stopLoading = function () {
                    this._store.dispatch(ye(!1));
                  }),
                  (a._handleLoadingState = function (e) {
                    void 0 === e && (e = !0);
                    var t = this.itemList.getChild(
                      "." + this.config.classNames.placeholder
                    );
                    e
                      ? (this.disable(),
                        this.containerOuter.addLoadingState(),
                        this._isSelectOneElement
                          ? t
                            ? (t.innerHTML = this.config.loadingText)
                            : ((t = this._getTemplate(
                                "placeholder",
                                this.config.loadingText
                              )),
                              this.itemList.append(t))
                          : (this.input.placeholder = this.config.loadingText))
                      : (this.enable(),
                        this.containerOuter.removeLoadingState(),
                        this._isSelectOneElement
                          ? (t.innerHTML = this._placeholderValue || "")
                          : (this.input.placeholder =
                              this._placeholderValue || ""));
                  }),
                  (a._handleSearch = function (e) {
                    if (e && this.input.isFocussed) {
                      var t = this._store.choices,
                        i = this.config,
                        s = i.searchFloor,
                        n = i.searchChoices,
                        a = t.some(function (e) {
                          return !e.active;
                        });
                      if (e && e.length >= s) {
                        var r = n ? this._searchChoices(e) : 0;
                        this.passedElement.triggerEvent(N, {
                          value: e,
                          resultCount: r,
                        });
                      } else
                        a &&
                          ((this._isSearching = !1),
                          this._store.dispatch(ve(!0)));
                    }
                  }),
                  (a._canAddItem = function (e, t) {
                    var i = !0,
                      s =
                        "function" == typeof this.config.addItemText
                          ? this.config.addItemText(t)
                          : this.config.addItemText;
                    if (!this._isSelectOneElement) {
                      var n = (function (e, t, i) {
                        return (
                          void 0 === i && (i = "value"),
                          e.some(function (e) {
                            return "string" == typeof t
                              ? e[i] === t.trim()
                              : e[i] === t;
                          })
                        );
                      })(e, t);
                      this.config.maxItemCount > 0 &&
                        this.config.maxItemCount <= e.length &&
                        ((i = !1),
                        (s =
                          "function" == typeof this.config.maxItemText
                            ? this.config.maxItemText(this.config.maxItemCount)
                            : this.config.maxItemText)),
                        !this.config.duplicateItemsAllowed &&
                          n &&
                          i &&
                          ((i = !1),
                          (s =
                            "function" == typeof this.config.uniqueItemText
                              ? this.config.uniqueItemText(t)
                              : this.config.uniqueItemText)),
                        this._isTextElement &&
                          this.config.addItems &&
                          i &&
                          "function" == typeof this.config.addItemFilter &&
                          !this.config.addItemFilter(t) &&
                          ((i = !1),
                          (s =
                            "function" == typeof this.config.customAddItemText
                              ? this.config.customAddItemText(t)
                              : this.config.customAddItemText));
                    }
                    return { response: i, notice: s };
                  }),
                  (a._searchChoices = function (e) {
                    var t = "string" == typeof e ? e.trim() : e,
                      i =
                        "string" == typeof this._currentValue
                          ? this._currentValue.trim()
                          : this._currentValue;
                    if (t.length < 1 && t === i + " ") return 0;
                    var s = this._store.searchableChoices,
                      a = t,
                      r = [].concat(this.config.searchFields),
                      o = Object.assign(this.config.fuseOptions, { keys: r }),
                      l = new n.a(s, o).search(a);
                    return (
                      (this._currentValue = t),
                      (this._highlightPosition = 0),
                      (this._isSearching = !0),
                      this._store.dispatch(
                        (function (e) {
                          return { type: V, results: e };
                        })(l)
                      ),
                      l.length
                    );
                  }),
                  (a._addEventListeners = function () {
                    var e = document.documentElement;
                    e.addEventListener("touchend", this._onTouchEnd, !0),
                      this.containerOuter.element.addEventListener(
                        "keydown",
                        this._onKeyDown,
                        !0
                      ),
                      this.containerOuter.element.addEventListener(
                        "mousedown",
                        this._onMouseDown,
                        !0
                      ),
                      e.addEventListener("click", this._onClick, {
                        passive: !0,
                      }),
                      e.addEventListener("touchmove", this._onTouchMove, {
                        passive: !0,
                      }),
                      this.dropdown.element.addEventListener(
                        "mouseover",
                        this._onMouseOver,
                        { passive: !0 }
                      ),
                      this._isSelectOneElement &&
                        (this.containerOuter.element.addEventListener(
                          "focus",
                          this._onFocus,
                          { passive: !0 }
                        ),
                        this.containerOuter.element.addEventListener(
                          "blur",
                          this._onBlur,
                          { passive: !0 }
                        )),
                      this.input.element.addEventListener(
                        "keyup",
                        this._onKeyUp,
                        { passive: !0 }
                      ),
                      this.input.element.addEventListener(
                        "focus",
                        this._onFocus,
                        { passive: !0 }
                      ),
                      this.input.element.addEventListener(
                        "blur",
                        this._onBlur,
                        { passive: !0 }
                      ),
                      this.input.element.form &&
                        this.input.element.form.addEventListener(
                          "reset",
                          this._onFormReset,
                          { passive: !0 }
                        ),
                      this.input.addEventListeners();
                  }),
                  (a._removeEventListeners = function () {
                    var e = document.documentElement;
                    e.removeEventListener("touchend", this._onTouchEnd, !0),
                      this.containerOuter.element.removeEventListener(
                        "keydown",
                        this._onKeyDown,
                        !0
                      ),
                      this.containerOuter.element.removeEventListener(
                        "mousedown",
                        this._onMouseDown,
                        !0
                      ),
                      e.removeEventListener("click", this._onClick),
                      e.removeEventListener("touchmove", this._onTouchMove),
                      this.dropdown.element.removeEventListener(
                        "mouseover",
                        this._onMouseOver
                      ),
                      this._isSelectOneElement &&
                        (this.containerOuter.element.removeEventListener(
                          "focus",
                          this._onFocus
                        ),
                        this.containerOuter.element.removeEventListener(
                          "blur",
                          this._onBlur
                        )),
                      this.input.element.removeEventListener(
                        "keyup",
                        this._onKeyUp
                      ),
                      this.input.element.removeEventListener(
                        "focus",
                        this._onFocus
                      ),
                      this.input.element.removeEventListener(
                        "blur",
                        this._onBlur
                      ),
                      this.input.element.form &&
                        this.input.element.form.removeEventListener(
                          "reset",
                          this._onFormReset
                        ),
                      this.input.removeEventListeners();
                  }),
                  (a._onKeyDown = function (e) {
                    var t,
                      i = e.target,
                      s = e.keyCode,
                      n = e.ctrlKey,
                      a = e.metaKey,
                      r = this._store.activeItems,
                      o = this.input.isFocussed,
                      l = this.dropdown.isActive,
                      d = this.itemList.hasChildren(),
                      c = String.fromCharCode(s),
                      h = U,
                      u = J,
                      p = Z,
                      m = Q,
                      f = ee,
                      v = te,
                      g = ie,
                      b = se,
                      y = ne,
                      w = n || a;
                    !this._isTextElement &&
                      /[a-zA-Z0-9-_ ]/.test(c) &&
                      this.showDropdown();
                    var E =
                      (((t = {})[m] = this._onAKey),
                      (t[p] = this._onEnterKey),
                      (t[f] = this._onEscapeKey),
                      (t[v] = this._onDirectionKey),
                      (t[b] = this._onDirectionKey),
                      (t[g] = this._onDirectionKey),
                      (t[y] = this._onDirectionKey),
                      (t[u] = this._onDeleteKey),
                      (t[h] = this._onDeleteKey),
                      t);
                    E[s] &&
                      E[s]({
                        event: e,
                        target: i,
                        keyCode: s,
                        metaKey: a,
                        activeItems: r,
                        hasFocusedInput: o,
                        hasActiveDropdown: l,
                        hasItems: d,
                        hasCtrlDownKeyPressed: w,
                      });
                  }),
                  (a._onKeyUp = function (e) {
                    var t = e.target,
                      i = e.keyCode,
                      s = this.input.value,
                      n = this._store.activeItems,
                      a = this._canAddItem(n, s),
                      r = U,
                      o = J;
                    if (this._isTextElement)
                      if (a.notice && s) {
                        var l = this._getTemplate("notice", a.notice);
                        (this.dropdown.element.innerHTML = l.outerHTML),
                          this.showDropdown(!0);
                      } else this.hideDropdown(!0);
                    else {
                      var d = (i === r || i === o) && !t.value,
                        c = !this._isTextElement && this._isSearching,
                        h = this._canSearch && a.response;
                      d && c
                        ? ((this._isSearching = !1),
                          this._store.dispatch(ve(!0)))
                        : h && this._handleSearch(this.input.value);
                    }
                    this._canSearch = this.config.searchEnabled;
                  }),
                  (a._onAKey = function (e) {
                    var t = e.hasItems;
                    e.hasCtrlDownKeyPressed &&
                      t &&
                      ((this._canSearch = !1),
                      this.config.removeItems &&
                        !this.input.value &&
                        this.input.element === document.activeElement &&
                        this.highlightAll());
                  }),
                  (a._onEnterKey = function (e) {
                    var t = e.event,
                      i = e.target,
                      s = e.activeItems,
                      n = e.hasActiveDropdown,
                      a = Z,
                      r = i.hasAttribute("data-button");
                    if (this._isTextElement && i.value) {
                      var o = this.input.value;
                      this._canAddItem(s, o).response &&
                        (this.hideDropdown(!0),
                        this._addItem({ value: o }),
                        this._triggerChange(o),
                        this.clearInput());
                    }
                    if (
                      (r &&
                        (this._handleButtonAction(s, i), t.preventDefault()),
                      n)
                    ) {
                      var l = this.dropdown.getChild(
                        "." + this.config.classNames.highlightedState
                      );
                      l &&
                        (s[0] && (s[0].keyCode = a),
                        this._handleChoiceAction(s, l)),
                        t.preventDefault();
                    } else
                      this._isSelectOneElement &&
                        (this.showDropdown(), t.preventDefault());
                  }),
                  (a._onEscapeKey = function (e) {
                    e.hasActiveDropdown &&
                      (this.hideDropdown(!0), this.containerOuter.focus());
                  }),
                  (a._onDirectionKey = function (e) {
                    var t,
                      i,
                      s,
                      n = e.event,
                      a = e.hasActiveDropdown,
                      r = e.keyCode,
                      o = e.metaKey,
                      l = ie,
                      d = se,
                      c = ne;
                    if (a || this._isSelectOneElement) {
                      this.showDropdown(), (this._canSearch = !1);
                      var h,
                        u = r === l || r === c ? 1 : -1;
                      if (o || r === c || r === d)
                        h =
                          u > 0
                            ? this.dropdown.element.querySelector(
                                "[data-choice-selectable]:last-of-type"
                              )
                            : this.dropdown.element.querySelector(
                                "[data-choice-selectable]"
                              );
                      else {
                        var p = this.dropdown.element.querySelector(
                          "." + this.config.classNames.highlightedState
                        );
                        h = p
                          ? (function (e, t, i) {
                              if (
                                (void 0 === i && (i = 1),
                                e instanceof Element && "string" == typeof t)
                              ) {
                                for (
                                  var s =
                                      (i > 0 ? "next" : "previous") +
                                      "ElementSibling",
                                    n = e[s];
                                  n;

                                ) {
                                  if (n.matches(t)) return n;
                                  n = n[s];
                                }
                                return n;
                              }
                            })(p, "[data-choice-selectable]", u)
                          : this.dropdown.element.querySelector(
                              "[data-choice-selectable]"
                            );
                      }
                      h &&
                        ((t = h),
                        (i = this.choiceList.element),
                        void 0 === (s = u) && (s = 1),
                        (t &&
                          (s > 0
                            ? i.scrollTop + i.offsetHeight >=
                              t.offsetTop + t.offsetHeight
                            : t.offsetTop >= i.scrollTop)) ||
                          this.choiceList.scrollToChildElement(h, u),
                        this._highlightChoice(h)),
                        n.preventDefault();
                    }
                  }),
                  (a._onDeleteKey = function (e) {
                    var t = e.event,
                      i = e.target,
                      s = e.hasFocusedInput,
                      n = e.activeItems;
                    !s ||
                      i.value ||
                      this._isSelectOneElement ||
                      (this._handleBackspace(n), t.preventDefault());
                  }),
                  (a._onTouchMove = function () {
                    this._wasTap && (this._wasTap = !1);
                  }),
                  (a._onTouchEnd = function (e) {
                    var t = (e || e.touches[0]).target;
                    this._wasTap &&
                      this.containerOuter.element.contains(t) &&
                      ((t === this.containerOuter.element ||
                        t === this.containerInner.element) &&
                        (this._isTextElement
                          ? this.input.focus()
                          : this._isSelectMultipleElement &&
                            this.showDropdown()),
                      e.stopPropagation()),
                      (this._wasTap = !0);
                  }),
                  (a._onMouseDown = function (e) {
                    var t = e.target;
                    if (t instanceof HTMLElement) {
                      if (Ee && this.choiceList.element.contains(t)) {
                        var i = this.choiceList.element.firstElementChild,
                          s =
                            "ltr" === this._direction
                              ? e.offsetX >= i.offsetWidth
                              : e.offsetX < i.offsetLeft;
                        this._isScrollingOnIe = s;
                      }
                      if (t !== this.input.element) {
                        var n = t.closest(
                          "[data-button],[data-item],[data-choice]"
                        );
                        if (n instanceof HTMLElement) {
                          var a = e.shiftKey,
                            r = this._store.activeItems,
                            o = n.dataset;
                          "button" in o
                            ? this._handleButtonAction(r, n)
                            : "item" in o
                            ? this._handleItemAction(r, n, a)
                            : "choice" in o && this._handleChoiceAction(r, n);
                        }
                        e.preventDefault();
                      }
                    }
                  }),
                  (a._onMouseOver = function (e) {
                    var t = e.target;
                    t instanceof HTMLElement &&
                      "choice" in t.dataset &&
                      this._highlightChoice(t);
                  }),
                  (a._onClick = function (e) {
                    var t = e.target;
                    this.containerOuter.element.contains(t)
                      ? this.dropdown.isActive || this.containerOuter.isDisabled
                        ? this._isSelectOneElement &&
                          t !== this.input.element &&
                          !this.dropdown.element.contains(t) &&
                          this.hideDropdown()
                        : this._isTextElement
                        ? document.activeElement !== this.input.element &&
                          this.input.focus()
                        : (this.showDropdown(), this.containerOuter.focus())
                      : (this._store.highlightedActiveItems.length > 0 &&
                          this.unhighlightAll(),
                        this.containerOuter.removeFocusState(),
                        this.hideDropdown(!0));
                  }),
                  (a._onFocus = function (e) {
                    var t,
                      i = this,
                      s = e.target;
                    this.containerOuter.element.contains(s) &&
                      (((t = {}).text = function () {
                        s === i.input.element &&
                          i.containerOuter.addFocusState();
                      }),
                      (t["select-one"] = function () {
                        i.containerOuter.addFocusState(),
                          s === i.input.element && i.showDropdown(!0);
                      }),
                      (t["select-multiple"] = function () {
                        s === i.input.element &&
                          (i.showDropdown(!0),
                          i.containerOuter.addFocusState());
                      }),
                      t)[this.passedElement.element.type]();
                  }),
                  (a._onBlur = function (e) {
                    var t = this,
                      i = e.target;
                    if (
                      this.containerOuter.element.contains(i) &&
                      !this._isScrollingOnIe
                    ) {
                      var s,
                        n = this._store.activeItems.some(function (e) {
                          return e.highlighted;
                        });
                      (((s = {}).text = function () {
                        i === t.input.element &&
                          (t.containerOuter.removeFocusState(),
                          n && t.unhighlightAll(),
                          t.hideDropdown(!0));
                      }),
                      (s["select-one"] = function () {
                        t.containerOuter.removeFocusState(),
                          (i === t.input.element ||
                            (i === t.containerOuter.element &&
                              !t._canSearch)) &&
                            t.hideDropdown(!0);
                      }),
                      (s["select-multiple"] = function () {
                        i === t.input.element &&
                          (t.containerOuter.removeFocusState(),
                          t.hideDropdown(!0),
                          n && t.unhighlightAll());
                      }),
                      s)[this.passedElement.element.type]();
                    } else
                      (this._isScrollingOnIe = !1), this.input.element.focus();
                  }),
                  (a._onFormReset = function () {
                    this._store.dispatch({
                      type: "RESET_TO",
                      state: this._initialState,
                    });
                  }),
                  (a._highlightChoice = function (e) {
                    var t = this;
                    void 0 === e && (e = null);
                    var i = Array.from(
                      this.dropdown.element.querySelectorAll(
                        "[data-choice-selectable]"
                      )
                    );
                    if (i.length) {
                      var s = e;
                      Array.from(
                        this.dropdown.element.querySelectorAll(
                          "." + this.config.classNames.highlightedState
                        )
                      ).forEach(function (e) {
                        e.classList.remove(
                          t.config.classNames.highlightedState
                        ),
                          e.setAttribute("aria-selected", "false");
                      }),
                        s
                          ? (this._highlightPosition = i.indexOf(s))
                          : (s =
                              i.length > this._highlightPosition
                                ? i[this._highlightPosition]
                                : i[i.length - 1]) || (s = i[0]),
                        s.classList.add(
                          this.config.classNames.highlightedState
                        ),
                        s.setAttribute("aria-selected", "true"),
                        this.passedElement.triggerEvent(G, { el: s }),
                        this.dropdown.isActive &&
                          (this.input.setActiveDescendant(s.id),
                          this.containerOuter.setActiveDescendant(s.id));
                    }
                  }),
                  (a._addItem = function (e) {
                    var t = e.value,
                      i = e.label,
                      s = void 0 === i ? null : i,
                      n = e.choiceId,
                      a = void 0 === n ? -1 : n,
                      r = e.groupId,
                      o = void 0 === r ? -1 : r,
                      l = e.customProperties,
                      d = void 0 === l ? null : l,
                      c = e.placeholder,
                      h = void 0 !== c && c,
                      u = e.keyCode,
                      p = void 0 === u ? null : u,
                      m = "string" == typeof t ? t.trim() : t,
                      f = p,
                      v = d,
                      g = this._store.items,
                      b = s || m,
                      y = a || -1,
                      w = o >= 0 ? this._store.getGroupById(o) : null,
                      E = g ? g.length + 1 : 1;
                    return (
                      this.config.prependValue &&
                        (m = this.config.prependValue + m.toString()),
                      this.config.appendValue &&
                        (m += this.config.appendValue.toString()),
                      this._store.dispatch(
                        (function (e) {
                          var t = e.value,
                            i = e.label,
                            s = e.id,
                            n = e.choiceId,
                            a = e.groupId,
                            r = e.customProperties,
                            o = e.placeholder,
                            l = e.keyCode;
                          return {
                            type: Y,
                            value: t,
                            label: i,
                            id: s,
                            choiceId: n,
                            groupId: a,
                            customProperties: r,
                            placeholder: o,
                            keyCode: l,
                          };
                        })({
                          value: m,
                          label: b,
                          id: E,
                          choiceId: y,
                          groupId: o,
                          customProperties: d,
                          placeholder: h,
                          keyCode: f,
                        })
                      ),
                      this._isSelectOneElement && this.removeActiveItems(E),
                      this.passedElement.triggerEvent(H, {
                        id: E,
                        value: m,
                        label: b,
                        customProperties: v,
                        groupValue: w && w.value ? w.value : void 0,
                        keyCode: f,
                      }),
                      this
                    );
                  }),
                  (a._removeItem = function (e) {
                    if (!e || !E("Object", e)) return this;
                    var t = e.id,
                      i = e.value,
                      s = e.label,
                      n = e.choiceId,
                      a = e.groupId,
                      r = a >= 0 ? this._store.getGroupById(a) : null;
                    return (
                      this._store.dispatch(
                        (function (e, t) {
                          return { type: W, id: e, choiceId: t };
                        })(t, n)
                      ),
                      r && r.value
                        ? this.passedElement.triggerEvent(F, {
                            id: t,
                            value: i,
                            label: s,
                            groupValue: r.value,
                          })
                        : this.passedElement.triggerEvent(F, {
                            id: t,
                            value: i,
                            label: s,
                          }),
                      this
                    );
                  }),
                  (a._addChoice = function (e) {
                    var t = e.value,
                      i = e.label,
                      s = void 0 === i ? null : i,
                      n = e.isSelected,
                      a = void 0 !== n && n,
                      r = e.isDisabled,
                      o = void 0 !== r && r,
                      l = e.groupId,
                      d = void 0 === l ? -1 : l,
                      c = e.customProperties,
                      h = void 0 === c ? null : c,
                      u = e.placeholder,
                      p = void 0 !== u && u,
                      m = e.keyCode,
                      f = void 0 === m ? null : m;
                    if (null != t) {
                      var v = this._store.choices,
                        g = s || t,
                        b = v ? v.length + 1 : 1,
                        y =
                          this._baseId +
                          "-" +
                          this._idNames.itemChoice +
                          "-" +
                          b;
                      this._store.dispatch(
                        (function (e) {
                          var t = e.value,
                            i = e.label,
                            s = e.id,
                            n = e.groupId,
                            a = e.disabled,
                            r = e.elementId,
                            o = e.customProperties,
                            l = e.placeholder,
                            d = e.keyCode;
                          return {
                            type: j,
                            value: t,
                            label: i,
                            id: s,
                            groupId: n,
                            disabled: a,
                            elementId: r,
                            customProperties: o,
                            placeholder: l,
                            keyCode: d,
                          };
                        })({
                          id: b,
                          groupId: d,
                          elementId: y,
                          value: t,
                          label: g,
                          disabled: o,
                          customProperties: h,
                          placeholder: p,
                          keyCode: f,
                        })
                      ),
                        a &&
                          this._addItem({
                            value: t,
                            label: g,
                            choiceId: b,
                            customProperties: h,
                            placeholder: p,
                            keyCode: f,
                          });
                    }
                  }),
                  (a._addGroup = function (e) {
                    var t = this,
                      i = e.group,
                      s = e.id,
                      n = e.valueKey,
                      a = void 0 === n ? "value" : n,
                      r = e.labelKey,
                      o = void 0 === r ? "label" : r,
                      l = E("Object", i)
                        ? i.choices
                        : Array.from(i.getElementsByTagName("OPTION")),
                      d = s || Math.floor(new Date().valueOf() * Math.random()),
                      c = !!i.disabled && i.disabled;
                    l
                      ? (this._store.dispatch(
                          be({ value: i.label, id: d, active: !0, disabled: c })
                        ),
                        l.forEach(function (e) {
                          var i =
                            e.disabled ||
                            (e.parentNode && e.parentNode.disabled);
                          t._addChoice({
                            value: e[a],
                            label: E("Object", e) ? e[o] : e.innerHTML,
                            isSelected: e.selected,
                            isDisabled: i,
                            groupId: d,
                            customProperties: e.customProperties,
                            placeholder: e.placeholder,
                          });
                        }))
                      : this._store.dispatch(
                          be({
                            value: i.label,
                            id: i.id,
                            active: !1,
                            disabled: i.disabled,
                          })
                        );
                  }),
                  (a._getTemplate = function (e) {
                    var t;
                    if (!e) return null;
                    for (
                      var i = this.config.classNames,
                        s = arguments.length,
                        n = new Array(s > 1 ? s - 1 : 0),
                        a = 1;
                      a < s;
                      a++
                    )
                      n[a - 1] = arguments[a];
                    return (t = this._templates[e]).call.apply(
                      t,
                      [this, i].concat(n)
                    );
                  }),
                  (a._createTemplates = function () {
                    var e = this.config.callbackOnCreateTemplates,
                      t = {};
                    e && "function" == typeof e && (t = e.call(this, x)),
                      (this._templates = r()(fe, t));
                  }),
                  (a._createElements = function () {
                    (this.containerOuter = new ae({
                      element: this._getTemplate(
                        "containerOuter",
                        this._direction,
                        this._isSelectElement,
                        this._isSelectOneElement,
                        this.config.searchEnabled,
                        this.passedElement.element.type
                      ),
                      classNames: this.config.classNames,
                      type: this.passedElement.element.type,
                      position: this.config.position,
                    })),
                      (this.containerInner = new ae({
                        element: this._getTemplate("containerInner"),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                        position: this.config.position,
                      })),
                      (this.input = new oe({
                        element: this._getTemplate(
                          "input",
                          this._placeholderValue
                        ),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                        preventPaste: !this.config.paste,
                      })),
                      (this.choiceList = new le({
                        element: this._getTemplate(
                          "choiceList",
                          this._isSelectOneElement
                        ),
                      })),
                      (this.itemList = new le({
                        element: this._getTemplate(
                          "itemList",
                          this._isSelectOneElement
                        ),
                      })),
                      (this.dropdown = new P({
                        element: this._getTemplate("dropdown"),
                        classNames: this.config.classNames,
                        type: this.passedElement.element.type,
                      }));
                  }),
                  (a._createStructure = function () {
                    this.passedElement.conceal(),
                      this.containerInner.wrap(this.passedElement.element),
                      this.containerOuter.wrap(this.containerInner.element),
                      this._isSelectOneElement
                        ? (this.input.placeholder =
                            this.config.searchPlaceholderValue || "")
                        : this._placeholderValue &&
                          ((this.input.placeholder = this._placeholderValue),
                          this.input.setWidth()),
                      this.containerOuter.element.appendChild(
                        this.containerInner.element
                      ),
                      this.containerOuter.element.appendChild(
                        this.dropdown.element
                      ),
                      this.containerInner.element.appendChild(
                        this.itemList.element
                      ),
                      this._isTextElement ||
                        this.dropdown.element.appendChild(
                          this.choiceList.element
                        ),
                      this._isSelectOneElement
                        ? this.config.searchEnabled &&
                          this.dropdown.element.insertBefore(
                            this.input.element,
                            this.dropdown.element.firstChild
                          )
                        : this.containerInner.element.appendChild(
                            this.input.element
                          ),
                      this._isSelectElement &&
                        ((this._highlightPosition = 0),
                        (this._isSearching = !1),
                        this._startLoading(),
                        this._presetGroups.length
                          ? this._addPredefinedGroups(this._presetGroups)
                          : this._addPredefinedChoices(this._presetChoices),
                        this._stopLoading()),
                      this._isTextElement &&
                        this._addPredefinedItems(this._presetItems);
                  }),
                  (a._addPredefinedGroups = function (e) {
                    var t = this,
                      i = this.passedElement.placeholderOption;
                    i &&
                      "SELECT" === i.parentNode.tagName &&
                      this._addChoice({
                        value: i.value,
                        label: i.innerHTML,
                        isSelected: i.selected,
                        isDisabled: i.disabled,
                        placeholder: !0,
                      }),
                      e.forEach(function (e) {
                        return t._addGroup({ group: e, id: e.id || null });
                      });
                  }),
                  (a._addPredefinedChoices = function (e) {
                    var t = this;
                    this.config.shouldSort && e.sort(this.config.sorter);
                    var i = e.some(function (e) {
                        return e.selected;
                      }),
                      s = e.findIndex(function (e) {
                        return void 0 === e.disabled || !e.disabled;
                      });
                    e.forEach(function (e, n) {
                      var a = e.value,
                        r = e.label,
                        o = e.customProperties,
                        l = e.placeholder;
                      if (t._isSelectElement)
                        if (e.choices)
                          t._addGroup({ group: e, id: e.id || null });
                        else {
                          var d =
                              !(!t._isSelectOneElement || i || n !== s) ||
                              e.selected,
                            c = e.disabled;
                          t._addChoice({
                            value: a,
                            label: r,
                            isSelected: d,
                            isDisabled: c,
                            customProperties: o,
                            placeholder: l,
                          });
                        }
                      else
                        t._addChoice({
                          value: a,
                          label: r,
                          isSelected: e.selected,
                          isDisabled: e.disabled,
                          customProperties: o,
                          placeholder: l,
                        });
                    });
                  }),
                  (a._addPredefinedItems = function (e) {
                    var t = this;
                    e.forEach(function (e) {
                      "object" == typeof e &&
                        e.value &&
                        t._addItem({
                          value: e.value,
                          label: e.label,
                          choiceId: e.id,
                          customProperties: e.customProperties,
                          placeholder: e.placeholder,
                        }),
                        "string" == typeof e && t._addItem({ value: e });
                    });
                  }),
                  (a._setChoiceOrItem = function (e) {
                    var t = this;
                    ({
                      object: function () {
                        e.value &&
                          (t._isTextElement
                            ? t._addItem({
                                value: e.value,
                                label: e.label,
                                choiceId: e.id,
                                customProperties: e.customProperties,
                                placeholder: e.placeholder,
                              })
                            : t._addChoice({
                                value: e.value,
                                label: e.label,
                                isSelected: !0,
                                isDisabled: !1,
                                customProperties: e.customProperties,
                                placeholder: e.placeholder,
                              }));
                      },
                      string: function () {
                        t._isTextElement
                          ? t._addItem({ value: e })
                          : t._addChoice({
                              value: e,
                              label: e,
                              isSelected: !0,
                              isDisabled: !1,
                            });
                      },
                    }[w(e).toLowerCase()]());
                  }),
                  (a._findAndSelectChoiceByValue = function (e) {
                    var t = this,
                      i = this._store.choices.find(function (i) {
                        return t.config.valueComparer(i.value, e);
                      });
                    i &&
                      !i.selected &&
                      this._addItem({
                        value: i.value,
                        label: i.label,
                        choiceId: i.id,
                        groupId: i.groupId,
                        customProperties: i.customProperties,
                        placeholder: i.placeholder,
                        keyCode: i.keyCode,
                      });
                  }),
                  (a._generatePlaceholderValue = function () {
                    if (this._isSelectElement) {
                      var e = this.passedElement.placeholderOption;
                      return !!e && e.text;
                    }
                    var t = this.config,
                      i = t.placeholder,
                      s = t.placeholderValue,
                      n = this.passedElement.element.dataset;
                    if (i) {
                      if (s) return s;
                      if (n.placeholder) return n.placeholder;
                    }
                    return !1;
                  }),
                  s
                );
              })();
            t.default = xe;
          },
        ]).default;
      }),
      (e.exports = s());
  },
  5: function (e, t, i) {
    "use strict";
    function s(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function n(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach(function (i) {
          void 0 === e[i]
            ? (e[i] = t[i])
            : s(t[i]) &&
              s(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              n(e[i], t[i]);
        });
    }
    i.r(t);
    var a = "undefined" != typeof document ? document : {},
      r = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
    n(a, r);
    var o = "undefined" != typeof window ? window : {};
    n(o, {
      document: r,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
    });
    class l {
      constructor(e) {
        const t = this;
        for (let i = 0; i < e.length; i += 1) t[i] = e[i];
        return (t.length = e.length), this;
      }
    }
    function d(e, t) {
      const i = [];
      let s = 0;
      if (e && !t && e instanceof l) return e;
      if (e)
        if ("string" == typeof e) {
          let n, r;
          const o = e.trim();
          if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            let e = "div";
            for (
              0 === o.indexOf("<li") && (e = "ul"),
                0 === o.indexOf("<tr") && (e = "tbody"),
                (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                  (e = "tr"),
                0 === o.indexOf("<tbody") && (e = "table"),
                0 === o.indexOf("<option") && (e = "select"),
                r = a.createElement(e),
                r.innerHTML = o,
                s = 0;
              s < r.childNodes.length;
              s += 1
            )
              i.push(r.childNodes[s]);
          } else
            for (
              n =
                t || "#" !== e[0] || e.match(/[ .<>:~]/)
                  ? (t || a).querySelectorAll(e.trim())
                  : [a.getElementById(e.trim().split("#")[1])],
                s = 0;
              s < n.length;
              s += 1
            )
              n[s] && i.push(n[s]);
        } else if (e.nodeType || e === o || e === a) i.push(e);
        else if (e.length > 0 && e[0].nodeType)
          for (s = 0; s < e.length; s += 1) i.push(e[s]);
      return new l(i);
    }
    function c(e) {
      const t = [];
      for (let i = 0; i < e.length; i += 1)
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      return t;
    }
    (d.fn = l.prototype), (d.Class = l), (d.Dom7 = l);
    "resize scroll".split(" ");
    const h = {
      addClass: function (e) {
        if (void 0 === e) return this;
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.add(t[e]);
        return this;
      },
      removeClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.remove(t[e]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let i = 0; i < this.length; i += 1)
            void 0 !== this[i] &&
              void 0 !== this[i].classList &&
              this[i].classList.toggle(t[e]);
        return this;
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function (e, t) {
        let i;
        if (void 0 !== t) {
          for (let s = 0; s < this.length; s += 1)
            (i = this[s]),
              i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
              (i.dom7ElementDataStorage[e] = t);
          return this;
        }
        if (((i = this[0]), i)) {
          if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
            return i.dom7ElementDataStorage[e];
          const t = i.getAttribute("data-" + e);
          return t || void 0;
        }
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t].style;
          (i.webkitTransform = e), (i.transform = e);
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t].style;
          (i.webkitTransitionDuration = e), (i.transitionDuration = e);
        }
        return this;
      },
      on: function (...e) {
        let [t, i, s, n] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), d(t).is(i))) s.apply(t, n);
          else {
            const e = d(t).parents();
            for (let t = 0; t < e.length; t += 1)
              d(e[t]).is(i) && s.apply(e[t], n);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, s, n] = e;
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!i && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : i && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const i = r[e];
                (s && i.listener === s) ||
                (s &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === s)
                  ? (a.removeEventListener(t, i.proxyListener, n),
                    r.splice(e, 1))
                  : s ||
                    (a.removeEventListener(t, i.proxyListener, n),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = e[0].split(" "),
          i = e[1];
        for (let s = 0; s < t.length; s += 1) {
          const n = t[s];
          for (let t = 0; t < this.length; t += 1) {
            const s = this[t];
            let r;
            try {
              r = new o.CustomEvent(n, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
            } catch (e) {
              (r = a.createEvent("Event")),
                r.initEvent(n, !0, !0),
                (r.detail = i);
            }
            (s.dom7EventData = e.filter((e, t) => t > 0)),
              s.dispatchEvent(r),
              (s.dom7EventData = []),
              delete s.dom7EventData;
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = ["webkitTransitionEnd", "transitionend"],
          i = this;
        let s;
        function n(a) {
          if (a.target === this)
            for (e.call(this, a), s = 0; s < t.length; s += 1) i.off(t[s], n);
        }
        if (e) for (s = 0; s < t.length; s += 1) i.on(t[s], n);
        return this;
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function () {
        if (this.length > 0) {
          const e = this[0],
            t = e.getBoundingClientRect(),
            i = a.body,
            s = e.clientTop || i.clientTop || 0,
            n = e.clientLeft || i.clientLeft || 0,
            r = e === o ? o.scrollY : e.scrollTop,
            l = e === o ? o.scrollX : e.scrollLeft;
          return { top: t.top + r - s, left: t.left + l - n };
        }
        return null;
      },
      css: function (e, t) {
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (let t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return o.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        if (!e) return this;
        for (let t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = this[0];
        let i, s;
        if (!t || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (t.matches) return t.matches(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);
          for (i = d(e), s = 0; s < i.length; s += 1) if (i[s] === t) return !0;
          return !1;
        }
        if (e === a) return t === a;
        if (e === o) return t === o;
        if (e.nodeType || e instanceof l) {
          for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
            if (i[s] === t) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        let i;
        return e > t - 1
          ? new l([])
          : e < 0
          ? ((i = t + e), new l(i < 0 ? [] : [this[i]]))
          : new l([this[e]]);
      },
      append: function (...e) {
        let t;
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = a.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof l)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        let t, i;
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            const s = a.createElement("div");
            for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
              this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
          } else if (e instanceof l)
            for (i = 0; i < e.length; i += 1)
              this[t].insertBefore(e[i], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
              ? new l([this[0].nextElementSibling])
              : new l([])
            : this[0].nextElementSibling
            ? new l([this[0].nextElementSibling])
            : new l([])
          : new l([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return new l([]);
        for (; i.nextElementSibling; ) {
          const s = i.nextElementSibling;
          e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return new l(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
              ? new l([t.previousElementSibling])
              : new l([])
            : t.previousElementSibling
            ? new l([t.previousElementSibling])
            : new l([]);
        }
        return new l([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return new l([]);
        for (; i.previousElementSibling; ) {
          const s = i.previousElementSibling;
          e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return new l(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? d(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return d(c(t));
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let s = this[i].parentNode;
          for (; s; )
            e ? d(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return d(c(t));
      },
      closest: function (e) {
        let t = this;
        return void 0 === e
          ? new l([])
          : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return new l(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].childNodes;
          for (let i = 0; i < s.length; i += 1)
            e
              ? 1 === s[i].nodeType && d(s[i]).is(e) && t.push(s[i])
              : 1 === s[i].nodeType && t.push(s[i]);
        }
        return new l(c(t));
      },
      filter: function (e) {
        const t = [],
          i = this;
        for (let s = 0; s < i.length; s += 1)
          e.call(i[s], s, i[s]) && t.push(i[s]);
        return new l(t);
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function (...e) {
        const t = this;
        let i, s;
        for (i = 0; i < e.length; i += 1) {
          const n = d(e[i]);
          for (s = 0; s < n.length; s += 1)
            (t[t.length] = n[s]), (t.length += 1);
        }
        return t;
      },
      styles: function () {
        return this[0] ? o.getComputedStyle(this[0], null) : {};
      },
    };
    Object.keys(h).forEach((e) => {
      d.fn[e] = d.fn[e] || h[e];
    });
    const u = {
        deleteProps(e) {
          const t = e;
          Object.keys(t).forEach((e) => {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: (e, t = 0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t = "x") {
          let i, s, n;
          const a = o.getComputedStyle(e, null);
          return (
            o.WebKitCSSMatrix
              ? ((s = a.transform || a.webkitTransform),
                s.split(",").length > 6 &&
                  (s = s
                    .split(", ")
                    .map((e) => e.replace(",", "."))
                    .join(", ")),
                (n = new o.WebKitCSSMatrix("none" === s ? "" : s)))
              : ((n =
                  a.MozTransform ||
                  a.OTransform ||
                  a.MsTransform ||
                  a.msTransform ||
                  a.transform ||
                  a
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                (i = n.toString().split(","))),
            "x" === t &&
              (s = o.WebKitCSSMatrix
                ? n.m41
                : 16 === i.length
                ? parseFloat(i[12])
                : parseFloat(i[4])),
            "y" === t &&
              (s = o.WebKitCSSMatrix
                ? n.m42
                : 16 === i.length
                ? parseFloat(i[13])
                : parseFloat(i[5])),
            s || 0
          );
        },
        parseUrlQuery(e) {
          const t = {};
          let i,
            s,
            n,
            a,
            r = e || o.location.href;
          if ("string" == typeof r && r.length)
            for (
              r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                s = r.split("&").filter((e) => "" !== e),
                a = s.length,
                i = 0;
              i < a;
              i += 1
            )
              (n = s[i].replace(/#\S+/g, "").split("=")),
                (t[decodeURIComponent(n[0])] =
                  void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "");
          return t;
        },
        isObject: (e) =>
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object,
        extend(...e) {
          const t = Object(e[0]);
          for (let i = 1; i < e.length; i += 1) {
            const s = e[i];
            if (null != s) {
              const e = Object.keys(Object(s));
              for (let i = 0, n = e.length; i < n; i += 1) {
                const n = e[i],
                  a = Object.getOwnPropertyDescriptor(s, n);
                void 0 !== a &&
                  a.enumerable &&
                  (u.isObject(t[n]) && u.isObject(s[n])
                    ? u.extend(t[n], s[n])
                    : !u.isObject(t[n]) && u.isObject(s[n])
                    ? ((t[n] = {}), u.extend(t[n], s[n]))
                    : (t[n] = s[n]));
              }
            }
          }
          return t;
        },
      },
      p = {
        touch: !!(
          "ontouchstart" in o ||
          (o.DocumentTouch && a instanceof o.DocumentTouch)
        ),
        pointerEvents:
          !!o.PointerEvent &&
          "maxTouchPoints" in o.navigator &&
          o.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in o || "WebkitMutationObserver" in o,
        passiveListener: (function () {
          let e = !1;
          try {
            const t = Object.defineProperty({}, "passive", {
              get() {
                e = !0;
              },
            });
            o.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in o,
      };
    class m {
      constructor(e = {}) {
        const t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach((e) => {
              t.on(e, t.params.on[e]);
            });
      }
      on(e, t, i) {
        const s = this;
        if ("function" != typeof t) return s;
        const n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][n](t);
          }),
          s
        );
      }
      once(e, t, i) {
        const s = this;
        if ("function" != typeof t) return s;
        function n(...i) {
          s.off(e, n), n.f7proxy && delete n.f7proxy, t.apply(s, i);
        }
        return (n.f7proxy = t), s.on(e, n, i);
      }
      off(e, t) {
        const i = this;
        return i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].length &&
                  i.eventsListeners[e].forEach((s, n) => {
                    (s === t || (s.f7proxy && s.f7proxy === t)) &&
                      i.eventsListeners[e].splice(n, 1);
                  });
            }),
            i)
          : i;
      }
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let i, s, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
          : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t));
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            if (t.eventsListeners && t.eventsListeners[e]) {
              const i = [];
              t.eventsListeners[e].forEach((e) => {
                i.push(e);
              }),
                i.forEach((e) => {
                  e.apply(n, s);
                });
            }
          }),
          t
        );
      }
      useModulesParams(e) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach((i) => {
            const s = t.modules[i];
            s.params && u.extend(e, s.params);
          });
      }
      useModules(e = {}) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach((i) => {
            const s = t.modules[i],
              n = e[i] || {};
            s.instance &&
              Object.keys(s.instance).forEach((e) => {
                const i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i;
              }),
              s.on &&
                t.on &&
                Object.keys(s.on).forEach((e) => {
                  t.on(e, s.on[e]);
                }),
              s.create && s.create.bind(t)(n);
          });
      }
      static set components(e) {
        this.use && this.use(e);
      }
      static installModule(e, ...t) {
        const i = this;
        i.prototype.modules || (i.prototype.modules = {});
        const s =
          e.name || `${Object.keys(i.prototype.modules).length}_${u.now()}`;
        return (
          (i.prototype.modules[s] = e),
          e.proto &&
            Object.keys(e.proto).forEach((t) => {
              i.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach((t) => {
              i[t] = e.static[t];
            }),
          e.install && e.install.apply(i, t),
          i
        );
      }
      static use(e, ...t) {
        const i = this;
        return Array.isArray(e)
          ? (e.forEach((e) => i.installModule(e)), i)
          : i.installModule(e, ...t);
      }
    }
    var f = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.$el;
        (t = void 0 !== e.params.width ? e.params.width : s[0].clientWidth),
          (i =
            void 0 !== e.params.height ? e.params.height : s[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(s.css("padding-left"), 10) -
              parseInt(s.css("padding-right"), 10)),
            (i =
              i -
              parseInt(s.css("padding-top"), 10) -
              parseInt(s.css("padding-bottom"), 10)),
            u.extend(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this,
          t = e.params,
          { $wrapperEl: i, size: s, rtlTranslate: n, wrongRTL: a } = e,
          r = e.virtual && t.virtual.enabled,
          l = r ? e.virtual.slides.length : e.slides.length,
          d = i.children("." + e.params.slideClass),
          c = r ? e.virtual.slides.length : d.length;
        let h = [];
        const p = [],
          m = [];
        function f(e) {
          return !t.cssMode || e !== d.length - 1;
        }
        let v = t.slidesOffsetBefore;
        "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
        let g = t.slidesOffsetAfter;
        "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.snapGrid.length;
        let w,
          E,
          S = t.spaceBetween,
          x = -v,
          T = 0,
          C = 0;
        if (void 0 === s) return;
        "string" == typeof S &&
          S.indexOf("%") >= 0 &&
          (S = (parseFloat(S.replace("%", "")) / 100) * s),
          (e.virtualSize = -S),
          n
            ? d.css({ marginLeft: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "" }),
          t.slidesPerColumn > 1 &&
            ((w =
              Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn
                ? c
                : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
        const _ = t.slidesPerColumn,
          M = w / _,
          I = Math.floor(c / t.slidesPerColumn);
        for (let i = 0; i < c; i += 1) {
          E = 0;
          const n = d.eq(i);
          if (t.slidesPerColumn > 1) {
            let s, a, r;
            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
              const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                o = i - t.slidesPerColumn * t.slidesPerGroup * e,
                l =
                  0 === e
                    ? t.slidesPerGroup
                    : Math.min(
                        Math.ceil((c - e * _ * t.slidesPerGroup) / _),
                        t.slidesPerGroup
                      );
              (r = Math.floor(o / l)),
                (a = o - r * l + e * t.slidesPerGroup),
                (s = a + (r * w) / _),
                n.css({
                  "-webkit-box-ordinal-group": s,
                  "-moz-box-ordinal-group": s,
                  "-ms-flex-order": s,
                  "-webkit-order": s,
                  order: s,
                });
            } else
              "column" === t.slidesPerColumnFill
                ? ((a = Math.floor(i / _)),
                  (r = i - a * _),
                  (a > I || (a === I && r === _ - 1)) &&
                    ((r += 1), r >= _ && ((r = 0), (a += 1))))
                : ((r = Math.floor(i / M)), (a = i - r * M));
            n.css(
              "margin-" + (e.isHorizontal() ? "top" : "left"),
              0 !== r && t.spaceBetween && t.spaceBetween + "px"
            );
          }
          if ("none" !== n.css("display")) {
            if ("auto" === t.slidesPerView) {
              const i = o.getComputedStyle(n[0], null),
                s = n[0].style.transform,
                a = n[0].style.webkitTransform;
              if (
                (s && (n[0].style.transform = "none"),
                a && (n[0].style.webkitTransform = "none"),
                t.roundLengths)
              )
                E = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
              else if (e.isHorizontal()) {
                const e = parseFloat(i.getPropertyValue("width")),
                  t = parseFloat(i.getPropertyValue("padding-left")),
                  s = parseFloat(i.getPropertyValue("padding-right")),
                  n = parseFloat(i.getPropertyValue("margin-left")),
                  a = parseFloat(i.getPropertyValue("margin-right")),
                  r = i.getPropertyValue("box-sizing");
                E = r && "border-box" === r ? e + n + a : e + t + s + n + a;
              } else {
                const e = parseFloat(i.getPropertyValue("height")),
                  t = parseFloat(i.getPropertyValue("padding-top")),
                  s = parseFloat(i.getPropertyValue("padding-bottom")),
                  n = parseFloat(i.getPropertyValue("margin-top")),
                  a = parseFloat(i.getPropertyValue("margin-bottom")),
                  r = i.getPropertyValue("box-sizing");
                E = r && "border-box" === r ? e + n + a : e + t + s + n + a;
              }
              s && (n[0].style.transform = s),
                a && (n[0].style.webkitTransform = a),
                t.roundLengths && (E = Math.floor(E));
            } else
              (E = (s - (t.slidesPerView - 1) * S) / t.slidesPerView),
                t.roundLengths && (E = Math.floor(E)),
                d[i] &&
                  (e.isHorizontal()
                    ? (d[i].style.width = E + "px")
                    : (d[i].style.height = E + "px"));
            d[i] && (d[i].swiperSlideSize = E),
              m.push(E),
              t.centeredSlides
                ? ((x = x + E / 2 + T / 2 + S),
                  0 === T && 0 !== i && (x = x - s / 2 - S),
                  0 === i && (x = x - s / 2 - S),
                  Math.abs(x) < 0.001 && (x = 0),
                  t.roundLengths && (x = Math.floor(x)),
                  C % t.slidesPerGroup == 0 && h.push(x),
                  p.push(x))
                : (t.roundLengths && (x = Math.floor(x)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(x),
                  p.push(x),
                  (x = x + E + S)),
              (e.virtualSize += E + S),
              (T = E),
              (C += 1);
          }
        }
        let L;
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + g),
          n &&
            a &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            i.css({ width: e.virtualSize + t.spaceBetween + "px" }),
          t.setWrapperSize &&
            (e.isHorizontal()
              ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : i.css({ height: e.virtualSize + t.spaceBetween + "px" })),
          t.slidesPerColumn > 1 &&
            ((e.virtualSize = (E + t.spaceBetween) * w),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? i.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : i.css({ height: e.virtualSize + t.spaceBetween + "px" }),
            t.centeredSlides))
        ) {
          L = [];
          for (let i = 0; i < h.length; i += 1) {
            let s = h[i];
            t.roundLengths && (s = Math.floor(s)),
              h[i] < e.virtualSize + h[0] && L.push(s);
          }
          h = L;
        }
        if (!t.centeredSlides) {
          L = [];
          for (let i = 0; i < h.length; i += 1) {
            let n = h[i];
            t.roundLengths && (n = Math.floor(n)),
              h[i] <= e.virtualSize - s && L.push(n);
          }
          (h = L),
            Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - s);
        }
        if (
          (0 === h.length && (h = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? n
                ? d.filter(f).css({ marginLeft: S + "px" })
                : d.filter(f).css({ marginRight: S + "px" })
              : d.filter(f).css({ marginBottom: S + "px" })),
          t.centeredSlides && t.centeredSlidesBounds)
        ) {
          let e = 0;
          m.forEach((i) => {
            e += i + (t.spaceBetween ? t.spaceBetween : 0);
          }),
            (e -= t.spaceBetween);
          const i = e - s;
          h = h.map((e) => (e < 0 ? -v : e > i ? i + g : e));
        }
        if (t.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((i) => {
              e += i + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (e -= t.spaceBetween),
            e < s)
          ) {
            const t = (s - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              p.forEach((e, i) => {
                p[i] = e + t;
              });
          }
        }
        u.extend(e, {
          slides: d,
          snapGrid: h,
          slidesGrid: p,
          slidesSizesGrid: m,
        }),
          c !== l && e.emit("slidesLengthChange"),
          h.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== y && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [];
        let s,
          n = 0;
        if (
          ("number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed),
          "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        )
          if (t.params.centeredSlides)
            t.visibleSlides.each((e, t) => {
              i.push(t);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length) break;
              i.push(t.slides.eq(e)[0]);
            }
        else i.push(t.slides.eq(t.activeIndex)[0]);
        for (s = 0; s < i.length; s += 1)
          if (void 0 !== i[s]) {
            const e = i[s].offsetHeight;
            n = e > n ? e : n;
          }
        n && t.$wrapperEl.css("height", n + "px");
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: n } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          s.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const r = s[e],
            o =
              (a +
                (i.centeredSlides ? t.minTranslate() : 0) -
                r.swiperSlideOffset) /
              (r.swiperSlideSize + i.spaceBetween);
          if (i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) {
            const n = -(a - r.swiperSlideOffset),
              o = n + t.slidesSizesGrid[e];
            ((n >= 0 && n < t.size - 1) ||
              (o > 1 && o <= t.size) ||
              (n <= 0 && o >= t.size)) &&
              (t.visibleSlides.push(r),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass));
          }
          r.progress = n ? -o : o;
        }
        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: r } = t;
        const o = a,
          l = r;
        0 === s
          ? ((n = 0), (a = !0), (r = !0))
          : ((n = (e - t.minTranslate()) / s), (a = n <= 0), (r = n >= 1)),
          u.extend(t, { progress: n, isBeginning: a, isEnd: r }),
          (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((o && !a) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: s,
            activeIndex: n,
            realIndex: a,
          } = e,
          r = e.virtual && i.virtual.enabled;
        let o;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          o.addClass(i.slideActiveClass),
          i.loop &&
            (o.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : s
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = o
          .nextAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let d = o
          .prevAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        i.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : s
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : s
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass));
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: s,
            snapGrid: n,
            params: a,
            activeIndex: r,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < s.length; e += 1)
            void 0 !== s[e + 1]
              ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                ? (c = e)
                : i >= s[e] && i < s[e + 1] && (c = e + 1)
              : i >= s[e] && (c = e);
          a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (n.indexOf(i) >= 0) d = n.indexOf(i);
        else {
          const e = Math.min(a.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / a.slidesPerGroup);
        }
        if ((d >= n.length && (d = n.length - 1), c === r))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const h = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        u.extend(t, {
          snapIndex: d,
          realIndex: h,
          previousIndex: r,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== h && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = d(e.target).closest("." + i.slideClass)[0];
        let n = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            t.slides[e] === s && (n = !0);
        if (!s || !n)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                d(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = d(s).index()),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var v = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: i,
          translate: s,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let a = u.getTranslate(n[0], e);
        return i && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: s,
            params: n,
            $wrapperEl: a,
            wrapperEl: r,
            progress: o,
          } = i;
        let l,
          d = 0,
          c = 0;
        i.isHorizontal() ? (d = s ? -e : e) : (c = e),
          n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          n.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -d : -c)
            : n.virtualTranslate ||
              a.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? d : c);
        const h = i.maxTranslate() - i.minTranslate();
        (l = 0 === h ? 0 : (e - i.minTranslate()) / h),
          l !== o && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, n) {
        const a = this,
          { params: r, wrapperEl: o } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const l = a.minTranslate(),
          d = a.maxTranslate();
        let c;
        if (
          ((c = s && e > l ? l : s && e < d ? d : e),
          a.updateProgress(c),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          return (
            0 === t
              ? (o[e ? "scrollLeft" : "scrollTop"] = -c)
              : o.scrollTo
              ? o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" })
              : (o[e ? "scrollLeft" : "scrollTop"] = -c),
            !0
          );
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(c),
              i &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(c),
              i &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      i && a.emit("transitionEnd"));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    var g = {
      setTransition: function (e, t) {
        const i = this;
        i.params.cssMode || i.$wrapperEl.transition(e),
          i.emit("setTransition", e, t);
      },
      transitionStart: function (e = !0, t) {
        const i = this,
          { activeIndex: s, params: n, previousIndex: a } = i;
        if (n.cssMode) return;
        n.autoHeight && i.updateAutoHeight();
        let r = t;
        if (
          (r || (r = s > a ? "next" : s < a ? "prev" : "reset"),
          i.emit("transitionStart"),
          e && s !== a)
        ) {
          if ("reset" === r) return void i.emit("slideResetTransitionStart");
          i.emit("slideChangeTransitionStart"),
            "next" === r
              ? i.emit("slideNextTransitionStart")
              : i.emit("slidePrevTransitionStart");
        }
      },
      transitionEnd: function (e = !0, t) {
        const i = this,
          { activeIndex: s, previousIndex: n, params: a } = i;
        if (((i.animating = !1), a.cssMode)) return;
        i.setTransition(0);
        let r = t;
        if (
          (r || (r = s > n ? "next" : s < n ? "prev" : "reset"),
          i.emit("transitionEnd"),
          e && s !== n)
        ) {
          if ("reset" === r) return void i.emit("slideResetTransitionEnd");
          i.emit("slideChangeTransitionEnd"),
            "next" === r
              ? i.emit("slideNextTransitionEnd")
              : i.emit("slidePrevTransitionEnd");
        }
      },
    };
    var b = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, s) {
        const n = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: r,
          snapGrid: o,
          slidesGrid: l,
          previousIndex: d,
          activeIndex: c,
          rtlTranslate: h,
          wrapperEl: u,
        } = n;
        if (n.animating && r.preventInteractionOnTransition) return !1;
        const p = Math.min(n.params.slidesPerGroupSkip, a);
        let m = p + Math.floor((a - p) / n.params.slidesPerGroup);
        m >= o.length && (m = o.length - 1),
          (c || r.initialSlide || 0) === (d || 0) &&
            i &&
            n.emit("beforeSlideChangeStart");
        const f = -o[m];
        if ((n.updateProgress(f), r.normalizeSlideIndex))
          for (let e = 0; e < l.length; e += 1)
            -Math.floor(100 * f) >= Math.floor(100 * l[e]) && (a = e);
        if (n.initialized && a !== c) {
          if (!n.allowSlideNext && f < n.translate && f < n.minTranslate())
            return !1;
          if (
            !n.allowSlidePrev &&
            f > n.translate &&
            f > n.maxTranslate() &&
            (c || 0) !== a
          )
            return !1;
        }
        let v;
        if (
          ((v = a > c ? "next" : a < c ? "prev" : "reset"),
          (h && -f === n.translate) || (!h && f === n.translate))
        )
          return (
            n.updateActiveIndex(a),
            r.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            "slide" !== r.effect && n.setTranslate(f),
            "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)),
            !1
          );
        if (r.cssMode) {
          const e = n.isHorizontal();
          let i = -f;
          return (
            h && (i = u.scrollWidth - u.offsetWidth - i),
            0 === t
              ? (u[e ? "scrollLeft" : "scrollTop"] = i)
              : u.scrollTo
              ? u.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" })
              : (u[e ? "scrollLeft" : "scrollTop"] = i),
            !0
          );
        }
        return (
          0 === t
            ? (n.setTransition(0),
              n.setTranslate(f),
              n.updateActiveIndex(a),
              n.updateSlidesClasses(),
              n.emit("beforeTransitionStart", t, s),
              n.transitionStart(i, v),
              n.transitionEnd(i, v))
            : (n.setTransition(t),
              n.setTranslate(f),
              n.updateActiveIndex(a),
              n.updateSlidesClasses(),
              n.emit("beforeTransitionStart", t, s),
              n.transitionStart(i, v),
              n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(i, v));
                  }),
                n.$wrapperEl[0].addEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                n.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  n.onSlideToWrapperTransitionEnd
                ))),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
        const n = this;
        let a = e;
        return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, s);
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const s = this,
          { params: n, animating: a } = s,
          r = s.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
        if (n.loop) {
          if (a) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return s.slideTo(s.activeIndex + r, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const s = this,
          {
            params: n,
            animating: a,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
          } = s;
        if (n.loop) {
          if (a) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const c = d(l ? s.translate : -s.translate),
          h = r.map((e) => d(e));
        o.map((e) => d(e)), r[h.indexOf(c)];
        let u,
          p = r[h.indexOf(c) - 1];
        return (
          void 0 === p &&
            n.cssMode &&
            r.forEach((e) => {
              !p && c >= e && (p = e);
            }),
          void 0 !== p &&
            ((u = o.indexOf(p)), u < 0 && (u = s.activeIndex - 1)),
          s.slideTo(u, e, t, i)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
        const n = this;
        let a = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, a),
          o = r + Math.floor((a - r) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * s && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * s && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? a < e.loopedSlides - s / 2 ||
                a > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (a = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  u.nextTick(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - s
              ? (e.loopFix(),
                (a = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                u.nextTick(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    var y = {
      loopCreate: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e;
        i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
        let s = i.children("." + t.slideClass);
        if (t.loopFillGroupWithBlank) {
          const e = t.slidesPerGroup - (s.length % t.slidesPerGroup);
          if (e !== t.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = d(a.createElement("div")).addClass(
                `${t.slideClass} ${t.slideBlankClass}`
              );
              i.append(e);
            }
            s = i.children("." + t.slideClass);
          }
        }
        "auto" !== t.slidesPerView ||
          t.loopedSlides ||
          (t.loopedSlides = s.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(t.loopedSlides || t.slidesPerView, 10)
          )),
          (e.loopedSlides += t.loopAdditionalSlides),
          e.loopedSlides > s.length && (e.loopedSlides = s.length);
        const n = [],
          r = [];
        s.each((t, i) => {
          const a = d(i);
          t < e.loopedSlides && r.push(i),
            t < s.length && t >= s.length - e.loopedSlides && n.push(i),
            a.attr("data-swiper-slide-index", t);
        });
        for (let e = 0; e < r.length; e += 1)
          i.append(d(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (let e = n.length - 1; e >= 0; e -= 1)
          i.prepend(d(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: s,
          allowSlidePrev: n,
          allowSlideNext: a,
          snapGrid: r,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -r[t] - e.getTranslate();
        if (t < s) {
          (l = i.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= i.length - s) {
          (l = -i.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    var w = {
      setGrabCursor: function (e) {
        if (
          p.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode
        )
          return;
        const t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      },
      unsetGrabCursor: function () {
        p.touch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode ||
          (this.el.style.cursor = "");
      },
    };
    var E = {
      appendSlide: function (e) {
        const t = this,
          { $wrapperEl: i, params: s } = t;
        if ((s.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
        else i.append(e);
        s.loop && t.loopCreate(), (s.observer && p.observer) || t.update();
      },
      prependSlide: function (e) {
        const t = this,
          { params: i, $wrapperEl: s, activeIndex: n } = t;
        i.loop && t.loopDestroy();
        let a = n + 1;
        if ("object" == typeof e && "length" in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
          a = n + e.length;
        } else s.prepend(e);
        i.loop && t.loopCreate(),
          (i.observer && p.observer) || t.update(),
          t.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        const i = this,
          { $wrapperEl: s, params: n, activeIndex: a } = i;
        let r = a;
        n.loop &&
          ((r -= i.loopedSlides),
          i.loopDestroy(),
          (i.slides = s.children("." + n.slideClass)));
        const o = i.slides.length;
        if (e <= 0) return void i.prependSlide(t);
        if (e >= o) return void i.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const d = [];
        for (let t = o - 1; t >= e; t -= 1) {
          const e = i.slides.eq(t);
          e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
          l = r > e ? r + t.length : r;
        } else s.append(t);
        for (let e = 0; e < d.length; e += 1) s.append(d[e]);
        n.loop && i.loopCreate(),
          (n.observer && p.observer) || i.update(),
          n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
      },
      removeSlide: function (e) {
        const t = this,
          { params: i, $wrapperEl: s, activeIndex: n } = t;
        let a = n;
        i.loop &&
          ((a -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = s.children("." + i.slideClass)));
        let r,
          o = a;
        if ("object" == typeof e && "length" in e) {
          for (let i = 0; i < e.length; i += 1)
            (r = e[i]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < o && (o -= 1);
          o = Math.max(o, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < o && (o -= 1),
            (o = Math.max(o, 0));
        i.loop && t.loopCreate(),
          (i.observer && p.observer) || t.update(),
          i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
      },
      removeAllSlides: function () {
        const e = this,
          t = [];
        for (let i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t);
      },
    };
    const S = (function () {
      const e = o.navigator.platform,
        t = o.navigator.userAgent,
        i = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!o.cordova && !o.phonegap),
          phonegap: !(!o.cordova && !o.phonegap),
          electron: !1,
        },
        s = o.screen.width,
        n = o.screen.height,
        a = t.match(/(Android);?[\s\/]+([\d.]+)?/);
      let r = t.match(/(iPad).*OS\s([\d_]+)/);
      const l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
        d = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
        h = t.indexOf("Edge/") >= 0,
        u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
        m = "Win32" === e,
        f = t.toLowerCase().indexOf("electron") >= 0;
      let v = "MacIntel" === e;
      return (
        !r &&
          v &&
          p.touch &&
          ((1024 === s && 1366 === n) ||
            (834 === s && 1194 === n) ||
            (834 === s && 1112 === n) ||
            (768 === s && 1024 === n)) &&
          ((r = t.match(/(Version)\/([\d.]+)/)), (v = !1)),
        (i.ie = c),
        (i.edge = h),
        (i.firefox = u),
        a &&
          !m &&
          ((i.os = "android"),
          (i.osVersion = a[2]),
          (i.android = !0),
          (i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
        (r || d || l) && ((i.os = "ios"), (i.ios = !0)),
        d && !l && ((i.osVersion = d[2].replace(/_/g, ".")), (i.iphone = !0)),
        r && ((i.osVersion = r[2].replace(/_/g, ".")), (i.ipad = !0)),
        l &&
          ((i.osVersion = l[3] ? l[3].replace(/_/g, ".") : null),
          (i.ipod = !0)),
        i.ios &&
          i.osVersion &&
          t.indexOf("Version/") >= 0 &&
          "10" === i.osVersion.split(".")[0] &&
          (i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
        (i.webView =
          !(
            !(d || r || l) ||
            (!t.match(/.*AppleWebKit(?!.*Safari)/i) && !o.navigator.standalone)
          ) ||
          (o.matchMedia && o.matchMedia("(display-mode: standalone)").matches)),
        (i.webview = i.webView),
        (i.standalone = i.webView),
        (i.desktop = !(i.ios || i.android) || f),
        i.desktop &&
          ((i.electron = f),
          (i.macos = v),
          (i.windows = m),
          i.macos && (i.os = "macos"),
          i.windows && (i.os = "windows")),
        (i.pixelRatio = o.devicePixelRatio || 1),
        i
      );
    })();
    function x(e) {
      const t = this,
        i = t.touchEventsData,
        { params: s, touches: n } = t;
      if (t.animating && s.preventInteractionOnTransition) return;
      let r = e;
      r.originalEvent && (r = r.originalEvent);
      const l = d(r.target);
      if ("wrapper" === s.touchEventsTarget && !l.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === r.type),
        !i.isTouchEvent && "which" in r && 3 === r.which)
      )
        return;
      if (!i.isTouchEvent && "button" in r && r.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      if (
        s.noSwiping &&
        l.closest(
          s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass
        )[0]
      )
        return void (t.allowClick = !0);
      if (s.swipeHandler && !l.closest(s.swipeHandler)[0]) return;
      (n.currentX =
        "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX),
        (n.currentY =
          "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
      const c = n.currentX,
        h = n.currentY,
        p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
        m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
      if (!p || !(c <= m || c >= o.screen.width - m)) {
        if (
          (u.extend(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (n.startX = c),
          (n.startY = h),
          (i.touchStartTime = u.now()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== r.type)
        ) {
          let e = !0;
          l.is(i.formElements) && (e = !1),
            a.activeElement &&
              d(a.activeElement).is(i.formElements) &&
              a.activeElement !== l[0] &&
              a.activeElement.blur();
          const n = e && t.allowTouchMove && s.touchStartPreventDefault;
          (s.touchStartForcePreventDefault || n) && r.preventDefault();
        }
        t.emit("touchStart", r);
      }
    }
    function T(e) {
      const t = this,
        i = t.touchEventsData,
        { params: s, touches: n, rtlTranslate: r } = t;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          t.emit("touchMoveOpposite", o)
        );
      if (i.isTouchEvent && "touchmove" !== o.type) return;
      const l =
          "touchmove" === o.type &&
          o.targetTouches &&
          (o.targetTouches[0] || o.changedTouches[0]),
        c = "touchmove" === o.type ? l.pageX : o.pageX,
        h = "touchmove" === o.type ? l.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return (n.startX = c), void (n.startY = h);
      if (!t.allowTouchMove)
        return (
          (t.allowClick = !1),
          void (
            i.isTouched &&
            (u.extend(n, { startX: c, startY: h, currentX: c, currentY: h }),
            (i.touchStartTime = u.now()))
          )
        );
      if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (t.isVertical()) {
          if (
            (h < n.startY && t.translate <= t.maxTranslate()) ||
            (h > n.startY && t.translate >= t.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (c < n.startX && t.translate <= t.maxTranslate()) ||
          (c > n.startX && t.translate >= t.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        a.activeElement &&
        o.target === a.activeElement &&
        d(o.target).is(i.formElements)
      )
        return (i.isMoved = !0), void (t.allowClick = !1);
      if (
        (i.allowTouchCallbacks && t.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (n.currentX = c), (n.currentY = h);
      const p = n.currentX - n.startX,
        m = n.currentY - n.startY;
      if (t.params.threshold && Math.sqrt(p ** 2 + m ** 2) < t.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (t.isHorizontal() && n.currentY === n.startY) ||
        (t.isVertical() && n.currentX === n.startX)
          ? (i.isScrolling = !1)
          : p * p + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(p))) / Math.PI),
            (i.isScrolling = t.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (i.isScrolling && t.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((n.currentX === n.startX && n.currentY === n.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (t.allowClick = !1),
        !s.cssMode && o.cancelable && o.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
        i.isMoved ||
          (s.loop && t.loopFix(),
          (i.startTranslate = t.getTranslate()),
          t.setTransition(0),
          t.animating &&
            t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
            t.setGrabCursor(!0),
          t.emit("sliderFirstMove", o)),
        t.emit("sliderMove", o),
        (i.isMoved = !0);
      let f = t.isHorizontal() ? p : m;
      (n.diff = f),
        (f *= s.touchRatio),
        r && (f = -f),
        (t.swipeDirection = f > 0 ? "prev" : "next"),
        (i.currentTranslate = f + i.startTranslate);
      let v = !0,
        g = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (g = 0),
        f > 0 && i.currentTranslate > t.minTranslate()
          ? ((v = !1),
            s.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + f) ** g))
          : f < 0 &&
            i.currentTranslate < t.maxTranslate() &&
            ((v = !1),
            s.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - f) ** g)),
        v && (o.preventedByNestedSwiper = !0),
        !t.allowSlideNext &&
          "next" === t.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !t.allowSlidePrev &&
          "prev" === t.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (n.startX = n.currentX),
            (n.startY = n.currentY),
            (i.currentTranslate = i.startTranslate),
            void (n.diff = t.isHorizontal()
              ? n.currentX - n.startX
              : n.currentY - n.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) &&
          (t.updateActiveIndex(), t.updateSlidesClasses()),
        s.freeMode &&
          (0 === i.velocities.length &&
            i.velocities.push({
              position: n[t.isHorizontal() ? "startX" : "startY"],
              time: i.touchStartTime,
            }),
          i.velocities.push({
            position: n[t.isHorizontal() ? "currentX" : "currentY"],
            time: u.now(),
          })),
        t.updateProgress(i.currentTranslate),
        t.setTranslate(i.currentTranslate));
    }
    function C(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: s,
          touches: n,
          rtlTranslate: a,
          $wrapperEl: r,
          slidesGrid: o,
          snapGrid: l,
        } = t;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = u.now(),
        h = c - i.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(d),
          t.emit("tap click", d),
          h < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d)),
        (i.lastClickTime = u.now()),
        u.nextTick(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let p;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = s.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (s.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < l.length
            ? t.slideTo(l.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            const e = i.velocities.pop(),
              n = i.velocities.pop(),
              a = e.position - n.position,
              r = e.time - n.time;
            (t.velocity = a / r),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (r > 150 || u.now() - e.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          let e = 1e3 * s.freeModeMomentumRatio;
          const n = t.velocity * e;
          let o = t.translate + n;
          a && (o = -o);
          let d,
            c = !1;
          const h = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          let p;
          if (o < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (o + t.maxTranslate() < -h && (o = t.maxTranslate() - h),
                (d = t.maxTranslate()),
                (c = !0),
                (i.allowMomentumBounce = !0))
              : (o = t.maxTranslate()),
              s.loop && s.centeredSlides && (p = !0);
          else if (o > t.minTranslate())
            s.freeModeMomentumBounce
              ? (o - t.minTranslate() > h && (o = t.minTranslate() + h),
                (d = t.minTranslate()),
                (c = !0),
                (i.allowMomentumBounce = !0))
              : (o = t.minTranslate()),
              s.loop && s.centeredSlides && (p = !0);
          else if (s.freeModeSticky) {
            let e;
            for (let t = 0; t < l.length; t += 1)
              if (l[t] > -o) {
                e = t;
                break;
              }
            (o =
              Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) ||
              "next" === t.swipeDirection
                ? l[e]
                : l[e - 1]),
              (o = -o);
          }
          if (
            (p &&
              t.once("transitionEnd", () => {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((e = a
                ? Math.abs((-o - t.translate) / t.velocity)
                : Math.abs((o - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              const i = Math.abs((a ? -o : o) - t.translate),
                n = t.slidesSizesGrid[t.activeIndex];
              e = i < n ? s.speed : i < 2 * n ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && c
            ? (t.updateProgress(d),
              t.setTransition(e),
              t.setTranslate(o),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              r.transitionEnd(() => {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  setTimeout(() => {
                    t.setTranslate(d),
                      r.transitionEnd(() => {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(o),
              t.setTransition(e),
              t.setTranslate(o),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                r.transitionEnd(() => {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(o),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        return void (
          (!s.freeModeMomentum || h >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        );
      }
      let m = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((m = e), (f = o[e + t] - o[e]))
          : p >= o[e] && ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      const v = (p - o[m]) / f,
        g = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (h > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= s.longSwipesRatio ? t.slideTo(m + g) : t.slideTo(m)),
          "prev" === t.swipeDirection &&
            (v > 1 - s.longSwipesRatio ? t.slideTo(m + g) : t.slideTo(m));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(m + g)
            : t.slideTo(m)
          : ("next" === t.swipeDirection && t.slideTo(m + g),
            "prev" === t.swipeDirection && t.slideTo(m));
      }
    }
    function _() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function M(e) {
      const t = this;
      t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function I() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i } = e;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = i
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const n = e.maxTranslate() - e.minTranslate();
      (s = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
        s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let L = !1;
    function k() {}
    var P = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    };
    const O = {
        update: f,
        translate: v,
        transition: g,
        slide: b,
        loop: y,
        grabCursor: w,
        manipulation: E,
        events: {
          attachEvents: function () {
            const e = this,
              { params: t, touchEvents: i, el: s, wrapperEl: n } = e;
            (e.onTouchStart = x.bind(e)),
              (e.onTouchMove = T.bind(e)),
              (e.onTouchEnd = C.bind(e)),
              t.cssMode && (e.onScroll = I.bind(e)),
              (e.onClick = M.bind(e));
            const r = !!t.nested;
            if (!p.touch && p.pointerEvents)
              s.addEventListener(i.start, e.onTouchStart, !1),
                a.addEventListener(i.move, e.onTouchMove, r),
                a.addEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (p.touch) {
                const n = !(
                  "touchstart" !== i.start ||
                  !p.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                s.addEventListener(i.start, e.onTouchStart, n),
                  s.addEventListener(
                    i.move,
                    e.onTouchMove,
                    p.passiveListener ? { passive: !1, capture: r } : r
                  ),
                  s.addEventListener(i.end, e.onTouchEnd, n),
                  i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, n),
                  L || (a.addEventListener("touchstart", k), (L = !0));
              }
              ((t.simulateTouch && !S.ios && !S.android) ||
                (t.simulateTouch && !p.touch && S.ios)) &&
                (s.addEventListener("mousedown", e.onTouchStart, !1),
                a.addEventListener("mousemove", e.onTouchMove, r),
                a.addEventListener("mouseup", e.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              s.addEventListener("click", e.onClick, !0),
              t.cssMode && n.addEventListener("scroll", e.onScroll),
              t.updateOnWindowResize
                ? e.on(
                    S.ios || S.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    _,
                    !0
                  )
                : e.on("observerUpdate", _, !0);
          },
          detachEvents: function () {
            const e = this,
              { params: t, touchEvents: i, el: s, wrapperEl: n } = e,
              r = !!t.nested;
            if (!p.touch && p.pointerEvents)
              s.removeEventListener(i.start, e.onTouchStart, !1),
                a.removeEventListener(i.move, e.onTouchMove, r),
                a.removeEventListener(i.end, e.onTouchEnd, !1);
            else {
              if (p.touch) {
                const n = !(
                  "onTouchStart" !== i.start ||
                  !p.passiveListener ||
                  !t.passiveListeners
                ) && { passive: !0, capture: !1 };
                s.removeEventListener(i.start, e.onTouchStart, n),
                  s.removeEventListener(i.move, e.onTouchMove, r),
                  s.removeEventListener(i.end, e.onTouchEnd, n),
                  i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, n);
              }
              ((t.simulateTouch && !S.ios && !S.android) ||
                (t.simulateTouch && !p.touch && S.ios)) &&
                (s.removeEventListener("mousedown", e.onTouchStart, !1),
                a.removeEventListener("mousemove", e.onTouchMove, r),
                a.removeEventListener("mouseup", e.onTouchEnd, !1));
            }
            (t.preventClicks || t.preventClicksPropagation) &&
              s.removeEventListener("click", e.onClick, !0),
              t.cssMode && n.removeEventListener("scroll", e.onScroll),
              e.off(
                S.ios || S.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                _
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: i,
                loopedSlides: s = 0,
                params: n,
                $el: a,
              } = e,
              r = n.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r);
            if (o && e.currentBreakpoint !== o) {
              const l = o in r ? r[o] : void 0;
              l &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach((e) => {
                  const t = l[e];
                  void 0 !== t &&
                    (l[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              const d = l || e.originalParams,
                c = n.slidesPerColumn > 1,
                h = d.slidesPerColumn > 1;
              c && !h
                ? a.removeClass(
                    `${n.containerModifierClass}multirow ${n.containerModifierClass}multirow-column`
                  )
                : !c &&
                  h &&
                  (a.addClass(n.containerModifierClass + "multirow"),
                  "column" === d.slidesPerColumnFill &&
                    a.addClass(n.containerModifierClass + "multirow-column"));
              const p = d.direction && d.direction !== n.direction,
                m = n.loop && (d.slidesPerView !== n.slidesPerView || p);
              p && i && e.changeDirection(),
                u.extend(e.params, d),
                u.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = o),
                m &&
                  i &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - s + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", d);
            }
          },
          getBreakpoint: function (e) {
            if (!e) return;
            let t = !1;
            const i = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: o.innerHeight * t, point: e };
              }
              return { value: e, point: e };
            });
            i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < i.length; e += 1) {
              const { point: s, value: n } = i[e];
              n <= o.innerWidth && (t = s);
            }
            return t || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              t = e.params,
              i = e.isLocked,
              s =
                e.slides.length > 0 &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && s
              ? (e.isLocked = s <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              i &&
                i !== e.isLocked &&
                ((e.isEnd = !1), e.navigation && e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            const { classNames: e, params: t, rtl: i, $el: s } = this,
              n = [];
            n.push("initialized"),
              n.push(t.direction),
              t.freeMode && n.push("free-mode"),
              t.autoHeight && n.push("autoheight"),
              i && n.push("rtl"),
              t.slidesPerColumn > 1 &&
                (n.push("multirow"),
                "column" === t.slidesPerColumnFill &&
                  n.push("multirow-column")),
              S.android && n.push("android"),
              S.ios && n.push("ios"),
              t.cssMode && n.push("css-mode"),
              n.forEach((i) => {
                e.push(t.containerModifierClass + i);
              }),
              s.addClass(e.join(" "));
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" "));
          },
        },
        images: {
          loadImage: function (e, t, i, s, n, a) {
            let r;
            function l() {
              a && a();
            }
            d(e).parent("picture")[0] || (e.complete && n)
              ? l()
              : t
              ? ((r = new o.Image()),
                (r.onload = l),
                (r.onerror = l),
                s && (r.sizes = s),
                i && (r.srcset = i),
                t && (r.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const s = e.imagesToLoad[i];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      $ = {};
    class A extends m {
      constructor(...e) {
        let t, i;
        1 === e.length && e[0].constructor && e[0].constructor === Object
          ? (i = e[0])
          : ([t, i] = e),
          i || (i = {}),
          (i = u.extend({}, i)),
          t && !i.el && (i.el = t),
          super(i),
          Object.keys(O).forEach((e) => {
            Object.keys(O[e]).forEach((t) => {
              A.prototype[t] || (A.prototype[t] = O[e][t]);
            });
          });
        const s = this;
        void 0 === s.modules && (s.modules = {}),
          Object.keys(s.modules).forEach((e) => {
            const t = s.modules[e];
            if (t.params) {
              const e = Object.keys(t.params)[0],
                s = t.params[e];
              if ("object" != typeof s || null === s) return;
              if (!(e in i) || !("enabled" in s)) return;
              !0 === i[e] && (i[e] = { enabled: !0 }),
                "object" != typeof i[e] ||
                  "enabled" in i[e] ||
                  (i[e].enabled = !0),
                i[e] || (i[e] = { enabled: !1 });
            }
          });
        const n = u.extend({}, P);
        s.useModulesParams(n),
          (s.params = u.extend({}, n, $, i)),
          (s.originalParams = u.extend({}, s.params)),
          (s.passedParams = u.extend({}, i)),
          (s.$ = d);
        const a = d(s.params.el);
        if (((t = a[0]), !t)) return;
        if (a.length > 1) {
          const e = [];
          return (
            a.each((t, s) => {
              const n = u.extend({}, i, { el: s });
              e.push(new A(n));
            }),
            e
          );
        }
        let r;
        return (
          (t.swiper = s),
          a.data("swiper", s),
          t && t.shadowRoot && t.shadowRoot.querySelector
            ? ((r = d(t.shadowRoot.querySelector("." + s.params.wrapperClass))),
              (r.children = (e) => a.children(e)))
            : (r = a.children("." + s.params.wrapperClass)),
          u.extend(s, {
            $el: a,
            el: t,
            $wrapperEl: r,
            wrapperEl: r[0],
            classNames: [],
            slides: d(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
            rtlTranslate:
              "horizontal" === s.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
              let t = ["mousedown", "mousemove", "mouseup"];
              return (
                p.pointerEvents &&
                  (t = ["pointerdown", "pointermove", "pointerup"]),
                (s.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                p.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements:
                "input, select, option, textarea, button, video, label",
              lastClickTime: u.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.useModules(),
          s.params.init && s.init(),
          s
        );
      }
      slidesPerViewDynamic() {
        const {
          params: e,
          slides: t,
          slidesGrid: i,
          size: s,
          activeIndex: n,
        } = this;
        let a = 1;
        if (e.centeredSlides) {
          let e,
            i = t[n].swiperSlideSize;
          for (let r = n + 1; r < t.length; r += 1)
            t[r] &&
              !e &&
              ((i += t[r].swiperSlideSize), (a += 1), i > s && (e = !0));
          for (let r = n - 1; r >= 0; r -= 1)
            t[r] &&
              !e &&
              ((i += t[r].swiperSlideSize), (a += 1), i > s && (e = !0));
        } else
          for (let e = n + 1; e < t.length; e += 1) i[e] - i[n] < s && (a += 1);
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || s()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${s}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            (i.params.direction = e),
            i.slides.each((t, i) => {
              "vertical" === e ? (i.style.width = "") : (i.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      init() {
        const e = this;
        e.initialized ||
          (e.emit("beforeInit"),
          e.params.breakpoints && e.setBreakpoint(),
          e.addClasses(),
          e.params.loop && e.loopCreate(),
          e.updateSize(),
          e.updateSlides(),
          e.params.watchOverflow && e.checkOverflow(),
          e.params.grabCursor && e.setGrabCursor(),
          e.params.preloadImages && e.preloadImages(),
          e.params.loop
            ? e.slideTo(
                e.params.initialSlide + e.loopedSlides,
                0,
                e.params.runCallbacksOnInit
              )
            : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
          e.attachEvents(),
          (e.initialized = !0),
          e.emit("init"));
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: s, $el: n, $wrapperEl: a, slides: r } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              i.$el.data("swiper", null),
              u.deleteProps(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        u.extend($, e);
      }
      static get extendedDefaults() {
        return $;
      }
      static get defaults() {
        return P;
      }
      static get Class() {
        return m;
      }
      static get $() {
        return d;
      }
    }
    var D = { name: "device", proto: { device: S }, static: { device: S } },
      z = { name: "support", proto: { support: p }, static: { support: p } };
    const N = {
      isEdge: !!o.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        const e = o.navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        o.navigator.userAgent
      ),
    };
    var H = { name: "browser", proto: { browser: N }, static: { browser: N } },
      F = {
        name: "resize",
        create() {
          const e = this;
          u.extend(e, {
            resize: {
              resizeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init() {
            o.addEventListener("resize", this.resize.resizeHandler),
              o.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy() {
            o.removeEventListener("resize", this.resize.resizeHandler),
              o.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      };
    const B = {
      func: o.MutationObserver || o.WebkitMutationObserver,
      attach(e, t = {}) {
        const i = this,
          s = new (0, B.func)((e) => {
            if (1 === e.length) return void i.emit("observerUpdate", e[0]);
            const t = function () {
              i.emit("observerUpdate", e[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(t)
              : o.setTimeout(t, 0);
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s);
      },
      init() {
        const e = this;
        if (p.observer && e.params.observer) {
          if (e.params.observeParents) {
            const t = e.$el.parents();
            for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy() {
        this.observer.observers.forEach((e) => {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    };
    var G = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create() {
        u.extend(this, {
          observer: {
            init: B.init.bind(this),
            attach: B.attach.bind(this),
            destroy: B.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init() {
          this.observer.init();
        },
        destroy() {
          this.observer.destroy();
        },
      },
    };
    const j = {
      update(e) {
        const t = this,
          { slidesPerView: i, slidesPerGroup: s, centeredSlides: n } = t.params,
          { addSlidesBefore: a, addSlidesAfter: r } = t.params.virtual,
          {
            from: o,
            to: l,
            slides: d,
            slidesGrid: c,
            renderSlide: h,
            offset: p,
          } = t.virtual;
        t.updateActiveIndex();
        const m = t.activeIndex || 0;
        let f, v, g;
        (f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          n
            ? ((v = Math.floor(i / 2) + s + a), (g = Math.floor(i / 2) + s + r))
            : ((v = i + (s - 1) + a), (g = s + r));
        const b = Math.max((m || 0) - g, 0),
          y = Math.min((m || 0) + v, d.length - 1),
          w = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function E() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (u.extend(t.virtual, {
            from: b,
            to: y,
            offset: w,
            slidesGrid: t.slidesGrid,
          }),
          o === b && l === y && !e)
        )
          return (
            t.slidesGrid !== c && w !== p && t.slides.css(f, w + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: w,
              from: b,
              to: y,
              slides: (function () {
                const e = [];
                for (let t = b; t <= y; t += 1) e.push(d[t]);
                return e;
              })(),
            }),
            void E()
          );
        const S = [],
          x = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (let e = o; e <= l; e += 1)
            (e < b || e > y) &&
              t.$wrapperEl
                .find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < d.length; t += 1)
          t >= b &&
            t <= y &&
            (void 0 === l || e
              ? x.push(t)
              : (t > l && x.push(t), t < o && S.push(t)));
        x.forEach((e) => {
          t.$wrapperEl.append(h(d[e], e));
        }),
          S.sort((e, t) => t - e).forEach((e) => {
            t.$wrapperEl.prepend(h(d[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(f, w + "px"),
          E();
      },
      renderSlide(e, t) {
        const i = this,
          s = i.params.virtual;
        if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
        const n = s.renderSlide
          ? d(s.renderSlide.call(i, e, t))
          : d(
              `<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          n.attr("data-swiper-slide-index") ||
            n.attr("data-swiper-slide-index", t),
          s.cache && (i.virtual.cache[t] = n),
          n
        );
      },
      appendSlide(e) {
        const t = this;
        if ("object" == typeof e && "length" in e)
          for (let i = 0; i < e.length; i += 1)
            e[i] && t.virtual.slides.push(e[i]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide(e) {
        const t = this,
          i = t.activeIndex;
        let s = i + 1,
          n = 1;
        if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i += 1)
            e[i] && t.virtual.slides.unshift(e[i]);
          (s = i + e.length), (n = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          const e = t.virtual.cache,
            i = {};
          Object.keys(e).forEach((t) => {
            const s = e[t],
              a = s.attr("data-swiper-slide-index");
            a && s.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
              (i[parseInt(t, 10) + n] = s);
          }),
            (t.virtual.cache = i);
        }
        t.virtual.update(!0), t.slideTo(s, 0);
      },
      removeSlide(e) {
        const t = this;
        if (null == e) return;
        let i = t.activeIndex;
        if (Array.isArray(e))
          for (let s = e.length - 1; s >= 0; s -= 1)
            t.virtual.slides.splice(e[s], 1),
              t.params.virtual.cache && delete t.virtual.cache[e[s]],
              e[s] < i && (i -= 1),
              (i = Math.max(i, 0));
        else
          t.virtual.slides.splice(e, 1),
            t.params.virtual.cache && delete t.virtual.cache[e],
            e < i && (i -= 1),
            (i = Math.max(i, 0));
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeAllSlides() {
        const e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    };
    var V = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create() {
        u.extend(this, {
          virtual: {
            update: j.update.bind(this),
            appendSlide: j.appendSlide.bind(this),
            prependSlide: j.prependSlide.bind(this),
            removeSlide: j.removeSlide.bind(this),
            removeAllSlides: j.removeAllSlides.bind(this),
            renderSlide: j.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit() {
          const e = this;
          if (!e.params.virtual.enabled) return;
          e.classNames.push(e.params.containerModifierClass + "virtual");
          const t = { watchSlidesProgress: !0 };
          u.extend(e.params, t),
            u.extend(e.originalParams, t),
            e.params.initialSlide || e.virtual.update();
        },
        setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    };
    const q = {
      handle(e) {
        const t = this,
          { rtlTranslate: i } = t;
        let s = e;
        s.originalEvent && (s = s.originalEvent);
        const n = s.keyCode || s.charCode,
          r = t.params.keyboard.pageUpDown,
          l = r && 33 === n,
          d = r && 34 === n,
          c = 37 === n,
          h = 39 === n,
          u = 38 === n,
          p = 40 === n;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && h) || (t.isVertical() && p) || d)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && c) || (t.isVertical() && u) || l)
        )
          return !1;
        if (
          !(
            s.shiftKey ||
            s.altKey ||
            s.ctrlKey ||
            s.metaKey ||
            (a.activeElement &&
              a.activeElement.nodeName &&
              ("input" === a.activeElement.nodeName.toLowerCase() ||
                "textarea" === a.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (l || d || c || h || u || p)
          ) {
            let e = !1;
            if (
              t.$el.parents("." + t.params.slideClass).length > 0 &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            const s = o.innerWidth,
              n = o.innerHeight,
              a = t.$el.offset();
            i && (a.left -= t.$el[0].scrollLeft);
            const r = [
              [a.left, a.top],
              [a.left + t.width, a.top],
              [a.left, a.top + t.height],
              [a.left + t.width, a.top + t.height],
            ];
            for (let t = 0; t < r.length; t += 1) {
              const i = r[t];
              i[0] >= 0 && i[0] <= s && i[1] >= 0 && i[1] <= n && (e = !0);
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((l || d || c || h) &&
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (((d || h) && !i) || ((l || c) && i)) && t.slideNext(),
              (((l || c) && !i) || ((d || h) && i)) && t.slidePrev())
            : ((l || d || u || p) &&
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (d || p) && t.slideNext(),
              (l || u) && t.slidePrev()),
            t.emit("keyPress", n);
        }
      },
      enable() {
        this.keyboard.enabled ||
          (d(a).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable() {
        this.keyboard.enabled &&
          (d(a).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    };
    var R = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create() {
        u.extend(this, {
          keyboard: {
            enabled: !1,
            enable: q.enable.bind(this),
            disable: q.disable.bind(this),
            handle: q.handle.bind(this),
          },
        });
      },
      on: {
        init() {
          const e = this;
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy() {
          const e = this;
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
    const X = {
      lastScrollTime: u.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: () =>
        o.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              let e = "onwheel" in a;
              if (!e) {
                const t = a.createElement("div");
                t.setAttribute("onwheel", "return;"),
                  (e = "function" == typeof t.onwheel);
              }
              return (
                !e &&
                  a.implementation &&
                  a.implementation.hasFeature &&
                  !0 !== a.implementation.hasFeature("", "") &&
                  (e = a.implementation.hasFeature("Events.wheel", "3.0")),
                e
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize(e) {
        let t = 0,
          i = 0,
          s = 0,
          n = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (n = 10 * i),
          "deltaY" in e && (n = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = n), (n = 0)),
          (s || n) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (n *= 40))
              : ((s *= 800), (n *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          n && !i && (i = n < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: n }
        );
      },
      handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle(e) {
        let t = e;
        const i = this,
          s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        let n = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarged &&
            (n = d(i.params.mousewheel.eventsTarged)),
          !i.mouseEntered && !n[0].contains(t.target) && !s.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        let a = 0;
        const r = i.rtlTranslate ? -1 : 1,
          o = X.normalize(t);
        if (s.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            a = -o.pixelX * r;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            a = -o.pixelY;
          }
        else
          a =
            Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
        if (0 === a) return !0;
        if ((s.invert && (a = -a), i.params.freeMode)) {
          const e = {
              time: u.now(),
              delta: Math.abs(a),
              direction: Math.sign(a),
            },
            { lastEventBeforeSnap: n } = i.mousewheel,
            r =
              n &&
              e.time < n.time + 500 &&
              e.delta <= n.delta &&
              e.direction === n.direction;
          if (!r) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            let n = i.getTranslate() + a * s.sensitivity;
            const o = i.isBeginning,
              l = i.isEnd;
            if (
              (n >= i.minTranslate() && (n = i.minTranslate()),
              n <= i.maxTranslate() && (n = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(n),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!o && i.isBeginning) || (!l && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              const t = i.mousewheel.recentWheelEvents;
              t.length >= 15 && t.shift();
              const s = t.length ? t[t.length - 1] : void 0,
                n = t[0];
              if (
                (t.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                t.splice(0);
              else if (
                t.length >= 15 &&
                e.time - n.time < 500 &&
                n.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = a > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = e),
                  t.splice(0),
                  (i.mousewheel.timeout = u.nextTick(() => {
                    i.slideToClosest(i.params.speed, !0, void 0, s);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = u.nextTick(() => {
                  (i.mousewheel.lastEventBeforeSnap = e),
                    t.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (r || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              n === i.minTranslate() || n === i.maxTranslate())
            )
              return !0;
          }
        } else {
          const t = {
              time: u.now(),
              delta: Math.abs(a),
              direction: Math.sign(a),
              raw: e,
            },
            s = i.mousewheel.recentWheelEvents;
          s.length >= 2 && s.shift();
          const n = s.length ? s[s.length - 1] : void 0;
          if (
            (s.push(t),
            n
              ? (t.direction !== n.direction ||
                  t.delta > n.delta ||
                  t.time > n.time + 150) &&
                i.mousewheel.animateSlider(t)
              : i.mousewheel.animateSlider(t),
            i.mousewheel.releaseScroll(t))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider(e) {
        const t = this;
        return (
          (e.delta >= 6 && u.now() - t.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), t.emit("scroll", e.raw))
            : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), t.emit("scroll", e.raw)),
          (t.mousewheel.lastScrollTime = new o.Date().getTime()),
          !1)
        );
      },
      releaseScroll(e) {
        const t = this,
          i = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges)
          return !0;
        return !1;
      },
      enable() {
        const e = this,
          t = X.event();
        if (e.params.cssMode)
          return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        let i = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (i = d(e.params.mousewheel.eventsTarged)),
          i.on("mouseenter", e.mousewheel.handleMouseEnter),
          i.on("mouseleave", e.mousewheel.handleMouseLeave),
          i.on(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable() {
        const e = this,
          t = X.event();
        if (e.params.cssMode)
          return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        let i = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (i = d(e.params.mousewheel.eventsTarged)),
          i.off(t, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      },
    };
    const Y = {
      update() {
        const e = this,
          t = e.params.navigation;
        if (e.params.loop) return;
        const { $nextEl: i, $prevEl: s } = e.navigation;
        s &&
          s.length > 0 &&
          (e.isBeginning
            ? s.addClass(t.disabledClass)
            : s.removeClass(t.disabledClass),
          s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            t.lockClass
          )),
          i &&
            i.length > 0 &&
            (e.isEnd
              ? i.addClass(t.disabledClass)
              : i.removeClass(t.disabledClass),
            i[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass));
      },
      onPrevClick(e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick(e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init() {
        const e = this,
          t = e.params.navigation;
        if (!t.nextEl && !t.prevEl) return;
        let i, s;
        t.nextEl &&
          ((i = d(t.nextEl)),
          e.params.uniqueNavElements &&
            "string" == typeof t.nextEl &&
            i.length > 1 &&
            1 === e.$el.find(t.nextEl).length &&
            (i = e.$el.find(t.nextEl))),
          t.prevEl &&
            ((s = d(t.prevEl)),
            e.params.uniqueNavElements &&
              "string" == typeof t.prevEl &&
              s.length > 1 &&
              1 === e.$el.find(t.prevEl).length &&
              (s = e.$el.find(t.prevEl))),
          i && i.length > 0 && i.on("click", e.navigation.onNextClick),
          s && s.length > 0 && s.on("click", e.navigation.onPrevClick),
          u.extend(e.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: s,
            prevEl: s && s[0],
          });
      },
      destroy() {
        const e = this,
          { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t.length &&
          (t.off("click", e.navigation.onNextClick),
          t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    };
    const W = {
      update() {
        const e = this,
          t = e.rtl,
          i = e.params.pagination;
        if (
          !i.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          n = e.pagination.$el;
        let a;
        const r = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((a = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              a > s - 1 - 2 * e.loopedSlides && (a -= s - 2 * e.loopedSlides),
              a > r - 1 && (a -= r),
              a < 0 && "bullets" !== e.params.paginationType && (a = r + a))
            : (a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === i.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const s = e.pagination.bullets;
          let r, o, l;
          if (
            (i.dynamicBullets &&
              ((e.pagination.bulletSize = s
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              n.css(
                e.isHorizontal() ? "width" : "height",
                e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"
              ),
              i.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((e.pagination.dynamicBulletIndex += a - e.previousIndex),
                e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1
                  ? (e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1)
                  : e.pagination.dynamicBulletIndex < 0 &&
                    (e.pagination.dynamicBulletIndex = 0)),
              (r = a - e.pagination.dynamicBulletIndex),
              (o = r + (Math.min(s.length, i.dynamicMainBullets) - 1)),
              (l = (o + r) / 2)),
            s.removeClass(
              `${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`
            ),
            n.length > 1)
          )
            s.each((e, t) => {
              const s = d(t),
                n = s.index();
              n === a && s.addClass(i.bulletActiveClass),
                i.dynamicBullets &&
                  (n >= r &&
                    n <= o &&
                    s.addClass(i.bulletActiveClass + "-main"),
                  n === r &&
                    s
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev"),
                  n === o &&
                    s
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next"));
            });
          else {
            const t = s.eq(a),
              n = t.index();
            if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
              const t = s.eq(r),
                a = s.eq(o);
              for (let e = r; e <= o; e += 1)
                s.eq(e).addClass(i.bulletActiveClass + "-main");
              if (e.params.loop)
                if (n >= s.length - i.dynamicMainBullets) {
                  for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                    s.eq(s.length - e).addClass(i.bulletActiveClass + "-main");
                  s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                    i.bulletActiveClass + "-prev"
                  );
                } else
                  t
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev-prev"),
                    a
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next");
              else
                t
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev")
                  .prev()
                  .addClass(i.bulletActiveClass + "-prev-prev"),
                  a
                    .next()
                    .addClass(i.bulletActiveClass + "-next")
                    .next()
                    .addClass(i.bulletActiveClass + "-next-next");
            }
          }
          if (i.dynamicBullets) {
            const n = Math.min(s.length, i.dynamicMainBullets + 4),
              a =
                (e.pagination.bulletSize * n - e.pagination.bulletSize) / 2 -
                l * e.pagination.bulletSize,
              r = t ? "right" : "left";
            s.css(e.isHorizontal() ? r : "top", a + "px");
          }
        }
        if (
          ("fraction" === i.type &&
            (n.find("." + i.currentClass).text(i.formatFractionCurrent(a + 1)),
            n.find("." + i.totalClass).text(i.formatFractionTotal(r))),
          "progressbar" === i.type)
        ) {
          let t;
          t = i.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const s = (a + 1) / r;
          let o = 1,
            l = 1;
          "horizontal" === t ? (o = s) : (l = s),
            n
              .find("." + i.progressbarFillClass)
              .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
              .transition(e.params.speed);
        }
        "custom" === i.type && i.renderCustom
          ? (n.html(i.renderCustom(e, a + 1, r)),
            e.emit("paginationRender", e, n[0]))
          : e.emit("paginationUpdate", e, n[0]),
          n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            i.lockClass
          );
      },
      render() {
        const e = this,
          t = e.params.pagination;
        if (
          !t.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          s = e.pagination.$el;
        let n = "";
        if ("bullets" === t.type) {
          const a = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          for (let i = 0; i < a; i += 1)
            t.renderBullet
              ? (n += t.renderBullet.call(e, i, t.bulletClass))
              : (n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          s.html(n), (e.pagination.bullets = s.find("." + t.bulletClass));
        }
        "fraction" === t.type &&
          ((n = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          s.html(n)),
          "progressbar" === t.type &&
            ((n = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            s.html(n)),
          "custom" !== t.type &&
            e.emit("paginationRender", e.pagination.$el[0]);
      },
      init() {
        const e = this,
          t = e.params.pagination;
        if (!t.el) return;
        let i = d(t.el);
        0 !== i.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            i.length > 1 &&
            (i = e.$el.find(t.el)),
          "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
          i.addClass(t.modifierClass + t.type),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (e.pagination.dynamicBulletIndex = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            i.addClass(t.progressbarOppositeClass),
          t.clickable &&
            i.on("click", "." + t.bulletClass, function (t) {
              t.preventDefault();
              let i = d(this).index() * e.params.slidesPerGroup;
              e.params.loop && (i += e.loopedSlides), e.slideTo(i);
            }),
          u.extend(e.pagination, { $el: i, el: i[0] }));
      },
      destroy() {
        const e = this.params.pagination;
        if (
          !e.el ||
          !this.pagination.el ||
          !this.pagination.$el ||
          0 === this.pagination.$el.length
        )
          return;
        const t = this.pagination.$el;
        t.removeClass(e.hiddenClass),
          t.removeClass(e.modifierClass + e.type),
          this.pagination.bullets &&
            this.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && t.off("click", "." + e.bulletClass);
      },
    };
    const K = {
      setTranslate() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: i, progress: s } = e,
          { dragSize: n, trackSize: a, $dragEl: r, $el: o } = t,
          l = e.params.scrollbar;
        let d = n,
          c = (a - n) * s;
        i
          ? ((c = -c),
            c > 0 ? ((d = n - c), (c = 0)) : -c + n > a && (d = a + c))
          : c < 0
          ? ((d = n + c), (c = 0))
          : c + n > a && (d = a - c),
          e.isHorizontal()
            ? (r.transform(`translate3d(${c}px, 0, 0)`),
              (r[0].style.width = d + "px"))
            : (r.transform(`translate3d(0px, ${c}px, 0)`),
              (r[0].style.height = d + "px")),
          l.hide &&
            (clearTimeout(e.scrollbar.timeout),
            (o[0].style.opacity = 1),
            (e.scrollbar.timeout = setTimeout(() => {
              (o[0].style.opacity = 0), o.transition(400);
            }, 1e3)));
      },
      setTransition(e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { $dragEl: i, $el: s } = t;
        (i[0].style.width = ""), (i[0].style.height = "");
        const n = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight,
          a = e.size / e.virtualSize,
          r = a * (n / e.size);
        let o;
        (o =
          "auto" === e.params.scrollbar.dragSize
            ? n * a
            : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (i[0].style.width = o + "px")
            : (i[0].style.height = o + "px"),
          (s[0].style.display = a >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (s[0].style.opacity = 0),
          u.extend(t, {
            trackSize: n,
            divider: a,
            moveDivider: r,
            dragSize: o,
          }),
          t.$el[
            e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
          ](e.params.scrollbar.lockClass);
      },
      getPointerPosition(e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition(e) {
        const { scrollbar: t, rtlTranslate: i } = this,
          { $el: s, dragSize: n, trackSize: a, dragStartPos: r } = t;
        let o;
        (o =
          (t.getPointerPosition(e) -
            s.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== r ? r : n / 2)) /
          (a - n)),
          (o = Math.max(Math.min(o, 1), 0)),
          i && (o = 1 - o);
        const l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart(e) {
        const t = this,
          i = t.params.scrollbar,
          { scrollbar: s, $wrapperEl: n } = t,
          { $el: a, $dragEl: r } = s;
        (t.scrollbar.isTouched = !0),
          (t.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? s.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          n.transition(100),
          r.transition(100),
          s.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          a.transition(0),
          i.hide && a.css("opacity", 1),
          t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove(e) {
        const { scrollbar: t, $wrapperEl: i } = this,
          { $el: s, $dragEl: n } = t;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          n.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd(e) {
        const t = this,
          i = t.params.scrollbar,
          { scrollbar: s, $wrapperEl: n } = t,
          { $el: a } = s;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
          i.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = u.nextTick(() => {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          i.snapOnRelease && t.slideToClosest());
      },
      enableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: i,
            touchEventsDesktop: s,
            params: n,
          } = e,
          r = t.$el[0],
          o = !(!p.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          l = !(!p.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        p.touch
          ? (r.addEventListener(i.start, e.scrollbar.onDragStart, o),
            r.addEventListener(i.move, e.scrollbar.onDragMove, o),
            r.addEventListener(i.end, e.scrollbar.onDragEnd, l))
          : (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
            a.addEventListener(s.move, e.scrollbar.onDragMove, o),
            a.addEventListener(s.end, e.scrollbar.onDragEnd, l));
      },
      disableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: i,
            touchEventsDesktop: s,
            params: n,
          } = e,
          r = t.$el[0],
          o = !(!p.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          l = !(!p.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        p.touch
          ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, o),
            r.removeEventListener(i.move, e.scrollbar.onDragMove, o),
            r.removeEventListener(i.end, e.scrollbar.onDragEnd, l))
          : (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
            a.removeEventListener(s.move, e.scrollbar.onDragMove, o),
            a.removeEventListener(s.end, e.scrollbar.onDragEnd, l));
      },
      init() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const { scrollbar: t, $el: i } = e,
          s = e.params.scrollbar;
        let n = d(s.el);
        e.params.uniqueNavElements &&
          "string" == typeof s.el &&
          n.length > 1 &&
          1 === i.find(s.el).length &&
          (n = i.find(s.el));
        let a = n.find("." + e.params.scrollbar.dragClass);
        0 === a.length &&
          ((a = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          n.append(a)),
          u.extend(t, { $el: n, el: n[0], $dragEl: a, dragEl: a[0] }),
          s.draggable && t.enableDraggable();
      },
      destroy() {
        this.scrollbar.disableDraggable();
      },
    };
    const U = {
      setTransform(e, t) {
        const { rtl: i } = this,
          s = d(e),
          n = i ? -1 : 1,
          a = s.attr("data-swiper-parallax") || "0";
        let r = s.attr("data-swiper-parallax-x"),
          o = s.attr("data-swiper-parallax-y");
        const l = s.attr("data-swiper-parallax-scale"),
          c = s.attr("data-swiper-parallax-opacity");
        if (
          (r || o
            ? ((r = r || "0"), (o = o || "0"))
            : this.isHorizontal()
            ? ((r = a), (o = "0"))
            : ((o = a), (r = "0")),
          (r =
            r.indexOf("%") >= 0
              ? parseInt(r, 10) * t * n + "%"
              : r * t * n + "px"),
          (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
          null != c)
        ) {
          const e = c - (c - 1) * (1 - Math.abs(t));
          s[0].style.opacity = e;
        }
        if (null == l) s.transform(`translate3d(${r}, ${o}, 0px)`);
        else {
          const e = l - (l - 1) * (1 - Math.abs(t));
          s.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`);
        }
      },
      setTranslate() {
        const e = this,
          { $el: t, slides: i, progress: s, snapGrid: n } = e;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((t, i) => {
            e.parallax.setTransform(i, s);
          }),
          i.each((t, i) => {
            let a = i.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (a += Math.ceil(t / 2) - s * (n.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              d(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((t, i) => {
                  e.parallax.setTransform(i, a);
                });
          });
      },
      setTransition(e = this.params.speed) {
        const { $el: t } = this;
        t.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((t, i) => {
          const s = d(i);
          let n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (n = 0), s.transition(n);
        });
      },
    };
    const J = {
      getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          n = e.targetTouches[1].pageY;
        return Math.sqrt((s - t) ** 2 + (n - i) ** 2);
      },
      onGestureStart(e) {
        const t = this,
          i = t.params.zoom,
          s = t.zoom,
          { gesture: n } = s;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !p.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (n.scaleStart = J.getDistanceBetweenTouches(e));
        }
        (n.$slideEl && n.$slideEl.length) ||
        ((n.$slideEl = d(e.target).closest("." + t.params.slideClass)),
        0 === n.$slideEl.length && (n.$slideEl = t.slides.eq(t.activeIndex)),
        (n.$imageEl = n.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass)),
        (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== n.$imageWrapEl.length)
          ? (n.$imageEl && n.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (n.$imageEl = void 0);
      },
      onGestureChange(e) {
        const t = this.params.zoom,
          i = this.zoom,
          { gesture: s } = i;
        if (!p.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = J.getDistanceBetweenTouches(e));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = p.gestures
            ? e.scale * i.currentScale
            : (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale = s.maxRatio - 1 + (i.scale - s.maxRatio + 1) ** 0.5),
          i.scale < t.minRatio &&
            (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** 0.5),
          s.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
      },
      onGestureEnd(e) {
        const t = this.params.zoom,
          i = this.zoom,
          { gesture: s } = i;
        if (!p.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !S.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl
            .transition(this.params.speed)
            .transform(`translate3d(0,0,0) scale(${i.scale})`),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart(e) {
        const t = this.zoom,
          { gesture: i, image: s } = t;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (S.android && e.cancelable && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove(e) {
        const t = this,
          i = t.zoom,
          { gesture: s, image: n, velocity: a } = i;
        if (!s.$imageEl || 0 === s.$imageEl.length) return;
        if (((t.allowClick = !1), !n.isTouched || !s.$slideEl)) return;
        n.isMoved ||
          ((n.width = s.$imageEl[0].offsetWidth),
          (n.height = s.$imageEl[0].offsetHeight),
          (n.startX = u.getTranslate(s.$imageWrapEl[0], "x") || 0),
          (n.startY = u.getTranslate(s.$imageWrapEl[0], "y") || 0),
          (s.slideWidth = s.$slideEl[0].offsetWidth),
          (s.slideHeight = s.$slideEl[0].offsetHeight),
          s.$imageWrapEl.transition(0),
          t.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
        const r = n.width * i.scale,
          o = n.height * i.scale;
        if (!(r < s.slideWidth && o < s.slideHeight)) {
          if (
            ((n.minX = Math.min(s.slideWidth / 2 - r / 2, 0)),
            (n.maxX = -n.minX),
            (n.minY = Math.min(s.slideHeight / 2 - o / 2, 0)),
            (n.maxY = -n.minY),
            (n.touchesCurrent.x =
              "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (n.touchesCurrent.y =
              "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
            !n.isMoved && !i.isScaling)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(n.minX) === Math.floor(n.startX) &&
                n.touchesCurrent.x < n.touchesStart.x) ||
                (Math.floor(n.maxX) === Math.floor(n.startX) &&
                  n.touchesCurrent.x > n.touchesStart.x))
            )
              return void (n.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(n.minY) === Math.floor(n.startY) &&
                n.touchesCurrent.y < n.touchesStart.y) ||
                (Math.floor(n.maxY) === Math.floor(n.startY) &&
                  n.touchesCurrent.y > n.touchesStart.y))
            )
              return void (n.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (n.isMoved = !0),
            (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
            (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
            n.currentX < n.minX &&
              (n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** 0.8),
            n.currentX > n.maxX &&
              (n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** 0.8),
            n.currentY < n.minY &&
              (n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** 0.8),
            n.currentY > n.maxY &&
              (n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** 0.8),
            a.prevPositionX || (a.prevPositionX = n.touchesCurrent.x),
            a.prevPositionY || (a.prevPositionY = n.touchesCurrent.y),
            a.prevTime || (a.prevTime = Date.now()),
            (a.x =
              (n.touchesCurrent.x - a.prevPositionX) /
              (Date.now() - a.prevTime) /
              2),
            (a.y =
              (n.touchesCurrent.y - a.prevPositionY) /
              (Date.now() - a.prevTime) /
              2),
            Math.abs(n.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
            Math.abs(n.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
            (a.prevPositionX = n.touchesCurrent.x),
            (a.prevPositionY = n.touchesCurrent.y),
            (a.prevTime = Date.now()),
            s.$imageWrapEl.transform(
              `translate3d(${n.currentX}px, ${n.currentY}px,0)`
            );
        }
      },
      onTouchEnd() {
        const e = this.zoom,
          { gesture: t, image: i, velocity: s } = e;
        if (!t.$imageEl || 0 === t.$imageEl.length) return;
        if (!i.isTouched || !i.isMoved)
          return (i.isTouched = !1), void (i.isMoved = !1);
        (i.isTouched = !1), (i.isMoved = !1);
        let n = 300,
          a = 300;
        const r = s.x * n,
          o = i.currentX + r,
          l = s.y * a,
          d = i.currentY + l;
        0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)),
          0 !== s.y && (a = Math.abs((d - i.currentY) / s.y));
        const c = Math.max(n, a);
        (i.currentX = o), (i.currentY = d);
        const h = i.width * e.scale,
          u = i.height * e.scale;
        (i.minX = Math.min(t.slideWidth / 2 - h / 2, 0)),
          (i.maxX = -i.minX),
          (i.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
          (i.maxY = -i.minY),
          (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
          (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
          t.$imageWrapEl
            .transition(c)
            .transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
      },
      onTransitionEnd() {
        const e = this.zoom,
          { gesture: t } = e;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle(e) {
        const t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in(e) {
        const t = this,
          i = t.zoom,
          s = t.params.zoom,
          { gesture: n, image: a } = i;
        if (
          (n.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (n.$slideEl = t.$wrapperEl.children(
                  "." + t.params.slideActiveClass
                ))
              : (n.$slideEl = t.slides.eq(t.activeIndex)),
            (n.$imageEl = n.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (n.$imageWrapEl = n.$imageEl.parent("." + s.containerClass))),
          !n.$imageEl || 0 === n.$imageEl.length)
        )
          return;
        let r, o, l, d, c, h, u, p, m, f, v, g, b, y, w, E, S, x;
        n.$slideEl.addClass("" + s.zoomedSlideClass),
          void 0 === a.touchesStart.x && e
            ? ((r =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((r = a.touchesStart.x), (o = a.touchesStart.y)),
          (i.scale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          (i.currentScale =
            n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          e
            ? ((S = n.$slideEl[0].offsetWidth),
              (x = n.$slideEl[0].offsetHeight),
              (l = n.$slideEl.offset().left),
              (d = n.$slideEl.offset().top),
              (c = l + S / 2 - r),
              (h = d + x / 2 - o),
              (m = n.$imageEl[0].offsetWidth),
              (f = n.$imageEl[0].offsetHeight),
              (v = m * i.scale),
              (g = f * i.scale),
              (b = Math.min(S / 2 - v / 2, 0)),
              (y = Math.min(x / 2 - g / 2, 0)),
              (w = -b),
              (E = -y),
              (u = c * i.scale),
              (p = h * i.scale),
              u < b && (u = b),
              u > w && (u = w),
              p < y && (p = y),
              p > E && (p = E))
            : ((u = 0), (p = 0)),
          n.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${u}px, ${p}px,0)`),
          n.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${i.scale})`);
      },
      out() {
        const e = this,
          t = e.zoom,
          i = e.params.zoom,
          { gesture: s } = t;
        s.$slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (s.$slideEl = e.$wrapperEl.children(
                "." + e.params.slideActiveClass
              ))
            : (s.$slideEl = e.slides.eq(e.activeIndex)),
          (s.$imageEl = s.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            (s.$slideEl = void 0));
      },
      enable() {
        const e = this,
          t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const i = !(
            "touchstart" !== e.touchEvents.start ||
            !p.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          s = !p.passiveListener || { passive: !1, capture: !0 },
          n = "." + e.params.slideClass;
        p.gestures
          ? (e.$wrapperEl.on("gesturestart", n, t.onGestureStart, i),
            e.$wrapperEl.on("gesturechange", n, t.onGestureChange, i),
            e.$wrapperEl.on("gestureend", n, t.onGestureEnd, i))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.on(e.touchEvents.start, n, t.onGestureStart, i),
            e.$wrapperEl.on(e.touchEvents.move, n, t.onGestureChange, s),
            e.$wrapperEl.on(e.touchEvents.end, n, t.onGestureEnd, i),
            e.touchEvents.cancel &&
              e.$wrapperEl.on(e.touchEvents.cancel, n, t.onGestureEnd, i)),
          e.$wrapperEl.on(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove,
            s
          );
      },
      disable() {
        const e = this,
          t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        const i = !(
            "touchstart" !== e.touchEvents.start ||
            !p.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          s = !p.passiveListener || { passive: !1, capture: !0 },
          n = "." + e.params.slideClass;
        p.gestures
          ? (e.$wrapperEl.off("gesturestart", n, t.onGestureStart, i),
            e.$wrapperEl.off("gesturechange", n, t.onGestureChange, i),
            e.$wrapperEl.off("gestureend", n, t.onGestureEnd, i))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.off(e.touchEvents.start, n, t.onGestureStart, i),
            e.$wrapperEl.off(e.touchEvents.move, n, t.onGestureChange, s),
            e.$wrapperEl.off(e.touchEvents.end, n, t.onGestureEnd, i),
            e.touchEvents.cancel &&
              e.$wrapperEl.off(e.touchEvents.cancel, n, t.onGestureEnd, i)),
          e.$wrapperEl.off(
            e.touchEvents.move,
            "." + e.params.zoom.containerClass,
            t.onTouchMove,
            s
          );
      },
    };
    const Z = {
      loadInSlide(e, t = !0) {
        const i = this,
          s = i.params.lazy;
        if (void 0 === e) return;
        if (0 === i.slides.length) return;
        const n =
          i.virtual && i.params.virtual.enabled
            ? i.$wrapperEl.children(
                `.${i.params.slideClass}[data-swiper-slide-index="${e}"]`
              )
            : i.slides.eq(e);
        let a = n.find(
          `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
        );
        !n.hasClass(s.elementClass) ||
          n.hasClass(s.loadedClass) ||
          n.hasClass(s.loadingClass) ||
          (a = a.add(n[0])),
          0 !== a.length &&
            a.each((e, a) => {
              const r = d(a);
              r.addClass(s.loadingClass);
              const o = r.attr("data-background"),
                l = r.attr("data-src"),
                c = r.attr("data-srcset"),
                h = r.attr("data-sizes"),
                u = r.parent("picture");
              i.loadImage(r[0], l || o, c, h, !1, () => {
                if (null != i && i && (!i || i.params) && !i.destroyed) {
                  if (
                    (o
                      ? (r.css("background-image", `url("${o}")`),
                        r.removeAttr("data-background"))
                      : (c &&
                          (r.attr("srcset", c), r.removeAttr("data-srcset")),
                        h && (r.attr("sizes", h), r.removeAttr("data-sizes")),
                        u.length &&
                          u.children("source").each((e, t) => {
                            const i = d(t);
                            i.attr("data-srcset") &&
                              (i.attr("srcset", i.attr("data-srcset")),
                              i.removeAttr("data-srcset"));
                          }),
                        l && (r.attr("src", l), r.removeAttr("data-src"))),
                    r.addClass(s.loadedClass).removeClass(s.loadingClass),
                    n.find("." + s.preloaderClass).remove(),
                    i.params.loop && t)
                  ) {
                    const e = n.attr("data-swiper-slide-index");
                    if (n.hasClass(i.params.slideDuplicateClass)) {
                      const t = i.$wrapperEl.children(
                        `[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`
                      );
                      i.lazy.loadInSlide(t.index(), !1);
                    } else {
                      const t = i.$wrapperEl.children(
                        `.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                      );
                      i.lazy.loadInSlide(t.index(), !1);
                    }
                  }
                  i.emit("lazyImageReady", n[0], r[0]),
                    i.params.autoHeight && i.updateAutoHeight();
                }
              }),
                i.emit("lazyImageLoad", n[0], r[0]);
            });
      },
      load() {
        const e = this,
          { $wrapperEl: t, params: i, slides: s, activeIndex: n } = e,
          a = e.virtual && i.virtual.enabled,
          r = i.lazy;
        let o = i.slidesPerView;
        function l(e) {
          if (a) {
            if (
              t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function c(e) {
          return a ? d(e).attr("data-swiper-slide-index") : d(e).index();
        }
        if (
          ("auto" === o && (o = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each((t, i) => {
            const s = a ? d(i).attr("data-swiper-slide-index") : d(i).index();
            e.lazy.loadInSlide(s);
          });
        else if (o > 1)
          for (let t = n; t < n + o; t += 1) l(t) && e.lazy.loadInSlide(t);
        else e.lazy.loadInSlide(n);
        if (r.loadPrevNext)
          if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
            const t = r.loadPrevNextAmount,
              i = o,
              a = Math.min(n + i + Math.max(t, i), s.length),
              d = Math.max(n - Math.max(i, t), 0);
            for (let t = n + o; t < a; t += 1) l(t) && e.lazy.loadInSlide(t);
            for (let t = d; t < n; t += 1) l(t) && e.lazy.loadInSlide(t);
          } else {
            const s = t.children("." + i.slideNextClass);
            s.length > 0 && e.lazy.loadInSlide(c(s));
            const n = t.children("." + i.slidePrevClass);
            n.length > 0 && e.lazy.loadInSlide(c(n));
          }
      },
    };
    const Q = {
      LinearSpline: function (e, t) {
        const i = (function () {
          let e, t, i;
          return (s, n) => {
            for (t = -1, e = s.length; e - t > 1; )
              (i = (e + t) >> 1), s[i] <= n ? (t = i) : (e = i);
            return e;
          };
        })();
        let s, n;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = i(this.x, e)),
                (s = n - 1),
                ((e - this.x[s]) * (this.y[n] - this.y[s])) /
                  (this.x[n] - this.x[s]) +
                  this.y[s])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction(e) {
        const t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new Q.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new Q.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate(e, t) {
        const i = this,
          s = i.controller.control;
        let n, a;
        function r(e) {
          const t = i.rtlTranslate ? -i.translate : i.translate;
          "slide" === i.params.controller.by &&
            (i.controller.getInterpolateFunction(e),
            (a = -i.controller.spline.interpolate(-t))),
            (a && "container" !== i.params.controller.by) ||
              ((n =
                (e.maxTranslate() - e.minTranslate()) /
                (i.maxTranslate() - i.minTranslate())),
              (a = (t - i.minTranslate()) * n + e.minTranslate())),
            i.params.controller.inverse && (a = e.maxTranslate() - a),
            e.updateProgress(a),
            e.setTranslate(a, i),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(s))
          for (let e = 0; e < s.length; e += 1)
            s[e] !== t && s[e] instanceof A && r(s[e]);
        else s instanceof A && t !== s && r(s);
      },
      setTransition(e, t) {
        const i = this,
          s = i.controller.control;
        let n;
        function a(t) {
          t.setTransition(e, i),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                u.nextTick(() => {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(() => {
                s &&
                  (t.params.loop &&
                    "slide" === i.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(s))
          for (n = 0; n < s.length; n += 1)
            s[n] !== t && s[n] instanceof A && a(s[n]);
        else s instanceof A && t !== s && a(s);
      },
    };
    const ee = {
      makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
      makeElNotFocusable: (e) => (e.attr("tabIndex", "-1"), e),
      addElRole: (e, t) => (e.attr("role", t), e),
      addElLabel: (e, t) => (e.attr("aria-label", t), e),
      disableEl: (e) => (e.attr("aria-disabled", !0), e),
      enableEl: (e) => (e.attr("aria-disabled", !1), e),
      onEnterKey(e) {
        const t = this,
          i = t.params.a11y;
        if (13 !== e.keyCode) return;
        const s = d(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          s.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd
            ? t.a11y.notify(i.lastSlideMessage)
            : t.a11y.notify(i.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            s.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning
              ? t.a11y.notify(i.firstSlideMessage)
              : t.a11y.notify(i.prevSlideMessage)),
          t.pagination &&
            s.is("." + t.params.pagination.bulletClass) &&
            s[0].click();
      },
      notify(e) {
        const t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation() {
        const e = this;
        if (e.params.loop || !e.navigation) return;
        const { $nextEl: t, $prevEl: i } = e.navigation;
        i &&
          i.length > 0 &&
          (e.isBeginning
            ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i))
            : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))),
          t &&
            t.length > 0 &&
            (e.isEnd
              ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t))
              : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)));
      },
      updatePagination() {
        const e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each((i, s) => {
            const n = d(s);
            e.a11y.makeElFocusable(n),
              e.a11y.addElRole(n, "button"),
              e.a11y.addElLabel(
                n,
                t.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  n.index() + 1
                )
              );
          });
      },
      init() {
        const e = this;
        e.$el.append(e.a11y.liveRegion);
        const t = e.params.a11y;
        let i, s;
        e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
          i &&
            (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, t.nextSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
          s &&
            (e.a11y.makeElFocusable(s),
            e.a11y.addElRole(s, "button"),
            e.a11y.addElLabel(s, t.prevSlideMessage),
            s.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy() {
        const e = this;
        let t, i;
        e.a11y.liveRegion &&
          e.a11y.liveRegion.length > 0 &&
          e.a11y.liveRegion.remove(),
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
          t && t.off("keydown", e.a11y.onEnterKey),
          i && i.off("keydown", e.a11y.onEnterKey),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.off(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
    };
    const te = {
      init() {
        const e = this;
        if (!e.params.history) return;
        if (!o.history || !o.history.pushState)
          return (
            (e.params.history.enabled = !1),
            void (e.params.hashNavigation.enabled = !0)
          );
        const t = e.history;
        (t.initialized = !0),
          (t.paths = te.getPathValues()),
          (t.paths.key || t.paths.value) &&
            (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState ||
              o.addEventListener("popstate", e.history.setHistoryPopState));
      },
      destroy() {
        const e = this;
        e.params.history.replaceState ||
          o.removeEventListener("popstate", e.history.setHistoryPopState);
      },
      setHistoryPopState() {
        (this.history.paths = te.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues() {
        const e = o.location.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory(e, t) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        const i = this.slides.eq(t);
        let s = te.slugify(i.attr("data-history"));
        o.location.pathname.includes(e) || (s = `${e}/${s}`);
        const n = o.history.state;
        (n && n.value === s) ||
          (this.params.history.replaceState
            ? o.history.replaceState({ value: s }, null, s)
            : o.history.pushState({ value: s }, null, s));
      },
      slugify: (e) =>
        e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      scrollToSlide(e, t, i) {
        const s = this;
        if (t)
          for (let n = 0, a = s.slides.length; n < a; n += 1) {
            const a = s.slides.eq(n);
            if (
              te.slugify(a.attr("data-history")) === t &&
              !a.hasClass(s.params.slideDuplicateClass)
            ) {
              const t = a.index();
              s.slideTo(t, e, i);
            }
          }
        else s.slideTo(0, e, i);
      },
    };
    const ie = {
      onHashCange() {
        const e = this;
        e.emit("hashChange");
        const t = a.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          const i = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${t}"]`)
            .index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash() {
        const e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            o.history &&
            o.history.replaceState
          )
            o.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            ),
              e.emit("hashSet");
          else {
            const t = e.slides.eq(e.activeIndex),
              i = t.attr("data-hash") || t.attr("data-history");
            (a.location.hash = i || ""), e.emit("hashSet");
          }
      },
      init() {
        const e = this;
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        e.hashNavigation.initialized = !0;
        const t = a.location.hash.replace("#", "");
        if (t) {
          const i = 0;
          for (let s = 0, n = e.slides.length; s < n; s += 1) {
            const n = e.slides.eq(s);
            if (
              (n.attr("data-hash") || n.attr("data-history")) === t &&
              !n.hasClass(e.params.slideDuplicateClass)
            ) {
              const t = n.index();
              e.slideTo(t, i, e.params.runCallbacksOnInit, !0);
            }
          }
        }
        e.params.hashNavigation.watchState &&
          d(o).on("hashchange", e.hashNavigation.onHashCange);
      },
      destroy() {
        const e = this;
        e.params.hashNavigation.watchState &&
          d(o).off("hashchange", e.hashNavigation.onHashCange);
      },
    };
    const se = {
      run() {
        const e = this,
          t = e.slides.eq(e.activeIndex);
        let i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = u.nextTick(() => {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start() {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop() {
        const e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause(e) {
        const t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    };
    const ne = {
      setTranslate() {
        const e = this,
          { slides: t } = e;
        for (let i = 0; i < t.length; i += 1) {
          const t = e.slides.eq(i);
          let s = -t[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          let n = 0;
          e.isHorizontal() || ((n = s), (s = 0));
          const a = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(t[0].progress), 0)
            : 1 + Math.min(Math.max(t[0].progress, -1), 0);
          t.css({ opacity: a }).transform(`translate3d(${s}px, ${n}px, 0px)`);
        }
      },
      setTransition(e) {
        const t = this,
          { slides: i, $wrapperEl: s } = t;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          let e = !1;
          i.transitionEnd(() => {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const i = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < i.length; e += 1) s.trigger(i[e]);
          });
        }
      },
    };
    const ae = {
      setTranslate() {
        const {
            $el: e,
            $wrapperEl: t,
            slides: i,
            width: s,
            height: n,
            rtlTranslate: a,
            size: r,
          } = this,
          o = this.params.cubeEffect,
          l = this.isHorizontal(),
          c = this.virtual && this.params.virtual.enabled;
        let h,
          u = 0;
        o.shadow &&
          (l
            ? ((h = t.find(".swiper-cube-shadow")),
              0 === h.length &&
                ((h = d('<div class="swiper-cube-shadow"></div>')),
                t.append(h)),
              h.css({ height: s + "px" }))
            : ((h = e.find(".swiper-cube-shadow")),
              0 === h.length &&
                ((h = d('<div class="swiper-cube-shadow"></div>')),
                e.append(h))));
        for (let e = 0; e < i.length; e += 1) {
          const t = i.eq(e);
          let s = e;
          c && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
          let n = 90 * s,
            h = Math.floor(n / 360);
          a && ((n = -n), (h = Math.floor(-n / 360)));
          const p = Math.max(Math.min(t[0].progress, 1), -1);
          let m = 0,
            f = 0,
            v = 0;
          s % 4 == 0
            ? ((m = 4 * -h * r), (v = 0))
            : (s - 1) % 4 == 0
            ? ((m = 0), (v = 4 * -h * r))
            : (s - 2) % 4 == 0
            ? ((m = r + 4 * h * r), (v = r))
            : (s - 3) % 4 == 0 && ((m = -r), (v = 3 * r + 4 * r * h)),
            a && (m = -m),
            l || ((f = m), (m = 0));
          const g = `rotateX(${l ? 0 : -n}deg) rotateY(${
            l ? n : 0
          }deg) translate3d(${m}px, ${f}px, ${v}px)`;
          if (
            (p <= 1 &&
              p > -1 &&
              ((u = 90 * s + 90 * p), a && (u = 90 * -s - 90 * p)),
            t.transform(g),
            o.slideShadows)
          ) {
            let e = l
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              i = l
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = d(
                `<div class="swiper-slide-shadow-${l ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === i.length &&
                ((i = d(
                  `<div class="swiper-slide-shadow-${
                    l ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(i)),
              e.length && (e[0].style.opacity = Math.max(-p, 0)),
              i.length && (i[0].style.opacity = Math.max(p, 0));
          }
        }
        if (
          (t.css({
            "-webkit-transform-origin": `50% 50% -${r / 2}px`,
            "-moz-transform-origin": `50% 50% -${r / 2}px`,
            "-ms-transform-origin": `50% 50% -${r / 2}px`,
            "transform-origin": `50% 50% -${r / 2}px`,
          }),
          o.shadow)
        )
          if (l)
            h.transform(
              `translate3d(0px, ${s / 2 + o.shadowOffset}px, ${
                -s / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`
            );
          else {
            const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              t =
                1.5 -
                (Math.sin((2 * e * Math.PI) / 360) / 2 +
                  Math.cos((2 * e * Math.PI) / 360) / 2),
              i = o.shadowScale,
              s = o.shadowScale / t,
              a = o.shadowOffset;
            h.transform(
              `scale3d(${i}, 1, ${s}) translate3d(0px, ${n / 2 + a}px, ${
                -n / 2 / s
              }px) rotateX(-90deg)`
            );
          }
        const p = N.isSafari || N.isWebView ? -r / 2 : 0;
        t.transform(
          `translate3d(0px,0,${p}px) rotateX(${
            this.isHorizontal() ? 0 : u
          }deg) rotateY(${this.isHorizontal() ? -u : 0}deg)`
        );
      },
      setTransition(e) {
        const { $el: t, slides: i } = this;
        i
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    };
    const re = {
      setTranslate() {
        const e = this,
          { slides: t, rtlTranslate: i } = e;
        for (let s = 0; s < t.length; s += 1) {
          const n = t.eq(s);
          let a = n[0].progress;
          e.params.flipEffect.limitRotation &&
            (a = Math.max(Math.min(n[0].progress, 1), -1));
          let r = -180 * a,
            o = 0,
            l = -n[0].swiperSlideOffset,
            c = 0;
          if (
            (e.isHorizontal()
              ? i && (r = -r)
              : ((c = l), (l = 0), (o = -r), (r = 0)),
            (n[0].style.zIndex = -Math.abs(Math.round(a)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            let t = e.isHorizontal()
                ? n.find(".swiper-slide-shadow-left")
                : n.find(".swiper-slide-shadow-top"),
              i = e.isHorizontal()
                ? n.find(".swiper-slide-shadow-right")
                : n.find(".swiper-slide-shadow-bottom");
            0 === t.length &&
              ((t = d(
                `<div class="swiper-slide-shadow-${
                  e.isHorizontal() ? "left" : "top"
                }"></div>`
              )),
              n.append(t)),
              0 === i.length &&
                ((i = d(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? "right" : "bottom"
                  }"></div>`
                )),
                n.append(i)),
              t.length && (t[0].style.opacity = Math.max(-a, 0)),
              i.length && (i[0].style.opacity = Math.max(a, 0));
          }
          n.transform(
            `translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`
          );
        }
      },
      setTransition(e) {
        const t = this,
          { slides: i, activeIndex: s, $wrapperEl: n } = t;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          let e = !1;
          i.eq(s).transitionEnd(function () {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const i = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < i.length; e += 1) n.trigger(i[e]);
          });
        }
      },
    };
    const oe = {
      setTranslate() {
        const {
            width: e,
            height: t,
            slides: i,
            $wrapperEl: s,
            slidesSizesGrid: n,
          } = this,
          a = this.params.coverflowEffect,
          r = this.isHorizontal(),
          o = this.translate,
          l = r ? e / 2 - o : t / 2 - o,
          c = r ? a.rotate : -a.rotate,
          h = a.depth;
        for (let e = 0, t = i.length; e < t; e += 1) {
          const t = i.eq(e),
            s = n[e],
            o = ((l - t[0].swiperSlideOffset - s / 2) / s) * a.modifier;
          let u = r ? c * o : 0,
            p = r ? 0 : c * o,
            m = -h * Math.abs(o),
            f = a.stretch;
          "string" == typeof f &&
            -1 !== f.indexOf("%") &&
            (f = (parseFloat(a.stretch) / 100) * s);
          let v = r ? 0 : f * o,
            g = r ? f * o : 0,
            b = 1 - (1 - a.scale) * Math.abs(o);
          Math.abs(g) < 0.001 && (g = 0),
            Math.abs(v) < 0.001 && (v = 0),
            Math.abs(m) < 0.001 && (m = 0),
            Math.abs(u) < 0.001 && (u = 0),
            Math.abs(p) < 0.001 && (p = 0),
            Math.abs(b) < 0.001 && (b = 0);
          const y = `translate3d(${g}px,${v}px,${m}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${b})`;
          if (
            (t.transform(y),
            (t[0].style.zIndex = 1 - Math.abs(Math.round(o))),
            a.slideShadows)
          ) {
            let e = r
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              i = r
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = d(
                `<div class="swiper-slide-shadow-${r ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === i.length &&
                ((i = d(
                  `<div class="swiper-slide-shadow-${
                    r ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(i)),
              e.length && (e[0].style.opacity = o > 0 ? o : 0),
              i.length && (i[0].style.opacity = -o > 0 ? -o : 0);
          }
        }
        if (p.pointerEvents || p.prefixedPointerEvents) {
          s[0].style.perspectiveOrigin = l + "px 50%";
        }
      },
      setTransition(e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    };
    const le = {
      init() {
        const e = this,
          { thumbs: t } = e.params,
          i = e.constructor;
        t.swiper instanceof i
          ? ((e.thumbs.swiper = t.swiper),
            u.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            u.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : u.isObject(t.swiper) &&
            ((e.thumbs.swiper = new i(
              u.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick() {
        const e = this,
          t = e.thumbs.swiper;
        if (!t) return;
        const i = t.clickedIndex,
          s = t.clickedSlide;
        if (s && d(s).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let n;
        if (
          ((n = t.params.loop
            ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : i),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const i = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index(),
            s = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index();
          n = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i;
        }
        e.slideTo(n);
      },
      update(e) {
        const t = this,
          i = t.thumbs.swiper;
        if (!i) return;
        const s =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView,
          n = t.params.thumbs.autoScrollOffset,
          a = n && !i.params.loop;
        if (t.realIndex !== i.realIndex || a) {
          let r,
            o,
            l = i.activeIndex;
          if (i.params.loop) {
            i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              (l = i.activeIndex));
            const e = i.slides
                .eq(l)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              s = i.slides
                .eq(l)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (r =
              void 0 === e
                ? s
                : void 0 === s
                ? e
                : s - l == l - e
                ? l
                : s - l < l - e
                ? s
                : e),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          a && (r += "next" === o ? n : -1 * n),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(r) < 0 &&
              (i.params.centeredSlides
                ? (r =
                    r > l
                      ? r - Math.floor(s / 2) + 1
                      : r + Math.floor(s / 2) - 1)
                : r > l && (r = r - s + 1),
              i.slideTo(r, e ? 0 : void 0));
        }
        let r = 1;
        const o = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (r = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (r = 1),
          (r = Math.floor(r)),
          i.slides.removeClass(o),
          i.params.loop || (i.params.virtual && i.params.virtual.enabled))
        )
          for (let e = 0; e < r; e += 1)
            i.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(o);
        else
          for (let e = 0; e < r; e += 1)
            i.slides.eq(t.realIndex + e).addClass(o);
      },
    };
    const de = [
      D,
      z,
      H,
      F,
      G,
      V,
      R,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create() {
          u.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: X.enable.bind(this),
              disable: X.disable.bind(this),
              handle: X.handle.bind(this),
              handleMouseEnter: X.handleMouseEnter.bind(this),
              handleMouseLeave: X.handleMouseLeave.bind(this),
              animateSlider: X.animateSlider.bind(this),
              releaseScroll: X.releaseScroll.bind(this),
              lastScrollTime: u.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          });
        },
        on: {
          init() {
            const e = this;
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy() {
            const e = this;
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create() {
          u.extend(this, {
            navigation: {
              init: Y.init.bind(this),
              update: Y.update.bind(this),
              destroy: Y.destroy.bind(this),
              onNextClick: Y.onNextClick.bind(this),
              onPrevClick: Y.onPrevClick.bind(this),
            },
          });
        },
        on: {
          init() {
            this.navigation.init(), this.navigation.update();
          },
          toEdge() {
            this.navigation.update();
          },
          fromEdge() {
            this.navigation.update();
          },
          destroy() {
            this.navigation.destroy();
          },
          click(e) {
            const t = this,
              { $nextEl: i, $prevEl: s } = t.navigation;
            if (
              t.params.navigation.hideOnClick &&
              !d(e.target).is(s) &&
              !d(e.target).is(i)
            ) {
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                !0 === e
                  ? t.emit("navigationShow", t)
                  : t.emit("navigationHide", t),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                s && s.toggleClass(t.params.navigation.hiddenClass);
            }
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create() {
          u.extend(this, {
            pagination: {
              init: W.init.bind(this),
              render: W.render.bind(this),
              update: W.update.bind(this),
              destroy: W.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init() {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange() {
            const e = this;
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange() {
            const e = this;
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy() {
            this.pagination.destroy();
          },
          click(e) {
            const t = this;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !d(e.target).hasClass(t.params.pagination.bulletClass)
            ) {
              !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit("paginationShow", t)
                : t.emit("paginationHide", t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            }
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create() {
          u.extend(this, {
            scrollbar: {
              init: K.init.bind(this),
              destroy: K.destroy.bind(this),
              updateSize: K.updateSize.bind(this),
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this),
              enableDraggable: K.enableDraggable.bind(this),
              disableDraggable: K.disableDraggable.bind(this),
              setDragPosition: K.setDragPosition.bind(this),
              getPointerPosition: K.getPointerPosition.bind(this),
              onDragStart: K.onDragStart.bind(this),
              onDragMove: K.onDragMove.bind(this),
              onDragEnd: K.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init() {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update() {
            this.scrollbar.updateSize();
          },
          resize() {
            this.scrollbar.updateSize();
          },
          observerUpdate() {
            this.scrollbar.updateSize();
          },
          setTranslate() {
            this.scrollbar.setTranslate();
          },
          setTransition(e) {
            this.scrollbar.setTransition(e);
          },
          destroy() {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create() {
          u.extend(this, {
            parallax: {
              setTransform: U.setTransform.bind(this),
              setTranslate: U.setTranslate.bind(this),
              setTransition: U.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition(e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create() {
          const e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach((i) => {
              t[i] = J[i].bind(e);
            }),
            u.extend(e, { zoom: t });
          let i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: () => i,
            set(t) {
              if (i !== t) {
                const i = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  s = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, i, s);
              }
              i = t;
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy() {
            this.zoom.disable();
          },
          touchStart(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap(e) {
            const t = this;
            t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              t.zoom.toggle(e);
          },
          transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange() {
            const e = this;
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create() {
          u.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: Z.load.bind(this),
              loadInSlide: Z.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            const e = this;
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load();
          },
          scroll() {
            const e = this;
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart() {
            const e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange() {
            const e = this;
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create() {
          u.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: Q.getInterpolateFunction.bind(this),
              setTranslate: Q.setTranslate.bind(this),
              setTransition: Q.setTransition.bind(this),
            },
          });
        },
        on: {
          update() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate(e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition(e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create() {
          const e = this;
          u.extend(e, {
            a11y: {
              liveRegion: d(
                `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
              ),
            },
          }),
            Object.keys(ee).forEach((t) => {
              e.a11y[t] = ee[t].bind(e);
            });
        },
        on: {
          init() {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate() {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy() {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create() {
          u.extend(this, {
            history: {
              init: te.init.bind(this),
              setHistory: te.setHistory.bind(this),
              setHistoryPopState: te.setHistoryPopState.bind(this),
              scrollToSlide: te.scrollToSlide.bind(this),
              destroy: te.destroy.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.history.enabled && e.history.init();
          },
          destroy() {
            const e = this;
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd() {
            const e = this;
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange() {
            const e = this;
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create() {
          u.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: ie.init.bind(this),
              destroy: ie.destroy.bind(this),
              setHash: ie.setHash.bind(this),
              onHashCange: ie.onHashCange.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd() {
            const e = this;
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange() {
            const e = this;
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create() {
          const e = this;
          u.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: se.run.bind(e),
              start: se.start.bind(e),
              stop: se.stop.bind(e),
              pause: se.pause.bind(e),
              onVisibilityChange() {
                "hidden" === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd(t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart(e, t) {
            const i = this;
            i.autoplay.running &&
              (t || !i.params.autoplay.disableOnInteraction
                ? i.autoplay.pause(e)
                : i.autoplay.stop());
          },
          sliderFirstMove() {
            const e = this;
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd() {
            const e = this;
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create() {
          u.extend(this, {
            fadeEffect: {
              setTranslate: ne.setTranslate.bind(this),
              setTransition: ne.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("fade" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "fade");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            u.extend(this.params, e), u.extend(this.originalParams, e);
          },
          setTranslate() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition(e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create() {
          u.extend(this, {
            cubeEffect: {
              setTranslate: ae.setTranslate.bind(this),
              setTransition: ae.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("cube" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "cube"),
              this.classNames.push(this.params.containerModifierClass + "3d");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            };
            u.extend(this.params, e), u.extend(this.originalParams, e);
          },
          setTranslate() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition(e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create() {
          u.extend(this, {
            flipEffect: {
              setTranslate: re.setTranslate.bind(this),
              setTransition: re.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            if ("flip" !== this.params.effect) return;
            this.classNames.push(this.params.containerModifierClass + "flip"),
              this.classNames.push(this.params.containerModifierClass + "3d");
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            u.extend(this.params, e), u.extend(this.originalParams, e);
          },
          setTranslate() {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition(e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create() {
          u.extend(this, {
            coverflowEffect: {
              setTranslate: oe.setTranslate.bind(this),
              setTransition: oe.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                this.params.containerModifierClass + "coverflow"
              ),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate() {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition(e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create() {
          u.extend(this, {
            thumbs: {
              swiper: null,
              init: le.init.bind(this),
              update: le.update.bind(this),
              onThumbClick: le.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit() {
            const { thumbs: e } = this.params;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange() {
            this.thumbs.swiper && this.thumbs.update();
          },
          update() {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize() {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate() {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition(e) {
            const t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy() {
            const e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
    void 0 === A.use &&
      ((A.use = A.Class.use), (A.installModule = A.Class.installModule)),
      A.use(de);
    t.default = A;
  },
  745: function (e, t, i) {
    "use strict";
    i.r(t);
    i(188), i(189);
    var s,
      n = i(2),
      a = i.n(n);
    function r(e) {
      e.preventDefault();
      var t = e.target.closest("form"),
        i = t.querySelector(".block-accept-privacy");
      return (
        i.classList.remove("is--active"),
        t.querySelector('input[type="checkbox"]').checked
          ? (i.classList.remove("is--active"),
            t.checkValidity()
              ? t.submit()
              : t.querySelector("textarea").reportValidity(),
            !0)
          : (i.classList.add("is--active"), !1)
      );
    }
    function o(e) {
      if (!e) return !1;
      var t = e.querySelector('input[type="checkbox"]');
      if (t) {
        var i = function (e) {
            e.target.classList.contains("tooltip-activator") &&
              (e.stopPropagation(), e.preventDefault());
          },
          s = e.querySelector(".review-form__privacy-wrapper label");
        s.removeEventListener("click", i),
          s.addEventListener("click", i),
          t.removeEventListener("change", i),
          t.addEventListener("change", function (t) {
            t.preventDefault();
            var i = e.querySelector(".block-accept-privacy");
            t.target.checked
              ? i.classList.remove("is--active")
              : i.classList.add("is--active");
          }),
          e
            .querySelector('button[type="submit"]')
            .removeEventListener("click", r),
          e.querySelector('button[type="submit"]').addEventListener("click", r),
          e.querySelectorAll(".tooltip-activator").forEach(function (e) {
            return e.addEventListener("click", window.onActivatorClick);
          });
      }
    }
    !(function () {
      if (!document.querySelector("#review-form")) return !1;
      var e = {
          verygood: '<i class="star star-filled">&starf;</i>'.repeat(5),
          good:
            '<i class="star star-filled">&starf;</i>'.repeat(4) +
            '<i class="star">&starf;</i>',
          neutral:
            '<i class="star star-filled">&starf;</i>'.repeat(3) +
            '<i class="star">&starf;</i>'.repeat(2),
          bad:
            '<i class="star star-filled">&starf;</i>'.repeat(2) +
            '<i class="star">&starf;</i>'.repeat(3),
          verybad: '<i class="star">&starf;</i>'.repeat(5),
        },
        t = function (t) {
          return e[t];
        };
      new a.a(document.querySelector("#class"), {
        searchEnabled: !1,
        shouldSort: !1,
        itemSelectText: "",
        callbackOnCreateTemplates: function (e) {
          var i = this;
          return {
            item: function (i, s) {
              return e(
                '\n          <div class="'
                  .concat(i.item, " ")
                  .concat(
                    s.highlighted ? i.highlightedState : i.itemSelectable,
                    " "
                  )
                  .concat(
                    s.placeholder ? i.placeholder : "",
                    '" data-item data-id="'
                  )
                  .concat(s.id, '" data-value="')
                  .concat(s.value, '" ')
                  .concat(s.active ? 'aria-selected="true"' : "", " ")
                  .concat(
                    s.disabled ? 'aria-disabled="true"' : "",
                    ">\n            "
                  )
                  .concat(t(s.value), " ")
                  .concat(s.label, "\n          </div>\n          ")
              );
            },
            choice: function (s, n) {
              return e(
                '\n          <div class="'
                  .concat(s.item, " ")
                  .concat(s.itemChoice, " ")
                  .concat(
                    n.disabled ? s.itemDisabled : s.itemSelectable,
                    '" data-select-text="'
                  )
                  .concat(i.config.itemSelectText, '" data-choice ')
                  .concat(
                    n.disabled
                      ? 'data-choice-disabled aria-disabled="true"'
                      : "data-choice-selectable",
                    ' data-id="'
                  )
                  .concat(n.id, '" data-value="')
                  .concat(n.value, '" ')
                  .concat(
                    n.groupId > 0 ? 'role="treeitem"' : 'role="option"',
                    ">\n            "
                  )
                  .concat(t(n.value), " ")
                  .concat(n.label, "\n          </div>\n        ")
              );
            },
          };
        },
      });
    })(),
      (s = document.querySelector(".button-add-review")) &&
        s.addEventListener("click", function (e) {
          e.preventDefault(),
            document.querySelector("#review-form").scrollIntoView(!1);
        }),
      document.querySelectorAll(".review-reply > a").forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          var t = e.target,
            i = t.dataset.id,
            s = t
              .closest(".review-card__wrapper")
              .querySelector(".reply-form-holder"),
            n = document.createElement("button");
          n.classList.add("button-primary", "button-reply-cancel"),
            (n.innerText = "Cancel");
          var a = document.querySelector("#review-form").cloneNode(!0);
          a.querySelector(".choices-wrapper").remove(),
            (a.querySelector("#parent").value = i),
            a.querySelector(".review-form__submit-wrapper").prepend(n),
            n.addEventListener("click", function (e) {
              e.preventDefault(),
                a.reset(),
                a.remove(),
                t.classList.toggle("d-none"),
                s.classList.toggle("review-form__wrapper");
            }),
            o(a),
            t.classList.toggle("d-none"),
            s.classList.toggle("review-form__wrapper"),
            s.appendChild(a);
        });
      }),
      o(document.querySelector(".review-form__wrapper form")),
      document
        .querySelectorAll(".review-form__wrapper button[type=submit]")
        .forEach(function (e) {
          return (e.disabled = !1);
        });
    i(190);
  },
});
