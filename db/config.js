const config = process.env.DB_CONFIG || {
    host: "localhost",
    port: 5432,
    database: "kruzit-dev",
    user: "kruzit"
}

module.exports = config
