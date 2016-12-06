SELECT 1
FROM users
WHERE device_uuid = ${device_uuid}
    AND api_key = ${api_key}
