const blogModel = require('../models/blogmodel')
const blogIns = new blogModel.blog

const getblogs = async (req, res) => {
    blogIns.getblogs().then((data) => {
        res.json(data)
    })
}
const postBlogs = async (req, res) => {
    blogIns.postblogs(req.body).then((data) => {
        console.log('success')
    }).catch((err) => {
        console.log(err)
    })

}
module.exports = { getblogs, postBlogs }