const Consultation = require('../models/Consultations');

const ConsultationController = {}
    // async index(req, res) {
    //     const owner = await Consultation.find()
    //     return res.json(owner);
    // }

    ConsultationController.create = async (req, res) => {
        try {
            const create = await Consultation.create(req.body);
            return res.json({Status: "Create Sucess", create})

        }
        catch (err) {
            return res.json().end();
        }
    }

     ConsultationController.read= async (req, res) => {
        if (Object.keys(req.query).length > 0) {
            this.read(req, res).end()
        } else {
            try {
                const read = await Consultation.find()
                return res.json(read).end()
            } catch(err){
                return res.json(err).end()
            }
        }
    }

    ConsultationController.getOne = async (req, res) =>{
        // if(Object.keys(req.query).length > 0){
        //     this.read(req, res)
        
            try{
                const id = req.params.id
                const get_one = await Consultation.findById(id)
                if(get_one){
                    return res.send(get_one).end()
                }
                else{
                    return res.status(404).end()
                }
            }
            catch(err){
                return res.json(err)
            }
        }

        ConsultationController.update = async (req, res) =>{
            // const id = req.params.id
            // const user = await Consultation.findByIdAndUpdate(id)

            // return res.send(user)
        
            try {
                const id = req.body._id
                const obj = await Consultation.findByIdAndUpdate(id, req.body)
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

            ConsultationController.delete =async(req, res)=> {
                try{
                    const id = req.body._id
                    const obj = await Consultation.findByIdAndDelete(id)
                    if(obj){
                        res.json({status: `${obj.id} removed`})
                    }else{
                        res.json({status: `${obj.id} not found`})
                    }
                }
                catch(err){
                    res.json({status: `error`})

                }
            }
            

module.exports =  ConsultationController;