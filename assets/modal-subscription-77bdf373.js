import{a as i,b as p}from"./vendor-ab5f5c01.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();i.defaults.baseURL="https://food-boutique.b.goit.study/api";const E=async()=>{const{data:t}=await i.get("/products/categories");return t},P=async({keyword:t,category:e,page:n,limit:l,sortBy:s})=>{const o=new URLSearchParams({page:n,limit:l});t&&o.set("keyword",t),e&&o.set("category",e),s&&o.set("sortBy",s);const{data:a}=await i.get("/products/",{params:o});return a},q=async t=>await i.get(`/products/${t}`),O=async t=>{const{data:e}=await i.get(`/products/popular?limit=${t}`);return e},k=async()=>{const{data:t}=await i.get("/products/discount");return t},f=async t=>{const{data:e}=await i.post("/subscription",t);return e};function y(){p.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}const g=document.querySelector(".form-footer"),d=document.querySelector(".modal-subscription"),r=document.querySelector(".modal-unsubscription"),c=document.querySelector(".modal-backdrop-subscription"),h=document.querySelector(".container-modal");d.classList.add("is-hidden");r.classList.add("is-hidden");const u=t=>{const e=t.target;(e===d||e.closest(".close"))&&(d.classList.add("is-hidden"),c.classList.add("is-hidden")),(e===r||e.closest(".close"))&&(r.classList.add("is-hidden"),c.classList.add("is-hidden")),(e===h||e.closest(".close"))&&(r.classList.add("is-hidden"),c.classList.add("is-hidden"))};document.addEventListener("keydown",m);document.addEventListener("click",m);function m(t){(t.key==="Escape"||t.target===c)&&c.classList.add("is-hidden")}document.addEventListener("click",m);const L=()=>{d.classList.remove("is-hidden"),c.classList.remove("is-hidden")},b=()=>{r.classList.remove("is-hidden"),c.classList.remove("is-hidden")},S=async t=>{const e={email:t};try{const n=await f(e);L()}catch(n){n.response.data.message==="Subscription already exists"?b():y()}};function v(t){t.preventDefault();const n=document.querySelector(".input-label").value.trim();S(n)}g.addEventListener("submit",v);d.addEventListener("click",u);r.addEventListener("click",u);c.addEventListener("click",u);export{E as a,P as b,O as c,k as d,q as g};
//# sourceMappingURL=modal-subscription-77bdf373.js.map
