const express = require('express')
const { getAuthors, getAuthorById, updateAuthor, addAuthor, deleteAuthor } = require('../Controllers/authorController')
const router = express.Router()

//if have route specific middlewares set here

router.get('/', getAuthors)

router.get('/:authorId', getAuthorById)

router.post('/', addAuthor)

router.patch('/:authorId', updateAuthor)

router.delete('/:authorId', deleteAuthor)

module.exports = router