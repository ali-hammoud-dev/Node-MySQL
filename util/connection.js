const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "p@ssw0rd",
  });

  module.exports = connection.promise();