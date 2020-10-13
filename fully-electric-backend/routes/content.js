const express = require('express');
const router = express.Router();
const evController = require('../controllers/evController');
const makeController = require('../controllers/makeController');
const modelController = require('../controllers/modelController');
const sellerController = require('../controllers/sellerController');
const withAuth = require('../auth/authMiddleware');

// GET request for home page
router.get('/', evController.index);

// GET request for list of all evs
router.get('/evs', evController.getEvs);

// GET request for data to create new ev
router.get('/ev/create', evController.getCreateEv);

// POST request to create new ev
router.post('/ev/create', evController.postCreateEv);

// GET request for unique ev
router.get('/ev/:id', evController.getUniqueEv);

// GET request to update ev
router.get('/ev/:id/update', evController.getUpdateEv);

// PUT request to update ev
router.put('/ev/:id/update', evController.putUpdateEv);

// DELETE request to delete ev
router.delete('/ev/:id/delete', evController.deleteEv);

// GET request for make
router.get('/make/:id', makeController.getMake);

// GET request for model
router.get('/model/:id', modelController.getModel);

// POST request to sign up seller
router.post('/seller/signup', sellerController.signUp);

// POST request to log in seller
router.post('/seller/login', sellerController.logIn);

// POST request to log out seller
router.post('/seller/logout', sellerController.logOut);

// GET request to list of the seller's evs
router.get('/seller/evs', withAuth, sellerController.getEvs);

// GET request to check log in status
router.get('/seller/checkAuth', withAuth, sellerController.checkAuth);

// GET request to get seller's list of evs for sale
router.get('/seller/:id', sellerController.getContactSeller);

// POST request to contact seller
router.post('/seller/:id/contact', sellerController.postContactSeller);

// Placeholder code for testing POST routes
router.get('/test', evController.getTest);

router.post('/test', evController.postTest);

module.exports = router;
