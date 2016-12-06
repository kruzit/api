const uuid = require("node-uuid")

const db = require("./../db")

const auth = (req, res, next) => {
    const baseUrl = req.protocol + "://" + req.get("host")

    const noCredentialsError = {
        success: false,
        status: 400,
        error: "No credentials sent"
    }

    // If no Authorization Header return error
    if (!req.headers.authorization) {
        return res.json(noCredentialsError)
    }

    // Decode Authorization Header
    const encoded = req.headers.authorization.split(" ")[1]
    const decoded = new Buffer(encoded, "base64").toString("utf8")

    const device_uuid = decoded.split(":")[0]
    const api_key = decoded.split(":")[1]

    console.log({ device_uuid, api_key })

    if (!device_uuid) {
        return res.json(noCredentialsError)
    }

    // Check credentials in DB
    db.one("SELECT 1 FROM users WHERE device_uuid = '" + device_uuid + "'")
        .then((...args) => {
        // If device_uuid already in DB
            // Compare API key with DB
            db.one("SELECT 1 FROM users WHERE device_uuid = '" + device_uuid + "' AND api_key = '" + api_key + "'")
                .then(() => next())
                .catch((err) => {
                // If keys don't match return error
                    return res.json(noCredentialsError)
                })
        })
        .catch((err) => {
        // Else 
            // Create new API key
            const api_key = uuid.v1()

            // Save in DB
            db.none("INSERT INTO users (device_uuid, api_key) VALUES (${device_uuid}, ${api_key})", { device_uuid, api_key })
                .then(() => {
                    // Return API key
                    return res.json({
                        success: true,
                        data: [{
                            "device_uuid": device_uuid,
                            "api_key": api_key
                        }]
                    })
                })
                .catch((err) => {
                    console.log(err)
                    next(err)
                })
        })
}

module.exports = auth
