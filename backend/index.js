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
   
    buttonBackgroundColor:{
        type:String,
        default: "Blue"
    },
    textColor:{
        type:String,
        default: "Black"
    },
    headerBackgroundColor:{
        type:String,
        default:"white"
    },
    footerBackgroundColor:{
        type:String,
        default:"white"
    },
    radioButtonColor:
    {
        type:String,
        default:"white"
    },
    dropDownButtonColor:{
        type:String,
        default:"white"
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
            res.status(200).json({id:result._id})
        }
        else{
            res.status(404).json({msg:"Wrong Password"})
        }

    } })
  
app.get('/hello',(req,res)=>{
    res.send("HELLO")
})

app.post('/colors', async (req, res) => {
    console.log(req.body)
    try {
        const update = await User.updateMany(
            { _id: req.body.userId },
            { $set: { buttonBackgroundColor: req.body.backgroundColor, textColor: req.body.textColor, 
                headerBackgroundColor:req.body.headerBackgroundColor,
                footerBackgroundColor:req.body.footerBackgroundColor,
                radioButtonColor:req.body.radioButtonColor,
                dropDownButtonColor:req.body.dropDownButtonColor,
            } }
        );
        
        console.log('updated');
        res.status(200).json({ msg: 'Update successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});


app.get('/user/:id',async(req,res)=>{
    const userId = req.params.id
    const result=await User.findOne({_id:userId});
    res.json(result)
    console.log(result)
});






app.listen(port,(err)=>{
    if(err){
        console.log("Error in Connecting")
        return
    }
    else
        console.log("Server running at ",port)
})