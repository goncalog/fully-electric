const express = require('express');
const router = express.Router();
const evController = require('../controllers/evController');

// GET home page
router.get('/', evController.index);

// GET list of all evs
router.get('/ev', evController.getEvs);

// GET unique ev
router.get('/ev/:ev_id', evController.getUniqueEv);

// Placeholder code for testing POST routes
router.get('/test', evController.getTest);

router.post('/test', evController.postTest);

module.exports = router;
