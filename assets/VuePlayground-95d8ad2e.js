import{e as _,f,g,s,h as m,v as y,i as R,j as a,C as h,_ as r}from"./app-b77eb5d6.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=f(),i=g(!0),t=s(),l=s(),n=s(),o=m(()=>y({},u,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-867f3540.js"),["assets/vue-repl-867f3540.js","assets/app-b77eb5d6.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-de833af9.js","assets/utils-a5e1dbae-143be013.js"]),r(()=>import("./codemirror-editor-4bd80545.js"),["assets/codemirror-editor-4bd80545.js","assets/utils-a5e1dbae-143be013.js","assets/app-b77eb5d6.js"])]);t.value=p,n.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:n.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};
