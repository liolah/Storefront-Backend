import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  POSTGRES_TEST_DB_PASSWORD,
  ENV,
} = process.env;

let db = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    database: POSTGRES_DB,
    password: POSTGRES_PASSWORD,
  });;

if (ENV === 'test') {
  const db = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    database: POSTGRES_TEST_DB,
    password: POSTGRES_TEST_DB_PASSWORD,
  });
}

export default db;
