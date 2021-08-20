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
    const userStatus = usrMotorista.estado;
    return res.status(200).json({token, userID, userStatus});
    
});

router.get('/:idMotorista',function(req,res){
    motorista.findOne({_id: req.params.idMotorista},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
})

router.get('/solicitud/pendiente', function(req,res){
    motorista.find({estado:"Pendiente"},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.get('/', function(req,res){
    motorista.find({estado: "Aceptado"})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.put('/:idMotorista/aceptar',function(req,res){
    motorista.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idMotorista)
    },{
        estado: "Aceptado"
    })
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});


router.put('/:idMotorista/rechazar',function(req,res){
    motorista.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idMotorista)
    },{
        estado: "Rechazado"
    })
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

router.post('/signup', function(req,res){
    let m = new motorista({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        correo:req.body.correo,
        telefono:req.body.telefono,
        genero:req.body.genero,
        password:req.body.password,
        identidad:req.body.identidad,
        estado: req.body.estado
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