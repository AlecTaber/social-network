import { Router } from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} from '../../controllers/userController.js';

const router = Router();

// /api/users

router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:id

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

export default router;
