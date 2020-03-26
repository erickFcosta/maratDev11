const express = require('express');
const router = express.Router();
const OngController = require('./Controllers/OngController');
const IncControl = require('./Controllers/IncidentsController');
//=>>getRouter
router.get('/ongs', OngController.index);
router.get('/incidents', IncControl.index);
//=>>postRouter
router.post('/ongs', OngController.create);
router.post('/incidents', IncControl.create);

module.exports = router;

//=>apenas didatico
/*  const data = [id, name, email, whatsapp, city, uf];
    console.log(data);
    return res.json("a ong "+name+" foi cadastrada com o id:"+id); */
