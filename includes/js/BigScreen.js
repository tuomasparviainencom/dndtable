// BigScreen v2.0.4 - 2014-02-06 - Apache 2.0 License
!function(a,b,c){"use strict";function d(a){var b=null;if("VIDEO"===a.tagName)b=a;else{var c=a.getElementsByTagName("video");c[0]&&(b=c[0])}return b}function e(a){var b=d(a);if(b&&b.webkitEnterFullscreen){try{b.readyState<b.HAVE_METADATA?(b.addEventListener("loadedmetadata",function e(){b.removeEventListener("loadedmetadata",e,!1),b.webkitEnterFullscreen(),m=!!b.getAttribute("controls")},!1),b.load()):(b.webkitEnterFullscreen(),m=!!b.getAttribute("controls")),l=b}catch(c){return s("not_supported",a)}return!0}return s(void 0===k.request?"not_supported":"not_enabled",a)}function f(){t.element||(r(),h())}function g(){c&&"webkitfullscreenchange"===k.change&&a.addEventListener("resize",f,!1)}function h(){c&&"webkitfullscreenchange"===k.change&&a.removeEventListener("resize",f,!1)}var i="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,j=/i(Pad|Phone|Pod)/.test(navigator.userAgent)&&parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/,"$1.$2"),10)>=7,k=function(){var a=b.createElement("video"),c={request:["requestFullscreen","webkitRequestFullscreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"],exit:["exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],enabled:["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],element:["fullscreenElement","webkitFullscreenElement","webkitCurrentFullScreenElement","mozFullScreenElement","msFullscreenElement"],change:["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],error:["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"]},d={};for(var e in c)for(var f=0,g=c[e].length;g>f;f++)if(c[e][f]in a||c[e][f]in b||"on"+c[e][f].toLowerCase()in b){d[e]=c[e][f];break}return d}(),l=null,m=null,n=function(){},o=[],p=!1;navigator.userAgent.indexOf("Android")>-1&&navigator.userAgent.indexOf("Chrome")>-1&&(p=parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/,"$1"),10)||!0);var q=function(a){var b=o[o.length-1];(a!==b.element&&a!==l||!b.hasEntered)&&("VIDEO"===a.tagName&&(l=a),1===o.length&&t.onenter(t.element),b.enter.call(b.element,a||b.element),b.hasEntered=!0)},r=function(){!l||m||j||(l.setAttribute("controls","controls"),l.removeAttribute("controls")),l=null,m=null;var a=o.pop();a&&(a.exit.call(a.element),t.element||(o.forEach(function(a){a.exit.call(a.element)}),o=[],t.onexit()))},s=function(a,b){if(o.length>0){var c=o.pop();b=b||c.element,c.error.call(b,a),t.onerror(b,a)}},t={request:function(a,d,f,g){if(a=a||b.body,o.push({element:a,enter:d||n,exit:f||n,error:g||n}),void 0===k.request)return e(a);if(c&&b[k.enabled]===!1)return e(a);if(p!==!1&&32>p)return e(a);if(c&&void 0===k.enabled)return k.enabled="webkitFullscreenEnabled",a[k.request](),setTimeout(function(){b[k.element]?b[k.enabled]=!0:(b[k.enabled]=!1,e(a))},250),void 0;try{/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[k.request]():a[k.request](i&&Element.ALLOW_KEYBOARD_INPUT),setTimeout(function(){b[k.element]||s(c?"not_enabled":"not_allowed",a)},100)}catch(h){s("not_enabled",a)}},exit:function(){h(),b[k.exit]()},toggle:function(a,b,c,d){t.element?t.exit():t.request(a,b,c,d)},videoEnabled:function(a){if(t.enabled)return!0;a=a||b.body;var c=d(a);return c&&void 0!==c.webkitSupportsFullscreen?c.readyState<c.HAVE_METADATA?"maybe":c.webkitSupportsFullscreen:!1},onenter:n,onexit:n,onchange:n,onerror:n};try{Object.defineProperties(t,{element:{enumerable:!0,get:function(){return l&&l.webkitDisplayingFullscreen?l:b[k.element]||null}},enabled:{enumerable:!0,get:function(){return"webkitCancelFullScreen"!==k.exit||c?p!==!1&&32>p?!1:b[k.enabled]||!1:!0}}})}catch(u){t.element=null,t.enabled=!1}k.change&&b.addEventListener(k.change,function(){if(t.onchange(t.element),t.element){var a=o[o.length-2];a&&a.element===t.element?r():(q(t.element),g())}else r()},!1),b.addEventListener("webkitbeginfullscreen",function(a){o.push({element:a.srcElement,enter:n,exit:n,error:n}),t.onchange(a.srcElement),q(a.srcElement)},!0),b.addEventListener("webkitendfullscreen",function(a){t.onchange(a.srcElement),r(a.srcElement)},!0),k.error&&b.addEventListener(k.error,function(){s("not_allowed")},!1),a.BigScreen=t}(window,document,self!==top);