import"./assets/styles-364dcd46.js";import{a as g,S}from"./assets/vendor-baebd336.js";g.defaults.baseURL="https://food-boutique.b.goit.study/api";const y=async()=>{const{data:e}=await g.get("/products/categories");return e},v=async({value:e,category:i,page:o,limit:n,sortBy:s})=>{const t=new URLSearchParams({page:o,limit:n});e&&t.set("value",e),i&&t.set("category",i),s&&t.set("sortBy",s);const{data:a}=await g.get("/products/",{params:t});return a},$=document.querySelector(".product-list"),f=document.querySelector(".card-container"),L=document.querySelector(".loader");let E="",w="",T=1,m=6;f.offsetWidth>=768&&f.offsetWidth<1440&&(m=8);f.offsetWidth>=1440&&(m=9);v({value:E,category:w,page:T,limit:m}).then(e=>{L.style.visibility="hidden";const i=e.results;$.insertAdjacentHTML("afterbegin",F(i))}).catch(e=>{console.log(e)});function F(e){return e.map(({img:i,name:o,category:n,size:s,popularity:t,price:a})=>`<li class="card-wrapper">
					<div class="image-wrapper">
					<img src="${i}" alt="${o}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${o}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${n}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${s}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${t}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${a}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="../../../icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}const A=document.querySelector(".product-list"),M=document.querySelector(".pagination ul");let O="",q="",d=1,D=6,h=0;document.addEventListener("DOMContentLoaded",async function(){await e();function e(){v({value:O,category:q,page:d,limit:D}).then(s=>{const t=s.results;h=s.totalPages,A.innerHTML=n(t),i()}).catch(s=>{console.log(s)})}function i(){M.innerHTML=o(h,d),document.querySelectorAll(".pagination li:not(.disabled)").forEach(t=>{t.addEventListener("click",async a=>{const c=parseInt(a.currentTarget.dataset.page);!isNaN(c)&&c!==d&&(d=c,e())})})}function o(s,t){let a="",c,r=t-1,p=t+1;t>1?a+=`<li class="btn prev" data-page="${t-1}"><span>&lt;</span></li>`:a+='<li class="btn prev disabled"><span>&lt;</span></li>',t>2&&(a+='<li class="first numb" data-page="1"><span>1</span></li>',t>3&&(a+='<li class="dots"><span>...</span></li>')),t==s?r=r-2:t==s-1&&(r=r-1),t==1?p=p+2:t==2&&(p=p+1);for(var l=r;l<=p;l++)l>s||(l==0&&(l=l+1),t==l?c="active":c="",a+=`<li class="numb ${c}" data-page="${l}"><span>${l}</span></li>`);return t<s-1&&(t<s-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="last numb" data-page="${s}"><span>${s}</span></li>`),t<s?a+=`<li class="btn next" data-page="${t+1}"><span>&gt;</span></li>`:a+='<li class="btn next disabled"><span>&gt;</span></li>',a}function n(s){return s.map(({img:t,name:a,category:c,size:r,popularity:p,price:l})=>`
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${t}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${a}</p>
            <div class="product-items">
              <p class="product-item">Category:<span class="product-more-info">&nbsp;${c}</span></p>
              <p class="product-item">Size:<span class="product-more-info">&nbsp;${r}</span></p>
              <p class="product-item">Popularity:<span class="product-more-info">&nbsp;${p}</span></p>
            </div>
          </div>
          <div class="price-and-add">
            <p class="product-price">$${l}</p>
            <button class="add-button" type="button">
              <svg class="icon-button" width="18" height="18">
                <use href="../../../icons.svg#icon-cart-mob"></use>
              </svg>
            </button>
          </div>
        </li>`).join("")}});const u={selectEl:document.querySelector(".filterts-categories-select")};y().then(e=>{R(e)}).catch(e=>console.log(e));function R(e){const i='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';u.selectEl.insertAdjacentHTML("afterbegin",i);const o=e.map(s=>`<option value="${s}">${s.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');u.selectEl.insertAdjacentHTML("beforeend",o),new S({select:u.selectEl,settings:{showSearch:!1,searchHighlight:!0}});const n=new b;console.log(n),u.selectEl.addEventListener("change",s=>n.searchOptionForLocalStorage({key:"category",value:s.target.value}))}class b{constructor(){this.STORAGE_FILTERS_KEY="filters-parameters",this.defaultFilters=new Map([["keyword",null],["category",null],["page",1],["limit",6]]),this.setDefaultFilters(),this.saveFiltersToLocalStorage()}setDefaultFilters(){this.filtersData=JSON.parse(localStorage.getItem(this.STORAGE_FILTERS_KEY))||new Map(this.defaultFilters)}saveFiltersToLocalStorage(){localStorage.setItem(this.STORAGE_FILTERS_KEY,JSON.stringify([...this.filtersData]))}updateFilters({key:i,value:o}){this.filtersData.get(i)!==o&&(this.filtersData.set(i,o),this.saveFiltersToLocalStorage())}searchOptionForLocalStorage({key:i,value:o}){this.updateFilters({key:i,value:o}),console.log(Object.fromEntries([...this.filtersData]))}}console.log(b);
//# sourceMappingURL=commonHelpers2.js.map
