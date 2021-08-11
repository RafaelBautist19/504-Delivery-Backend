var express = require('express');
var router = express.Router();
var administrador = require('../models/administrador');
var mongoose = require('mongoose');
//var jwt = require('jsonwebtoken');

router.get('/', function(req, res){
    administrador.find({})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;