const express = require('express')
const { getbooks, getbookbyId, addbook, updatebook, deletebook, getbooksbyAuthor, getbooksbyGenre } = require('../Controllers/bookController')
const router = express.Router()

// if want middlewares add them here

router.get('/', getbooks)

router.get('/:bookId', getbookbyId)
router.get('/by/:authId', getbooksbyAuthor)

router.post('/', addbook)

router.patch('/:bookId', updatebook)

router.delete('/:bookId', deletebook)

module.exports = router