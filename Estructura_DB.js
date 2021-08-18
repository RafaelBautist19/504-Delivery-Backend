pedidos([{
    "cliente":{
        idCliente: "",
        nombreCliente: "",
        telefono: "", 
    },
    "motorista":{
        idMotorista:"",
        nombreMotorista: "",
        telefono: "",
    },
    metodoPago: "",
    producto: {
        restaurante:"",
        nombreProducto:"",
        precio: 30,
        cantidad: 1
    },
    direccion: {
        lat: "",
        lng: ""
    },
    envio: 30,
    monto: producto.precio + envio,
    estado: ""
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

db.restaurantes.insert([{
    nombreRestaurante: 'Burger King',
    icono: "restaurantes/Logo-Burger-King.png",
    menu:[
        {
            _id: ObjectId(),
            nombreProducto: "Bacon King Combo",
            descripcion: "Dos tortas de carne 100% de res, asadas a la parrilla cubiertas con 3 lascas de tocino, qiesp americano derretido, salsa de tomate y cremosa mayonea en un pan tostado. Acompañado de papas medianas y una Coca Cola de 12 oz.",
            precio: 150,
            imagenProducto: "restaurantes/BK/Bacon-King-Combo.webp"
        },
        {
            _id: ObjectId(),
            nombreProducto: "Combo Whopper",
            descripcion: "Hamburguesa con 1/4 lb de carne de res asada a la parrilla, cubierta con jugosos tomates, lechuga fresca, cremosa mayonesa, salsa de tomate, pepinillos crujientes y cebollas blancas rebanadas, en un pan suave de semillas de sesamo. Acompañado con papas medias y una Coca Cola de 12 oz.",
            precio: 100,
            imagenProducto: "restaurantes/BK/Combo-Whopper.webp"
        },
        {
            _id: ObjectId(),
            nombreProducto: "Big King XL",
            descripcion: "Disfruta de la exquisita Big King XL, una hamburguesa con carne 100% a la parrilla, queso americano, pepinillos, frescos vegetales y salsa stacker. Acompañados de papas medianas y una Coca Cola de 12 oz.",
            precio: 130,
            imagenProducto: "restaurantes/BK/Big-King-XL.webp"
        },
        {
            _id: ObjectId(),
            nombreProducto: "Combo King de Pollo",
            descripcion: "Sandwich de pollo, ligeramente empanizado y cubierto con una combinación de lechuga y cremosa mayonesa en un pan largo de semillas de sésamo. Acompañado de papas medianas y una Coca Cola de 12 oz.",
            precio: 120,
            imagenProducto: "restaurantes/BK/Combo-King-Pollo.webp"
        }
    ],
    impuesto: 30
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

