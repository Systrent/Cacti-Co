import { config } from 'dotenv';

config();

export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/w14d2';
export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
export const SHOPIFY_SHOP = process.env.SHOPIFY_SHOP || '';
