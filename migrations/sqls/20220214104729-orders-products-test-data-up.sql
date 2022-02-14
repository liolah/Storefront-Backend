INSERT INTO
  orders_products (order_id, product_id, quantity)
SELECT
  generate_series(1, num),
  CASE
    WHEN num < 11 THEN num
    ELSE MOD(num, 11) + 1
  END,
  floor(random() * 35 + 1)
FROM
  generate_series(1, 20) num;