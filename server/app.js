require("express-async-errors");
const express = require('express');
const app = express();

require('./utils/logging');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const db = require('./database/mysql');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(routes);

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// default port
const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});

