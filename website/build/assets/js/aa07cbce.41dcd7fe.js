(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5631],{6274:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>l,toc:()=>p,default:()=>d});var a=n(29603),i=n(50120),r=(n(27378),n(35318)),o={id:"daypicker",title:"Function: DayPicker",sidebar_label:"DayPicker",sidebar_position:0,custom_edit_url:null},l={unversionedId:"api/functions/daypicker",id:"api/functions/daypicker",isDocsHomePage:!1,title:"Function: DayPicker",description:"\u25b8 DayPicker(props): JSX.Element",source:"@site/docs/api/functions/daypicker.md",sourceDirName:"api/functions",slug:"/api/functions/daypicker",permalink:"/api/functions/daypicker",editUrl:null,version:"current",sidebar_label:"DayPicker",sidebarPosition:0,frontMatter:{id:"daypicker",title:"Function: DayPicker",sidebar_label:"DayPicker",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"Function: DayContent",permalink:"/api/functions/daycontent"},next:{title:"Function: Dropdown",permalink:"/api/functions/dropdown"}},p=[{value:"Customization",id:"customization",children:[]},{value:"Controlling the months",id:"controlling-the-months",children:[]},{value:"Selection modes",id:"selection-modes",children:[]},{value:"Modifiers",id:"modifiers",children:[]},{value:"Formatters and custom component",id:"formatters-and-custom-component",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Form fields",id:"form-fields",children:[]},{value:"Localization",id:"localization",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"DayPicker"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,r.kt)("p",null,"DayPicker render a date picker component to let users pick dates from a\ncalendar. See ",(0,r.kt)("a",{parentName:"p",href:"http://react-day-picker.js.org"},"http://react-day-picker.js.org")," for updated documentation and\nexamples."),(0,r.kt)("h3",{id:"customization"},"Customization"),(0,r.kt)("p",null,"DayPicker offers different customization props. For example,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"show multiple months using ",(0,r.kt)("inlineCode",{parentName:"li"},"numberOfMonths")),(0,r.kt)("li",{parentName:"ul"},"display a dropdown to navigate the months via ",(0,r.kt)("inlineCode",{parentName:"li"},"captionLayout")),(0,r.kt)("li",{parentName:"ul"},"display the week numbers with ",(0,r.kt)("inlineCode",{parentName:"li"},"showWeekNumbers")),(0,r.kt)("li",{parentName:"ul"},"disable or hide days with ",(0,r.kt)("inlineCode",{parentName:"li"},"disabled")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden"))),(0,r.kt)("h3",{id:"controlling-the-months"},"Controlling the months"),(0,r.kt)("p",null,"Change the initially displayed month using the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMonth")," prop. The\ndisplayed months are controlled by DayPicker and stored in its internal\nstate. To control the months yourself, use ",(0,r.kt)("inlineCode",{parentName:"p"},"month")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMonth"),"\nand use the ",(0,r.kt)("inlineCode",{parentName:"p"},"onMonthChange")," event to set it."),(0,r.kt)("p",null,"To limit the months the user can navigate to, use\n",(0,r.kt)("inlineCode",{parentName:"p"},"fromDate"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"fromMonth"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"fromYear")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"toDate"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"toMonth"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"toYear"),"."),(0,r.kt)("h3",{id:"selection-modes"},"Selection modes"),(0,r.kt)("p",null,"DayPicker supports different selection mode that can be toggled using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," prop:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'mode="single"'),": only one day can be selected. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," to make the\nselection required. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"onSelect")," event handler to get the selected\ndays."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'mode="multiple"'),": users can select one or more days. Limit the amount of\ndays that can be selected with the ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," props."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'mode="range"'),": users can select a range of days. Limit the amount of days\nin the range with the ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," props.")),(0,r.kt)("p",null,"These selection modes should cover the most common use cases. In case you\nneed a more refined way of selecting days, use ",(0,r.kt)("inlineCode",{parentName:"p"},'mode="uncontrolled"'),". Use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," props and add the day event handlers to add/remove days from the\nselection."),(0,r.kt)("h3",{id:"modifiers"},"Modifiers"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"modifier"),' represents different styles or states for the days displayed in\nthe calendar (like "selected" or "disabled"). Define custom modifiers using\nthe ',(0,r.kt)("inlineCode",{parentName:"p"},"modifiers")," prop."),(0,r.kt)("h3",{id:"formatters-and-custom-component"},"Formatters and custom component"),(0,r.kt)("p",null,"You can customize how the content is displayed in the date picker by using\neither the formatters or replacing the internal components."),(0,r.kt)("p",null,"For the most common cases you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatters")," prop to change how\nthe content is formatted in the calendar. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," prop to\nreplace the internal components, like the navigation icons."),(0,r.kt)("h3",{id:"styling"},"Styling"),(0,r.kt)("p",null,"DayPicker comes with a default, basic style in ",(0,r.kt)("inlineCode",{parentName:"p"},"react-day-picker/style")," \u2013\nuse it as template for your own style."),(0,r.kt)("p",null,"If you are using CSS modules, pass the imported styles object the\n",(0,r.kt)("inlineCode",{parentName:"p"},"classNames")," props."),(0,r.kt)("p",null,"You can also style the elements via inline-styles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," prop."),(0,r.kt)("h3",{id:"form-fields"},"Form fields"),(0,r.kt)("p",null,"If you need to bind the date picker to a form field, you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"useInput")," hooks for a basic behavior. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"useInput")," source as an\nexample to bind the date picker with form fields."),(0,r.kt)("h3",{id:"localization"},"Localization"),(0,r.kt)("p",null,"To localize DayPicker, import the locale from ",(0,r.kt)("inlineCode",{parentName:"p"},"date-fns")," package and use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," prop."),(0,r.kt)("p",null,"For example, to use Spanish locale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import es from 'date-fns/locale/es';\n<DayPicker locale={es} />\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"props")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/types/daypickerprops"},"DayPickerProps"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JSX.Element")))}d.isMDXComponent=!0},35318:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>u});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);