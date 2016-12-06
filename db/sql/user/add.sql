INSERT INTO users (
    device_uuid, 
    api_key
)
VALUES (
    ${device_uuid}, 
    ${api_key}
)

RETURNING api_key
