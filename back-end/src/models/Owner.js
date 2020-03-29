const mongoose = require('mongoose');

const OwnerScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: false,
    }
});

module.exports =  mongoose.model('Owner', OwnerScheme, 'owner');