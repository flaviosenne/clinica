const mongoose = require('mongoose');
const crypto = require('crypto')
const id = crypto.randomBytes(4).toString('HEX')

const MedicSchema = mongoose.Schema({
    id: {
        type: String,
        default: id,
        required: true,
    },
    crm: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    streat:{
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    uf:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Medic', MedicSchema, 'medic');
