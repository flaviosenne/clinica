const mongoose = require('mongoose')

const RecepSchema = mongoose.Schema({
    
    date: {
        type: Date,
        default: Date.now(),
    },
    prescription: {
        type: String,
        required: true,
    },
    pacient: {
        type: String,
        ref: 'Pacient',
        required: true,
    }, 
    medic:{
        type: String,
        ref: 'Medic',
        required: true
    }    
})

module.exports = mongoose.model('Recep', RecepSchema, 'recep');