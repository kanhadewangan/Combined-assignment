import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
 const DB_URL = "postgresql://postgres:postgres@localhost:5432/postgres";

const client = new Pool(DB_URL);

export default client;