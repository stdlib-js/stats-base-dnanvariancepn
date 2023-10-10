// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function t(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+a(n):a(n)+r,t&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,a,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(a=(-s).toString(e),r.precision&&(a=t(a,r.precision,r.padRight)),a="-"+a):(a=s.toString(e),s||r.precision?r.precision&&(a=t(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):n.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,a,t=parseFloat(r.arg);if(!isFinite(t)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+a);t=r.arg}switch(r.specifier){case"e":case"E":a=t.toExponential(r.precision);break;case"f":case"F":a=t.toFixed(r.precision);break;case"g":case"G":p(t)<1e-4?((e=r.precision)>0&&(e-=1),a=t.toExponential(e)):a=t.toPrecision(r.precision),r.alternate||(a=f.call(a,y,"$1e"),a=f.call(a,b,"e"),a=f.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),r.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,w,"$1.e")),t>=0&&r.sign&&(a=r.sign+a),a=r.specifier===u.call(r.specifier)?u.call(a):l.call(a)}function _(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function k(r,e,i){var a=e-r.length;return a<0?r:r=i?r+_(a):_(a)+r}var x=String.fromCharCode,E=isNaN,N=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,i,a,n,o,p,l,u,f;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(c(a=r[u]))p+=a;else{if(e=void 0!==a.precision,!(a=S(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,E(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,E(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=e?a.precision:-1;break;case"c":if(!E(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=E(o)?String(a.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=k(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,i,a,t;for(i=[],t=0,a=j.exec(r);a;)(e=r.slice(t,j.lastIndex-a[0].length)).length&&i.push(e),i.push($(a)),t=j.lastIndex,a=j.exec(r);return(e=r.slice(t)).length&&i.push(e),i}function A(r){return"string"==typeof r}function I(r){var e,i,a;if(!A(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(i=new Array(arguments.length))[0]=e,a=1;a<i.length;a++)i[a]=arguments[a];return V.apply(null,i)}var T,C=Object.prototype,R=C.toString,O=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,G=C.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var a,t,n,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(Z.call(r,e)||G.call(r,e)?(a=r.__proto__,r.__proto__=C,delete r[e],r[e]=i.value,r.__proto__=a):r[e]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(r,e,i.get),o&&P&&P.call(r,e,i.set),r};var W=T;var L=Math.floor;function M(r,e,i,a,t){var n,o,s,c,p,l,u,f,g,d,h,w,v,b;if(n=t,r<8){for(h=0,w=0,b=0;b<r;b++)(v=i[n])==v&&(h+=v,w+=1),n+=a;return e[0]+=h,e[1]+=w,e}if(r<=128){for(o=0,s=0,c=0,p=0,l=0,u=0,f=0,g=0,w=0,d=r%8,b=0;b<r-d;b+=8)(v=i[n])==v&&(o+=v,w+=1),(v=i[n+=a])==v&&(s+=v,w+=1),(v=i[n+=a])==v&&(c+=v,w+=1),(v=i[n+=a])==v&&(p+=v,w+=1),(v=i[n+=a])==v&&(l+=v,w+=1),(v=i[n+=a])==v&&(u+=v,w+=1),(v=i[n+=a])==v&&(f+=v,w+=1),(v=i[n+=a])==v&&(g+=v,w+=1),n+=a;for(h=o+s+(c+p)+(l+u+(f+g));b<r;b++)(v=i[n])==v&&(h+=v,w+=1),n+=a;return e[0]+=h,e[1]+=w,e}return w=L(r/2),M(w-=w%8,e,i,a,n)+M(r-w,e,i,a,n+w*a)}var U=[0,0];function X(r,e,i,a){var t,n,o,s,c,p,l,u,f;if(r<=0)return NaN;if(1===r||0===a)return(l=i[0])==l&&r-e>0?0:NaN;if(n=a<0?(1-r)*a:0,U[0]=0,U[1]=0,M(r,U,i,a,n),(s=(u=U[1])-e)<=0)return NaN;for(t=U[0]/u,o=0,c=0,f=0;f<r;f++)(l=i[n])==l&&(o+=(p=l-t)*p,c+=p),n+=a;return o/s-c/u*(c/s)}var z=[0,0];function q(r,e,i,a,t){var n,o,s,c,p,l,u,f,g;if(r<=0)return NaN;if(1===r||0===a)return(u=i[t])==u&&r-e>0?0:NaN;if(z[0]=0,z[1]=0,M(r,z,i,a,t),(c=(f=z[1])-e)<=0)return NaN;for(n=z[0]/f,o=t,s=0,p=0,g=0;g<r;g++)(u=i[o])==u&&(s+=(l=u-n)*l,p+=l),o+=a;return s/c-p/f*(p/c)}W(X,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:q});export{X as default,q as ndarray};
//# sourceMappingURL=mod.js.map