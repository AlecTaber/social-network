// Seed Data for Users and Thoughts

export const users = [
    {
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        friends: [],
    },
    {
        username: 'janedoe',
        email: 'janedoe@gmail.com',
        friends: [],
    },
    {
        username: 'alexsmith',
        email: 'alexsmith@gmail.com',
        friends: [],
    },
];

export const thoughts = [
    {
        thoughtText: "Here's a thought from John Doe!",
        username: 'johndoe',
        reactions: [],
    },
    {
        thoughtText: "Jane Doe's amazing thought!",
        username: 'janedoe',
        reactions: [],
    },
    {
        thoughtText: "Alex Smith's deep thought.",
        username: 'alexsmith',
        reactions: [],
    },
];

export const reactions = [
    {
      reactionBody: 'Great thought!',
      username: 'janedoe',
    },
    {
      reactionBody: 'I totally agree!',
      username: 'alexsmith',
    },
  ];
  
  export const friends = [
    {
      username: 'johndoe',
      friends: ['janedoe', 'alexsmith'],
    },
    {
      username: 'janedoe',
      friends: ['johndoe'],
    },
  ];