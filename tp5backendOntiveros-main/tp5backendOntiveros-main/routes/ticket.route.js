//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', ticketCtrl.getTickets);
router.get('/detalle/:id', ticketCtrl.getOneTicket)
router.post('/', ticketCtrl.createTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/espectadores/:categoria', ticketCtrl.getEspectadoresByCategoria);

//exportamos el modulo de rutas
module.exports = router;
