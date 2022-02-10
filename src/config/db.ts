import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const env = process.env;

const db = new Pool({
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DB,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASS,
});

export default db;
