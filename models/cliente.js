var mongoose = require('mongoose');

var esquema = mongoose.Schema({
        nombre: String,
        apellido: String,
        fechaNacimiento: String,
        correo:String,
        telefono:String,
        genero:String,
        password:String
});

module.exports = mongoose.model('clientes', esquema);
