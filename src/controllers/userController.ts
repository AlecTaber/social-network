import { Router, Request, Response } from 'express';
import  User  from '../models/User';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
    });

    router.get('/:id', async (req: Request, res: Response) => {
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
    });

    router.post('/', async (req: Request, res: Response) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    });

    router.put('/:id', async (req: Request, res: Response) => {
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
    });

    router.delete('/:id', async (req: Request, res: Response) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    });

    export default router;