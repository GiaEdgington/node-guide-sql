const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-mysql',
    password: '.Zaphod0216'
});

module.exports = pool.promise();