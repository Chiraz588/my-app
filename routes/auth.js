const express=require("express")
const { SignUp, SignIn,Invitedreg } = require("../controllers/auth")
const { isAuth } = require("../middlewares/auth")
const { RegisterValidation, Validation, LoginValidation,InvitedValidation } = require("../middlewares/Validation")

const router=express.Router()

//SingUP
//post req.body

router.post('/SignUp',RegisterValidation,Validation,SignUp)
//Sign In 
//post req.body
router.post('/SignIn',LoginValidation,Validation,SignIn)
//invitedreg
//post req.body
router.post('/Invitedreg',InvitedValidation,Validation,Invitedreg)
//current
//get req.headers

router.get('/current',isAuth, (req,res)=>res.send({user:req.user}))


module.exports=router