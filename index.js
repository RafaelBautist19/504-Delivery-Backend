var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var administradorRouter = require('./routers/administrador-router');
var clientesRouter = require('./routers/router-clientes');
var motoristasRouter = require('./routers/router-motoristas');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/administrador', administradorRouter);
app.use('/clientes', clientesRouter);
app.use('/motoristas', motoristasRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});

// process.on('unhandledRejection', (reason, p) => {
//     console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//     // application specific logging, throwing an error, or other logic here
// });