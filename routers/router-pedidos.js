var express = require('express');
var router = express.Router();
var pedido = require('../models/pedido');
var mongoose = require('mongoose');
const motorista = require('../models/motorista');

router.post('/nuevoPedido',function(req,res){
    let p = new pedido({
        cliente: req.body.cliente,
        motorista: [],
        metodoPago: req.body.metodoPago,
        producto: req.body.producto,
        direccion: req.body.direccion,
        envio: req.body.envio,
        monto: req.body.monto,
        estado: "Sin Motorista"
    });

    p.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});


router.get('/pedidosSinMotoristas',function(req,res){
    pedido.find({estado:"Sin Motorista"},{})
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

module.exports = router;