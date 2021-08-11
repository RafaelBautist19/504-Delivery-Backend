var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = '504Delivery';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo en la base de datos:',db);
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();