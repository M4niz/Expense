const express=require('express')
const router=express.Router()
const {signup,login,logout,my_profile,generate_emp_id}=require('../controller/user')
const {token_decode}=require('../midleware/jwt')
const {user_overview}=require("../controller/user")
const check_user=require('../midleware/checking_user')

router.route('/signup').post(check_user('admin'),signup)
router.route('/login').post(login)
router.route('/profile').get(token_decode,my_profile)
router.route('/logout').get(logout)
router.route('/overview').get(user_overview)
router.route('/generate_id').get(token_decode,check_user('admin'),generate_emp_id)

module.exports=router