const {db}=require('../db/db')
const {org}=require('../model/org')
const {loc}=require('../model/location')
const { eq } = require("drizzle-orm");
const add_secure_detail=require('../utils/add_security_detail')
 
const create_org=async(req,res,next)=>{
  try{
    const file=req.file
    console.log('files : ',file)
    const {
      org_name,
      industry_type,
      employee_count,
      address,
      ph_num,
      web_url,
      default_currency,
      multi_cur,
      auto_update_rate,
      ex_rate_pro,
      start_month,
      year,
      tax_jurisdiction,
      tax_cal
    }=req.body
    const id=req.user
    if(!file||!id){
      return res.status(400).json({
        msg:'Data missing'
      })
    }
    let org_id='ORG_11111'
    let value=await db.select({id:org.organization_id}).from(org)
    if(value[value.length-1]){
      
    }
    const organization=await db.insert(org).values({
      profile_id:id,
      organization_id:org_id,
      org_logo:'',
      industry_type:industry_type,
      emp_counut:employee_count,
      address:'',
      ph_num:ph_num,
      web_url:web_url,
      start_month:'',
      year:year,
      tax_jurisdiction:tax_jurisdiction,
      tax_cal:tax_cal

    })

  }catch(err){
    next(err)
  }
}

module.exports={create_org}