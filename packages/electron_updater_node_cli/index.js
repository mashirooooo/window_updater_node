#! /usr/bin/env node
'use strict';

var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var zlib = require('zlib');
require('child_process');
var chalk$1 = require('chalk');
var require$$0 = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chalk__default = /*#__PURE__*/_interopDefaultLegacy(chalk$1);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var d=function(e,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);},d(e,t)};function g(e,t,r,n){return new(r||(r=Promise))((function(s,i){function o(e){try{h(n.next(e));}catch(e){i(e);}}function a(e){try{h(n.throw(e));}catch(e){i(e);}}function h(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(o,a);}h((n=n.apply(e,t||[])).next());}))}function I(e,t){var r,n,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o);}catch(e){i=[6,e],n=0;}finally{r=s=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var m="object"==typeof process&&process&&"win32"===process.platform?{sep:"\\"}:{sep:"/"},R=N;function N(e,t,r){e instanceof RegExp&&(e=O(e,r)),t instanceof RegExp&&(t=O(t,r));var n=b(e,t,r);return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+e.length,n[1]),post:r.slice(n[1]+t.length)}}function O(e,t){var r=t.match(e);return r?r[0]:null}function b(e,t,r){var n,s,i,o,a,h=r.indexOf(e),c=r.indexOf(t,h+1),l=h;if(h>=0&&c>0){if(e===t)return [h,c];for(n=[],i=r.length;l>=0&&!a;)l==h?(n.push(l),h=r.indexOf(e,l+1)):1==n.length?a=[n.pop(),c]:((s=n.pop())<i&&(i=s,o=c),c=r.indexOf(t,l+1)),l=h<c&&h>=0?h:c;n.length&&(a=[i,o]);}return a}N.range=b;var L=R,A=function(e){if(!e)return [];"{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2));return G(function(e){return e.split("\\\\").join($).split("\\{").join(v).split("\\}").join(T).split("\\,").join(S).split("\\.").join(y)}(e),!0).map(P)},$="\0SLASH"+Math.random()+"\0",v="\0OPEN"+Math.random()+"\0",T="\0CLOSE"+Math.random()+"\0",S="\0COMMA"+Math.random()+"\0",y="\0PERIOD"+Math.random()+"\0";function w(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function P(e){return e.split($).join("\\").split(v).join("{").split(T).join("}").split(S).join(",").split(y).join(".")}function D(e){if(!e)return [""];var t=[],r=L("{","}",e);if(!r)return e.split(",");var n=r.pre,s=r.body,i=r.post,o=n.split(",");o[o.length-1]+="{"+s+"}";var a=D(i);return i.length&&(o[o.length-1]+=a.shift(),o.push.apply(o,a)),t.push.apply(t,o),t}function j(e){return "{"+e+"}"}function M(e){return /^-?0\d/.test(e)}function x(e,t){return e<=t}function F(e,t){return e>=t}function G(e,t){var r=[],n=L("{","}",e);if(!n)return [e];var s=n.pre,i=n.post.length?G(n.post,!1):[""];if(/\$$/.test(n.pre))for(var o=0;o<i.length;o++){var a=s+"{"+n.body+"}"+i[o];r.push(a);}else {var h,c,l=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body),p=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body),u=l||p,E=n.body.indexOf(",")>=0;if(!u&&!E)return n.post.match(/,.*\}/)?G(e=n.pre+"{"+n.body+T+n.post):[e];if(u)h=n.body.split(/\.\./);else if(1===(h=D(n.body)).length&&1===(h=G(h[0],!1).map(j)).length)return i.map((function(e){return n.pre+h[0]+e}));if(u){var f=w(h[0]),d=w(h[1]),g=Math.max(h[0].length,h[1].length),I=3==h.length?Math.abs(w(h[2])):1,m=x;d<f&&(I*=-1,m=F);var R=h.some(M);c=[];for(var N=f;m(N,d);N+=I){var O;if(p)"\\"===(O=String.fromCharCode(N))&&(O="");else if(O=String(N),R){var b=g-O.length;if(b>0){var A=new Array(b+1).join("0");O=N<0?"-"+A+O.slice(1):A+O;}}c.push(O);}}else {c=[];for(var $=0;$<h.length;$++)c.push.apply(c,G(h[$],!1));}for($=0;$<c.length;$++)for(o=0;o<i.length;o++){a=s+c[$]+i[o];(!t||u||a)&&r.push(a);}}return r}const C=_=(e,t,r={})=>(W(t),!(!r.nocomment&&"#"===t.charAt(0))&&new K(t,r).match(e));var _=C;const U=m;C.sep=U.sep;const X=Symbol("globstar **");C.GLOBSTAR=X;const k=A,B={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},H=e=>e.split("").reduce(((e,t)=>(e[t]=!0,e)),{}),V=H("().*{}+?[]^$\\!"),z=H("[.("),Z=/\/+/;C.filter=(e,t={})=>(r,n,s)=>C(r,e,t);const Y=(e,t={})=>{const r={};return Object.keys(e).forEach((t=>r[t]=e[t])),Object.keys(t).forEach((e=>r[e]=t[e])),r};C.defaults=e=>{if(!e||"object"!=typeof e||!Object.keys(e).length)return C;const t=C,r=(r,n,s)=>t(r,n,Y(e,s));return (r.Minimatch=class extends t.Minimatch{constructor(t,r){super(t,Y(e,r));}}).defaults=r=>t.defaults(Y(e,r)).Minimatch,r.filter=(r,n)=>t.filter(r,Y(e,n)),r.defaults=r=>t.defaults(Y(e,r)),r.makeRe=(r,n)=>t.makeRe(r,Y(e,n)),r.braceExpand=(r,n)=>t.braceExpand(r,Y(e,n)),r.match=(r,n,s)=>t.match(r,n,Y(e,s)),r},C.braceExpand=(e,t)=>J(e,t);const J=(e,t={})=>(W(e),t.nobrace||!/\{(?:(?!\{).)*\}/.test(e)?[e]:k(e)),W=e=>{if("string"!=typeof e)throw new TypeError("invalid pattern");if(e.length>65536)throw new TypeError("pattern is too long")},q=Symbol("subparse");C.makeRe=(e,t)=>new K(e,t||{}).makeRe(),C.match=(e,t,r={})=>{const n=new K(t,r);return e=e.filter((e=>n.match(e))),n.options.nonull&&!e.length&&e.push(t),e};class K{constructor(e,t){W(e),t||(t={}),this.options=t,this.set=[],this.pattern=e,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.partial=!!t.partial,this.make();}debug(){}make(){const e=this.pattern,t=this.options;if(!t.nocomment&&"#"===e.charAt(0))return void(this.comment=!0);if(!e)return void(this.empty=!0);this.parseNegate();let r=this.globSet=this.braceExpand();t.debug&&(this.debug=(...e)=>console.error(...e)),this.debug(this.pattern,r),r=this.globParts=r.map((e=>e.split(Z))),this.debug(this.pattern,r),r=r.map(((e,t,r)=>e.map(this.parse,this))),this.debug(this.pattern,r),r=r.filter((e=>-1===e.indexOf(!1))),this.debug(this.pattern,r),this.set=r;}parseNegate(){if(this.options.nonegate)return;const e=this.pattern;let t=!1,r=0;for(let n=0;n<e.length&&"!"===e.charAt(n);n++)t=!t,r++;r&&(this.pattern=e.substr(r)),this.negate=t;}matchOne(e,t,r){var n=this.options;this.debug("matchOne",{this:this,file:e,pattern:t}),this.debug("matchOne",e.length,t.length);for(var s=0,i=0,o=e.length,a=t.length;s<o&&i<a;s++,i++){this.debug("matchOne loop");var h,c=t[i],l=e[s];if(this.debug(t,c,l),!1===c)return !1;if(c===X){this.debug("GLOBSTAR",[t,c,l]);var p=s,u=i+1;if(u===a){for(this.debug("** at the end");s<o;s++)if("."===e[s]||".."===e[s]||!n.dot&&"."===e[s].charAt(0))return !1;return !0}for(;p<o;){var E=e[p];if(this.debug("\nglobstar while",e,p,t,u,E),this.matchOne(e.slice(p),t.slice(u),r))return this.debug("globstar found match!",p,o,E),!0;if("."===E||".."===E||!n.dot&&"."===E.charAt(0)){this.debug("dot detected!",e,p,t,u);break}this.debug("globstar swallow a segment, and continue"),p++;}return !(!r||(this.debug("\n>>> no match, partial?",e,p,t,u),p!==o))}if("string"==typeof c?(h=l===c,this.debug("string match",c,l,h)):(h=l.match(c),this.debug("pattern match",c,l,h)),!h)return !1}if(s===o&&i===a)return !0;if(s===o)return r;if(i===a)return s===o-1&&""===e[s];throw new Error("wtf?")}braceExpand(){return J(this.pattern,this.options)}parse(e,t){W(e);const r=this.options;if("**"===e){if(!r.noglobstar)return X;e="*";}if(""===e)return "";let n="",s=!!r.nocase,i=!1;const o=[],a=[];let h,c,l,p,u=!1,E=-1,f=-1;const d="."===e.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",g=()=>{if(h){switch(h){case"*":n+="[^/]*?",s=!0;break;case"?":n+="[^/]",s=!0;break;default:n+="\\"+h;}this.debug("clearStateChar %j %j",h,n),h=!1;}};for(let t,d=0;d<e.length&&(t=e.charAt(d));d++)if(this.debug("%s\t%s %s %j",e,d,n,t),i){if("/"===t)return !1;V[t]&&(n+="\\"),n+=t,i=!1;}else switch(t){case"/":return !1;case"\\":g(),i=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",e,d,n,t),u){this.debug("  in class"),"!"===t&&d===f+1&&(t="^"),n+=t;continue}this.debug("call clearStateChar %j",h),g(),h=t,r.noext&&g();continue;case"(":if(u){n+="(";continue}if(!h){n+="\\(";continue}o.push({type:h,start:d-1,reStart:n.length,open:B[h].open,close:B[h].close}),n+="!"===h?"(?:(?!(?:":"(?:",this.debug("plType %j %j",h,n),h=!1;continue;case")":if(u||!o.length){n+="\\)";continue}g(),s=!0,l=o.pop(),n+=l.close,"!"===l.type&&a.push(l),l.reEnd=n.length;continue;case"|":if(u||!o.length){n+="\\|";continue}g(),n+="|";continue;case"[":if(g(),u){n+="\\"+t;continue}u=!0,f=d,E=n.length,n+=t;continue;case"]":if(d===f+1||!u){n+="\\"+t;continue}c=e.substring(f+1,d);try{RegExp("["+c+"]");}catch(e){p=this.parse(c,q),n=n.substr(0,E)+"\\["+p[0]+"\\]",s=s||p[1],u=!1;continue}s=!0,u=!1,n+=t;continue;default:g(),!V[t]||"^"===t&&u||(n+="\\"),n+=t;}for(u&&(c=e.substr(f+1),p=this.parse(c,q),n=n.substr(0,E)+"\\["+p[0],s=s||p[1]),l=o.pop();l;l=o.pop()){let e;e=n.slice(l.reStart+l.open.length),this.debug("setting tail",n,l),e=e.replace(/((?:\\{2}){0,64})(\\?)\|/g,((e,t,r)=>(r||(r="\\"),t+t+r+"|"))),this.debug("tail=%j\n   %s",e,e,l,n);const t="*"===l.type?"[^/]*?":"?"===l.type?"[^/]":"\\"+l.type;s=!0,n=n.slice(0,l.reStart)+t+"\\("+e;}g(),i&&(n+="\\\\");const I=z[n.charAt(0)];for(let e=a.length-1;e>-1;e--){const r=a[e],s=n.slice(0,r.reStart),i=n.slice(r.reStart,r.reEnd-8);let o=n.slice(r.reEnd);const h=n.slice(r.reEnd-8,r.reEnd)+o,c=s.split("(").length-1;let l=o;for(let e=0;e<c;e++)l=l.replace(/\)[+*?]?/,"");o=l;n=s+i+o+(""===o&&t!==q?"$":"")+h;}if(""!==n&&s&&(n="(?=.)"+n),I&&(n=d+n),t===q)return [n,s];if(!s)return e.replace(/\\(.)/g,"$1");const m=r.nocase?"i":"";try{return Object.assign(new RegExp("^"+n+"$",m),{_glob:e,_src:n})}catch(e){return new RegExp("$.")}}makeRe(){if(this.regexp||!1===this.regexp)return this.regexp;const e=this.set;if(!e.length)return this.regexp=!1,this.regexp;const t=this.options,r=t.noglobstar?"[^/]*?":t.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",n=t.nocase?"i":"";let s=e.map((e=>(e=e.map((e=>"string"==typeof e?e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):e===X?X:e._src)).reduce(((e,t)=>(e[e.length-1]===X&&t===X||e.push(t),e)),[]),e.forEach(((t,n)=>{t===X&&e[n-1]!==X&&(0===n?e.length>1?e[n+1]="(?:\\/|"+r+"\\/)?"+e[n+1]:e[n]=r:n===e.length-1?e[n-1]+="(?:\\/|"+r+")?":(e[n-1]+="(?:\\/|\\/"+r+"\\/)"+e[n+1],e[n+1]=X));})),e.filter((e=>e!==X)).join("/")))).join("|");s="^(?:"+s+")$",this.negate&&(s="^(?!"+s+").*$");try{this.regexp=new RegExp(s,n);}catch(e){this.regexp=!1;}return this.regexp}match(e,t=this.partial){if(this.debug("match",e,this.pattern),this.comment)return !1;if(this.empty)return ""===e;if("/"===e&&t)return !0;const r=this.options;"/"!==U.sep&&(e=e.split(U.sep).join("/")),e=e.split(Z),this.debug(this.pattern,"split",e);const n=this.set;let s;this.debug(this.pattern,"set",n);for(let t=e.length-1;t>=0&&(s=e[t],!s);t--);for(let i=0;i<n.length;i++){const o=n[i];let a=e;r.matchBase&&1===o.length&&(a=[s]);if(this.matchOne(a,o,t))return !!r.flipNegate||!this.negate}return !r.flipNegate&&this.negate}static defaults(e){return C.defaults(e).Minimatch}}C.Minimatch=K;var Q,ee=function(){},te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e;}d(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}(t,e),t}(ee);!function(e){e[e.HaveNothingUpdate=0]="HaveNothingUpdate",e[e.Success=1]="Success",e[e.Failed=2]="Failed";}(Q||(Q={}));var ie="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var oe={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,MAX_SAFE_COMPONENT_LENGTH:16},ae={exports:{}};!function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r}=oe,n=ie,s=(t=e.exports={}).re=[],i=t.src=[],o=t.t={};let a=0;const h=(e,t,r)=>{const h=a++;n(e,h,t),o[e]=h,i[h]=t,s[h]=new RegExp(t,r?"g":void 0);};h("NUMERICIDENTIFIER","0|[1-9]\\d*"),h("NUMERICIDENTIFIERLOOSE","[0-9]+"),h("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),h("MAINVERSION",`(${i[o.NUMERICIDENTIFIER]})\\.(${i[o.NUMERICIDENTIFIER]})\\.(${i[o.NUMERICIDENTIFIER]})`),h("MAINVERSIONLOOSE",`(${i[o.NUMERICIDENTIFIERLOOSE]})\\.(${i[o.NUMERICIDENTIFIERLOOSE]})\\.(${i[o.NUMERICIDENTIFIERLOOSE]})`),h("PRERELEASEIDENTIFIER",`(?:${i[o.NUMERICIDENTIFIER]}|${i[o.NONNUMERICIDENTIFIER]})`),h("PRERELEASEIDENTIFIERLOOSE",`(?:${i[o.NUMERICIDENTIFIERLOOSE]}|${i[o.NONNUMERICIDENTIFIER]})`),h("PRERELEASE",`(?:-(${i[o.PRERELEASEIDENTIFIER]}(?:\\.${i[o.PRERELEASEIDENTIFIER]})*))`),h("PRERELEASELOOSE",`(?:-?(${i[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[o.PRERELEASEIDENTIFIERLOOSE]})*))`),h("BUILDIDENTIFIER","[0-9A-Za-z-]+"),h("BUILD",`(?:\\+(${i[o.BUILDIDENTIFIER]}(?:\\.${i[o.BUILDIDENTIFIER]})*))`),h("FULLPLAIN",`v?${i[o.MAINVERSION]}${i[o.PRERELEASE]}?${i[o.BUILD]}?`),h("FULL",`^${i[o.FULLPLAIN]}$`),h("LOOSEPLAIN",`[v=\\s]*${i[o.MAINVERSIONLOOSE]}${i[o.PRERELEASELOOSE]}?${i[o.BUILD]}?`),h("LOOSE",`^${i[o.LOOSEPLAIN]}$`),h("GTLT","((?:<|>)?=?)"),h("XRANGEIDENTIFIERLOOSE",`${i[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h("XRANGEIDENTIFIER",`${i[o.NUMERICIDENTIFIER]}|x|X|\\*`),h("XRANGEPLAIN",`[v=\\s]*(${i[o.XRANGEIDENTIFIER]})(?:\\.(${i[o.XRANGEIDENTIFIER]})(?:\\.(${i[o.XRANGEIDENTIFIER]})(?:${i[o.PRERELEASE]})?${i[o.BUILD]}?)?)?`),h("XRANGEPLAINLOOSE",`[v=\\s]*(${i[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[o.XRANGEIDENTIFIERLOOSE]})(?:${i[o.PRERELEASELOOSE]})?${i[o.BUILD]}?)?)?`),h("XRANGE",`^${i[o.GTLT]}\\s*${i[o.XRANGEPLAIN]}$`),h("XRANGELOOSE",`^${i[o.GTLT]}\\s*${i[o.XRANGEPLAINLOOSE]}$`),h("COERCE",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),h("COERCERTL",i[o.COERCE],!0),h("LONETILDE","(?:~>?)"),h("TILDETRIM",`(\\s*)${i[o.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",h("TILDE",`^${i[o.LONETILDE]}${i[o.XRANGEPLAIN]}$`),h("TILDELOOSE",`^${i[o.LONETILDE]}${i[o.XRANGEPLAINLOOSE]}$`),h("LONECARET","(?:\\^)"),h("CARETTRIM",`(\\s*)${i[o.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",h("CARET",`^${i[o.LONECARET]}${i[o.XRANGEPLAIN]}$`),h("CARETLOOSE",`^${i[o.LONECARET]}${i[o.XRANGEPLAINLOOSE]}$`),h("COMPARATORLOOSE",`^${i[o.GTLT]}\\s*(${i[o.LOOSEPLAIN]})$|^$`),h("COMPARATOR",`^${i[o.GTLT]}\\s*(${i[o.FULLPLAIN]})$|^$`),h("COMPARATORTRIM",`(\\s*)${i[o.GTLT]}\\s*(${i[o.LOOSEPLAIN]}|${i[o.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",h("HYPHENRANGE",`^\\s*(${i[o.XRANGEPLAIN]})\\s+-\\s+(${i[o.XRANGEPLAIN]})\\s*$`),h("HYPHENRANGELOOSE",`^\\s*(${i[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[o.XRANGEPLAINLOOSE]})\\s*$`),h("STAR","(<|>)?=?\\s*\\*"),h("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),h("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$");}(ae,ae.exports);ae.exports;function Ae(t){return crypto.createHash("sha256").update(t).digest("hex")}function $e(e,t){return "function"==typeof e?e(t):!(!e||!Array.isArray(e)||0===e.length)&&new RegExp(e.reduce((function(e,t){return e+"|"+_.makeRe(t).source}),"").substring(1)).test(t)}function ve(e,n){var a,h;void 0===n&&(n={});var c,l=fs.statSync(e),p=path.basename(e);return l.isFile()?$e(null===(a=null==n?void 0:n.files)||void 0===a?void 0:a.exclude,p)?null:((c=new ee).name=p,c.hash=Ae(fs.readFileSync(e)),c):l.isDirectory()?$e(null===(h=null==n?void 0:n.folders)||void 0===h?void 0:h.exclude,p)?null:((c=new te).name=p,c.children=fs.readdirSync(e).map((function(t){return ve(path.join(e,t),n)})).filter((function(e){return null!==e})),c.hash=Ae(c.children.map((function(e){return e.hash})).join("")),c):null}function we(e,t){return new Promise((function(r,n){var s=zlib.createGzip(),i=fs.createWriteStream(t),o=fs.createReadStream(e);o.on("close",r),o.on("error",n),i.on("error",n),o.pipe(s).pipe(i);}))}function Pe(e,t,n,s){return void 0===s&&(s=!1),g(this,void 0,void 0,(function(){var i;return I(this,(function(o){switch(o.label){case 0:if(!e.children)return [3,5];i=0,o.label=1;case 1:return i<e.children.length?[4,Pe(e.children[i],t+(s?"":"/"+e.name),n)]:[3,4];case 2:o.sent(),o.label=3;case 3:return i++,[3,1];case 4:return [3,7];case 5:return [4,we(t+"/"+e.name,path.join(n,e.hash+".gz"))];case 6:o.sent(),o.label=7;case 7:return [2]}}))}))}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsAstral = '[' + rsAstralRange + ']',
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase$1 = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

var lodash_camelcase = camelCase$1;

function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var camelCase = _interopDefault$1(lodash_camelcase);

/**
 * Takes any input and guarantees an array back.
 *
 * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
 * - Converts `undefined` to an empty array.
 * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
 * - Ignores input which is already an array.
 *
 * @module array-back
 * @example
 * > const arrayify = require('array-back')
 *
 * > arrayify(undefined)
 * []
 *
 * > arrayify(null)
 * [ null ]
 *
 * > arrayify(0)
 * [ 0 ]
 *
 * > arrayify([ 1, 2 ])
 * [ 1, 2 ]
 *
 * > arrayify(new Set([ 1, 2 ]))
 * [ 1, 2 ]
 *
 * > function f(){ return arrayify(arguments); }
 * > f(1,2,3)
 * [ 1, 2, 3 ]
 */

function isObject (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number'
}

/**
 * @param {*} - The input value to convert to an array
 * @returns {Array}
 * @alias module:array-back
 */
function arrayify$3 (input) {
  if (Array.isArray(input)) {
    return input
  }

  if (input === undefined) {
    return []
  }

  if (isArrayLike(input) || input instanceof Set) {
    return Array.from(input)
  }

  return [ input ]
}

/**
 * Takes any input and guarantees an array back.
 *
 * - converts array-like objects (e.g. `arguments`) to a real array
 * - converts `undefined` to an empty array
 * - converts any another other, singular value (including `null`) into an array containing that value
 * - ignores input which is already an array
 *
 * @module array-back
 * @example
 * > const arrayify = require('array-back')
 *
 * > arrayify(undefined)
 * []
 *
 * > arrayify(null)
 * [ null ]
 *
 * > arrayify(0)
 * [ 0 ]
 *
 * > arrayify([ 1, 2 ])
 * [ 1, 2 ]
 *
 * > function f(){ return arrayify(arguments); }
 * > f(1,2,3)
 * [ 1, 2, 3 ]
 */

function isObject$1 (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike$1 (input) {
  return isObject$1(input) && typeof input.length === 'number'
}

/**
 * @param {*} - the input value to convert to an array
 * @returns {Array}
 * @alias module:array-back
 */
function arrayify$1$1 (input) {
  if (Array.isArray(input)) {
    return input
  } else {
    if (input === undefined) {
      return []
    } else if (isArrayLike$1(input)) {
      return Array.prototype.slice.call(input)
    } else {
      return [ input ]
    }
  }
}

/**
 * Find and either replace or remove items in an array.
 *
 * @module find-replace
 * @example
 * > const findReplace = require('find-replace')
 * > const numbers = [ 1, 2, 3]
 *
 * > findReplace(numbers, n => n === 2, 'two')
 * [ 1, 'two', 3 ]
 *
 * > findReplace(numbers, n => n === 2, [ 'two', 'zwei' ])
 * [ 1, [ 'two', 'zwei' ], 3 ]
 *
 * > findReplace(numbers, n => n === 2, 'two', 'zwei')
 * [ 1, 'two', 'zwei', 3 ]
 *
 * > findReplace(numbers, n => n === 2) // no replacement, so remove
 * [ 1, 3 ]
 */

/**
 * @param {array} - The input array
 * @param {testFn} - A predicate function which, if returning `true` causes the current item to be operated on.
 * @param [replaceWith] {...any} - If specified, found values will be replaced with these values, else removed.
 * @returns {array}
 * @alias module:find-replace
 */
function findReplace (array, testFn) {
  const found = [];
  const replaceWiths = arrayify$1$1(arguments);
  replaceWiths.splice(0, 2);

  arrayify$1$1(array).forEach((value, index) => {
    let expanded = [];
    replaceWiths.forEach(replaceWith => {
      if (typeof replaceWith === 'function') {
        expanded = expanded.concat(replaceWith(value));
      } else {
        expanded.push(replaceWith);
      }
    });

    if (testFn(value)) {
      found.push({
        index: index,
        replaceWithValue: expanded
      });
    }
  });

  found.reverse().forEach(item => {
    const spliceArgs = [ item.index, 1 ].concat(item.replaceWithValue);
    array.splice.apply(array, spliceArgs);
  });

  return array
}

/**
 * Some useful tools for working with `process.argv`.
 *
 * @module argv-tools
 * @typicalName argvTools
 * @example
 * const argvTools = require('argv-tools')
 */

/**
 * Regular expressions for matching option formats.
 * @static
 */
const re$1 = {
  short: /^-([^\d-])$/,
  long: /^--(\S+)/,
  combinedShort: /^-[^\d-]{2,}$/,
  optEquals: /^(--\S+?)=(.*)/
};

/**
 * Array subclass encapsulating common operations on `process.argv`.
 * @static
 */
class ArgvArray extends Array {
  /**
   * Clears the array has loads the supplied input.
   * @param {string[]} argv - The argv list to load. Defaults to `process.argv`.
   */
  load (argv) {
    this.clear();
    if (argv && argv !== process.argv) {
      argv = arrayify$3(argv);
    } else {
      /* if no argv supplied, assume we are parsing process.argv */
      argv = process.argv.slice(0);
      const deleteCount = process.execArgv.some(isExecArg) ? 1 : 2;
      argv.splice(0, deleteCount);
    }
    argv.forEach(arg => this.push(String(arg)));
  }

  /**
   * Clear the array.
   */
  clear () {
    this.length = 0;
  }

  /**
   * expand ``--option=value` style args.
   */
  expandOptionEqualsNotation () {
    if (this.some(arg => re$1.optEquals.test(arg))) {
      const expandedArgs = [];
      this.forEach(arg => {
        const matches = arg.match(re$1.optEquals);
        if (matches) {
          expandedArgs.push(matches[1], matches[2]);
        } else {
          expandedArgs.push(arg);
        }
      });
      this.clear();
      this.load(expandedArgs);
    }
  }

  /**
   * expand getopt-style combinedShort options.
   */
  expandGetoptNotation () {
    if (this.hasCombinedShortOptions()) {
      findReplace(this, re$1.combinedShort, expandCombinedShortArg);
    }
  }

  /**
   * Returns true if the array contains combined short options (e.g. `-ab`).
   * @returns {boolean}
   */
  hasCombinedShortOptions () {
    return this.some(arg => re$1.combinedShort.test(arg))
  }

  static from (argv) {
    const result = new this();
    result.load(argv);
    return result
  }
}

/**
 * Expand a combined short option.
 * @param {string} - the string to expand, e.g. `-ab`
 * @returns {string[]}
 * @static
 */
function expandCombinedShortArg (arg) {
  /* remove initial hypen */
  arg = arg.slice(1);
  return arg.split('').map(letter => '-' + letter)
}

/**
 * Returns true if the supplied arg matches `--option=value` notation.
 * @param {string} - the arg to test, e.g. `--one=something`
 * @returns {boolean}
 * @static
 */
function isOptionEqualsNotation (arg) {
  return re$1.optEquals.test(arg)
}

/**
 * Returns true if the supplied arg is in either long (`--one`) or short (`-o`) format.
 * @param {string} - the arg to test, e.g. `--one`
 * @returns {boolean}
 * @static
 */
function isOption (arg) {
  return (re$1.short.test(arg) || re$1.long.test(arg)) && !re$1.optEquals.test(arg)
}

/**
 * Returns true if the supplied arg is in long (`--one`) format.
 * @param {string} - the arg to test, e.g. `--one`
 * @returns {boolean}
 * @static
 */
function isLongOption (arg) {
  return re$1.long.test(arg) && !isOptionEqualsNotation(arg)
}

/**
 * Returns the name from a long, short or `--options=value` arg.
 * @param {string} - the arg to inspect, e.g. `--one`
 * @returns {string}
 * @static
 */
function getOptionName (arg) {
  if (re$1.short.test(arg)) {
    return arg.match(re$1.short)[1]
  } else if (isLongOption(arg)) {
    return arg.match(re$1.long)[1]
  } else if (isOptionEqualsNotation(arg)) {
    return arg.match(re$1.optEquals)[1].replace(/^--/, '')
  } else {
    return null
  }
}

function isValue (arg) {
  return !(isOption(arg) || re$1.combinedShort.test(arg) || re$1.optEquals.test(arg))
}

function isExecArg (arg) {
  return ['--eval', '-e'].indexOf(arg) > -1 || arg.startsWith('--eval=')
}

/**
 * For type-checking Javascript values.
 * @module typical
 * @typicalname t
 * @example
 * const t = require('typical')
 */

/**
 * Returns true if input is a number
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * > t.isNumber(0)
 * true
 * > t.isNumber(1)
 * true
 * > t.isNumber(1.1)
 * true
 * > t.isNumber(0xff)
 * true
 * > t.isNumber(0644)
 * true
 * > t.isNumber(6.2e5)
 * true
 * > t.isNumber(NaN)
 * false
 * > t.isNumber(Infinity)
 * false
 */
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

/**
 * A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.
 *
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * > t.isPlainObject({ something: 'one' })
 * true
 * > t.isPlainObject(new Date())
 * false
 * > t.isPlainObject([ 0, 1 ])
 * false
 * > t.isPlainObject(/test/)
 * false
 * > t.isPlainObject(1)
 * false
 * > t.isPlainObject('one')
 * false
 * > t.isPlainObject(null)
 * false
 * > t.isPlainObject((function * () {})())
 * false
 * > t.isPlainObject(function * () {})
 * false
 */
function isPlainObject (input) {
  return input !== null && typeof input === 'object' && input.constructor === Object
}

/**
 * An array-like value has all the properties of an array, but is not an array instance. Examples in the `arguments` object. Returns true if the input value is an object, not null and has a `length` property with a numeric value.
 *
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * function sum(x, y){
 *     console.log(t.isArrayLike(arguments))
 *     // prints `true`
 * }
 */
function isArrayLike$2 (input) {
  return isObject$2(input) && typeof input.length === 'number'
}

/**
 * returns true if the typeof input is `'object'`, but not null!
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isObject$2 (input) {
  return typeof input === 'object' && input !== null
}

/**
 * Returns true if the input value is defined
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isDefined (input) {
  return typeof input !== 'undefined'
}

/**
 * Returns true if the input value is a string
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isString (input) {
  return typeof input === 'string'
}

/**
 * Returns true if the input value is a boolean
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isBoolean (input) {
  return typeof input === 'boolean'
}

/**
 * Returns true if the input value is a function
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isFunction (input) {
  return typeof input === 'function'
}

/**
 * Returns true if the input value is an es2015 `class`.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isClass (input) {
  if (isFunction(input)) {
    return /^class /.test(Function.prototype.toString.call(input))
  } else {
    return false
  }
}

/**
 * Returns true if the input is a string, number, symbol, boolean, null or undefined value.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isPrimitive (input) {
  if (input === null) return true
  switch (typeof input) {
    case 'string':
    case 'number':
    case 'symbol':
    case 'undefined':
    case 'boolean':
      return true
    default:
      return false
  }
}

/**
 * Returns true if the input is a Promise.
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 */
function isPromise (input) {
  if (input) {
    const isPromise = isDefined(Promise) && input instanceof Promise;
    const isThenable = input.then && typeof input.then === 'function';
    return !!(isPromise || isThenable)
  } else {
    return false
  }
}

/**
 * Returns true if the input is an iterable (`Map`, `Set`, `Array`, Generator etc.).
 * @param {*} - the input to test
 * @returns {boolean}
 * @static
 * @example
 * > t.isIterable('string')
 * true
 * > t.isIterable(new Map())
 * true
 * > t.isIterable([])
 * true
 * > t.isIterable((function * () {})())
 * true
 * > t.isIterable(Promise.resolve())
 * false
 * > t.isIterable(Promise)
 * false
 * > t.isIterable(true)
 * false
 * > t.isIterable({})
 * false
 * > t.isIterable(0)
 * false
 * > t.isIterable(1.1)
 * false
 * > t.isIterable(NaN)
 * false
 * > t.isIterable(Infinity)
 * false
 * > t.isIterable(function () {})
 * false
 * > t.isIterable(Date)
 * false
 * > t.isIterable()
 * false
 * > t.isIterable({ then: function () {} })
 * false
 */
function isIterable (input) {
  if (input === null || !isDefined(input)) {
    return false
  } else {
    return (
      typeof input[Symbol.iterator] === 'function' ||
      typeof input[Symbol.asyncIterator] === 'function'
    )
  }
}

var t$6 = {
  isNumber,
  isString,
  isBoolean,
  isPlainObject,
  isArrayLike: isArrayLike$2,
  isObject: isObject$2,
  isDefined,
  isFunction,
  isClass,
  isPrimitive,
  isPromise,
  isIterable
};

/**
 * @module option-definition
 */

/**
 * Describes a command-line option. Additionally, if generating a usage guide with [command-line-usage](https://github.com/75lb/command-line-usage) you could optionally add `description` and `typeLabel` properties to each definition.
 *
 * @alias module:option-definition
 * @typicalname option
 */
class OptionDefinition {
  constructor (definition) {
    /**
    * The only required definition property is `name`, so the simplest working example is
    * ```js
    * const optionDefinitions = [
    *   { name: 'file' },
    *   { name: 'depth' }
    * ]
    * ```
    *
    * Where a `type` property is not specified it will default to `String`.
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | -------------------- | ------------ |
    * | 1   | `--file` | `{ file: null }` |
    * | 2   | `--file lib.js` | `{ file: 'lib.js' }` |
    * | 3   | `--depth 2` | `{ depth: '2' }` |
    *
    * Unicode option names and aliases are valid, for example:
    * ```js
    * const optionDefinitions = [
    *   { name: 'один' },
    *   { name: '两' },
    *   { name: 'три', alias: 'т' }
    * ]
    * ```
    * @type {string}
    */
    this.name = definition.name;

    /**
    * The `type` value is a setter function (you receive the output from this), enabling you to be specific about the type and value received.
    *
    * The most common values used are `String` (the default), `Number` and `Boolean` but you can use a custom function, for example:
    *
    * ```js
    * const fs = require('fs')
    *
    * class FileDetails {
    *   constructor (filename) {
    *     this.filename = filename
    *     this.exists = fs.existsSync(filename)
    *   }
    * }
    *
    * const cli = commandLineArgs([
    *   { name: 'file', type: filename => new FileDetails(filename) },
    *   { name: 'depth', type: Number }
    * ])
    * ```
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ----------------- | ------------ |
    * | 1   | `--file asdf.txt` | `{ file: { filename: 'asdf.txt', exists: false } }` |
    *
    * The `--depth` option expects a `Number`. If no value was set, you will receive `null`.
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ----------------- | ------------ |
    * | 2   | `--depth` | `{ depth: null }` |
    * | 3   | `--depth 2` | `{ depth: 2 }` |
    *
    * @type {function}
    * @default String
    */
    this.type = definition.type || String;

    /**
    * getopt-style short option names. Can be any single character (unicode included) except a digit or hyphen.
    *
    * ```js
    * const optionDefinitions = [
    *   { name: 'hot', alias: 'h', type: Boolean },
    *   { name: 'discount', alias: 'd', type: Boolean },
    *   { name: 'courses', alias: 'c' , type: Number }
    * ]
    * ```
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ------------ | ------------ |
    * | 1   | `-hcd` | `{ hot: true, courses: null, discount: true }` |
    * | 2   | `-hdc 3` | `{ hot: true, discount: true, courses: 3 }` |
    *
    * @type {string}
    */
    this.alias = definition.alias;

    /**
    * Set this flag if the option takes a list of values. You will receive an array of values, each passed through the `type` function (if specified).
    *
    * ```js
    * const optionDefinitions = [
    *   { name: 'files', type: String, multiple: true }
    * ]
    * ```
    *
    * Note, examples 1 and 3 below demonstrate "greedy" parsing which can be disabled by using `lazyMultiple`.
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ------------ | ------------ |
    * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 2   | `--files one.js --files two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 3   | `--files *` | `{ files: [ 'one.js', 'two.js' ] }` |
    *
    * @type {boolean}
    */
    this.multiple = definition.multiple;

    /**
     * Identical to `multiple` but with greedy parsing disabled.
     *
     * ```js
     * const optionDefinitions = [
     *   { name: 'files', lazyMultiple: true },
     *   { name: 'verbose', alias: 'v', type: Boolean, lazyMultiple: true }
     * ]
     * ```
     *
     * | #   | argv input | commandLineArgs() output |
     * | --- | ------------ | ------------ |
     * | 1   | `--files one.js --files two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
     * | 2   | `-vvv` | `{ verbose: [ true, true, true ] }` |
     *
     * @type {boolean}
     */
    this.lazyMultiple = definition.lazyMultiple;

    /**
    * Any values unaccounted for by an option definition will be set on the `defaultOption`. This flag is typically set on the most commonly-used option to make for more concise usage (i.e. `$ example *.js` instead of `$ example --files *.js`).
    *
    * ```js
    * const optionDefinitions = [
    *   { name: 'files', multiple: true, defaultOption: true }
    * ]
    * ```
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ------------ | ------------ |
    * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 2   | `one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
    * | 3   | `*` | `{ files: [ 'one.js', 'two.js' ] }` |
    *
    * @type {boolean}
    */
    this.defaultOption = definition.defaultOption;

    /**
    * An initial value for the option.
    *
    * ```js
    * const optionDefinitions = [
    *   { name: 'files', multiple: true, defaultValue: [ 'one.js' ] },
    *   { name: 'max', type: Number, defaultValue: 3 }
    * ]
    * ```
    *
    * | #   | argv input | commandLineArgs() output |
    * | --- | ------------ | ------------ |
    * | 1   |  | `{ files: [ 'one.js' ], max: 3 }` |
    * | 2   | `--files two.js` | `{ files: [ 'two.js' ], max: 3 }` |
    * | 3   | `--max 4` | `{ files: [ 'one.js' ], max: 4 }` |
    *
    * @type {*}
    */
    this.defaultValue = definition.defaultValue;

    /**
    * When your app has a large amount of options it makes sense to organise them in groups.
    *
    * There are two automatic groups: `_all` (contains all options) and `_none` (contains options without a `group` specified in their definition).
    *
    * ```js
    * const optionDefinitions = [
    *   { name: 'verbose', group: 'standard' },
    *   { name: 'help', group: [ 'standard', 'main' ] },
    *   { name: 'compress', group: [ 'server', 'main' ] },
    *   { name: 'static', group: 'server' },
    *   { name: 'debug' }
    * ]
    * ```
    *
    *<table>
    *  <tr>
    *    <th>#</th><th>Command Line</th><th>commandLineArgs() output</th>
    *  </tr>
    *  <tr>
    *    <td>1</td><td><code>--verbose</code></td><td><pre><code>
    *{
    *  _all: { verbose: true },
    *  standard: { verbose: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>2</td><td><code>--debug</code></td><td><pre><code>
    *{
    *  _all: { debug: true },
    *  _none: { debug: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>3</td><td><code>--verbose --debug --compress</code></td><td><pre><code>
    *{
    *  _all: {
    *    verbose: true,
    *    debug: true,
    *    compress: true
    *  },
    *  standard: { verbose: true },
    *  server: { compress: true },
    *  main: { compress: true },
    *  _none: { debug: true }
    *}
    *</code></pre></td>
    *  </tr>
    *  <tr>
    *    <td>4</td><td><code>--compress</code></td><td><pre><code>
    *{
    *  _all: { compress: true },
    *  server: { compress: true },
    *  main: { compress: true }
    *}
    *</code></pre></td>
    *  </tr>
    *</table>
    *
    * @type {string|string[]}
    */
    this.group = definition.group;

    /* pick up any remaining properties */
    for (const prop in definition) {
      if (!this[prop]) this[prop] = definition[prop];
    }
  }

  isBoolean () {
    return this.type === Boolean || (t$6.isFunction(this.type) && this.type.name === 'Boolean')
  }

  isMultiple () {
    return this.multiple || this.lazyMultiple
  }

  static create (def) {
    const result = new this(def);
    return result
  }
}

/**
 * @module option-definitions
 */

/**
 * @alias module:option-definitions
 */
class Definitions extends Array {
  /**
   * validate option definitions
   * @param {boolean} [caseInsensitive=false] - whether arguments will be parsed in a case insensitive manner
   * @returns {string}
   */
  validate (caseInsensitive) {
    const someHaveNoName = this.some(def => !def.name);
    if (someHaveNoName) {
      halt(
        'INVALID_DEFINITIONS',
        'Invalid option definitions: the `name` property is required on each definition'
      );
    }

    const someDontHaveFunctionType = this.some(def => def.type && typeof def.type !== 'function');
    if (someDontHaveFunctionType) {
      halt(
        'INVALID_DEFINITIONS',
        'Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)'
      );
    }

    let invalidOption;

    const numericAlias = this.some(def => {
      invalidOption = def;
      return t$6.isDefined(def.alias) && t$6.isNumber(def.alias)
    });
    if (numericAlias) {
      halt(
        'INVALID_DEFINITIONS',
        'Invalid option definition: to avoid ambiguity an alias cannot be numeric [--' + invalidOption.name + ' alias is -' + invalidOption.alias + ']'
      );
    }

    const multiCharacterAlias = this.some(def => {
      invalidOption = def;
      return t$6.isDefined(def.alias) && def.alias.length !== 1
    });
    if (multiCharacterAlias) {
      halt(
        'INVALID_DEFINITIONS',
        'Invalid option definition: an alias must be a single character'
      );
    }

    const hypenAlias = this.some(def => {
      invalidOption = def;
      return def.alias === '-'
    });
    if (hypenAlias) {
      halt(
        'INVALID_DEFINITIONS',
        'Invalid option definition: an alias cannot be "-"'
      );
    }

    const duplicateName = hasDuplicates(this.map(def => caseInsensitive ? def.name.toLowerCase() : def.name));
    if (duplicateName) {
      halt(
        'INVALID_DEFINITIONS',
        'Two or more option definitions have the same name'
      );
    }

    const duplicateAlias = hasDuplicates(this.map(def => caseInsensitive && t$6.isDefined(def.alias) ? def.alias.toLowerCase() : def.alias));
    if (duplicateAlias) {
      halt(
        'INVALID_DEFINITIONS',
        'Two or more option definitions have the same alias'
      );
    }

    const duplicateDefaultOption = this.filter(def => def.defaultOption === true).length > 1;
    if (duplicateDefaultOption) {
      halt(
        'INVALID_DEFINITIONS',
        'Only one option definition can be the defaultOption'
      );
    }

    const defaultBoolean = this.some(def => {
      invalidOption = def;
      return def.isBoolean() && def.defaultOption
    });
    if (defaultBoolean) {
      halt(
        'INVALID_DEFINITIONS',
        `A boolean option ["${invalidOption.name}"] can not also be the defaultOption.`
      );
    }
  }

  /**
   * Get definition by option arg (e.g. `--one` or `-o`)
   * @param {string} [arg] the argument name to get the definition for
   * @param {boolean} [caseInsensitive] whether to use case insensitive comparisons when finding the appropriate definition
   * @returns {Definition}
   */
  get (arg, caseInsensitive) {
    if (isOption(arg)) {
      if (re$1.short.test(arg)) {
        const shortOptionName = getOptionName(arg);
        if (caseInsensitive) {
          const lowercaseShortOptionName = shortOptionName.toLowerCase();
          return this.find(def => t$6.isDefined(def.alias) && def.alias.toLowerCase() === lowercaseShortOptionName)
        } else {
          return this.find(def => def.alias === shortOptionName)
        }
      } else {
        const optionName = getOptionName(arg);
        if (caseInsensitive) {
          const lowercaseOptionName = optionName.toLowerCase();
          return this.find(def => def.name.toLowerCase() === lowercaseOptionName)
        } else {
          return this.find(def => def.name === optionName)
        }
      }
    } else {
      return this.find(def => def.name === arg)
    }
  }

  getDefault () {
    return this.find(def => def.defaultOption === true)
  }

  isGrouped () {
    return this.some(def => def.group)
  }

  whereGrouped () {
    return this.filter(containsValidGroup)
  }

  whereNotGrouped () {
    return this.filter(def => !containsValidGroup(def))
  }

  whereDefaultValueSet () {
    return this.filter(def => t$6.isDefined(def.defaultValue))
  }

  static from (definitions, caseInsensitive) {
    if (definitions instanceof this) return definitions
    const result = super.from(arrayify$3(definitions), def => OptionDefinition.create(def));
    result.validate(caseInsensitive);
    return result
  }
}

function halt (name, message) {
  const err = new Error(message);
  err.name = name;
  throw err
}

function containsValidGroup (def) {
  return arrayify$3(def.group).some(group => group)
}

function hasDuplicates (array) {
  const items = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (items[value]) {
      return true
    } else {
      if (t$6.isDefined(value)) items[value] = true;
    }
  }
}

/**
 * @module argv-parser
 */

/**
 * @alias module:argv-parser
 */
class ArgvParser {
  /**
   * @param {OptionDefinitions} - Definitions array
   * @param {object} [options] - Options
   * @param {string[]} [options.argv] - Overrides `process.argv`
   * @param {boolean} [options.stopAtFirstUnknown] -
   * @param {boolean} [options.caseInsensitive] - Arguments will be parsed in a case insensitive manner. Defaults to false.
   */
  constructor (definitions, options) {
    this.options = Object.assign({}, options);
    /**
     * Option Definitions
     */
    this.definitions = Definitions.from(definitions, this.options.caseInsensitive);

    /**
     * Argv
     */
    this.argv = ArgvArray.from(this.options.argv);
    if (this.argv.hasCombinedShortOptions()) {
      findReplace(this.argv, re$1.combinedShort.test.bind(re$1.combinedShort), arg => {
        arg = arg.slice(1);
        return arg.split('').map(letter => ({ origArg: `-${arg}`, arg: '-' + letter }))
      });
    }
  }

  /**
   * Yields one `{ event, name, value, arg, def }` argInfo object for each arg in `process.argv` (or `options.argv`).
   */
  * [Symbol.iterator] () {
    const definitions = this.definitions;

    let def;
    let value;
    let name;
    let event;
    let singularDefaultSet = false;
    let unknownFound = false;
    let origArg;

    for (let arg of this.argv) {
      if (t$6.isPlainObject(arg)) {
        origArg = arg.origArg;
        arg = arg.arg;
      }

      if (unknownFound && this.options.stopAtFirstUnknown) {
        yield { event: 'unknown_value', arg, name: '_unknown', value: undefined };
        continue
      }

      /* handle long or short option */
      if (isOption(arg)) {
        def = definitions.get(arg, this.options.caseInsensitive);
        value = undefined;
        if (def) {
          value = def.isBoolean() ? true : null;
          event = 'set';
        } else {
          event = 'unknown_option';
        }

      /* handle --option-value notation */
      } else if (isOptionEqualsNotation(arg)) {
        const matches = arg.match(re$1.optEquals);
        def = definitions.get(matches[1], this.options.caseInsensitive);
        if (def) {
          if (def.isBoolean()) {
            yield { event: 'unknown_value', arg, name: '_unknown', value, def };
            event = 'set';
            value = true;
          } else {
            event = 'set';
            value = matches[2];
          }
        } else {
          event = 'unknown_option';
        }

      /* handle value */
      } else if (isValue(arg)) {
        if (def) {
          value = arg;
          event = 'set';
        } else {
          /* get the defaultOption */
          def = this.definitions.getDefault();
          if (def && !singularDefaultSet) {
            value = arg;
            event = 'set';
          } else {
            event = 'unknown_value';
            def = undefined;
          }
        }
      }

      name = def ? def.name : '_unknown';
      const argInfo = { event, arg, name, value, def };
      if (origArg) {
        argInfo.subArg = arg;
        argInfo.arg = origArg;
      }
      yield argInfo;

      /* unknownFound logic */
      if (name === '_unknown') unknownFound = true;

      /* singularDefaultSet logic */
      if (def && def.defaultOption && !def.isMultiple() && event === 'set') singularDefaultSet = true;

      /* reset values once consumed and yielded */
      if (def && def.isBoolean()) def = undefined;
      /* reset the def if it's a singular which has been set */
      if (def && !def.multiple && t$6.isDefined(value) && value !== null) {
        def = undefined;
      }
      value = undefined;
      event = undefined;
      name = undefined;
      origArg = undefined;
    }
  }
}

const _value$1 = new WeakMap();

/**
 * Encapsulates behaviour (defined by an OptionDefinition) when setting values
 */
class Option {
  constructor (definition) {
    this.definition = new OptionDefinition(definition);
    this.state = null; /* set or default */
    this.resetToDefault();
  }

  get () {
    return _value$1.get(this)
  }

  set (val) {
    this._set(val, 'set');
  }

  _set (val, state) {
    const def = this.definition;
    if (def.isMultiple()) {
      /* don't add null or undefined to a multiple */
      if (val !== null && val !== undefined) {
        const arr = this.get();
        if (this.state === 'default') arr.length = 0;
        arr.push(def.type(val));
        this.state = state;
      }
    } else {
      /* throw if already set on a singlar defaultOption */
      if (!def.isMultiple() && this.state === 'set') {
        const err = new Error(`Singular option already set [${this.definition.name}=${this.get()}]`);
        err.name = 'ALREADY_SET';
        err.value = val;
        err.optionName = def.name;
        throw err
      } else if (val === null || val === undefined) {
        _value$1.set(this, val);
        // /* required to make 'partial: defaultOption with value equal to defaultValue 2' pass */
        // if (!(def.defaultOption && !def.isMultiple())) {
        //   this.state = state
        // }
      } else {
        _value$1.set(this, def.type(val));
        this.state = state;
      }
    }
  }

  resetToDefault () {
    if (t$6.isDefined(this.definition.defaultValue)) {
      if (this.definition.isMultiple()) {
        _value$1.set(this, arrayify$3(this.definition.defaultValue).slice());
      } else {
        _value$1.set(this, this.definition.defaultValue);
      }
    } else {
      if (this.definition.isMultiple()) {
        _value$1.set(this, []);
      } else {
        _value$1.set(this, null);
      }
    }
    this.state = 'default';
  }

  static create (definition) {
    definition = new OptionDefinition(definition);
    if (definition.isBoolean()) {
      return FlagOption.create(definition)
    } else {
      return new this(definition)
    }
  }
}

class FlagOption extends Option {
  set (val) {
    super.set(true);
  }

  static create (def) {
    return new this(def)
  }
}

/**
 * A map of { DefinitionNameString: Option }. By default, an Output has an `_unknown` property and any options with defaultValues.
 */
class Output extends Map {
  constructor (definitions) {
    super();
    /**
     * @type {OptionDefinitions}
     */
    this.definitions = Definitions.from(definitions);

    /* by default, an Output has an `_unknown` property and any options with defaultValues */
    this.set('_unknown', Option.create({ name: '_unknown', multiple: true }));
    for (const def of this.definitions.whereDefaultValueSet()) {
      this.set(def.name, Option.create(def));
    }
  }

  toObject (options) {
    options = options || {};
    const output = {};
    for (const item of this) {
      const name = options.camelCase && item[0] !== '_unknown' ? camelCase(item[0]) : item[0];
      const option = item[1];
      if (name === '_unknown' && !option.get().length) continue
      output[name] = option.get();
    }

    if (options.skipUnknown) delete output._unknown;
    return output
  }
}

class GroupedOutput extends Output {
  toObject (options) {
    const superOutputNoCamel = super.toObject({ skipUnknown: options.skipUnknown });
    const superOutput = super.toObject(options);
    const unknown = superOutput._unknown;
    delete superOutput._unknown;
    const grouped = {
      _all: superOutput
    };
    if (unknown && unknown.length) grouped._unknown = unknown;

    this.definitions.whereGrouped().forEach(def => {
      const name = options.camelCase ? camelCase(def.name) : def.name;
      const outputValue = superOutputNoCamel[def.name];
      for (const groupName of arrayify$3(def.group)) {
        grouped[groupName] = grouped[groupName] || {};
        if (t$6.isDefined(outputValue)) {
          grouped[groupName][name] = outputValue;
        }
      }
    });

    this.definitions.whereNotGrouped().forEach(def => {
      const name = options.camelCase ? camelCase(def.name) : def.name;
      const outputValue = superOutputNoCamel[def.name];
      if (t$6.isDefined(outputValue)) {
        if (!grouped._none) grouped._none = {};
        grouped._none[name] = outputValue;
      }
    });
    return grouped
  }
}

/**
 * @module command-line-args
 */

/**
 * Returns an object containing all option values set on the command line. By default it parses the global  [`process.argv`](https://nodejs.org/api/process.html#process_process_argv) array.
 *
 * Parsing is strict by default - an exception is thrown if the user sets a singular option more than once or sets an unknown value or option (one without a valid [definition](https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md)). To be more permissive, enabling [partial](https://github.com/75lb/command-line-args/wiki/Partial-mode-example) or [stopAtFirstUnknown](https://github.com/75lb/command-line-args/wiki/stopAtFirstUnknown) modes will return known options in the usual manner while collecting unknown arguments in a separate `_unknown` property.
 *
 * @param {Array<OptionDefinition>} - An array of [OptionDefinition](https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md) objects
 * @param {object} [options] - Options.
 * @param {string[]} [options.argv] - An array of strings which, if present will be parsed instead  of `process.argv`.
 * @param {boolean} [options.partial] - If `true`, an array of unknown arguments is returned in the `_unknown` property of the output.
 * @param {boolean} [options.stopAtFirstUnknown] - If `true`, parsing will stop at the first unknown argument and the remaining arguments returned in `_unknown`. When set, `partial: true` is also implied.
 * @param {boolean} [options.camelCase] - If `true`, options with hypenated names (e.g. `move-to`) will be returned in camel-case (e.g. `moveTo`).
 * @param {boolean} [options.caseInsensitive] - If `true`, the case of each option name or alias parsed is insignificant. In other words, both `--Verbose` and `--verbose`, `-V` and `-v` would be equivalent. Defaults to false.
 * @returns {object}
 * @throws `UNKNOWN_OPTION` If `options.partial` is false and the user set an undefined option. The `err.optionName` property contains the arg that specified an unknown option, e.g. `--one`.
 * @throws `UNKNOWN_VALUE` If `options.partial` is false and the user set a value unaccounted for by an option definition. The `err.value` property contains the unknown value, e.g. `5`.
 * @throws `ALREADY_SET` If a user sets a singular, non-multiple option more than once. The `err.optionName` property contains the option name that has already been set, e.g. `one`.
 * @throws `INVALID_DEFINITIONS`
 *   - If an option definition is missing the required `name` property
 *   - If an option definition has a `type` value that's not a function
 *   - If an alias is numeric, a hyphen or a length other than 1
 *   - If an option definition name was used more than once
 *   - If an option definition alias was used more than once
 *   - If more than one option definition has `defaultOption: true`
 *   - If a `Boolean` option is also set as the `defaultOption`.
 * @alias module:command-line-args
 */
function commandLineArgs (optionDefinitions, options) {
  options = options || {};
  if (options.stopAtFirstUnknown) options.partial = true;
  optionDefinitions = Definitions.from(optionDefinitions, options.caseInsensitive);

  const parser = new ArgvParser(optionDefinitions, {
    argv: options.argv,
    stopAtFirstUnknown: options.stopAtFirstUnknown,
    caseInsensitive: options.caseInsensitive
  });

  const OutputClass = optionDefinitions.isGrouped() ? GroupedOutput : Output;
  const output = new OutputClass(optionDefinitions);

  /* Iterate the parser setting each known value to the output. Optionally, throw on unknowns. */
  for (const argInfo of parser) {
    const arg = argInfo.subArg || argInfo.arg;
    if (!options.partial) {
      if (argInfo.event === 'unknown_value') {
        const err = new Error(`Unknown value: ${arg}`);
        err.name = 'UNKNOWN_VALUE';
        err.value = arg;
        throw err
      } else if (argInfo.event === 'unknown_option') {
        const err = new Error(`Unknown option: ${arg}`);
        err.name = 'UNKNOWN_OPTION';
        err.optionName = arg;
        throw err
      }
    }

    let option;
    if (output.has(argInfo.name)) {
      option = output.get(argInfo.name);
    } else {
      option = Option.create(argInfo.def);
      output.set(argInfo.name, option);
    }

    if (argInfo.name === '_unknown') {
      option.set(arg);
    } else {
      option.set(argInfo.value);
    }
  }

  return output.toObject({ skipUnknown: !options.partial, camelCase: options.camelCase })
}

var dist$3 = commandLineArgs;

var dist$2 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  module.exports = factory() ;
}(commonjsGlobal, (function () {
  /**
   * Takes any input and guarantees an array back.
   *
   * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
   * - Converts `undefined` to an empty array.
   * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
   * - Ignores input which is already an array.
   *
   * @module array-back
   * @example
   * > const arrayify = require('array-back')
   *
   * > arrayify(undefined)
   * []
   *
   * > arrayify(null)
   * [ null ]
   *
   * > arrayify(0)
   * [ 0 ]
   *
   * > arrayify([ 1, 2 ])
   * [ 1, 2 ]
   *
   * > arrayify(new Set([ 1, 2 ]))
   * [ 1, 2 ]
   *
   * > function f(){ return arrayify(arguments); }
   * > f(1,2,3)
   * [ 1, 2, 3 ]
   */

  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * @param {*} - The input value to convert to an array
   * @returns {Array}
   * @alias module:array-back
   */
  function arrayify (input) {
    if (Array.isArray(input)) {
      return input
    }

    if (input === undefined) {
      return []
    }

    if (isArrayLike(input) || input instanceof Set) {
      return Array.from(input)
    }

    return [input]
  }

  return arrayify;

})));
}(dist$2));

