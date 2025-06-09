import User from "../models/userModel.js";
import { errorResponse, successResponse } from "../utils/helper.js";
import { comparePassword, hashPassword } from "../utils/auth.js";
export const register = async (req,res) =>{
    try{
        let {fullName,email,password:pss} = req.body;
        const isEmailExist = await User.findOne({email});
        if(isEmailExist) return errorResponse(res,400,{message:'user already exits please login'});
        let password = await hashPassword(pss);
        let user = await User.create({fullName,email,password});
        successResponse(res,201,{user});
    }
    catch(err){
        errorResponse(res,500,{message:err.message});
    };
};


export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        let user = await User.findOne({email});
        if (!user) return errorResponse(res,404,{message: 'user not found'});
        
        if (! await comparePassword(password,User.password)) return errorResponse(res,401,{message: 'password is not correct'});
        // if (user.password !== password) return errorResponse(res,401,{message: 'password is not correct'});
         
          successResponse(res,200,{message:'suer logedin successfully'})
    }
   catch(err){
        errorResponse(res,500,{message:err.message});
   }
};