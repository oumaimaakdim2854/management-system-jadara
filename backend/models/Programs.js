// const mongoose = require("mongoose");

// const programSchema = mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     duration : String,
// });

// const Program = mongoose.model('Program', programSchema);
// module.exports = Program;

const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
    icon: {
        type: String,
        enum: ['shield', 'brain', 'code'],
        required: true,
    }
});

const Program = mongoose.model("Program", programSchema);
module.exports = Program;