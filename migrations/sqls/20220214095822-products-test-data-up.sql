INSERT INTO
  products (name, price, category)
SELECT
  'product_' || seq,
  floor(random() * 100 + 1),
  CASE
    (RANDOM() * 3) :: INT
    WHEN 0 THEN 'Healing potions'
    WHEN 1 THEN 'Poisons'
    WHEN 2 THEN 'Power ups'
    WHEN 3 THEN 'Gifts'
  END
FROM
  generate_series(1, 10) seq;