const express = require("express")
const router = express.Router()
const {addReview, deleteReview} = require("../controllers/reviewController")
const {authUser} = require("../middleware/authMiddleware.js")

router.route("/:userid/:brandid") //parameter
    .post(authUser, addReview)
router.route("/:reviewId/:brandname/:userId")
    .delete(authUser, deleteReview)
    
 

    module.exports = router