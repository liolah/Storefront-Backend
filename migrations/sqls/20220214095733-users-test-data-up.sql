INSERT INTO
  users (first_name, last_name, password)
SELECT
  'user_' || seq,
  left(random() :: text, 10),
  md5(random() :: text)
FROM
  generate_series(1, 10) seq;