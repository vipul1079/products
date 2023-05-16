const express=require('express');
const userController=require('../controllers/users');

const userRouter=express.Router();


userRouter.post("/", userController.createUser)
.get('/',userController.getAllUsers)
.get('/:id',userController.getUser)
.put('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser);

exports.userRouter=userRouter;