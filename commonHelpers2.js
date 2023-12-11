import{g as w,a as g,b as S,c as L}from"./assets/modal-subscription-f8fcf599.js";import{S as E}from"./assets/vendor-65dc389e.js";function h(t){return t.map(({img:i,name:a,category:s,size:e,popularity:n,_id:o,price:r})=>`<li class="card-wrapper" data-id="${o}">
					<div class="image-wrapper">
					<img src="${i}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${a}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${s.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${e}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${n}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${r}</p>
			 <button class="add-button" type="button" data-id="${o}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}function f(t,i){localStorage.setItem(t,JSON.stringify(i))}const p={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let c={keyword:"",category:"",page:1,limit:6};H();w().then(t=>{M(t)}).catch(t=>console.log(t));function M(t){const i='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';p.selectEl.insertAdjacentHTML("afterbegin",i);const a=t.map(s=>`<option value="${s}">${s.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');p.selectEl.insertAdjacentHTML("beforeend",a),new E({select:p.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}p.formEl.addEventListener("submit",T);function T(t){t.preventDefault(),c.page=1,c.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),f("filters-parameters",c),v()}p.selectEl.addEventListener("change",k);function k(t){c.category=t.target.value,c.page=1,f("filters-parameters",c),v()}async function v(){try{const t=await g(c);p.cardProduct.innerHTML=h(t.results)}catch(t){console.log(t)}}function H(){return window.innerWidth>=768&&window.innerWidth<1440?c.limit=8:window.innerWidth>=1440&&(c.limit=9),c.limit}const q=document.querySelector(".product-list"),z=document.querySelector(".pagination ul"),A=document.querySelector(".loader");let u=c,m=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){f("filters-parameters",c),g(u).then(s=>{A.style.display="none";const e=s.results;m=s.totalPages,q.innerHTML=h(e),i()}).catch(s=>{console.log(s)})}function i(){z.innerHTML=a(m,u.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async n=>{const o=parseInt(n.currentTarget.dataset.page);!isNaN(o)&&o!==u.page&&(u.page=o,t())})})}function a(s,e){let n="",o,r=e-1,d=e+1;e>1?n+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:n+='<li class="btn prev disabled"><span>&lt;</span></li>',e>2&&(n+='<li class="first numb" data-page="1"><span>1</span></li>',e>3&&(n+='<li class="dots"><span>...</span></li>')),e==s?r=r-2:e==s-1&&(r=r-1),e==1?d=d+2:e==2&&(d=d+1);for(var l=r;l<=d;l++)l>s||(l==0&&(l=l+1),e==l?o="active":o="",n+=`<li class="numb ${o}" data-page="${l}"><span>${l}</span></li>`);return e<s-1&&(e<s-2&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="last numb" data-page="${s}"><span>${s}</span></li>`),e<s?n+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:n+='<li class="btn next disabled"><span>&gt;</span></li>',n}});const y=document.querySelector(".popular-list"),C={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let b=5;y.innerHTML="";S(b).then(t=>{y.innerHTML=x(t)}).catch(D);document.addEventListener("click",function(t){const i=t.target.closest(".popular-list");if(i){const a=i.dataset.productId;console.log("ID:",a)}});function x(t){return t.slice(0,b).map(({_id:i,name:a,img:s,category:e,price:n,size:o,is10PercentOff:r,popularity:d})=>`<li class="popular-card" data-product-id="${i}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${s}" alt="${a}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${a}</p>
						<button class="add-popular-button add-button" data-id="${i}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${e.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${o}</span>Popularity:<span>${d}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function D(){Notiflix.Notify.failure("Something went wrong! Please try again.",C)}const $=document.querySelector(".discount-list"),I={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};$.innerHTML="";L().then(t=>{$.innerHTML=O(t)}).catch(N);document.addEventListener("click",function(t){const i=t.target.closest(".discount-card");if(i){const a=i.dataset.productId;console.log("ID:",a)}});function N(){Notiflix.Notify.failure("Something went wrong! Please try again.",I)}function j(t,i){return t.slice().sort(()=>Math.random()-.5).slice(0,i)}function O(t){return j(t,2).map(({_id:a,name:s,img:e,category:n,price:o,size:r,is10PercentOff:d,popularity:l})=>`<li class="discount-card" data-product-id="${a}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${e}" alt="${s}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${s}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${o}</p>
             	<button class="add-cart-button add-button" data-id="${a}>
					<svg class="discount-icon-button" width="18" height="18">
		 			<use href="../../../icons.svg#icon-cart-mob" alt="cart" >
		 			</use></svg>
				</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="../../../icons.svg#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
