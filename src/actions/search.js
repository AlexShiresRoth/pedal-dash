import { SEARCH_PEDALS, SEARCH_BRANDS } from './types';
import axios from 'axios';
import { reverbApiKey } from '../config/default.json';

export const getPedals = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/hal+json',
				Authorization: `Bearer ${reverbApiKey}`,
				'Accept-Version': '3.0',
			},
		};
		console.log(formData);
		const res = await axios.get(
			`https://api.reverb.com/api/listings/all?category_uuid=fa10f97c-dd98-4a8f-933b-8cb55eb653dd&make=${formData.query}&model=${formData.query}`,
			config
		);
		dispatch({
			type: SEARCH_PEDALS,
			payload: res.data,
		});
	} catch (error) {
		console.error(error);
	}
};

export const getBrands = () => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/hal+json',
				Authorization: `Bearer ${reverbApiKey}`,
				'Accept-Version': '3.0',
			},
		};
		const res = await axios.get(
			`https://api.reverb.com/api/listings/all?category_uuid=fa10f97c-dd98-4a8f-933b-8cb55eb653dd`,
			config
		);
		dispatch({
			type: SEARCH_BRANDS,
			payload: res.data.listings,
		});
	} catch (error) {
		console.error(error);
	}
};
