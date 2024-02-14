import mongoose, { Schema } from "mongoose";

const category = new Schema({
    categoryName : {
        type : String,
        required : true,
    },
    appointmentColor : {
        type: String ,

    },
    description : {
        type : String , 
        required : true
    }
})

export default mongoose.model("category" , category)