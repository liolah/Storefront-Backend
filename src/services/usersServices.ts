import db from '../config/db';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS as string);
const pepper = process.env.BCRYPT_PASSWORDS;

function encryptPassword(password: string): string {
  return bcrypt.hashSync(password + pepper, saltRounds);
}

function validatePassword(password: string, passwordDigest: string): boolean {
  return bcrypt.compareSync(password + pepper, passwordDigest);
}

async function authenticate(id: string, password: string): Promise<string | null> {
  try {
    const conn = await db.connect();
    const sql = ` SELECT 
                  id,
                  first_name AS "firstName",
                  last_name AS "lastName",
                  password_digest AS "passwordDigest"
                FROM
                  users WHERE id = ${id}`;

    const result = await conn.query(sql);

    if (result.rows.length) {
      const user = result.rows[0];

      if (validatePassword(password, user.passwordDigest)) {
        return jwt.sign(user, process.env.TOKEN_SECRET as string);
      }
    }
    return null;
  } catch (err) {
    throw new Error(`Auth error: ${err}`);
  }
}

export { encryptPassword, validatePassword, authenticate };
export default { encryptPassword, validatePassword, authenticate };
