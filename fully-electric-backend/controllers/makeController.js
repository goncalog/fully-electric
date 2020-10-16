const Make = require('../models/make');

// GET request for make
exports.getMake = (req, res, next) => {
    res.json({ title: `Make with id ${req.params.id}` });
}

// GET request for list of all makes
exports.getMakes = (req, res, next) => {
    Make.find({})
        .exec(function (err, makes) {
            if (err) { return next(err); }

            // Successful, so send data
            res.json({ title: 'List of all makes', makes: makes });
        });
}
