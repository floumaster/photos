import{a as Yo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-LDTJ5JIY.js";import{c as vo,e as Xo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-HG2UDEKB.js";import{a as ho,b as Zo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-ETVYLHC3.js";import{a as Po,b as Jo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-ZGFBOSIO.js";import{a as G,b as No}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-TRWPMHA6.js";import{a as po,g as Ao}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-XKBN7ZTX.js";import{d as go,e as Go}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-RO7WSACS.js";import{h as mo,j as Uo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-LVGGQSSR.js";import{c as uo,d as Lo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-CRTDZU4B.js";import{a as X,b as qo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-AJNNHNLI.js";import{d as no,g as Oo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-6AOSDK7X.js";import{h as io,s as j,w as lo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-7YPD37VS.js";import{a as bo,b as jo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-PD6ULJPT.js";import{a as fo,b as yo,k as Ho}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-BDXPEG65.js";import{a as b,d as Z}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-HYCG5F7A.js";import{b as so,e as Io}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-5WOA3OAL.js";import{a as N,b as Y,e as Do}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-7IBOYLB2.js";import{d as ao,e as wo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-HTXVD7MD.js";import{r as H,s as Eo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-SJ5UICXK.js";import{a as q,h as Fo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-NWGYC5MB.js";import{a as P,d as co}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-7BYIK4MN.js";import{B as E,C as r,D as x,E as W}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-B5SOAUQH.js";import{a as U}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-R5L6UBQG.js";import{b as L,c as Ro}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-GF2LBU4E.js";import{a as D,c as zo}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-6GAXQ3MM.js";import{a as z,d as R,f as A}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-2LNZKOQK.js";function Co({isMobile:o,children:l,isViewerNext:d}){let y=(0,T.useRef)(null),c=0,h=0;if(d){let p=mo(e=>e.meta.state);c=p.zoom,h=p.transform}else c=window.RM.constructorRouter.zoom?.getZoom()||1,h=1;let{isRenderedOnClient:t}=ao(),[{top:u,left:s,isVisible:i},m]=(0,T.useState)({top:0,left:0,isVisible:!1});ho(({x:p,y:e})=>{if(y.current){let v=vo({slideshowBox:y.current,transform:h,zoom:c,pageX:p,pageY:e});v?m({...v.cursorPositionInElement,isVisible:!0}):i&&m({top:0,left:0,isVisible:!1})}},[y,c,h,i,t]);let a=(0,T.useMemo)(()=>({display:i?"block":"none",transform:`translate(${N`calc(${Y(s)} / ${p=>d?p.pageScale:c.toString()})`}, ${N`calc(${Y(u)} / ${p=>d?p.pageScale:c.toString()})`})`}),[d,i,s,u,c]);return o?null:r(b,{ref:y,width:"100%",height:"100%",position:"absolute",top:0,left:0,cursor:"none",overflow:"auto",children:t?r(b,{position:"absolute",style:a,children:l}):null})}var T,_o=z(()=>{"use strict";T=R(U());Uo();wo();Zo();Do();Z();Xo();W()});var Ko,Qo,ot,J,vt,gt,xo=z(()=>{"use strict";Ko={h:0,s:0,v:100,a:1},Qo=["Click","Hover","None"],ot=["Text","Icon"],J=78,vt={color:"2C0FB1",borders:0,opacity:100,radius:0,radius_rect_tl:0,radius_rect_tr:0,radius_rect_bl:0,radius_rect_br:0,radius_rect_independent:!1,video_opacity:100},gt={position:"e",floating:!1,type:ot[0],playbackType:Qo[0],size:J,letterSpacing:0,controlColor:Ko,fontWeight:400,fontStyle:"normal"}});function K({isPlaying:o,inViewer:l=!1,dataModel:d,progress:y=100,onClick:c}){let{model:h}=(0,f.useContext)(po),t=l&&d?d:h,u=t?.["font-family"]||no.fontFamily,s=(0,f.useMemo)(()=>t.custom_controls?.size||J,[t.custom_controls?.size]),i=(0,f.useMemo)(()=>{if(t?.custom_controls?.controlColor){let{r:V,g:$,b:k,a:g}=j(t.custom_controls.controlColor);return`rgba(${V}, ${$}, ${k}, ${g})`}return q.black},[t?.custom_controls?.controlColor]),m=(0,f.useMemo)(()=>{if(t?.custom_controls?.size&&t?.custom_controls?.fontWeight&&t?.custom_controls?.fontStyle&&u){let{fontStyle:V,size:$,fontWeight:k,letterSpacing:g,controlColor:C}=t.custom_controls;return{fontFamily:u,fontStyle:V,fontWeight:k,fontSize:$,letterSpacing:g===0?null:P(g),color:C}}},[u,t?.custom_controls?.size,t?.custom_controls?.letterSpacing,t?.custom_controls?.fontWeight,t?.custom_controls?.fontStyle,i]),a=(0,f.useMemo)(()=>{switch(t?.custom_controls?.position){case"nw":return{top:"1%",left:"1%"};case"n":return{top:"1%",left:"50%",transform:"translate(-50%, 0)"};case"ne":return{top:"1%",right:"1%"};case"w":return{top:"50%",left:"1%",transform:"translate(0, -50%)"};case"c":return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"};case"e":return{top:"50%",right:"1%",transform:"translate(0, -50%)"};case"sw":return{bottom:"1%",left:"1%"};case"s":return{bottom:"1%",left:"50%",transform:"translate(-50%, 0)"};case"se":return{bottom:"1%",right:"1%"};default:return{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}},[t?.custom_controls?.position]),p=(0,f.useMemo)(()=>t?.custom_controls?.type,[t?.custom_controls?.type]),e=s/2-10,v=3.14*e*2,B=P(Math.round(v*((100-Math.min(y<=0?100:y,100))/100))),{r:I,g:S,b:O}=(0,f.useMemo)(()=>j(t?.custom_controls?.controlColor||q.black),[t?.custom_controls?.controlColor]),M=(0,f.useMemo)(()=>l?t?.custom_controls?.floating?"none":"pointer":"default",[l,t?.custom_controls?.floating]);return x(b,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",left:a.left,top:a.top,right:a.right,bottom:a.bottom,transform:a.transform,onClick:c&&c,overflow:"auto",children:[p==="Icon"&&x(E,{children:[x("svg",{width:s,height:s,viewBox:`-${s*.125} -${s*.125} ${s*1.25} ${s*1.25}`,version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(-90deg)",cursor:M,pointerEvents:"all"},children:[r("circle",{r:e,cx:`${s/2}`,cy:`${s/2}`,fill:"transparent",stroke:`rgba(${I}, ${S}, ${O}, 0.5)`,strokeWidth:`${Math.round(s/23)}`,strokeDasharray:v,style:{transition:"stroke-dashoffset 1s linear",strokeDashoffset:0}}),r("circle",{r:e,cx:`${s/2}`,cy:`${s/2}`,fill:"transparent",stroke:i,strokeWidth:`${Math.round(s/23)}`,strokeDasharray:v,style:{transition:"stroke-dashoffset 1s linear",strokeDashoffset:B}})]}),o?r(b,{display:"flex",position:"absolute",marginLeft:"-1px",children:r(et,{color:i,size:s})}):r(b,{display:"flex",position:"absolute",marginTop:s<=40?"1px":"3px",marginLeft:s<=40?"2px":"4px",children:r(tt,{color:i,size:s})})]}),p==="Text"&&r(so,{pointerEvents:"all",padding:"16px",fontSize:m?.fontSize,letterSpacing:m?.letterSpacing,color:i,fontFamily:u,fontWeight:m?.fontWeight,fontStyle:m?.fontStyle,cursor:M,children:o?"Pause":"Play"})]})}var f,tt,et,So=z(()=>{"use strict";Z();Io();Fo();f=R(U());lo();Ao();xo();co();Oo();W();tt=(0,f.memo)(({color:o,size:l})=>r("svg",{width:`${l/3.8}`,height:`${l/3.8}`,viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M1 10.8294V3.17058C1 1.83807 2.45367 1.01502 3.59628 1.70059L9.97859 5.52998C11.0883 6.19581 11.0883 7.80412 9.97859 8.46995L3.59628 12.2993C2.45366 12.9849 1 12.1619 1 10.8294Z",fill:o,stroke:o})})),et=(0,f.memo)(({color:o,size:l})=>r("svg",{width:`${l/3.5}`,height:`${l/3.5}`,viewBox:"0 0 12 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V17C0 17.5523 0.447715 18 1 18C1.55228 18 2 17.5523 2 17V1ZM12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V1Z",fill:o})}))});function Gt({widget:o,isVisible:l=!1,useLqip:d=!1,isTabVisible:y,isViewerNext:c=!1,playerRef:h,width:t,height:u,autoplay:s}){let i=o.provider_name==="File"?`${L.readymag_video_files_bucket}/${o.url}`:o.url,m=o.custom_controls?.playbackType,a=o.controls&&o.controls_type==="custom",p=o.url&&G.isYoutube(i)?G.getYoutubeIdFromUrl(o.url):"",[e]=(0,n.useState)(()=>new Q),{isPlaying:v}=e.useSnapshot(),[B,I]=(0,n.useState)(!1),[S,O]=(0,n.useState)(),[M,V]=(0,n.useState)(()=>o.w),[$,k]=(0,n.useState)(()=>o.h);(0,n.useEffect)(()=>{typeof t=="number"&&V(t),typeof u=="number"&&k(u)},[t,u]),(0,n.useEffect)(()=>{V(o.w),k(o.h)},[o.w,o.h]),(0,n.useImperativeHandle)(h,()=>e,[e]);let g=!!((typeof s<"u"?s:o.autoplay)&&y);(0,n.useEffect)(()=>{g&&e.play()},[g]);let{isCustomThumbnail:C,thumbnail:_}=(0,n.useMemo)(()=>o.picture&&o.custom_thumbnail?{isCustomThumbnail:!0,thumbnail:o.picture}:{isCustomThumbnail:!1,thumbnail:{url:o.provider_name==="File"?`${L.readymag_video_files_bucket}/${o.thumbnail_url}`:o.thumbnail_url,type:"jpg"}},[o.picture,o.custom_thumbnail,o.provider_name,o.thumbnail_url]),[oo,$o]=(0,n.useState)(!1),ko=(0,n.useMemo)(()=>B?C?g?!1:!oo:!1:!0,[C,B,oo,g]);function Wo(){$o(!0),e.play()}let to=(0,n.useCallback)(()=>{e.play(),e.events.dispatchEvent(new CustomEvent("start",{detail:`${o.title} / ${i}`}))},[i,o.title,e]),eo=(0,n.useCallback)(()=>{e.stop(),e.events.dispatchEvent(new CustomEvent("stop",{detail:`${o.title} / ${i}`}))},[i,o.title,e]),w=()=>void e.toggle();function To(){I(!0),e.events.dispatchEvent(new Event("ready"))}function Bo(){return a&&o?.custom_controls?.floating?r(Co,{isViewerNext:c,children:r(K,{isPlaying:v,dataModel:o,inViewer:!0,progress:S?.played&&S.played*100,onClick:w})}):r(K,{isPlaying:v,dataModel:o,inViewer:!0,progress:S?.played&&S.played*100,onClick:w})}let F=it(o,B),Mo=(0,n.useMemo)(()=>({pointerEvents:a?"none":"all",position:"relative",...F}),[F,a]);return x(nt,{position:"relative",width:"100%",height:"100%",onMouseOver:()=>m==="Hover"&&!a&&to(),onMouseLeave:()=>m==="Hover"&&!a&&eo(),onClick:()=>m==="Click"&&!o.controls&&!a&&w(),providerName:o.provider_name,children:[r(yo,{children:ko&&r(rt,{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:10,pointerEvents:"all",objectFit:"cover",style:F,initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},role:C?"button":void 0,cursor:C?"pointer":void 0,onClick:C?Wo:void 0,children:C&&x(E,{children:[r(b,{position:"absolute",top:"50%",left:"50%",zIndex:10,transform:"translate(-50%, -50%)",children:r(bo,{width:65,height:65,color:"white"})}),c?r(go,{isVisible:l,data:{_id:o._id,w:M,h:$,picture:_,size:"cover"},useLqip:d,pointerEvents:"none"}):r(st,{src:_.lambdaUrl||_.url||X.getLqipUrl(_),alt:"video custom thumbnail"})]})})}),!D()&&r(Vo.default,{width:M,height:$,url:i,muted:o.mute,loop:o.loop,onReady:To,onPlay:to,onPause:eo,playing:v,controls:o.controls&&o.controls_type==="default",onProgress:ro=>O(ro),playsinline:g,style:Mo,config:{youtube:{playerVars:{wmode:"opaque",enablejsapi:1,autohide:1,showinfo:o.info,theme:o.theme,html5:1,rel:0,vq:"hd1080"},embedOptions:{videoId:p}},vimeo:{playerOptions:{wmode:"opaque",api:1,title:o.info,byline:o.info,portrait:o.info,color:o.color}},file:{attributes:{poster:_.lambdaUrl||_.url||X.getLqipUrl(_)}}}}),!D()&&a&&Bo()]})}function it(o,l){let d={opacity:l?1:0,transition:"opacity 125ms"};if(o.video_styles){let{color:y,borders:c,opacity:h,radius:t,radius_rect_tl:u,radius_rect_tr:s,radius_rect_br:i,radius_rect_bl:m,radius_rect_independent:a,video_opacity:p}=o.video_styles,e=io(y,h);Object.assign(d,{display:"grid",borderRadius:a?`${P(u)} ${P(s)} ${P(i)} ${P(m)}`:P(t),borderColor:`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`,borderStyle:"solid",borderWidth:P(c),opacity:l?p/100:0,overflow:"hidden",boxSizing:"border-box"})}return d}var Vo,n,rt,st,nt,Q,lt=z(()=>{"use strict";Z();Ho();jo();zo();Vo=R(Yo()),n=R(U());lo();Ro();_o();So();No();co();Lo();Go();Jo();Eo();qo();W();rt=fo(b),st=H(Po)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`,nt=H(b,{excludeProps:["providerName"]})`
  video {
    object-fit: ${o=>o.providerName==="File"?"cover":"contain"};
  }
`;Q=class extends uo{constructor(){super();A(this,"events");A(this,"isPlaying",!1);this.events=this.detach(new EventTarget)}play(){this.isPlaying=!0}stop(){this.isPlaying=!1}toggle(){this.isPlaying?this.stop():this.play()}}});export{Ko as a,Qo as b,ot as c,vt as d,gt as e,xo as f,Gt as g,lt as h};