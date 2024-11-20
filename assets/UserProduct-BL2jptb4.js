import{r as p,m as w,c as l,h as b,u as n,a as t,G as k,t as e,l as u,e as T,v as C,d as S,F as N,g as $,j as v,o as c,b as L,N as E,O as V}from"./index-DCH4RT8N.js";import{u as O}from"./counter-BqHJi77H.js";import{u as j}from"./productStore-BepJU24s.js";import{u as B}from"./cartStore-BMjQUvkA.js";const M={class:"container"},P={class:"row justify-content-center align-items-center mt-5"},U={class:"col-md-6"},D=["src","alt"],F={class:"col-md-5"},I={"aria-label":"breadcrumb"},R={class:"breadcrumb bg-white px-0 mb-0 py-3"},q={class:"breadcrumb-item"},A={class:"breadcrumb-item active","aria-current":"page"},G={class:"fw-bold h1 mb-1"},z={class:"text-muted"},H={key:0,class:"h4 fw-bold text-end"},J={key:1,class:"mb-0 text-muted text-end"},K={key:2,class:"h4 fw-bold text-end"},Q={class:"row align-items-center"},W={class:"col-6"},X={class:"input-group my-3 bg-light rounded"},Y={class:"input-group-prepend"},Z=["disabled"],tt=["disabled"],ot={class:"input-group-append"},st=["disabled"],et={class:"col-6"},at=["disabled"],ct={__name:"UserProduct",setup(nt){E();const g=V(),m=O(),_=j(),a=B(),s=p({}),r=p(1),h=async()=>{try{const d=`https://vue3-course-api.hexschool.io/api/cart-yu2513/product/${g.params.productId}`,o=await $.get(d);s.value=o.data.product}catch(d){console.error("Error fetching product:",d),m.pushMessageState({data:{message:"無法取得產品資訊"},success:!1})}},y=async d=>{try{await a.addToCart(d,1)}catch(o){console.error("Error adding to cart:",o)}};return w(()=>{h()}),(d,o)=>{const x=v("Loading"),f=v("router-link");return c(),l(N,null,[b(x,{active:n(_).isLoading||n(a).isLoading},null,8,["active"]),t("div",M,[t("div",P,[t("div",U,[t("img",{src:s.value.imageUrl,alt:s.value.title,style:{width:"100%",height:"500px","object-fit":"cover"},class:"img-fluid mb-3 rounded"},null,8,D)]),t("div",F,[t("nav",I,[t("ol",R,[t("li",q,[b(f,{to:"/user/shop"},{default:k(()=>o[4]||(o[4]=[L("Shop")])),_:1})]),t("li",A,e(s.value.title),1)])]),t("h2",G,e(s.value.title),1),t("p",null,e(s.value.content),1),t("p",z,e(s.value.description),1),s.value.price?u("",!0):(c(),l("p",H,"NT$"+e(s.value.origin_price),1)),s.value.price?(c(),l("p",J,[t("del",null,"NT$"+e(s.value.origin_price),1)])):u("",!0),s.value.price?(c(),l("p",K,"NT$"+e(s.value.price),1)):u("",!0),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",disabled:n(a).isLoading,onClick:o[0]||(o[0]=i=>r.value>1?r.value--:r.value)},o[5]||(o[5]=[t("i",{class:"bi bi-dash-lg"},null,-1)]),8,Z)]),T(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=i=>r.value=i),disabled:n(a).isLoading,class:"form-control border-0 text-center my-auto shadow-none bg-light"},null,8,tt),[[C,r.value,void 0,{number:!0}]]),t("div",ot,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",disabled:n(a).isLoading,onClick:o[2]||(o[2]=i=>r.value++)},o[6]||(o[6]=[t("i",{class:"bi bi-plus-lg"},null,-1)]),8,st)])])]),t("div",et,[t("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",disabled:n(a).isLoading,onClick:o[3]||(o[3]=i=>y(s.value.id))},e(n(a).status.loadingItem===s.value.id?"加入中...":"加入購物車"),9,at)])])]),o[7]||(o[7]=S('<div class="accordion col-md-11 my-5" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> # 產品特性 </button></h2><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body"><code>因螢幕顯示不同，實物顏色可能與照片略有差異。</code><br><strong>材質說明：</strong> 列出產品的編織材料（如毛線材質、厚度、觸感），並提醒購買者該材質的特性，例如是否容易起毛球、變形等。 <br><strong>尺寸測量方式：</strong>說明如何正確測量商品的尺寸，如帽子的周長或圍巾的長寬，並提供穿搭建議。 <br><strong>適用場合與季節：</strong>建議商品適合的季節或場合（例如冬季或休閒場合）。 </div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> # 使用與保養 </button></h2><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>清洗方式：</strong> 提供清洗和保養建議，避免損壞編織產品，例如毛線商品通常需手洗或低溫洗滌。 <br><strong>特殊編織工法：</strong>介紹商品是否使用特殊編織技術，並提醒在使用或保養時需注意的細節。 <br><strong>過敏提醒：</strong>材料包含容易引起過敏的成分（如羊毛），提醒敏感膚質的購買者注意。 </div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> # 購買與售後服務 </button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>手工製作時間：</strong> 若為手工製作，提供大約的製作時間，並說明每件商品可能有些微差異。 <br><strong>保固及維修：</strong> 說明是否提供保固或維修服務，以及聯繫方式。 <br><strong>退換貨政策：</strong> 說明是否接受退換貨及其條件，例如需保持原包裝、未使用等。 </div></div></div></div>',1))])])],64)}}};export{ct as default};