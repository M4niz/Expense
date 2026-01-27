const {secure_passwprd}=require('../model/secure')
const {db}=require('../db/db')

const add_secure_details=async(next,id)=>{
    try{
        const secure=await db.insert(secure_passwprd).values({
        org_id:id,
        min_length:8,
        uppercase:true,
        req_length:true,
        req_symbol:true,
        password_exp:60,
        req_mfa:false,
        sms_auth:true,
        email_auth:true,
        authenticator_app:false,
        hardware_token:false,
        sso:true,
        identity_provider:'Azure',
        session_timeout:15,
        max_session:12,
        ip_restriction:true,
        field_level_enc:false,
        audit_log:true,
        log_retention:5
        })
        if(secure.rowCount==0){
            return false
        }
        return true
    }catch(err){
        notExists(err)
    }
}
module.exports=add_secure_details