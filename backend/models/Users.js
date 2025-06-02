const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6},
    isValidated: { type: Boolean, default: false },
    role: { type: String, enum: ['student', 'admin'], default: 'student' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;