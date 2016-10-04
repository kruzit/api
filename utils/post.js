const post = (app) => (url, handler) => {
    app.post(url, (req, res) => {
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

module.exports = post
