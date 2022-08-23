import { backendAPI } from './backendAPI';

export const authenticatedFetcher = (token: string) => async (key: string) => {
    const res = await backendAPI.get(key, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};
