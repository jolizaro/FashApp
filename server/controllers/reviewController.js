const asyncHandler = require("express-async-handler")
const Brand = require("../models/brandModel.js")
const User = require("../models/userModel.js")

//@desc add a review to the user & the brand
//@route /brands/:userid/:brandid
//access private

const addReview = asyncHandler(async (req, res)=>{
    const {description, title, image, rating} = req.body 
    const {userid, brandid} = req.params
    const brandExist = await Brand.findById(brandid)
    const userExist = await User.findById(userid)
    if (!brandExist || !userExist){
        res.status(404)
        throw new Error('Brand or user does not exist');
    
    }
    brandExist.reviews.push({description, title, image: image || "", rating})
    userExist.reviews.push({description, title, image: image || "", rating})
    await brandExist.save()
    await userExist.save()

  
    res.status(201).send("Review added!")

})
