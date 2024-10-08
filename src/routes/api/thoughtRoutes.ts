import { Router } from 'express';
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
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

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions')
  .post(addReaction)
  
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

  export default router;