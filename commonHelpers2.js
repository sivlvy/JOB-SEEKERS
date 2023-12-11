import"./assets/styles-34360a92.js";import{a as l,S as $}from"./assets/vendor-baebd336.js";l.defaults.baseURL="https://food-boutique.b.goit.study/api";const S=async()=>{const{data:t}=await l.get("/products/categories");return t},p=async({value:t,category:s,page:e,limit:o,sortBy:a})=>{const c=new URLSearchParams({page:e,limit:o});t&&c.set("value",t),s&&c.set("category",s),a&&c.set("sortBy",a);const{data:n}=await l.get("/products/",{params:c});return n},E=async t=>{const{data:s}=await l.get(`/products/${t}`);return s},L=async t=>{const{data:s}=await l.get(`/products/popular?limit=${t}`);return s},P=async()=>{const{data:t}=await l.get("/products/discount");return t},d={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},g="filters-parameters";let i={keyword:"",category:"",page:1,limit:6};h();S().then(t=>{k(t),console.log(t)}).catch(t=>console.log(t));function k(t){const s='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';d.selectEl.insertAdjacentHTML("afterbegin",s);const e=t.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');d.selectEl.insertAdjacentHTML("beforeend",e),new $({select:d.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}localStorage.setItem(g,JSON.stringify(i));d.selectEl.addEventListener("change",A);function A(t){i.category=t.target.value,I()}async function I(){localStorage.setItem(g,JSON.stringify(i));try{const t=await p(i);d.cardProduct.innerHTML=f(t.results)}catch(t){console.log(t)}}function h(){return window.innerWidth>=768&&window.innerWidth<1440?i.limit=8:window.innerWidth>=1440&&(i.limit=9),i.limit}const M=document.querySelector(".product-list"),z=document.querySelector(".loader");let m=i;console.log(m);h();p(m).then(t=>{z.style.display="none";const s=t.results;console.log(s),M.insertAdjacentHTML("afterbegin",f(s));const e=document.querySelectorAll(".add-button");console.log(e);for(const o of e)o.addEventListener("click",v)}).catch(t=>{console.log(t)});function f(t){return t.map(({img:s,name:e,category:o,size:a,popularity:c,_id:n,price:r})=>`<li class="card-wrapper" data-id="${n}">
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
			Size:<span class="product-more-info"> &nbsp;${a}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${c}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${r}</p>
			 <button class="add-button" type="button" data-id="${n}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function v(t){const s=t.currentTarget.dataset.id;console.log(s);const e=JSON.parse(localStorage.getItem("products"))||[];try{const o=await E(s);e.push(o),T(o),localStorage.setItem("products",JSON.stringify(e));const a=document.querySelectorAll(".add-button");for(const c of a)if(c.dataset.id===s){c.removeEventListener("click",v);const r=c.querySelector("svg use");c.style.backgroundColor="#6D8434",console.log(r),r.setAttribute("href","./icons.svg#icon-cart-success")}}catch(o){throw new Error(o)}}function T({img:t,name:s,category:e,size:o,popularity:a,_id:c,price:n}){return`<li class="card-wrapper" data-id="${c}">
            <div class="image-wrapper">
            <img src="${t}" alt="${s}" loading="lazy" class="product-image" width="140" height="140" />
            </div>
            <div class="product-info">
            <p class="product-name">
            ${s}
            </p>
            <div class ="product-items">
            <p  class="product-item">
            Category:<span class="product-more-info"> &nbsp;${e.replaceAll("_"," ")}</span>
            </p>
            <p class="product-item">
            Size:<span class="product-more-info"> &nbsp;${o}</span>
            </p>
            <p class="product-item">
            Popularity:<span class="product-more-info"> &nbsp;${a}</span>
            </p></div>
            
            </div>
            <div class="price-and-add">
            <p class="product-price">$${n}</p>
            <button class="add-button" type="button" data-id="${c}">
            <svg class="icon-button"width="18" height="18">
            <use href="/icons.svg#icon-cart-mob" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`}const y=document.querySelector(".popular-list"),q={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let b=5;y.innerHTML="";L(b).then(t=>{y.innerHTML=C(t)}).catch(D);document.addEventListener("click",function(t){const s=t.target.closest(".popular-list");if(s){const e=s.dataset.productId;console.log("ID:",e)}});function C(t){return t.slice(0,b).map(({_id:s,name:e,img:o,category:a,price:c,size:n,is10PercentOff:r,popularity:u})=>`<li class="popular-card" data-product-id="${s}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${o}" alt="${e}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${e}</p>
						<button class="add-popular-button add-button" data-id="${s}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${a.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${n}</span>Popularity:<span>${u}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function D(){Notiflix.Notify.failure("Something went wrong! Please try again.",q)}const w=document.querySelector(".discount-list"),H={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};w.innerHTML="";P().then(t=>{w.innerHTML=x(t)}).catch(N);document.addEventListener("click",function(t){const s=t.target.closest(".discount-card");if(s){const e=s.dataset.productId;console.log("ID:",e)}});function N(){Notiflix.Notify.failure("Something went wrong! Please try again.",H)}function j(t,s){return t.slice().sort(()=>Math.random()-.5).slice(0,s)}function x(t){return j(t,2).map(({_id:e,name:o,img:a,category:c,price:n,size:r,is10PercentOff:u,popularity:O})=>`<li class="discount-card" data-product-id="${e}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${a}" alt="${o}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${o}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${n}</p>
             	<button class="add-cart-button add-button" data-id="${e}>
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
