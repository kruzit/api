const express = require("express")
const bodyParser = require("body-parser")

const auth = require("./utils/auth")

const app = express()
const routes = require("./routes")
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(auth)

app.use("/", routes)
app.listen(port, () => {
    console.log("Listening on port " + port + " ...")
})
