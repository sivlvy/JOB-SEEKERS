import"./assets/modal-subscription-0a9be9a9.js";import{a as f,S as E}from"./assets/vendor-baebd336.js";f.defaults.baseURL="https://food-boutique.b.goit.study/api";const M=async()=>{const{data:t}=await f.get("/products/categories");return t},h=async({value:t,category:e,page:o,limit:n,sortBy:i})=>{const s=new URLSearchParams({page:o,limit:n});t&&s.set("value",t),e&&s.set("category",e),i&&s.set("sortBy",i);const{data:a}=await f.get("/products/",{params:s});return a},T=async t=>{const{data:e}=await f.get(`/products/popular?limit=${t}`);return e},k=async()=>{const{data:t}=await f.get("/products/discount");return t},q=document.querySelector(".product-list"),m=document.querySelector(".card-container"),z=document.querySelector(".loader");let H="",A="",C=1,v=6;m.offsetWidth>=768&&m.offsetWidth<1440&&(v=8);m.offsetWidth>=1440&&(v=9);h({value:H,category:A,page:C,limit:v}).then(t=>{z.style.visibility="hidden";const e=t.results;q.insertAdjacentHTML("afterbegin",b(e))}).catch(t=>{console.log(t)});function b(t){return t.map(({img:e,name:o,category:n,size:i,popularity:s,price:a})=>`<li class="card-wrapper">
					<div class="image-wrapper">
					<img src="${e}" alt="${o}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${o}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${n}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${i}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${s}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${a}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="../../../icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}const I=document.querySelector(".product-list"),x=document.querySelector(".pagination ul");let N="",j="",g=1,D=6,y=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){h({value:N,category:j,page:g,limit:D}).then(i=>{const s=i.results;y=i.totalPages,I.innerHTML=n(s),e()}).catch(i=>{console.log(i)})}function e(){x.innerHTML=o(y,g),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async a=>{const c=parseInt(a.currentTarget.dataset.page);!isNaN(c)&&c!==g&&(g=c,t())})})}function o(i,s){let a="",c,l=s-1,d=s+1;s>1?a+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:a+='<li class="btn prev disabled"><span>&lt;</span></li>',s>2&&(a+='<li class="first numb" data-page="1"><span>1</span></li>',s>3&&(a+='<li class="dots"><span>...</span></li>')),s==i?l=l-2:s==i-1&&(l=l-1),s==1?d=d+2:s==2&&(d=d+1);for(var r=l;r<=d;r++)r>i||(r==0&&(r=r+1),s==r?c="active":c="",a+=`<li class="numb ${c}" data-page="${r}"><span>${r}</span></li>`);return s<i-1&&(s<i-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="last numb" data-page="${i}"><span>${i}</span></li>`),s<i?a+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:a+='<li class="btn next disabled"><span>&gt;</span></li>',a}function n(i){return i.map(({img:s,name:a,category:c,size:l,popularity:d,price:r})=>`
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${s}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${a}</p>
            <div class="product-items">
              <p class="product-item">Category:<span class="product-more-info">&nbsp;${c}</span></p>
              <p class="product-item">Size:<span class="product-more-info">&nbsp;${l}</span></p>
              <p class="product-item">Popularity:<span class="product-more-info">&nbsp;${d}</span></p>
            </div>
          </div>
          <div class="price-and-add">
            <p class="product-price">$${r}</p>
            <button class="add-button" type="button">
              <svg class="icon-button" width="18" height="18">
                <use href="../../../icons.svg#icon-cart-mob"></use>
              </svg>
            </button>
          </div>
        </li>`).join("")}});const $=document.querySelector(".popular-list"),O={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let w=5;$.innerHTML="";T(w).then(t=>{$.innerHTML=W(t)}).catch(R);document.addEventListener("click",function(t){const e=t.target.closest(".popular-list");if(e){const o=e.dataset.productId;console.log("ID:",o)}});function W(t){return t.slice(0,w).map(({_id:e,name:o,img:n,category:i,price:s,size:a,is10PercentOff:c,popularity:l})=>`<li class="popular-card" data-product-id="${e}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${n}" alt="${o}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${o}</p>
						<button class="add-popular-button">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${i.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${a}</span>Popularity:<span>${l}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function R(){Notiflix.Notify.failure("Something went wrong! Please try again.",O)}const S=document.querySelector(".discount-list"),_={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};S.innerHTML="";k().then(t=>{S.innerHTML=J(t)}).catch(P);document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const o=e.dataset.productId;console.log("ID:",o)}});function P(){Notiflix.Notify.failure("Something went wrong! Please try again.",_)}function B(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function J(t){return B(t,2).map(({_id:o,name:n,img:i,category:s,price:a,size:c,is10PercentOff:l,popularity:d})=>`<li class="discount-card" data-product-id="${o}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${i}" alt="${n}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${n}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${a}</p>
             	<button class="add-cart-button">
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
          </li>`).join("")}const u={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},L="filters-parameters";let p={keyword:"",category:"",page:1,limit:6};M().then(t=>{U(t),console.log(t)}).catch(t=>console.log(t));function U(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';u.selectEl.insertAdjacentHTML("afterbegin",e);const o=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');u.selectEl.insertAdjacentHTML("beforeend",o),new E({select:u.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}K();localStorage.setItem(L,JSON.stringify(p));u.selectEl.addEventListener("change",F);function F(t){p.category=t.target.value,G()}async function G(){localStorage.setItem(L,JSON.stringify(p));try{const t=await h(p);u.cardProduct.innerHTML=b(t.results)}catch(t){console.log(t)}}function K(){return window.innerWidth>=768&&window.innerWidth<1440?p.limit=8:window.innerWidth>=1440&&(p.limit=9),p.limit}
//# sourceMappingURL=commonHelpers2.js.map
