// const {db}=require('../db/db')
// const {expense}=require('../model/expense/expnese')
// const {category}=require('../model/expense/category')
// const {Approval_history}=require('../model/expense/Approval_history')
// const {advance_option}=require('../model/expense/advance_option')
// const { eq } = require('drizzle-orm')

// const new_expense=async(req,res)=>{
//     try{
//         const {id}=req.user
//         const {amount,date,merchant,category_id,business_purpose,adv_option}=req.body;
//         let opt=null;
//         if(adv_option){
//             const {project,pay_met,loc,attendee,billable_client}=req.body;
            
//         }

//         await db.transaction(async(table)=>{
//             const result=await table.insert(expense).values({
//                 emp_id:id,
//                 amount:amount,
//                 date:date,
//                 merchant:merchant,
//                 cat_id:category_id,
//                 business_purpose:business_purpose,
//                 adv_opt:opt,
//                 status:'Pending',
//                 priority:'Low',
//                 compliance:'Compliant',
//                 next_level:'Validator',
//             }).returning({exp_id})
//             const sta=await table.insert(status_time_line).values({
//                 emp_id:id,
//                 exp_id:result,
//                 status:'Submited',
//             })
//         })


//     }catch(err){
//         res.status(500).json({
//             msg:"internal server error"
//         })
//     }
// }

// const my_exp=async(req,res)=>{
//     try{
//         const {id}=req.user
//         const result=await db.select().from(expense).where(eq(expense.emp_id,id))
//         if(!result){
//             return res.status(200).json({
//                 msg:'the expenses empty'
//             })
//         }
//         res.status(201).json({
//             msg:result
//         })
//     }catch(err){
//         res.status(500).json({
//             msg:'internal server error'
//         })
//     }
// }

// const show_particuler_expense=async(req,res)=>{
//     try{
//         const {id}=req.params
//         await db.transaction(async(table)=>{
//             const exp=await table.select().from(expense).where(eq(expense.exp_id,id))
//             if(!exp){
//                 return res.status(404).json({
//                     msg:'The expense not found'
//                 })
//             }
//             const status=await table.select().from(status_time_line).where(eq(status_time_line.exp_id,id))
//             if(!status){
//                 return res.status(404).json({
//                     msg:'The expense not found'
//                 })
//             }
//             res.status(200).json({
//                 msg:'expense',
//                 data:{
//                     exp_detail:exp,
//                     status_detail:status
//                 }
//             })
//         })
//     }catch(err){
//         res.status(500).json({
//             msg:'internal server error'
//         })
//     }
// }

// module.exports={new_expense,my_exp,show_particuler_expense}