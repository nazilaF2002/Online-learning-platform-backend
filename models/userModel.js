import { Schema ,model } from "mongoose";

const userSchema = new Schema({
    googleId : {
        type: String,
        unique:true,
        sparse: true
    },
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required: function () {
            return !this.googleId;
          }
    },
   
});

const User = model("User",userSchema);
export default User;