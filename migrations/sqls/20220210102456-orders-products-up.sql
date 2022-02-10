CREATE TABLE IF NOT EXISTS orders_products (
  order_id INT REFERENCES orders (id) ON DELETE CASCADE,
  product_id INT REFERENCES products (id) ON DELETE SET NULL,
  quantity INT NOT NULL
);