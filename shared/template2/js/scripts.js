/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););
return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!(null==n||!n.length)&&-1<d(n,t,0)}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];
return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function g(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function d(n,t,r){if(t===t)n:{
--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=g(n,b,r);return n}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:P}function j(n){return function(t){return null==t?F:t[n]}}function w(n){return function(t){return null==n?F:n[t]}}function m(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;
return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function O(n,t){return l(t,function(t){return[t,n[t]]})}function S(n){return function(t){return n(t)}}function I(n,t){return l(t,function(t){return n[t]})}function R(n,t){return n.has(t)}function z(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function W(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function B(n){
return"\\"+Tn[n]}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function U(n,t){return function(r){return n(t(r))}}function C(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function T(n){if(Bn.test(n)){
for(var t=zn.lastIndex=0;zn.test(n);)++t;n=t}else n=tt(n);return n}function $(n){return Bn.test(n)?n.match(zn)||[]:n.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(G.source),Y=RegExp(H.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,en=/^\./,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,hn=/\{\n\/\* \[wrapped with (.+)\] \*/,pn=/,? & /,_n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vn=/\\(\\)?/g,gn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dn=/\w*$/,yn=/^[-+]0x[0-9a-f]+$/i,bn=/^0b[01]+$/i,xn=/^\[object .+?Constructor\]$/,jn=/^0o[0-7]+$/i,wn=/^(?:0|[1-9]\d*)$/,mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An=/($^)/,kn=/['\n\r\u2028\u2029\\]/g,En="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",On="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+En,Sn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",In=RegExp("['\u2019]","g"),Rn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),zn=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Sn+En,"g"),Wn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+",On].join("|"),"g"),Bn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Un="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Dn={};Dn["[object Arguments]"]=Dn["[object Array]"]=Dn["[object ArrayBuffer]"]=Dn["[object DataView]"]=Dn["[object Boolean]"]=Dn["[object Date]"]=Dn["[object Float32Array]"]=Dn["[object Float64Array]"]=Dn["[object Int8Array]"]=Dn["[object Int16Array]"]=Dn["[object Int32Array]"]=Dn["[object Map]"]=Dn["[object Number]"]=Dn["[object Object]"]=Dn["[object RegExp]"]=Dn["[object Set]"]=Dn["[object String]"]=Dn["[object Symbol]"]=Dn["[object Uint8Array]"]=Dn["[object Uint8ClampedArray]"]=Dn["[object Uint16Array]"]=Dn["[object Uint32Array]"]=true,
Dn["[object Error]"]=Dn["[object Function]"]=Dn["[object WeakMap]"]=false;var Mn,Tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$n=parseFloat,Fn=parseInt,Nn=typeof global=="object"&&global&&global.Object===Object&&global,Pn=typeof self=="object"&&self&&self.Object===Object&&self,Zn=Nn||Pn||Function("return this")(),qn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=qn&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=Vn&&Vn.exports===qn,Gn=Kn&&Nn.process;
n:{try{Mn=Gn&&Gn.binding&&Gn.binding("util");break n}catch(n){}Mn=void 0}var Hn=Mn&&Mn.isArrayBuffer,Jn=Mn&&Mn.isDate,Yn=Mn&&Mn.isMap,Qn=Mn&&Mn.isRegExp,Xn=Mn&&Mn.isSet,nt=Mn&&Mn.isTypedArray,tt=j("length"),rt=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
"\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
"\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
"\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
"\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
"\u0149":"'n","\u017f":"s"}),et=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ut=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),it=function w(En){function On(n){if(xu(n)&&!af(n)&&!(n instanceof Mn)){if(n instanceof zn)return n;if(ci.call(n,"__wrapped__"))return Pe(n)}return new zn(n)}function Sn(){}function zn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=F}function Mn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function qn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Pn;++t<r;)this.add(n[t])}function Vn(n){
this.size=(this.__data__=new Nn(n)).size}function Gn(n,t){var r,e=af(n),u=!e&&cf(n),i=!e&&!u&&sf(n),o=!e&&!u&&!i&&gf(n),u=(e=e||u||i||o)?E(n.length,ri):[],f=u.length;for(r in n)!t&&!ci.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Re(r,f))||u.push(r);return u}function tt(n){var t=n.length;return t?n[cr(0,t-1)]:F}function ot(n,t){return Te(Mr(n),gt(t,0,n.length))}function ft(n){return Te(Mr(n))}function ct(n,t,r){(r===F||hu(n[t],r))&&(r!==F||t in n)||_t(n,t,r);
}function at(n,t,r){var e=n[t];ci.call(n,t)&&hu(e,r)&&(r!==F||t in n)||_t(n,t,r)}function lt(n,t){for(var r=n.length;r--;)if(hu(n[r][0],t))return r;return-1}function st(n,t,r,e){return oo(n,function(n,u,i){t(e,n,r(n),i)}),e}function ht(n,t){return n&&Tr(t,Lu(t),n)}function pt(n,t){return n&&Tr(t,Uu(t),n)}function _t(n,t,r){"__proto__"==t&&Ei?Ei(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function vt(n,t){for(var r=-1,e=t.length,u=Hu(e),i=null==n;++r<e;)u[r]=i?F:Wu(n,t[r]);return u;
}function gt(n,t,r){return n===n&&(r!==F&&(n=n<=r?n:r),t!==F&&(n=n>=t?n:t)),n}function dt(n,t,r,e,i,o){var f,c=1&t,a=2&t,l=4&t;if(r&&(f=i?r(n,e,i,o):r(n)),f!==F)return f;if(!bu(n))return n;if(e=af(n)){if(f=Ee(n),!c)return Mr(n,f)}else{var s=yo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(sf(n))return Wr(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Oe(n),!c)return a?Fr(n,pt(f,n)):$r(n,ht(f,n))}else{if(!Dn[s])return i?n:{};f=Se(n,s,dt,c)}}if(o||(o=new Vn),
i=o.get(n))return i;o.set(n,f);var a=l?a?ye:de:a?Uu:Lu,p=e?F:a(n);return u(p||n,function(e,u){p&&(u=e,e=n[u]),at(f,u,dt(e,t,r,u,n,o))}),f}function yt(n){var t=Lu(n);return function(r){return bt(r,n,t)}}function bt(n,t,r){var e=r.length;if(null==n)return!e;for(n=ni(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===F&&!(u in n)||!i(o))return false}return true}function xt(n,t,r){if(typeof n!="function")throw new ei("Expected a function");return jo(function(){n.apply(F,r)},t)}function jt(n,t,r,e){var u=-1,i=c,o=true,f=n.length,s=[],h=t.length;
if(!f)return s;r&&(t=l(t,S(r))),e?(i=a,o=false):200<=t.length&&(i=R,o=false,t=new qn(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function wt(n,t){var r=true;return oo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function mt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===F?o===o&&!Au(o):r(o,f)))var f=o,c=i}return c}function At(n,t){var r=[];return oo(n,function(n,e,u){
t(n,e,u)&&r.push(n)}),r}function kt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ie),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?kt(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function Et(n,t){return n&&co(n,t,Lu)}function Ot(n,t){return n&&ao(n,t,Lu)}function St(n,t){return f(t,function(t){return gu(n[t])})}function It(n,t){t=Rr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[$e(t[r++])];return r&&r==e?n:F}function Rt(n,t,r){return t=t(n),af(n)?t:s(t,r(n))}function zt(n){if(null==n)n=n===F?"[object Undefined]":"[object Null]";else if(ki&&ki in ni(n)){
var t=ci.call(n,ki),r=n[ki];try{n[ki]=F;var e=true}catch(n){}var u=si.call(n);e&&(t?n[ki]=r:delete n[ki]),n=u}else n=si.call(n);return n}function Wt(n,t){return n>t}function Bt(n,t){return null!=n&&ci.call(n,t)}function Lt(n,t){return null!=n&&t in ni(n)}function Ut(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Hu(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,S(t))),s=Mi(p.length,s),f[o]=!r&&(t||120<=u&&120<=p.length)?new qn(o&&p):F}var p=n[0],_=-1,v=f[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;
if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(n[o],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ct(n,t,r){var e={};return Et(n,function(n,u,i){t(e,r(n),u,i)}),e}function Dt(n,t,e){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),t=null==n?n:n[$e(Ge(t))],null==t?F:r(t,n,e)}function Mt(n){return xu(n)&&"[object Arguments]"==zt(n)}function Tt(n){return xu(n)&&"[object ArrayBuffer]"==zt(n)}function $t(n){return xu(n)&&"[object Date]"==zt(n)}function Ft(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!xu(n)&&!xu(t))t=n!==n&&t!==t;else n:{
var i=af(n),o=af(t),f=i?"[object Array]":yo(n),c=o?"[object Array]":yo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&sf(n)){if(!sf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Vn),t=i||gf(n)?_e(n,t,r,e,Ft,u):ve(n,t,f,r,e,Ft,u);else{if(!(1&r)&&(i=a&&ci.call(n,"__wrapped__"),f=o&&ci.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Vn),t=Ft(n,t,r,e,u);break n}if(c)t:if(u||(u=new Vn),
i=1&r,f=de(n),o=f.length,c=de(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ci.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===F?h!==p&&!Ft(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Nt(n){return xu(n)&&"[object Map]"==yo(n)}function Pt(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ni(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in n))return false}else{if(f=new Vn,e)var s=e(a,l,c,n,t,f);if(s===F?!Ft(l,a,3,e,f):!s)return false}}return true}function Zt(n){return!(!bu(n)||li&&li in n)&&(gu(n)?_i:xn).test(Fe(n))}function qt(n){
return xu(n)&&"[object RegExp]"==zt(n)}function Vt(n){return xu(n)&&"[object Set]"==yo(n)}function Kt(n){return xu(n)&&yu(n.length)&&!!Cn[zt(n)]}function Gt(n){return typeof n=="function"?n:null==n?Nu:typeof n=="object"?af(n)?Xt(n[0],n[1]):Qt(n):Vu(n)}function Ht(n){if(!Le(n))return Ci(n);var t,r=[];for(t in ni(n))ci.call(n,t)&&"constructor"!=t&&r.push(t);return r}function Jt(n,t){return n<t}function Yt(n,t){var r=-1,e=pu(n)?Hu(n.length):[];return oo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Qt(n){
var t=me(n);return 1==t.length&&t[0][2]?Ue(t[0][0],t[0][1]):function(r){return r===n||Pt(r,n,t)}}function Xt(n,t){return We(n)&&t===t&&!bu(t)?Ue($e(n),t):function(r){var e=Wu(r,n);return e===F&&e===t?Bu(r,n):Ft(t,e,3)}}function nr(n,t,r,e,u){n!==t&&co(t,function(i,o){if(bu(i)){u||(u=new Vn);var f=u,c=n[o],a=t[o],l=f.get(a);if(l)ct(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):F,s=l===F;if(s){var h=af(a),p=!h&&sf(a),_=!h&&!p&&gf(a),l=a;h||p||_?af(c)?l=c:_u(c)?l=Mr(c):p?(s=false,l=Wr(a,true)):_?(s=false,l=Lr(a,true)):l=[]:wu(a)||cf(a)?(l=c,
cf(c)?l=Ru(c):(!bu(c)||r&&gu(c))&&(l=Oe(a))):s=false}s&&(f.set(a,l),nr(l,a,r,e,f),f.delete(a)),ct(n,o,l)}}else f=e?e(n[o],i,o+"",n,t,u):F,f===F&&(f=i),ct(n,o,f)},Uu)}function tr(n,t){var r=n.length;if(r)return t+=0>t?r:0,Re(t,r)?n[t]:F}function rr(n,t,r){var e=-1;return t=l(t.length?t:[Nu],S(je())),n=Yt(n,function(n){return{a:l(t,function(t){return t(n)}),b:++e,c:n}}),A(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Ur(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);
break n}}e=n.b-t.b}return e})}function er(n,t){return ur(n,t,function(t,r){return Bu(n,r)})}function ur(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=It(n,o);r(f,o)&&pr(i,Rr(o,n),f)}return i}function ir(n){return function(t){return It(t,n)}}function or(n,t,r,e){var u=e?y:d,i=-1,o=t.length,f=n;for(n===t&&(t=Mr(t)),r&&(f=l(n,S(r)));++i<o;)for(var c=0,a=t[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==n&&wi.call(f,c,1),wi.call(n,c,1);return n}function fr(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];
if(r==e||u!==i){var i=u;Re(u)?wi.call(n,u,1):mr(n,u)}}}function cr(n,t){return n+zi(Fi()*(t-n+1))}function ar(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=zi(t/2))&&(n+=n);while(t);return r}function lr(n,t){return wo(Ce(n,t,Nu),n+"")}function sr(n){return tt(Du(n))}function hr(n,t){var r=Du(n);return Te(r,gt(t,0,r.length))}function pr(n,t,r,e){if(!bu(n))return n;t=Rr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=$e(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;
a===F&&(a=bu(l)?l:Re(t[u+1])?[]:{})}at(f,c,a),f=f[c]}return n}function _r(n){return Te(Du(n))}function vr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Hu(u);++e<u;)r[e]=n[e+t];return r}function gr(n,t){var r;return oo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function dr(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Au(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return yr(n,t,Nu,r);
}function yr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=Au(t),a=t===F;u<i;){var l=zi((u+i)/2),s=r(n[l]),h=s!==F,p=null===s,_=s===s,v=Au(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Mi(i,4294967294)}function br(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!hu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function xr(n){return typeof n=="number"?n:Au(n)?P:+n}function jr(n){if(typeof n=="string")return n;
if(af(n))return l(n,jr)+"";if(Au(n))return uo?uo.call(n):"";var t=n+"";return"0"==t&&1/n==-N?"-0":t}function wr(n,t,r){var e=-1,u=c,i=n.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=t?null:po(n))return D(u);o=false,u=R,l=new qn}else l=t?[]:f;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function mr(n,t){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),
null==n||delete n[$e(Ge(t))]}function Ar(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?vr(n,e?0:i,e?i+1:u):vr(n,e?i+1:0,e?u:i)}function kr(n,t){var r=n;return r instanceof Mn&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function Er(n,t,r){var e=n.length;if(2>e)return e?wr(n[0]):[];for(var u=-1,i=Hu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=jt(i[u]||o,n[f],t,r));return wr(kt(i,1),t,r)}function Or(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:F);
return o}function Sr(n){return _u(n)?n:[]}function Ir(n){return typeof n=="function"?n:Nu}function Rr(n,t){return af(n)?n:We(n,t)?[n]:mo(zu(n))}function zr(n,t,r){var e=n.length;return r=r===F?e:r,!t&&r>=e?n:vr(n,t,r)}function Wr(n,t){if(t)return n.slice();var r=n.length,r=yi?yi(r):new n.constructor(r);return n.copy(r),r}function Br(n){var t=new n.constructor(n.byteLength);return new di(t).set(new di(n)),t}function Lr(n,t){return new n.constructor(t?Br(n.buffer):n.buffer,n.byteOffset,n.length)}function Ur(n,t){
if(n!==t){var r=n!==F,e=null===n,u=n===n,i=Au(n),o=t!==F,f=null===t,c=t===t,a=Au(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Cr(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Di(i-o,0),l=Hu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Dr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Di(i-f,0),s=Hu(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Mr(n,t){var r=-1,e=n.length;for(t||(t=Hu(e));++r<e;)t[r]=n[r];return t}function Tr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):F;c===F&&(c=n[f]),u?_t(r,f,c):at(r,f,c)}return r}function $r(n,t){return Tr(n,vo(n),t)}function Fr(n,t){return Tr(n,go(n),t)}function Nr(n,t){return function(r,u){var i=af(r)?e:st,o=t?t():{};return i(r,n,je(u,2),o);
}}function Pr(n){return lr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<n.length&&typeof i=="function"?(u--,i):F;for(o&&ze(r[0],r[1],o)&&(i=3>u?F:i,u=1),t=ni(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Zr(n,t){return function(r,e){if(null==r)return r;if(!pu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ni(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function qr(n){return function(t,r,e){var u=-1,i=ni(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Vr(n,t,r){function e(){return(this&&this!==Zn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Hr(n);return e}function Kr(n){return function(t){t=zu(t);var r=Bn.test(t)?$(t):F,e=r?r[0]:t.charAt(0);return t=r?zr(r,1).join(""):t.slice(1),e[n]()+t}}function Gr(n){return function(t){return h($u(Tu(t).replace(In,"")),n,"")}}function Hr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=io(n.prototype),t=n.apply(r,t);return bu(t)?t:r}}function Jr(n,t,e){function u(){for(var o=arguments.length,f=Hu(o),c=o,a=xe(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:C(f,a),o-=c.length,o<e?fe(n,t,Xr,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Zn&&this instanceof u?i:n,this,f);
}var i=Hr(n);return u}function Yr(n){return function(t,r,e){var u=ni(t);if(!pu(t)){var i=je(r,3);t=Lu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:F}}function Qr(n){return ge(function(t){var r=t.length,e=r,u=zn.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ei("Expected a function");if(u&&!o&&"wrapper"==be(i))var o=new zn([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=be(i),f="wrapper"==u?_o(i):F,o=f&&Be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[be(f[0])].apply(o,f[3]):1==i.length&&Be(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&af(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Xr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Hu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=xe(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Cr(y,e,u,_)),i&&(y=Dr(y,i,o,_)),d-=x,_&&d<a)return j=C(y,j),fe(n,t,Xr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Mi(f.length,x),m=Mr(y);w--;){
var A=f[w];y[w]=Re(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Zn&&this instanceof l&&(b=g||Hr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?F:Hr(n);return l}function ne(n,t){return function(r,e){return Ct(r,n,t(e))}}function te(n,t){return function(r,e){var u;if(r===F&&e===F)return t;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=jr(r),e=jr(e)):(r=xr(r),e=xr(e)),u=n(r,e)}return u}}function re(n){return ge(function(t){
return t=l(t,S(je())),lr(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ee(n,t){t=t===F?" ":jr(t);var r=t.length;return 2>r?r?ar(t,n):t:(r=ar(t,Ri(n/T(t))),Bn.test(t)?zr($(r),0,n).join(""):r.slice(0,n))}function ue(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Hu(l+c),h=this&&this!==Zn&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=1&t,f=Hr(n);return i}function ie(n){return function(t,r,e){
e&&typeof e!="number"&&ze(t,r,e)&&(r=e=F),t=Eu(t),r===F?(r=t,t=0):r=Eu(r),e=e===F?t<r?1:-1:Eu(e);var u=-1;r=Di(Ri((r-t)/(e||1)),0);for(var i=Hu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function oe(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Iu(t),r=Iu(r)),n(t,r)}}function fe(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(F,u),Be(n)&&xo(r,u),r.placeholder=e,De(r,n,t)}function ce(n){
var t=Xu[n];return function(n,r){if(n=Iu(n),r=null==r?0:Mi(Ou(r),292)){var e=(zu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(zu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ae(n){return function(t){var r=yo(t);return"[object Map]"==r?L(t):"[object Set]"==r?M(t):O(t,n(t))}}function le(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ei("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=F),o=o===F?o:Di(Ou(o),0),f=f===F?f:Ou(f),a-=u?u.length:0,64&t){
var l=e,s=u;e=u=F}var h=c?F:_o(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Cr(e,r,h[4]):r,i[4]=e?C(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Dr(e,r,h[6]):r,i[6]=e?C(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Mi(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===F?c?0:n.length:Di(i[9]-a,0),!f&&24&t&&(t&=-25),De((h?lo:xo)(t&&1!=t?8==t||16==t?Jr(n,t,f):32!=t&&33!=t||u.length?Xr.apply(F,i):ue(n,t,r,e):Vr(n,t,r),i),n,t)}function se(n,t,r,e){return n===F||hu(n,ii[r])&&!ci.call(e,r)?t:n}function he(n,t,r,e,u,i){return bu(n)&&bu(t)&&(i.set(t,n),nr(n,t,F,he,i),i.delete(t)),n}function pe(n){return wu(n)?F:n}function _e(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new qn:F;
for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],h=t[c];if(e)var p=o?e(h,s,c,t,n,i):e(s,h,c,n,t,i);if(p!==F){if(p)continue;a=false;break}if(l){if(!_(t,function(n,t){if(!R(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==h&&!u(s,h,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function ve(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new di(n),new di(t)))break;
return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return hu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=D),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=_e(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(eo)return eo.call(n)==eo.call(t)}return false}function ge(n){return wo(Ce(n,F,Ve),n+"")}function de(n){
return Rt(n,Lu,vo)}function ye(n){return Rt(n,Uu,go)}function be(n){for(var t=n.name+"",r=Ji[t],e=ci.call(Ji,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function xe(n){return(ci.call(On,"placeholder")?On:n).placeholder}function je(){var n=On.iteratee||Pu,n=n===Pu?Gt:n;return arguments.length?n(arguments[0],arguments[1]):n}function we(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function me(n){for(var t=Lu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!bu(u)]}return t}function Ae(n,t){var r=null==n?F:n[t];return Zt(r)?r:F}function ke(n,t,r){t=Rr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=$e(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&yu(u)&&Re(o,u)&&(af(n)||cf(n)))}function Ee(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ci.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Oe(n){
return typeof n.constructor!="function"||Le(n)?{}:io(bi(n))}function Se(r,e,u,i){var o=r.constructor;switch(e){case"[object ArrayBuffer]":return Br(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Br(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return Lr(r,i);case"[object Map]":return e=i?u(L(r),1):L(r),h(e,n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,dn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(D(r),1):D(r),h(e,t,new r.constructor);case"[object Symbol]":return eo?ni(eo.call(r)):{}}}function Ie(n){return af(n)||cf(n)||!!(mi&&n&&n[mi])}function Re(n,t){return t=null==t?9007199254740991:t,
!!t&&(typeof n=="number"||wn.test(n))&&-1<n&&0==n%1&&n<t}function ze(n,t,r){if(!bu(r))return false;var e=typeof t;return!!("number"==e?pu(r)&&Re(t,r.length):"string"==e&&t in r)&&hu(r[t],n)}function We(n,t){if(af(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Au(n))||(rn.test(n)||!tn.test(n)||null!=t&&n in ni(t))}function Be(n){var t=be(n),r=On[t];return typeof r=="function"&&t in Mn.prototype&&(n===r||(t=_o(r),!!t&&n===t[0]))}function Le(n){var t=n&&n.constructor;
return n===(typeof t=="function"&&t.prototype||ii)}function Ue(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==F||n in ni(r)))}}function Ce(n,t,e){return t=Di(t===F?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Di(u.length-t,0),f=Hu(o);++i<o;)f[i]=u[t+i];for(i=-1,o=Hu(t+1);++i<t;)o[i]=u[i];return o[t]=e(f),r(n,this,o)}}function De(n,t,r){var e=t+"";t=wo;var u,i=Ne;return u=(u=e.match(hn))?u[1].split(pn):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),
e=e.replace(sn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Me(n){var t=0,r=0;return function(){var e=Ti(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(F,arguments)}}function Te(n,t){var r=-1,e=n.length,u=e-1;for(t=t===F?e:t;++r<t;){var e=cr(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function $e(n){if(typeof n=="string"||Au(n))return n;var t=n+"";return"0"==t&&1/n==-N?"-0":t}function Fe(n){if(null!=n){try{return fi.call(n)}catch(n){}return n+""}return"";
}function Ne(n,t){return u(Z,function(r){var e="_."+r[0];t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Pe(n){if(n instanceof Mn)return n.clone();var t=new zn(n.__wrapped__,n.__chain__);return t.__actions__=Mr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ze(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),g(n,je(t,3),r)):-1}function qe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==F&&(u=Ou(r),u=0>r?Di(e+u,0):Mi(u,e-1)),
g(n,je(t,3),u,true)}function Ve(n){return(null==n?0:n.length)?kt(n,1):[]}function Ke(n){return n&&n.length?n[0]:F}function Ge(n){var t=null==n?0:n.length;return t?n[t-1]:F}function He(n,t){return n&&n.length&&t&&t.length?or(n,t):n}function Je(n){return null==n?n:Ni.call(n)}function Ye(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(_u(n))return t=Di(n.length,t),true}),E(t,function(t){return l(n,j(t))})}function Qe(n,t){if(!n||!n.length)return[];var e=Ye(n);return null==t?e:l(e,function(n){
return r(t,F,n)})}function Xe(n){return n=On(n),n.__chain__=true,n}function nu(n,t){return t(n)}function tu(){return this}function ru(n,t){return(af(n)?u:oo)(n,je(t,3))}function eu(n,t){return(af(n)?i:fo)(n,je(t,3))}function uu(n,t){return(af(n)?l:Yt)(n,je(t,3))}function iu(n,t,r){return t=r?F:t,t=n&&null==t?n.length:t,le(n,128,F,F,F,F,t)}function ou(n,t){var r;if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=F),
r}}function fu(n,t,r){return t=r?F:t,n=le(n,8,F,F,F,F,F,t),n.placeholder=fu.placeholder,n}function cu(n,t,r){return t=r?F:t,n=le(n,16,F,F,F,F,F,t),n.placeholder=cu.placeholder,n}function au(n,t,r){function e(t){var r=c,e=a;return c=a=F,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===F||r>=t||0>r||g&&n>=l}function i(){var n=Jo();if(u(n))return o(n);var r,e=jo;r=n-_,n=t-(n-p),r=g?Mi(n,l-r):n,h=e(i,r)}function o(n){return h=F,d&&c?e(n):(c=a=F,s)}function f(){var n=Jo(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===F)return _=n=p,h=jo(i,t),v?e(n):s;if(g)return h=jo(i,t),e(p)}return h===F&&(h=jo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ei("Expected a function");return t=Iu(t)||0,bu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Di(Iu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&ho(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Jo())},f}function lu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ei("Expected a function");return r.cache=new(lu.Cache||Pn),r}function su(n){if(typeof n!="function")throw new ei("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function hu(n,t){return n===t||n!==n&&t!==t}function pu(n){return null!=n&&yu(n.length)&&!gu(n);
}function _u(n){return xu(n)&&pu(n)}function vu(n){if(!xu(n))return false;var t=zt(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!wu(n)}function gu(n){return!!bu(n)&&(n=zt(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function du(n){return typeof n=="number"&&n==Ou(n)}function yu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function bu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t);
}function xu(n){return null!=n&&typeof n=="object"}function ju(n){return typeof n=="number"||xu(n)&&"[object Number]"==zt(n)}function wu(n){return!(!xu(n)||"[object Object]"!=zt(n))&&(n=bi(n),null===n||(n=ci.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&fi.call(n)==hi))}function mu(n){return typeof n=="string"||!af(n)&&xu(n)&&"[object String]"==zt(n)}function Au(n){return typeof n=="symbol"||xu(n)&&"[object Symbol]"==zt(n)}function ku(n){if(!n)return[];if(pu(n))return mu(n)?$(n):Mr(n);
if(Ai&&n[Ai]){n=n[Ai]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=yo(n),("[object Map]"==t?L:"[object Set]"==t?D:Du)(n)}function Eu(n){return n?(n=Iu(n),n===N||n===-N?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Ou(n){n=Eu(n);var t=n%1;return n===n?t?n-t:n:0}function Su(n){return n?gt(Ou(n),0,4294967295):0}function Iu(n){if(typeof n=="number")return n;if(Au(n))return P;if(bu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=bu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;
n=n.replace(cn,"");var t=bn.test(n);return t||jn.test(n)?Fn(n.slice(2),t?2:8):yn.test(n)?P:+n}function Ru(n){return Tr(n,Uu(n))}function zu(n){return null==n?"":jr(n)}function Wu(n,t,r){return n=null==n?F:It(n,t),n===F?r:n}function Bu(n,t){return null!=n&&ke(n,t,Lt)}function Lu(n){return pu(n)?Gn(n):Ht(n)}function Uu(n){if(pu(n))n=Gn(n,true);else if(bu(n)){var t,r=Le(n),e=[];for(t in n)("constructor"!=t||!r&&ci.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in ni(n))t.push(r);n=t}return n}function Cu(n,t){
if(null==n)return{};var r=l(ye(n),function(n){return[n]});return t=je(t),ur(n,r,function(n,r){return t(n,r[0])})}function Du(n){return null==n?[]:I(n,Lu(n))}function Mu(n){return Nf(zu(n).toLowerCase())}function Tu(n){return(n=zu(n))&&n.replace(mn,rt).replace(Rn,"")}function $u(n,t,r){return n=zu(n),t=r?F:t,t===F?Ln.test(n)?n.match(Wn)||[]:n.match(_n)||[]:n.match(t)||[]}function Fu(n){return function(){return n}}function Nu(n){return n}function Pu(n){return Gt(typeof n=="function"?n:dt(n,1))}function Zu(n,t,r){
var e=Lu(t),i=St(t,e);null!=r||bu(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=St(t,Lu(t)));var o=!(bu(r)&&"chain"in r&&!r.chain),f=gu(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Mr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function qu(){}function Vu(n){return We(n)?j($e(n)):ir(n)}function Ku(){return[]}function Gu(){
return false}En=null==En?Zn:it.defaults(Zn.Object(),En,it.pick(Zn,Un));var Hu=En.Array,Ju=En.Date,Yu=En.Error,Qu=En.Function,Xu=En.Math,ni=En.Object,ti=En.RegExp,ri=En.String,ei=En.TypeError,ui=Hu.prototype,ii=ni.prototype,oi=En["__core-js_shared__"],fi=Qu.prototype.toString,ci=ii.hasOwnProperty,ai=0,li=function(){var n=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),si=ii.toString,hi=fi.call(ni),pi=Zn._,_i=ti("^"+fi.call(ci).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vi=Kn?En.Buffer:F,gi=En.Symbol,di=En.Uint8Array,yi=vi?vi.f:F,bi=U(ni.getPrototypeOf,ni),xi=ni.create,ji=ii.propertyIsEnumerable,wi=ui.splice,mi=gi?gi.isConcatSpreadable:F,Ai=gi?gi.iterator:F,ki=gi?gi.toStringTag:F,Ei=function(){
try{var n=Ae(ni,"defineProperty");return n({},"",{}),n}catch(n){}}(),Oi=En.clearTimeout!==Zn.clearTimeout&&En.clearTimeout,Si=Ju&&Ju.now!==Zn.Date.now&&Ju.now,Ii=En.setTimeout!==Zn.setTimeout&&En.setTimeout,Ri=Xu.ceil,zi=Xu.floor,Wi=ni.getOwnPropertySymbols,Bi=vi?vi.isBuffer:F,Li=En.isFinite,Ui=ui.join,Ci=U(ni.keys,ni),Di=Xu.max,Mi=Xu.min,Ti=Ju.now,$i=En.parseInt,Fi=Xu.random,Ni=ui.reverse,Pi=Ae(En,"DataView"),Zi=Ae(En,"Map"),qi=Ae(En,"Promise"),Vi=Ae(En,"Set"),Ki=Ae(En,"WeakMap"),Gi=Ae(ni,"create"),Hi=Ki&&new Ki,Ji={},Yi=Fe(Pi),Qi=Fe(Zi),Xi=Fe(qi),no=Fe(Vi),to=Fe(Ki),ro=gi?gi.prototype:F,eo=ro?ro.valueOf:F,uo=ro?ro.toString:F,io=function(){
function n(){}return function(t){return bu(t)?xi?xi(t):(n.prototype=t,t=new n,n.prototype=F,t):{}}}();On.templateSettings={escape:Q,evaluate:X,interpolate:nn,variable:"",imports:{_:On}},On.prototype=Sn.prototype,On.prototype.constructor=On,zn.prototype=io(Sn.prototype),zn.prototype.constructor=zn,Mn.prototype=io(Sn.prototype),Mn.prototype.constructor=Mn,Tn.prototype.clear=function(){this.__data__=Gi?Gi(null):{},this.size=0},Tn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Tn.prototype.get=function(n){var t=this.__data__;return Gi?(n=t[n],"__lodash_hash_undefined__"===n?F:n):ci.call(t,n)?t[n]:F},Tn.prototype.has=function(n){var t=this.__data__;return Gi?t[n]!==F:ci.call(t,n)},Tn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Gi&&t===F?"__lodash_hash_undefined__":t,this},Nn.prototype.clear=function(){this.__data__=[],this.size=0},Nn.prototype.delete=function(n){var t=this.__data__;return n=lt(t,n),!(0>n)&&(n==t.length-1?t.pop():wi.call(t,n,1),
--this.size,true)},Nn.prototype.get=function(n){var t=this.__data__;return n=lt(t,n),0>n?F:t[n][1]},Nn.prototype.has=function(n){return-1<lt(this.__data__,n)},Nn.prototype.set=function(n,t){var r=this.__data__,e=lt(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Pn.prototype.clear=function(){this.size=0,this.__data__={hash:new Tn,map:new(Zi||Nn),string:new Tn}},Pn.prototype.delete=function(n){return n=we(this,n).delete(n),this.size-=n?1:0,n},Pn.prototype.get=function(n){return we(this,n).get(n);
},Pn.prototype.has=function(n){return we(this,n).has(n)},Pn.prototype.set=function(n,t){var r=we(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},qn.prototype.add=qn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},qn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.clear=function(){this.__data__=new Nn,this.size=0},Vn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Vn.prototype.get=function(n){
return this.__data__.get(n)},Vn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Nn){var e=r.__data__;if(!Zi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Pn(e)}return r.set(n,t),this.size=r.size,this};var oo=Zr(Et),fo=Zr(Ot,true),co=qr(),ao=qr(true),lo=Hi?function(n,t){return Hi.set(n,t),n}:Nu,so=Ei?function(n,t){return Ei(n,"toString",{configurable:true,enumerable:false,value:Fu(t),writable:true})}:Nu,ho=Oi||function(n){
return Zn.clearTimeout(n)},po=Vi&&1/D(new Vi([,-0]))[1]==N?function(n){return new Vi(n)}:qu,_o=Hi?function(n){return Hi.get(n)}:qu,vo=Wi?function(n){return null==n?[]:(n=ni(n),f(Wi(n),function(t){return ji.call(n,t)}))}:Ku,go=Wi?function(n){for(var t=[];n;)s(t,vo(n)),n=bi(n);return t}:Ku,yo=zt;(Pi&&"[object DataView]"!=yo(new Pi(new ArrayBuffer(1)))||Zi&&"[object Map]"!=yo(new Zi)||qi&&"[object Promise]"!=yo(qi.resolve())||Vi&&"[object Set]"!=yo(new Vi)||Ki&&"[object WeakMap]"!=yo(new Ki))&&(yo=function(n){
var t=zt(n);if(n=(n="[object Object]"==t?n.constructor:F)?Fe(n):"")switch(n){case Yi:return"[object DataView]";case Qi:return"[object Map]";case Xi:return"[object Promise]";case no:return"[object Set]";case to:return"[object WeakMap]"}return t});var bo=oi?gu:Gu,xo=Me(lo),jo=Ii||function(n,t){return Zn.setTimeout(n,t)},wo=Me(so),mo=function(n){n=lu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return en.test(n)&&t.push(""),n.replace(un,function(n,r,e,u){
t.push(e?u.replace(vn,"$1"):r||n)}),t}),Ao=lr(function(n,t){return _u(n)?jt(n,kt(t,1,_u,true)):[]}),ko=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),je(r,2)):[]}),Eo=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),F,r):[]}),Oo=lr(function(n){var t=l(n,Sr);return t.length&&t[0]===n[0]?Ut(t):[]}),So=lr(function(n){var t=Ge(n),r=l(n,Sr);return t===Ge(r)?t=F:r.pop(),r.length&&r[0]===n[0]?Ut(r,je(t,2)):[]}),Io=lr(function(n){var t=Ge(n),r=l(n,Sr);return(t=typeof t=="function"?t:F)&&r.pop(),
r.length&&r[0]===n[0]?Ut(r,F,t):[]}),Ro=lr(He),zo=ge(function(n,t){var r=null==n?0:n.length,e=vt(n,t);return fr(n,l(t,function(n){return Re(n,r)?+n:n}).sort(Ur)),e}),Wo=lr(function(n){return wr(kt(n,1,_u,true))}),Bo=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),wr(kt(n,1,_u,true),je(t,2))}),Lo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return wr(kt(n,1,_u,true),F,t)}),Uo=lr(function(n,t){return _u(n)?jt(n,t):[]}),Co=lr(function(n){return Er(f(n,_u))}),Do=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),
Er(f(n,_u),je(t,2))}),Mo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return Er(f(n,_u),F,t)}),To=lr(Ye),$o=lr(function(n){var t=n.length,t=1<t?n[t-1]:F,t=typeof t=="function"?(n.pop(),t):F;return Qe(n,t)}),Fo=ge(function(n){function t(t){return vt(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Mn&&Re(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(F),
n})):this.thru(t)}),No=Nr(function(n,t,r){ci.call(n,r)?++n[r]:_t(n,r,1)}),Po=Yr(Ze),Zo=Yr(qe),qo=Nr(function(n,t,r){ci.call(n,r)?n[r].push(t):_t(n,r,[t])}),Vo=lr(function(n,t,e){var u=-1,i=typeof t=="function",o=pu(n)?Hu(n.length):[];return oo(n,function(n){o[++u]=i?r(t,n,e):Dt(n,t,e)}),o}),Ko=Nr(function(n,t,r){_t(n,r,t)}),Go=Nr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ho=lr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&ze(n,t[0],t[1])?t=[]:2<r&&ze(t[0],t[1],t[2])&&(t=[t[0]]),
rr(n,kt(t,1),[])}),Jo=Si||function(){return Zn.Date.now()},Yo=lr(function(n,t,r){var e=1;if(r.length)var u=C(r,xe(Yo)),e=32|e;return le(n,e,t,r,u)}),Qo=lr(function(n,t,r){var e=3;if(r.length)var u=C(r,xe(Qo)),e=32|e;return le(t,e,n,r,u)}),Xo=lr(function(n,t){return xt(n,1,t)}),nf=lr(function(n,t,r){return xt(n,Iu(t)||0,r)});lu.Cache=Pn;var tf=lr(function(n,t){t=1==t.length&&af(t[0])?l(t[0],S(je())):l(kt(t,1),S(je()));var e=t.length;return lr(function(u){for(var i=-1,o=Mi(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);
return r(n,this,u)})}),rf=lr(function(n,t){return le(n,32,F,t,C(t,xe(rf)))}),ef=lr(function(n,t){return le(n,64,F,t,C(t,xe(ef)))}),uf=ge(function(n,t){return le(n,256,F,F,F,t)}),of=oe(Wt),ff=oe(function(n,t){return n>=t}),cf=Mt(function(){return arguments}())?Mt:function(n){return xu(n)&&ci.call(n,"callee")&&!ji.call(n,"callee")},af=Hu.isArray,lf=Hn?S(Hn):Tt,sf=Bi||Gu,hf=Jn?S(Jn):$t,pf=Yn?S(Yn):Nt,_f=Qn?S(Qn):qt,vf=Xn?S(Xn):Vt,gf=nt?S(nt):Kt,df=oe(Jt),yf=oe(function(n,t){return n<=t}),bf=Pr(function(n,t){
if(Le(t)||pu(t))Tr(t,Lu(t),n);else for(var r in t)ci.call(t,r)&&at(n,r,t[r])}),xf=Pr(function(n,t){Tr(t,Uu(t),n)}),jf=Pr(function(n,t,r,e){Tr(t,Uu(t),n,e)}),wf=Pr(function(n,t,r,e){Tr(t,Lu(t),n,e)}),mf=ge(vt),Af=lr(function(n){return n.push(F,se),r(jf,F,n)}),kf=lr(function(n){return n.push(F,he),r(Rf,F,n)}),Ef=ne(function(n,t,r){n[t]=r},Fu(Nu)),Of=ne(function(n,t,r){ci.call(n,t)?n[t].push(r):n[t]=[r]},je),Sf=lr(Dt),If=Pr(function(n,t,r){nr(n,t,r)}),Rf=Pr(function(n,t,r,e){nr(n,t,r,e)}),zf=ge(function(n,t){
var r={};if(null==n)return r;var e=false;t=l(t,function(t){return t=Rr(t,n),e||(e=1<t.length),t}),Tr(n,ye(n),r),e&&(r=dt(r,7,pe));for(var u=t.length;u--;)mr(r,t[u]);return r}),Wf=ge(function(n,t){return null==n?{}:er(n,t)}),Bf=ae(Lu),Lf=ae(Uu),Uf=Gr(function(n,t,r){return t=t.toLowerCase(),n+(r?Mu(t):t)}),Cf=Gr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Df=Gr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Mf=Kr("toLowerCase"),Tf=Gr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
}),$f=Gr(function(n,t,r){return n+(r?" ":"")+Nf(t)}),Ff=Gr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Nf=Kr("toUpperCase"),Pf=lr(function(n,t){try{return r(n,F,t)}catch(n){return vu(n)?n:new Yu(n)}}),Zf=ge(function(n,t){return u(t,function(t){t=$e(t),_t(n,t,Yo(n[t],n))}),n}),qf=Qr(),Vf=Qr(true),Kf=lr(function(n,t){return function(r){return Dt(r,n,t)}}),Gf=lr(function(n,t){return function(r){return Dt(n,r,t)}}),Hf=re(l),Jf=re(o),Yf=re(_),Qf=ie(),Xf=ie(true),nc=te(function(n,t){return n+t},0),tc=ce("ceil"),rc=te(function(n,t){
return n/t},1),ec=ce("floor"),uc=te(function(n,t){return n*t},1),ic=ce("round"),oc=te(function(n,t){return n-t},0);return On.after=function(n,t){if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){if(1>--n)return t.apply(this,arguments)}},On.ary=iu,On.assign=bf,On.assignIn=xf,On.assignInWith=jf,On.assignWith=wf,On.at=mf,On.before=ou,On.bind=Yo,On.bindAll=Zf,On.bindKey=Qo,On.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return af(n)?n:[n]},
On.chain=Xe,On.chunk=function(n,t,r){if(t=(r?ze(n,t,r):t===F)?1:Di(Ou(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Hu(Ri(r/t));e<r;)i[u++]=vr(n,e,e+=t);return i},On.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},On.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Hu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return s(af(r)?Mr(r):[r],kt(t,1))},On.cond=function(n){var t=null==n?0:n.length,e=je();return n=t?l(n,function(n){
if("function"!=typeof n[1])throw new ei("Expected a function");return[e(n[0]),n[1]]}):[],lr(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})},On.conforms=function(n){return yt(dt(n,1))},On.constant=Fu,On.countBy=No,On.create=function(n,t){var r=io(n);return null==t?r:ht(r,t)},On.curry=fu,On.curryRight=cu,On.debounce=au,On.defaults=Af,On.defaultsDeep=kf,On.defer=Xo,On.delay=nf,On.difference=Ao,On.differenceBy=ko,On.differenceWith=Eo,On.drop=function(n,t,r){var e=null==n?0:n.length;
return e?(t=r||t===F?1:Ou(t),vr(n,0>t?0:t,e)):[]},On.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0,0>t?0:t)):[]},On.dropRightWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true,true):[]},On.dropWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true):[]},On.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&ze(n,t,r)&&(r=0,e=u),u=n.length,r=Ou(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:Ou(e),0>e&&(e+=u),e=r>e?0:Su(e);r<e;)n[r++]=t;
return n},On.filter=function(n,t){return(af(n)?f:At)(n,je(t,3))},On.flatMap=function(n,t){return kt(uu(n,t),1)},On.flatMapDeep=function(n,t){return kt(uu(n,t),N)},On.flatMapDepth=function(n,t,r){return r=r===F?1:Ou(r),kt(uu(n,t),r)},On.flatten=Ve,On.flattenDeep=function(n){return(null==n?0:n.length)?kt(n,N):[]},On.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===F?1:Ou(t),kt(n,t)):[]},On.flip=function(n){return le(n,512)},On.flow=qf,On.flowRight=Vf,On.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){
var u=n[t];e[u[0]]=u[1]}return e},On.functions=function(n){return null==n?[]:St(n,Lu(n))},On.functionsIn=function(n){return null==n?[]:St(n,Uu(n))},On.groupBy=qo,On.initial=function(n){return(null==n?0:n.length)?vr(n,0,-1):[]},On.intersection=Oo,On.intersectionBy=So,On.intersectionWith=Io,On.invert=Ef,On.invertBy=Of,On.invokeMap=Vo,On.iteratee=Pu,On.keyBy=Ko,On.keys=Lu,On.keysIn=Uu,On.map=uu,On.mapKeys=function(n,t){var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,t(n,e,u),n)}),r},On.mapValues=function(n,t){
var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,e,t(n,e,u))}),r},On.matches=function(n){return Qt(dt(n,1))},On.matchesProperty=function(n,t){return Xt(n,dt(t,1))},On.memoize=lu,On.merge=If,On.mergeWith=Rf,On.method=Kf,On.methodOf=Gf,On.mixin=Zu,On.negate=su,On.nthArg=function(n){return n=Ou(n),lr(function(t){return tr(t,n)})},On.omit=zf,On.omitBy=function(n,t){return Cu(n,su(je(t)))},On.once=function(n){return ou(2,n)},On.orderBy=function(n,t,r,e){return null==n?[]:(af(t)||(t=null==t?[]:[t]),
r=e?F:r,af(r)||(r=null==r?[]:[r]),rr(n,t,r))},On.over=Hf,On.overArgs=tf,On.overEvery=Jf,On.overSome=Yf,On.partial=rf,On.partialRight=ef,On.partition=Go,On.pick=Wf,On.pickBy=Cu,On.property=Vu,On.propertyOf=function(n){return function(t){return null==n?F:It(n,t)}},On.pull=Ro,On.pullAll=He,On.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,je(r,2)):n},On.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,F,r):n},On.pullAt=zo,On.range=Qf,On.rangeRight=Xf,On.rearg=uf,On.reject=function(n,t){
return(af(n)?f:At)(n,su(je(t,3)))},On.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=je(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return fr(n,u),r},On.rest=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=t===F?t:Ou(t),lr(n,t)},On.reverse=Je,On.sampleSize=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),(af(n)?ot:hr)(n,t)},On.set=function(n,t,r){return null==n?n:pr(n,t,r)},On.setWith=function(n,t,r,e){return e=typeof e=="function"?e:F,
null==n?n:pr(n,t,r,e)},On.shuffle=function(n){return(af(n)?ft:_r)(n)},On.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&ze(n,t,r)?(t=0,r=e):(t=null==t?0:Ou(t),r=r===F?e:Ou(r)),vr(n,t,r)):[]},On.sortBy=Ho,On.sortedUniq=function(n){return n&&n.length?br(n):[]},On.sortedUniqBy=function(n,t){return n&&n.length?br(n,je(t,2)):[]},On.split=function(n,t,r){return r&&typeof r!="number"&&ze(n,t,r)&&(t=r=F),r=r===F?4294967295:r>>>0,r?(n=zu(n))&&(typeof t=="string"||null!=t&&!_f(t))&&(t=jr(t),
!t&&Bn.test(n))?zr($(n),0,r):n.split(t,r):[]},On.spread=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=null==t?0:Di(Ou(t),0),lr(function(e){var u=e[t];return e=zr(e,0,t),u&&s(e,u),r(n,this,e)})},On.tail=function(n){var t=null==n?0:n.length;return t?vr(n,1,t):[]},On.take=function(n,t,r){return n&&n.length?(t=r||t===F?1:Ou(t),vr(n,0,0>t?0:t)):[]},On.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0>t?0:t,e)):[]},On.takeRightWhile=function(n,t){
return n&&n.length?Ar(n,je(t,3),false,true):[]},On.takeWhile=function(n,t){return n&&n.length?Ar(n,je(t,3)):[]},On.tap=function(n,t){return t(n),n},On.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ei("Expected a function");return bu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),au(n,t,{leading:e,maxWait:t,trailing:u})},On.thru=nu,On.toArray=ku,On.toPairs=Bf,On.toPairsIn=Lf,On.toPath=function(n){return af(n)?l(n,$e):Au(n)?[n]:Mr(mo(zu(n)))},On.toPlainObject=Ru,
On.transform=function(n,t,r){var e=af(n),i=e||sf(n)||gf(n);if(t=je(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:bu(n)&&gu(o)?io(bi(n)):{}}return(i?u:Et)(n,function(n,e,u){return t(r,n,e,u)}),r},On.unary=function(n){return iu(n,1)},On.union=Wo,On.unionBy=Bo,On.unionWith=Lo,On.uniq=function(n){return n&&n.length?wr(n):[]},On.uniqBy=function(n,t){return n&&n.length?wr(n,je(t,2)):[]},On.uniqWith=function(n,t){return t=typeof t=="function"?t:F,n&&n.length?wr(n,F,t):[]},On.unset=function(n,t){return null==n||mr(n,t);
},On.unzip=Ye,On.unzipWith=Qe,On.update=function(n,t,r){return null==n?n:pr(n,t,Ir(r)(It(n,t)),void 0)},On.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:F,null!=n&&(n=pr(n,t,Ir(r)(It(n,t)),e)),n},On.values=Du,On.valuesIn=function(n){return null==n?[]:I(n,Uu(n))},On.without=Uo,On.words=$u,On.wrap=function(n,t){return rf(Ir(t),n)},On.xor=Co,On.xorBy=Do,On.xorWith=Mo,On.zip=To,On.zipObject=function(n,t){return Or(n||[],t||[],at)},On.zipObjectDeep=function(n,t){return Or(n||[],t||[],pr);
},On.zipWith=$o,On.entries=Bf,On.entriesIn=Lf,On.extend=xf,On.extendWith=jf,Zu(On,On),On.add=nc,On.attempt=Pf,On.camelCase=Uf,On.capitalize=Mu,On.ceil=tc,On.clamp=function(n,t,r){return r===F&&(r=t,t=F),r!==F&&(r=Iu(r),r=r===r?r:0),t!==F&&(t=Iu(t),t=t===t?t:0),gt(Iu(n),t,r)},On.clone=function(n){return dt(n,4)},On.cloneDeep=function(n){return dt(n,5)},On.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,5,t)},On.cloneWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,4,t)},
On.conformsTo=function(n,t){return null==t||bt(n,t,Lu(t))},On.deburr=Tu,On.defaultTo=function(n,t){return null==n||n!==n?t:n},On.divide=rc,On.endsWith=function(n,t,r){n=zu(n),t=jr(t);var e=n.length,e=r=r===F?e:gt(Ou(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},On.eq=hu,On.escape=function(n){return(n=zu(n))&&Y.test(n)?n.replace(H,et):n},On.escapeRegExp=function(n){return(n=zu(n))&&fn.test(n)?n.replace(on,"\\$&"):n},On.every=function(n,t,r){var e=af(n)?o:wt;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3));
},On.find=Po,On.findIndex=Ze,On.findKey=function(n,t){return v(n,je(t,3),Et)},On.findLast=Zo,On.findLastIndex=qe,On.findLastKey=function(n,t){return v(n,je(t,3),Ot)},On.floor=ec,On.forEach=ru,On.forEachRight=eu,On.forIn=function(n,t){return null==n?n:co(n,je(t,3),Uu)},On.forInRight=function(n,t){return null==n?n:ao(n,je(t,3),Uu)},On.forOwn=function(n,t){return n&&Et(n,je(t,3))},On.forOwnRight=function(n,t){return n&&Ot(n,je(t,3))},On.get=Wu,On.gt=of,On.gte=ff,On.has=function(n,t){return null!=n&&ke(n,t,Bt);
},On.hasIn=Bu,On.head=Ke,On.identity=Nu,On.includes=function(n,t,r,e){return n=pu(n)?n:Du(n),r=r&&!e?Ou(r):0,e=n.length,0>r&&(r=Di(e+r,0)),mu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},On.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),d(n,t,r)):-1},On.inRange=function(n,t,r){return t=Eu(t),r===F?(r=t,t=0):r=Eu(r),n=Iu(n),n>=Mi(t,r)&&n<Di(t,r)},On.invoke=Sf,On.isArguments=cf,On.isArray=af,On.isArrayBuffer=lf,On.isArrayLike=pu,On.isArrayLikeObject=_u,
On.isBoolean=function(n){return true===n||false===n||xu(n)&&"[object Boolean]"==zt(n)},On.isBuffer=sf,On.isDate=hf,On.isElement=function(n){return xu(n)&&1===n.nodeType&&!wu(n)},On.isEmpty=function(n){if(null==n)return true;if(pu(n)&&(af(n)||typeof n=="string"||typeof n.splice=="function"||sf(n)||gf(n)||cf(n)))return!n.length;var t=yo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(Le(n))return!Ht(n).length;for(var r in n)if(ci.call(n,r))return false;return true},On.isEqual=function(n,t){return Ft(n,t);
},On.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:F)?r(n,t):F;return e===F?Ft(n,t,F,r):!!e},On.isError=vu,On.isFinite=function(n){return typeof n=="number"&&Li(n)},On.isFunction=gu,On.isInteger=du,On.isLength=yu,On.isMap=pf,On.isMatch=function(n,t){return n===t||Pt(n,t,me(t))},On.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:F,Pt(n,t,me(t),r)},On.isNaN=function(n){return ju(n)&&n!=+n},On.isNative=function(n){if(bo(n))throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return Zt(n)},On.isNil=function(n){return null==n},On.isNull=function(n){return null===n},On.isNumber=ju,On.isObject=bu,On.isObjectLike=xu,On.isPlainObject=wu,On.isRegExp=_f,On.isSafeInteger=function(n){return du(n)&&-9007199254740991<=n&&9007199254740991>=n},On.isSet=vf,On.isString=mu,On.isSymbol=Au,On.isTypedArray=gf,On.isUndefined=function(n){return n===F},On.isWeakMap=function(n){return xu(n)&&"[object WeakMap]"==yo(n)},On.isWeakSet=function(n){return xu(n)&&"[object WeakSet]"==zt(n)},On.join=function(n,t){
return null==n?"":Ui.call(n,t)},On.kebabCase=Cf,On.last=Ge,On.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==F&&(u=Ou(r),u=0>u?Di(e+u,0):Mi(u,e-1)),t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=g(n,b,u,true);return n},On.lowerCase=Df,On.lowerFirst=Mf,On.lt=df,On.lte=yf,On.max=function(n){return n&&n.length?mt(n,Nu,Wt):F},On.maxBy=function(n,t){return n&&n.length?mt(n,je(t,2),Wt):F},On.mean=function(n){return x(n,Nu)},On.meanBy=function(n,t){return x(n,je(t,2))},On.min=function(n){
return n&&n.length?mt(n,Nu,Jt):F},On.minBy=function(n,t){return n&&n.length?mt(n,je(t,2),Jt):F},On.stubArray=Ku,On.stubFalse=Gu,On.stubObject=function(){return{}},On.stubString=function(){return""},On.stubTrue=function(){return true},On.multiply=uc,On.nth=function(n,t){return n&&n.length?tr(n,Ou(t)):F},On.noConflict=function(){return Zn._===this&&(Zn._=pi),this},On.noop=qu,On.now=Jo,On.pad=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return!t||e>=t?n:(t=(t-e)/2,ee(zi(t),r)+n+ee(Ri(t),r))},On.padEnd=function(n,t,r){
n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?n+ee(t-e,r):n},On.padStart=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?ee(t-e,r)+n:n},On.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),$i(zu(n).replace(an,""),t||0)},On.random=function(n,t,r){if(r&&typeof r!="boolean"&&ze(n,t,r)&&(t=r=F),r===F&&(typeof t=="boolean"?(r=t,t=F):typeof n=="boolean"&&(r=n,n=F)),n===F&&t===F?(n=0,t=1):(n=Eu(n),t===F?(t=n,n=0):t=Eu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Fi(),Mi(n+r*(t-n+$n("1e-"+((r+"").length-1))),t)):cr(n,t);
},On.reduce=function(n,t,r){var e=af(n)?h:m,u=3>arguments.length;return e(n,je(t,4),r,u,oo)},On.reduceRight=function(n,t,r){var e=af(n)?p:m,u=3>arguments.length;return e(n,je(t,4),r,u,fo)},On.repeat=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),ar(zu(n),t)},On.replace=function(){var n=arguments,t=zu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},On.result=function(n,t,r){t=Rr(t,n);var e=-1,u=t.length;for(u||(u=1,n=F);++e<u;){var i=null==n?F:n[$e(t[e])];i===F&&(e=u,i=r),n=gu(i)?i.call(n):i;
}return n},On.round=ic,On.runInContext=w,On.sample=function(n){return(af(n)?tt:sr)(n)},On.size=function(n){if(null==n)return 0;if(pu(n))return mu(n)?T(n):n.length;var t=yo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Ht(n).length},On.snakeCase=Tf,On.some=function(n,t,r){var e=af(n)?_:gr;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3))},On.sortedIndex=function(n,t){return dr(n,t)},On.sortedIndexBy=function(n,t,r){return yr(n,t,je(r,2))},On.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){
var e=dr(n,t);if(e<r&&hu(n[e],t))return e}return-1},On.sortedLastIndex=function(n,t){return dr(n,t,true)},On.sortedLastIndexBy=function(n,t,r){return yr(n,t,je(r,2),true)},On.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=dr(n,t,true)-1;if(hu(n[r],t))return r}return-1},On.startCase=$f,On.startsWith=function(n,t,r){return n=zu(n),r=null==r?0:gt(Ou(r),0,n.length),t=jr(t),n.slice(r,r+t.length)==t},On.subtract=oc,On.sum=function(n){return n&&n.length?k(n,Nu):0},On.sumBy=function(n,t){return n&&n.length?k(n,je(t,2)):0;
},On.template=function(n,t,r){var e=On.templateSettings;r&&ze(n,t,r)&&(t=F),n=zu(n),t=jf({},t,e,se),r=jf({},t.imports,e.imports,se);var u,i,o=Lu(r),f=I(r,o),c=0;r=t.interpolate||An;var a="__p+='";r=ti((t.escape||An).source+"|"+r.source+"|"+(r===nn?gn:An).source+"|"+(t.evaluate||An).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(kn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Pf(function(){return Qu(o,l+"return "+a).apply(F,f)}),t.source=a,vu(t))throw t;return t},On.times=function(n,t){if(n=Ou(n),1>n||9007199254740991<n)return[];
var r=4294967295,e=Mi(n,4294967295);for(t=je(t),n-=4294967295,e=E(e,t);++r<n;)t(r);return e},On.toFinite=Eu,On.toInteger=Ou,On.toLength=Su,On.toLower=function(n){return zu(n).toLowerCase()},On.toNumber=Iu,On.toSafeInteger=function(n){return n?gt(Ou(n),-9007199254740991,9007199254740991):0===n?n:0},On.toString=zu,On.toUpper=function(n){return zu(n).toUpperCase()},On.trim=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(cn,""):n&&(t=jr(t))?(n=$(n),r=$(t),t=z(n,r),r=W(n,r)+1,zr(n,t,r).join("")):n;
},On.trimEnd=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(ln,""):n&&(t=jr(t))?(n=$(n),t=W(n,$(t))+1,zr(n,0,t).join("")):n},On.trimStart=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(an,""):n&&(t=jr(t))?(n=$(n),t=z(n,$(t)),zr(n,t).join("")):n},On.truncate=function(n,t){var r=30,e="...";if(bu(t))var u="separator"in t?t.separator:u,r="length"in t?Ou(t.length):r,e="omission"in t?jr(t.omission):e;n=zu(n);var i=n.length;if(Bn.test(n))var o=$(n),i=o.length;if(r>=i)return n;if(i=r-T(e),1>i)return e;
if(r=o?zr(o,0,i).join(""):n.slice(0,i),u===F)return r+e;if(o&&(i+=r.length-i),_f(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=ti(u.source,zu(dn.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else n.indexOf(jr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},On.unescape=function(n){return(n=zu(n))&&J.test(n)?n.replace(G,ut):n},On.uniqueId=function(n){var t=++ai;return zu(n)+t},On.upperCase=Ff,On.upperFirst=Nf,On.each=ru,On.eachRight=eu,On.first=Ke,
Zu(On,function(){var n={};return Et(On,function(t,r){ci.call(On.prototype,r)||(n[r]=t)}),n}(),{chain:false}),On.VERSION="4.17.4",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){On[n].placeholder=On}),u(["drop","take"],function(n,t){Mn.prototype[n]=function(r){r=r===F?1:Di(Ou(r),0);var e=this.__filtered__&&!t?new Mn(this):this.clone();return e.__filtered__?e.__takeCount__=Mi(r,e.__takeCount__):e.__views__.push({size:Mi(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Mn.prototype[n+"Right"]=function(t){
return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Mn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:je(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Mn.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Mn.prototype[n]=function(){return this.__filtered__?new Mn(this):this[r](1);
}}),Mn.prototype.compact=function(){return this.filter(Nu)},Mn.prototype.find=function(n){return this.filter(n).head()},Mn.prototype.findLast=function(n){return this.reverse().find(n)},Mn.prototype.invokeMap=lr(function(n,t){return typeof n=="function"?new Mn(this):this.map(function(r){return Dt(r,n,t)})}),Mn.prototype.reject=function(n){return this.filter(su(je(n)))},Mn.prototype.slice=function(n,t){n=Ou(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Mn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),
t!==F&&(t=Ou(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Mn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mn.prototype.toArray=function(){return this.take(4294967295)},Et(Mn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=On[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(On.prototype[t]=function(){function t(n){return n=u.apply(On,s([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Mn,a=f[0],l=c||af(o);
l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Mn(this),o=n.apply(o,f),o.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(o,h)):a&&c?n.apply(this,f):(o=this.thru(t),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=ui[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);On.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){
var u=this.value();return t.apply(af(u)?u:[],n)}return this[r](function(r){return t.apply(af(r)?r:[],n)})}}),Et(Mn.prototype,function(n,t){var r=On[t];if(r){var e=r.name+"";(Ji[e]||(Ji[e]=[])).push({name:t,func:r})}}),Ji[Xr(F,2).name]=[{name:"wrapper",func:F}],Mn.prototype.clone=function(){var n=new Mn(this.__wrapped__);return n.__actions__=Mr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mr(this.__views__),
n},Mn.prototype.reverse=function(){if(this.__filtered__){var n=new Mn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Mn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=af(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Mi(n,f+s);break;case"takeRight":f=Di(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,
o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Mi(n,this.__takeCount__),!e||!u&&i==n&&l==n)return kr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},On.prototype.at=Fo,On.prototype.chain=function(){return Xe(this)},On.prototype.commit=function(){return new zn(this.value(),this.__chain__)},On.prototype.next=function(){this.__values__===F&&(this.__values__=ku(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?F:this.__values__[this.__index__++]}},On.prototype.plant=function(n){for(var t,r=this;r instanceof Sn;){var e=Pe(r);e.__index__=0,e.__values__=F,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},On.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Mn?(this.__actions__.length&&(n=new Mn(this)),n=n.reverse(),n.__actions__.push({func:nu,args:[Je],thisArg:F}),new zn(n,this.__chain__)):this.thru(Je);
},On.prototype.toJSON=On.prototype.valueOf=On.prototype.value=function(){return kr(this.__wrapped__,this.__actions__)},On.prototype.first=On.prototype.head,Ai&&(On.prototype[Ai]=tu),On}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=it, define(function(){return it})):Vn?((Vn.exports=it)._=it,qn._=it):Zn._=it}).call(this);

/*!
 * instafeed.js v1.4.1 - A simple Instagram javascript plugin
 * http://instafeedjs.com
 * repo: https://github.com/stevenschobert/instafeed.js
 * License: MIT (https://github.com/stevenschobert/instafeed.js/blob/master/LICENSE)
 */
 
(function(){var a;a=function(){function a(a,b){var c,d;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof a)for(c in a)d=a[c],this.options[c]=d;this.context=null!=b?b:this,this.unique=this._genKey()}return a.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},a.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},a.prototype.run=function(b){var c,d,e;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(e=document.createElement("script"),e.id="instafeed-fetcher",e.src=b||this._buildUrl(),c=document.getElementsByTagName("head"),c[0].appendChild(e),d="instafeedCache"+this.unique,window[d]=new a(this.options,this),window[d].unique=this.unique),!0},a.prototype.parse=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;if("object"!=typeof a){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==a.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,a.meta.error_message),!1;throw new Error("Error from Instagram: "+a.meta.error_message)}if(0===a.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,a),this.context.nextUrl="",null!=a.pagination&&(this.context.nextUrl=a.pagination.next_url),"none"!==this.options.sortBy)switch(F="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),E="least"===F[0],F[1]){case"random":a.data.sort(function(){return.5-Math.random()});break;case"recent":a.data=this._sortBy(a.data,"created_time",E);break;case"liked":a.data=this._sortBy(a.data,"likes.count",E);break;case"commented":a.data=this._sortBy(a.data,"comments.count",E);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(q=a.data,D=parseInt(this.options.limit,10),null!=this.options.limit&&q.length>D&&(q=q.slice(0,D)),h=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(q=this._filter(q,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(j="",o="",u="",H=document.createElement("div"),l=0,z=q.length;l<z;l++){if(m=q[l],n=m.images[this.options.resolution],"object"!=typeof n)throw g="No image found for resolution: "+this.options.resolution+".",new Error(g);v=n.width,s=n.height,t="square",v>s&&(t="landscape"),v<s&&(t="portrait"),p=n.url,k=window.location.protocol.indexOf("http")>=0,k&&!this.options.useHttp&&(p=p.replace(/https?:\/\//,"//")),o=this._makeTemplate(this.options.template,{model:m,id:m.id,link:m.link,type:m.type,image:p,width:v,height:s,orientation:t,caption:this._getObjectProperty(m,"caption.text"),likes:m.likes.count,comments:m.comments.count,location:this._getObjectProperty(m,"location.name")}),j+=o}for(H.innerHTML=j,e=[],d=0,c=H.childNodes.length;d<c;)e.push(H.childNodes[d]),d+=1;for(x=0,A=e.length;x<A;x++)C=e[x],h.appendChild(C)}else for(y=0,B=q.length;y<B;y++){if(m=q[y],r=document.createElement("img"),n=m.images[this.options.resolution],"object"!=typeof n)throw g="No image found for resolution: "+this.options.resolution+".",new Error(g);p=n.url,k=window.location.protocol.indexOf("http")>=0,k&&!this.options.useHttp&&(p=p.replace(/https?:\/\//,"//")),r.src=p,this.options.links===!0?(b=document.createElement("a"),b.href=m.link,b.appendChild(r),h.appendChild(b)):h.appendChild(r)}if(G=this.options.target,"string"==typeof G&&(G=document.getElementById(G)),null==G)throw g='No element with id="'+this.options.target+'" on page.',new Error(g);G.appendChild(h),i=document.getElementsByTagName("head")[0],i.removeChild(document.getElementById("instafeed-fetcher")),w="instafeedCache"+this.unique,window[w]=void 0;try{delete window[w]}catch(a){f=a}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},a.prototype._buildUrl=function(){var a,b,c;switch(a="https://api.instagram.com/v1",this.options.get){case"popular":b="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");b="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");b="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");b="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return c=a+"/"+b,c+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(c+="&count="+this.options.limit),c+="&callback=instafeedCache"+this.unique+".parse"},a.prototype._genKey=function(){var a;return a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+a()+a()+a()+a()},a.prototype._makeTemplate=function(a,b){var c,d,e,f,g;for(d=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,c=a;d.test(c);)f=c.match(d)[1],g=null!=(e=this._getObjectProperty(b,f))?e:"",c=c.replace(d,function(){return""+g});return c},a.prototype._getObjectProperty=function(a,b){var c,d;for(b=b.replace(/\[(\w+)\]/g,".$1"),d=b.split(".");d.length;){if(c=d.shift(),!(null!=a&&c in a))return null;a=a[c]}return a},a.prototype._sortBy=function(a,b,c){var d;return d=function(a,d){var e,f;return e=this._getObjectProperty(a,b),f=this._getObjectProperty(d,b),c?e>f?1:-1:e<f?1:-1},a.sort(d.bind(this)),a},a.prototype._filter=function(a,b){var c,d,e,f,g;for(c=[],d=function(a){if(b(a))return c.push(a)},e=0,g=a.length;e<g;e++)f=a[e],d(f);return c},a}(),function(a,b){return"function"==typeof define&&define.amd?define([],b):"object"==typeof module&&module.exports?module.exports=b():a.Instafeed=b()}(this,function(){return a})}).call(this);
 
 
 
window.theme = window.theme || {};
window.flag = true;
theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];
  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
  };

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);

  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = (instance.id === evt.originalEvent.detail.sectionId);

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;
    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

theme.FeaturedProductsSection = {};

theme.FeaturedProductsSection = (function() {
  function FeaturedProductsSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    initOwlCarousel(sectionId);
    $('form[action*="/cart/add"]').submit(function(e) {
        
      e.preventDefault();
      //Disable the Add To Cart button, add a disabled class. 
      $(e.target).find('input[type=image], input.submit-add-to-cart').attr('disabled', true).addClass('disabled');

      //Can't use updateCartFromForm since you need the item added before you can update (otherwise, would have been more convenient)
      //So, in onItemAdded, we Shopify.getCart() to force the repaint of items in cart. 
      Shopify.addItemFromForm(e.target);
      

    }); 
    $('.main_box').matchHeight();
  }

  return FeaturedProductsSection;
})();

theme.FeaturedProductsSection.prototype = _.assignIn({}, theme.FeaturedProductsSection.prototype, {

  onSelect: function() {
     var sectionId = this.sectionId;
    initOwlCarousel(sectionId);
    // Close pop-up if open //
    var magnificPopup = $.magnificPopup.instance;
         if(typeof magnificPopup !== 'undefined'){
            magnificPopup.close();
        }
     // Build quick view //
     enabledQuickView();
     setTimeout(function(){
  		$(".quick-view-panel").each(function() {
    	var selectID = $(this).data("id");
        var select = "product-select-" + selectID;
      	var product = $(this).data("name");
        var qvpData = $(this).find(".data-qvp").text();
        var qvpJson = JSON.parse( qvpData ); 
          
          $(".quick-view-selector-"+qvpJson.id).on("change", function(){
            var $form = $(this).closest("form"),
                productVariantObj = qvpJson.variants;

            var option1 = $form.find("#SingleOptionSelector-0").val() || null,
                option2 = $form.find("#SingleOptionSelector-1").val() || null,
                option3 = $form.find("#SingleOptionSelector-2").val() || null,
                flag = true;
            for (var i=0,length=productVariantObj.length; i<length; i++) {
              var productVar = productVariantObj[i];
              if(option1==productVar.option1 && option2==productVar.option2 && option3==productVar.option3){
                flag = false;
                $('#product-select-'+qvpJson.id).val(productVar.id);
                app.selectCallback(productVar, qvpJson.id);
                break;
              }
            }
            if(flag){
              app.selectCallback(null, qvpJson.id);
            }

          });
          
        for (var i=0,length=qvpJson.variants.length; i<length; i++) {
        var productVariants = qvpJson.variants[i];
        
        if(productVariants.available){
          for (var j=0,optlength=productVariants.options.length; j<optlength; j++) {
            var variantOption = productVariants.options[j];
                variantOption = handleizeStr(variantOption);
            $('.swatch[data-option-index="'+j+'"] .'+variantOption+'').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
          }
          
        }
      }  
      // BEGIN SWATCHES
      var indexArray=[];
      var productVariantOptions = qvpJson.variants;
      $("[data-id="+qvpJson.id+"] .single-option-selector option:selected").each(function() {
       indexArray.push($(this).index());
      });
      var form = jQuery('#product-select-'+qvpJson.id).closest('form');
      var variantIndex = jQuery('#product-select-'+qvpJson.id+' option:selected').index(); 
      if(variantIndex>=0){      
        var variant = productVariantOptions[variantIndex];                  
        for (var i=0,length=variant.options.length; i<length; i++) {
          var num = indexArray[i];
          var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
          var radioButton = $(radioButtonDiv).find(":radio");
          if (radioButton.size()) {
            radioButton.get(0).checked = true;
          }
        }
      }
               
    // END SWATCHES
   		}); 
     }, 1000);
  }
});

theme.InstagramFeedSection = {};

theme.InstagramFeedSection = (function() {
  function InstagramFeedSection(container) {
   
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var instafeedEl = this.instagram = $('#Instafeed-' + id);
    var instafeedId = this.instagram = 'Instafeed-' + id;
    
    var userFeed = new Instafeed({
      get: 'user',
      userId: 'self',
      target: instafeedId,
      accessToken: instafeedEl.attr('data-access-token'),
      sortBy: 'most-recent',
      resolution: 'standard_resolution',
      limit: instafeedEl.attr('data-count'),
      template: '<a href="{{link}}" target="_blank" style="background-image: url({{image}});" class="'+instafeedEl.attr('data-grid')+'"><i class="fa fa-instagram" aria-hidden="true"></i></a>'
    });
    if( !_.isUndefined( userFeed.options.accessToken) ){
      userFeed.run();
    }
  }
  

  return InstagramFeedSection;
})();

theme.InstagramFeedSection.prototype = _.assignIn({}, theme.InstagramFeedSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.FeaturedCollectionsSection = {};

theme.FeaturedCollectionsSection = (function() {
  function FeaturedCollectionsSection(container) {
   
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    
    $('.main_box').matchHeight();

  }
  

  return FeaturedCollectionsSection;
})();

theme.FeaturedCollectionsSection.prototype = _.assignIn({}, theme.FeaturedCollectionsSection.prototype, {

  onSelect: function(){
  }
});

theme.HeaderSection = {};

theme.HeaderSection = (function() {
  function HeaderSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  
    jQuery(document).ready(function() { 
    /// Open modal by cart icon in header ///
      $(".cart-popup").on("click", function(){
        
          $("html").css("overflow-y","hidden");

             Shopify.getCart(function(cart){
               var textareas = $("div.cart_menu").find("textarea");
               $(textareas).each(function () {
                 $(this).val(cart.note);
                 $(this).text(cart.note);
               });
             });

              var contents = $("div.cart_menu").wrap('<p>').parent().html();
              $.magnificPopup.open({
                  items: {
                      src: '<div class="mfp-with-anim modal-popup">'+contents+'</div>',
                      type: 'inline'
                  },
                  mainClass: 'mfp-move-from-top',
                  removalDelay: 1000,
                  callbacks: {
              close: function() {
                $("html").css("overflow-y","auto");
              }
              }
              });
             bindEventsInCart();
          
      });    
    /////////////////////////////////////
  //  Mega Menu
  /////////////////////////////////////
  $(function() {
      if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){ 
        if(jQuery(window).width() >= 320 && jQuery(window).width() <= 1024)
        {
          $('.wsmenu-list > li > a.twin').click(function(e) {
            e.preventDefault();
            if(!$(this).hasClass("ws-activearrow"))
            {
              $(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
              $(this).prev('.wsmenu-click').toggleClass('ws-activearrow');
              $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp('slow');

              if(jQuery(window).width() <= 768){
                $(this).siblings('.wsmenu-submenu').slideToggle('slow');
                $(this).siblings('.megamenu').slideToggle('slow');
              }
            }
            else
            {
              window.location = $(this).attr('href');
              return false;
            }
          });
          $('.wsmenu-sub-list > li > h5').click(function(e) {
            if(jQuery(window).width() <= 768){
              e.preventDefault();
              if(!$(this).hasClass("menu-clicked"))
              {
                $(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
                $(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
                $(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
                $(this).siblings('.wsmenu-sub-list ul').slideToggle('slow');
                $(this).prev('.wsmenu-click02').children().toggleClass('wsmenu-rotate');
                $(this).addClass("menu-clicked");
              }
              else
              {
                window.location = $(this).children('a').attr('href');
                return false;
              }
            }
          });
          $('.wsmenu-list > li > .megamenu > ul > li > ul > li > a').click(function(e) {
            if($(this).next().hasClass("level") && jQuery(window).width() <= 768)
            {              
              if(!$(this).hasClass("menu-clicked"))
              {
                e.preventDefault();
                $(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
                $(this).siblings('.wsmenu-sub-list ul').slideToggle('slow');
                $(this).prev('.wsmenu-click02').children().toggleClass('wsmenu-rotate');
                $(this).addClass("menu-clicked");
              }
              else
              {
                window.location = $(this).children('a').attr('href');
                return false;
              }

            }
          });
          $('.has-submenu > a').click(function(e) {
            e.preventDefault();
            e.preventDefault();
            if(!$(this).hasClass("menu-clicked"))
            {
              if(jQuery(window).width() <= 768){
                $(this).next('.wsmenu-submenu').slideToggle('slow');
              }
              $(this).prev('.wsmenu-click').toggleClass('ws-activearrow');
              $(this).addClass("menu-clicked");
            }
            else
            {
              window.location = $(this).attr('href');
              return false;
            }
          });
          $('.has-submenu-sub > a').click(function(e) 
                                          {
            e.preventDefault();
            if(!$(this).hasClass("menu-clicked"))
            {
              if(jQuery(window).width() <= 768){
                $(this).next('.wsmenu-submenu-sub').slideToggle('slow');
              }
              $(this).prev('.wsmenu-click02').children('i').toggleClass('wsmenu-rotate');
              $(this).addClass("menu-clicked");
            }
            else
            {
              window.location = $(this).attr('href');
              return false;
            }
          });
          $('.has-submenu-sub-sub > a').click(function(e) {
            if(!$(this).hasClass("menu-clicked"))
            {
              e.preventDefault();
              if(jQuery(window).width() <= 768){
                $(this).next('.wsmenu-submenu-sub-sub').slideToggle('slow');
              }
              $(this).prev('.wsmenu-click02').children('i').toggleClass('wsmenu-rotate');
              $(this).addClass("menu-clicked");
            }
            else
            {
              window.location = $(this).attr('href');
              return false;
            } 
          });
          $(window).on("touchend",function() {
            $("li").removeClass('hover');
          });
          $('.mega_menu > li').on("touchend",function(event){
            event.stopPropagation();
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li').on("touchend",function(event){
            event.stopPropagation();
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li > ul > li').on("touchend",function(event){
            event.stopPropagation();
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li > ul > li > ul > li').on("touchend",function(event){
            event.stopPropagation();
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
          });
        }
        else
        {

          $('.mega_menu > li').hoverIntent(function() {
            $(this).addClass('hover');
          }, function() {
            $(this).removeClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li').hoverIntent(function() {
            $(this).addClass('hover');
          }, function() {
            $(this).removeClass('hover');
            $(this).find("li").removeClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li > ul > li').hover(function() {
            $(this).addClass('hover');
          }, function() {
            $(this).removeClass('hover');
            $(this).find("li").removeClass('hover');
          });
          $('.multi-drop > .wsmenu-list > li > ul > li > ul > li').hover(function() {
            $(this).addClass('hover');
          }, function() {
            $(this).removeClass('hover');
            $(this).find("li").removeClass('hover');
          });
        }
      }
      else
      {

        $('.mega_menu > li').hoverIntent(function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
        });
        $('.multi-drop > .wsmenu-list > li').hoverIntent(function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
          $(this).find("li").removeClass('hover');
        });
        $('.multi-drop > .wsmenu-list > li > ul > li').hover(function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
          $(this).find("li").removeClass('hover');
        });
        $('.multi-drop > .wsmenu-list > li > ul > li > ul > li').hover(function() {
          $(this).addClass('hover');
        }, function() {
          $(this).removeClass('hover');
          $(this).find("li").removeClass('hover');
        });
      }

      $('#wsnavtoggle').click(function() {
        $('.wsmenucontainer').toggleClass('wsoffcanvasopener');
      });
      $('.overlapblackbg').click(function() {
        $('.wsmenucontainer').removeClass('wsoffcanvasopener');
      });
      $('.wsmenu-list> li').has('.wsmenu-submenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-list > li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-click').click(function() {
        $(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
        $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp('slow');
        $(this).siblings('.wsmenu-submenu').slideToggle('slow');
        $(this).siblings('.megamenu').slideToggle('slow');
      });
      $('.wsmenu-list > li > ul > li').has('.wsmenu-submenu-sub').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-list > li > ul > li > ul > li').has('.wsmenu-submenu-sub-sub').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-click02').click(function() {
        $(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
        $(this).siblings('.wsmenu-submenu-sub').slideToggle('slow');
        $(this).siblings('.wsmenu-submenu-sub-sub').slideToggle('slow');
      });
    });
    $(function() {
      $('.wsmenu-sub-list > li').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-sub-list > li > ul > li').has('.level').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
      $('.wsmenu-click02').click(function() {
        $(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
        $(this).siblings('.wsmenu-sub-list ul').slideToggle('slow');
      });
      $(window).resize(function() {
        if ($(window).width() > 768) {
          $('.wsmenu-sub-list ul').slideDown();
        }
      });
    });
    
    /*for overflow of the menu*/
    $(function () 
      {
      $(".multi-drop li").each(function (e) {
        if ($('ul', this).length) 
        {
          var elm = $('ul:first', this);
          var off = elm.offset();
          var l = off.left;
          var w = elm.width();
          var docH = $(window).height();
          var docW = $(window).width()-2;
          var isEntirelyVisible = (l + w <= docW);
          if (!isEntirelyVisible) 
          {
            $(this).addClass('edge');
          } else {
            $(this).removeClass('edge');}}
      });
      $( window ).resize(function() {
        $(".multi-drop li").each(function (e) {
          if ($('ul', this).length) 
          {
            $(this).removeClass('edge');
            var elm = $('ul:first', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docH = $(window).height();
            var docW = $(window).width()-2;
            var isEntirelyVisible = (l + w <= docW);
            if (!isEntirelyVisible && docW > 767 )
            {
              console.log(this);
              $(this).addClass('edge');
            } else {
              $(this).removeClass('edge');
            }}
        });
      });

    });

    $(function () 
      {
      $(".mega_menu > li").each(function (e) {
        if ($('ul', this).length) 
        {
          $(this).children().removeClass('over_left_menu');
          var elm = $('ul:first', this);
          var off = elm.offset();
          var l = off.left;
          var w = elm.width();
          var docH = $(window).height();
          var docW = $(window).width()-2;
          var isEntirelyVisible = (l + w <= docW);
          if (!isEntirelyVisible && docW > 767 )
          {
            $(this).children().addClass('over_left_menu');
          } else {
            $(this).children().removeClass('over_left_menu');
          }}
        $( window ).resize(function() {
          $(".mega_menu > li").each(function (e) {
            if ($('ul', this).length) 
            {
              $(this).children().removeClass('over_left_menu');
              var elm = $('ul:first', this);
              var off = elm.offset();
              var l = off.left;
              var w = elm.width();
              var docH = $(window).height();
              var docW = $(window).width()-2;
              var isEntirelyVisible = (l + w <= docW);
              if (!isEntirelyVisible && docW > 767 )
              {
                $(this).children().addClass('over_left_menu');
              } else {
                $(this).children().removeClass('over_left_menu');
              }}
          }); 
        }); 
      });
      $(".multi-drop .wsmenu-click02").click(function (){ $(this).children(".wsmenu-arrow").toggleClass( "wsmenu-rotate");}) 
    });
    
      /* sticky menu */
      if($(".enabled-sticky-menu").length){
          var header_position=$(".header_bot").position().top;
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= header_position && $(".wsmenucontainer").hasClass("wsoffcanvasopener") == false ) {
            $(".header_bot").addClass("sticky");
          } else {
            $(".header_bot").removeClass("sticky");
          }
        });
        $(window).on("touchmove",function() {
          // alert("hi");
          var scroll = $(window).scrollTop();
          if (scroll >= header_position && $(".wsmenucontainer").hasClass("wsoffcanvasopener") == false ) {
            $(".header_bot").addClass("sticky");
          } else {
            $(".header_bot").removeClass("sticky");
          }
        });
        $("#wsnavtoggle").click(function() {$(".header_bot").removeClass("sticky");});
        $('.overlapblackbg').click(function (){if ($(window).scrollTop() >= header_position) {
          $(".header_bot").addClass("sticky");
        } else {
          $(".header_bot").removeClass("sticky");
        }});
      }
      
      
    });
    
  }

  return HeaderSection;
})();

theme.HeaderSection.prototype = _.assignIn({}, theme.HeaderSection.prototype, {

  onSelect: function(){
    if(!$(".enabled-sticky-menu").length){
      $(window).unbind('scroll');
      $(window).unbind('touchmove');
     }
  }
});


theme.FeaturedImagesSection = {};

theme.FeaturedImagesSection = (function() {
  function FeaturedImagesSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  }

  return FeaturedImagesSection;
})();

theme.FeaturedImagesSection.prototype = _.assignIn({}, theme.FeaturedImagesSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.BlogSection = {};

theme.BlogSection = (function() {
  function BlogSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  }

  return BlogSection;
})();

theme.BlogSection.prototype = _.assignIn({}, theme.BlogSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.VideoSection = {};

theme.VideoSection = (function() {
  function VideoSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var $currentVideo = $container.find('.popupVideo');
    
 $currentVideo.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      closeBtnInside: false,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
          youtube: {
            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
          }
        }
      }
    });
  }

  return VideoSection;
})();

theme.VideoSection.prototype = _.assignIn({}, theme.VideoSection.prototype, {

  onSelect: function(){
 
  }
});

theme.TextSection = {};

theme.TextSection = (function() {
  function TextSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  }

  return TextSection;
})();

theme.TextSection.prototype = _.assignIn({}, theme.TextSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var Slideshow = this.Slideshow = $('#flexslider-'+sectionId);
    Slideshow.flexslider({
      animation: 'fade', //String: Select your animation type, "fade" or "slide"
      //Boolean: Create navigation for previous/next navigation? (true/false)
      slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
      // pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
      directionNav: true,
      controlNav: false,
      pauseOnHover: true,
      pauseOnAction: true
    });
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {

  onBlockSelect: function(evt) {
   
    // Ignore the cloned version
    var Slideshow = this.Slideshow;
    var $slide =  Slideshow.find("#slide-"+evt.detail.blockId);
    var slideIndex = $slide.data('index');
    
    // Go to selected slide, pause autoplay
    Slideshow.flexslider(slideIndex);
    Slideshow.flexslider("pause");
  },
  onBlockDeselect: function() {
    var Slideshow = this.Slideshow;
    // Resume autoplay
    Slideshow.flexslider("play");
  }
});

theme.BlogPageSection = {};

theme.BlogPageSection = (function() {
  function BlogPageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var $container = $('.masonry');

    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.masonry-post',
            columnWidth: '.masonry-post',
            transitionDuration: 0
        });
    });
  }

  return BlogPageSection;
})();

