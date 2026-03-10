//const express=require('express')
// const app=express()
 const mongoose=require('mongoose')
// app.use(express.json())
const connectDB=async()=>{
    try{
         const con=await mongoose.connect(process.env.MONGO_URL)
       console.log("mongoDb connected successfully")
  }catch(error){
     console.log(error)
    }
}
module.exports=connectDB;