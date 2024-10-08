import { Request, Response } from 'express';
import  Thought from '../models/Thought.js';


export const getThoughts = async (_: unknown, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
    };

    export const getThoughtById = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const createThought = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const updateThought = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const deleteThought = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json({message: 'Thought deleted!'});
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const addReaction = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    };

    export const deleteReaction = async (req: Request, res: Response) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    };