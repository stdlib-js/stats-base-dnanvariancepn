// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=u.call(t,v,"$1e"),t=u.call(t,b,"e"),t=u.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=u.call(t,f,"e+0$1"),t=u.call(t,g,"e-0$1"),e.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,h,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):p.call(t)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var _=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,t,n,o,c,p,l,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if("string"==typeof(t=e[l]))c+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,k(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=y(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),c+=t.arg||"",p+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,a;for(i=[],a=0,t=j.exec(e);t;)(r=e.slice(a,j.lastIndex-t[0].length)).length&&i.push(r),i.push(V(t)),a=j.lastIndex,t=j.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function $(e){var r,i;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return S.apply(null,r)}var F=Object.prototype,I=F.toString,A=F.__defineGetter__,C=F.__defineSetter__,N=F.__lookupGetter__,R=F.__lookupSetter__,O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(N.call(e,r)||R.call(e,r)?(t=e.__proto__,e.__proto__=F,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&A&&A.call(e,r,i.get),o&&C&&C.call(e,r,i.set),e};function P(e,r,i){O(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var Z=Math.floor,G=128;function W(e,r,i,t,a,n,o){var s,c,p,l,u,f,g,d,h,w,b,v,y,m,_;if(e<=0)return a;if(s=t,c=o,1===e||0===i)return function(e){return e!=e}(r[s])||(a[c]+=r[s],a[c+n]+=1),a;if(e<8){for(v=0,y=0,_=0;_<e;_++)(m=r[s])==m&&(v+=m,y+=1),s+=i;return a[c]+=v,a[c+n]+=y,a}if(e<=G){for(p=0,l=0,u=0,f=0,g=0,d=0,h=0,w=0,y=0,b=e%8,_=0;_<e-b;_+=8)(m=r[s])==m&&(p+=m,y+=1),(m=r[s+=i])==m&&(l+=m,y+=1),(m=r[s+=i])==m&&(u+=m,y+=1),(m=r[s+=i])==m&&(f+=m,y+=1),(m=r[s+=i])==m&&(g+=m,y+=1),(m=r[s+=i])==m&&(d+=m,y+=1),(m=r[s+=i])==m&&(h+=m,y+=1),(m=r[s+=i])==m&&(w+=m,y+=1),s+=i;for(v=p+l+(u+f)+(g+d+(h+w));_<e;_++)(m=r[s])==m&&(v+=m,y+=1),s+=i;return a[c]+=v,a[c+n]+=y,a}return y=Z(e/2),W(y-=y%8,r,i,s,a,n,o),W(e-y,r,i,s+y*i,a,n,o),a}function L(e,r,i,t,a,n,o){return a[o]=0,a[o+n]=0,W(e,r,i,t,a,n,o),a}P((function(e,r,i,t,a){var n,o;return n=i<0?(1-e)*i:0,t[o=a<0?-a:0]=0,t[o+a]=0,W(e,r,i,n,t,a,o),t}),"ndarray",L);var M=[0,0];function U(e,r,i,t,a){var n,o,s,c,p,l,u,f,g;if(e<=0)return NaN;if(1===e||0===t)return(u=i[a])==u&&e-r>0?0:NaN;if(M[0]=0,M[1]=0,L(e,i,t,a,M,1,0),(c=(f=M[1])-r)<=0)return NaN;for(n=M[0]/f,o=a,s=0,p=0,g=0;g<e;g++)(u=i[o])==u&&(s+=(l=u-n)*l,p+=l),o+=t;return s/c-p/f*(p/c)}function X(e,r,i,t){return U(e,r,i,t,function(e,r){return r>0?0:(1-e)*r}(e,t))}return P(X,"ndarray",U),X},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanvariancepn=r();
//# sourceMappingURL=browser.js.map
