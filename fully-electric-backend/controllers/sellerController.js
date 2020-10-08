const Seller = require('../models/seller');

const async = require('async');
const validator = require('express-validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// POST request to sign up seller
exports.signUp = [
    // Validate fields.
    validator.body('name', 'Name must not be empty.').trim().isLength({ min: 1 }),
    validator.body('contact', 'Contact must not be empty.').trim().isLength({ min: 1 }),
    validator.body('password', 'Password must have at least 8 characters.').trim().isLength({ min: 8 }),
    
    // Sanitize fields (using wildcard).
    validator.sanitizeBody('*').escape(),

    // Process request after validation and sanitization.
   (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validator.validationResult(req);

        // Encrypt password
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            // if err, do something
            if (err) { return next(err); }

            // otherwise, store hashedPassword in DB
            const user = new Seller({
                name: req.body.name,
                contact: req.body.contact,
                rating: 5,
                password: hashedPassword,
            });
            
            if (!errors.isEmpty()) {
                // There are errors. Send sanitized values/error messages.

                res.json({ errors: errors.array() });
                return;
                
            } else {
                // Data is valid. Save item.
                user.save(err => {
                    if (err) { return next(err); }

                    // Successful - render main page with messsages.
                    res.json({ title: `Seller signed up`, user: user });
                });
            }
        })
    }
]

// POST request to log in seller
exports.logIn = (req, res, next) => {
    res.json({ title: `Seller logged in` });
}

// POST request to log out seller
exports.logOut = (req, res, next) => {
    res.json({ title: `Seller logged out` });
}

// GET request to contact seller
exports.getContactSeller = (req, res, next) => {
    res.json({ title: `Contact form from seller with id ${req.params.id}` });
}

// POST request to contact seller
exports.postContactSeller = (req, res, next) => {
    const nodemailer = require('nodemailer');

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Create reusable transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_AUTH_USER,
                pass: process.env.NODEMAILER_AUTH_PASS,
            },
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.NODEMAILER_AUTH_USER, // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: `${req.body.from} has sent you the following message: \n\n${req.body.text}`,
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    main().catch(console.error);

    res.json({ title: `Contact seller with id ${req.params.id}` });
}
