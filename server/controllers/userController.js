const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js")
const generateToken = require("../utils/generateToken.js")
const bcrypt = require('bcrypt')

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
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({name, email, password: hash})
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

//@desc login user 
//@route POST /users/login
//@access public
const loginUser = asyncHandler(async (req, res)=>{
    const { email, password} = req.body
    console.log(email, password)
    const user = await User.findOne({email})
    if (!user){
        res.status(400)
        throw new Error("User does not exist")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const matchPassword = await bcrypt.compare(password, hash)
    
    if (user && matchPassword) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid email or password")
    }
})


module.exports = {registerUser, loginUser}