theme.BlogPageSection.prototype = _.assignIn({}, theme.BlogPageSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.ArticlePageSection = {};

theme.ArticlePageSection = (function() {
  function ArticlePageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  }

  return ArticlePageSection;
})();

theme.ArticlePageSection.prototype = _.assignIn({}, theme.ArticlePageSection.prototype, {

  onSelect: function(){
     $(".animated").addClass("animation-done");
  }
});

theme.CollectionPageSection = {};

theme.CollectionPageSection = (function() {
  function CollectionPageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
     
    $('form[action*="/cart/add"]').submit(function(e) {
          
          e.preventDefault();
          //Disable the Add To Cart button, add a disabled class. 
          $(e.target).find('input[type=image], input.submit-add-to-cart').attr('disabled', true).addClass('disabled');

          //Can't use updateCartFromForm since you need the item added before you can update (otherwise, would have been more convenient)
          //So, in onItemAdded, we Shopify.getCart() to force the repaint of items in cart. 
          Shopify.addItemFromForm(e.target);
      	
         
   		 }); 
  }

  return CollectionPageSection;
})();

theme.CollectionPageSection.prototype = _.assignIn({}, theme.CollectionPageSection.prototype, {

  onSelect: function(){
    // Close pop-up if open //
    var magnificPopup = $.magnificPopup.instance;
         if(typeof magnificPopup !== 'undefined'){
            magnificPopup.close();
        }
    // Build quick view //
     enabledQuickView();
     setTimeout(function(){
  		$(".quick-view-panel").each(function() {
    	var selectID = $(this).data("id");
        var select = "product-select-" + selectID;
      	var product = $(this).data("name");
        var qvpData = $(this).find(".data-qvp").text();
        var qvpJson = JSON.parse( qvpData ); 
          
          $(".quick-view-selector-"+qvpJson.id).on("change", function(){
            var $form = $(this).closest("form"),
                productVariantObj = qvpJson.variants;

            var option1 = $form.find("#SingleOptionSelector-0").val() || null,
                option2 = $form.find("#SingleOptionSelector-1").val() || null,
                option3 = $form.find("#SingleOptionSelector-2").val() || null,
                flag = true;
            for (var i=0,length=productVariantObj.length; i<length; i++) {
              var productVar = productVariantObj[i];
              if(option1==productVar.option1 && option2==productVar.option2 && option3==productVar.option3){
                flag = false;
                $('#product-select-'+qvpJson.id).val(productVar.id);
                app.selectCallback(productVar, qvpJson.id);
                break;
              }
            }
            if(flag){
              app.selectCallback(null, qvpJson.id);
            }

          });
          
        for (var i=0,length=qvpJson.variants.length; i<length; i++) {
        var productVariants = qvpJson.variants[i];
        
        if(productVariants.available){
          for (var j=0,optlength=productVariants.options.length; j<optlength; j++) {
            var variantOption = productVariants.options[j];
                variantOption = handleizeStr(variantOption);
            $('.swatch[data-option-index="'+j+'"] .'+variantOption+'').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
          }
          
        }
      }  
          // BEGIN SWATCHES
    
          var indexArray=[];
          var productVariantOptions = qvpJson.variants;
          $("[data-id="+qvpJson.id+"] .single-option-selector option:selected").each(function() {
            indexArray.push($(this).index());
          });
          var form = jQuery('#product-select-'+qvpJson.id).closest('form');
          var variantIndex = jQuery('#product-select-'+qvpJson.id+' option:selected').index(); 
          if(variantIndex>=0){      
            var variant = productVariantOptions[variantIndex];                  
            for (var i=0,length=variant.options.length; i<length; i++) {
              var num = indexArray[i];
              var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
              var radioButton = $(radioButtonDiv).find(":radio");
              if (radioButton.size()) {
                radioButton.get(0).checked = true;
              }
            }
          }
               
    // END SWATCHES
   		}); 
       
      
	  }, 1000);
    
     	 $('#sortBy')
         // select the current sort order
          .val($('#sortBy').data("sort"))
          .bind('change', function() {
             Shopify.queryParams.sort_by = jQuery(this).val();
             location.search = jQuery.param(Shopify.queryParams);
           });

         $('.change-view').on('click', function() {
          var view = $(this).data('view'),
              url = document.URL,
              hasParams = url.indexOf('?') > -1;

          if (hasParams) {
            window.location = replaceUrlParam(url, 'view', view);
          } else {
            window.location = url + '?view=' + view;
          }
        });
  }
});

