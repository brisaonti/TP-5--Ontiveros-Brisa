//archivo "../models/producto" contiene la definición del modelo de datos para un producto en la aplicación.
const Producto = require('../models/producto');

const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    // Recuperar productos de la base de datos
    var producto = await Producto.find();
    // Enviar los productos como respuesta JSON
    res.json(producto);
}
//req(petición) y res(respuesta). Estos parámetros generalmente se usan en Express.js o 
//marcos similares para manejar solicitudes y respuestas HTTP.
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        // Guardar el nuevo producto en la base de datos
        await producto.save();
        // Responder con un mensaje de éxito en formato JSON
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
        // Si ocurre un error durante el proceso de guardado, responder con un mensaje de error en formato JSON
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//1 función 
productoCtrl.getProductosDestacados = async (req, res) => {
    // Buscar productos destacados en la base de datos
    const producto = await Producto.find({destacado: true});
    // Enviar los productos como respuesta JSON
    res.json(producto);
}
//2 función
productoCtrl.editProducto = async (req, res) => {
    //crea unaProductoutilizando losreq.body).
    const vproducto = new Producto(req.body);
    try {
        // Actualizar el producto en la base de datos
        
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        // Responder con un mensaje de éxito en formato JSON
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
           // Si ocurre un error durante la operación, responder con un mensaje de error en formato JSON
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//para eliminar un producto en una aplicación. 
productoCtrl.deleteProducto = async (req, res) => {
    try {
        //que representa el identificador único del producto a eliminar.
        await Producto.deleteOne({ _id: req.params.id });
        //eliminación es exitosa
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
        //error durante el proceso de eliminación
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = productoCtrl;
//objeto productoCtrl será el valor principal exportado por el módulo actual.