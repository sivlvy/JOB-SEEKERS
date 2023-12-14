import{l,s as p,i as f}from"./assets/modal-subscription-e7cea4e5.js";import"./assets/vendor-c374a7a2.js";const r=document.querySelector(".cart-container"),o=l("products");console.log(o);const c=document.querySelectorAll(".js-cart-counter");function y(){c.forEach(t=>{t.textContent=o.length})}y();for(const t of c)t.textContent=o.length;const i=document.querySelector(".cart-content-wrap");o.length===0?i.style.display="none":r.style.display="none";const S=document.querySelector(".js-cart-products");S.insertAdjacentHTML("beforeend",I(o));const d=document.querySelectorAll(".cart-btn-close");console.log(d);d.forEach(t=>{console.log(t),t.addEventListener("click",v)});function v(t){const a=t.target.closest(".cart-item").dataset.id;o.forEach((n,s,$)=>{if(console.log(s),n.data._id===a){document.querySelector(".cart-item").remove(),p("products",o);const m=l("products");console.log(m),console.log(o.length),o.length===0&&(console.log("hello"),i.style.display="none",r.style.display="block",localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([])),c.forEach(g=>{g.textContent=test.length}))}})}const h=document.querySelector(".total__price");function u(){const a=l("products").reduce((n,s)=>n+=s.data.price,0).toFixed(2);h.textContent=`$${String(a)}`}console.log(u());u();const C=document.querySelector(".cart__delete-button");C.addEventListener("click",b);function b(){localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("products"));c.forEach(e=>{e.textContent=t.length}),t.length===0&&(i.style.display="none",r.style.display="block")}function I(t){return t.map(e=>`<li class="cart-item" data-id="${e.data._id}">
						<div class="cart-item-wrap">
							<div class="cart-img-container">
								<img
									class="cart-img"
									src="${e.data.img}"
									alt="${e.data.name}"
								/>
							</div>
							<div class="cart-img-text">
								<div class="cart-item-title-wrap">
									<h3 class="cart-item-title">${e.data.name}</h3>
									<button
										name="button"
										type="button"
										class="cart-btn-close"
										aria-label="Close modal window"
									>
										<svg width="18" height="18" class="cart-icon-close">
											<use href="${f}#icon-icon-close"></use>
										</svg>
									</button>
								</div>

								<div class="cart-info-container">
									<p class="cart-info">
										Category:
										<span>${e.data.category.replaceAll("_"," ")}</span>
									</p>
									<p class="cart-info cart-info-overflow">
										Size:
										<span>${e.data.size}</span>
									</p>
								</div>
								<h3 class="cart-info-price">$${e.data.price}</h3>
							</div>
						</div>
					</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
