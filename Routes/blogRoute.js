const express = require('express')
const router = express.Router()
const blogController = require('../controller/blogController')

router.route('/getblogs').get(blogController.getblogs)
router.route('/postblogs').post(blogController.postBlogs)


module.exports = router