import{a as C,b as B}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-WO7XZULW.js";import{a as D}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-CSKCUZTI.js";import{a as I,b as V}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7ZGGP2E5.js";import{a as T,b as j,c as v,d as H}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-ESZBX7KW.js";import{a as z}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-234U5CBJ.js";import{b as S,c as F}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XISRCAED.js";import{a as L}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7E6CHA26.js";import{b as P}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-6ZBEBUM2.js";import{a as E,d as y}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";function x(t,e){if(!t)return;let i=["allow-top-navigation","allow-top-navigation-by-user-activation","allow-modals","allow-popups","allow-popups-to-escape-sandbox"],n=["allow-scripts","allow-forms","allow-same-origin"],r=e&&Array.isArray(e)?e.filter(function(s){return!c.default.contains(i,s.toLowerCase())}):n;t.attr("sandbox",r.join(" "))}var d,M,c,R,f,a,g,A,k=E(()=>{"use strict";d=y(L()),M=y(z()),c=y(P());H();F();j();V();R=y(D()),f={},a={};a.findPlugin=function(t){let e=(0,R.getEmbedType)(t.code);return c.default.find(f,function(i,n){return n.toLowerCase()===e})};g=M.default.View.extend({embed_type:null,containerSelector:null,resizable:!0,proportional:!1,forceFrameSize:!1,initialize:function(t){this.block=t.block,this.widget=t.widget,c.default.bindAll(this),this.isInViewer=RM.viewerRouter||RM.constructorRouter&&RM.constructorRouter.preview},parse:function(t,e){return e(t)},sanitize:function(t){return(0,d.default)(t)},draw:function(t){t()}});a.instagramEmbedCallbacks=[];a.initInstagram=function(t){if(window.instgrm&&window.instgrm.Embeds&&c.default.isFunction(window.instgrm.Embeds.process))return instgrm.Embeds.process(),t();a.instagramEmbedCallbacks.push(t),a.instagramInitXhr&&a.instagramInitXhr.abort(),(0,d.default)('body > script[src^="//platform.instagram.com"]').remove(),a.instagramInitXhr=d.default.ajax({url:v.selectProtocol("//platform.instagram.com/en_US/embeds.js"),dataType:"script",cache:!0,success:function(){c.default.each(a.instagramEmbedCallbacks,function(e){c.default.isFunction(e)&&e()})}})};f.Instagram=g.extend({embed_type:"instagram",containerSelector:"iframe",resizable:!0,initialize:function(){g.prototype.initialize.apply(this,arguments),this.block&&c.default.extend(this.block.frame,{minwidth:164,minheight:264})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){let n,r,s,l,h,o=0,u=100,w=20,m=50,p=!1;e.html(t),a.initInstagram(function(){h=setInterval(function(){if(o++,n=e.children(this.containerSelector),r=n.height(),r||o>w){if(r||o>m){r&&RM.common.mode==="constructor"&&(s=n.width(),l=n.height()),clearInterval(h),i(s,l);return}if(p)return;p=!0,i()}}.bind(this),u)}.bind(this))},customResizeHandler:function(t){return t}});a.pinterestEmbedCallbacks=[];a.initPinterest=function(t){let e,i=0,n=20;if(c.default.isFunction(window.parsePinBtns))return t();a.pinterestEmbedCallbacks.push(t),(0,d.default)('body > script[src^="assets.pinterest.com/js/pinit.js"]').remove(),(0,d.default)("body").prepend((0,d.default)('<script defer src="//assets.pinterest.com/js/pinit.js" data-pin-build="parsePinBtns"><\/script>')),e=setInterval(function(){i++,(c.default.isFunction(window.parsePinBtns)||i>n)&&(clearInterval(e),t())},100)};f.Pinterest=g.extend({embed_type:"pinterest",containerSelector:"a",resizable:!1,forceFrameSize:!0,containerSelectors:{buttonPin:"span",buttonFollow:"span",embedPin:"span",embedUser:"span",embedBoard:"span"},parse:function(t,e){let i=t.match(/data-pin-do=\"(\S+)\"/);return c.default.isArray(i)&&i[1]&&(this.pinterestType=i[1],this.containerSelector=this.containerSelectors[this.pinterestType]||this.containerSelector),e&&e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){a.initPinterest(function(){let n,r,s,l,h,o=0,u=100,w=20,m=50,p=!1,b;e.html(t),this.pinterestType||this.parse(t[0].outerHTML),this.pinterestType&&e.addClass(this.pinterestType),window.parsePinBtns(e.get(0)),h=setInterval(function(){if(o++,n=e.children(this.containerSelector).filter(function(){return/PIN_\d+/.test(this.className)}),r=n.height(),r||o>w){if(r||o>m){r&&RM.common.mode==="constructor"&&(s=n.outerWidth(!0),l=n.outerHeight(!0),this.pinterestType=="buttonFollow"&&(b=n.children("i"),b.length&&(s+=(b.outerWidth()||1)-1))),clearInterval(h),i(s,l);return}if(p)return;p=!0,i()}}.bind(this),u)}.bind(this))}});f.FacebookVideo=g.extend({embed_type:"fbvideo",containerSelector:"iframe",resizable:!0,proportional:!0,forceFrameSize:!0,initialize:function(){g.prototype.initialize.apply(this,arguments),this.block&&c.default.extend(this.block.frame,{minwidth:220,minheight:124})},parse:function(t,e){return e(t.replace(/<script.*script>/gi,"").replace(/<div\s+id=(\'|\")fb-root(\'|\")><\/div>/gi,""))},draw:function(t,e,i){let n,r,s;e.html(t),T.initFacebookAPI(function(){window.FB.XFBML.parse(e.get(0),function(){n=e.find(this.containerSelector),r=n.width(),s=n.height(),i(r,s)}.bind(this))}.bind(this))}});a.readymagEmbedCallbacks=[];a.initReadymag=function(t){if(RM.common.isReadymagEmbedInited&&c.default.isFunction(window.RM_EMBED_parse))return t();a.readymagEmbedCallbacks.push(t),window.RM_EMBED_initAsync=function(){RM.common.isReadymagEmbedInited=!0,c.default.each(a.readymagEmbedCallbacks,function(e){c.default.isFunction(e)&&e()}),a.readymagEmbedCallbacks=[]},!a.readymagInitXhr&&((0,d.default)('body > script[src~="RM_EMBED_"]').remove(),a.readymagInitXhr=d.default.ajax({url:S.EMBED_SCRIPT_MAIN,dataType:"script"}))};f.Readymag=g.extend({embed_type:"readymag",containerSelector:"iframe",resizable:!0,initialize:function(){g.prototype.initialize.apply(this,arguments),this.block&&this.block.frame&&c.default.extend(this.block.frame,{minwidth:288,minheight:236,maxwidth:512,maxheight:383})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){e.html(t),a.initReadymag(function(){window.RM_EMBED_parse(function(){let n=e.find(this.containerSelector),r=n.width(),s=n.height();i(r+2,s)}.bind(this))}.bind(this))}});f.IFrame=g.extend({embed_type:"simple-iframe",containerSelector:"iframe",resizable:!0,parse:function(t,e){let i,n=/[\s\S]*?(\<iframe[\s\S]*?\>)[\s\S]*?(\<\/iframe\>)[\s\S]*?/i;return i=t.match(n),i&&i[1]&&i[2]?e(i[1]+i[2]):e(null)},sanitize:function(t){let e=(0,d.default)(t);if(!(typeof e=="object"&&e.length))return e;let i=(0,d.default)("<iframe></iframe>"),n=e.get(0).attributes,r=["allowtransparency","allowfullscreen","height","name","sandbox","scrolling","seamless","src","width","allow"],s;return(0,c.default)(n).each(function(l){if(typeof l=="object"&&l.specified&&c.default.contains(r,l.name.toLowerCase())){let h=l.name.toLowerCase(),o=l.value;h=="src"&&window.location.protocol=="https:"&&(o=o.replace(/^http(s?):\/\//i,"//")),h==="sandbox"&&(s=o.split(" ")),i.attr(h,o)}}),this.isInViewer||x(i,s),i},draw:function(t,e,i){let n=t[0].src;if(!n||!n.trim()){i();return}if(RM.screenshot&&I.getVideoProvider(n)){this.setPosterInsteadOfVideo(n,e,i);return}e.html(t);let r,s,l,h,o,u=0,w=100,m=20,p=50,b=!1;o=setInterval(function(){if(u++,r=e.children(this.containerSelector),s=r.height(),s||u>m){if(s||u>p){s&&RM.common.mode==="constructor"&&(l=r.width(),h=r.height()),clearInterval(o),i(l,h);return}if(b)return;b=!0,i()}}.bind(this),w)},setPosterInsteadOfVideo:function(t,e,i){let n=I.getVideoProvider(t),r="",s=(0,d.default)("<img/>");I.getEmbedData(t,function(h){I.getHighResVideoThumbnail({provider:n,thumbnail_url:h.thumbnail_url}).then(c.default.bind(function(o){r=o,l(r)},this))},function(){typeof i=="function"&&i()});function l(h){s[0].src=h,e.css({"background-color":"#000"}),s.css({position:"absolute",top:0,bottom:0,margin:"auto",width:"100%",height:"auto"}),e.append(s)}}});f.CodeInjection=g.extend({embed_type:"code-injection",containerSelector:"rm-code-injection",resizable:!0,HEAD_PASSTHROUGH_SELECTOR:"",parse:function(t,e){return e(t)},sanitize:function(t){return d.default.parseHTML(t,document,!0)},draw:function(t,e,i){let n=(0,d.default)(document).find("head"),r="<head>",s='<body style="padding:0; margin: 0; width: 100%; height: 100%; min-width: initial; min-height: auto;">',l='<!DOCTYPE html><html style="width: 100%; height: 100%; min-width: initial; min-height: auto;">',h=n.find(this.HEAD_PASSTHROUGH_SELECTOR),o=(0,d.default)('<iframe seamless style="width: 100%; height: 100%;"></iframe>'),u=(0,d.default)("<div></div>");if(!this.isInViewer||this.block&&this.block.model.get("use_iframe")||this.widget&&this.widget.use_iframe){this.isInViewer||x(o),h.each(function(){r+=this.outerHTML}),r+='<script src="https://unpkg.com/jquery@3.0.0/dist/jquery.min.js"><\/script>',r+="</head>",u.html(t),s+=u[0].innerHTML+"</body>";let w=l+r+s+"</html>";return e.html(o),o[0].contentWindow.document.open(),o[0].contentWindow.document.write(w),o[0].contentWindow.document.close(),i(o.width(),o.height())}else t=(0,d.default)(t),u.html(t),u.find("script").each(function(){let m=this,p;m.src&&m.text&&(p=document.createElement("script"),p.text=m.text,m.text="",(0,d.default)(p).insertAfter((0,d.default)(m)))}),import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-7SSKTVLN.js").then(({default:m})=>{m(e,u[0].innerHTML,{done:function(){return i(null,null)}})}),e.css({"font-family":"initial","font-weight":"initial"})}});f.Ecommerce=f.CodeInjection.extend({embed_type:"ecommerce"});f.Gdpr=f.CodeInjection.extend({embed_type:"gdpr"});f.Video=f.CodeInjection.extend({embed_type:"html5-video"});A=a});var _,X,Y,O=E(()=>{B();_=y(P());k();X=C.extend({render:function(){this.makeBox("widget-iframe"),this.rendered=!0;let t=this.getPluginClass();return t?(this.plugin=new t({widget:this}),this.$el.addClass(this.plugin.embed_type),this.started?this.drawPlugin():(this.contentCleared=!0,!RM.screenshot&&!this.drawInProgress&&this.widgetIsLoaded()),this.trigger("rendered"),this):(this.widgetIsLoaded(),this)},drawPlugin:function(){this.$el.empty(),this.contentCleared=!1,this.drawInProgress=!0,this.plugin.parse(this.code,function(t){if(this.$data=this.plugin.sanitize(t),RM.screenshot&&setTimeout(_.default.bind(function(){this.widgetIsLoaded()},this),5e3),this.plugin.draw(this.$data,this.$el,function(){let e=RM.screenshot?5e3:2e3;this.loadTimeout=setTimeout(function(){this.drawInProgress=!1,!this.destroyed&&(this.widgetIsLoaded(),this.$data.off&&this.$data.off("load"),this.started||this.clearContent())}.bind(this),e)}.bind(this)),!RM.screenshot){if(!_.default.isFunction(this.$data.one))return;this.$data.one("load",function(){this.drawInProgress=!1,!(this.destroyed||!this.started)&&(this.widgetIsLoaded(),clearTimeout(this.loadTimeout))}.bind(this))}}.bind(this))},widgetIsLoaded:function(){this.loaded||this.destroyed||(this.loaded=!0,this.trigger("loaded"))},isValid:function(){return this.code&&this.getPluginClass()},start:function(){return C.prototype.start.call(this),this.destroyed||!this.rendered?this:(this.contentCleared&&this.drawPlugin(),this)},stop:function(){if(C.prototype.stop.call(this),!this.plugin)return this;if(this.widgetIsLoaded(),!this.drawInProgress)return this.clearContent(),this},clearContent:function(){this.clear_content&&(this.$el.empty(),this.contentCleared=!0)},getPluginClass:function(){return A.findPlugin(this)},destroy:function(){return this.clearContent(),this.plugin&&this.plugin.remove(),C.prototype.destroy.apply(this,arguments)}}),Y=X});export{A as a,k as b,Y as c,O as d};
