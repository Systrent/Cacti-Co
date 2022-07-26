import Shopify from '@shopify/shopify-api';
import { FastifyPluginAsync } from 'fastify';

export const shopifyAPI: FastifyPluginAsync = async (app) => {
	app.get('/products', async (req, res) => {
		// Load the access token as per instructions above
		const storefrontAccessToken = '46331ae923ea4936eb61cee1a385f25a';

		// Shop from which we're fetching data
		const shop = 'cacti-co-systrent.myshopify.com';

		// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
		const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

		// Use client.query and pass your query as `data`
		const products = await storefrontClient.query({
			data: `{
                products(first: 3) {
                    edges {
                        node {
                            id
                            title
                            priceRange {
                                minVariantPrice {
                                    amount
                                }
                            }
                            images(first: 1) {
                                edges {
                                    node {
                                    transformedSrc
                                    }
                                }
                            }
                        }
                    }
                }
            }`,
		});

		return products.body;
	});
};
