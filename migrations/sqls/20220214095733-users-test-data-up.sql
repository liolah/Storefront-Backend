INSERT INTO
  users (first_name, last_name, password_digest)
SELECT
  'user_' || seq,
  'blablabla-+-' || seq,
  '$2b$10$EaZJo2x57JwyzlCj2BSFbuNRqXobjigC0B0M0BMiJXuQqLfo1DHtK'
FROM
  generate_series(1, 10) seq;

-- -- I had to change them because I don't have time to create a custom test function that ignores the value of the last names and passwords in the User object when testing the index method.
-- left(md5(random()::text), 10),
-- md5(random()::text)