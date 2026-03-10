const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const connectDB=require('./config/db')
app.use(express.json())

// const connectDB=async()=>{
//     try{
//         const con=await mongoose.connect("mongodb+srv://Aneesha:Aneesha11@cluster0.csfqcwy.mongodb.net/?appName=Cluster0")
//         console.log("mongoDb connected successfully")
//          }catch(error){
//             console.log(error)
//     }
// }
connectDB()
app.use('/api/auth',require("./routes/authRoutes"))
app.use('/api/task',require("./routes/taskRoutes"))
app.get('/api',(req,res)=>{
    res.send('Hello from Express framework')

})


app.listen(4000,()=>{
    console.log('server running on 4000')
})
