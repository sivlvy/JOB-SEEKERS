import{g as k,s as y,l as T,a as B,c as H,o as q,b as A,i as r,d as C,e as z}from"./assets/modal-subscription-e2d13bc1.js";import{S as x}from"./assets/vendor-c374a7a2.js";const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let a={keyword:"",category:"",page:1,limit:6};$();k().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",s),new x({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",j);function j(t){t.preventDefault(),a.page=1,a.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),y("filters-parameters",a),u()}d.selectEl.addEventListener("change",P);function P(t){a.category=t.target.value,a.page=1,y("filters-parameters",a),u()}function $(){return window.innerWidth>=1440?a.limit=9:window.innerWidth>=768?a.limit=8:a.limit=6,a.limit}const V=document.querySelector(".product-list"),v=document.querySelector(".pagination ul"),h=document.querySelector(".pagination"),b=document.querySelector(".card-container"),g=document.querySelector(".main-content-nothing"),D=document.querySelector(".loader");document.querySelector(".filters-search-input");let p=a,f=0;g.style.display="none";async function u(){y("filters-parameters",p);const t=T("filters-parameters");try{const e=await B(t);D.style.display="none";const s=e.results;f=e.totalPages,e.results.length?(g.style.display="none",h.style.display="block",b.style.display="block",V.innerHTML=H(s)):(g.style.display="block",h.style.display="none",b.style.display="none");const n=document.querySelectorAll(".add-button");for(const l of n)l.addEventListener("click",q);F()}catch(e){console.log(e)}}function F(){if(f<=1){v.innerHTML="";return}v.innerHTML=N(f,p.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async s=>{const n=parseInt(s.currentTarget.dataset.page);!isNaN(n)&&n!==p.page&&(p.page=n,await u())})})}function N(t,e){let s="";const l=Math.floor(2.5);let i=e-l,o=e+l;i<1&&(i=1,o=Math.min(t,i+5-1)),o>t&&(o=t,i=Math.max(1,o-5+1)),e>1?s+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:s+=`
		<li class="btn prev disabled">
			<span>&lt;</span>
		</li>`,i>1&&(s+=`<li class="first numb" data-page="1">
			<span>1</span>
		</li>`,i>2&&(s+=`<li class="dots">
				<span>...</span>
			</li>`));for(let c=i;c<=o;c++)s+=`<li class="numb ${c===e?"active":""}" data-page="${c}">
			<span>${c}</span>
		</li>`;return o<t&&(o<t-1&&(s+=`<li class="dots">
				<span>...</span>
			</li>`),s+=`<li class="last numb" data-page="${t}">
			<span>${t}</span>
		</li>`),e<t?s+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:s+=`<li class="btn next disabled">
			<span>&gt;</span>
		</li>`,s}console.log("Hello");document.addEventListener("DOMContentLoaded",async function(){let t;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(function(){$(),u()},300)}),await u()});function w(){productmodal.classList.toggle("is-hidden")}function L(t){const e=document.getElementById("productmodal");A(t).then(({data:s})=>{e.innerHTML=_(s),O(e)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",W),t.style.display="flex",w()}function W(){const t=document.getElementById("productmodal");t.style.display="none",w()}function _(t){return`<div class="modal-2-wrap">
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
            </div>`}const S=document.querySelector(".popular-list");let E=5;S.innerHTML="";C(E).then(t=>{S.innerHTML=Q(t)});document.addEventListener("click",function(t){const e=t.target.closest(".popular-card");if(e){const s=e.dataset.productId;L(s)}});function Q(t){return t.slice(0,E).map(({_id:e,name:s,img:n,category:l,price:i,size:o,is10PercentOff:c,popularity:m})=>`<li class="popular-card" data-product-id="${e}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${n}" alt="${s}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${s.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${e}">
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
        </li>`).join("")}const M=document.querySelector(".discount-list");M.innerHTML="";z().then(t=>{M.innerHTML=G(t)});document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const s=e.dataset.productId;L(s)}});function R(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function G(t){return R(t,2).map(({_id:s,name:n,img:l,category:i,price:o,size:c,is10PercentOff:m,popularity:J})=>`<li class="discount-card" data-product-id="${s}">
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
             	<button class="add-discount-button add-button" type="button" data-id="${s}">
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