class Section$2 {
  constructor () {
    this.lines = [];
  }

  add (lines) {
    if (lines) {
      const arrayify = dist$2.exports;
      arrayify(lines).forEach(line => this.lines.push(line));
    } else {
      this.lines.push('');
    }
  }

  toString () {
    const os = require$$0__default["default"];
    return this.lines.join(os.EOL)
  }

  header (text) {
    const chalk = chalk__default["default"];
    if (text) {
      this.add(chalk.underline.bold(text));
      this.add();
    }
  }
}

var section = Section$2;

var deepExtend$1 = {exports: {}};

/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function isSpecificValue(val) {
	return (
		val instanceof Buffer
		|| val instanceof Date
		|| val instanceof RegExp
	) ? true : false;
}

function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		var x = Buffer.alloc
			? Buffer.alloc(val.length)
			: new Buffer(val.length);
		val.copy(x);
		return x;
	} else if (val instanceof Date) {
		return new Date(val.getTime());
	} else if (val instanceof RegExp) {
		return new RegExp(val);
	} else {
		throw new Error('Unexpected situation');
	}
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
	var clone = [];
	arr.forEach(function (item, index) {
		if (typeof item === 'object' && item !== null) {
			if (Array.isArray(item)) {
				clone[index] = deepCloneArray(item);
			} else if (isSpecificValue(item)) {
				clone[index] = cloneSpecificValue(item);
			} else {
				clone[index] = deepExtend({}, item);
			}
		} else {
			clone[index] = item;
		}
	});
	return clone;
}

