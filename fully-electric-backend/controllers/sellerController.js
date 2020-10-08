// POST request to sign up seller
exports.signUp = (req, res, next) => {
    res.json({ title: `Seller signed up` });
}

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
