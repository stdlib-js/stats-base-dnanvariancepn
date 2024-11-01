"use strict";var R=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var w=R(function(V,S){
var b=require('@stdlib/math-base-special-floor/dist'),g=128;function j(v,u,i,n,M){var a,t,c,s,q,f,p,m,l,K,y,e,r,o;if(a=M,v<8){for(y=0,e=0,o=0;o<v;o++)r=i[a],r===r&&(y+=r,e+=1),a+=n;return u[0]+=y,u[1]+=e,u}if(v<=g){for(t=0,c=0,s=0,q=0,f=0,p=0,m=0,l=0,e=0,K=v%8,o=0;o<v-K;o+=8)r=i[a],r===r&&(t+=r,e+=1),a+=n,r=i[a],r===r&&(c+=r,e+=1),a+=n,r=i[a],r===r&&(s+=r,e+=1),a+=n,r=i[a],r===r&&(q+=r,e+=1),a+=n,r=i[a],r===r&&(f+=r,e+=1),a+=n,r=i[a],r===r&&(p+=r,e+=1),a+=n,r=i[a],r===r&&(m+=r,e+=1),a+=n,r=i[a],r===r&&(l+=r,e+=1),a+=n;for(y=t+c+(s+q)+(f+p+(m+l)),o;o<v;o++)r=i[a],r===r&&(y+=r,e+=1),a+=n;return u[0]+=y,u[1]+=e,u}return e=b(v/2),e-=e%8,j(e,u,i,n,a)+j(v-e,u,i,n,a+e*n)}S.exports=j
});var P=R(function(X,A){
var h=w(),E=[0,0];function k(v,u,i,n){var M,a,t,c,s,q,f,p,m;if(v<=0)return NaN;if(v===1||n===0)return f=i[0],f===f&&v-u>0?0:NaN;if(n<0?a=(1-v)*n:a=0,E[0]=0,E[1]=0,h(v,E,i,n,a),p=E[1],c=p-u,c<=0)return NaN;for(M=E[0]/p,t=0,s=0,m=0;m<v;m++)f=i[a],f===f&&(q=f-M,t+=q*q,s+=q),a+=n;return t/c-s/p*(s/c)}A.exports=k
});var _=R(function(Y,W){
var z=w(),O=[0,0];function D(v,u,i,n,M){var a,t,c,s,q,f,p,m,l;if(v<=0)return NaN;if(v===1||n===0)return p=i[M],p===p&&v-u>0?0:NaN;if(O[0]=0,O[1]=0,z(v,O,i,n,M),m=O[1],s=m-u,s<=0)return NaN;for(a=O[0]/m,t=M,c=0,q=0,l=0;l<v;l++)p=i[t],p===p&&(f=p-a,c+=f*f,q+=f),t+=n;return c/s-q/m*(q/s)}W.exports=D
});var L=R(function($,I){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=P(),G=_();F(B,"ndarray",G);I.exports=B
});var H=require("path").join,J=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),T=L(),C,Z=J(H(__dirname,"./native.js"));Q(Z)?C=T:C=Z;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
