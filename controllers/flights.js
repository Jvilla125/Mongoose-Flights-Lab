const Flight = require("../models/flight");

function index(req,res){

    Flight.find({}, function(err, allFlights){
        if(err){
            res.send("You have an error");
        }
        res.render('flights/index.ejs',{
            flights: allFlights
        });
    });
}

function newFlight(req,res){
    res.render('flights/new');
}

function create(req, res){
    
    Flight.create(req.body, function(err, flightCreated){
        if(err){
            return res.render('flights/new.ejs')
        }
        console.log(flightCreated, "<- flight created");
        res.redirect('/');
    })
}

module.exports = {
    index,
    new: newFlight,
    create
}