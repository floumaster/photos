import{b as m,c as f}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-CO3BL4TS.js";import{a as _}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{b as d}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var D=d((E,y)=>{var P=Object.create,l=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,O=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,L=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},u=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of v(e))!g.call(t,a)&&a!==r&&l(t,a,{get:()=>e[a],enumerable:!(o=b(e,a))||o.enumerable});return t},S=(t,e,r)=>(r=t!=null?P(O(t)):{},u(e||!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),M=t=>u(l({},"__esModule",{value:!0}),t),s=(t,e,r)=>(L(t,typeof e!="symbol"?e+"":e,r),r),h={};w(h,{default:()=>i});y.exports=M(h);var n=S(_()),p=m(),c=f(),T="https://cdn.embed.ly/player-0.1.0.min.js",j="playerjs",i=class extends n.Component{constructor(){super(...arguments),s(this,"callPlayer",p.callPlayer),s(this,"duration",null),s(this,"currentTime",null),s(this,"secondsLoaded",null),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unmute")}),s(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,p.getSDK)(T,j).then(r=>{this.iframe&&(this.player=new r.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:o,seconds:a})=>{this.duration=o,this.currentTime=a}),this.player.on("buffered",({percent:o})=>{this.duration&&(this.secondsLoaded=this.duration*o)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("setCurrentTime",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(c.MATCH_URL_STREAMABLE)[1],r={width:"100%",height:"100%"};return n.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:r,allow:"encrypted-media; autoplay; fullscreen;"})}};s(i,"displayName","Streamable");s(i,"canPlay",c.canPlay.streamable)});export default D();
