const express=require("express")
const router=express.Router()

const {createTask, getAllTask,getTaskById}=require('../controller/taskController')
const {protect}=require('../middleware/authmiddleware')
router.post('/create',protect,createTask)
router.get('/getTask',protect,getAllTask)
router.get('/getTask/:id',protect,getTaskById)
module.exports=router