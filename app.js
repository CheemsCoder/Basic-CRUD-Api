const express = require('express')

require('./db/mongoose')
const { ObjectID } = require('mongodb')
const userRouter = require('./routers/userRoute')

const app = express()
const port = 3000

app.use(express.json())

app.use(userRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})