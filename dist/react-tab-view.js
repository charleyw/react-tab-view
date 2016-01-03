!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactTabView=e(require("react")):t.ReactTabView=e(t.React)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";t.exports=n(2)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";var r=n(3)["default"],i=n(4)["default"];Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),s=i(o);n(21),e["default"]=s["default"].createClass({displayName:"react-tab-view",propTypes:{isDraggable:s["default"].PropTypes.bool},touchState:{},getInitialState:function(){return{currentIndex:0,baseWidth:0}},getTitleItemCssClasses:function(t){return t===this.state.currentIndex?"tab-title-item active":"tab-title-item"},getWidth:function(t){return t.getBoundingClientRect().width||t.offsetWidth},componentDidMount:function(){var t=this.getWidth(this.refs.tabView);this.setState({baseWidth:t}),this.adaptHeight()},componentDidUpdate:function(t,e){e.currentIndex!==this.state.currentIndex&&this.adaptHeight()},adaptHeight:function(){var t=this.state.currentIndex;this.refs.tabItems.style.height=this.refs["tab-item-"+t].offsetHeight+"px"},swipeStart:function(t){var e=void 0!==t.touches?t.touches[0].pageX:t.clientX,n=void 0!==t.touches?t.touches[0].pageY:t.clientY;this.touchState={isDragging:!0,startX:e,startY:n,curX:e,curY:n}},swipeMove:function(t){if(this.touchState.isDragging){var e=this.props.isDraggable,n=this.state,i=n.currentIndex,o=n.baseWidth,s=this.touchState,a=s.startX,c=s.startY,u=s.isSwiping,l=s.isScrolling,f=void 0!==t.touches?t.touches[0].pageX:t.clientX,p=void 0!==t.touches?t.touches[0].pageY:t.clientY,d=Math.abs(c-p),h=Math.abs(a-f);u||l||(h>7?u=!0:d>10&&(l=!0)),u&&(t.preventDefault(),e&&this.setState({isDragging:!0,currentBaseTranslate:i*o+this.touchState.startX-f})),this.touchState=r(this.touchState,{isScrolling:l,isSwiping:u,isDragging:!0,curX:f,curY:p})}},swipeEnd:function(t){var e=this.state.currentIndex,n=this.touchState,i=n.startX,o=n.curX,a=n.isSwiping,c=20,u=Math.abs(i-o),l=this.getSwipeDirection(i,o),f=e,p=s["default"].Children.count(this.props.children)-1;a&&u>c&&("left"===l&&p>e?f=e+1:"right"==l&&e>0&&(f=e-1)),this.setState({isDragging:!1,currentIndex:f}),this.touchState=r(this.touchState,{isDragging:!1,isSwiping:!1,isScrolling:!1})},getSwipeDirection:function(t,e){return e>t?"right":"left"},render:function(){var t=this,e=this,n=this.state,r=n.baseWidth,i=n.currentIndex,o=n.isDragging,a=n.currentBaseTranslate,c=s["default"].Children.count(this.props.children),u=r?{width:r*c,transitionProperty:o?"none":"all",transform:"translate3d(-"+(o?a:r*i)+"px, 0, 0)"}:{},l=r?{width:r}:{},f=r?{width:r/c,transitionProperty:o?"none":"all",transform:"translate3d("+(o?a/c:r*i/c)+"px, 0, 0)"}:{};return s["default"].createElement("div",{ref:"tabView",className:"react-tab-view"},s["default"].createElement("nav",{className:"tab-title-items"},s["default"].Children.map(this.props.children,function(n,r){return s["default"].createElement("div",{onClick:function(){t.setState({currentIndex:r})},className:e.getTitleItemCssClasses(r)},n.props.name)})),s["default"].createElement("div",{className:"indicator",style:f}),s["default"].createElement("div",{ref:"tabItems",className:"tab-content-items",style:u,onMouseDown:this.swipeStart,onMouseMove:this.swipeMove,onMouseUp:this.swipeEnd,onMouseLeave:this.swipeEnd,onTouchStart:this.swipeStart,onTouchMove:this.swipeMove,onTouchEnd:this.swipeEnd,onTouchCancel:this.swipeEnd},s["default"].Children.map(this.props.children,function(t,e){return s["default"].createElement("div",{ref:"tab-item-"+e,style:l,className:"tab-content-item"},t)})))}}),t.exports=e["default"]},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(t,e,n){n(17),t.exports=n(1).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(6);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(12),i=n(1),o=n(8),s="prototype",a=function(t,e,n){var c,u,l,f=t&a.F,p=t&a.G,d=t&a.S,h=t&a.P,g=t&a.B,v=t&a.W,b=p?i:i[e]||(i[e]={}),m=p?r:d?r[e]:(r[e]||{})[s];p&&(n=e);for(c in n)u=!f&&m&&c in m,u&&c in b||(l=u?m[c]:n[c],b[c]=p&&"function"!=typeof m[c]?n[c]:g&&u?o(l,r):v&&m[c]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[s]=t[s],e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((b[s]||(b[s]={}))[c]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){var r=n(14),i=n(16),o=n(13);t.exports=n(11)(function(){var t=Object.assign,e={},n={},r=Symbol(),i="abcdefghijklmnopqrst";return e[r]=7,i.split("").forEach(function(t){n[t]=t}),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=i})?function(t,e){for(var n=i(t),s=arguments,a=s.length,c=1,u=r.getKeys,l=r.getSymbols,f=r.isEnum;a>c;)for(var p,d=o(s[c++]),h=l?u(d).concat(l(d)):u(d),g=h.length,v=0;g>v;)f.call(d,p=h[v++])&&(n[p]=d[p]);return n}:Object.assign},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(10);r(r.S+r.F,"Object",{assign:n(15)})},function(t,e,n){e=t.exports=n(19)(),e.push([t.id,".react-tab-view,.react-tab-view *{box-sizing:border-box}.react-tab-view{height:100%;padding-top:50px;position:relative;overflow:hidden}.tab-title-items{position:absolute;top:0;display:table;width:100%;height:50px;padding:0;table-layout:fixed;background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><line x1='0' y1='100%' x2='100%' y2='100%' style='stroke:#e5e5e5;stroke-width:1'/></svg>\") no-repeat 0 0}.indicator{position:absolute;height:3px;background-color:#c0392b;top:47px;transition:all .2s ease}.tab-title-item{display:table-cell;width:1%;height:100%;color:#999;text-align:center;vertical-align:middle}.tab-title-item.active{color:#c0392b}.tab-content-items{height:100%;transition:all .2s ease}.tab-content-item{height:100%;display:block;float:left}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=f[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(a(r.parts[o],e))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(a(r.parts[o],e));f[r.id]={id:r.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],a=i[2],c=i[3],u={css:s,media:a,sourceMap:c};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(){var t=document.createElement("style"),e=h();return t.type="text/css",e.appendChild(t),t}function s(){var t=document.createElement("link"),e=h();return t.rel="stylesheet",e.appendChild(t),t}function a(t,e){var n,r,i;if(e.singleton){var a=v++;n=g||(g=o()),r=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),r=l.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=u.bind(null,n),i=function(){n.parentNode.removeChild(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function c(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e){var n=e.css,r=e.media;e.sourceMap;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e){var n=e.css,r=(e.media,e.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0;t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d());var n=i(t);return r(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=f[a.id];c.refs--,o.push(c)}if(t){var u=i(t);r(u,e)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.id,r,""]]);n(20)(r,{});r.locals&&(t.exports=r.locals)},function(e,n){e.exports=t}])});