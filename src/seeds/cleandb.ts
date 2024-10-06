import User from '../models/User.js';
import Thought from '../models/Thought.js';
import db from '../config/connection.js';

export const cleandb = async () => {
    try {
        await db();
        console.log('Clearing database...');
        await User.deleteMany({});
        await Thought.deleteMany({});
        console.log('Database cleared!');
    } catch (err) {
        console.error(err);
        throw new Error('Failed to clear database!');
    }
};

