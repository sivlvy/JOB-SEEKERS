import{g as M,s as f,l as k,a as B,c as T,o as q,b as A,i as r,d as H,e as C}from"./assets/modal-subscription-a0a7c75c.js";import{S as z}from"./assets/vendor-c374a7a2.js";const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let o={keyword:"",category:"",page:1,limit:6};v();M().then(t=>{x(t)}).catch(t=>console.log(t));function x(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",s),new z({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",I);function I(t){t.preventDefault(),o.page=1,o.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),f("filters-parameters",o),u(),t.currentTarget.elements.searchQuery.value=""}d.selectEl.addEventListener("change",j);function j(t){o.category=t.target.value,o.page=1,f("filters-parameters",o),u()}function v(){return window.innerWidth>=1440?o.limit=9:window.innerWidth>=768?o.limit=8:o.limit=6,o.limit}const P=document.querySelector(".product-list"),V=document.querySelector(".pagination ul"),y=document.querySelector(".pagination"),h=document.querySelector(".card-container"),g=document.querySelector(".main-content-nothing"),D=document.querySelector(".loader");document.querySelector(".filters-search-input");let p=o,b=0;g.style.display="none";async function u(){f("filters-parameters",p);const t=k("filters-parameters");try{const e=await B(t);D.style.display="none";const s=e.results;b=e.totalPages,e.results.length?(g.style.display="none",y.style.display="block",h.style.display="block",P.innerHTML=T(s)):(g.style.display="block",y.style.display="none",h.style.display="none");const n=document.querySelectorAll(".add-button");for(const l of n)l.addEventListener("click",q);F()}catch(e){console.log(e)}}function F(){V.innerHTML=N(b,p.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async s=>{const n=parseInt(s.currentTarget.dataset.page);!isNaN(n)&&n!==p.page&&(p.page=n,await u())})})}function N(t,e){let s="";const l=Math.floor(2.5);let i=e-l,a=e+l;i<1&&(i=1,a=Math.min(t,i+5-1)),a>t&&(a=t,i=Math.max(1,a-5+1)),e>1?s+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:s+='<li class="btn prev disabled"><span>&lt;</span></li>',i>1&&(s+='<li class="first numb" data-page="1"><span>1</span></li>',i>2&&(s+='<li class="dots"><span>...</span></li>'));for(let c=i;c<=a;c++)s+=`<li class="numb ${c===e?"active":""}" data-page="${c}"><span>${c}</span></li>`;return a<t&&(a<t-1&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" data-page="${t}"><span>${t}</span></li>`),e<t?s+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:s+='<li class="btn next disabled"><span>&gt;</span></li>',s}document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await u();function t(){v(),u()}});function $(){productmodal.classList.toggle("is-hidden")}function w(t){const e=document.getElementById("productmodal");A(t).then(({data:s})=>{e.innerHTML=R(s),O(e)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",Q),t.style.display="flex",$()}function Q(){const t=document.getElementById("productmodal");t.style.display="none",$()}function R(t){return`<div class="modal-2-wrap">
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
            </div>`}const S=document.querySelector(".popular-list");let L=5;S.innerHTML="";H(L).then(t=>{S.innerHTML=W(t)});document.addEventListener("click",function(t){const e=t.target.closest(".popular-card");if(e){const s=e.dataset.productId;w(s)}});function W(t){return t.slice(0,L).map(({_id:e,name:s,img:n,category:l,price:i,size:a,is10PercentOff:c,popularity:m})=>`<li class="popular-card" data-product-id="${e}">
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
                		<p class="popular-size-item">Size:<span>${a}</span>Popularity:<span>${m}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const E=document.querySelector(".discount-list");E.innerHTML="";C().then(t=>{E.innerHTML=G(t)});document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const s=e.dataset.productId;w(s)}});function _(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function G(t){return _(t,2).map(({_id:s,name:n,img:l,category:i,price:a,size:c,is10PercentOff:m,popularity:J})=>`<li class="discount-card" data-product-id="${s}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${l}" alt="${n}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${n}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${a}</p>
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
