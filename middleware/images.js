// const upload = multer({ dest: 'uploads/' });
const multer = require('multer');
const { v4: uuid } = require('uuid');
const path = require('path');

const filename = (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
};

const options = {
    limits: { fileSize: 5 * 1024 * 1024 }, //Limitar a 5MB
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif|webp/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(null, false);
    }
};

const restaurantesLogoStorage = multer.diskStorage({
    destination: 'public/images/restaurantes',
    filename
});

const productosStorage = multer.diskStorage({
    destination: 'public/images/productos',
    filename
});

uploadRestauranteLogo = multer({
    storage: restaurantesLogoStorage,
    limits: options.limits,
    fileFilter: options.fileFilter
});


uploadProductos = multer({
    storage: productosStorage,
    limits: options.limits,
    fileFilter: options.fileFilter
});

module.exports = { uploadRestauranteLogo, uploadProductos};
