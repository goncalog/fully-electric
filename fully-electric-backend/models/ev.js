const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentDate = new Date();

const EVSchema = new Schema({
    make: { type: Schema.Types.ObjectId, ref: 'Make', required: true },
    model: { type: Schema.Types.ObjectId, ref: 'Model', required: true },
    year: { type: Number, required: true, min: 1900, max: currentDate.getFullYear() },
    price: { type: Number, required: true, min: 0 },
    mileage: { type: Number, required: true, min: 0 },
    location: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
    image_url: { type: String, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'Seller', required: true },
    list_date: { type: Date, default: Date.now, required: true },
    equipment_and_options: { type: String, required: true },
    exterior: { type: String, required: true },
    interior: { type: String, required: true },
    vehicle_identification_number: { type: String, minlength: 17, maxlength: 17, required: true },
    full_vehicle_inspection: { type: Boolean, required: true },
});

// Virtual for ev's url
// Does not work with arrow function
EVSchema
    .virtual('url')
    .get(function () {
        return `/content/ev/${this._id}`;
    });

module.exports = mongoose.model('EV', EVSchema);