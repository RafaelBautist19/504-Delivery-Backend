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

motoristas([
    {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        correo:"",
        telefono:"",
        genero:"",
        password:"",
        identidad:""
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

