import{g as $,a as A,b as T,c as q,d as I}from"./assets/modal-subscription-cd735d44.js";import{N as C,S as H}from"./assets/vendor-c374a7a2.js";function z(t){return t.map(({img:e,name:s,category:o,size:i,popularity:n,_id:a,price:c})=>`<li class="card-wrapper" data-id="${a}">
					<div class="image-wrapper">
					<img src="${e}" alt="${s}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${s}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${o.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${i}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${n}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${c}</p>
			 <button class="add-button" type="button" data-id="${a}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function S(t){const e=t.currentTarget.dataset.id;console.log(e);try{const s=await $(e),o=JSON.parse(localStorage.getItem("products"))||[];console.log(o),o.push(s),localStorage.setItem("products",JSON.stringify(o));const i=document.querySelectorAll(".add-button");for(const n of i)if(n.dataset.id===e){n.removeEventListener("click",S);const c=n.querySelector("svg use");n.style.backgroundColor="#6D8434",c.setAttribute("href","./icons.svg#icon-cart-success")}}catch(s){throw new Error(s)}}function v(t,e){localStorage.setItem(t,JSON.stringify(e))}function N(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return C.Notify.failure("Oops! Something went wrong!"),e}}const r={selectEl:document.querySelector(".filters-categories-select"),formEl:document.querySelector(".filters-form")};let l={keyword:"",category:"",page:1,limit:6};w();A().then(t=>{x(t)}).catch(t=>console.log(t));function x(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';r.selectEl.insertAdjacentHTML("afterbegin",e);const s=t.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');r.selectEl.insertAdjacentHTML("beforeend",s),new H({select:r.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}r.formEl.addEventListener("submit",O);function O(t){t.preventDefault(),l.page=1,l.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),v("filters-parameters",l),d()}r.selectEl.addEventListener("change",D);function D(t){l.category=t.target.value,l.page=1,v("filters-parameters",l),d()}function w(){return window.innerWidth>=1440?l.limit=9:window.innerWidth>=768?l.limit=8:l.limit=6,l.limit}const j=document.querySelector(".product-list"),y=document.querySelector(".pagination ul"),h=document.querySelector(".pagination"),b=document.querySelector(".card-container"),m=document.querySelector(".main-content-nothing"),P=document.querySelector(".loader");let u=l,g=0;m.style.display="none";async function d(){v("filters-parameters",u);const t=N("filters-parameters");console.log(t);try{const e=await T(t);P.style.display="none";const s=e.results;g=e.totalPages,e.results.length?(m.style.display="none",h.style.display="block",b.style.display="block",j.innerHTML=z(s)):(m.style.display="block",h.style.display="none",b.style.display="none");const o=document.querySelectorAll(".add-button");for(const i of o)i.addEventListener("click",S);J()}catch(e){console.log(e)}}function J(){if(g<=1){y.innerHTML="";return}y.innerHTML=V(g,u.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async s=>{const o=parseInt(s.currentTarget.dataset.page);!isNaN(o)&&o!==u.page&&(u.page=o,await d())})})}function V(t,e){let s="";const i=Math.floor(2.5);let n=e-i,a=e+i;n<1&&(n=1,a=Math.min(t,n+5-1)),a>t&&(a=t,n=Math.max(1,a-5+1)),e>1?s+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:s+='<li class="btn prev disabled"><span>&lt;</span></li>',n>1&&(s+='<li class="first numb" data-page="1"><span>1</span></li>',n>2&&(s+='<li class="dots"><span>...</span></li>'));for(let c=n;c<=a;c++)s+=`<li class="numb ${c===e?"active":""}" data-page="${c}"><span>${c}</span></li>`;return a<t&&(a<t-1&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" data-page="${t}"><span>${t}</span></li>`),e<t?s+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:s+='<li class="btn next disabled"><span>&gt;</span></li>',s}document.addEventListener("DOMContentLoaded",async function(){window.addEventListener("resize",t),await d();function t(){w(),d()}});function L(){productmodal.classList.toggle("is-hidden")}function E(t){const e=document.getElementById("productmodal");$(t).then(({data:s})=>{e.innerHTML=W(s),F(e)})}function F(t){t.querySelector(".mod-card-close").addEventListener("click",R),t.style.display="flex",L()}function R(){const t=document.getElementById("productmodal");t.style.display="none",L()}function W(t){return`<div class="modal-2-wrap">
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
            </div>`}const f="/JOB-SEEKERS/assets/icons-58c424f0.svg",M=document.querySelector(".popular-list");let k=5;M.innerHTML="";q(k).then(t=>{M.innerHTML=_(t)});document.addEventListener("click",function(t){const e=t.target.closest(".popular-card");if(e){const s=e.dataset.productId;E(s)}});function _(t){return t.slice(0,k).map(({_id:e,name:s,img:o,category:i,price:n,size:a,is10PercentOff:c,popularity:p})=>`<li class="popular-card" data-product-id="${e}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${o}" alt="${s}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${s.substring(0,15)}</p>
						<button class="add-popular-button" type="button" data-id="${e}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="${f}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${i.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${a}</span>Popularity:<span>${p}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}const B=document.querySelector(".discount-list");B.innerHTML="";I().then(t=>{B.innerHTML=Q(t)});document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const s=e.dataset.productId;E(s)}});function K(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function Q(t){return K(t,2).map(({_id:s,name:o,img:i,category:n,price:a,size:c,is10PercentOff:p,popularity:G})=>`<li class="discount-card" data-product-id="${s}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${i}" alt="${o}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${o}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${a}</p>
             	<button class="add-discount-button" type="button" data-id="${s}">
							<svg class="discount-icon-button" width="18" height="18">
		 					<use href="${f}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${f}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
