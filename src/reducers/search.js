import { SEARCH_PEDALS, SEARCH_BRANDS, CLEAR_DATA } from '../actions/types';
const initialState = {
	pedalRes: [],
	brands: [],
	loading: true,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SEARCH_PEDALS:
			return {
				...state,
				pedalRes: payload,
				loading: false,
			};
		case SEARCH_BRANDS:
			return {
				...state,
				brands: payload,
				loading: false,
			};
		case CLEAR_DATA:
			return {
				...state,
				pedalRes: [],
				loading: false,
			};
		default:
			return state;
	}
};
