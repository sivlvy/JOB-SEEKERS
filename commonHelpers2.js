import{g as v,a as h,b}from"./assets/main-projects-e99f35aa.js";import"./assets/vendor-baebd336.js";const $=document.querySelector(".product-list"),y=document.querySelector(".pagination ul");let w="",S="",r=1,E=6,u=0;document.addEventListener("DOMContentLoaded",async function(){await a();function a(){v({value:w,category:S,page:r,limit:E}).then(s=>{const t=s.results;u=s.totalPages,$.innerHTML=p(t),n()}).catch(s=>{console.log(s)})}function n(){y.innerHTML=o(u,r),document.querySelectorAll(".pagination li:not(.disabled)").forEach(t=>{t.addEventListener("click",async i=>{const c=parseInt(i.currentTarget.dataset.page);!isNaN(c)&&c!==r&&(r=c,a())})})}function o(s,t){let i="",c,l=t-1,d=t+1;t>1?i+=`<li class="btn prev" data-page="${t-1}"><span>&lt;</span></li>`:i+='<li class="btn prev disabled"><span>&lt;</span></li>',t>2&&(i+='<li class="first numb" data-page="1"><span>1</span></li>',t>3&&(i+='<li class="dots"><span>...</span></li>')),t==s?l=l-2:t==s-1&&(l=l-1),t==1?d=d+2:t==2&&(d=d+1);for(var e=l;e<=d;e++)e>s||(e==0&&(e=e+1),t==e?c="active":c="",i+=`<li class="numb ${c}" data-page="${e}"><span>${e}</span></li>`);return t<s-1&&(t<s-2&&(i+='<li class="dots"><span>...</span></li>'),i+=`<li class="last numb" data-page="${s}"><span>${s}</span></li>`),t<s?i+=`<li class="btn next" data-page="${t+1}"><span>&gt;</span></li>`:i+='<li class="btn next disabled"><span>&gt;</span></li>',i}function p(s){return s.map(({img:t,name:i,category:c,size:l,popularity:d,price:e})=>`
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${t}" alt="${i}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${i}</p>
            <div class="product-items">
              <p class="product-item">Category:<span class="product-more-info">&nbsp;${c}</span></p>
              <p class="product-item">Size:<span class="product-more-info">&nbsp;${l}</span></p>
              <p class="product-item">Popularity:<span class="product-more-info">&nbsp;${d}</span></p>
            </div>
          </div>
          <div class="price-and-add">
            <p class="product-price">$${e}</p>
            <button class="add-button" type="button">
              <svg class="icon-button" width="18" height="18">
                <use href="../../../icons.svg#icon-cart-mob"></use>
              </svg>
            </button>
          </div>
        </li>`).join("")}});const f=document.querySelector(".popular-list"),L={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};let m=5;f.innerHTML="";h(m).then(a=>{f.innerHTML=M(a)}).catch(z);document.addEventListener("click",function(a){const n=a.target.closest(".popular-list");if(n){const o=n.dataset.productId;console.log("ID:",o)}});function M(a){return a.slice(0,m).map(({_id:n,name:o,img:p,category:s,price:t,size:i,is10PercentOff:c,popularity:l})=>`<li class="popular-card" data-product-id="${n}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${p}" alt="${o}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${o}</p>
						<button class="add-popular-button add-button" data-id="${n}">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${s.replace("_"," ")}</span></p>
                		<p class="popular-size-item">Size:<span>${i}</span>Popularity:<span>${l}</span></p>
					</div>
				</div>
            </div>
        </li>`).join("")}function z(){Notiflix.Notify.failure("Something went wrong! Please try again.",L)}const g=document.querySelector(".discount-list"),k={position:"top-right",timeout:3e3,width:"400px",fontSize:"30px"};g.innerHTML="";b().then(a=>{g.innerHTML=D(a)}).catch(x);document.addEventListener("click",function(a){const n=a.target.closest(".discount-card");if(n){const o=n.dataset.productId;console.log("ID:",o)}});function x(){Notiflix.Notify.failure("Something went wrong! Please try again.",k)}function T(a,n){return a.slice().sort(()=>Math.random()-.5).slice(0,n)}function D(a){return T(a,2).map(({_id:o,name:p,img:s,category:t,price:i,size:c,is10PercentOff:l,popularity:d})=>`<li class="discount-card" data-product-id="${o}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" href="#">
                <img src="${s}" alt="${p}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${p}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${i}</p>
             	<button class="add-cart-button add-button" data-id="${o}>
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
