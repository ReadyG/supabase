import{u as O,b,g,r as P}from"./index.e6837c14.js";import{d as x}from"./DocsAsideTree.b47c7654.js";import{r as J}from"./asyncData.94cc2b18.js";import{u as S,g as T}from"./Container.6caa0b4c.js";import{u as m}from"./cookie.e9152437.js";import R from"./ContentPreviewMode.036fa26a.js";import{i as A,j as U,k as F,S as L,m as k}from"./entry.4b8d8355.js";import"./runtime-core.esm-bundler.92c6bc06.js";/* empty css                               */import"./query.c3f7607a.js";const D=(l=[],v,h)=>{const f=[...v||[]],n=[...h||[]],p=JSON.parse(JSON.stringify(l));for(const i of f)if(i.oldPath)if(n.splice(n.findIndex(r=>r.path===i.oldPath),1),f.find(r=>r.path===i.oldPath))p.push({path:i.path,parsed:i.parsed});else{const r=p.find(d=>d.path===i.oldPath);r&&(r.path=i.path,i.parsed?r.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(d=>{r.parsed[d]=i.pathMeta[d]}))}else if(i.new)p.push({path:i.path,parsed:i.parsed});else{const u=p.find(r=>r.path===i.path);u&&Object.assign(u,{path:i.path,parsed:i.parsed})}for(const i of n)p.splice(p.findIndex(u=>u.path===i.path),1);const w=new Intl.Collator(void 0,{numeric:!0});return p.sort((i,u)=>w.compare(i.path,u.path)),p},E=A(()=>JSON.parse(JSON.stringify(T()))),V=()=>{const l=O(),v=b().public.studio||{},h=E();let f;const n=S("studio-client-db",()=>null),p=S("studio-preview-db-files",()=>[]);l.hook("content:storage",e=>{n.value=e});const w=async(e,t,s=!0)=>{const o=m("previewToken",{sameSite:"none",secure:!0}),c=await e.getKeys(`${o.value}:`);await Promise.all(c.map(a=>e.removeItem(a))),await e.setItem(`${o.value}$`,JSON.stringify({ignoreBuiltContents:s})),await Promise.all(t.map(a=>{var C;return e.setItem(`${o.value}:${(C=a.parsed)==null?void 0:C._id}`,JSON.stringify(a.parsed))}))},i=e=>{const t=g(l,T);U(t,P(e,h)),e||F(t,h)},u=e=>{var s,o,c,a;const t=(a=(c=(o=(s=l==null?void 0:l.vueApp)==null?void 0:s._context)==null?void 0:o.config)==null?void 0:c.globalProperties)==null?void 0:a.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(f||(f=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),g(l,t.updateTheme,[P(e,f)]))},r=async e=>{if(p.value=e.files=e.files||p.value||[],!n.value)return!1;const t=D(e.files,e.additions,e.deletions),s=t.filter(a=>!a.path.startsWith(L));await w(n.value,s,(e.files||[]).length!==0);const o=t.find(a=>a.path===k.appConfig);i(o==null?void 0:o.parsed);const c=t.find(a=>a.path===k.tokensConfig);return u(c==null?void 0:c.parsed),y(),!0},d=async()=>{const e=m("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:v.apiURL,method:"POST",params:{token:e.value}})},I=()=>{const e=m("previewToken",{sameSite:"none",secure:!0}),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),x(R,{previewToken:e,apiURL:v.apiURL,syncPreview:r,requestPreviewSyncAPI:d}).mount(t)},$=async e=>{var o,c;const t=m("previewToken",{sameSite:"none",secure:!0});if(!e)return null;e=e.replace(/\/$/,"");let s=await((o=n.value)==null?void 0:o.getItem(`${t.value}:${e}`));return s||(s=await((c=n.value)==null?void 0:c.getItem(e))),s},N=e=>{var s;const t=m("previewToken",{sameSite:"none",secure:!0});n.value&&n.value.setItem(`${t.value}:${(s=e.parsed)==null?void 0:s._id}`,JSON.stringify(e.parsed))},_=async e=>{var s;const t=m("previewToken",{sameSite:"none",secure:!0});await((s=n.value)==null?void 0:s.removeItem(`${t.value}:${e}`))},y=()=>{g(l,J)};return{apiURL:v.apiURL,contentStorage:n,syncPreviewFiles:w,syncPreviewAppConfig:i,syncPreviewTokensConfig:u,requestPreviewSynchronization:d,mountPreviewUI:I,findContentWithId:$,updateContent:N,removeContentWithId:_,requestRerender:y}};export{V as useStudio};