const QueryFile = require("pg-promise").QueryFile
const path = require("path")

const sql = (file) => {
    const fullPath = path.join("./db/sql/", file)

    const options = {
        minify: true
    }

    return new QueryFile(fullPath, options)
}

module.exports = sql
