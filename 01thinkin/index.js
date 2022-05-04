const express= require('express') //importing express and putting into variable/constant express
const app = express();
const bodyParser=require('body-parser')
const mongoose = require("mongoose")
const path = require("path");
const { MongoClient, ServerApiVersion } = require('mongodb')
const bcryptjs= require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const formidable = require('formidable')
const cloudinary = require('cloudinary')
app.use(express.static(__dirname+'/public'))
const cors = require('cors')
app.use(cors())
const userSchema= new mongoose.Schema(
    {
        fullname:String,
        username:String,
        password:String,
        zeroorone:String,
        email:String
        
    }
)
const userModel= mongoose.model("user", userSchema)
app.use(bodyParser.json())
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET 
});
const url=process.env.URL
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(url, (err)=>{
    if (err) {
        console.log(err.message);
        console.log("Error");
    }
    else{
        console.log("working");
    }
})
const PORT= process.env.PORT
app.listen(PORT, ()=>{console.log(`app is running on port ${PORT}`)})

app.get('/',(request,response)=>{
    response.send('Hi')
})
app.post('/signup',(request,response)=>{
    const newUserForm=request.body
    const myPlaintextPassword = newUserForm.password
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(myPlaintextPassword, salt);
        const newForm= {
            fullname: newUserForm.fullname,
            username:newUserForm.username,
            email:newUserForm.email,                
            zeroorone:newUserForm.zeroorone,
            password:hash
                        }
                        console.log(newForm)
                        userModel.find({email: newForm.email},(err,result)=>{
                            if(result.length>0){
                                console.log("Email exists")
                                response.send({message:`Email already exists.`, text: 'no'})
                            }
                            else{
                                userModel.find({username: newForm.username},(err,result)=>{
                                    if(result.length>0){
                                        console.log("Username exists")
                                        response.send({message:`Username already exists.`, text: 'no'})
                                    }
                                    else{
                                        response.send({message: 'Success', text:'yes'})
                                        let formm = new userModel(newForm)    
                                        formm.save()
                                    }
                        })                                    
                            }
                        })
})
app.post('/login',(request, response)=>{
    const loginform= request.body
    const newLogin={
        username:loginform.username,
        password:loginform.password
    }
    let found= userModel.find({username: newLogin.username},(err,result)=>{
        if (err) {
                    console.log(err.message)
                }
                else if(result.length==0){
                    console.log("Nothing")
                    response.send({message: "Tadaah! You actually have no account with me!",result})
                }
                else if(result){
                    const username=(result[0].username)
                    const passw=result[0].password;
                    const myPlaintextPassword = newLogin.password;
                    bcryptjs.hash(myPlaintextPassword, 10)
                    .then((hash) => {
                        return bcryptjs.compare(myPlaintextPassword, passw)
                    }).then((result) => {
                        if(result==true){
                            jwt.sign({username},  process.env.JWT_SECRET, function(err, token) {
                                console.log(token);
                                response.send({message:"Your login is successful!",result,token,username})
                            });
                        }
                        else{
                            response.send({message:"I don't know what's up, but your password is definitely wrong!",result})
                        }
                    })
                    // response.send({result})
                }
                else{
                response.send({message:"I don't know what's up",result})
                // response.send({result})
                }


            })
})