import{b as g,c as v}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-CO3BL4TS.js";import{a as b}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{b as P}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var x=P((A,d)=>{var O=Object.create,l=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,E=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of S(e))!L.call(t,s)&&s!==r&&l(t,s,{get:()=>e[s],enumerable:!(n=w(e,s))||n.enumerable});return t},T=(t,e,r)=>(r=t!=null?O(E(t)):{},h(e||!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),j=t=>h(l({},"__esModule",{value:!0}),t),o=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),c={};R(c,{default:()=>a});d.exports=j(c);var u=T(b()),p=g(),M=v(),C="https://w.soundcloud.com/player/api.js",N="SC",a=class extends u.Component{constructor(){super(...arguments),o(this,"callPlayer",p.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"fractionLoaded",null),o(this,"mute",()=>{this.setVolume(0)}),o(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),o(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,r){(0,p.getSDK)(C,N).then(n=>{if(!this.iframe)return;let{PLAY:s,PLAY_PROGRESS:_,PAUSE:y,FINISH:m,ERROR:f}=n.Widget.Events;r||(this.player=n.Widget(this.iframe),this.player.bind(s,this.props.onPlay),this.player.bind(y,()=>{this.duration-this.currentTime<.05||this.props.onPause()}),this.player.bind(_,i=>{this.currentTime=i.currentPosition/1e3,this.fractionLoaded=i.loadedProgress}),this.player.bind(m,()=>this.props.onEnded()),this.player.bind(f,i=>this.props.onError(i))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration(i=>{this.duration=i/1e3,this.props.onReady()})}})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seekTo",e*1e3),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){let{display:e}=this.props,r={width:"100%",height:"100%",display:e};return u.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:r,frameBorder:0,allow:"autoplay"})}};o(a,"displayName","SoundCloud");o(a,"canPlay",M.canPlay.soundcloud);o(a,"loopOnEnded",!0)});export default x();
