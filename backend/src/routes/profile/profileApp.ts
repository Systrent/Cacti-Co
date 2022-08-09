import { FastifyPluginAsync } from 'fastify';
import { createProfile } from './createProfile';
import { findProfile } from './findProfile';

export const profileApp: FastifyPluginAsync = async (app) => {
    app.register(findProfile);
    app.register(createProfile);
};
