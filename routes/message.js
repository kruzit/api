const express = require("express")
const router = express.Router()

const db = require("./../db")

const get = require("./../utils/get")(router)
const post = require("./../utils/post")(router)

post("/", (req) => db.message.add(req.body))
get("/:x/:y", (req) => db.message.find(req.params))

module.exports = router
