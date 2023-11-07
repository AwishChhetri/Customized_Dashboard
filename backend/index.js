const express = require('express')
const cors = require('cors');
const mongoose=require('mongoose')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())




mongoose.connect("mongodb+srv://UIPersonalization:yZ5fNmDzLaCY1HAW@cluster0.absh9oa.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
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
    },
    themeColor1:{
        type:String,
        default:"blue",
    },
    themeColor2:{
        type:String,
        default:"red",
    },
    themeColor3:{
        type:String,
        default:"white",
    }

},

{
    timestamps:true
});

const User=new mongoose.model('User', userSchema);
 
app.post('/register', async(req, res) => {
    console.log(req.body);
    const newEmail=await User.findOne({email:req.body.email});
    
    if(!newEmail){
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          });
        
          newUser.save()
            .then(() => {
              console.log('User saved successfully');
              res.status(200).json({ msg: "Success" });
            })
            .catch((err) => {
              console.log('Error saving user:', err);
              res.status(500).json({ msg: "Error" });
            });

    }else{
        res.status(300).json({ msg: "Email Already Exist!" });
    }
  });


app.post("/login",async(req,res)=>{
    console.log("This is the login:",req.body)
    const result=await User.findOne({email:req.body.email});
    console.log(result)
    if(!result)
    {
      console.log("Not registered")
      res.status(404).json({msg:"Not registered"})
    }
    else
    { 
        if(result.password==req.body.password)
        {
            res.status(200).json({id:result._id})
        }
        else
        {
            res.status(400).json({msg:"Wrong Password"})
        }

    } })
  

app.post('/colors', async (req, res) => {
    console.log("body color = ",req.body.backgroundColor)
    try {
        const update = await User.updateMany(
            { _id: req.body.userId },
            { $set: { 
                    buttonBackgroundColor: req.body.buttonbackgroundColor,
                    textColor: req.body.textColor, 
                    headerBackgroundColor:req.body.headerBackgroundColor,
                    footerBackgroundColor:req.body.footerBackgroundColor,
                    radioButtonColor:req.body.radioButtonColor,
                    dropDownButtonColor:req.body.dropDownButtonColor,
                    themeColor1:req.body.themeColor1,
                    themeColor2:req.body.themeColor2,
                    themeColor3:req.body.themeColor3,
                } 
            }
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
    res.json(result).status(200)
    console.log(result)
});






const server=app.listen(port,()=>{
        console.log("Server running at ",port)
})





module.exports = { app, server, User};


