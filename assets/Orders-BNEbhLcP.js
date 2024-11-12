import{r as u,i as q,o as n,c as a,a as t,t as s,q as O,m as f,F as g,l as S,s as B,f as w,d as C,e as P,x as U,w as F,k as j}from"./index-BkuwJpVc.js";import{u as z,_ as I}from"./DeleteModal-Cg_Zj1f-.js";import{u as E}from"./counter-BRGq6M10.js";import{_ as R}from"./Pagination-DyCyUiQX.js";import"./component-functions-DaCNwHYc.js";import"./emitter-E5P-NQ8u.js";const A={class:"modal-dialog modal-xl",role:"document"},G={class:"modal-content border-0"},H={class:"modal-body"},J={class:"row"},K={class:"col-md-4"},Q={class:"table"},T={key:0},W={class:"col-md-8"},X={class:"table"},Y={key:0},Z={key:1},tt={key:0,class:"text-success"},lt={key:1,class:"text-muted"},et={class:"table"},st={class:"text-end"},ot={__name:"OrderModal",props:{order:{type:Object,default:()=>({})}},emits:["update-order"],setup(L,{expose:$,emit:v}){const _=E(),b=u(null),e=u({}),h=L,y=v,k=()=>{y("update-order",e.value)},{showModal:x,hideModal:m}=z(b);return q(()=>h.order,M=>{e.value={...M}},{deep:!0}),$({showModal:x,hideModal:m,tempOrder:e}),(M,l)=>(n(),a("div",{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modal",ref:b},[t("div",A,[t("div",G,[l[14]||(l[14]=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",H,[t("div",J,[t("div",K,[l[4]||(l[4]=t("h3",null,"用戶資料",-1)),t("table",Q,[e.value.user?(n(),a("tbody",T,[t("tr",null,[l[0]||(l[0]=t("th",{style:{width:"100px"}},"姓名",-1)),t("td",null,s(e.value.user.name),1)]),t("tr",null,[l[1]||(l[1]=t("th",null,"Email",-1)),t("td",null,s(e.value.user.email),1)]),t("tr",null,[l[2]||(l[2]=t("th",null,"電話",-1)),t("td",null,s(e.value.user.tel),1)]),t("tr",null,[l[3]||(l[3]=t("th",null,"地址",-1)),t("td",null,s(e.value.user.address),1)])])):O("",!0)])]),t("div",W,[l[11]||(l[11]=t("h3",null,"訂單細節",-1)),t("table",X,[t("tbody",null,[t("tr",null,[l[5]||(l[5]=t("th",{style:{width:"100px"}},"訂單編號",-1)),t("td",null,s(e.value.id),1)]),t("tr",null,[l[6]||(l[6]=t("th",null,"下單時間",-1)),t("td",null,s(f(_).date(e.value.create_at)),1)]),t("tr",null,[l[7]||(l[7]=t("th",null,"付款時間",-1)),t("td",null,[e.value.paid_date?(n(),a("span",Y,s(f(_).date(e.value.paid_date)),1)):(n(),a("span",Z,"時間不正確"))])]),t("tr",null,[l[8]||(l[8]=t("th",null,"付款狀態",-1)),t("td",null,[e.value.is_paid?(n(),a("strong",tt,"已付款")):(n(),a("span",lt,"尚未付款"))])]),t("tr",null,[l[9]||(l[9]=t("th",null,"總金額",-1)),t("td",null,s(f(_).currency(e.value.total)),1)])])]),l[12]||(l[12]=t("h3",null,"選購商品",-1)),t("table",et,[l[10]||(l[10]=t("thead",null,[t("tr")],-1)),t("tbody",null,[(n(!0),a(g,null,S(e.value.products,i=>(n(),a("tr",{key:i.id},[t("th",null,s(i.product.title),1),t("td",null,s(i.qty)+" / "+s(i.product.unit),1),t("td",st,s(f(_).currency(i.final_total)),1)]))),128))])])])])]),t("div",{class:"modal-footer"},[l[13]||(l[13]=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1)),t("button",{type:"button",class:"btn btn-primary",onClick:k},"確認")])])])],512))}},nt={class:"table mt-4"},at=["textContent"],dt={class:"list-unstyled"},rt={class:"text-right"},ut={class:"form-check form-switch"},it=["id","onUpdate:modelValue","onChange"],ct=["for"],pt={key:0},_t={key:1},ht={class:"btn-group"},mt=["onClick"],vt=["onClick"],xt={__name:"Orders",setup(L){const $=E(),v=u({}),_=u(!1),b=u({}),e=u(!1),h=u({}),y=u(1),k=u(null),x=u(null),m=async(d=1)=>{try{e.value=!0,y.value=d;const r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/admin/orders?page=${d}`,p=await C.get(r);e.value=!1,v.value=p.data.orders,b.value=p.data.pagination,console.log(p)}catch(r){console.error("Error during get orders:",r)}},M=(d,r)=>{h.value={...r},_.value=d,k.value.showModal()},l=d=>{h.value={...d},k.value.showModal()},i=async d=>{e.value=!0;const r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/admin/order/${d.id}`,p={is_paid:d.is_paid},o=await C.put(r,{paid:p});console.log("is paid",o),m(y),$.pushMessageState(o,"更新付款狀態")},V=async()=>{e.value=!0;const d=`https://vue3-course-api.hexschool.io/api/cart-yu2513/admin/order/${item.id}`,r=await C.delete(d);console.log("delOrder",r),x.value.hideModal(),m(y)};return B(()=>{m()}),(d,r)=>{const p=P("Loading");return n(),a(g,null,[w(p,{active:e.value},null,8,["active"]),t("table",nt,[r[0]||(r[0]=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1)),t("tbody",null,[(n(!0),a(g,null,S(v.value,(o,D)=>(n(),a(g,{key:D},[v.value.length?(n(),a("tr",{key:0,class:U({"text-secondary":!o.is_paid})},[t("td",null,s(f($).date(o.create_at)),1),t("td",null,[o.user?(n(),a("span",{key:0,textContent:s(o.user.email)},null,8,at)):O("",!0)]),t("td",null,[t("ul",dt,[(n(!0),a(g,null,S(o.products,(c,N)=>(n(),a("li",{key:N},s(c.product.title)+" 數量："+s(c.qty)+" "+s(c.product.unit),1))),128))])]),t("td",rt,s(o.total),1),t("td",null,[t("div",ut,[F(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${o.id}`,"onUpdate:modelValue":c=>o.is_paid=c,onChange:c=>i(o)},null,40,it),[[j,o.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${o.id}`},[o.is_paid?(n(),a("span",pt,"已付款")):(n(),a("span",_t,"未付款"))],8,ct)])]),t("td",null,[t("div",ht,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:c=>M(!1,o)},"檢視",8,mt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:c=>l(o)},"刪除",8,vt)])])],2)):O("",!0)],64))),128))])]),w(ot,{order:h.value,ref:"orderModal",onUpdatePaid:i},null,8,["order"]),w(I,{item:h.value,ref_key:"delModal",ref:x,onDelItem:V},null,8,["item"]),w(R,{pages:b.value,onEmitPages:m},null,8,["pages"])],64)}}};export{xt as default};
