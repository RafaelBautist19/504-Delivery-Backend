var express = require('express');
var router = express.Router();
var administrador = require('../models/administrador');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


router.post('/', async function(req,res){
    const {correo, password} = req.body;
    const admin = await administrador.findOne();
    if (admin.correo !== correo) return res.status(401).send('Correo incorrecto');
    if (admin.password !== password) return res.status(401).send('Contraseña Incorrecta');

    const token = jwt.sign({_id:admin._id}, 'adminkey');
    return res.status(200).json({token});
});

router.get('/tasks', function(req,res){
    res.json([
        {
            _id:1,
            name: 'Task one',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
        {
            _id:2,
            name: 'Task two',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
        {
            _id:3,
            name: 'Task three',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
    ])
});

router.get('/private-tasks', verifyToken, function(req,res){
    res.json([
        {
            _id:1,
            name: 'Task one',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
        {
            _id:2,
            name: 'Task two',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
        {
            _id:3,
            name: 'Task three',
            description: 'Lorem Ipsum',
            date: '2021-08-11'
        },
    ])
})

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unthorize Request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unthorize Request');
    }

    const payload = jwt.verify(token, 'adminkey');
    req.userId = payload._id;
    next();
}