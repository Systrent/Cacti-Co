import { FastifyPluginAsync } from 'fastify';
import { recommendationModel } from '../../models/recommendation.model';

export const findRecommendation: FastifyPluginAsync = async (app) => {
    app.get('/find', async (req, res) => {
        const profile = await recommendationModel.find({});

        return profile;
    });
};
