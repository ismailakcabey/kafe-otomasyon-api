// import moduls
import mongoose from "mongoose";

// table Schema
const tableSchema = mongoose.Schema({
    isWaiterNumber : {
        type:Number,
        require:false
    },
    isActive:{
        type:Boolean,
        require:true
    },
    products:
    [{
      name:{
        type:String,
        require:false
      },
      price:{
        type:Number,
        require:false
      },
      stokPiece:{
        type:Number,
        require:false
      }
    }],
    orderPrice:{
        type:Number,
        require:false
    },
    
})

export default mongoose.model("table",tableSchema)