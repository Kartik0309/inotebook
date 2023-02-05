const express=require('express');
const router=express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const app = express();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');


const JWT_TOKEN="inotebook#@123"

//Create A User using: POST "api/auth/createUser"
router.post(
    '/createUser',
    // username must be an email
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user=await User.findOne({email:req.body.email});
      if(user){
        return res.status(400).json({error:"This email is associated with another user"});
      }
        const salt = await bcrypt.genSaltSync(10);
        const secpass= await bcrypt.hashSync(req.body.password, salt);
        user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass
      })
      let data={
        id:user.id,
      }
      let token = jwt.sign(data,JWT_TOKEN);
      res.json({token});
    },
  );




  //Authenticating A User using: POST "api/auth/login"
router.post(
    '/login',
    // username must be an email
    body('email').isEmail(),
    body('password').exists(),
    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {email,password}=req.body;
      let user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please Login Again with Correct Credentials"});
      }
      let result=await bcrypt.compare(password,user.password);
      if(!result)
      {
        return res.status(400).json({error:"Please Login Again with Correct Credentials"});
      }
      let data={
        id:user.id,
      }
      let token = jwt.sign(data,JWT_TOKEN);
      res.json({token});
    },
  );

module.exports=router;