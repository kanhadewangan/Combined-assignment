import { client } from '../index';

function transformTask(row: any) {
    return {
        id: row.id,
        projectId: row.project_id,
        title: row.title,
        completed: row.completed,
        due_date: row.due_date
    };
}

export async function createTask(projectId: number, title: string, dueDate: string) {
    const res = await client.query(` insert into tasks (project_id, title, due_date) values ($1, $2, $3) returning *`, [
        projectId,
        title,
        dueDate
    ]);
    return transformTask(res.rows[0]);
  
}

export async function updateTask(taskId: number, completed: boolean) {
    const res = await client.query(`update tasks set completed = $1 where id = $2 returning *`, [
        completed,
        taskId
    ]);
    return transformTask(res.rows[0]);
  
}

export async function getTasks(projectId: number) {
    const res = await client.query(` select * from tasks where project_id = $1`, [projectId]);
    return res.rows.map(transformTask);
}