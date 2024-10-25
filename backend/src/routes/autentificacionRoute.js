
const express = require('express');
const router = express.Router();
const autentificacionController = require('../controllers/autentificacionController');


router.post('/login', autentificacionController.loginUser);
router.post('/refrescar-token', autentificacionController.refrescarToken);



module.exports = router;