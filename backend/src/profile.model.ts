import { Document, Schema, model } from 'mongoose';

export interface ProfileDocument extends Document {
    auth0Id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    contact: string;
    favoriteFamilies: string[];
}

const schema = new Schema(
	{
		auth0Id: { type: String },
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String },
		address: { type: String },
		contact: { type: String },
		favoriteFamilies: { type: Array },
	},
	{ timestamps: true }
);

export const ProfileModel = model<ProfileDocument>('profile', schema);