const express = require("express")
const router = express.Router()
const {addReview} = require("../controllers/reviewController")
const {authUser} = require("../middleware/authMiddleware.js")

router.route("/:userid/:brandid") //parameter
    .post(authUser, addReview)
    
 

    module.exports = router