theme.CollectionListPageSection = {};

theme.CollectionListPageSection = (function() {
  function CollectionListPageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
  }

  return CollectionListPageSection;
})();

theme.CollectionListPageSection.prototype = _.assignIn({}, theme.CollectionListPageSection.prototype, {

  onSelect: function(){
       
       $('#sortBy')
       // select the current sort order
       .val($('#sortBy').data("sort"))
       .bind('change', function() {
         Shopify.queryParams.sort_by = jQuery(this).val();
         location.search = jQuery.param(Shopify.queryParams);
       });
        
       $('.change-view').on('click', function() {
        var view = $(this).data('view'),
            url = document.URL,
            hasParams = url.indexOf('?') > -1;

        if (hasParams) {
          window.location = replaceUrlParam(url, 'view', view);
        } else {
          window.location = url + '?view=' + view;
        }
   	  });
  }
});

theme.ProductPageSection = {};

theme.ProductPageSection = (function() {
  function ProductPageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
   
     /*PRODUCT FLEXSLIDER*/
$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 150,
    itemMargin: 5,
   	asNavFor: '.product_images'
  });
    
    if($("#carousel").length){
     var controlNav = false;
    }
    else{
      var controlNav = "thumbnails";
    }
   
  $('.product_images').flexslider({
    startAt: parseInt($('.featured_image', $(this)).data('index'), 10),
    touch: false,
    pauseOnHover: true,
    controlNav: controlNav,
    directionNav: false,
    animation: "fade",
    slideshow: false,
    slideshowSpeed: 10*1000,
    sync: "#carousel"
  });
    /* END PRODUCT FLEXSLIDER*/
    
    selectCallback = function (variant, selector) {
      if(variant){
      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
      }
     /* for the variant sku change */
    if ($(".variant-sku")){
    if (jQuery.type( variant ) === "null")
    {
      $('.variant-sku').empty();
    } 
    else {
         if (variant.sku ) 
         {
          $('.variant-sku').html("<b>Sku: </b>"+ variant.sku);
        }
        else {
          $('.variant-sku').empty();
        }
      }
    
    }
     /* end of variant sku change  */
    
   
    var $product = $('#product-' + selector +'-gallery');
    if (variant && variant.featured_image && $product.is(":visible")) {
      var original_image = $(".flex-active-slide img", $product), new_image = variant.featured_image;
      Shopify.Image.switchImage(new_image, original_image[0], function (new_image_src, original_image, element) {
        if(typeof $product.flexslider == 'function') {
          
          $product.flexslider($('[data-image-id="' + variant.featured_image.id + '"]').data('index'));
        }
      });
    }
        // BEGIN SWATCHES
    if (variant) {
      
      var indexArray=[];
      $(".main-product-select .single-option-selector option:selected").each(function() {
       indexArray.push($(this).index());
      });
      var form = jQuery('#product-select-'+selector).closest('form');
      for (var i=0,length=variant.options.length; i<length; i++) {
        var num = indexArray[i];
        var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
        var radioButton = $(radioButtonDiv).find(":radio");
        if (radioButton.size()) {
          radioButton.get(0).checked = true;
        }
      }
    }
    // END SWATCHES

    var addToCart = $('#addToCart'),
        productPrice = $('#productPrice'),
        comparePrice = $('#comparePrice'),
        qty = $(".product-page-qty #quantity").val();

    if ($("#variant-inventory")){
    if (variant) {
      if (variant.inventory_management == "shopify" && variant.inventory_policy != "continue") {
        if (variant.inventory_quantity >0) {
          jQuery('#variant-inventory').html('<span class=in-stock>In stock! Usually ships within 24 hours.</span>');
        } else {
          jQuery('#variant-inventory').html("<span class=out-of-stock>Sorry!  This product is currently out of stock.</span>");
        }
      } else {
        jQuery('#variant-inventory').html("<span class=in-stock>In stock! Usually ships within 24 hours.</span>");
      }
    } else {
        jQuery('#variant-inventory').html("<span class=out-of-stock>Sorry!  This product is currently out of stock.</span>");
    }
    }
    if (variant) {
      if (variant.available) {
//          if (variant.inventory_management == "shopify" && variant.inventory_policy != "continue" && variant.inventory_quantity < qty) {
//           // Variant is sold out, disable the submit button
//           addToCart.val('Sold Out').addClass('disabled').prop('disabled', true);
//          }
//         else{
          // We have a valid product variant, so enable the submit button
          addToCart.removeClass('disabled').prop('disabled', false).val('Add to Cart');
//         }
        

      } else {
        // Variant is sold out, disable the submit button
        addToCart.val('Sold Out').addClass('disabled').prop('disabled', true);
      }

      // Regardless of stock, update the product price  
	
		if(typeof Currency !== 'undefined' && productPrice.length && shopCurrency && cookieCurrency){
			var convertedPrice = Currency.convert(variant.price,shopCurrency,cookieCurrency);
			productPrice.html(Shopify.formatMoney(convertedPrice, Currency.moneyFormats[cookieCurrency].money_format));
		}
	
    // Also update and show the product's compare price if necessary
    if ( variant.compare_at_price > variant.price ) {
    
		if(typeof Currency !== 'undefined' && comparePrice.length && shopCurrency && cookieCurrency){
			var convertedPrice = Currency.convert(variant.compare_at_price,shopCurrency,cookieCurrency);
			comparePrice.html(Shopify.formatMoney(convertedPrice, Currency.moneyFormats[cookieCurrency].money_format));
		}
	                        
   
    } else {
      comparePrice.hide();
    }

  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    addToCart.val('Unavailable').addClass('disabled').prop('disabled', true);
    }

  
                   
 };
     
                  
 /////////// Related products /////////////////
       var magnificPopup = $.magnificPopup.instance;
         if(typeof magnificPopup !== 'undefined'){
            magnificPopup.close();
        }
     enabledQuickView();
     setTimeout(function(){
  		$(".quick-view-panel").each(function() {
    	var selectID = $(this).data("id");
        var select = "product-select-" + selectID;
      	var product = $(this).data("name");
        var qvpData = $(this).find(".data-qvp").text();
        var qvpJson = JSON.parse( qvpData );
          
          $(".quick-view-selector-"+qvpJson.id).on("change", function(){
           
            var $form = $(this).closest("form"),
                productVariantObj = qvpJson.variants;

            var option1 = $form.find("#SingleOptionSelector-0").val() || null,
                option2 = $form.find("#SingleOptionSelector-1").val() || null,
                option3 = $form.find("#SingleOptionSelector-2").val() || null,
                flag = true;
            for (var i=0,length=productVariantObj.length; i<length; i++) {
              var productVar = productVariantObj[i];
              if(option1==productVar.option1 && option2==productVar.option2 && option3==productVar.option3){
                flag = false;
                $('#product-select-'+qvpJson.id).val(productVar.id);
                app.selectCallback(productVar, qvpJson.id);
                break;
              }
            }
            if(flag){
              app.selectCallback(null, qvpJson.id);
            }

          });
          
        for (var i=0,length=qvpJson.variants.length; i<length; i++) {
        var productVariants = qvpJson.variants[i];
        
        if(productVariants.available){
          for (var j=0,optlength=productVariants.options.length; j<optlength; j++) {
            var variantOption = productVariants.options[j];
                variantOption = handleizeStr(variantOption);
            $('.swatch[data-option-index="'+j+'"] .'+variantOption+'').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
          }
          
        }
      }  
          // BEGIN SWATCHES
    
      var indexArray=[];
      var productVariantOptions = qvpJson.variants;
      $("[data-id="+qvpJson.id+"] .single-option-selector option:selected").each(function() {
       indexArray.push($(this).index());
      });
      var form = jQuery('#product-select-'+qvpJson.id).closest('form');
      var variantIndex = jQuery('#product-select-'+qvpJson.id+' option:selected').index(); 
      if(variantIndex>=0){      
        var variant = productVariantOptions[variantIndex];                  
        for (var i=0,length=variant.options.length; i<length; i++) {
          var num = indexArray[i];
          var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
          var radioButton = $(radioButtonDiv).find(":radio");
          if (radioButton.size()) {
            radioButton.get(0).checked = true;
          }
        }
      }
               
    // END SWATCHES
         
   		}); 
       
      
	  
     }, 1000);
                  
                  
     /////////////////////////
    
    
    var productData = $container.find(".product-json").text();
    var productJSON = JSON.parse( productData );
    var productVariantObj = productJSON.variants;
    
    $(".main-product-select .single-option-selector").on("change", function(){
      var option1 = $(".main-product-select #SingleOptionSelector-0").val() || null,
          option2 = $(".main-product-select #SingleOptionSelector-1").val() || null,
          option3 = $(".main-product-select #SingleOptionSelector-2").val() || null,
          flag = true;
     for (var i=0,length=productVariantObj.length; i<length; i++) {
       var productVar = productVariantObj[i];
       if(option1==productVar.option1 && option2==productVar.option2 && option3==productVar.option3){
         flag = false;
         $('#product-select-' + productJSON.id ).val(productVar.id);
         selectCallback(productVar, productJSON.id);
         break;
       }
     }
     if(flag){
        selectCallback(null, productJSON.id);
      }
      
    });
    
    var selectedOptionsLength = $('#product-select-' + productJSON.id + ' option[selected]').length;
    var optionsLength = $('#product-select-' + productJSON.id).length;
    if(!selectedOptionsLength || optionsLength == 1){
       selectCallback(productJSON.variants[0], productJSON.id);
    }
    
    for (var i=0,length=productJSON.variants.length; i<length; i++) {
        var productVariants = productJSON.variants[i];
        
        if(productVariants.available){
          for (var j=0,optlength=productVariants.options.length; j<optlength; j++) {
            var variantOption = productVariants.options[j];
                variantOption = handleizeStr(variantOption);
            $('.swatch[data-option-index="'+j+'"] .'+variantOption+'').removeClass('soldout').addClass('available').find(':radio').removeAttr('disabled');
          }
          
        }
      }
    
    $product = $('#product-' + productJSON.id );
   // new Shopify.OptionSelectors("product-select-" + productJSON.id+"", { product: productJSON, onVariantSelected: selectCallback });

    // Add label if only one product option and it isn't 'Title'. Could be 'Size'.
    if(productJSON.options.size == 1 && productJSON.options[0] != 'Title'){
    	$('.selector-wrapper:eq(0)').prepend('<label>'+productJSON.options[0]+'</label>');
    }
    
   // Hide selectors if we only have 1 variant and its title contains 'Default'.
    if(productJSON.variants.size == 1 && (productJSON.variants[0].title.indexOf('Default') + 1)){
  	 $('.selector-wrapper').hide();
    }

    
    var str = window.location.href;
    if(!(str.indexOf('?variant=') + 1)) {
       // Auto-select first available variant on page load. Otherwise the product looks sold out.
        var found_one_in_stock = false;
        for(variant in productJSON.variants){
          if(productJSON.variants[variant].available && found_one_in_stock == false){
            found_one_in_stock = true;
            for(option in productJSON.options){
             var i = Object.keys(productJSON.options).indexOf(option); 
                $('.main-product-select .single-option-selector:eq('+i+')').val(productJSON.variants[variant].options[i]).trigger("change");
          }
         }
        }
   }
    else{
      $('.main-product-select .single-option-selector').first().trigger("change");
    }
    
    
   initOwlCarousel(sectionId); 
  //////////////////////////////////////
  // Qty
  /////////////////////////////////////

  jQuery(".product-page-qty .minus_btn").click(function () {
    var inputEl = jQuery(this).parent().children().next();
    var qty = inputEl.val();
    if (jQuery(this).parent().hasClass("minus_btn"))
      qty++;
    else
      qty--;
    if (qty <= 1)
      qty = 1;
    inputEl.val(qty);
  })


  jQuery(".product-page-qty .plus_btn").click(function () {    
     var productHandle = $("#product-handle").val();
       var variantId = $(".product-variants").val(); 
       var inputEl = $(".product-page-qty #quantity");
       var qty = inputEl.val();
       jQuery.getJSON('/products/'+productHandle+'.js', function(product) {
  	
         for (var i=0,length=product.variants.length; i<length; i++) {
           if(product.variants[i].id == variantId){
             var variant = product.variants[i],
                 addToCart = $('#addToCart');
          	if (qty >= variant.inventory_quantity && variant.inventory_management == "shopify" && variant.inventory_policy != "continue") {
              $(".maximum-in-stock-error").show().delay(3000).fadeOut();
            }
             else{
                qty++;
                inputEl.val(qty);
             }
           break;
          }       
        }
                                                  
       }); 
  })	
  
   
  /////////////////////////////////////
  //  Product Image Zoom
  /////////////////////////////////////
  if(typeof $.zoom === 'function' && $("#image-block").data("zoom") == "disabled"){
    var imageBlock = $('#image-block');
    if(imageBlock.length){
      var imageSlideLinks = imageBlock.find('a.image-slide-link');
      if(imageSlideLinks.length){
        imageSlideLinks.each(function(){
          var t = $(this);
          var url = t[0].href;
          t.zoom({ url:url,touch:false });
        });
      }
    }
  }
  
     // Initialize popup as usual
    $('.slides').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
        }
      }
    });
  
   /////////////////////////////////////
  //  Swatches
  /////////////////////////////////////
 
  jQuery(function() {
    jQuery('.swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery(this)
        .closest('form')
        .find('.single-option-selector')
        .eq(optionIndex)
        .val(optionValue)
        .trigger('change');
    }); 
  });
  ////// end Swatches //////  
    
   $('form[action*="/cart/add"]').submit(function(e) {
        
      e.preventDefault();
      //Disable the Add To Cart button, add a disabled class. 
      $(e.target).find('input[type=image], input.submit-add-to-cart').attr('disabled', true).addClass('disabled');

      //Can't use updateCartFromForm since you need the item added before you can update (otherwise, would have been more convenient)
      //So, in onItemAdded, we Shopify.getCart() to force the repaint of items in cart. 
      Shopify.addItemFromForm(e.target);
      
    }); 

  }

  return ProductPageSection;
})();

