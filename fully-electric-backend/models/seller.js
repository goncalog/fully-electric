const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SellerSchema = new Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
});

module.exports = mongoose.model('Seller', SellerSchema);
