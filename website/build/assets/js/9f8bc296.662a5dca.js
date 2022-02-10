(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6507],{59227:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>o,toc:()=>c,default:()=>p});var r=n(29603),l=n(50120),a=(n(27378),n(35318)),i={id:"selectsinglecontextvalue",title:"Interface: SelectSingleContextValue",sidebar_label:"SelectSingleContextValue",sidebar_position:0,custom_edit_url:null},o={unversionedId:"api/interfaces/selectsinglecontextvalue",id:"api/interfaces/selectsinglecontextvalue",isDocsHomePage:!1,title:"Interface: SelectSingleContextValue",description:"Represents the value of a SelectSingleContext.",source:"@site/docs/api/interfaces/selectsinglecontextvalue.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/selectsinglecontextvalue",permalink:"/api/interfaces/selectsinglecontextvalue",editUrl:null,version:"current",sidebar_label:"SelectSingleContextValue",sidebarPosition:0,frontMatter:{id:"selectsinglecontextvalue",title:"Interface: SelectSingleContextValue",sidebar_label:"SelectSingleContextValue",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Interface: SelectRangeContextValue",permalink:"/api/interfaces/selectrangecontextvalue"},next:{title:"Interface: SelectSingleEventHandler",permalink:"/api/interfaces/selectsingleeventhandler"}},c=[{value:"Properties",id:"properties",children:[{value:"handleDayClick",id:"handledayclick",children:[]},{value:"modifiers",id:"modifiers",children:[]},{value:"selected",id:"selected",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents the value of a ",(0,a.kt)("a",{parentName:"p",href:"/api/variables/selectsinglecontext"},"SelectSingleContext"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"handledayclick"},"handleDayClick"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"handleDayClick"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/types/dayclickeventhandler"},"DayClickEventHandler")),(0,a.kt)("p",null,"Event handler to attach to the day button to enable the single select."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"modifiers"},"modifiers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"modifiers"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,a.kt)("a",{parentName:"p",href:"/api/types/modifiers"},"Modifiers"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"selected"'),">"),(0,a.kt)("p",null,"The modifiers for the corresponding selection."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"selected"},"selected"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"selected"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"The day that has been selected."))}p.isMDXComponent=!0},35318:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=l,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);