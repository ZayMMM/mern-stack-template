import mysql from  'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'test'
})


async function connect() {
    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err) throw err

        console.log('The solution is: ', rows[0].solution)
    })

    connection.end();
}

export default connect;