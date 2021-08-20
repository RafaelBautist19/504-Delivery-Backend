var express = require('express');
var router = express.Router();
var restaurante = require('../models/restaurante');
var mongoose = require('mongoose');
var subirImagen = require('../middleware/images');

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

router.post('/nuevoRestaurante', subirImagen.uploadRestauranteLogo.fields([{name:'icono', maxCount:1}]), function(req,res){
    let r = new restaurante({
        nombreRestaurante: req.body.nombreRestaurante,
        icono: `restaurantes/${req.files.icono[0].filename}`,
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

router.post('/:idRestaurante/nuevoProducto', subirImagen.uploadProductos.fields([{name:'imagenProducto', maxCount:1}]), function(req,res){
    

    restaurante.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idRestaurante)
    },{
        $push:{
            menu:{
                _id: mongoose.Types.ObjectId(),
                nombreProducto: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                imagenProducto: `productos/${req.files.imagenProducto[0].filename}`
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