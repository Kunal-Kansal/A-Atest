const express = require('express')
const app = express()
const port = 8000
const bodyparser = require('body-parser')
const ID = require('./schema')

app.use(express.json());

app.post('./auth/signup/',(req,res)=>{
    const{login,password} = req.body;
    if(!login || !password){
        if(!login){
            res.status(400).json({message:"no login id"})
        }
        if(!password){
            res.status(400).json({message:"no password"})
        }
    }
    ID.create({
        login:login,
        password:password
    },(err,newID)=>{
        if(err)res.status(400).json({message:"error"})
        else{
            newID.save()
            res.status(200).json({status:"new Id added",result : newID})
        }
    })
})

app.post('./auth/login',async (req,res) =>{
    const{login,password} = req.body;
    if(!login || !password){
        if(!login){
            res.status(400).json({message:"no login id"})
        }
        if(!password){
            res.status(400).json({message:"no password"})
        }
    }
    else{
        res.status(200).json({message:"you are given the access token"})
    }
})


app.listen(port,()=>{console.log(`server is running on ${port} port`)})

module.exports = app;