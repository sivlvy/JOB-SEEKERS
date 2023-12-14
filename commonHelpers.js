import{l as s,i as r}from"./assets/modal-subscription-9fe9ee4a.js";import"./assets/vendor-c374a7a2.js";const a=s("products"),i=document.querySelector(".js-cart-counter");i.textContent=a.length;console.log(a);const o=document.querySelector(".js-cart-products");console.log(o);o.insertAdjacentHTML("beforeend",n(a));const c=document.querySelector(".cart-container");function l(){return s("products").length>=1?c.style.display="none":c.style.display="block"}l();function n(e){return e.map(t=>`<li class="cart-item" data-id="${t.data._id}">
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
											<use href="${r}#icon-icon-close"></use>
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
					</li>`).join("")}console.log(n);
//# sourceMappingURL=commonHelpers.js.map
