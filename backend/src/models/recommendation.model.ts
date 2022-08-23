import { Document, Schema, model } from 'mongoose';

export interface recommendationDocument extends Document {
    title: string;
    description: string;
}

const schema = new Schema(
    {
        title: { type: String },
        description: { type: String },
    },
    { timestamps: true }
);

export const recommendationModel = model<recommendationDocument>('recommendation', schema);