theme.ProductPageSection.prototype = _.assignIn({}, theme.ProductPageSection.prototype, {

  onSelect: function(){
    
  }
});
          
theme.ContactPageSection = {};

theme.ContactPageSection = (function() {
  function ContactPageSection(container) {
   
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var map = $("#map-canvas");
    
    if(map.length){
      
      var lat = map.data("lat"),
          long = map.data("long");
      
        function initialize() {

        // Create an array of styles.
        var styles = [
          {
            stylers: [
              { saturation: 0 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});


              var mapOptions = {
                zoom: 13,
                center: new google.maps.LatLng(lat, long),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        setMarkers(map, places);
      }

      var places = [
        ['', lat, long, 1]
      ];

      function setMarkers(map, locations) {
        // Add markers to the map
        var image = {
          url: 'img/marker.png',
          // This marker is 40 pixels wide by 42 pixels tall.
          size: new google.maps.Size(32, 40),
          // The origin for this image is 0,0.
          origin: new google.maps.Point(0,0),
          // The anchor for this image is the base of the pin at 20,42.
          anchor: new google.maps.Point(16, 35)
        };

        for (var i = 0; i < locations.length; i++) {
          var place = locations[i];
          var myLatLng = new google.maps.LatLng(place[1], place[2]);
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            //icon: image,
            title: place[0],
            zIndex: place[3],
            animation: google.maps.Animation.DROP
          });

          var contentString = "Some content";
          google.maps.event.addListener(marker, "click", function() {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
          });
        }
      }

      initialize();

  }
  }
  return ContactPageSection;
})();
          
Shopify.Image={
      preload:function(e,t){for(var n=0;n<e.length;n++)
      	{var r=e[n];this.loadImage(this.getSizedImageUrl(r,t))}},
      loadImage:function(e){(new Image).src=e},
      switchImage:function(e,t,n){
        if(e&&t){
          var r=this.imageSize(t.src),
              i=this.getSizedImageUrl(e.src,r);
              n?n(i,e,t):t.src=i}
      },
      imageSize:function(e){var t=e.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==t?t[1]:null},
      getSizedImageUrl:function(e,t){if(null==t)return e;if("master"==t)return this.removeProtocol(e);var n=e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=n){var r=e.split(n[0]),i=n[0];return this.removeProtocol(r[0]+"_"+t+i)}return null},
      removeProtocol:function(e){return e.replace(/http(s)?:/,"")}
}    
          
