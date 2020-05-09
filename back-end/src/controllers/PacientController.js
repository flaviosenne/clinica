const Pacient = require('../models/Pacient');

const PacientController = {

    async create (req, res) {
        try {
            const create = await Pacient.create(req.body);
            return res.json({ Status: "Create Sucess", create }).end()

        }
        catch (err) {
            return res.json().end();
        }
    },

    async read (req, res) {
        if (Object.keys(req.query).length > 0) {
            this.read(req, res).end()
        } else {
            try {
                const read = await Pacient.find()
                return res.json(read).end()
            } catch (err) {
                return res.json(err).end()
            }
        }
    },

    async getOne  (req, res) {

        try {
            const id = req.params.id
            const get_one = await Pacient.findById(id)
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

    async update (req, res) {
        // const id = req.params.id
        // const user = await Pacient.findByIdAndUpdate(id)

        // return res.send(user)

        try {
            const id = req.body._id
            const obj = await Pacient.findByIdAndUpdate(id, req.body)
            if (obj) {// obj foi encontrado
                //HTTP 204: No content

                return res.send(obj).end()
            } else {
                return res.send(obj).end()
            }
        }
        catch (erro) {
            console.log(erro)
            return res.status(500).send(erro)
        }
    },

    async remove (req, res) {
        try {
            const id = req.body._id
            const obj = await Pacient.findByIdAndDelete(id)
            if (obj) {
                res.json({ status: `${obj.name} removed` })
            } else {
                res.json({ status: `${obj.id} not found` })
            }
        }
        catch (err) {
            res.json({ status: `error` })

        }
    }
}
            

module.exports = PacientController;