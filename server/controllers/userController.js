const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js")
const generateToken = require("../utils/generateToken.js")

//@desc register user 
//@route POST /users
//@access public
const registerUser = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body
    const userExist = await User.findOne({email})
    if (userExist){
        res.status(400)
        throw new Error("User already Exist")
    }
    const user = await User.create({name, email, password})
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

module.exports = {registerUser}