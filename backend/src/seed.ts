import mongoose from 'mongoose';
import { MONGODB_URL } from './config';
import { profileModel } from './profile.model';

const createProfileExample = async () => {
	await profileModel.create(
        {
            auth0Id: 'github|58349789',
            firstName: 'Juan Pablo',
            lastName:'Mora Serrano',
            email: 'juanpams99@gmail.com',
            address: 'San José, Costa Rica',
            contact: '84070802',
            favoriteFamilies: ['Astrophytum', 'no se que #1', 'no se que #2'],
	    }
    );
};

(async () => {
	await mongoose.connect(MONGODB_URL);

	try {
		await profileModel.collection.drop();
	} catch (error) {
		console.log('No data found');
	}

	await createProfileExample();

	await mongoose.disconnect();
})();
