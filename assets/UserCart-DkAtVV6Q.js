import{e as p,s as E,c as l,d as f,a as t,F as m,l as j,t as c,m as x,q as C,f as w,v as k,w as N,h as v,r as $,o as i,i as U}from"./index-2Dn1kYt-.js";import{u as I}from"./counter-EE2JcGaJ.js";import"./emitter-E5P-NQ8u.js";const L={class:"container"},S={class:"row justify-content-center"},B={class:"col-md-6 bg-white py-5",style:{"min-height":"calc(100vh - 56px - 76px)"}},D=["src"],F={class:"w-100 p-3 position-relative"},M=["onClick"],T={class:"mb-0 fw-bold"},z={class:"mb-1 text-muted",style:{"font-size":"14px"}},A={class:"d-flex justify-content-between align-items-center w-100"},G={class:"input-group w-50 align-items-center"},H=["onClick"],J=["onUpdate:modelValue","disabled","onChange"],K=["onClick"],O={class:"text-end text-success"},P={key:0,class:"text-success"},Q={class:"d-flex flex-column justify-content-end p-3"},R={class:"text-end"},W={key:0},X={class:"text-end text-success"},Y={class:"input-group mb-3 input-group-sm"},st={__name:"UserCart",setup(Z){const u=I(),a=p(!1),n=p({}),_=p(""),y=p({loadingItem:""}),d=async()=>{try{a.value=!0;const o=await v.get("https://vue3-course-api.hexschool.io/api/cart-yu2513/cart");a.value=!1,n.value=o.data.data}catch(s){console.error("Error during get cart:",s)}},h=async s=>{try{y.value.loadingItem=s.id,a.value=!0;const o={product_id:s.product_id,qty:s.qty},r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/cart/${s.id}`,g=await v.put(r,{data:o});a.value=!1,y.value.loadingItem="",d()}catch(o){console.error("Error during update cart:",o)}},q=async s=>{try{a.value=!0;const o=`https://vue3-course-api.hexschool.io/api/cart-yu2513/cart/${s.id}`,r=await v.delete(o);a.value=!1,d()}catch(o){console.error("Error during remove from cart:",o)}},V=async()=>{try{a.value=!0;const s={code:_.value},r=await v.post("https://vue3-course-api.hexschool.io/api/cart-yu2513/coupon",{data:s});a.value=!1,d(),u.pushMessageState(r,"套用優惠券")}catch(s){console.error("Error during add coupon code:",s)}};return E(()=>{d()}),(s,o)=>{const r=$("Loading"),g=$("router-link");return i(),l(m,null,[f(r,{active:a.value},null,8,["active"]),t("div",L,[t("div",S,[t("div",B,[o[5]||(o[5]=t("div",{class:"d-flex justify-content-between"},[t("h2",{class:"mt-2"},"購物車 Cart Detail")],-1)),(i(!0),l(m,null,j(n.value.carts,e=>(i(),l("div",{class:"d-flex mt-4",key:e.id},[t("img",{src:e.product.imageUrl,alt:"",style:{width:"120px",height:"120px","object-fit":"cover"}},null,8,D),t("div",F,[t("button",{class:"position-absolute border-0 rounded-5",style:{top:"16px",right:"16px"},onClick:b=>q(e)},o[1]||(o[1]=[t("i",{class:"bi bi-x-lg"},null,-1)]),8,M),t("p",T,c(e.product.title),1),t("p",z,c(e.product.content),1),t("div",A,[t("div",G,[t("button",{class:"btn input-group-prepend pe-1 border-0 py-2",type:"button",id:"button-addon1",onClick:()=>{e.qty>1&&(e.qty--,h(e))}},o[2]||(o[2]=[t("i",{class:"bi bi-dash-lg"},null,-1)]),8,H),w(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none px-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:"1","onUpdate:modelValue":b=>e.qty=b,disabled:y.value.loadingItem===e.id,onChange:b=>h(e)},null,40,J),[[k,e.qty,void 0,{number:!0}]]),t("button",{class:"btn input-group-append ps-1 border-0 py-2",type:"button",id:"button-addon2",onClick:()=>{e.qty++,h(e)}},o[3]||(o[3]=[t("i",{class:"bi bi-plus-lg"},null,-1)]),8,K)]),t("div",O,[n.value.final_total!==n.value.total?(i(),l("small",P,"折扣價：")):C("",!0),U(" NT$"+c(x(u).currency(e.final_total)),1)])])])]))),128)),o[6]||(o[6]=t("hr",null,null,-1)),t("div",Q,[t("p",R,"總計 "+c(x(u).currency(n.value.total)),1),n.value.total!==n.value.final_total?(i(),l("div",W,[t("p",X,"折扣價"+c(x(u).currency(n.value.final_total)),1)])):C("",!0)]),t("div",Y,[w(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":o[0]||(o[0]=e=>_.value=e)},null,512),[[k,_.value]]),t("div",{class:"input-group-append"},[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:V}," 套用優惠碼 ")])]),f(g,{to:"/user/userform"},{default:N(()=>o[4]||(o[4]=[t("button",{class:"btn btn-dark py-3 px-7 rounded-0"},"下一步",-1)])),_:1})])])])],64)}}};export{st as default};
