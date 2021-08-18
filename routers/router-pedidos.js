var express = require('express');
var router = express.Router();
var pedido = require('../models/pedido');
var mongoose = require('mongoose');

router.post('/nuevoPedido',function(req,res){
    let p = new pedido({
        cliente: req.body.cliente,
        motorista: {
            nombreMotorista:'',
            telefono:'',
            idMotorista:''
        },
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

router.get('/:idCliente', function(req,res){
    pedido.find({"cliente.idCliente": req.params.idCliente},{})
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
    
})

router.get('/:idPedido/informacion', function(req,res){
    pedido.find({_id:req.params.idPedido},{})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

router.get('/', function(req,res){
    pedido.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

module.exports = router;