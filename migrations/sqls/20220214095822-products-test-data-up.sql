INSERT INTO
  products (name, price, category)
SELECT
  'product_' || seq,
  -- floor(random() * 100 + 1),
  47,
  CASE
    WHEN seq < 3 THEN 'Healing potions'
    WHEN seq >= 3
    AND seq < 5 THEN 'poisons'
    WHEN seq >= 5
    AND seq < 8 THEN 'Power ups'
    ELSE 'Gifts'
  END
FROM
  generate_series(1, 10) seq;