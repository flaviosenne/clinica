const Recepcionist = require('../models/Recepcionist')
const Owner = require('../models/Owner')
const crypto = require('crypto')
const RecepcionistController = {
    async create(req, res) {
        try {
            const id = crypto.randomBytes(2).toString('HEX')
            const { name, contact, streat, salario, email, cpf, senha } = req.body

            const { auth } = req.body;
            var _id = auth;
            const acesso = await Owner.findOne({ _id })

            if (acesso) {
                await Recepcionist.create({
                    auth,
                    _id: id,
                    name,
                    contact,
                    streat,
                    salario,
                    email,
                    cpf,
                    senha
                });
                return res.json({ Status: 'Create Sucessful' }).end()
            } else {
                return res.json({ Status: 'Ascess recused' }).end()

            }
        }
        catch (err) {
            return res.json(err).end();
        }
    },

    async read(req, res) {
        // if (Object.keys(req.query).length > 0) {
        //     this.read(req, res).end()
        // } else {
            try {
                const read = await Recepcionist.find()
                return res.json(read).end()
            } catch (err) {
                return res.json(err).end()
            }
    },

    async getOne(req, res) {

        try {
            const id = req.params.id
            const get_one = await Recepcionist.findById(id)
            if (get_one) {
                return res.send(get_one).end()
            }
            else {
                return res.status(404).end()
            }
        }
        catch (err) {
            return res.json(err)
        }
    },

    async update(req, res) {

        try {
            const { auth } = req.body;
            var _id = auth;
            const acesso = await Owner.findOne({ _id })

            if (acesso) {
                const id = req.params.id
                const { name, contact, streat, salario, email, cpf, senha} =req.body
                
                const obj = await Recepcionist.findByIdAndUpdate(id, {
                    name, contact, streat, salario, email, cpf, senha
                })
                if (obj) {

                    return res.send(obj).end()
                } else {
                    return res.send(obj).end()
                }
            }
            else{
                res.json({Status: "Ascess recused"})
            }
        }
        catch (erro) {
            console.log(erro)
            return res.status(500).send(erro)
        }
        // name, contact, streat, salario, email, cpf, senha
    },

    async remove(req, res) {
        try {
            const id = req.body._id
            const { auth } = req.body;
            var _id = auth;
            const acesso = await Owner.findOne({ _id })

            if (acesso) {
                const obj = await Recepcionist.findByIdAndDelete(id)
                if (obj) {
                    res.json({ status: `${obj.name} removed` })
                } else {
                    res.json({ status: `${obj.id} not found` })
                }
            } else {
                return res.json({ Status: 'Ascess recused' }).end()
            }
        }
        catch (err) {
            res.json({ status: `error` })

        }
    }
}


module.exports = RecepcionistController;