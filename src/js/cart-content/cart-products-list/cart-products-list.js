import { getCurrentProducts } from '../../services/food-api';

console.log(document.querySelector(''));
const addCart = document.querySelector('.add-button');
addCart.addEventListener('click', handleAddCartContent);

async function handleAddCartContent(event) {
	const { target } = event;

	console.log(target);

	try {
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
}
