const express = require('express');
const  router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose =require('mongoose');
const db="mongodb+srv://imran999:uzYKcizOlawRYIu2@cluster0.sihejyq.mongodb.net/?retryWrites=true&w=majority";
const  User = require('../models/user');
mongoose.connect(db,err=>{
   if(err){
      console.error('Error'+err)
   }else{
      console.log('conneted to mongo db')
   }
})
router.get('/',(req,res)=>{
   res.send('Form api route')
})
router.post('/register',(req,res)=>{
   let userData = req.body
   let user = new User(userData)
   user.save((err,registeredUser)=>{
     if(err){
      console.log(err)
     }else{
      let payload = {subject: registeredUser._id}
      let token =jwt.sign(payload,'secretKey')
      res.status(200).send({token})

     }
   })
})
router.post('/login',(req,res)=>{
   let userData = req.body
   User.findOne({email:userData.email},(error,user)=>{
      if(error){
         console.log(error)
      }else{
         if(!user){
            res.status(401).send('Invalid email')
         }else{
            if(user.password != userData.password){
               res.status(401).send('Invalid passwrod')
            }else{
              let payload ={subject:user._id}
              let token =jwt.sign(payload,'secretKey ')
               res.status(200).send({token})
            }
         }
      }
   })

})
router.get('/events',(req,res)=>{
   let events =[
      {
         "_id":"1",
         "name":"Auto Expo",
         "description":"lorem ipsum",
         "date":"2022-04-12"
      },
      {
         "_id":"2",
         "name":"imran",
         "description":"lorem ipsum",
         "date":"2022-04-2"
      },
      {
         "_id":"3",
         "name":"sh",
         "description":"xyz ipsum",
         "date":"2022-04-1"
      },
   ]
   res.json(events)
})
router.get('/special',(req,res)=>{
   let events =[
      {
         "_id":"1",
         "name":"Auto Expo",
         "description":"lorem ipsum",
         "date":"2022-04-12"
      },
      {
         "_id":"2",
         "name":"imran",
         "description":"lorem ipsum",
         "date":"2022-04-2"
      },
      {
         "_id":"3",
         "name":"sh",
         "description":"xyz ipsum",
         "date":"2022-04-1"
      },
   ]
   res.json(events)
})
module.exports = router