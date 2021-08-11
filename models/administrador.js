var mongoose = require('mongoose');

var esquema = mongoose.Schema({
    nombre:String,
    apellido: String,
    fechaNacimiento: String,
    correo: String,
    genero: String,
    password: String
});

module.exports = mongoose.model('administradores', esquema);