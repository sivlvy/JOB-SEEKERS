import{l as o,i}from"./assets/modal-subscription-11c0b488.js";import"./assets/vendor-c374a7a2.js";const n=document.querySelector(".cart-container"),a=o("products"),c=document.querySelectorAll(".js-cart-counter");function d(){c.forEach(e=>{e.textContent=a.length})}d();for(const e of c)e.textContent=a.length;const s=document.querySelector(".cart-content-wrap");a.length===0?s.style.display="none":n.style.display="none";const u=document.querySelector(".js-cart-products");u.insertAdjacentHTML("beforeend",y(a));const m=document.querySelector(".total__price");function p(){const t=o("products").reduce((r,l)=>r+=l.data.price,0);m.textContent=`$${t}`}p();const f=document.querySelector(".cart__delete-button");f.addEventListener("click",g);function g(){localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([]));const e=JSON.parse(localStorage.getItem("products"));c.forEach(t=>{t.textContent=e.length}),e.length===0&&(s.style.display="none",n.style.display="block")}function y(e){return e.map(t=>`<li class="cart-item" data-id="${t.data._id}">
						<div class="cart-item-wrap">
							<div class="cart-img-container">
								<img
									class="cart-img"
									src="${t.data.img}"
									alt="${t.data.name}"
								/>
							</div>
							<div class="cart-img-text">
								<div class="cart-item-title-wrap">
									<h3 class="cart-item-title">${t.data.name}</h3>
									<button
										name="button"
										type="button"
										class="cart-btn-close"
										aria-label="Close modal window"
									>
										<svg width="18" height="18" class="cart-icon-close">
											<use href="${i}#icon-icon-close"></use>
										</svg>
									</button>
								</div>

								<div class="cart-info-container">
									<p class="cart-info">
										Category:
										<span>${t.data.category.replaceAll("_"," ")}</span>
									</p>
									<p class="cart-info cart-info-overflow">
										Size:
										<span>${t.data.size}</span>
									</p>
								</div>
								<h3 class="cart-info-price">${t.data.price}</h3>
							</div>
						</div>
					</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
