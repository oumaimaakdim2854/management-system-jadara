const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    duration : String,
});

const Program = mongoose.model('Program', programSchema);
module.exports = Program;

