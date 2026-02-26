//HTTP DEEP DIVE//Authentication page backendd
console.log("Welcome");

const {UserModel,TodoModel}=require("./db"); 
const bcrypt=require("bcrypt");
const a=require("mongoose");
a.connect("mongodb+srv://gagan_dbuser:Gagan2005@cluster0.sjhkmmw.mongodb.net/harkiratcourse?retryWrites=true&w=majority");

const express=require("express");
const jwt=require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const secretkey="thisistheend"
const app=express();
const users=[];
function generateTokens(){
    return Math.random();
}
app.get("/",function(req,res){
    res.sendFile("15.html",{root:__dirname});
})
app.use(express.json());
app.post("/signup", async function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password; 
    const hashedPassword= await bcrypt.hash(password,4);
    console.log(hashedPassword);
    await UserModel.create({
        name:name,
        email:email,
        password:hashedPassword
    })
    //users.push({username,password});
    res.json({message:"Your account is registered."});
})
app.post("/signin",async function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const user= await UserModel.findOne({
        name:name,
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id
        },secretkey);
        res.json({
            token:token
        })
    }
    else {
        res.json("Invalid credentials");
    }/*
    let a=false;
    let index=-1;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            a=true;
            index=i;
            break;
        }
    }
   if(a==false){
        return res.json({message:"Invalid credentials or You are not registered"});
    }
    if(a==true){
        const token=jwt.sign({username:username},"secretkey")
        users[index].token=token;
        return res.json({message:"You are signed in.",token:token});
    }*/

})
//to show the details by finding the tokwn number in database(nakli)
app.get("/me",function(req,res){
    let token=req.headers.token;
    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            return res.json({username:users[i].username,password:users[i].password});
}}})
//to show thw details of user with jwt key without hutting the sasta database
app.get("/mejwt",function(req,res){
    const token=req.headers.token;
    const decode=jwt.verify(token,secretkey);
    return res.json(decode);
})
app.listen(3000);