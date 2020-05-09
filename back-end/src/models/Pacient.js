const mongoose = require('mongoose');
const crypto = require('crypto')
const id = crypto.randomBytes(5).toString('HEX')
const PacientScheme = mongoose.Schema({
    _id: {
        type: String,
        default: id,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    streat: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    }
});
PacientScheme.pre('save', async function(next) {
    const id = crypto.randomBytes(5).toString('HEX')
    // const id = crypto.randomBytes(12).toString('HEX')
    
    this._id = id
    next()
})
module.exports = mongoose.model('Pacient', PacientScheme, 'pacient')