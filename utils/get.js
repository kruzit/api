const get = (app) => (url, handler) => {
    app.get(url, (req, res) => {
        handler(req)
            .then((data) => {
                res.json({
                    success: true,
                    data
                })
            })
            .catch((error) => {
                res.json({
                    success: false,
                    error: error.message || error
                })
            })
    })
}

module.exports = get
