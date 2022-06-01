(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(113)),i=["components"],c={title:"Downloads"},l={unversionedId:"api/downloads",id:"api/downloads",isDocsHomePage:!1,title:"Downloads",description:"Utility to download files from services",source:"@site/docs/api/downloads.md",slug:"/api/downloads",permalink:"/sdk-js/api/downloads",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/downloads.md",version:"current",sidebar:"someSidebar",previous:{title:"Authorization",permalink:"/sdk-js/api/authorizations"},next:{title:"Uploads",permalink:"/sdk-js/api/uploads"}},d=[{value:"Install",id:"install",children:[{value:"NPM",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getAttachment(config)</code>",id:"getattachmentconfig",children:[]},{value:"<code>downloadAttachment(data, filename, mime)</code>",id:"downloadattachmentdata-filename-mime",children:[]}]}],s={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Utility to download files from services"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/dl-core"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/dl-core.svg?style=for-the-badge",alt:"Version"}))),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("h3",{id:"npm"},"NPM"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/dl-axios @availity/dl-core axios\n")),Object(o.b)("h3",{id:"yarn"},"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/dl-axios @availity/dl-core axios\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const downloadApi = new AvDownloadApi({\n  clientId: '1234',\n});\n\ndowloadApi.getAttachment().then((response) => {\n  const { data } = response;\n  downloadApi.downloadAttachment(data, 'filename.csv');\n});\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("p",null,"This class has the following methods to use."),Object(o.b)("h3",{id:"getattachmentconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"getAttachment(config)")),Object(o.b)("h3",{id:"downloadattachmentdata-filename-mime"},Object(o.b)("inlineCode",{parentName:"h3"},"downloadAttachment(data, filename, mime)")))}p.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(b,c(c({ref:t},d),{},{components:n})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);