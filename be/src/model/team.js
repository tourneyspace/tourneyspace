var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    name: String,
    players: [String]
})