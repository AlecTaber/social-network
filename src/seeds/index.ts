import { cleandb } from './cleandb.js';
import User, { IUser } from '../models/User.js';
import Thought from '../models/Thought.js';  // No need to import IThought for this operation
import { users, thoughts } from './data.js';
import db from '../config/connection.js'; // Import the database connection

const seedDatabase = async () => {
  try {
    // Ensure the database is connected
    await db();  // Call the db() to connect to MongoDB

    // Clear existing data
    await cleandb();

    // Insert users and specify the type for insertedUsers
    const insertedUsers: IUser[] = await User.insertMany(users);
    console.log('Users seeded successfully.');

    // Create a map for users
    const userMap: { [username: string]: string } = {};
    insertedUsers.forEach(user => {
      userMap[user.username] = user._id.toString();  // Map usernames to their MongoDB ObjectId
    });

    // Map thoughts to include the userId, and insert them into the database
    const thoughtsToInsert = thoughts.map(thought => ({
      ...thought,
      userId: userMap[thought.username],  // Associate thoughts with the correct user
    }));

    // Insert thoughts and get the inserted thoughts with their _id
    const insertedThoughts = await Thought.insertMany(thoughtsToInsert);  // Now contains _id
    console.log('Thoughts seeded successfully.');

    // Add thought IDs to the respective users
    for (const thought of insertedThoughts) {  // Now accessing the _id from insertedThoughts
      const userId = userMap[thought.username];
      await User.findByIdAndUpdate(userId, { $push: { thoughts: thought._id } });
    }

    console.log('Seed data linked successfully.');
    process.exit(0);  // Exit the process once seeding is done
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);  // Exit with failure
  }
};

seedDatabase();




