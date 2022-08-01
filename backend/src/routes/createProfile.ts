import { FastifyPluginAsync } from 'fastify';
import { ProfileModel } from '../profile.model';

export const createProfile: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			auth0Id: string;
			firstName: string;
			lastName: string;
			email: string;
			address: string;
			contact: string;
			favoriteFamilies: string[];
		};
	}>('/', async (req, res) => {
		const data = req.body;
		req.log.info('Output');
		console.log(data);
		const { auth0Id, firstName, lastName, email, address, contact, favoriteFamilies } = data;

        const doc = await ProfileModel.create({
			auth0Id,
			firstName,
			lastName,
			email,
			address,
			contact,
			favoriteFamilies,
		});

        return doc;
	});
};
