const asyncHandler = require("express-async-handler")
const Brand = require("../models/brandModel.js")
const User = require("../models/userModel.js")

//@desc add a review to the user & the brand
//@route /reviews/:userid/:brandid
//access private

const addReview = asyncHandler(async (req, res)=>{
    console.log(req.body)
    const {description, title, image, rating, userName, brandName} = req.body 
    const {userid, brandid} = req.params
    const brandExist = await Brand.findById(brandid)
    const userExist = await User.findById(userid)
    if (!brandExist || !userExist){
        res.status(404)
        throw new Error('Brand or user does not exist');
    
    }
    brandExist.reviews.push(req.body)
    userExist.reviews.push(req.body)
    await brandExist.save()
    await userExist.save()

  
    res.status(201).send("Review added!")

})

//@desc delete a review
//@route DELETE /reviews/:reviewId/:brandname/:userId
//@access private
const deleteReview = asyncHandler(async (req, res)=>{
    const brand = await Brand.find({name: req.params.brandname})
    const user = await User.findById(req.params.userId)
    if (brand && user){
        const updatedReviews = brand.reviews.filter(review => review._id != reviewId)
        brand.reviews = updatedReviews;
        brand.save();
        const updatedUserReviews = user.reviews.filter(review => review._id != reviewId)
        user.reviews = updatedUserReviews;
        user.save();
        res.status(200).send("review deleted");
    }else{
        res.status(404)
        throw new Error('Not found');
    }

})
module.exports = {addReview, deleteReview}