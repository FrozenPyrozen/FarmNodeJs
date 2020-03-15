const express = require('express');
const {
  getAllReviews,
  createReview,
  deleteReview,
} = require('../controllers/reviewController');
const { restrictTo, protect } = require('../controllers/authController');

// router will have accesto tourId param
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

router.route('/:id').delete(deleteReview);
module.exports = router;
