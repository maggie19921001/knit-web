import{r as i,s as b,c as o,a as t,F as y,l as f,t as s,j as h,q as k,b as g,E as x,d as c,o as r,u as R}from"./index-BkuwJpVc.js";const _={class:"my-5 row justify-content-center"},$={class:"table align-middle"},w={class:"table"},E={key:0},M={key:1,class:"text-success"},A={key:0,class:"text-end"},B={key:1,class:"text-end"},V={__name:"UserCheckout",setup(N){R();const p=x(),e=i({user:{}}),u=i(""),n=i(!1),m=async()=>{try{n.value=!0;const a=`https://vue3-course-api.hexschool.io/api/cart-yu2513/order/${u.value}`,l=await c.get(a);n.value=!1,e.value=l.data.order}catch(a){console.error("Error during get order:",a)}},v=async()=>{try{n.value=!0;const a=`https://vue3-course-api.hexschool.io/api/cart-yu2513/pay/${u.value}`,l=await c.post(a);n.value=!1,console.log(l)}catch(a){console.error("Error during pay order:",a)}};return b(()=>{u.value=p.params.orderId,m()}),(a,l)=>(r(),o("div",_,[t("form",{class:"col-md-6",onSubmit:g(v,["prevent"])},[t("table",$,[l[1]||(l[1]=t("thead",null,[t("tr",null,[t("th",null,"品名"),t("th",null,"數量"),t("th",null,"原價"),t("th",null,"優惠價")])],-1)),t("tbody",null,[(r(!0),o(y,null,f(e.value.products,d=>(r(),o("tr",{key:d.id},[t("td",null,s(d.product.title),1),t("td",null,s(d.qty)+" / "+s(d.product.unit),1),t("td",null,s(d.total),1),t("td",null,s(d.final_total),1)]))),128))]),t("tfoot",null,[t("tr",null,[l[0]||(l[0]=t("td",{colspan:"3",class:"text-end"},"總計",-1)),t("td",null,s(e.value.total),1)])])]),t("table",w,[t("tbody",null,[t("tr",null,[l[2]||(l[2]=t("th",{width:"100"},"Email",-1)),t("td",null,s(e.value.user.email),1)]),t("tr",null,[l[3]||(l[3]=t("th",null,"姓名",-1)),t("td",null,s(e.value.user.name),1)]),t("tr",null,[l[4]||(l[4]=t("th",null,"收件人電話",-1)),t("td",null,s(e.value.user.tel),1)]),t("tr",null,[l[5]||(l[5]=t("th",null,"收件人地址",-1)),t("td",null,s(e.value.user.address),1)]),t("tr",null,[l[6]||(l[6]=t("th",null,"付款狀態",-1)),t("td",null,[e.value.is_paid?(r(),o("span",M,"付款完成")):(r(),o("span",E,"尚未付款"))])])])]),e.value.is_paid===!1?(r(),o("div",A,l[7]||(l[7]=[h('<p class="mt-4 mb-2">付款方式</p><div class="form-check mb-2"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked><label class="form-check-label text-muted" for="gridRadios1">WebATM </label></div><div class="form-check mb-2"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"><label class="form-check-label text-muted" for="gridRadios2">ATM </label></div><div class="form-check mb-2"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"><label class="form-check-label text-muted" for="gridRadios3">ApplePay </label></div><button class="btn btn-dark py-3 px-7 rounded-0">確認付款去</button>',5)]))):e.value.is_paid===!0?(r(),o("div",B,l[8]||(l[8]=[t("button",{class:"btn btn-dark py-3 px-7 rounded-0 disabled"},"付款完成",-1)]))):k("",!0)],32)]))}};export{V as default};
