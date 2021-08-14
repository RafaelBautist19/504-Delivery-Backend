var express = require('express');
var router = express.Router();
var cliente = require('../models/cliente');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


router.post('/login', async function(req,res){
    const {correo, password} = req.body;
    const usrCliente = await cliente.findOne({correo},{});
    if (!usrCliente) return res.status(401).send('Correo incorrecto');
    if (usrCliente.password !== password) return res.status(401).send('Contraseña Incorrecta');

    const token = jwt.sign({_id:usrCliente._id}, 'clientekey');
    const clientID = usrCliente._id;
    return res.status(200).json({token, clientID});
});

router.post('/signup', function(req,res){
    let m = new cliente({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        correo: req.body.correo,
        telefono: req.body.telefono,
        genero: req.body.genero,
        password: req.body.password
    });
    m.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
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