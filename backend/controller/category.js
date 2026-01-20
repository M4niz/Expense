const {db}=require('../db/db')
const {category}=require('../model/expense/category')

const cre_category=async(req,res)=>{
    try{
        // const {id}=req.user
        const {cat_name,limit,rec_req,is_active,description,id}=req.body
        if(!cat_name || !limit){
            return res.status(400).json({
                msg:'Invalid data'
            })
        }
        const result=await db.insert(category).values({cat_name:cat_name,limit:limit,description:description,rec_req:rec_req,is_active:is_active,profile_id:id})
        console.log(result," : result")
        if(!result){
            return res.status(400).json({
                msg:'Something went wrong'
            })
        }
        res.status(200).json({
            msg:'category added',
            result
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"internal server error"
        })
    }
}

module.exports={cre_category}