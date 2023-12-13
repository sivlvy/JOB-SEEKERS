import { getProductById } from '../../services/food-api';
function toggleMenu() {
	productmodal.classList.toggle('is-hidden');
}

export function clickproduct(id) {
	const productmodal = document.getElementById('productmodal');
	getProductById(id).then(({ data }) => {
		productmodal.innerHTML = createModalContent(data);
		openProductModal(productmodal);
	});
}

function openProductModal(productmodal) {
	const closeButton = productmodal.querySelector('.mod-card-close');
	closeButton.addEventListener('click', closeProductModal);
	productmodal.style.display = 'flex';
	toggleMenu();
}

function closeProductModal() {
	const productmodal = document.getElementById('productmodal');
	productmodal.style.display = 'none';
	toggleMenu();
}

function createModalContent(data) {
	return `<div class="modal-2-wrap">
	<div class="modal-img-wrap">
                <div class="modal-img-section">
                    <a class="modal-gallery-link" >
                        <img src="${data.img}" alt="${
		data.name
	}" width="160" height="160" loading="lazy" />
                    </a>
                </div>
                <div class="modal-center-section">
					<div class="modal-section-up">
                		<p class="modal-info-item">${data.name}</p>		
                        <div class="modal-subsection">
                        <p class="modal-category-item">Category: <span>${data.category.replace(
													'_',
													' '
												)}</span>Size:<span>${data.size}</span></p>
                		<p class="modal-popularity-item"></span>Popularity:<span>${
											data.popularity
										}</span></p>
									
					    </div>
                    </div>
					<div class="modal-section-down">
                    <p class="modal-desc-item">${data.desc}</p>
                	</div>
                 </div> 
				</div>
				 <div class="modal-price-button">
                    <p class="modal-info-item">$${data.price}</p>	
                    <button class="modal-button-section add-to-cart " type="button" data-id="${
											data._id
										}">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="../../../icons.svg#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="../../../icons.svg#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`;
}
