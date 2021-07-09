const express = require("express")
const router = express.Router()
const {registerUser, loginUser, userDetails} = require("../controllers/userController.js")
const {authUser} = require("../middleware/authMiddleware.js")

router.get("/:id", authUser, userDetails)


router.route("/")
    .post(registerUser)

router.route("/login")
.post(loginUser)    

    module.exports = router