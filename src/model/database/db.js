import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "4PZot5mh3bKn3yK.root",
  password: "LV6QoKgxZ9FEa1Cs",
  database: "users",
  ssl: { rejectUnauthorized: false },
  queueLimit: true,
  connectionLimit: 10,
});

export default db;
