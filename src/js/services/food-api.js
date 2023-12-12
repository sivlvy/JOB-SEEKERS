import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export const getCategoryList = async () => {
	const { data } = await axios.get(`/products/categories`);
	return data;
};

export const getAllProducts = async () => {
	const { data } = await axios.get(`/products`);
	return data;
};

export const getCurrentProducts = async ({
	keyword,
	category,
	page,
	limit,
	sortBy,
}) => {
	const params = new URLSearchParams({
		page,
		limit,
	});

	if (keyword) {
		params.set('keyword', keyword);
	}

	if (category) {
		params.set('category', category);
	}

	if (sortBy) {
		params.set('sortBy', sortBy);
	}

	const { data } = await axios.get(`/products/`, { params });

	return data;
};

export const getProductById = async id => {
	const data = await axios.get(`/products/${id}`);
	return data;
};
export const getPopularProducts = async limit => {
	const { data } = await axios.get(`/products/popular?limit=${limit}`);
	return data;
};

export const getDiscountProducts = async () => {
	const { data } = await axios.get(`/products/discount`);
	return data;
};
export const addEmail = async body => {
	const { data } = await axios.post(`/subscription`, body);

	return data;
};
