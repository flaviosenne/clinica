const Recep = require('../models/Recep');
const Consultations = require('../models/Consultations');
const RecepController = {}


RecepController.create = async (req, res) => {
    try {
        const { prescription, consultation } = req.body;

        var _id = consultation
        const idConsultation = await Consultations.findOne({ _id })
        

        if (idConsultation) {
            await Recep.create({
                prescription,
                consultation
            });

            // assim que o médico emitir a receita para o paciente
            // automaticamento o status da consulta vai ser alterada para finalizada
            await Consultations.findByIdAndUpdate(_id, {status: 'Finalized'})
            
            return res.json({status: "Create Sucess",
                prescription,
                consultation
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
                .populate({ path: 'consultation', 
                populate: {path: 'medic', select: 'name'}
                 })
                .populate({ path: 'consultation',
                populate: {path: 'pacient', select: 'name'}
                }) 
                

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
        const { prescription, consultation } = req.body;

        
        _id = consultation
        const idConsultation = await Consultations.findOne({ _id })

        const id = req.params.id
        if (consultation) {
            const obj = await Recep.findByIdAndUpdate(id, {
                prescription,
                consultation
            })
            if (obj) {
                return res.json({status: 'update sucesfull'}).end()
            }
            else {
                return res.send({ Status: "id invalid" }).end()
            }
        }
        else {
            return res.json({ status: "Consultation not found" }).end()
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