(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{7733:function(e,t,n){"use strict";var r=[{title:"utils",description:"\u5e38\u7528 JavaScript \u5de5\u5177\u96c6\u5408",imgSrc:"",href:"/utils/index.html",name:"utils",entry:"/utils/index.html",container:"#micro-app-container",activeRule:"/utils"},{title:"react-hooks",description:"\u5e38\u7528 React Hooks",imgSrc:"",href:"/react-hooks/index.html",name:"react-hooks",entry:"/react-hooks/index.html",container:"#micro-app-container",activeRule:"/react-hooks"},{title:"webstack",description:"\u524d\u7aef\u8d44\u6e90\u5bfc\u822a",imgSrc:"",href:"/webstack/index.html",name:"webstack",entry:"/webstack/index.html",container:"#micro-app-container",activeRule:"/webstack"},{title:"moji",description:"\u5feb\u901f\u5236\u4f5c\u81ea\u5b9a\u4e49 emoji",imgSrc:"",href:"/moji/index.html",name:"moji",entry:"/moji/index.html",container:"#micro-app-container",activeRule:"/moji"}];t.ZP=r},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](i):i instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,s;var l=r=o({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},s=n(7161),l=n(6319);var c=[],f=[],d=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function y(e){return function(e,t){var n=function(){if(!o){var t=new p(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,o=l}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(l.LoadableContext),i=s.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(m,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};h(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var b=y;t.default=b},1098:function(e,t,n){"use strict";n.d(t,{TQ:function(){return l},$t:function(){return c},Uy:function(){return f}});var r=n(5893),o=n(9008),a=n(1163),i=n(7059),u=n.n(i),s=function(e){var t=e.title,n=e.description,i=e.ogType,s=e.ogImage,l=e.twImage,c=(0,a.useRouter)();return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(u().siteUrl).concat(c.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:u().title}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),Array.isArray(s)?s.map((function(e){var t=e.url;return(0,r.jsx)("meta",{property:"og:image",content:t},t)})):(0,r.jsx)("meta",{property:"og:image",content:s},s),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:u().twitter}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:l})]})},l=function(e){var t=e.title,n=e.description,o=u().siteUrl+u().socialBanner,a=u().siteUrl+u().socialBanner;return(0,r.jsx)(s,{title:t,description:n,ogType:"website",ogImage:o,twImage:a})},c=function(e){var t=e.title,n=e.description,i=u().siteUrl+u().socialBanner,l=u().siteUrl+u().socialBanner,c=(0,a.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{title:t,description:n,ogType:"website",ogImage:i,twImage:l}),(0,r.jsx)(o.default,{children:(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(u().siteUrl).concat(c.asPath,"/feed.xml")})})]})},f=function(e){var t=e.authorDetails,n=e.title,a=e.summary,i=e.date,l=e.lastmod,c=e.url,f=e.images,d=void 0===f?[]:f,m=new Date(i).toISOString(),p=new Date(l||i).toISOString(),y=(0===d.length?[u().socialBanner]:"string"===typeof d?[d]:d).map((function(e){return{"@type":"ImageObject",url:e.indexOf("http")>-1?e:"".concat(u().siteUrl).concat(e)}})),h={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":c},headline:n,image:y,datePublished:m,dateModified:p,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:u().author},publisher:{"@type":"Organization",name:u().author,logo:{"@type":"ImageObject",url:"".concat(u().siteUrl).concat(u().siteLogo)}},description:a},b=y[0].url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{title:n,description:a,ogType:"article",ogImage:y,twImage:b}),(0,r.jsxs)(o.default,{children:[i&&(0,r.jsx)("meta",{property:"article:published_time",content:m}),l&&(0,r.jsx)("meta",{property:"article:modified_time",content:p}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h,null,2)}})]})]})}},6157:function(e,t,n){"use strict";n.d(t,{f:function(){return c}});var r=n(4051),o=n.n(r),a=n(7733);function i(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(r,o)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var l=function(e){console.log("=======loading======",e)},c=function(){var e,t=(e=o().mark((function e(){var t,r,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(527),n.e(194)]).then(n.bind(n,1194));case 2:t=e.sent,r=t.registerMicroApps,i=t.start,u=t.addGlobalUncaughtErrorHandler,r(a.ZP.map((function(e){return s({},e,{loader:l})})),{beforeLoad:function(e){return console.log("before load",e,e.name),Promise.resolve()},afterMount:function(e){return console.log("after mount",e,e.name),Promise.resolve()}}),i(),u((function(e){console.log("\u5f02\u5e38\u6355\u83b7",e)}));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,s,"next",e)}function s(e){i(a,r,o,u,s,"throw",e)}u(void 0)}))});return function(){return t.apply(this,arguments)}}()},5152:function(e,t,n){e.exports=n(638)},8217:function(e,t,n){"use strict";var r=n(6086),o=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),i({getCurrentValue:t,subscribe:n,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,a=n(e);return e(),function(){o=!0,a()}}),[t,n]),a}},7161:function(e,t,n){"use strict";e.exports=n(8217)}}]);