import{b as h}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-6ZBEBUM2.js";import{d as u}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var o=u(h()),a=r=>{o.default.extend(r.History.prototype,{universalStart:function(e){if(Modernizr.history)r.history.start(e);else{e.pushState=!1,e.silent=!0,e.hashChange=!0,r.history.start(e);let t=r.history.options.root.length,n=window.location.pathname.substr(t);r.history.navigate(n,{trigger:!0})}}});let s=r.Router.prototype.navigate;return r.Router.prototype.navigate=function(e,t){return e.indexOf("?")>-1||t&&t.skipQueryString?s.apply(this,arguments):(e+=window.location.search,s.call(this,e,t))},r.Model.prototype.getResetAttrs=function(e,t){let n=e.toJSON();return o.default.each(n,function(l,i){o.default.isObject(n[i]&&o.default.isObject(t[i]))&&(t[i]=this.getResetAttrs(n[i],t[i])),o.default.has(n,i)&&!o.default.has(t,i)&&(t[i]=void 0)},this),t},r},c=a;export{c as a};
