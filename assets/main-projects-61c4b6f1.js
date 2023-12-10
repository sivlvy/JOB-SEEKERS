import{a as i,S as y}from"./vendor-baebd336.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();i.defaults.baseURL="https://food-boutique.b.goit.study/api";const h=async()=>{const{data:t}=await i.get("/products/categories");return t},d=async({value:t,category:o,page:c,limit:s,sortBy:e})=>{const r=new URLSearchParams({page:c,limit:s});t&&r.set("value",t),o&&r.set("category",o),e&&r.set("sortBy",e);const{data:n}=await i.get("/products/",{params:r});return n},S=async t=>{const{data:o}=await i.get(`/products/${t}`);return o},A=async t=>{const{data:o}=await i.get(`/products/popular?limit=${t}`);return o},O=async()=>{const{data:t}=await i.get("/products/discount");return t},l={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},u="filters-parameters";let a={keyword:"",category:"",page:1,limit:6};p();h().then(t=>{w(t),console.log(t)}).catch(t=>console.log(t));function w(t){const o='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';l.selectEl.insertAdjacentHTML("afterbegin",o);const c=t.map(s=>`<option value="${s}">${s.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');l.selectEl.insertAdjacentHTML("beforeend",c),new y({select:l.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}localStorage.setItem(u,JSON.stringify(a));l.selectEl.addEventListener("change",b);function b(t){a.category=t.target.value,v()}async function v(){localStorage.setItem(u,JSON.stringify(a));try{const t=await d(a);l.cardProduct.innerHTML=f(t.results)}catch(t){console.log(t)}}function p(){return window.innerWidth>=768&&window.innerWidth<1440?a.limit=8:window.innerWidth>=1440&&(a.limit=9),a.limit}const L=document.querySelector(".product-list"),P=document.querySelector(".loader");let g=a;console.log(g);p();d(g).then(t=>{P.style.display="none";const o=t.results;console.log(o),L.insertAdjacentHTML("afterbegin",f(o));const c=document.querySelectorAll(".add-button");for(const s of c)s.addEventListener("click",$)}).catch(t=>{console.log(t)});function f(t){return t.map(({img:o,name:c,category:s,size:e,popularity:r,_id:n,price:m})=>`<li class="card-wrapper" data-id="${n}">
					<div class="image-wrapper">
					<img src="${o}" alt="${c}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${c}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${s.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${e}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${r}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${m}</p>
			 <button class="add-button" type="button" data-id="${n}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function $(t){const o=t.currentTarget.dataset.id,c=JSON.parse(localStorage.getItem("products"))||[];try{const s=await S(o);c.push(s),localStorage.setItem("products",JSON.stringify(c))}catch(s){throw new Error(s)}}export{A as a,O as b,d as g};
//# sourceMappingURL=main-projects-61c4b6f1.js.map
