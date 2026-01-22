const express=require('express')
const router=express.Router()
const {create_workflow}=require('../controller/workflow')
const { token_decode } = require('../midleware/jwt')

router.route('/new_workflow').post(token_decode,create_workflow)

module.exports=router