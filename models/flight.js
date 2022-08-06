const mongoose = require('mongoose');

// Need to embed a one-to-many relationship inside of 'flightSchema'
// One flight may have many destinations, those destinations belong to one Flight
const destinationSchema = new mongoose.Schema({
    airport: String,
    arrival: {
        type: Date
    }
});

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: {
        type: Date,
        departs: {
            type: Date, 
            default: function(){
            const nextYear = new Date().getFullYear(getFullYear()+1);
            return nextYear;
            }
        }
    },
    destinations: [destinationSchema] // This creates an array for the destinations 
});

module.exports = mongoose.model('Flight', flightSchema);