import { backendAPI } from './backendAPI';

export const publicFetcher = async (key: string) => {
    const res = await backendAPI.get(key);
    return res.data;
};
