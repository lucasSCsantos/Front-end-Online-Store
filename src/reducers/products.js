import { SET_LIST } from '../action'

const initial_state = {
	productsList: [],
}

const products = (state = initial_state, action) => {
	switch (action.type) {
		case SET_LIST:	
			return { ...state, productsList: [...action.payload ] }
		default:
			return state;
	}
};

export default products;
