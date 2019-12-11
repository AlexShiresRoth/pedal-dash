import { SEARCH_PEDALS } from '../actions/types';
const initialState = {
	pedalRes: [],
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
		default:
			return state;
	}
};
