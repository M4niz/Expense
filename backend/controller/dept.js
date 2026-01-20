const { eq } = require('drizzle-orm')
const {db}=require('../db/db')
const {dept}=require('../model/user/dept')

const add_dept=async(req,res)=>{
    try{
        const {dept_id,dept_name}=req.body
        if(!dept_id||!dept_name){
            return res.status(400).json({
                msg:'Invalid'
            })
        }
        const value=await db.insert(dept).values({deptartment_id:dept_id,name:dept_name})
        if(!value){
            res.status(400).json({
                msg:"Something Went Wrong"
            })
            return
        }
        res.status(200).json({
            msg:"Added the department"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const delete_dept=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            res.status(404).json({
                msg:"Invalid data"
            })
            return
        }
        const value=await db.delete(dept).where(eq(dept.deptartment_id,id))
        if(!value){
            res.status(404).json({
                msg:"Invalid data's"
            })
            return
        }
        res.status(200).json({
            msg:"Data Deleted"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"Internal server error"
        })
    }
}

module.exports={add_dept,delete_dept}