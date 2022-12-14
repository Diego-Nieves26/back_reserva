const mongoose = require('mongoose');

const scenerySchema = new mongoose.Schema({
    sceneryName: {
        type: String,
        required: [true, 'Please enter you name scenery '],
    },
    rating: {
        type: Number,
        required: [true, 'Please enter your rating scenery'],
    },
    user: {
        type: Object,
        required: [true, 'Please enter your user'],
    },
    description: {
        type: String,
        required: [true, 'Please enter your description'],
    },
    sceneryImgUrl: {
        type: String,
    },
    country: {
        type: String,
        required: [true, 'Please enter a valid country'],
    },
    city: {
        type: String,
        required: [true, 'Please enter a valid city'],
    },
    status: {
        type: String,
        default: 'active',
    },
});

const Scenery = mongoose.model('Scenery', scenerySchema);

module.exports = { Scenery };