function safeGetProperty(object, property) {
	return property === '__proto__' ? undefined : object[property];
}

/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
var deepExtend = deepExtend$1.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}

	if (arguments.length < 2) {
		return arguments[0];
	}

	var target = arguments[0];

	// convert arguments to array and cut off target object
	var args = Array.prototype.slice.call(arguments, 1);

	var val, src;

	args.forEach(function (obj) {
		// skip argument if isn't an object, is null, or is an array
		if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
			return;
		}

		Object.keys(obj).forEach(function (key) {
			src = safeGetProperty(target, key); // source value
			val = safeGetProperty(obj, key); // new value

			// recursion prevention
			if (val === target) {
				return;

			/**
			 * if new value isn't object then just overwrite by new value
			 * instead of extending.
			 */
			} else if (typeof val !== 'object' || val === null) {
				target[key] = val;
				return;

			// just clone arrays (and recursive clone objects inside)
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;

			// custom cloning and overwrite for specific objects
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;

			// overwrite by new value if source isn't object or array
			} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;

			// source value and new value is objects both, extending...
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});

	return target;
};

var dist$1 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  module.exports = factory() ;
}(commonjsGlobal, (function () {
  /**
   * Takes any input and guarantees an array back.
   *
   * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
   * - Converts `undefined` to an empty array.
   * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
   * - Ignores input which is already an array.
   *
   * @module array-back
   * @example
   * > const arrayify = require('array-back')
   *
   * > arrayify(undefined)
   * []
   *
   * > arrayify(null)
   * [ null ]
   *
   * > arrayify(0)
   * [ 0 ]
   *
   * > arrayify([ 1, 2 ])
   * [ 1, 2 ]
   *
   * > arrayify(new Set([ 1, 2 ]))
   * [ 1, 2 ]
   *
   * > function f(){ return arrayify(arguments); }
   * > f(1,2,3)
   * [ 1, 2, 3 ]
   */

  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * @param {*} - The input value to convert to an array
   * @returns {Array}
   * @alias module:array-back
   */
  function arrayify (input) {
    if (Array.isArray(input)) {
      return input
    }

    if (input === undefined) {
      return []
    }

    if (isArrayLike(input) || input instanceof Set) {
      return Array.from(input)
    }

    return [input]
  }

  return arrayify;

})));
}(dist$1));

