const express = require('express')
const app = express()
const blogRoute = require('./Routes/blogRoute')



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(__dirname + '/public'))



app.get('/', (req, res) => {
    res.sendFile('./view/index.html', { root: __dirname })
})
app.use('/blogs', blogRoute)








app.listen(5000, 'localhost', () => {
    console.log('sever listning on port 5000')
})