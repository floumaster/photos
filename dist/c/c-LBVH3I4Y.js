import{b as f,o as v}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-3SL2HRH4.js";import{a as g,b as G}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-ZGXQUP27.js";import{a as I}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-AUVFGGVF.js";function O(t,e){return e.left<=t.left&&t.left<=e.left+e.width&&e.top<=t.top&&t.top<=e.top+e.height}function j(t,e){let n={x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER,onSegment1:!1,onSegment2:!1},o=(e.y2-e.y1)*(t.x2-t.x1)-(e.x2-e.x1)*(t.y2-t.y1);if(o===0)return n;let i=t.y1-e.y1,h=t.x1-e.x1,r=(e.x2-e.x1)*i-(e.y2-e.y1)*h,s=(t.x2-t.x1)*i-(t.y2-t.y1)*h;return i=r/o,h=s/o,n.x=t.x1+i*(t.x2-t.x1),n.y=t.y1+i*(t.y2-t.y1),i>0&&i<1&&(n.onSegment1=!0),h>0&&h<1&&(n.onSegment2=!0),n}function J(t,e){let n=t.width/2,o=t.height/2,i=c=>this.lineIntersection(c,{x1:n,y1:o,x2:e.x,y2:e.y}),h=i({x1:0,y1:0,x2:t.width,y2:0}),r=Math.sqrt(o**2+(h.x<0?n-h.x:h.x-n)**2),s=i({x1:t.width,y1:0,x2:t.width,y2:t.height}),p=Math.sqrt(n**2+(s.y<0?o-s.y:s.y-o)**2);return Math.sqrt(Math.abs(n-e.x)**2+Math.abs(o-e.y)**2)/(r<p?r:p)}var u,x,R,w,d,C,V,F,W,X,A,D,H,k,P,S,M,q,N,B,T,b,E,Y,_,K,$,Q=I(()=>{"use strict";G();v();u=(t,e=1)=>Object.assign({},t,"left"in t?{left:t.left*e}:{},"top"in t?{top:t.top*e}:{},"width"in t?{width:t.width*e}:{},"height"in t?{height:t.height*e}:{}),x=(t,e={left:0,top:0})=>({...t,left:t.left+e.left,top:t.top+e.top}),R=(t,e)=>({...t,left:(e.width-t.width)/2,top:(e.height-t.height)/2}),w=(t,e={left:0,top:0})=>x(t,e),d=(t,e={left:0,top:0})=>x(t,{left:-e.left,top:-e.top}),C=(t,e)=>{let n={left:("left"in e?e.left:0)+("width"in e?e.width:0),top:("top"in e?e.top:0)+("height"in e?e.height:0)};return{...t,right:n.left-t.left-("width"in t?t.width:0),bottom:n.top-t.top-("height"in t?t.height:0)}},V=(t,e)=>({left:e.width-t.right-t.width,top:e.height-t.bottom-t.height,width:t.width,height:t.height}),F=t=>({left:("left"in t?t.left:0)+t.width/2,top:("top"in t?t.top:0)+t.height/2}),W=(t,e)=>{let n="left"in e&&"top"in e?e:{top:0,left:0},o=d(t,n),i={...t,left:o.left<0?0:o.left+o.width>e.width?e.width-t.width:o.left,top:o.top<0?0:o.top+o.height>e.height?e.height-t.height:o.top};return w(i,n)},X=(t,e)=>{if(e.width/e.height>t.width/t.height){let o=t.width/e.width;return{width:t.width,height:e.height*o}}else{let o=t.height/e.height;return{width:e.width*o,height:t.height}}},A=(t,e)=>{if(t.width/t.height>e.width/e.height){let o=e.width/t.width;return{width:t.width*o,height:t.height*o}}else{let o=e.height/t.height;return{width:t.width*o,height:t.height*o}}},D=(t,e)=>{let{left:n=0,top:o=0,width:i,height:h}=t,{left:r=0,top:s=0,width:p,height:a}=e,{left:c,top:m,right:l,bottom:y}={left:Math.max(n,r),top:Math.max(o,s),right:Math.min(n+i,r+p),bottom:Math.min(o+h,s+a)},{width:L,height:z}={width:l-c,height:y-m};return L>0&&z>0?{left:c,top:m,width:l-c,height:y-m}:{width:0,height:0}},H=t=>({left:t.left,top:t.top,width:t.width,height:t.height}),k=(t,e,n,o)=>{let i=o?{left:o.scrollLeft,top:o.scrollTop}:f();return d(u(t,n*e),i)},P=(t,e,n,o)=>{let i=u(t,1/n/e);if("left"in i&&"top"in i){let h=o?{left:o.scrollLeft,top:o.scrollTop}:f();return w(i,u(h,1/e/n))}else return i},S=(t,e,n,o)=>{let i=o?{left:o.scrollLeft,top:o.scrollTop}:f();return g.isSafari()&&n!==1?d({left:t.pageX,top:t.pageY},i):{left:t.clientX,top:t.clientY}},M=(t,e,n,o)=>{let i=H(t.getBoundingClientRect()),h=o?o.scrollTop:f().top;return u({...i,top:g.isSafari()&&n!==1?i.top+(1-1/n)*h:i.top},n)},q=(t,e,n)=>u({left:t.pageX,top:t.pageY},1/e/n),N=(t,e,n,o)=>T(S(t,1,o),e,1,o),B=(t,e,n)=>P(M(t,e,n),e,n),T=(t,e,n,o)=>d(P(t,n,o),B(e,n,o)),b=t=>{let e=Math.sqrt(Math.pow(t.left,2)+Math.pow(t.top,2)),n=Math.atan2(t.top,t.left)*180/Math.PI;return{radius:e,degrees:n}},E=(t,e)=>{let n=e*Math.PI/180;return{left:t*Math.cos(n),top:t*Math.sin(n)}},Y=(t={left:0,top:0},e={left:0,top:0},n=0)=>{let o=d(t,e),i=b(o),h=E(i.radius,i.degrees+n);return w(h,e)},_=(t,e)=>{let{left:n,top:o,width:i,height:h}=t,r=e*(Math.PI/180),s=Math.abs(i*Math.cos(r))+Math.abs(h*Math.sin(r)),p=Math.abs(i*Math.sin(r))+Math.abs(h*Math.cos(r)),a=n+i/2,c=o+h/2,m=a-s/2,l=c-p/2;return{width:s,height:p,top:l,left:m}};K={resize:u,move:x,center:R,rotate:Y,rotateBox:_,relativeToAbsolute:w,absoluteToRelative:d,invertPosition:C,confine:W,cover:X,contain:A,intersection:D,normalizePosition:V,getCenter:F,cartesianToPolar:b,polarToCartesian:E,mapFromDocumentToViewport:k,mapFromViewportToDocument:P,mapPointerToViewport:S,mapPointerToDocument:q,mapPointerToElement:N,mapElementToViewport:M,mapElementToDocument:B,mapFromViewportToElement:T,isPointInBox:O,lineIntersection:j,percentFromRectangleCenter:J},$=K});export{$ as a,Q as b};
