import mongoose, { model,Schema } from "mongoose";

const lessonSchema = new Schema ({
    title:{
        type: String,
        required: true,
    },
    description : {
        type : String
    },
    video:{
        type:String
    },
    createdBy: {type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
}, {timestamps:true});

const Lesson = model("Lesson",lessonSchema);
export default Lesson;