import { FastifyPluginAsync } from 'fastify';
import { allProductsQuery } from './allProductsQuery';
import { checkoutMutation } from './checkoutMutation';
import { singleProductQuery } from './singleProductQuery';

export const shopifyApp: FastifyPluginAsync = async (app) => {
    app.register(allProductsQuery);
    app.register(singleProductQuery);
    app.register(checkoutMutation);
};
