import{a as E,b as W}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RAPBUJGJ.js";import{a as C}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var s,l,F,v,I,y,A,D,m,M,h,_,k,B,f,L,g,S,z,x,H,d,G,b,R,J,N,w,O,Q,P,T,q,j=C(()=>{"use strict";I=-1,y=function(t){addEventListener("pageshow",function(e){e.persisted&&(I=e.timeStamp,t(e))},!0)},A=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},D=function(){var t=A();return t&&t.activationStart||0},m=function(t,e){var n=A(),a="navigate";return I>=0?a="back-forward-cache":n&&(document.prerendering||D()>0?a="prerender":document.wasDiscarded?a="restore":n.type&&(a=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:a}},M=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var a=new PerformanceObserver(function(r){Promise.resolve().then(function(){e(r.getEntries())})});return a.observe(Object.assign({type:t,buffered:!0},n||{})),a}}catch{}},h=function(t,e,n,a){var r,o;return function(c){e.value>=0&&(c||a)&&((o=e.value-(r||0))||r===void 0)&&(r=e.value,e.delta=o,e.rating=function(u,i){return u>i[1]?"poor":u>i[0]?"needs-improvement":"good"}(e.value,n),t(e))}},_=function(t){requestAnimationFrame(function(){return requestAnimationFrame(function(){return t()})})},k=function(t){var e=function(n){n.type!=="pagehide"&&document.visibilityState!=="hidden"||t(n)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},B=function(t){var e=!1;return function(n){e||(t(n),e=!0)}},f=-1,L=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},g=function(t){document.visibilityState==="hidden"&&f>-1&&(f=t.type==="visibilitychange"?t.timeStamp:0,z())},S=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},z=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},x=function(){return f<0&&(f=L(),S(),y(function(){setTimeout(function(){f=L(),S()},0)})),{get firstHiddenTime(){return f}}},H=function(t){document.prerendering?addEventListener("prerenderingchange",function(){return t()},!0):t()},d={passive:!0,capture:!0},G=new Date,b=function(t,e){s||(s=e,l=t,F=new Date,N(removeEventListener),R())},R=function(){if(l>=0&&l<F-G){var t={entryType:"first-input",name:s.type,target:s.target,cancelable:s.cancelable,startTime:s.timeStamp,processingStart:s.timeStamp+l};v.forEach(function(e){e(t)}),v=[]}},J=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;t.type=="pointerdown"?function(n,a){var r=function(){b(n,a),c()},o=function(){c()},c=function(){removeEventListener("pointerup",r,d),removeEventListener("pointercancel",o,d)};addEventListener("pointerup",r,d),addEventListener("pointercancel",o,d)}(e,t):b(e,t)}},N=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach(function(e){return t(e,J,d)})},w=[100,300],O=function(t,e){e=e||{},H(function(){var n,a=x(),r=m("FID"),o=function(i){i.startTime<a.firstHiddenTime&&(r.value=i.processingStart-i.startTime,r.entries.push(i),n(!0))},c=function(i){i.forEach(o)},u=M("first-input",c);n=h(t,r,w,e.reportAllChanges),u&&k(B(function(){c(u.takeRecords()),u.disconnect()})),u&&y(function(){var i;r=m("FID"),n=h(t,r,w,e.reportAllChanges),v=[],l=-1,s=null,N(addEventListener),i=o,v.push(i),R()})})},Q=1/0,P=[2500,4e3],T={},q=function(t,e){e=e||{},H(function(){var n,a=x(),r=m("LCP"),o=function(i){var p=i[i.length-1];p&&p.startTime<a.firstHiddenTime&&(r.value=Math.max(p.startTime-D(),0),r.entries=[p],n())},c=M("largest-contentful-paint",o);if(c){n=h(t,r,P,e.reportAllChanges);var u=B(function(){T[r.id]||(o(c.takeRecords()),c.disconnect(),T[r.id]=!0,n(!0))});["keydown","click"].forEach(function(i){addEventListener(i,u,!0)}),k(u),y(function(i){r=m("LCP"),n=h(t,r,P,e.reportAllChanges),_(function(){r.value=performance.now()-i.timeStamp,T[r.id]=!0,n(!0)})})}})}});var V,$,K=C(()=>{j();W();V=({name:t,delta:e,id:n})=>{let a={name:t,id:n,delta:Math.round(t==="CLS"?e*1e3:e)};E.sendBeacon("/api/analytics/vitals",a)},$=()=>{O(V),q(V)}});export{$ as a,K as b};