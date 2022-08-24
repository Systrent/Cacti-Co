import Shopify from '@shopify/shopify-api';
import { FastifyPluginAsync } from 'fastify';
import { SHOPIFY_SHOP, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../../config';

export const checkoutMutation: FastifyPluginAsync = async (app) => {
    //* Validated example
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {

    //* POST example
    // app.post<{ Body: { variantId: string } }>('/checkout', async (req, res) => {
    // req.body;
    // console.log(req.body);
    app.get<{ Querystring: { variantId: string } }>('/checkout', async (req, res) => {
        const { variantId } = req.query;
        console.log(req.query);
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
                    query: `mutation checkoutMutation($variantId: ID!) {
                    checkoutCreate(input: {
                        lineItems: {
                            variantId: $variantId
                            quantity: 1
                        }
                    }) {
                        checkout {
                            webUrl
                        }
                    }
                }`,
                    variables: {
                        variantId,
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
