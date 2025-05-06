(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    7815: function(e, t, a) {
        Promise.resolve().then(a.bind(a, 8011))
    },
    8011: function(e, t, a) {
        "use strict";
        a.d(t, {
            Terminal: function() {
                return j
            }
        });
        var n = a(7437)
          , s = a(2265)
          , i = a(521)
          , r = a(9089)
          , o = a(2909)
          , l = a(1273)
          , c = a(3145);
        function m() {
            let[e,t] = (0,
            s.useState)(0)
              , [a,m] = (0,
            s.useState)(100);
            (0,
            s.useEffect)( () => {
                let e = setInterval( () => {
                    t(e => (e + 1) % 4)
                }
                , 500)
                  , a = () => {
                    m(Math.max(20, Math.floor(window.innerWidth / 8)))
                }
                ;
                return a(),
                window.addEventListener("resize", a),
                () => {
                    clearInterval(e),
                    window.removeEventListener("resize", a)
                }
            }
            , []);
            let d = (e => {
                switch (e) {
                case 0:
                    return "╔" + "═".repeat(Math.max(0, a - 2)) + "╗";
                case 1:
                    return "╠" + "═".repeat(Math.max(0, a - 2)) + "╣";
                case 2:
                    return "╟" + "─".repeat(Math.max(0, a - 2)) + "╢";
                case 3:
                    return "╚" + "═".repeat(Math.max(0, a - 2)) + "╝";
                default:
                    return ""
                }
            }
            )(e);
            return (0,
            n.jsxs)(i.E.div, {
                className: "font-mono text-blue-400 whitespace-pre text-sm relative overflow-hidden w-full ",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                children: [(0,
                n.jsxs)("div", {
                    className: "animate-pulse w-full",
                    children: [(0,
                    n.jsx)("pre", {
                        className: "w-full overflow-hidden scrollbar-hide",
                        children: d
                    }), 
                        n.jsxs("div", {
                            className: "md:flex md:items-center md:justify-center md:gap-8 mb-4",
                            children: [(0,
                            n.jsx)("div", {
                                className: "hidden md:block",
                                children: (0,
                                n.jsx)(c.default, {
                                    src: "logo.gif",  // Changed from logo.png to logo.gif
                                    alt: "AmbientAGI Logo",
                                    width: 100,
                                    height: 100,
                                    className: "object-contain",
                                    priority: !0
                                })
                            }), (0,
                            n.jsx)("pre", {
                                className: "text-center text-[0.5rem] xs:text-[0.3rem] sm:text-xs md:text-sm lg:text-base overflow-x-auto scrollbar-hide scale-[0.85] xs:scale-90 sm:scale-95 md:scale-100 transform-gpu mt-5",
                                children: "███████╗██╗   ██╗███████╗██╗  ██╗███████╗██╗     \n██╔════╝╚██╗ ██╔╝██╔════╝╚██╗██╔╝██╔════╝██║     \n█████╗   ╚████╔╝ █████╗   ╚███╔╝ █████╗  ██║     \n██╔══╝    ╚██╔╝  ██╔══╝   ██╔██╗ ██╔══╝  ██║     \n███████╗   ██║   ███████╗██╔╝ ██╗███████╗███████╗\n╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝"
                            })]
                    }), (0,
                    n.jsx)("pre", {
                        className: "w-full overflow-hidden scrollbar-hide",
                        children: d
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex justify-center gap-4 mt-4 mb-2",
                        children: [(0,
                        n.jsx)("a", {
                            href: "https://t.me/eyexelcoin",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-blue-400 hover:text-blue-300 transition-colors",
                            children: (0,
                            n.jsx)(r.Ww5, {
                                className: "w-6 h-6"
                            })
                        }), (0,
                        n.jsx)("a", {
                            href: "https://x.com/Eyexeldotcoin",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-blue-400 hover:text-blue-300 transition-colors",
                            children: (0,
                            n.jsx)(l.LCd, {
                                className: "w-6 h-6"
                            })
                        })]
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "absolute top-0 left-0 w-full h-full pointer-events-none",
                    children: [...Array(30)].map( (e, t) => (0,
                    n.jsx)(i.E.div, {
                        className: "absolute bg-blue-300 rounded-full opacity-10",
                        style: {
                            width: 3 * Math.random() + 1 + "px",
                            height: 3 * Math.random() + 1 + "px",
                            left: 100 * Math.random() + "%",
                            top: 100 * Math.random() + "%"
                        },
                        animate: {
                            opacity: [.1, .5, .1]
                        },
                        transition: {
                            duration: 3 * Math.random() + 2,
                            repeat: 1 / 0,
                            repeatType: "reverse"
                        }
                    }, t))
                })]
            })
        }
        var d = a(8614)
          , h = a(221)
          , u = a(3315)
          , p = a(2029)
          , b = a(6840)
          , x = a(2489)
          , g = a(1994)
          , y = a(3335);
        let f = {
            intro: 'AmbientAGI: Powering the Next Generation of Autonomous, Always-On Agents\n\nIn the ever-evolving landscape of Web3 and AI, a new paradigm is emerging—one that frees AI from the confines of traditional "chat-based" interactions. AmbientAGI is poised to lead this movement by fueling an ecosystem of always-listening, always-learning agents that continuously respond to real-world events—no human prompt needed. And when humans do step in, it\'s only when it truly matters.',
            ambient_agents: "1. The Rise of Ambient Agents\n\nWhile most AI chatbots sit idle until prompted, Ambient Agents never sleep. They parse data streams and trigger tasks automatically, notifying you only when there's something critical to share or confirm.\n\n- Mega-Multitasking for AI: Rather than operating within single-use dialogues, Ambient Agents handle multiple data streams simultaneously—think zero-latency, zero-hassle.\n- Human-in-the-Loop: Sensitive tasks—like authorizing large payments or finalizing deals—still require your approval, ensuring your assets and reputation remain secure.\n- Effortless Scalability: Ambient Agents replicate themselves—like a team of AI interns—instantly scaling your productivity.",
            frameworks: '2. Advanced AI Frameworks & Intelligent Scheduling\n\nAmbientAGI harnesses sophisticated frameworks to enable:\n\n- Robust Memory: Agents "pause" and "resume" with short-term context intact—no repeated instructions or wasted prompts.\n- Long-Term Learning: Agents refine strategies over time, building a reliable knowledge base informed by user feedback.\n- Built-in Scheduling: Automated, cron-like checks let agents systematically scan for new events and carry out tasks at precise intervals.',
            security: "3. Human-In-The-Loop for Security & Trust\n\nAutomation can be intimidating. That's why Ambient Agents involve humans at the most critical points:\n\n- Notify: Agents deliver important updates instantly, ensuring you're never blindsided by urgent market shifts or high-impact emails.\n- Question: Rather than guessing your preferences, agents ask for clarifications or details when needed—lowering risks from incorrect assumptions.\n- Review: You retain final authority—approve, edit, or reject key actions so that major decisions always have a human stamp of approval.",
            use_cases: '4. Use Cases: From Mind-Blowing to Mind-Blasting\n\nThe potential for Ambient Agents—fueled by AmbientAGI—goes far beyond typical AI automations. Here are some crypto-focused scenarios:\n\n1. Whale & Market Movement Radar: Your agent monitors large on-chain transactions, "whale alerts," and social media chatter to predict sudden market swings.\n2. Multi-Chain Arbitrage Commander: Let an Ambient Agent track price discrepancies 24/7 and move liquidity at lightning speed to lock in profits before they vanish.\n3. No-Miss NFT Sniping: Your agent scans marketplaces, detects new listings or underpriced gems, and auto-bids within your pre-set budget.\n4. Frontline DeFi Yield Machine: An AI that constantly rebalances your stablecoins into the highest-yield vaults and hunts for newly launched farms.\n5. Real-Time IDO/ICO Launch Tracker: Agents keep tabs on upcoming token sales, ensuring you\'re among the first to claim or stake tokens.\n6. DAO Intelligence Officer: An Ambient Agent digests DAO proposals, highlights ROI or hidden risks, and notifies you when critical votes could affect your holdings.',
            ecosystem: "5. The AmbientAGI Ecosystem\n\nAmbientAGI goes beyond being a mere token. It's the cornerstone of next-level AI automation:\n\n- Cross-Chain Deployments: Launch on networks like Solana, coming soon to Ethereum, BNB Chain, or Polygon\n- Easy Configuration: Define triggers, data sources, and actions tailored to your trading style\n- Scale on Demand: Replicate agents in seconds to cover more markets\n- Ongoing Evolution: Agents learn and improve over time using real-time feedback\n\nDeveloper Incentives: Builders who enhance protocols or integrations can earn bounties.",
            launch: "6. Ethereum Launch\n\nAmbientAGI launches on Ethereum with a carefully designed 5/5 tax structure\n\nAgent Creation & Rewards:\nOur platform incentivizes agent creators through ETH rewards based on TVL performance. A portion of the tax is  distributed monthly to top-performing agents, while maintaining non-inflationary tokenomics. This creates healthy competition, drives platform growth, and provides stable, transparent rewards for agent creators who achieve and maintain high TVL.\n\nJoin the Ambient Revolution Today\n\nWe invite crypto enthusiasts, developers, and blockchain explorers to join this unstoppable movement:\n\nExperience the Architecture\nSee how AmbientAGI-driven agents revolutionize productivity.\n\nBuild & Innovate\nCreate your own cross-chain Ambient Agents that operate 24/7.\n\nSay goodbye to clunky, chat-limited bots—and hello to ambient, ever-present AI that relentlessly propels your goals and ambitions forward."
        }
          , w = [{
            feature: "Always-On Monitoring",
            traditional: "❌",
            ambient: "✅"
        }, {
            feature: "Multi-Task Processing",
            traditional: "❌",
            ambient: "✅"
        }, {
            feature: "Autonomous Decision Making",
            traditional: "❌",
            ambient: "✅"
        }, {
            feature: "Human Oversight",
            traditional: "✅",
            ambient: "✅"
        }, {
            feature: "Scalability",
            traditional: "❌",
            ambient: "✅"
        }]
          , v = [{
            text: "Success is not just about reaching your goal, but about overcoming every obstacle that comes your way",
            author: "Anonymous"
        }, {
            text: "He who is not courageous enough to take risks will accomplish nothing in life.",
            author: "Muhammad Ali"
        }, {
            text: "Success is not defined by the trophies you display, but by the battles you faced and conquered along the way",
            author: "Anonymous"
        }, {
            text: "The only limit to your success is your own imagination and determination.",
            author: "Anonymous"
        }, {
            text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            author: "Albert Schweitzer"
        }];
        function j() {
            let[e,t] = (0,
            s.useState)("")
              , [a,r] = (0,
            s.useState)([])
              , [o,l] = (0,
            s.useState)(!1)
              , [c,j] = (0,
            s.useState)(!1)
              , [A,k] = (0,
            s.useState)(!1)
              , [N,I] = (0,
            s.useState)("")
              , [S,E] = (0,
            s.useState)("")
              , T = (0,
            s.useRef)(null)
              , M = (0,
            s.useRef)(null)
              , C = "guest@eyexel-agi:~$";
            (0,
            s.useEffect)( () => {
                let e = v[Math.floor(Math.random() * v.length)]
                  , t = 0
                  , a = setInterval( () => {
                    if (t <= e.text.length)
                        I(e.text.slice(0, t)),
                        t++;
                    else {
                        clearInterval(a);
                        let t = 0
                          , n = setInterval( () => {
                            t <= e.author.length ? (E(e.author.slice(0, t)),
                            t++) : clearInterval(n)
                        }
                        , 25)
                    }
                }
                , 25);
                return () => clearInterval(a)
            }
            , []),
            (0,
            s.useEffect)( () => {
                M.current && !o && setTimeout( () => {
                    var e;
                    null === (e = M.current) || void 0 === e || e.scrollTo({
                        top: M.current.scrollHeight,
                        behavior: "smooth"
                    })
                }
                , 100)
            }
            , [a, c, o]),
            (0,
            s.useEffect)( () => {
                T.current && T.current.focus()
            }
            , []);
            let _ = e => {
                r(t => [...t, "".concat(C, " ").concat(e)]);
                let t = e.toLowerCase().trim();
                "help" === t ? r(e => [...e, "Available commands:\n- intro: Show introduction\n- agents: Show info about Ambient Agents\n- frameworks: Show info about AI Frameworks\n- security: Show info about Security & Trust\n- use_cases: Show potential use cases\n- ecosystem: Show ecosystem information\n- launch: Show launch and tokenomics details\n- show_all: Display all sections at once\n- show_table: Display comparison table\n- clear: Clear the terminal\n- exit: Exit the terminal"]) : "intro" === t ? r(e => [...e, f.intro]) : "agents" === t ? r(e => [...e, f.ambient_agents]) : "frameworks" === t ? r(e => [...e, f.frameworks]) : "security" === t ? r(e => [...e, f.security]) : "use_cases" === t ? r(e => [...e, f.use_cases]) : "ecosystem" === t ? r(e => [...e, f.ecosystem]) : "launch" === t ? r(e => [...e, f.launch]) : "show_all" === t ? (l(!0),
                r(e => [...e, "Displaying all sections:"])) : "show_table" === t ? (j(!0),
                r(e => [...e, "Displaying comparison table:"])) : "clear" === t ? (r([]),
                l(!1),
                j(!1)) : "exit" === t ? r(e => [...e, "Thank you for exploring AmbientAGI. Goodbye!"]) : r(e => [...e, "Command not recognized. Type 'help' for available commands."])
            }
              , L = e => {
                _(e),
                k(!1)
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: "h-screen bg-black p-2 sm:p-4 font-mono text-blue-400 flex flex-col overflow-hidden",
                children: [(0,
                n.jsx)(m, {}), (0,
                n.jsxs)("div", {
                    className: "flex-1 flex flex-col container mx-auto overflow-hidden pb-[env(safe-area-inset-bottom,_20px)] sm:pb-0",
                    children: [(0,
                    n.jsxs)(i.E.div, {
                        ref: M,
                        className: "scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent flex-1 overflow-y-auto rounded-lg bg-black/50 p-3 sm:p-6 backdrop-blur-sm",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        children: [(0,
                        n.jsxs)(i.E.div, {
                            className: "mb-4 sm:mb-8 text-center",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1
                            },
                            children: [(0,
                            n.jsx)("p", {
                                className: "text-lg sm:text-xl font-medium text-yellow-400 italic mb-2",
                                children: N
                            }), S && (0,
                            n.jsxs)("p", {
                                className: "text-sm sm:text-base text-yellow-500 font-light",
                                children: ["- ", S]
                            })]
                        }), N && S && (0,
                        n.jsxs)(i.E.div, {
                            className: "flex items-center justify-center gap-2 mb-4 sm:mb-6",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .5
                            },
                            children: [(0,
                            n.jsx)(h.Z, {
                                className: "h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                            }), (0,
                            n.jsx)("p", {
                                className: "text-sm sm:text-base text-green-400",
                                children: "Type 'help' to see available commands"
                            })]
                        }), (0,
                        n.jsx)(d.M, {
                            children: o ? Object.entries(f).map( (e, t) => {
                                let[a,s] = e;
                                return (0,
                                n.jsxs)(i.E.div, {
                                    className: "mt-2 sm:mt-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-blue-500/20 last:border-b-0",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: .5,
                                        delay: .1 * t
                                    },
                                    children: [(0,
                                    n.jsxs)("h2", {
                                        className: "text-lg sm:text-xl font-medium text-green-400 mb-2 flex items-center gap-2",
                                        children: [(0,
                                        n.jsx)(u.Z, {
                                            className: "h-4 w-4 sm:h-5 sm:w-5"
                                        }), a.charAt(0).toUpperCase() + a.slice(1)]
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "whitespace-pre-wrap leading-relaxed text-sm sm:text-base",
                                        children: s
                                    })]
                                }, a)
                            }
                            ) : a.map( (e, t) => (0,
                            n.jsx)(i.E.p, {
                                className: function() {
                                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                        t[a] = arguments[a];
                                    return (0,
                                    y.m6)((0,
                                    g.W)(t))
                                }("mb-1 whitespace-pre-wrap text-sm sm:text-base", e.startsWith(C) && "text-green-400"),
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5
                                },
                                children: e
                            }, t))
                        }), c && (0,
                        n.jsx)(i.E.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .9
                            },
                            transition: {
                                duration: .5
                            },
                            className: "mt-4 overflow-x-auto rounded-lg border border-blue-500/20",
                            children: (0,
                            n.jsxs)("table", {
                                className: "w-full border-collapse text-sm sm:text-base",
                                children: [(0,
                                n.jsx)("thead", {
                                    children: (0,
                                    n.jsxs)("tr", {
                                        className: "bg-blue-900/50",
                                        children: [(0,
                                        n.jsx)("th", {
                                            className: "border-b border-blue-500/20 p-2 sm:p-3 text-left",
                                            children: "Feature"
                                        }), (0,
                                        n.jsx)("th", {
                                            className: "border-b border-blue-500/20 p-2 sm:p-3 text-center",
                                            children: "Traditional Agent"
                                        }), (0,
                                        n.jsx)("th", {
                                            className: "border-b border-blue-500/20 p-2 sm:p-3 text-center",
                                            children: "Ambient Agent"
                                        })]
                                    })
                                }), (0,
                                n.jsx)("tbody", {
                                    children: w.map( (e, t) => (0,
                                    n.jsxs)(i.E.tr, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: .5,
                                            delay: .1 * t
                                        },
                                        className: t % 2 == 0 ? "bg-gray-900/30" : "bg-gray-800/30",
                                        children: [(0,
                                        n.jsx)("td", {
                                            className: "p-2 sm:p-3 border-b border-blue-500/10",
                                            children: e.feature
                                        }), (0,
                                        n.jsx)("td", {
                                            className: "p-2 sm:p-3 border-b border-blue-500/10 text-center",
                                            children: e.traditional
                                        }), (0,
                                        n.jsx)("td", {
                                            className: "p-2 sm:p-3 border-b border-blue-500/10 text-center",
                                            children: e.ambient
                                        })]
                                    }, t))
                                })]
                            })
                        })]
                    }), (0,
                    n.jsxs)(i.E.div, {
                        className: "flex items-center gap-2 bg-black/50 p-2 sm:p-3 mt-3 sm:mt-4 rounded-lg backdrop-blur-sm border border-blue-500/20",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        children: [(0,
                        n.jsxs)("span", {
                            className: "text-green-400 flex items-center gap-2 text-base sm:text-base",
                            children: [(0,
                            n.jsx)(u.Z, {
                                className: "h-4 w-4 sm:h-4 sm:w-4"
                            }), C]
                        }), (0,
                        n.jsx)("input", {
                            ref: T,
                            type: "text",
                            value: e,
                            onChange: e => t(e.target.value),
                            onKeyDown: a => {
                                "Enter" === a.key && (_(e),
                                t(""))
                            }
                            ,
                            className: "flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-base sm:text-base h-10 sm:h-auto",
                            placeholder: "Type a command...",
                            "aria-label": "Terminal input"
                        })]
                    }), (0,
                    n.jsxs)(i.E.div, {
                        className: "flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-4 justify-center sm:justify-start mb-4 sm:mb-0",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .2
                        },
                        children: [(0,
                        n.jsxs)("button", {
                            onClick: () => {
                                l(!o),
                                o || r([])
                            }
                            ,
                            className: "flex-1 sm:flex-none h-10 sm:h-auto px-3 sm:px-4 py-2 bg-blue-500/80 hover:bg-blue-600 text-white rounded-lg backdrop-blur-sm transition-all flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-sm min-w-[120px] sm:min-w-fit",
                            children: [(0,
                            n.jsx)(u.Z, {
                                className: "h-4 w-4 sm:h-4 sm:w-4"
                            }), (0,
                            n.jsx)("span", {
                                className: "hidden sm:inline",
                                children: o ? "Hide All Sections" : "Show All Sections"
                            }), (0,
                            n.jsx)("span", {
                                className: "sm:hidden",
                                children: o ? "Hide All" : "Show All"
                            })]
                        }), (0,
                        n.jsxs)("button", {
                            onClick: () => j(!c),
                            className: "flex-1 sm:flex-none h-10 sm:h-auto px-3 sm:px-4 py-2 bg-green-500/80 hover:bg-green-600 text-white rounded-lg backdrop-blur-sm transition-all flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-sm min-w-[120px] sm:min-w-fit",
                            children: [(0,
                            n.jsx)(p.Z, {
                                className: "h-4 w-4 sm:h-4 sm:w-4"
                            }), (0,
                            n.jsx)("span", {
                                className: "hidden sm:inline",
                                children: c ? "Hide Comparison Table" : "Show Comparison Table"
                            }), (0,
                            n.jsx)("span", {
                                className: "sm:hidden",
                                children: c ? "Hide Table" : "Table"
                            })]
                        }), (0,
                        n.jsxs)("button", {
                            onClick: () => k(!A),
                            className: "flex-1 sm:flex-none h-10 sm:h-auto px-3 sm:px-4 py-2 bg-purple-500/80 hover:bg-purple-600 text-white rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-sm sm:text-sm md:hidden min-w-[120px] sm:min-w-fit",
                            children: [(0,
                            n.jsx)(b.Z, {
                                className: "h-4 w-4 sm:h-4 sm:w-4"
                            }), "Menu"]
                        })]
                    })]
                }), (0,
                n.jsx)(d.M, {
                    children: A && (0,
                    n.jsx)(i.E.div, {
                        className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: (0,
                        n.jsxs)(i.E.div, {
                            className: "bg-gray-900 rounded-lg p-6 w-80 border border-blue-500/20",
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: .9,
                                opacity: 0
                            },
                            children: [(0,
                            n.jsxs)("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [(0,
                                n.jsxs)("h2", {
                                    className: "text-xl text-white font-medium flex items-center gap-2",
                                    children: [(0,
                                    n.jsx)(u.Z, {
                                        className: "h-5 w-5"
                                    }), "Quick Commands"]
                                }), (0,
                                n.jsx)("button", {
                                    onClick: () => k(!1),
                                    className: "text-gray-400 hover:text-white transition-colors",
                                    children: (0,
                                    n.jsx)(x.Z, {
                                        className: "h-5 w-5"
                                    })
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "space-y-2",
                                children: ["intro", "agents", "frameworks", "security", "use_cases", "ecosystem", "launch"].map(e => (0,
                                n.jsx)("button", {
                                    onClick: () => L(e),
                                    className: "block w-full text-left px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors",
                                    children: e
                                }, e))
                            })]
                        })
                    })
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [957, 240, 699, 381, 971, 117, 744], function() {
        return e(e.s = 7815)
    }),
    _N_E = e.O()
}
]);
