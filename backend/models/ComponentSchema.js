const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    code: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Component', ComponentSchema);
