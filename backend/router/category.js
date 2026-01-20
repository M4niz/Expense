const express=require('express')
const router=express.Router()
const {cre_category}=require('../controller/category')
const {token_decode}=require('../midleware/jwt')

router.route('/new_category').post(cre_category)

module.exports=router