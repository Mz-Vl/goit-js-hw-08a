import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                           */import{t as n}from"./assets/vendor-51f205bb.js";const a=document.querySelector(".feedback-form"),o=document.querySelector("input[name='email']"),s=document.querySelector("textarea[name='message']"),m="feedback-form-state",l=n(()=>{const e={email:o.value,message:s.value};localStorage.setItem(m,JSON.stringify(e))},500),c=()=>{const e=localStorage.getItem(m);if(e){const{email:t,message:r}=JSON.parse(e);o.value=t,s.value=r}};a.addEventListener("input",l);window.addEventListener("load",c);a.addEventListener("submit",e=>{e.preventDefault();const t={email:o.value,message:s.value};console.log(t),a.reset(),localStorage.removeItem(m)});
//# sourceMappingURL=commonHelpers.js.map
