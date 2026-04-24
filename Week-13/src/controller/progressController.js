import express from 'express';
import client from '../../config/db.js';
const route = express.Router();


route.get('/progress', (req, res) => {
    const { user_id } = req.query;

const query = ` select problem_id , problem_name from progress p join problems pr on p.problem_id = pr.problem_id where user_id = $1 `;

    client.query(query, [user_id], (err, result) => {
        if (err) {
            console.error('Error fetching progress:', err);
            return res.status(500).json({ message: 'An error occurred while fetching progress.' });
        }
        res.status(200).json(result.rows);
    });
})

export default route;