import{$a as u,Bb as B,C as j,G as E,K as v,Sa as y,Ya as A,q as V,ra as L,sa as I,y as C}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-2PHOMKUV.js";import{A as k,C as G,o as b,t as W}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-NITTXA45.js";import{a as m,c as O,g as w}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-6AOSDK7X.js";import{i as q}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-Y4VJV6XC.js";import{d as h,q as x,w as F}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-7YPD37VS.js";import{b as T,c as _}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-LYOOAS6V.js";import{a as S}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-2LNZKOQK.js";var d,z,M,D,it,R=S(()=>{"use strict";B();d="textIndent",z=({editorState:t,block:e})=>{let n=L({editorState:t,block:e,key:d});return typeof n=="number"?n:void 0},M=({editorState:t,value:e,block:n})=>I({editorState:t,block:n,key:d,value:e}),D=28,it=({editorState:t,method:e})=>{let n=z({editorState:t})||0,r=t.getSelection(),{focusOffset:o,anchorOffset:l}=r.toJS(),a=l===0&&o===0;if(e==="increase"&&a)return M({editorState:t,value:n+D});if(e==="decrease"&&a&&n>0)return M({editorState:t,value:Math.max(0,n+D*-1)})}});var P,J,X,Q,Y,Z,tt,U,et,nt,rt,ot,Rt,Ut,lt=S(()=>{"use strict";q();_();W();O();v();j();V();F();G();R();B();w();P=t=>{let e=document.createElement("div");e.classList.add("block","block-text"),e.style.position="absolute",e.style.left="-9999px",e.style.opacity="0",e.style.visibility="hidden";let n=document.createElement("div");return n.classList.add("text-preview","v2"),n.innerHTML=t,e.append(n),document.body.appendChild(e),e},J=t=>{let e=typeof window<"u"&&window.RM?window.RM.constructorRouter:null,{attributes:n,target:r,classList:o,dataset:l}=t,a=n.getNamedItem("href"),s=a&&a.value?a.value.toLowerCase():"",g=l.anchorLinkPos?parseInt(l.anchorLinkPos):0,c=l.pid,i={id:u(),linkStyle:o[0],target:r==="_blank"?"_blank":"_self"};if(s.startsWith("mailto:"))i.url=s.replace("mailto:",""),i.type="Email";else if(s.startsWith("tel:"))i.url=s.replace("tel:",""),i.type="Phone";else if(s==="__rm_anchor")i.url=`${g}px`,i.pageNum=e?.getCurrentPageNum()||void 0,i.type="Anchor",i.anchorPosition=g;else if(s==="back to top")i.url="",i.type="ScrollToTop";else if(s==="__rm_goback")i.url="",i.type="GoBack";else if(c||e?.mag.getPageId(s)){let p=e?.mag.getPageId(s);i.url=""+(c&&e?.mag.getPageUri(c)||p||s);let f=c||p;i.pageNum=f&&e?.mag.getPageNum(f)||void 0,i.type="Page",i.pageId=f||void 0}else i.url=s,i.type="URL";return i},X=({computedStyles:t,originalStyles:e})=>{if(!e||!t)return{};let n=["fontSize","fontWeight","fontFamily","fontStyle","letterSpacing","textDecorationLine","textTransform","color","textAlign","paddingLeft","paddingTop","paddingRight","paddingBottom","lineHeight"],r=t.getPropertyValue("letter-spacing");return e.letterSpacing&&e.letterSpacing!=="normal"&&(!r||r==="normal")&&(r=e.letterSpacing),n.reduce((o,l)=>{let a=T(String(l)),s=t.getPropertyValue(a);if(s){if(l==="letterSpacing")return Object.assign(o,{[l]:r}),o;Object.assign(o,{[l]:s})}return o},{})},Q=t=>{let e=[];return Array.from(t.querySelectorAll("p")).forEach(n=>{let r=document.createNodeIterator(n,NodeFilter.SHOW_TEXT),o=[],l=null;for(;l=r.nextNode();){let a=l.parentElement?.style,s=l.parentElement?window.getComputedStyle(l.parentElement):void 0,g=X({computedStyles:s,originalStyles:a}),c=l.textContent||"";for(let i=0;i<c.length;i++){let p=c[i];o.push({symbol:p,styles:g})}}e.push({charStyle:o,paragraph:n})}),e},Y=(t,e)=>{let n={},r=e?.ignore||{};if(!r.textStyles&&t.classList?.length){let o=Array.from(t.classList).filter(l=>l.startsWith("paragraph"));n[b]=o[0]}if(!r.textAlign&&t.style.textAlign){let o=t.style.textAlign;n[m]=o==="right"?"align-right":o==="center"?"align-center":o==="justify"?"align-justify":"align-left"}if(!r.paddings){let o={};t.style.paddingLeft&&(o.left=parseInt(t.style.paddingLeft)),t.style.paddingTop&&(o.top=parseInt(t.style.paddingTop)),t.style.paddingRight&&(o.right=parseInt(t.style.paddingRight)),t.style.paddingBottom&&(o.bottom=parseInt(t.style.paddingBottom)),n[E]=o}return!r.lineHeight&&t.style.lineHeight&&(n[C]=parseInt(t.style.lineHeight)),!r.textIndent&&t.style.textIndent&&(n[d]=parseInt(t.style.textIndent)),n},Z=(t,e)=>{if(t==="fontSize")return y("FONT_SIZE",parseInt(e));if(t==="fontStyle")return y("FONT_STYLE",e);if(t==="fontWeight")return y("FONT_WEIGHT",e);if(t==="fontFamily")return y("FONT_FAMILY",e.replace(/"/g,""));if(t==="letterSpacing"&&e!=="normal")return y("LETTER_SPACING",parseFloat(e));if(t==="color")return y("COLOR",h(x(e)));if(t==="textDecorationLine")return y("DECORATION",e);if(t==="textTransform")return y("TRANSFORM",e)},tt=t=>{let e=[];return t.forEach((n,r)=>{Object.keys(n.styles).forEach(o=>{let l=Z(o,n.styles[o]);l&&e.push({offset:r,length:1,style:l})})}),e},U="<%TAG_POINTER%>",et=(t,e)=>{let n=e.textContent,r=n?.length;e.textContent=`${U}${n}`;let l=t.textContent?.indexOf(U);return e.textContent=n,{offset:l,length:r}},nt=(t,e=0)=>{let n=e,r=[],o={};return Array.from(t.querySelectorAll("a")).forEach(l=>{if(l.textContent){let{offset:a,length:s}=et(t,l);typeof a=="number"&&typeof s=="number"&&(r.push({key:n,offset:a,length:s}),o[n]={mutability:"MUTABLE",type:k,data:J(l)},n++)}}),{entityRanges:r,entityMap:o,lastKey:n}},rt=({charStyleList:t,blockKeys:e,entityKeys:n})=>{let r={blocks:[],blocksMeta:[],styles:[],entityMap:{}},o=0;return t.forEach(({paragraph:l,charStyle:a},s)=>{let g=e&&e.length?e[s]:u(),c=Y(l),{entityMap:i,entityRanges:p,lastKey:f}=nt(l,o);o=f;let K={key:g,text:l.textContent||"",depth:0,entityRanges:p},H={key:g,type:"unstyled",inlineStyles:A(tt(a))},N={key:g,data:c};r.blocks.push(K),r.styles.push(H),r.blocksMeta.push(N),r.entityMap={...r.entityMap,...i}}),n?.length&&Object.keys(r.entityMap).forEach((l,a)=>{r.entityMap[l].data={...r.entityMap[l].data,id:n[a]}}),r},ot=t=>{Array.from(t.querySelectorAll("br")).forEach(n=>{let r=document.createTextNode(`
`);n.replaceWith(r)})},Rt=({str:t,blockKeys:e,entityKeys:n})=>{let r=P(t);ot(r);let o=Q(r),l=rt({charStyleList:o,blockKeys:e,entityKeys:n});return r.parentNode?.removeChild(r),l},Ut=t=>{let e=P(t),n=Array.from(e.querySelectorAll("p"));return n.length>1?`<p>${n.map(o=>o.innerHTML).join("<br/>")}</p>`:t}});export{d as a,z as b,it as c,R as d,J as e,Y as f,Rt as g,Ut as h,lt as i};
