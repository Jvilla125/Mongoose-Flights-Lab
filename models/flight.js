const mongoose = require('mongoose');

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
        },
    }
}
});

module.exports = mongoose.model('Flight', flightSchema);