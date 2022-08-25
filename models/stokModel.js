// import moduls
import mongoose from "mongoose";


// Stok Schema
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