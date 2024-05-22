import{b as x,c as w}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-5RWKKDMR.js";import{i as M}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-A6M5PDNO.js";import{d as S,f,o as m,t as v}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-QMLK2R63.js";import{b as T,c as R}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-EDMMYLMC.js";import{a as C}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-GELLX33M.js";import{a as s,d as U}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-AUVFGGVF.js";var H,k,I,K,E,O=s(()=>{"use strict";H="listStyle",k="ordered-key",I="default-list-style",K={"unordered-list-item":{element:"li"},"ordered-list-item":{element:"li"}},E={"unordered-list-item":{label:"Unordered list",style:`
      .unordered-list-item {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .unordered-list-item div[data-offset-key]:before,
      .unordered-list-item > li:before {
        white-space: nowrap;
        content: "\u2022\\00a0";
      }
    `},"ordered-list-item":{label:"Ordered list",style:`
      .ordered-list-item {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .ordered-list-item div[data-offset-key]:before,
      .ordered-list-item > li:before {
        white-space: nowrap;
        counter-increment: ${k};
        content: counter(${k})".";
      }
    `}}});var _,Z,L=s(()=>{"use strict";_="align",Z={"align-left":{label:"Left",style:".align-left { text-align: left !important; }"},"align-center":{label:"Center",style:".align-center { text-align: center !important; }"},"align-right":{label:"Right",style:".align-right { text-align: right !important; }"},"align-justify":{label:"Justify",style:`.align-justify {
      text-align: justify !important;
      ${typeof Modernizr<"u"&&(Modernizr.safari||Modernizr.firefox)?"white-space: normal !important;":""}
    }`}}});var X,Y,ee,P=s(()=>{"use strict";L();X={fontSize:18,lineHeight:26,fontFamily:"Inter",fontWeight:400,fontStyle:"normal",fontWeights:["n1","i1","n3","i3","n4","i4","n5","i5","n7","i7","n9","i9"],textAlign:"align-left",fontVariationSettings:[]},Y={unstyled:{element:"p"}},ee={'[data-block="true"], .widget-text-v3 p:not([class]), .widget-text-v3 p[class=""]':{label:"Unstyled",style:""}}});function p(t){let e=t,o=[],r=[];function l(n){let c=e;e=n,o.forEach(({update:a,options:y})=>{(!y||!y.shouldUpdate||!y.shouldUpdate(c,n))&&a()}),r.forEach(a=>{a&&typeof a=="function"&&a(n)})}function d(n){let c=j();return(n?.hookType==="layout"?i.useLayoutEffect:i.useEffect)(()=>{let g={options:n,update:c};return o.push(g),()=>{b(o,g)}},[]),[e,l]}function $(){return e}function A(n){return r.push(n),()=>{b(r,n)}}return[d,l,$,A]}function j(){let[,t]=(0,i.useState)({});return(0,i.useCallback)(()=>{t({})},[])}function b(t,e){let o=t.indexOf(e);o!==-1&&t.splice(o,1)}var i,F=s(()=>{"use strict";i=U(C())});var ie,se,u,le,ae,D,pe,ye,z,de,ce,h=s(()=>{"use strict";F();w();[ie,se,u]=p({global:[],project:[]}),[le,ae,D]=p({global:[],project:[]}),[pe,ye,z]=p({global:[],project:[]}),[de]=p({}),ce=({fontFamily:t,fontWeight:e,fontStyle:o})=>`${t}_${e}_${o}`;x("styleStore",{getTextStylesStore:u,getLinkStylesStore:D,getListStylesStore:z})});var me,B,N,xe,Te,ke,Le,V=s(()=>{"use strict";R();v();h();me="textStyle",B=["fontSize","lineHeight","letterSpacing","textIndent","paddingLeft","paddingTop","paddingRight","paddingBottom","width","minWidth"],N=(t,e)=>{if(e){if(B.includes(t)&&!isNaN(Number(e)))return`${e}px`;if(t==="color"){let{r:o,g:r,b:l,a:d}=f(String(e));return`rgba(${o}, ${r}, ${l}, ${d})`}return e}},xe=(t,e)=>{if(e){if(B.includes(t))return parseInt(String(e));if(t==="color"){let{r:o,g:r,b:l}=m(String(e));return S({r:o,g:r,b:l,a:1})}return e}},Te=(t,e=!1)=>Object.keys(t).reduce((o,r)=>t[r]?`${o}${T(r)}: ${N(r,t[r])}${e?" !important":""}; `:o,""),ke=()=>{let e=u()||window.ServerData&&window.ServerData.mags&&window.ServerData.mags.mag&&window.ServerData.mags.mag.textStyles;return e?[...e.project||[],...e.global||[]].reduce((o,r)=>(Object.assign(o,{[r.name]:{element:r.tag}}),o),{}):{}},Le=(t,e)=>t?e?parseFloat(String(t)):parseInt(String(t)):0});var $e,Ae,W=s(()=>{"use strict";M();$e="LINK",Ae={name:"link-1",label:"Default Link Style",style:{link:{textColor:"0080FF64",color:"0080FF64",type:"Solid",size:1,padding:0},hover:{textColor:"0080FF64",color:"0080FF64",type:"None",size:1,padding:0},current:{textColor:"0080FF64",color:"0080FF64",type:"None",size:1,padding:0}}}});export{p as a,F as b,_ as c,Z as d,L as e,X as f,Y as g,ee as h,P as i,ie as j,se as k,u as l,le as m,ae as n,D as o,pe as p,ye as q,z as r,de as s,ce as t,h as u,me as v,xe as w,Te as x,ke as y,Le as z,V as A,H as B,k as C,I as D,K as E,E as F,O as G,$e as H,Ae as I,W as J};
