!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SmoothScroll=t():e.SmoothScroll=t()}(self,(function(){return function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d(t,{default:function(){return a}});var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=t,this.options=c(c({},{speed:600}),n),this.anchorLink=r(document.querySelectorAll('a[href*="#"]')),this.anchorSelector=r(document.querySelectorAll(".js-scroll-link")),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;(this.anchorLink||this.anchorSelector)&&[].concat(r(this.anchorLink),r(this.anchorSelector)).forEach((function(t){t.addEventListener("click",(function(r){r.preventDefault();var n=t.getAttribute("href")||t.getAttribute("data-scroll-href"),o=e.searchBlock(n),c=e.getCoords(o);e.scrollTo(c,e.options.speed)}))}))}},{key:"scrollTo",value:function(e,t){var r="number"==typeof t?t:t.replace(/[^0-9]/g,""),n="string"==typeof this.selector?document.querySelector(this.selector).offsetHeight:null,o=window.scrollY||window.pageYOffset,c=e-o-n,i=(new Date).getTime();if(Math.ceil(e)!==Math.ceil(window.pageYOffset+n))var l=setInterval((function(){var e=(new Date).getTime()-i,t=function(e,t,r,n){return(e/=n/2)<1?r/2*e*e*e*e+t:-r/2*((e-=2)*e*e*e-2)+t}(e,o,c,r);e>=r&&clearInterval(l),window.scroll(0,Math.ceil(t))}),1e3/60)}},{key:"searchBlock",value:function(e){if(e)return document.querySelector(e)?document.querySelector(e):null}},{key:"getCoords",value:function(e){var t=e.getBoundingClientRect(),r=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||r.scrollTop,c=n.clientTop||r.clientTop||0;return t.top+o-c}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();return t.default}()}));