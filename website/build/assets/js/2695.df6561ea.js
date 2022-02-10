(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2695],{94532:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(29603),a=n(50120),o=n(27378);const l=function(e){var t=e.width,n=void 0===t?30:t,l=e.height,c=void 0===l?30:l,i=e.className,s=(0,a.Z)(e,["width","height","className"]);return o.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:i,width:n,height:c,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.createElement("title",null,"Menu"),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},20509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>we});var r=n(27378),a=n(38944),o=n(3128),l=n(52338);const c="skipToContent_3wvD";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const s=function(){var e=(0,r.useRef)(null);return(0,l.ru)((function(){e.current&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(1415);const m="announcementBar_2FrG",d="announcementBarClose_QGKR",f="announcementBarContent_1th2",v="announcementBarCloseable_B17v";const h=function(){var e,t=(0,u.Z)(),n=t.isAnnouncementBarClosed,c=t.closeAnnouncementBar,i=(0,l.LU)().announcementBar;if(!i)return null;var s=i.content,h=i.backgroundColor,g=i.textColor,b=i.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:h,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:d,onClick:c,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(29603);const b=function(){return null};var p=n(89939);const E={toggle:"toggle_2wFP"};var k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},_=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function N(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,i=(0,p.Z)().isClient;return r.createElement(_,(0,g.Z)({disabled:!i,icons:{checked:r.createElement(k,{icon:n,style:a}),unchecked:r.createElement(Z,{icon:o,style:c})}},e))}var w=n(16698),y=n(69635),C=n(653);const I=function(e){var t=(0,y.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[s,c]),(0,l.ru)((function(){e&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}};var L=n(2758),A=n(55006),T=n(50120),B=n(92685);const D=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=(0,T.Z)(e,["width","height"]);return r.createElement("svg",(0,g.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:o},l),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function S(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,T.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),c=(0,p.Z)().i18n,i=c.currentLocale,s=c.locales,u=c.localeConfigs,m=(0,l.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(i);return r.createElement(B.Z,(0,g.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(D,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}const x="searchWrapper_36Ie";function M(e){return e.mobile?null:r.createElement("div",{className:x},r.createElement(b,null))}var U={default:function(){return B.Z},localeDropdown:function(){return S},search:function(){return M},docsVersion:function(){return n(13637).Z},docsVersionDropdown:function(){return n(78252).Z},doc:function(){return n(51113).Z}};function P(e){var t=e.type,n=(0,T.Z)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=U[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var H=n(42889),R=n(94532);const W="displayOnlyInLargeViewport_2XYw",V="navbarHideable_z9Sw",O="navbarHidden_2kTK";var F="right";const z=function(){var e,t=(0,l.LU)(),n=t.navbar,o=n.items,c=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,w.Z)(),v=f.isDarkTheme,h=f.setLightTheme,p=f.setDarkTheme,E=I(c),k=E.navbarRef,Z=E.isNavbarVisible;(0,L.Z)(m);var _=(0,r.useCallback)((function(){d(!0)}),[d]),y=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?p():h()}),[h,p]),T=(0,A.Z)();(0,r.useEffect)((function(){T===A.D.desktop&&d(!1)}),[T]);var B=o.some((function(e){return"search"===e.type})),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:F)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:F)}))}}(o),S=D.leftItems,x=D.rightItems;return r.createElement("nav",{ref:k,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[V]=c,e[O]=c&&!Z,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:_,onKeyDown:_},r.createElement(R.Z,null)),r.createElement(H.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),S.map((function(e,t){return r.createElement(P,(0,g.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.createElement(P,(0,g.Z)({},e,{key:t}))})),!s&&r.createElement(N,{className:W,checked:v,onChange:C}),!B&&r.createElement(b,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(H.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&m&&r.createElement(N,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(P,(0,g.Z)({mobile:!0},e,{onClick:y,key:t}))})))))))};var G=n(53298),j=n(1847);const K="footerLogoLink_1gX9";var X=n(92722);function Y(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,T.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,j.Z)(t),i=(0,j.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(G.Z,(0,g.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),a)}var J=function(e){var t=e.sources,n=e.alt;return r.createElement(X.Z,{className:"footer__logo",alt:n,sources:t})};const Q=function(){var e=(0,l.LU)().footer,t=e||{},n=t.copyright,o=t.links,c=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,j.Z)(s.src),dark:(0,j.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},c&&c.length>0&&r.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Y,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(G.Z,{href:s.href,className:K},r.createElement(J,{alt:s.alt,sources:u})):r.createElement(J,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var q=n(65894),$=(0,l.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,l.WA)("theme").set(ne(e))};const ae=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return q.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),c=o[0],i=o[1],s=(0,r.useCallback)((function(){i(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){i(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&i(ne(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?te:ee)}))}),[]),{isDarkTheme:c===te,setLightTheme:s,setDarkTheme:u}};var oe=n(21784);const le=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(oe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var se="docusaurus.tab.";const ue=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=ie((0,l._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(se))t[a.substring(se.length)]=(0,l.WA)(a).get()}n(t)}catch(o){console.error(o)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}};var me=(0,l.WA)("docusaurus.announcement.dismiss"),de=(0,l.WA)("docusaurus.announcement.id");const fe=function(){var e=(0,l.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],o=(0,r.useCallback)((function(){me.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=de.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;de.set(t),r&&me.set("false"),(r||"false"===me.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}};var ve=n(21335);const he=function(e){var t=ue(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=fe(),l=o.isAnnouncementBarClosed,c=o.closeAnnouncementBar;return r.createElement(ve.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:l,closeAnnouncementBar:c}},e.children)};function ge(e){var t=e.children;return r.createElement(le,null,r.createElement(he,null,r.createElement(l.L5,null,t)))}var be=n(65684);function pe(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(be.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var Ee=n(67165);function ke(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(be.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ze(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,a=function(){var e=(0,p.Z)().siteConfig.url,t=(0,y.TH)().pathname;return e+(0,j.Z)(t)}(),o=t?""+n+t:a;return r.createElement(be.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function _e(e){var t=(0,p.Z)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig.metadatas,c=t.i18n,i=c.currentLocale,s=c.localeConfigs,u=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,j.Z)(a),b=(0,l.pe)(u),E=i,k=s[i].direction;return r.createElement(r.Fragment,null,r.createElement(be.Z,null,r.createElement("html",{lang:E,dir:k}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,b),r.createElement("meta",{property:"og:title",content:b})),r.createElement(Ee.Z,{description:m,keywords:f,image:d}),r.createElement(Ze,null),r.createElement(ke,null),r.createElement(pe,(0,g.Z)({tag:l.HX,locale:i},v)),r.createElement(be.Z,null,o.map((function(e,t){return r.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}const Ne=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const we=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return Ne(),r.createElement(ge,null,r.createElement(_e,e),r.createElement(s,null),r.createElement(h,null),r.createElement(z,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,c)},t),!n&&r.createElement(Q,null))}},42889:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(29603),a=n(50120),o=n(27378),l=n(53298),c=n(92722),i=n(1847),s=n(89939),u=n(52338);const m=function(e){var t=(0,s.Z)().isClient,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,g=(0,a.Z)(e,["imageClassName","titleClassName"]),b=(0,i.Z)(f.href||"/"),p={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return o.createElement(l.Z,(0,r.Z)({to:b},g,f.target&&{target:f.target}),f.src&&o.createElement(c.Z,{key:t,className:v,sources:p,alt:f.alt||m||"Logo"}),null!=m&&o.createElement("strong",{className:h},m))}},92685:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(29603),a=n(50120),o=n(27378),l=n(38944),c=n(53298),i=n(1847),s=n(69635),u=n(52338);function m(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,s=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,v=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=(0,i.Z)(l),g=(0,i.Z)(t),b=(0,i.Z)(s,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,r.Z)({},s?{href:f?b:s}:Object.assign({isNavLink:!0,activeClassName:d,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),v),u)}function d(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,["items","position","className"]),u=(0,o.useRef)(null),d=(0,o.useRef)(null),f=(0,o.useState)(!1),v=f[0],h=f[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var g=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":v})},o.createElement(m,(0,r.Z)({className:g(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,c=(0,a.Z)(e,["className"]);return o.createElement("li",{key:t},o.createElement(m,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:g(l,!0)},c)))})))):o.createElement(m,(0,r.Z)({className:g(i)},s))}function f(e){var t,n,c,i=e.items,d=e.className,f=(e.position,(0,a.Z)(e,["items","className","position"])),v=(0,o.useRef)(null),h=(0,s.TH)().pathname,g=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=g[0],p=g[1],E=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(m,(0,r.Z)({className:E(d)},f)));var k=null!=(t=v.current)&&t.scrollHeight?(null==(n=v.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(m,(0,r.Z)({role:"button",className:E(d,!0)},f,{onClick:function(e){e.preventDefault(),p((function(e){return!e}))}}),null!=(c=f.children)?c:f.label),o.createElement("ul",{className:"menu__list",ref:v,style:{height:b?void 0:k}},i.map((function(e,t){var n=e.className,l=(0,a.Z)(e,["className"]);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(m,(0,r.Z)({activeClassName:"menu__link--active",className:E(n)},l,{onClick:f.onClick})))}))))}const v=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),l=n?f:d;return o.createElement(l,r)}},51113:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(29603),a=n(50120),o=n(27378),l=n(92685),c=n(99639),i=n(38944),s=n(52338);function u(e){var t,n,u=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,c.Iw)(f),g=h.activeVersion,b=h.activeDoc,p=(0,s.J)(f).preferredVersion,E=(0,c.yW)(f),k=null!=(t=null!=g?g:p)?t:E,Z=k.docs.find((function(e){return e.id===u}));if(!Z){var _=k.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+u+" in version "+k.name+".\nAvailable docIds=\n- "+_)}return o.createElement(l.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(n={},n[m]=b&&b.sidebar===Z.sidebar,n)),label:null!=d?d:Z.id,to:Z.path}))}},78252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(29603),a=n(50120),o=n(27378),l=n(92685),c=n(99639),i=n(52338),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n,u=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),g=(0,c.Iw)(m),b=(0,c.gB)(m),p=(0,c.yW)(m),E=(0,i.J)(m),k=E.preferredVersion,Z=E.savePreferredVersionName;var _=null!=(t=null!=(n=g.activeVersion)?n:k)?t:p,N=u?"Versions":_.label,w=u?void 0:s(_).path;return o.createElement(l.Z,(0,r.Z)({},h,{mobile:u,label:N,to:w,items:function(){var e=b.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){Z(e.name)}}})),t=[].concat(f,e,v);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},13637:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(29603),a=n(50120),o=n(27378),l=n(92685),c=n(99639),i=n(52338);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.zu)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.yW)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.createElement(l.Z,(0,r.Z)({},m,{label:g,to:b}))}},22695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(27378),a=n(20509),o=n(3128);const l=function(){return r.createElement(a.Z,{title:"Page Not Found"},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},21784:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(27378).createContext(void 0)},92722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(29603),a=n(50120),o=n(27378),l=n(38944),c=n(89939),i=n(16698);const s={themedImage:"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"};const u=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,a.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,h.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:u[e],alt:f,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},21335:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(27378).createContext)(void 0)},2758:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(27378);const a=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(27378),a=n(65894),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};const l=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},16698:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(27378),a=n(21784);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1415:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(27378),a=n(21335);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},55006:(e,t,n)=>{"use strict";n.d(t,{D:()=>o,Z:()=>l});var r=n(27378),a=n(65894),o={desktop:"desktop",mobile:"mobile"};const l=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),l=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),l}}}]);