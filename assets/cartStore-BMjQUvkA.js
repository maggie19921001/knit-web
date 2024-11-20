import{P as C,r as l,M as i,g as o}from"./index-DCH4RT8N.js";const _=C("cartStore",()=>{const e=l(!1),c=l({}),d=l(""),s=l({loadingItem:""}),u=l(null),v=i(()=>c.value.carts?c.value.carts.reduce((a,r)=>a+r.qty,0):0),h=i(()=>u.value),y=i(()=>c.value.final_total||c.value.total),n=async()=>{try{e.value=!0;const r=await o.get("https://vue3-course-api.hexschool.io/api/cart-yu2513/cart");e.value=!1,c.value=r.data.data}catch(a){console.error("Error during get cart:",a)}};async function g(a,r=1){try{s.value.loadingItem=a,e.value=!0;const t={product_id:a,qty:r},E=await o.post("https://vue3-course-api.hexschool.io/api/cart-yu2513/cart",{data:t});return e.value=!1,s.value.loadingItem="",n(),E.data}catch(t){throw console.error("Error during add to cart:",t),e.value=!1,s.value.loadingItem="",t}}const f=async a=>{try{s.value.loadingItem=a.id,e.value=!0;const r={product_id:a.product_id,qty:a.qty},t=`https://vue3-course-api.hexschool.io/api/cart-yu2513/cart/${a.id}`,x=await o.put(t,{data:r});e.value=!1,s.value.loadingItem="",n()}catch(r){console.error("Error during update cart:",r)}},$=async a=>{try{e.value=!0;const r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/cart/${a.id}`,t=await o.delete(r);e.value=!1,n()}catch(r){console.error("Error during remove from cart:",r)}},w=async()=>{try{e.value=!0;const a={code:d.value},t=await o.post("https://vue3-course-api.hexschool.io/api/cart-yu2513/coupon",{data:a});e.value=!1,n(),countStore.pushMessageState(t,"套用優惠券")}catch(a){console.error("Error during add coupon code:",a)}},m=async a=>{try{e.value=!0;const t=await o.post("https://vue3-course-api.hexschool.io/api/cart-yu2513/order",{data:a});return u.value=a,e.value=!1,t.data.orderId}catch(r){throw console.error("Error during create order:",r),e.value=!1,r}},p=async a=>{try{e.value=!0;const r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/order/${a}`,t=await o.get(r);u.value=t.data.order,e.value=!1}catch(r){console.error("Error during get order:",r),e.value=!1}};return{cart:c,isLoading:e,status:s,coupon_code:d,currentOrder:u,cartTotal:v,orderData:h,finalTotal:y,addToCart:g,updateCart:f,getCart:n,removeFromCart:$,addCouponCode:w,createOrder:m,getOrder:p,payOrder:async a=>{try{e.value=!0;const r=`https://vue3-course-api.hexschool.io/api/cart-yu2513/pay/${a}`,t=await o.post(r);return await p(a),e.value=!1,t}catch(r){throw console.error("Error during pay order:",r),e.value=!1,r}},clearOrder:()=>{u.value=null}}});export{_ as u};
