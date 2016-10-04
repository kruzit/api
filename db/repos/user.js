const sql = require("./../sql").user

module.exports = (rep, pgp) => {
    return {
        add: (values) => rep.one(sql.add, values)
    }
}
