import Shopify from '@shopify/shopify-api';
import { FastifyPluginAsync } from 'fastify';
import { SHOPIFY_SHOP, SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config';

export const allProductsQuery: FastifyPluginAsync = async (app) => {
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
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
            // if (error instanceof ShopifyErrors.GraphqlQueryError) {
            //     // look at error.response for details returned from API,
            //     // specifically, error.response.errors[0].message
            // } else {
            //     // handle other errors
            // }
            console.log(error);
        }
    });
};

export const singleProductQuery: FastifyPluginAsync = async (app) => {
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
    app.get('/single', async (req, res) => {
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
                        handle: '',
                    },
                },
            });
            console.log(product.body);
            return product.body;
        } catch (error) {
            // if (error instanceof ShopifyErrors.GraphqlQueryError) {
            //     // look at error.response for details returned from API,
            //     // specifically, error.response.errors[0].message
            // } else {
            //     // handle other errors
            // }
            console.log(error);
        }
    });
};

export const checkoutMutation: FastifyPluginAsync = async (app) => {
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
    app.get('/checkout', async (req, res) => {
        // Load the access token as per instructions above
        const storefrontAccessToken: string = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

        // Shop from which we're fetching data
        const shop: string = SHOPIFY_SHOP;

        // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
        const storefrontClient: any = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

        // Use client.query and pass your query as `data`
        try {
            const product: any = await storefrontClient.query({
                data: `mutation checkoutMutation($variantId: ID!) {
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
            });
            // variantId: 'gid://shopify/ProductVariant/40622879080585',
            console.log(product.body);
            return product.body;
        } catch (error) {
            // if (error instanceof ShopifyErrors.GraphqlQueryError) {
            //     // look at error.response for details returned from API,
            //     // specifically, error.response.errors[0].message
            // } else {
            //     // handle other errors
            // }
            console.log(error);
        }
        // try {
        //     const product: any = await storefrontClient.mutation({
        //         data: {
        //             query: `mutation checkoutMutation($variantId: ID!) {
        //                 checkoutCreate(input: {
        //                     lineItems: {
        //                         variantId: $variantId
        //                         quantity: 1
        //                     }
        //                 }) {
        //                     checkout {
        //                         webUrl
        //                     }
        //                 }
        //             }`,
        //             variables: {
        //                 variantId: '',
        //             },
        //         },
        //     });
        //     // variantId: 'gid://shopify/ProductVariant/43157533622488',
        //     console.log(product.body);
        //     return product.body;
        // } catch (error) {
        //     // if (error instanceof ShopifyErrors.GraphqlQueryError) {
        //     //     // look at error.response for details returned from API,
        //     //     // specifically, error.response.errors[0].message
        //     // } else {
        //     //     // handle other errors
        //     // }
        //     console.log(error);
        // }
    });
};
