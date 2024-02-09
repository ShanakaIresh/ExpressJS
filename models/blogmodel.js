const db = require('../Config/db')


class blog {
    constructor() {

    }
    async getblogs() {
        const resData = await db.execute('SELECT * FROM `blogs`').then((data) => {
            return data[0]
        }).catch((err) => {
            return err
        })
        return resData
    }
    async postblogs(data) {
        const query = `INSERT INTO blogs
                    (Blog_name,Blog_content,Blog_author) 
                    VALUES 
                    ("${data.Blog_name}",
                    "${data.Blog_content}",
                    " ${data.Blog_author}");
        `
        const resData = await db.execute(query).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
        return resData
    }
}

module.exports = { blog }