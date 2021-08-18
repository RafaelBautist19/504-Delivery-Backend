var mongoose = require('mongoose');

var esquema = mongoose.Schema({
        cliente: Object,
        motorista: Object,
        metodoPago: String,
        producto: Object,
        direccion: Object,
        envio: number,
        monto: number,
        estado: String
});

module.exports = mongoose.model('pedidos', esquema);
