import express from 'express';
import client from '../../config/db.js';
const route = express.Router();

route.post('/submit', async (req, res) => {
    const { user_id, problem_id } = req.body;

    try {
        // Start a transaction
        await client.query('BEGIN');

        // Check if the user has already solved the problem
        const checkQuery = 'SELECT * FROM progress WHERE user_id = $1 AND problem_id = $2';
        const checkResult = await client.query(checkQuery, [user_id, problem_id]);

        if (checkResult.rows.length > 0) {
            // If the user has already solved the problem, rollback and send a response
            await client.query('ROLLBACK');
            return res.status(400).json({ message: 'Problem already solved by the user.' });
        }

        // Insert the new progress record
        const insertQuery = 'INSERT INTO progress (user_id, problem_id) VALUES ($1, $2)';
        await client.query(insertQuery, [user_id, problem_id]);

        // Commit the transaction
        await client.query('COMMIT');
        res.status(200).json({ message: 'Problem solved successfully!' });
    } catch (error) {
        // If any error occurs, rollback the transaction
        await client.query('ROLLBACK');
        console.error('Error submitting progress:', error);
        res.status(500).json({ message: 'An error occurred while submitting progress.' });
    }
});

export default route;