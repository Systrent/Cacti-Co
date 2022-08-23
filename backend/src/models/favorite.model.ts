import { Document, Schema, model } from 'mongoose';

export interface favoriteDocument extends Document {
    auth0Id: string;
    productId: string;
}

const schema = new Schema(
    {
        auth0Id: { type: String },
        productId: { type: String },
    },
    { timestamps: true }
);

export const favoriteModel = model<favoriteDocument>('favorite', schema);
