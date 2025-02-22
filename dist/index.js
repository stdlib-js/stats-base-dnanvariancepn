"use strict";var o=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var y=o(function(z,x){
var w=require('@stdlib/blas-ext-base-dnannsumpw/dist').ndarray,v=[0,0];function A(r,a,i,n,d){var j,p,c,u,t,s,e,q,f;if(r<=0)return NaN;if(r===1||n===0)return e=i[d],e===e&&r-a>0?0:NaN;if(v[0]=0,v[1]=0,w(r,i,n,d,v,1,0),q=v[1],u=q-a,u<=0)return NaN;for(j=v[0]/q,p=d,c=0,t=0,f=0;f<r;f++)e=i[p],e===e&&(s=e-j,c+=s*s,t+=s),p+=n;return c/u-t/q*(t/u)}x.exports=A
});var l=o(function(B,R){
var C=require('@stdlib/strided-base-stride2offset/dist'),K=y();function N(r,a,i,n){return K(r,a,i,n,C(r,n))}R.exports=N
});var O=o(function(D,M){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=l(),S=y();P(E,"ndarray",S);M.exports=E
});var W=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=O(),m,_=b(W(__dirname,"./native.js"));g(_)?m=h:m=_;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
