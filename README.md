# Social Network API
  ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
## Description 

This application is a social network API built using Express.js, MongoDB, and Mongoose. Users can share thoughts, react to friends' thoughts, and create a friend list. The API allows CRUD operations for users, thoughts, reactions, and friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation

To install this application, you will need to clone down the repository from GitHub. After it is cloned to your local machine, navigate to the directory you cloned it to and run an "npm install" to install the necessary dependencies. You will then need to create a .env file with your MongoDB URI. Once this is done, do an "npm run build" followed by a "npm run start" to start the server. Once the server is started, you can start testing the routes!

## Usage

This API provides endpoints for managing users, thoughts, reactions, and friends. After installation, the server will run at `http://localhost:3001`.

Use Insomnia to test the API routes.

## API Routes

### Users

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | `/api/users`                | Get all users                        |
| GET    | `/api/users/:userId`         | Get a user by ID                     |
| POST   | `/api/users`                | Create a new user                    |
| PUT    | `/api/users/:userId`         | Update a user by ID                  |
| DELETE | `/api/users/:userId`         | Delete a user by ID                  |

### Thoughts

| Method | Endpoint                      | Description                            |
|--------|-------------------------------|----------------------------------------|
| GET    | `/api/thoughts`               | Get all thoughts                       |
| GET    | `/api/thoughts/:thoughtId`     | Get a thought by ID                    |
| POST   | `/api/thoughts`               | Create a new thought                   |
| PUT    | `/api/thoughts/:thoughtId`     | Update a thought by ID                 |
| DELETE | `/api/thoughts/:thoughtId`     | Delete a thought by ID                 |

### Reactions

| Method | Endpoint                                       | Description                                   |
|--------|------------------------------------------------|-----------------------------------------------|
| POST   | `/api/thoughts/:thoughtId/reactions`           | Add a reaction to a thought                   |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove a reaction by reaction ID              |

### Friends

| Method | Endpoint                           | Description                            |
|--------|------------------------------------|----------------------------------------|
| POST   | `/api/users/:userId/friends/:friendId` | Add a friend to a user's friend list    |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend from a user's friend list |


## Credits

This application was built by Alec Taber

## License
  
  This project uses the MIT License. For more information, visit [license link](https://opensource.org/licenses/MIT).

## Features

- **User Management**: Create, update, and delete users.
- **Thoughts**: Users can create thoughts, update, and delete them.
- **Reactions**: Users can react to thoughts.
- **Friends**: Users can add and remove friends.
- **Virtuals**: Reaction counts and friend lists are virtual fields in the user schema.
- **Efficient Data Handling**: Thoughts and associated reactions are handled efficiently using MongoDB.

## Tests

N/A

## Contact

- GitHub: [AlecTaber](https://github.com/AlecTaber)
- Email: [alectaber12@gmail.com](mailto:alectaber12@gmail.com)