const Task=require("../models/Task")

exports.createTask=async(req,res)=>{
    try{
        const task=await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            user:req.user.id
            
        })
        res.status(201).json({msg:"task created"},task)
    }catch(error){
        console.log(error)
    }
}
exports.getAllTask=async(req,res)=>{
    try{
        const tasks=await Task.find({user:req.user.id})
        res.json(tasks)
    }catch(error){

        res.status(500).json(error)
    }
}
    exports.getTaskById=async(req,res)=>{
        try{
            const task=await Task.findOne({
                _id:req.params.id,
                user:req.user.id
            })
            if(!task){
                res.status(404).json({msg:"Task not exist"})
            }
            res.json(task)
        }catch(error){
            res.status(500).json(error)
        }
    }
