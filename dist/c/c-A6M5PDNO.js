import{a as x,b as B}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-XWPXC4S6.js";import{g as b,i as v}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-WFJGLKPD.js";import{C as f,E as u}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-RNSK6ETS.js";import{a as E}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-GELLX33M.js";import{b as D}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-BCAHMXGO.js";import{a as s,c}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-S4PMN2LF.js";import{a as p,d as R}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-AUVFGGVF.js";function A(e){l.push(e)===1&&requestAnimationFrame(M)}var l,m,M,W,w=p(()=>{"use strict";l=[],m=new MessageChannel,M=function(){this.postMessage(void 0)}.bind(m.port2);m.port1.onmessage=function(){var e=l;l=[];for(var o=performance.now(),r=0;r<e.length;r++)e[r](o)},m=null;W=A});function d(){return!s()&&O in window}function j(){d()&&(window.DEBUG||(window.DEBUG={}),h(),b())}function S(){if(d())return window.DEBUG||j(),window.DEBUG}var O,T=p(()=>{"use strict";c();P();v();O="____READYMAG_DEBUG_MODE_ENABLED"});function F(e,o){return e===o?e:`${e}:${o}`}function C({category:e="none",id:o,startTime:r,actualDuration:t,phase:a,args:n={}}){x(()=>{let y=F(e,o);g.push({name:y,cat:e,ph:"X",ts:r*1e3,dur:t*1e3,pid:1,tid:1,args:{...n,phase:a}}),console.debug(`\x1B[1m[${y}]\x1B[0m ${t.toFixed(3)}ms \x1B[3m(${a})\x1B[0m`)})}function h(){let e=S();e&&(e.profiler=L)}function Q(e){return f(k.Profiler,{id:e.id,onRender:(o,r,t,a,n)=>C({id:o,phase:r,actualDuration:t,startTime:n,category:e.category,args:e.args}),children:e.children})}function Z(e,o,r){let t=s()||!d()?0:performance.now();return{stopProfile(){s()||!d()||W(()=>{let n=performance.now()-t;C({id:o,phase:"call",category:e,startTime:t,actualDuration:n,args:r})})}}}var k,g,L,P=p(()=>{"use strict";k=R(E());w();c();T();B();u();g=[];L={download(){let e=JSON.stringify(g),o=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(o),t=document.createElement("a");t.href=r,t.download=`readymag-profile-${Date.now()}.json`,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)},get(){return g},reset(){g=[]}}});var _,G=p(()=>{"use strict";_=(i=>(i.URL="URL",i.Page="Page",i.Email="Email",i.Phone="Phone",i.Anchor="Anchor",i.ScrollToTop="ScrollToTop",i.GoBack="GoBack",i))(_||{})});var pe,se,de,ae,ge,le,me,ye,ce,N=p(()=>{"use strict";D();pe=e=>e.type==="slideshow",se=e=>e.type==="hotspot",de=e=>e.type==="text",ae=e=>e.type==="background",ge=e=>e.type==="shape",le=e=>e.type==="iframe",me=e=>e.type==="button",ye=e=>e.type==="rmheader",ce=e=>e.type==="rmfooter"});export{Q as a,Z as b,P as c,d,j as e,S as f,T as g,_ as h,G as i,pe as j,se as k,de as l,ae as m,ge as n,le as o,me as p,ye as q,ce as r,N as s};
