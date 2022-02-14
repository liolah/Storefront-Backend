import db from '../config/db';
import { User, InputUser } from '../@types/users';

export class UserModel {
  async index(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM users';

      const results = await connection.query(sql);

      connection.release();

      return results.rows;
    } catch (err) {
      throw new Error(`An error has occurred while retrieving users. Error: ${err}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `SELECT * FROM users WHERE id =${id}`;

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while retrieving user with user_id of: ${id}. Error: ${err}`);
    }
  }

  async create(u: InputUser): Promise<User> {
    try {
      const connection = await db.connect();
      // TODO: encrypt the password
      const sql = `INSERT INTO users (first_name, last_name, password) VALUES ('${u.firstName}', '${u.lastName}', '${u.password}') RETURNING *`;
      console.log(sql);

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while creating a new user. Error: ${err}`);
    }
  }

  async destroy(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM users WHERE id = ${id} RETURNING *`;

      const deletedUser = await connection.query(sql);

      connection.release();

      return deletedUser.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while deleting user with user_id of ${id}. Error: ${err}`);
    }
  }
}
