// import moduls
import mongoose from "mongoose";

// waiter Schema
const waiterSchema = mongoose.Schema({
    waiterNumber : {
        type:Number,
        require:true
    },
    phoneNumber : {
        type:Number,
        require:true
    },
    
        firstName:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true 
        },
    
    
        eMail:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    
})

export default mongoose.model("waiter",waiterSchema)