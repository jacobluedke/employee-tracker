const util = require('util');
const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Tgaznala1!',
        database: 'departments_db'
    },
    console.log('Connected to departments_db database')
);

connection.connect()
// 
connection.query = util.promisify(connection.query)

module.exports = connection;