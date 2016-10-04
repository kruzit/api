const express = require("express")
const router = express.Router()

const user = require("./user")
const message = require("./message")

router.use("/user", user)
router.use("/message", message)

module.exports = router
