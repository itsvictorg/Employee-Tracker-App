const mysql = require('mysql2');

require('dotenv').config();

//
const connection = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',
    
    password: 'Xya.5055*',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = connection;
