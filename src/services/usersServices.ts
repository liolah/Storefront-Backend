import db from '../config/db';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../@types/users';

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS as string);
const pepper = process.env.BCRYPT_PASSWORDS;

function encryptPassword(password: string): string {
  return bcrypt.hashSync(password + pepper, saltRounds);
}

async function authenticate(id: string, password: string): Promise<string | null> {
  const conn = await db.connect();
  const sql = `SELECT password_digest FROM users WHERE id = '${id}'`;
  const result = await conn.query(sql);

  if (result.rows.length) {
    const user = result.rows[0];

    if (bcrypt.compareSync(password + pepper, user.password_digest)) {
      return jwt.sign(user, process.env.TOKEN_SECRET as string);
    }
  }
  return null;
}

export { encryptPassword, authenticate };
export default { encryptPassword, authenticate };
