const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: String,
    img: String,
    details: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author