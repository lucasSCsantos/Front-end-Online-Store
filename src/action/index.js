export const SET_LIST = 'SET_LIST';
export const SEND_CATEGORY = 'SEND_CATEGORY';


export const product_action = (payload) => (
	{
		type: SET_LIST,
		payload,
	}
);

export const category_action = (payload) => (
	{
		type: SEND_CATEGORY,
		payload,
	}
);
