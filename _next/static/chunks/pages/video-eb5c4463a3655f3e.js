(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{8468:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video",function(){return n(1366)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,s=e.priority,p=void 0!==s&&s,v=e.loading,S=e.lazyRoot,A=void 0===S?null:S,O=e.lazyBoundary,z=void 0===O?"200px":O,_=e.className,I=e.quality,N=e.width,E=e.height,P=e.objectFit,L=e.objectPosition,R=e.onLoadingComplete,B=e.loader,U=void 0===B?k:B,W=e.placeholder,C=void 0===W?"empty":W,M=e.blurDataURL,q=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=l.useRef(null),T=l.useContext(m.ImageConfigContext),F=l.useMemo((function(){var e=h||T||u.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[T]),H=q,G=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(G=H.layout),delete H.layout);var J="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=w(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(M=M||Q.blurDataURL,J=Q.src,(!G||"fill"!==G)&&(E=E||Q.height,N=N||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:J;var V=j(N),X=j(E),$=j(I),K=!p&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);y.has(t)&&(K=!1);0;var Y,Z=o(f.useIntersection({rootRef:A,rootMargin:z,disabled:!K}),2),ee=Z[0],te=Z[1],ne=!K||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:L},ce="blur"===C?{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:L||"0% 0%"}:{};if("fill"===G)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof V&&"undefined"!==typeof X){var se=X/V,le=isNaN(se)?"100%":"".concat(100*se,"%");"responsive"===G?(re.display="block",re.position="relative",oe=!0,ie.paddingTop=le):"intrinsic"===G?(re.display="inline-block",re.position="relative",re.maxWidth="100%",oe=!0,ie.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(V,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===G&&(re.display="inline-block",re.position="relative",re.width=V,re.height=X)}else 0;var de={src:b,srcSet:void 0,sizes:void 0};ne&&(de=x({config:F,src:t,unoptimized:c,layout:G,width:V,quality:$,sizes:n,loader:U}));var ue=t;0;var fe;0;var me=(i(fe={},"imagesrcset",de.srcSet),i(fe,"imagesizes",de.sizes),fe),pe=l.default.useLayoutEffect,ge=l.useRef(R);return l.useEffect((function(){ge.current=R}),[R]),pe((function(){ee(D.current)}),[ee]),l.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(y.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(D,ue,0,C,ge)}),[ue,G,C,ne]),l.default.createElement("span",{style:re},oe?l.default.createElement("span",{style:ie},Y?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,l.default.createElement("img",Object.assign({},H,de,{decoding:"async","data-nimg":G,className:_,ref:D,style:g({},ae,ce)})),K&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},H,x({config:F,src:t,unoptimized:c,layout:G,width:V,quality:$,sizes:n,loader:U}),{decoding:"async","data-nimg":G,style:ae,className:_,loading:v||"lazy"}))),p?l.default.createElement(d.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+de.src+de.srcSet+de.sizes,rel:"preload",as:"image",href:de.srcSet?void 0:de.src},me))):null)};var s,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(s=n(5443))&&s.__esModule?s:{default:s},u=n(5809),f=n(7190),m=n(9977);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(S(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,s=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(r);c)l.push(parseInt(c[2]));if(l.length){var d,u=.01*(d=Math).min.apply(d,a(l));return{widths:o.filter((function(e){return e>=i[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,s),u=d.widths,f=d.kind,m=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,r){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:c,width:u[m]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=v.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e){return"/"===e[0]?e.slice(1):e}},1098:function(e,t,n){"use strict";n.d(t,{TQ:function(){return l},$t:function(){return d},Uy:function(){return u}});var r=n(5893),i=n(9008),o=n(1163),a=n(7059),c=n.n(a),s=function(e){var t=e.title,n=e.description,a=e.ogType,s=e.ogImage,l=e.twImage,d=(0,o.useRouter)();return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(d.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:c().title}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),Array.isArray(s)?s.map((function(e){var t=e.url;return(0,r.jsx)("meta",{property:"og:image",content:t},t)})):(0,r.jsx)("meta",{property:"og:image",content:s},s),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:c().twitter}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:l})]})},l=function(e){var t=e.title,n=e.description,i=c().siteUrl+c().socialBanner,o=c().siteUrl+c().socialBanner;return(0,r.jsx)(s,{title:t,description:n,ogType:"website",ogImage:i,twImage:o})},d=function(e){var t=e.title,n=e.description,a=c().siteUrl+c().socialBanner,l=c().siteUrl+c().socialBanner,d=(0,o.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{title:t,description:n,ogType:"website",ogImage:a,twImage:l}),(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,n=e.title,o=e.summary,a=e.date,l=e.lastmod,d=e.url,u=e.images,f=void 0===u?[]:u,m=new Date(a).toISOString(),p=new Date(l||a).toISOString(),g=(0===f.length?[c().socialBanner]:"string"===typeof f?[f]:f).map((function(e){return{"@type":"ImageObject",url:e.indexOf("http")>-1?e:"".concat(c().siteUrl).concat(e)}})),h={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:n,image:g,datePublished:m,dateModified:p,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},y=g[0].url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{title:n,description:o,ogType:"article",ogImage:g,twImage:y}),(0,r.jsxs)(i.default,{children:[a&&(0,r.jsx)("meta",{property:"article:published_time",content:m}),l&&(0,r.jsx)("meta",{property:"article:modified_time",content:p}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h,null,2)}})]})]})}},1366:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return l}});var r=n(5893),i=n(1098),o=n(7059),a=n.n(o),c=n(5675),s=!0;function l(e){var t=e.videos;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.TQ,{title:"\u89c6\u9891 - ".concat(a().author),description:"\u6211\u7684B\u7ad9\u89c6\u9891"}),(0,r.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,r.jsxs)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,r.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"\u6211\u7684\u89c6\u9891"}),(0,r.jsx)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"\u6211\u7684B\u7ad9\u89c6\u9891"})]}),(0,r.jsx)("div",{className:"container py-12",children:(0,r.jsx)("section",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",children:t.map((function(e){return(0,r.jsxs)("article",{className:"group mx-auto w-full max-w-md transform cursor-pointer rounded-b-xl shadow-xl duration-500 hover:-translate-y-2",children:[(0,r.jsxs)("section",{className:"content relative aspect-video rounded-xl",children:[(0,r.jsx)("a",{href:"https://www.bilibili.com/video/".concat(e.bvid,"/"),target:"_blank",rel:"noopener noreferrer",title:e.title,children:(0,r.jsx)(c.default,{src:"/static/images/"+e.pic,width:"640",height:"420",className:"block w-full rounded-t-xl",unoptimized:!0,alt:""})}),(0,r.jsxs)("div",{className:"absolute bottom-2 flex w-full bg-black bg-opacity-20 p-2 text-sm font-bold text-white",children:[(0,r.jsxs)("div",{className:"flex w-1/2 items-center",children:[(0,r.jsxs)("svg",{className:"mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),(0,r.jsx)("span",{children:e.play})]}),(0,r.jsxs)("div",{className:"flex w-1/2 flex-row-reverse items-center",children:[(0,r.jsx)("svg",{className:"absolute ml-2 h-6 w-6 place-items-end group-hover:animate-ping ",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),(0,r.jsx)("svg",{className:"relative ml-2 h-6 w-6 place-items-end",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),(0,r.jsx)("span",{className:"place-items-end",children:e.length})]})]})]}),(0,r.jsx)("h2",{className:"p-4 text-base font-medium text-gray-400",children:(0,r.jsx)("a",{href:"https://www.bilibili.com/video/".concat(e.bvid,"/"),target:"_blank",rel:"noopener noreferrer",title:e.title,children:e.title})})]},e.bvid)}))})})]})]})}},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8468,e(e.s=t);var t}));var t=e.O();_N_E=t}]);