const mongoose = require('mongoose');
const crypto = require('crypto')
const id = crypto.randomBytes(2).toString('HEX')

const ReceptionistSchema = mongoose.Schema({
    auth: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        default: id,
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
    
    email: {
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    salario:{
        type: Number,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    }
    
});
ReceptionistSchema.pre('save', async function(next) {
    const id = crypto.randomBytes(2).toString('HEX')
    // const id = crypto.randomBytes(12).toString('HEX')

    this._id = id
    next()
})

module.exports = mongoose.model('Receptionist', ReceptionistSchema, 'receptionist');
