CREATE TYPE order_status AS ENUM('Active', 'Complete');
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users (id) ON DELETE CASCADE,
  status order_status
);