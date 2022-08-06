const Flight = require('../models/flight');

function create(req, res){
    //First find the detail of flight by using its model's ID (req.params.id)
    Flight.findById(req.params.id, function(err, allFlights){ 
        // use 'Flight.findById' to get access to the database and browser with the right id
        // 'allFlights' is a parameter that lets us use the object 
        // so we use allFlights.destination to add to the empty array
        allFlights.destinations.push(req.body);
        // we also need to save that information into the empty array 
        // then we redirect the user to the same page with a destination added
        allFlights.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}

module.exports = {
    create
};