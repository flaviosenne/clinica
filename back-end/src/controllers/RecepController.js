const Recep = require('../models/Recep');
const Medic = require('../models/Medic');
const Pacient = require('../models/Pacient')
const RecepController = {}


RecepController.create = async (req, res) => {
    try {
        const { prescription, medic, pacient } = req.body;

        var _id = medic
        const idMedic = await Medic.findOne({ _id })

        _id = pacient
        const idPacient = await Pacient.findOne({ _id })

        if (idMedic && idPacient) {
            await Recep.create({
                prescription,
                pacient,
                medic
            });
            return res.json({status: "Create Sucess",
                prescription,
                medic: idMedic.name,
                pacient: idPacient.name
        })
        } else {
            return res.json({ Status: "Not Found" }).end();
        }

    }
    catch (err) {
        console.log(err)
        return res.json({ Status: 'err' }).end();
    }

}

RecepController.read = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        this.read(req, res).end()
    } else {
        try {

            const read = await Recep.find()
                .populate({ path: 'pacient', select: 'name' })
                .populate({ path: 'medic', select: 'name' })

            return res.json(read).end()
        } catch (err) {
            return res.json(err).end()
        }
    }
}

RecepController.getOne = async (req, res) => {

    try {
        const id = req.params.id
        const get_one = await Recep.findById(id)
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

RecepController.update = async (req, res) => {


    try {
        const { prescription, medic, pacient } = req.body;

        var _id = medic
        const idMedic = await Medic.findOne({ _id })

        _id = pacient
        const idPacient = await Pacient.findOne({ _id })

        const id = req.body._id
        if (idMedic && idPacient) {
            const obj = await Recep.findByIdAndUpdate(id, {
                prescription,
                medic,
                pacient
            })
            if (obj) {
                return res.json({status: `${medic.name} e ${pacient.name} update sucesfull`}).end()
            }
            else {
                return res.send({ Status: "id invalid" }).end()
            }
        }
        else {
            return res.json({ status: "Pacient or Medic not found" }).end()
        }

    }
    catch (erro) {
        console.log(erro)
        return res.status(500).send(erro)
    }
}

RecepController.delete = async (req, res) => {
    try {
        const id = req.body._id
        const obj = await Recep.findByIdAndDelete(id)
        if (obj) {
            res.json({ status: `${obj.id} removed` })
        } else {
            res.json({ status: `${obj.id} not found` })
        }
    }
    catch (err) {
        res.json({ status: `error` })

    }
}


module.exports = RecepController;