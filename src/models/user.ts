import db from '../config/db';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
};

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
      throw new Error(`An error has occurred while retrieving user with user_id of ${id}. Error: ${err}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      const connection = await db.connect();
      // TODO: encrypt the password
      const sql = `INSERT INTO users (first_name, last_name, password) VALUES (${u.firstName}, ${u.lastName}, ${u.password})`;

      const results = await connection.query(sql);

      connection.release();

      return results.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while creating a new user. Error: ${err}`);
    }
  }

  // async update(u: User): Promise<User> {
  //   try {
  //     const connection = await db.connect();
  //     const sql = `SELECT * FROM users WHERE id =${u.id}`;

  //     const oldUser = await connection.query(sql);
  //     const user = oldUser.rows[0]; 

  //     // TODO: encrypt the user password  
  //     const updatedUser = {
  //       first_name: u.firstName || user.firstName,
  //       last_name: u.lastName || user.lastName || user.lastName,
  //       password: u.password || user.password,
  //     };

  //     const updateSql = `UPDATE users SET first_name = ${updatedUser.first_name}, last_name = ${updatedUser.last_name}, password = ${updatedUser.password} WHERE id = ${u.id} RETURNING *`;

  //     const results = await connection.query(updateSql);

  //     connection.release();

  //     return results.rows[0];
  //   } catch (err) {
  //     throw new Error(`An error has occurred while updating user with user_id of ${id}. Error: ${err}`);
  //   }
  // }
  
  async destroy(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM users WHERE id = ${id}`;

      const deletedUser = await connection.query(sql);

      connection.release();

      return deletedUser.rows[0];
    } catch (err) {
      throw new Error(`An error has occurred while deleting user with user_id of ${id}. Error: ${err}`);
    }
  }
}
