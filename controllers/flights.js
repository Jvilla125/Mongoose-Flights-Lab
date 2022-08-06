
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

// Need to figure out how to render the departs: default function()
// from models/flight.js object in the function below
 //  {
    //    departs
    // });

function newFlight(req,res){
    res.render('flights/new')
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

function show(req, res){
    Flight.findById(req.params.id, function(err, allFlights){
        console.log(allFlights.destinations, " <-- destination")
        res.render('flights/show', {title: 'Flight Details', flight: allFlights})
    })
}
module.exports = {
    index,
    new: newFlight,
    create,
    show
}