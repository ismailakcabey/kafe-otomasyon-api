// import moduls
import express from "express";
import tableModel from '../models/tableModel.js'

const router = express.Router();


// get function
router.get('/',async(req,res)=>{
    try {
        const tables = await tableModel.find();
        console.log(tables)
        return res.status(200).json(tables)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const table = await tableModel.findById(id);
        console.log(table)
        return res.status(200).json(table)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

// post function
router.post('/',async(req,res)=>{
    try {
        const table = await tableModel.create(req.body)
        console.log(table)
        return res.status(200).json(table)
    } catch (error) {
        return res.status(404).json("HATA"+{message : error})
    }
})

// delete function
router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const table = await tableModel.findByIdAndDelete(id,)
        console.log(table)
        return res.status(202).json(table)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})



// update function
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {
            isWaiterNumber,
            isActive,
            products,
            orderPrice
        } = req.body
        const updateTable = await tableModel.findByIdAndUpdate(id, {
            isWaiterNumber,isActive,orderPrice , products
        }, { new: true })
        console.log(updateTable)
        return res.status(200).json(updateTable)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})




// export router
export default router