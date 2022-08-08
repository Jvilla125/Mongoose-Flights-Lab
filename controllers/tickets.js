const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket
}

function newTicket(req, res){
    Ticket.find({}, function(err, tickets){
        res.render('tickets/new', {
            title: 'Tickets',
            tickets
        })
    })
}


//     Flight.find({}, function(err, flights){
//         Ticket.find({}, function (err, tickets) {
//             res.render('tickets/new', {
//             title: 'Tickets',
//             tickets,
//             flights
//         });
//       })
//     })

// }