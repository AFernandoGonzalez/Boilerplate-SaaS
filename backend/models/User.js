const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firebaseId: { type: String, required: true, unique: true },
    name: String,
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
