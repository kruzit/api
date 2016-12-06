const express = require("express")
const router = express.Router()

const db = require("./../db")

const get = require("./../utils/get")(router)
const post = require("./../utils/post")(router)

get("/:device_uuid", (req) => db.user.find(req.params))

module.exports = router
