import { shopifyAPI } from './shopifyAPI';

export const backend_fetcher = async (key: string) => {
	const res = await shopifyAPI.get(key);
	return res.data;
};
