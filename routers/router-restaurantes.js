var express = require('express');
var router = express.Router();
var restaurante = require('../models/restaurante');
var mongoose = require('mongoose');

router.get('/', function(req,res){
    restaurante.find({},{_id:true, nombreRestaurante: true, icono:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.get('/:idRestaurante/menu', function(req,res){
    restaurante.find({
        _id: req.params.idRestaurante
    },{"menu":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
});

router.get('/:idRestaurante/menu/:idProducto', function(req,res){
    restaurante.find({
        _id:req.params.idRestaurante,
        "menu._id":mongoose.Types.ObjectId(req.params.idProducto)
    },{
        impuesto:true,
        "menu.$":true,
        _id:false
    })
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
})

module.exports = router;