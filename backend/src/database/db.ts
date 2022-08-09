import mongoose from 'mongoose';
import { FastifyPluginAsync } from 'fastify';
import { MONGODB_URL } from '../config';

export const dbPlugin: FastifyPluginAsync = async (app) => {
    app.log.info(`----> Connecting database...`);
	mongoose.connect(MONGODB_URL).then(() => {
		app.log.info(`----> Database connection successful`);
	});
	app.log.info(`BBDD=${MONGODB_URL}`);
};
