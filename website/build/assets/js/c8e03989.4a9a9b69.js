(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{70284:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var r=n(29603),a=n(50120),s=(n(27378),n(35318)),l={id:"styling",title:"Styling DayPicker"},i={unversionedId:"basics/styling",id:"basics/styling",isDocsHomePage:!1,title:"Styling DayPicker",description:"Style via CSS",source:"@site/docs/basics/styling.mdx",sourceDirName:"basics",slug:"/basics/styling",permalink:"/basics/styling",version:"current",frontMatter:{id:"styling",title:"Styling DayPicker"},sidebar:"sidebar",previous:{title:"Selecting Days",permalink:"/basics/selecting-days"},next:{title:"Modifiers",permalink:"/guides/modifiers"}},c=[{value:"Style via CSS",id:"style-via-css",children:[]},{value:"Inline styles",id:"inline-styles",children:[]},{value:"Custom CSS classes",id:"custom-css-classes",children:[{value:"CSS Modules",id:"css-modules",children:[]}]}],o={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"style-via-css"},"Style via CSS"),(0,s.kt)("p",null,"DayPicker includes a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/master/packages/react-day-picker/style"},"CSS\nfile"),"\nto import, or to copy as template."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-day-picker/style.css';\n")),(0,s.kt)("p",null,"The CSS uses few variables to quickly override the colors and the cell size:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --rdp-cell-size: 40px;\n  --rdp-accent-color: #0000ff;\n  --rdp-background-color: #e7edff;\n  /* Switch to dark colors for dark themes */\n  --rdp-accent-color-dark: #3003e1;\n  --rdp-background-color-dark: #180270;\n  /* Outline border for focused elements */\n  --rdp-outline: 2px solid var(--rdp-accent-color);\n}\n")),(0,s.kt)("h2",{id:"inline-styles"},"Inline styles"),(0,s.kt)("p",null,"To change the appearance of any DayPicker element via inline-styles use the\n",(0,s.kt)("inlineCode",{parentName:"p"},"styles")," prop."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-include"},"basics/styling-inline.tsx\n")),(0,s.kt)("h2",{id:"custom-css-classes"},"Custom CSS classes"),(0,s.kt)("p",null,"To use custom classes, use ",(0,s.kt)("a",{parentName:"p",href:"/api/types/classnames"},(0,s.kt)("inlineCode",{parentName:"a"},"classNames")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-include"},"basics/styling-css.tsx\n")),(0,s.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,s.kt)("p",null,"Replacing the default class names is useful with ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS\nModules"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a CSS module using the class names listed in ",(0,s.kt)("a",{parentName:"li",href:"/api/types/styledelement"},"StyledElements"),". Or use ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/blob/master/packages/react-day-picker/style/index.css"},"this CSS\nfile"),",\nremove the ",(0,s.kt)("inlineCode",{parentName:"li"},"rdp-")," prefix from the selectors.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* my-css.module.css */\n.root {\n  /* ... */\n}\n.caption_label {\n  /* ... */\n}\n.day_today {\n  /* ... */\n}\n/* etc.. */\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Pass the imported CSS module to the ",(0,s.kt)("inlineCode",{parentName:"li"},"classNames")," prop")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { DayPicker } from 'react-day-picker';\n\nimport * as classNames from './my-css.module.css';\n\nexport default function App() {\n  return (\n    <>\n      <style>{style}</style>\n      <DayPicker classNames={classNames} />\n    </>\n  );\n}\n")))}p.isMDXComponent=!0},35318:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);