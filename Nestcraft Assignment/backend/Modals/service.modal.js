import mongoose, { Schema } from "mongoose";

const Service = new Schema({
    services : {
        type : String , 
        required : true
    },
    category : {
        // type : mongoose.Schema.Types.ObjectId,
        // ref : 'category'
        type : String ,
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    duration : {
        type : Number , 
        required : true
    },
    gender : {
        type : String , 
        reuired : true
    }


},{
    timestamps:true

}
)

export default mongoose.model('service',Service)