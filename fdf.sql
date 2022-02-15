INSERT INTO
  users (first_name, last_name, password_digest)
VALUES
  (
    'Hesham',
    'Hany',
    '$2b$10$R5ozPcC460otaGshbHsLcuu2bN10CEItDkziu4dTz9Bj7sieq0VJi'
  ) RETURNING id,
  first_name AS firstName,
  last_name AS lastName,
  password_digest;