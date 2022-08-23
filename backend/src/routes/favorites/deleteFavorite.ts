import { FastifyPluginAsync } from 'fastify';
import { favoriteModel } from '../../models/favorite.model';

export const deleteFavorite: FastifyPluginAsync = async (app) => {
    app.delete<{ Params: { auth0Id: string; productHandle: string } }>('/:productId', async (req, res) => {
        const { productHandle } = req.params;

        await favoriteModel.deleteMany({ productHandle: productHandle });

        return {
            status: 'deleted',
        };  
    });
};
