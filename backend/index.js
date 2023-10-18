const express = require('express')
const cors = require('cors');
const mongoose=require('mongoose')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())




mongoose.connect("mongodb+srv://abishchhetri2502:HMHpKTGa4wPLkr3Y@cluster0.3igf2ot.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('connected successful')}).catch((err)=>{
        console.log(err)
})


const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        type:String
    },
    btn:{
        type:String
    }


},

{
    timestamps:true
});

const User=new mongoose.model('User', userSchema);
 
app.post('/register', (req, res) => {
    console.log(req.body);
  
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
  
    newUser.save()
      .then(() => {
        console.log('User saved successfully');
        res.json({ msg: "Success" });
      })
      .catch((err) => {
        console.log('Error saving user:', err);
        res.status(500).json({ msg: "Error" });
      });
  });


app.post("/login",async(req,res)=>{
    console.log("This is the login:",req.body)
    const result=await User.findOne({email:req.body.email});
   console.log(result)
    if(!result)
     {
      res.status(404).json({msg:"Not registered"})}
    else { 
        if(result.password==req.body.password){
            res.status(200).json(result)
        }
        else{
            res.status(404).json({msg:"Wrong Password"})
        }

    } })
  
app.get('/hello',(req,res)=>{
    res.send("HELLO, Try Route '/register'")
})

app.post('/changes',async(req,res)=>{
   
    
    const update=await User.updateOne(
            { _id: req.body._id },
            { $set: { btn: ans } }
        )
        .then(() => {
            console.log(`updated`,upadate);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    update(req.body)


       
        
})




app.listen(port,(err)=>{
    if(err){
        console.log("Error in Connecting")
        return
    }
    else
        console.log("Server running at ",port)
})