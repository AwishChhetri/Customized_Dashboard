const express = require('express')
const cors = require('cors');


const app = express()
const port = 5000

//Middleware
app.use(express.json())
app.use(cors())


app.post('/register',(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    console.log(username,email,password)
    res.json({msg:"Success"})
})

app.get('/',(req,res)=>{
    res.send("HELLO, Try Route '/register'")
})






app.listen(port,(err)=>{
    if(err){
        console.log("Error in Connecting")
        return
    }
    else
        console.log("Server running at ",port)
})