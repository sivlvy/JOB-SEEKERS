import"./assets/styles-906a7919.js";import{a as i,S as l}from"./assets/vendor-baebd336.js";i.defaults.baseURL="https://food-boutique.b.goit.study/api";const p=async()=>{const{data:t}=await i.get("/products/categories");return t},d=async({value:t,category:e,page:s,limit:o,sortBy:a})=>{const c=new URLSearchParams({page:s,limit:o});t&&c.set("value",t),e&&c.set("category",e),a&&c.set("sortBy",a);const{data:r}=await i.get("/products/",{params:c});return r},u=document.querySelector(".product-list");let g="",h="",m=1,f=6;d({value:g,category:h,page:m,limit:f}).then(t=>{const e=t.results;u.insertAdjacentHTML("afterbegin",b(e))}).catch(t=>{console.log(t)});function b(t){return t.map(({img:e,name:s,category:o,size:a,popularity:c,price:r})=>`<li class="card-wrapper">
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
		   
		   </li>`).join("")}const n={selectEl:document.querySelector("filterts-categories-select")};p().then(t=>{v(t)}).catch(t=>console.log(t));function v(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';n.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');n.selectEl.insertAdjacentHTML("afterbegin",s),new l({select:n.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}
//# sourceMappingURL=commonHelpers2.js.map
