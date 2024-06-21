import{l as n,m as l,o as M}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7X5IMZFD.js";import{h as f,i as z}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-H4ZSG3VH.js";import{A as F,i as S}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RWHY6I2B.js";import{a,b as R}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2DOLZMQC.js";import{a as v,c as y}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RFIBFC7T.js";import{a as p,f as i}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var h,b=p(()=>{"use strict";h=class{constructor(){i(this,"listeners",[])}add(e){this.listeners.push(e)}remove(e){let t=this.listeners.indexOf(e);t!==-1&&this.listeners.splice(t,1)}invoke(e){for(let t of this.listeners)t(e)}}});var u,E=p(()=>{"use strict";u=class{constructor(e){i(this,"_previous");i(this,"_current");this._previous=e,this._current=e}get previous(){return this._previous}get current(){return this._current}set current(e){this._previous=this._current,this._current=e}}});var r,d,g,D=p(()=>{"use strict";F();M();R();y();b();E();z();r={passive:!1},d={isEnabled:!0},g=class{constructor(e){i(this,"listeners",new h);i(this,"isTouch",a.isTouch());i(this,"isSafari",a.isSafari());i(this,"isIOS",a.isIOS());i(this,"container");i(this,"lineHeight",v()?22:parseFloat(window.getComputedStyle(document.body).lineHeight)||22);i(this,"wheelSpeed",.9);i(this,"touchSpeed",1);i(this,"maxDeltaTimeForMomentumScroll",30);i(this,"scrollTop",new u(0));i(this,"scrollHeight",0);i(this,"windowHeight",0);i(this,"isScrolling",!1);i(this,"touchStartY",0);i(this,"touchStartVelocity",0);i(this,"touchStartTime",0);i(this,"lastTouchTimestamp",0);i(this,"inertiaRaf",0);i(this,"resizeObserver");i(this,"skipIosEvent",!0);i(this,"disabled",["safari","touch"]);i(this,"onResize",S(()=>{this.updateDimensions(),this.shouldUseScrollFallback()||this.syncScrollPosition(!1)},100));i(this,"clearIsScrollingDebounced",S(()=>{this.clearIsScrolling()},40));if(v())return;this.onWheel=this.onWheel.bind(this),this.onResize=this.onResize.bind(this),this.onScroll=this.onScroll.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.container=e||document.documentElement,this.scrollTop.current=Math.max(this.getMinScroll(),this.getActualElementScroll());let t=f();t&&(typeof t.scrollTouchSpeed=="number"&&(this.touchSpeed=t.scrollTouchSpeed),typeof t.scrollWheelSpeed=="number"&&(this.wheelSpeed=t.scrollWheelSpeed)),this.setContainerStyles(),this.updateDimensions(),this.updateScrollPosition(!1),this.bindEvents()}bindEvents(){window.addEventListener("DOMContentLoaded",this.onResize),window.addEventListener("load",this.onResize),window.addEventListener("readystatechange",this.onResize),window.addEventListener("visibilitychange",this.onResize),window.addEventListener("resize",this.onResize),window.addEventListener("hashchange",this.onResize),window.addEventListener("popstate",this.onResize),window.addEventListener("pushState",this.onResize),window.addEventListener("replaceState",this.onResize),this.canUseScrollFor("touch")&&(document.addEventListener("gesturestart",this.disablePinch),document.addEventListener("gesturechange",this.disablePinch),document.addEventListener("gestureend",this.disablePinch)),this.bindResizeObserver(),document.addEventListener("scroll",this.onScroll),this.isTouch?this.canUseScrollFor("touch")&&(document.addEventListener("touchstart",this.onTouchStart,r),document.addEventListener("touchend",this.onTouchEnd,r),document.addEventListener("touchcancel",this.onTouchEnd,r),document.addEventListener("touchmove",this.onTouchMove,r)):(this.isSafari?this.canUseScrollFor("safari"):this.canUseScrollFor("desktop"))&&document.addEventListener("wheel",this.onWheel,r)}bindResizeObserver(){window.ResizeObserver&&this.container!==document.documentElement&&(this.resizeObserver=new window.ResizeObserver(this.onResize),Array.from(this.container.childNodes).filter(s=>s.nodeType===Node.ELEMENT_NODE).forEach(s=>this.resizeObserver?.observe(s)))}unbindResizeObserver(){this.resizeObserver&&this.resizeObserver.disconnect()}disablePinch(e){e.preventDefault()}unbindEvents(){window.removeEventListener("DOMContentLoaded",this.onResize),window.removeEventListener("load",this.onResize),window.removeEventListener("readystatechange",this.onResize),window.removeEventListener("visibilitychange",this.onResize),window.removeEventListener("resize",this.onResize),window.removeEventListener("hashchange",this.onResize),window.removeEventListener("popstate",this.onResize),window.removeEventListener("pushState",this.onResize),window.removeEventListener("replaceState",this.onResize),this.unbindResizeObserver(),document.removeEventListener("scroll",this.onScroll),this.isTouch?this.canUseScrollFor("touch")&&(document.removeEventListener("touchstart",this.onTouchStart,r),document.removeEventListener("touchend",this.onTouchEnd,r),document.removeEventListener("touchcancel",this.onTouchEnd,r),document.removeEventListener("touchmove",this.onTouchMove,r)):(this.isSafari?this.canUseScrollFor("safari"):this.canUseScrollFor("desktop"))&&document.removeEventListener("wheel",this.onWheel,r)}onScroll(){(this.shouldUseScrollFallback()||!this.isScrolling)&&this.syncScrollPosition(!0)}syncScrollPosition(e){let t=this.getActualElementScroll();this.scrollTop.current!==t&&(this.scrollTop.current=this.clampScrollPosition(t),this.updateScrollPosition(e))}onWheel(e){if(l(e.target))return;if(!d.isEnabled)return this.clearIsScrolling();e.preventDefault(),this.isScrolling=!0;let t=e.deltaMode===WheelEvent.DOM_DELTA_LINE?this.lineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?this.windowHeight:1,s=e.deltaY*t*this.wheelSpeed;s!==0&&(this.scrollTop.current=this.clampScrollPosition(this.scrollTop.current+s),this.scrollTop.current<=0||this.scrollTop.current>=this.scrollHeight-this.windowHeight?this.clearIsScrolling():this.clearIsScrollingDebounced(),this.updateScrollPosition(!1))}canScrollWithTouch(e){return!(!d.isEnabled||e.touches.length>1)}onTouchStart(e){if(!this.canScrollWithTouch(e)||l(e.target))return;if(document.hasFocus()&&n(document.activeElement)){n(e.target)||document.activeElement.blur();return}e.preventDefault(),this.inertiaRaf&&(window.cancelAnimationFrame(this.inertiaRaf),this.inertiaRaf=0),this.isScrolling=!0,this.isIOS&&(this.skipIosEvent=!0);let t=this.getTouchEvent(e);this.touchStartY=t.pageY,this.touchStartVelocity=t.clientY,this.touchStartTime=e.timeStamp,this.lastTouchTimestamp=this.touchStartTime}onTouchMove(e){if(!this.isScrolling||l(e.target))return;if(!this.canScrollWithTouch(e))return this.clearIsScrolling();if(e.preventDefault(),this.isIOS){if(this.skipIosEvent){this.skipIosEvent=!1;return}this.skipIosEvent=!0}let t=this.getTouchEvent(e),s=Math.ceil((t.pageY-this.touchStartY)*this.touchSpeed);if(s===0)return;let o=Math.ceil(this.scrollTop.current-s);this.scrollTop.current=this.clampScrollPosition(o),this.updateScrollPosition(!1),this.lastTouchTimestamp=e.timeStamp}onTouchEnd(e){if(!this.canScrollWithTouch(e)||!this.isScrolling||l(e.target))return;let s=this.getTouchEvent(e).clientY,o=e.timeStamp,c=o-this.touchStartTime,T=s-this.touchStartVelocity,w=T/c,L=o-this.lastTouchTimestamp;Math.abs(T)<=3?(this.clearIsScrolling(),this.simulateClick(e)):(this.callScrollCallback(),L<this.maxDeltaTimeForMomentumScroll&&this.animateScroll(w))}simulateClick(e){let t=e.target;if(t)if(n(t))t.focus();else if(document.hasFocus()&&n(document.activeElement)&&document.activeElement.blur(),t instanceof HTMLElement&&t.click)t.click();else{let s=this.getTouchEvent(e),o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:1,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});t.dispatchEvent(o)}}animateScroll(e){let o=e*40;this.inertiaRaf&&(window.cancelAnimationFrame(this.inertiaRaf),this.inertiaRaf=0);let c=()=>{if(o*=.95,this.scrollTop.current=this.clampScrollPosition(this.scrollTop.current-o),this.updateScrollPosition(!1),Math.abs(o)<.01){this.inertiaRaf&&(window.cancelAnimationFrame(this.inertiaRaf),this.inertiaRaf=0),this.clearIsScrolling();return}this.inertiaRaf=window.requestAnimationFrame(c)};this.inertiaRaf=window.requestAnimationFrame(c)}getTouchEvent(e){return e.changedTouches?.[0]||e}getCurrentScrollData(){let e=this.scrollTop.current>=this.scrollTop.previous;return{scrollTop:this.scrollTop.current,scrollHeight:this.scrollHeight,isScrolling:this.isScrolling,isScrollingDown:e,isScrollingUp:!e}}callScrollCallback(){this.listeners.invoke(this.getCurrentScrollData())}addListener(e){this.listeners.add(e),e(this.getCurrentScrollData())}removeListener(e){this.listeners.remove(e)}clampScrollPosition(e){return Math.max(this.getMinScroll(),Math.min(e,this.scrollHeight-this.container.clientHeight))}updateScrollPosition(e){e||this.container.scrollTo?.(0,this.scrollTop.current),this.callScrollCallback()}getMinScroll(){return this.isTouch?1:0}getActualElementScroll(){return this.container.scrollTop}updateDimensions(){this.scrollHeight=Math.max(0,this.container.scrollHeight),this.windowHeight=window.innerHeight}clearIsScrolling(){this.isScrolling=!1,this.callScrollCallback()}setContainerStyles(){this.container.style.scrollBehavior="auto",this.container.style.overflowScrolling="touch",this.container.style.WebkitOverflowScrolling="touch",this.container.style.overscrollBehaviorY="none"}destroy(){this.unbindEvents()}canUseScrollFor(e){return!(this.disabled===!0||Array.isArray(this.disabled)&&this.disabled.includes(e))}shouldUseScrollFallback(){let e=this.isTouch&&!this.canUseScrollFor("touch"),t=!this.isTouch&&(this.isSafari?!this.canUseScrollFor("safari"):!this.canUseScrollFor("desktop"));return e||t}static toggleScroll(e){d.isEnabled=e}static isEnabled(){return d.isEnabled}}});export{g as a,D as b};
