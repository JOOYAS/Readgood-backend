const Book = require("../Models/bookModel");

//gets all books
const getbooks = async (req, res) => {
    const books = await Book.find({});
    res.json(books)
}

//gets data of  book by id
const getbookbyId = async (req, res) => {
    const book = await Book.findById(req.params.bookId)
    res.json(book)
}

//get book for the same author-dont have time for filtering now
const getbooksbyAuthor = async (req, res) => {
    const books = await Book.find({ authorId: req.params.authId })

    res.json(books)
}


//adds a boook to database
const addbook = async (req, res) => {
    //1. get genre from body of request
    const bookData = req.body
    //2. create document /automatically get an id
    const book = new Book(bookData)
    //3. saving to DB
    await book.save()
    res.json(book)
}

//update details about a book using id
const updatebook = (req, res) => {
    res.send("book with this id has been updated")
}

//delete book using id
const deletebook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.bookId);
    res.send('deleted this author')
}

module.exports = {
    getbooks,
    getbookbyId,
    getbooksbyAuthor,
    addbook,
    updatebook,
    deletebook
}