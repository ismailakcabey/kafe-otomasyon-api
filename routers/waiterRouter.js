// import moduls
import express from "express";
import waiterModel from '../models/waiterModel.js'

const router = express.Router();


// get function
router.get('/',async(req,res)=>{
    try {
        const waiters = await waiterModel.find();
        console.log(waiters)
        return res.status(200).json(waiters)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const waiter = await waiterModel.findById(id);
        console.log(waiter)
        return res.status(200).json(waiter)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

// post function
router.post('/',async(req,res)=>{
    try {
        const waiter = await waiterModel.create(req.body)
        console.log(waiter)
        return res.status(200).json(waiter)
    } catch (error) {
        return res.status(404).json("HATA"+{message : error})
    }
})

// delete function
router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const waiter = await waiterModel.findByIdAndDelete(id,)
        console.log(waiter)
        return res.status(202).json(waiter)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})


// update function
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {
            waiterNumber,
            phoneNumber,
            firstName,
            lastName,
            eMail,
            password
        } = req.body
        const updateWaiter = await waiterModel.findByIdAndUpdate(id, {
            waiterNumber,
            phoneNumber,
            firstName,
            lastName,
            eMail,
            password
        }, { new: true })
        console.log(updateWaiter)
        return res.status(200).json(updateWaiter)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// export router
export default router