import{L as S,r as y,M as f,w as I,m as j,c as n,a as e,F as u,i as C,h as B,u as g,n as m,l,j as V,o as a,t as d,b as M,N as U}from"./index-DCH4RT8N.js";import{u as D}from"./productStore-BepJU24s.js";import{u as E}from"./cartStore-BMjQUvkA.js";const F={class:"d-flex gap-3 justify-content-center my-5",role:"group","aria-label":"Basic radio toggle button group"},z=["id","checked"],A=["for","onClick"],O={class:"container mx-auto"},R={class:"row mt-4"},q={class:"card border-0 mb-4 position-relative"},G=["src","onClick"],H={class:"card-body p-0"},J=["onClick"],K={key:0,class:"text-muted mt-3"},Q={key:1,class:"text-muted mt-3"},W={key:2,class:""},X=["onClick","disabled"],Y={key:0,class:"spinner-border text-primary spinner-border-sm text-light",role:"status"},Z={key:0,class:"d-flex justify-content-center mt-4"},tt={"aria-label":"Product pagination"},et={class:"pagination"},st=["disabled"],ot=["onClick"],nt=["disabled"],at={key:1,class:"text-center mt-5"},rt={__name:"UserShop",setup(it){const P=U(),p=D(),v=E(),$=["全部","工具","毛線","課程","組合"],c=y("全部"),T=o=>{c.value=o},x=o=>{P.push(`/user/product/${o}`)},N=async o=>{try{await v.addToCart(o,1)}catch(s){console.error("Error adding to cart:",s)}},_=f(()=>c.value==="全部"?p.products:p.products.filter(o=>o.category.includes(c.value))),r=y(1),h=y(9),w=f(()=>{const o=(r.value-1)*h.value,s=o+h.value;return _.value.slice(o,s)}),b=f(()=>Math.ceil(_.value.length/h.value)),k=o=>{o>=1&&o<=b.value&&(r.value=o,window.scrollTo({top:0,behavior:"smooth"}))};return I(c,()=>{r.value=1}),j(()=>{p.getProducts()}),(o,s)=>{const L=V("Loading");return a(),n(u,null,[e("div",F,[(a(),n(u,null,C($,(t,i)=>(a(),n(u,{key:i},[e("input",{id:"btnradio"+(i+1),type:"radio",class:"btn-check",name:"btnradio",autocomplete:"off",checked:i===0},null,8,z),e("label",{class:m(["btn btn-outline-primary px-4",{active:c.value===t}]),for:"btnradio"+(i+1),onClick:lt=>T(t)},d(t),11,A)],64))),64))]),B(L,{active:g(p).isLoading||g(v).isLoading},null,8,["active"]),e("div",O,[e("div",R,[(a(!0),n(u,null,C(w.value,t=>(a(),n("div",{class:"col-md-4 col-sm-6",key:t.id},[e("div",q,[e("img",{src:t.imageUrl,alt:"產品圖片",class:"card-img-top rounded-2",style:{width:"100%",height:"300px","object-fit":"cover",cursor:"pointer"},onClick:i=>x(t.id)},null,8,G),e("div",H,[e("h5",{class:"mb-0 mt-3",style:{cursor:"pointer"},onClick:i=>x(t.id)},d(t.title),9,J),t.price?l("",!0):(a(),n("p",K,"NT$"+d(t.origin_price),1)),t.price?(a(),n("del",Q,"NT$"+d(t.origin_price),1)):l("",!0),t.price?(a(),n("h6",W,"特價 NT$"+d(t.price),1)):l("",!0),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:i=>N(t.id),disabled:g(v).status.loadingItem===t.id},[g(v).status.loadingItem===t.id?(a(),n("div",Y,s[2]||(s[2]=[e("span",{class:"visually-hidden"},"Loading...",-1)]))):l("",!0),s[3]||(s[3]=M(" 加到購物車 "))],8,X)])])]))),128))])]),_.value.length>0?(a(),n("div",Z,[e("nav",tt,[e("ul",et,[e("li",{class:m(["page-item",{disabled:r.value===1}])},[e("button",{class:"btn page-link rounded-0 rounded-start-2",onClick:s[0]||(s[0]=t=>k(r.value-1)),disabled:r.value===1},s[4]||(s[4]=[e("span",{"aria-hidden":"true"},"«",-1)]),8,st)],2),(a(!0),n(u,null,C(b.value,t=>(a(),n("li",{key:t,class:m(["page-item",{active:t===r.value}])},[e("button",{class:"btn page-link rounded-0",onClick:i=>k(t)},d(t),9,ot)],2))),128)),e("li",{class:m(["page-item",{disabled:r.value===b.value}])},[e("button",{class:"btn page-link rounded-0 rounded-end-2",onClick:s[1]||(s[1]=t=>k(r.value+1)),disabled:r.value===b.value},s[5]||(s[5]=[e("span",{"aria-hidden":"true"},"»",-1)]),8,nt)],2)])])])):l("",!0),_.value.length===0?(a(),n("div",at,s[6]||(s[6]=[e("p",{class:"text-muted"},"該分類下目前沒有產品。",-1)]))):l("",!0)],64)}}},pt=S(rt,[["__scopeId","data-v-5d598146"]]);export{pt as default};
