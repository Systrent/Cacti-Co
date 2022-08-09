import Shopify from '@shopify/shopify-api';
import { FastifyPluginAsync } from 'fastify';
import { SHOPIFY_SHOP, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../../config';

export const singleProductQuery: FastifyPluginAsync = async (app) => {
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
    app.post<{ Body: { handle: string } }>('/single', async (req, res) => {
        //Req
        // req.body;
        const { handle } = req.body;
        console.log(req.body);

        // Load the access token as per instructions above
        const storefrontAccessToken: string = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

        // Shop from which we're fetching data
        const shop: string = SHOPIFY_SHOP;

        // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
        const storefrontClient: any = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

        // Use client.query and pass your query as `data`
        try {
            const product: any = await storefrontClient.query({
                data: {
                    query: `query singleProductQuery($handle: String!) {
                        productByHandle(handle: $handle) {
                            title
                            description
                            updatedAt
                            priceRange {
                                minVariantPrice {
                                    amount
                                }
                            }
                            images(first: 1) {
                                edges {
                                    node {
                                        transformedSrc
                                        altText
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
                    }`,
                    variables: {
                        handle,
                    },
                },
            });
            console.log(product.body);
            return product.body;
        } catch (error) {
            console.log(error);
        }
    });
};
