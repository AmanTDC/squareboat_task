var mysql = require('mysql2');
//improve this to cred files
let connection = mysql.createConnection({
    host:"65.2.187.174",
    port:3306,
    database:"squareboat_task",
    user:"root",
    password:"password@root"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!!");
});

module.exports = {
    db:connection
}