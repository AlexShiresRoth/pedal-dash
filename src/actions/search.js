import { SEARCH_PEDALS } from './types';
import axios from 'axios';
import { reverbApiKey } from '../../config/default.json';

export const getPedals = catgegory => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/hal+json',
				Authorization: `Bearer ${reverbApiKey}`,
			},
		};
		const res = await axios.get('https://api.reverb.com/api/listings', config);
		dispatch({
			type: SEARCH_PEDALS,
			payload: res.data,
		});
	} catch (error) {
		console.error(error);
	}
};
