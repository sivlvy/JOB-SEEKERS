import{g as T,s as y,l as v,a as B,c as q,o as H,b as A,i as r,d as C,e as z}from"./assets/modal-subscription-62550150.js";import{S as x}from"./assets/vendor-c374a7a2.js";const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let i={keyword:"",category:"",page:1,limit:6};S();T().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",s);const e=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",e),new x({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",j);function j(t){t.preventDefault(),i.page=1,i.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),y("filters-parameters",i),u()}d.selectEl.addEventListener("change",P);function P(t){i.category=t.target.value,i.page=1,y("filters-parameters",i),u()}function S(){return window.innerWidth>=1440?i.limit=9:window.innerWidth>=768?i.limit=8:i.limit=6,i.limit}const F=document.querySelector(".product-list"),h=document.querySelector(".pagination ul"),b=document.querySelector(".pagination"),$=document.querySelector(".card-container"),g=document.querySelector(".main-content-nothing"),V=document.querySelector(".loader");document.querySelector(".filters-search-input");let p=i,f=0;g.style.display="none";async function u(){y("filters-parameters",p);const t=v("products");console.log(t);const s=v("filters-parameters");console.log(s);try{const e=await B(s);V.style.display="none";const n=e.results;console.log(n),f=e.totalPages;const l=document.querySelectorAll(".add-button");e.results.length?(g.style.display="none",b.style.display="block",$.style.display="block",F.innerHTML=q(n)):(g.style.display="block",b.style.display="none",$.style.display="none");const a=document.querySelectorAll(".add-button");for(const o of a)o.addEventListener("click",H);D()}catch(e){console.log(e)}}function D(){if(f<=1){h.innerHTML="";return}h.innerHTML=N(f,p.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async e=>{const n=parseInt(e.currentTarget.dataset.page);!isNaN(n)&&n!==p.page&&(p.page=n,await u())})})}function N(t,s){let e="";const l=Math.floor(2.5);let a=s-l,o=s+l;a<1&&(a=1,o=Math.min(t,a+5-1)),o>t&&(o=t,a=Math.max(1,o-5+1)),s>1?e+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:e+=`
		<li class="btn prev disabled">
			<span>&lt;</span>
		</li>`,a>1&&(e+=`<li class="first numb" data-page="1">
			<span>1</span>
		</li>`,a>2&&(e+=`<li class="dots">
				<span>...</span>
			</li>`));for(let c=a;c<=o;c++)e+=`<li class="numb ${c===s?"active":""}" data-page="${c}">
			<span>${c}</span>
		</li>`;return o<t&&(o<t-1&&(e+=`<li class="dots">
				<span>...</span>
			</li>`),e+=`<li class="last numb" data-page="${t}">
			<span>${t}</span>
		</li>`),s<t?e+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:e+=`<li class="btn next disabled">
			<span>&gt;</span>
		</li>`,e}console.log("Hello");document.addEventListener("DOMContentLoaded",async function(){let t;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){S(),u()},300)}),await u()});function L(){productmodal.classList.toggle("is-hidden")}function w(t){const s=document.getElementById("productmodal");A(t).then(({data:e})=>{s.innerHTML=_(e),O(s)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",W),t.style.display="flex",L()}function W(){const t=document.getElementById("productmodal");t.style.display="none",L()}function _(t){return`<div class="modal-2-wrap">
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
                    <button class="modal-button-section add-to-cart " type="button" data-id="${t._id}">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="${r}#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="${r}#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`}const E=document.querySelector(".popular-list");let M=5;E.innerHTML="";C(M).then(t=>{E.innerHTML=Q(t)});document.addEventListener("click",function(t){const s=t.target.closest(".popular-card");if(s){const e=s.dataset.productId;w(e)}});function Q(t){return t.slice(0,M).map(({_id:s,name:e,img:n,category:l,price:a,size:o,is10PercentOff:c,popularity:m})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${n}" alt="${e}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${e.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="${r}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${l.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${o}</span>Popularity:<span>${m}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const k=document.querySelector(".discount-list");k.innerHTML="";z().then(t=>{k.innerHTML=G(t)});document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const e=s.dataset.productId;w(e)}});function R(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function G(t){return R(t,2).map(({_id:e,name:n,img:l,category:a,price:o,size:c,is10PercentOff:m,popularity:J})=>`<li class="discount-card" data-product-id="${e}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${l}" alt="${n}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${n}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${o}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${e}">
							<svg class="discount-icon-button" width="18" height="18">
		 					<use href="${r}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${r}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
