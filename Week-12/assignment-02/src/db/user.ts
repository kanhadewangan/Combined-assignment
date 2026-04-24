import { client } from "..";
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */

export async function createUser(
    username: string,
    password: string,
    name: string
  ) {
    const res = await client.query(` insert into users (username, password, name) values ($1, $2 , $3)`, [
      username,
      password,
      name
    ]);
    return { username, password, name };
 
  }
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */


export async function getUser(userId: number) {
  const res = await client.query(` select * from users where id = $1`, [userId]);
  return res.rows[0];

}

