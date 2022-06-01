(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(f,s(s({ref:t},c),{},{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(113)),a=["components"],s={title:"Logs"},l={unversionedId:"api/definitions/logs",id:"api/definitions/logs",isDocsHomePage:!1,title:"Logs",description:"Endpoint to log data by level and key/value pairs.",source:"@site/docs/api/definitions/logs.md",slug:"/api/definitions/logs",permalink:"/sdk-js/api/definitions/logs",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/definitions/logs.md",version:"current",sidebar:"someSidebar",previous:{title:"Files",permalink:"/sdk-js/api/definitions/files"},next:{title:"Navigation Spaces",permalink:"/sdk-js/api/definitions/navigation"}},c=[{value:"POST /api/v1/log-messages",id:"post-apiv1log-messages",children:[{value:"Body",id:"body",children:[]},{value:"Example Request",id:"example-request",children:[]},{value:"Response Code",id:"response-code",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Endpoint to log data by level and key/value pairs."),Object(o.b)("h2",{id:"post-apiv1log-messages"},"POST /api/v1/log-messages"),Object(o.b)("h3",{id:"body"},"Body"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"send the entries that you wish to log in key/value pairs"),Object(o.b)("li",{parentName:"ul"},"levels include: INFO, DEBUG, WARN, ERROR")),Object(o.b)("h3",{id:"example-request"},"Example Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -i -X POST -H "Content-Type: application/json" -d \'{"level": "INFO", "entries": {"user": "userName", "key": "value"}}\' \'https://apps.availity.com/api/v1/log-messages\'\n')),Object(o.b)("h3",{id:"response-code"},"Response Code"),Object(o.b)("p",null,"A 201 created status code indicates a successful log. No response value is returned."))}u.isMDXComponent=!0}}]);