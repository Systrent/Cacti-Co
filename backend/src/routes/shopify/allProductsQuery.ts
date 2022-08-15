import Shopify from '@shopify/shopify-api';
import { FastifyPluginAsync } from 'fastify';
import { SHOPIFY_SHOP, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../../config';

export const allProductsQuery: FastifyPluginAsync = async (app) => {
    //*Validated
    // app.get('/', {preValidation: app.authenticate}, async (req, res) => {
    app.get('/', async (req, res) => {
        // Load the access token as per instructions above
        const storefrontAccessToken: string = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

        // Shop from which we're fetching data
        const shop: string = SHOPIFY_SHOP;

        // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
        const storefrontClient: any = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

        // Use client.query and pass your query as `data`
        try {
            const products: any = await storefrontClient.query({
                data: `{
                    products(first: 3) {
                        edges {
                            node {
                                id
                                handle
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
                                variants(first: 1) {
                                    edges {
                                        node {
                                            id
                                        }
                                    }
                                }
                            }
                        }
                    }
                }`,
            });

            return products.body;
        } catch (error) {
            console.log(error);
        }
    });
};
