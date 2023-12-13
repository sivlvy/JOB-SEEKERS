import{l as w,g as S,s as r,a as q,b as C,c as H,d as I}from"./assets/modal-subscription-8baf33dd.js";import{S as z}from"./assets/vendor-c374a7a2.js";function x(t){return t.map(({img:s,name:e,category:o,size:i,popularity:c,_id:n,price:a})=>`<li class="card-wrapper" data-id="${n}">
					<div class="image-wrapper">
					<img src="${s}" alt="${e}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${e}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${o.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${i}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${c}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${a}</p>
			 <button class="add-button" type="button" data-id="${n}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function L(t){const s=t.currentTarget.dataset.id;console.log(s);const e=w("products")||[];console.log(e);try{const o=await S(s);console.log(o),e.length===0?(e.push(o),r("products",e)):e.length!==0&&e.map(i=>{console.log(i),i.data._id!==s&&(e.push(o),r("products",e));const n=document.querySelectorAll(".add-button");console.log(n);for(const a of n)if(a.dataset.id===s){a.removeEventListener("click",L);const y=a.querySelector("svg use");a.style.backgroundColor="#6D8434",y.setAttribute("href","./icons.svg#icon-cart-success")}})}catch(o){throw new Error(o)}}const d={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let l={keyword:"",category:"",page:1,limit:6};E();q().then(t=>{D(t)}).catch(t=>console.log(t));function D(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",s);const e=t.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",e),new z({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}d.formEl.addEventListener("submit",P);function P(t){t.preventDefault(),l.page=1,l.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),r("filters-parameters",l),u()}d.selectEl.addEventListener("change",j);function j(t){l.category=t.target.value,l.page=1,r("filters-parameters",l),u()}function E(){return window.innerWidth>=1440?l.limit=9:window.innerWidth>=768?l.limit=8:l.limit=6,l.limit}const V=document.querySelector(".product-list"),h=document.querySelector(".pagination ul"),b=document.querySelector(".pagination"),$=document.querySelector(".card-container"),g=document.querySelector(".main-content-nothing"),F=document.querySelector(".loader");let m=l,f=0;g.style.display="none";async function u(){r("filters-parameters",m);const t=w("filters-parameters");console.log(t);try{const s=await C(t);F.style.display="none";const e=s.results;f=s.totalPages,s.results.length?(g.style.display="none",b.style.display="block",$.style.display="block",V.innerHTML=x(e)):(g.style.display="block",b.style.display="none",$.style.display="none");const o=document.querySelectorAll(".add-button");for(const i of o)i.addEventListener("click",L);O()}catch(s){console.log(s)}}function O(){if(f<=1){h.innerHTML="";return}h.innerHTML=N(f,m.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async e=>{const o=parseInt(e.currentTarget.dataset.page);!isNaN(o)&&o!==m.page&&(m.page=o,await u())})})}function N(t,s){let e="";const i=Math.floor(2.5);let c=s-i,n=s+i;c<1&&(c=1,n=Math.min(t,c+5-1)),n>t&&(n=t,c=Math.max(1,n-5+1)),s>1?e+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:e+='<li class="btn prev disabled"><span>&lt;</span></li>',c>1&&(e+='<li class="first numb" data-page="1"><span>1</span></li>',c>2&&(e+='<li class="dots"><span>...</span></li>'));for(let a=c;a<=n;a++)e+=`<li class="numb ${a===s?"active":""}" data-page="${a}"><span>${a}</span></li>`;return n<t&&(n<t-1&&(e+='<li class="dots"><span>...</span></li>'),e+=`<li class="last numb" data-page="${t}"><span>${t}</span></li>`),s<t?e+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:e+='<li class="btn next disabled"><span>&gt;</span></li>',e}document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await u();function t(){E(),u()}});function M(){productmodal.classList.toggle("is-hidden")}function k(t){const s=document.getElementById("productmodal");S(t).then(({data:e})=>{s.innerHTML=W(e),R(s)})}function R(t){t.querySelector(".mod-card-close").addEventListener("click",_),t.style.display="flex",M()}function _(){const t=document.getElementById("productmodal");t.style.display="none",M()}function W(t){return`<div class="modal-2-wrap">
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
            </div>`}const v="/JOB-SEEKERS/assets/icons-58c424f0.svg",B=document.querySelector(".popular-list");let A=5;B.innerHTML="";H(A).then(t=>{B.innerHTML=J(t)});document.addEventListener("click",function(t){const s=t.target.closest(".popular-card");if(s){const e=s.dataset.productId;k(e)}});function J(t){return t.slice(0,A).map(({_id:s,name:e,img:o,category:i,price:c,size:n,is10PercentOff:a,popularity:p})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${o}" alt="${e}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${e.substring(0,15)}</p>
						<button class="add-popular-button" type="button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="${v}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${i.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${n}</span>Popularity:<span>${p}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const T=document.querySelector(".discount-list");T.innerHTML="";I().then(t=>{T.innerHTML=Q(t)});document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const e=s.dataset.productId;k(e)}});function K(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function Q(t){return K(t,2).map(({_id:e,name:o,img:i,category:c,price:n,size:a,is10PercentOff:p,popularity:y})=>`<li class="discount-card" data-product-id="${e}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${i}" alt="${o}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${o}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${n}</p>
             	<button class="add-discount-button" type="button" data-id="${e}">
							<svg class="discount-icon-button" width="18" height="18">
		 					<use href="${v}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${v}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
