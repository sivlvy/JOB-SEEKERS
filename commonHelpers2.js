import{g as b,a as $,b as q,c as C,d as z}from"./assets/modal-subscription-a5356be5.js";import{S as w}from"./assets/vendor-65dc389e.js";function S(t){return t.map(({img:s,name:a,category:c,size:d,popularity:g,_id:e,price:n})=>`<li class="card-wrapper" data-id="${e}">
					<div class="image-wrapper">
					<img src="${s}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${a}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${c.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${d}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${g}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${n}</p>
			 <button class="add-button" type="button" data-id="${e}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}function v(t,s){localStorage.setItem(t,JSON.stringify(s))}const m={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let o={keyword:"",category:"",page:1,limit:6};E();b().then(t=>{B(t)}).catch(t=>console.log(t));function B(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';m.selectEl.insertAdjacentHTML("afterbegin",s);const a=t.map(c=>`<option value="${c}">${c.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');m.selectEl.insertAdjacentHTML("beforeend",a),new w({select:m.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}m.formEl.addEventListener("submit",j);function j(t){t.preventDefault(),o.page=1,o.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",o),L()}m.selectEl.addEventListener("change",I);function I(t){o.category=t.target.value,o.page=1,v("filters-parameters",o),L()}async function L(){try{const t=await $(o);m.cardProduct.innerHTML=S(t.results)}catch(t){console.log(t)}}function E(){return window.innerWidth>=1440?o.limit=9:window.innerWidth>=768?o.limit=8:o.limit=6,o.limit}const P=document.querySelector(".product-list"),x=document.querySelector(".pagination ul"),D=document.querySelector(".loader");let l=o,y=0;document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await s();function t(){E(),s()}async function s(){v("filters-parameters",o);try{const e=await $(o);D.style.display="none";const n=e.results;y=e.totalPages,P.innerHTML=S(n),a()}catch(e){console.log(e)}}function a(){x.innerHTML=g(y,l.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(n=>{n.addEventListener("click",async i=>{const r=parseInt(i.currentTarget.dataset.page);!isNaN(r)&&r!==l.page&&(l.page=r,await s())})})}document.querySelector(".filters-form").addEventListener("submit",async function(e){e.preventDefault(),l.page=1,l.keyword=e.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",l),await s()}),document.querySelector(".filters-categories-select").addEventListener("change",async function(e){l.category=e.target.value,l.page=1,v("filters-parameters",l),await s()});const c=document.querySelector(".filters-categories-select");b().then(e=>{d(e)}).catch(e=>console.log(e));function d(e){const n='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';c.insertAdjacentHTML("afterbegin",n);const i=e.map(r=>`<option value="${r}">${r.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');c.insertAdjacentHTML("beforeend",i),new w({select:c,settings:{showSearch:!1,searchHighlight:!0}})}function g(e,n){let i="";const h=Math.floor(2.5);let p=n-h,u=n+h;p<1&&(p=1,u=Math.min(e,p+5-1)),u>e&&(u=e,p=Math.max(1,u-5+1)),n>1?i+=`<li class="btn prev" data-page="${n-1}"><span>&lt;</span></li>`:i+='<li class="btn prev disabled"><span>&lt;</span></li>',p>1&&(i+='<li class="first numb" data-page="1"><span>1</span></li>',p>2&&(i+='<li class="dots"><span>...</span></li>'));for(let f=p;f<=u;f++)i+=`<li class="numb ${f===n?"active":""}" data-page="${f}"><span>${f}</span></li>`;return u<e&&(u<e-1&&(i+='<li class="dots"><span>...</span></li>'),i+=`<li class="last numb" data-page="${e}"><span>${e}</span></li>`),n<e?i+=`<li class="btn next" data-page="${n+1}"><span>&gt;</span></li>`:i+='<li class="btn next disabled"><span>&gt;</span></li>',i}});function M(){productmodal.classList.toggle("is-hidden")}function T(t){const s=document.getElementById("productmodal");q(t).then(({data:a})=>{s.innerHTML=O(a),V(s)})}function V(t){t.querySelector(".mod-card-close").addEventListener("click",N),t.style.display="flex",M()}function N(){const t=document.getElementById("productmodal");t.style.display="none",M()}function O(t){return`<div class="modal-2-wrap">
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
            </div>`}const k=document.querySelector(".popular-list");let A=5;k.innerHTML="";C(A).then(t=>{k.innerHTML=_(t)});document.addEventListener("click",function(t){const s=t.target.closest(".popular-card");if(s){const a=s.dataset.productId;T(a)}});function _(t){return t.slice(0,A).map(({_id:s,name:a,img:c,category:d,price:g,size:e,is10PercentOff:n,popularity:i})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${c}" alt="${a}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${a.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${d.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${e}</span>Popularity:<span>${i}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const H=document.querySelector(".discount-list");H.innerHTML="";z().then(t=>{H.innerHTML=R(t)});document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const a=s.dataset.productId;T(a)}});function Q(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function R(t){return Q(t,2).map(({_id:a,name:c,img:d,category:g,price:e,size:n,is10PercentOff:i,popularity:r})=>`<li class="discount-card" data-product-id="${a}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${d}" alt="${c}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${c.substring(0,19)}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${e}</p>
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
