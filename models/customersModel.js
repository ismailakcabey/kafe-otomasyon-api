import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    phoneNumber : {
        type:Number,
        require:true
    },
    name:{
        firstName:{
            type:String,
            require:true
        },
        lastName:{
            type:String,
            require:true 
        }
    },
    mail:{
        eMail:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    }
})

export default mongoose.model("customer",customerSchema)