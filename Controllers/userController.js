const User = require("../Models/userModel");
const bcrypt = require('bcrypt')



//gets all user
// const getAllUsers = async (req,res) => {
//     const users = await User.find({})
//     res.json(users)
// }

//get user by id


//add user
const addUser = async (req, res) => {
    const saltRounds = 10;
    const userData = await req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds);
    const user = await new User({
        ...userData,
        password: hash,
    })
    await user.save()
    
    res.send("added successfully")
}

//update user by id

//delete user by id

module.exports = {
    addUser,
}