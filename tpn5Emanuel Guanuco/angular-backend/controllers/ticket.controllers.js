const Ticket = require('../models/ticket');
const ticketCtrl = {}


ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador"); // Incluye la informacion del espectador

    res.json(tickets);
}


ticketCtrl.getTicket = async (req, res) => {
    var ticket = await Ticket.findById(req.params._id).populate("espectador");

    res.json(ticket);
}



ticketCtrl.crearTicket = async (req, res) => {
    var ticket = new Ticket(req.body);

    try {
        await ticket.save();

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



ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar eliminar un Ticket'
        })
    }
}



ticketCtrl.editTicket = async (req, res) => {
    const ticket = new Ticket(req.body);

    try {
        await Ticket.updateOne({ _id: req.body._id }, ticket);

        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar modificar un Ticket'
        })
    }
}


ticketCtrl.getTicketsCategoria = async (req, res) => {
    var tickets = await Ticket.find({ categoriaEspectador: req.params.categoriaEspectador }).populate("espectador");

    res.json(tickets);
}

module.exports = ticketCtrl;
