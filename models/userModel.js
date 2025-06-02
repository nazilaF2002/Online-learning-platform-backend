import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    lastName : {
        type :  String,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    }
});

const User = model("User",userSchema);
export default User;