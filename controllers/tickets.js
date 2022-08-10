const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    res.render('tickets/new.ejs',{
        flights: req.params.id});
    // Flight.findById({}, function(err, flights){
    //         res.render(`tickets/new.ejs`, {
    //             flights: flights
    //         })
    //     })
}

// function create(req, res){
//     flight
//     const ticket = new Ticket(req.body)
//     // ticket.flight.push(req.body.flight)
//         ticket.save(function(err, tickets){
//             console.log(ticket);
//             res.redirect(`/flights/${req.body.flight}`)
//     })
// }

function create(req, res){
    const flights = req.params.id;
    console.log(flights, "<-- flights")
    req.body.flight = flights;
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flights}`);    
})
}
