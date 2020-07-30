const express = require('express');
const router = express.Router();
const evController = require('../controllers/evController');
const makeController = require('../controllers/makeController');
const modelController = require('../controllers/modelController');
const sellerController = require('../controllers/sellerController');

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

// DELETE ev
router.delete('/ev/:id/delete', evController.deleteEv);

// GET make
router.get('/make/:id', makeController.getMake);

// GET model
router.get('/model/:id', modelController.getModel);

// GET seller contact form
router.get('/seller/:id', sellerController.getSellerContactForm);

// POST request to contact seller
router.post('/seller/:id', sellerController.postContactSeller);

// Placeholder code for testing POST routes
router.get('/test', evController.getTest);

router.post('/test', evController.postTest);

module.exports = router;
