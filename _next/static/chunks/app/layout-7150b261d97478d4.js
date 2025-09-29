(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [177], {
      285: (e, t, s) => {
         "use strict";
         s.d(t, {
            $: () => l
         });
         var r = s(5155),
            a = s(2115),
            o = s(4253),
            n = s(2085),
            i = s(9434);
         let d = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
               variants: {
                  variant: {
                     default: "bg-primary text-primary-foreground hover:bg-primary/90",
                     destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                     outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                     ghost: "hover:bg-accent hover:text-accent-foreground",
                     link: "text-primary underline-offset-4 hover:underline"
                  },
                  size: {
                     default: "h-10 px-4 py-2",
                     sm: "h-9 rounded-md px-3",
                     lg: "h-11 rounded-md px-8",
                     icon: "h-10 w-10"
                  }
               },
               defaultVariants: {
                  variant: "default",
                  size: "default"
               }
            }),
            l = a.forwardRef((e, t) => {
               let {
                  className: s,
                  variant: a,
                  size: n,
                  asChild: l = !1,
                  ...c
               } = e, u = l ? o.DX : "button";
               return (0, r.jsx)(u, {
                  className: (0, i.cn)(d({
                     variant: a,
                     size: n,
                     className: s
                  })),
                  ref: t,
                  ...c
               })
            });
         l.displayName = "Button"
      },
      347: () => {},
      2894: (e, t, s) => {
         "use strict";
         s.d(t, {
            Header: () => j
         });
         var r = s(5155),
            a = s(6874),
            o = s.n(a),
            n = s(5695),
            i = s(5299),
            d = s(8341),
            l = s(9434),
            c = s(2115),
            u = s(5821),
            f = s(2085),
            m = s(5318);
         let p = u.bL,
            x = u.l9;
         u.bm;
         let h = u.ZL,
            g = c.forwardRef((e, t) => {
               let {
                  className: s,
                  ...a
               } = e;
               return (0, r.jsx)(u.hJ, {
                  className: (0, l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", s),
                  ...a,
                  ref: t
               })
            });
         g.displayName = u.hJ.displayName;
         let b = (0, f.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
               variants: {
                  side: {
                     top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                     bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                     left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                     right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                  }
               },
               defaultVariants: {
                  side: "right"
               }
            }),
            v = c.forwardRef((e, t) => {
               let {
                  side: s = "right",
                  className: a,
                  children: o,
                  ...n
               } = e;
               return (0, r.jsxs)(h, {
                  children: [(0, r.jsx)(g, {}), (0, r.jsxs)(u.UC, {
                     ref: t,
                     className: (0, l.cn)(b({
                        side: s
                     }), a),
                     ...n,
                     children: [o, (0, r.jsxs)(u.bm, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [(0, r.jsx)(m.A, {
                           className: "h-4 w-4"
                        }), (0, r.jsx)("span", {
                           className: "sr-only",
                           children: "Close"
                        })]
                     })]
                  })]
               })
            });
         v.displayName = u.UC.displayName, c.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(u.hE, {
               ref: t,
               className: (0, l.cn)("text-lg font-semibold text-foreground", s),
               ...a
            })
         }).displayName = u.hE.displayName, c.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(u.VY, {
               ref: t,
               className: (0, l.cn)("text-sm text-muted-foreground", s),
               ...a
            })
         }).displayName = u.VY.displayName;
         var y = s(285);
         let N = [{
            href: "/",
            label: "Home"
         }, {
            href: "/projects",
            label: "Projects"
         }, {
            href: "/experience",
            label: "Experience"
         }, {
            href: "/resources",
            label: "Resources"
         }];

         function j() {
            let e = (0, n.usePathname)();
            return (0, r.jsx)("header", {
               className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
               children: (0, r.jsxs)("div", {
                  className: "container flex h-14 max-w-screen-2xl items-center justify-between",
                  children: [(0, r.jsxs)(o(), {
                     href: "/",
                     className: "mr-6 flex items-center space-x-2",
                     children: [(0, r.jsx)(i.A, {
                        className: "h-6 w-6 text-primary"
                     }), (0, r.jsx)("span", {
                        className: "font-bold font-headline inline-block text-base sm:text-lg lg:text-xl",
                        children: "Claudio E. Enobas Ese"
                     })]
                  }), (0, r.jsx)("nav", {
                     className: "hidden md:flex items-center gap-4 text-sm lg:gap-6",
                     children: N.map(t => (0, r.jsx)(o(), {
                        href: t.href,
                        className: (0, l.cn)("transition-colors hover:text-foreground/80", e === t.href ? "text-foreground font-semibold" : "text-foreground/60"),
                        children: t.label
                     }, t.href))
                  }), (0, r.jsx)("div", {
                     className: "md:hidden",
                     children: (0, r.jsxs)(p, {
                        children: [(0, r.jsx)(x, {
                           asChild: !0,
                           children: (0, r.jsxs)(y.$, {
                              variant: "ghost",
                              size: "icon",
                              children: [(0, r.jsx)(d.A, {
                                 className: "h-6 w-6"
                              }), (0, r.jsx)("span", {
                                 className: "sr-only",
                                 children: "Toggle navigation menu"
                              })]
                           })
                        }), (0, r.jsx)(v, {
                           side: "left",
                           children: (0, r.jsxs)("nav", {
                              className: "grid gap-6 text-lg font-medium mt-8",
                              children: [(0, r.jsxs)(o(), {
                                 href: "/",
                                 className: "flex items-center gap-2 text-lg font-semibold",
                                 children: [(0, r.jsx)(i.A, {
                                    className: "h-6 w-6 text-primary"
                                 }), (0, r.jsx)("span", {
                                    className: "sr-only",
                                    children: "Claudio E. Enobas Ese"
                                 })]
                              }), N.map(t => (0, r.jsx)(o(), {
                                 href: t.href,
                                 className: (0, l.cn)("transition-colors hover:text-foreground/80", e === t.href ? "text-foreground font-semibold" : "text-foreground/60"),
                                 children: t.label
                              }, t.href))]
                           })
                        })]
                     })
                  })]
               })
            })
         }
      },
      4818: (e, t, s) => {
         Promise.resolve().then(s.t.bind(s, 6874, 23)), Promise.resolve().then(s.t.bind(s, 347, 23)), Promise.resolve().then(s.bind(s, 2894)), Promise.resolve().then(s.bind(s, 7323))
      },
      7323: (e, t, s) => {
         "use strict";
         s.d(t, {
            Toaster: () => E
         });
         var r = s(5155),
            a = s(2115);
         let o = 0,
            n = new Map,
            i = e => {
               if (n.has(e)) return;
               let t = setTimeout(() => {
                  n.delete(e), u({
                     type: "REMOVE_TOAST",
                     toastId: e
                  })
               }, 1e6);
               n.set(e, t)
            },
            d = (e, t) => {
               switch (t.type) {
                  case "ADD_TOAST":
                     return {
                        ...e, toasts: [t.toast, ...e.toasts].slice(0, 1)
                     };
                  case "UPDATE_TOAST":
                     return {
                        ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {
                           ...e,
                           ...t.toast
                        } : e)
                     };
                  case "DISMISS_TOAST": {
                     let {
                        toastId: s
                     } = t;
                     return s ? i(s) : e.toasts.forEach(e => {
                        i(e.id)
                     }), {
                        ...e,
                        toasts: e.toasts.map(e => e.id === s || void 0 === s ? {
                           ...e,
                           open: !1
                        } : e)
                     }
                  }
                  case "REMOVE_TOAST":
                     if (void 0 === t.toastId) return {
                        ...e,
                        toasts: []
                     };
                     return {
                        ...e, toasts: e.toasts.filter(e => e.id !== t.toastId)
                     }
               }
            },
            l = [],
            c = {
               toasts: []
            };

         function u(e) {
            c = d(c, e), l.forEach(e => {
               e(c)
            })
         }

         function f(e) {
            let {
               ...t
            } = e, s = (o = (o + 1) % Number.MAX_SAFE_INTEGER).toString(), r = () => u({
               type: "DISMISS_TOAST",
               toastId: s
            });
            return u({
               type: "ADD_TOAST",
               toast: {
                  ...t,
                  id: s,
                  open: !0,
                  onOpenChange: e => {
                     e || r()
                  }
               }
            }), {
               id: s,
               dismiss: r,
               update: e => u({
                  type: "UPDATE_TOAST",
                  toast: {
                     ...e,
                     id: s
                  }
               })
            }
         }
         var m = s(6621),
            p = s(2085),
            x = s(5318),
            h = s(9434);
         let g = m.Kq,
            b = a.forwardRef((e, t) => {
               let {
                  className: s,
                  ...a
               } = e;
               return (0, r.jsx)(m.LM, {
                  ref: t,
                  className: (0, h.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", s),
                  ...a
               })
            });
         b.displayName = m.LM.displayName;
         let v = (0, p.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
               variants: {
                  variant: {
                     default: "border bg-background text-foreground",
                     destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                  }
               },
               defaultVariants: {
                  variant: "default"
               }
            }),
            y = a.forwardRef((e, t) => {
               let {
                  className: s,
                  variant: a,
                  ...o
               } = e;
               return (0, r.jsx)(m.bL, {
                  ref: t,
                  className: (0, h.cn)(v({
                     variant: a
                  }), s),
                  ...o
               })
            });
         y.displayName = m.bL.displayName, a.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(m.rc, {
               ref: t,
               className: (0, h.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", s),
               ...a
            })
         }).displayName = m.rc.displayName;
         let N = a.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(m.bm, {
               ref: t,
               className: (0, h.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", s),
               "toast-close": "",
               ...a,
               children: (0, r.jsx)(x.A, {
                  className: "h-4 w-4"
               })
            })
         });
         N.displayName = m.bm.displayName;
         let j = a.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(m.hE, {
               ref: t,
               className: (0, h.cn)("text-sm font-semibold", s),
               ...a
            })
         });
         j.displayName = m.hE.displayName;
         let w = a.forwardRef((e, t) => {
            let {
               className: s,
               ...a
            } = e;
            return (0, r.jsx)(m.VY, {
               ref: t,
               className: (0, h.cn)("text-sm opacity-90", s),
               ...a
            })
         });

         function E() {
            let {
               toasts: e
            } = function () {
               let [e, t] = a.useState(c);
               return a.useEffect(() => (l.push(t), () => {
                  let e = l.indexOf(t);
                  e > -1 && l.splice(e, 1)
               }), [e]), {
                  ...e,
                  toast: f,
                  dismiss: e => u({
                     type: "DISMISS_TOAST",
                     toastId: e
                  })
               }
            }();
            return (0, r.jsxs)(g, {
               children: [e.map(function (e) {
                  let {
                     id: t,
                     title: s,
                     description: a,
                     action: o,
                     ...n
                  } = e;
                  return (0, r.jsxs)(y, {
                     ...n,
                     children: [(0, r.jsxs)("div", {
                        className: "grid gap-1",
                        children: [s && (0, r.jsx)(j, {
                           children: s
                        }), a && (0, r.jsx)(w, {
                           children: a
                        })]
                     }), o, (0, r.jsx)(N, {})]
                  }, t)
               }), (0, r.jsx)(b, {})]
            })
         }
         w.displayName = m.VY.displayName
      },
      9434: (e, t, s) => {
         "use strict";
         s.d(t, {
            cn: () => o
         });
         var r = s(2596),
            a = s(9688);

         function o() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            return (0, a.QP)((0, r.$)(t))
         }
      }
   },
   e => {
      var t = t => e(e.s = t);
      e.O(0, [690, 769, 874, 50, 331, 441, 684, 358], () => t(4818)), _N_E = e.O()
   }
]);
