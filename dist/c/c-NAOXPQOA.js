import{a as w,b as S}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-UCHF6G32.js";import{e as l,m,o as h,t as x}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-QMLK2R63.js";import{a as p,b as y}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-DLSH5BZK.js";import{c as u,o as v}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-3SL2HRH4.js";import{b}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-BCAHMXGO.js";import{a as W}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-AUVFGGVF.js";function P({widget:t,width:i,height:o}){let c=w.getLambdaUrl(t.picture,{width:i,height:o,cropH:t.cropH,cropW:t.cropW,cropX:t.cropX,cropY:t.cropY}),e=t.element.querySelector("img");return{previewImgSrc:e&&(e.currentSrc||e.src)||c,imgSrc:c}}function $(t){let i=[];for(let e of t)if(L(e))if(e.lightbox)i.push({...e,element:e.$el.get(0)});else{let g=E(e.preview_enabled,e.preview_overlay_color);i.push({...e,...g,element:e.$el.get(0)})}if(!i.length)return[];let o=[],c=u(i);for(let e of c){let g=e.h/e.w,r=window.innerHeight,d=window.innerWidth,n=r/g,s=n*g;n>d&&(n=d,s=n*g);let{imgSrc:f,previewImgSrc:a}=P({widget:e,width:n,height:s});o.push({_id:e._id,color:e.lightbox?.color||"",gallery:e.lightbox?.gallery||!1,height:s,width:n,imgSrc:f,previewImgSrc:a})}return o}function B(t){let i=p.isOn(t.viewport,t.viewportWidth,t.viewerOptions)&&p.isCSSZoom()?p.getRatio(t.viewportWidth):1,{top:o,left:c,height:e,width:g}=t.widgetElement.getBoundingClientRect(),r={top:o,left:c,height:e,width:g};if(Modernizr.safari){let n=window.scrollY;r.top=r.top+(n-n/i)}return{top:Number(r.top+r.height*.5)*i,left:Number(r.left+r.width*.5)*i,height:r.height*i,width:r.width*i}}function E(t,i){if(typeof t<"u"||typeof i<"u"){let o=i?l(h(i))||"":"000000",c=o&&i&&h(i).a||.6;return{preview_enabled:void 0,preview_overlay_color:void 0,lightbox:{enabled:t,color:m(o,c*100)}}}}var L,R=W(()=>{"use strict";b();y();S();x();v();L=t=>t.type==="picture"});export{$ as a,B as b,E as c,R as d};
