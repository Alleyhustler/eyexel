"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[381], {
    9205: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return l
            }
        });
        var r = i(2265);
        let n = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , s = function() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return e.filter( (t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e).join(" ").trim()
        };
        var o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
        r.forwardRef)( (t, e) => {
            let {color: i="currentColor", size: n=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: u="", children: h, iconNode: d, ...c} = t;
            return (0,
            r.createElement)("svg", {
                ref: e,
                ...o,
                width: n,
                height: n,
                stroke: i,
                strokeWidth: l ? 24 * Number(a) / Number(n) : a,
                className: s("lucide", u),
                ...c
            }, [...d.map(t => {
                let[e,i] = t;
                return (0,
                r.createElement)(e, i)
            }
            ), ...Array.isArray(h) ? h : [h]])
        }
        )
          , l = (t, e) => {
            let i = (0,
            r.forwardRef)( (i, o) => {
                let {className: l, ...u} = i;
                return (0,
                r.createElement)(a, {
                    ref: o,
                    iconNode: e,
                    className: s("lucide-".concat(n(t)), l),
                    ...u
                })
            }
            );
            return i.displayName = "".concat(t),
            i
        }
    },
    3315: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        i(9205).Z)("Command", [["path", {
            d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
            key: "11bfej"
        }]])
    },
    6840: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        i(9205).Z)("Menu", [["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }], ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]])
    },
    2029: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        i(9205).Z)("Table", [["path", {
            d: "M12 3v18",
            key: "108xh3"
        }], ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }], ["path", {
            d: "M3 9h18",
            key: "1pudct"
        }], ["path", {
            d: "M3 15h18",
            key: "5xshup"
        }]])
    },
    221: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        i(9205).Z)("Terminal", [["polyline", {
            points: "4 17 10 11 4 5",
            key: "akl6gq"
        }], ["line", {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19",
            key: "q2wloq"
        }]])
    },
    2489: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        i(9205).Z)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    },
    3145: function(t, e, i) {
        i.d(e, {
            default: function() {
                return n.a
            }
        });
        var r = i(8461)
          , n = i.n(r)
    },
    5878: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = i(7043)
          , n = i(3099)
          , s = i(7437)
          , o = n._(i(2265))
          , a = r._(i(4887))
          , l = r._(i(8293))
          , u = i(5346)
          , h = i(128)
          , d = i(2589);
        i(1765);
        let c = i(5523)
          , p = r._(i(5084))
          , m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function f(t, e, i, r, n, s, o) {
            let a = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a,
            ("decode"in t ? t.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && n(!0),
                    null == i ? void 0 : i.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let r = !1
                          , n = !1;
                        i.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => n,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                n = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(t)
                }
            }
            ))
        }
        function g(t) {
            return o.use ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        o.forwardRef)( (t, e) => {
            let {src: i, srcSet: r, sizes: n, height: a, width: l, decoding: u, className: h, style: d, fetchPriority: c, placeholder: p, loading: m, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: x, setBlurComplete: w, setShowAltText: P, sizesInput: S, onLoad: T, onError: A, ...k} = t;
            return (0,
            s.jsx)("img", {
                ...k,
                ...g(c),
                loading: m,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: h,
                style: d,
                sizes: n,
                srcSet: r,
                src: i,
                ref: (0,
                o.useCallback)(t => {
                    e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)),
                    t && (A && (t.src = t.src),
                    t.complete && f(t, p, b, x, w, v, S))
                }
                , [i, p, b, x, w, A, v, S, e]),
                onLoad: t => {
                    f(t.currentTarget, p, b, x, w, v, S)
                }
                ,
                onError: t => {
                    P(!0),
                    "empty" !== p && w(!0),
                    A && A(t)
                }
            })
        }
        );
        function y(t) {
            let {isAppRouter: e, imgAttributes: i} = t
              , r = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...g(i.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(i.src, r),
            null) : (0,
            s.jsx)(l.default, {
                children: (0,
                s.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...r
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let b = (0,
        o.forwardRef)( (t, e) => {
            let i = (0,
            o.useContext)(c.RouterContext)
              , r = (0,
            o.useContext)(d.ImageConfigContext)
              , n = (0,
            o.useMemo)( () => {
                let t = m || r || h.imageConfigDefault
                  , e = [...t.deviceSizes, ...t.imageSizes].sort( (t, e) => t - e)
                  , i = t.deviceSizes.sort( (t, e) => t - e);
                return {
                    ...t,
                    allSizes: e,
                    deviceSizes: i
                }
            }
            , [r])
              , {onLoad: a, onLoadingComplete: l} = t
              , f = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                f.current = a
            }
            , [a]);
            let g = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                g.current = l
            }
            , [l]);
            let[b,x] = (0,
            o.useState)(!1)
              , [w,P] = (0,
            o.useState)(!1)
              , {props: S, meta: T} = (0,
            u.getImgProps)(t, {
                defaultLoader: p.default,
                imgConf: n,
                blurComplete: b,
                showAltText: w
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(v, {
                    ...S,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: g,
                    setBlurComplete: x,
                    setShowAltText: P,
                    sizesInput: t.sizes,
                    ref: e
                }), T.priority ? (0,
                s.jsx)(y, {
                    isAppRouter: !i,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    1436: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = i(7043)._(i(2265)).default.createContext({})
    },
    3964: function(t, e) {
        function i(t) {
            let {ampFirst: e=!1, hybrid: i=!1, hasQuery: r=!1} = void 0 === t ? {} : t;
            return e || i && r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    5346: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        i(1765);
        let r = i(6496)
          , n = i(128);
        function s(t) {
            return void 0 !== t.default
        }
        function o(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var i;
            let a, l, u, {src: h, sizes: d, unoptimized: c=!1, priority: p=!1, loading: m, className: f, quality: g, width: v, height: y, fill: b=!1, style: x, overrideSrc: w, onLoad: P, onLoadingComplete: S, placeholder: T="empty", blurDataURL: A, fetchPriority: k, decoding: E="async", layout: C, objectFit: M, objectPosition: j, lazyBoundary: V, lazyRoot: D, ...R} = t, {imgConf: O, showAltText: L, blurComplete: F, defaultLoader: B} = e, I = O || n.imageConfigDefault;
            if ("allSizes"in I)
                a = I;
            else {
                let t = [...I.deviceSizes, ...I.imageSizes].sort( (t, e) => t - e)
                  , e = I.deviceSizes.sort( (t, e) => t - e);
                a = {
                    ...I,
                    allSizes: t,
                    deviceSizes: e
                }
            }
            if (void 0 === B)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let z = R.loader || B;
            delete R.loader,
            delete R.srcSet;
            let U = "__next_img_default"in z;
            if (U) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = z;
                z = e => {
                    let {config: i, ...r} = e;
                    return t(r)
                }
            }
            if (C) {
                "fill" === C && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                t && (x = {
                    ...x,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                e && !d && (d = e)
            }
            let _ = ""
              , N = o(v)
              , $ = o(y);
            if ("object" == typeof (i = h) && (s(i) || void 0 !== i.src)) {
                let t = s(h) ? h.default : h;
                if (!t.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (l = t.blurWidth,
                u = t.blurHeight,
                A = A || t.blurDataURL,
                _ = t.src,
                !b) {
                    if (N || $) {
                        if (N && !$) {
                            let e = N / t.width;
                            $ = Math.round(t.height * e)
                        } else if (!N && $) {
                            let e = $ / t.height;
                            N = Math.round(t.width * e)
                        }
                    } else
                        N = t.width,
                        $ = t.height
                }
            }
            let W = !p && ("lazy" === m || void 0 === m);
            (!(h = "string" == typeof h ? h : _) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0,
            W = !1),
            a.unoptimized && (c = !0),
            U && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
            p && (k = "high");
            let G = o(g)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: M,
                objectPosition: j
            } : {}, L ? {} : {
                color: "transparent"
            }, x)
              , Y = F || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: N,
                heightInt: $,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: A || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + T + '")'
              , q = Y ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {}
              , X = function(t) {
                let {config: e, src: i, unoptimized: r, width: n, quality: s, sizes: o, loader: a} = t;
                if (r)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(t, e, i) {
                    let {deviceSizes: r, allSizes: n} = t;
                    if (i) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let r; r = t.exec(i); r)
                            e.push(parseInt(r[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: n.filter(e => e >= r[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: n,
                            kind: "w"
                        }
                    }
                    return "number" != typeof e ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([e, 2 * e].map(t => n.find(e => e >= t) || n[n.length - 1]))],
                        kind: "x"
                    }
                }(e, n, o)
                  , h = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (t, r) => a({
                        config: e,
                        src: i,
                        quality: s,
                        width: t
                    }) + " " + ("w" === u ? t : r + 1) + u).join(", "),
                    src: a({
                        config: e,
                        src: i,
                        quality: s,
                        width: l[h]
                    })
                }
            }({
                config: a,
                src: h,
                unoptimized: c,
                width: N,
                quality: G,
                sizes: d,
                loader: z
            });
            return {
                props: {
                    ...R,
                    loading: W ? "lazy" : m,
                    fetchPriority: k,
                    width: N,
                    height: $,
                    decoding: E,
                    className: f,
                    style: {
                        ...H,
                        ...q
                    },
                    sizes: X.sizes,
                    srcSet: X.srcSet,
                    src: w || X.src
                },
                meta: {
                    unoptimized: c,
                    priority: p,
                    placeholder: T,
                    fill: b
                }
            }
        }
    },
    8293: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return f
            },
            defaultHead: function() {
                return d
            }
        });
        let r = i(7043)
          , n = i(3099)
          , s = i(7437)
          , o = n._(i(2265))
          , a = r._(i(7421))
          , l = i(1436)
          , u = i(8701)
          , h = i(3964);
        function d(t) {
            void 0 === t && (t = !1);
            let e = [(0,
            s.jsx)("meta", {
                charSet: "utf-8"
            })];
            return t || e.push((0,
            s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            e
        }
        function c(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce( (t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        i(1765);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(t, e) {
            let {inAmpMode: i} = e;
            return t.reduce(c, []).reverse().concat(d(i).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , i = new Set
                  , r = {};
                return n => {
                    let s = !0
                      , o = !1;
                    if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                        o = !0;
                        let e = n.key.slice(n.key.indexOf("$") + 1);
                        t.has(e) ? s = !1 : t.add(e)
                    }
                    switch (n.type) {
                    case "title":
                    case "base":
                        e.has(n.type) ? s = !1 : e.add(n.type);
                        break;
                    case "meta":
                        for (let t = 0, e = p.length; t < e; t++) {
                            let e = p[t];
                            if (n.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    i.has(e) ? s = !1 : i.add(e);
                                else {
                                    let t = n.props[e]
                                      , i = r[e] || new Set;
                                    ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t),
                                    r[e] = i)
                                }
                            }
                        }
                    }
                    return s
                }
            }()).reverse().map( (t, e) => {
                let r = t.key || e;
                if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    o.default.cloneElement(t, e)
                }
                return o.default.cloneElement(t, {
                    key: r
                })
            }
            )
        }
        let f = function(t) {
            let {children: e} = t
              , i = (0,
            o.useContext)(l.AmpStateContext)
              , r = (0,
            o.useContext)(u.HeadManagerContext);
            return (0,
            s.jsx)(a.default, {
                reduceComponentsToState: m,
                headManager: r,
                inAmpMode: (0,
                h.isInAmpMode)(i),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    6496: function(t, e) {
        function i(t) {
            let {widthInt: e, heightInt: i, blurWidth: r, blurHeight: n, blurDataURL: s, objectFit: o} = t
              , a = r ? 40 * r : e
              , l = n ? 40 * n : i
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    2589: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let r = i(7043)._(i(2265))
          , n = i(128)
          , s = r.default.createContext(n.imageConfigDefault)
    },
    128: function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return r
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            localPatterns: void 0,
            remotePatterns: [],
            unoptimized: !1
        }
    },
    8461: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let r = i(7043)
          , n = i(5346)
          , s = i(5878)
          , o = r._(i(5084));
        function a(t) {
            let {props: e} = (0,
            n.getImgProps)(t, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[t,i] of Object.entries(e))
                void 0 === i && delete e[t];
            return {
                props: e
            }
        }
        let l = s.Image
    },
    5084: function(t, e) {
        function i(t) {
            let {config: e, src: i, width: r, quality: n} = t;
            return e.path + "?url=" + encodeURIComponent(i) + "&w=" + r + "&q=" + (n || 75)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        i.__next_img_default = !0;
        let r = i
    },
    5523: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = i(7043)._(i(2265)).default.createContext(null)
    },
    7421: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = i(2265)
          , n = "undefined" == typeof window
          , s = n ? () => {}
        : r.useLayoutEffect
          , o = n ? () => {}
        : r.useEffect;
        function a(t) {
            let {headManager: e, reduceComponentsToState: i} = t;
            function a() {
                if (e && e.mountedInstances) {
                    let n = r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(i(n, t))
                }
            }
            if (n) {
                var l;
                null == e || null == (l = e.mountedInstances) || l.add(t.children),
                a()
            }
            return s( () => {
                var i;
                return null == e || null == (i = e.mountedInstances) || i.add(t.children),
                () => {
                    var i;
                    null == e || null == (i = e.mountedInstances) || i.delete(t.children)
                }
            }
            ),
            s( () => (e && (e._pendingUpdate = a),
            () => {
                e && (e._pendingUpdate = a)
            }
            )),
            o( () => (e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            () => {
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    },
    1994: function(t, e, i) {
        i.d(e, {
            W: function() {
                return r
            }
        });
        function r() {
            for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)
                (t = arguments[i]) && (e = function t(e) {
                    var i, r, n = "";
                    if ("string" == typeof e || "number" == typeof e)
                        n += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var s = e.length;
                            for (i = 0; i < s; i++)
                                e[i] && (r = t(e[i])) && (n && (n += " "),
                                n += r)
                        } else
                            for (r in e)
                                e[r] && (n && (n += " "),
                                n += r)
                    }
                    return n
                }(t)) && (r && (r += " "),
                r += e);
            return r
        }
    },
    8614: function(t, e, i) {
        i.d(e, {
            M: function() {
                return v
            }
        });
        var r = i(7437)
          , n = i(2265)
          , s = i(8881)
          , o = i(3576)
          , a = i(4252)
          , l = i(5750);
        class u extends n.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                    t.width = e.offsetWidth || 0,
                    t.top = e.offsetTop,
                    t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function h(t) {
            let {children: e, isPresent: i} = t
              , s = (0,
            n.useId)()
              , o = (0,
            n.useRef)(null)
              , a = (0,
            n.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            })
              , {nonce: h} = (0,
            n.useContext)(l._);
            return (0,
            n.useInsertionEffect)( () => {
                let {width: t, height: e, top: r, left: n} = a.current;
                if (i || !o.current || !t || !e)
                    return;
                o.current.dataset.motionPopId = s;
                let l = document.createElement("style");
                return h && (l.nonce = h),
                document.head.appendChild(l),
                l.sheet && l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            top: ").concat(r, "px !important;\n            left: ").concat(n, "px !important;\n          }\n        ")),
                () => {
                    document.head.removeChild(l)
                }
            }
            , [i]),
            (0,
            r.jsx)(u, {
                isPresent: i,
                childRef: o,
                sizeRef: a,
                children: n.cloneElement(e, {
                    ref: o
                })
            })
        }
        let d = t => {
            let {children: e, initial: i, isPresent: s, onExitComplete: l, custom: u, presenceAffectsLayout: d, mode: p} = t
              , m = (0,
            o.h)(c)
              , f = (0,
            n.useId)()
              , g = (0,
            n.useCallback)(t => {
                for (let e of (m.set(t, !0),
                m.values()))
                    if (!e)
                        return;
                l && l()
            }
            , [m, l])
              , v = (0,
            n.useMemo)( () => ({
                id: f,
                initial: i,
                isPresent: s,
                custom: u,
                onExitComplete: g,
                register: t => (m.set(t, !1),
                () => m.delete(t))
            }), d ? [Math.random(), g] : [s, g]);
            return (0,
            n.useMemo)( () => {
                m.forEach( (t, e) => m.set(e, !1))
            }
            , [s]),
            n.useEffect( () => {
                s || m.size || !l || l()
            }
            , [s]),
            "popLayout" === p && (e = (0,
            r.jsx)(h, {
                isPresent: s,
                children: e
            })),
            (0,
            r.jsx)(a.O.Provider, {
                value: v,
                children: e
            })
        }
        ;
        function c() {
            return new Map
        }
        var p = i(9637);
        let m = t => t.key || "";
        function f(t) {
            let e = [];
            return n.Children.forEach(t, t => {
                (0,
                n.isValidElement)(t) && e.push(t)
            }
            ),
            e
        }
        var g = i(1534);
        let v = t => {
            let {children: e, custom: i, initial: a=!0, onExitComplete: l, presenceAffectsLayout: u=!0, mode: h="sync", propagate: c=!1} = t
              , [v,y] = (0,
            p.oO)(c)
              , b = (0,
            n.useMemo)( () => f(e), [e])
              , x = c && !v ? [] : b.map(m)
              , w = (0,
            n.useRef)(!0)
              , P = (0,
            n.useRef)(b)
              , S = (0,
            o.h)( () => new Map)
              , [T,A] = (0,
            n.useState)(b)
              , [k,E] = (0,
            n.useState)(b);
            (0,
            g.L)( () => {
                w.current = !1,
                P.current = b;
                for (let t = 0; t < k.length; t++) {
                    let e = m(k[t]);
                    x.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1)
                }
            }
            , [k, x.length, x.join("-")]);
            let C = [];
            if (b !== T) {
                let t = [...b];
                for (let e = 0; e < k.length; e++) {
                    let i = k[e]
                      , r = m(i);
                    x.includes(r) || (t.splice(e, 0, i),
                    C.push(i))
                }
                "wait" === h && C.length && (t = C),
                E(f(t)),
                A(b);
                return
            }
            let {forceRender: M} = (0,
            n.useContext)(s.p);
            return (0,
            r.jsx)(r.Fragment, {
                children: k.map(t => {
                    let e = m(t)
                      , n = (!c || !!v) && (b === k || x.includes(e));
                    return (0,
                    r.jsx)(d, {
                        isPresent: n,
                        initial: (!w.current || !!a) && void 0,
                        custom: n ? void 0 : i,
                        presenceAffectsLayout: u,
                        mode: h,
                        onExitComplete: n ? void 0 : () => {
                            if (!S.has(e))
                                return;
                            S.set(e, !0);
                            let t = !0;
                            S.forEach(e => {
                                e || (t = !1)
                            }
                            ),
                            t && (null == M || M(),
                            E(P.current),
                            c && (null == y || y()),
                            l && l())
                        }
                        ,
                        children: t
                    }, e)
                }
                )
            })
        }
    },
    9637: function(t, e, i) {
        i.d(e, {
            oO: function() {
                return s
            }
        });
        var r = i(2265)
          , n = i(4252);
        function s(t=!0) {
            let e = (0,
            r.useContext)(n.O);
            if (null === e)
                return [!0, null];
            let {isPresent: i, onExitComplete: s, register: o} = e
              , a = (0,
            r.useId)();
            (0,
            r.useEffect)( () => {
                t && o(a)
            }
            , [t]);
            let l = (0,
            r.useCallback)( () => t && s && s(a), [a, s, t]);
            return !i && s ? [!1, l] : [!0]
        }
    },
    8881: function(t, e, i) {
        i.d(e, {
            p: function() {
                return r
            }
        });
        let r = (0,
        i(2265).createContext)({})
    },
    5750: function(t, e, i) {
        i.d(e, {
            _: function() {
                return r
            }
        });
        let r = (0,
        i(2265).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    4252: function(t, e, i) {
        i.d(e, {
            O: function() {
                return r
            }
        });
        let r = (0,
        i(2265).createContext)(null)
    },
    521: function(t, e, i) {
        let r;
        function n(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        i.d(e, {
            E: function() {
                return sg
            }
        });
        let s = t => Array.isArray(t);
        function o(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let r = 0; r < i; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        function a(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function l(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach( (t, i) => {
                e[0][i] = t.get(),
                e[1][i] = t.getVelocity()
            }
            ),
            e
        }
        function u(t, e, i, r) {
            if ("function" == typeof e) {
                let[n,s] = l(r);
                e = e(void 0 !== i ? i : t.custom, n, s)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[n,s] = l(r);
                e = e(void 0 !== i ? i : t.custom, n, s)
            }
            return e
        }
        function h(t, e, i) {
            let r = t.getProps();
            return u(r, e, void 0 !== i ? i : r.custom, t)
        }
        let d = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , c = ["initial", ...d];
        function p(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let m = p( () => void 0 !== window.ScrollTimeline);
        class f {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => m() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class g extends f {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        function v(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        function y(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        function b(t) {
            return "function" == typeof t
        }
        function x(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let w = t => Array.isArray(t) && "number" == typeof t[0]
          , P = {
            linearEasing: void 0
        }
          , S = function(t, e) {
            let i = p(t);
            return () => {
                var t;
                return null !== (t = P[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , T = (t, e, i) => {
            let r = e - t;
            return 0 === r ? 1 : (i - t) / r
        }
          , A = (t, e, i=10) => {
            let r = ""
              , n = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < n; e++)
                r += t(T(0, n - 1, e)) + ", ";
            return `linear(${r.substring(0, r.length - 2)})`
        }
          , k = ([t,e,i,r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`
          , E = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: k([0, .65, .55, 1]),
            circOut: k([.55, 0, 1, .45]),
            backIn: k([.31, .01, .66, -.59]),
            backOut: k([.33, 1.53, .69, .99])
        }
          , C = {
            x: !1,
            y: !1
        };
        function M(t, e) {
            let i = function(t, e, i) {
                if (t instanceof Element)
                    return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t)
              , r = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: r.signal
            }, () => r.abort()]
        }
        function j(t) {
            return e => {
                "touch" === e.pointerType || C.x || C.y || t(e)
            }
        }
        let V = (t, e) => !!e && (t === e || V(t, e.parentElement))
          , D = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
          , R = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , O = new WeakSet;
        function L(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function F(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let B = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let r = L( () => {
                if (O.has(i))
                    return;
                F(i, "down");
                let t = L( () => {
                    F(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => F(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", r, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", r), e)
        }
        ;
        function I(t) {
            return D(t) && !(C.x || C.y)
        }
        let z = t => 1e3 * t
          , U = t => t / 1e3
          , _ = t => t
          , N = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , $ = new Set(N)
          , W = new Set(["width", "height", "top", "left", "right", "bottom", ...N])
          , G = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , H = t => s(t) ? t[t.length - 1] || 0 : t
          , Y = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , q = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function X(t, e) {
            let i = !1
              , r = !0
              , n = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = q.reduce( (t, e) => (t[e] = function(t) {
                let e = new Set
                  , i = new Set
                  , r = !1
                  , n = !1
                  , s = new WeakSet
                  , o = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                };
                function a(e) {
                    s.has(e) && (l.schedule(e),
                    t()),
                    e(o)
                }
                let l = {
                    schedule: (t, n=!1, o=!1) => {
                        let a = o && r ? e : i;
                        return n && s.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        i.delete(t),
                        s.delete(t)
                    }
                    ,
                    process: t => {
                        if (o = t,
                        r) {
                            n = !0;
                            return
                        }
                        r = !0,
                        [e,i] = [i, e],
                        e.forEach(a),
                        e.clear(),
                        r = !1,
                        n && (n = !1,
                        l.process(t))
                    }
                };
                return l
            }(s),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: d, postRender: c} = o
              , p = () => {
                let s = Y.useManualTiming ? n.timestamp : performance.now();
                i = !1,
                n.delta = r ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1),
                n.timestamp = s,
                n.isProcessing = !0,
                a.process(n),
                l.process(n),
                u.process(n),
                h.process(n),
                d.process(n),
                c.process(n),
                n.isProcessing = !1,
                i && e && (r = !1,
                t(p))
            }
              , m = () => {
                i = !0,
                r = !0,
                n.isProcessing || t(p)
            }
            ;
            return {
                schedule: q.reduce( (t, e) => {
                    let r = o[e];
                    return t[e] = (t, e=!1, n=!1) => (i || m(),
                    r.schedule(t, e, n)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < q.length; e++)
                        o[q[e]].cancel(t)
                }
                ,
                state: n,
                steps: o
            }
        }
        let {schedule: K, cancel: Z, state: J, steps: Q} = X("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : _, !0);
        function tt() {
            r = void 0
        }
        let te = {
            now: () => (void 0 === r && te.set(J.isProcessing || Y.useManualTiming ? J.timestamp : performance.now()),
            r),
            set: t => {
                r = t,
                queueMicrotask(tt)
            }
        };
        function ti(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function tr(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class tn {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return ti(this.subscriptions, t),
                () => tr(this.subscriptions, t)
            }
            notify(t, e, i) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let n = 0; n < r; n++) {
                            let r = this.subscriptions[n];
                            r && r(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let ts = t => !isNaN(parseFloat(t))
          , to = {
            current: void 0
        };
        class ta {
            constructor(t, e={}) {
                this.version = "11.18.0",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = te.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = te.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = ts(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new tn);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    K.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return to.current && to.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = te.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function tl(t, e) {
            return new ta(t,e)
        }
        let tu = t => !!(t && t.getVelocity);
        function th(t, e) {
            let i = t.getValue("willChange");
            if (tu(i) && i.add)
                return i.add(e)
        }
        let td = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , tc = "data-" + td("framerAppearId")
          , tp = {
            current: !1
        }
          , tm = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function tf(t, e, i, r) {
            if (t === e && i === r)
                return _;
            let n = e => (function(t, e, i, r, n) {
                let s, o;
                let a = 0;
                do
                    (s = tm(o = e + (i - e) / 2, r, n) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : tm(n(t), e, r)
        }
        let tg = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , tv = t => e => 1 - t(1 - e)
          , ty = tf(.33, 1.53, .69, .99)
          , tb = tv(ty)
          , tx = tg(tb)
          , tw = t => (t *= 2) < 1 ? .5 * tb(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , tP = t => 1 - Math.sin(Math.acos(t))
          , tS = tv(tP)
          , tT = tg(tP)
          , tA = t => /^0[^.\s]+$/u.test(t)
          , tk = (t, e, i) => i > e ? e : i < t ? t : i
          , tE = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tC = {
            ...tE,
            transform: t => tk(0, 1, t)
        }
          , tM = {
            ...tE,
            default: 1
        }
          , tj = t => Math.round(1e5 * t) / 1e5
          , tV = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , tR = (t, e) => i => !!("string" == typeof i && tD.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , tO = (t, e, i) => r => {
            if ("string" != typeof r)
                return r;
            let[n,s,o,a] = r.match(tV);
            return {
                [t]: parseFloat(n),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tL = t => tk(0, 255, t)
          , tF = {
            ...tE,
            transform: t => Math.round(tL(t))
        }
          , tB = {
            test: tR("rgb", "red"),
            parse: tO("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: r=1}) => "rgba(" + tF.transform(t) + ", " + tF.transform(e) + ", " + tF.transform(i) + ", " + tj(tC.transform(r)) + ")"
        }
          , tI = {
            test: tR("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , r = ""
                  , n = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                r = t.substring(5, 7),
                n = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                r = t.substring(3, 4),
                n = t.substring(4, 5),
                e += e,
                i += i,
                r += r,
                n += n),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(r, 16),
                    alpha: n ? parseInt(n, 16) / 255 : 1
                }
            },
            transform: tB.transform
        }
          , tz = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tU = tz("deg")
          , t_ = tz("%")
          , tN = tz("px")
          , t$ = tz("vh")
          , tW = tz("vw")
          , tG = {
            ...t_,
            parse: t => t_.parse(t) / 100,
            transform: t => t_.transform(100 * t)
        }
          , tH = {
            test: tR("hsl", "hue"),
            parse: tO("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + t_.transform(tj(e)) + ", " + t_.transform(tj(i)) + ", " + tj(tC.transform(r)) + ")"
        }
          , tY = {
            test: t => tB.test(t) || tI.test(t) || tH.test(t),
            parse: t => tB.test(t) ? tB.parse(t) : tH.test(t) ? tH.parse(t) : tI.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tB.transform(t) : tH.transform(t)
        }
          , tq = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tX = "number"
          , tK = "color"
          , tZ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tJ(t) {
            let e = t.toString()
              , i = []
              , r = {
                color: [],
                number: [],
                var: []
            }
              , n = []
              , s = 0
              , o = e.replace(tZ, t => (tY.test(t) ? (r.color.push(s),
            n.push(tK),
            i.push(tY.parse(t))) : t.startsWith("var(") ? (r.var.push(s),
            n.push("var"),
            i.push(t)) : (r.number.push(s),
            n.push(tX),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: r,
                types: n
            }
        }
        function tQ(t) {
            return tJ(t).values
        }
        function t0(t) {
            let {split: e, types: i} = tJ(t)
              , r = e.length;
            return t => {
                let n = "";
                for (let s = 0; s < r; s++)
                    if (n += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tX ? n += tj(t[s]) : e === tK ? n += tY.transform(t[s]) : n += t[s]
                    }
                return n
            }
        }
        let t1 = t => "number" == typeof t ? 0 : t
          , t2 = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tV)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tq)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tQ,
            createTransformer: t0,
            getAnimatableNone: function(t) {
                let e = tQ(t);
                return t0(t)(e.map(t1))
            }
        }
          , t3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t5(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = i.match(tV) || [];
            if (!r)
                return t;
            let n = i.replace(r, "")
              , s = t3.has(e) ? 1 : 0;
            return r !== i && (s *= 100),
            e + "(" + s + n + ")"
        }
        let t4 = /\b([a-z-]*)\(.*?\)/gu
          , t6 = {
            ...t2,
            getAnimatableNone: t => {
                let e = t.match(t4);
                return e ? e.map(t5).join(" ") : t
            }
        }
          , t8 = {
            ...tE,
            transform: Math.round
        }
          , t9 = {
            borderWidth: tN,
            borderTopWidth: tN,
            borderRightWidth: tN,
            borderBottomWidth: tN,
            borderLeftWidth: tN,
            borderRadius: tN,
            radius: tN,
            borderTopLeftRadius: tN,
            borderTopRightRadius: tN,
            borderBottomRightRadius: tN,
            borderBottomLeftRadius: tN,
            width: tN,
            maxWidth: tN,
            height: tN,
            maxHeight: tN,
            top: tN,
            right: tN,
            bottom: tN,
            left: tN,
            padding: tN,
            paddingTop: tN,
            paddingRight: tN,
            paddingBottom: tN,
            paddingLeft: tN,
            margin: tN,
            marginTop: tN,
            marginRight: tN,
            marginBottom: tN,
            marginLeft: tN,
            backgroundPositionX: tN,
            backgroundPositionY: tN,
            rotate: tU,
            rotateX: tU,
            rotateY: tU,
            rotateZ: tU,
            scale: tM,
            scaleX: tM,
            scaleY: tM,
            scaleZ: tM,
            skew: tU,
            skewX: tU,
            skewY: tU,
            distance: tN,
            translateX: tN,
            translateY: tN,
            translateZ: tN,
            x: tN,
            y: tN,
            z: tN,
            perspective: tN,
            transformPerspective: tN,
            opacity: tC,
            originX: tG,
            originY: tG,
            originZ: tN,
            zIndex: t8,
            size: tN,
            fillOpacity: tC,
            strokeOpacity: tC,
            numOctaves: t8
        }
          , t7 = {
            ...t9,
            color: tY,
            backgroundColor: tY,
            outlineColor: tY,
            fill: tY,
            stroke: tY,
            borderColor: tY,
            borderTopColor: tY,
            borderRightColor: tY,
            borderBottomColor: tY,
            borderLeftColor: tY,
            filter: t6,
            WebkitFilter: t6
        }
          , et = t => t7[t];
        function ee(t, e) {
            let i = et(t);
            return i !== t6 && (i = t2),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let ei = new Set(["auto", "none", "0"])
          , er = t => t === tE || t === tN
          , en = (t, e) => parseFloat(t.split(", ")[e])
          , es = (t, e) => (i, {transform: r}) => {
            if ("none" === r || !r)
                return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n)
                return en(n[1], e);
            {
                let e = r.match(/^matrix\((.+)\)$/u);
                return e ? en(e[1], t) : 0
            }
        }
          , eo = new Set(["x", "y", "z"])
          , ea = N.filter(t => !eo.has(t))
          , el = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: es(4, 13),
            y: es(5, 14)
        };
        el.translateX = el.x,
        el.translateY = el.y;
        let eu = new Set
          , eh = !1
          , ed = !1;
        function ec() {
            if (ed) {
                let t = Array.from(eu).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return ea.forEach(i => {
                            let r = t.getValue(i);
                            void 0 !== r && (e.push([i, r.get()]),
                            r.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var r;
                        null === (r = t.getValue(e)) || void 0 === r || r.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            ed = !1,
            eh = !1,
            eu.forEach(t => t.complete()),
            eu.clear()
        }
        function ep() {
            eu.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (ed = !0)
            }
            )
        }
        class em {
            constructor(t, e, i, r, n, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = r,
                this.element = n,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (eu.add(this),
                eh || (eh = !0,
                K.read(ep),
                K.resolveKeyframes(ec))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: r} = this;
                for (let n = 0; n < t.length; n++)
                    if (null === t[n]) {
                        if (0 === n) {
                            let n = null == r ? void 0 : r.get()
                              , s = t[t.length - 1];
                            if (void 0 !== n)
                                t[0] = n;
                            else if (i && e) {
                                let r = i.readValue(e, s);
                                null != r && (t[0] = r)
                            }
                            void 0 === t[0] && (t[0] = s),
                            r && void 0 === n && r.set(t[0])
                        } else
                            t[n] = t[n - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                eu.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                eu.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let ef = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , eg = t => e => "string" == typeof e && e.startsWith(t)
          , ev = eg("--")
          , ey = eg("var(--")
          , eb = t => !!ey(t) && ex.test(t.split("/*")[0].trim())
          , ex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , ew = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , eP = t => e => e.test(t)
          , eS = [tE, tN, t_, tU, tW, t$, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eT = t => eS.find(eP(t));
        class eA extends em {
            constructor(t, e, i, r, n) {
                super(t, e, i, r, n, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let r = t[i];
                    if ("string" == typeof r && eb(r = r.trim())) {
                        let n = function t(e, i, r=1) {
                            _(r <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[n,s] = function(t) {
                                let e = ew.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,r,n] = e;
                                return [`--${null != i ? i : r}`, n]
                            }(e);
                            if (!n)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(n);
                            if (o) {
                                let t = o.trim();
                                return ef(t) ? parseFloat(t) : t
                            }
                            return eb(s) ? t(s, i, r + 1) : s
                        }(r, e.current);
                        void 0 !== n && (t[i] = n),
                        i === t.length - 1 && (this.finalKeyframe = r)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !W.has(i) || 2 !== t.length)
                    return;
                let[r,n] = t
                  , s = eT(r)
                  , o = eT(n);
                if (s !== o) {
                    if (er(s) && er(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var r;
                    ("number" == typeof (r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || tA(r)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let r, n = 0;
                    for (; n < t.length && !r; ) {
                        let e = t[n];
                        "string" == typeof e && !ei.has(e) && tJ(e).values.length && (r = t[n]),
                        n++
                    }
                    if (r && i)
                        for (let n of e)
                            t[n] = ee(i, r)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = el[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let r = e[e.length - 1];
                void 0 !== r && t.getValue(i, r).jump(r, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: r} = this;
                if (!e || !e.current)
                    return;
                let n = e.getValue(i);
                n && n.jump(this.measuredOrigin, !1);
                let s = r.length - 1
                  , o = r[s];
                r[s] = el[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let ek = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (t2.test(t) || "0" === t) && !t.startsWith("url("))
          , eE = t => null !== t;
        function eC(t, {repeat: e, repeatType: i="loop"}, r) {
            let n = t.filter(eE)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
            return s && void 0 !== r ? r : n[s]
        }
        class eM {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: r=0, repeatDelay: n=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = te.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: r,
                    repeatDelay: n,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (ep(),
                ec()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = te.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: r, velocity: n, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, r) {
                    let n = t[0];
                    if (null === n)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = ek(n, e)
                      , a = ek(s, e);
                    return _(o === a, `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || b(i)) && r)
                }(t, i, r, n)) {
                    if (tp.current || !s) {
                        null == a || a(eC(t, this.options, e)),
                        null == o || o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        let ej = (t, e, i) => t + (e - t) * i;
        function eV(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function eD(t, e) {
            return i => i > 0 ? e : t
        }
        let eR = (t, e, i) => {
            let r = t * t
              , n = i * (e * e - r) + r;
            return n < 0 ? 0 : Math.sqrt(n)
        }
          , eO = [tI, tB, tH]
          , eL = t => eO.find(e => e.test(t));
        function eF(t) {
            let e = eL(t);
            if (_(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === tH && (i = function({hue: t, saturation: e, lightness: i, alpha: r}) {
                t /= 360,
                i /= 100;
                let n = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let r = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - r;
                    n = eV(a, r, t + 1 / 3),
                    s = eV(a, r, t),
                    o = eV(a, r, t - 1 / 3)
                } else
                    n = s = o = i;
                return {
                    red: Math.round(255 * n),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: r
                }
            }(i)),
            i
        }
        let eB = (t, e) => {
            let i = eF(t)
              , r = eF(e);
            if (!i || !r)
                return eD(t, e);
            let n = {
                ...i
            };
            return t => (n.red = eR(i.red, r.red, t),
            n.green = eR(i.green, r.green, t),
            n.blue = eR(i.blue, r.blue, t),
            n.alpha = ej(i.alpha, r.alpha, t),
            tB.transform(n))
        }
          , eI = (t, e) => i => e(t(i))
          , ez = (...t) => t.reduce(eI)
          , eU = new Set(["none", "hidden"]);
        function e_(t, e) {
            return i => ej(t, e, i)
        }
        function eN(t) {
            return "number" == typeof t ? e_ : "string" == typeof t ? eb(t) ? eD : tY.test(t) ? eB : eG : Array.isArray(t) ? e$ : "object" == typeof t ? tY.test(t) ? eB : eW : eD
        }
        function e$(t, e) {
            let i = [...t]
              , r = i.length
              , n = t.map( (t, i) => eN(t)(t, e[i]));
            return t => {
                for (let e = 0; e < r; e++)
                    i[e] = n[e](t);
                return i
            }
        }
        function eW(t, e) {
            let i = {
                ...t,
                ...e
            }
              , r = {};
            for (let n in i)
                void 0 !== t[n] && void 0 !== e[n] && (r[n] = eN(t[n])(t[n], e[n]));
            return t => {
                for (let e in r)
                    i[e] = r[e](t);
                return i
            }
        }
        let eG = (t, e) => {
            let i = t2.createTransformer(e)
              , r = tJ(t)
              , n = tJ(e);
            return r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length ? eU.has(t) && !n.values.length || eU.has(e) && !r.values.length ? eU.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : ez(e$(function(t, e) {
                var i;
                let r = []
                  , n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][n[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    r[s] = l,
                    n[o]++
                }
                return r
            }(r, n), n.values), i) : (_(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            eD(t, e))
        }
        ;
        function eH(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ej(t, e, i) : eN(t)(t, e)
        }
        function eY(t, e, i) {
            var r, n;
            let s = Math.max(e - 5, 0);
            return r = i - t(s),
            (n = e - s) ? 1e3 / n * r : 0
        }
        let eq = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function eX(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eK = ["duration", "bounce"]
          , eZ = ["stiffness", "damping", "mass"];
        function eJ(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function eQ(t=eq.visualDuration, e=eq.bounce) {
            let i;
            let r = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: n, restDelta: s} = r
              , o = r.keyframes[0]
              , a = r.keyframes[r.keyframes.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , {stiffness: u, damping: h, mass: d, duration: c, velocity: p, isResolvedFromDuration: m} = function(t) {
                let e = {
                    velocity: eq.velocity,
                    stiffness: eq.stiffness,
                    damping: eq.damping,
                    mass: eq.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eJ(t, eZ) && eJ(t, eK)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , r = i * i
                          , n = 2 * tk(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                        e = {
                            ...e,
                            mass: eq.mass,
                            stiffness: r,
                            damping: n
                        }
                    } else {
                        let i = function({duration: t=eq.duration, bounce: e=eq.bounce, velocity: i=eq.velocity, mass: r=eq.mass}) {
                            let n, s;
                            _(t <= z(eq.maxDuration), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = tk(eq.minDamping, eq.maxDamping, o),
                            t = tk(eq.minDuration, eq.maxDuration, U(t)),
                            o < 1 ? (n = e => {
                                let r = e * o
                                  , n = r * t;
                                return .001 - (r - i) / eX(e, o) * Math.exp(-n)
                            }
                            ,
                            s = e => {
                                let r = e * o * t
                                  , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                                  , a = eX(Math.pow(e, 2), o);
                                return (r * i + i - s) * Math.exp(-r) * (-n(e) + .001 > 0 ? -1 : 1) / a
                            }
                            ) : (n = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            s = e => t * t * (i - e) * Math.exp(-e * t));
                            let a = function(t, e, i) {
                                let r = i;
                                for (let i = 1; i < 12; i++)
                                    r -= t(r) / e(r);
                                return r
                            }(n, s, 5 / t);
                            if (t = z(t),
                            isNaN(a))
                                return {
                                    stiffness: eq.stiffness,
                                    damping: eq.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(a, 2) * r;
                                return {
                                    stiffness: e,
                                    damping: 2 * o * Math.sqrt(r * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: eq.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...r,
                velocity: -U(r.velocity || 0)
            })
              , f = p || 0
              , g = h / (2 * Math.sqrt(u * d))
              , v = a - o
              , b = U(Math.sqrt(u / d))
              , x = 5 > Math.abs(v);
            if (n || (n = x ? eq.restSpeed.granular : eq.restSpeed.default),
            s || (s = x ? eq.restDelta.granular : eq.restDelta.default),
            g < 1) {
                let t = eX(b, g);
                i = e => a - Math.exp(-g * b * e) * ((f + g * b * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
            } else if (1 === g)
                i = t => a - Math.exp(-b * t) * (v + (f + b * v) * t);
            else {
                let t = b * Math.sqrt(g * g - 1);
                i = e => {
                    let i = Math.exp(-g * b * e)
                      , r = Math.min(t * e, 300);
                    return a - i * ((f + g * b * v) * Math.sinh(r) + t * v * Math.cosh(r)) / t
                }
            }
            let w = {
                calculatedDuration: m && c || null,
                next: t => {
                    let e = i(t);
                    if (m)
                        l.done = t >= c;
                    else {
                        let r = 0;
                        g < 1 && (r = 0 === t ? z(f) : eY(i, t, e));
                        let o = Math.abs(r) <= n
                          , u = Math.abs(a - e) <= s;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : e,
                    l
                }
                ,
                toString: () => {
                    let t = Math.min(y(w), 2e4)
                      , e = A(e => w.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return w
        }
        function e0({keyframes: t, velocity: e=0, power: i=.8, timeConstant: r=325, bounceDamping: n=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let d, c;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t => void 0 !== a && t < a || void 0 !== l && t > l
              , g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , v = i * e
              , y = p + v
              , b = void 0 === o ? y : o(y);
            b !== y && (v = b - p);
            let x = t => -v * Math.exp(-t / r)
              , w = t => b + x(t)
              , P = t => {
                let e = x(t)
                  , i = w(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? b : i
            }
              , S = t => {
                f(m.value) && (d = t,
                c = eQ({
                    keyframes: [m.value, g(m.value)],
                    velocity: eY(w, t, m.value),
                    damping: n,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return S(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (c || void 0 !== d || (e = !0,
                    P(t),
                    S(t)),
                    void 0 !== d && t >= d) ? c.next(t - d) : (e || P(t),
                    m)
                }
            }
        }
        let e1 = tf(.42, 0, 1, 1)
          , e2 = tf(0, 0, .58, 1)
          , e3 = tf(.42, 0, .58, 1)
          , e5 = t => Array.isArray(t) && "number" != typeof t[0]
          , e4 = {
            linear: _,
            easeIn: e1,
            easeInOut: e3,
            easeOut: e2,
            circIn: tP,
            circInOut: tT,
            circOut: tS,
            backIn: tb,
            backInOut: tx,
            backOut: ty,
            anticipate: tw
        }
          , e6 = t => {
            if (w(t)) {
                _(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,r,n] = t;
                return tf(e, i, r, n)
            }
            return "string" == typeof t ? (_(void 0 !== e4[t], `Invalid easing type '${t}'`),
            e4[t]) : t
        }
        ;
        function e8({duration: t=300, keyframes: e, times: i, ease: r="easeInOut"}) {
            let n = e5(r) ? r.map(e6) : e6(r)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: r, mixer: n}={}) {
                let s = t.length;
                if (_(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let r = []
                      , n = i || eH
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = n(t[i], t[i + 1]);
                        e && (s = ez(Array.isArray(e) ? e[i] || _ : e, s)),
                        r.push(s)
                    }
                    return r
                }(e, r, n)
                  , l = a.length
                  , u = i => {
                    if (o && i < t[0])
                        return e[0];
                    let r = 0;
                    if (l > 1)
                        for (; r < t.length - 2 && !(i < t[r + 1]); r++)
                            ;
                    let n = T(t[r], t[r + 1], i);
                    return a[r](n)
                }
                ;
                return i ? e => u(tk(t[0], t[s - 1], e)) : u
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let r = 1; r <= e; r++) {
                        let n = T(0, e, r);
                        t.push(ej(i, 1, n))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(n) ? n : e.map( () => n || e3).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let e9 = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => K.update(e, !0),
                stop: () => Z(e),
                now: () => J.isProcessing ? J.timestamp : te.now()
            }
        }
          , e7 = {
            decay: e0,
            inertia: e0,
            tween: e8,
            keyframes: e8,
            spring: eQ
        }
          , it = t => t / 100;
        class ie extends eM {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: r, keyframes: n} = this.options
                  , s = (null == r ? void 0 : r.KeyframeResolver) || em;
                this.resolver = new s(n, (t, e) => this.onKeyframesResolved(t, e),e,i,r),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: r="keyframes", repeat: n=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = b(r) ? r : e7[r] || e8;
                l !== e8 && "number" != typeof t[0] && (e = ez(it, eH(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = y(u));
                let {calculatedDuration: h} = u
                  , d = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: d,
                    totalDuration: d * (n + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: r, generator: n, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return n.next(0);
                let {delay: d, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
                  , v = this.speed >= 0 ? g < 0 : g > u;
                this.currentTime = Math.max(g, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , b = n;
                if (c) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    m && (i -= m / h)) : "mirror" === p && (b = s)),
                    y = tk(0, 1, i) * h
                }
                let x = v ? {
                    done: !1,
                    value: a[0]
                } : b.next(y);
                o && (x.value = o(x.value));
                let {done: w} = x;
                v || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return P && void 0 !== r && (x.value = eC(a, this.options, r)),
                f && f(x.value),
                P && this.finish(),
                x
            }
            get duration() {
                let {resolved: t} = this;
                return t ? U(t.calculatedDuration) : 0
            }
            get time() {
                return U(this.currentTime)
            }
            set time(t) {
                t = z(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = U(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=e9, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let r = this.driver.now();
                null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let ii = new Set(["opacity", "clipPath", "filter", "transform"])
          , ir = p( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , is = {
            anticipate: tw,
            backInOut: tx,
            circInOut: tT
        };
        class io extends eM {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: r, keyframes: n} = this.options;
                this.resolver = new eA(n, (t, e) => this.onKeyframesResolved(t, e),e,i,r),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i, r;
                let {duration: n=300, times: s, ease: o, type: a, motionValue: l, name: u, startTime: h} = this.options;
                if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
                    return !1;
                if ("string" == typeof o && S() && o in is && (o = is[o]),
                b((r = this.options).type) || "spring" === r.type || !function t(e) {
                    return !!("function" == typeof e && S() || !e || "string" == typeof e && (e in E || S()) || w(e) || Array.isArray(e) && e.every(t))
                }(r.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: r, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new ie({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , r = {
                            done: !1,
                            value: t[0]
                        }
                          , n = []
                          , s = 0;
                        for (; !r.done && s < 2e4; )
                            n.push((r = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: n,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    n = h.duration,
                    s = h.times,
                    o = h.ease,
                    a = "keyframes"
                }
                let d = function(t, e, i, {delay: r=0, duration: n=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && S() ? A(e, i) : w(e) ? k(e) : Array.isArray(e) ? e.map(e => t(e, i) || E.easeOut) : E[e]
                    }(a, n);
                    return Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                        delay: r,
                        duration: n,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: n,
                    times: s,
                    ease: o
                });
                return d.startTime = null != h ? h : this.calcStartTime(),
                this.pendingTimeline ? (x(d, this.pendingTimeline),
                this.pendingTimeline = void 0) : d.onfinish = () => {
                    let {onComplete: i} = this.options;
                    l.set(eC(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: d,
                    duration: n,
                    times: s,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return U(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return U(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = z(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return _;
                    let {animation: i} = e;
                    x(i, t)
                } else
                    this.pendingTimeline = t;
                return _
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: r, type: n, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new ie({
                        ...u,
                        keyframes: i,
                        duration: r,
                        type: n,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , d = z(this.time);
                    t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: r, repeatType: n, damping: s, type: o} = t;
                return ir() && i && ii.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !r && "mirror" !== n && 0 !== s && "inertia" !== o
            }
        }
        let ia = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , il = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , iu = {
            type: "keyframes",
            duration: .8
        }
          , ih = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , id = (t, {keyframes: e}) => e.length > 2 ? iu : $.has(t) ? t.startsWith("scale") ? il(e[1]) : ia : ih
          , ic = (t, e, i, r={}, n, s) => o => {
            let a = v(r, t) || {}
              , l = a.delay || r.delay || 0
              , {elapsed: u=0} = r;
            u -= z(l);
            let h = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : n
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: r, staggerDirection: n, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (h = {
                ...h,
                ...id(t, h)
            }),
            h.duration && (h.duration = z(h.duration)),
            h.repeatDelay && (h.repeatDelay = z(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0,
            0 !== h.delay || (d = !0)),
            (tp.current || Y.skipAnimations) && (d = !0,
            h.duration = 0,
            h.delay = 0),
            d && !s && void 0 !== e.get()) {
                let t = eC(h.keyframes, a);
                if (void 0 !== t)
                    return K.update( () => {
                        h.onUpdate(t),
                        h.onComplete()
                    }
                    ),
                    new g([])
            }
            return !s && io.supports(h) ? new io(h) : new ie(h)
        }
        ;
        function ip(t, e, {delay: i=0, transitionOverride: r, type: n}={}) {
            var s;
            let {transition: o=t.getDefaultTransition(), transitionEnd: a, ...l} = e;
            r && (o = r);
            let u = []
              , d = n && t.animationState && t.animationState.getState()[n];
            for (let e in l) {
                let r = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , n = l[e];
                if (void 0 === n || d && function({protectedKeys: t, needsAnimating: e}, i) {
                    let r = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    r
                }(d, e))
                    continue;
                let a = {
                    delay: i,
                    ...v(o || {}, e)
                }
                  , h = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[tc];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, K);
                        null !== t && (a.startTime = t,
                        h = !0)
                    }
                }
                th(t, e),
                r.start(ic(e, r, n, t.shouldReduceMotion && W.has(e) ? {
                    type: !1
                } : a, t, h));
                let c = r.animation;
                c && u.push(c)
            }
            return a && Promise.all(u).then( () => {
                K.update( () => {
                    a && function(t, e) {
                        let {transitionEnd: i={}, transition: r={}, ...n} = h(t, e) || {};
                        for (let e in n = {
                            ...n,
                            ...i
                        }) {
                            let i = H(n[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, tl(i))
                        }
                    }(t, a)
                }
                )
            }
            ),
            u
        }
        function im(t, e, i={}) {
            var r;
            let n = h(t, e, "exit" === i.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = n || {};
            i.transitionOverride && (s = i.transitionOverride);
            let o = n ? () => Promise.all(ip(t, n, i)) : () => Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (r=0) => {
                let {delayChildren: n=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, r=0, n=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * r
                      , l = 1 === n ? (t=0) => t * r : (t=0) => a - t * r;
                    return Array.from(t.variantChildren).sort(ig).forEach( (t, r) => {
                        t.notify("AnimationStart", e),
                        o.push(im(t, e, {
                            ...s,
                            delay: i + l(r)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, n + r, o, a, i)
            }
            : () => Promise.resolve()
              , {when: l} = s;
            if (!l)
                return Promise.all([o(), a(i.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then( () => e())
            }
        }
        function ig(t, e) {
            return t.sortNodePosition(e)
        }
        let iv = c.length
          , iy = [...d].reverse()
          , ib = d.length;
        function ix(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function iw() {
            return {
                animate: ix(!0),
                whileInView: ix(),
                whileHover: ix(),
                whileTap: ix(),
                whileDrag: ix(),
                whileFocus: ix(),
                exit: ix()
            }
        }
        class iP {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class iS extends iP {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let r;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            r = Promise.all(e.map(e => im(t, e, i)));
                        else if ("string" == typeof e)
                            r = im(t, e, i);
                        else {
                            let n = "function" == typeof e ? h(t, e, i.custom) : e;
                            r = Promise.all(ip(t, n, i))
                        }
                        return r.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = iw()
                      , r = !0
                      , l = e => (i, r) => {
                        var n;
                        let s = h(t, r, "exit" === e ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...r} = s;
                            i = {
                                ...i,
                                ...r,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function u(u) {
                        let {props: h} = t
                          , d = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < iv; t++) {
                                let r = c[t]
                                  , n = e.props[r];
                                (a(n) || !1 === n) && (i[r] = n)
                            }
                            return i
                        }(t.parent) || {}
                          , p = []
                          , m = new Set
                          , f = {}
                          , g = 1 / 0;
                        for (let e = 0; e < ib; e++) {
                            var v;
                            let c = iy[e]
                              , y = i[c]
                              , b = void 0 !== h[c] ? h[c] : d[c]
                              , x = a(b)
                              , w = c === u ? y.isActive : null;
                            !1 === w && (g = e);
                            let P = b === d[c] && b !== h[c] && x;
                            if (P && r && t.manuallyAnimateOnMount && (P = !1),
                            y.protectedKeys = {
                                ...f
                            },
                            !y.isActive && null === w || !b && !y.prevProp || n(b) || "boolean" == typeof b)
                                continue;
                            let S = (v = y.prevProp,
                            "string" == typeof b ? b !== v : !!Array.isArray(b) && !o(b, v))
                              , T = S || c === u && y.isActive && !P && x || e > g && x
                              , A = !1
                              , k = Array.isArray(b) ? b : [b]
                              , E = k.reduce(l(c), {});
                            !1 === w && (E = {});
                            let {prevResolvedValues: C={}} = y
                              , M = {
                                ...C,
                                ...E
                            }
                              , j = e => {
                                T = !0,
                                m.has(e) && (A = !0,
                                m.delete(e)),
                                y.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in M) {
                                let e = E[t]
                                  , i = C[t];
                                if (!f.hasOwnProperty(t))
                                    (s(e) && s(i) ? o(e, i) : e === i) ? void 0 !== e && m.has(t) ? j(t) : y.protectedKeys[t] = !0 : null != e ? j(t) : m.add(t)
                            }
                            y.prevProp = b,
                            y.prevResolvedValues = E,
                            y.isActive && (f = {
                                ...f,
                                ...E
                            }),
                            r && t.blockInitialAnimation && (T = !1);
                            let V = !(P && S) || A;
                            T && V && p.push(...k.map(t => ({
                                animation: t,
                                options: {
                                    type: c
                                }
                            })))
                        }
                        if (m.size) {
                            let e = {};
                            m.forEach(i => {
                                let r = t.getBaseTarget(i)
                                  , n = t.getValue(i);
                                n && (n.liveStyle = !0),
                                e[i] = null != r ? r : null
                            }
                            ),
                            p.push({
                                animation: e
                            })
                        }
                        let y = !!p.length;
                        return r && (!1 === h.initial || h.initial === h.animate) && !t.manuallyAnimateOnMount && (y = !1),
                        r = !1,
                        y ? e(p) : Promise.resolve()
                    }
                    return {
                        animateChanges: u,
                        setActive: function(e, r) {
                            var n;
                            if (i[e].isActive === r)
                                return Promise.resolve();
                            null === (n = t.variantChildren) || void 0 === n || n.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
                            }
                            ),
                            i[e].isActive = r;
                            let s = u(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = iw(),
                            r = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                n(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let iT = 0;
        class iA extends iP {
            constructor() {
                super(...arguments),
                this.id = iT++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let r = this.node.animationState.setActive("exit", !t);
                e && !t && r.then( () => e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        function ik(t, e, i, r={
            passive: !0
        }) {
            return t.addEventListener(e, i, r),
            () => t.removeEventListener(e, i)
        }
        function iE(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let iC = t => e => D(e) && t(e, iE(e));
        function iM(t, e, i, r) {
            return ik(t, e, iC(i), r)
        }
        let ij = (t, e) => Math.abs(t - e);
        class iV {
            constructor(t, e, {transformPagePoint: i, contextWindow: r, dragSnapToOrigin: n=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let i = iO(this.lastMoveEventInfo, this.history)
                      , r = null !== this.startEvent
                      , n = (t = i.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(ij(t.x, e.x) ** 2 + ij(t.y, e.y) ** 2) >= 3);
                    if (!r && !n)
                        return;
                    let {point: s} = i
                      , {timestamp: o} = J;
                    this.history.push({
                        ...s,
                        timestamp: o
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    r || (a && a(this.lastMoveEvent, i),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, i)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iD(e, this.transformPagePoint),
                    K.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: r, resumeAnimation: n} = this.handlers;
                    if (this.dragSnapToOrigin && n && n(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iO("pointercancel" === t.type ? this.lastMoveEventInfo : iD(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    r && r(t, s)
                }
                ,
                !D(t))
                    return;
                this.dragSnapToOrigin = n,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = r || window;
                let s = iD(iE(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = J;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iO(s, this.history)),
                this.removeListeners = ez(iM(this.contextWindow, "pointermove", this.handlePointerMove), iM(this.contextWindow, "pointerup", this.handlePointerUp), iM(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                Z(this.updatePoint)
            }
        }
        function iD(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iR(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iO({point: t}, e) {
            return {
                point: t,
                delta: iR(t, iL(e)),
                offset: iR(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , r = null
                      , n = iL(t);
                    for (; i >= 0 && (r = t[i],
                    !(n.timestamp - r.timestamp > z(.1))); )
                        i--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = U(n.timestamp - r.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (n.x - r.x) / s,
                        y: (n.y - r.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iL(t) {
            return t[t.length - 1]
        }
        function iF(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function iB(t) {
            return t.max - t.min
        }
        function iI(t, e, i, r=.5) {
            t.origin = r,
            t.originPoint = ej(e.min, e.max, t.origin),
            t.scale = iB(i) / iB(e),
            t.translate = ej(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iz(t, e, i, r) {
            iI(t.x, e.x, i.x, r ? r.originX : void 0),
            iI(t.y, e.y, i.y, r ? r.originY : void 0)
        }
        function iU(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iB(e)
        }
        function i_(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iB(e)
        }
        function iN(t, e, i) {
            i_(t.x, e.x, i.x),
            i_(t.y, e.y, i.y)
        }
        function i$(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function iW(t, e) {
            let i = e.min - t.min
              , r = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,r] = [r, i]),
            {
                min: i,
                max: r
            }
        }
        function iG(t, e, i) {
            return {
                min: iH(t, e),
                max: iH(t, i)
            }
        }
        function iH(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iY = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iq = () => ({
            x: iY(),
            y: iY()
        })
          , iX = () => ({
            min: 0,
            max: 0
        })
          , iK = () => ({
            x: iX(),
            y: iX()
        });
        function iZ(t) {
            return [t("x"), t("y")]
        }
        function iJ({top: t, left: e, right: i, bottom: r}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: r
                }
            }
        }
        function iQ(t) {
            return void 0 === t || 1 === t
        }
        function i0({scale: t, scaleX: e, scaleY: i}) {
            return !iQ(t) || !iQ(e) || !iQ(i)
        }
        function i1(t) {
            return i0(t) || i2(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function i2(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function i3(t, e, i, r, n) {
            return void 0 !== n && (t = r + n * (t - r)),
            r + i * (t - r) + e
        }
        function i5(t, e=0, i=1, r, n) {
            t.min = i3(t.min, e, i, r, n),
            t.max = i3(t.max, e, i, r, n)
        }
        function i4(t, {x: e, y: i}) {
            i5(t.x, e.translate, e.scale, e.originPoint),
            i5(t.y, i.translate, i.scale, i.originPoint)
        }
        function i6(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function i8(t, e, i, r, n=.5) {
            let s = ej(t.min, t.max, n);
            i5(t, e, i, s, r)
        }
        function i9(t, e) {
            i8(t.x, e.x, e.scaleX, e.scale, e.originX),
            i8(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function i7(t, e) {
            return iJ(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let rt = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , re = new WeakMap;
        class ri {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iK(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: r} = this.getProps();
                this.panSession = new iV(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(iE(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: r, onDragStart: n} = this.getProps();
                        if (i && !r && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === i || "y" === i ? C[i] ? null : (C[i] = !0,
                        () => {
                            C[i] = !1
                        }
                        ) : C.x || C.y ? null : (C.x = C.y = !0,
                        () => {
                            C.x = C.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iZ(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (t_.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let r = i.layout.layoutBox[t];
                                    if (r) {
                                        let t = iB(r);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        n && K.postRender( () => n(t, e)),
                        th(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: r, onDirectionLock: n, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && n && n(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => iZ(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: r,
                    contextWindow: rt(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: r} = e;
                this.startAnimation(r);
                let {onDragEnd: n} = this.getProps();
                n && K.postRender( () => n(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: r} = this.getProps();
                if (!i || !rr(t, r, this.currentDirection))
                    return;
                let n = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, r) {
                    return void 0 !== e && t < e ? t = r ? ej(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? ej(i, t, r.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                n.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , n = this.constraints;
                e && iF(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = function(t, {top: e, left: i, bottom: r, right: n}) {
                    return {
                        x: i$(t.x, i, n),
                        y: i$(t.y, e, r)
                    }
                }(r.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iG(t, "left", "right"),
                        y: iG(t, "top", "bottom")
                    }
                }(i),
                n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && iZ(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(r.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !iF(e))
                    return !1;
                let r = e.current;
                _(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: n} = this.visualElement;
                if (!n || !n.layout)
                    return !1;
                let s = function(t, e, i) {
                    let r = i7(t, i)
                      , {scroll: n} = e;
                    return n && (i6(r.x, n.offset.x),
                    i6(r.y, n.offset.y)),
                    r
                }(r, n.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: iW((t = n.layout.layoutBox).x, s.x),
                    y: iW(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iJ(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: r, dragTransition: n, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iZ(o => {
                    if (!rr(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...n,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return th(this.visualElement, t),
                i.start(ic(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                iZ(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iZ(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iZ(e => {
                    let {drag: i} = this.getProps();
                    if (!rr(e, i, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , n = this.getAxisMotionValue(e);
                    if (r && r.layout) {
                        let {min: i, max: s} = r.layout.layoutBox[e];
                        n.set(t[e] - ej(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!iF(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                iZ(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        r[t] = function(t, e) {
                            let i = .5
                              , r = iB(t)
                              , n = iB(e);
                            return n > r ? i = T(e.min, e.max - r, t.min) : r > n && (i = T(t.min, t.max - n, e.min)),
                            tk(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: n} = this.visualElement.getProps();
                this.visualElement.current.style.transform = n ? n({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iZ(e => {
                    if (!rr(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: n, max: s} = this.constraints[e];
                    i.set(ej(n, s, r[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                re.set(this.visualElement, this);
                let t = iM(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    iF(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , r = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                K.read(e);
                let n = ik(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (iZ(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    n(),
                    t(),
                    r(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: r=!1, dragConstraints: n=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: r,
                    dragConstraints: n,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function rr(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class rn extends iP {
            constructor(t) {
                super(t),
                this.removeGroupControls = _,
                this.removeListeners = _,
                this.controls = new ri(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || _
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let rs = t => (e, i) => {
            t && K.postRender( () => t(e, i))
        }
        ;
        class ro extends iP {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = _
            }
            onPointerDown(t) {
                this.session = new iV(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: rt(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: r} = this.node.getProps();
                return {
                    onSessionStart: rs(t),
                    onStart: rs(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        r && K.postRender( () => r(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iM(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var ra, rl, ru, rh = i(7437), rd = i(2265), rc = i(9637), rp = i(8881);
        let rm = (0,
        rd.createContext)({})
          , rf = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function rg(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let rv = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tN.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = rg(t, e.target.x)
                  , r = rg(t, e.target.y);
                return `${i}% ${r}%`
            }
        }
          , ry = {}
          , {schedule: rb, cancel: rx} = X(queueMicrotask, !1);
        class rw extends rd.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: r} = this.props
                  , {projection: n} = t;
                Object.assign(ry, rS),
                n && (e.group && e.group.add(n),
                i && i.register && r && i.register(n),
                n.root.didUpdate(),
                n.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                n.setOptions({
                    ...n.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                rf.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: r, isPresent: n} = this.props
                  , s = i.projection;
                return s && (s.isPresent = n,
                r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === n || (n ? s.promote() : s.relegate() || K.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                rb.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: r} = t;
                r && (r.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(r),
                i && i.deregister && i.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function rP(t) {
            let[e,i] = (0,
            rc.oO)()
              , r = (0,
            rd.useContext)(rp.p);
            return (0,
            rh.jsx)(rw, {
                ...t,
                layoutGroup: r,
                switchLayoutGroup: (0,
                rd.useContext)(rm),
                isPresent: e,
                safeToRemove: i
            })
        }
        let rS = {
            borderRadius: {
                ...rv,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: rv,
            borderTopRightRadius: rv,
            borderBottomLeftRadius: rv,
            borderBottomRightRadius: rv,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let r = t2.parse(t);
                    if (r.length > 5)
                        return t;
                    let n = t2.createTransformer(t)
                      , s = "number" != typeof r[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    r[0 + s] /= o,
                    r[1 + s] /= a;
                    let l = ej(o, a, .5);
                    return "number" == typeof r[2 + s] && (r[2 + s] /= l),
                    "number" == typeof r[3 + s] && (r[3 + s] /= l),
                    n(r)
                }
            }
        }
          , rT = (t, e) => t.depth - e.depth;
        class rA {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                ti(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                tr(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(rT),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function rk(t) {
            let e = tu(t) ? t.get() : t;
            return G(e) ? e.toValue() : e
        }
        let rE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , rC = rE.length
          , rM = t => "string" == typeof t ? parseFloat(t) : t
          , rj = t => "number" == typeof t || tN.test(t);
        function rV(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let rD = rO(0, .5, tS)
          , rR = rO(.5, .95, _);
        function rO(t, e, i) {
            return r => r < t ? 0 : r > e ? 1 : i(T(t, e, r))
        }
        function rL(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function rF(t, e) {
            rL(t.x, e.x),
            rL(t.y, e.y)
        }
        function rB(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function rI(t, e, i, r, n) {
            return t -= e,
            t = r + 1 / i * (t - r),
            void 0 !== n && (t = r + 1 / n * (t - r)),
            t
        }
        function rz(t, e, [i,r,n], s, o) {
            !function(t, e=0, i=1, r=.5, n, s=t, o=t) {
                if (t_.test(e) && (e = parseFloat(e),
                e = ej(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = ej(s.min, s.max, r);
                t === s && (a -= e),
                t.min = rI(t.min, e, i, a, n),
                t.max = rI(t.max, e, i, a, n)
            }(t, e[i], e[r], e[n], e.scale, s, o)
        }
        let rU = ["x", "scaleX", "originX"]
          , r_ = ["y", "scaleY", "originY"];
        function rN(t, e, i, r) {
            rz(t.x, e, rU, i ? i.x : void 0, r ? r.x : void 0),
            rz(t.y, e, r_, i ? i.y : void 0, r ? r.y : void 0)
        }
        function r$(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function rW(t) {
            return r$(t.x) && r$(t.y)
        }
        function rG(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function rH(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function rY(t, e) {
            return rH(t.x, e.x) && rH(t.y, e.y)
        }
        function rq(t) {
            return iB(t.x) / iB(t.y)
        }
        function rX(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class rK {
            constructor() {
                this.members = []
            }
            add(t) {
                ti(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (tr(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: r} = t.options;
                    !1 === r && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let rZ = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        }
          , rJ = "undefined" != typeof window && void 0 !== window.MotionDebug
          , rQ = ["", "X", "Y", "Z"]
          , r0 = {
            visibility: "hidden"
        }
          , r1 = 0;
        function r2(t, e, i, r) {
            let {latestValues: n} = e;
            n[t] && (i[t] = n[t],
            e.setStaticValue(t, 0),
            r && (r[t] = 0))
        }
        function r3({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: r, resetTransform: n}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = r1++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        rJ && (rZ.totalNodes = rZ.resolvedTargetDeltas = rZ.recalculatedProjection = 0),
                        this.nodes.forEach(r6),
                        this.nodes.forEach(nr),
                        this.nodes.forEach(nn),
                        this.nodes.forEach(r8),
                        rJ && window.MotionDebug.record(rZ)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new rA)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tn),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: r, layout: n, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (n || r) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let r = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = te.now()
                                  , r = ({timestamp: e}) => {
                                    let n = e - i;
                                    n >= 250 && (Z(r),
                                    t(n - 250))
                                }
                                ;
                                return K.read(r, !0),
                                () => Z(r)
                            }(r, 0),
                            rf.hasAnimatedSinceResize && (rf.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(ni))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && s && (r || n) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: r}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let n = this.options.transition || s.getDefaultTransition() || nh
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !rY(this.targetLayout, r) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...v(n, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || ni(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    Z(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(ns),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let r = i.props[tc];
                        if (window.MotionHasOptimisedAnimation(r, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(r, "transform", K, !(t || i))
                        }
                        let {parent: n} = e;
                        n && !n.hasCheckedOptimisedAppear && t(n)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(r7);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(nt),
                    this.isUpdating = !1,
                    this.nodes.forEach(ne),
                    this.nodes.forEach(r5),
                    this.nodes.forEach(r4),
                    this.clearAllSnapshots();
                    let t = te.now();
                    J.delta = tk(0, 1e3 / 60, t - J.timestamp),
                    J.timestamp = t,
                    J.isProcessing = !0,
                    Q.update.process(J),
                    Q.preRender.process(J),
                    Q.render.process(J),
                    J.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    rb.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(r9),
                    this.sharedNodes.forEach(no)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    K.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    K.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iK(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = r(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!n)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !rW(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , r = i ? i(this.latestValues, "") : void 0
                      , s = r !== this.prevTransformTemplateValue;
                    t && (e || i1(this.latestValues) || s) && (n(this.instance, r),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , r = this.removeElementScroll(i);
                    return t && (r = this.removeTransform(r)),
                    np((e = r).x),
                    np(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return iK();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(nf))) {
                        let {scroll: t} = this.root;
                        t && (i6(i.x, t.offset.x),
                        i6(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = iK();
                    if (rF(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let r = this.path[e]
                          , {scroll: n, options: s} = r;
                        r !== this.root && n && s.layoutScroll && (n.wasRoot && rF(i, t),
                        i6(i.x, n.offset.x),
                        i6(i.y, n.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = iK();
                    rF(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        !e && r.options.layoutScroll && r.scroll && r !== r.root && i9(i, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        i1(r.latestValues) && i9(i, r.latestValues)
                    }
                    return i1(this.latestValues) && i9(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iK();
                    rF(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !i1(i.latestValues))
                            continue;
                        i0(i.latestValues) && i.updateSnapshot();
                        let r = iK();
                        rF(r, i.measurePageBox()),
                        rN(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                    }
                    return i1(this.latestValues) && rN(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== J.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, r, n;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = J.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iK(),
                            this.relativeTargetOrigin = iK(),
                            iN(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            rF(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iK(),
                            this.targetWithTransforms = iK()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            r = this.relativeTarget,
                            n = this.relativeParent.target,
                            iU(i.x, r.x, n.x),
                            iU(i.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rF(this.target, this.layout.layoutBox),
                            i4(this.target, this.targetDelta)) : rF(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iK(),
                                this.relativeTargetOrigin = iK(),
                                iN(this.relativeTargetOrigin, this.target, t.target),
                                rF(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            rJ && rZ.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || i0(this.parent.latestValues) || i2(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , r = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                    this.resolvedRelativeTargetAt === J.timestamp && (r = !1),
                    r)
                        return;
                    let {layout: n, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(n || s))
                        return;
                    rF(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, r=!1) {
                        let n, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (n = i[a]).projectionDelta;
                                let {visualElement: o} = n.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && i9(t, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                i4(t, s)),
                                r && i1(n.latestValues) && i9(t, n.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iK());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (rB(this.prevProjectionDelta.x, this.projectionDelta.x),
                    rB(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iz(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && rX(this.projectionDelta.x, this.prevProjectionDelta.x) && rX(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    rJ && rZ.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iq(),
                    this.projectionDelta = iq(),
                    this.projectionDeltaWithTransform = iq()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let r = this.snapshot
                      , n = r ? r.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iq();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iK()
                      , l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(nu));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let r = e / 1e3;
                        if (na(o.x, t.x, r),
                        na(o.y, t.y, r),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, m;
                            iN(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            nl(p.x, m.x, a.x, r),
                            nl(p.y, m.y, a.y, r),
                            i && (u = this.relativeTarget,
                            c = i,
                            rG(u.x, c.x) && rG(u.y, c.y)) && (this.isProjectionDirty = !1),
                            i || (i = iK()),
                            rF(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, r, n, s) {
                            n ? (t.opacity = ej(0, void 0 !== i.opacity ? i.opacity : 1, rD(r)),
                            t.opacityExit = ej(void 0 !== e.opacity ? e.opacity : 1, 0, rR(r))) : s && (t.opacity = ej(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                            for (let n = 0; n < rC; n++) {
                                let s = `border${rE[n]}Radius`
                                  , o = rV(e, s)
                                  , a = rV(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || rj(o) === rj(a) ? (t[s] = Math.max(ej(rM(o), rM(a), r), 0),
                                (t_.test(a) || t_.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = ej(e.rotate || 0, i.rotate || 0, r))
                        }(s, n, this.latestValues, r, d, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = r
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (Z(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = K.update( () => {
                        rf.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let r = tu(0) ? 0 : tl(0);
                            return r.start(ic("", r, 1e3, i)),
                            r.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: r, latestValues: n} = t;
                    if (e && i && r) {
                        if (this !== t && this.layout && r && nm(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            i = this.target || iK();
                            let e = iB(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let r = iB(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + r
                        }
                        rF(e, i),
                        i9(e, n),
                        iz(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new rK),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let r = this.getStack();
                    r && r.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let r = {};
                    i.z && r2("z", t, r, this.animationValues);
                    for (let e = 0; e < rQ.length; e++)
                        r2(`rotate${rQ[e]}`, t, r, this.animationValues),
                        r2(`skew${rQ[e]}`, t, r, this.animationValues);
                    for (let e in t.render(),
                    r)
                        t.setStaticValue(e, r[e]),
                        this.animationValues && (this.animationValues[e] = r[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return r0;
                    let r = {
                        visibility: ""
                    }
                      , n = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = rk(null == t ? void 0 : t.pointerEvents) || "",
                        r.transform = n ? n(this.latestValues, "") : "none",
                        r;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = rk(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !i1(this.latestValues) && (e.transform = n ? n({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = function(t, e, i) {
                        let r = ""
                          , n = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((n || s || o) && (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: n, rotateY: s, skewX: o, skewY: a} = i;
                            t && (r = `perspective(${t}px) ${r}`),
                            e && (r += `rotate(${e}deg) `),
                            n && (r += `rotateX(${n}deg) `),
                            s && (r += `rotateY(${s}deg) `),
                            o && (r += `skewX(${o}deg) `),
                            a && (r += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                        r || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    n && (r.transform = n(o, r.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? r.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    ry) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i} = ry[t]
                          , n = "none" === r.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                r[i[e]] = n
                        } else
                            r[t] = n
                    }
                    return this.options.layoutId && (r.pointerEvents = s === this ? rk(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(r7),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function r5(t) {
            t.updateLayout()
        }
        function r4(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: r} = t.layout
                  , {animationType: n} = t.options
                  , s = i.source !== t.layout.source;
                "size" === n ? iZ(t => {
                    let r = s ? i.measuredBox[t] : i.layoutBox[t]
                      , n = iB(r);
                    r.min = e[t].min,
                    r.max = r.min + n
                }
                ) : nm(n, i.layoutBox, e) && iZ(r => {
                    let n = s ? i.measuredBox[r] : i.layoutBox[r]
                      , o = iB(e[r]);
                    n.max = n.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                }
                );
                let o = iq();
                iz(o, e, i.layoutBox);
                let a = iq();
                s ? iz(a, t.applyTransform(r, !0), i.measuredBox) : iz(a, e, i.layoutBox);
                let l = !rW(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let r = t.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: n, layout: s} = r;
                        if (n && s) {
                            let o = iK();
                            iN(o, i.layoutBox, n.layoutBox);
                            let a = iK();
                            iN(a, e, s.layoutBox),
                            rY(o, a) || (u = !0),
                            r.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = r)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function r6(t) {
            rJ && rZ.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function r8(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function r9(t) {
            t.clearSnapshot()
        }
        function r7(t) {
            t.clearMeasurements()
        }
        function nt(t) {
            t.isLayoutDirty = !1
        }
        function ne(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function ni(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function nr(t) {
            t.resolveTargetDelta()
        }
        function nn(t) {
            t.calcProjection()
        }
        function ns(t) {
            t.resetSkewAndRotation()
        }
        function no(t) {
            t.removeLeadSnapshot()
        }
        function na(t, e, i) {
            t.translate = ej(e.translate, 0, i),
            t.scale = ej(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function nl(t, e, i, r) {
            t.min = ej(e.min, i.min, r),
            t.max = ej(e.max, i.max, r)
        }
        function nu(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let nh = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , nd = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , nc = nd("applewebkit/") && !nd("chrome/") ? Math.round : _;
        function np(t) {
            t.min = nc(t.min),
            t.max = nc(t.max)
        }
        function nm(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(rq(e) - rq(i)))
        }
        function nf(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let ng = r3({
            attachResizeListener: (t, e) => ik(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , nv = {
            current: void 0
        }
          , ny = r3({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!nv.current) {
                    let t = new ng({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    nv.current = t
                }
                return nv.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function nb(t, e, i) {
            let {props: r} = t;
            t.animationState && r.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let n = r["onHover" + i];
            n && K.postRender( () => n(e, iE(e)))
        }
        class nx extends iP {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[r,n,s] = M(t, i)
                      , o = j(t => {
                        let {target: i} = t
                          , r = e(t);
                        if ("function" != typeof r || !i)
                            return;
                        let s = j(t => {
                            r(t),
                            i.removeEventListener("pointerleave", s)
                        }
                        );
                        i.addEventListener("pointerleave", s, n)
                    }
                    );
                    return r.forEach(t => {
                        t.addEventListener("pointerenter", o, n)
                    }
                    ),
                    s
                }(t, t => (nb(this.node, t, "Start"),
                t => nb(this.node, t, "End"))))
            }
            unmount() {}
        }
        class nw extends iP {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = ez(ik(this.node.current, "focus", () => this.onFocus()), ik(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        function nP(t, e, i) {
            let {props: r} = t;
            t.animationState && r.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let n = r["onTap" + ("End" === i ? "" : i)];
            n && K.postRender( () => n(e, iE(e)))
        }
        class nS extends iP {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[r,n,s] = M(t, i)
                      , o = t => {
                        let r = t.currentTarget;
                        if (!I(t) || O.has(r))
                            return;
                        O.add(r);
                        let s = e(t)
                          , o = (t, e) => {
                            window.removeEventListener("pointerup", a),
                            window.removeEventListener("pointercancel", l),
                            I(t) && O.has(r) && (O.delete(r),
                            "function" == typeof s && s(t, {
                                success: e
                            }))
                        }
                          , a = t => {
                            o(t, i.useGlobalTarget || V(r, t.target))
                        }
                          , l = t => {
                            o(t, !1)
                        }
                        ;
                        window.addEventListener("pointerup", a, n),
                        window.addEventListener("pointercancel", l, n)
                    }
                    ;
                    return r.forEach(t => {
                        R.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0),
                        (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n),
                        t.addEventListener("focus", t => B(t, n), n)
                    }
                    ),
                    s
                }(t, t => (nP(this.node, t, "Start"),
                (t, {success: e}) => nP(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let nT = new WeakMap
          , nA = new WeakMap
          , nk = t => {
            let e = nT.get(t.target);
            e && e(t)
        }
          , nE = t => {
            t.forEach(nk)
        }
          , nC = {
            some: 0,
            all: 1
        };
        class nM extends iP {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: r="some", once: n} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof r ? r : nC[r]
                };
                return function(t, e, i) {
                    let r = function({root: t, ...e}) {
                        let i = t || document;
                        nA.has(i) || nA.set(i, {});
                        let r = nA.get(i)
                          , n = JSON.stringify(e);
                        return r[n] || (r[n] = new IntersectionObserver(nE,{
                            root: t,
                            ...e
                        })),
                        r[n]
                    }(e);
                    return nT.set(t, i),
                    r.observe(t),
                    () => {
                        nT.delete(t),
                        r.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    n && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: r} = this.node.getProps()
                      , s = e ? i : r;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let nj = (0,
        rd.createContext)({
            strict: !1
        });
        var nV = i(5750);
        let nD = (0,
        rd.createContext)({});
        function nR(t) {
            return n(t.animate) || c.some(e => a(t[e]))
        }
        function nO(t) {
            return !!(nR(t) || t.variants)
        }
        function nL(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var nF = i(4563);
        let nB = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , nI = {};
        for (let t in nB)
            nI[t] = {
                isEnabled: e => nB[t].some(t => !!e[t])
            };
        let nz = Symbol.for("motionComponentSymbol");
        var nU = i(4252)
          , n_ = i(1534);
        let nN = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function n$(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (nN.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        var nW = i(3576);
        let nG = t => (e, i) => {
            let r = (0,
            rd.useContext)(nD)
              , s = (0,
            rd.useContext)(nU.O)
              , o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, r, s, o) {
                let a = {
                    latestValues: function(t, e, i, r) {
                        let s = {}
                          , o = r(t, {});
                        for (let t in o)
                            s[t] = rk(o[t]);
                        let {initial: a, animate: l} = t
                          , h = nR(t)
                          , d = nO(t);
                        e && d && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                        void 0 === l && (l = e.animate));
                        let c = !!i && !1 === i.initial
                          , p = (c = c || !1 === a) ? l : a;
                        if (p && "boolean" != typeof p && !n(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let r = u(t, e[i]);
                                if (r) {
                                    let {transitionEnd: t, transition: e, ...i} = r;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(r, s, o, t),
                    renderState: e()
                };
                return i && (a.onMount = t => i({
                    props: r,
                    current: t,
                    ...a
                }),
                a.onUpdate = t => i(t)),
                a
            }
            )(t, e, r, s);
            return i ? o() : (0,
            nW.h)(o)
        }
          , nH = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , nY = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , nq = N.length;
        function nX(t, e, i) {
            let {style: r, vars: n, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if ($.has(t)) {
                    o = !0;
                    continue
                }
                if (ev(t)) {
                    n[t] = i;
                    continue
                }
                {
                    let e = nH(i, t9[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : r[t] = e
                }
            }
            if (!e.transform && (o || i ? r.transform = function(t, e, i) {
                let r = ""
                  , n = !0;
                for (let s = 0; s < nq; s++) {
                    let o = N[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = nH(a, t9[o]);
                        if (!l) {
                            n = !1;
                            let e = nY[o] || o;
                            r += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return r = r.trim(),
                i ? r = i(e, n ? "" : r) : n && (r = "none"),
                r
            }(e, t.transform, i) : r.transform && (r.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                r.transformOrigin = `${t} ${e} ${i}`
            }
        }
        function nK(t, e, i) {
            return "string" == typeof t ? t : tN.transform(e + i * t)
        }
        let nZ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , nJ = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function nQ(t, {attrX: e, attrY: i, attrScale: r, originX: n, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, d) {
            if (nX(t, u, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: c, style: p, dimensions: m} = t;
            c.transform && (m && (p.transform = c.transform),
            delete c.transform),
            m && (void 0 !== n || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let r = nK(e, t.x, t.width)
                  , n = nK(i, t.y, t.height);
                return `${r} ${n}`
            }(m, void 0 !== n ? n : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== r && (c.scale = r),
            void 0 !== o && function(t, e, i=1, r=0, n=!0) {
                t.pathLength = 1;
                let s = n ? nZ : nJ;
                t[s.offset] = tN.transform(-r);
                let o = tN.transform(e)
                  , a = tN.transform(i);
                t[s.array] = `${o} ${a}`
            }(c, o, a, l, !1)
        }
        let n0 = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        })
          , n1 = () => ({
            ...n0(),
            attrs: {}
        })
          , n2 = t => "string" == typeof t && "svg" === t.toLowerCase();
        function n3(t, {style: e, vars: i}, r, n) {
            for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(r)),
            i)
                t.style.setProperty(s, i[s])
        }
        let n5 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function n4(t, e, i, r) {
            for (let i in n3(t, e, void 0, r),
            e.attrs)
                t.setAttribute(n5.has(i) ? i : td(i), e.attrs[i])
        }
        function n6(t, {layout: e, layoutId: i}) {
            return $.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ry[t] || "opacity" === t)
        }
        function n8(t, e, i) {
            var r;
            let {style: n} = t
              , s = {};
            for (let o in n)
                (tu(n[o]) || e.style && tu(e.style[o]) || n6(o, t) || (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r ? void 0 : r.liveStyle) !== void 0) && (s[o] = n[o]);
            return s
        }
        function n9(t, e, i) {
            let r = n8(t, e, i);
            for (let i in t)
                (tu(t[i]) || tu(e[i])) && (r[-1 !== N.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return r
        }
        let n7 = ["x", "y", "width", "height", "cx", "cy", "r"]
          , st = {
            useVisualState: nG({
                scrapeMotionValuesFromProps: n9,
                createRenderState: n1,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: r, latestValues: n}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in n)
                            if ($.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < n7.length; i++) {
                            let r = n7[i];
                            t[r] !== e[r] && (o = !0)
                        }
                    o && (K.read( () => (function(t, e) {
                        try {
                            e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                        } catch (t) {
                            e.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    )(i, r)),
                    K.render( () => {
                        nQ(r, n, n2(i.tagName), t.transformTemplate),
                        n4(i, r)
                    }
                    ))
                }
            })
        }
          , se = {
            useVisualState: nG({
                scrapeMotionValuesFromProps: n8,
                createRenderState: n0
            })
        };
        function si(t, e, i) {
            for (let r in e)
                tu(e[r]) || n6(r, i) || (t[r] = e[r])
        }
        let sr = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function sn(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || sr.has(t)
        }
        let ss = t => !sn(t);
        try {
            (ra = require("@emotion/is-prop-valid").default) && (ss = t => t.startsWith("on") ? !sn(t) : ra(t))
        } catch (t) {}
        let so = {
            current: null
        }
          , sa = {
            current: !1
        }
          , sl = [...eS, tY, t2]
          , su = t => sl.find(eP(t))
          , sh = new WeakMap
          , sd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sc {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: r, blockInitialAnimation: n, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = em,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = te.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    K.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = o,
                this.blockInitialAnimation = !!n,
                this.isControllingVariants = nR(e),
                this.isVariantNode = nO(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && tu(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                sh.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                sa.current || function() {
                    if (sa.current = !0,
                    nF.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => so.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            so.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || so.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in sh.delete(this.current),
                this.projection && this.projection.unmount(),
                Z(this.notifyUpdate),
                Z(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let r = $.has(t)
                  , n = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && K.preRender(this.notifyUpdate),
                    r && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    n(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in nI) {
                    let e = nI[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: r} = e;
                    if (!this.features[t] && r && i(this.props) && (this.features[t] = new r(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iK()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < sd.length; e++) {
                    let i = sd[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let r = t["on" + i];
                    r && (this.propEventSubscriptions[i] = this.on(i, r))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let r in e) {
                        let n = e[r]
                          , s = i[r];
                        if (tu(n))
                            t.addValue(r, n);
                        else if (tu(s))
                            t.addValue(r, tl(n, {
                                owner: t
                            }));
                        else if (s !== n) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, tl(void 0 !== e ? e : n, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let r in i)
                        void 0 === e[r] && t.removeValue(r);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = tl(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let r = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != r && ("string" == typeof r && (ef(r) || tA(r)) ? r = parseFloat(r) : !su(r) && t2.test(e) && (r = ee(t, e)),
                this.setBaseTarget(t, tu(r) ? r.get() : r)),
                tu(r) ? r.get() : r
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: r} = this.props;
                if ("string" == typeof r || "object" == typeof r) {
                    let n = u(this.props, r, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    n && (i = n[t])
                }
                if (r && void 0 !== i)
                    return i;
                let n = this.getBaseTargetFromProps(this.props, t);
                return void 0 === n || tu(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new tn),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sp extends sc {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eA
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                tu(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sm extends sp {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = n3
            }
            readValueFromInstance(t, e) {
                if ($.has(e)) {
                    let t = et(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , r = (ev(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return i7(t, e)
            }
            build(t, e, i) {
                nX(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return n8(t, e, i)
            }
        }
        class sf extends sp {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = iK
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if ($.has(e)) {
                    let t = et(e);
                    return t && t.default || 0
                }
                return e = n5.has(e) ? e : td(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return n9(t, e, i)
            }
            build(t, e, i) {
                nQ(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, r) {
                n4(t, e, i, r)
            }
            mount(t) {
                this.isSVGTag = n2(t.tagName),
                super.mount(t)
            }
        }
        let sg = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, r) => "create" === r ? t : (e.has(r) || e.set(r, t(r)),
                e.get(r))
            })
        }((rl = {
            animation: {
                Feature: iS
            },
            exit: {
                Feature: iA
            },
            inView: {
                Feature: nM
            },
            tap: {
                Feature: nS
            },
            focus: {
                Feature: nw
            },
            hover: {
                Feature: nx
            },
            pan: {
                Feature: ro
            },
            drag: {
                Feature: rn,
                ProjectionNode: ny,
                MeasureLayout: rP
            },
            layout: {
                ProjectionNode: ny,
                MeasureLayout: rP
            }
        },
        ru = (t, e) => n$(t) ? new sf(e) : new sm(e,{
            allowProjection: t !== rd.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: r, createVisualElement: n, useRender: s, useVisualState: o, Component: l} = t;
                function u(t, e) {
                    var i;
                    let r;
                    let u = {
                        ...(0,
                        rd.useContext)(nV._),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            rd.useContext)(rp.p).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: h} = u
                      , d = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (nR(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || a(e) ? e : void 0,
                                    animate: a(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        rd.useContext)(nD));
                        return (0,
                        rd.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [nL(e), nL(i)])
                    }(t)
                      , c = o(t, h);
                    if (!h && nF.j) {
                        (0,
                        rd.useContext)(nj).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = nI;
                            if (!e && !i)
                                return {};
                            let r = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? r.MeasureLayout : void 0,
                                ProjectionNode: r.ProjectionNode
                            }
                        }(u);
                        r = t.MeasureLayout,
                        d.visualElement = function(t, e, i, r, n) {
                            var s, o;
                            let {visualElement: a} = (0,
                            rd.useContext)(nD)
                              , l = (0,
                            rd.useContext)(nj)
                              , u = (0,
                            rd.useContext)(nU.O)
                              , h = (0,
                            rd.useContext)(nV._).reducedMotion
                              , d = (0,
                            rd.useRef)(null);
                            r = r || l.renderer,
                            !d.current && r && (d.current = r(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let c = d.current
                              , p = (0,
                            rd.useContext)(rm);
                            c && !c.projection && n && ("html" === c.type || "svg" === c.type) && function(t, e, i, r) {
                                let {layoutId: n, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: n,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && iF(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: r,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(d.current, i, n, p);
                            let m = (0,
                            rd.useRef)(!1);
                            (0,
                            rd.useInsertionEffect)( () => {
                                c && m.current && c.update(i, u)
                            }
                            );
                            let f = i[tc]
                              , g = (0,
                            rd.useRef)(!!f && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, f)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, f)));
                            return (0,
                            n_.L)( () => {
                                c && (m.current = !0,
                                window.MotionIsMounted = !0,
                                c.updateFeatures(),
                                rb.render(c.render),
                                g.current && c.animationState && c.animationState.animateChanges())
                            }
                            ),
                            (0,
                            rd.useEffect)( () => {
                                c && (!g.current && c.animationState && c.animationState.animateChanges(),
                                g.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
                                }
                                ),
                                g.current = !1))
                            }
                            ),
                            c
                        }(l, c, u, n, t.ProjectionNode)
                    }
                    return (0,
                    rh.jsxs)(nD.Provider, {
                        value: d,
                        children: [r && d.visualElement ? (0,
                        rh.jsx)(r, {
                            visualElement: d.visualElement,
                            ...u
                        }) : null, s(l, t, (i = d.visualElement,
                        (0,
                        rd.useCallback)(t => {
                            t && c.onMount && c.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : iF(e) && (e.current = t))
                        }
                        , [i])), c, h, d.visualElement)]
                    })
                }
                r && function(t) {
                    for (let e in t)
                        nI[e] = {
                            ...nI[e],
                            ...t[e]
                        }
                }(r),
                u.displayName = "motion.".concat("string" == typeof l ? l : "create(".concat(null !== (i = null !== (e = l.displayName) && void 0 !== e ? e : l.name) && void 0 !== i ? i : "", ")"));
                let h = (0,
                rd.forwardRef)(u);
                return h[nz] = l,
                h
            }({
                ...n$(t) ? st : se,
                preloadedFeatures: rl,
                useRender: function(t=!1) {
                    return (e, i, r, {latestValues: n}, s) => {
                        let o = (n$(e) ? function(t, e, i, r) {
                            let n = (0,
                            rd.useMemo)( () => {
                                let i = n1();
                                return nQ(i, e, n2(r), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                si(e, t.style, t),
                                n.style = {
                                    ...e,
                                    ...n.style
                                }
                            }
                            return n
                        }
                        : function(t, e) {
                            let i = {}
                              , r = function(t, e) {
                                let i = t.style || {}
                                  , r = {};
                                return si(r, i, t),
                                Object.assign(r, function({transformTemplate: t}, e) {
                                    return (0,
                                    rd.useMemo)( () => {
                                        let i = n0();
                                        return nX(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                r
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
                            r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = r,
                            i
                        }
                        )(i, n, s, e)
                          , a = function(t, e, i) {
                            let r = {};
                            for (let n in t)
                                ("values" !== n || "object" != typeof t.values) && (ss(n) || !0 === i && sn(n) || !e && !sn(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
                            return r
                        }(i, "string" == typeof e, t)
                          , l = e !== rd.Fragment ? {
                            ...a,
                            ...o,
                            ref: r
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        rd.useMemo)( () => tu(u) ? u.get() : u, [u]);
                        return (0,
                        rd.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: ru,
                Component: t
            })
        }
        ))
    },
    4563: function(t, e, i) {
        i.d(e, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof window
    },
    3576: function(t, e, i) {
        i.d(e, {
            h: function() {
                return n
            }
        });
        var r = i(2265);
        function n(t) {
            let e = (0,
            r.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    1534: function(t, e, i) {
        i.d(e, {
            L: function() {
                return n
            }
        });
        var r = i(2265);
        let n = i(4563).j ? r.useLayoutEffect : r.useEffect
    },
    6231: function(t, e, i) {
        i.d(e, {
            w_: function() {
                return h
            }
        });
        var r = i(2265)
          , n = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , s = r.createContext && r.createContext(n)
          , o = ["attr", "size", "title"];
        function a() {
            return (a = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var r in i)
                        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function l(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                i.push.apply(i, r)
            }
            return i
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(i), !0).forEach(function(e) {
                    var r, n;
                    r = e,
                    n = i[e],
                    (r = function(t) {
                        var e = function(t, e) {
                            if ("object" != typeof t || !t)
                                return t;
                            var i = t[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var r = i.call(t, e || "default");
                                if ("object" != typeof r)
                                    return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == typeof e ? e : e + ""
                    }(r))in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                })
            }
            return t
        }
        function h(t) {
            return e => r.createElement(d, a({
                attr: u({}, t.attr)
            }, e), function t(e) {
                return e && e.map( (e, i) => r.createElement(e.tag, u({
                    key: i
                }, e.attr), t(e.child)))
            }(t.child))
        }
        function d(t) {
            var e = e => {
                var i, {attr: n, size: s, title: l} = t, h = function(t, e) {
                    if (null == t)
                        return {};
                    var i, r, n = function(t, e) {
                        if (null == t)
                            return {};
                        var i = {};
                        for (var r in t)
                            if (Object.prototype.hasOwnProperty.call(t, r)) {
                                if (e.indexOf(r) >= 0)
                                    continue;
                                i[r] = t[r]
                            }
                        return i
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        for (r = 0; r < s.length; r++)
                            i = s[r],
                            !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
                    }
                    return n
                }(t, o), d = s || e.size || "1em";
                return e.className && (i = e.className),
                t.className && (i = (i ? i + " " : "") + t.className),
                r.createElement("svg", a({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, e.attr, n, h, {
                    className: i,
                    style: u(u({
                        color: t.color || e.color
                    }, e.style), t.style),
                    height: d,
                    width: d,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && r.createElement("title", null, l), t.children)
            }
            ;
            return void 0 !== s ? r.createElement(s.Consumer, null, t => e(t)) : e(n)
        }
    },
    3335: function(t, e, i) {
        i.d(e, {
            m6: function() {
                return X
            }
        });
        let r = t => {
            let e = a(t)
              , {conflictingClassGroups: i, conflictingClassGroupModifiers: r} = t;
            return {
                getClassGroupId: t => {
                    let i = t.split("-");
                    return "" === i[0] && 1 !== i.length && i.shift(),
                    n(i, e) || o(t)
                }
                ,
                getConflictingClassGroupIds: (t, e) => {
                    let n = i[t] || [];
                    return e && r[t] ? [...n, ...r[t]] : n
                }
            }
        }
          , n = (t, e) => {
            if (0 === t.length)
                return e.classGroupId;
            let i = t[0]
              , r = e.nextPart.get(i)
              , s = r ? n(t.slice(1), r) : void 0;
            if (s)
                return s;
            if (0 === e.validators.length)
                return;
            let o = t.join("-");
            return e.validators.find( ({validator: t}) => t(o))?.classGroupId
        }
          , s = /^\[(.+)\]$/
          , o = t => {
            if (s.test(t)) {
                let e = s.exec(t)[1]
                  , i = e?.substring(0, e.indexOf(":"));
                if (i)
                    return "arbitrary.." + i
            }
        }
          , a = t => {
            let {theme: e, prefix: i} = t
              , r = {
                nextPart: new Map,
                validators: []
            };
            return d(Object.entries(t.classGroups), i).forEach( ([t,i]) => {
                l(i, r, t, e)
            }
            ),
            r
        }
          , l = (t, e, i, r) => {
            t.forEach(t => {
                if ("string" == typeof t) {
                    ("" === t ? e : u(e, t)).classGroupId = i;
                    return
                }
                if ("function" == typeof t) {
                    if (h(t)) {
                        l(t(r), e, i, r);
                        return
                    }
                    e.validators.push({
                        validator: t,
                        classGroupId: i
                    });
                    return
                }
                Object.entries(t).forEach( ([t,n]) => {
                    l(n, u(e, t), i, r)
                }
                )
            }
            )
        }
          , u = (t, e) => {
            let i = t;
            return e.split("-").forEach(t => {
                i.nextPart.has(t) || i.nextPart.set(t, {
                    nextPart: new Map,
                    validators: []
                }),
                i = i.nextPart.get(t)
            }
            ),
            i
        }
          , h = t => t.isThemeGetter
          , d = (t, e) => e ? t.map( ([t,i]) => [t, i.map(t => "string" == typeof t ? e + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map( ([t,i]) => [e + t, i])) : t)]) : t
          , c = t => {
            if (t < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let e = 0
              , i = new Map
              , r = new Map
              , n = (n, s) => {
                i.set(n, s),
                ++e > t && (e = 0,
                r = i,
                i = new Map)
            }
            ;
            return {
                get(t) {
                    let e = i.get(t);
                    return void 0 !== e ? e : void 0 !== (e = r.get(t)) ? (n(t, e),
                    e) : void 0
                },
                set(t, e) {
                    i.has(t) ? i.set(t, e) : n(t, e)
                }
            }
        }
          , p = t => {
            let {separator: e, experimentalParseClassName: i} = t
              , r = 1 === e.length
              , n = e[0]
              , s = e.length
              , o = t => {
                let i;
                let o = []
                  , a = 0
                  , l = 0;
                for (let u = 0; u < t.length; u++) {
                    let h = t[u];
                    if (0 === a) {
                        if (h === n && (r || t.slice(u, u + s) === e)) {
                            o.push(t.slice(l, u)),
                            l = u + s;
                            continue
                        }
                        if ("/" === h) {
                            i = u;
                            continue
                        }
                    }
                    "[" === h ? a++ : "]" === h && a--
                }
                let u = 0 === o.length ? t : t.substring(l)
                  , h = u.startsWith("!")
                  , d = h ? u.substring(1) : u;
                return {
                    modifiers: o,
                    hasImportantModifier: h,
                    baseClassName: d,
                    maybePostfixModifierPosition: i && i > l ? i - l : void 0
                }
            }
            ;
            return i ? t => i({
                className: t,
                parseClassName: o
            }) : o
        }
          , m = t => {
            if (t.length <= 1)
                return t;
            let e = []
              , i = [];
            return t.forEach(t => {
                "[" === t[0] ? (e.push(...i.sort(), t),
                i = []) : i.push(t)
            }
            ),
            e.push(...i.sort()),
            e
        }
          , f = t => ({
            cache: c(t.cacheSize),
            parseClassName: p(t),
            ...r(t)
        })
          , g = /\s+/
          , v = (t, e) => {
            let {parseClassName: i, getClassGroupId: r, getConflictingClassGroupIds: n} = e
              , s = []
              , o = t.trim().split(g)
              , a = "";
            for (let t = o.length - 1; t >= 0; t -= 1) {
                let e = o[t]
                  , {modifiers: l, hasImportantModifier: u, baseClassName: h, maybePostfixModifierPosition: d} = i(e)
                  , c = !!d
                  , p = r(c ? h.substring(0, d) : h);
                if (!p) {
                    if (!c || !(p = r(h))) {
                        a = e + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    c = !1
                }
                let f = m(l).join(":")
                  , g = u ? f + "!" : f
                  , v = g + p;
                if (s.includes(v))
                    continue;
                s.push(v);
                let y = n(p, c);
                for (let t = 0; t < y.length; ++t) {
                    let e = y[t];
                    s.push(g + e)
                }
                a = e + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        ;
        function y() {
            let t, e, i = 0, r = "";
            for (; i < arguments.length; )
                (t = arguments[i++]) && (e = b(t)) && (r && (r += " "),
                r += e);
            return r
        }
        let b = t => {
            let e;
            if ("string" == typeof t)
                return t;
            let i = "";
            for (let r = 0; r < t.length; r++)
                t[r] && (e = b(t[r])) && (i && (i += " "),
                i += e);
            return i
        }
          , x = t => {
            let e = e => e[t] || [];
            return e.isThemeGetter = !0,
            e
        }
          , w = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , P = /^\d+\/\d+$/
          , S = new Set(["px", "full", "screen"])
          , T = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , C = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , M = t => V(t) || S.has(t) || P.test(t)
          , j = t => W(t, "length", G)
          , V = t => !!t && !Number.isNaN(Number(t))
          , D = t => W(t, "number", V)
          , R = t => !!t && Number.isInteger(Number(t))
          , O = t => t.endsWith("%") && V(t.slice(0, -1))
          , L = t => w.test(t)
          , F = t => T.test(t)
          , B = new Set(["length", "size", "percentage"])
          , I = t => W(t, B, H)
          , z = t => W(t, "position", H)
          , U = new Set(["image", "url"])
          , _ = t => W(t, U, q)
          , N = t => W(t, "", Y)
          , $ = () => !0
          , W = (t, e, i) => {
            let r = w.exec(t);
            return !!r && (r[1] ? "string" == typeof e ? r[1] === e : e.has(r[1]) : i(r[2]))
        }
          , G = t => A.test(t) && !k.test(t)
          , H = () => !1
          , Y = t => E.test(t)
          , q = t => C.test(t)
          , X = function(t, ...e) {
            let i, r, n;
            let s = function(a) {
                return r = (i = f(e.reduce( (t, e) => e(t), t()))).cache.get,
                n = i.cache.set,
                s = o,
                o(a)
            };
            function o(t) {
                let e = r(t);
                if (e)
                    return e;
                let s = v(t, i);
                return n(t, s),
                s
            }
            return function() {
                return s(y.apply(null, arguments))
            }
        }( () => {
            let t = x("colors")
              , e = x("spacing")
              , i = x("blur")
              , r = x("brightness")
              , n = x("borderColor")
              , s = x("borderRadius")
              , o = x("borderSpacing")
              , a = x("borderWidth")
              , l = x("contrast")
              , u = x("grayscale")
              , h = x("hueRotate")
              , d = x("invert")
              , c = x("gap")
              , p = x("gradientColorStops")
              , m = x("gradientColorStopPositions")
              , f = x("inset")
              , g = x("margin")
              , v = x("opacity")
              , y = x("padding")
              , b = x("saturate")
              , w = x("scale")
              , P = x("sepia")
              , S = x("skew")
              , T = x("space")
              , A = x("translate")
              , k = () => ["auto", "contain", "none"]
              , E = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , C = () => ["auto", L, e]
              , B = () => [L, e]
              , U = () => ["", M, j]
              , W = () => ["auto", V, L]
              , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , H = () => ["solid", "dashed", "dotted", "double", "none"]
              , Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , X = () => ["", "0", L]
              , K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Z = () => [V, L];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [$],
                    spacing: [M, j],
                    blur: ["none", "", F, L],
                    brightness: Z(),
                    borderColor: [t],
                    borderRadius: ["none", "", "full", F, L],
                    borderSpacing: B(),
                    borderWidth: U(),
                    contrast: Z(),
                    grayscale: X(),
                    hueRotate: Z(),
                    invert: X(),
                    gap: B(),
                    gradientColorStops: [t],
                    gradientColorStopPositions: [O, j],
                    inset: C(),
                    margin: C(),
                    opacity: Z(),
                    padding: B(),
                    saturate: Z(),
                    scale: Z(),
                    sepia: X(),
                    skew: Z(),
                    space: B(),
                    translate: B()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", L]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [F]
                    }],
                    "break-after": [{
                        "break-after": K()
                    }],
                    "break-before": [{
                        "break-before": K()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...G(), L]
                    }],
                    overflow: [{
                        overflow: E()
                    }],
                    "overflow-x": [{
                        "overflow-x": E()
                    }],
                    "overflow-y": [{
                        "overflow-y": E()
                    }],
                    overscroll: [{
                        overscroll: k()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": k()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": k()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [f]
                    }],
                    "inset-x": [{
                        "inset-x": [f]
                    }],
                    "inset-y": [{
                        "inset-y": [f]
                    }],
                    start: [{
                        start: [f]
                    }],
                    end: [{
                        end: [f]
                    }],
                    top: [{
                        top: [f]
                    }],
                    right: [{
                        right: [f]
                    }],
                    bottom: [{
                        bottom: [f]
                    }],
                    left: [{
                        left: [f]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", R, L]
                    }],
                    basis: [{
                        basis: C()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", L]
                    }],
                    grow: [{
                        grow: X()
                    }],
                    shrink: [{
                        shrink: X()
                    }],
                    order: [{
                        order: ["first", "last", "none", R, L]
                    }],
                    "grid-cols": [{
                        "grid-cols": [$]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", R, L]
                        }, L]
                    }],
                    "col-start": [{
                        "col-start": W()
                    }],
                    "col-end": [{
                        "col-end": W()
                    }],
                    "grid-rows": [{
                        "grid-rows": [$]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [R, L]
                        }, L]
                    }],
                    "row-start": [{
                        "row-start": W()
                    }],
                    "row-end": [{
                        "row-end": W()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", L]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", L]
                    }],
                    gap: [{
                        gap: [c]
                    }],
                    "gap-x": [{
                        "gap-x": [c]
                    }],
                    "gap-y": [{
                        "gap-y": [c]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...q()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...q(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...q(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [y]
                    }],
                    px: [{
                        px: [y]
                    }],
                    py: [{
                        py: [y]
                    }],
                    ps: [{
                        ps: [y]
                    }],
                    pe: [{
                        pe: [y]
                    }],
                    pt: [{
                        pt: [y]
                    }],
                    pr: [{
                        pr: [y]
                    }],
                    pb: [{
                        pb: [y]
                    }],
                    pl: [{
                        pl: [y]
                    }],
                    m: [{
                        m: [g]
                    }],
                    mx: [{
                        mx: [g]
                    }],
                    my: [{
                        my: [g]
                    }],
                    ms: [{
                        ms: [g]
                    }],
                    me: [{
                        me: [g]
                    }],
                    mt: [{
                        mt: [g]
                    }],
                    mr: [{
                        mr: [g]
                    }],
                    mb: [{
                        mb: [g]
                    }],
                    ml: [{
                        ml: [g]
                    }],
                    "space-x": [{
                        "space-x": [T]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [T]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, e]
                    }],
                    "min-w": [{
                        "min-w": [L, e, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [L, e, "none", "full", "min", "max", "fit", "prose", {
                            screen: [F]
                        }, F]
                    }],
                    h: [{
                        h: [L, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [L, e, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", F, j]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", D]
                    }],
                    "font-family": [{
                        font: [$]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", V, D]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, L]
                    }],
                    "list-image": [{
                        "list-image": ["none", L]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", L]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [t]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [v]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [t]
                    }],
                    "text-opacity": [{
                        "text-opacity": [v]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", M, j]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", M, L]
                    }],
                    "text-decoration-color": [{
                        decoration: [t]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: B()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", L]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [v]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...G(), z]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", I]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, _]
                    }],
                    "bg-color": [{
                        bg: [t]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [s]
                    }],
                    "rounded-s": [{
                        "rounded-s": [s]
                    }],
                    "rounded-e": [{
                        "rounded-e": [s]
                    }],
                    "rounded-t": [{
                        "rounded-t": [s]
                    }],
                    "rounded-r": [{
                        "rounded-r": [s]
                    }],
                    "rounded-b": [{
                        "rounded-b": [s]
                    }],
                    "rounded-l": [{
                        "rounded-l": [s]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [s]
                    }],
                    "rounded-se": [{
                        "rounded-se": [s]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [s]
                    }],
                    "rounded-es": [{
                        "rounded-es": [s]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [s]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [s]
                    }],
                    "rounded-br": [{
                        "rounded-br": [s]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [s]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [v]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [v]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [n]
                    }],
                    "border-color-x": [{
                        "border-x": [n]
                    }],
                    "border-color-y": [{
                        "border-y": [n]
                    }],
                    "border-color-s": [{
                        "border-s": [n]
                    }],
                    "border-color-e": [{
                        "border-e": [n]
                    }],
                    "border-color-t": [{
                        "border-t": [n]
                    }],
                    "border-color-r": [{
                        "border-r": [n]
                    }],
                    "border-color-b": [{
                        "border-b": [n]
                    }],
                    "border-color-l": [{
                        "border-l": [n]
                    }],
                    "divide-color": [{
                        divide: [n]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [M, L]
                    }],
                    "outline-w": [{
                        outline: [M, j]
                    }],
                    "outline-color": [{
                        outline: [t]
                    }],
                    "ring-w": [{
                        ring: U()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [t]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [v]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [M, j]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [t]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", F, N]
                    }],
                    "shadow-color": [{
                        shadow: [$]
                    }],
                    opacity: [{
                        opacity: [v]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": Y()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [i]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [l]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", F, L]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [h]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [P]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [i]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [l]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [h]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [v]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [P]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [o]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [o]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [o]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", L]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", L]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [w]
                    }],
                    "scale-x": [{
                        "scale-x": [w]
                    }],
                    "scale-y": [{
                        "scale-y": [w]
                    }],
                    rotate: [{
                        rotate: [R, L]
                    }],
                    "translate-x": [{
                        "translate-x": [A]
                    }],
                    "translate-y": [{
                        "translate-y": [A]
                    }],
                    "skew-x": [{
                        "skew-x": [S]
                    }],
                    "skew-y": [{
                        "skew-y": [S]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
                    }],
                    accent: [{
                        accent: ["auto", t]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
                    }],
                    "caret-color": [{
                        caret: [t]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": B()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": B()
                    }],
                    "scroll-my": [{
                        "scroll-my": B()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": B()
                    }],
                    "scroll-me": [{
                        "scroll-me": B()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": B()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": B()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": B()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": B()
                    }],
                    "scroll-p": [{
                        "scroll-p": B()
                    }],
                    "scroll-px": [{
                        "scroll-px": B()
                    }],
                    "scroll-py": [{
                        "scroll-py": B()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": B()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": B()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": B()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": B()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": B()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": B()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", L]
                    }],
                    fill: [{
                        fill: [t, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [M, j, D]
                    }],
                    stroke: [{
                        stroke: [t, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
}]);
