import { backendAPI } from "../connection/backendAPI";

interface IRecommendation {
    title: string;
    description: string;
}

export const createRecommendation = async (data: IRecommendation ) => {
    const res = await backendAPI.post('recommendations/create', data);
    return res.data;
};