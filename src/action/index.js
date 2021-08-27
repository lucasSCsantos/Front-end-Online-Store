import { getProductsFromCategoryAndQuery } from "../services/api";

export const SEND_CATEGORY = 'SEND_CATEGORY';
export const SEND_SEARCH = 'SEND_SEARCH';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const REQUEST = 'REQUEST';
export const FAILED = 'FAILED';
export const GET_DETAILS = 'GET_DETAILS';
// export const SET_RATE = 'SET_RATE'

export const getDetails = (payload) => (
	{
		type: GET_DETAILS,
		payload,
	}
);

export const category_action = (payload) => (
	{
		type: SEND_CATEGORY,
		payload,
	}
);

export const search_action = (payload) => (
	{
		type: SEND_SEARCH,
		payload,
	}
);

// export const product_rate = (payload) => (
// 	{
// 		type: SET_RATE,
// 		payload,
// 	}
// );

const getProducts = (json) => (
	{
		type: GET_PRODUCTS,
		payload: json.results,
	}
);

const requestProducts = () => (
	{
		type: REQUEST,
	}
);

const failedRequest = () => (
	{
		type: FAILED,
	}
);

export function fetchProducts(categoryId, query) {
	return (dispatch) => {
		dispatch(requestProducts());
		return getProductsFromCategoryAndQuery(categoryId, query)
			.then((r) => r.json()
				.then(
					(json) => dispatch(getProducts(json)),
					(error) => dispatch(failedRequest(error)),
				));
	};
}