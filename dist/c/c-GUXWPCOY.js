import{a as A,b as st,c as L,d as ot}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-ODZXD24J.js";import{a as S,b as et}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-OD76D3UK.js";import{a as F,b as it}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-3NANNYNO.js";import{a as x,b as tt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-WO7XZULW.js";import{a as v,b as J}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-5IBIYDPK.js";import{a as R,b as Q}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XGVPUU7T.js";import{c as w,d as U}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-ESZBX7KW.js";import{a as K}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-234U5CBJ.js";import{a as E}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7E6CHA26.js";import{b as B}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-6ZBEBUM2.js";import{o as X}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-65MPED7X.js";import{b as q}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-B7IF4UMF.js";import{a as O,b as Y}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2DOLZMQC.js";import{a as y,d as $}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var P,I=y(()=>{"use strict";J();P={"template-common-hotspot-widget":v`

    <div class="common-hotspot">
      <div class="pin"></div>
    </div>

`,"template-common-hotspot-widget-mobile-wrapper":v`

    <div class="hotspot-fullscreen-wrapper invisible">
        <div class="center-table">
            <div class="center-cell">

            </div>
        </div>
    </div>
    
`,"template-common-hotspot-widget-mobile-wrapper-for-constructor":v`
  
  <div class="hotspot-fullscreen-wrapper invisible"></div>

  `}});var H=y(()=>{"use strict"});var k,ut,M,gt,G=y(()=>{"use strict";H();k={w:30,h:30,x:"center",pinPosRelativeTip:"above",pin_type:"icon",bg_color:"ff8888",bg_opacity:1,borders:0,color:"000000",opacity:1,tip_x:null,tip_y:null,tip_w:240,tip_h:120,tip_show_on:"click","tip_background-color":"ffffff","tip_background-color-opacity":100,"tip_border-radius":8,"tip_box-shadow":!0,"tip_box-fullscreen":!1,tipBorder:0,tipBorderColor:"000000",tipBorderOpacity:100,wids:[],flags:{tipFreePosition:!0}},ut=280,M=15,gt={WIDTH_OF_BLOCK_WITHOUT_WIDGET:k.tip_w,HEIGHT_OF_BLOCK_WITHOUT_WIDGET:k.tip_h,MIN_WORKSPACE_SIZE_TO_DISPLAY_CONTROL_VERTICALLY:365}});var V,z,N,rt,j,Z=y(()=>{"use strict";V=$(E()),z=$(K()),N=$(B());I();U();G();rt=z.default.View.extend({initialize:function(t){t&&(N.default.bindAll(this),this.block=t.block,this.model=t.model,this.$container=t.$container,this.environment=t.environment,this.mag=t.mag,this.template=P["template-common-hotspot-widget"],this.render())},render:function(){this.setElement((0,V.default)(this.template({data:this.model}))),this.environment==="viewer"&&(this.apply_tip_container_size({width:this.model.tip_w,height:this.model.tip_h}),this.apply_tip_position(this.model)),this.$el.appendTo(this.$container)},apply_tip_container_size:function(t){t&&this.$(".tip").css(t)},apply_tip_bg_color:function(t){this.$(".blocks-wrapper").css("background-color",w.getRGBA(t["tip_background-color"],t["tip_background-color-opacity"]/100))},apply_tip_border_radius:function(t){this.$(".blocks-wrapper").add(this.$(".tip")).css("border-radius",t["tip_border-radius"]+"px")},applyTipBorder:function(t){this.$(".border-wrapper").css("border",`${t.tipBorder||k.tipBorder}px solid ${w.getRGBA(t.tipBorderColor||k.tipBorderColor,(t.tipBorderOpacity||k.tipBorderOpacity)/100)}`)},apply_tip_box_shadow:function(t){this.$(".tip").toggleClass("box-shadow",!!t["tip_box-shadow"])},apply_tip_position:function(t){if(t.flags?.tipFreePosition||!1){let i=this.$(".tip"),e={};return t.fixed_position==="sw"||t.fixed_position==="s"?(e.bottom=t.tip_y-t.y,e.left=t.tip_x-t.x,e.top="",e.right=""):t.fixed_position==="se"?(e.bottom=t.tip_y-t.y,e.right=t.tip_x-t.x,e.top="",e.left=""):t.fixed_position==="e"||t.fixed_position==="ne"?(e.top=t.tip_y-t.y,e.right=t.tip_x-t.x,e.left="",e.bottom=""):(e.top=t.tip_y-t.y,e.left=t.tip_x-t.x,e.right="",e.bottom=""),i.css(e),e}else{let i=this.$(".tip"),e=t.tip_pos,o=t.tip_w,r=t.tip_h||120,n=t.w,h=t.h,d="",a="",m=M,_;return e==="top"?(d=-(m+r),a=n/2-o/2):e==="right"?(d=h/2-r/2,a=n+m):e==="bottom"?(d=h+m,a=n/2-o/2):e==="left"&&(d=h/2-r/2,a=-(m+o)),_={top:d,left:a},i.css(_),_}},destroy:function(){this.remove()}}),j=rt});var p,c,nt,Ut,pt=y(()=>{p=$(E()),c=$(B());tt();U();I();et();Z();Y();it();st();ot();Q();X();q();nt=x.extend(S.prototype).extend({DO_NOT_WAIT_FOR_PRELOAD:!0,PHONE_TIP_WIDTH_FOR_FULLSCREEN:280,MOUSE_LEAVE_TIMEOUT:100,EDGE_GAP:16,TIP_GAP_FOR_WIDGET_WITHOUT_FREE_POSITION:15,events:{"click .pin":"onPinClick",mouseenter:"onMouseenter",mouseleave:"onMouseleave"},render:function(){this.updateCurrentWidgetData();let t;if(this.makeBox("widget-hotspot"),this.$pinIcons={default:null,onClick:null},this.rendered=!0,this.phoneTipWrapperTemplate=P["template-common-hotspot-widget-mobile-wrapper"],this.isPreview=!!(RM.constructorRouter&&RM.constructorRouter.preview),this.useFreePosition=this.flags?.tipFreePosition||!1,t={model:this,$container:this.$el,environment:"viewer",mag:this.page&&this.page.mag,block:null},this.hotspotWidget=new j(t),this.$pin=this.$(".pin").addClass("viewer"),this.cursorStyle&&this.$pin.css("cursor",this.cursorStyle),this.started&&this.renderTip(),this.widget.pinPosRelativeTip==="above"&&this.$pin.css("z-index",3),this.widget.pin_type==="icon"){if(this.$el.addClass("icon"),!this.widget.rasterUrl&&!this.widget.b64url)return this.widgetIsLoaded(),this;let i=(0,p.default)("<img>");i.on("load",c.default.bind(function(){this.$pin.append(i),this.$pinIcons.default=i,this.widgetIsLoaded()},this)).on("error",this.widgetIsLoaded),i.attr("src",this.widget.raster3xUrl||this.widget.raster2xUrl||this.widget.rasterUrl||this.widget.b64url||""),i.addClass("contain")}else this.renderPinShape(),this.widgetIsLoaded();if(this.checkShouldRenderOnClickPinIcon())if((this.widget.clickPinType||this.widget.pin_type)==="icon"){let e={};this.widget.clickRaster3xUrl||this.widget.clickRaster2xUrl||this.widget.clickRasterUrl||this.widget.clickB64url?e={raster3xUrl:this.widget.clickRaster3xUrl,raster2xUrl:this.widget.clickRaster2xUrl,rasterUrl:this.widget.clickRasterUrl,b64url:this.widget.clickB64url}:e={raster3xUrl:this.widget.raster3xUrl,raster2xUrl:this.widget.raster2xUrl,rasterUrl:this.widget.rasterUrl,b64url:this.widget.b64url};let o=(0,p.default)("<img>");o.css("display","none"),o.addClass("contain"),o.on("load",c.default.bind(function(){this.$pin.append(o),this.$pinIcons.onClick=o},this)),o.attr("src",e.raster3xUrl||e.raster2xUrl||e.rasterUrl||e.b64url||"")}else this.renderPinShapeForOnClick();else return;return this},deleteUnusedDataFromContext:function(){delete this.pin_type,delete this.raster3xUrl,delete this.raster2xUrl,delete this.rasterUrl,delete this.b64url,delete this.clickPinType,delete this.clickRaster3xUrl,delete this.clickRaster2xUrl,delete this.clickRasterUrl,delete this.clickB64url,delete this.tipBorder,delete this.tipBorderColor,delete this.tipBorderOpacity,delete this.pinPosRelativeTip},updateCurrentWidgetData:function(){this.deleteUnusedDataFromContext();let t=this.page?.mag?.viewport||"default",s=t!=="default"?this.currentWidgetData[`viewport_${t}`]:void 0,i=s?{...this.currentWidgetData,...s}:this.currentWidgetData;this.widget=i},checkShouldRenderOnClickPinIcon:function(){let t={pinType:this.widget.clickPinType||this.widget.pin_type,raster3xUrl:this.widget.clickRaster3xUrl||this.widget.raster3xUrl,raster2xUrl:this.widget.clickRaster2xUrl||this.widget.raster2xUrl,rasterUrl:this.widget.clickRasterUrl||this.widget.rasterUrl,b64url:this.widget.clickB64url||this.widget.b64url,bg_color:this.clickBgColor||this.bg_color,bg_opacity:this.clickBgOpacity||this.bg_opacity,borders:this.clickBorders||this.borders,color:this.clickColor||this.color,opacity:this.clickOpacity||this.opacity};return t.pinType===this.widget.pin_type&&t.raster3xUrl===this.widget.raster3xUrl&&t.raster2xUrl===this.widget.raster2xUrl&&t.rasterUrl===this.widget.rasterUrl&&t.b64url===this.widget.b64url&&t.clickBgColor===this.bg_color&&t.clickBgOpacity===this.bg_opacity&&t.clickBorders===this.borders&&t.clickColor===this.color&&t.clickOpacity===this.opacity?!1:!this.isHoverable()},togglePinIcon:function(){let t=!this.isHoverable()&&this.isTipVisible===!0;this.checkShouldRenderOnClickPinIcon()&&(t?this.$pinIcons.onClick&&(this.$pinIcons.onClick.css("display","block"),this.$pinIcons.default&&this.$pinIcons.default.css("display","none")):this.$pinIcons.default&&(this.$pinIcons.default.css("display","block"),this.$pinIcons.onClick&&this.$pinIcons.onClick.css("display","none")))},renderPinShape:function(){let t=new Backbone.Model(this);t.id=this._id;let s=(0,p.default)(this.generateShapeSVG("viewer",t,this.w,this.h,this.widget.pin_type));this.$pinIcons.default=s,this.$pin.append(s)},renderPinShapeForOnClick:function(){let t=new Backbone.Model(this);t.id=this._id;let s={bg_color:this.clickBgColor||this.bg_color,bg_opacity:this.clickBgOpacity||this.bg_opacity,borders:this.clickBorders||this.borders,color:this.clickColor||this.color,opacity:this.clickOpacity||this.opacity,pin_type:this.widget.clickPinType||this.widget.pin_type,addToCaller:"click"},i=(0,p.default)(this.generateShapeSVG("viewer",t,this.w,this.h,s.pin_type,s));i.css("display","none"),this.$pinIcons.onClick=i,this.$pin.append(i)},renderTip:function(){let t=this.page?.mag?.viewport||"default";if(!this.isTipRendered){if(this.$tip=(0,p.default)('<div class="tip viewer invisible"></div>'),this.$tip.toggleClass("box-shadow",this["tip_box-shadow"]),this.$tip.css({"border-radius":this["tip_border-radius"]}),this.$blocksWrapper=(0,p.default)('<div class="blocks-wrapper"></div>'),this.$blocksWrapper.appendTo(this.$tip),this.$blocksWrapper.css({"background-color":w.getRGBA(this["tip_background-color"],this["tip_background-color-opacity"]/100),"border-radius":this["tip_border-radius"]}),this.widget.tipBorder&&this.widget.tipBorderColor&&this.widget.tipBorderOpacity&&(this.$borderWrapper=(0,p.default)('<div class="border-wrapper"></div>'),this.$borderWrapper.appendTo(this.$tip),this.$borderWrapper.css({border:`${this.widget.tipBorder}px solid ${w.getRGBA(this.widget.tipBorderColor,this.widget.tipBorderOpacity/100)}`,position:"absolute",width:"100%",height:"100%","box-sizing":"border-box",top:"0",left:"0","border-radius":this["tip_border-radius"]})),this.$(".common-hotspot").append(this.$tip),this.pictureData=c.default.findWhere(this.wids||[],{type:"picture"}),this.textData=c.default.findWhere(this.wids||[],{type:"text"}),t!=="default"&&(this.pictureData&&(this.pictureData={...this.pictureData,...this.pictureData[`viewport_${t}`]}),this.textData&&this.textData[`viewport_${t}`])){let s=this.textData[`viewport_${t}`],i={},e=["blocks"];for(let o in s)s.hasOwnProperty(o)&&(e.includes(o)||(i[o]=s[o]));this.textData={...this.textData,...i}}if(this.blocks=[],this.hasPictureWidget=!!(this.pictureData&&!this.pictureData.hidden),this.hasTextWidget=!!(this.textData&&!this.textData.hidden),this.hasPictureWidget&&(this.pictureData.insideHotspot=!0,this.pictureData.useFreePosition=this.useFreePosition,this.pictureWidget=new F(this.pictureData,this.page,this.$blocksWrapper),this.pictureWidget.isValid()?(this.pictureData.w=Math.min(this.tip_w,this.pictureData.w),this.blocks.push(this.pictureWidget),this.pictureWidget.render()):(this.tip_h-=this.pictureWidget.h||0,this.textData&&(this.textData.y=0),this.pictureWidget=null,this.hasPictureWidget=!1)),this.hasTextWidget&&(this.textData.insideHotspot=!0,this.textData.useFreePosition=this.useFreePosition,this.textData.hasGlobalParent=this.is_global,this.textData.version===3?this.textWidget=new L({...this.textData,is_above:this.is_above,is_global:this.is_global},this.page,this.$blocksWrapper):this.textWidget=new A(this.textData,this.page,this.$blocksWrapper),this.textWidget.w=Math.min(this.tip_w,this.textWidget.w),this.blocks.push(this.textWidget),this.textWidget.render()),!this.hasPictureWidget&&!this.hasTextWidget){this.blocks=[],this.$tip.remove();return}this.$closeButton=(0,p.default)('<div class="hotspot-phone-close"></div>'),this.$tip.append(this.$closeButton),this.isTipRendered=!0}},updatePage:function(t){x.prototype.updatePage.apply(this,arguments),this.textWidget&&this.textWidget.updatePage(t)},start:function(){return x.prototype.start.call(this),this.rendered&&!this.destroyed&&this.renderTip(),this},stop:function(){return x.prototype.stop.call(this),this.isTipVisible&&this.hideTip(),this},applyTipPosition:function(){if(this.useFreePosition)this.hotspotWidget.apply_tip_position({y:this.y,x:this.x,tip_y:this.tip_y,tip_x:this.tip_x,flags:this.flags,fixed_position:this.fixed_position});else{let W=function(u){let l,f,g,b;switch(u){case"top":l=i.top-o.h/2-n-r.h,g=i.bottom+o.h/2+n,b=i.left-r.w/2,f=i.right-r.w/2;break;case"right":l=i.top-r.h/2,g=i.bottom-r.h/2,b=i.left+o.w/2+n,f=i.right-o.w/2-n-r.w;break;case"bottom":l=i.bottom+o.h/2+n,g=i.bottom-o.h/2-n-r.h,b=i.left-r.w/2,f=i.right-r.w/2;break;case"left":l=i.top-r.h/2,g=i.bottom-r.h/2,b=i.left-o.w/2-n-r.w,f=i.right+o.w/2+n;break}return{top:l,left:b,bottom:g,right:f}},D=function(u){let l=u,f=-1/0,g,b=!1;return c.default.each(["top","right","bottom","left"],function(T){if(b)return;let C=W(T);g=c.default.min(C),T===u&&C[T]>0?(l=T,b=!0):g>f&&C[T]>=0&&(f=g,l=T)}),l};var t=W,s=D;let i=this.calcDistsToPageVisibleBounds(),e,o={w:this.w,h:this.h},r={w:this.$tip.width(),h:this.$tip.height()},n=this.TIP_GAP_FOR_WIDGET_WITHOUT_FREE_POSITION,h=this.tip_pos,d=c.default.pick(this,"w","h","tip_w","tip_h","tip_pos"),a,m=!1,_=!1;h=D(this.tip_pos),d.tip_pos=h,a=this.hotspotWidget.apply_tip_position(d),e=W(h),c.default.each(e,function(u,l){if(u<0)switch(l){case"top":a.top-=u-this.EDGE_GAP,m=!0;break;case"bottom":m||(a.top+=u-this.EDGE_GAP);break;case"left":a.left-=u-this.EDGE_GAP,_=!0;break;case"right":_||(a.left+=u-this.EDGE_GAP);break}}.bind(this)),this.$tip.css(a)}},adjustPictureSize:function(){let t=this.tip_w/this.PHONE_TIP_WIDTH_FOR_FULLSCREEN,s;this.pictureWidget&&(this.isPhone()?s={width:this.PHONE_TIP_WIDTH_FOR_FULLSCREEN,height:this.pictureData.h/t}:s={width:this.pictureData.w,height:this.pictureData.h},this.pictureWidget.$el.css(s))},onPinClick:function(){this.isHoverable()||(this.isTipVisible?this.hideTip():this.isTipRendered&&this.showTip(),RM.analytics&&this.isTipVisible&&RM.analytics.sendEvent("rm_hotspot_click",this._id))},onMouseenter:function(){!this.isHoverable()||!this.isTipRendered||(clearTimeout(this.mouseLeaveTimeout),this.isTipVisible||this.showTip(),RM.analytics&&RM.analytics.sendEvent("rm_hotspot_hover",this._id))},onMouseleave:function(){this.isHoverable()&&(clearTimeout(this.mouseLeaveTimeout),this.mouseLeaveTimeout=setTimeout(function(){this.hideTip()}.bind(this),this.MOUSE_LEAVE_TIMEOUT))},swapBlocks:function(t,s){let i=(0,p.default)("<span />").css({display:"none"});i.insertBefore(t),t.insertAfter(s),s.insertAfter(i),i.remove()},bringToTopZ:function(){let t=this.is_above?this.mag.aboveGlobalWidgets:this.page.widgets,s=!!this.fixed_position,i=this.$el.css("z-index"),e=null,o=t.reduce((r,n)=>{if(s&&n.fixed_position||!s&&!n.fixed_position){let h=n?.$el&&!Number.isNaN(n.$el.css("z-index"))?n.$el.css("z-index"):-1/0;if(r<h&&n.type!=="background")return e=n,h}return r},i);if(e){let r=this.$el,n=e.$el;this.animationObj&&(r=this.animationObj.getAnimationContainer(),this.animationObj.resetTimeout&&clearTimeout(this.animationObj.resetTimeout),this.animationObj.savedAnimationContainerZIndex||(this.animationObj.savedAnimationContainerZIndex=r.css("z-index")),r.css("z-index",o)),e.animationObj&&(n=e.animationObj.getAnimationContainer()),r.nextAll().is(n)&&(this.$tempMaxZIndexElement=n,this.swapBlocks(r,n))}this.$el.css("z-index",o)},backToNormalZ:function(){if(this.$tempMaxZIndexElement){let t=this.$el;this.animationObj&&this.animationObj.savedAnimationContainerZIndex&&(t=this.animationObj.getAnimationContainer(),this.animationObj.resetTimeout&&clearTimeout(this.animationObj.resetTimeout),this.animationObj.resetTimeout=setTimeout(()=>{this.animationObj&&this.animationObj.savedAnimationContainerZIndex&&(t.css("z-index",this.animationObj.savedAnimationContainerZIndex||this.z),delete this.animationObj.savedAnimationContainerZIndex),delete this.animationObj.resetTimeout},200)),this.swapBlocks(t,this.$tempMaxZIndexElement),this.$tempMaxZIndexElement=null}this.$el.css("z-index",this.z)},showTip:function(){if(!this.isTipRendered)return;let t=this["tip_box-fullscreen"]!==void 0?this["tip_box-fullscreen"]:this.isPhone();if(this.isPhone()&&(t||!this.useFreePosition)){this.adjustPictureSize(),this.$phoneTipWrapper=this.$phoneTipWrapper||(0,p.default)(this.phoneTipWrapperTemplate()),this.$phoneTipWrapper.toggleClass("preview",this.isPreview),this.$phoneTipWrapper.detach().appendTo(this.isPreview?".mag-pages-container":"body"),this.$phoneTipWrapper.on("touchstart",this.onTipTouchStart),this.$phoneTipWrapper.on("touchmove",this.onTipTouchMove),this.$tipParent=this.$tip.parent(),this.$tipContainer=this.$phoneTipWrapper.find(".center-cell"),this.$tip.detach().appendTo(this.$tipContainer);let s=this.mag.getScale(this.page.pageViewport);this.$tip.css({transform:`scale(${s})`});let i=R.mapElementToViewport(this.$tip[0],s,1);this.$tipContainer.css({height:i.height}),c.default.defer(function(){this.$phoneTipWrapper.removeClass("invisible")}.bind(this)),this.$phoneTipWrapper.on("click",function(e){let o=(0,p.default)(e.target).closest("a");if(!o)return;let r=o.hasClass("external-link"),n=o.hasClass("close-tip-on-click"),h=o.hasClass("current"),d=this.$tipContainer.is((0,p.default)(e.target));if(r||e.preventDefault(),n||h||d){this.hideTip(),this.$phoneTipWrapper.off();return}}.bind(this)),this.$closeButton.on("click",this.onCloseButtonClick)}else this.hotspotWidget.apply_tip_container_size({width:this.tip_w,height:this.tip_h}),this.applyTipPosition(),this.$tip.removeClass("invisible"),this.bringToTopZ(),this.page.mag.$container.on("mousedown touchstart",this.onGlobalMouseDown),this.isHoverable()||(0,p.default)("body").on("keydown",this.onBodyKeyDown);this.listenTo(this.page.mag,"change:viewport",this.onMagViewportBeforeChange),this.blocks?.forEach(s=>{s?.$el.on("click",this.onTipLinkClick)}),this.isTipVisible=!0,this.togglePinIcon()},hideTip:function(){if(!this.isTipVisible)return;let t=this["tip_box-fullscreen"]!==void 0?this["tip_box-fullscreen"]:this.isPhone();this.isTipVisible=!1,this.togglePinIcon(),clearTimeout(this.mouseLeaveTimeout),this.isPhone()&&(t||t===void 0||!this.useFreePosition)?(this.$phoneTipWrapper.addClass("invisible"),this.$phoneTipWrapper.off("touchstart",this.onTipTouchStart),this.$phoneTipWrapper.off("touchmove",this.onTipTouchMove),c.default.delay(function(){this.$tip.detach().appendTo(this.$tipParent),this.$phoneTipWrapper&&this.$phoneTipWrapper.detach()}.bind(this),200)):(this.$tip.addClass("invisible"),this.backToNormalZ(),(0,p.default)("body").off("keydown",this.onBodyKeyDown)),this.stopListening(this.page.mag,"change:viewport"),this.blocks?.forEach(s=>{s?.$el.off("click",this.onTipLinkClick)})},onTipLinkClick:function(t){let s=(0,p.default)(t.currentTarget),i=s.parent().hasClass("close-tip-on-click"),e=s.hasClass("close-tip-on-click"),o=!!s.find(".close-tip-on-click")?.length;(i||e||o)&&this.hideTip()},onTipTouchStart:function(t){this.tipScrollY=t.originalEvent.touches.item(0).clientY},onTipTouchMove:function(t){t.stopPropagation();let s=(0,p.default)(t.currentTarget),i=this.tipScrollY-t.originalEvent.touches.item(0).clientY;(i<0&&s.scrollTop()<=0||i>0&&s.scrollTop()+s.height()>=s[0].scrollHeight)&&t.preventDefault(),this.tipScrollY=t.originalEvent.touches.item(0).clientY},onCloseButtonClick:function(){this.$closeButton.off("click",this.onCloseButtonClick),this.hideTip()},onMagViewportBeforeChange:function(){this.hideTip()},onGlobalMouseDown:function(t){let s=(0,p.default)(t.target),i=s.closest(".pin"),e=s.closest(".tip");i.is(this.$pin)||e.is(this.$tip)||(this.page.mag.$container.off("mousedown touchstart",this.onGlobalMouseDown),this.hideTip())},isPhone:function(){return O.isMobile()||this.isPreview&&this.page.mag.viewport==="phone_portrait"},isHoverable:function(){return this.tip_show_on==="hover"&&O.isDesktop()&&!this.isPhone()&&this.page.mag.viewport!=="tablet_portrait"},onBodyKeyDown:function(t){t.keyCode===p.default.keycodes.esc&&this.hideTip()},destroy:function(){return this.hotspotWidget&&this.hotspotWidget.destroy(),this.hotspotWidget=null,this.isTipRendered=!1,x.prototype.destroy.apply(this,arguments)}}),Ut=nt});export{H as a,P as b,I as c,k as d,ut as e,gt as f,G as g,j as h,Z as i,Ut as j,pt as k};
