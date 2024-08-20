const express = require('express')
const { addUser } = require('../Controllers/userController')
const router = express.Router()


router.post('/', addUser)

module.exports = router