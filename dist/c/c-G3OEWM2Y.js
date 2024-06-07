import{b,c as E,d as U,f as S,h as N}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-EMJKI2X2.js";import{a as y,b as V}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-3DOPCGTA.js";import{a as k,b as q}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-PYWTQ4GF.js";import{e as P,g as B}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-XKBN7ZTX.js";import{a as o,b as L}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-AJNNHNLI.js";import{a as p}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-F52NNDBE.js";import{a as I}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-FP7CEQ5S.js";import{C as g,E as $}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-B5SOAUQH.js";import{a as C}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-E7ABLFAT.js";import{b as w}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-R5DRPSFA.js";import{a as f,d,f as u}from"https://st-p.rmcdn.net/c9a51d26/dist/c/c-2LNZKOQK.js";var h,M,l,O,W,A=f(()=>{"use strict";h=d(C()),M=d(p()),l=d(w());L();O=M.default.View.extend({pictures:[],domPictures:[],preloadPictures:[],currentSlide:null,nextSlide:null,selectedSlide:null,defaultDelay:4,defaultCrossfade:.5,isAnimationRunning:!1,cursor:0,rendered:!1,lastSlideshowAnimationStart:null,initialize:function(i){this.initSlideshowData(i.data),this.$container=i.container,this.$preloadContainer=i.preloadContainer},initSlideshowData(i){this.pictures=i&&i.pictures?l.default.sortBy(i.pictures,"num"):[],this.delay=i&&typeof i.delay=="number"?i.delay:this.defaultDelay,this.crossfade=i&&typeof i.crossfade=="number"?i.crossfade:this.defaultCrossfade,this.name=i&&i.name?i.name:"slideshow"+new Date().getTime(),this.domPictures=[],this.preloadPictures=[],this.currentSlide=null,this.nextSlide=null,this.selectedSlide=null,this.isAnimationRunning=!1,this.cursor=0},render:function(i){RM.screenshot?this.pictures.length?this.addPicture(this.pictures[0]):this.trigger("loaded"):this.loadPictures(),!this.isAnimationRunning&&!i&&this.startAnimationLoop(),this.rendered=!0},rerender:function(i){this.stopAnimationLoop(),this.initSlideshowData(i),this.removePictures(),this.render(!0)},runAnimation:function(){this.isAnimationRunning||(this.rendered?this.startAnimationLoop():this.render())},setDelay:function(i){if(i<this.crossfade){console.error("delay mast be longer than crossfade");return}this.delay=i},setCrossfade:function(i){if(i>this.delay){console.error("delay mast be longer than crossfade");return}this.crossfade=i,this.updateCrossfade()},updateCrossfade:function(){this.domPictures.forEach(function(i){i.css({"transition-duration":this.crossfade+"s"})}.bind(this))},updatePicture:function(i){let t=l.default.findIndex(this.pictures,function(e){return e.uuid===i.uuid});this.pictures[t]=i,this.domPictures[t].css({"background-image":`url("${this.getPoorUrl(i)}")`}),o.useLqipUrl(i)&&this.domPictures[t].addClass("lqip"),this.loadFullSizePicture(i)},updatePicturePosition:function(i){this.destroy(),this.initSlideshowData({pictures:i,delay:this.delay,crossfade:this.crossfade}),this.render()},addPicture:function(i){let t=this.domPictures.length===this.cursor+1,e=this.domPictures.length===0?2:t?1:0,s=this.domPictures.length===0||t?"block":"none";this.pictures.push(i),this.domPictures.push((0,h.default)("<div>").addClass(`slideshow-image fade-in${o.useLqipUrl(i)?" lqip":""}`).css({"z-index":e,display:s,"background-image":`url("${this.getPoorUrl(i)}")`,"transition-property":"opacity","transition-duration":this.crossfade+"s","transition-timing-function":"linear"}).appendTo(this.$container)),this.loadFullSizePicture(i)},selectSlide:function(i){if(!i)return;let t=this.pictures.findIndex(function(s){return s.uuid===i});if(t===-1){console.warn("Did't find slide for uuid:",i);return}if(!this.currentSlide||this.selectedSlide===this.domPictures[t]||(this.isAnimationRunning&&this.stopAnimationLoop(),this.currentSlide===this.domPictures[t]))return;let e=this.cursor;this.nextSlide&&this.nextSlide.css({"z-index":0,display:"none"}),this.domPictures[t].css({"z-index":1,display:"block"}),this.currentSlide=this.domPictures[t],this.cursor=t,this.selectedSlide=this.domPictures[t],this.domPictures.length>1?this.domPictures[t+1]?this.nextSlide=this.domPictures[t+1]:this.nextSlide=this.domPictures[0]:this.nextSlide=null,this.domPictures[e].css({"transition-duration":"0.3s"}),this.domPictures[e].removeClass("fade-in").addClass("fade-out"),setTimeout(function(){this.domPictures[e].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.currentSlide.css({"z-index":2}),this.nextSlide&&this.nextSlide.css({"z-index":1,display:"block"})}.bind(this),310)},removePictures:function(){this.domPictures=[],this.preloadPictures=[],this.$container.empty(),this.$preloadContainer.empty()},removePicture:function(i){if(!i)return;let t=this.pictures.findIndex(function(e){return e.uuid===i});if(this.domPictures[t]===this.currentSlide&&this.domPictures.length!==1&&this.selectedSlide!==this.domPictures[t]){let e=this.crossfade*1e3+this.delay*1e3+50;e=this.lastSlideshowAnimationStart?Math.abs(e-(new Date().getTime()-this.lastSlideshowAnimationStart.getTime())):e,setTimeout(function(){this.cursor&&(this.cursor-=1);let r=this.pictures.findIndex(function(n){return n.uuid===i});this.domPictures[r].remove(),this.domPictures.splice(r,1),this.pictures.splice(r,1)}.bind(this),e)}else{if(this.domPictures[t]===this.nextSlide&&this.domPictures.length!==1&&(this.domPictures[t+1]?(this.domPictures[t+1].css({"z-index":1,display:"block"}),this.nextSlide=this.domPictures[t+1]):(this.domPictures[0].css({"z-index":1,display:"block"}),this.nextSlide=this.domPictures[0])),this.selectedSlide===this.domPictures[t]&&this.nextSlide){let e=this.domPictures.findIndex(function(s){return s===this.nextSlide}.bind(this));this.currentSlide=this.domPictures[e],this.cursor=e,this.selectedSlide=null,this.currentSlide.css({"z-index":2}),this.domPictures.length>2?this.domPictures[this.cursor+1]?this.nextSlide=this.domPictures[this.cursor+1]:this.nextSlide=this.domPictures[0]:this.nextSlide=null,this.nextSlide&&this.nextSlide.css({"z-index":1,display:"block"}),setTimeout(function(){this.startAnimationLoop()}.bind(this),0)}this.domPictures[t].remove(),this.domPictures.splice(t,1),this.pictures.splice(t,1)}},getThumbnailUrl:function(i){return i?o.useLambdaUrl(i)?o.getThumbnailUrl(i):i.thumbUrl:""},getPictureUrl:function(i){return o.useLambdaUrl(i)||o.useLambdaUrlOldProjects(i,"background")?o.getLambdaUrl(i):i.url},getPoorUrl:function(i){return o.useLqipUrl(i)?o.getLqipUrl(i):i.poorUrl},loadPictures:function(){this.pictures.forEach(function(i,t){this.domPictures[t]=(0,h.default)("<div>").addClass(`slideshow-image fade-in${o.useLqipUrl(i)?" lqip":""}`).css({"z-index":t===0?2:t===1?1:0,display:t===0||t===1?"block":"none","background-image":`url("${this.getPoorUrl(i)}")`,"transition-property":"opacity","transition-duration":this.crossfade+"s","transition-timing-function":"linear"}).appendTo(this.$container)}.bind(this)),this.loadFullSizePictures()},loadFullSizePictures:function(){this.preloadPictures=[],this.pictures.forEach(function(e,s){let r=this.getPictureUrl(e);this.preloadPictures[s]=(0,h.default)("<img>").addClass("preload-slideshow-image").appendTo(this.$preloadContainer).attr("src",r).on("load",i.bind(this,r,s)).on("error",t.bind(this,s))}.bind(this));function i(e,s){this.domPictures[s].css({"background-image":`url("${e}")`}),this.domPictures[s].removeClass("lqip"),this.preloadPictures[s].remove(),s===0&&this.trigger("loaded")}function t(e,s){this.domPictures[e].removeClass("lqip"),e===0&&this.trigger("loaded"),RM.screenshot||this.preloadPictures[e].remove()}},loadFullSizePicture:function(i){let t=(0,h.default)("<img>").addClass("preload-slideshow-image").appendTo(this.$preloadContainer).attr("src",this.getPictureUrl(i)).on("load",e.bind(this)).on("error",s.bind(this));function e(r){let n=l.default.findIndex(this.pictures,function(m){return i.uuid===m.uuid});this.domPictures[n].css({"background-image":`url("${this.getPictureUrl(i)}")`}),this.domPictures[n].removeClass("lqip"),t.remove(),this.trigger("loaded")}function s(r){let n=l.default.findIndex(this.pictures,function(m){return i.uuid===m.uuid});this.domPictures[n].removeClass("lqip"),t.remove(),this.trigger("loaded"),RM.screenshot||t.remove()}},initCursor:function(){this.cursor=0,this.currentSlide=this.domPictures[this.cursor],this.domPictures[this.cursor+1]&&(this.nextSlide=this.domPictures[this.cursor+1])},startAnimationLoop:function(){this.isAnimationRunning=!0,this.selectedSlide=null,this.currentSlide||this.initCursor(),this.slideshowLouncher=setTimeout(function i(){this.fadeAnimation(),this.slideshowLouncher=setTimeout(i.bind(this),this.delay*1e3)}.bind(this),this.delay*1e3)},fadeAnimation:function(){this.lastSlideshowAnimationStart=new Date;let i;this.domPictures.length<2||((!this.currentSlide||!this.nextSlide)&&this.initCursor(),this.cursor+1<this.domPictures.length?(this.currentSlide.removeClass("fade-in").addClass("fade-out"),i=this.cursor,setTimeout(function(){this.domPictures[i]&&this.domPictures[i].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.domPictures[i+1].css({"z-index":2}),this.domPictures[i+2]?this.domPictures[i+2].css({"z-index":1,display:"block"}):this.domPictures[0].css({"z-index":1,display:"block"})}.bind(this),this.crossfade*1e3),this.cursor+=1,this.currentSlide=this.domPictures[this.cursor],this.domPictures[this.cursor+1]?this.nextSlide=this.domPictures[this.cursor+1]:this.nextSlide=this.domPictures[0]):(this.currentSlide.removeClass("fade-in").addClass("fade-out"),i=this.cursor,setTimeout(function(){this.domPictures[i]&&this.domPictures[i].css({"z-index":0,"transition-duration":"0s",display:"none"}).removeClass("fade-out").addClass("fade-in").css({"transition-duration":this.crossfade+"s"}),this.domPictures[0].css({"z-index":2}),this.domPictures[1].css({"z-index":1,display:"block"})}.bind(this),this.crossfade*1e3),this.cursor=0,this.currentSlide=this.domPictures[this.cursor],this.nextSlide=this.domPictures[this.cursor+1]))},stopAnimationLoop:function(i){this.isAnimationRunning=!1,clearTimeout(this.slideshowLouncher),i&&typeof i=="function"&&i()},destroy:function(){this.rendered=!1,this.stopAnimationLoop(this.removePictures.bind(this))}}),W=O});var v,a,c,T=f(()=>{"use strict";v=d(p()),a=d(I());E();B();N();$();c=class extends v.default.View{constructor(e){super(e);u(this,"rendered",!1);u(this,"thumbnailMode");u(this,"propsModel");this.thumbnailMode=e?.attributes?.thumbnailMode,this.propsModel=new v.default.Model({playing:!1}),this.model.on("change:video",this.updateVideoState.bind(this))}render(){if(this.rendered)return this;let e=this.getVideo();return this.updateVideoState(),S(e)?(P({component:()=>g(b,{thumbnailMode:this.thumbnailMode,onPlay:this.onPlay.bind(this),onLoaded:this.onLoaded.bind(this)}),domElement:this.$el.get(0),model:this.propsModel,onDestroy:()=>{let s=this.$el.get(0);a.default.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}}),this.$el.css("height","100%"),this.rendered=!0,this):(P({component:()=>g(b,{thumbnailMode:!0}),domElement:this.$el.get(0),model:this.propsModel,onDestroy:()=>{let s=this.$el.get(0);a.default.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}}),this.onLoaded(),this)}getVideo(e){let s=(e||this.model).get("video");if(!s)throw new Error("Video data is not exists");return s}updateVideoState(e){let s=this.getVideo(e);if(this.$el.css("opacity",(e||this.model).get("video").opacity/100),!S(s)){this.propsModel.set({thumbnailUrl:s.thumbnail_url,loop:s.loop});return}let r=U(s);r&&this.propsModel.set({thumbnailUrl:r.thumbnail,videoUrl:r.video,loop:s.loop})}onPlay(){this.trigger("playStarted")}onLoaded(){this.trigger("loaded")}start(){return this.propsModel.set({playing:!0}),this}stop(){return this.propsModel.set({playing:!1}),this}show(){this.rendered||this.render();let e=this.model.get("video").opacity/100;this.$el.stop().animate({opacity:e})}hide(){this.$el.stop().animate({opacity:0},{queue:!1})}destroy(){this.$el.get(0)&&a.default.unmountComponentAtNode(this.$el.get(0))}}});var z,x,R,_,oi,F=f(()=>{z=d(C()),x=d(w()),R=d(p());V();q();A();L();T();_=y.extend({render:function(){return this.rendered=!0,this.template=k["template-viewer-widget-background"],this.setElement(this.template({data:this})),this.$el.prependTo(this.page.$fixedBgContainer),this.$picture=this.$(".picture-background"),this.$video=this.$(".video-background"),this.$videoContainer=this.$(".video-container"),this.$slideshow=this.$(".slideshow-container"),this.$slideshowPreload=this.$(".slideshow-preload"),this.picture&&this.selectedType==="picture"?this.renderPicture():!x.default.isEmpty(this.video)&&this.selectedType==="video"?this.renderVideo():this.slideshow&&this.selectedType==="slideshow"?this.renderSlideshow():this.widgetIsLoaded(),this},start:function(){return this.started=!0,this.selectedType==="video"&&!RM.screenshot&&this.rendered&&this.videoWidget&&!this.destroyed&&this.videoWidget.start(),this.selectedType==="slideshow"&&!RM.screenshot&&this.rendered&&!this.destroyed&&this.slideshowWidget&&!this.slideshowWidget.isAnimationRunning&&this.slideshowWidget.startAnimationLoop(),this},stop:function(){return this.started=!1,this.selectedType==="video"&&!RM.screenshot&&this.rendered&&this.videoWidget&&!this.destroyed&&this.videoWidget.stop(),this.selectedType==="slideshow"&&!RM.screenshot&&this.rendered&&!this.destroyed&&this.slideshowWidget&&this.slideshowWidget.isAnimationRunning&&this.slideshowWidget.stopAnimationLoop(),this},destroy:function(){return this.selectedType==="video"&&(this.videoWidget&&this.videoWidget.destroy(),this.videoWidget=null),this.selectedType==="slideshow"&&(this.slideshowWidget&&this.slideshowWidget.destroy(),this.slideshowWidget=null),y.prototype.destroy.apply(this,arguments)},hasVideoBG:function(){return!!(!RM.screenshot&&this.selectedType==="video"&&this.video&&this.video.url)},renderPicture:function(){if(!this.picture){this.widgetIsLoaded();return}let i=o.useLambdaUrl(this.picture)||o.useLambdaUrlOldProjects(this.picture,"background")?o.getLambdaUrl(this.picture):this.picture.finalUrl||this.picture.effectUrl||this.picture.unscaledOptimizedUrl||this.picture.url;(0,z.default)("<img/>").on("load",x.default.bind(function(){this.$picture.css({"background-image":"url("+i+")"}),RM.screenshot?setTimeout(this.widgetIsLoaded,200):this.widgetIsLoaded()},this)).on("error",this.widgetIsLoaded).attr("src",i)},renderSlideshow:function(){this.slideshowWidget=new W({data:this.slideshow,container:this.$slideshow,preloadContainer:this.$slideshowPreload,name:this.page.cid}),RM.screenshot?(this.slideshowWidget.render(),this.slideshowWidget.on("loaded",function(){this.widgetIsLoaded()}.bind(this))):(this.slideshowWidget.render(!this.page.isCurrent()),this.widgetIsLoaded())},renderVideo:function(){this.videoWidget=new c({el:this.$videoContainer.get(0),model:new R.default.Model({video:this.video}),attributes:{thumbnailMode:window.RM.screenshot}}),this.videoWidget.on("loaded",()=>{this.widgetIsLoaded()}),this.videoWidget.on("playStarted",()=>{this.trigger("videoBGStarted")}),this.videoWidget.render()}}),oi=_});export{W as a,A as b,c,T as d,oi as e,F as f};