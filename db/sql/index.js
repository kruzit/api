const sql = require("./../../utils/sql")

module.exports = {
    user: {
        add: sql("user/add.sql")
    },
    message: {
        add: sql("message/add.sql"),
        find: sql("message/find.sql")
    }
}
