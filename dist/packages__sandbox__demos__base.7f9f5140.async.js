(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{pgy8:function(t,e,r){"use strict";function n(t){return t.filter((function(t){return!(t in this)&&(this[t]=!0)}),{})}function o(t){var e=/^function\b\s[A-Z].*/,r=/^class\b/;return t.prototype&&t.prototype.constructor===t&&Object.getOwnPropertyNames(t.prototype).length>1||e.test(t.toString())||r.test(t.toString())}function i(t){return 0===t.name.indexOf("bound ")&&!t.hasOwnProperty("prototype")}r.d(e,"a",(function(){return b}));var a="function"===typeof document.all&&"undefined"===typeof document.all,c=a?t=>"function"===typeof t&&"undefined"!==typeof t:t=>"function"===typeof t;function u(t){var e=new Map,r={};return Object.getOwnPropertyNames(t).filter(e=>{var r=Object.getOwnPropertyDescriptor(t,e);return!(null===r||void 0===r?void 0:r.configurable)}).forEach(n=>{var o=Object.getOwnPropertyDescriptor(t,n);if(o){var i=Object.prototype.hasOwnProperty.call(o,"get");"top"!==n&&"self"!==n&&"window"!==n&&"document"!==n||(o.configurable=!0,i||(o.writable=!0)),i&&e.set(n,!0),Object.defineProperty(r,n,Object.freeze(o))}}),{fakeWindow:r,propertiesWithGetter:e}}var s=Symbol("bound value"),p=new Map,f=new Map;function y(t,e){if(c(e)&&!i(e)&&!o(e)){if(e[s])return e[s];var r=e.bind(t);return Object.keys(e).forEach(t=>r[t]=e[t]),Object.defineProperty(e,s,{enumerable:!1,value:r}),r}return e}function l(t){var e=f.get(t);if(!e){var r=t();return f.set(t,r),r}return e}function w(t,e){var r=p.get(t);if(r)return r[e]}var d={undefined:!0,Array:!0,Object:!0,String:!0,Boolean:!0,Math:!0,eval:!0,Number:!0,Symbol:!0,parseFloat:!0,Float32Array:!0};class h{constructor(t,e){this.proxy=void 0,this.options=void 0,this.context=void 0,this.options=e,this.context=t,this.proxy=this.createProxy()}createProxy(){var t=this.options&&this.getBlackMap()||{},e=Object.assign({},window,this.context),r=u(window),o=r.fakeWindow,i=r.propertiesWithGetter,a=new Map,c=t=>o.hasOwnProperty(t)||e.hasOwnProperty(t),s=new Proxy(Object.assign(o,this.context),{set(t,e,r,n){return t["".concat(e)]=r,!0},get(r,n){if(!t.hasOwnProperty(n)){if(n===Symbol.unscopables)return d;if("top"===n||"window"===n||"self"===n)return s;if("hasOwnProperty"===n)return c;var o=w(s,n);if(o)return l(o);var a=i.has(n)?e[n]:r[n]||e[n];return y(e,a)}console.error("\u5c5e\u6027".concat(n,"\u88ab\u62e6\u622a"))},has(t,r){return r in d||r in t||r in e},getOwnPropertyDescriptor(t,r){if(t.hasOwnProperty(r)){var n=Object.getOwnPropertyDescriptor(t,r);return a.set(r,"target"),n}if(e.hasOwnProperty(r)){var o=Object.getOwnPropertyDescriptor(e,r);return a.set(r,"context"),o}},ownKeys(t){return n(Reflect.ownKeys(e).concat(Reflect.ownKeys(t)))},defineProperty(t,r,n){var o=a.get(r);switch(o){case"context":return Reflect.defineProperty(e,r,n);default:return Reflect.defineProperty(t,r,n)}},deleteProperty(t,e){return!t.hasOwnProperty(e)||(delete t[e],!0)}});return s}getBlackMap(){for(var t={},e=this.options.blackList,r=void 0===e?[]:e,n=0;n<r.length;n++){var o=r[n];t[o]=!0}return t}}function b(t,e){window.Proxy&&(t=new h(t,e).proxy);var r=e=>{try{return new Function("context","with (context) { return (function(){".concat(e,"})()}"))(t)}catch(r){return r}};return r.context=t,r.exec=r,r}},uEO9:function(t,e,r){"use strict";r.r(e);var n=r("ZZRV"),o=r.n(n),i=r("pgy8"),a=()=>{var t={a:1,b:2},e=Object(i["a"])(t),r=e("return a + b");return o.a.createElement("div",null,o.a.createElement("div",null,"\u8f93\u51fa\u7ed3\u679c: ",r.toString()))};e["default"]=a}}]);