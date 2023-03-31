const logger = require('../utils/logging');

module.exports = (err, req, res, next) => {   
    logger.error(err.message, err) ;
    res.status(500).send("Internal server error");
}