import express from 'express';
import connect from './database/mysql.js';

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send("8i Access Control API is available !");
});

// test DB connection
await connect();

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});