const express = require("express")
const router = express.Router()

const db = require("./../db")

const get = require("./../utils/get")(router)
const post = require("./../utils/post")(router)

post("/", (req) => db.user.add(req.body))
get("/:device_uuid", (req) => db.user.find(req.params))
get("/:device_uuid/:api_key", (req) => db.user.auth(req.params))

module.exports = router
