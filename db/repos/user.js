const sql = require("./../sql").user

module.exports = (rep, pgp) => {
    return {
        add: (values) => rep.one(sql.add, values),
        auth: (values) => rep.one(sql.auth, values),
        find: (values) => rep.one(sql.find, values)
    }
}
