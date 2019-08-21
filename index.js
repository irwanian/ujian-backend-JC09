
// **********************************ADD CONSTRAINT***********************************

// ALTER TABLE `moviepurwadhika`.`movcat` 
// DROP FOREIGN KEY `category key`;
// ALTER TABLE `moviepurwadhika`.`movcat` 
// ADD CONSTRAINT `category key`
//   FOREIGN KEY (`idcategory`)
//   REFERENCES `moviepurwadhika`.`categories` (`id`)
//   ON DELETE CASCADE
//   ON UPDATE CASCADE;

// **********************************ADD CONSTRAINT***********************************


var express = require('express')
var bodyParser = require('body-parser')

var port = 2000

var app = express()

app.use(bodyParser.json())

const {moviesRouter, categoriesRouter, movcatRouter} = require('./routers')

app.use('/moviepurwadhika', moviesRouter)
app.use('/moviepurwadhika', categoriesRouter)
app.use('/moviepurwadhika', movcatRouter)

app.get('/', (req,res) => {
    res.send(`<center>
                <h1>Ini Home Page</h1>
             </center>`)
})

app.listen(port, ()=> console.log('API Aktif di Port ' + port))