const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    destacado: { type: Boolean, required: true }
})
// "Producto" de mongoose para que pueda ser utilizado en otros módulos de la aplicación
//mongoose es un paquete de Node.js que proporciona una interfaz para interactuar con una base de datos MongoDB
module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema)