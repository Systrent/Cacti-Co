import { FastifyPluginAsync } from 'fastify';
import { ProfileModel } from '../profile.model';

export const findProfile: FastifyPluginAsync = async (app) => {
	app.get('/find', async (req, res) => {
		const profile = await ProfileModel.findOne({ auth0Id: 'github|58349789' });

		return profile;
	});
};
