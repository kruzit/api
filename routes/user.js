const express = require("express")
const router = express.Router()

const db = require("./../db")

const get = require("./../utils/get")(router)
const post = require("./../utils/post")(router)

post("/", () => db.user.add(req.body))

module.exports = router
