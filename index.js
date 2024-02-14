// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=n(),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty;function i(t,n){return null!=t&&e.call(t,n)}var f,u="function"==typeof Symbol?Symbol:void 0,a="function"==typeof u?u.toStringTag:"",c=r&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e;if(null==t)return o.call(t);r=t[a],n=i(t,a);try{t[a]=void 0}catch(n){return o.call(t)}return e=o.call(t),n?t[a]=r:delete t[a],e}:function(t){return o.call(t)},l="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(l&&r instanceof Uint32Array||"[object Uint32Array]"===c(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")};var b,m=f,v=n(),A=Object.prototype.toString,d="function"==typeof Symbol?Symbol:void 0,S="function"==typeof d?d.toStringTag:"",g=v&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return A.call(t);r=t[S],n=i(t,S);try{t[S]=void 0}catch(n){return A.call(t)}return o=A.call(t),n?t[S]=r:delete t[S],o}:function(t){return A.call(t)},w="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0;b=function(){var t,n,r;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),r=n,t=(w&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?s:function(){throw new Error("not implemented")};var h,F=b,T=n(),j=Object.prototype.toString,N="function"==typeof Symbol?Symbol:void 0,E="function"==typeof N?N.toStringTag:"",O=T&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return j.call(t);r=t[E],n=i(t,E);try{t[E]=void 0}catch(n){return j.call(t)}return o=j.call(t),n?t[E]=r:delete t[E],o}:function(t){return j.call(t)},I="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(I&&r instanceof Uint8Array||"[object Uint8Array]"===O(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P,V=h,Y=n(),_=Object.prototype.toString,k="function"==typeof Symbol?Symbol:void 0,q="function"==typeof k?k.toStringTag:"",z=Y&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return _.call(t);r=t[q],n=i(t,q);try{t[q]=void 0}catch(n){return _.call(t)}return o=_.call(t),n?t[q]=r:delete t[q],o}:function(t){return _.call(t)},B="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:P,uint8:V};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,M=new F(1),Q=new m(M.buffer);function R(t){return M[0]=t,Q[L]}var W,X=n(),Z=Object.prototype.toString,$="function"==typeof Symbol?Symbol:void 0,tt="function"==typeof $?$.toStringTag:"",nt=X&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return Z.call(t);r=t[tt],n=i(t,tt);try{t[tt]=void 0}catch(n){return Z.call(t)}return o=Z.call(t),n?t[tt]=r:delete t[tt],o}:function(t){return Z.call(t)},rt="function"==typeof Float64Array,ot="function"==typeof Float64Array?Float64Array:null,et="function"==typeof Float64Array?Float64Array:void 0;W=function(){var t,n,r;if("function"!=typeof ot)return!1;try{n=new ot([1,3.14,-3.14,NaN]),r=n,t=(rt&&r instanceof Float64Array||"[object Float64Array]"===nt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?et:function(){throw new Error("not implemented")};var it=!0===K?1:0,ft=new W(1),ut=new m(ft.buffer),at=Number.NEGATIVE_INFINITY,ct=.6931471803691238,lt=1.9082149292705877e-10,yt=1048575;function pt(n){var r,o,e,i,f,u,a,c,l,y,p,b;return 0===n?at:t(n)||n<0?NaN:(f=0,(o=R(n))<1048576&&(f-=54,o=R(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-1023|0,f+=(c=614244+(o&=yt)&1048576|0)>>20|0,a=(n=function(t,n){return ft[0]=t,ut[it]=n>>>0,ft[0]}(n,o|1072693248^c))-1,(yt&2+o)<3?0===a?0===f?0:f*ct+f*lt:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*ct-(u-f*lt-a)):(c=o-398458|0,l=440401-o|0,i=(p=(b=(y=a/(2+a))*y)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+i,(c|=l)>0?(r=.5*a*a,0===f?a-(r-y*(r+u)):f*ct-(r-(y*(r+u)+f*lt)-a)):0===f?a-y*(a-u):f*ct-(y*(a-u)-f*lt-a))))}var bt=.5772156649015329;return function(n,r,o){return t(n)||t(r)||t(o)||n<=0||r<=0?NaN:1+bt/n+bt+pt(r/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).entropy=n();
//# sourceMappingURL=index.js.map
