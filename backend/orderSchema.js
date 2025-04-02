const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
