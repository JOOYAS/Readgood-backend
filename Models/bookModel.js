const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    img: String,
    summary: String,
    authorId: String,
    genre: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book