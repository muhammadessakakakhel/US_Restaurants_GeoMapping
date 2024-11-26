const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Required for AWS RDS
    },
});

// This is the serverless function handler
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await pool.query('SELECT * FROM restaurant_locations2');
            res.status(200).json(result.rows); // Return rows as JSON
        } catch (error) {
            console.error('Error fetching restaurants:', error.message);
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
