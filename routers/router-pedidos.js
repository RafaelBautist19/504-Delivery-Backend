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
});

router.get('/:idMotorista/cantidadPedidosAceptados',function(req,res){
    pedido.find({"motorista.idMotorista": req.params.idMotorista, "estado":"En camino al Restaurante"},{})
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

router.put('/:idPedido/pedidoAsignado', function(req,res){
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido)
    },{
        estado: "En camino al Restaurante",
        motorista: req.body.motorista
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

router.put('/:idPedido/restaurante', function(req,res){
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido)
    },{
        estado: "En el Restaurante"
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

router.put('/:idPedido/caminoEntrega', function(req,res){
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido)
    },{
        estado: "En camino a su hogar"
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

router.put('/:idPedido/entregado', function(req,res){
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido)
    },{
        estado: "Entregado"
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

router.put('/:idPedido/cancelado', function(req,res){
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido)
    },{
        estado: "Cancelado"
    }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

module.exports = router;