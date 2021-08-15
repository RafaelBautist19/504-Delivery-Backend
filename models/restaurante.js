var mongoose = require('mongoose');

var esquema = mongoose.Schema({
        nombreRestaurante: String,
        icono: String,
        menu: Array,
        impuesto: Number
});

module.exports = mongoose.model('restaurantes', esquema);
