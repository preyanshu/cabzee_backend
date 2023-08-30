const connecttomongo=require("./db")
const express=require("express")
var cors = require('cors')

connecttomongo();
const app=express()
const port=5000; 


app.use(cors())
app.use(express.json())

//endpoints

app.use('/api/addDriver', require('./routes/addDriver.js'))
app.use('/api/addUser', require('./routes/addUser.js'))
app.use('/api/addRequest', require('./routes/addRequest.js'))
app.use('/api/fetchRequest', require('./routes/fetchRequest.js'))
app.use('/api/reqstatus', require('./routes/reqstatus.js'))




app.listen(port,()=>{
    console.log("connected succesfully at port "+ port)
})