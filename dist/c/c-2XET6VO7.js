import{a as W,b as ct}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-5IBIYDPK.js";import{Bb as ut,Qa as D}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-BKCY2VKA.js";import{k as J,n as dt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7I7OLWOL.js";import{c as I,d as lt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-ESZBX7KW.js";import{a as K,h as ft}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-BDIKTVS7.js";import{b as B,c as st}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XISRCAED.js";import{a as ot}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7E6CHA26.js";import{b as nt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-6ZBEBUM2.js";import{a as H,c as at,n as M,o as rt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-65MPED7X.js";import{b as it}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-B7IF4UMF.js";import{a as $,b as et,d as z}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var Y=et((R,G)=>{"use strict";(function(o,n){if(typeof define=="function"&&define.amd)define(["exports","module"],n);else if(typeof R<"u"&&typeof G<"u")n(R,G);else{var i={exports:{}};n(i.exports,i),o.fetchJsonp=i.exports}})(R,function(o,n){"use strict";var i={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function s(r){try{delete window[r]}catch{window[r]=void 0}}function u(r){var e=document.getElementById(r);e&&document.getElementsByTagName("head")[0].removeChild(e)}function l(r){var e=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],t=r,d=e.timeout||i.timeout,p=e.jsonpCallback||i.jsonpCallback,c=void 0;return new Promise(function(m,y){var x=e.jsonpCallbackFunction||a(),w=p+"_"+x;window[x]=function(h){m({ok:!0,json:function(){return Promise.resolve(h)}}),c&&clearTimeout(c),u(w),s(x)},t+=t.indexOf("?")===-1?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+t+p+"="+x),e.charset&&f.setAttribute("charset",e.charset),e.nonce&&f.setAttribute("nonce",e.nonce),e.referrerPolicy&&f.setAttribute("referrerPolicy",e.referrerPolicy),e.crossorigin&&f.setAttribute("crossorigin","true"),f.id=w,document.getElementsByTagName("head")[0].appendChild(f),c=setTimeout(function(){y(new Error("JSONP request to "+r+" timed out")),s(x),u(w),window[x]=function(){s(x)}},d),f.onerror=function(){y(new Error("JSONP request to "+r+" failed")),s(x),u(w),c&&clearTimeout(c)}})}n.exports=l})});var X,q=$(()=>{"use strict";ct();X={"template-export-pdf-typekit-substitution-news-gothic":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-georgia-pro":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 900;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-nitti":W`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 500;
}
</style>
`}});var _,g,Z,Q,pt,U,N,Pt,mt=$(()=>{"use strict";_=z(ot()),g=z(nt()),Z=z(Y());st();lt();rt();q();at();ut();dt();it();ft();Q=100,pt=1e4,U=3500,N={STYLE_PREFIXES:{paragraph:{viewer:[".used-fonts-test p",".rmwidget.text div p"],editor:["p"],constructor:[".used-fonts-test p",".block.block-text .text-preview p",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h1":{viewer:[".used-fonts-test h1",".rmwidget.text div h1"],editor:["h1"],constructor:[".used-fonts-test h1",".block.block-text .text-preview h1",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h2":{viewer:[".used-fonts-test h2",".rmwidget.text div h2"],editor:["h2"],constructor:[".used-fonts-test h2",".block.block-text .text-preview h2",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h3":{viewer:[".used-fonts-test h3",".rmwidget.text div h3"],editor:["h3"],constructor:[".used-fonts-test h3",".block.block-text .text-preview h3",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h4":{viewer:[".used-fonts-test h4",".rmwidget.text div h4"],editor:["h4"],constructor:[".used-fonts-test h4",".block.block-text .text-preview h4",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},link:{viewer:[".rmwidget.text div a"],editor:["a"],constructor:[".block.block-text .text-preview a"]}},fontsShortList:{},fontCustomVariationNames:{},generateStylesStr:function(o){let n="",i,a,s,u=o.style,l=o.indentation?"	":"",r=";"+(o.lineBreaks?`
`:""),e=o.attrPrefix||"";return o.tp=="paragraph"&&(n+=l+"font-family: "+t("font-family")+r,n+=l+"font-style: "+t("font-style")+r,n+=l+"font-weight: "+t("font-weight")+r,n+=l+"font-size: "+d(t("font-size"))+r,n+=l+"letter-spacing: "+d(t("letter-spacing"))+r,n+=l+"line-height: "+d(t("line-height"))+r,n+=l+"text-align: "+t("text-align")+r,n+=l+"text-decoration: "+t("text-decoration")+r,n+=l+"text-transform: "+t("text-transform")+r,n+=l+"color: "+I.getRGBA(t("color"),t("opacity")/100)+r,n+=l+"padding-top: "+d(t("padding-top"))+r,n+=l+"padding-right: "+d(t("padding-right"))+r,n+=l+"padding-bottom: "+d(t("padding-bottom"))+r,n+=l+"padding-left: "+d(t("padding-left"))+r),o.tp=="link"&&(n+=l+"text-decoration: none"+r,n+=l+"color: "+I.getRGBA(t("color"),t("opacity")/100)+r,t("u-style")!="none"?(i=I.getRGBA(t("u-color"),t("u-opacity")/100),a=parseInt(t("u-size"),10),s=parseInt(t("u-offset"),10)+a,n+=l+"padding-bottom: "+d(Math.max(s,0))+r,t("u-style")=="solid"&&(n+=l+"background: linear-gradient(to right, "+i+" 0%, "+i+" 100%)"+r,n+=l+"background-size: 1px "+d(a)+r),t("u-style")=="dotted"&&(n+=l+"background: linear-gradient(to right, "+i+" 0%, "+i+" 50%, transparent 50%,transparent 100%)"+r,n+=l+"background-size: "+d(a*2)+" "+d(a)+r),t("u-style")=="dashed"&&(n+=l+"background: linear-gradient(to right, "+i+" 0%, "+i+" 66.6666%, transparent 66.6666%,transparent 100%)"+r,n+=l+"background-size: "+d(a*3)+" "+d(a)+r),s<0?n+=l+"background-position: 0 "+(100+s)+"%"+r:n+=l+"background-position: 0 100%"+r,n+=l+"background-repeat: repeat-x"+r):n+=l+"background: none"+r),n;function t(p){let c=u[e+p];return c=="inherit"&&e&&(c=u[p]),c}function d(p){return p+(/px/i.test(p)?"":"px")}},generateCSS:function(o,n,i,a,l){if(!a)return;var u=this.STYLE_PREFIXES[o][n],l=l||{},r=this,e="";g.default.each(a,function(p){o=="paragraph"&&(p.tag&&p.tag!=="p"&&B.AVAILABLE_TEXT_TAGS.includes(p.tag)&&(u=[].concat(r.STYLE_PREFIXES["header-"+p.tag][n],r.STYLE_PREFIXES[o][n]).filter(function(c,m,y){return y.indexOf(c)===m})),e+=g.default.map(u,function(c){return c+"."+p._name}).join(`,
`)+` {
`,e+=r.generateStylesStr({tp:o,style:p,indentation:!0,lineBreaks:!0}),e+=`}

`),o=="link"&&(l.forcePseudoState&&l.forcePseudoClass==p._name?(e+=g.default.map(u,function(c){return c+"."+p._name}).join(`,
`)+` {
`,e+=r.generateStylesStr({tp:o,style:p,attrPrefix:l.forcePseudoState+"-",indentation:!0,lineBreaks:!0}),e+=`}

`):(e+=g.default.map(u,function(m){return m+"."+p._name}).join(`,
`)+` {
`,e+=r.generateStylesStr({tp:o,style:p,indentation:!0,lineBreaks:!0}),e+=`}

`,g.default.find(g.default.keys(p),function(m){return/^current/.test(m)})&&(e+=g.default.map(u,function(m){return m+".current."+p._name}).join(`,
`)+` {
`,e+=r.generateStylesStr({tp:o,style:p,attrPrefix:"current-",indentation:!0,lineBreaks:!0}),e+=`}

`),e+=g.default.map(u,function(m){return m+".hovered."+p._name}).join(`,
`)+` {
`,e+=r.generateStylesStr({tp:o,style:p,attrPrefix:"hover-",indentation:!0,lineBreaks:!0}),e+=`}

`),e+=g.default.map(u,function(c){return c+"."+p._name+" *"}).join(`,
`)+` {
`,e+=`	color: inherit !important;
`,e+=`	text-decoration: none !important;
`,e+=`}

`)}),i=i||document;let t="text_styles_"+o+"_"+n;(0,_.default)("#"+t,i).remove();let d=i.createElement("style");d.type="text/css",d.id=t,d.className="text_styles",d.appendChild(i.createTextNode(e)),i.getElementsByTagName("head")[0].appendChild(d)},appendFontsCssToDocument:function(o,n){window.TypekitPreview&&window.TypekitPreview.setup&&window.TypekitPreview.setup({auth_id:B.TYPEKIT_ID,auth_token:B.TYPEKIT_TOKEN,default_subset:"all"});let i=(0,_.default)("link.fonts, style.fonts"),a=[],s=[],u=[],l={};i.each(function(){let c=(0,_.default)(this),m=c.attr("data-provider"),y=c.attr("data-fonts-and-variations").split("||");g.default.each(y,function(x){a.push(m+"|"+x)})}),g.default.each(o.fonts,function(c){g.default.each(c.used_variations||c.variations,function(m){s.push(c.provider+"|"+c.css_name+"|"+m)})}),u=g.default.difference(s,a);let r={};g.default.each(u,function(c){let m=c.split("|"),y=m[0],x=m[1],w=m[2],f=y+"|"+x;r[f]=r[f]||[],r[f].push(w)});let e=[];g.default.each(r,function(c,m){let y=m.split("|"),x=y[0],w=y[1],f=c;e.push({provider:x,css_name:w,variations:f})}),g.default.each(e,function(c){let m=c.provider,y,x=c.css_name+"|"+c.variations.join("||"+c.css_name+"|");if(l[m]||(l[m]=[]),m=="google"){let w=_.default.map(c.variations,function(f){return(f.substr(1,1)-0)*100+(f.substr(0,1)=="n"?"":"italic")});y={fontAndVariations:x,data:c.css_name.split(" ").join("+")+":"+w.join(",")}}if(m=="webtype"&&(y={fontAndVariations:x,data:c.css_name+":"+c.variations.join(",")}),m=="typetoday"&&(y={fontAndVariations:x,data:c.css_name+":"+c.variations.join(",")}),m=="custom"){let w=g.default.findWhere(o.fonts,{provider:"custom",css_name:c.css_name});w&&w.css_url&&(y={fontAndVariations:x,data:{css_name:c.css_name,css_url:w.css_url,signed_css_url:w.signed_css_url}})}m=="typekit"&&(y={fontAndVariations:x,data:{id:c.css_name,variations:c.variations}}),y&&l[m].push(y)});let t=RM.screenshot&&K("pdf")=="true";t&&this.loadTypekitSubstitutionFonts(l.typekit);let d=g.default.has(l,"custom");g.default.each(l,function(c,m){let y=m=="custom"?1:m=="google"?22:c.length,x=Math.ceil(c.length/y),w,f,h,v,b,k,F=0;for(w=0;w<x;w++){let E=function(V){V.addClass("fonts").attr("data-id",I.generateUUID()).attr("data-provider",m).attr("data-fonts-and-variations",k.join("||"))};var A=E;if(f=w*y,h=Math.min((w+1)*y,c.length),v=c.slice(f,h),b=g.default.pluck(v,"data"),k=g.default.pluck(v,"fontAndVariations"),(0,_.default)("link, style").addClass("existing"),m=="google"){var T=(B.IS_FILE_PROTOCOL?"http://":"//")+"fonts.googleapis.com/css?family=",C=b.join("%7C"),P="&subset=latin,vietnamese,khmer,cyrillic-ext,greek-ext,greek,devanagari,latin-ext,cyrillic";p(T+C+P)}if(m=="typekit"){if(o.version=="edit"&&!t)try{window.TypekitPreview&&window.TypekitPreview.load(b)}catch{}o.version=="published"&&o.typekit_url&&(typeof Typekit<"u"&&(Typekit=void 0),(0,_.default)("style.typekit-kit").remove(),_.default.getScript(o.typekit_url,function(){try{Typekit.load({active:function(){let V=(0,_.default)("style").filter(function(O,tt){return/typekit/i.test(tt.innerHTML)});V.addClass("typekit-kit"),E(V)}})}catch{}}))}let j=B.readymag_viewer_host;if(m=="webtype"){var T=RM.common.isDownloadedSource?j:"";if(!(0,_.default)('link.fonts[data-provider="webtype"]').length){var S=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.webtype;p(T+S)}}if(m=="typetoday"&&!t){var T=RM.common.isDownloadedSource?j:"";if(!(0,_.default)('link.fonts[data-provider="typetoday"]').length){var S=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.typetoday;p(T+S)}}if(m=="custom"){var L=b[0].signed_css_url||b[0].css_url;/^\/api\/fonts\//i.test(L)?function(){let V=(0,_.default)("<style>").attr("type","text/css");(0,_.default)("head").append(V),_.default.get(L,function(O){V.text(O),F++,F>=c.length&&g.default.isFunction(n)&&n()})}():p(L)}E((0,_.default)("link:not(.existing), style:not(.existing)")),(0,_.default)("link, style").removeClass("existing")}}),!d&&g.default.isFunction(n)&&n();function p(c){let m=(0,_.default)("<link>").attr("type","text/css").attr("rel","stylesheet").attr("href",c);(0,_.default)("head").append(m)}},loadTypekitSubstitutionFonts:function(o){!o||!o.length||g.default.each(o,function(n){let i=n.data.id,a=g.default.findWhere(N.fontsShortList.typekit,{id:i});a=a&&a.browse_info,a=a&&a.classification;let s=a&&a.length&&a[0]||"sans-serif",u={"sans-serif":"news-gothic",decorative:"news-gothic",handmade:"news-gothic",blackletter:"news-gothic",script:"news-gothic","slab-serif":"news-gothic",serif:"georgia-pro",monospaced:"nitti"},l="template-export-pdf-typekit-substitution-"+(u[s]||u["sans-serif"]),r=X[l],e=r({id:i});(0,_.default)("head").append(e)})},appendFontsCssToIFrame:function(o){let n=(0,_.default)("link.fonts, style.fonts"),i=(0,_.default)("link.fonts, style.fonts",o),a={},s=(0,_.default)("head",o);i.each(function(){a[(0,_.default)(this).attr("data-id")]=!0}),n.each(function(){let u=(0,_.default)(this),l=this.href;if(!a[u.attr("data-id")]){let r=u.clone();l&&Modernizr.safari&&r.attr("href",l+"&edit_mode=true"),r.appendTo(s)}})},isFastFontLoadCheckAvailable:function(){return!!(document.fonts&&window.Promise)},fastWaitForFontLoad:function(o,n,i){let a;if(document.fonts){let s=i+(n?" "+n:"")+" 12px "+o,u=(t,d)=>{for(let p of document.fonts)if(p.family===t)return p.loaded;return d>Date.now()-U?new Promise(p=>{setTimeout(()=>{p(u(t,d))},50)}):Promise.resolve(!1)},l=!document.fonts.check(s),r=H("viewer.enhancedFontLoadCheck")&&!l?document.fonts.load(s).then(()=>u(o,Date.now())):document.fonts.load(s).then(()=>document.fonts.check(s)?s:this.fontLoadedTimeoutCheck(s)),e=new window.Promise(function(t,d){setTimeout(d.bind(null,s),U)});a=window.Promise.race([r,e])}else a=window.Promise.reject();return a},exactWaitForFontLoad:function(o,n,i,a){let s=i+" "+n+" 12px "+o+", Arial",u=i+" "+n+" 12px Arial",l=20,r=20,e=(0,_.default)('<canvas width="'+l+'" height="'+r+'"></canvas>'),t=e[0],d=t.getContext("2d"),p="",c="",m=+new Date;e.appendTo("body").css({position:"absolute",left:0,top:"-999px"}),y();function y(){let w=+new Date-m>pt,f=x();if(f||w){d=void 0,e.remove(),a(f,o,n,i);return}setTimeout(y,Q)}function x(){let w=s;d.clearRect(0,0,l,r),p||(p=t.toDataURL("image/png"),w=u),d.font=w,d.fillStyle="000",d.fillText("a1-&q",0,20);let f=t.toDataURL("image/png");return c||(c=f),f!=p&&f!=c}},fontLoadedTimeoutCheck:function(o){let n=Date.now();var i=function(a,s){let u=Date.now()-n;document.fonts.check(o)?a(o):u<U?setTimeout(i.bind(null,a,s),Q):s(o)};return new window.Promise(function(a,s){i(a,s)})},getHotspotTextModels:function(o){let n=[];return o.widgets_collection&&o.widgets_collection.length?n=o.widgets_collection.filter(function(i){return i.get("type")==="text"&&(o.get?o.get("wids"):o.wids).indexOf(i.get("_id"))>-1}):o._nestedWidgetsJSON&&o._nestedWidgetsJSON.length?n=g.default.filter(o._nestedWidgetsJSON,function(i){return i.type==="text"}):o.wids&&o.wids.length&&(n=g.default.filter(o.wids,function(i){return i.type==="text"})),n},getUsedFontsFromWidgetsModels:function(o,n){let i={},a={},s={},u={},l={},r={},e=o.models;function t(w,f){return typeof w.get=="function"?w.get(f):w[f]}let d={bold:700,normal:400};for(let w=0;w<e.length;w++){let f=e[w];if(t(f,"type")==="slideshow"){if(t(f,"version")===2){let h=t(f,"pictures");t(f,"theme_data").captions&&h?.length&&h.forEach(b=>{b.caption?.blocks&&g.default.extend(a,D(b.caption,o.activeViewports))})}else if(t(f,"text_style")){let h=t(f,"text_style"),v=h["font-family"];if(v){let b=h["font-style"]||"normal",k=h["font-weight"]||d.normal;a[v+"|"+b+"|"+k]=1}}}if(t(f,"type")==="button"){let h=t(f,"font-family");if(!t(f,"hidden")&&h){let v=t(f,"font-style")||"normal",b=t(f,"font-weight")||d.normal;s[h+"|"+v+"|"+b]=1}for(let v=0;v<M.viewports.length;v++){let b=f["viewport_"+M.viewports[v].name]||{},k=b["font-family"];if(k&&!b.hidden){let F=b["font-style"]||"normal",T=b["font-weight"]||d.normal;s[k+"|"+F+"|"+T]=1}}}if(t(f,"type")==="ecommercecart"){let h=t(f,"font-family");if(h){let b=t(f,"font-style")||"normal",k=t(f,"font-weight")||d.normal;l[h+"|"+b+"|"+k]=1}let v=t(f,"bar-font-family");if(v){let b=t(f,"bar-font-style")||"normal",k=t(f,"bar-font-weight")||d.normal;l[v+"|"+b+"|"+k]=1}}if(t(f,"type")==="addtocart"){let h=t(f,"font-family");if(h){let b=t(f,"font-style")||"normal",k=t(f,"font-weight")||d.normal;r[h+"|"+b+"|"+k]=1}let v=t(f,"attrs-font-family");if(v){let b=t(f,"attrs-font-style")||"normal",k=t(f,"attrs-font-weight")||d.normal;r[v+"|"+b+"|"+k]=1}}if(t(f,"type")==="form"){if(!t(f,"hidden")){let h=t(f,"style"),v=t(f,"style-"+h+"-fields")||{},{"font-family":b,"font-style":k="normal","font-weight":F=d.normal}=v;b&&(u[b+"|"+k+"|"+F]=1);let T=t(f,"style-"+h+"-button-default")||{},{"font-family":C,"font-style":P="normal","font-weight":S=d.normal}=T;C&&(C=C==="inherit"?b:C,P=P==="inherit"?k:P,S=S==="inherit"?F:S,u[C+"|"+P+"|"+S]=1)}for(let h=0;h<M.viewports.length;h++){let v=f["viewport_"+M.viewports[h].name];if(v&&!v.hidden){let b=v.style||t(f,"style"),k=v["style-"+b+"-fields"]||t(f,"style-"+b+"-fields")||{},{"font-family":F,"font-style":T="normal","font-weight":C=d.normal}=k;F&&(u[F+"|"+T+"|"+C]=1);let P=v["style-"+b+"-button-default"]||{},{"font-family":S,"font-style":L="normal","font-weight":A=d.normal}=P;S&&(S=S==="inherit"?F:S,L=L==="inherit"?T:L,A=A==="inherit"?C:A,u[S+"|"+L+"|"+A]=1)}}}if(t(f,"type")==="text"&&t(f,"version")===3){t(f,"hidden")||g.default.extend(i,D(f,o.activeViewports));for(let h=0;h<M.viewports.length;h++){let v=f["viewport_"+M.viewports[h].name];v&&!v.hidden&&g.default.extend(i,D({blocks:t(f,"blocks"),...v},o.activeViewports))}}t(f,"type")==="text"&&t(f,"text")&&t(f,"version")!==3&&g.default.extend(i,this.scanTextForFontsAndVariationsRaw(t(f,"text"),t(f,"version"),o.excludeUnusedDefault,o.activeViewports)),t(f,"type")==="hotspot"&&g.default.each(this.getHotspotTextModels(f),g.default.bind(function(h){t(h,"version")===3?g.default.extend(i,D(h,o.activeViewports)):t(h,"text")&&g.default.extend(i,this.scanTextForFontsAndVariationsRaw(t(h,"text"),t(h,"version"),o.excludeUnusedDefault))},this))}let p=g.default.extend({},i,a,s,u,l,r),c={};if(o.onlyFontsNames){let w=[];return g.default.each(p,(f,h)=>{let v=h.split("|"),b=v[0];b&&w.push(b)}),w}g.default.each(p,function(w,f){let h=f.split("|"),v=h[0],b=h[1].toLowerCase(),k=h[2].toLowerCase(),F=k in d?d[k]:k;c[v]=c[v]||[],c[v].push(F==="variable"?"v":(b==="italic"?"i":"n")+Math.floor(F/100))});let m=[],y,x=this;return g.default.each(c,function(w,f){(y=g.default.findWhere(n.webtype,{name:f}))?m.push({provider:"webtype",css_name:y.name,name:y.name,variations:y.variations,used_variations:x.calcBrowserUsedVariation(w,y.variations)}):(y=g.default.findWhere(n.typetoday,{name:f}))?m.push({provider:"typetoday",css_name:y.name,name:y.name,variations:y.variations,used_variations:x.calcBrowserUsedVariation(w,y.variations)}):(y=g.default.findWhere(n.google,{family:f}))?m.push({provider:"google",css_name:y.family,name:y.family,variations:y.variations,used_variations:x.calcBrowserUsedVariation(w,y.variations)}):(y=g.default.findWhere(n.typekit,{id:f}))?m.push({provider:"typekit",css_name:y.id,name:y.name,variations:y.variations,used_variations:x.calcBrowserUsedVariation(w,y.variations)}):o.includeCustom&&(y=g.default.findWhere(o.customList,{css_name:f}))&&m.push({provider:"custom",css_name:y.css_name,css_url:y.css_url,name:y.name,variations:y.variations,used_variations:x.calcBrowserUsedVariation(w,y.variations)})}),m.filter(w=>w.used_variations&&w.used_variations.length>0)},getStylesFromText3Model:function(o,n){function i(s,u){return typeof s.get=="function"?s.get(u):s[u]}let a=new Set;if(n==="link"&&i(o,"entityMap")){let s=i(o,"entityMap");g.default.isEmpty(s)||g.default.each(s,u=>{u.type==="LINK"&&u.data?.linkStyle&&a.add(u.data?.linkStyle)})}else if(i(o,"blocks")&&i(o,"blocksMeta")){let s=i(o,"blocks")||[],u=i(o,"blocksMeta");s.forEach(l=>{let e=(u?u.find(d=>d.key===l.key):l)?.data,t=n==="paragraph"?"textStyle":"listStyle";e?.[t]&&a.add(e[t])})}return a},getStylesFromText:function(o="",n){let i=new Set,a=n||RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles");if(o)for(let s=0;s<a.length;s++){let u=a[s];o.indexOf(u._name)>=0&&i.add(u)}return i},getUsedStylesFromWidgetsModels:function(o,n="paragraph",i=!1){let a=n==="paragraph"?RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles"):n==="list"?J()?.project:[],s=new Set,u="";function l(r,e){return typeof r.get=="function"?r.get(e):r[e]}for(let r=0;r<o.length;r++){let e=o[r];if(l(e,"type")==="text"&&l(e,"version")===3){let t=this.getStylesFromText3Model(e,n);t.size&&t.forEach(d=>s.add(d)),M.viewports.forEach(d=>{let p=`viewport_${d.name}`;if(e[p]?.blocksMeta){let c=e[p].blocks||l(e,"blocks"),m=this.getStylesFromText3Model({...e[p],blocks:c},n);m.size&&m.forEach(y=>s.add(y))}})}if(!i&&l(e,"type")==="text"&&l(e,"version")!==3&&l(e,"text")&&(u+=l(e,"text")),l(e,"type")==="slideshow"&&l(e,"version")===2){let t=l(e,"pictures");t?.length&&t.forEach(d=>{if(d.caption?.blocks&&d.caption?.blocksMeta){let p=this.getStylesFromText3Model(d.caption,n);p.size&&p.forEach(c=>s.add(c))}})}l(e,"type")==="hotspot"&&g.default.each(this.getHotspotTextModels(e),t=>{if(l(t,"version")===3){let d=this.getStylesFromText3Model(t,n);d.size&&d.forEach(p=>s.add(p))}else!i&&l(t,"text")&&(u+=l(t,"text"))})}if(!i){let r=this.getStylesFromText(u,a);r.size&&r.forEach(e=>s.add(e))}return s},getUsedParagraphStylesFromWidgetsModels:function(o,n){let i="",a,s;for(a=0;a<o.length;a++)s=o[a],r(s,"type")=="text"&&r(s,"text")&&(i+=r(s,"text")),r(s,"type")=="hotspot"&&g.default.each(this.getHotspotTextModels(s),g.default.bind(function(e){i+=r(e,"text")||""},this));let u=[],l=n.edit_params.get("paragraph_styles");if(i)for(a=0;a<l.length;a++){let e=l[a];i.indexOf(e._name)>=0&&u.push(e)}function r(e,t){return typeof e.get=="function"?e.get(t):e[t]}return u},getUsedLinkStylesFromWidgetsModels:function(o,n){let i="",a,s;for(a=0;a<o.length;a++)s=o[a],r(s,"type")=="text"&&r(s,"text")&&(i+=r(s,"text")),r(s,"type")=="hotspot"&&g.default.each(this.getHotspotTextModels(s),g.default.bind(function(e){i+=r(e,"text")||""},this));let u=[],l=n.edit_params.get("link_styles");if(i)for(a=0;a<l.length;a++){let e=l[a];i.indexOf(e._name)>=0&&u.push(e)}function r(e,t){return typeof e.get=="function"?e.get(t):e[t]}return u},sortFontsByProvider(o){let n={custom:[],google:[],typekit:[],typetoday:[],webtype:[]};for(let i of o){let a=i.provider;n[a]=n[a]||[],i.provider==="custom"?n[a].push(i.css_name):n[a].push({id:i.css_name,variations:i.used_variations})}return{used_custom_fonts:n.custom,used_google_fonts:n.google,used_typekit_fonts:n.typekit,used_typetoday_fonts:n.typetoday,used_webtype_fonts:n.webtype}},scanTextForFontsAndVariationsRaw:function(o,n,i,a){let s={},u={},l=[],r=document.defaultView.getComputedStyle,e,t,d,p,c,m,y,x,w,f,h;for(e=0;e<M.viewports.length;e++)if(o.split("-"+M.viewports[e].name).length>1){if(a&&a.indexOf(M.viewports[e].name)===-1)continue;l.push(M.viewports[e].name)}d=(0,_.default)(".used-fonts-test"),d.length||(d=(0,_.default)("<div>").addClass("used-fonts-test").css({position:"absolute",display:"none !important",left:-9999,width:999}).appendTo("body")),d.removeClass("v1 v2").addClass("v"+(n||1)),t=d[0],t.innerHTML=o,m=t.querySelectorAll("span,p,a"),y=m.length,c=r(t,null);let v=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight;s[v]=1;let b,k=!1,F=function(P){return g.default.findIndex(P.childNodes,function(S){return S.nodeType===Node.TEXT_NODE&&S.textContent.replace(/\r?\n/g,"").length})!==-1},T=g.default.filter(m,F);for(let P=0;P<T.length;P++)c=r(T[P],null),b=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight,k=k||b===v,s[c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight]=1;let C=F(t);for(e=0;e<l.length;e++)if(f=l[e],f!="default"){for(p=0;p<y;p++)h=m[p],(x=h.getAttribute("data-style-"+f))&&(x=="empty"?h.removeAttribute("style"):h.setAttribute("style",x)),(w=h.getAttribute("data-class-"+f))&&(w=="empty"?h.removeAttribute("class"):h.setAttribute("class",w)),F(h)&&(c=r(h,null),b=c.fontFamily+"|"+c.fontStyle+"|"+c.fontWeight,k=k||b===v,s[b]=1);e<l.length-1&&(t.innerHTML=o,m=t.querySelectorAll("span,p,a"),y=m.length)}return i&&!k&&!C&&delete s[v],g.default.each(s,function(P,S){let L=S.split("|"),A=L[0],j=L[1].toLowerCase(),E=L[2].toLowerCase();A=A.split(",")[0],A=A.replace(/'|"/g,""),E=E.replace(/normal/g,"400"),E=E.replace(/regular/g,"400"),E=E.replace(/bold/g,"700"),u[A+"|"+j+"|"+E]=1}),u},calcBrowserUsedVariation:function(o,n){let i={};for(let p=0;p<o.length;p++){var a=o[p],s=a.substr(1,1),u=a.substr(0,1),l=99999,r="",e,t,d;for(let c=0;c<n.length;c++)e=n[c].substr(1,1)-0,t=n[c].substr(0,1),s<4&&(d=Math.abs(e-s)*10+(t==u?0:1e3)+(e<=s?0:100)),s>5&&(d=Math.abs(e-s)*10+(t==u?0:1e3)+(e>=s?0:100)),s==4&&(e==5?d=0+(t==u?0:1e3)+0:d=Math.abs(e-s)*10+(t==u?0:1e3)+(e<=s?0:100)),s==5&&(d=Math.abs(e-s)*10+(t==u?0:1e3)+(e<=s?0:100)),s==e&&u==t&&(d=0),d<l&&(l=d,r=n[c]);i[r]=1}return g.default.keys(i).filter(p=>!!p)},getVeryShortList:function(o){let n={google:[],typekit:[],webtype:[],typetoday:[]};return g.default.each(o,function(i){let a=i.provider,s;switch(a){case"google":s={provider:a,family:i.name,variations:i.variations};break;case"typekit":s={provider:a,id:i.css_name,name:i.name,variations:i.variations};break;case"webtype":s={provider:a,name:i.name,variations:i.variations};break;case"typetoday":s={provider:a,name:i.name,variations:i.variations};break}n[a]&&n[a].push(s)}),n},getCustomVariationNameByFVD:function(o,n){return(N.fontCustomVariationNames[o]||{})[n]},setShortList:function(o){N.fontsShortList=o||{},N.fontCustomVariationNames={},g.default.each(N.fontsShortList,function(n,i){g.default.each(n,function(a){if(a.custom_variation_names){let s;switch(i){case"google":s=a.family;break;case"typekit":case"webtype":case"typetoday":s=a.name;break}N.fontCustomVariationNames[s]=a.custom_variation_names}})})},preloadShortList:async function(){let o=new Date,n=o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear();try{let i=await(0,Z.default)(`${B.fontslist_short}?timestamp=${n}`,{jsonpCallback:"callback",jsonpCallbackFunction:"fontsShortListCallback"}).then(a=>a.json());N.setShortList(i)}catch{console.error("Cannot preload fontslist")}}},Pt=N});export{Pt as a,mt as b};
