const mysql = require("mysql2");
require("dotenv").config();

// Setting up our connection information
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 8889,
        database: 'burgers_db'
    })
}

// Connecting to the database.
connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection .
module.exports = connection;