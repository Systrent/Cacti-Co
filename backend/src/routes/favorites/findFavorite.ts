import { FastifyPluginAsync } from 'fastify';
import { favoriteModel } from '../../models/favorite.model';

export const findFavorite: FastifyPluginAsync = async (app) => {
	app.get('/find', async (req, res) => {
		const profile = await favoriteModel.find({});
		
		return profile;
	});
};
