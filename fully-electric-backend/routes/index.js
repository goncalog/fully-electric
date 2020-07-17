const express = require('express');
const router = express.Router();

// GET home page.
router.get('/', function (req, res, next) {
  res.json({ title: 'Fully Electric' });
});

// Placeholder code for testing POST routes.
const testArray = [];

router.get('/test', function (req, res, next) {
  res.json({ testArray });
});

router.post('/test', function (req, res, next) {
  testArray.push(req.body.item);
  res.send('Success!');
});

module.exports = router;
