import { backendAPI } from "../backendAPI";

interface IRecommendation {
    title: string;
    description: string;
}

export const createRecommendation = async (data: IRecommendation ) => {
    const res = await backendAPI.post('recommendations/create', data);
    console.log(res.data);
    return res.data;
};