(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(113)),o=["components"],c={title:"Notifications"},l={unversionedId:"api/definitions/notifications",id:"api/definitions/notifications",isDocsHomePage:!1,title:"Notifications",description:"Notifications are sent to users to inform or notify them of actions that should be performed.",source:"@site/docs/api/definitions/notifications.md",slug:"/api/definitions/notifications",permalink:"/sdk-js/api/definitions/notifications",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/definitions/notifications.md",version:"current",sidebar:"someSidebar",previous:{title:"Navigation Spaces",permalink:"/sdk-js/api/definitions/navigation"},next:{title:"Organizations",permalink:"/sdk-js/api/definitions/organizations"}},s=[{value:"GET /api/v1/notifications",id:"get-apiv1notifications",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Notifications are sent to users to inform or notify them of actions that should be performed."),Object(r.b)("h2",{id:"get-apiv1notifications"},"GET /api/v1/notifications"),Object(r.b)("p",null,"Find notifications for the current user. The request parameters act as filters on the list."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"to.userSource")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Filter by user source system (available to support users only)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"to.userId")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Filter by user ids (available to support users only)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nature")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Filter by the specified nature(s). Accepts multiple ",Object(r.b)("inlineCode",{parentName:"li"},"nature")," parameters."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Filter by specified type of notification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"topic")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Filter by specified topic of notification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeRead")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Include read notifications. Defaults to false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeUnread")," ","_","(optional) \u2014 Include unread notifications. Defaults to true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeViewed")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Include viewed notifications. Defaults to true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeUnviewed")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Include unviewed notifications. Defaults to true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeInactive")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Include inactive notifications. Defaults to false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"includeSources")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Include notification sources. Defaults to false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"sortBy")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Field to sort by. The default is 'lastDeliveryDate'."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"sortDirection")," ",Object(r.b)("em",{parentName:"li"},"(optional)")," \u2014 Sort direction. The default is 'desc'.")),Object(r.b)("h3",{id:"example-request"},"Example Request"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"GET https://apps.availity.com/api/notifications?type=PDM&includeRead=true\n")),Object(r.b)("h3",{id:"example-response"},"Example Response"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "totalCount": 1,\n  "count": 1,\n  "offset": 0,\n  "limit": 50,\n  "links": {\n    "self": {\n      "href": "https://apps.availity.com/api/v1/notifications?type=PDM&includeRead=true"\n    }\n  },\n  "notifications": [\n    {\n      "id": "83582901741516995037509300045112",\n      "createdDate": "2018-01-26T19:31:03.000+0000",\n      "updatedDate": "2018-03-02T16:20:08.000+0000",\n      "nature": "Action Item",\n      "type": "PDM",\n      "subject": "Provider Data Management",\n      "title": "Acme provider directory - We have not received your verified Q1 information.  Please submit&#x21;",\n      "subtitle": "Quarterly submissions build trust with patients that your information is correct and reliable.",\n      "message": "Acme provider directory - We have not received your verified Q1 information.  Please submit&#x21;",\n      "link": "&#x2f;public&#x2f;apps&#x2f;provider-self-service-maintenance&#x2f;&#x23;&#x2f;cms",\n      "linkTarget": "_blank",\n      "activeDate": "2018-03-01T19:30:31.000+0000",\n      "expirationDate": "2018-03-30T04:00:00.000+0000",\n      "lastDeliveryDate": "2018-03-01T19:30:32.000+0000",\n      "topic": "PDM",\n      "read": false,\n      "viewed": true,\n      "interruptIndicator": false\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);