import express from 'express'
import UserRouter from './routes/users'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors()) // support cors request from the frontend project
app.use(bodyParser.json()) // support JSON-encoded body


app.get('/hello', function(req, res) {
    res.send('hello world!!')
})

app.use('/users', UserRouter)

app.listen(3000, () => {
    console.log('The server is running at http://localhost:3000')
})
