var mongoose = require('mongoose');

var servidor = '127.0.0.1:27017';
var db = 'deliveryApp';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log('Se conecto a mongo en la base de datos:',db);
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();