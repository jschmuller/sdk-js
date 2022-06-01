(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return t?r.a.createElement(m,i(i({ref:n},o),{},{components:t})):r.a.createElement(m,i({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<s;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),s=(t(0),t(113)),c=["components"],i={title:"Messaging"},l={unversionedId:"resources/messaging",id:"resources/messaging",isDocsHomePage:!1,title:"Messaging",description:"A package wrapping the postMessage function with helper functions and security checks.",source:"@site/docs/resources/messaging.md",slug:"/resources/messaging",permalink:"/sdk-js/resources/messaging",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/resources/messaging.md",version:"current",sidebar:"someSidebar",previous:{title:"Environment Vars",permalink:"/sdk-js/resources/env-var"},next:{title:"Native Form",permalink:"/sdk-js/resources/native-form"}},o=[{value:"Installation",id:"installation",children:[{value:"NPM",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>subscribe(event, callback)</code>",id:"subscribeevent-callback",children:[]},{value:"<code>unsubscribe(eventName)</code>",id:"unsubscribeeventname",children:[]},{value:"<code>unsubscribeAll()</code>",id:"unsubscribeall",children:[]},{value:"<code>enabled(value)</code>",id:"enabledvalue",children:[]},{value:"<code>domain()</code>",id:"domain",children:[]}]},{value:"<code>send(payload, target)</code>",id:"sendpayload-target",children:[]}],b={toc:o};function u(e){var n=e.components,t=Object(r.a)(e,c);return Object(s.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A package wrapping the postMessage function with helper functions and security checks."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/message-core"},Object(s.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/message-core.svg?style=for-the-badge",alt:"Version"}))),Object(s.b)("h2",{id:"installation"},"Installation"),Object(s.b)("h3",{id:"npm"},"NPM"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/message-core\n")),Object(s.b)("h3",{id:"yarn"},"Yarn"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/message-core\n")),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import avMessage from '@availity/message-core';\n")),Object(s.b)("h2",{id:"methods"},"Methods"),Object(s.b)("h3",{id:"subscribeevent-callback"},Object(s.b)("inlineCode",{parentName:"h3"},"subscribe(event, callback)")),Object(s.b)("p",null,"When a message event is received and verified, the callback function will be called with the event data. It returns a function that can be used to unsubscribe from that event."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"import avMessage from '@availity/message-core';\n\nconst unsubscribe = avMessage.subscribe(event, callback);\n")),Object(s.b)("h3",{id:"unsubscribeeventname"},Object(s.b)("inlineCode",{parentName:"h3"},"unsubscribe(eventName)")),Object(s.b)("p",null,"Remove all listeners for given event."),Object(s.b)("h3",{id:"unsubscribeall"},Object(s.b)("inlineCode",{parentName:"h3"},"unsubscribeAll()")),Object(s.b)("p",null,"Remove all listeners for all events."),Object(s.b)("h3",{id:"enabledvalue"},Object(s.b)("inlineCode",{parentName:"h3"},"enabled(value)")),Object(s.b)("p",null,"If a value is passed in, sets messaging's enabled flag true/false based on value."),Object(s.b)("p",null,"Returns boolean enabled flag value."),Object(s.b)("h3",{id:"domain"},Object(s.b)("inlineCode",{parentName:"h3"},"domain()")),Object(s.b)("p",null,"Returns a string of the current domain."),Object(s.b)("h2",{id:"sendpayload-target"},Object(s.b)("inlineCode",{parentName:"h2"},"send(payload, target)")),Object(s.b)("p",null,"Send the payload to the target if AvMessage is enabled.\ntarget defaults to the parent window. Payload will be converted to a string."))}u.isMDXComponent=!0}}]);