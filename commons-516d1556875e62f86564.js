(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},967:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),o=r(5444),i=function(e){e.siteTitle;return n.createElement("header",{className:"header"},n.createElement("div",{className:"container"},n.createElement("div",{className:"logo"},n.createElement(o.rU,{to:"/"},n.createElement("img",{src:"/images/dioiz_logo_header.svg",alt:""}))),n.createElement("nav",{className:"nav"},n.createElement("ul",null,n.createElement("li",null,n.createElement(o.rU,{to:"/product_embedded_wizard"},"Embedded Wizard")),n.createElement("li",null,n.createElement(o.rU,{to:"/about_us/"},"会社概要")),n.createElement("li",null,n.createElement(o.rU,{to:"/blog/"},"ブログ"))))))};i.defaultProps={siteTitle:""};var a=i,c=function(e){e.siteTitle;return n.createElement("footer",{className:"bg-primary text-white text-center text-lg-start footer"},n.createElement("div",{className:"container p-4"},n.createElement(o.rU,{to:"/"},n.createElement("img",{src:"/images/dioiz_logo_footer.svg",alt:""})),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6 col-md-12 mb-4 mb-md-0"},n.createElement("ul",{className:"mb-0 space-y-1 text-gray-300"},n.createElement("li",null,"20th Floor, 149, Sejong-daero, Jongno-gu, "),n.createElement("li",null,"Seoul, Korea, 〒03186"),n.createElement("li",null,"Tel +82-2-785-5709"),n.createElement("li",null,"Fax +82-2-723-5900"))),n.createElement("div",{className:"col-lg-3 col-md-6 mb-4 mb-md-0"},n.createElement("ul",{className:"list-unstyled mb-0"},n.createElement("li",null,n.createElement(o.rU,{to:"/product_embedded_wizard/",className:"text-white"},"Embedded Wizard")))),n.createElement("div",{className:"col-lg-3 col-md-6 mb-4 mb-md-0"},n.createElement("ul",{className:"list-unstyled"},n.createElement("li",null,n.createElement(o.rU,{to:"/about_us/",className:"text-white"},"About Us")),n.createElement("li",null,n.createElement(o.rU,{to:"/blog/",className:"text-white"},"Blog")))))),n.createElement("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"}},n.createElement("p",null,"Copyright © 2021 DIOIZ Co., Ltd. All Rights Reserved.")))};c.defaultProps={siteTitle:""};var u=c,l=function(e){var t,r=e.children,i=(0,o.K2)("3649515864");return n.createElement(n.Fragment,null,n.createElement(a,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("main",null,r),n.createElement(u,null))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,o,i,a,c=r(7294),u=r(5697),l=r.n(u),s=r(4839),f=r.n(s),p=r(2993),d=r.n(p),m=r(6494),y=r.n(m),h="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",w="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",j="property",P="rel",k="src",x="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",U=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),r=Q(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},Z=function(e){return Q(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===P&&"canonical"===e[r].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==O||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(D):r.getAttribute(D)!==a.join(",")&&r.setAttribute(D,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(b,o,n),link:pe(v.LINK,i,n),meta:pe(v.META,a,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,u,n),style:pe(v.STYLE,l,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:J([w,x],e),bodyAttributes:$(h,e),defer:Q(e,I),encode:Q(e,_),htmlAttributes:$(b,e),linkTags:G(v.LINK,[P,w],e),metaTags:G(v.META,[S,T,A,j,O],e),noscriptTags:G(v.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:G(v.SCRIPT,[k,C],e),styleTags:G(v.STYLE,[E],e),title:V(e),titleAttributes:$(g,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(o=me,a=i=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return z({},o,((t={})[n.type]=a,t.titleAttributes=z({},i),t));case v.BODY:return z({},o,{bodyAttributes:z({},i)});case v.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((r={})[n.type]=z({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[U[r]||r]=e[r],t}),t)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var he=r(5444);function be(e){var t,r,n=e.description,o=e.lang,i=e.meta,a=e.title,u=(0,he.K2)("63159454").site,l=n||u.siteMetadata.description,s=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ye,{htmlAttributes:{lang:o},title:a,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(i)})}be.defaultProps={lang:"en",meta:[],description:""};var ge=be}}]);
//# sourceMappingURL=commons-516d1556875e62f86564.js.map