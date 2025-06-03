import User from "../models/userModel";
import { errorResponse, successResponse } from "../utils/helper";

export const register = async (req,res) =>{
    try{
        const {email} = req.body;
        const isEmailExist = await User.findOne({email});
        if(isEmailExist) return errorResponse(res,400,{message:'user already exits please login'})
        const user = await User.create(req.body);
        successResponse(res,201,{user});
    }
    catch(err){
        errorResponse(res,500,{message:err.message});
    };
};


export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if (!user) return errorResponse(res,404,{message: 'user not found'});
        
        if (user.password !== password) return errorResponse(res,401,{message: 'password is not correct'});
         
          successResponse(res,200,{message:'suer logedin successfully'})
    }
   catch(err){
        errorResponse(res,500,{message:err.message});
   }
};