import { SEARCH_PEDALS, SEARCH_BRANDS, CLEAR_DATA, SET_INDEX, GET_INITIAL } from '../actions/types';
const initialState = {
	pedalRes: [],
	initialPedal: [],
	pedalIndex: 0,
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
				pedalIndex: 0,
				loading: false,
			};
		case SEARCH_BRANDS:
			return {
				...state,
				brands: payload,
				loading: false,
			};
		case SET_INDEX:
			return {
				...state,
				pedalIndex: payload,
				loading: false,
			};
		case GET_INITIAL:
			return {
				...state,
				pedalRes: payload,
				loading: false,
			};
		case CLEAR_DATA:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
