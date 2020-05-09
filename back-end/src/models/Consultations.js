const mongoose = require('mongoose');

const ConsultationsScheme = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    pacient: {
        type: String,
        ref: 'Pacient',
        required: true
    },
    status: {
        type: String,
        require: true,
        enum: ['Pendent', 'Finalized'],
        default: 'Pendent'
    },
    medic: {
        type: String,
        ref: 'Medic',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    
});

module.exports = mongoose.model('Consultations', ConsultationsScheme, 'consultations');