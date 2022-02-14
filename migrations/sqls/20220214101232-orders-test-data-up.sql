INSERT INTO
  orders (user_id, status)
SELECT
  generate_series(1, 10),
  'Active'
;

INSERT INTO
  orders (user_id, status)
SELECT
  generate_series(1, 10),
  'Complete';