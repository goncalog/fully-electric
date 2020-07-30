const express = require('express');
const router = express.Router();
const evController = require('../controllers/evController');

// GET home page
router.get('/', evController.index);

// GET list of all evs
router.get('/evs', evController.getEvs);

// GET data to create new ev
router.get('/ev/create', evController.getCreateEv);

// POST to create new ev
router.post('/ev/create', evController.postCreateEv);

// GET unique ev
router.get('/ev/:id', evController.getUniqueEv);

// PUT to update ev
router.put('/ev/:id/update', evController.putUpdateEv);

// Placeholder code for testing POST routes
router.get('/test', evController.getTest);

router.post('/test', evController.postTest);

module.exports = router;
