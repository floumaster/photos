import{a as fe,b as j,c as Pe}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-CO3BL4TS.js";import{a as he}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-4XXBP4ZF.js";import{a as V}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2ECMWVPA.js";import{a as q}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{b}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var H=b((wt,F)=>{"use strict";var L=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ve=Object.getOwnPropertyNames,be=Object.prototype.hasOwnProperty,me=(t,e)=>{for(var r in e)L(t,r,{get:e[r],enumerable:!0})},ge=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ve(e))!be.call(t,a)&&a!==r&&L(t,a,{get:()=>e[a],enumerable:!(l=_e(e,a))||l.enumerable});return t},Oe=t=>ge(L({},"__esModule",{value:!0}),t),U={};me(U,{default:()=>we});F.exports=Oe(U);var h=j(),c=Pe(),we=[{key:"youtube",name:"YouTube",canPlay:c.canPlay.youtube,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-XCXJWXWW.js"))},{key:"soundcloud",name:"SoundCloud",canPlay:c.canPlay.soundcloud,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-KJWBNBLF.js"))},{key:"vimeo",name:"Vimeo",canPlay:c.canPlay.vimeo,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-YZ5KVQJQ.js"))},{key:"mux",name:"Mux",canPlay:c.canPlay.mux,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-MDEIV4ZI.js"))},{key:"facebook",name:"Facebook",canPlay:c.canPlay.facebook,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-6P4VR7IM.js"))},{key:"streamable",name:"Streamable",canPlay:c.canPlay.streamable,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-RV3DKYBE.js"))},{key:"wistia",name:"Wistia",canPlay:c.canPlay.wistia,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-VUVATKL2.js"))},{key:"twitch",name:"Twitch",canPlay:c.canPlay.twitch,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-B7BIKBFD.js"))},{key:"dailymotion",name:"DailyMotion",canPlay:c.canPlay.dailymotion,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-A6SBT24A.js"))},{key:"mixcloud",name:"Mixcloud",canPlay:c.canPlay.mixcloud,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-D24RGWK5.js"))},{key:"vidyard",name:"Vidyard",canPlay:c.canPlay.vidyard,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-UGSSKVJY.js"))},{key:"kaltura",name:"Kaltura",canPlay:c.canPlay.kaltura,lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-JNY5Z3B5.js"))},{key:"file",name:"FilePlayer",canPlay:c.canPlay.file,canEnablePIP:t=>c.canPlay.file(t)&&(document.pictureInPictureEnabled||(0,h.supportsWebKitPresentationMode)())&&!c.AUDIO_EXTENSIONS.test(t),lazyPlayer:(0,h.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-AXRSU2SO.js"))}]});var W=b((kt,J)=>{"use strict";var B=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ke(t,e){return!!(t===e||B(t)&&B(e))}function Re(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!ke(t[r],e[r]))return!1;return!0}function Se(t,e){e===void 0&&(e=Re);var r,l=[],a,s=!1;function v(){for(var _=[],P=0;P<arguments.length;P++)_[P]=arguments[P];return s&&r===this&&e(_,l)||(a=t.apply(this,_),s=!0,r=this,l=_),a}return v}J.exports=Se});var M=b((Rt,X)=>{"use strict";var Ee=Object.create,D=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,De=Object.getOwnPropertyNames,Te=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty,xe=(t,e)=>{for(var r in e)D(t,r,{get:e[r],enumerable:!0})},Y=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of De(e))!Ie.call(t,a)&&a!==r&&D(t,a,{get:()=>e[a],enumerable:!(l=Ce(e,a))||l.enumerable});return t},je=(t,e,r)=>(r=t!=null?Ee(Te(t)):{},Y(e||!t||!t.__esModule?D(r,"default",{value:t,enumerable:!0}):r,t)),Le=t=>Y(D({},"__esModule",{value:!0}),t),Q={};xe(Q,{defaultProps:()=>Ne,propTypes:()=>Me});X.exports=Le(Q);var ze=je(he()),{string:u,bool:d,number:m,array:z,oneOfType:w,shape:f,object:y,func:n,node:K}=ze.default,Me={url:w([u,z,y]),playing:d,loop:d,controls:d,volume:m,muted:d,playbackRate:m,width:w([u,m]),height:w([u,m]),style:y,progressInterval:m,playsinline:d,pip:d,stopOnUnmount:d,light:w([d,u,y]),playIcon:K,previewTabIndex:m,previewAriaLabel:u,fallback:K,oEmbedUrl:u,wrapper:w([u,n,f({render:n.isRequired})]),config:f({soundcloud:f({options:y}),youtube:f({playerVars:y,embedOptions:y,onUnstarted:n}),facebook:f({appId:u,version:u,playerId:u,attributes:y}),dailymotion:f({params:y}),vimeo:f({playerOptions:y,title:u}),mux:f({attributes:y,version:u}),file:f({attributes:y,tracks:z,forceVideo:d,forceAudio:d,forceHLS:d,forceSafariHLS:d,forceDisableHls:d,forceDASH:d,forceFLV:d,hlsOptions:y,hlsVersion:u,dashVersion:u,flvVersion:u}),wistia:f({options:y,playerId:u,customControls:z}),mixcloud:f({options:y}),twitch:f({options:y,playerId:u}),vidyard:f({options:y})}),onReady:n,onStart:n,onPlay:n,onPause:n,onBuffer:n,onBufferEnd:n,onEnded:n,onError:n,onDuration:n,onSeek:n,onPlaybackRateChange:n,onPlaybackQualityChange:n,onProgress:n,onClickPreview:n,onEnablePIP:n,onDisablePIP:n},p=()=>{},Ne={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:p},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p}});var ae=b((St,re)=>{"use strict";var Ae=Object.create,k=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ve=Object.getOwnPropertyNames,Ue=Object.getPrototypeOf,Fe=Object.prototype.hasOwnProperty,He=(t,e,r)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Be=(t,e)=>{for(var r in e)k(t,r,{get:e[r],enumerable:!0})},$=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ve(e))!Fe.call(t,a)&&a!==r&&k(t,a,{get:()=>e[a],enumerable:!(l=qe(e,a))||l.enumerable});return t},Z=(t,e,r)=>(r=t!=null?Ae(Ue(t)):{},$(e||!t||!t.__esModule?k(r,"default",{value:t,enumerable:!0}):r,t)),Je=t=>$(k({},"__esModule",{value:!0}),t),i=(t,e,r)=>(He(t,typeof e!="symbol"?e+"":e,r),r),ee={};Be(ee,{default:()=>g});re.exports=Je(ee);var G=Z(q()),We=Z(V()),te=M(),Ke=j(),Ye=5e3,g=class extends G.Component{constructor(){super(...arguments),i(this,"mounted",!1),i(this,"isReady",!1),i(this,"isPlaying",!1),i(this,"isLoading",!0),i(this,"loadOnReady",null),i(this,"startOnPlay",!0),i(this,"seekOnPlay",null),i(this,"onDurationCalled",!1),i(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),i(this,"getInternalPlayer",e=>this.player?this.player[e]:null),i(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){let e=this.getCurrentTime()||0,r=this.getSecondsLoaded(),l=this.getDuration();if(l){let a={playedSeconds:e,played:e/l};r!==null&&(a.loadedSeconds=r,a.loaded=r/l),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),i(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;let{onReady:e,playing:r,volume:l,muted:a}=this.props;e(),!a&&l!==null&&this.player.setVolume(l),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),i(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;let{onStart:e,onPlay:r,playbackRate:l}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&l!==1&&this.player.setPlaybackRate(l),e(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),i(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),i(this,"handleEnded",()=>{let{activePlayer:e,loop:r,onEnded:l}=this.props;e.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,l())}),i(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),i(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);let e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),i(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;let{url:r,playing:l,volume:a,muted:s,playbackRate:v,pip:_,loop:P,activePlayer:I,disableDeferredLoading:x}=this.props;if(!(0,We.default)(e.url,r)){if(this.isLoading&&!I.forceLoad&&!x&&!(0,Ke.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!e.playing&&l&&!this.isPlaying&&this.player.play(),e.playing&&!l&&this.isPlaying&&this.player.pause(),!e.pip&&_&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!_&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&a!==null&&this.player.setVolume(a),e.muted!==s&&(s?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),e.playbackRate!==v&&this.player.setPlaybackRate&&this.player.setPlaybackRate(v),e.loop!==P&&this.player.setLoop&&this.player.setLoop(P)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,r,l){if(!this.isReady){e!==0&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},Ye));return}if(r?r==="fraction":e>0&&e<1){let s=this.player.getDuration();if(!s){console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");return}this.player.seekTo(s*e,l);return}this.player.seekTo(e,l)}render(){let e=this.props.activePlayer;return e?G.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};i(g,"displayName","Player");i(g,"propTypes",te.propTypes);i(g,"defaultProps",te.defaultProps)});var ue=b((Et,ne)=>{"use strict";var Qe=Object.create,E=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyNames,$e=Object.getPrototypeOf,Ze=Object.prototype.hasOwnProperty,et=(t,e,r)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tt=(t,e)=>{for(var r in e)E(t,r,{get:e[r],enumerable:!0})},ie=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ge(e))!Ze.call(t,a)&&a!==r&&E(t,a,{get:()=>e[a],enumerable:!(l=Xe(e,a))||l.enumerable});return t},C=(t,e,r)=>(r=t!=null?Qe($e(t)):{},ie(e||!t||!t.__esModule?E(r,"default",{value:t,enumerable:!0}):r,t)),rt=t=>ie(E({},"__esModule",{value:!0}),t),o=(t,e,r)=>(et(t,typeof e!="symbol"?e+"":e,r),r),oe={};tt(oe,{createReactPlayer:()=>pt});ne.exports=rt(oe);var O=C(q()),at=C(fe()),N=C(W()),le=C(V()),S=M(),se=j(),lt=C(ae()),it=(0,se.lazy)(()=>import("https://st-p.rmcdn.net/aab27dd3/dist/c/c-KPAP2ENF.js")),ot=typeof window<"u"&&window.document&&typeof document<"u",st=typeof window<"u"&&window.window&&window.window.document,nt=Object.keys(S.propTypes),ut=ot||st?O.Suspense:()=>null,R=[],pt=(t,e)=>{var r;return r=class extends O.Component{constructor(){super(...arguments),o(this,"state",{showPreview:!!this.props.light}),o(this,"references",{wrapper:l=>{this.wrapper=l},player:l=>{this.player=l}}),o(this,"handleClickPreview",l=>{this.setState({showPreview:!1}),this.props.onClickPreview(l)}),o(this,"showPreview",()=>{this.setState({showPreview:!0})}),o(this,"getDuration",()=>this.player?this.player.getDuration():null),o(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),o(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),o(this,"getInternalPlayer",(l="player")=>this.player?this.player.getInternalPlayer(l):null),o(this,"seekTo",(l,a,s)=>{if(!this.player)return null;this.player.seekTo(l,a,s)}),o(this,"handleReady",()=>{this.props.onReady(this)}),o(this,"getActivePlayer",(0,N.default)(l=>{for(let a of[...R,...t])if(a.canPlay(l))return a;return e||null})),o(this,"getConfig",(0,N.default)((l,a)=>{let{config:s}=this.props;return at.default.all([S.defaultProps.config,S.defaultProps.config[a]||{},s,s[a]||{}])})),o(this,"getAttributes",(0,N.default)(l=>(0,se.omit)(this.props,nt))),o(this,"renderActivePlayer",l=>{if(!l)return null;let a=this.getActivePlayer(l);if(!a)return null;let s=this.getConfig(l,a.key);return O.default.createElement(lt.default,{...this.props,key:a.key,ref:this.references.player,config:s,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(l,a){return!(0,le.default)(this.props,l)||!(0,le.default)(this.state,a)}componentDidUpdate(l){let{light:a}=this.props;!l.light&&a&&this.setState({showPreview:!0}),l.light&&!a&&this.setState({showPreview:!1})}renderPreview(l){if(!l)return null;let{light:a,playIcon:s,previewTabIndex:v,oEmbedUrl:_,previewAriaLabel:P}=this.props;return O.default.createElement(it,{url:l,light:a,playIcon:s,previewTabIndex:v,previewAriaLabel:P,oEmbedUrl:_,onClick:this.handleClickPreview})}render(){let{url:l,style:a,width:s,height:v,fallback:_,wrapper:P}=this.props,{showPreview:I}=this.state,x=this.getAttributes(l),de=typeof P=="string"?this.references.wrapper:void 0;return O.default.createElement(P,{ref:de,style:{...a,width:s,height:v},...x},O.default.createElement(ut,{fallback:_},I?this.renderPreview(l):this.renderActivePlayer(l)))}},o(r,"displayName","ReactPlayer"),o(r,"propTypes",S.propTypes),o(r,"defaultProps",S.defaultProps),o(r,"addCustomPlayer",l=>{R.push(l)}),o(r,"removeCustomPlayers",()=>{R.length=0}),o(r,"canPlay",l=>{for(let a of[...R,...t])if(a.canPlay(l))return!0;return!1}),o(r,"canEnablePIP",l=>{for(let a of[...R,...t])if(a.canEnablePIP&&a.canEnablePIP(l))return!0;return!1}),r}});var Ot=b((Dt,ce)=>{"use strict";var yt=Object.create,T=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,dt=Object.getOwnPropertyNames,ht=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,Pt=(t,e)=>{for(var r in e)T(t,r,{get:e[r],enumerable:!0})},pe=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of dt(e))!ft.call(t,a)&&a!==r&&T(t,a,{get:()=>e[a],enumerable:!(l=ct(e,a))||l.enumerable});return t},_t=(t,e,r)=>(r=t!=null?yt(ht(t)):{},pe(e||!t||!t.__esModule?T(r,"default",{value:t,enumerable:!0}):r,t)),vt=t=>pe(T({},"__esModule",{value:!0}),t),ye={};Pt(ye,{default:()=>gt});ce.exports=vt(ye);var A=_t(H()),bt=ue(),mt=A.default[A.default.length-1],gt=(0,bt.createReactPlayer)(A.default,mt)});export{Ot as a};
