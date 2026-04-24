import express from 'express';
import client from '../config/db.js';


const app = express();
app.use(express.json());

import submitRoute from './controller/submitController.js';
import progressRoute from './controller/progressController.js';

app.use(submitRoute);
app.use(progressRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});