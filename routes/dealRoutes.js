const express = require('express');
const router = express.Router();
const { getDeals, createDeal, updateDeal, deleteDeal } = require('../controllers/dealController');

// GET  /api/deals   -> list all active weekly deals
// POST /api/deals    -> add a new deal
router.route('/').get(getDeals).post(createDeal);

// PUT    /api/deals/:slug -> update a deal
// DELETE /api/deals/:slug -> remove a deal
router.route('/:slug').put(updateDeal).delete(deleteDeal);

module.exports = router;
