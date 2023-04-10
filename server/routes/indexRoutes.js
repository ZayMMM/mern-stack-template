const express = require('express');
const router = express.Router();
const employeeRoute = require('./employeeRoutes');
const authRouter = require('./authRoutes');

router.get('/', (req, res) => {
    res.send("8i Access Control API is available !");
});

router.use("/employee", employeeRoute);
router.use("/auth", authRouter);

router.all("/*", (req, res) => {
    res.send("Page not found ...");
});


module.exports = router;