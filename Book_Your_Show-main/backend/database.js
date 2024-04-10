const { createPool } = require("mysql");
const dotenv = require("dotenv");

// dotenv.config({ path: "../.env" });

// Connect to the database
const pool = createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6697326",
  password: "qakWlTEGF9",
  database: "sql6697326",
  connectionLimit: 10,
});

// Perform a sample query
pool.getConnection((err, connection) => {
  if (err) {
    // Handle connection error
    console.error("Error establishing connection:", err);
    return;
  }
  console.log("Succesfully connected to MySQL database...");
  //   pool.query(
  //     `select * from Admins where adminId = ?`,
  //     [1],
  //     (err, result, fields) => {
  //       if (err) {
  //         return console.log(err);
  //       }
  //       return console.log(result);
  //     }
  //   );
});

module.exports = { pool };
