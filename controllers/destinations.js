const Flight = require('../models/flight');

function create(req, res){
    //First find the detail of flight by using its model's ID (req.params.id)
    Flight.findById(req.params.id, function(err, allFlights){ 
        // use 'Flight.findById' to get access to the database and browser with the right id
        // 'allFlights' is a parameter that lets us use the object 
        // so we use allFlights.destination to add to the empty array
        allFlights.destinations.push(req.body);

        // have the array of allFlights.destination set to a variable
        const destinationArray = allFlights.destinations;
        console.log(destinationArray, "<--- this right here");
        console.log(req.params.id, "<req.params.id");
        console.log(req.body.id, "<-- req.body");
        // sort the arrays from ascending order
        const sortDestinations = destinationArray.sort((a,b) => (a.arrival) - (b.arrival));
        // we also need to save that information into the empty array 
        // then we redirect the user to the same page with a destination added
        allFlights.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}

function deleteDestination(req,res){
    Flight.findById(req.params.id, function(err, allFlights){
        allFlights.destinations.id(req.params.desId).remove()

    allFlights.save(function(err){
        res.redirect(`/flights/${req.params.id}`);
    })
})
}

module.exports = {
    create,
    delete: deleteDestination
};