var dist = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  factory(exports) ;
}(commonjsGlobal, function (exports) {
  /**
   * Isomorphic, functional type-checking for Javascript.
   * @module typical
   * @typicalname t
   * @example
   * const t = require('typical')
   * const allDefined = array.every(t.isDefined)
   */

  /**
   * Returns true if input is a number. It is a more reasonable alternative to `typeof n` which returns `number` for `NaN` and `Infinity`.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isNumber(0)
   * true
   * > t.isNumber(1)
   * true
   * > t.isNumber(1.1)
   * true
   * > t.isNumber(0xff)
   * true
   * > t.isNumber(0644)
   * true
   * > t.isNumber(6.2e5)
   * true
   * > t.isNumber(NaN)
   * false
   * > t.isNumber(Infinity)
   * false
   */
  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  /**
   * A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isPlainObject({ something: 'one' })
   * true
   * > t.isPlainObject(new Date())
   * false
   * > t.isPlainObject([ 0, 1 ])
   * false
   * > t.isPlainObject(/test/)
   * false
   * > t.isPlainObject(1)
   * false
   * > t.isPlainObject('one')
   * false
   * > t.isPlainObject(null)
   * false
   * > t.isPlainObject((function * () {})())
   * false
   * > t.isPlainObject(function * () {})
   * false
   */
  function isPlainObject (input) {
    return input !== null && typeof input === 'object' && input.constructor === Object
  }

  /**
   * An array-like value has all the properties of an array yet is not an array instance. An example is the `arguments` object. Returns `true`` if the input value is an object, not `null`` and has a `length` property set with a numeric value.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * function sum(x, y){
   *   console.log(t.isArrayLike(arguments))
   *   // prints `true`
   * }
   */
  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * Returns true if the typeof input is `'object'` but not null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  /**
   * Returns true if the input value is defined.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isDefined (input) {
    return typeof input !== 'undefined'
  }

  /**
   * Returns true if the input value is undefined.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isUndefined (input) {
    return !isDefined(input)
  }

  /**
   * Returns true if the input value is null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isNull (input) {
   return input === null
  }

  /**
   * Returns true if the input value is both defined and not null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isDefinedValue (input) {
   return isDefined(input) && !isNull(input) && !Number.isNaN(input)
  }

  /**
   * Returns true if the input value is an ES2015 `class`.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isClass (input) {
    if (typeof input === 'function') {
      return /^class /.test(Function.prototype.toString.call(input))
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is a string, number, symbol, boolean, null or undefined value.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPrimitive (input) {
    if (input === null) return true
    switch (typeof input) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'undefined':
      case 'boolean':
        return true
      default:
        return false
    }
  }

  /**
   * Returns true if the input is a Promise.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPromise (input) {
    if (input) {
      const isPromise = isDefined(Promise) && input instanceof Promise;
      const isThenable = input.then && typeof input.then === 'function';
      return !!(isPromise || isThenable)
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is an iterable (`Map`, `Set`, `Array`, Generator etc.).
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isIterable('string')
   * true
   * > t.isIterable(new Map())
   * true
   * > t.isIterable([])
   * true
   * > t.isIterable((function * () {})())
   * true
   * > t.isIterable(Promise.resolve())
   * false
   * > t.isIterable(Promise)
   * false
   * > t.isIterable(true)
   * false
   * > t.isIterable({})
   * false
   * > t.isIterable(0)
   * false
   * > t.isIterable(1.1)
   * false
   * > t.isIterable(NaN)
   * false
   * > t.isIterable(Infinity)
   * false
   * > t.isIterable(function () {})
   * false
   * > t.isIterable(Date)
   * false
   * > t.isIterable()
   * false
   * > t.isIterable({ then: function () {} })
   * false
   */
  function isIterable (input) {
    if (input === null || !isDefined(input)) {
      return false
    } else {
      return (
        typeof input[Symbol.iterator] === 'function' ||
        typeof input[Symbol.asyncIterator] === 'function'
      )
    }
  }

  /**
   * Returns true if the input value is a string. The equivalent of `typeof input === 'string'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isString (input) {
    return typeof input === 'string'
  }

  /**
   * Returns true if the input value is a function. The equivalent of `typeof input === 'function'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isFunction (input) {
    return typeof input === 'function'
  }

  var index = {
    isNumber,
    isPlainObject,
    isArrayLike,
    isObject,
    isDefined,
    isUndefined,
    isNull,
    isDefinedValue,
    isClass,
    isPrimitive,
    isPromise,
    isIterable,
    isString,
    isFunction
  };

  exports.default = index;
  exports.isArrayLike = isArrayLike;
  exports.isClass = isClass;
  exports.isDefined = isDefined;
  exports.isDefinedValue = isDefinedValue;
  exports.isFunction = isFunction;
  exports.isIterable = isIterable;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPlainObject = isPlainObject;
  exports.isPrimitive = isPrimitive;
  exports.isPromise = isPromise;
  exports.isString = isString;
  exports.isUndefined = isUndefined;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
}(dist, dist.exports));

const _value = new WeakMap();
const _column = new WeakMap();

class Cell$2 {
  constructor (value, column) {
    this.value = value;
    _column.set(this, column);
  }

  set value (val) {
    _value.set(this, val);
  }

  get value () {
    let cellValue = _value.get(this);
    if (typeof cellValue === 'function') cellValue = cellValue.call(_column.get(this));
    if (cellValue === undefined) {
      cellValue = '';
    } else {
      cellValue = String(cellValue);
    }
    return cellValue
  }
}

var cell = Cell$2;

const arrayify$2 = dist$1.exports;
const Cell$1 = cell;
const t$5 = dist.exports;

/**
 *
 */
class Rows {
  constructor (rows, columns) {
    this.list = [];
    this.load(rows, columns);
  }

  load (rows, columns) {
    arrayify$2(rows).forEach(row => {
      this.list.push(new Map(objectToIterable(row, columns)));
    });
  }

  static removeEmptyColumns (data) {
    const distinctColumnNames = data.reduce((columnNames, row) => {
      Object.keys(row).forEach(key => {
        if (columnNames.indexOf(key) === -1) columnNames.push(key);
      });
      return columnNames
    }, []);

    const emptyColumns = distinctColumnNames.filter(columnName => {
      const hasValue = data.some(row => {
        const value = row[columnName];
        return (t$5.isDefined(value) && typeof value !== 'string') || (typeof value === 'string' && /\S+/.test(value))
      });
      return !hasValue
    });

    return data.map(row => {
      emptyColumns.forEach(emptyCol => delete row[emptyCol]);
      return row
    })
  }
}

function objectToIterable (row, columns) {
  return columns.list.map(column => {
    return [ column, new Cell$1(row[column.name], column) ]
  })
}

/**
 * @module rows
 */
var rows = Rows;

class Padding$1 {
  constructor (padding) {
    this.left = padding.left;
    this.right = padding.right;
  }
  length () {
    return this.left.length + this.right.length
  }
}

/**
@module padding
*/
var padding = Padding$1;

const t$4 = dist.exports;
const Padding = padding;

/**
 * @module column
 */

const _padding = new WeakMap();

// setting any column property which is a factor of the width should trigger autoSize()

/**
 * Represents a table column
 */
class Column$1 {
  constructor (column) {
    /**
     * @type {string}
     */
    if (t$4.isDefined(column.name)) this.name = column.name;
    /**
     * @type {number}
     */
    if (t$4.isDefined(column.width)) this.width = column.width;
    if (t$4.isDefined(column.maxWidth)) this.maxWidth = column.maxWidth;
    if (t$4.isDefined(column.minWidth)) this.minWidth = column.minWidth;
    if (t$4.isDefined(column.noWrap)) this.noWrap = column.noWrap;
    if (t$4.isDefined(column.break)) this.break = column.break;
    if (t$4.isDefined(column.contentWrappable)) this.contentWrappable = column.contentWrappable;
    if (t$4.isDefined(column.contentWidth)) this.contentWidth = column.contentWidth;
    if (t$4.isDefined(column.minContentWidth)) this.minContentWidth = column.minContentWidth;
    this.padding = column.padding || { left: ' ', right: ' ' };
    this.generatedWidth = null;
  }

  set padding (padding) {
    _padding.set(this, new Padding(padding));
  }
  get padding () {
    return _padding.get(this)
  }

  /**
   * the width of the content (excluding padding) after being wrapped
   */
  get wrappedContentWidth () {
    return Math.max(this.generatedWidth - this.padding.length(), 0)
  }

  isResizable () {
    return !this.isFixed()
  }

  isFixed () {
    return t$4.isDefined(this.width) || this.noWrap || !this.contentWrappable
  }

  generateWidth () {
    this.generatedWidth = this.width || (this.contentWidth + this.padding.length());
  }

  generateMinWidth () {
    this.minWidth = this.minContentWidth + this.padding.length();
  }
}

var column = Column$1;

/**
 * Flatten an array into the supplied array.
 *
 * @module reduce-flatten
 * @example
 * const flatten = require('reduce-flatten')
 */

var reduceFlatten = flatten;

/**
 * @alias module:reduce-flatten
 * @example
 * > numbers = [ 1, 2, [ 3, 4 ], 5 ]
 * > numbers.reduce(flatten, [])
 * [ 1, 2, 3, 4, 5 ]
 */
function flatten (prev, curr) {
  return prev.concat(curr)
}

const os$1 = require$$0__default["default"];
const t$3 = dist.exports;

/**
 * @module wordwrapjs
 */

const re = {
  chunk: /[^\s-]+?-\b|\S+|\s+|\r\n?|\n/g,
  ansiEscapeSequence: /\u001b.*?m/g
};

/**
 * @alias module:wordwrapjs
 * @typicalname wordwrap
 */
class WordWrap {
  constructor (text, options) {
    options = options || {};
    if (!t$3.isDefined(text)) text = '';

    this._lines = String(text).split(/\r\n|\n/g);
    this.options = options;
    this.options.width = options.width === undefined ? 30 : options.width;
  }

  lines () {
    const flatten = reduceFlatten;

    /* trim each line of the supplied text */
    return this._lines.map(trimLine.bind(this))

      /* split each line into an array of chunks, else mark it empty */
      .map(line => line.match(re.chunk) || [ '~~empty~~' ])

      /* optionally, break each word on the line into pieces */
      .map(lineWords => {
        if (this.options.break) {
          return lineWords.map(breakWord.bind(this))
        } else {
          return lineWords
        }
      })
      .map(lineWords => lineWords.reduce(flatten, []))

      /* transforming the line of words to one or more new lines wrapped to size */
      .map(lineWords => {
        return lineWords
          .reduce((lines, word) => {
            let currentLine = lines[lines.length - 1];
            if (replaceAnsi(word).length + replaceAnsi(currentLine).length > this.options.width) {
              lines.push(word);
            } else {
              lines[lines.length - 1] += word;
            }
            return lines
          }, [ '' ])
      })
      .reduce(flatten, [])

      /* trim the wrapped lines */
      .map(trimLine.bind(this))

      /* filter out empty lines */
      .filter(line => line.trim())

      /* restore the user's original empty lines */
      .map(line => line.replace('~~empty~~', ''))
  }

  wrap () {
    return this.lines().join(os$1.EOL)
  }

  toString () {
    return this.wrap()
  }

  /**
   * @param {string} - the input text to wrap
   * @param [options] {object} - optional configuration
   * @param [options.width] {number} - the max column width in characters (defaults to 30).
   * @param [options.break] {boolean} - if true, words exceeding the specified `width` will be forcefully broken
   * @param [options.noTrim] {boolean} - By default, each line output is trimmed. If `noTrim` is set, no line-trimming occurs - all whitespace from the input text is left in.
   * @return {string}
   */
  static wrap (text, options) {
    const block = new this(text, options);
    return block.wrap()
  }

  /**
   * Wraps the input text, returning an array of strings (lines).
   * @param {string} - input text
   * @param {object} - Accepts same options as constructor.
   */
  static lines (text, options) {
    const block = new this(text, options);
    return block.lines()
  }

  /**
   * Returns true if the input text would be wrapped if passed into `.wrap()`.
   * @param {string} - input text
   * @return {boolean}
   */
  static isWrappable (text) {
    if (t$3.isDefined(text)) {
      text = String(text);
      var matches = text.match(re.chunk);
      return matches ? matches.length > 1 : false
    }
  }

  /**
   * Splits the input text into an array of words and whitespace.
   * @param {string} - input text
   * @returns {string[]}
   */
  static getChunks (text) {
    return text.match(re.chunk) || []
  }
}

function trimLine (line) {
  return this.options.noTrim ? line : line.trim()
}

function replaceAnsi (string) {
  return string.replace(re.ansiEscapeSequence, '')
}

/* break a word into several pieces */
function breakWord (word) {
  if (replaceAnsi(word).length > this.options.width) {
    const letters = word.split('');
    let piece;
    const pieces = [];
    while ((piece = letters.splice(0, this.options.width)).length) {
      pieces.push(piece.join(''));
    }
    return pieces
  } else {
    return word
  }
}

var wordwrapjs = WordWrap;

var ansi$1 = {};

const ansiEscapeSequence = /\u001b.*?m/g;

/**
 * @module ansi
 */
ansi$1.remove = remove;
ansi$1.has = has;

function remove (input) {
  return input.replace(ansiEscapeSequence, '')
}

function has (input) {
  return ansiEscapeSequence.test(input)
}

const t$2 = dist.exports;
const arrayify$1 = dist$1.exports;
const Column = column;
const wrap = wordwrapjs;
const Cell = cell;
const ansi = ansi$1;

const _maxWidth = new WeakMap();

/**
 * @module columns
 */

class Columns {
  constructor (columns) {
    this.list = [];
    arrayify$1(columns).forEach(this.add.bind(this));
  }

  /**
   * sum of all generatedWidth fields
   * @return {number}
   */
  totalWidth () {
    return this.list.length
      ? this.list.map(col => col.generatedWidth).reduce((a, b) => a + b)
      : 0
  }

  totalFixedWidth () {
    return this.getFixed()
      .map(col => col.generatedWidth)
      .reduce((a, b) => a + b, 0)
  }

  get (columnName) {
    return this.list.find(column => column.name === columnName)
  }

  getResizable () {
    return this.list.filter(column => column.isResizable())
  }

  getFixed () {
    return this.list.filter(column => column.isFixed())
  }

  add (column) {
    const col = column instanceof Column ? column : new Column(column);
    this.list.push(col);
    return col
  }

  set maxWidth (val) {
    _maxWidth.set(this, val);
  }

  /**
   * sets `generatedWidth` for each column
   * @chainable
   */
  autoSize () {
    const maxWidth = _maxWidth.get(this);

    /* size */
    this.list.forEach(column => {
      column.generateWidth();
      column.generateMinWidth();
    });

    /* adjust if user set a min or maxWidth */
    this.list.forEach(column => {
      if (t$2.isDefined(column.maxWidth) && column.generatedWidth > column.maxWidth) {
        column.generatedWidth = column.maxWidth;
      }

      if (t$2.isDefined(column.minWidth) && column.generatedWidth < column.minWidth) {
        column.generatedWidth = column.minWidth;
      }
    });

    const width = {
      total: this.totalWidth(),
      view: maxWidth,
      diff: this.totalWidth() - maxWidth,
      totalFixed: this.totalFixedWidth(),
      totalResizable: Math.max(maxWidth - this.totalFixedWidth(), 0)
    };

    /* adjust if short of space */
    if (width.diff > 0) {
      /* share the available space between resizeable columns */
      let resizableColumns = this.getResizable();
      resizableColumns.forEach(column => {
        column.generatedWidth = Math.floor(width.totalResizable / resizableColumns.length);
      });

      /* at this point, the generatedWidth should never end up bigger than the contentWidth */
      const grownColumns = this.list.filter(column => column.generatedWidth > column.contentWidth);
      const shrunkenColumns = this.list.filter(column => column.generatedWidth < column.contentWidth);
      let salvagedSpace = 0;
      grownColumns.forEach(column => {
        const currentGeneratedWidth = column.generatedWidth;
        column.generateWidth();
        salvagedSpace += currentGeneratedWidth - column.generatedWidth;
      });
      shrunkenColumns.forEach(column => {
        column.generatedWidth += Math.floor(salvagedSpace / shrunkenColumns.length);
      });

    /* if, after autosizing, we still don't fit within maxWidth then give up */
    }

    return this
  }

  /**
   * Factory method returning all distinct columns from input
   * @param  {object[]} - input recordset
   * @return {module:columns}
   */
  static getColumns (rows) {
    var columns = new Columns();
    arrayify$1(rows).forEach(row => {
      for (let columnName in row) {
        let column = columns.get(columnName);
        if (!column) {
          column = columns.add({ name: columnName, contentWidth: 0, minContentWidth: 0 });
        }
        let cell = new Cell(row[columnName], column);
        let cellValue = cell.value;
        if (ansi.has(cellValue)) {
          cellValue = ansi.remove(cellValue);
        }

        if (cellValue.length > column.contentWidth) column.contentWidth = cellValue.length;

        let longestWord = getLongestWord(cellValue);
        if (longestWord > column.minContentWidth) {
          column.minContentWidth = longestWord;
        }
        if (!column.contentWrappable) column.contentWrappable = wrap.isWrappable(cellValue);
      }
    });
    return columns
  }
}

function getLongestWord (line) {
  const words = wrap.getChunks(line);
  return words.reduce((max, word) => {
    return Math.max(word.length, max)
  }, 0)
}

var columns = Columns;

const os = require$$0__default["default"];

/**
 * @module table-layout
 */

/**
 * Recordset data in (array of objects), text table out.
 * @alias module:table-layout
 * @example
 * > Table = require('table-layout')
 * > jsonData = [{
 *   col1: 'Some text you wish to read in table layout',
 *   col2: 'And some more text in column two. '
 * }]
 * > table = new Table(jsonData, { maxWidth: 30 })
 * > console.log(table.toString())
 *  Some text you  And some more
 *  wish to read   text in
 *  in table      column two.
 *  layout
 */
class Table$2 {
  /**
   * @param {object[]} - input data
   * @param [options] {object} - optional settings
   * @param [options.maxWidth] {number} - maximum width of layout
   * @param [options.noWrap] {boolean} - disable wrapping on all columns
   * @param [options.noTrim] {boolean} - disable line-trimming
   * @param [options.break] {boolean} - enable word-breaking on all columns
   * @param [options.columns] {module:table-layout~columnOption} - array of column-specific options
   * @param [options.ignoreEmptyColumns] {boolean} - if set, empty columns or columns containing only whitespace are not rendered.
   * @param [options.padding] {object} - Padding values to set on each column. Per-column overrides can be set in the `options.columns` array.
   * @param [options.padding.left] {string} - Defaults to a single space.
   * @param [options.padding.right] {string} - Defaults to a single space.
   * @alias module:table-layout
   */
  constructor (data, options) {
    let ttyWidth = (process && (process.stdout.columns || process.stderr.columns)) || 0;

    /* Windows quirk workaround  */
    if (ttyWidth && os.platform() === 'win32') ttyWidth--;

    let defaults = {
      padding: {
        left: ' ',
        right: ' '
      },
      maxWidth: ttyWidth || 80,
      columns: []
    };

    const extend = deepExtend$1.exports;
    this.options = extend(defaults, options);
    this.load(data);
  }

  load (data) {
    const Rows = rows;
    const Columns = columns;

    let options = this.options;

    /* remove empty columns */
    if (options.ignoreEmptyColumns) {
      data = Rows.removeEmptyColumns(data);
    }

    this.columns = Columns.getColumns(data);
    this.rows = new Rows(data, this.columns);

    /* load default column properties from options */
    this.columns.maxWidth = options.maxWidth;
    this.columns.list.forEach(column => {
      if (options.padding) column.padding = options.padding;
      if (options.noWrap) column.noWrap = options.noWrap;
      if (options.break) {
        column.break = options.break;
        column.contentWrappable = true;
      }
    });

    /* load column properties from options.columns */
    options.columns.forEach(optionColumn => {
      let column = this.columns.get(optionColumn.name);
      if (column) {
        if (optionColumn.padding) {
          column.padding.left = optionColumn.padding.left;
          column.padding.right = optionColumn.padding.right;
        }
        if (optionColumn.width) column.width = optionColumn.width;
        if (optionColumn.maxWidth) column.maxWidth = optionColumn.maxWidth;
        if (optionColumn.minWidth) column.minWidth = optionColumn.minWidth;
        if (optionColumn.noWrap) column.noWrap = optionColumn.noWrap;
        if (optionColumn.break) {
          column.break = optionColumn.break;
          column.contentWrappable = true;
        }
      }
    });

    this.columns.autoSize();
    return this
  }

  getWrapped () {
    const wrap = wordwrapjs;

    this.columns.autoSize();
    return this.rows.list.map(row => {
      let line = [];
      row.forEach((cell, column) => {
        if (column.noWrap) {
          line.push(cell.value.split(/\r\n?|\n/));
        } else {
          line.push(wrap.lines(cell.value, {
            width: column.wrappedContentWidth,
            break: column.break,
            noTrim: this.options.noTrim
          }));
        }
      });
      return line
    })
  }

  getLines () {
    var wrappedLines = this.getWrapped();
    var lines = [];
    wrappedLines.forEach(wrapped => {
      let mostLines = getLongestArray(wrapped);
      for (let i = 0; i < mostLines; i++) {
        let line = [];
        wrapped.forEach(cell => {
          line.push(cell[i] || '');
        });
        lines.push(line);
      }
    });
    return lines
  }

  /**
   * Identical to `.toString()` with the exception that the result will be an array of lines, rather than a single, multi-line string.
   * @returns {string[]}
   */
  renderLines () {
    var lines = this.getLines();
    return lines.map(line => {
      return line.reduce((prev, cell, index) => {
        let column = this.columns.list[index];
        return prev + padCell(cell, column.padding, column.generatedWidth)
      }, '')
    })
  }

  /**
   * Returns the input data as a text table.
   * @returns {string}
   */
  toString () {
    return this.renderLines().join(os.EOL) + os.EOL
  }
}

/**
 * Array of arrays in.. Returns the length of the longest one
 * @returns {number}
 * @private
 */
function getLongestArray (arrays) {
  var lengths = arrays.map(array => array.length);
  return Math.max.apply(null, lengths)
}

function padCell (cellValue, padding, width) {
  const ansi = ansi$1;
  var ansiLength = cellValue.length - ansi.remove(cellValue).length;
  cellValue = cellValue || '';
  return (padding.left || '') +
  cellValue.padEnd(width - padding.length() + ansiLength) + (padding.right || '')
}

/**
 * @typedef module:table-layout~columnOption
 * @property name {string} - column name, must match a property name in the input
 * @property [width] {number} - A specific column width. Supply either this or a min and/or max width.
 * @property [minWidth] {number} - column min width
 * @property [maxWidth] {number} - column max width
 * @property [nowrap] {boolean} - disable wrapping for this column
 * @property [break] {boolean} - enable word-breaking for this columns
 * @property [padding] {object} - padding options
 * @property [padding.left] {string} - a string to pad the left of each cell (default: `' '`)
 * @property [padding.right] {string} - a string to pad the right of each cell (default: `' '`)
 */

var tableLayout = Table$2;

function chalkFormat$1 (str) {
  if (str) {
    str = str.replace(/`/g, '\\`');
    const chalk = chalk__default["default"];
    return chalk(Object.assign([], { raw: [str] }))
  } else {
    return ''
  }
}

var chalkFormat_1 = chalkFormat$1;

const Section$1 = section;
const Table$1 = tableLayout;
const chalk = chalkFormat_1;
const t$1 = dist.exports;
const arrayify = dist$2.exports;

class OptionList extends Section$1 {
  constructor (data) {
    super();
    let definitions = arrayify(data.optionList);
    const hide = arrayify(data.hide);
    const groups = arrayify(data.group);

    /* filter out hidden definitions */
    if (hide.length) {
      definitions = definitions.filter(definition => {
        return hide.indexOf(definition.name) === -1
      });
    }

    if (data.header) this.header(data.header);

    if (groups.length) {
      definitions = definitions.filter(def => {
        const noGroupMatch = groups.indexOf('_none') > -1 && !t$1.isDefined(def.group);
        const groupMatch = intersect(arrayify(def.group), groups);
        if (noGroupMatch || groupMatch) return def
      });
    }

    const rows = definitions.map(def => {
      return {
        option: getOptionNames(def, data.reverseNameOrder),
        description: chalk(def.description)
      }
    });

    const tableOptions = data.tableOptions || {
      padding: { left: '  ', right: ' ' },
      columns: [
        { name: 'option', noWrap: true },
        { name: 'description', maxWidth: 80 }
      ]
    };
    const table = new Table$1(rows, tableOptions);
    this.add(table.renderLines());

    this.add();
  }
}

function getOptionNames (definition, reverseNameOrder) {
  let type = definition.type ? definition.type.name.toLowerCase() : 'string';
  const multiple = (definition.multiple || definition.lazyMultiple) ? '[]' : '';
  if (type) {
    type = type === 'boolean' ? '' : `{underline ${type}${multiple}}`;
  }
  type = chalk(definition.typeLabel || type);

  let result = '';
  if (definition.alias) {
    if (definition.name) {
      if (reverseNameOrder) {
        result = chalk(`{bold --${definition.name}}, {bold -${definition.alias}} ${type}`);
      } else {
        result = chalk(`{bold -${definition.alias}}, {bold --${definition.name}} ${type}`);
      }
    } else {
      if (reverseNameOrder) {
        result = chalk(`{bold -${definition.alias}} ${type}`);
      } else {
        result = chalk(`{bold -${definition.alias}} ${type}`);
      }
    }
  } else {
    result = chalk(`{bold --${definition.name}} ${type}`);
  }
  return result
}

function intersect (arr1, arr2) {
  return arr1.some(function (item1) {
    return arr2.some(function (item2) {
      return item1 === item2
    })
  })
}

var optionList = OptionList;

const Section = section;
const t = dist.exports;
const Table = tableLayout;
const chalkFormat = chalkFormat_1;

class ContentSection extends Section {
  constructor (section) {
    super();
    this.header(section.header);

    if (section.content) {
      /* add content without indentation or wrapping */
      if (section.raw) {
        const arrayify = dist$2.exports;
        const content = arrayify(section.content).map(line => chalkFormat(line));
        this.add(content);
      } else {
        this.add(getContentLines(section.content));
      }

      this.add();
    }
  }
}

function getContentLines (content) {
  const defaultPadding = { left: '  ', right: ' ' };

  if (content) {
    /* string content */
    if (t.isString(content)) {
      const table = new Table({ column: chalkFormat(content) }, {
        padding: defaultPadding,
        maxWidth: 80
      });
      return table.renderLines()

    /* array of strings */
    } else if (Array.isArray(content) && content.every(t.isString)) {
      const rows = content.map(string => ({ column: chalkFormat(string) }));
      const table = new Table(rows, {
        padding: defaultPadding,
        maxWidth: 80
      });
      return table.renderLines()

    /* array of objects (use table-layout) */
    } else if (Array.isArray(content) && content.every(t.isPlainObject)) {
      const table = new Table(content.map(row => ansiFormatRow(row)), {
        padding: defaultPadding
      });
      return table.renderLines()

    /* { options: object, data: object[] } */
    } else if (t.isPlainObject(content)) {
      if (!content.options || !content.data) {
        throw new Error('must have an "options" or "data" property\n' + JSON.stringify(content))
      }
      const options = Object.assign(
        { padding: defaultPadding },
        content.options
      );

      /* convert nowrap to noWrap to avoid breaking compatibility */
      if (options.columns) {
        options.columns = options.columns.map(column => {
          if (column.nowrap) {
            column.noWrap = column.nowrap;
            delete column.nowrap;
          }
          return column
        });
      }

      const table = new Table(
        content.data.map(row => ansiFormatRow(row)),
        options
      );
      return table.renderLines()
    } else {
      const message = `invalid input - 'content' must be a string, array of strings, or array of plain objects:\n\n${JSON.stringify(content)}`;
      throw new Error(message)
    }
  }
}

function ansiFormatRow (row) {
  for (const key in row) {
    row[key] = chalkFormat(row[key]);
  }
  return row
}

var content = ContentSection;

/**
 * @module command-line-usage
 */

/**
 * Generates a usage guide suitable for a command-line app.
 * @param {Section|Section[]} - One or more section objects ({@link module:command-line-usage~content} or {@link module:command-line-usage~optionList}).
 * @returns {string}
 * @alias module:command-line-usage
 */
function commandLineUsage (sections) {
  const arrayify = dist$2.exports;
  sections = arrayify(sections);
  if (sections.length) {
    const OptionList = optionList;
    const ContentSection = content;
    const output = sections.map(section => {
      if (section.optionList) {
        return new OptionList(section)
      } else {
        return new ContentSection(section)
      }
    });
    return '\n' + output.join('\n')
  } else {
    return ''
  }
}

var commandLineUsage_1 = commandLineUsage;

function checkOrFixOptions(options) {
    if (!fs.existsSync(options.input)) {
        throw new Error("The input folder is not exist!");
    }
    if (!fs.existsSync(options.output)) {
        fs.mkdirSync(options.output);
    }
    options.target = options.target.replace(/\\$/, "");
    options.updateJsonName = options.updateJsonName.replace(/\.json$/, "").replace(/.\\\//ig, "");
}
function showDoc() {
    var sections = [
        {
            header: "Electron Updater Node Cli",
            content: "默认读取package.json中的version参数，并生成gzip包。"
        },
        {
            header: "Options",
            optionList: [
                {
                    name: "pack",
                    description: "运行pack功能",
                    type: String,
                    alias: "p"
                },
                {
                    name: "help",
                    description: "使用帮助",
                    typeLabel: "{underline help}",
                    alias: "h",
                    type: Boolean
                },
                {
                    name: "output",
                    typeLabel: "{underline directory}",
                    description: "pack后输出的base文件夹路径 (默认: ./build)",
                    type: String,
                    alias: "o"
                },
                {
                    name: "target",
                    typeLabel: "{underline directory}",
                    description: "pack后输出的gzip文件夹路径 (默认: ./build/gzip)",
                    type: String,
                    alias: "t"
                },
                {
                    name: "input",
                    typeLabel: "{underline directory}",
                    description: "pack未压缩的文件夹路径 (默认: ./build/win-unpacked)",
                    type: String,
                    alias: "i"
                },
                {
                    name: "updateJsonName",
                    typeLabel: "{underline string}",
                    description: "更新的json名称 (默认: update-config)",
                    type: String,
                    alias: "u"
                },
                {
                    name: "config",
                    typeLabel: "{underline file}",
                    description: "配置文件路径 (默认: package.json) 读取配置文件中的version及electronUpdaterConfig属性内容",
                    type: String,
                    alias: "c"
                }
            ]
        }
    ];
    console.log(commandLineUsage_1(sections));
}
// pack文件夹下的文件
function startPack(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _options, config, pkg, hash, targetPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _options = __assign({}, options);
                    console.log(chalk__default["default"].green.bold("\n  开始读取配置"));
                    try {
                        if (_options.config) {
                            config = require(path.join(process.cwd(), _options.config));
                            _options = __assign(__assign({}, _options), config);
                        }
                        else {
                            pkg = require(path.join(process.cwd(), "package.json"));
                            _options = __assign(__assign(__assign({}, _options), pkg.electronUpdaterConfig), { version: pkg.version });
                        }
                    }
                    catch (error) {
                        console.log(chalk__default["default"].red.bold("\n 读取配置失败"));
                    }
                    checkOrFixOptions(_options);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log(chalk__default["default"].green.bold("\n  获取文件夹的hash内容"));
                    hash = ve(_options.input);
                    targetPath = path.join(_options.output, _options.target + _options.version);
                    if (!fs.existsSync(targetPath)) {
                        fs.mkdirSync(targetPath);
                    }
                    console.log(chalk__default["default"].green.bold("\n  Gzip压缩文件"));
                    return [4 /*yield*/, Pe(hash, _options.input, targetPath, true)];
                case 2:
                    _a.sent();
                    console.log(chalk__default["default"].green.bold("\n  生成更新配置-json"));
                    fs.writeFileSync(path.join(_options.output, _options.updateJsonName + ".json"), JSON.stringify({
                        version: _options.version,
                        targetPath: _options.target + _options.version,
                        hash: hash
                    }, null, 2));
                    console.log("\n" + chalk__default["default"].bgGreen.white(" 完成 ") + "  " + "The resource file is packaged!\n");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("\n" +
                        chalk__default["default"].bgRed.white(" ERROR ") +
                        "  " +
                        chalk__default["default"].red(error_1.message || error_1) +
                        "\n");
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var optionDefinitions, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    optionDefinitions = [
                        { name: "pack", alias: "p", type: Boolean, defaultValue: false },
                        { name: "help", alias: "h", type: Boolean, defaultValue: true },
                        { name: "output", alias: "o", type: String, defaultValue: "./build" },
                        { name: "target", alias: "t", type: String, defaultValue: "gzip" },
                        { name: "input", alias: "i", type: String, defaultValue: "./build/win-unpacked" },
                        { name: "updateJsonName", alias: "u", type: String, defaultValue: "update-config" },
                        { name: "config", alias: "c", type: String },
                        { name: "get", alias: "g", type: Boolean, defaultValue: false },
                        { name: "arch", alias: "a", type: String, defaultValue: "x64" }
                    ];
                    options = dist$3(optionDefinitions);
                    if (!options.pack) return [3 /*break*/, 2];
                    return [4 /*yield*/, startPack(options)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    showDoc();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
start();
