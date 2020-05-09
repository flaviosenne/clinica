const Owner = require('../models/Owner');

const OwnerController = {}

OwnerController.create = async (req, res) => {
    try {
        const create = await Owner.create(req.body);
        return res.json({ Status: "Create Sucess", create })

    }
    catch (err) {
        return res.json().end();
    }
}

OwnerController.read = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        this.read(req, res).end()
    } else {
        try {
            const read = await Owner.find()
            return res.json(read).end()
        } catch (err) {
            return res.json(err).end()
        }
    }
}

OwnerController.getOne = async (req, res) => {
    // if(Object.keys(req.query).length > 0){
    //     this.read(req, res)

    try {
        const id = req.params.id
        const get_one = await Owner.findById(id)
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
}

OwnerController.update = async (req, res) => {


    try {
        const id = req.body._id
        const obj = await Owner.findByIdAndUpdate(id, req.body)
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
}

OwnerController.delete = async (req, res) => {
    try {
        const id = req.body._id
        const obj = await Owner.findByIdAndDelete(id)
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


module.exports = OwnerController;