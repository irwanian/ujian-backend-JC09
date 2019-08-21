var express = require('express')
var router = express.Router()

const {categoriesController} = require('../controllers')

router.get('/getcategories', categoriesController.getCategories)
router.post('/addcategories', categoriesController.addCategories)
router.delete('/deletecategories/:id', categoriesController.deleteCategories)
router.put('/editcategories/:id', categoriesController.editCategories)

module.exports = router