import{a as i,S as y}from"./vendor-baebd336.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}})();i.defaults.baseURL="https://food-boutique.b.goit.study/api";const b=async()=>{const{data:t}=await i.get("/products/categories");return t},u=async({value:t,category:o,page:r,limit:c,sortBy:s})=>{const e=new URLSearchParams({page:r,limit:c});t&&e.set("value",t),o&&e.set("category",o),s&&e.set("sortBy",s);const{data:n}=await i.get("/products/",{params:e});return n},v=async t=>{const{data:o}=await i.get(`/products/${t}`);return o},O=async t=>{const{data:o}=await i.get(`/products/popular?limit=${t}`);return o},I=async()=>{const{data:t}=await i.get("/products/discount");return t},l={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},p="filters-parameters";let a={keyword:"",category:"",page:1,limit:6};g();b().then(t=>{S(t),console.log(t)}).catch(t=>console.log(t));function S(t){const o='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';l.selectEl.insertAdjacentHTML("afterbegin",o);const r=t.map(c=>`<option value="${c}">${c.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');l.selectEl.insertAdjacentHTML("beforeend",r),new y({select:l.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}localStorage.setItem(p,JSON.stringify(a));l.selectEl.addEventListener("change",w);function w(t){a.category=t.target.value,$()}async function $(){localStorage.setItem(p,JSON.stringify(a));try{const t=await u(a);l.cardProduct.innerHTML=m(t.results)}catch(t){console.log(t)}}function g(){return window.innerWidth>=768&&window.innerWidth<1440?a.limit=8:window.innerWidth>=1440&&(a.limit=9),a.limit}const L=document.querySelector(".product-list"),P=document.querySelector(".loader");let f=a;console.log(f);g();u(f).then(t=>{P.style.display="none";const o=t.results;console.log(o),L.insertAdjacentHTML("afterbegin",m(o));const r=document.querySelectorAll(".add-button");console.log(r);for(const c of r)c.addEventListener("click",h)}).catch(t=>{console.log(t)});function m(t){return t.map(({img:o,name:r,category:c,size:s,popularity:e,_id:n,price:d})=>`<li class="card-wrapper" data-id="${n}">
					<div class="image-wrapper">
					<img src="${o}" alt="${r}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${r}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${c.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${s}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${e}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${d}</p>
			 <button class="add-button" type="button" data-id="${n}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function h(t){const o=t.currentTarget.dataset.id;console.log(o);const r=JSON.parse(localStorage.getItem("products"))||[];try{const c=await v(o);r.push(c),E(c),localStorage.setItem("products",JSON.stringify(r));const s=document.querySelectorAll(".add-button");for(const e of s)if(e.dataset.id===o){e.removeEventListener("click",h);const d=e.querySelector("svg use");e.style.backgroundColor="#6D8434",console.log(d),d.setAttribute("href","./icons.svg#icon-cart-success")}}catch(c){throw new Error(c)}}function E({img:t,name:o,category:r,size:c,popularity:s,_id:e,price:n}){return`<li class="card-wrapper" data-id="${e}">
            <div class="image-wrapper">
            <img src="${t}" alt="${o}" loading="lazy" class="product-image" width="140" height="140" />
            </div>
            <div class="product-info">
            <p class="product-name">
            ${o}
            </p>
            <div class ="product-items">
            <p  class="product-item">
            Category:<span class="product-more-info"> &nbsp;${r.replaceAll("_"," ")}</span>
            </p>
            <p class="product-item">
            Size:<span class="product-more-info"> &nbsp;${c}</span>
            </p>
            <p class="product-item">
            Popularity:<span class="product-more-info"> &nbsp;${s}</span>
            </p></div>
            
            </div>
            <div class="price-and-add">
            <p class="product-price">$${n}</p>
            <button class="add-button" type="button" data-id="${e}">
            <svg class="icon-button"width="18" height="18">
            <use href="/icons.svg#icon-cart-mob" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`}export{O as a,I as b,u as g};
//# sourceMappingURL=main-projects-e99f35aa.js.map
