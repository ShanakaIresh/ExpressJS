const displayArea = document.querySelector('.displayArea')
const subButton = document.querySelector('.btn')
const form = document.querySelector('.inputForm')



document.addEventListener('DOMContentLoaded', async (e) => {
    e.preventDefault()
    const resData = await fetch('http://localhost:5000/blogs/getblogs').then((data) => {
        return data.json()
    }).then((data) => {
        return data
    }).catch((err) => {
        return err
    })
    resData.forEach((data) => {
        let html = ''
        displayArea.innerHTML += `<p class="Bname">${data.Blog_name}</p>
                                 <p class="Bcontent">${data.Blog_content}</p>
                                <p class="Bauthor">${data.Blog_author}</p>
        `
    });
})

subButton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    fetch('http://localhost:5000/blogs/postblogs', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
            "Accept": "Application/json"
        },
        body: JSON.stringify(payload)
    })
})