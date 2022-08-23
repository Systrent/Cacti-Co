import { FastifyPluginAsync } from 'fastify';
import { profileModel } from '../../models/profile.model';

export const findProfile: FastifyPluginAsync = async (app) => {
	app.get('/find', async (req, res) => {
		const profile = await profileModel.findOne({ auth0Id: 'github|58349789' });

		return profile;
	});
};
