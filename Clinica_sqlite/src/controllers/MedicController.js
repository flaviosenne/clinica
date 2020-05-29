const connection = require('../database/connection')
const crypto = require('crypto')

MedicController = {
    async create(req, res) {
        try{
            const { name, city, uf, crm, cpf, contact, streat, number } = req.body;
            const id = crypto.randomBytes(3).toString('hex')

            console.log('Generte '+ id)
            await connection('Medic').insert({
                id, name, city, uf, crm, cpf, contact, streat, number
            })
            return res.json({status: `${name} create sucefull`})
        }
        catch(err){
            console.log(err)
            return res.json(err)
        }
    },
    async read(req, res){
        try{
            const list = await connection('Medic').select('*')
            
            return res.json(list)
        }catch(err){
            console.log(err)
            return res.json(err)
        }
    }

}

module.exports = MedicController;