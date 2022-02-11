var express = require('express')
var app = express()
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')
var routes = require('./src/routes')

var corsOptions = { // CORS 옵션
    origin: 'http://localhost:5000',
    credentials: true
}

const CONNECT_URL = 'mongodb://localhost:27017/gong'
mongoose.connect(CONNECT_URL, { // Mongo DB 서버 연결
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongodb connected ..."))
  .catch(e => console.log(`failed to connect mongodb: ${e}`))


app.use(cors(corsOptions))
app.use(express.json())
app.use(logger('tiny'))
app.use("/api", routes)

app.get('/hello',(req, res) => {
    res.send('hello world !')
})



app.use((req,res,next) => {
    res.status(404).send("Sorry can't find page")
})
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send("something is broken on server !")
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000 ...')
})