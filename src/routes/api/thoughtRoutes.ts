import { Router } from 'express';
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} from '../../controllers/thoughtController.js';

const router = Router();

// /api/thoughts

router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:id

router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  export default router;