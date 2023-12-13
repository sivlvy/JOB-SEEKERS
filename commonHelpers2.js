import{g as L,a as E,b as M,c as P,d as D}from"./assets/modal-subscription-ff3b6ca3.js";import{S as k}from"./assets/vendor-ab5f5c01.js";function T(t){return t.map(({img:s,name:n,category:i,size:d,popularity:l,_id:e,price:o})=>`<li class="card-wrapper" data-id="${e}">
					<div class="image-wrapper">
					<img src="${s}" alt="${n}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${n}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${i.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${d}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${l}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${o}</p>
			 <button class="add-button" type="button" data-id="${e}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function q(t){const s=t.currentTarget.dataset.id;console.log(s);try{const n=await L(s),i=JSON.parse(localStorage.getItem("products"))||[];console.log(i),i.push(n),localStorage.setItem("products",JSON.stringify(i));const d=document.querySelectorAll(".add-button");for(const l of d)if(l.dataset.id===s){l.removeEventListener("click",q);const o=l.querySelector("svg use");l.style.backgroundColor="#6D8434",o.setAttribute("href","./icons.svg#icon-cart-success")}}catch(n){throw new Error(n)}}function v(t,s){localStorage.setItem(t,JSON.stringify(s))}const m={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let c={keyword:"",category:"",page:1,limit:6};H();E().then(t=>{x(t)}).catch(t=>console.log(t));function x(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';m.selectEl.insertAdjacentHTML("afterbegin",s);const n=t.map(i=>`<option value="${i}">${i.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');m.selectEl.insertAdjacentHTML("beforeend",n),new k({select:m.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}m.formEl.addEventListener("submit",N);function N(t){t.preventDefault(),c.page=1,c.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",c),A()}m.selectEl.addEventListener("change",O);function O(t){c.category=t.target.value,c.page=1,v("filters-parameters",c),A()}const h=document.querySelector(".main-content-nothing"),$=document.querySelector(".pagination"),w=document.querySelector(".card-container");h.style.display="none";async function A(){try{const t=await M(c);t.results.length?(h.style.display="none",$.style.display="block",w.style.display="block",m.cardProduct.innerHTML=T(t.results)):(h.style.display="block",$.style.display="none",w.style.display="none")}catch(t){console.log(t)}}function H(){return window.innerWidth>=1440?c.limit=9:window.innerWidth>=768?c.limit=8:c.limit=6,c.limit}const V=document.querySelector(".product-list"),S=document.querySelector(".pagination ul"),J=document.querySelector(".loader");let u=c,y=0;document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await s();function t(){H(),s()}async function s(){v("filters-parameters",c);try{const e=await M(c);J.style.display="none";const o=e.results;y=e.totalPages,V.innerHTML=T(o);const a=document.querySelectorAll(".add-button");for(const r of a)r.addEventListener("click",q);n()}catch(e){console.log(e)}}function n(){if(y<=1){S.innerHTML="";return}S.innerHTML=l(y,u.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(o=>{o.addEventListener("click",async a=>{const r=parseInt(a.currentTarget.dataset.page);!isNaN(r)&&r!==u.page&&(u.page=r,await s())})})}document.querySelector(".filters-form").addEventListener("submit",async function(e){e.preventDefault(),u.page=1,u.keyword=e.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",u),await s()}),document.querySelector(".filters-categories-select").addEventListener("change",async function(e){u.category=e.target.value,u.page=1,v("filters-parameters",u),await s()});const i=document.querySelector(".filters-categories-select");E().then(e=>{d(e)}).catch(e=>console.log(e));function d(e){const o='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';i.insertAdjacentHTML("afterbegin",o);const a=e.map(r=>`<option value="${r}">${r.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');i.insertAdjacentHTML("beforeend",a),new k({select:i,settings:{showSearch:!1,searchHighlight:!0}})}function l(e,o){let a="";const b=Math.floor(2.5);let p=o-b,g=o+b;p<1&&(p=1,g=Math.min(e,p+5-1)),g>e&&(g=e,p=Math.max(1,g-5+1)),o>1?a+=`<li class="btn prev" data-page="${o-1}"><span>&lt;</span></li>`:a+='<li class="btn prev disabled"><span>&lt;</span></li>',p>1&&(a+='<li class="first numb" data-page="1"><span>1</span></li>',p>2&&(a+='<li class="dots"><span>...</span></li>'));for(let f=p;f<=g;f++)a+=`<li class="numb ${f===o?"active":""}" data-page="${f}"><span>${f}</span></li>`;return g<e&&(g<e-1&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="last numb" data-page="${e}"><span>${e}</span></li>`),o<e?a+=`<li class="btn next" data-page="${o+1}"><span>&gt;</span></li>`:a+='<li class="btn next disabled"><span>&gt;</span></li>',a}});function B(){productmodal.classList.toggle("is-hidden")}function C(t){const s=document.getElementById("productmodal");L(t).then(({data:n})=>{s.innerHTML=Q(n),_(s)})}function _(t){t.querySelector(".mod-card-close").addEventListener("click",F),t.style.display="flex",B()}function F(){const t=document.getElementById("productmodal");t.style.display="none",B()}function Q(t){return`<div class="modal-2-wrap">
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
            </div>`}const I=document.querySelector(".popular-list");let z=5;I.innerHTML="";P(z).then(t=>{I.innerHTML=R(t)});document.addEventListener("click",function(t){const s=t.target.closest(".popular-card");if(s){const n=s.dataset.productId;C(n)}});function R(t){return t.slice(0,z).map(({_id:s,name:n,img:i,category:d,price:l,size:e,is10PercentOff:o,popularity:a})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${i}" alt="${n}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${n.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${d.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${e}</span>Popularity:<span>${a}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const j=document.querySelector(".discount-list");j.innerHTML="";D().then(t=>{j.innerHTML=G(t)});document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const n=s.dataset.productId;C(n)}});function W(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function G(t){return W(t,2).map(({_id:n,name:i,img:d,category:l,price:e,size:o,is10PercentOff:a,popularity:r})=>`<li class="discount-card" data-product-id="${n}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${d}" alt="${i}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${i.substring(0,19)}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${e}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${n}>
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
