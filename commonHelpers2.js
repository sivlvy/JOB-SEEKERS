import"./assets/styles-3d570f93.js";import{a as n,S as u}from"./assets/vendor-baebd336.js";n.defaults.baseURL="https://food-boutique.b.goit.study/api";const g=async()=>{const{data:t}=await n.get("/products/categories");return t},h=async({value:t,category:e,page:s,limit:o,sortBy:a})=>{const r=new URLSearchParams({page:s,limit:o});t&&r.set("value",t),e&&r.set("category",e),a&&r.set("sortBy",a);const{data:c}=await n.get("/products/",{params:r});return c},f=document.querySelector(".product-list"),l=document.querySelector(".card-container"),S=document.querySelector(".loader");let m="",v="",y=1,d=6;l.offsetWidth>=768&&l.offsetWidth<1440&&(d=8);l.offsetWidth>=1440&&(d=9);h({value:m,category:v,page:y,limit:d}).then(t=>{S.style.visibility="hidden";const e=t.results;f.insertAdjacentHTML("afterbegin",b(e))}).catch(t=>{console.log(t)});function b(t){return t.map(({img:e,name:s,category:o,size:a,popularity:r,price:c})=>`<li class="card-wrapper">
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
			Popularity:<span class="product-more-info"> &nbsp;${r}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${c}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="../../../icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}const i={selectEl:document.querySelector(".filterts-categories-select")};g().then(t=>{E(t)}).catch(t=>console.log(t));function E(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';i.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(a=>`<option value="${a}">${a.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');i.selectEl.insertAdjacentHTML("beforeend",s),new u({select:i.selectEl,settings:{showSearch:!1,searchHighlight:!0}});const o=new p;console.log(o),i.selectEl.addEventListener("change",a=>o.searchOptionForLocalStorage({key:"category",value:a.target.value}))}class p{constructor(){this.STORAGE_FILTERS_KEY="filters-parameters",this.defaultFilters=new Map([["keyword",null],["category",null],["page",1],["limit",6]]),this.setDefaultFilters(),this.saveFiltersToLocalStorage()}setDefaultFilters(){this.filtersData=JSON.parse(localStorage.getItem(this.STORAGE_FILTERS_KEY))||new Map(this.defaultFilters)}saveFiltersToLocalStorage(){localStorage.setItem(this.STORAGE_FILTERS_KEY,JSON.stringify([...this.filtersData]))}updateFilters({key:e,value:s}){this.filtersData.get(e)!==s&&(this.filtersData.set(e,s),this.saveFiltersToLocalStorage())}searchOptionForLocalStorage({key:e,value:s}){this.updateFilters({key:e,value:s}),console.log(Object.fromEntries([...this.filtersData]))}}console.log(p);
//# sourceMappingURL=commonHelpers2.js.map
