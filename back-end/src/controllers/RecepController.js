const Recep = require('../models/Recep');

const RecepController = {}
    // async index(req, res) {
    //     const owner = await Recep.find()
    //     return res.json(owner);
    // }

    RecepController.create = async (req, res) => {
        try {
            const create = await Recep.create(req.body);
            
            return res.json({Status: "Create Sucess", create})

        }
        catch (err) {
            return res.json().end();
        }
    }

     RecepController.read= async (req, res) => {
        if (Object.keys(req.query).length > 0) {
            this.read(req, res).end()
        } else {
            try {
                const read = await Recep.find().populate('medic')
                //é o terceiro parametro do mongoose.model no arquivo de model
                return res.json(read).end()
            } catch(err){
                return res.json(err).end()
            }
        }
    }

    RecepController.getOne = async (req, res) =>{
        // if(Object.keys(req.query).length > 0){
        //     this.read(req, res)
        
            try{
                const id = req.params.id
                const get_one = await Recep.findById(id)
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

        RecepController.update = async (req, res) =>{
            // const id = req.params.id
            // const user = await Recep.findByIdAndUpdate(id)

            // return res.send(user)
        
            try {
                const id = req.body._id
                const obj = await Recep.findByIdAndUpdate(id, req.body)
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

            RecepController.delete =async(req, res)=> {
                try{
                    const id = req.body._id
                    const obj = await Recep.findByIdAndDelete(id)
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
            

module.exports =  RecepController;