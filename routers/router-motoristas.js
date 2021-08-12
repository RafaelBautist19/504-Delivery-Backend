var express = require('express');
var router = express.Router();
var motorista = require('../models/motorista');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


router.post('/login', async function(req,res){
    const {correo, password} = req.body;
    const usrMotorista = await motorista.findOne({correo},{});
    if (!usrMotorista) return res.status(401).send('Correo incorrecto');
    if (usrMotorista.password !== password) return res.status(401).send('Contraseña Incorrecta');
    const token = jwt.sign({_id:usrMotorista._id}, 'clientekey');
    const userID = usrMotorista._id;
    return res.status(200).json({token, userID});
    
});

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unthorize Request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unthorize Request');
    }

    const payload = jwt.verify(token, 'clientekey');
    req.userId = payload._id;
    next();
}