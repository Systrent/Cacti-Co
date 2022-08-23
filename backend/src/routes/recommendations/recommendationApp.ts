import { FastifyPluginAsync } from 'fastify';
import { createRecommendation} from './createRecommendation';
import { deleteRecommendation } from './deleteRecommendation';
import { findRecommendation } from './findRecommendation';

export const recommendationApp: FastifyPluginAsync = async (app) => {
    app.register(findRecommendation);
    app.register(createRecommendation);
    app.register(deleteRecommendation);
};
