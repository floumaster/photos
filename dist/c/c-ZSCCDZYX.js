import{a as _,c as s,f as g}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-UUNMXK3M.js";import{a as u,h as y}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-SJ2LILPV.js";import{a as p}from"https://st-p.rmcdn.net/8e59565c/dist/c/c-AUVFGGVF.js";function w(a){let e=f({type:a,url:window.location.href,referrer:document.referrer,queryParams:u,cookiesGetter:_,decodeBase64:atob}),i=btoa(JSON.stringify(e));s("_rm_join_analytics_data",i,10)}function f(a){let{type:e,url:i,referrer:c,queryParams:l,cookiesGetter:n,decodeBase64:d}=a,r=["utm_campaign","utm_source","utm_medium","utm_content","utm_term","utm_id"].reduce((t,m)=>(t[m]=l(m),t),{rm_url:encodeURI(i),rm_referrer:c,timestamp:Date.now(),_ga:n("_ga"),...e&&{type:e}}),o=n("_rm_amp_data");if(o){let t=JSON.parse(d(o));r={...r,initial_utm_source:t.initial_utm_source,initial_utm_medium:t.initial_utm_medium,initial_utm_campaign:t.initial_utm_campaign,initial_utm_content:t.initial_utm_content,initial_utm_term:t.initial_utm_term,initial_utm_id:t.initial_utm_id,all_utm_campaigns:t.all_utm_campaigns}}return r}var D=p(()=>{"use strict";g();y()});export{w as a,D as b};
