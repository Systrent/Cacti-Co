import { FastifyPluginAsync } from 'fastify';
import { recommendationModel } from '../../models/recommendation.model';

export const deleteRecommendation: FastifyPluginAsync = async (app) => {
    app.delete<{ Params: { _id: string } }>('/delete/:_id', async (req, res) => {
        const { _id } = req.params;

        await recommendationModel.findByIdAndDelete({ _id });

        return {
            status: 'deleted',
        };
    });
};
