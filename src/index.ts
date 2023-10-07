import express from 'express'

const app = express()

app.get('/hello', function(req, res) {
    res.send('hello world!!')
})

app.listen(3000, () => {
    console.log('The server is running at http://localhost:3000')
})
