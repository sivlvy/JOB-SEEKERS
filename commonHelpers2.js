import"./assets/modal-subscription-614f6577.js";import{a as f,S as E}from"./assets/vendor-baebd336.js";f.defaults.baseURL="https://food-boutique.b.goit.study/api";const M=async()=>{const{data:t}=await f.get("/products/categories");return t},m=async({value:t,category:i,page:a,limit:n,sortBy:e})=>{const s=new URLSearchParams({page:a,limit:n});t&&s.set("value",t),i&&s.set("category",i),e&&s.set("sortBy",e);const{data:o}=await f.get("/products/",{params:s});return o},T=async t=>{const{data:i}=await f.get(`/products/popular?limit=${t}`);return i},k=async()=>{const{data:t}=await f.get("/products/discount");return t},u={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},y="filters-parameters";let p={keyword:"",category:"",page:1,limit:6};document.querySelector(".product-list");M().then(t=>{q(t),console.log(t)}).catch(t=>console.log(t));function q(t){const i='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';u.selectEl.insertAdjacentHTML("afterbegin",i);const a=t.map(n=>`<option value="${n}">${n.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');u.selectEl.insertAdjacentHTML("beforeend",a),new E({select:u.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}b();localStorage.setItem(y,JSON.stringify(p));u.selectEl.addEventListener("change",z);function z(t){p.category=t.target.value,A()}async function A(){localStorage.setItem(y,JSON.stringify(p));try{const t=await m(p);u.cardProduct.innerHTML=$(t.results)}catch(t){console.log(t)}}function b(){return window.innerWidth>=768&&window.innerWidth<1440?p.limit=8:window.innerWidth>=1440&&(p.limit=9),p.limit}const H=document.querySelector(".product-list"),I=document.querySelector(".loader");let h=p;console.log(h);b();console.log(h);m(h).then(t=>{I.style.display="none";const i=t.results;H.insertAdjacentHTML("afterbegin",$(i))}).catch(t=>{console.log(t)});function $(t){return t.map(({img:i,name:a,category:n,size:e,popularity:s,price:o})=>`<li class="card-wrapper">
					<div class="image-wrapper">
					<img src="${i}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${a}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${n.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${e}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${s}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${o}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}const x=document.querySelector(".product-list"),C=document.querySelector(".pagination ul");let N="",j="",g=1,D=6,v=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){m({value:N,category:j,page:g,limit:D}).then(e=>{const s=e.results;v=e.totalPages,x.innerHTML=n(s),i()}).catch(e=>{console.log(e)})}function i(){C.innerHTML=a(v,g),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async o=>{const c=parseInt(o.currentTarget.dataset.page);!isNaN(c)&&c!==g&&(g=c,t())})})}function a(e,s){let o="",c,l=s-1,d=s+1;s>1?o+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:o+='<li class="btn prev disabled"><span>&lt;</span></li>',s>2&&(o+='<li class="first numb" data-page="1"><span>1</span></li>',s>3&&(o+='<li class="dots"><span>...</span></li>')),s==e?l=l-2:s==e-1&&(l=l-1),s==1?d=d+2:s==2&&(d=d+1);for(var r=l;r<=d;r++)r>e||(r==0&&(r=r+1),s==r?c="active":c="",o+=`<li class="numb ${c}" data-page="${r}"><span>${r}</span></li>`);return s<e-1&&(s<e-2&&(o+='<li class="dots"><span>...</span></li>'),o+=`<li class="last numb" data-page="${e}"><span>${e}</span></li>`),s<e?o+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:o+='<li class="btn next disabled"><span>&gt;</span></li>',o}function n(e){return e.map(({img:s,name:o,category:c,size:l,popularity:d,price:r})=>`
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${s}" alt="${o}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${o}</p>
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
        </li>`).join("")}});const w=document.querySelector(".popular-list"),O={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let S=5;w.innerHTML="";T(S).then(t=>{w.innerHTML=R(t)}).catch(_);document.addEventListener("click",function(t){const i=t.target.closest(".popular-list");if(i){const a=i.dataset.productId;console.log("ID:",a)}});function R(t){return t.slice(0,S).map(({_id:i,name:a,img:n,category:e,price:s,size:o,is10PercentOff:c,popularity:l})=>`<li class="popular-card" data-product-id="${i}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${n}" alt="${a}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${a}</p>
						<button class="add-popular-button">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${e.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${o}</span>Popularity:<span>${l}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function _(){Notiflix.Notify.failure("Something went wrong! Please try again.",O)}const L=document.querySelector(".discount-list"),P={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};L.innerHTML="";k().then(t=>{L.innerHTML=F(t)}).catch(W);document.addEventListener("click",function(t){const i=t.target.closest(".discount-card");if(i){const a=i.dataset.productId;console.log("ID:",a)}});function W(){Notiflix.Notify.failure("Something went wrong! Please try again.",P)}function B(t,i){return t.slice().sort(()=>Math.random()-.5).slice(0,i)}function F(t){return B(t,2).map(({_id:a,name:n,img:e,category:s,price:o,size:c,is10PercentOff:l,popularity:d})=>`<li class="discount-card" data-product-id="${a}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${e}" alt="${n}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${n}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${o}</p>
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
          </li>`).join("")}
//# sourceMappingURL=commonHelpers2.js.map
