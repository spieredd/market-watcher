"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 15:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Header.tsx
var Header = __webpack_require__(969);
// EXTERNAL MODULE: ./components/Footer.tsx
var Footer = __webpack_require__(980);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(774);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__(779);
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.tsx








const Home = ({ posts  })=>{
    posts.sort(function(a, b) {
        var dateA = new Date(a._createdAt), dateB = new Date(b._createdAt);
        return dateA - dateB;
    });
    console.log(posts);
    let tutorials = posts.slice(posts.length - 3, posts.length).reverse();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto max-w-7xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_cookie_consent_default()), {
                location: "bottom",
                buttonText: "Accept",
                cookieName: "myAwesomeCookieName2",
                style: {
                    background: '#2B373B'
                },
                buttonStyle: {
                    color: '#4e503b',
                    fontSize: '15px'
                },
                expires: 150,
                children: [
                    "Agree with the",
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "underline",
                        href: "/",
                        /*#__PURE__*/ children: "terms of conditions"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Market Watcher - Financial News"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8424057093962720",
                        crossOrigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-5 px-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "max-w-xl font-serif text-5xl",
                                children: [
                                    "Stay informed on financial news with",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "decpration-black underline decoration-4",
                                        children: "Market Watcher"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "max-w-xl",
                                children: [
                                    "We try to provide you with a maximum of daily information regarding international finance and economics issues.",
                                    '  ',
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "cursor-pointer text-blue-900 underline",
                                            children: "(Discover our project)"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "hidden h-32 px-10 md:inline-flex lg:h-32",
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Medium_icon.svg/1280px-Medium_icon.svg.png",
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "px-10 py-5 text-xl font-bold md:px-10",
                children: [
                    "Latest Articles",
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/articles",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "cursor-pointer text-xs font-normal text-blue-800 underline ",
                            children: "(See all)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",
                children: tutorials.map((post)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/post/${post.slug.current}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "group cursor-pointer overflow-hidden rounded-lg border",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105",
                                    src: (0,sanity/* urlFor */.uH)(post.mainImage).url(),
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between bg-white p-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-lg font-bold",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-xs",
                                                    children: [
                                                        " by ",
                                                        post.author.name
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "pt-2 text-xs text-gray-500",
                                                    children: new Date(post._createdAt).toLocaleString([], {
                                                        year: 'numeric',
                                                        month: 'numeric',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                    className: "my-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: post.categories ? post.categories.map((element)=>{
                                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: element.title === 'Tutorial' ? 'mr-2 mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-gray-500' : element.title === 'Ukraine' ? 'mr-2 mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-gray-500' : element.title === 'Crypto' || 'Finance' ? 'mr-2 mt-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-gray-500' : 0,
                                                            children: [
                                                                "#",
                                                                element.title
                                                            ]
                                                        }));
                                                    }) : console.log('hello')
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-12 w-12 rounded-full",
                                            src: (0,sanity/* urlFor */.uH)(post.author.image).url(),
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    }, post._id));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "py-5 text-xl font-bold",
                children: "Tutorials"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "gris-cols-1 grid gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",
                children: tutorials.map((post)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/post/${post.slug.current}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "group cursor-pointer overflow-hidden rounded-lg border",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105",
                                    src: (0,sanity/* urlFor */.uH)(post.mainImage).url(),
                                    alt: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between bg-white p-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-lg font-bold",
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-xs",
                                                    children: [
                                                        " by ",
                                                        post.author.name
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "pt-2 text-xs text-gray-500",
                                                    children: new Date(post._createdAt).toLocaleString([], {
                                                        year: 'numeric',
                                                        month: 'numeric',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                    className: "my-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: post.categories ? post.categories.map((element)=>{
                                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: element.title === 'Tutorial' ? 'mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-gray-700' : 'mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700',
                                                            children: [
                                                                "#",
                                                                element.title
                                                            ]
                                                        }));
                                                    }) : console.log('hello')
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-12 w-12 rounded-full",
                                            src: (0,sanity/* urlFor */.uH)(post.author.image).url(),
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    }, post._id));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const pages = (Home);
const getServerSideProps = async ()=>{
    const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    categories[]->{
    title
  },
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug,
  
    
  }`;
    const posts = await sanity/* sanityClient.fetch */.i3.fetch(query);
    return {
        props: {
            posts
        }
    };
};


/***/ }),

/***/ 791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 779:
/***/ ((module) => {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,969,816], () => (__webpack_exec__(15)));
module.exports = __webpack_exports__;

})();