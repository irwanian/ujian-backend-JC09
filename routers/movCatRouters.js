var express = require('express')
var router = express.Router()

const {movcatController} = require('../controllers')

router.get('/getmovcat', movcatController.getMovcat)
router.post('/addmovcat', movcatController.addMovcat)
router.delete('/deletemovcat/:id', movcatController.deleteMovcat)
module.exports = router