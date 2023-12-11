import"./assets/styles-6993d204.js";import{a as u,S}from"./assets/vendor-65dc389e.js";function h(t){return t.map(({img:i,name:n,category:s,size:e,popularity:a,_id:o,price:l})=>`<li class="card-wrapper" data-id="${o}">
					<div class="image-wrapper">
					<img src="${i}" alt="${n}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${n}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${s.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${e}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${a}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${l}</p>
			 <button class="add-button" type="button" data-id="${o}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}u.defaults.baseURL="https://food-boutique.b.goit.study/api";const L=async()=>{const{data:t}=await u.get("/products/categories");return t},v=async({keyword:t,category:i,page:n,limit:s,sortBy:e})=>{const a=new URLSearchParams({page:n,limit:s});t&&a.set("keyword",t),i&&a.set("category",i),e&&a.set("sortBy",e);const{data:o}=await u.get("/products/",{params:a});return o},E=async t=>{const{data:i}=await u.get(`/products/popular?limit=${t}`);return i},M=async()=>{const{data:t}=await u.get("/products/discount");return t};function g(t,i){localStorage.setItem(t,JSON.stringify(i))}const p={selectEl:document.querySelector(".filters-categories-select"),cardProduct:document.querySelector(".product-list"),formEl:document.querySelector(".filters-form")};let c={keyword:"",category:"",page:1,limit:6};H();L().then(t=>{T(t)}).catch(t=>console.log(t));function T(t){const i='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';p.selectEl.insertAdjacentHTML("afterbegin",i);const n=t.map(s=>`<option value="${s}">${s.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');p.selectEl.insertAdjacentHTML("beforeend",n),new S({select:p.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}p.formEl.addEventListener("submit",k);function k(t){t.preventDefault(),c.page=1,c.keyword=t.currentTarget.elements.searchQuery.value.trim().toLowerCase().split(" ").join(" "),g("filters-parameters",c),y()}p.selectEl.addEventListener("change",q);function q(t){c.category=t.target.value,c.page=1,g("filters-parameters",c),y()}async function y(){try{const t=await v(c);p.cardProduct.innerHTML=h(t.results)}catch(t){console.log(t)}}function H(){return window.innerWidth>=768&&window.innerWidth<1440?c.limit=8:window.innerWidth>=1440&&(c.limit=9),c.limit}const x=document.querySelector(".product-list"),z=document.querySelector(".pagination ul"),A=document.querySelector(".loader");let f=c,m=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){g("filters-parameters",c),v(f).then(s=>{A.style.display="none";const e=s.results;m=s.totalPages,x.innerHTML=h(e),i()}).catch(s=>{console.log(s)})}function i(){z.innerHTML=n(m,f.page),document.querySelectorAll(".pagination li:not(.disabled)").forEach(e=>{e.addEventListener("click",async a=>{const o=parseInt(a.currentTarget.dataset.page);!isNaN(o)&&o!==f.page&&(f.page=o,t())})})}function n(s,e){let a="",o,l=e-1,d=e+1;e>1?a+=`<li class="btn prev" data-page="${e-1}"><span>&lt;</span></li>`:a+='<li class="btn prev disabled"><span>&lt;</span></li>',e>2&&(a+='<li class="first numb" data-page="1"><span>1</span></li>',e>3&&(a+='<li class="dots"><span>...</span></li>')),e==s?l=l-2:e==s-1&&(l=l-1),e==1?d=d+2:e==2&&(d=d+1);for(var r=l;r<=d;r++)r>s||(r==0&&(r=r+1),e==r?o="active":o="",a+=`<li class="numb ${o}" data-page="${r}"><span>${r}</span></li>`);return e<s-1&&(e<s-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="last numb" data-page="${s}"><span>${s}</span></li>`),e<s?a+=`<li class="btn next" data-page="${e+1}"><span>&gt;</span></li>`:a+='<li class="btn next disabled"><span>&gt;</span></li>',a}});const b=document.querySelector(".popular-list"),C={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let w=5;b.innerHTML="";E(w).then(t=>{b.innerHTML=D(t)}).catch(I);document.addEventListener("click",function(t){const i=t.target.closest(".popular-list");if(i){const n=i.dataset.productId;console.log("ID:",n)}});function D(t){return t.slice(0,w).map(({_id:i,name:n,img:s,category:e,price:a,size:o,is10PercentOff:l,popularity:d})=>`<li class="popular-card" data-product-id="${i}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${s}" alt="${n}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${n}</p>
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
        </li>`).join("")}function I(){Notiflix.Notify.failure("Something went wrong! Please try again.",C)}const $=document.querySelector(".discount-list"),N={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};$.innerHTML="";M().then(t=>{$.innerHTML=R(t)}).catch(j);document.addEventListener("click",function(t){const i=t.target.closest(".discount-card");if(i){const n=i.dataset.productId;console.log("ID:",n)}});function j(){Notiflix.Notify.failure("Something went wrong! Please try again.",N)}function O(t,i){return t.slice().sort(()=>Math.random()-.5).slice(0,i)}function R(t){return O(t,2).map(({_id:n,name:s,img:e,category:a,price:o,size:l,is10PercentOff:d,popularity:r})=>`<li class="discount-card" data-product-id="${n}">
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
             	<button class="add-cart-button add-button" data-id="${n}>
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
