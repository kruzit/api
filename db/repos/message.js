const sql = require("./../sql").message

module.exports = (rep, pgp) => {
    return {
        add: (values) => rep.one(sql.add, values),
        find: (values) => rep.any(sql.find, values)
    }
}
