const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find(); 

    res.json(productos);
}


productoCtrl.getProducto = async (req, res) => {
    var producto = await Producto.findById(req.params._id);

    res.json(producto);
}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    
    try {
        await producto.save();

        res.status(200).json({  // El "status(200)" se coloca de forma implicita si no se coloca
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar crear un Producto.'
        })
    }
}


productoCtrl.editProducto = async (req, res) => {
    const producto = new Producto(req.body);

    try {
        await Producto.updateOne({ _id: req.body._id }, producto);

        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar modificar un Producto'
        })
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        
        res.json({
            status: '1',
            msg: 'Agente Borrado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar eliminar un Producto'
        })
    }
 }


 productoCtrl.getProductosDestacados = async (req, res) => {
    var productos = await Producto.find({ destacado: true });

    res.json(productos);
}

module.exports = productoCtrl;
