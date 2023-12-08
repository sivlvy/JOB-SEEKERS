import Notiflix from 'notiflix';

export function saveToLS(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
	const data = localStorage.getItem(key);

	try {
		return JSON.parse(data);
	} catch (error) {
		Notiflix.Notify.failure('Oops! Something went wrong!');
		return data;
	}
}
