const express = require('express');
const {
  getAllTours,
  createTour,
  updateTour,
  getTour,
  deleteTour,
  checkID,
  validatePost,
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', checkID);

router
  .route('/')
  .get(getAllTours)
  .post(validatePost, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
