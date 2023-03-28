const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("8i Access Control API is available !");
});

module.exports = router;