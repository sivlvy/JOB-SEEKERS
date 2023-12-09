import"./assets/styles-827b5446.js";import{a as l,S as p}from"./assets/vendor-baebd336.js";l.defaults.baseURL="https://food-boutique.b.goit.study/api";const u=async()=>{const{data:t}=await l.get("/products/categories");return t},f=async({value:t,category:e,page:s,limit:o,sortBy:a})=>{const c=new URLSearchParams({page:s,limit:o});t&&c.set("value",t),e&&c.set("category",e),a&&c.set("sortBy",a);const{data:r}=await l.get("/products/",{params:c});return r},g=document.querySelector(".product-list"),n=document.querySelector(".card-container"),h=document.querySelector(".loader");let m="",b="",v=1,d=6;n.offsetWidth>=768&&n.offsetWidth<1440&&(d=8);n.offsetWidth>=1440&&(d=9);f({value:m,category:b,page:v,limit:d}).then(t=>{h.style.visibility="hidden";const e=t.results;g.insertAdjacentHTML("afterbegin",S(e))}).catch(t=>{console.log(t)});function S(t){return t.map(({img:e,name:s,category:o,size:a,popularity:c,price:r})=>`<li class="card-wrapper">
					<div class="image-wrapper">
					<img src="${e}" alt="${s}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${s}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${o}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${a}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${c}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${r}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="../../../icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}const i={selectEl:document.querySelector("filterts-categories-select")};u().then(t=>{y(t)}).catch(t=>console.log(t));function y(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';i.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');i.selectEl.insertAdjacentHTML("afterbegin",s),new p({select:i.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}
//# sourceMappingURL=commonHelpers2.js.map
