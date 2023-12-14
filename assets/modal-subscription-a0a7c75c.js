import{a as d,b as y,N as h}from"./vendor-c374a7a2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();d.defaults.baseURL="https://food-boutique.b.goit.study/api";const N=async()=>{const{data:t}=await d.get("/products/categories");return t},D=async({keyword:t,category:s,page:c,limit:r,sortBy:e})=>{const o=new URLSearchParams({page:c,limit:r});t&&o.set("keyword",t),s&&o.set("category",s),e&&o.set("sortBy",e);const{data:a}=await d.get("/products/",{params:o});return a},b=async t=>await d.get(`/products/${t}`),x=async t=>{const{data:s}=await d.get(`/products/popular?limit=${t}`);return s},C=async()=>{const{data:t}=await d.get("/products/discount");return t},v=async t=>{const{data:s}=await d.post("/subscription",t);return s};function L(){y.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}function S(t,s){localStorage.setItem(t,JSON.stringify(s))}function w(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return h.Notify.failure("Oops! Something went wrong!"),s}}const m="/JOB-SEEKERS/assets/icons-58c424f0.svg";function M(t){return t.map(({img:s,name:c,category:r,size:e,popularity:o,_id:a,price:u})=>`<li class="card-wrapper" data-id="${a}">
					<div class="image-wrapper">
					<img src="${s}" alt="${c}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${c}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${r.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${e}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${o}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${u}</p>
			 <button class="add-button" type="button" data-id="${a}">
			 <svg class="icon-button"width="18" height="18">
             <use href="${m}#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}if(!localStorage.getItem("products")){const t=[];localStorage.setItem("products",JSON.stringify(t))}async function E(t){const s=t.currentTarget.dataset.id,c=w("products")||[];console.log(c);try{const r=await b(s);c.some(e=>e.data._id===s)||(c.push(r),S("products",c),document.querySelectorAll(".add-button").forEach(o=>{if(o.dataset.id===s){o.removeEventListener("click",E);const u=o.querySelector("svg use");o.style.backgroundColor="#6D8434",u.setAttribute("href",`${m}#icon-cart-success`)}}))}catch(r){throw new Error(r)}}const f=document.querySelector(".form-footer"),l=document.querySelector(".modal-subscription"),n=document.querySelector(".modal-unsubscription"),i=document.querySelector(".modal-backdrop-subscription"),$=document.querySelector(".container-modal");l.classList.add("is-hidden");n.classList.add("is-hidden");const p=t=>{const s=t.target;(s===l||s.closest(".close"))&&(l.classList.add("is-hidden"),i.classList.add("is-hidden")),(s===n||s.closest(".close"))&&(n.classList.add("is-hidden"),i.classList.add("is-hidden")),(s===$||s.closest(".close"))&&(n.classList.add("is-hidden"),i.classList.add("is-hidden"))};function g(t){(t.key==="Escape"||t.target===i)&&(l.classList.add("is-hidden"),n.classList.add("is-hidden"),i.classList.add("is-hidden"),document.body.style.overflow="auto")}const P=()=>{l.classList.remove("is-hidden"),i.classList.remove("is-hidden"),document.body.style.overflow="hidden"},O=()=>{n.classList.remove("is-hidden"),i.classList.remove("is-hidden"),document.body.style.overflow="hidden"},I=async t=>{const s={email:t};try{const c=await v(s);P()}catch(c){c.response.data.message==="Subscription already exists"?O():L()}};function q(t){t.preventDefault();const c=document.querySelector(".input-label").value.trim();I(c),f.reset()}f.addEventListener("submit",q);l.addEventListener("click",p);n.addEventListener("click",p);i.addEventListener("click",p);document.addEventListener("keydown",g);document.addEventListener("click",g);export{D as a,b,M as c,x as d,C as e,N as g,m as i,w as l,E as o,S as s};
//# sourceMappingURL=modal-subscription-a0a7c75c.js.map
