import{G as i}from"./index-BkuwJpVc.js";import{e as n}from"./emitter-E5P-NQ8u.js";const l=i("counter",()=>{function o(e){return`${parseInt(e,10).toFixed(0).replace(/./g,(t,s,u)=>s&&t!=="."&&(u.length-s)%3===0?`, ${t}`.replace(/\s/g,""):t)}`}function r(e){return new Date(e*1e3).toLocaleDateString()}function c(e,a="更新"){if(e.data.success)n.emit("push-message",{style:"success",title:`${a}成功`});else{const t=typeof e.data.message=="string"?[e.data.message]:e.data.message;n.emit("push-message",{style:"danger",title:`${a}失敗`,content:t.join("、")})}}return{currency:o,date:r,pushMessageState:c}});export{l as u};
