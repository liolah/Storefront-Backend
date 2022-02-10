CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category varchar(255)
);

-- The category could be an enum but since the categories are not decided yet, string will be used to allow the assignment of any value (of 255 chars or less).