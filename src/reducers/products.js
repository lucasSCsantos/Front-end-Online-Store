import { SET_LIST, SEND_CATEGORY } from '../action'

const initial_state = {
	productsList: [],
	category: '',
}

const products = (state = initial_state, action) => {
	switch (action.type) {
		case SET_LIST:	
			return { ...state, productsList: action.payload };
		case SEND_CATEGORY:
			return { ...state, category: action.payload }
		default:
			return state;
	}
};

export default products;
