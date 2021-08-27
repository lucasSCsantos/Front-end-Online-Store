import { GET_DETAILS, SEND_CATEGORY, FAILED, REQUEST, GET_PRODUCTS, SEND_SEARCH, SET_RATE } from '../action'

const initial_state = {
	productsList: [],
	category: '',
	query: '',
	isFetching: false,
	error: '',
	product: '',
}

const products = (state = initial_state, action) => {
	switch (action.type) {
		case REQUEST:
			return { ...state, isFetching: true };
		case GET_PRODUCTS:	
			return { ...state, productsList: action.payload, isFetching: false };
		case FAILED:
			return { ...state, error: action.payload, isFetching: false };
		case GET_DETAILS:
			return { ...state, product: action.payload };
		case SEND_CATEGORY:
			return { ...state, category: action.payload };
		case SEND_SEARCH:
			return { ...state, query: action.payload}
		default:
			return state;
	}
};

export default products;
