import { client } from '../index';

export async function createUser(username: string, password: string, name: string) {
    const res = await client.query( ` insert into users ( username, password, name) values ($1, $2 , $3) returning *`, [
        username,
        password,
        name
    ])
    return res.rows[0];
  
}

export async function getUser(id: number) {
    const res = await client.query( ` select * from users where id = $1`, [id]);
    return res.rows[0];  
}