require("express-async-errors");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const routes = require('./routes/index');
//const {connectDB} = require('./database/mysql');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routes);

// default port
const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
});

