import mongoose from "mongoose";

// customer Schema
const customerSchema = mongoose.Schema({
    phoneNumber: {
        type: Number,
        require: true
    },

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },


    eMail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})

export default mongoose.model("customer", customerSchema)