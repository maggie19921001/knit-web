import{r as e,c as m,a as o,w as l,v as d,b as v,o as b,u as f,d as w}from"./index-BkuwJpVc.js";const g={class:"container mt-5"},x={class:"col-md-6"},y={class:"mb-2"},h={class:"mb-2"},P={__name:"Login",setup(k){const u=f(),a=e(""),n=e(""),p=e({username:a,password:n}),i=e(""),c=async()=>{try{const s=await w.post("https://vue3-course-api.hexschool.io/admin/signin",p.value);i.value=s.data.token;const t=new Date(s.data.expired);document.cookie=`loginToken=${i.value}; expires=${t.toUTCString()};path=/;`,u.push("/dashboard/products")}catch(r){console.error("Error during sign in:",r)}};return(r,s)=>(b(),m("div",g,[o("form",{class:"row justify-content-center",onSubmit:v(c,["prevent"])},[o("div",x,[s[4]||(s[4]=o("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1)),o("div",y,[s[2]||(s[2]=o("label",{for:"inputEmail",class:"sr-only"},"Email address",-1)),l(o("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t)},null,512),[[d,a.value]])]),o("div",h,[s[3]||(s[3]=o("label",{for:"inputPassword",class:"sr-only"},"Password",-1)),l(o("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t)},null,512),[[d,n.value]])]),s[5]||(s[5]=o("div",{class:"text-end mt-4"},[o("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1))])],32)]))}};export{P as default};
