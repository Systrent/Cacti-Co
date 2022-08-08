import cors from '@fastify/cors';
import auth0Verify from 'fastify-auth0-verify';
import { FastifyPluginAsync } from 'fastify';
import { allProductsQuery, checkoutMutation, singleProductQuery} from './shopify/shopifyAPI';
import { dbPlugin } from './db';
import { findProfile } from './routes/profile/findProfile';
import { createProfile } from './routes/profile/createProfile';

// const adminPlugin: FastifyPluginAsync = async (app) => {
// 	app.addHook('preValidation', app.authenticate);
// 	app.register(shopifyAPI);
// }

export const app: FastifyPluginAsync = async (app) => {
	await app.register(auth0Verify, {
		domain: 'dev-y4086k8k.us.auth0.com',
		audience: 'cacti-co',
	});
	
	//General
	app.register(dbPlugin);
	app.register(cors);

	//Shopify
	app.register(allProductsQuery, { prefix: 'products' });
	app.register(singleProductQuery, { prefix: 'products' });
	app.register(checkoutMutation, { prefix: 'products' });

	//User Profile
	app.register(findProfile, { prefix: 'profile' });
	app.register(createProfile, { prefix: 'profile' });

	app.get('/static', async (req, res) => {
		return [
			{
				handle: 1,
				name: 'Astrophytum Asterias V Type',
				description:
					'Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.',
				image: 'images/cactus_1.png',
				price: 10,
			},
			{
				handle: 2,
				name: 'Astrophytum Asterias V Type 2',
				description:
					'Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.',
				image: 'images/cactus_1.png',
				price: 10,
			},
			{
				handle: 3,
				name: 'Astrophytum Asterias V Type 3',
				description:
					'Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.',
				image: 'images/cactus_1.png',
				price: 10,
			},
			{
				handle: 4,
				name: 'Astrophytum Asterias V Type 4',
				description:
					'Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.',
				image: 'images/cactus_1.png',
				price: 10,
			},
			{
				handle: 5,
				name: 'Astrophytum Asterias V Type 5',
				description:
					'Patrones de V en el tronco. No espinoso. Crecimiento a lo ancho en los primeros años, posteriormente en vertical. Reproducción por semilla o esqueje.',
				image: 'images/cactus_1.png',
				price: 10,
			},
		];
	});
};
