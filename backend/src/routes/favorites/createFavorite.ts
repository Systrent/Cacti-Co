import { FastifyPluginAsync } from 'fastify';
import { favoriteModel } from '../../models/favorite.model';
export const createFavorite: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			auth0Id: string;
			productHandle: string;
		};
	}>('/create', async (req, res) => {
		const data: any = req.body;
		req.log.info('Output');
		const { auth0Id, productHandle } = data;

        const doc = await favoriteModel.create({
            auth0Id,
            productHandle,
        });

        return doc;
	});
};
