import { FastifyPluginAsync } from "fastify";
import { repeat } from "ramda";
import cors from "@fastify/cors";
import { shopifyAPI } from "./shopifyAPI"

export const app:FastifyPluginAsync = async(app) => {
    app.register(cors)
	app.register(shopifyAPI);
    app.get("/", async(req, res) => {
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
}