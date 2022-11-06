
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
content_type: {
    type: String,
    required: true,
    enum: ['add', 'substract', 'multiply', 'divide'],
},
x: {
    type: Number,
    required: true,
},
y: {
    type: Number,
    required: true,
},
});

const Arithmetic = mongoose.model("Arithmetic", documentSchema);
module.exports = Arithmetic;
