import { FastifyPluginAsync } from 'fastify';
import { recommendationModel } from '../../models/recommendation.model';

export const createRecommendation: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			title: string;
			description: string;
		};
	}>('/create', async (req, res) => {
		const data: any = req.body;
		req.log.info('Output');
		console.log(data);
		const { title, description } = data;

        const doc = await recommendationModel.create({
            title,
            description,
        });

        return doc;
	});
};
