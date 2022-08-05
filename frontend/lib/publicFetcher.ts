import { shopifyAPI } from './shopifyAPI';

export const publicFetcher = async (key: string) => {
    const res = await shopifyAPI.get(key);
    return res.data;
};
