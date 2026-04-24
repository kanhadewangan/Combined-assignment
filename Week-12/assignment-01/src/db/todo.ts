

import { client } from "..";
import { QueryResult } from "pg";

interface TODO {
    id: number;
    title: string;
    description: string;
    done: boolean;
    // Additional properties if present in your database schema
}
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

export async function createTodo(
  userId: number,
  title: string,
  description: string
) {

  const res = await client.query( 
    `insert into todos (user_id, title, description) values ($1, $2, $3) returning *`,
    [userId, title, description]
  )
  console.log(res.rows[0]);
  return res.rows[0];

}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */


export async function updateTodo(todoId: number) {
  const res = await client.query(`select  * from todos where id = $1  `,[todoId]);
  const todo = res.rows[0];
  if (!todo) {
    throw new Error('Todo not found');
  }
  const updatedRes = await client.query(`update todos set done = true where id = $1 returning *`, [todoId]);
  return updatedRes.rows[0];
  
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */

export async function getTodos(userId: number) {
  const res = await client.query(`select * from todos where user_id = $1`, [userId]);
  return res.rows;
}
