import{l as o,i}from"./assets/modal-subscription-a0a7c75c.js";import"./assets/vendor-c374a7a2.js";const a=document.querySelector(".cart-container");s();const d=o("products");document.getElementById("#cart");const m=document.querySelector(".cart-content-wrap"),c=document.querySelector(".js-cart-products");console.log(c);c.insertAdjacentHTML("beforeend",n(d));function s(){return o("products").length>=1?a.style.display="none":a.style.display="block"}s();const u=document.querySelector(".total__price");function g(){const t=o("products").reduce((r,l)=>r+=l.data.price,0);u.textContent=`$${t}`}g();const p=document.querySelector(".cart__delete-button");p.addEventListener("click",y);function y(){localStorage.removeItem("products"),localStorage.setItem("products",JSON.stringify([])),JSON.parse(localStorage.getItem("products")).length===0&&(m.style.display="none",a.style.display="block")}function n(e){return e.map(t=>`<li class="cart-item" data-id="${t.data._id}">
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
					</li>`).join("")}console.log(n);
//# sourceMappingURL=commonHelpers.js.map
