"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{5282:function(e,t,n){n.r(t);var r=n(5893),s=n(7294),a=n(425),c=n(7059),u=n.n(c);t.default=function(e){var t=e.issueTerm,n=(0,s.useState)(!0),c=n[0],i=n[1],m=(0,a.F)(),o=m.theme,l=m.resolvedTheme,d="dark"===o||"dark"===l?u().comment.utterancesConfig.darkTheme:u().comment.utterancesConfig.theme,f="comments-container",b=(0,s.useCallback)((function(){i(!1);var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",u().comment.utterancesConfig.repo),e.setAttribute("issue-term",t),e.setAttribute("label",u().comment.utterancesConfig.label),e.setAttribute("theme",d),e.setAttribute("crossorigin","anonymous"),e.async=!0;var n=document.getElementById(f);return n&&n.appendChild(e),function(){var e=document.getElementById(f);e&&(e.innerHTML="")}}),[d,t]);return(0,s.useEffect)((function(){document.querySelector("iframe.utterances-frame")&&b()}),[b]),(0,r.jsxs)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",children:[c&&(0,r.jsx)("button",{onClick:b,children:"Load Comments"}),(0,r.jsx)("div",{className:"utterances-frame relative",id:f})]})}}}]);