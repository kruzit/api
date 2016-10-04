INSERT INTO message (
    x, 
    y,
    text,
    post_by,
    post_date
)
VALUES (
    ${x},
    ${y},
    ${text}, 
    ${post_by}, 
    ${post_date}
)

RETURNING location
