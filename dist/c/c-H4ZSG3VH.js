import{a as E,c as T}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-HWQWJZMW.js";import{a as v,b,d as M}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-EEMRR3F6.js";import{a as p,g as f,h as F}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-PQ3IAYNH.js";import{B as d,C as l,E as c}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-OM2EU7QX.js";import{a as P}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{a as u,c as D}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RFIBFC7T.js";import{a as g,d as x}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";function s(e){return`rm__${e}`}function N(e,t,r=[],n){let a=v(i=>{t(i.detail)},[t]),o=n!==void 0?n:typeof window>"u"?null:window.document;b(()=>{let i=s(e);if(o)return o.addEventListener(i,a),()=>{o.removeEventListener(i,a)}},[e,a,o,r])}function Q(e,t){let r=s(e),n=new CustomEvent(r,{detail:t});return document.dispatchEvent(n),n}var C=g(()=>{"use strict";M()});function y(){if(u())return{isRenderedOnClient:!1};let[e,t]=w();return(0,S.useEffect)(()=>{e||t(!0)},[]),{isRenderedOnClient:e}}var S,w,R=g(()=>{"use strict";S=x(P());D();T();({useStore:w}=E("Client render",!1))});function q({visiblyBy:e,children:t}){let r=f(m),{isRenderedOnClient:n}=y();return n&&typeof r.settings[e]=="boolean"&&r.settings[e]?l(d,{children:t}):null}var h,m,A,G,I=g(()=>{"use strict";F();C();R();c();h={highlightWidgets:!1,animationType:"bezier",scrollWheelSpeed:.9,scrollTouchSpeed:1},m=p({settings:h});A=()=>{document.addEventListener(s("devSettingsChange"),e=>{let t=e.detail;m.settings=t||h})},G=()=>m.settings});export{N as a,Q as b,C as c,y as d,R as e,q as f,A as g,G as h,I as i};