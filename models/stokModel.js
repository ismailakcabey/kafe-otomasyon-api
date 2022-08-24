import mongoose from "mongoose";

const stokSchema = mongoose.Schema({
    
        price : {
            type:Number,
            require:false
        },
        piece:{
            type:Number,
            require:true
        },
        name:{
            type:String,
            require:false
        },
    
})

export default mongoose.model("stok",stokSchema)