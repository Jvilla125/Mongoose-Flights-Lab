// Create a connection from the mongodb server running on port 27017
const mongoose = require('mongoose');

// flights is the name of the database, it will either connect to a 'flights' database in mongodb
// or it will create a 'flights' database
mongoose.connect('mongodb://localhost/flights');

mongoose.connection.on('connected', function(){
    console.log('Connected to Mongodb at port 27017');
})