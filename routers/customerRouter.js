// import moduls
import express from "express";
import customerModel from '../models/customersModel.js'

const router = express.Router();

// get function
router.get('/',async(req,res)=>{
    try {
        const users = await customerModel.find();
        console.log(users)
        return res.status(200).json(users)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})



// change Name
const changeName = (firstName)=>{
    if(firstName == "try"){
        return "change successes"
    }
}

// post function
router.post('/',async(req,res)=>{
    try {
        const user = await customerModel.create(req.body)
        console.log(user)
        user.name.firstName = changeName(user.name.firstName)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json("HATA"+{message : error})
    }
})

// delete function
router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const customer = await customerModel.findByIdAndDelete(id,)
        console.log(customer)
        return res.status(202).json(customer)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

// put function
router.put('/update/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const {
            
            phoneNumber ,
                name:{
                    firstName,
                    lastName
                } ,
                mail:{
                    eMail ,
                    password 
                }
                
            
        } = req.body
        const updateCustomer = await customerModel.findByIdAndUpdate(id,{
            phoneNumber , firstName , lastName , eMail , password
        }, {new:true})
        console.log(updateCustomer)
        return res.status(200).json(updateCustomer)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

export default router