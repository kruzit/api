INSERT INTO messages (
    x, 
    y,
    content,
    post_by,
    post_date
)
VALUES (
    ${x},
    ${y},
    ${content}, 
    ${post_by}, 
    ${post_date}
)

RETURNING x, y