var handleizeStr = function (str) {
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
};          
          
var initOwlCarousel = function (sectionId){ 
  var featuredProducts = $('#featured-products-section-'+sectionId+'');
  if(featuredProducts.length){
    featuredProducts.owlCarousel({
    margin: 0,
      nav:true,
      navRewind:false,
      dots:false,
      autoplay:true,
      autoplaySpeed:1000,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      loop:false,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        360: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }
};

  


/////////////////////////////////////
//  Double-Tap for Mobile Menu
/////////////////////////////////////

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/



;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{
		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

		this.each( function()
		{
			var curItem = false;

			$( this ).on( 'click', function( e )
			{
				var item = $( this );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});

			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();

				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;

				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};
})( jQuery, window, document );


/////////////////////////////////////
//  Bootstrap.min.js
/////////////////////////////////////

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.0.11
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function($,n,e){var o=$();$.fn.dropdownHover=function(e){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function t(e){o.find(":focus").blur(),h.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(c),i.addClass("open"),r.trigger(a)}var r=$(this),i=r.parent(),d={delay:500,instantlyCloseOthers:!0},s={delay:$(this).data("delay"),instantlyCloseOthers:$(this).data("close-others")},a="show.bs.dropdown",u="hide.bs.dropdown",h=$.extend(!0,{},d,e,s),c;i.hover(function(n){return i.hasClass("open")||r.is(n.target)?void t(n):!0},function(){c=n.setTimeout(function(){i.removeClass("open"),r.trigger(u)},h.delay)}),r.hover(function(n){return i.hasClass("open")||i.is(n.target)?void t(n):!0}),i.find(".dropdown-submenu").each(function(){var e=$(this),o;e.hover(function(){n.clearTimeout(o),e.children(".dropdown-menu").show(),e.siblings().children(".dropdown-menu").hide()},function(){var t=e.children(".dropdown-menu");o=n.setTimeout(function(){t.hide()},h.delay)})})}))},$(document).ready(function(){$('[data-hover="dropdown"]').dropdownHover()})}(jQuery,this);


