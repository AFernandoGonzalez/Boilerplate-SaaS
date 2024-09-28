const mongoose = require('mongoose');

const BoilerplateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    files: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Boilerplate', BoilerplateSchema);
