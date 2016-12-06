const sql = require("./../../utils/sql")

module.exports = {
    user: {
        add: sql("user/add.sql"),
        auth: sql("user/auth.sql"),
        find: sql("user/find.sql")
    },
    message: {
        add: sql("message/add.sql"),
        find: sql("message/find.sql")
    }
}
