import{g as L,a as f,b as E,c as M,d as k}from"./assets/modal-subscription-2f55ca03.js";import{S as T}from"./assets/vendor-65dc389e.js";function v(t){return t.map(({img:i,name:a,category:e,size:s,popularity:o,_id:n,price:d})=>`<li class="card-wrapper" data-id="${n}">
					<div class="image-wrapper">
					<img src="${i}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${a}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${e.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${s}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${o}</span>
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
		   
		   </li>`).join("")}function m(t,i){localStorage.setItem(t,JSON.stringify(i))}const p={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let c={keyword:"",category:"",page:1,limit:6};z();L().then(t=>{C(t)}).catch(t=>console.log(t));function C(t){const i='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';p.selectEl.insertAdjacentHTML("afterbegin",i);const a=t.map(e=>`<option value="${e}">${e.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');p.selectEl.insertAdjacentHTML("beforeend",a),new T({select:p.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}p.formEl.addEventListener("submit",H);function H(t){t.preventDefault(),c.page=1,c.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),m("filters-parameters",c),b()}p.selectEl.addEventListener("change",q);function q(t){c.category=t.target.value,c.page=1,m("filters-parameters",c),b()}async function b(){try{const t=await f(c);p.cardProduct.innerHTML=v(t.results)}catch(t){console.log(t)}}function z(){return window.innerWidth>=768&&window.innerWidth<1440?c.limit=8:window.innerWidth>=1440&&(c.limit=9),c.limit}const A=document.querySelector(".product-list"),I=document.querySelector(".pagination ul"),j=document.querySelector(".loader");let u=c,g=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){m("filters-parameters",c),f(u).then(e=>{j.style.display="none";const s=e.results;g=e.totalPages,A.innerHTML=v(s),i()}).catch(e=>{console.log(e)})}function i(){I.innerHTML=a(g,u.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async o=>{const n=parseInt(o.currentTarget.dataset.page);!isNaN(n)&&n!==u.page&&(u.page=n,t())})})}function a(e,s){let o="",n,d=s-1,r=s+1;s>1?o+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:o+='<li class="btn prev disabled"><span>&lt;</span></li>',s>2&&(o+='<li class="first numb" data-page="1"><span>1</span></li>',s>3&&(o+='<li class="dots"><span>...</span></li>')),s==e?d=d-2:s==e-1&&(d=d-1),s==1?r=r+2:s==2&&(r=r+1);for(var l=d;l<=r;l++)l>e||(l==0&&(l=l+1),s==l?n="active":n="",o+=`<li class="numb ${n}" data-page="${l}"><span>${l}</span></li>`);return s<e-1&&(s<e-2&&(o+='<li class="dots"><span>...</span></li>'),o+=`<li class="last numb" data-page="${e}"><span>${e}</span></li>`),s<e?o+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:o+='<li class="btn next disabled"><span>&gt;</span></li>',o}});function h(){productmodal.classList.toggle("is-hidden")}function y(t){const i=document.getElementById("productmodal");E(t).then(({data:a})=>{i.innerHTML=N(a),B(i)})}function B(t){t.querySelector(".mod-card-close").addEventListener("click",D),t.style.display="flex",h()}function D(){const t=document.getElementById("productmodal");t.style.display="none",h()}function N(t){return`<div class="modal-2-wrap">
	<div class="modal-img-wrap">
                <div class="modal-img-section">
                    <a class="modal-gallery-link" >
                        <img src="${t.img}" alt="${t.name}" width="160" height="160" loading="lazy" />
                    </a>
                </div>
                <div class="modal-center-section">
					<div class="modal-section-up">
                		<p class="modal-info-item">${t.name}</p>		
                        <div class="modal-subsection">
                        <p class="modal-category-item">Category: <span>${t.category.replace("_"," ")}</span>Size:<span>${t.size}</span></p>
                		<p class="modal-popularity-item"></span>Popularity:<span>${t.popularity}</span></p>
									
					    </div>
                    </div>
					<div class="modal-section-down">
                    <p class="modal-desc-item">${t.desc}</p>
                	</div>
                 </div> 
				</div>
				 <div class="modal-price-button">
                    <p class="modal-info-item">$${t.price}</p>	
                    <button class="modal-button-section add-to-cart" type="button" data-id="${t._id}">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="../../../icons.svg#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="../../../icons.svg#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`}const $=document.querySelector(".popular-list");let w=5;$.innerHTML="";M(w).then(t=>{$.innerHTML=O(t)});document.addEventListener("click",function(t){const i=t.target.closest(".popular-card");if(i){const a=i.dataset.productId;y(a)}});function O(t){return t.slice(0,w).map(({_id:i,name:a,img:e,category:s,price:o,size:n,is10PercentOff:d,popularity:r})=>`<li class="popular-card" data-product-id="${i}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${e}" alt="${a}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${a.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${i}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${s.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${n}</span>Popularity:<span>${r}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const S=document.querySelector(".discount-list");S.innerHTML="";k().then(t=>{S.innerHTML=W(t)});document.addEventListener("click",function(t){const i=t.target.closest(".discount-card");if(i){const a=i.dataset.productId;y(a)}});function x(t,i){return t.slice().sort(()=>Math.random()-.5).slice(0,i)}function W(t){return x(t,2).map(({_id:a,name:e,img:s,category:o,price:n,size:d,is10PercentOff:r,popularity:l})=>`<li class="discount-card" data-product-id="${a}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${s}" alt="${e}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${e.substring(0,19)}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${n}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${a}>
					<svg class="discount-icon-button bagbag" width="18" height="18">
		 			<use href="../../../icons.svg#cart" >
		 			</use>
					</svg>
				</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="/icons.svg#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
