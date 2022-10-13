let mysql = require('mysql2');
require('dotenv').config()

let connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    database:process.env.MYSQL_DATABASE,
    user:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD
});
connection.connect(function(err){
    if(err) throw err;
    // console.log("Connected!!");
});

module.exports = {
    db:connection
}