// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wdf1sj6wzuehlsus",
  password: "hbd94yusfhy0qi5n",
  database: "i44vq05ae07mdg07"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
