import mongoose, { Schema } from "mongoose";

const Service = new Schema({
    services : {
        type : String , 
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    price : {
        type : Number ,
        required : true
    },
    Duration : {
        type : Number , 
        required : true
    },
    Gender : {
        type : String , 
        reuired : true
    }


},{
    timestamps:true

}
)