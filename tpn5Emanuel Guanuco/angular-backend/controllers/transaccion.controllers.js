const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}


transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();

    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async (req, res) => {
    var transaccion = await Transaccion.findById(req.params._id);

    res.json(transaccion);
}


transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);

    try {
        await transaccion.save();

        res.json({
            'status': '1',
            'msg': 'Transaccion registrada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar registrar una Transaccion.'
        })
    }
}



transaccionCtrl.getTransaccionesDeCliente = async (req, res) => {
    var transacciones = await Transaccion.find({ emailCliente: req.params.emailCliente });

    res.json(transacciones);
}




transaccionCtrl.getTransaccionesOrigenDestino = async (req, res) => {
    var transacciones = await Transaccion.find({ monedaOrigen: req.params.monedaOrigen, monedaDestino: req.params.monedaDestino });

    res.json(transacciones);
}

module.exports = transaccionCtrl;
