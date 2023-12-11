import"./assets/styles-27595901.js";import{a as u,S as k}from"./assets/vendor-baebd336.js";u.defaults.baseURL="https://food-boutique.b.goit.study/api";const M=async()=>{const{data:t}=await u.get("/products/categories");return t},m=async({value:t,category:e,page:a,limit:c,sortBy:o})=>{const s=new URLSearchParams({page:a,limit:c});t&&s.set("value",t),e&&s.set("category",e),o&&s.set("sortBy",o);const{data:i}=await u.get("/products/",{params:s});return i},A=async t=>{const{data:e}=await u.get(`/products/${t}`);return e},I=async t=>{const{data:e}=await u.get(`/products/popular?limit=${t}`);return e},T=async()=>{const{data:t}=await u.get("/products/discount");return t},g={selectEl:document.querySelector(".filterts-categories-select"),cardProduct:document.querySelector(".product-list")},h="filters-parameters";let p={keyword:"",category:"",page:1,limit:6};b();M().then(t=>{q(t),console.log(t)}).catch(t=>console.log(t));function q(t){const e='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';g.selectEl.insertAdjacentHTML("afterbegin",e);const a=t.map(c=>`<option value="${c}">${c.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');g.selectEl.insertAdjacentHTML("beforeend",a),new k({select:g.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}localStorage.setItem(h,JSON.stringify(p));g.selectEl.addEventListener("change",z);function z(t){p.category=t.target.value,C()}async function C(){localStorage.setItem(h,JSON.stringify(p));try{const t=await m(p);g.cardProduct.innerHTML=$(t.results)}catch(t){console.log(t)}}function b(){return window.innerWidth>=768&&window.innerWidth<1440?p.limit=8:window.innerWidth>=1440&&(p.limit=9),p.limit}const D=document.querySelector(".product-list"),H=document.querySelector(".loader");let y=p;console.log(y);b();m(y).then(t=>{H.style.display="none";const e=t.results;console.log(e),D.insertAdjacentHTML("afterbegin",$(e));const a=document.querySelectorAll(".add-button");console.log(a);for(const c of a)c.addEventListener("click",w)}).catch(t=>{console.log(t)});function $(t){return t.map(({img:e,name:a,category:c,size:o,popularity:s,_id:i,price:n})=>`<li class="card-wrapper" data-id="${i}">
					<div class="image-wrapper">
					<img src="${e}" alt="${a}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			<p class="product-name">
				${a}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${c.replaceAll("_"," ")}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${o}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${s}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${n}</p>
			 <button class="add-button" type="button" data-id="${i}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`).join("")}async function w(t){const e=t.currentTarget.dataset.id;console.log(e);const a=JSON.parse(localStorage.getItem("products"))||[];try{const c=await A(e);a.push(c),N(c),localStorage.setItem("products",JSON.stringify(a));const o=document.querySelectorAll(".add-button");for(const s of o)if(s.dataset.id===e){s.removeEventListener("click",w);const n=s.querySelector("svg use");s.style.backgroundColor="#6D8434",console.log(n),n.setAttribute("href","./icons.svg#icon-cart-success")}}catch(c){throw new Error(c)}}function N({img:t,name:e,category:a,size:c,popularity:o,_id:s,price:i}){return`<li class="card-wrapper" data-id="${s}">
            <div class="image-wrapper">
            <img src="${t}" alt="${e}" loading="lazy" class="product-image" width="140" height="140" />
            </div>
            <div class="product-info">
            <p class="product-name">
            ${e}
            </p>
            <div class ="product-items">
            <p  class="product-item">
            Category:<span class="product-more-info"> &nbsp;${a.replaceAll("_"," ")}</span>
            </p>
            <p class="product-item">
            Size:<span class="product-more-info"> &nbsp;${c}</span>
            </p>
            <p class="product-item">
            Popularity:<span class="product-more-info"> &nbsp;${o}</span>
            </p></div>
            
            </div>
            <div class="price-and-add">
            <p class="product-price">$${i}</p>
            <button class="add-button" type="button" data-id="${s}">
            <svg class="icon-button"width="18" height="18">
            <use href="/icons.svg#icon-cart-mob" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`}const x=document.querySelector(".product-list"),j=document.querySelector(".pagination ul");let B="",O="",f=1,P=6,v=0;document.addEventListener("DOMContentLoaded",async function(){await t();function t(){m({value:B,category:O,page:f,limit:P}).then(o=>{const s=o.results;v=o.totalPages,x.innerHTML=c(s),e()}).catch(o=>{console.log(o)})}function e(){j.innerHTML=a(v,f),document.querySelectorAll(".pagination li:not(.disabled)").forEach(s=>{s.addEventListener("click",async i=>{const n=parseInt(i.currentTarget.dataset.page);!isNaN(n)&&n!==f&&(f=n,t())})})}function a(o,s){let i="",n,l=s-1,d=s+1;s>1?i+=`<li class="btn prev" data-page="${s-1}"><span>&lt;</span></li>`:i+='<li class="btn prev disabled"><span>&lt;</span></li>',s>2&&(i+='<li class="first numb" data-page="1"><span>1</span></li>',s>3&&(i+='<li class="dots"><span>...</span></li>')),s==o?l=l-2:s==o-1&&(l=l-1),s==1?d=d+2:s==2&&(d=d+1);for(var r=l;r<=d;r++)r>o||(r==0&&(r=r+1),s==r?n="active":n="",i+=`<li class="numb ${n}" data-page="${r}"><span>${r}</span></li>`);return s<o-1&&(s<o-2&&(i+='<li class="dots"><span>...</span></li>'),i+=`<li class="last numb" data-page="${o}"><span>${o}</span></li>`),s<o?i+=`<li class="btn next" data-page="${s+1}"><span>&gt;</span></li>`:i+='<li class="btn next disabled"><span>&gt;</span></li>',i}function c(o){return o.map(({img:s,name:i,category:n,size:l,popularity:d,price:r})=>`
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${s}" alt="${i}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${i}</p>
            <div class="product-items">
              <p class="product-item">Category:<span class="product-more-info">&nbsp;${n}</span></p>
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
        </li>`).join("")}});const S=document.querySelector(".popular-list"),R={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let L=5;S.innerHTML="";I(L).then(t=>{S.innerHTML=J(t)}).catch(U);document.addEventListener("click",function(t){const e=t.target.closest(".popular-list");if(e){const a=e.dataset.productId;console.log("ID:",a)}});function J(t){return t.slice(0,L).map(({_id:e,name:a,img:c,category:o,price:s,size:i,is10PercentOff:n,popularity:l})=>`<li class="popular-card" data-product-id="${e}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${c}" alt="${a}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${a}</p>
						<button class="add-popular-button add-button" data-id="${e}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${o.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${i}</span>Popularity:<span>${l}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function U(){Notiflix.Notify.failure("Something went wrong! Please try again.",R)}const E=document.querySelector(".discount-list"),W={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};E.innerHTML="";T().then(t=>{E.innerHTML=G(t)}).catch(F);document.addEventListener("click",function(t){const e=t.target.closest(".discount-card");if(e){const a=e.dataset.productId;console.log("ID:",a)}});function F(){Notiflix.Notify.failure("Something went wrong! Please try again.",W)}function _(t,e){return t.slice().sort(()=>Math.random()-.5).slice(0,e)}function G(t){return _(t,2).map(({_id:a,name:c,img:o,category:s,price:i,size:n,is10PercentOff:l,popularity:d})=>`<li class="discount-card" data-product-id="${a}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${o}" alt="${c}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${c}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${i}</p>
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
