import{a as V,b as k,c as M,d as N,e as S,f as K,g as u,j as W}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-3NPNCLFW.js";import{A as q,B as _,C as F,D as I,G as L,c as s,d as l,x as w}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-MJAH2RAZ.js";import{A as x,g as v,i as y}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RWHY6I2B.js";import{m as O,n as c,o as j}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-65MPED7X.js";import{b as U}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-B7IF4UMF.js";import{a,b as z}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2DOLZMQC.js";import{a as b,c as C}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RFIBFC7T.js";import{a as p,f as r}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var m,A=p(()=>{"use strict";j();x();l();C();z();m=class extends s{constructor(){super();r(this,"value");this.value=this.getProjectViewport(),this.bindEvents()}bindEvents(){if(b())return;let e=y(this.refreshProjectViewport,40);window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}refreshProjectViewport(){this.value=this.getProjectViewport()}getProjectViewport(){if(b())return"default";let e=window.innerWidth,t=a.isPortrait();if(a.isIpad())return t?"tablet_portrait":"default";if(window.devicePixelRatio>1||a.isMobile()||a.isTouch()){if(t)return e<=599?"phone_portrait":e>=600&&e<=1024?"tablet_portrait":"default";if(e>980)return"default";let i=c.viewports.reduce((n,f,E)=>Math.abs(f.width-e)<=Math.abs(c.viewports[n].width-e)?E:n,0);return c.viewports[i].name}return"default"}}});var Z,P,R=p(()=>{"use strict";j();U();l();q();Z={viewertype:"vertical"},P=class extends s{constructor(e){super();r(this,"projectViewport");r(this,"_state");r(this,"state");this.projectViewport=e.project.projectViewport.value,e.project.projectViewport.subscribe("value",t=>{this.projectViewport=t,this.computeOptions()}),this._state={options:{...Z,...e.project.model.opts||{}},viewport_phone_portrait:{options:e.project.model.viewport_phone_portrait?.opts||{}},viewport_tablet_portrait:{options:e.project.model.viewport_phone_portrait?.opts||{}}},this.state=this._state.options,this.computeOptions()}getOverrides(e){return e!=="viewport_default"?this._state[e]?.options:{}}computeOptions(){this.state=this.getOptionsForViewport(this.projectViewport)}setOptions(e){let t=w(this.projectViewport);if(t==="viewport_default"){let i={...this._state.options,...e};this._state.options=i}else{let n={...this.getOverrides(t),...e},f={...this._state.options,...n};this._state[t].options=f}this.computeOptions(),window.dispatchEvent(new Event("resize"))}getOptionsForViewport(e){let t=w(e),i=this.getOverrides(t);return{...this._state.options,...i}}}});var g,T=p(()=>{"use strict";j();L();F();g=class extends I{constructor(o){super(o),this.setCurrentPage(o.initialPageId)}setCurrentPage(o){this._model.pid!==o&&(O(this._model,e=>{e&&(e.pid=o,Object.assign(e,_(e,o)))}),this.computeWidgetModel())}bindRouter(o){o.subscribe("state.currentPageId",()=>{this.setCurrentPage(o.state.currentPageId)})}}});var h,B=p(()=>{"use strict";W();k();N();K();T();l();h=class extends s{constructor(e){super();r(this,"project");r(this,"triggersStore");r(this,"animationsStore");r(this,"zIndexStore");r(this,"aboveWidgets");r(this,"abovePage");this.project=e.project,this.abovePage=new u({page:{_id:"above-page",num:-1,num_id:-1,height:0},project:this.project}),this.triggersStore=this.detach(new V),this.animationsStore=this.detach(new M),this.zIndexStore=this.detach(new S),this.aboveWidgets=this.createAboveAllWidgets(e.aboveAllWidgets,e.initialPageId),this.zIndexStore.init(this.aboveWidgets)}createAboveAllWidgets(e=[],t){let i=[];for(let n of e)i.push(new g({widget:n,initialPageId:t,pageMeta:void 0,project:this.project,triggersStore:this.triggersStore,animationsStore:this.animationsStore,zIndexStore:this.zIndexStore}));return i}bindAboveWidgetsRouter(e){for(let t of this.aboveWidgets)t.bindRouter(e)}}});var D,Ae,Re,Te,$=p(()=>{"use strict";x();l();W();A();R();B();D=class extends s{constructor(e){super();r(this,"model");r(this,"pages",[]);r(this,"projectViewport");r(this,"options");r(this,"meta");r(this,"abovePage");this.model=e.project,this.projectViewport=new m,this.options=new P({project:this}),this.meta={num_id:this.model.num_id,title:this.model.title||"",description:this.model.title||"",masterSharePageId:this.model.master_share_pid||"",editParams:this.model.edit_params||{},owner:this.model.user,forbiddenBackground:this.model.pass_bg,publicPath:e.publicPath,isExportedProject:e.isExportedProject||!1,isProjectOnDomain:e.isProjectOnDomain||!1,isProjectOnProfileDomain:e.isProjectOnProfileDomain||!1,exportedBasePath:e.exportedBasePath||""},this.pages=this.createPages(this.model.pages||[]),this.abovePage=this.detach(new h({aboveAllWidgets:this.model.aboveAllWidgets,initialPageId:e.initialPageId||this.findPageByIndex("first")?.model._id||"",project:this}))}createPages(e){let t=[];for(let i of e)t.push(this.detach(new u({project:this,page:v(i)})));return t}findPageByIndex(e){let t=typeof e=="number"?e:e==="first"?0:this.pages.length-1,i=this.pages[t];if(i)return i}findPageById(e){return this.pages.find(t=>t.model._id===e)}findPageByUri(e){return this.pages.find(t=>t.model.uri===e)}findPageByNum(e){return this.pages.find(t=>t.model.num===e)}getPageIndex(e){let t=this.pages.findIndex(i=>i.model._id===e);return t===-1?null:t}getPageUri(e){let t=this.findPageById(e);return t?t.model.uri?`${t.model.uri}/`:t.model.num===1?"":`${t.model.num}/`:null}getPageNum(e){let t=this.findPageById(e);return t?t.model.num:null}},{useSnapshot:Ae,useProxy:Re,Provider:Te}=s.createContext()});export{D as a,Ae as b,Re as c,Te as d,$ as e};
