import User from "../models/userModel";

export const register = async (req,res) =>{
    try{
        const user = User.create(req.body);
    }
    catch(err){}
}