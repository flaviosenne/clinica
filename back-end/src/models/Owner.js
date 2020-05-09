const mongoose = require('mongoose');
const crypto = require('crypto')
const id = crypto.randomBytes(6).toString('HEX')
const OwnerScheme = new mongoose.Schema({
    _id: {
        type: String,
        default: id,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
    
});
OwnerScheme.pre('save', async function(next) {
    const id = crypto.randomBytes(6).toString('HEX')

    this._id = id
    next()
})

module.exports =  mongoose.model('Owner', OwnerScheme, 'owner');