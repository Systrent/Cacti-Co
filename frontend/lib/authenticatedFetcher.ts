import { shopifyAPI } from './shopifyAPI';

export const authenticatedFetcher = (token: string) => async (key: string) => {
	const res = await shopifyAPI.get(key, {headers:{
		"Authorization": `Bearer ${token}`
	}});
	return res.data;
};