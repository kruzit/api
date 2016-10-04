const config = require("./config")

const pgp = require("pg-promise")({
    extend: (obj) => {
        obj.user = repos.user(obj, pgp),
        obj.message = repos.message(obj, pgp)
    }
})

const db = pgp(config)

module.exports = db
