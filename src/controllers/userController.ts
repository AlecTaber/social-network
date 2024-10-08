import { Request, Response } from 'express';
import  User  from '../models/User.js';
import Thought from '../models/Thought.js';


export const getUsers = async (_: unknown, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
        } catch (err) {
        res.status(400).json(err);
        }
    };

    export const getUserById = async (req: Request, res: Response) => {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const createUser = async (req: Request, res: Response) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const updateUser = async (req: Request, res: Response) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const deleteUser = async (req: Request, res: Response) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Delete all thoughts associated with the user
            await Thought.deleteMany({ username: user.username });
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    export const addFriend = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.params;
            const user = await User.findByIdAndUpdate(userId, { $addToSet: { friends: friendId } }, { new: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    export const deleteFriend = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.params;
            const user = await User.findByIdAndUpdate(userId, { $pull: { friends: friendId } }, { new: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }