const express = require("express")
const router = express.Router()
const userRoutes = require("./userRoutes")
const brandRoutes = require("./brandRoutes")
router.use("/brands", brandRoutes)
router.use("/users", userRoutes)

module.exports = router