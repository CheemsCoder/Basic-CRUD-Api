const createError = require('http-errors');
const User = require('../models/user');
const {HttpCodes, CustomErrors}=require('../response');

async function addUser(req,res,next) {
    var body = req.body;
    
    const user= new User(body);
    user.save()
      .then((result)=>{
        res.status(HttpCodes.OK).send({success: true, Response: result, message: 'save successfull'});
      })
      .catch((error)=>{
        res.status(HttpCodes.BAD_REQUEST).send({success: false, Error: error, message: 'save failed'});
      });
}

async function getUser (req,res,next) {
    var user_id = req.body.user_id
	User.findOne({user_id}).then((result) => {
		res.status(HttpCodes.OK).send({success: true, Response: result, message: 'fetch successfull'});
      })
      .catch((error)=>{
        res.status(HttpCodes.BAD_REQUEST).send({success: false, Error: error, message: 'fetch failed'});
      });
}

async function getAllUser(req,res,next) {
    console.log("YES")
    User.find()
      .then((result)=>{
        res.status(HttpCodes.OK).send({success: true, Response: result, message: 'fetch successfull'});
      })
      .catch((error)=>{
        res.status(HttpCodes.BAD_REQUEST).send({success: false, Error: error, message: 'fetch failed'});
      });
}

async function updateUser (req,res,next) {
    const update = req.body;
	const id = req.body.user_id
    console.log(id)
	User.findOneAndUpdate({user_id:id},{$set: update},{new:true}).then((result) => {

		res.status(HttpCodes.OK).send({success: true, Response: result, message: 'update successfull'});
      })
      .catch((error)=>{
        res.status(HttpCodes.BAD_REQUEST).send({success: false, Error: error, message: 'update failed'});
      });
}

async function deleteUser(req,res,next) {
	const user_id = req.body.user_id
    
	User.findOneAndDelete({user_id})
    .then((result)=>{
        res.status(HttpCodes.OK).send({success: true, Response: result, message: 'Delete successfull'});
    })
    .catch((error)=>{
        res.status(HttpCodes.BAD_REQUEST).send({success: false, Error: error, message: 'Delete failed'});
      });

}


module.exports = {
	addUser, getUser, getAllUser, deleteUser, updateUser
}