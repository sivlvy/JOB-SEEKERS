import{i as r,l as h,g as b,s as m,a as A,b as T,c as B,d as C}from"./assets/modal-subscription-9fe9ee4a.js";import{S as H}from"./assets/vendor-c374a7a2.js";function z(t){return t.map(({img:e,name:s,category:n,size:i,popularity:a,_id:o,price:c})=>`<li class="card-wrapper" data-id="${o}">
					<div class="image-wrapper">
					<img src="${e}" alt="${s}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${s}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${n.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${i}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${a}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${c}</p>
			 <button class="add-button" type="button" data-id="${o}">
			 <svg class="icon-button"width="18" height="18">
             <use href="${r}#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function $(t){const e=t.currentTarget.dataset.id;console.log(e);const s=h("products")||[];try{const n=await b(e);s.some(i=>i.data._id===e)||(s.push(n),m("products",s),document.querySelectorAll(".add-button").forEach(a=>{if(a.dataset.id===e){a.removeEventListener("click",$);const c=a.querySelector("svg use");a.style.backgroundColor="#6D8434",c.setAttribute("href",`${r}#icon-cart-success`)}}))}catch(n){throw new Error(n)}}const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let l={keyword:"",category:"",page:1,limit:6};w();A().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",s),new H({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",x);function x(t){t.preventDefault(),l.page=1,l.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),m("filters-parameters",l),u(),t.currentTarget.elements.searchQuery.value=""}d.selectEl.addEventListener("change",D);function D(t){l.category=t.target.value,l.page=1,m("filters-parameters",l),u()}function w(){return window.innerWidth>=1440?l.limit=9:window.innerWidth>=768?l.limit=8:l.limit=6,l.limit}const j=document.querySelector(".product-list"),P=document.querySelector(".pagination ul"),y=document.querySelector(".pagination"),v=document.querySelector(".card-container"),f=document.querySelector(".main-content-nothing"),V=document.querySelector(".loader");document.querySelector(".filters-search-input");let p=l,S=0;f.style.display="none";async function u(){m("filters-parameters",p);const t=h("filters-parameters");try{const e=await T(t);V.style.display="none";const s=e.results;S=e.totalPages,e.results.length?(f.style.display="none",y.style.display="block",v.style.display="block",j.innerHTML=z(s)):(f.style.display="block",y.style.display="none",v.style.display="none");const n=document.querySelectorAll(".add-button");for(const i of n)i.addEventListener("click",$);F()}catch(e){console.log(e)}}function F(){P.innerHTML=N(S,p.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async s=>{const n=parseInt(s.currentTarget.dataset.page);!isNaN(n)&&n!==p.page&&(p.page=n,await u())})})}function N(t,e){let s="";const i=Math.floor(2.5);let a=e-i,o=e+i;a<1&&(a=1,o=Math.min(t,a+5-1)),o>t&&(o=t,a=Math.max(1,o-5+1)),e>1?s+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:s+='<li class="btn prev disabled"><span>&lt;</span></li>',a>1&&(s+='<li class="first numb" data-page="1"><span>1</span></li>',a>2&&(s+='<li class="dots"><span>...</span></li>'));for(let c=a;c<=o;c++)s+=`<li class="numb ${c===e?"active":""}" data-page="${c}"><span>${c}</span></li>`;return o<t&&(o<t-1&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" data-page="${t}"><span>${t}</span></li>`),e<t?s+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:s+='<li class="btn next disabled"><span>&gt;</span></li>',s}document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await u();function t(){w(),u()}});function L(){productmodal.classList.toggle("is-hidden")}function E(t){const e=document.getElementById("productmodal");b(t).then(({data:s})=>{e.innerHTML=Q(s),O(e)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",_),t.style.display="flex",L()}function _(){const t=document.getElementById("productmodal");t.style.display="none",L()}function Q(t){return`<div class="modal-2-wrap">
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
            </div>`}const M=document.querySelector(".popular-list");let k=5;M.innerHTML="";B(k).then(t=>{M.innerHTML=R(t)});document.addEventListener("click",function(t){const e=t.target.closest(".popular-card");if(e){const s=e.dataset.productId;E(s)}});function R(t){return t.slice(0,k).map(({_id:e,name:s,img:n,category:i,price:a,size:o,is10PercentOff:c,popularity:g})=>`<li class="popular-card" data-product-id="${e}">
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
                		<p class="popular-category-item">Category: <span>${i.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${o}</span>Popularity:<span>${g}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const q=document.querySelector(".discount-list");q.innerHTML="";C().then(t=>{q.innerHTML=G(t)});document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const s=e.dataset.productId;E(s)}});function W(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function G(t){return W(t,2).map(({_id:s,name:n,img:i,category:a,price:o,size:c,is10PercentOff:g,popularity:J})=>`<li class="discount-card" data-product-id="${s}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${i}" alt="${n}" width="114" height="114" loading="lazy" />
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
