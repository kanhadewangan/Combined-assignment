import { client } from '../index';

export async function createPost(userId: number, content: string) {
    const res = await client.query( ` insert into posts (user_id, content) values ($1, $2) returning *`, [
        userId,
        content
    ]);
    return res.rows[0];
}

export async function likePost(userId: number, postId: number) {
    const res = await client.query( ` insert into likes (user_id, post_id) values ($1, $2) returning *`, [
        userId,
        postId
    ]);
    return res.rows[0];
 
}

export async function getFeed() {
   const res = await client.query( ` select posts.id, posts.content, 
    users.name, users.username, count(likes.id) as like_count from posts 
    left join users on posts.user_id = users.id 
    left join likes on posts.id = likes.post_id group by posts.id, users.name, 
    users.username order by posts.id desc`);
   return res.rows;
}