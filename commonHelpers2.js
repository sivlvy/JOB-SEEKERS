import{g as b,a as $,b as w,c as H,d as I}from"./assets/modal-subscription-77bdf373.js";import{S}from"./assets/vendor-ab5f5c01.js";function L(t){return t.map(({img:s,name:o,category:i,size:d,popularity:l,_id:e,price:a})=>`<li class="card-wrapper" data-id="${e}">
					<div class="image-wrapper">
					<img src="${s}" alt="${o}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${o}
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
			 <p class="product-price">$${a}</p>
			 <button class="add-button" type="button" data-id="${e}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function E(t){const s=t.currentTarget.dataset.id;console.log(s);try{const o=await b(s),i=JSON.parse(localStorage.getItem("products"))||[];console.log(i),i.push(o),localStorage.setItem("products",JSON.stringify(i));const d=document.querySelectorAll(".add-button");for(const l of d)if(l.dataset.id===s){l.removeEventListener("click",E);const a=l.querySelector("svg use");l.style.backgroundColor="#6D8434",a.setAttribute("href","./icons.svg#icon-cart-success")}}catch(o){throw new Error(o)}}function v(t,s){localStorage.setItem(t,JSON.stringify(s))}const m={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let c={keyword:"",category:"",page:1,limit:6};k();$().then(t=>{z(t)}).catch(t=>console.log(t));function z(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';m.selectEl.insertAdjacentHTML("afterbegin",s);const o=t.map(i=>`<option value="${i}">${i.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');m.selectEl.insertAdjacentHTML("beforeend",o),new S({select:m.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}m.formEl.addEventListener("submit",j);function j(t){t.preventDefault(),c.page=1,c.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",c),M()}m.selectEl.addEventListener("change",P);function P(t){c.category=t.target.value,c.page=1,v("filters-parameters",c),M()}async function M(){try{const t=await w(c);m.cardProduct.innerHTML=L(t.results)}catch(t){console.log(t)}}function k(){return window.innerWidth>=1440?c.limit=9:window.innerWidth>=768?c.limit=8:c.limit=6,c.limit}const D=document.querySelector(".product-list"),x=document.querySelector(".pagination ul"),N=document.querySelector(".loader");let u=c,y=0;document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await s();function t(){k(),s()}async function s(){v("filters-parameters",c);try{const e=await w(c);N.style.display="none";const a=e.results;y=e.totalPages,D.innerHTML=L(a);const n=document.querySelectorAll(".add-button");console.log(n);for(const r of n)r.addEventListener("click",E);o()}catch(e){console.log(e)}}function o(){x.innerHTML=l(y,u.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(a=>{a.addEventListener("click",async n=>{const r=parseInt(n.currentTarget.dataset.page);!isNaN(r)&&r!==u.page&&(u.page=r,await s())})})}document.querySelector(".filters-form").addEventListener("submit",async function(e){e.preventDefault(),u.page=1,u.keyword=e.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",u),await s()}),document.querySelector(".filters-categories-select").addEventListener("change",async function(e){u.category=e.target.value,u.page=1,v("filters-parameters",u),await s()});const i=document.querySelector(".filters-categories-select");$().then(e=>{d(e)}).catch(e=>console.log(e));function d(e){const a='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';i.insertAdjacentHTML("afterbegin",a);const n=e.map(r=>`<option value="${r}">${r.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');i.insertAdjacentHTML("beforeend",n),new S({select:i,settings:{showSearch:!1,searchHighlight:!0}})}function l(e,a){let n="";const h=Math.floor(2.5);let p=a-h,g=a+h;p<1&&(p=1,g=Math.min(e,p+5-1)),g>e&&(g=e,p=Math.max(1,g-5+1)),a>1?n+=`<li class="btn prev" data-page="${a-1}"><span>&lt;</span></li>`:n+='<li class="btn prev disabled"><span>&lt;</span></li>',p>1&&(n+='<li class="first numb" data-page="1"><span>1</span></li>',p>2&&(n+='<li class="dots"><span>...</span></li>'));for(let f=p;f<=g;f++)n+=`<li class="numb ${f===a?"active":""}" data-page="${f}"><span>${f}</span></li>`;return g<e&&(g<e-1&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="last numb" data-page="${e}"><span>${e}</span></li>`),a<e?n+=`<li class="btn next" data-page="${a+1}"><span>&gt;</span></li>`:n+='<li class="btn next disabled"><span>&gt;</span></li>',n}});function A(){productmodal.classList.toggle("is-hidden")}function T(t){const s=document.getElementById("productmodal");b(t).then(({data:o})=>{s.innerHTML=J(o),O(s)})}function O(t){t.querySelector(".mod-card-close").addEventListener("click",V),t.style.display="flex",A()}function V(){const t=document.getElementById("productmodal");t.style.display="none",A()}function J(t){return`<div class="modal-2-wrap">
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
            </div>`}const B=document.querySelector(".popular-list");let q=5;B.innerHTML="";H(q).then(t=>{B.innerHTML=_(t)});document.addEventListener("click",function(t){const s=t.target.closest(".popular-card");if(s){const o=s.dataset.productId;T(o)}});function _(t){return t.slice(0,q).map(({_id:s,name:o,img:i,category:d,price:l,size:e,is10PercentOff:a,popularity:n})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${i}" alt="${o}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${o.substring(0,15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${d.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${e}</span>Popularity:<span>${n}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const C=document.querySelector(".discount-list");C.innerHTML="";I().then(t=>{C.innerHTML=R(t)});document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const o=s.dataset.productId;T(o)}});function Q(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function R(t){return Q(t,2).map(({_id:o,name:i,img:d,category:l,price:e,size:a,is10PercentOff:n,popularity:r})=>`<li class="discount-card" data-product-id="${o}">
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
             	<button class="add-discount-button add-button" type="button" data-id="${o}>
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
