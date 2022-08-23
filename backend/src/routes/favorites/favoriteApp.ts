import { FastifyPluginAsync } from 'fastify';
import { createFavorite } from './createFavorite';
import { deleteFavorite } from './deleteFavorite';
import { findFavorite } from './findFavorite';

export const favoriteApp: FastifyPluginAsync = async (app) => {
    app.register(findFavorite);
    app.register(createFavorite);
    app.register(deleteFavorite);
};
