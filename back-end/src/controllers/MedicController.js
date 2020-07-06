const Medic = require('../models/Medic');
const Owner = require('../models/Owner');

const MedicController = {

    async create(req, res) {

        const { auth } = req.body;
        var _id = auth;
        const acesso = await Owner.findOne({ _id })

        if (acesso) {
            const create = await Medic.create(req.body);
            if (create)
                return res.json(create.name + "created")
        }
        else {
            return res.json({ Status: "Authorization recused" });
        }

        return res.status(500).json({ error: 'Error' }).end();

    },

    async read(req, res) {
        if (Object.keys(req.query).length > 0) {
            this.read(req, res).end()
        } else {
            try {
                const read = await Medic.find()
                return res.json(read).end()
            } catch (err) {
                return res.json(err).end()
            }
        }
    },

    async getOne(req, res) {
        // if(Object.keys(req.query).length > 0){
        //     this.read(req, res)

        try {
            const id = req.params.id
            const get_one = await Medic.findById(id)
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
                const { name, crm, contact, streat, salario, email, senha} =req.body
                
                const obj = await Medic.findByIdAndUpdate(id, {
                    name, crm, contact, streat, salario, email, senha
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
    },

    async remove(req, res) {
        try {
            const { auth } = req.body;
            var _id = auth;
            const acesso = await Owner.findOne({ _id })

            if (acesso) {
                const id = req.body._id
                const obj = await Medic.findByIdAndDelete(id)
                if (obj) {
                    res.json({ status: `${obj.name} removed` })
                } else {
                    res.json({ status: `${obj.id} not found` })
                }
            }
            else {
                res.json({ Status: "Ascess recused" })
            }
        }
        catch (err) {
            res.json({ status: `error`, err })

        }
    }
}


module.exports = MedicController;