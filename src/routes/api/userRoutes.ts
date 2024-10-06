import { Router } from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from '../../controllers/userController';

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

export default router;
