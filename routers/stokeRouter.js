// import moduls
import express from "express";
import stokModel from "../models/stokModel.js";


const router = express.Router();


// get function
router.get('/',async(req,res)=>{
    try {
        const stoks = await stokModel.find();
        console.log(stoks)
        return res.status(200).json(stoks)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const stok = await stokModel.findById(id);
        console.log(stok)
        return res.status(200).json(stok)

    } catch (error) {
        return res.status(404).json({message : error})
    }
})

// post function
router.post('/',async(req,res)=>{
    try {
        const stok = await stokModel.create(req.body)
        console.log(stok)
        return res.status(200).json(stok)
    } catch (error) {
        return res.status(404).json("HATA"+{message : error} + error)
    }
})

// delete function
router.delete('/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const stoke = await stokModel.findByIdAndDelete(id,)
        console.log(stoke)
        return res.status(202).json(stoke)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

// put function
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {
            price,

            piece,
            name, 
        } = req.body
        const updateStok = await stokModel.findByIdAndUpdate(id, {
            price,

            piece,
            name,
        }, { new: true })
        console.log(updateStok)
        return res.status(200).json(updateStok)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// export router
export default router