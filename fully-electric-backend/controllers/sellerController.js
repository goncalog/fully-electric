// GET seller contact form
exports.getSellerContactForm = (req, res, next) => {
    res.json({ title: `Contact form from seller with id ${req.params.id}` });
}

// POST request to contact seller
exports.postContactSeller = (req, res, next) => {
    res.json({ title: `Contact seller with id ${req.params.id}` });
}
