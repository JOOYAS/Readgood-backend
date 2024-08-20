const express = require('express')
const { Login, verifyToken } = require('../Controllers/auth0Controllers')
const router = express.Router()


router.post('/', Login)

router.get('/verify', verifyToken)

module.exports = router