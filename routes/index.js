const express = require("express")
const router = express.Router()
const userRoutes = require("./userRoutes")
const brandRoutes = require("./brandRoutes")
const reviewRoutes = require("./reviewRoutes")
router.use("/brands", brandRoutes)
router.use("/users", userRoutes)
router.use("/reviews", reviewRoutes)

module.exports = router