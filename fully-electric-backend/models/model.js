const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    make: { type: Schema.Types.ObjectId, ref: 'Make', required: true },
    name: { type: String, required: true },
    secondary_name: { type: String },
    performance: {
        horsepower: { type: Number, required: true, min: 0 },
        miles_per_kwh: { type: Number, min: 0 },
        top_speed_mph: { type: Number, required: true, min: 0 },
        zero_to_sixty_mph: { type: Number, required: true, min: 0 },
    },
    charging: { type: String, required: true },
    original_msrp: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
});

// Virtual property for model's url
ModelSchema
    .virtual('url')
    .get(function () {
        return `/content/model/${this._id}`;
    });

module.exports = mongoose.model('Model', ModelSchema);
