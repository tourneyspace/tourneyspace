var mongoose = require('mongoose');

var TourneySchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String,
    date: Date,
    teams: [String],
    courts: Integer,
    startTime: Date,
    break: Date,
    gamelength: Integer
})