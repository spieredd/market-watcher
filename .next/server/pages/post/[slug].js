"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(774);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
;// CONCATENATED MODULE: ./pages/post/[slug].tsx



// import PortableText from 'react-portable-text'



// commit
function Post({ post  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-403dcb1465745b19",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                className: "jsx-403dcb1465745b19",
                                /*#__PURE__*/ children: "Market Watcher - Financial News"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                                rel: "icon",
                                href: "/favicon.ico",
                                className: "jsx-403dcb1465745b19"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: "jsx-403dcb1465745b19",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                className: "jsx-403dcb1465745b19" + " " + "mx-auto flex max-w-7xl justify-between p-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-403dcb1465745b19" + " " + "flex items-center space-x-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "../logo-market-watcher.png",
                                                    alt: "",
                                                    className: "jsx-403dcb1465745b19" + " " + "h-10 w-44 cursor-pointer object-cover"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-403dcb1465745b19" + " " + "hidden items-center space-x-5 md:inline-flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-403dcb1465745b19" + " " + "cursor-pointer",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-403dcb1465745b19" + " " + "cursor-pointer",
                                                            children: "About"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "jsx-403dcb1465745b19",
                                                        children: "Contact"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "https://www.buymeacoffee.com/marketwatcher",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-403dcb1465745b19" + " " + "cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white",
                                                            children: "Buy me a coffee"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-403dcb1465745b19" + " " + "flex items-center space-x-5 text-green-600",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "jsx-403dcb1465745b19",
                                                children: "Sign In"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "jsx-403dcb1465745b19" + " " + "duration-2000 cursor-pointer rounded-full border border-green-600 px-4 py-1 transition-transform ease-in-out hover:bg-green-600 hover:text-white",
                                                children: "Get Started"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (0,sanity/* urlFor */.uH)(post.mainImage).url(),
                                alt: "",
                                className: "jsx-403dcb1465745b19" + " " + "h-40 w-full object-cover"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                className: "jsx-403dcb1465745b19" + " " + "m-auto max-w-3xl p-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "jsx-403dcb1465745b19" + " " + "mt-10 mb-3 text-3xl",
                                        children: post.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "jsx-403dcb1465745b19" + " " + "mb-2 text-xl font-light text-gray-500",
                                        children: post.description
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-403dcb1465745b19" + " " + "flex items-center space-x-2 mb-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: (0,sanity/* urlFor */.uH)(post.author.image).url(),
                                                alt: "",
                                                className: "jsx-403dcb1465745b19" + " " + "h-10 w-10 rounded-full"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "jsx-403dcb1465745b19" + " " + "font-extralight",
                                                children: [
                                                    "Blog post by",
                                                    ' ',
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-403dcb1465745b19" + " " + "text-green-600",
                                                        children: post.author.name
                                                    }),
                                                    " - Published at ",
                                                    new Date(post._createdAt).toLocaleString()
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "jsx-403dcb1465745b19" + " " + "py-10"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-403dcb1465745b19" + " " + "my-50 mt-10s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                                                blocks: post.body,
                                                dataset: "production",
                                                projectId: "l63eam7i"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "jsx-403dcb1465745b19" + " " + "my-5 text-base body-text"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "403dcb1465745b19",
                children: "p.jsx-403dcb1465745b19:empty{height:20px!important}"
            })
        ]
    }));
}
/* harmony default export */ const _slug_ = (Post);
const getStaticPaths = async ()=>{
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;
    const posts = await sanity/* sanityClient.fetch */.i3.fetch(query);
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug.current
            }
        })
    );
    return {
        paths,
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ params  })=>{
    const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        'comments':*[
            _type == 'comment' &&
            post._ref == ^.id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        body
    }
    `;
    const post = await sanity/* sanityClient.fetch */.i3.fetch(query, {
        slug: params === null || params === void 0 ? void 0 : params.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post
        },
        revalidate: 60
    };
};


/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i3": () => (/* binding */ sanityClient),
/* harmony export */   "uH": () => (/* binding */ urlFor)
/* harmony export */ });
/* unused harmony exports config, useCurrentUser */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const config = {
    dataset: "production" || 0,
    projectId: "l63eam7i",
    apiVersion: "2021-10-21",
    useCdn: "production" === "production"
};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);
const urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source)
;
const useCurrentUser = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createCurrentUserHook)(config);


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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(703)));
module.exports = __webpack_exports__;

})();