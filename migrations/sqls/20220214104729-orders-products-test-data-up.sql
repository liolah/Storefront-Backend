INSERT INTO
  orders_products (order_id, product_id, quantity)
SELECT
  generate_series(1, num),
  CASE
    WHEN num < 11 THEN num
    ELSE 7
  END,
  floor(random() * 35 + 1)
FROM
  generate_series(1, 20) num;