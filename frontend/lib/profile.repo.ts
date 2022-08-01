import { profileAPI } from "./profileAPI";

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
	const res = await profileAPI.post('/', data);
    console.log(res.data);
	return res.data;
};
