import express from 'express'
import UserRouter from './routes/users'

const app = express()

app.get('/hello', function(req, res) {
    res.send('hello world!!')
})

app.use('/users', UserRouter)

app.listen(3000, () => {
    console.log('The server is running at http://localhost:3000')
})
