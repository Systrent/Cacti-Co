import { backendAPI } from "./backendAPI";

interface IProfile {
    auth0Id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    contact: string;
    favoriteFamilies?: string[];
}

export const createProfile = async (data: IProfile) => {
    const res = await backendAPI.post('/profile/create', data);
    console.log('CREATE USER');
    console.log(res.data);
    return res.data;
};
