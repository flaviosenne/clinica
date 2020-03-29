const mongoose = require('mongoose');

const ConsultationsScheme = new mongoose.Schema({
    namePatient: {
        type: String,
        required: true,
    },
    brithDate: {
        type: String,
        required: true,
    },
    medic: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Consultations', ConsultationsScheme, 'consultations');