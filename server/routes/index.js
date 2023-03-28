const express = require('express');
const router = express.Router();
const employeeRoute = require('../routes/employee');

router.get('/', (req, res) => {
    res.send("8i Access Control API is available !");
});

router.use("/employee", employeeRoute);

module.exports = router;