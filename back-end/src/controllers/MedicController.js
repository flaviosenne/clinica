const Medic = require('../models/Medic')

const MedicController = {

    async create (req, res) {
        try {
            const create = await Medic.create(req.body);
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
                const read = await Medic.find()
                return res.json(read).end()
            } catch (err) {
                return res.json(err).end()
            }
        }
    },

    async getOne  (req, res) {
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

    async update (req, res) {
        // const id = req.params.id
        // const user = await Medic.findByIdAndUpdate(id)

        // return res.send(user)

        try {
            const id = req.body._id
            const obj = await Medic.findByIdAndUpdate(id, req.body)
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
            const obj = await Medic.findByIdAndDelete(id)
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
            

module.exports = MedicController;