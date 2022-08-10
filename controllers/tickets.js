const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    res.render('tickets/new.ejs',{
        flights: req.params.id});
}

function create(req, res){
    const flights = req.params.id;
    console.log(flights, "<-- flights")
    req.body.flight = flights;
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flights}`);    
})
}
