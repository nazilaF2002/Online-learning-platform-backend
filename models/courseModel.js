import mongoose, { Model,Schema, model } from "mongoose";

const courseSchema = new Schema({
    title : {
        type: String,
        required : true,
    },
    description : {
        type : String,
    },
    user : [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }]
},{timestamps:true});

const Course = model("Course",courseSchema);
export default Course;