/////////////////////////////////////
//  Responsive Grids
/////////////////////////////////////

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,a=function(t){return parseFloat(t)||0},i=function(e){var o=1,i=t(e),n=null,r=[];return i.each(function(){var e=t(this),i=e.offset().top-a(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-i))<=o?r[r.length-1]=s.add(e):r.push(e),n=i}),r},n=function(e){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var a=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(a)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=i,r._parse=a,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=i(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var i=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=t(this),o=e.attr("style"),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block");var i={display:a};i[s.property]="",e.css(i),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}i.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=a(e.css("border-top-width"))+a(e.css("border-bottom-width")),o+=a(e.css("padding-top"))+a(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),a=o.attr("data-mh")||o.attr("data-match-height");a in e?e[a]=e[a].add(o):e[a]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(a,i){if(i&&"resize"===i.type){var n=t(window).width();if(n===e)return;e=n}a?-1===o&&(o=setTimeout(function(){s(i),o=-1},r._throttle)):s(i)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

/////////////////////////////////////
//  jQuery Waypoints
/////////////////////////////////////

// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

/////////////////////////////////////
//  Flexslider
/////////////////////////////////////

/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);


/////////////////////////////////////
//  Cookie
/////////////////////////////////////

/*! jquery.cookie v1.4.0 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=decodeURIComponent(a.replace(g," "))}catch(b){return}try{return h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}});




/////////////////////////////////////
//  Content Specific Functions
/////////////////////////////////////

jQuery(function ($) {

  /////////////////////////////////////
  //  Product Images
  /////////////////////////////////////

  $(".product_images img").unveil(200);
  
  "use strict";        

  function header() {

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    if (windowWidth <  1200 ) {

    /////////////////////////////////////
    //  Disable Mobile Animated
    /////////////////////////////////////

      $("html").removeClass("noIE");

    }

    /////////////////////////////////////
    //  Home slider
    /////////////////////////////////////


    var slider = $(".home-slider .slides");
    var slider2 = $(".home-slider .slides li");

  };

  header();

  $(window).resize(function () {
    header();
  });



  /////////////////////////////////////
  //  animate elements when they are in viewport
  /////////////////////////////////////

  $('.noIE .animated').waypoint(function () {
    var animation = $(this).data('animation');
    $(this).addClass('animation-done').addClass(animation);
  }, {
    triggerOnce: true,
    offset: '70%'
  });


  
  /////////////////////////////////////
  //  Sidebar Accordion
  /////////////////////////////////////


  $(".sidebar h5").click(function (e) {
    e.preventDefault();

    $(this).parent().find(".tgl_c").slideToggle(300);
    if ($(this).hasClass("active")) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

  });
});


$(window).load(function() {

  /////////////////////////////////////
  //  Equal-Height Grid Items
  /////////////////////////////////////

	  $('.main_box').matchHeight();
  });

  /////////////////////////////////////
  //  Persist Menu Drop-Downs
  /////////////////////////////////////

  $(window).load(function() {
    $(document).on('click', '.navbar .dropdown-menu', function(e) {
      e.stopPropagation();
    })
  });

  
 

  /////////////////////////////////////
  //  Quick View
  /////////////////////////////////////
  app.selectCallback = function(variant, selector){
    

    // find the matching product panel
    var productPanel = $('div.quick-view-panel[data-id="'+selector+'"]');

    // check that the panel exists
    if(productPanel.length === 0){
      console.log('Can not find product panel');
      return;
    }

    // check that data is what we expect, and if the panel is open
    if (variant && variant.featured_image && productPanel.is(":visible")) {
      var original_image = $(".slides img", productPanel), new_image = variant.featured_image;
      Shopify.Image.switchImage(new_image, original_image[0]);
    }
    
    if (variant) {
      var indexArray=[];
      $("[data-id='"+selector+ "'] .single-option-selector option:selected").each(function() {
       indexArray.push($(this).index());
      });
      
      var form = jQuery('#product-select-'+selector).closest('form');
      for (var i=0,length=variant.options.length; i<length; i++) {
        var num = indexArray[i];
        var radioButtonDiv = form.find('.swatch[data-option-index="' + i + '"] div.swatch-element')[num];
        var radioButton = $(radioButtonDiv).find(":radio");
        if (radioButton.size()) {
          radioButton.get(0).checked = true;
        }
      }
    }

    
    var addToCart = productPanel.find('#addToCart'); // find the add to cart button
    var productPrice = productPanel.find('.product-info-price .money'); // find the price 
    var comparePrice = productPanel.find('#comparePrice'); // find the compare price (not currently used in quick view)

    if (variant) {
      if (variant.available) {
        // We have a valid product variant, so enable the submit button
        addToCart.removeClass('disabled').prop('disabled', false).val('Add to Cart');

      } else {
        // Variant is sold out, disable the submit button
        addToCart.val('Sold Out').addClass('disabled').prop('disabled', true);
    }

	
		if(typeof Currency !== 'undefined' && productPrice.length && shopCurrency && cookieCurrency){
			var convertedPrice = Currency.convert(variant.price,shopCurrency,cookieCurrency);
			productPrice.html(Shopify.formatMoney(convertedPrice, Currency.moneyFormats[cookieCurrency].money_format));
		}
	

      // Also update and show the product's compare price if necessary
      if(comparePrice.length){
          if ( variant.compare_at_price > variant.price ) {
            
            if(typeof Currency !== 'undefined' && comparePrice.length && shopCurrency && cookieCurrency){
              var convertedPrice = Currency.convert(variant.compare_at_price,shopCurrency,cookieCurrency);
              comparePrice.html(Shopify.formatMoney(convertedPrice, Currency.moneyFormats[cookieCurrency].money_format));
            }
            
            
            
          }else{
            comparePrice.hide();
          }
        }

    } else {
      addToCart.val('Unavailable').addClass('disabled').prop('disabled', true);
    }

  }; // END app.selectCallback()
                    
  function enabledQuickView(){

  jQuery(function() {
    // check to make sure the popup script is available
    if(typeof $().magnificPopup !== 'function'){ return }

    // make sure the themes global object is available
    if(typeof app === 'undefined'){ return }
	
    // check that we are on the right kind of template
      app.data.quickViewBtns = $('a.quick-view-btn'); /* find all the the quick view launch buttons */
      if(app.data.quickViewBtns.length){

        // setup the quickview popup action
        app.data.quickViewBtns.magnificPopup({
          type:'inline',
          midClick: true,
          mainClass:'mfp-move-from-top',
          removalDelay: 1000,
          callbacks : {
            open : function(){
              var mp = $.magnificPopup.instance;
              var cur = mp.st.el;
              var href = $(cur).attr('href');
              var select = $(".mfp-move-from-top").find("#SingleOptionSelector-0");
              if(select.length){
              select.trigger("change");
              }
            }
          }
        });

      }
   
  });
      
  /////////////////////////////////////
  //  Swatches
  /////////////////////////////////////

  jQuery(function() {
    jQuery('.swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery(this)
        .closest('form')
        .find('.single-option-selector')
        .eq(optionIndex)
        .val(optionValue)
        .trigger('change');
    }); 
  });
 }

  /////////////////////////////////////
  //  Unveil
  /////////////////////////////////////

  /**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

  ;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);


/*!
  Zoom 1.7.13
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,m,l,r,s,f=o(t).css("position"),h=o(n);return t.style.position=/(absolute|fixed)/.test(f)?f:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=o(t).outerWidth(),u=o(t).outerHeight(),n===t?(m=c,a=u):(m=h.outerWidth(),a=h.outerHeight()),l=(e.width-c)/m,r=(e.height-u)/a,s=h.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,m),0),e.style.left=t*-l+"px",e.style.top=n*-r+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e,i=o.extend({},t,n||{}),u=i.target||this,c=this,a=o(c),m=document.createElement("img"),l=o(m),r="mousemove.zoom",s=!1,f=!1;(i.url||(e=a.find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(function(){var o=u.style.position,t=u.style.overflow;a.one("zoom.destroy",function(){a.off(".zoom"),u.style.position=o,u.style.overflow=t,l.remove()})}(),m.onload=function(){function t(t){e.init(),e.move(t),l.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(m):!1)}function n(){l.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(m):!1)}var e=o.zoom(u,c,m,i.magnify);"grab"===i.on?a.on("mousedown.zoom",function(i){1===i.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(r,e.move)}),t(i),o(document).on(r,e.move),i.preventDefault())}):"click"===i.on?a.on("click.zoom",function(i){return s?void 0:(s=!0,t(i),o(document).on(r,e.move),o(document).one("click.zoom",function(){n(),s=!1,o(document).off(r,e.move)}),!1)}):"toggle"===i.on?a.on("click.zoom",function(o){s?n():t(o),s=!s}):"mouseover"===i.on&&(e.init(),a.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(r,e.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),f?(f=!1,n()):(f=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(m)},m.src=i.url)})},o.fn.zoom.defaults=t})(window.jQuery);

    (function($) {
      $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var cfg = {
          interval: 100,
          sensitivity: 6,
          timeout: 300
        };
        if (typeof handlerIn === "object") {
          cfg = $.extend(cfg, handlerIn)
        } else {
          if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
              over: handlerIn,
              out: handlerOut,
              selector: selector
            })
          } else {
            cfg = $.extend(cfg, {
              over: handlerIn,
              out: handlerIn,
              selector: handlerOut
            })
          }
        }
        var cX, cY, pX, pY;
        var track = function(ev) {
          cX = ev.pageX;
          cY = ev.pageY
        };
        var compare = function(ev, ob) {
          ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
          if (Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) < cfg.sensitivity) {
            $(ob).off("mousemove.hoverIntent", track);
            ob.hoverIntent_s = true;
            return cfg.over.apply(ob, [ev])
          } else {
            pX = cX;
            pY = cY;
            ob.hoverIntent_t = setTimeout(function() {
              compare(ev, ob)
            }, cfg.interval)
          }
        };
        var delay = function(ev, ob) {
          ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
          ob.hoverIntent_s = false;
          return cfg.out.apply(ob, [ev])
        };
        var handleHover = function(e) {
          var ev = $.extend({}, e);
          var ob = this;
          if (ob.hoverIntent_t) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t)
          }
          if (e.type === "mouseenter") {
            pX = ev.pageX;
            pY = ev.pageY;
            $(ob).on("mousemove.hoverIntent", track);
            if (!ob.hoverIntent_s) {
              ob.hoverIntent_t = setTimeout(function() {
                compare(ev, ob)
              }, cfg.interval)
            }
          } else {
            $(ob).off("mousemove.hoverIntent", track);
            if (ob.hoverIntent_s) {
              ob.hoverIntent_t = setTimeout(function() {
                delay(ev, ob)
              }, cfg.timeout)
            }
          }
        };
        return this.on({
          "mouseenter.hoverIntent": handleHover,
          "mouseleave.hoverIntent": handleHover
        }, cfg.selector)
      }
    })(jQuery);

    jQuery("#currencies").change(function()
                                 {
      cookieCurrency = $(this).val();
      console.log(cookieCurrency);
    });

    if(jQuery(window).width() > 991)
    {
      var product_grid_height = 0;
      var grid_height;
      var prod_height;
      var total = jQuery('#content .home_product .product_grid').length;    
      jQuery("#content .home_product .product_grid").each(function (e) {
        grid_height = $(this).height();
        if(grid_height > product_grid_height){
          product_grid_height = grid_height;
        }

        if(e == total - 1)
        {
          jQuery("#content .home_product .product_grid").css("height",product_grid_height+"px");
        }
      });
    }
    else
    {
      jQuery("#content .home_product .product_grid").css("height","auto");
    }
    $( window ).resize(function() {
      if(jQuery(window).width() > 991)
      {
        var product_grid_height = 0;
        var grid_height;
        var total = jQuery('#content .home_product .product_grid').length;    
        jQuery("#content .home_product .product_grid").each(function (e) {
          grid_height = $(this).height();
          if(grid_height > product_grid_height){
            product_grid_height = grid_height;
          }
          if(e == total - 1)
          {
            prod_height = product_grid_height+"px"
            jQuery("#content .home_product .product_grid").css("height",prod_height);
          }
        });
      }
      else
      {
        jQuery("#content .home_product .product_grid").css("height","auto");
      }
    });
      
      $(document).ready(function() {
          var sections = new theme.Sections();

          sections.register('featured-products-section', theme.FeaturedProductsSection);
          sections.register('featured-collections-section', theme.FeaturedCollectionsSection);
          sections.register('instagram-feed-section', theme.InstagramFeedSection);
          sections.register('slideshow-section', theme.SlideshowSection); 
          sections.register('featured-images-section', theme.FeaturedImagesSection);       
          sections.register('blog-section', theme.BlogSection);
          sections.register('video-section', theme.VideoSection);
          sections.register('text-section', theme.TextSection); 
          sections.register('blog-page-section', theme.BlogPageSection);
          sections.register('article-page-section', theme.ArticlePageSection);
          sections.register('collection-page-section', theme.CollectionPageSection);
          sections.register('collection-list-page-section', theme.CollectionListPageSection);        
          sections.register('product-page-section', theme.ProductPageSection);
          sections.register('contact-page-section', theme.ContactPageSection);
          sections.register('header-section', theme.HeaderSection);
		
          enabledQuickView();
      
	  });