const mongoose = require('mongoose');

const PacientScheme = mongoose.Schema({
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

module.exports = mongoose.model('Pacient', PacientScheme, 'pacient')