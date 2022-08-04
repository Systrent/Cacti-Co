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
	const res = await profileAPI.post('/profile/create', data);
	console.log('CREATE USER');
    console.log(res.data);
	return res.data;
};	

// export const findProfile = async () => {
// 	const res = await profileAPI.get('/profile/find');
// 	console.log('REQUEST USER');
// 	console.log(res.data);
// 	return res.data;
// }