import{c as o,d as g}from"https://st-p.rmcdn.net/670469db/dist/c/c-PQEELV7N.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-KBSBLMMO.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-HBQ6WUNC.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-S25HOHG7.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-DAD6E65D.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-QC6MCWZQ.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-ECLTHKUW.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-3G26G4UH.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-KB24OVPQ.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-LSFXDQU7.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-SFV75CWA.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-O5JV6B6V.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-WHEYTSIS.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-IP5L6X4Y.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-3ADPUEBW.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-TMLIPHM4.js";import"https://st-p.rmcdn.net/670469db/dist/c/c-4RRFSRAU.js";import{a as p}from"https://st-p.rmcdn.net/670469db/dist/c/c-43CRZFF7.js";var f,u,x=p(()=>{g();f=({widget:t,e:r})=>{if(t&&!t.isDragging){t.isDragging=!0,t.mag.isWidgetDragging=!0;let n=t.$el?.[0];n&&n.classList.toggle("dragging"),t.currentScale=t.mag.getScale(t.mag.currentPage.pageViewport)||1;let s=0;if(t.hasAnimation()&&n){let e=n,l={x:1,y:1};for(;e?.parentElement?.classList.contains("animation-container");){let i=o.getElementScale(e.parentElement),m=o.getElementRotationAngle(e.parentElement);m&&(s+=m),i&&!m&&(l.x*=i.x,l.y*=i.y),e=e.parentElement}(l.x!==1||l.y!==1)&&(t.animationScale=l),s&&(t.animationAngle=s)}t.mouseStart={x:t.is_above?r.clientX:r.pageX,y:t.is_above?r.clientY:r.pageY};let a=o.getElementTranslateByString(n);if(n.style.transform){let e=n.style.transform;/translate\(.+?\)/.test(e)?e=e.replace(/translate\(.+?\)/,`translate(${a.x}px, ${a.y}px)`):e+=` translate(${a.x}px, ${a.y}px) `,n.style.transform=e}else n.style.transform=`translate(${a.x}px, ${a.y}px)`;t.startPosition={x:a.x,y:a.y},document.onselectstart=()=>!1;let c=t.softBringToTopZ();t.z=c}},u=f});x();export{u as default};
