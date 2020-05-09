const Consultation = require('../models/Consultations');
const Medic = require('../models/Medic');
const Pacient = require('../models/Pacient')

const ConsultationController = {}

ConsultationController.create = async (req, res) => {

    try {
        const { description, medic, pacient } = req.body;

        var _id = medic
        const idMedic = await Medic.findOne({ _id })

        _id = pacient
        const idPacient = await Pacient.findOne({ _id })

        if (idMedic && idPacient) {
            await Consultation.create({
                description,
                medic,
                pacient
            });
            return res.json({
                Status: "Create Sucess",
                description,
                medic: idMedic.name,
                pacient: idPacient.name
            })
        } else {
            return res.json({ Status: "Not Found" }).end();
        }
    }
    catch (err) {
        return res.json({ Status: "error", err }).end();
    }
}

ConsultationController.read = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        this.read(req, res).end()
    } else {
        try {
            const read = await Consultation.find()
                .populate({ path: 'medic', select: 'name' })
                .populate({ path: 'pacient', select: 'name' })

            return res.json(read).end()
        } catch (err) {
            return res.json(err).end()
        }
    }
}

ConsultationController.getOne = async (req, res) => {

    try {
        const id = req.params.id
        const get_one = await Consultation.findById(id)
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

ConsultationController.update = async (req, res) => {

    try {
        const { description, medic, pacient } = req.body;

        var _id = medic
        const idMedic = await Medic.findOne({ _id })

        _id = pacient
        const idPacient = await Pacient.findOne({ _id })

        const id = req.body._id
        if (idMedic && idPacient) {
            const obj = await Consultation.findByIdAndUpdate(id, {
                description,
                medic,
                pacient,
            })
            if (obj) {// obj foi encontrado
                //HTTP 204: No content
                return res.json({ 
                    description,
                    idMedic,
                    idPacient
                }).end()
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

ConsultationController.delete = async (req, res) => {
    try {
        const id = req.body._id
        const obj = await Consultation.findByIdAndDelete(id)
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


module.exports = ConsultationController;