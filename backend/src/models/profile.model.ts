import { Document, Schema, model } from 'mongoose';

export interface profileDocument extends Document {
    auth0Id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    contact: string;
}

const schema = new Schema(
	{
		auth0Id: { type: String },
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String },
		address: { type: String },
		contact: { type: String },
	},
	{ timestamps: true }
);

export const profileModel = model<profileDocument>('profile', schema);