const express = require('express');
const router = express.Router();
const Catedras = require('../controllers/catedra.controllers.js');


router.get("/",Catedras.getCatedras)
module.exports = router;