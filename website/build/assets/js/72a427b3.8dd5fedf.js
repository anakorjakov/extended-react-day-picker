(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5360],{93280:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(29603),i=r(50120),a=(r(27378),r(35318)),o={id:"contributing",title:"Contributing",hide_title:!0,hide_table_of_contents:!0},p={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"You are welcome to join the [DayPicker",source:"@site/docs/contributing.mdx",sourceDirName:".",slug:"/contributing",permalink:"/contributing",version:"current",frontMatter:{id:"contributing",title:"Contributing",hide_title:!0,hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Changelog",permalink:"/changelog"},next:{title:"License",permalink:"/license"}},c=[{value:"Working with the source code",id:"working-with-the-source-code",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-to-daypicker"},"Contributing to DayPicker"),(0,a.kt)("p",null,"You are welcome to join the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/graphs/contributors"},"DayPicker\ncontributors"),",\nhelp us building the best date picker for React."),(0,a.kt)("p",null,"There are many ways to help the development of DayPicker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve our build tools and Github actions"),(0,a.kt)("li",{parentName:"ul"},"Opening PRs with new features, bug fixes and improved rendering performance"),(0,a.kt)("li",{parentName:"ul"},"Align the source code to the latest Typescript / React practices"),(0,a.kt)("li",{parentName:"ul"},"Helping with unit and integration tests"),(0,a.kt)("li",{parentName:"ul"},"Proofreading ",(0,a.kt)("a",{parentName:"li",href:"http://react-day-picker-next.netlify.app"},"our website")," and the\ncode documentation in the source files"),(0,a.kt)("li",{parentName:"ul"},"Making the website more stylish"),(0,a.kt)("li",{parentName:"ul"},"Help maintaining ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker"},"the repository")," on Github and triaging issues and PRs"),(0,a.kt)("li",{parentName:"ul"},"Answering our ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gpbl/react-day-picker/discussions/categories/support"},"support questions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sponsors/gpbl"},"Sponsoring the project"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/discussions"},"Send a\nmessage"),"\nin our discussions page to present yourself, or write the maintainer directly at\n",(0,a.kt)("a",{parentName:"p",href:"mailto:io@gpbl.dev"},"io@gpbl.dev"),"."),(0,a.kt)("h2",{id:"working-with-the-source-code"},"Working with the source code"),(0,a.kt)("p",null,"This repository works with ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"Yarn 2 workspaces")," to enable hot module reloading during development."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./package/react-day-picker"),": this workspace contains the DayPicker source code and the development tools"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./playground"),": a React app useful to live testing. In the future should contains enough use cases for running integration tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./website"),": the ",(0,a.kt)("a",{parentName:"li",href:"http://v2.docusaurus.io"},"Docusaurus")," app for ",(0,a.kt)("a",{parentName:"li",href:"http://react-day-picker-next.netlify.app"},"the documentation website"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone git@github.com:gpbl/react-day-picker.git\n$ cd react-day-picker\n$ yarn install\n")),(0,a.kt)("p",null,"To build and start watching the source run the ",(0,a.kt)("inlineCode",{parentName:"p"},"develop")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn workspace react-day-picker develop\n")),(0,a.kt)("p",null,"To run the unit tests in watch mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn workspace react-day-picker test --watch\n")),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"vscode")," you can open the included\nworkspace for a better developer experience."))}u.isMDXComponent=!0},35318:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);