const User = require("../Models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async (req, res) => {
    //check if the login tried email is there
    const checkThisEmail = await req.body.email
    const user = await User.findOne({ email: checkThisEmail })
    console.log(user)
    if (!user) {
        return res.status(401).send("this user does not exist,create an account ")
    }

    //checks password
    const match = bcrypt.compare(req.body.password, user.password)
    if (match) {
        const userData = {
            name: user.name,
            email: user.email,
            _id: user._id,
        }

        const token = jwt.sign(userData, process.env.TOKEN_PRIVATE_KEY)

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.ENVIRONMENT === 'devolopment' ? false : true,
            sameSite: 'none',
            maxAge: 1 * 60 * 60 * 1000
        }).json(userData)
    }
    else res.status(401).send("login failed")
}

const verifyToken = async (req, res) => {

    const token = req.cookies.token
    console.log("have token")
    if (!token) {
        console.log("no token")
        return res.status(400).send("no token found")
    }
    // verifying is it our token by decoding

    const userData = jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
    if (!userData) {
        console.log("not our Token")
        return res.status(401).send("fake token")
    }

    //if verified
    console.log(userData.name)
    res.json(userData)

}

module.exports = {
    Login,
    verifyToken,
}