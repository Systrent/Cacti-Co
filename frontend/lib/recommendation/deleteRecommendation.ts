import { backendAPI } from '../connection/backendAPI';

export const deleteRecommendation = async (_id) => {
    const res = await backendAPI.delete(`recommendations/delete/${_id}`);
    return res.data;
};
