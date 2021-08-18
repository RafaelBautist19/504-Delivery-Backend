var express = require('express');
var router = express.Router();
var restaurante = require('../models/restaurante');
var mongoose = require('mongoose');

router.get('/', function(req,res){
    restaurante.find({},{})
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

router.get('/:idRestaurante',function(req,res){
    restaurante.findOne({
        _id: req.params.idRestaurante
    },{})
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

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
});

router.post('/nuevoRestaurante',function(req,res){
    let r = new restaurante({
        nombreRestaurante: req.body.nombreRestaurante,
        icono: req.body.icono,
        menu: [],
        impuesto: req.body.impuesto
    });

    r.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

router.post('/:idRestaurante/nuevoProducto', function(req,res){
    restaurante.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idRestaurante)
    },{
        $push:{
            menu:{
                _id: mongoose.Types.ObjectId(),
                nombreProducto: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                imagenProducto: req.body.imagenProducto
            }
        }
    })
    .then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
});

module.exports = router;