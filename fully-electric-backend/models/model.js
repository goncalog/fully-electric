const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    make: { type: Schema.Types.ObjectId, ref: 'Make', required: true },
    name: { type: String, required: true },
    secondary_name: { type: String },
    performance: { type: String, required: true },
    charging: { type: String, required: true },
    original_msrp: { type: Number, required: true },
    rating: { type: Number, required: true },
});

// Virtual property for model's url
ModelSchema
    .virtual('url')
    .get(function () {
        return `/content/model/${this_id}`;
    });

module.exports = mongoose.model('Model', ModelSchema);
