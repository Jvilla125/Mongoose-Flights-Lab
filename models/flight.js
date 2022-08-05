const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: {
        type: Date,
        default: function(){
            let newYear = new Date();
            return newYear.setFullYear(newYear.getFullYear() + 1);
    }
    }
});

module.exports = mongoose.model('Flight', flightSchema);