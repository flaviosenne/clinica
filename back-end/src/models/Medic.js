const mongoose = require('mongoose');
const crypto = require('crypto')
const id = crypto.randomBytes(4).toString('HEX')

const MedicSchema = mongoose.Schema({
    auth: {
        type: String,
        required: false
    },
    _id: {
        type: String,
        required: true,
        default: id,
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
    salario: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    }
});
MedicSchema.pre('save', async function(next) {
    const id = crypto.randomBytes(4).toString('HEX')
    // const id = crypto.randomBytes(12).toString('HEX')
    
    this._id = id
    next()
})

module.exports = mongoose.model('Medic', MedicSchema, 'medic');
