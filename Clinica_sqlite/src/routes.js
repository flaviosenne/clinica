const {Router} = require('express')

const routes = Router();


const Medic = require('./controllers/MedicController')

routes.post('/medic', Medic.create)
routes.get('/medic', Medic.read)

module.exports = routes;