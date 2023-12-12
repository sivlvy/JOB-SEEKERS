import Notiflix from 'notiflix';
import axios from 'axios';
import { addEmail } from '../../services/food-api';
import { showError } from '../../services/food-api';

const formElem = document.querySelector('.form-footer');
const modalSubscription = document.querySelector('.modal-subscription');
const modalUnsubscription = document.querySelector('.modal-unsubscription');
const modalBackElem = document.querySelector('.modal-backdrop-subscription');
const closeBackDrop = document.querySelector('.container-modal');
modalSubscription.classList.add('is-hidden');
modalUnsubscription.classList.add('is-hidden');

const closeModal = event => {
	const target = event.target;
	if (target === modalSubscription || target.closest('.close')) {
		modalSubscription.classList.add('is-hidden');
		modalBackElem.classList.add('is-hidden');
	}
	if (target === modalUnsubscription || target.closest('.close')) {
		modalUnsubscription.classList.add('is-hidden');
		modalBackElem.classList.add('is-hidden');
	}
	if (target === closeBackDrop || target.closest('.close')) {
		modalUnsubscription.classList.add('is-hidden');
		modalBackElem.classList.add('is-hidden');
	}
};

document.addEventListener('keydown', onCloseModal);
document.addEventListener('click', onCloseModal);

function onCloseModal(evt) {
	if (evt.key === 'Escape' || evt.target === modalBackElem) {
		modalBackElem.classList.add('is-hidden');
		// return;
	}
	// 	if (evt.target === modalBackElem) {
	// 		console.log(evt.target);
	// 		modalBackElem.classList.add('is-hidden');
	// 	}
}
document.addEventListener('click', onCloseModal);

const openModalSubscription = () => {
	modalSubscription.classList.remove('is-hidden');
	modalBackElem.classList.remove('is-hidden');
};

const openModalUnsubscription = () => {
	modalUnsubscription.classList.remove('is-hidden');
	modalBackElem.classList.remove('is-hidden');
};

const handleSubscription = async email => {
	const body = { email };

	try {
		const checkedEmail = await addEmail(body);

		openModalSubscription();
	} catch (err) {
		if (err.response.data.message === 'Subscription already exists') {
			openModalUnsubscription();
		} else {
			showError();
		}
	}
};

function handleSubmit(e) {
	e.preventDefault();
	const emailInput = document.querySelector('.input-label');
	const email = emailInput.value.trim();
	handleSubscription(email);
}

formElem.addEventListener('submit', handleSubmit);
modalSubscription.addEventListener('click', closeModal);
modalUnsubscription.addEventListener('click', closeModal);
modalBackElem.addEventListener('click', closeModal);
