const express = require('express');
const {
  getAllReviews,
  createReview,
} = require('../controllers/reviewController');
const { restrictTo, protect } = require('../controllers/authController');

// router will have accesto tourId param
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

module.exports = router;
