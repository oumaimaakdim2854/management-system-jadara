const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: Date,
    location: String,
    description: String
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event
