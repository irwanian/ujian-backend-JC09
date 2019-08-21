var mysql= require('mysql')

var conn = mysql.createConnection({
    host : 'localhost',
    user: 'irwanian',
    password : 'ramadhanideas',
    database: 'moviepurwadhika',
    port: 3306
})

module.exports = conn