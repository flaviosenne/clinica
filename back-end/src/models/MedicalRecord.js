const mongoose = require('mongoose');

const MedicalRecord = mongoose.Schema({
    
    date: {
        type: Date,
        default: Date.now(),
    },
    prescription: {
        type: String,
        required: true,
    },
    consultation: {
        type: String,
        ref: 'Consultation',
        required: true,
    } 
})

module.exports = mongoose.model('MedicalRecord', MedicalRecord, 'medical_record');