(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5919],{8582:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>s,metadata:()=>d,toc:()=>o,default:()=>p});var n=i(29603),a=i(50120),r=(i(27378),i(35318)),s={id:"modifiers",title:"Modifiers"},d={unversionedId:"guides/modifiers",id:"guides/modifiers",isDocsHomePage:!1,title:"Modifiers",description:"A modifier represents different state or style of a days shown in the",source:"@site/docs/guides/modifiers.mdx",sourceDirName:"guides",slug:"/guides/modifiers",permalink:"/guides/modifiers",version:"current",frontMatter:{id:"modifiers",title:"Modifiers"},sidebar:"sidebar",previous:{title:"Styling DayPicker",permalink:"/basics/styling"},next:{title:"Custom Selections",permalink:"/guides/custom-selections"}},o=[{value:"Disabling days",id:"disabling-days",children:[]},{value:"Hidden days",id:"hidden-days",children:[]},{value:"The <code>today</code> modifier",id:"the-today-modifier",children:[]},{value:"Custom modifiers",id:"custom-modifiers",children:[]},{value:"Styling days with modifiers",id:"styling-days-with-modifiers",children:[{value:"Styling via class names",id:"styling-via-class-names",children:[]},{value:"Styling via inline styles",id:"styling-via-inline-styles",children:[]}]}],l={toc:o};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"modifier")," represents different state or style of a days shown in the\ncalendar."),(0,r.kt)("p",null,"DayPicker comes with some built in modifiers: ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"selected"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"today"),", that are assigned to the matching days by using the corrispective\nprops. It is also possible to add new modifiers to add different styles or\nstates for the days."),(0,r.kt)("h2",{id:"disabling-days"},"Disabling days"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," modifier disables the interaction with a day. It is set using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop. Pass a ",(0,r.kt)("a",{parentName:"p",href:"/api/types/matcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Matcher"))," or an array of Matchers\nto choose the disabled days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-disabled.tsx\n")),(0,r.kt)("h2",{id:"hidden-days"},"Hidden days"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden")," modifier disables the interaction with a day. It is set using the ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-hidden.tsx\n")),(0,r.kt)("h2",{id:"the-today-modifier"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"today")," modifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"today")," modifier is added to the current date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-today.tsx\n")),(0,r.kt)("p",null,"Change the current date with the ",(0,r.kt)("inlineCode",{parentName:"p"},"today")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-today-change.tsx\n")),(0,r.kt)("h2",{id:"custom-modifiers"},"Custom modifiers"),(0,r.kt)("p",null,"Add new modifiers according to your app\u2019s requirements. For example, a booking\napp may use a ",(0,r.kt)("inlineCode",{parentName:"p"},"booked")," modifier to mark days as already booked."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"modifiers")," prop to pass an object with custom modifiers. Change the\ninline-style of the cell with ",(0,r.kt)("inlineCode",{parentName:"p"},"modifierStyles"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-custom.tsx\n")),(0,r.kt)("h2",{id:"styling-days-with-modifiers"},"Styling days with modifiers"),(0,r.kt)("p",null,"A day can be styled according to its modifiers \u2013 using CSS or inline\nstyles."),(0,r.kt)("h3",{id:"styling-via-class-names"},"Styling via class names"),(0,r.kt)("p",null,"A modifier is added in the class name of the Day element: for example, a disabled day will get the ",(0,r.kt)("inlineCode",{parentName:"p"},".rdp-day_disabled"),' class name,\na "booked" day ',(0,r.kt)("inlineCode",{parentName:"p"},".rdp-day_booked"),", etc."),(0,r.kt)("p",null,"You can change which class name get each modifier via\n",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/daypickerbase#modifiersclassnames"},"modifierClassNames"),". Is also\npossible to just the class name prefix via\n",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/daypickerbase#modifierPrefix"},"modifierPrefix"),"."),(0,r.kt)("p",null,"The following example adds ",(0,r.kt)("inlineCode",{parentName:"p"},".my-booked-class")," to the day with a ",(0,r.kt)("inlineCode",{parentName:"p"},"booked")," modifier \u2013 applying a custom class name to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-classnames.tsx\n")),(0,r.kt)("h3",{id:"styling-via-inline-styles"},"Styling via inline styles"),(0,r.kt)("p",null,"Another practical way is using inline styles. Use\n",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/daypickerbase#modifierstyles"},"modifierStyles")," to change the\nstyle of a day matching the specified modifier."),(0,r.kt)("p",null,"In the following example, the available days are styled via inline styles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include"},"guides/modifiers-style.tsx\n")))}p.isMDXComponent=!0},35318:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>p,kt:()=>u});var n=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(i),u=a,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return i?n.createElement(f,s(s({ref:t},p),{},{components:i})):n.createElement(f,s({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var l=2;l<r;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);