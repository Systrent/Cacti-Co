import cors from '@fastify/cors';
import auth0Verify from 'fastify-auth0-verify';
import { FastifyPluginAsync } from 'fastify';
import { dbPlugin } from './database/db';
import { shopifyApp } from './routes/shopify/shopifyApp';
import { profileApp } from './routes/profile/profileApp';
import { favoriteApp } from './routes/favorites/favoriteApp';
import { recommendationApp } from './routes/recommendations/recommendationApp';

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
    app.register(shopifyApp, { prefix: 'products' });

    //User Profile
    app.register(profileApp, { prefix: 'profile' });

    //User Favorites
    app.register(favoriteApp, { prefix: 'favorites' });

    //Care Recommendations
    app.register(recommendationApp, { prefix: 'recommendations' });

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
