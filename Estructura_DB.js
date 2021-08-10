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
        contraseña:"",
        identidad:""
    }
])

clientes([
    {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        correo:"",
        telefono:"",
        genero:"",
        contraseña:""
    }
])

administrador([
    {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        correo:"",
        genero:"",
        contraseña:""
    }
])
    // - Tipos de Usuarios: Motoristas, Clientes y Administrador
    // - Cada usuario tiene un ID generado por mongo
    // - Solo debe de existir un usuario del tipo Administrador
    // - Solo los usuarios "Motoristas" y "Clientes" pueden ser vinculados a el arreglo de pedidos

