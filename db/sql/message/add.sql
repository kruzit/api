INSERT INTO message (
    location, 
    text,
    post_by,
    post_date
)
VALUES (
    ${location}, 
    ${text}, 
    ${post_by}, 
    ${post_date}
)

RETURNING location
