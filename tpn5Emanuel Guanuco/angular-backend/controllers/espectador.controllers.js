const Espectador = require('../models/espectador');
const espectadorCtrl = {}



espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();

    res.json(espectadores);
}



espectadorCtrl.getEspectadorPorID = async (req, res) => {
    var espectador = await Espectador.findById( req.params._id);

    res.json(espectador);
}



espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    
    try {
        await espectador.save();

        res.json({
            'status': '1',
            'msg': 'Espectador registrado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar registrar un Espectador.'
        })
    }
}

module.exports = espectadorCtrl;
