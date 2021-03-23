const express = require('express');
const mongoose = require('mongoose')
const app = express();
const postsRoute = require('./routes/post')
const homeRouter = require('./routes/home')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


// Middleware
app.use(cors())
app.use(bodyParser.json())

//Import routes
// app.use('/',()=>{
//     res.json(console.log("test"))
    
// })
app.use('/', homeRouter)
app.use('/posts', postsRoute)



// DB Connect
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true  }, ()=>{
    console.log('connected to DB')
})


app.listen(3000)