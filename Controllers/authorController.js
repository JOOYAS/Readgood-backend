const Author = require("../Models/authorModel");

const getAuthors = async (req,res) => {
    authors = await Author.find({});
    res.json(authors)
}

const getAuthorById = async (req,res) => {
    const author = await Author.findById(req.params.authorId)
    res.json(author)
}

const addAuthor = async (req,res) => {
    const authorData = req.body
    const author = new Author(authorData)
    await author.save()
    res.json(author)
}

const updateAuthor = (req,res) => {
    res.send('the author got updated')
}

const deleteAuthor = async (req,res) => {
    await Author.findByIdAndDelete(req.params.authorId)
    res.send('the author has been removed')
}

module.exports = {
    getAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
}