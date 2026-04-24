import { client } from '../index';

function transformProject(row: any) {
    return {
        id: row.id,
        userId: row.user_id,
        title: row.title,
        description: row.description,
        created_at: row.created_at
    };
}

export async function createProject(userId: number, title: string, description: string) {
    const res = await client.query(` insert into projects (user_id , title, description) values ($1, $2, $3) returning *`, [
        userId,
        title,
        description
    ]);
    return transformProject(res.rows[0]);
}

export async function getProjects(userId: number) {
    const res = await client.query(` select * from projects where user_id = $1`, [userId]);
    return res.rows.map(transformProject);
}
