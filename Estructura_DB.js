pedidos([{
    "cliente":{
        nombreCliente: "",
        telefono: "", 
    },
    "motorista":{
        nombreMotorista: "",
        telefono: "",
    },
    metodoPago: "",
    producto: {
        restaurante:"",
        nombreProducto:"",
    },
    direccion: {
        lat: "",
        lng: ""
    },
    envio: 30,
    monto: 180
}]);

carrito({
    producto:{
        restaurante:"",
        nombreProducto:"",
        precio: 180
    },
    direccion:{
        lat: "",
        lng: ""
    }
})

restaurantes([{
    "nombreRestaurante": 'Pizza Hut',
    "icono": "",
    "menu":[
        {
            "nombreProducto": "",
            "descripcion": "",
            "precio": 150,
            "imagenProducto": ""
        }
    ],
    "envio": 35,
    "impuesto": 30
}]);

db.motoristas.insert([
    {
        nombre: "Yuvini",
        apellido: "Flores",
        fechaNacimiento: "20/20/2000",
        correo:"yuvini.flores@gmail.com",
        telefono:"9999-9999",
        genero:"Masculino",
        password:"asd.456",
        identidad:"0801-2000-25075",
        estado: "Aceptado"
    }
])

db.clientes.insert([
    {
        nombre: "Walter",
        apellido: "Bautista",
        fechaNacimiento: "11/12/2000",
        correo:"walter.bautista@gmail.com",
        telefono:"9999-9999",
        genero:"Masculino",
        password:"asd.456"
    }
])

db.administradores.insert(
    [{
        nombre: "Rafael",
        apellido: "Bautista",
        fechaNacimiento: "9/3/1998",
        correo:"rafael.bautista@gmail.com",
        genero:"Masculino",
        password:"asd.456"
    }]
)//Ya se inserta el dato del administrador

