const express=require("express")
const router=express.Router()

const {createTask, getAllTAsk}=require('../controller/taskController')
const {protect}=require('../middleware/authmiddleware')
router.post("/create",protect,createTask)
router.get("/getTask",protect,getAllTAsk)
module.exports=router