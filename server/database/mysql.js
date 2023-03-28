const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'eighti_access_control',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
});

const connectDB = connectionPool.query('SELECT SYSDATE()', (err, results, fields) => {
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
})

 module.exports= {
    connectionPool,
    connectDB
 };
