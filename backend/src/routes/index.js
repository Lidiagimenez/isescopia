const express = require('express');

const usersRouter = require('./usuarios.routes')
const materiasRouter = require('./materias.routes')
const carrerasRouter = require('./carreras.routes')
const alumnosRouter = require('./alumnos.routes')
const catedrasRouter = require('./catedra.routes')
const autentificacionRoute = require('./autentificacionRoute')

function routerApi(app){
 const router = express.Router();
 router.use('/materias', materiasRouter)
 router.use('/users', usersRouter)
 router.use('/carreras', carrerasRouter)
 router.use('/alumnos', alumnosRouter)
 router.use('/catedra', catedrasRouter)
router.use('/autentificacion', autentificacionRoute)
 app.use('/api/v1', router)
//  app.use('/api/v2', router)

}

module.exports = routerApi;

