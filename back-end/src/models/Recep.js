const mongoose = require('mongoose')

const RecepSchema = mongoose.Schema({
    
    date: {
        type: Date,
        default: new Date,
    },
    pacient: {
        type: mongoose.ObjectId,
        ref: 'Pacient',
        required: true,
    }, 
    medic:{
        type: mongoose.ObjectId,
        ref: 'Medic',
        required: true,
    },
    
    prescription: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Recep', RecepSchema, 'recep');