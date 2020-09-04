const EV = require('../models/ev');

// GET request for home page.
exports.index = (req, res, next) => {
    res.json({ title: 'Fully Electric' });
}

// GET request for list of all evs
exports.getEvs = (req, res, next) => {
    EV.find({})
        .populate('location')
        .populate('make')
        .populate('model')
        .populate('seller')
        .exec(function (err, evs) {
            if (err) { return next(err); }

            // Successful, so send data
            res.json({ title: 'List of all EVs', evs: evs });
        });
}

// GET request for unique ev
exports.getUniqueEv = (req, res, next) => {
    EV.findById(req.params.id)
        .populate('location')
        .populate('make')
        .populate('model')
        .populate('seller')
        .exec(function (err, ev) {
            if (err) { return next(err); }

            // Successful, so send data
            res.json({ title: `Unique EV with id ${ev._id}`, ev: ev });
        });
}

// GET request for data to create new ev
exports.getCreateEv = (req, res, next) => {
    res.json({ title: 'Data to create new EV' });
}

// POST request to create new ev
exports.postCreateEv = (req, res, next) => {
    res.json({ title: 'Create new EV' });
}

// GET request to update ev
exports.getUpdateEv = (req, res, next) => {
    res.json({ title: `Data to update EV with id ${req.params.id}` });
}

// PUT request to update ev
exports.putUpdateEv = (req, res, next) => {
    res.json({ title: `Update EV with id ${req.params.id}` });
}

// DELETE request to delete ev
exports.deleteEv = (req, res, next) => {
    res.json({ title: `Delete EV with id ${req.params.id}` });
}

// Placeholder code for testing POST routes.
const testArray = [];

exports.getTest = (req, res, next) => {
    res.json({ testArray });
}

exports.postTest = (req, res, next) => {
    testArray.push(req.body.item);
    res.send('Success!');
}
